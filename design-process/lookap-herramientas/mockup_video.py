import numpy as np, subprocess, json, sys
from PIL import Image
S,SRC,BASE,OUT=sys.argv[1:5]
ZMAX=float(sys.argv[5]) if len(sys.argv)>5 else 1.0
W,H=2000,1116; SW,SH=384,830; PAD=10            # pantalla util del mockup: x48 y28
NF=564
fit=np.array(json.load(open(f"{S}/quad.json")))   # xl,xr,yt,yb (xl/xr poco confiables -> uso modelo)
h=fit[:,3]-fit[:,2]; s=h/h[0]
ASPECT=1125/2436
xr_norm=1000+(fit[:,1]-1000)/s
w0=h[0]*ASPECT; xr0=np.median(xr_norm[:200]); 
w=h*ASPECT; xr=1000+(xr0-1000)*s; xl=xr-w; yt=fit[:,2]; yb=fit[:,3]
print("t0 quad",xl[0].round(2),xr[0].round(2),yt[0].round(2),yb[0].round(2),"| end",xl[-1].round(2),xr[-1].round(2),yt[-1].round(2),yb[-1].round(2))
# fuente: frames de la pantalla, ya acelerados a 30 fps (NF frames) y recortados con margen
raw=np.memmap(f"{S}/screen.raw",dtype=np.uint8,mode="r").reshape(NF,SH+2*PAD,SW+2*PAD,3)
RX0,RY0,RX1,RY1=380,330,1130,800                     # region de trabajo alrededor del celu
EXPAND=0.8
dec=subprocess.Popen(["ffmpeg","-v","error","-i",BASE,"-f","rawvideo","-pix_fmt","rgb24","-"],stdout=subprocess.PIPE)
enc=subprocess.Popen(["ffmpeg","-v","error","-y","-f","rawvideo","-pix_fmt","rgb24","-s",f"{W}x{H}","-r","30","-i","-",
 "-c:v","libx264","-preset","slow","-crf","20","-pix_fmt","yuv420p","-an","-movflags","+faststart",OUT],stdin=subprocess.PIPE)
fs=W*H*3
for i in range(NF):
    buf=dec.stdout.read(fs)
    if len(buf)<fs: break
    fr=np.frombuffer(buf,dtype=np.uint8).reshape(H,W,3).copy()
    z=1.0
    if ZMAX>1.0:
        u=i/(NF-1); z=1+(ZMAX-1)*u**3*(u*(6*u-15)+10)      # smootherstep
        fr=np.array(Image.fromarray(fr).transform((W,H),Image.AFFINE,(1/z,0,W/2-W/2/z,0,1/z,H/2-H/2/z),Image.BICUBIC))
    cxz,cyz=W/2,H/2
    L,R=cxz+(xl[i]-cxz)*z,cxz+(xr[i]-cxz)*z; T,B=cyz+(yt[i]-cyz)*z,cyz+(yb[i]-cyz)*z
    ix0,iy0=int(np.floor(L))-2,int(np.floor(T))-2; ix1,iy1=int(np.ceil(R))+2,int(np.ceil(B))+2
    ow,oh=ix1-ix0,iy1-iy0
    # caja fuente (coords de la imagen con padding) que mapea la grilla de salida a la pantalla real
    k=SW/(R-L); kv=SH/(B-T)
    box=((ix0-L)*k+PAD,(iy0-T)*kv+PAD,(ix1-L)*k+PAD,(iy1-T)*kv+PAD)
    im=Image.fromarray(np.ascontiguousarray(raw[i])).resize((ow,oh),Image.LANCZOS,box=box)
    # mascara: rectangulo redondeado (radio 0.104 w), antialias por distancia con signo
    rad=0.104*(R-L)
    xs=np.arange(ix0,ix1)+0.5; ys=np.arange(iy0,iy1)+0.5
    cx,cy=(L+R)/2,(T+B)/2; hx,hy=(R-L)/2+EXPAND-rad,(B-T)/2+EXPAND-rad
    qx=np.abs(xs[None,:]-cx)-hx; qy=np.abs(ys[:,None]-cy)-hy
    sd=np.hypot(np.maximum(qx,0),np.maximum(qy,0))+np.minimum(np.maximum(qx,qy),0)-rad
    a=np.clip(0.5-sd,0,1)[...,None]
    reg=fr[iy0:iy1,ix0:ix1].astype(np.float32)
    fr[iy0:iy1,ix0:ix1]=np.clip(reg*(1-a)+np.asarray(im).astype(np.float32)*a+0.5,0,255).astype(np.uint8)
    enc.stdin.write(fr.tobytes())
    if i%100==0: print("frame",i,flush=True)
enc.stdin.close(); enc.wait(); dec.stdout.close(); dec.wait(); print("ok",i+1)
