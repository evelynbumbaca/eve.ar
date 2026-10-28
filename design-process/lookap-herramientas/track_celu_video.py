import numpy as np, subprocess, sys, json
src, out = sys.argv[1], sys.argv[2]
x0,y0,cw,ch=860,340,280,440
r=subprocess.run(["ffmpeg","-v","error","-i",src,"-vf",f"crop={cw}:{ch}:{x0}:{y0},format=gray","-f","rawvideo","-"],capture_output=True).stdout
d=np.frombuffer(r,dtype=np.uint8).reshape(-1,ch,cw).astype(float)
def edge(line, dark_first=True):
    # busca la transicion bezel(oscuro)->pantalla(claro) con interpolacion subpixel; line va de afuera hacia adentro
    for i in range(1,len(line)-1):
        if line[i-1]<70 and line[i]>=70:
            # subpixel: cruce de 100
            pass
    return None
def cross(line, lvl=110):
    # primer cruce ascendente de lvl que viene precedido de zona oscura (<70)
    seen_dark=False
    for i in range(len(line)-1):
        if line[i]<70: seen_dark=True
        if seen_dark and line[i]<lvl<=line[i+1]:
            return i+(lvl-line[i])/(line[i+1]-line[i])
    return np.nan
res=[]
for f in d:
    L=[];R=[];T=[];B=[]
    for y in range(480-y0,640-y0,4):
        L.append(cross(f[y,:140]))              # x 860..1000 hacia adentro
        R.append(cross(f[y,::-1][:140]))         # desde 1140 hacia adentro
    for x in list(range(945-x0,962-x0,3))+list(range(1038-x0,1056-x0,3)):
        T.append(cross(f[:200,x]))               # y 340..540 hacia abajo
        B.append(cross(f[::-1,x][:140]))         # desde 780 hacia arriba
    m=lambda a: float(np.nanmedian(a))
    res.append([x0+m(L), x0+cw-1-m(R), y0+m(T), y0+ch-1-m(B)])
res=np.array(res)
t=np.arange(len(res))
fit=np.stack([np.polyval(np.polyfit(t,res[:,k],3),t) for k in range(4)],1)
print("raw   t0",res[0].round(2),"t_end",res[-1].round(2))
print("fit   t0",fit[0].round(2),"t_end",fit[-1].round(2))
print("resid std px",(res-fit).std(axis=0).round(2),"max",np.abs(res-fit).max(axis=0).round(2))
w=fit[:,1]-fit[:,0]; h=fit[:,3]-fit[:,2]
print("w/h t0",w[0].round(1),h[0].round(1),"ratio",(w/h)[[0,-1]].round(4),"zoom w",(w[-1]/w[0]).round(4),"zoom h",(h[-1]/h[0]).round(4))
json.dump(fit.tolist(),open(out,"w"))
