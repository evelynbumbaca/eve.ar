import numpy as np, sys
from PIL import Image, ImageFilter
S,I=sys.argv[1],sys.argv[2]
def line_from_pts(p,q): p=np.array(p,float); q=np.array(q,float); d=(q-p)/np.linalg.norm(q-p); return p,d
lines=np.load(f"{S}/lines.npy",allow_pickle=True).item()
L=np.load(f"{S}/left.npy"); lines["izq"]=line_from_pts(*L)
def inter(l1,l2):
    (m1,d1),(m2,d2)=l1,l2; t=np.linalg.solve(np.array([d1,-d2]).T,m2-m1); return m1+d1*t[0]
def inset(l,pt_inside,dist):
    m,d=l; n=np.array([-d[1],d[0]]); 
    if (pt_inside-m)@n<0: n=-n
    return (m+n*dist,d)
c=np.array([(inter(lines["sup"],lines["izq"])+inter(lines["inf"],lines["der"]))/2])[0]   # centro aprox
INS=float(sys.argv[3]) if len(sys.argv)>3 else 8.0
ls={k:inset(v,c,INS) for k,v in lines.items()}
TL=inter(ls["sup"],ls["izq"]); TR=inter(ls["sup"],ls["der"]); BR=inter(ls["inf"],ls["der"]); BL=inter(ls["inf"],ls["izq"])
print("quad A:",TL.round(1),TR.round(1),BR.round(1),BL.round(1))
def homog(src,dst):
    A=[]
    for (x,y),(u,v) in zip(src,dst):
        A+= [[x,y,1,0,0,0,-u*x,-u*y,-u],[0,0,0,x,y,1,-v*x,-v*y,-v]]
    _,_,vt=np.linalg.svd(np.array(A,float)); return vt[-1].reshape(3,3)
def bil(img,x,y):
    h,w=img.shape[:2]; x=np.clip(x,0,w-1.001); y=np.clip(y,0,h-1.001)
    x0=np.floor(x).astype(int); y0=np.floor(y).astype(int); fx=(x-x0)[...,None]; fy=(y-y0)[...,None]
    return img[y0,x0]*(1-fx)*(1-fy)+img[y0,x0+1]*fx*(1-fy)+img[y0+1,x0]*(1-fx)*fy+img[y0+1,x0+1]*fx*fy
def sdf_rr(u,v,w,h,r):
    qx=np.abs(u-w/2)-(w/2-r); qy=np.abs(v-h/2)-(h/2-r)
    return np.hypot(np.maximum(qx,0),np.maximum(qy,0))+np.minimum(np.maximum(qx,qy),0)-r
def scene_A(app_path,out):
    scene=np.array(Image.open(f"{I}/2.jpg").convert("RGB")).astype(np.float32)
    app0=Image.open(app_path).convert("RGB"); AW,AH=app0.size
    quad=[TL,TR,BR,BL]; xs=[q[0] for q in quad]; ys=[q[1] for q in quad]
    x0,x1,y0,y1=int(min(xs))-6,int(max(xs))+6,int(min(ys))-6,int(max(ys))+6
    wq=np.linalg.norm(TR-TL); sc=wq/AW
    app=np.array(app0.resize((int(AW*sc*1.5),int(AH*sc*1.5)),Image.LANCZOS)).astype(np.float32); k=app.shape[1]/AW
    H=homog([(0,0),(AW,0),(AW,AH),(0,AH)],quad); Hi=np.linalg.inv(H)
    gy,gx=np.mgrid[y0:y1,x0:x1].astype(np.float32)
    acc=np.zeros((y1-y0,x1-x0,3),np.float32); al=np.zeros((y1-y0,x1-x0),np.float32)
    for oy in (0.25,0.75):
        for ox in (0.25,0.75):
            X=gx+ox; Y=gy+oy; P=Hi@np.stack([X.ravel(),Y.ravel(),np.ones(X.size)])
            u=(P[0]/P[2]).reshape(X.shape); v=(P[1]/P[2]).reshape(X.shape)
            sd=sdf_rr(u,v,AW,AH,0.09*AW)*sc          # px de salida aprox
            a=np.clip(0.5-sd,0,1); acc+=bil(app,u*k,v*k)*a[...,None]; al+=a
    al/=4; col=np.where(al[...,None]>0,acc/np.maximum(al[...,None]*4,1e-6),0)
    reg=scene[y0:y1,x0:x1]
    # reflejo del vidrio original: lo que sobresale del nivel de negro
    lum=reg.mean(axis=2); base=np.percentile(lum[al>0.9],5); refl=np.clip(lum-base,0,None)[...,None]
    app_l=col*np.array([0.90,0.875,0.82],np.float32)
    scr=np.clip(app_l+refl*0.3,0,255)
    out_reg=reg*(1-al[...,None])+scr*al[...,None]
    res=scene.copy(); res[y0:y1,x0:x1]=out_reg
    Image.fromarray(np.clip(res+0.5,0,255).astype(np.uint8)).save(out,quality=94)
    print("A ok",out, "base negro %.0f"%base)
def scene_B(app_path,out):
    scene=np.array(Image.open(f"{I}/3.jpg").convert("RGB")).astype(np.float32)
    app0=Image.open(app_path).convert("RGB")
    # rect pantalla (medido): x 703..905, y 781..1220
    X0,X1,Y0,Y1=703.0,905.0,781.0,1220.0
    app=app0.resize((int(X1-X0)*2,int(Y1-Y0)*2),Image.LANCZOS)
    gx0,gx1,gy0,gy1=692,918,770,1232
    gy,gx=np.mgrid[gy0:gy1,gx0:gx1].astype(np.float32)
    u=(gx+0.5-X0)/(X1-X0)*app.width; v=(gy+0.5-Y0)/(Y1-Y0)*app.height
    colapp=bil(np.array(app).astype(np.float32),u,v)
    reg=scene[gy0:gy1,gx0:gx1]; lum=reg.mean(axis=2)
    gray=np.array([92,103,99],np.float32); glum=gray.mean(); blum=np.percentile(lum,2)
    t=np.clip((lum-(blum+6))/(glum-(blum+6)),0,1)[...,None]    # cobertura de pantalla por luminancia
    inside=(gx>=X0-3)&(gx<=X1+3)&(gy>=Y0-3)&(gy<=Y1+3); t=t*inside[...,None]
    new=np.clip(colapp*0.94,0,255)
    outr=reg+t*(new-gray)           # reemplaza solo la parte 'gris' de cada pixel
    res=scene.copy(); res[gy0:gy1,gx0:gx1]=np.clip(outr,0,255)
    Image.fromarray(np.clip(res+0.5,0,255).astype(np.uint8)).save(out,quality=94); print("B ok",out)
scene_A(f"{I}/4.png",f"{S}/mockA.jpg"); scene_B(f"{I}/5.webp",f"{S}/mockB.jpg")
