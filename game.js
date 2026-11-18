"use strict";(()=>{var $m="0.1.50 (20261118)",vt={black:1578021,navy:2501444,plum:6830188,green:4098376,brown:12087120,dgray:3818598,lgray:12635100,white:16777215,red:14957380,orange:16217634,yellow:16705377,lime:6539085,blue:39387,lavender:9149364,pink:16151930,peach:15251350,khaki:15389866,olive:16690740,jungle:2513986,rust:12470831,teal:2943221},Zn={sun:16773336,sky:16777215,bounce:10934416,groundLo:4761672,groundHi:8179554,haze:13625528,path:15841442,pad:[15983288,15516308,14278634,16575646],ao:.75},Hi=1/20,Km=1,Zm=2,Jm=1,Ur=4,Da=600,Na=300,Ua=30,jm=1,av=.92,lv=.1,cv=.07,uv=1/120,hv=1/30,dv=.05,Bn=[{name:"Common",chance:.67,power:1,sell:.3,color:10133670,age:-1,fame:0},{name:"Uncommon",chance:.22,power:2,sell:.6,color:5025616,age:480,fame:5e-5},{name:"Rare",chance:.1,power:5,sell:1.5,color:3114731,age:600,fame:25e-5},{name:"Epic",chance:.0098,power:12,sell:4,color:10182117,age:720,fame:75e-5},{name:"Legendary",chance:2e-4,power:30,sell:10,color:16036864,age:900,fame:.0025},{name:"Mythic",chance:0,power:75,sell:25,color:14957380,age:1080,fame:.00625},{name:"Ancient",chance:0,power:190,sell:63,color:2943221,age:1200,fame:.015},{name:"Celestial",chance:0,power:475,sell:158,color:16777215,age:1500,fame:.0375}],Qm=2.5,vo=20,Oa=6,Dd=450,eg=.07,tg=135,ng=.7,Nd=[20,30,45,60,90,120,180,240,300],ig=.6,Jn=[{name:"Egg",priceMult:1,hatchS:5,needs:-1,odds:Bn.slice(0,5).map(i=>i.chance)},{name:"Golden Egg",priceMult:25,hatchS:60,needs:2,odds:[0,.7,.26,.037,.003]},{name:"Crystal Egg",priceMult:250,hatchS:900,needs:3,odds:[0,0,.77,.215,.015]}],ss=Jn.length,Ud=.3,Od=4,sg=4,Or=10,Fd=1.6,kn=[{name:"Small Enclosure",slots:3,mult:1,breed:1,cost:300},{name:"Paddock",slots:4,mult:1.3,breed:.9,cost:5e3},{name:"Big Paddock",slots:5,mult:1.6,breed:.8,cost:12e4},{name:"Fern Valley",slots:6,mult:2,breed:.7,cost:3e6},{name:"Glass Dome",slots:7,mult:2.5,breed:.65,cost:8e7},{name:"Volcano Valley",slots:8,mult:3,breed:.6,cost:12e8},{name:"Sky Island",slots:9,mult:3.6,breed:.55,cost:8e9},{name:"Orbit Dome",slots:10,mult:4.3,breed:.5,cost:5e10}],rg=[250,1e3,5e3,25e3,15e4,3e5,5e5,8e5],Rs=[{name:"Tour Cart",cap:120,cost:500},{name:"Safari Jeep",cap:200,cost:8e3},{name:"Tour Bus",cap:320,cost:2e5},{name:"Double-Decker",cap:500,cost:5e6},{name:"Monorail",cap:750,cost:15e7},{name:"Tour Copter",cap:1100,cost:2e9},{name:"Airship",cap:1600,cost:14e9},{name:"Sky Lift",cap:2400,cost:9e10}],ar=[600,1e4,25e4,6e6,16e7,3e9,2e10,12e10],Ac=[.03,.06,.1,.15,.21,.28,.36,.45],Dn=[{id:"food",name:"Food Court",cost:1,eff:1,kind:"spend"},{id:"ice",name:"Ice Cream",cost:.6,eff:.6,kind:"spend"},{id:"souv",name:"Souvenirs",cost:1.6,eff:1.2,kind:"spend"},{id:"boothW",name:"West Tickets",cost:1.2,eff:.25,kind:"lay"},{id:"boothE",name:"East Tickets",cost:2,eff:.25,kind:"lay"}],ri=[{name:"Compsognathus",value:.25,threshold:0,power:1,egg:10},{name:"Velociraptor",value:1.25,threshold:1e6,power:1,egg:50},{name:"Triceratops",value:3.5,threshold:5e8,power:1,egg:240},{name:"Stegosaurus",value:4.5,threshold:15e9,power:1,egg:520},{name:"Tyrannosaurus",value:5,threshold:4e11,power:1,egg:1160},{name:"Brachiosaurus",value:6,threshold:1e14,power:1,egg:2560},{name:"Lava Spinosaurus",value:6.5,threshold:6e14,power:1,egg:5600},{name:"Cosmic Rex",value:10,threshold:9e14,power:1,egg:12400}],Bd=["car/suv","car/suv-luxury","car/van","car/delivery"],Mi={HAB:10.5,RING_R:17.5,D:3},Mo=100,Fa=[16773608,16705377,6285567],Ba=[vt.yellow,vt.orange,vt.red,vt.white,vt.lime,vt.teal,vt.pink,vt.plum],Rc=[0,25,55,85],Cs=[{id:"nests",tier:0,max:10,base:15,growth:1.55,eff:.05},{id:"feed",tier:0,max:10,base:60,growth:1.6,eff:.25},{id:"incubator",tier:0,max:10,base:40,growth:1.5,eff:av},{id:"autoHatch1",tier:0,max:10,base:400,growth:1.6,eff:uv},{id:"incubSlots",tier:0,max:3,base:2e3,growth:10,eff:1},{id:"warmLamps",tier:0,max:5,base:500,growth:4,eff:lv},{id:"space",tier:1,max:10,base:2e4,growth:1.7,eff:dv},{id:"roads",tier:1,max:10,base:25e3,growth:1.7,eff:.05},{id:"runCap",tier:1,max:4,base:6e4,growth:4,eff:cv},{id:"layers",tier:1,max:15,base:5e4,growth:1.65,eff:.075},{id:"vehicleSlot",tier:2,max:6,base:2e7,growth:4,eff:1},{id:"packaging",tier:2,max:15,base:15e6,growth:1.7,eff:.2},{id:"autoHatch2",tier:2,max:10,base:3e7,growth:1.8,eff:hv},{id:"drones",tier:2,max:10,base:1e7,growth:1.7,eff:.01},{id:"essence",tier:3,max:20,base:5e8,growth:1.5,eff:.005},{id:"freight",tier:3,max:15,base:4e8,growth:1.4,eff:.075},{id:"megaLay",tier:3,max:15,base:6e8,growth:1.45,eff:.1}],og=1e7,ag=55e8,lg=7e-4,Hd=20,zd=40,cg=.1,ug=600,Cc=1800,hg=1800,Ic=4*3600,kd=600,Pc=300,Lc=3,Is=[{money:600},{egg:3},{money:1200},{gold:1},{x2:1800},{money:2400},{crystal:1}],Gn=[{at:60,r:{egg:1}},{at:180,r:{money:120}},{at:300,r:{gold:1}},{at:420,r:{money:240}},{at:600,r:{x2:1800,ad:!0}},{at:840,r:{egg:2}},{at:1200,r:{money:600}},{at:1800,r:{gold:1,ad:!0}},{at:2400,r:{money:900}},{at:3e3,r:{sky:600}},{at:3600,r:{crystal:1}}],bo=60,dg=1.5,fg=3,pg=40,mg=1800,gg=1,Dc=3600,xg=30,So=10,_g=1e6,yg=10,Nc=["compy","raptor","triceratops","stego","trex","brachio","spino","trex"],Ha=[2.1,2,2.2,2.6,2.8,4.1,3.1,2.8],vg=[16777215,16777215,16777215,16758928,16777215,16777215,16756848,12095743],Mg=[9061392,0,0,0,0,0,9054720,4856474],bg=3;var Eg={click:[["click-1"],.5,40,"h"],tab:[["tab"],.5,40,"h"],open:[["open"],.5,40,"h"],close:[["close"],.5,40,"h"],deny:[["deny"],.5,100,"h"],buy:[["buy"],.8,80,"h"],unlock:[["unlock-1","unlock-2"],.8,150,"hn"],key:[["key-1"],.8,200,"hn"],trophy:[["trophy"],.9,200,"hn"],prestige:[["prestige"],.7,2e3,"hn"],wing:[["wing"],.4,80,""],coin:[["coin-1","coin-2"],.35,60,"hn"],bonus:[["bonus"],.8,500,"hn"],shimmer:[["shimmer"],.32,2e3,"hn"],horn:[["whistle-1"],.12,3e3,""],roar:[["roar","roar-2","roar-3","roar-4"],.22,5e3,""]},cr={music:["music-base",1,"music"],day:["amb-day",.6,"ambient"],leaves:["amb-leaves",.4,"ambient"],crowd:["crowd",1.6,"ambient"]},fv={music:.3,sfx:1,ambient:.5},Tg=i=>({music:"ef_music_vol",sfx:"ef_sfx_vol",ambient:"ef_amb_vol"})[i],wg=i=>{try{return localStorage.getItem(i)}catch{return null}},Ag=(i,e)=>{try{localStorage.setItem(i,e)}catch{}};function Fc(i){let e=parseFloat(wg(Tg(i))??"");return isNaN(e)?fv[i]:Math.max(0,Math.min(1,e))}var Bc=()=>wg("ef_sound")!=="0",yn=null,za,Wd,lr={},Xd=new Map,Oc=new Set(Bc()?[]:["user"]);function Rg(){yn&&za.gain.setTargetAtTime(Oc.size?0:1,yn.currentTime,.03)}function ka(i,e){e?Oc.add(i):Oc.delete(i),Rg()}function Cg(i){Ag("ef_sound",i?"1":"0"),ka("user",!i)}var qd=i=>cr[i][1]*Fc(cr[i][2]);function Ig(i,e){if(Ag(Tg(i),e.toFixed(2)),!!yn){for(let t of Object.keys(cr))cr[t][2]===i&&t!=="crowd"&&lr[t].gain.setTargetAtTime(qd(t),yn.currentTime,.1);Yd()}}async function pv(i){try{let e=await fetch(`audio/${i}.ogg`);e.ok&&Xd.set(i,await yn.decodeAudioData(await e.arrayBuffer()))}catch{}}function mv(){if(yn){yn.resume();return}let i=window.AudioContext??window.webkitAudioContext;if(!i)return;yn=new i,za=yn.createGain();let e=yn.createDynamicsCompressor();e.threshold.value=-6,e.knee.value=0,e.ratio.value=20,e.attack.value=.003,e.release.value=.15,za.connect(e),e.connect(yn.destination),Wd=yn.createGain(),Wd.connect(za);for(let n of Object.keys(cr))lr[n]=yn.createGain(),lr[n].gain.value=0,lr[n].connect(za);Rg();let t=new Set([...Object.values(Eg).flatMap(n=>n[0]),...Object.values(cr).map(n=>n[0])]);Promise.all([...t].map(pv)).then(()=>{for(let n of Object.keys(cr)){let s=Xd.get(cr[n][0]);if(!s)continue;let r=yn.createBufferSource();r.buffer=s,r.loop=!0,r.connect(lr[n]),r.start(),n!=="crowd"&&lr[n].gain.setTargetAtTime(qd(n),yn.currentTime,1.2)}Yd()})}function Pg(){for(let i of["pointerdown","keydown"])addEventListener(i,mv,{capture:!0});document.addEventListener("visibilitychange",()=>ka("pause",document.hidden))}var Sg=new Map,Gd=0;function Jt(i,e=1){let t=Fc("sfx");if(!yn||yn.state!=="running"||Oc.size||!t)return;let[n,s,r,o]=Eg[i],a=performance.now();if(Gd>=24&&!o.includes("h")||a-(Sg.get(i)??-1e9)<r)return;let l=Xd.get(n[Math.random()*n.length|0]);if(!l)return;Sg.set(i,a);let c=yn.createBufferSource(),u=yn.createGain();c.buffer=l,c.playbackRate.value=e,c.detune.value=o.includes("n")?0:(Math.random()-.5)*120,u.gain.value=s*t,c.connect(u),u.connect(Wd),Gd++,c.onended=()=>{Gd--,u.disconnect()},c.start()}var Vd=0,Uc=0;function Yd(){yn&&lr.crowd&&lr.crowd.gain.setTargetAtTime(qd("crowd")*Uc,yn.currentTime,.15)}function Lg(i,e){Vd=i,Uc+=(Vd-Uc)*Math.min(1,e*(Vd>Uc?1.5:1)),Yd()}var Eo=()=>window.PokiSDK,$d=i=>{try{i()}catch(e){console.warn("[poki]",e)}},Hc=!1,Fr=!1,Dg=!1,Ng=()=>Fr;function Kd(i){!Hc||i===Dg||(Dg=i,$d(()=>i?Eo().gameplayStart():Eo().gameplayStop()))}async function Ug(){if(!location.search.includes("welcome"))return;let i=document.getElementById("welcome"),e=()=>{i.hidden=!0};i.hidden=!1,i.addEventListener("pointerdown",s=>{(s.target===i||s.target.id==="wok")&&e()}),addEventListener("keydown",e),addEventListener("keydown",s=>{[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.key)&&s.preventDefault()});let t=Eo();if(!t)return;try{await t.init(),Hc=!0}catch(s){console.warn("[poki] init (adblock?)",s)}let n=()=>setTimeout(()=>{!Fr&&i.hidden&&Kd(!0)});addEventListener("pointerdown",n),addEventListener("keydown",n),document.addEventListener("visibilitychange",()=>{document.hidden&&Kd(!1)})}function Og(){Hc&&($d(()=>Eo().gameLoadingFinished()),$d(()=>Eo().playtestSetCanvas?.(document.querySelector("#game canvas"))))}function ur(i,e=()=>{}){if(!Fr)return gv(i)}function gv(i){let e=document.getElementById("adov"),t=document.getElementById("adn"),n=3;Fr=!0,e.hidden=!1,t.textContent=`Reward in ${n}`;let s=setInterval(()=>{if(--n>0){t.textContent=`Reward in ${n}`;return}clearInterval(s),e.hidden=!0,Fr=!1,i()},1e3)}var A0=0,Nf=1,R0=2;var to=1,C0=2,ia=3,ds=0,zn=1,Un=2,On=0,sa=1,Uf=2,Of=3,Ff=4,Hu=5;var wi=100,I0=101,P0=102,L0=103,D0=104,no=200,N0=201,U0=202,O0=203,Bf=204,Hf=205,Al=206,F0=207,Rl=208,B0=209,H0=210,z0=211,k0=212,G0=213,V0=214,fu=0,pu=1,mu=2,zo=3,gu=4,xu=5,_u=6,yu=7,zu=0,W0=1,X0=2,fs=0,Cl=1,Il=2,Pl=3,Ll=4,Dl=5,Nl=6,Ul=7,Ef="attached",q0="detached",zf=300,io=301,ra=302,ku=303,Gu=304,oi=1e3,Si=1001,ko=1002,sn=1003,Vu=1004;var so=1005;var An=1006,oa=1007;var Ai=1008;var Yn=1009,kf=1010,Gf=1011,aa=1012,Wu=1013,Zi=1014,xi=1015,En=1016,Xu=1017,qu=1018,Xs=1020,Vf=35902,Wf=35899,Xf=1021,qf=1022,ui=1023,Bs=1026,Ji=1027,Yu=1028,$u=1029,Sr=1030,Ku=1031;var Zu=1033,Ol=33776,Fl=33777,Bl=33778,Hl=33779,Ju=35840,ju=35841,Qu=35842,eh=35843,th=36196,nh=37492,ih=37496,sh=37488,rh=37489,zl=37490,oh=37491,ah=37808,lh=37809,ch=37810,uh=37811,hh=37812,dh=37813,fh=37814,ph=37815,mh=37816,gh=37817,xh=37818,_h=37819,yh=37820,vh=37821,Mh=36492,bh=36494,Sh=36495,Eh=36283,Th=36284,kl=36285,wh=36286,Y0=2200,$0=2201,K0=2202,Xr=2300,qr=2301,hu=2302,Tf=2303,Gr=2400,Vr=2401,Qa=2402,Ah=2500,Z0=2501,Yf=0,Gl=1,la=2,J0=3200;var ca=0,j0=1,qs="",Yt="srgb",Qn="srgb-linear",el="linear",Gt="srgb";var du=7680;var Q0=519,ex=512,tx=513,nx=514,$f=515,ix=516,sx=517,Kf=518,Zf=519,Jf=35044;var jf="300 es",Ei=2e3,Go=2001;function xv(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _v(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rx(){let i=Vo("canvas");return i.style.display="block",i}var Fg={},Wo=null;function tl(...i){let e="THREE."+i.shift();Wo?Wo("log",e,...i):console.log(e,...i)}function ox(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=ox(i);let e="THREE."+i.shift();if(Wo)Wo("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ht(...i){i=ox(i);let e="THREE."+i.shift();if(Wo)Wo("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wr(...i){let e=i.join(" ");e in Fg||(Fg[e]=!0,et(...i))}function ax(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var lx={[fu]:fu,[mu]:_u,[gu]:gu,[zo]:xu,[pu]:pu,[_u]:mu,[yu]:yu,[xu]:zo},Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bg=1234567,Ja=Math.PI/180,Yr=180/Math.PI;function ps(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Qf(i,e){return(i%e+e)%e}function yv(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function vv(i,e,t){return i!==e?(t-i)/(e-i):0}function ja(i,e,t){return(1-t)*i+t*e}function Mv(i,e,t,n){return ja(i,e,1-Math.exp(-t*n))}function bv(i,e=1){return e-Math.abs(Qf(i,e*2)-e)}function Sv(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ev(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Tv(i,e){return i+Math.floor(Math.random()*(e-i+1))}function wv(i,e){return i+Math.random()*(e-i)}function Av(i){return i*(.5-Math.random())}function Rv(i){i!==void 0&&(Bg=i);let e=Bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Cv(i){return i*Ja}function Iv(i){return i*Yr}function Pv(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Lv(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ep(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dv(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*d,a*u,a*c);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Rh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function tp(i,e){if(e.constructor===Float32Array)return i;let t=Rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function np(i,e){if(e.constructor===Float32Array)return i;let t=Rh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ri={DEG2RAD:Ja,RAD2DEG:Yr,generateUUID:ps,clamp:wt,euclideanModulo:Qf,mapLinear:yv,inverseLerp:vv,lerp:ja,damp:Mv,pingpong:bv,smoothstep:Sv,smootherstep:Ev,randInt:Tv,randFloat:wv,randFloatSpread:Av,seededRandom:Rv,degToRad:Cv,radToDeg:Iv,isPowerOfTwo:Pv,ceilPowerOfTwo:Lv,floorPowerOfTwo:ep,setQuaternionFromProperEuler:Dv,normalize:np,denormalize:tp},lp=class lp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lp.prototype.isVector2=!0;var it=lp,Xn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],f=r[o+0],d=r[o+1],p=r[o+2],_=r[o+3];if(h!==_||l!==f||c!==d||u!==p){let m=l*f+c*d+u*p+h*_;m<0&&(f=-f,d=-d,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+f*a,c=c*g+d*a,u=u*g+p*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],d=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*d-c*f,e[t+1]=l*p+u*f+c*h-a*d,e[t+2]=c*p+u*d+a*f-l*h,e[t+3]=u*p-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),d=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"YXZ":this._x=f*u*h+c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"ZXY":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h-f*d*p;break;case"ZYX":this._x=f*u*h-c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h+f*d*p;break;case"YZX":this._x=f*u*h+c*d*p,this._y=c*d*h+f*u*p,this._z=c*u*p-f*d*h,this._w=c*u*h-f*d*p;break;case"XZY":this._x=f*u*h-c*d*p,this._y=c*d*h-f*u*p,this._z=c*u*p+f*d*h,this._w=c*u*h+f*d*p;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cp=class cp{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zd.copy(this).projectOnVector(e),this.sub(Zd)}reflect(e){return this.sub(Zd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cp.prototype.isVector3=!0;var O=cp,Zd=new O,Hg=new Xn,up=class up{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],p=n[8],_=s[0],m=s[3],g=s[6],y=s[1],w=s[4],M=s[7],E=s[2],T=s[5],x=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*m+a*w+l*T,r[6]=o*g+a*M+l*x,r[1]=c*_+u*y+h*E,r[4]=c*m+u*w+h*T,r[7]=c*g+u*M+h*x,r[2]=f*_+d*y+p*E,r[5]=f*m+d*w+p*T,r[8]=f*g+d*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,p=t*h+n*f+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Wr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Jd.makeScale(e,t)),this}rotate(e){return Wr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Jd.makeRotation(-e)),this}translate(e,t){return Wr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Jd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};up.prototype.isMatrix3=!0;var ft=up,Jd=new ft,zg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nv(){let i={enabled:!0,workingColorSpace:Qn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Gt&&(s.r=Fs(s.r),s.g=Fs(s.g),s.b=Fs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Gt&&(s.r=Ho(s.r),s.g=Ho(s.g),s.b=Ho(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qs?el:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qn]:{primaries:e,whitePoint:n,transfer:el,toXYZ:zg,fromXYZ:kg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:Gt,toXYZ:zg,fromXYZ:kg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}var Mt=Nv();function Fs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ho(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var To,vu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{To===void 0&&(To=Vo("canvas")),To.width=e.width,To.height=e.height;let s=To.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=To}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Fs(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fs(t[n]/255)*255):t[n]=Fs(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Uv=0,Xo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Uv++}),this.uuid=ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jd(s[o].image)):r.push(jd(s[o]))}else r=jd(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var Ov=0,Qd=new O,Rn=class i extends Wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Si,s=Si,r=An,o=Ai,a=ui,l=Yn,c=i.DEFAULT_ANISOTROPY,u=qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=ps(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oi:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oi:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=zf;Rn.DEFAULT_ANISOTROPY=1;var hp=class hp{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(d+1)/2,E=(g+1)/2,T=(u+f)/4,x=(h+_)/4,S=(p+m)/4;return w>M&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=x/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=S/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(wt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hp.prototype.isVector4=!0;var $t=hp,Mu=class extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Rn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:An,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends Mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},nl=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bu=class extends Rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=sn,this.minFilter=sn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Bu=class Bu{constructor(e,t,n,s,r,o,a,l,c,u,h,f,d,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,d,p,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,f,d,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bu().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/wo.setFromMatrixColumn(e,0).length(),r=1/wo.setFromMatrixColumn(e,1).length(),o=1/wo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+p*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=p+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f+_*a,t[4]=p*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-p,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,d=l*h,p=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=p+d*a,t[1]=d+p*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,d=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-d,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=d*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=p*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+p,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*l,d=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-p,t[2]=p*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,Bv)}lookAt(e,t,n){let s=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),hr.crossVectors(n,mi),hr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),hr.crossVectors(n,mi)),hr.normalize(),zc.crossVectors(mi,hr),s[0]=hr.x,s[4]=zc.x,s[8]=mi.x,s[1]=hr.y,s[5]=zc.y,s[9]=mi.y,s[2]=hr.z,s[6]=zc.z,s[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],w=n[7],M=n[11],E=n[15],T=s[0],x=s[4],S=s[8],I=s[12],C=s[1],L=s[5],U=s[9],G=s[13],P=s[2],V=s[6],q=s[10],W=s[14],ue=s[3],H=s[7],$=s[11],Q=s[15];return r[0]=o*T+a*C+l*P+c*ue,r[4]=o*x+a*L+l*V+c*H,r[8]=o*S+a*U+l*q+c*$,r[12]=o*I+a*G+l*W+c*Q,r[1]=u*T+h*C+f*P+d*ue,r[5]=u*x+h*L+f*V+d*H,r[9]=u*S+h*U+f*q+d*$,r[13]=u*I+h*G+f*W+d*Q,r[2]=p*T+_*C+m*P+g*ue,r[6]=p*x+_*L+m*V+g*H,r[10]=p*S+_*U+m*q+g*$,r[14]=p*I+_*G+m*W+g*Q,r[3]=y*T+w*C+M*P+E*ue,r[7]=y*x+w*L+M*V+E*H,r[11]=y*S+w*U+M*q+E*$,r[15]=y*I+w*G+M*W+E*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*d-c*f,w=a*d-c*h,M=a*f-l*h,E=o*d-c*u,T=o*f-l*u,x=o*h-a*u;return t*(_*y-m*w+g*M)-n*(p*y-m*E+g*T)+s*(p*w-_*E+g*x)-r*(p*M-_*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*o,w=t*l-s*o,M=t*c-r*o,E=n*l-s*a,T=n*c-r*a,x=s*c-r*l,S=u*_-h*p,I=u*m-f*p,C=u*g-d*p,L=h*m-f*_,U=h*g-d*_,G=f*g-d*m,P=y*G-w*U+M*L+E*C-T*I+x*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=(a*G-l*U+c*L)*V,e[1]=(s*U-n*G-r*L)*V,e[2]=(_*x-m*T+g*E)*V,e[3]=(f*T-h*x-d*E)*V,e[4]=(l*C-o*G-c*I)*V,e[5]=(t*G-s*C+r*I)*V,e[6]=(m*M-p*x-g*w)*V,e[7]=(u*x-f*M+d*w)*V,e[8]=(o*U-a*C+c*S)*V,e[9]=(n*C-t*U-r*S)*V,e[10]=(p*T-_*M+g*y)*V,e[11]=(h*M-u*T-d*y)*V,e[12]=(a*I-o*L-l*S)*V,e[13]=(t*L-n*I+s*S)*V,e[14]=(_*w-p*E-m*y)*V,e[15]=(u*E-h*w+f*y)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,p=r*h,_=o*u,m=o*h,g=a*h,y=l*c,w=l*u,M=l*h,E=n.x,T=n.y,x=n.z;return s[0]=(1-(_+g))*E,s[1]=(d+M)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(d-M)*T,s[5]=(1-(f+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+w)*x,s[9]=(m-y)*x,s[10]=(1-(f+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=wo.set(s[0],s[1],s[2]).length(),a=wo.set(s[4],s[5],s[6]).length(),l=wo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),zi.copy(this);let c=1/o,u=1/a,h=1/l;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=u,zi.elements[5]*=u,zi.elements[6]*=u,zi.elements[8]*=h,zi.elements[9]*=h,zi.elements[10]*=h,t.setFromRotationMatrix(zi),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=Ei,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Ei)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Go)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ei,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Ei)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Go)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Bu.prototype.isMatrix4=!0;var rt=Bu,wo=new O,zi=new rt,Fv=new O(0,0,0),Bv=new O(1,1,1),hr=new O,zc=new O,mi=new O,Gg=new rt,Vg=new Xn,as=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};as.DEFAULT_ORDER="XYZ";var qo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Hv=0,Wg=new O,Ao=new Xn,Ps=new rt,kc=new O,Ga=new O,zv=new O,kv=new Xn,Xg=new O(1,0,0),qg=new O(0,1,0),Yg=new O(0,0,1),$g={type:"added"},Gv={type:"removed"},Ro={type:"childadded",child:null},ef={type:"childremoved",child:null},At=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new as,n=new Xn,s=new O(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new rt},normalMatrix:{value:new ft}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(e,t){return Ao.setFromAxisAngle(e,t),this.quaternion.premultiply(Ao),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis(Yg,e)}translateOnAxis(e,t){return Wg.copy(e).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis(Yg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ps.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?kc.copy(e):kc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ps.lookAt(Ga,kc,this.up):Ps.lookAt(kc,Ga,this.up),this.quaternion.setFromRotationMatrix(Ps),s&&(Ps.extractRotation(s.matrixWorld),Ao.setFromRotationMatrix(Ps),this.quaternion.premultiply(Ao.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($g),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gv),ef.child=e,this.dispatchEvent(ef),ef.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ps.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ps.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ps),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($g),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,kv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};At.DEFAULT_UP=new O(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tn=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vv={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vv)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},cx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Gc={h:0,s:0,l:0};function tf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Mt.workingColorSpace){if(e=Qf(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=tf(o,r,e+1/3),this.g=tf(o,r,e),this.b=tf(o,r,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=cx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=Ho(e.r),this.g=Ho(e.g),this.b=Ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Mt.workingToColorSpace(Wn.copy(this),e),Math.round(wt(Wn.r*255,0,255))*65536+Math.round(wt(Wn.g*255,0,255))*256+Math.round(wt(Wn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(Wn.copy(this),t);let n=Wn.r,s=Wn.g,r=Wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Yt){Mt.workingToColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,s=Wn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+t,dr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(dr),e.getHSL(Gc);let n=ja(dr.h,Gc.h,t),s=ja(dr.s,Gc.s,t),r=ja(dr.l,Gc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new ze;ze.NAMES=cx;var il=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ze(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_r=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ki=new O,Ls=new O,nf=new O,Ds=new O,Co=new O,Io=new O,Kg=new O,sf=new O,rf=new O,of=new O,af=new $t,lf=new $t,cf=new $t,xr=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ki.subVectors(e,t),s.cross(ki);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ki.subVectors(s,t),Ls.subVectors(n,t),nf.subVectors(e,t);let o=ki.dot(ki),a=ki.dot(Ls),l=ki.dot(nf),c=Ls.dot(Ls),u=Ls.dot(nf),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,p=(o*u-a*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ds)===null?!1:Ds.x>=0&&Ds.y>=0&&Ds.x+Ds.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ds)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ds.x),l.addScaledVector(o,Ds.y),l.addScaledVector(a,Ds.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return af.setScalar(0),lf.setScalar(0),cf.setScalar(0),af.fromBufferAttribute(e,t),lf.fromBufferAttribute(e,n),cf.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(af,r.x),o.addScaledVector(lf,r.y),o.addScaledVector(cf,r.z),o}static isFrontFacing(e,t,n,s){return ki.subVectors(n,t),Ls.subVectors(e,t),ki.cross(Ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),Ls.subVectors(this.a,this.b),ki.cross(Ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Co.subVectors(s,n),Io.subVectors(r,n),sf.subVectors(e,n);let l=Co.dot(sf),c=Io.dot(sf);if(l<=0&&c<=0)return t.copy(n);rf.subVectors(e,s);let u=Co.dot(rf),h=Io.dot(rf);if(u>=0&&h<=u)return t.copy(s);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(Co,o);of.subVectors(e,r);let d=Co.dot(of),p=Io.dot(of);if(p>=0&&d<=p)return t.copy(r);let _=d*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(Io,a);let m=u*p-d*h;if(m<=0&&h-u>=0&&d-p>=0)return Kg.subVectors(r,s),a=(h-u)/(h-u+(d-p)),t.copy(s).addScaledVector(Kg,a);let g=1/(m+_+f);return o=_*g,a=f*g,t.copy(n).addScaledVector(Co,o).addScaledVector(Io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ln=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gi):Gi.fromBufferAttribute(r,o),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vc.copy(n.boundingBox)),Vc.applyMatrix4(e.matrixWorld),this.union(Vc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Va),Wc.subVectors(this.max,Va),Po.subVectors(e.a,Va),Lo.subVectors(e.b,Va),Do.subVectors(e.c,Va),fr.subVectors(Lo,Po),pr.subVectors(Do,Lo),Br.subVectors(Po,Do);let t=[0,-fr.z,fr.y,0,-pr.z,pr.y,0,-Br.z,Br.y,fr.z,0,-fr.x,pr.z,0,-pr.x,Br.z,0,-Br.x,-fr.y,fr.x,0,-pr.y,pr.x,0,-Br.y,Br.x,0];return!uf(t,Po,Lo,Do,Wc)||(t=[1,0,0,0,1,0,0,0,1],!uf(t,Po,Lo,Do,Wc))?!1:(Xc.crossVectors(fr,pr),t=[Xc.x,Xc.y,Xc.z],uf(t,Po,Lo,Do,Wc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ns=[new O,new O,new O,new O,new O,new O,new O,new O],Gi=new O,Vc=new ln,Po=new O,Lo=new O,Do=new O,fr=new O,pr=new O,Br=new O,Va=new O,Wc=new O,Xc=new O,Hr=new O;function uf(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hr.fromArray(i,r);let a=s.x*Math.abs(Hr.x)+s.y*Math.abs(Hr.y)+s.z*Math.abs(Hr.z),l=e.dot(Hr),c=t.dot(Hr),u=n.dot(Hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var Sn=new O,qc=new it,Wv=0,Qt=class extends Wi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jf,this.updateRanges=[],this.gpuType=xi,this.version=0,this._normalizationScale=e!==void 0?Rh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qc.fromBufferAttribute(this,t),qc.applyMatrix3(e),this.setXY(t,qc.x,qc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix3(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyMatrix4(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.applyNormalMatrix(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Sn.fromBufferAttribute(this,t),Sn.transformDirection(e),this.setXYZ(t,Sn.x,Sn.y,Sn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):np(e,this.array)}};var sl=class extends Qt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var rl=class extends Qt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var kt=class extends Qt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Xv=new ln,Wa=new O,hf=new O,ai=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Xv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);let t=Wa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Wa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(hf)),this.expandByPoint(Wa.copy(e.center).sub(hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},qv=0,bi=new rt,df=new At,No=new O,gi=new ln,Xa=new ln,Nn=new O,Xt=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qv++}),this.uuid=ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xv(e)?rl:sl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,t,n){return bi.makeTranslation(e,t,n),this.applyMatrix4(bi),this}scale(e,t,n){return bi.makeScale(e,t,n),this.applyMatrix4(bi),this}lookAt(e){return df.lookAt(e),df.updateMatrix(),this.applyMatrix4(df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(No).negate(),this.translate(No.x,No.y,No.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];gi.setFromBufferAttribute(r),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Xa.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(gi.min,Xa.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,Xa.max),gi.expandByPoint(Nn)):(gi.expandByPoint(Xa.min),gi.expandByPoint(Xa.max))}gi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Nn.fromBufferAttribute(a,c),l&&(No.fromBufferAttribute(e,c),Nn.add(No)),s=Math.max(s,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Qt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new O,l[I]=new O;let u=new O,h=new O,f=new O,d=new it,p=new it,_=new it,m=new O,g=new O;function y(I,C,L){c[I]=c[C]=c[L]=1,u.fromBufferAttribute(n,I),h.fromBufferAttribute(n,C),f.fromBufferAttribute(n,L),d.fromBufferAttribute(r,I),p.fromBufferAttribute(r,C),_.fromBufferAttribute(r,L),h.sub(u),f.sub(u),p.sub(d),_.sub(d);let U=1/(p.x*_.y-_.x*p.y);isFinite(U)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(U),g.copy(f).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(U),a[I].add(m),a[C].add(m),a[L].add(m),l[I].add(g),l[C].add(g),l[L].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,C=w.length;I<C;++I){let L=w[I],U=L.start,G=L.count;for(let P=U,V=U+G;P<V;P+=3)y(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new O,E=new O,T=new O,x=new O;function S(I){T.fromBufferAttribute(s,I),x.copy(T);let C=a[I];M.copy(C),M.sub(T.multiplyScalar(T.dot(C))).normalize(),E.crossVectors(x,C);let U=E.dot(l[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,U)}for(let I=0,C=n.count;I<C;++I)c[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){let p=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let g=0;g<u;g++)f[p++]=c[d++]}return new Qt(f,u,h)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},$o=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jf,this.updateRanges=[],this.version=0,this.uuid=ps()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Zg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Zg(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ps()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var jn=new O,Ko=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Rh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyMatrix4(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.applyNormalMatrix(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jn.fromBufferAttribute(this,t),jn.transformDirection(e),this.setXYZ(t,jn.x,jn.y,jn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){tl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Qt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):tp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):np(e,this.data.array)}},ff=new O,Yv=new O,$v=new ft,Vi=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ff.subVectors(n,t).cross(Yv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ff),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$v.getNormalMatrix(e),s=this.coplanarPoint(ff).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Kv=0,qn=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=ps(),this.name="",this.type="Material",this.blending=sa,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bf,this.blendDst=Hf,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Q0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=du,this.stencilZFail=du,this.stencilZPass=du,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Vi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Us=new O,pf=new O,Yc=new O,$c=new O,yr=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Us)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Us.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Us.copy(this.origin).addScaledVector(this.direction,t),Us.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pf.copy(e).add(t).multiplyScalar(.5),Yc.copy(t).sub(e).normalize(),$c.copy(this.origin).sub(pf);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Yc),a=$c.dot(this.direction),l=-$c.dot(Yc),c=$c.lengthSq(),u=Math.abs(1-o*o),h,f,d,p;if(u>0)if(h=o*l-a,f=o*a-l,p=r*u,h>=0)if(f>=-p)if(f<=p){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pf).addScaledVector(Yc,f),d}intersectSphere(e,t){if(e.radius<0)return null;Us.subVectors(e.center,this.origin);let n=Us.dot(this.direction),s=Us.dot(Us)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Us)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,f=e.y-o.y,d=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,M=Math.abs(l),E=Math.abs(c),T=Math.abs(u),x,S,I,C,L,U,G,P,V,q,W,ue;if(M>=E&&M>=T?(I=l,U=h,V=p,ue=g,l>=0?(x=c,S=u,C=f,L=d,G=_,P=m,q=y,W=w):(x=u,S=c,C=d,L=f,G=m,P=_,q=w,W=y)):E>=T?(I=c,U=f,V=_,ue=y,c>=0?(x=u,S=l,C=d,L=h,G=m,P=p,q=w,W=g):(x=l,S=u,C=h,L=d,G=p,P=m,q=g,W=w)):(I=u,U=d,V=m,ue=w,u>=0?(x=l,S=c,C=h,L=f,G=p,P=_,q=g,W=y):(x=c,S=l,C=f,L=h,G=_,P=p,q=y,W=g)),I===0)return null;let H=x/I,$=S/I,Q=1/I,he=C-H*U,Ue=L-$*U,j=G-H*V,ge=P-$*V,Ce=q-H*ue,_e=W-$*ue,fe=Ce*ge-_e*j,A=he*_e-Ue*Ce,re=j*Ue-ge*he;if(s){if(fe<0||A<0||re<0)return null}else if((fe<0||A<0||re<0)&&(fe>0||A>0||re>0))return null;let xe=fe+A+re;if(xe===0)return null;let Oe=Q*(fe*U+A*V+re*ue);return(xe>0?Oe<0:Oe>0)?null:this.at(Oe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rn=class extends qn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jg=new rt,zr=new yr,Kc=new ai,jg=new O,Zc=new O,Jc=new O,jc=new O,mf=new O,Qc=new O,Qg=new O,eu=new O,ot=class extends At{constructor(e=new Xt,t=new rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Qc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(mf.fromBufferAttribute(h,e),o?Qc.addScaledVector(mf,u):Qc.addScaledVector(mf.sub(t),u))}t.add(Qc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Kc.copy(n.boundingSphere),Kc.applyMatrix4(r),zr.copy(e.ray).recast(e.near),!(Kc.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Kc,jg)===null||zr.origin.distanceToSquared(jg)>(e.far-e.near)**2))&&(Jg.copy(r).invert(),zr.copy(e.ray).applyMatrix4(Jg),!(n.boundingBox!==null&&zr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,E=w;M<E;M+=3){let T=a.getX(M),x=a.getX(M+1),S=a.getX(M+2);s=tu(this,g,e,n,c,u,h,T,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);s=tu(this,o,e,n,c,u,h,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=f.length;p<_;p++){let m=f[p],g=o[m.materialIndex],y=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=y,E=w;M<E;M+=3){let T=M,x=M+1,S=M+2;s=tu(this,g,e,n,c,u,h,T,x,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){let y=m,w=m+1,M=m+2;s=tu(this,o,e,n,c,u,h,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Zv(i,e,t,n,s,r,o,a){let l;if(e.side===zn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ds,a),l===null)return null;eu.copy(a),eu.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(eu);return c<t.near||c>t.far?null:{distance:c,point:eu.clone(),object:i}}function tu(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Zc),i.getVertexPosition(l,Jc),i.getVertexPosition(c,jc);let u=Zv(i,e,t,n,Zc,Jc,jc,Qg);if(u){let h=new O;xr.getBarycoord(Qg,Zc,Jc,jc,h),s&&(u.uv=xr.getInterpolatedAttribute(s,a,l,c,h,new it)),r&&(u.uv1=xr.getInterpolatedAttribute(r,a,l,c,h,new it)),o&&(u.normal=xr.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new O,materialIndex:0};xr.getNormal(Zc,Jc,jc,f.normal),u.face=f,u.barycoord=h}return u}var qa=new $t,e0=new $t,t0=new $t,Jv=new $t,n0=new rt,nu=new O,gf=new ai,i0=new rt,xf=new yr,ol=class extends ot{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ef,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ln),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nu),this.boundingBox.expandByPoint(nu)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ai),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nu),this.boundingSphere.expandByPoint(nu)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gf.copy(this.boundingSphere),gf.applyMatrix4(s),e.ray.intersectsSphere(gf)!==!1&&(i0.copy(s).invert(),xf.copy(e.ray).applyMatrix4(i0),!(this.boundingBox!==null&&xf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,xf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $t,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ef?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===q0?this.bindMatrixInverse.copy(this.bindMatrix).invert():et("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;e0.fromBufferAttribute(s.attributes.skinIndex,e),t0.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(qa.copy(t),t.set(0,0,0,0)):(qa.set(t.x,t.y,t.z,1),t.set(0,0,0)),qa.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=t0.getComponent(r);if(o!==0){let a=e0.getComponent(r);n0.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Jv.copy(qa).applyMatrix4(n0),o)}}return t.isVector4&&(t.w=qa.w),t.applyMatrix4(this.bindMatrixInverse)}},Zo=class extends At{constructor(){super(),this.isBone=!0,this.type="Bone"}},ls=class extends Rn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=sn,u=sn,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},s0=new rt,jv=new rt,al=class i{constructor(e=[],t=[]){this.uuid=ps(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){et("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:jv;s0.multiplyMatrices(a,t[r]),s0.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ls(t,e,e,ui,xi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(et("Skeleton: No bone found with UUID:",r),o=new Zo),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Xi=class extends Qt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Uo=new rt,r0=new rt,iu=[],o0=new ln,Qv=new rt,Ya=new ot,$a=new ai,pn=class extends ot{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Xi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Uo),o0.copy(e.boundingBox).applyMatrix4(Uo),this.boundingBox.union(o0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ai),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Uo),$a.copy(e.boundingSphere).applyMatrix4(Uo),this.boundingSphere.union($a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ya.geometry=this.geometry,Ya.material=this.material,Ya.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(n),e.ray.intersectsSphere($a)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Uo),r0.multiplyMatrices(n,Uo),Ya.matrixWorld=r0,Ya.raycast(e,iu);for(let o=0,a=iu.length;o<a;o++){let l=iu[o];l.instanceId=r,l.object=this,t.push(l)}iu.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Xi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ls(new Float32Array(s*this.count),s,this.count,Yu,xi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kr=new ai,eM=new it(.5,.5),su=new O,vr=class{constructor(e=new Vi,t=new Vi,n=new Vi,s=new Vi,r=new Vi,o=new Vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ei,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],f=r[6],d=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],w=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,d-u,g-p,E-y).normalize(),s[1].setComponents(c+o,d+u,g+p,E+y).normalize(),s[2].setComponents(c+a,d+h,g+_,E+w).normalize(),s[3].setComponents(c-a,d-h,g-_,E-w).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,d-f,g-m,E-M).normalize();else if(s[4].setComponents(c-l,d-f,g-m,E-M).normalize(),t===Ei)s[5].setComponents(c+l,d+f,g+m,E+M).normalize();else if(t===Go)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kr)}intersectsSprite(e){kr.center.set(0,0,0);let t=eM.distanceTo(e.center);return kr.radius=.7071067811865476+t,kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(kr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(su.x=s.normal.x>0?e.max.x:e.min.x,su.y=s.normal.y>0?e.max.y:e.min.y,su.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(su)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},a0=new rt,Su=class i{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];a0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new vr),n[s].setFromProjectionMatrix(a0,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new vr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var $r=class extends qn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Eu=new O,Tu=new O,l0=new rt,Ka=new yr,ru=new ai,_f=new O,c0=new O,Kr=class extends At{constructor(e=new Xt,t=new $r){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Eu.fromBufferAttribute(t,s-1),Tu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Eu.distanceTo(Tu);e.setAttribute("lineDistance",new kt(n,1))}else et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ru.copy(n.boundingSphere),ru.applyMatrix4(s),ru.radius+=r,e.ray.intersectsSphere(ru)===!1)return;l0.copy(s).invert(),Ka.copy(e.ray).applyMatrix4(l0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),w=ou(this,e,Ka,l,g,y,_);w&&t.push(w)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(d),g=ou(this,e,Ka,l,_,m,p-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p-1;_<m;_+=c){let g=ou(this,e,Ka,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=ou(this,e,Ka,l,p-1,d,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ou(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(Eu.fromBufferAttribute(a,s),Tu.fromBufferAttribute(a,r),t.distanceSqToSegment(Eu,Tu,_f,c0)>n)return;_f.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_f);if(!(c<e.near||c>e.far))return{distance:c,point:c0.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var u0=new O,h0=new O,ll=class extends Kr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)u0.fromBufferAttribute(t,s),h0.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+u0.distanceTo(h0);e.setAttribute("lineDistance",new kt(n,1))}else et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zr=class extends Kr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Jo=class extends qn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},d0=new rt,wf=new yr,au=new ai,lu=new O,cl=class extends At{constructor(e=new Xt,t=new Jo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),au.copy(n.boundingSphere),au.applyMatrix4(s),au.radius+=r,e.ray.intersectsSphere(au)===!1)return;d0.copy(s).invert(),wf.copy(e.ray).applyMatrix4(d0);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=f,_=d;p<_;p++){let m=c.getX(p);lu.fromBufferAttribute(h,m),f0(lu,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=f,_=d;p<_;p++)lu.fromBufferAttribute(h,p),f0(lu,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function f0(i,e,t,n,s,r,o){let a=wf.distanceSqToPoint(i);if(a<t){let l=new O;wf.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var ul=class extends Rn{constructor(e=[],t=io,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},cs=class extends Rn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var qi=class extends Rn{constructor(e,t,n=Zi,s,r,o,a=sn,l=sn,c,u=Bs,h=1){if(u!==Bs&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:h};super(f,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},hl=class extends qi{constructor(e,t=Zi,n=io,s,r,o=sn,a=sn,l,c=Bs){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},dl=class extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vn=class i extends Xt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2));function p(_,m,g,y,w,M,E,T,x,S,I){let C=M/x,L=E/S,U=M/2,G=E/2,P=T/2,V=x+1,q=S+1,W=0,ue=0,H=new O;for(let $=0;$<q;$++){let Q=$*L-G;for(let he=0;he<V;he++){let Ue=he*C-U;H[_]=Ue*y,H[m]=Q*w,H[g]=P,c.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[g]=T>0?1:-1,u.push(H.x,H.y,H.z),h.push(he/x),h.push(1-$/S),W+=1}}for(let $=0;$<S;$++)for(let Q=0;Q<x;Q++){let he=f+Q+V*$,Ue=f+Q+V*($+1),j=f+(Q+1)+V*($+1),ge=f+(Q+1)+V*$;l.push(he,Ue,ge),l.push(Ue,j,ge),ue+=6}a.addGroup(d,ue,I),d+=ue,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var fl=class i extends Xt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new O,u=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yi=class i extends Xt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],f=[],d=[],p=0,_=[],m=n/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function y(){let M=new O,E=new O,T=0,x=(t-e)/n;for(let S=0;S<=r;S++){let I=[],C=S/r,L=C*(t-e)+e;for(let U=0;U<=s;U++){let G=U/s,P=G*l+a,V=Math.sin(P),q=Math.cos(P);E.x=L*V,E.y=-C*n+m,E.z=L*q,h.push(E.x,E.y,E.z),M.set(V,x,q).normalize(),f.push(M.x,M.y,M.z),d.push(G,1-C),I.push(p++)}_.push(I)}for(let S=0;S<s;S++)for(let I=0;I<r;I++){let C=_[I][S],L=_[I+1][S],U=_[I+1][S+1],G=_[I][S+1];(e>0||I!==0)&&(u.push(C,L,G),T+=3),(t>0||I!==r-1)&&(u.push(L,U,G),T+=3)}c.addGroup(g,T,0),g+=T}function w(M){let E=p,T=new it,x=new O,S=0,I=M===!0?e:t,C=M===!0?1:-1;for(let U=1;U<=s;U++)h.push(0,m*C,0),f.push(0,C,0),d.push(.5,.5),p++;let L=p;for(let U=0;U<=s;U++){let P=U/s*l+a,V=Math.cos(P),q=Math.sin(P);x.x=I*q,x.y=m*C,x.z=I*V,h.push(x.x,x.y,x.z),f.push(0,C,0),T.x=V*.5+.5,T.y=q*.5*C+.5,d.push(T.x,T.y),p++}for(let U=0;U<s;U++){let G=E+U,P=L+U;M===!0?u.push(P,P+1,G):u.push(P+1,P,G),S+=3}c.addGroup(g,S,M===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},pl=class i extends Yi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wu=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],f=n[s+1]-u,d=(o-u)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new it:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new O,s=[],r=[],o=[],a=new O,l=new rt;for(let d=0;d<=e;d++){let p=d/e;s[d]=this.getTangentAt(p,new O)}r[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(wt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,p))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(wt(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],d*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function ip(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var p0=new O,m0=new O,yf=new ip,vf=new ip,Mf=new ip,ml=class extends wu{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new O){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(m0.subVectors(s[0],s[1]).add(s[0]),c=m0);let h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(p0.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=p0),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),yf.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,p,_,m),vf.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,p,_,m),Mf.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(yf.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),vf.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Mf.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(yf.calc(l),vf.calc(l),Mf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new O().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var ei=class i extends Xt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,d=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*f-o;for(let w=0;w<c;w++){let M=w*h-r;p.push(M,-y,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,M=y+c*(g+1),E=y+1+c*(g+1),T=y+1+c*g;d.push(w,M,T),d.push(M,E,T)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},gl=class i extends Xt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,f=(t-e)/s,d=new O,p=new it;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let g=r+m/n*o;d.x=h*Math.cos(g),d.y=h*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,u.push(p.x,p.y)}h+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let g=0;g<n;g++){let y=g+m,w=y,M=y+n+1,E=y+n+2,T=y+1;a.push(w,M,T),a.push(M,E,T)}}this.setIndex(a),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var $i=class i extends Xt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new O,f=new O,d=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let y=[],w=g/n,M=o+w*a,E=e*Math.cos(M),T=Math.sqrt(e*e-E*E),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){let I=S/t,C=s+I*r;h.x=-T*Math.cos(C),h.y=E,h.z=T*Math.sin(C),p.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(I+x,1-w),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=u[g][y+1],M=u[g][y],E=u[g+1][y],T=u[g+1][y+1];(g!==0||o>0)&&d.push(w,M,T),(g!==n-1||l<Math.PI)&&d.push(M,E,T)}this.setIndex(d),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xl=class i extends Xt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],f=new O,d=new O,p=new O;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),c.push(d.x,d.y,d.z),f.x=e*Math.cos(y),f.y=e*Math.sin(y),p.subVectors(d,f).normalize(),u.push(p.x,p.y,p.z),h.push(g/s),h.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(g,y,M),l.push(y,w,M)}this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(u,3)),this.setAttribute("uv",new kt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ro(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(g0(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(g0(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function $n(i){let e={};for(let t=0;t<i.length;t++){let n=ro(i[t]);for(let s in n)e[s]=n[s]}return e}function g0(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tM(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}var Ci={clone:ro,merge:$n},nM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xn=class extends qn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nM,this.fragmentShader=iM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=tM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new it().fromArray(s.value);break;case"v3":this.uniforms[n].value=new O().fromArray(s.value);break;case"v4":this.uniforms[n].value=new $t().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new rt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jo=class extends xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},li=class extends qn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ti=class extends li{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Wr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Wr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var _l=class extends qn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Ki=class extends qn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ca,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=zu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Au=class extends qn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ru=class extends qn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var yl=class extends $r{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function gr(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Za(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function sM(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function x0(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function rM(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var us=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Cu=class extends us{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gr,endingEnd:Gr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vr:r=e,a=2*t-n;break;case Qa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vr:o=e,l=2*n-t;break;case Qa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-f*m+2*f*_-f*p,y=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*p+1,w=(-1-d)*m+(1.5+d)*_+.5*p,M=d*m-d*_;for(let E=0;E!==a;++E)r[E]=g*o[u+E]+y*o[c+E]+w*o[l+E]+M*o[h+E];return r}},vl=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}},Iu=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Pu=class extends us{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let f=a*2,d=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=d*f+p*2,y=h[g],w=h[g+1],M=e*f+p*2,E=u[M],T=u[M+1],x=aM(n,t,y,E,s);r[p]=ux(x,_,w,T,m)}return r}};function ux(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function oM(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function aM(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=ux(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=oM(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var ci=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Za(e.settings)&&(n.settings={inTangents:gr(e.settings.inTangents,Array),outTangents:gr(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Iu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Pu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Xr:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case hu:t=this.InterpolantFactoryMethodSmooth;break;case Tf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xr;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return hu;case this.InterpolantFactoryMethodBezier:return Tf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Za(this.settings)&&(_0(this.settings.inTangents,e),_0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Za(this.settings)&&(y0(this.settings.inTangents,e),y0(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ht("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){ht("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&_v(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){ht("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hu,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[f+p]||_!==t[d+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Za(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function y0(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}ci.prototype.ValueTypeName="";ci.prototype.TimeBufferType=Float32Array;ci.prototype.ValueBufferType=Float32Array;ci.prototype.DefaultInterpolation=qr;var Hs=class extends ci{constructor(e,t,n){super(e,t,n)}};Hs.prototype.ValueTypeName="bool";Hs.prototype.ValueBufferType=Array;Hs.prototype.DefaultInterpolation=Xr;Hs.prototype.InterpolantFactoryMethodLinear=void 0;Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var Ml=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}};Ml.prototype.ValueTypeName="color";var zs=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}};zs.prototype.ValueTypeName="number";var Lu=class extends us{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Xn.slerpFlat(r,0,o,c-a,o,c,l);return r}},ks=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lu(this.times,this.values,this.getValueSize(),e)}};ks.prototype.ValueTypeName="quaternion";ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Gs=class extends ci{constructor(e,t,n){super(e,t,n)}};Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Xr;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;var Mr=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}};Mr.prototype.ValueTypeName="vector";var Jr=class{constructor(e="",t=-1,n=[],s=Ah){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ps(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(cM(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(ci.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=sM(l);l=x0(l,1,u),c=x0(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new zs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],f=s[h];f||(s[h]=f=[]),f.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function lM(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zs;case"vector":case"vector2":case"vector3":case"vector4":return Mr;case"color":return Ml;case"quaternion":return ks;case"bool":case"boolean":return Hs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function cM(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=lM(i.type);if(i.times===void 0){let n=[],s=[];rM(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Za(i.settings)&&(t.settings={inTangents:gr(i.settings.inTangents,Float32Array),outTangents:gr(i.settings.outTangents,Float32Array)}),t}var os={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(v0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!v0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function v0(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Du=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hx=new Du,hs=class{constructor(e){this.manager=e!==void 0?e:hx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};hs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os={},Af=class extends Error{constructor(e,t){super(e),this.response=t}},Qo=class extends hs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=os.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Os[e]!==void 0){Os[e].push({onLoad:t,onProgress:n,onError:s});return}Os[e]=[],Os[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Os[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0,_=0,m=new ReadableStream({start(g){y();function y(){h.read().then(({done:w,value:M})=>{if(w)g.close();else{_+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:d});for(let T=0,x=u.length;T<x;T++){let S=u[T];S.onProgress&&S.onProgress(E)}g.enqueue(M),y()}},w=>{g.error(w)})}}});return new Response(m)}else throw new Af(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{os.add(`file:${e}`,c);let u=Os[e];delete Os[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{let u=Os[e];if(u===void 0)throw this.manager.itemError(e),c;delete Os[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Oo=new WeakMap,Nu=class extends hs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=os.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=Oo.get(o);h===void 0&&(h=[],Oo.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Vo("img");function l(){u(),t&&t(this);let h=Oo.get(this)||[];for(let f=0;f<h.length;f++){let d=h[f];d.onLoad&&d.onLoad(this)}Oo.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),os.remove(`image:${e}`);let f=Oo.get(this)||[];for(let d=0;d<f.length;d++){let p=f[d];p.onError&&p.onError(h)}Oo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),os.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Vs=class extends hs{constructor(e){super(e)}load(e,t,n,s){let r=new Rn,o=new Nu(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},jr=class extends At{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ea=class extends jr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},bf=new rt,M0=new O,b0=new O,ta=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Yn,this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;M0.setFromMatrixPosition(e.matrixWorld),t.position.copy(M0),b0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(b0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){bf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(bf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Go||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(bf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},cu=new O,uu=new Xn,rs=new O,bl=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cu,uu,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,rs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cu,uu,rs),rs.x===1&&rs.y===1&&rs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,uu,rs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mr=new O,S0=new it,E0=new it,Hn=class extends bl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,S0,E0),t.subVectors(E0,S0)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Rf=class extends ta{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Sl=class extends jr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Rf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Cf=class extends ta{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0}},Qr=class extends jr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ti=class extends bl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},If=class extends ta{constructor(){super(new Ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},br=class extends jr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new If}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Ws=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Sf=new WeakMap,El=class extends hs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&et("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&et("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=os.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{Sf.has(o)===!0?(s&&s(Sf.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return os.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Sf.set(l,c),os.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});os.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Fo=-90,Bo=1,na=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(Fo,Bo,e,t);s.layers=this.layers,this.add(s);let r=new Hn(Fo,Bo,e,t);r.layers=this.layers,this.add(r);let o=new Hn(Fo,Bo,e,t);o.layers=this.layers,this.add(o);let a=new Hn(Fo,Bo,e,t);a.layers=this.layers,this.add(a);let l=new Hn(Fo,Bo,e,t);l.layers=this.layers,this.add(l);let c=new Hn(Fo,Bo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===Ei)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Uu=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Tl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=uM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function uM(){this._document.hidden===!1&&this.reset()}var Ou=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Xn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Xn.multiplyQuaternionsFlat(e,o,e,t,e,n),Xn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},rp="\\[\\]\\.:\\/",hM=new RegExp("["+rp+"]","g"),op="[^"+rp+"]",dM="[^"+rp.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",op),pM=/(WCOD+)?/.source.replace("WCOD",dM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",op),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",op),xM=new RegExp("^"+fM+pM+mM+gM+"$"),_M=["material","materials","bones","map"],Pf=class{constructor(e,t,n){let s=n||jt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},jt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hM,"")}static parseTrackName(e){let t=xM.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_M.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};jt.Composite=Pf;jt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};jt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};jt.prototype.GetterByBindingType=[jt.prototype._getValue_direct,jt.prototype._getValue_array,jt.prototype._getValue_arrayElement,jt.prototype._getValue_toArray];jt.prototype.SetterByBindingTypeAndVersioning=[[jt.prototype._setValue_direct,jt.prototype._setValue_direct_setNeedsUpdate,jt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_array,jt.prototype._setValue_array_setNeedsUpdate,jt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_arrayElement,jt.prototype._setValue_arrayElement_setNeedsUpdate,jt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[jt.prototype._setValue_fromArray,jt.prototype._setValue_fromArray_setNeedsUpdate,jt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fu=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Gr,endingEnd:Gr};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=$0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Z0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Ah:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===K0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Y0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Vr,s.endingEnd=Vr):(e?s.endingStart=this.zeroSlopeAtStart?Vr:Gr:s.endingStart=Qa,t?s.endingEnd=this.zeroSlopeAtEnd?Vr:Gr:s.endingEnd=Qa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},yM=new Float32Array(1),eo=class extends Wi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let f=s[h],d=f.name,p=u[d];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;p=new Ou(jt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new vl(new Float32Array(2),new Float32Array(2),1,yM),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?Jr.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Ah),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Fu(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Jr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var T0=new rt,wl=class{constructor(e,t,n=0,s=1/0){this.ray=new yr(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return T0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(T0),this}intersectObject(e,t=!0,n=[]){return Lf(e,this,n,t),n.sort(w0),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Lf(e[s],this,n,t);return n.sort(w0),n}};function w0(i,e){return i.distance-e.distance}function Lf(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Lf(r[o],e,t,!0)}}var dp=class dp{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};dp.prototype.isMatrix2=!0;var Df=dp;function ap(i,e,t,n){let s=vM(n);switch(t){case Xf:return i*e;case Yu:return i*e/s.components*s.byteLength;case $u:return i*e/s.components*s.byteLength;case Sr:return i*e*2/s.components*s.byteLength;case Ku:return i*e*2/s.components*s.byteLength;case qf:return i*e*3/s.components*s.byteLength;case ui:return i*e*4/s.components*s.byteLength;case Zu:return i*e*4/s.components*s.byteLength;case Ol:case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Bl:case Hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ju:case eh:return Math.max(i,16)*Math.max(e,8)/4;case Ju:case Qu:return Math.max(i,8)*Math.max(e,8)/2;case th:case nh:case sh:case rh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ih:case zl:case oh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ch:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case uh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ph:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case mh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _h:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Mh:case bh:case Sh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Eh:case Th:return Math.ceil(i/4)*Math.ceil(e/4)*8;case kl:case wh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vM(i){switch(i){case Yn:case kf:return{byteLength:1,components:1};case aa:case Gf:case En:return{byteLength:2,components:1};case Xu:case qu:return{byteLength:2,components:4};case Zi:case Wu:case xi:return{byteLength:4,components:1};case Vf:case Wf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dx(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function bM(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<h.length;d++){let p=h[f],_=h[d];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,p=h.length;d<p;d++){let _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var SM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,EM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,AM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,OM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,VM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,qM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,$M=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ib=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ob=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ab=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,db=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_b=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Eb=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ab=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ib=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Db=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ub=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ob=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Hb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$b=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ES=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:SM,alphahash_pars_fragment:EM,alphamap_fragment:TM,alphamap_pars_fragment:wM,alphatest_fragment:AM,alphatest_pars_fragment:RM,aomap_fragment:CM,aomap_pars_fragment:IM,batching_pars_vertex:PM,batching_vertex:LM,begin_vertex:DM,beginnormal_vertex:NM,bsdfs:UM,iridescence_fragment:OM,bumpmap_pars_fragment:FM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:zM,clipping_planes_vertex:kM,color_fragment:GM,color_pars_fragment:VM,color_pars_vertex:WM,color_vertex:XM,common:qM,defaultnormal_vertex:YM,displacementmap_pars_vertex:$M,displacementmap_vertex:KM,emissivemap_fragment:ZM,emissivemap_pars_fragment:JM,colorspace_fragment:jM,colorspace_pars_fragment:QM,envmap_fragment:eb,envmap_common_pars_fragment:tb,envmap_pars_fragment:nb,envmap_pars_vertex:ib,envmap_physical_pars_fragment:pb,envmap_vertex:sb,fog_vertex:rb,fog_pars_vertex:ob,fog_fragment:ab,fog_pars_fragment:lb,gradientmap_pars_fragment:cb,lightmap_pars_fragment:ub,lights_lambert_fragment:hb,lights_lambert_pars_fragment:db,lights_pars_begin:fb,lights_toon_fragment:mb,lights_toon_pars_fragment:gb,lights_phong_fragment:xb,lights_phong_pars_fragment:_b,lights_physical_fragment:yb,lights_physical_pars_fragment:vb,lights_fragment_begin:Mb,lights_fragment_maps:bb,lights_fragment_end:Sb,lightprobes_pars_fragment:Eb,logdepthbuf_fragment:Tb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Ab,logdepthbuf_vertex:Rb,map_fragment:Cb,map_pars_fragment:Ib,map_particle_fragment:Pb,map_particle_pars_fragment:Lb,metalnessmap_fragment:Db,metalnessmap_pars_fragment:Nb,morphinstance_vertex:Ub,morphcolor_vertex:Ob,morphnormal_vertex:Fb,morphtarget_pars_vertex:Bb,morphtarget_vertex:Hb,normal_fragment_begin:zb,normal_fragment_maps:kb,normal_pars_fragment:Gb,normal_pars_vertex:Vb,normal_vertex:Wb,normalmap_pars_fragment:Xb,clearcoat_normal_fragment_begin:qb,clearcoat_normal_fragment_maps:Yb,clearcoat_pars_fragment:$b,iridescence_pars_fragment:Kb,opaque_fragment:Zb,packing:Jb,premultiplied_alpha_fragment:jb,project_vertex:Qb,dithering_fragment:eS,dithering_pars_fragment:tS,roughnessmap_fragment:nS,roughnessmap_pars_fragment:iS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:rS,shadowmap_vertex:oS,shadowmask_pars_fragment:aS,skinbase_vertex:lS,skinning_pars_vertex:cS,skinning_vertex:uS,skinnormal_vertex:hS,specularmap_fragment:dS,specularmap_pars_fragment:fS,tonemapping_fragment:pS,tonemapping_pars_fragment:mS,transmission_fragment:gS,transmission_pars_fragment:xS,uv_pars_fragment:_S,uv_pars_vertex:yS,uv_vertex:vS,worldpos_vertex:MS,background_vert:bS,background_frag:SS,backgroundCube_vert:ES,backgroundCube_frag:TS,cube_vert:wS,cube_frag:AS,depth_vert:RS,depth_frag:CS,distance_vert:IS,distance_frag:PS,equirect_vert:LS,equirect_frag:DS,linedashed_vert:NS,linedashed_frag:US,meshbasic_vert:OS,meshbasic_frag:FS,meshlambert_vert:BS,meshlambert_frag:HS,meshmatcap_vert:zS,meshmatcap_frag:kS,meshnormal_vert:GS,meshnormal_frag:VS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:qS,meshphysical_frag:YS,meshtoon_vert:$S,meshtoon_frag:KS,points_vert:ZS,points_frag:JS,shadow_vert:jS,shadow_frag:QS,sprite_vert:eE,sprite_frag:tE},Be={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},gs={basic:{uniforms:$n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:$n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:$n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:$n([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:$n([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new ze(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:$n([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:$n([Be.points,Be.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:$n([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:$n([Be.common,Be.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:$n([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:$n([Be.sprite,Be.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:$n([Be.common,Be.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:$n([Be.lights,Be.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};gs.physical={uniforms:$n([gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var Ch={r:0,b:0,g:0},nE=new rt,Nx=new ft;Nx.set(-1,0,0,0,1,0,0,0,1);function iE(i,e,t,n,s,r){let o=new ze(0),a=s===!0?0:1,l,c,u=null,h=0,f=null;function d(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function p(y){let w=!1,M=d(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,w){let M=d(w);M&&M.isCubeTexture?(c===void 0&&(c=new ot(new vn(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ro(gs.backgroundCube.uniforms),vertexShader:gs.backgroundCube.vertexShader,fragmentShader:gs.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nE.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nx),c.material.toneMapped=Mt.getTransfer(M.colorSpace)!==Gt,(u!==M||h!==M.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ot(new ei(2,2),new xn({name:"BackgroundMaterial",uniforms:ro(gs.background.uniforms),vertexShader:gs.background.vertexShader,fragmentShader:gs.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(M.colorSpace)!==Gt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Ch,sp(i)),t.buffers.color.setClear(Ch.r,Ch.g,Ch.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function sE(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(L,U,G,P,V){let q=!1,W=h(L,P,G,U);r!==W&&(r=W,c(r.object)),q=d(L,P,G,V),q&&p(L,P,G,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,M(L,U,G,P),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function h(L,U,G,P){let V=P.wireframe===!0,q=n[U.id];q===void 0&&(q={},n[U.id]=q);let W=L.isInstancedMesh===!0?L.id:0,ue=q[W];ue===void 0&&(ue={},q[W]=ue);let H=ue[G.id];H===void 0&&(H={},ue[G.id]=H);let $=H[V];return $===void 0&&($=f(l()),H[V]=$),$}function f(L){let U=[],G=[],P=[];for(let V=0;V<t;V++)U[V]=0,G[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:G,attributeDivisors:P,object:L,attributes:{},index:null}}function d(L,U,G,P){let V=r.attributes,q=U.attributes,W=0,ue=G.getAttributes();for(let H in ue)if(ue[H].location>=0){let Q=V[H],he=q[H];if(he===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(he=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(he=L.instanceColor)),Q===void 0||Q.attribute!==he||he&&Q.data!==he.data)return!0;W++}return r.attributesNum!==W||r.index!==P}function p(L,U,G,P){let V={},q=U.attributes,W=0,ue=G.getAttributes();for(let H in ue)if(ue[H].location>=0){let Q=q[H];Q===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let he={};he.attribute=Q,Q&&Q.data&&(he.data=Q.data),V[H]=he,W++}r.attributes=V,r.attributesNum=W,r.index=P}function _(){let L=r.newAttributes;for(let U=0,G=L.length;U<G;U++)L[U]=0}function m(L){g(L,0)}function g(L,U){let G=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;G[L]=1,P[L]===0&&(i.enableVertexAttribArray(L),P[L]=1),V[L]!==U&&(i.vertexAttribDivisor(L,U),V[L]=U)}function y(){let L=r.newAttributes,U=r.enabledAttributes;for(let G=0,P=U.length;G<P;G++)U[G]!==L[G]&&(i.disableVertexAttribArray(G),U[G]=0)}function w(L,U,G,P,V,q,W){W===!0?i.vertexAttribIPointer(L,U,G,V,q):i.vertexAttribPointer(L,U,G,P,V,q)}function M(L,U,G,P){_();let V=P.attributes,q=G.getAttributes(),W=U.defaultAttributeValues;for(let ue in q){let H=q[ue];if(H.location>=0){let $=V[ue];if($===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&($=L.instanceColor)),$!==void 0){let Q=$.normalized,he=$.itemSize,Ue=e.get($);if(Ue===void 0)continue;let j=Ue.buffer,ge=Ue.type,Ce=Ue.bytesPerElement,_e=ge===i.INT||ge===i.UNSIGNED_INT||$.gpuType===Wu;if($.isInterleavedBufferAttribute){let fe=$.data,A=fe.isInterleavedBuffer===!0?fe.stride:fe.itemSize,re=$.offset;if(fe.isInstancedInterleavedBuffer||fe.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)g(H.location+xe,fe.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let xe=0;xe<H.locationSize;xe++)m(H.location+xe);i.bindBuffer(i.ARRAY_BUFFER,j);for(let xe=0;xe<H.locationSize;xe++)w(H.location+xe,he/H.locationSize,ge,Q,A*Ce,(re+he/H.locationSize*xe)*Ce,_e)}else{if($.isInstancedBufferAttribute){for(let fe=0;fe<H.locationSize;fe++)g(H.location+fe,$.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let fe=0;fe<H.locationSize;fe++)m(H.location+fe);i.bindBuffer(i.ARRAY_BUFFER,j);for(let fe=0;fe<H.locationSize;fe++)w(H.location+fe,he/H.locationSize,ge,Q,he*Ce,he/H.locationSize*fe*Ce,_e)}}else if(W!==void 0){let Q=W[ue];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(H.location,Q);break;case 3:i.vertexAttrib3fv(H.location,Q);break;case 4:i.vertexAttrib4fv(H.location,Q);break;default:i.vertexAttrib1fv(H.location,Q)}}}}y()}function E(){I();for(let L in n){let U=n[L];for(let G in U){let P=U[G];for(let V in P){let q=P[V];for(let W in q)u(q[W].object),delete q[W];delete P[V]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let U=n[L.id];for(let G in U){let P=U[G];for(let V in P){let q=P[V];for(let W in q)u(q[W].object),delete q[W];delete P[V]}}delete n[L.id]}function x(L){for(let U in n){let G=n[U];for(let P in G){let V=G[P];if(V[L.id]===void 0)continue;let q=V[L.id];for(let W in q)u(q[W].object),delete q[W];delete V[L.id]}}}function S(L){for(let U in n){let G=n[U],P=L.isInstancedMesh===!0?L.id:0,V=G[P];if(V!==void 0){for(let q in V){let W=V[q];for(let ue in W)u(W[ue].object),delete W[ue];delete V[q]}delete G[P],Object.keys(G).length===0&&delete n[U]}}}function I(){C(),o=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function rE(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let d=0;d<u;d++)f+=c[d];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function oE(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ui&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let S=x===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Yn&&x!==xi&&!S&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(et("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:E,samples:T}}function aE(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Vi,a=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,w=y*4,M=g.clippingState||null;l.value=M,M=u(p,f,w,d);for(let E=0;E!==w;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=d+_*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,M=d;w!==_;++w,M+=4)o.copy(h[w]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Xl=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ul(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ro(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zn,blending:On});r.uniforms.tEquirect.value=t;let o=new ot(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=An),new na(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},dx=256,lE=3,cE=20,Ux=256,Ox=16,uE=3,hE=new O,dE=new ze,ha=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new na(1,10,null),this._boxMesh=new ot(new vn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=hE}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,f=l.autoClearColor,d=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(dE));let m=new na(n,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=f,l.autoClearDepth=d,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(dx,ep(e))}_fromTexture(e,t){e.mapping===io||e.mapping===ra?this._setSize(e.image.length===0?dx:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=fx(e,!1,!1),n=Math.log2(e)-lE;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=fx(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===io||e.mapping===ra?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=px()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=fE(),this._integrationMaterial=pE());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ox);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-uE)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(Ux*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=mE());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function fx(i,e,t){return new Xl(i,{minFilter:Ai,generateMipmaps:e,type:En,colorSpace:Qn,depthBuffer:t})}function Yl(i,e,t){return new xn({name:i,uniforms:e,vertexShader:Tt.cube_vert,fragmentShader:t,side:zn,blending:On,depthTest:!1,depthWrite:!1})}function fE(){return Yl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ux}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function pE(){return Yl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ox}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function mE(){return Yl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cE}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function px(){return Yl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function mx(){return Yl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gE(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,d=!1){return f==null?null:d?o(f):r(f)}function r(f){if(f&&f.isTexture){let d=f.mapping;if(d===ku||d===Gu)if(e.has(f)){let p=e.get(f).texture;return a(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let _=new Xl(p.height);return _.fromEquirectangularTexture(i,f),e.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){let d=f.mapping,p=d===ku||d===Gu,_=d===io||d===ra;if(p||_){let m=t.get(f),g=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==g)return n===null&&(n=new ha(i)),m=p?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),m.texture;if(m!==void 0)return m.texture;{let y=f.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new ha(i)),m=p?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,t.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function a(f,d){return d===ku?f.mapping=io:d===Gu&&(f.mapping=ra),f}function l(f){let d=0,p=6;for(let _=0;_<p;_++)f[_]!==void 0&&d++;return d===p}function c(f){let d=f.target;d.removeEventListener("dispose",c);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(f){let d=f.target;d.removeEventListener("dispose",u);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function xE(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wr("WebGLRenderer: "+n+" extension not supported."),s}}}function _E(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function h(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?rl:sl,M=new w(Math.ceil(y/3)*6,1),E=M.array;if(_!==null){let x=_.array;g=_.version;for(let S=0,I=0;S<y;S+=3){let C=x[S+0],L=x[S+1],U=x[S+2];E[I++]=C,E[I++]=L,E[I++]=L,E[I++]=U,E[I++]=U,E[I++]=C}}else{g=m.version;for(let x=0,S=0;x<y;x+=3){let I=x+0,C=x+1,L=x+2;E[S++]=I,E[S++]=C,E[S++]=C,E[S++]=L,E[S++]=L,E[S++]=I}}M.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,M)}function f(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&h(p)}else h(p);return r.get(p)}function d(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:f,dispose:d}}function yE(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,f){i.drawElements(n,f,r,h*o),t.update(f,n,1)}function c(h,f,d){d!==0&&(i.drawElementsInstanced(n,f,r,h*o,d),t.update(f,n,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,h,0,d);let _=0;for(let m=0;m<d;m++)_+=f[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function vE(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:ht("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ME(i,e,t){let n=new WeakMap,s=new $t;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let I=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",I)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;d===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let M=a.attributes.position.count*w,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*E*4*h),x=new nl(T,M,E,h);x.type=xi,x.needsUpdate=!0;let S=w*4;for(let C=0;C<h;C++){let L=m[C],U=g[C],G=y[C],P=M*E*4*C;for(let V=0;V<L.count;V++){let q=V*S;d===!0&&(s.fromBufferAttribute(L,V),T[P+q+0]=s.x,T[P+q+1]=s.y,T[P+q+2]=s.z,T[P+q+3]=0),p===!0&&(s.fromBufferAttribute(U,V),T[P+q+4]=s.x,T[P+q+5]=s.y,T[P+q+6]=s.z,T[P+q+7]=0),_===!0&&(s.fromBufferAttribute(G,V),T[P+q+8]=s.x,T[P+q+9]=s.y,T[P+q+10]=s.z,T[P+q+11]=G.itemSize===4?s.w:1)}}f={count:h,texture:x,size:new it(M,E)},n.set(a,f),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function bE(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var SE={[Cl]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Pl]:"CINEON_TONE_MAPPING",[Ll]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[Ul]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function EE(i,e,t,n,s,r){let o=new gn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Xt;u.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new kt([0,2,0,0,2,0],2));let h=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ot(u,h),d=new Ti(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,w=[],M=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),l!==null&&l.setSize(E,T);for(let x=0;x<w.length;x++){let S=w[x];S.setSize&&S.setSize(E,T)}},this.setEffects=function(E){w=E,M=w.length>0&&w[0].isRenderPass===!0;let T=o.width,x=o.height;w.length>0&&a===null&&(a=new gn(T,x,{type:En,depthBuffer:!1,stencilBuffer:!1}),l=new gn(T,x,{type:En,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&w.some(I=>I.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&c===null&&(c=new qi(T,x),r===!0&&(c.format=Ji,c.type=Xs)),o.dispose(),o.depthTexture=S?c:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let I=0;I<w.length;I++){let C=w[I];C.setSize&&C.setSize(T,x),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(E,T){if(m||E.toneMapping===fs&&w.length===0)return!1;if(y=T,T!==null){let x=T.width,S=T.height;(o.width!==x||o.height!==S)&&this.setSize(x,S)}return M===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=fs,!0},this.hasRenderPass=function(){return M},this.end=function(E,T){E.toneMapping=g,m=!0;let x=o,S=a;for(let I=0;I<w.length;I++){let C=w[I];C.enabled!==!1&&(C.render(E,S,x,T),C.needsSwap!==!1&&(x=S,S=S===a?l:a))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,h.defines={},Mt.getTransfer(p)===Gt&&(h.defines.SRGB_TRANSFER="");let I=SE[_];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(y),E.render(f,d),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Fx=new Rn,Bx=new qi(1,1),Hx=new hl(1),zx=new nl,kx=new bu,Gx=new ul,gx=[],xx=[],_x=new Float32Array(16),yx=new Float32Array(9),vx=new Float32Array(4);function da(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=gx[s];if(r===void 0&&(r=new Float32Array(s),gx[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Cn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function In(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ph(i,e){let t=xx[e];t===void 0&&(t=new Int32Array(e),xx[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function TE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function wE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2fv(this.addr,e),In(t,e)}}function AE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Cn(t,e))return;i.uniform3fv(this.addr,e),In(t,e)}}function RE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4fv(this.addr,e),In(t,e)}}function CE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),In(t,e)}else{if(Cn(t,n))return;vx.set(n),i.uniformMatrix2fv(this.addr,!1,vx),In(t,n)}}function IE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),In(t,e)}else{if(Cn(t,n))return;yx.set(n),i.uniformMatrix3fv(this.addr,!1,yx),In(t,n)}}function PE(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Cn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),In(t,e)}else{if(Cn(t,n))return;_x.set(n),i.uniformMatrix4fv(this.addr,!1,_x),In(t,n)}}function LE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function DE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2iv(this.addr,e),In(t,e)}}function NE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3iv(this.addr,e),In(t,e)}}function UE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4iv(this.addr,e),In(t,e)}}function OE(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function FE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Cn(t,e))return;i.uniform2uiv(this.addr,e),In(t,e)}}function BE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Cn(t,e))return;i.uniform3uiv(this.addr,e),In(t,e)}}function HE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Cn(t,e))return;i.uniform4uiv(this.addr,e),In(t,e)}}function Lh(i){return i.version===0&&(i.compareFunction=Zf,i.needsUpdate=!0),i}function zE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Lh(Bx):r=Fx,t.setTexture2D(e||r,s)}function kE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kx,s)}function GE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Lh(Hx):r=Gx,t.setTextureCube(e||r,s)}function VE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zx,s)}function WE(i){switch(i){case 5126:return TE;case 35664:return wE;case 35665:return AE;case 35666:return RE;case 35674:return CE;case 35675:return IE;case 35676:return PE;case 5124:case 35670:return LE;case 35667:case 35671:return DE;case 35668:case 35672:return NE;case 35669:case 35673:return UE;case 5125:return OE;case 36294:return FE;case 36295:return BE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return zE;case 35679:case 36299:case 36307:return kE;case 35680:case 36300:case 36308:case 36293:return GE;case 36289:case 36303:case 36311:case 36292:return VE}}function XE(i,e){i.uniform1fv(this.addr,e)}function qE(i,e){let t=da(e,this.size,2);i.uniform2fv(this.addr,t)}function YE(i,e){let t=da(e,this.size,3);i.uniform3fv(this.addr,t)}function $E(i,e){let t=da(e,this.size,4);i.uniform4fv(this.addr,t)}function KE(i,e){let t=da(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ZE(i,e){let t=da(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function JE(i,e){let t=da(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function jE(i,e){i.uniform1iv(this.addr,e)}function QE(i,e){i.uniform2iv(this.addr,e)}function e1(i,e){i.uniform3iv(this.addr,e)}function t1(i,e){i.uniform4iv(this.addr,e)}function n1(i,e){i.uniform1uiv(this.addr,e)}function i1(i,e){i.uniform2uiv(this.addr,e)}function s1(i,e){i.uniform3uiv(this.addr,e)}function r1(i,e){i.uniform4uiv(this.addr,e)}function o1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Lh(Bx):o=Fx;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function a1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||kx,r[o])}function l1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Lh(Hx):o=Gx;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function c1(i,e,t){let n=this.cache,s=e.length,r=Ph(t,s);Cn(n,r)||(i.uniform1iv(this.addr,r),In(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||zx,r[o])}function u1(i){switch(i){case 5126:return XE;case 35664:return qE;case 35665:return YE;case 35666:return $E;case 35674:return KE;case 35675:return ZE;case 35676:return JE;case 5124:case 35670:return jE;case 35667:case 35671:return QE;case 35668:case 35672:return e1;case 35669:case 35673:return t1;case 5125:return n1;case 36294:return i1;case 36295:return s1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return a1;case 35680:case 36300:case 36308:case 36293:return l1;case 36289:case 36303:case 36311:case 36292:return c1}}var mp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=WE(t.type)}},gp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u1(t.type)}},xp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},fp=/(\w+)(\])?(\[|\.)?/g;function Mx(i,e){i.seq.push(e),i.map[e.id]=e}function h1(i,e,t){let n=i.name,s=n.length;for(fp.lastIndex=0;;){let r=fp.exec(n),o=fp.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mx(t,c===void 0?new mp(a,i,e):new gp(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new xp(a),Mx(t,h)),t=h}}}var ua=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);h1(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function bx(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var d1=37297,f1=0;function p1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Sx=new ft;function m1(i){Mt._getMatrix(Sx,Mt.workingColorSpace,i);let e=`mat3( ${Sx.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(i)){case el:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ex(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+p1(i.getShaderSource(e),a)}else return r}function g1(i,e){let t=m1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var x1={[Cl]:"Linear",[Il]:"Reinhard",[Pl]:"Cineon",[Ll]:"ACESFilmic",[Nl]:"AgX",[Ul]:"Neutral",[Dl]:"Custom"};function _1(i,e){let t=x1[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ih=new O;function y1(){Mt.getLuminanceCoefficients(Ih);let i=Ih.x.toFixed(4),e=Ih.y.toFixed(4),t=Ih.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wl).join(`
`)}function M1(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b1(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wl(i){return i!==""}function Tx(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S1=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(i){return i.replace(S1,E1)}function E1(i,e){let t=Tt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _p(t)}var T1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ax(i){return i.replace(T1,w1)}function w1(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rx(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var A1={[to]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function R1(i){return A1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var C1={[ra]:"ENVMAP_MODE_REFRACTION"};function I1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":C1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var P1={[zu]:"ENVMAP_BLENDING_MULTIPLY",[W0]:"ENVMAP_BLENDING_MIX",[X0]:"ENVMAP_BLENDING_ADD"};function L1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":P1[i.combine]||"ENVMAP_BLENDING_NONE"}function D1(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=R1(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=I1(t),h=L1(t),f=v1(t),d=M1(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Wl).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Wl).join(`
`),m.length>0&&(m+=`
`)):(_=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wl).join(`
`),m=[Rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fs?"#define TONE_MAPPING":"",t.toneMapping!==fs?Tt.tonemapping_pars_fragment:"",t.toneMapping!==fs?_1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,g1("linearToOutputTexel",t.outputColorSpace),y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wl).join(`
`)),o=_p(o),o=Tx(o,t),o=wx(o,t),a=_p(a),a=Tx(a,t),a=wx(a,t),o=Ax(o),a=Ax(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===jf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,w=g+m+a,M=bx(s,s.VERTEX_SHADER,y),E=bx(s,s.FRAGMENT_SHADER,w);s.attachShader(p,M),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(C){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(p)||"",U=s.getShaderInfoLog(M)||"",G=s.getShaderInfoLog(E)||"",P=L.trim(),V=U.trim(),q=G.trim(),W=!0,ue=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,E);else{let H=Ex(s,M,"vertex"),$=Ex(s,E,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+H+`
`+$)}else P!==""?et("WebGLProgram: Program Info Log:",P):(V===""||q==="")&&(ue=!1);ue&&(C.diagnostics={runnable:W,programLog:P,vertexShader:{log:V,prefix:_},fragmentShader:{log:q,prefix:m}})}s.deleteShader(M),s.deleteShader(E),x=new ua(s,p),S=b1(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let S;this.getAttributes=function(){return S===void 0&&T(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(p,d1)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}var N1=0,yp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vp(e),t.set(e,n)),n}},vp=class{constructor(e){this.id=N1++,this.code=e,this.usedTimes=0}};function U1(i){return i===Sr||i===zl||i===kl}function O1(i,e,t,n,s,r){let o=new qo,a=new yp,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,S,I,C,L,U){let G=C.fog,P=L.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||V,q),ue=f[x.type],H=n.precision;x.precision!==null&&(H=n.getMaxPrecision(x.precision),H!==x.precision&&et("WebGLProgram.getParameters:",x.precision,"not supported, using",H,"instead."));let $=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Q=$!==void 0?$.length:0,he=0;P.morphAttributes.position!==void 0&&(he=1),P.morphAttributes.normal!==void 0&&(he=2),P.morphAttributes.color!==void 0&&(he=3);let Ue,j,ge,Ce;if(ue){let me=gs[ue];Ue=me.vertexShader,j=me.fragmentShader}else{Ue=x.vertexShader,j=x.fragmentShader;let me=a.getVertexShaderStage(x),Pt=a.getFragmentShaderStage(x);a.update(x,me,Pt),ge=me.id,Ce=Pt.id}let _e=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),A=L.isInstancedMesh===!0,re=L.isBatchedMesh===!0,xe=!!x.map,Oe=!!x.matcap,$e=!!W,He=$e&&W.isPMREMTexture===!0,Je=!!x.aoMap,tt=!!x.lightMap,Qe=!!x.bumpMap&&x.wireframe===!1,ke=!!x.normalMap,K=!!x.displacementMap,nt=!!x.emissiveMap,Nt=!!x.metalnessMap,Vt=!!x.roughnessMap,un=x.anisotropy>0,z=x.clearcoat>0,It=x.diffuseRoughness>0,mt=x.dispersion>0,_t=x.retroreflectivity>0,Me=x.iridescence>0,Ut=x.sheen>0,Ge=x.transmission>0,je=un&&!!x.anisotropyMap,R=z&&!!x.clearcoatMap,v=z&&!!x.clearcoatNormalMap,k=z&&!!x.clearcoatRoughnessMap,pe=It&&!!x.diffuseRoughnessMap,ae=Me&&!!x.iridescenceMap,be=Me&&!!x.iridescenceThicknessMap,we=Ut&&!!x.sheenColorMap,ne=Ut&&!!x.sheenRoughnessMap,ie=!!x.specularMap,Ee=!!x.specularColorMap,D=!!x.specularIntensityMap,oe=Ge&&!!x.transmissionMap,te=Ge&&!!x.thicknessMap,Ae=!!x.gradientMap,ye=!!x.alphaMap,Te=x.alphaTest>0,Ye=!!x.alphaHash,ct=!!x.extensions,ve=fs;x.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(ve=i.toneMapping);let Ke=He?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,at={shaderID:ue,shaderType:x.type,shaderName:x.name,vertexShader:Ue,fragmentShader:j,defines:x.defines,customVertexShaderID:ge,customFragmentShaderID:Ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:H,batching:re,batchingColor:re&&L._colorsTexture!==null,instancing:A,instancingColor:A&&L.instanceColor!==null,instancingMorph:A&&L.morphTexture!==null,outputColorSpace:_e===null?i.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:xe,matcap:Oe,envMap:$e,envMapMode:$e&&W.mapping,envMapPMREM:He,envMapMaxLod:He?Ke.length-1:null,envMapSize:He?Ke[0].width:null,aoMap:Je,lightMap:tt,bumpMap:Qe,normalMap:ke,displacementMap:K,emissiveMap:nt,normalMapObjectSpace:ke&&x.normalMapType===j0,normalMapTangentSpace:ke&&x.normalMapType===ca,packedNormalMap:ke&&x.normalMapType===ca&&U1(x.normalMap.format),metalnessMap:Nt,roughnessMap:Vt,anisotropy:un,anisotropyMap:je,clearcoat:z,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:k,diffuseRoughness:It,diffuseRoughnessMap:pe,dispersion:mt,retroreflection:_t,iridescence:Me,iridescenceMap:ae,iridescenceThicknessMap:be,sheen:Ut,sheenColorMap:we,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:Ee,specularIntensityMap:D,transmission:Ge,transmissionMap:oe,thicknessMap:te,gradientMap:Ae,opaque:x.transparent===!1&&x.blending===sa&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:Te,alphaHash:Ye,combine:x.combine,mapUv:xe&&d(x.map.channel),aoMapUv:Je&&d(x.aoMap.channel),lightMapUv:tt&&d(x.lightMap.channel),bumpMapUv:Qe&&d(x.bumpMap.channel),normalMapUv:ke&&d(x.normalMap.channel),displacementMapUv:K&&d(x.displacementMap.channel),emissiveMapUv:nt&&d(x.emissiveMap.channel),metalnessMapUv:Nt&&d(x.metalnessMap.channel),roughnessMapUv:Vt&&d(x.roughnessMap.channel),anisotropyMapUv:je&&d(x.anisotropyMap.channel),clearcoatMapUv:R&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&d(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:pe&&d(x.diffuseRoughnessMap.channel),iridescenceMapUv:ae&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:be&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:we&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&d(x.sheenRoughnessMap.channel),specularMapUv:ie&&d(x.specularMap.channel),specularColorMapUv:Ee&&d(x.specularColorMap.channel),specularIntensityMapUv:D&&d(x.specularIntensityMap.channel),transmissionMapUv:oe&&d(x.transmissionMap.channel),thicknessMapUv:te&&d(x.thicknessMap.channel),alphaMapUv:ye&&d(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ke||un),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!P.attributes.uv&&(xe||ye),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&ke===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:fe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:he,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(me=>me.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:ve,decodeVideoTexture:xe&&x.map.isVideoTexture===!0&&Mt.getTransfer(x.map.colorSpace)===Gt,decodeVideoTextureEmissive:nt&&x.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(x.emissiveMap.colorSpace)===Gt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Un,flipSided:x.side===zn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ct&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&x.extensions.multiDraw===!0||re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return at.vertexUv1s=l.has(1),at.vertexUv2s=l.has(2),at.vertexUv3s=l.has(3),l.clear(),at}function _(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)S.push(I),S.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(m(S,x),g(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function m(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function g(x,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let S=f[x.type],I;if(S){let C=gs[S];I=Ci.clone(C.uniforms)}else I=x.uniforms;return I}function w(x,S){let I=u.get(S);return I!==void 0?++I.usedTimes:(I=new D1(i,S,x,s),c.push(I),u.set(S,I)),I}function M(x){if(--x.usedTimes===0){let S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:T}}function F1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function B1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ix(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,p,_,m,g){let y=i[e];return y===void 0?(y={id:f.id,object:f,geometry:d,material:p,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},i[e]=y):(y.id=f.id,y.object=f,y.geometry=d,y.material=p,y.materialVariant=o(f),y.groupOrder=_,y.renderOrder=f.renderOrder,y.z=m,y.group=g),e++,y}function l(f,d,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(f,d,p,_,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(f,d,p,_,m,g){let y=a(f,d,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(f,d){t.length>1&&t.sort(f||B1),n.length>1&&n.sort(d||Cx),s.length>1&&s.sort(d||Cx)}function h(){for(let f=e,d=i.length;f<d;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function H1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ix,i.set(n,[o])):s>=r.length?(o=new Ix,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function z1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new ze};break;case"SpotLight":t={position:new O,direction:new O,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function k1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var G1=0;function V1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function W1(i){let e=new z1,t=k1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new rt,o=new rt;function a(c){let u=0,h=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,p=0,_=0,m=0,g=0,y=0,w=0,M=0,E=0,T=0,x=0,S=0,I=0,C=0;c.sort(V1);for(let U=0,G=c.length;U<G;U++){let P=c[U],V=P.color,q=P.intensity,W=P.distance,ue=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Sr?ue=P.shadow.map.texture:ue=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=V.r*q,h+=V.g*q,f+=V.b*q;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],q);C++}else if(P.isSunLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[p]=Q,n.sunShadowMap[p]=ue;let he=$.getViewportCount();for(let Ue=0;Ue<he;Ue++)n.sunShadowMatrix[_+Ue]=$.getMatrix(Ue),n.sunShadowCascade[_+Ue]=$._cascadeData[Ue];_+=he,p++}n.sun[d]=H,d++}else if(P.isDirectionalLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let $=P.shadow,Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=ue,n.directionalShadowMatrix[m]=P.shadow.matrix,E++}n.directional[m]=H,m++}else if(P.isSpotLight){let H=e.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(V).multiplyScalar(q),H.distance=W,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[y]=H;let $=P.shadow;if(P.map&&(n.spotLightMap[S]=P.map,S++,$.updateMatrices(P),P.castShadow&&I++),n.spotLightMatrix[y]=$.matrix,P.castShadow){let Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=ue,x++}y++}else if(P.isRectAreaLight){let H=e.get(P);H.color.copy(V).multiplyScalar(q),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[w]=H,w++}else if(P.isPointLight){let H=e.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){let $=P.shadow,Q=t.get(P);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=ue,n.pointShadowMatrix[g]=P.shadow.matrix,T++}n.point[g]=H,g++}else if(P.isHemisphereLight){let H=e.get(P);H.skyColor.copy(P.color).multiplyScalar(q),H.groundColor.copy(P.groundColor).multiplyScalar(q),n.hemi[M]=H,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Be.LTC_FLOAT_1,n.rectAreaLTC2=Be.LTC_FLOAT_2):(n.rectAreaLTC1=Be.LTC_HALF_1,n.rectAreaLTC2=Be.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let L=n.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==w||L.hemiLength!==M||L.numSunShadows!==p||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==x||L.numSpotMaps!==S||L.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,L.sunLength=d,L.directionalLength=m,L.pointLength=g,L.spotLength=y,L.rectAreaLength=w,L.hemiLength=M,L.numSunShadows=p,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=x,L.numSpotMaps=S,L.numLightProbes=C,n.version=G1++)}function l(c,u){let h=0,f=0,d=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let M=c[y];if(M.isSunLight){let E=n.sun[h];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),h++}else if(M.isDirectionalLight){let E=n.directional[f];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),f++}else if(M.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Px(i){let e=new W1(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),s.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function X1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Px(i),e.set(s,[a])):r>=o.length?(a=new Px(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Y1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$1=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],K1=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Lx=new rt,Vl=new O,pp=new O;function Z1(i,e,t){let n=new vr,s=new it,r=new it,o=new $t,a=new Au,l=new Ru,c={},u=t.maxTextureSize,h={[ds]:zn,[zn]:ds,[Un]:Un},f=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:q1,fragmentShader:Y1}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ot(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=to;let g=this.type;this.render=function(T,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===C0&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=to);let I=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(On),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let G=g!==this.type;G&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=T.length;P<V;P++){let q=T[P],W=q.shadow;if(W===void 0){et("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ue=W.getFrameExtents();s.multiply(ue),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=H,W.map===null||G===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ia){if(q.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new gn(s.x,s.y,{format:Sr,type:En,minFilter:An,magFilter:An,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new qi(s.x,s.y,xi),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Bs,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn}else q.isPointLight?(W.map=new Xl(s.x),W.map.depthTexture=new hl(s.x,Zi)):(W.map=new gn(s.x,s.y),W.map.depthTexture=new qi(s.x,s.y,Zi)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Bs,this.type===to?(W.map.depthTexture.compareFunction=H?Kf:$f,W.map.depthTexture.minFilter=An,W.map.depthTexture.magFilter=An):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=sn,W.map.depthTexture.magFilter=sn);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let $=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,S);let Q=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let he=0;he<$;he++){let Ue=W.getCamera(he);if(q.isPointLight){let j=W.camera,ge=W.matrix,Ce=q.distance||j.far;Ce!==j.far&&(j.far=Ce,j.updateProjectionMatrix()),Vl.setFromMatrixPosition(q.matrixWorld),j.position.copy(Vl),pp.copy(j.position),pp.add($1[he]),j.up.copy(K1[he]),j.lookAt(pp),j.updateMatrixWorld(),ge.makeTranslation(-Vl.x,-Vl.y,-Vl.z),Lx.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Lx,j.coordinateSystem,j.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,he),i.clear();else{he===0&&(i.setRenderTarget(W.map),i.clear());let j=W.getViewport(he);o.set(r.x*j.x,r.y*j.y,r.x*j.z,r.y*j.w),U.viewport(o)}n=W.getFrustum(he),M(x,S,Ue,q,Q,this.type)}W.isPointLightShadow!==!0&&this.type===ia&&y(W,S),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(I,C,L)};function y(T,x){let S=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new gn(s.x,s.y,{format:Sr,type:En}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,S,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,S,d,_,null)}function w(T,x,S,I){let C=null,L=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=S.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let U=C.uuid,G=x.uuid,P=c[U];P===void 0&&(P={},c[U]=P);let V=P[G];V===void 0&&(V=C.clone(),P[G]=V,x.addEventListener("dispose",E)),C=V}if(C.visible=x.visible,C.wireframe=x.wireframe,I===ia?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:h[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=S}return C}function M(T,x,S,I,C,L){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ia)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);let P=e.update(T),V=T.material;if(Array.isArray(V)){let q=P.groups;for(let W=0,ue=q.length;W<ue;W++){let H=q[W],$=V[H.materialIndex];if($&&$.visible){let Q=w(T,$,I,L);T.onBeforeShadow(i,T,x,S,P,Q,H),i.renderBufferDirect(S,null,P,Q,T,H),T.onAfterShadow(i,T,x,S,P,Q,H)}}}else if(V.visible){let q=w(T,V,I,L);T.onBeforeShadow(i,T,x,S,P,q,null),i.renderBufferDirect(S,null,P,q,T,null),T.onAfterShadow(i,T,x,S,P,q,null)}}let G=T.children;for(let P=0,V=G.length;P<V;P++)M(G[P],x,S,I,C,L)}function E(T){T.target.removeEventListener("dispose",E);for(let S in c){let I=c[S],C=T.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function J1(i,e){function t(){let D=!1,oe=new $t,te=null,Ae=new $t(0,0,0,0);return{setMask:function(ye){te!==ye&&!D&&(i.colorMask(ye,ye,ye,ye),te=ye)},setLocked:function(ye){D=ye},setClear:function(ye,Te,Ye,ct,ve){ve===!0&&(ye*=ct,Te*=ct,Ye*=ct),oe.set(ye,Te,Ye,ct),Ae.equals(oe)===!1&&(i.clearColor(ye,Te,Ye,ct),Ae.copy(oe))},reset:function(){D=!1,te=null,Ae.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,te=null,Ae=null,ye=null;return{setReversed:function(Te){if(oe!==Te){let Ye=e.get("EXT_clip_control");Te?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),oe=Te;let ct=ye;ye=null,this.setClear(ct)}},getReversed:function(){return oe},setTest:function(Te){Te?fe(i.DEPTH_TEST):A(i.DEPTH_TEST)},setMask:function(Te){te!==Te&&!D&&(i.depthMask(Te),te=Te)},setFunc:function(Te){if(oe&&(Te=lx[Te]),Ae!==Te){switch(Te){case fu:i.depthFunc(i.NEVER);break;case pu:i.depthFunc(i.ALWAYS);break;case mu:i.depthFunc(i.LESS);break;case zo:i.depthFunc(i.LEQUAL);break;case gu:i.depthFunc(i.EQUAL);break;case xu:i.depthFunc(i.GEQUAL);break;case _u:i.depthFunc(i.GREATER);break;case yu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Te}},setLocked:function(Te){D=Te},setClear:function(Te){ye!==Te&&(ye=Te,oe&&(Te=1-Te),i.clearDepth(Te))},reset:function(){D=!1,te=null,Ae=null,ye=null,oe=!1}}}function s(){let D=!1,oe=null,te=null,Ae=null,ye=null,Te=null,Ye=null,ct=null,ve=null;return{setTest:function(Ke){D||(Ke?fe(i.STENCIL_TEST):A(i.STENCIL_TEST))},setMask:function(Ke){oe!==Ke&&!D&&(i.stencilMask(Ke),oe=Ke)},setFunc:function(Ke,at,me){(te!==Ke||Ae!==at||ye!==me)&&(i.stencilFunc(Ke,at,me),te=Ke,Ae=at,ye=me)},setOp:function(Ke,at,me){(Te!==Ke||Ye!==at||ct!==me)&&(i.stencilOp(Ke,at,me),Te=Ke,Ye=at,ct=me)},setLocked:function(Ke){D=Ke},setClear:function(Ke){ve!==Ke&&(i.clearStencil(Ke),ve=Ke)},reset:function(){D=!1,oe=null,te=null,Ae=null,ye=null,Te=null,Ye=null,ct=null,ve=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,u={},h={},f={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,M=null,E=null,T=null,x=null,S=new ze(0,0,0),I=0,C=!1,L=null,U=null,G=null,P=null,V=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ue=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=ue>=1):H.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=ue>=2);let $=null,Q={},he=i.getParameter(i.SCISSOR_BOX),Ue=i.getParameter(i.VIEWPORT),j=new $t().fromArray(he),ge=new $t().fromArray(Ue);function Ce(D,oe,te,Ae){let ye=new Uint8Array(4),Te=i.createTexture();i.bindTexture(D,Te),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<te;Ye++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(oe+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Te}let _e={};_e[i.TEXTURE_2D]=Ce(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=Ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=Ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=Ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),fe(i.DEPTH_TEST),o.setFunc(zo),Qe(!1),ke(Nf),fe(i.CULL_FACE),Je(On);function fe(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function A(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function re(D,oe){return f[D]!==oe?(i.bindFramebuffer(D,oe),f[D]=oe,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function xe(D,oe){let te=p,Ae=!1;if(D){te=d.get(oe),te===void 0&&(te=[],d.set(oe,te));let ye=D.textures;if(te.length!==ye.length||te[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,Ye=ye.length;Te<Ye;Te++)te[Te]=i.COLOR_ATTACHMENT0+Te;te.length=ye.length,Ae=!0}}else te[0]!==i.BACK&&(te[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(te)}function Oe(D){return _!==D?(i.useProgram(D),_=D,!0):!1}let $e={[wi]:i.FUNC_ADD,[I0]:i.FUNC_SUBTRACT,[P0]:i.FUNC_REVERSE_SUBTRACT};$e[L0]=i.MIN,$e[D0]=i.MAX;let He={[no]:i.ZERO,[N0]:i.ONE,[U0]:i.SRC_COLOR,[Bf]:i.SRC_ALPHA,[H0]:i.SRC_ALPHA_SATURATE,[Rl]:i.DST_COLOR,[Al]:i.DST_ALPHA,[O0]:i.ONE_MINUS_SRC_COLOR,[Hf]:i.ONE_MINUS_SRC_ALPHA,[B0]:i.ONE_MINUS_DST_COLOR,[F0]:i.ONE_MINUS_DST_ALPHA,[z0]:i.CONSTANT_COLOR,[k0]:i.ONE_MINUS_CONSTANT_COLOR,[G0]:i.CONSTANT_ALPHA,[V0]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(D,oe,te,Ae,ye,Te,Ye,ct,ve,Ke){if(D===On){m===!0&&(A(i.BLEND),m=!1);return}if(m===!1&&(fe(i.BLEND),m=!0),D!==Hu){if(D!==g||Ke!==C){if((y!==wi||E!==wi)&&(i.blendEquation(i.FUNC_ADD),y=wi,E=wi),Ke)switch(D){case sa:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uf:i.blendFunc(i.ONE,i.ONE);break;case Of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ff:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",D);break}else switch(D){case sa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Of:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ff:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",D);break}w=null,M=null,T=null,x=null,S.set(0,0,0),I=0,g=D,C=Ke}return}ye=ye||oe,Te=Te||te,Ye=Ye||Ae,(oe!==y||ye!==E)&&(i.blendEquationSeparate($e[oe],$e[ye]),y=oe,E=ye),(te!==w||Ae!==M||Te!==T||Ye!==x)&&(i.blendFuncSeparate(He[te],He[Ae],He[Te],He[Ye]),w=te,M=Ae,T=Te,x=Ye),(ct.equals(S)===!1||ve!==I)&&(i.blendColor(ct.r,ct.g,ct.b,ve),S.copy(ct),I=ve),g=D,C=!1}function tt(D,oe){D.side===Un?A(i.CULL_FACE):fe(i.CULL_FACE);let te=D.side===zn;oe&&(te=!te),Qe(te),D.blending===sa&&D.transparent===!1?Je(On):Je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);let Ae=D.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):A(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function ke(D){D!==A0?(fe(i.CULL_FACE),D!==U&&(D===Nf?i.cullFace(i.BACK):D===R0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):A(i.CULL_FACE),U=D}function K(D){D!==G&&(W&&i.lineWidth(D),G=D)}function nt(D,oe,te){D?(fe(i.POLYGON_OFFSET_FILL),(P!==oe||V!==te)&&(P=oe,V=te,o.getReversed()&&(oe=-oe,te=-te),i.polygonOffset(oe,te))):A(i.POLYGON_OFFSET_FILL)}function Nt(D){D?fe(i.SCISSOR_TEST):A(i.SCISSOR_TEST)}function Vt(D){D===void 0&&(D=i.TEXTURE0+q-1),$!==D&&(i.activeTexture(D),$=D)}function un(D,oe,te){te===void 0&&($===null?te=i.TEXTURE0+q-1:te=$);let Ae=Q[te];Ae===void 0&&(Ae={type:void 0,texture:void 0},Q[te]=Ae),(Ae.type!==D||Ae.texture!==oe)&&($!==te&&(i.activeTexture(te),$=te),i.bindTexture(D,oe||_e[D]),Ae.type=D,Ae.texture=oe)}function z(){let D=Q[$];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function It(){try{i.compressedTexImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function mt(){try{i.compressedTexImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function _t(){try{i.texSubImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function Me(){try{i.texSubImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function Ut(){try{i.compressedTexSubImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function Ge(){try{i.compressedTexSubImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function je(){try{i.texStorage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function R(){try{i.texStorage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function v(){try{i.texImage2D(...arguments)}catch(D){ht("WebGLState:",D)}}function k(){try{i.texImage3D(...arguments)}catch(D){ht("WebGLState:",D)}}function pe(D){return h[D]!==void 0?h[D]:i.getParameter(D)}function ae(D,oe){h[D]!==oe&&(i.pixelStorei(D,oe),h[D]=oe)}function be(D){j.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),j.copy(D))}function we(D){ge.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ge.copy(D))}function ne(D,oe){let te=c.get(oe);te===void 0&&(te=new WeakMap,c.set(oe,te));let Ae=te.get(D);Ae===void 0&&(Ae=i.getUniformBlockIndex(oe,D.name),i.uniformBlockBinding(oe,Ae,Ae),te.set(D,Ae))}function ie(D,oe,te){let ye=c.get(oe).get(D);l[ye]!==te&&(i.bindBufferBase(i.UNIFORM_BUFFER,ye,te),l[ye]=te)}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},$=null,Q={},f={},l={},d=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,M=null,E=null,T=null,x=null,S=new ze(0,0,0),I=0,C=!1,L=null,U=null,G=null,P=null,V=null,j.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:fe,disable:A,bindFramebuffer:re,drawBuffers:xe,useProgram:Oe,setBlending:Je,setMaterial:tt,setFlipSided:Qe,setCullFace:ke,setLineWidth:K,setPolygonOffset:nt,setScissorTest:Nt,activeTexture:Vt,bindTexture:un,unbindTexture:z,compressedTexImage2D:It,compressedTexImage3D:mt,texImage2D:v,texImage3D:k,pixelStorei:ae,getParameter:pe,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:je,texStorage3D:R,texSubImage2D:_t,texSubImage3D:Me,compressedTexSubImage2D:Ut,compressedTexSubImage3D:Ge,scissor:be,viewport:we,reset:Ee}}function j1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap,h=new Set,f,d=new WeakMap,p=new Set,_=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return m?new OffscreenCanvas(R,v):Vo("canvas")}function y(R,v,k){let pe=1,ae=je(R);if((ae.width>k||ae.height>k)&&(pe=k/Math.max(ae.width,ae.height)),pe<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let be=Math.floor(pe*ae.width),we=Math.floor(pe*ae.height);f===void 0&&(f=g(be,we));let ne=v?g(be,we):f;return ne.width=be,ne.height=we,ne.getContext("2d").drawImage(R,0,0,be,we),et("WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+be+"x"+we+")."),ne}else return"data"in R&&et("WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),R;return R}function w(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,v,k,pe,ae,be=!1){if(R!==null){if(i[R]!==void 0)return i[R];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let we;pe&&(we=e.get("EXT_texture_norm16"),we||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=v;if(v===i.RED&&(k===i.FLOAT&&(ne=i.R32F),k===i.HALF_FLOAT&&(ne=i.R16F),k===i.UNSIGNED_BYTE&&(ne=i.R8),k===i.UNSIGNED_SHORT&&we&&(ne=we.R16_EXT),k===i.SHORT&&we&&(ne=we.R16_SNORM_EXT)),v===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.R8UI),k===i.UNSIGNED_SHORT&&(ne=i.R16UI),k===i.UNSIGNED_INT&&(ne=i.R32UI),k===i.BYTE&&(ne=i.R8I),k===i.SHORT&&(ne=i.R16I),k===i.INT&&(ne=i.R32I)),v===i.RG&&(k===i.FLOAT&&(ne=i.RG32F),k===i.HALF_FLOAT&&(ne=i.RG16F),k===i.UNSIGNED_BYTE&&(ne=i.RG8),k===i.UNSIGNED_SHORT&&we&&(ne=we.RG16_EXT),k===i.SHORT&&we&&(ne=we.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.RG8UI),k===i.UNSIGNED_SHORT&&(ne=i.RG16UI),k===i.UNSIGNED_INT&&(ne=i.RG32UI),k===i.BYTE&&(ne=i.RG8I),k===i.SHORT&&(ne=i.RG16I),k===i.INT&&(ne=i.RG32I)),v===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),k===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),k===i.UNSIGNED_INT&&(ne=i.RGB32UI),k===i.BYTE&&(ne=i.RGB8I),k===i.SHORT&&(ne=i.RGB16I),k===i.INT&&(ne=i.RGB32I)),v===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),k===i.UNSIGNED_INT&&(ne=i.RGBA32UI),k===i.BYTE&&(ne=i.RGBA8I),k===i.SHORT&&(ne=i.RGBA16I),k===i.INT&&(ne=i.RGBA32I)),v===i.RGB&&(k===i.UNSIGNED_SHORT&&we&&(ne=we.RGB16_EXT),k===i.SHORT&&we&&(ne=we.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),v===i.RGBA){let ie=be?el:Mt.getTransfer(ae);k===i.FLOAT&&(ne=i.RGBA32F),k===i.HALF_FLOAT&&(ne=i.RGBA16F),k===i.UNSIGNED_BYTE&&(ne=ie===Gt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&we&&(ne=we.RGBA16_EXT),k===i.SHORT&&we&&(ne=we.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(R,v){let k;return R?v===null||v===Zi||v===Xs?k=i.DEPTH24_STENCIL8:v===xi?k=i.DEPTH32F_STENCIL8:v===aa&&(k=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zi||v===Xs?k=i.DEPTH_COMPONENT24:v===xi?k=i.DEPTH_COMPONENT32F:v===aa&&(k=i.DEPTH_COMPONENT16),k}function S(R,v){return w(R)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==An?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function I(R){let v=new WeakRef(R);n.get(R).__ref=v,p.add(v),_.register(R,v,v)}function C(R){let v=n.get(R).__ref;v!==void 0&&(p.delete(v),_.unregister(v))}function L(R){G(R.target)}function U(R){P(R.target)}function G(R){R.removeEventListener("dispose",L),C(R),q(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&h.delete(R)}function P(R){R.removeEventListener("dispose",U),C(R),ue(R)}function V(){for(let R of p){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?P(v):G(v))}p.clear(),h.clear()}function q(R){let v=n.get(R);if(v.__webglInit===void 0)return;let k=R.source,pe=d.get(k);if(pe){let ae=pe[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&W(R),Object.keys(pe).length===0&&d.delete(k)}n.remove(R)}function W(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let k=R.source,pe=d.get(k);delete pe[v.__cacheKey],o.memory.textures--}function ue(R){let v=n.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let k=R.depthTexture;if(k&&k.renderTarget===R&&G(k),R.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(v.__webglFramebuffer[ae]))for(let be=0;be<v.__webglFramebuffer[ae].length;be++)i.deleteFramebuffer(v.__webglFramebuffer[ae][be]);else i.deleteFramebuffer(v.__webglFramebuffer[ae]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[ae])}else{if(Array.isArray(v.__webglFramebuffer))for(let ae=0;ae<v.__webglFramebuffer.length;ae++)i.deleteFramebuffer(v.__webglFramebuffer[ae]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let ae=0;ae<v.__webglColorRenderbuffer.length;ae++)v.__webglColorRenderbuffer[ae]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[ae]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let pe=R.textures;for(let ae=0,be=pe.length;ae<be;ae++){let we=n.get(pe[ae]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(pe[ae])}n.remove(R)}let H=0;function $(){H=0}function Q(){return H}function he(R){H=R}function Ue(){let R=H;return R>=s.maxTextures&&et("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,R}function j(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function ge(R,v){let k=n.get(R);if(R.isVideoTexture&&Ut(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&k.__version!==R.version){let pe=R.image;if(pe===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(k,R,v);return}}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+v)}function Ce(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){tt(k,R,v);return}else R.isExternalTexture&&(k.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+v)}function _e(R,v){let k=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){tt(k,R,v);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+v)}function fe(R,v){let k=n.get(R);if(R.version>0&&k.__version!==R.version){Qe(k,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+v)}let A={[oi]:i.REPEAT,[Si]:i.CLAMP_TO_EDGE,[ko]:i.MIRRORED_REPEAT},re={[sn]:i.NEAREST,[Vu]:i.NEAREST_MIPMAP_NEAREST,[so]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},xe={[ex]:i.NEVER,[Zf]:i.ALWAYS,[tx]:i.LESS,[$f]:i.LEQUAL,[nx]:i.EQUAL,[Kf]:i.GEQUAL,[ix]:i.GREATER,[sx]:i.NOTEQUAL};function Oe(R,v){if(v.type===xi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===An||v.magFilter===oa||v.magFilter===so||v.magFilter===Ai||v.minFilter===An||v.minFilter===oa||v.minFilter===so||v.minFilter===Ai)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,A[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,A[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,A[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,re[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,re[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,xe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===sn||v.minFilter!==so&&v.minFilter!==Ai||v.type===xi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function $e(R,v){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",L),I(v));let pe=v.source,ae=d.get(pe);ae===void 0&&(ae={},d.set(pe,ae));let be=j(v);if(be!==R.__cacheKey){ae[be]===void 0&&(ae[be]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ae[be].usedTimes++;let we=ae[R.__cacheKey];we!==void 0&&(ae[R.__cacheKey].usedTimes--,we.usedTimes===0&&W(v)),R.__cacheKey=be,R.__webglTexture=ae[be].texture}return k}function He(R,v,k){return Math.floor(Math.floor(R/k)/v)}function Je(R,v,k,pe){let be=R.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,k,pe,v.data);else{be.sort((D,oe)=>D.start-oe.start);let we=0;for(let D=1;D<be.length;D++){let oe=be[we],te=be[D],Ae=oe.start+oe.count,ye=He(te.start,v.width,4),Te=He(oe.start,v.width,4);te.start<=Ae+1&&ye===Te&&He(te.start+te.count-1,v.width,4)===ye?oe.count=Math.max(oe.count,te.start+te.count-oe.start):(++we,be[we]=te)}be.length=we+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let D=0,oe=be.length;D<oe;D++){let te=be[D],Ae=Math.floor(te.start/4),ye=Math.ceil(te.count/4),Te=Ae%v.width,Ye=Math.floor(Ae/v.width),ct=ye,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ye),t.texSubImage2D(i.TEXTURE_2D,0,Te,Ye,ct,ve,k,pe,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function tt(R,v,k){let pe=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(pe=i.TEXTURE_3D);let ae=$e(R,v),be=v.source;t.bindTexture(pe,R.__webglTexture,i.TEXTURE0+k);let we=n.get(be);if(be.version!==we.__version||ae===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ve=Mt.getPrimaries(Mt.workingColorSpace),Ke=v.colorSpace===qs?null:Mt.getPrimaries(v.colorSpace),at=v.colorSpace===qs||ve===Ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=y(v.image,!1,s.maxTextureSize);ie=Ge(v,ie);let Ee=r.convert(v.format,v.colorSpace),D=r.convert(v.type),oe=T(v.internalFormat,Ee,D,v.normalized,v.colorSpace,v.isVideoTexture);Oe(pe,v);let te,Ae=v.mipmaps,ye=v.isVideoTexture!==!0,Te=we.__version===void 0||ae===!0,Ye=be.dataReady,ct=S(v,ie);if(v.isDepthTexture)oe=x(v.format===Ji,v.type),Te&&(ye?t.texStorage2D(i.TEXTURE_2D,1,oe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,oe,ie.width,ie.height,0,Ee,D,null));else if(v.isDataTexture)if(Ae.length>0){ye&&Te&&t.texStorage2D(i.TEXTURE_2D,ct,oe,Ae[0].width,Ae[0].height);for(let ve=0,Ke=Ae.length;ve<Ke;ve++)te=Ae[ve],ye?Ye&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,te.width,te.height,Ee,D,te.data):t.texImage2D(i.TEXTURE_2D,ve,oe,te.width,te.height,0,Ee,D,te.data);v.generateMipmaps=!1}else ye?(Te&&t.texStorage2D(i.TEXTURE_2D,ct,oe,ie.width,ie.height),Ye&&Je(v,ie,Ee,D)):t.texImage2D(i.TEXTURE_2D,0,oe,ie.width,ie.height,0,Ee,D,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ye&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,oe,Ae[0].width,Ae[0].height,ie.depth);for(let ve=0,Ke=Ae.length;ve<Ke;ve++)if(te=Ae[ve],v.format!==ui)if(Ee!==null)if(ye){if(Ye)if(v.layerUpdates.size>0){let at=ap(te.width,te.height,v.format,v.type);for(let me of v.layerUpdates){let Pt=te.data.subarray(me*at/te.data.BYTES_PER_ELEMENT,(me+1)*at/te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,me,te.width,te.height,1,Ee,Pt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,te.width,te.height,ie.depth,Ee,te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,oe,te.width,te.height,ie.depth,0,te.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?Ye&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,te.width,te.height,ie.depth,Ee,D,te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,oe,te.width,te.height,ie.depth,0,Ee,D,te.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ye&&Te&&t.texStorage2D(i.TEXTURE_2D,ct,oe,Ae[0].width,Ae[0].height);for(let ve=0,Ke=Ae.length;ve<Ke;ve++)te=Ae[ve],v.format!==ui?Ee!==null?ye?Ye&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,te.width,te.height,Ee,te.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,oe,te.width,te.height,0,te.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?Ye&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,te.width,te.height,Ee,D,te.data):t.texImage2D(i.TEXTURE_2D,ve,oe,te.width,te.height,0,Ee,D,te.data)}else if(v.isDataArrayTexture)if(ye){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ct,oe,ie.width,ie.height,ie.depth),Ye)if(v.layerUpdates.size>0){let ve=ap(ie.width,ie.height,v.format,v.type);for(let Ke of v.layerUpdates){let at=ie.data.subarray(Ke*ve/ie.data.BYTES_PER_ELEMENT,(Ke+1)*ve/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,ie.width,ie.height,1,Ee,D,at)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ee,D,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,ie.width,ie.height,ie.depth,0,Ee,D,ie.data);else if(v.isData3DTexture)ye?(Te&&t.texStorage3D(i.TEXTURE_3D,ct,oe,ie.width,ie.height,ie.depth),Ye&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ee,D,ie.data)):t.texImage3D(i.TEXTURE_3D,0,oe,ie.width,ie.height,ie.depth,0,Ee,D,ie.data);else if(v.isFramebufferTexture){if(Te)if(ye)t.texStorage2D(i.TEXTURE_2D,ct,oe,ie.width,ie.height);else{let ve=ie.width,Ke=ie.height;for(let at=0;at<ct;at++)t.texImage2D(i.TEXTURE_2D,at,oe,ve,Ke,0,Ee,D,null),ve>>=1,Ke>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ie.parentNode!==ve){ve.appendChild(ie),h.add(v),ve.onpaint=Ke=>{let at=Ke.changedElements;for(let me of h)at.includes(me.image)&&(me.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let at=i.RGBA,me=i.RGBA,Pt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,at,me,Pt,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ye&&Te){let ve=je(Ae[0]);t.texStorage2D(i.TEXTURE_2D,ct,oe,ve.width,ve.height)}for(let ve=0,Ke=Ae.length;ve<Ke;ve++)te=Ae[ve],ye?Ye&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ee,D,te):t.texImage2D(i.TEXTURE_2D,ve,oe,Ee,D,te);v.generateMipmaps=!1}else if(ye){if(Te){let ve=je(ie);t.texStorage2D(i.TEXTURE_2D,ct,oe,ve.width,ve.height)}Ye&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,D,ie)}else t.texImage2D(i.TEXTURE_2D,0,oe,Ee,D,ie);w(v)&&v.mipmapsAutoUpdate===!0&&M(pe),we.__version=be.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Qe(R,v,k){if(v.image.length!==6)return;let pe=$e(R,v),ae=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+k);let be=n.get(ae);if(ae.version!==be.__version||pe===!0){t.activeTexture(i.TEXTURE0+k);let we=Mt.getPrimaries(Mt.workingColorSpace),ne=v.colorSpace===qs?null:Mt.getPrimaries(v.colorSpace),ie=v.colorSpace===qs||we===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Ee=v.isCompressedTexture||v.image[0].isCompressedTexture,D=v.image[0]&&v.image[0].isDataTexture,oe=[];for(let me=0;me<6;me++)!Ee&&!D?oe[me]=y(v.image[me],!0,s.maxCubemapSize):oe[me]=D?v.image[me].image:v.image[me],oe[me]=Ge(v,oe[me]);let te=oe[0],Ae=r.convert(v.format,v.colorSpace),ye=r.convert(v.type),Te=T(v.internalFormat,Ae,ye,v.normalized,v.colorSpace),Ye=v.isVideoTexture!==!0,ct=be.__version===void 0||pe===!0,ve=ae.dataReady,Ke=S(v,te);Oe(i.TEXTURE_CUBE_MAP,v);let at;if(v.isDepthTexture){if(Te=x(v.format===Ji,v.type),ct)if(Ye)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Te,te.width,te.height);else for(let me=0;me<6;me++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Te,te.width,te.height,0,Ae,ye,null)}else if(Ee){Ye&&ct&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Te,te.width,te.height);for(let me=0;me<6;me++){at=oe[me].mipmaps;for(let Pt=0;Pt<at.length;Pt++){let N=at[Pt];v.format!==ui?Ae!==null?Ye?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt,0,0,N.width,N.height,Ae,N.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt,Te,N.width,N.height,0,N.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt,0,0,N.width,N.height,Ae,ye,N.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt,Te,N.width,N.height,0,Ae,ye,N.data)}}}else{if(at=v.mipmaps,Ye&&ct){at.length>0&&Ke++;let me=je(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Te,me.width,me.height)}for(let me=0;me<6;me++)if(D){Ye?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,oe[me].width,oe[me].height,Ae,ye,oe[me].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Te,oe[me].width,oe[me].height,0,Ae,ye,oe[me].data);for(let Pt=0;Pt<at.length;Pt++){let Z=at[Pt].image[me].image;Ye?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt+1,0,0,Z.width,Z.height,Ae,ye,Z.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt+1,Te,Z.width,Z.height,0,Ae,ye,Z.data)}}else{Ye?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ae,ye,oe[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,Te,Ae,ye,oe[me]);for(let Pt=0;Pt<at.length;Pt++){let N=at[Pt];Ye?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt+1,0,0,Ae,ye,N.image[me]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Pt+1,Te,Ae,ye,N.image[me])}}}w(v)&&v.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),be.__version=ae.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function ke(R,v,k,pe,ae,be){let we=r.convert(k.format,k.colorSpace),ne=r.convert(k.type),ie=T(k.internalFormat,we,ne,k.normalized,k.colorSpace),Ee=n.get(v),D=n.get(k);if(D.__renderTarget=v,!Ee.__hasExternalTextures){let oe=Math.max(1,v.width>>be),te=Math.max(1,v.height>>be);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,be,ie,oe,te,v.depth,0,we,ne,null):t.texImage2D(ae,be,ie,oe,te,0,we,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,ae,D.__webglTexture,0,_t(v)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,ae,D.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function K(R,v,k){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let pe=v.depthTexture,ae=pe&&pe.isDepthTexture?pe.type:null,be=x(v.stencilBuffer,ae),we=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(v),be,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(v),be,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,be,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,R)}else{let pe=v.textures;for(let ae=0;ae<pe.length;ae++){let be=pe[ae],we=r.convert(be.format,be.colorSpace),ne=r.convert(be.type),ie=T(be.internalFormat,we,ne,be.normalized,be.colorSpace);Me(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t(v),ie,v.width,v.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(R,v,k){let pe=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ae=n.get(v.depthTexture);ae.__renderTarget=v;let be=pe?v.depthTexture.image[0]:v.depthTexture.image;(!ae.__webglTexture||be.width!==v.width||be.height!==v.height)&&(be.width=v.width,be.height=v.height,v.depthTexture.needsUpdate=!0),pe?fe(v.depthTexture,0):ge(v.depthTexture,0);let we=ae.__webglTexture,ne=_t(v),ie=pe?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,Ee=v.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Bs)Me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ie,we,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ie,we,0);else if(v.depthTexture.format===Ji)Me(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ie,we,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ie,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(R){let v=n.get(R),k=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let pe=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),pe){let ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,pe.removeEventListener("dispose",ae)};pe.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=pe}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(k)for(let pe=0;pe<6;pe++)nt(v.__webglFramebuffer[pe],R,pe);else R.texture.mipmaps.length>0?nt(v.__webglFramebuffer[0],R,0):nt(v.__webglFramebuffer,R,0);else if(k){v.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[pe]),v.__webglDepthbuffer[pe]===void 0)v.__webglDepthbuffer[pe]=i.createRenderbuffer(),K(v.__webglDepthbuffer[pe],R,!1);else{let ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=v.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,be)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),K(v.__webglDepthbuffer,R,!1);else{let ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,be)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(R,v,k){let pe=n.get(R);v!==void 0&&ke(pe.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Nt(R)}function un(R){let v=R.texture,k=n.get(R),pe=n.get(v);R.addEventListener("dispose",U),I(R);let ae=R.textures,be=R.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=v.version,o.memory.textures++),be){k.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(v.mipmaps.length>0){k.__webglFramebuffer[ne]=[];for(let ie=0;ie<v.mipmaps.length;ie++)k.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else k.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ne=0;ne<v.mipmaps.length;ne++)k.__webglFramebuffer[ne]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(we)for(let ne=0,ie=ae.length;ne<ie;ne++){let Ee=n.get(ae[ne]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ne=0;ne<ae.length;ne++){let ie=ae[ne];k.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ne]);let Ee=r.convert(ie.format,ie.colorSpace),D=r.convert(ie.type),oe=T(ie.internalFormat,Ee,D,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),te=_t(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,te,oe,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,k.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),K(k.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,v);for(let ne=0;ne<6;ne++)if(v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)ke(k.__webglFramebuffer[ne][ie],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else ke(k.__webglFramebuffer[ne],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);w(v)?M(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(we){for(let ne=0,ie=ae.length;ne<ie;ne++){let Ee=ae[ne],D=n.get(Ee),oe=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,D.__webglTexture),Oe(oe,Ee),ke(k.__webglFramebuffer,R,Ee,i.COLOR_ATTACHMENT0+ne,oe,0),w(Ee)&&M(oe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,pe.__webglTexture),Oe(ne,v),v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)ke(k.__webglFramebuffer[ie],R,v,i.COLOR_ATTACHMENT0,ne,ie);else ke(k.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,ne,0);w(v)?M(ne):v.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Nt(R)}function z(R){let v=R.textures;for(let k=0,pe=v.length;k<pe;k++){let ae=v[k];if(w(ae)&&ae.mipmapsAutoUpdate===!0){let be=E(R),we=n.get(ae).__webglTexture;t.bindTexture(be,we),M(be),t.unbindTexture()}}}let It=[];function mt(R){if(R.samples>0){if(Me(R)===!1){let v=R.textures,k=R.width,pe=R.height,ae=i.COLOR_BUFFER_BIT,be=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(R),ne=v.length>1;if(ne)for(let Ee=0;Ee<v.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<v.length;Ee++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let D=n.get(v[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,D,0)}i.blitFramebuffer(0,0,k,pe,0,0,k,pe,ae,i.NEAREST),l===!0&&(It.length=0,It.push(i.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&It.push(be),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Ee=0;Ee<v.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);let D=n.get(v[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,D,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function _t(R){return Math.min(s.maxSamples,R.samples)}function Me(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ut(R){let v=o.render.frame;u.get(R)!==v&&(u.set(R,v),R.update())}function Ge(R,v){let k=R.colorSpace,pe=R.format,ae=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Qn&&k!==qs&&(Mt.getTransfer(k)===Gt?(pe!==ui||ae!==Yn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",k)),v}function je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ue,this.resetTextureUnits=$,this.getTextureUnits=Q,this.setTextureUnits=he,this.setTexture2D=ge,this.setTexture2DArray=Ce,this.setTexture3D=_e,this.setTextureCube=fe,this.rebindTextures=Vt,this.setupRenderTarget=un,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=Me,this.dispose=V}function Q1(i,e){function t(n,s=qs){let r,o=Mt.getTransfer(s);if(n===Yn)return i.UNSIGNED_BYTE;if(n===Xu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kf)return i.BYTE;if(n===Gf)return i.SHORT;if(n===aa)return i.UNSIGNED_SHORT;if(n===Wu)return i.INT;if(n===Zi)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===En)return i.HALF_FLOAT;if(n===Xf)return i.ALPHA;if(n===qf)return i.RGB;if(n===ui)return i.RGBA;if(n===Bs)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Yu)return i.RED;if(n===$u)return i.RED_INTEGER;if(n===Sr)return i.RG;if(n===Ku)return i.RG_INTEGER;if(n===Zu)return i.RGBA_INTEGER;if(n===Ol||n===Fl||n===Bl||n===Hl)if(o===Gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ol)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ol)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ju||n===ju||n===Qu||n===eh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ju)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ju)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===th||n===nh||n===ih||n===sh||n===rh||n===zl||n===oh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===th||n===nh)return o===Gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ih)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===sh)return r.COMPRESSED_R11_EAC;if(n===rh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===zl)return r.COMPRESSED_RG11_EAC;if(n===oh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ah||n===lh||n===ch||n===uh||n===hh||n===dh||n===fh||n===ph||n===mh||n===gh||n===xh||n===_h||n===yh||n===vh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ah)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===lh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ch)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===uh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ph)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_h)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vh)return o===Gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mh||n===bh||n===Sh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Mh)return o===Gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eh||n===Th||n===kl||n===wh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Th)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===wh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new dl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new xn({vertexShader:eT,fragmentShader:tT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ot(new ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bp=class extends Wi{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,p=null,_=typeof XRWebGLBinding<"u",m=new Mp,g={},y=t.getContextAttributes(),w=null,M=null,E=[],T=[],x=new it,S=null,I=null,C=new Hn;C.viewport=new $t;let L=new Hn;L.viewport=new $t;let U=[C,L],G=new Uu,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ge=E[j];return ge===void 0&&(ge=new Yo,E[j]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(j){let ge=E[j];return ge===void 0&&(ge=new Yo,E[j]=ge),ge.getGripSpace()},this.getHand=function(j){let ge=E[j];return ge===void 0&&(ge=new Yo,E[j]=ge),ge.getHandSpace()};function q(j){let ge=T.indexOf(j.inputSource);if(ge===-1)return;let Ce=E[ge];Ce!==void 0&&(Ce.update(j.inputSource,j.frame,c||o),Ce.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ue);for(let j=0;j<E.length;j++){let ge=T[j];ge!==null&&(T[j]=null,E[j].disconnect(ge))}P=null,V=null,m.reset();for(let j in g)delete g[j];if(e.setRenderTarget(w),d=null,f=null,h=null,s=null,M=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),I!==null){let j=I.camera;j.fov=I.fov,j.zoom=I.zoom,j.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ue),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,_e=null,fe=null;y.depth&&(fe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=y.stencil?Ji:Bs,_e=y.stencil?Xs:Zi);let A={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};h=this.getBinding(),f=h.createProjectionLayer(A),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new gn(f.textureWidth,f.textureHeight,{format:ui,type:Yn,depthTexture:new qi(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let Ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new gn(d.framebufferWidth,d.framebufferHeight,{format:ui,type:Yn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ue.setContext(s),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(j){for(let ge=0;ge<j.removed.length;ge++){let Ce=j.removed[ge],_e=T.indexOf(Ce);_e>=0&&(T[_e]=null,E[_e].disconnect(Ce))}for(let ge=0;ge<j.added.length;ge++){let Ce=j.added[ge],_e=T.indexOf(Ce);if(_e===-1){for(let A=0;A<E.length;A++)if(A>=T.length){T.push(Ce),_e=A;break}else if(T[A]===null){T[A]=Ce,_e=A;break}if(_e===-1)break}let fe=E[_e];fe&&fe.connect(Ce)}}function H(j,ge){ge===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ge.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ge=j.near,Ce=j.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),G.near=L.near=C.near=ge,G.far=L.far=C.far=Ce,(P!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),P=G.near,V=G.far),G.layers.mask=j.layers.mask|6,C.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;let _e=j.parent,fe=G.cameras;H(G,_e);for(let A=0;A<fe.length;A++)H(fe[A],_e);G.projectionMatrix.copy(C.projectionMatrix),G.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&j.isPerspectiveCamera&&(I={camera:j,fov:j.fov,zoom:j.zoom}),$(j,G,_e)};function $(j,ge,Ce){Ce===null?j.matrix.copy(ge.matrixWorld):(j.matrix.copy(Ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(ge.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ge.projectionMatrix),j.projectionMatrixInverse.copy(ge.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Yr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(j){return g[j]};let Q=null;function he(j,ge){if(u=ge.getViewerPose(c||o),p=ge,u!==null){let Ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let _e=!1;Ce.length!==G.cameras.length&&(G.cameras.length=0,_e=!0);for(let xe=0;xe<Ce.length;xe++){let Oe=Ce[xe],$e=null;if(d!==null)$e=d.getViewport(Oe);else{let Je=h.getViewSubImage(f,Oe);$e=Je.viewport,xe===0&&(e.setRenderTargetTextures(M,Je.colorTexture,Je.depthStencilTexture),e.setRenderTarget(M))}let He=U[xe];He===void 0&&(He=new Hn,He.layers.enable(xe),He.viewport=new $t,U[xe]=He),He.matrix.fromArray(Oe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Oe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set($e.x,$e.y,$e.width,$e.height),xe===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),_e===!0&&G.cameras.push(He)}let fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let xe=h.getDepthInformation(Ce[0]);xe&&xe.isValid&&xe.texture&&m.init(xe,s.renderState)}if(fe&&fe.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let xe=0;xe<Ce.length;xe++){let Oe=Ce[xe].camera;if(Oe){let $e=g[Oe];$e||($e=new dl,g[Oe]=$e);let He=h.getCameraImage(Oe);$e.sourceTexture=He}}}}for(let Ce=0;Ce<E.length;Ce++){let _e=T[Ce],fe=E[Ce];_e!==null&&fe!==void 0&&fe.update(_e,ge,c||o)}Q&&Q(j,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),p=null}let Ue=new Dx;Ue.setAnimationLoop(he),this.setAnimationLoop=function(j){Q=j},this.dispose=function(){}}},nT=new rt,Vx=new ft;Vx.set(-1,0,0,0,1,0,0,0,1);function iT(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,sp(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===zn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===zn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,M=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(nT.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Vx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===zn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sT(i,e,t,n){let s={},r={};function o(y,w){let M=w.program;n.uniformBlockBinding(y,M,s[y.id])}function a(y,w){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let E=w.program;n.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let w=i.createBuffer(),M=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],M=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,x=M.length;T<x;T++){let S=M[T];if(Array.isArray(S))for(let I=0,C=S.length;I<C;I++)u(S[I],T,I,E);else u(S,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,w,M,E){if(f(y,w,M,E)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let S=0;for(let I=0;I<x.length;I++){let C=x[I],L=_(C,!0);h(C,y.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function h(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function f(y,w,M,E){let T=y.value,x=w+"_"+M;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);let S=E[x],I=!1;for(let C=0;C<T.length;C++)d(T[C],S,C)===!0&&(I=!0);return I}return d(T,E,x)}function d(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let E=w[M];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let w=y.uniforms,M=0,E=16;for(let x=0,S=w.length;x<S;x++){let I=Array.isArray(w[x])?w[x]:[w[x]];for(let C=0,L=I.length;C<L;C++){let U=I[C],G=Array.isArray(U.value)?U.value:[U.value],P=Array.isArray(w[x])||Array.isArray(U.value),V=M;for(let W=0,ue=G.length;W<ue;W++){let H=G[W],$=_(H,P),Q=M%E,he=Q%$.boundary,Ue=Q+he;M+=he,Ue!==0&&E-Ue<$.storage&&(M+=E-Ue),W===0&&(V=M),M+=$.storage}let q=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new q((M-V)/Float32Array.BYTES_PER_ELEMENT),U.__offset=V}}let T=M%E;return T>0&&(M+=E-T),y.__size=M,y.__cache={},this}function _(y,w){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):et("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let w=y.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var rT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ms=null;function oT(){return ms===null&&(ms=new ls(rT,16,16,Sr,En),ms.name="DFG_LUT",ms.minFilter=An,ms.magFilter=An,ms.wrapS=Si,ms.wrapT=Si,ms.generateMipmaps=!1,ms.needsUpdate=!0),ms}var ql=class{constructor(e={}){let{canvas:t=rx(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Yn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=d,m=new Set([Zu,Ku,$u]),g=new Set([Yn,Zi,aa,Xs,Xu,qu]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,T=null,x=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,U=null,G=null,P=null,V=null;this._outputColorSpace=Yt;let q=0,W=0,ue=null,H=-1,$=null,Q=new $t,he=new $t,Ue=null,j=new ze(0),ge=0,Ce=t.width,_e=t.height,fe=1,A=null,re=null,xe=new $t(0,0,Ce,_e),Oe=new $t(0,0,Ce,_e),$e=!1,He=new vr,Je=new Su,tt=!1,Qe=!1,ke=new rt,K=new O,nt=new $t,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function un(){return ue===null?fe:1}let z=n;function It(b,B){return t.getContext(b,B)}let mt,_t,Me,Ut,Ge,je,R,v,k,pe,ae,be,we,ne,ie,Ee,D,oe,te,Ae,ye,Te,Ye;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",me,!1),z===null){let B="webgl2";if(z=It(B,b),z===null)throw It(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ct()}catch(b){throw t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",me,!1),ht("WebGLRenderer: "+b.message),b}function ct(){mt=new xE(z),mt.init(),ye=new Q1(z,mt),_t=new oE(z,mt,e,ye),Me=new J1(z,mt),_t.reversedDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),G=z.createFramebuffer(),P=z.createFramebuffer(),V=z.createFramebuffer(),Ut=new vE(z),Ge=new F1,je=new j1(z,mt,Me,Ge,_t,ye,Ut),R=new gE(C),v=new bM(z),Te=new sE(z,v),k=new _E(z,v,Ut,Te),pe=new bE(z,k,v,Te,Ut),oe=new ME(z,_t,je),ie=new aE(Ge),ae=new O1(C,R,mt,_t,Te,ie),be=new iT(C,Ge),we=new H1,ne=new X1(mt),D=new iE(C,R,Me,pe,p,l),Ee=new Z1(C,pe,_t),Ye=new sT(z,Ut,_t,Me),te=new rE(z,mt,Ut),Ae=new yE(z,mt,Ut),Ut.programs=ae.programs,C.capabilities=_t,C.extensions=mt,C.properties=Ge,C.renderLists=we,C.shadowMap=Ee,C.state=Me,C.info=Ut}_!==Yn&&(I=new EE(_,t.width,t.height,a,s,r));let ve=new bp(C,z);this.xr=ve,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(b){b!==void 0&&(fe=b,this.setSize(Ce,_e,!1))},this.getSize=function(b){return b.set(Ce,_e)},this.setSize=function(b,B,J=!0){if(ve.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}Ce=b,_e=B,t.width=Math.floor(b*fe),t.height=Math.floor(B*fe),J===!0&&(t.style.width=b+"px",t.style.height=B+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(Ce*fe,_e*fe).floor()},this.setDrawingBufferSize=function(b,B,J){Ce=b,_e=B,fe=J,t.width=Math.floor(b*J),t.height=Math.floor(B*J),this.setViewport(0,0,b,B)},this.setEffects=function(b){if(_===Yn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let B=0;B<b.length;B++)if(b[B].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(xe)},this.setViewport=function(b,B,J,X){b.isVector4?xe.set(b.x,b.y,b.z,b.w):xe.set(b,B,J,X),Me.viewport(Q.copy(xe).multiplyScalar(un()).round())},this.getScissor=function(b){return b.copy(Oe)},this.setScissor=function(b,B,J,X){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,B,J,X),Me.scissor(he.copy(Oe).multiplyScalar(un()).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(b){Me.setScissorTest($e=b)},this.setOpaqueSort=function(b){A=b},this.setTransparentSort=function(b){re=b},this.getClearColor=function(b){return b.copy(D.getClearColor())},this.setClearColor=function(){D.setClearColor(...arguments)},this.getClearAlpha=function(){return D.getClearAlpha()},this.setClearAlpha=function(){D.setClearAlpha(...arguments)},this.clear=function(b=!0,B=!0,J=!0){let X=0;if(b){let Y=!1;if(ue!==null){let Pe=ue.texture.format;Y=m.has(Pe)}if(Y){let Pe=ue.texture.type,We=g.has(Pe),Le=D.getClearColor(),Fe=D.getClearAlpha(),Ze=Le.r,dt=Le.g,Lt=Le.b;We?(y[0]=Ze,y[1]=dt,y[2]=Lt,y[3]=Fe,z.clearBufferuiv(z.COLOR,0,y)):(w[0]=Ze,w[1]=dt,w[2]=Lt,w[3]=Fe,z.clearBufferiv(z.COLOR,0,w))}else X|=z.COLOR_BUFFER_BIT}B&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",me,!1),D.dispose(),we.dispose(),ne.dispose(),je.dispose(),Ge.dispose(),R.dispose(),pe.dispose(),k.dispose(),Te.dispose(),Ye.dispose(),ae.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",Se),ve.removeEventListener("sessionend",Ve),st.stop()};function Ke(b){b.preventDefault(),tl("WebGLRenderer: Context Lost."),L=!0}function at(){tl("WebGLRenderer: Context Restored."),L=!1;let b=Ut.autoReset,B=Ee.enabled,J=Ee.autoUpdate,X=Ee.needsUpdate,Y=Ee.type;ct(),Ut.autoReset=b,Ee.enabled=B,Ee.autoUpdate=J,Ee.needsUpdate=X,Ee.type=Y}function me(b){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pt(b){let B=b.target;B.removeEventListener("dispose",Pt),N(B)}function N(b){Z(b),Ge.remove(b)}function Z(b){let B=Ge.get(b).programs;B!==void 0&&(B.forEach(function(J){ae.releaseProgram(J)}),b.isShaderMaterial&&ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,J,X,Y,Pe){B===null&&(B=Nt);let We=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Le=Ca(b,B,J,X,Y);Me.setMaterial(X,We);let Fe=J.index,Ze=1;if(X.wireframe===!0){if(Fe=k.getWireframeAttribute(J),Fe===void 0)return;Ze=2}let dt=J.drawRange,Lt=J.attributes.position,Xe=dt.start*Ze,St=(dt.start+dt.count)*Ze;Pe!==null&&(Xe=Math.max(Xe,Pe.start*Ze),St=Math.min(St,(Pe.start+Pe.count)*Ze)),Fe!==null?(Xe=Math.max(Xe,0),St=Math.min(St,Fe.count)):Lt!=null&&(Xe=Math.max(Xe,0),St=Math.min(St,Lt.count));let dn=St-Xe;if(dn<0||dn===1/0)return;Te.setup(Y,X,Le,J,Fe);let Kt,Et=te;if(Fe!==null&&(Kt=v.get(Fe),Et=Ae,Et.setIndex(Kt)),Y.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*un()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if(Y.isLine){let Tn=X.linewidth;Tn===void 0&&(Tn=1),Me.setLineWidth(Tn*un()),Y.isLineSegments?Et.setMode(z.LINES):Y.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else Y.isPoints?Et.setMode(z.POINTS):Y.isSprite&&Et.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Et.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Tn=Y._multiDrawStarts,qe=Y._multiDrawCounts,fn=Y._multiDrawCount,zt=Fe?v.get(Fe).bytesPerElement:1,Ss=Ge.get(X).currentProgram.getUniforms();for(let bn=0;bn<fn;bn++)Ss.setValue(z,"_gl_DrawID",bn),Et.render(Tn[bn]/zt,qe[bn])}else if(Y.isInstancedMesh)Et.renderInstances(Xe,dn,Y.count);else if(J.isInstancedBufferGeometry){let Tn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,qe=Math.min(J.instanceCount,Tn);Et.renderInstances(Xe,dn,qe)}else Et.render(Xe,dn)};function le(b,B,J,X){U!==null&&b.isNodeMaterial&&U.setObject(X,b),tt===!0&&ie.setState(b,J,!1),b.transparent===!0&&b.side===Un&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,Lr(b,B,X),b.side=ds,b.needsUpdate=!0,Lr(b,B,X),b.side=Un):Lr(b,B,X)}this.compile=function(b,B,J=null){J===null&&(J=b),U!==null&&U.renderStart(b,B,J),T=ne.get(J),T.init(B),S.push(T),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),b!==J&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),U!==null&&U.updateLights(T.state.lightsArray),Qe=this.localClippingEnabled,tt=ie.init(this.clippingPlanes,Qe),tt===!0&&ie.setGlobalState(this.clippingPlanes,B),U!==null&&Ee.render(T.state.shadowsArray,J,B);let X=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Pe=Y.material;if(Pe)if(Array.isArray(Pe))for(let We=0;We<Pe.length;We++){let Le=Pe[We];le(Le,J,B,Y),X.add(Le)}else le(Pe,J,B,Y),X.add(Pe)}),T=S.pop(),U!==null&&U.renderEnd(),X},this.compileAsync=function(b,B,J=null){let X=this.compile(b,B,J);return new Promise(Y=>{function Pe(){if(X.forEach(function(We){let Fe=Ge.get(We).currentProgram;(Fe===void 0||Fe.isReady())&&X.delete(We)}),X.size===0){Y(b);return}setTimeout(Pe,10)}mt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let ce=null;function Ie(b){ce&&ce(b)}function Se(){st.stop()}function Ve(){st.start()}let st=new Dx;st.setAnimationLoop(Ie),typeof self<"u"&&st.setContext(self),this.setAnimationLoop=function(b){ce=b,ve.setAnimationLoop(b),b===null?st.stop():st.start()},ve.addEventListener("sessionstart",Se),ve.addEventListener("sessionend",Ve),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(b,B);let J=ve.enabled===!0&&ve.isPresenting===!0,X=I!==null&&(ue===null||J)&&I.begin(C,ue);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(B),B=ve.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,B,ue),T=ne.get(b,S.length),T.init(B),T.state.textureUnits=je.getTextureUnits(),S.push(T),ke.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Je.setFromArrayCamera(B):He.setFromProjectionMatrix(ke,Ei,B.reversedDepth),Qe=this.localClippingEnabled,tt=ie.init(this.clippingPlanes,Qe),E=we.get(b,x.length),E.init(),x.push(E),this.info.render.frame++,ve.enabled===!0&&ve.isPresenting===!0){let We=C.xr.getDepthSensingMesh();We!==null&&pt(We,B,-1/0,C.sortObjects)}pt(b,B,0,C.sortObjects),E.finish(),U!==null&&U.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(A,re),Vt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Vt&&D.addToRenderList(E,b),this.info.autoReset===!0&&this.info.reset(),tt===!0&&ie.beginShadows();let Y=T.state.shadowsArray;if(Ee.render(Y,b,B),tt===!0&&ie.endShadows(),(X&&I.hasRenderPass())===!1){let We=E.opaque,Le=E.transmissive;if(T.setupLights(),B.isArrayCamera){let Fe=B.cameras;if(Le.length>0)for(let Ze=0,dt=Fe.length;Ze<dt;Ze++){let Lt=Fe[Ze];Ot(We,Le,b,Lt)}Vt&&D.render(b);for(let Ze=0,dt=Fe.length;Ze<dt;Ze++){let Lt=Fe[Ze];an(E,b,Lt,Lt.viewport)}}else Le.length>0&&Ot(We,Le,b,B),Vt&&D.render(b),an(E,b,B)}ue!==null&&W===0&&(je.updateMultisampleRenderTarget(ue),je.updateRenderTargetMipmap(ue)),X&&I.end(C),b.isScene===!0&&b.onAfterRender(C,b,B),Te.resetDefaultState(),H=-1,$=null,S.pop(),S.length>0?(T=S[S.length-1],je.setTextureUnits(T.state.textureUnits),tt===!0&&ie.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,U!==null&&U.renderEnd()};function pt(b,B,J,X){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let We=B.isArrayCamera?Je:He;if(!b.frustumCulled||b.intersectsFrustum(We)){X&&nt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ke);let Le=pe.update(b),Fe=b.material;Fe.visible&&E.push(b,Le,Fe,J,nt.z,null,B)}}else if(b.isMesh||b.isLine||b.isPoints){let We=B.isArrayCamera?Je:He;if(!b.frustumCulled||b.intersectsFrustum(We)){let Le=pe.update(b),Fe=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),nt.copy(b.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),nt.copy(Le.boundingSphere.center)),nt.applyMatrix4(b.matrixWorld).applyMatrix4(ke)),Array.isArray(Fe)){let Ze=Le.groups;for(let dt=0,Lt=Ze.length;dt<Lt;dt++){let Xe=Ze[dt],St=Fe[Xe.materialIndex];St&&St.visible&&E.push(b,Le,St,J,nt.z,Xe,B)}}else Fe.visible&&E.push(b,Le,Fe,J,nt.z,null,B)}}}let Pe=b.children;for(let We=0,Le=Pe.length;We<Le;We++)pt(Pe[We],B,J,X)}function an(b,B,J,X){let{opaque:Y,transmissive:Pe,transparent:We}=b;T.setupLightsView(J),tt===!0&&ie.setGlobalState(C.clippingPlanes,J),X&&Me.viewport(Q.copy(X)),Y.length>0&&hn(Y,B,J),Pe.length>0&&hn(Pe,B,J),We.length>0&&hn(We,B,J),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Ot(b,B,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let Xe=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new gn(1,1,{generateMipmaps:!0,type:Xe?En:Yn,minFilter:Ai,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}let Pe=T.state.transmissionRenderTarget[X.id],We=X.viewport||Q;Pe.setSize(We.z*C.transmissionResolutionScale,We.w*C.transmissionResolutionScale);let Le=C.getRenderTarget(),Fe=C.getActiveCubeFace(),Ze=C.getActiveMipmapLevel();C.setRenderTarget(Pe),C.getClearColor(j),ge=C.getClearAlpha(),ge<1&&C.setClearColor(16777215,.5),C.clear(),Vt&&D.render(J);let dt=C.toneMapping;C.toneMapping=fs;let Lt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),tt===!0&&ie.setGlobalState(C.clippingPlanes,X),hn(b,J,X),je.updateMultisampleRenderTarget(Pe),je.updateRenderTargetMipmap(Pe),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let St=0,dn=B.length;St<dn;St++){let Kt=B[St],{object:Et,geometry:Tn,material:qe,group:fn}=Kt;if(qe.side===Un&&Et.layers.test(X.layers)){let zt=qe.side;qe.side=zn,qe.needsUpdate=!0,ir(Et,J,X,Tn,qe,fn),qe.side=zt,qe.needsUpdate=!0,Xe=!0}}Xe===!0&&(je.updateMultisampleRenderTarget(Pe),je.updateRenderTargetMipmap(Pe))}C.setRenderTarget(Le,Fe,Ze),C.setClearColor(j,ge),Lt!==void 0&&(X.viewport=Lt),C.toneMapping=dt}function hn(b,B,J){let X=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Pe=b.length;Y<Pe;Y++){let We=b[Y],{object:Le,geometry:Fe,group:Ze}=We,dt=We.material;dt.allowOverride===!0&&X!==null&&(dt=X),Le.layers.test(J.layers)&&ir(Le,B,J,Fe,dt,Ze)}}function ir(b,B,J,X,Y,Pe){U!==null&&Y.isNodeMaterial&&U.setObject(b,Y),b.onBeforeRender(C,B,J,X,Y,Pe),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(C,B,J,X,b,Pe),Y.transparent===!0&&Y.side===Un&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,C.renderBufferDirect(J,B,X,Y,b,Pe),Y.side=ds,Y.needsUpdate=!0,C.renderBufferDirect(J,B,X,Y,b,Pe),Y.side=Un):C.renderBufferDirect(J,B,X,Y,b,Pe),b.onAfterRender(C,B,J,X,Y,Pe)}function Aa(b){let B=0;for(let J of b)J.texture!==null&&B++;return B}function Lr(b,B,J){B.isScene!==!0&&(B=Nt);let X=Ge.get(b),Y=T.state.lights,Pe=T.state.shadowsArray,We=Y.state.version,Le=ae.getParameters(b,Y.state,Pe,B,J,T.state.lightProbeGridArray),Fe=ae.getProgramCacheKey(Le),Ze=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,X.fog=B.fog;let dt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=R.get(b.envMap||X.environment,dt),X.envMapRotation=X.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Ze===void 0&&(b.addEventListener("dispose",Pt),Ze=new Map,X.programs=Ze,X.programVariants=new Map);let Lt=Ze.get(Fe);if(Lt!==void 0){if(X.currentProgram===Lt&&X.lightsStateVersion===We)return mo(b,Le),Lt}else Le.uniforms=ae.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,J,Le),b.onBeforeCompile(Le,C),Lt=ae.acquireProgram(Le,Fe),Ze.set(Fe,Lt),X.uniforms=Le.uniforms;let Xe=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=ie.uniform),mo(b,Le),X.needsLights=Id(b),X.lightsStateVersion=We,X.needsLights&&(Xe.ambientLightColor.value=Y.state.ambient,Xe.lightProbe.value=Y.state.probe,Xe.sunLights.value=Y.state.sun,Xe.sunLightShadows.value=Y.state.sunShadow,Xe.directionalLights.value=Y.state.directional,Xe.directionalLightShadows.value=Y.state.directionalShadow,Xe.spotLights.value=Y.state.spot,Xe.spotLightShadows.value=Y.state.spotShadow,Xe.rectAreaLights.value=Y.state.rectArea,Xe.ltc_1.value=Y.state.rectAreaLTC1,Xe.ltc_2.value=Y.state.rectAreaLTC2,Xe.pointLights.value=Y.state.point,Xe.pointLightShadows.value=Y.state.pointShadow,Xe.hemisphereLights.value=Y.state.hemi,Xe.sunShadowMatrix.value=Y.state.sunShadowMatrix,Xe.sunShadowCascade.value=Y.state.sunShadowCascade,Xe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Xe.spotLightMatrix.value=Y.state.spotLightMatrix,Xe.spotLightMap.value=Y.state.spotLightMap,Xe.pointShadowMatrix.value=Y.state.pointShadowMatrix),X.numLightProbeGrids=Aa(T.state.lightProbeGridArray),X.currentProgram=Lt,X.uniformsList=null,Lt}function Cd(b,B,J,X,Y){let Pe=Ge.get(b),We=Pe.currentProgram.id+","+X+","+Y,Le=Pe.programVariants.get(We);return Le===void 0?(Le=Lr(b,B,J),Pe.programVariants.set(We,Le)):(Pe.currentProgram=Le,Pe.uniformsList=null,Pe.outputColorSpace=X,Pe.toneMapping=Y),Le}function Ra(b){if(b.uniformsList===null){let B=b.currentProgram.getUniforms();b.uniformsList=ua.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function mo(b,B){let J=Ge.get(b);J.outputColorSpace=B.outputColorSpace,J.batching=B.batching,J.batchingColor=B.batchingColor,J.instancing=B.instancing,J.instancingColor=B.instancingColor,J.instancingMorph=B.instancingMorph,J.skinning=B.skinning,J.morphTargets=B.morphTargets,J.morphNormals=B.morphNormals,J.morphColors=B.morphColors,J.morphTargetsCount=B.morphTargetsCount,J.numClippingPlanes=B.numClippingPlanes,J.numIntersection=B.numClipIntersection,J.vertexAlphas=B.vertexAlphas,J.vertexTangents=B.vertexTangents,J.toneMapping=B.toneMapping}function Ca(b,B,J,X,Y){B.isScene!==!0&&(B=Nt),je.resetTextureUnits();let Pe=B.fog,We=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?B.environment:null,Le=ue===null?C.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Mt.workingColorSpace,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Ze=R.get(X.envMap||We,Fe),dt=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Lt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xe=!!J.morphAttributes.position,St=!!J.morphAttributes.normal,dn=!!J.morphAttributes.color,Kt=fs;X.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(Kt=C.toneMapping);let Et=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tn=Et!==void 0?Et.length:0,qe=Ge.get(X),fn=T.state.lights;if(tt===!0&&(Qe===!0||b!==$)){let Zt=b===$&&X.id===H;ie.setState(X,b,Zt)}let zt=!1,Ss=!1;X.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==fn.state.version||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isBatchedMesh&&qe.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&qe.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&qe.instancingMorph===!1&&Y.morphTexture!==null||qe.envMap!==Ze||X.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ie.numPlanes||qe.numIntersection!==ie.numIntersection)||qe.vertexAlphas!==dt||qe.vertexTangents!==Lt||qe.morphTargets!==Xe||qe.morphNormals!==St||qe.morphColors!==dn||qe.morphTargetsCount!==Tn||qe.numLightProbeGrids!==Aa(T.state.lightProbeGridArray)?zt=!0:(qe.outputColorSpace!==Le||qe.toneMapping!==Kt)&&(Ss=!0):(zt=!0,qe.__version=X.version);let bn=qe.currentProgram;(zt===!0||Ss===!0)&&(bn=Ss===!0?Cd(X,B,Y,Le,Kt):Lr(X,B,Y),U&&X.isNodeMaterial&&U.onUpdateProgram(X,bn,qe));let go=!1,Fi=!1,Es=!1,Bt=bn.getUniforms(),wn=qe.uniforms;if(Me.useProgram(bn.program)&&(go=!0,Fi=!0,Es=!0),X.id!==H&&(H=X.id,Fi=!0),go||$!==b){Me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Bt.setValue(z,"projectionMatrix",b.projectionMatrix),Bt.setValue(z,"viewMatrix",b.matrixWorldInverse);let _n=Bt.map.cameraPosition;_n!==void 0&&_n.setValue(z,K.setFromMatrixPosition(b.matrixWorld)),_t.logarithmicDepthBuffer&&Bt.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Bt.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),$!==b&&($=b,Fi=!0,Es=!0)}if(qe.needsLights&&(fn.state.sunShadowMap.length>0&&Bt.setValue(z,"sunShadowMap",fn.state.sunShadowMap,je),fn.state.directionalShadowMap.length>0&&Bt.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,je),fn.state.spotShadowMap.length>0&&Bt.setValue(z,"spotShadowMap",fn.state.spotShadowMap,je),fn.state.pointShadowMap.length>0&&Bt.setValue(z,"pointShadowMap",fn.state.pointShadowMap,je)),Y.isSkinnedMesh){Bt.setOptional(z,Y,"bindMatrix"),Bt.setOptional(z,Y,"bindMatrixInverse");let Zt=Y.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Bt.setValue(z,"boneTexture",Zt.boneTexture,je))}Y.isBatchedMesh&&(Bt.setOptional(z,Y,"batchingTexture"),Bt.setValue(z,"batchingTexture",Y._matricesTexture,je),Bt.setOptional(z,Y,"batchingIdTexture"),Bt.setValue(z,"batchingIdTexture",Y._indirectTexture,je),Bt.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Bt.setValue(z,"batchingColorTexture",Y._colorsTexture,je));let pi=J.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&oe.update(Y,J,bn),(Fi||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,Bt.setValue(z,"receiveShadow",Y.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&B.environment!==null&&(wn.envMapIntensity.value=B.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=oT()),Fi){if(Bt.setValue(z,"toneMappingExposure",C.toneMappingExposure),qe.needsLights&&Ia(wn,Es),Pe&&X.fog===!0&&be.refreshFogUniforms(wn,Pe),be.refreshMaterialUniforms(wn,X,fe,_e,T.state.transmissionRenderTarget[b.id]),qe.needsLights&&qe.numLightProbeGrids>0){let Zt=M,_n=0;for(let Bi of T.state.lightProbeGridArray)Bi.texture!==null&&(Zt.textures[_n]=Bi.texture,Zt.min[_n]=Bi.boundingBox.min,Zt.max[_n]=Bi.boundingBox.max,Zt.resolution[_n]=Bi.resolution,_n++);for(let Bi in Zt)Zt[Bi].length=_n;wn.probesSH.value=Zt.textures,wn.probesMin.value=Zt.min,wn.probesMax.value=Zt.max,wn.probesResolution.value=Zt.resolution}ua.upload(z,Ra(qe),wn,je)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ua.upload(z,Ra(qe),wn,je),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Bt.setValue(z,"center",Y.center),Bt.setValue(z,"modelViewMatrix",Y.modelViewMatrix),Bt.setValue(z,"normalMatrix",Y.normalMatrix),Bt.setValue(z,"modelMatrix",Y.matrixWorld),X.uniformsGroups!==void 0){let Zt=X.uniformsGroups;for(let _n=0,Bi=Zt.length;_n<Bi;_n++){let Ec=Zt[_n];Ye.update(Ec,bn),Ye.bind(Ec,bn)}}return bn}function Ia(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.sunLights.needsUpdate=B,b.sunLightShadows.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Id(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(b,B,J){let X=Ge.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),Ge.get(b.texture).__webglTexture=B,Ge.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,B){let J=Ge.get(b);J.__webglFramebuffer=B,J.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(b,B=0,J=0){ue=b,q=B,W=J;let X=null,Y=!1,Pe=!1;if(b){let Le=Ge.get(b);if(Le.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(z.FRAMEBUFFER,Le.__webglFramebuffer),Q.copy(b.viewport),he.copy(b.scissor),Ue=b.scissorTest,Me.viewport(Q),Me.scissor(he),Me.setScissorTest(Ue),H=-1;return}else if(Le.__webglFramebuffer===void 0)je.setupRenderTarget(b);else if(Le.__hasExternalTextures)je.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let dt=b.depthTexture;if(Le.__boundDepthTexture!==dt){if(dt!==null&&Ge.has(dt)&&(b.width!==dt.image.width||b.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");je.setupDepthRenderbuffer(b)}}let Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Pe=!0);let Ze=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[B])?X=Ze[B][J]:X=Ze[B],Y=!0):b.samples>0&&je.useMultisampledRTT(b)===!1?X=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?X=Ze[J]:X=Ze,Q.copy(b.viewport),he.copy(b.scissor),Ue=b.scissorTest}else Q.copy(xe).multiplyScalar(fe).floor(),he.copy(Oe).multiplyScalar(fe).floor(),Ue=$e;if(J!==0&&(X=G),Me.bindFramebuffer(z.FRAMEBUFFER,X)&&Me.drawBuffers(b,X),Me.viewport(Q),Me.scissor(he),Me.setScissorTest(Ue),Y){let Le=Ge.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+B,Le.__webglTexture,J)}else if(Pe){let Le=B;for(let Fe=0;Fe<b.textures.length;Fe++){let Ze=Ge.get(b.textures[Fe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Fe,Ze.__webglTexture,J,Le)}}else if(b!==null&&J!==0){let Le=Ge.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Le.__webglTexture,J)}H=-1};function Dr(b){let B=Ge.get(b);return(B.__readFormat!==b.format||B.__readType!==b.type)&&(B.__readFormat=b.format,B.__readType=b.type,B.__formatReadable=_t.textureFormatReadable(b.format),B.__typeReadable=_t.textureTypeReadable(b.type)),B}this.readRenderTargetPixels=function(b,B,J,X,Y,Pe,We,Le=0){if(!(b&&b.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&We!==void 0&&(Fe=Fe[We],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){Me.bindFramebuffer(z.FRAMEBUFFER,Fe);try{let Ze=b.textures[Le],dt=Ze.format,Lt=Ze.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let Xe=Dr(Ze);if(Xe.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-X&&J>=0&&J<=b.height-Y&&z.readPixels(B,J,X,Y,ye.convert(dt),ye.convert(Lt),Pe)}finally{let Ze=ue!==null?Ge.get(ue).__webglFramebuffer:null;Me.bindFramebuffer(z.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(b,B,J,X,Y,Pe,We,Le=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&We!==void 0&&(Fe=Fe[We],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(B>=0&&B<=b.width-X&&J>=0&&J<=b.height-Y){Me.bindFramebuffer(z.FRAMEBUFFER,Fe);let Ze=b.textures[Le],dt=Ze.format,Lt=Ze.type;b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Le);let Xe=Dr(Ze);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let St=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,St),z.bufferData(z.PIXEL_PACK_BUFFER,Pe.byteLength,z.STREAM_READ),z.readPixels(B,J,X,Y,ye.convert(dt),ye.convert(Lt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let dn=ue!==null?Ge.get(ue).__webglFramebuffer:null;Me.bindFramebuffer(z.FRAMEBUFFER,dn);let Kt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await ax(z,Kt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,St),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pe),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(St),z.deleteSync(Kt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,B=null,J=0){let X=Math.pow(2,-J),Y=Math.floor(b.image.width*X),Pe=Math.floor(b.image.height*X),We=B!==null?B.x:0,Le=B!==null?B.y:0;je.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,We,Le,Y,Pe),Me.unbindTexture()},this.copyTextureToTexture=function(b,B,J=null,X=null,Y=0,Pe=0){let We,Le,Fe,Ze,dt,Lt,Xe,St,dn,Kt=b.isCompressedTexture?b.mipmaps[Pe]:b.image;if(J!==null)We=J.max.x-J.min.x,Le=J.max.y-J.min.y,Fe=J.isBox3?J.max.z-J.min.z:1,Ze=J.min.x,dt=J.min.y,Lt=J.isBox3?J.min.z:0;else{let Bt=Math.pow(2,-Y);We=Math.floor(Kt.width*Bt),Le=Math.floor(Kt.height*Bt),b.isDataArrayTexture?Fe=Kt.depth:b.isData3DTexture?Fe=Math.floor(Kt.depth*Bt):Fe=1,Ze=0,dt=0,Lt=0}X!==null?(Xe=X.x,St=X.y,dn=X.z):(Xe=0,St=0,dn=0);let Et=ye.convert(B.format),Tn=ye.convert(B.type),qe;B.isData3DTexture?(je.setTexture3D(B,0),qe=z.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(je.setTexture2DArray(B,0),qe=z.TEXTURE_2D_ARRAY):(je.setTexture2D(B,0),qe=z.TEXTURE_2D),Me.activeTexture(z.TEXTURE0),Me.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,B.flipY),Me.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),Me.pixelStorei(z.UNPACK_ALIGNMENT,B.unpackAlignment);let fn=Me.getParameter(z.UNPACK_ROW_LENGTH),zt=Me.getParameter(z.UNPACK_IMAGE_HEIGHT),Ss=Me.getParameter(z.UNPACK_SKIP_PIXELS),bn=Me.getParameter(z.UNPACK_SKIP_ROWS),go=Me.getParameter(z.UNPACK_SKIP_IMAGES);Me.pixelStorei(z.UNPACK_ROW_LENGTH,Kt.width),Me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Kt.height),Me.pixelStorei(z.UNPACK_SKIP_PIXELS,Ze),Me.pixelStorei(z.UNPACK_SKIP_ROWS,dt),Me.pixelStorei(z.UNPACK_SKIP_IMAGES,Lt);let Fi=b.isDataArrayTexture||b.isData3DTexture,Es=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){let Bt=Ge.get(b),wn=Ge.get(B),pi=Ge.get(Bt.__renderTarget),Zt=Ge.get(wn.__renderTarget);Me.bindFramebuffer(z.READ_FRAMEBUFFER,pi.__webglFramebuffer),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let _n=0;_n<Fe;_n++)Fi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(b).__webglTexture,Y,Lt+_n),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.get(B).__webglTexture,Pe,dn+_n)),z.blitFramebuffer(Ze,dt,Ze+We,dt+Le,Xe,St,Xe+We,St+Le,z.DEPTH_BUFFER_BIT,z.NEAREST);Me.bindFramebuffer(z.READ_FRAMEBUFFER,null),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||Ge.has(b)){let Bt=Ge.get(b),wn=Ge.get(B);Me.bindFramebuffer(z.READ_FRAMEBUFFER,P),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,V);for(let pi=0;pi<Fe;pi++)Fi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Bt.__webglTexture,Y,Lt+pi):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Bt.__webglTexture,Y),Es?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,wn.__webglTexture,Pe,dn+pi):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,wn.__webglTexture,Pe),Y!==0?z.blitFramebuffer(Ze,dt,Ze+We,dt+Le,Xe,St,Xe+We,St+Le,z.COLOR_BUFFER_BIT,z.NEAREST):Es?z.copyTexSubImage3D(qe,Pe,Xe,St,dn+pi,Ze,dt,We,Le):z.copyTexSubImage2D(qe,Pe,Xe,St,Ze,dt,We,Le);Me.bindFramebuffer(z.READ_FRAMEBUFFER,null),Me.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Es?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(qe,Pe,Xe,St,dn,We,Le,Fe,Et,Tn,Kt.data):B.isCompressedArrayTexture?z.compressedTexSubImage3D(qe,Pe,Xe,St,dn,We,Le,Fe,Et,Kt.data):z.texSubImage3D(qe,Pe,Xe,St,dn,We,Le,Fe,Et,Tn,Kt):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pe,Xe,St,We,Le,Et,Tn,Kt.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pe,Xe,St,Kt.width,Kt.height,Et,Kt.data):z.texSubImage2D(z.TEXTURE_2D,Pe,Xe,St,We,Le,Et,Tn,Kt);Me.pixelStorei(z.UNPACK_ROW_LENGTH,fn),Me.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt),Me.pixelStorei(z.UNPACK_SKIP_PIXELS,Ss),Me.pixelStorei(z.UNPACK_SKIP_ROWS,bn),Me.pixelStorei(z.UNPACK_SKIP_IMAGES,go),Pe===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&z.generateMipmap(qe),Me.unbindTexture()},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&je.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?je.setTextureCube(b,0):b.isData3DTexture?je.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?je.setTexture2DArray(b,0):je.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){q=0,W=0,ue=null,Me.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}};function Ys(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Xt;l.morphTargetsRelative=a;let c=0;for(let u=0;u<i.length;++u){let h=i[u],f=0,d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let p=0;p<d.count;++p)h.push(d.getX(p)+u);u+=i[f].attributes.position.count}l.setIndex(h)}for(let u in r){let h=Wx(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let p=Wx(d);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function Wx(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Qt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let f=0,d=u.count;f<d;f++)for(let p=0;p<t;p++){let _=u.getComponent(f,p);a.setComponent(f+h,p,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function Sp(i,e){if(e===Yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===la||e===Gl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===la)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Dh(i){let e=new Map,t=new Map,n=i.clone();return Xx(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Xx(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Xx(i.children[n],e.children[n],t)}var Tr=class extends hs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ip(t)}),this.register(function(t){return new Pp(t)}),this.register(function(t){return new Lp(t)}),this.register(function(t){return new kp(t)}),this.register(function(t){return new Gp(t)}),this.register(function(t){return new Vp(t)}),this.register(function(t){return new Np(t)}),this.register(function(t){return new Up(t)}),this.register(function(t){return new Op(t)}),this.register(function(t){return new Fp(t)}),this.register(function(t){return new Cp(t)}),this.register(function(t){return new Bp(t)}),this.register(function(t){return new Dp(t)}),this.register(function(t){return new zp(t)}),this.register(function(t){return new Hp(t)}),this.register(function(t){return new Ap(t)}),this.register(function(t){return new Nh(t,Rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Nh(t,Rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wp(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Ws.extractUrlBase(e);o=Ws.resolveURL(c,this.path)}else o=Ws.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Qo(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Zx){try{o[Rt.KHR_BINARY_GLTF]=new Xp(e)}catch(h){s&&s(h);return}r=JSON.parse(o[Rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new jp(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case Rt.KHR_MATERIALS_UNLIT:o[h]=new Rp;break;case Rt.KHR_DRACO_MESH_COMPRESSION:o[h]=new qp(r,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:o[h]=new Yp;break;case Rt.KHR_MESH_QUANTIZATION:o[h]=new $p;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function aT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function mn(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ap=class{constructor(e){this.parser=e,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new ze(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Qn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new br(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qr(u),c.distance=h;break;case"spot":c=new Sl(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),_s(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Rp=class{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return rn}extendParams(e,t,n){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Qn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Yt))}return Promise.all(s)}},Cp=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},Ip=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new it(r,r)}return Promise.all(s)}},Pp=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},Lp=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Dp=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Np=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],Qn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Yt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},Up=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Op=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],Qn),Promise.all(s)}},Fp=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Bp=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],Qn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Yt)),Promise.all(s)}},Hp=class{constructor(e){this.parser=e,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},zp=class{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return mn(this.parser,e,this.name)!==null?ti:null}extendMaterialParams(e,t){let n=mn(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},kp=class{constructor(e){this.parser=e,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Gp=class{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Vp=class{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Nh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,s.mode,s.filter),d})})}else return null}},Wp=class{constructor(e){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Ii.TRIANGLES&&c.mode!==Ii.TRIANGLE_STRIP&&c.mode!==Ii.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(let p of h){let _=new rt,m=new O,g=new Xn,y=new O(1,1,1),w=new pn(p.geometry,p.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),w.setMatrixAt(E,_.compose(m,g,y));let M=null;for(let E in l)if(E==="_COLOR_0"){let T=l[E];w.instanceColor=new Xi(T.array,T.itemSize,T.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let x=w.geometry;M=new Xt,M.name=x.name;for(let S in x.attributes)M.setAttribute(S,x.attributes[S]);for(let S in x.morphAttributes)M.morphAttributes[S]=x.morphAttributes[S];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let S of x.groups)M.addGroup(S.start,S.count,S.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),w.geometry=M}let T=l[E];M.setAttribute(E,new Xi(T.array,T.itemSize,T.normalized))}At.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},Zx="glTF",$l=12,qx={JSON:1313821514,BIN:5130562},Xp=class{constructor(e){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,$l),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Zx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-$l,r=new DataView(e,$l),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===qx.JSON){let c=new Uint8Array(e,$l+o,a);this.content=n.decode(c)}else if(l===qx.BIN){let c=$l+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},qp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Zp[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Zp[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=fa[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(d){for(let p in d.attributes){let _=d.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(d)},a,c,Qn,f)})})}},Yp=class{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},$p=class{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}},Uh=class extends us{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,f=h*h,d=f*h,p=e*c,_=p-c,m=-2*d+3*f,g=d-f,y=1-m,w=g-f+h;for(let M=0;M!==a;M++){let E=o[_+M+a],T=o[_+M+l]*u,x=o[p+M+a],S=o[p+M]*u;r[M]=y*E+w*T+m*x+g*S}return r}},lT=new Xn,Kp=class extends Uh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return lT.fromArray(r).normalize().toArray(r),r}},Ii={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fa={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Yx={9728:sn,9729:An,9984:Vu,9985:oa,9986:so,9987:Ai},$x={33071:Si,33648:ko,10497:oi},Ep={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Zp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cT={CUBICSPLINE:void 0,LINEAR:qr,STEP:Xr},Tp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new li({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ds})),i.DefaultMaterial}function oo(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _s(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function hT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(f)}if(s){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function dT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function fT(i){let e,t=i.extensions&&i.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+wp(t.attributes):e=i.indices+":"+wp(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+wp(i.targets[n]);return e}function wp(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Jp(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var mT=new rt,jp=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Vs(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new El(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qo(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return oo(r,a,s),_s(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Ws.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=Ep[s.type],a=fa[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Qt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=Ep[s.type],c=fa[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,d=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,_,m;if(d&&d!==h){let g=Math.floor(f/d),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=t.cache.get(y);w||(_=new c(a,g*d,s.count*d/u),w=new $o(_,d/u),t.cache.add(y,w)),m=new Ko(w,l,f%d/u,p)}else a===null?_=new c(s.count*l):_=new c(a,f,s.count*l),m=new Qt(_,l,p);if(s.sparse!==void 0){let g=Ep.SCALAR,y=fa[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new y(o[1],w,s.sparse.count*g),T=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Qt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,S=E.length;x<S;x++){let I=E[x];if(m.setX(I,T[x*l]),l>=2&&m.setY(I,T[x*l+1]),l>=3&&m.setZ(I,T[x*l+2]),l>=4&&m.setW(I,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=Yx[f.magFilter]||An,u.minFilter=Yx[f.minFilter]||Ai,u.wrapS=$x[f.wrapS]||oi,u.wrapT=$x[f.wrapT]||oi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==sn&&u.minFilter!==An,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(f){return new Promise(function(d,p){t.parse(f,d,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(f){c=!0;let d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(m){let g=new Rn(m);g.needsUpdate=!0,d(g)}),t.load(Ws.resolveURL(f,r.path),_,void 0,p)})})}let h=u.then(function(f){return c===!0&&a.revokeObjectURL(l),_s(f,o),f.userData.mimeType=o.mimeType||pT(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Rt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Jo,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new $r,qn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return li}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[Rt.KHR_MATERIALS_UNLIT]){let h=s[Rt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new ze(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Qn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Yt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Un);let u=r.alphaMode||Tp.OPAQUE;if(u===Tp.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tp.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==rn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new it(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==rn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==rn){let h=r.emissiveFactor;a.emissive=new ze().setRGB(h[0],h[1],h[2],Qn)}return r.emissiveTexture!==void 0&&o!==rn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Yt)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),_s(h,r),t.associations.set(h,{materials:e}),r.extensions&&oo(s,h,r),h})}createUniqueName(e){let t=jt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Kx(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=fT(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Kx(new Xt,c,t),c.mode===Ii.TRIANGLE_STRIP?f=f.then(d=>Sp(d,Gl)):c.mode===Ii.TRIANGLE_FAN&&(f=f.then(d=>Sp(d,la))),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?uT(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,p=u.length;d<p;d++){let _=u[d],m=o[d],g,y=c[d];if(m.mode===Ii.TRIANGLES||m.mode===Ii.TRIANGLE_STRIP||m.mode===Ii.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&M?new ol(_,y):new ot(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ii.LINES)g=new ll(_,y);else if(m.mode===Ii.LINE_STRIP)g=new Kr(_,y);else if(m.mode===Ii.LINE_LOOP)g=new Zr(_,y);else if(m.mode===Ii.POINTS)g=new cl(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&dT(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),_s(g,r),m.extensions&&oo(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,p=h.length;d<p;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&oo(s,h[0],r),h[0];let f=new tn;r.extensions&&oo(s,f,r),t.associations.set(f,{meshes:e});for(let d=0,p=h.length;d<p;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Hn(Ri.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ti(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_s(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let f=new rt;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new al(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){let d=s.channels[h],p=s.samplers[d.sampler],_=d.target,m=_.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let w=0,M=f.length;w<M;w++){let E=f[w],T=d[w],x=p[w],S=_[w],I=m[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let C=n._createAnimationTracks(E,T,x,S,I);if(C)for(let L=0;L<C.length;L++)g.push(C[L])}let y=new Jr(r,void 0,g);return _s(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,mT)});for(let d=0,p=h.length;d<p;d++)u.add(h[d]);if(u.userData.pivot!==void 0&&h.length>0){let d=u.userData.pivot,p=h[0];u.pivot=new O().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Zo:c.length>1?u=new tn:c.length===1?u=c[0]:u=new At,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),_s(u,r),r.extensions&&oo(n,u,r),r.matrix!==void 0){let h=new rt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new tn;n.name&&(r.name=s.createUniqueName(n.name)),_s(r,n),n.extensions&&oo(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let f=l[u];f.parent!==null?r.add(Dh(f)):r.add(f)}let c=u=>{let h=new Map;for(let[f,d]of s.associations)(f instanceof qn||f instanceof Rn)&&h.set(f,d);return u.traverse(f=>{let d=s.associations.get(f);d!=null&&h.set(f,d)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Er[r.path]===Er.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(Er[r.path]){case Er.weights:u=zs;break;case Er.rotation:u=ks;break;case Er.translation:case Er.scale:u=Mr;break;default:n.itemSize===1?u=zs:u=Mr;break}let h=s.interpolation!==void 0?cT[s.interpolation]:qr,f=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let _=new u(l[d]+"."+Er[r.path],t.array,f,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Jp(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ks?Kp:Uh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function gT(i,e,t){let n=e.attributes,s=new ln;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){let u=Jp(fa[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new O,l=new O;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,p=f.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),f.normalized){let _=Jp(fa[f.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new ai;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Kx(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Zp[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Mt.workingColorSpace!==Qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),_s(i,e),gT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?hT(i,e.targets,t):i})}var ni=(i={})=>new li({roughness:.5,metalness:0,...i}),_i=3.9,Jx=Math.SQRT1_2,jx={leafsDark:5221973,leafsGreen:8311914,grass:5813333,stone:14541806,stoneDark:11187657,_defaultMat:14541806,roof:8030378,"kenney/space/metalRed":39387,"kenney/space/metal":16777215,"kenney/space/metalDark":12635100,"kenney/space/dark":3818598},Qx=new Map,e_=new Map;function em(i){let e=Qx.get(i);return e||Qx.set(i,e=new Tr().loadAsync(`models/${i}.glb`).then(t=>{let n=i.slice(0,i.lastIndexOf("/"));return t.scene.traverse(s=>{s.castShadow=s.receiveShadow=!0;let r=s;if(!r.isMesh)return;let o=r.material,a=n+"/"+o.name,l=e_.get(a);l||e_.set(a,l=o.map?Object.assign(o,{roughness:.55,metalness:0}):ni({color:jx[a]??jx[o.name]??o.color,flatShading:!0})),r.material=l}),t.scene})),e}function lo(i,e){i.deleteAttribute("uv");let t=new ze(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)t.toArray(s,r*3);return i.setAttribute("color",new Qt(s,3))}function Bh(i,e){let t={value:new ze(e)};return i.traverse(n=>{let s=n;if(!s.isMesh)return;let r=s.material.clone();r.onBeforeCompile=o=>{o.uniforms.tint=t,o.fragmentShader=`uniform vec3 tint;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float lum = dot(diffuseColor.rgb, vec3(.3, .6, .1)); vec3 d = diffuseColor.rgb; if ((d.b < d.r * 1.4 + .05 || d.b < d.g) && (lum > .7 || max(d.r, max(d.g, d.b)) - min(d.r, min(d.g, d.b)) > .12)) diffuseColor.rgb = tint * (.55 + .45 * min(lum, 1.));`)},r.customProgramCacheKey=()=>"paint",s.material=r}),i}async function ys(i,e=!1){let t=await em(i);t.updateMatrixWorld(!0);let n=[];if(t.traverse(s=>{let r=s;r.isMesh&&n.push({geo:r.geometry.clone().applyMatrix4(r.matrixWorld),mat:r.material})}),e){let s=new ln;n.forEach(r=>{r.geo.computeBoundingBox(),s.union(r.geo.boundingBox)}),n.forEach(r=>r.geo.translate(-(s.min.x+s.max.x)/2,-s.min.y,-(s.min.z+s.max.z)/2))}return n}var ao=(i,e,t,n,s=0)=>{let r=new At;return r.position.set(i,s,e),r.rotation.y=t,typeof n=="number"?r.scale.setScalar(n):r.scale.set(...n),r.updateMatrix(),r.matrix};function tm(i,e,t){for(let{geo:n,mat:s}of i){let r=n.clone().applyMatrix4(e),o=!!s.map;for(let h of Object.keys(r.attributes))h!=="position"&&h!=="normal"&&!(h==="uv"&&o)&&r.deleteAttribute(h);r.morphAttributes={},r.morphTargetsRelative=!1,r.attributes.normal||r.computeVertexNormals();for(let[h,f]of Object.entries(r.attributes))if(!f.isBufferAttribute||!(f.array instanceof Float32Array)||f.normalized){let d=new Float32Array(f.count*f.itemSize);for(let p=0;p<f.count;p++)for(let _=0;_<f.itemSize;_++)d[p*f.itemSize+_]=f.getComponent(p,_);r.setAttribute(h,new Qt(d,f.itemSize))}let a=r.attributes.position.count,l=new Float32Array(a*3),c=o?new ze(1,1,1):s.color;for(let h=0;h<a;h++){let f=Math.min(Math.max(r.attributes.position.getY(h)/.3,0),1),d=Zn.ao+(1-Zn.ao)*f*f*(3-2*f);l[h*3]=c.r*d,l[h*3+1]=c.g*d,l[h*3+2]=c.b*d}r.setAttribute("color",new Qt(l,3));let u=o?s:null;t.has(u)?t.get(u).push(r):t.set(u,[r])}}var xT=ni({vertexColors:!0,flatShading:!0}),t_=new Map,_T=i=>{let e=t_.get(i);return e||t_.set(i,e=Object.assign(i.clone(),{vertexColors:!0})),e},nm=i=>[...i].map(([e,t])=>new ot(Ys(t,!1)??t[0],e?_T(e):xT));async function wr(i,e,t=!0){let n=new Map;await Promise.all(e.map(async s=>tm(await ys(s.f,s.c).catch(r=>(console.warn("prop GLB",s.f,r),[])),ao(s.x,s.z,s.ry??0,s.k??1,s.y),n)));for(let s of nm(n))s.castShadow=t,s.receiveShadow=!0,i.add(s)}var n_=new Map;function jl(i,e=!1){let t=i+e,n=n_.get(t);return n||n_.set(t,n=ys(i,e).then(s=>{let r=new Map;tm(s,new rt,r);let o=new tn;return nm(r).forEach(a=>{a.castShadow=!1,o.add(a)}),o})),n}var yT=[["palmov/tall_palm_tree",9,1,20,32,!0],["palmov/palm_tree",8,1.4,20,32,!0],["palmov/tall_palm_tree",6,.8,20,32,!0],["palmov/little_palm_tree",5,1.4,20,32,!0],["palmov/stone_4",4,1.4,18,29,!0],["palmov/stone_2",3,2,18,29,!0],["palmov/stone_5",4,1.05,18,29,!0],["palmov/stone_3",3,1.3,18,29,!0],["palmov/bush_plant",5,.5,18,29,!0],["palmov/bush_plant",4,.65,18,29,!0],["nature/plant_flatTall",16,3.2,4,31,!1],["nature/plant_flatShort",14,3.2,4,31,!1],["nature/grass",14,2.2,4,29,!1],["nature/grass_large",12,2.2,4,29,!1],["nature/flower_yellowA",8,2.4,4,27,!1],["nature/flower_redA",6,2.4,4,27,!1],["nature/flower_purpleA",6,2.4,4,27,!1]],vT=["nature/flower_redA","nature/flower_yellowA","nature/flower_redA","nature/flower_yellowA"],MT=(i,e,t=0,n=10)=>[{f:"palmov/bush_plant",x:i,z:e,ry:t,k:.6},...Array.from({length:n},(s,r)=>{let o=(r+t)*2.39996,a=.5+.6*((r*.618034+t*.37)%1);return{f:vT[(r+Math.floor(t))%4],x:i+Math.cos(o)*a,z:e+Math.sin(o)*a,ry:o*3,k:4+r%3*.5}})],Kl={x:-2.7,z:-2.7,r:.95},Jl="palmov/little_palm_tree",Fh="palmov/stone_4",Qp="palmov/stone_2",s_="palmov/stone_5",Oh="nature/plant_flatTall",Zl="nature/plant_flatShort",pa="palmov/bush_plant",bT={[Jl]:.32,[Fh]:.55,[Qp]:1.1,[s_]:.65,[pa]:.3},i_=[[Fh,-3.1,-1.2,1.5,1],[Oh,3.2,-1.1,2.6,1],[Zl,1.3,-3.2,2.6,1],[Oh,-3.2,1.2,2.6,1],[Zl,1.7,3.2,2.6,1],[pa,3.2,1.7,1.7,1],[Qp,-1.3,-3.1,1.3,2],[pa,.2,-3.3,1.8,2],[Zl,-1.2,3.2,2.6,2],[Jl,3.15,-3.15,2.2,1],[Oh,-3.4,-.2,2.8,3],[Jl,-3.15,3.15,2.2,3],[Fh,3.3,.3,1.2,3],[pa,-3.3,2.2,1.7,4],[Zl,2.4,-3.3,2.8,4],[s_,-2.2,-3.4,1.4,4],[Oh,3.4,2.8,2.8,5],[Qp,.6,3.4,1.2,5],[pa,-3.4,-2.2,1.9,5],[Jl,1.3,-3.4,2.6,6],[Zl,-3.4,.9,2.8,6],[Fh,2.6,3.4,1.1,7],[Jl,-3.4,1.7,2.4,8],[pa,3.4,-2.2,1.9,8]];function r_(i,e,t,n,s,r,o=[]){let a=(H,$,Q)=>{let he=Math.hypot(H,$),Ue=(H-$)*Jx,j=-(H+$)*Jx,ge=Q?2.2:.7,Ce=r/2+ge;return he>3.5&&Math.abs(he-n)>Ce&&Math.abs(he-s)>Ce&&!(he<n&&(Math.abs(Ue)<Ce||Math.abs(j)<Ce))&&t.every(([_e,fe,A])=>Math.hypot(H-_e,$-fe)>A+(Q?2:0))&&e.every(([_e,fe])=>Math.max(Math.abs(H-_e),Math.abs($-fe))>(Q?_i+1.2:2.6))},l=(H,$,Q,he,Ue,j,ge)=>{let Ce=[];for(let _e=0;Ce.length<$&&_e<$*40;_e++){let fe=(_e+ge)*2.39996,A=he+(_e*.618034+ge*.37)%1*(Ue-he),re=Math.cos(fe)*A,xe=Math.sin(fe)*A;a(re,xe,j)&&Ce.push({f:H,x:re,z:xe,ry:fe*3,k:Q*(.8+_e*5%7/15)})}return Ce},c=yT.flatMap(([H,$,Q,he,Ue,j],ge)=>l(H,$,Q,he,Ue,j,ge*1.7+.3)),u=H=>/\/(grass|flower|plant_flat)/.test(H.f),h=[...o];for(let H=0;H<20;H++){let $=(H+.5)/20*Math.PI*2,Q=Math.cos($)*(n+2.9),he=Math.sin($)*(n+2.9);a(Q,he,!1)&&h.push([Q,he])}for(let[H,$]of e)for(let[Q,he]of[[2.3,2.3],[2.3,-2.3],[-2.3,2.3]])h.push([H+Q,$+he]);let f=h.flatMap(([H,$],Q)=>MT(H,$,Q*1.3));wr(i,c.filter(H=>!u(H))),wr(i,[...c.filter(u),...f],!1);let d=document.createElement("canvas");d.width=128,d.height=64;let p=d.getContext("2d");p.fillStyle="#fff",p.fillRect(0,0,128,7),p.fillRect(0,57,128,7),p.fillRect(0,26,128,4);for(let H=3;H<128;H+=16)p.fillRect(H,0,4,64);let _=new cs(d);_.colorSpace=Yt;let m=1.5,g=2.3,y=1.1,w=e.length*9,M=e.length*8,E=Object.assign(new pn(new ei(1,m).translate(0,m/2+.1,0),ni({map:_,alphaTest:.5,side:Un,color:5661578}),M),{frustumCulled:!1,castShadow:!0});E.count=0,i.add(E);let T=Object.assign(new pn(Ys([lo(new gl(Kl.r-.05,Kl.r+.3,10).rotateX(-Math.PI/2),9149364),lo(new fl(Kl.r,10).rotateX(-Math.PI/2).translate(0,.01,0),39387)]),ni({vertexColors:!0,emissive:739946,roughness:.25}),e.length),{frustumCulled:!1,receiveShadow:!0});T.count=0,i.add(T);let x=document.createElement("canvas");x.width=x.height=64;let S=x.getContext("2d"),I=S.createRadialGradient(32,32,2,32,32,32);I.addColorStop(0,"rgba(20,40,20,.55)"),I.addColorStop(1,"rgba(20,40,20,0)"),S.fillStyle=I,S.fillRect(0,0,64,64);let C=Object.assign(new pn(new ei(1,1).rotateX(-Math.PI/2),new rn({map:new cs(x),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),w),{frustumCulled:!1});C.count=0,i.add(C);let L=Object.assign(new pn(new vn(.5,.18,.5),new rn({color:16767370}),w),{frustumCulled:!1,count:0});i.add(L);let U=new Map,G=[];Promise.all([...new Set(i_.map(H=>H[0]))].map(H=>ys(H).then($=>U.set(H,$)))).then(()=>{V="",ue(q,W)},H=>console.warn("dress GLB",H));let P=[],V="",q=0,W=[];ys("kenney/fantasy/pillarStone",!0).then(H=>{P=H.map($=>Object.assign(new pn($.geo,$.mat,w),{frustumCulled:!1,castShadow:!0,count:0})),i.add(...P),V="",ue(q,W)},H=>console.warn("pillar GLB",H));function ue(H,$=[]){q=H,W=$;let Q=H+"|"+$.join();if(!P.length||Q===V)return;V=Q;let he=0,Ue=0,j=(_e,fe,A,re)=>E.setMatrixAt(he++,ao(_e,fe,A,[re,1,1]));e.forEach(([_e,fe],A)=>{if(!(H>>A&1))return;let re=Math.atan2(_e,fe);for(let xe=0;xe<4;xe++){let Oe=re+xe*Math.PI/2,$e=Math.cos(Oe),He=Math.sin(Oe),Je=Qe=>[_e+Qe*$e-_i*He,fe-Qe*He-_i*$e],tt=(Qe,ke=1)=>{let[K,nt]=Je(Qe);P.forEach(Nt=>Nt.setMatrixAt(Ue,ao(K,nt,Oe,[5*ke,g,5*ke]))),L.setMatrixAt(Ue,ao(K,nt,Oe,ke,g+.05)),C.setMatrixAt(Ue,ao(K,nt,0,2.4*ke,.045)),Ue++};if(tt(-_i),xe===0){tt(-y,1.1),tt(y,1.1);for(let Qe of[-1,1])j(...Je(Qe*(_i+y)/2),Oe,_i-y)}else{tt(0);for(let Qe of[-1,1])j(...Je(Qe*_i/2),Oe,_i)}}});let ge=0;e.forEach(([_e,fe],A)=>{H>>A&1&&T.setMatrixAt(ge++,ao(_e+Kl.x,fe+Kl.z,0,1,.09))}),T.count=ge,T.instanceMatrix.needsUpdate=!0;let Ce=new Map;e.forEach(([_e,fe],A)=>{let re=$[A]??0,xe=Math.hypot(_e,fe),Oe=-_e/xe,$e=-fe/xe;if(H>>A&1)for(let[He,Je,tt,Qe,ke]of i_)re<ke||Je*Oe+tt*$e>2.4&&Math.abs(Je*$e-tt*Oe)<1.8||tm(U.get(He)??[],ao(_e+Je,fe+tt,(Je*7.3+tt*3.1)%6.28,Qe*1.4*(bT[He]??1),re===7?.35:.06),Ce)}),G.forEach(_e=>{i.remove(_e),_e.geometry.dispose()}),G=nm(Ce),G.forEach(_e=>{_e.castShadow=_e.receiveShadow=!0,i.add(_e)}),E.count=he,E.instanceMatrix.needsUpdate=!0,P.forEach(_e=>{_e.count=Ue,_e.instanceMatrix.needsUpdate=!0}),L.count=Ue,L.instanceMatrix.needsUpdate=!0,C.count=Ue,C.instanceMatrix.needsUpdate=!0}return{pens:ue}}var ST=(i,e)=>{let t=Math.hypot(e[0]-i[0],e[1]-i[1]),n=Math.atan2(e[0]-i[0],e[1]-i[1]);return{L:t,sample:s=>[i[0]+(e[0]-i[0])*s/t,i[1]+(e[1]-i[1])*s/t,n]}},o_=i=>({L:2*Math.PI*i,sample:e=>{let t=e/i;return[Math.cos(t)*i,Math.sin(t)*i,Math.atan2(-Math.sin(t),Math.cos(t))]}});function Ql(i,e,t,n,s,r,o=0,a=!1,l=1){let c=Math.max(1,Math.round(n/s));for(let u=0;u<c;u++)for(let{geo:h,mat:f}of i){let d=h.index?h.toNonIndexed():h.clone(),p=d.attributes.position,_=d.attributes.normal;for(let m=0;m<p.count;m++){let g=p.getX(m),y=p.getZ(m),w=a?g:y,M=(a?y:g)*l,[E,T,x]=t((u+w+.5)/c*n),S=Math.cos(x),I=-Math.sin(x),C=o+M*r;p.setXYZ(m,E+S*C,p.getY(m),T+I*C),_.setXYZ(m,0,1,0)}for(let m of Object.keys(d.attributes))m!=="position"&&m!=="normal"&&m!=="uv"&&d.deleteAttribute(m);(e.get(f)??e.set(f,[]).get(f)).push(d)}}function im(i,e,t,n,s,r){let{L:o,sample:a}=ST(t,n),l=Math.max(1,Math.round(s/r));for(let c=0;c<l;c++)Ql(i,e,a,o,r,s/l,(c+.5)*s/l-s/2)}var a_=(i,e,t)=>{for(let[n,s]of i){let r=new ot(Ys(s,!1)??s[0],Object.assign(n.clone(),{side:Un}));r.position.y=t,r.receiveShadow=!0,r.castShadow=!1,e.add(r)}};async function sm(i,e,t=0,n="kenney/paving/road"){let s=await ys(n).catch(o=>(console.warn("paving GLB",o),[])),r=new Map;e(s,r),a_(r,i,t)}async function l_(i,e,t,n){let[s,r]=await Promise.all([ys("kenney/cityroads/road-straight"),ys("kenney/cityroads/road-side")]).catch(c=>(console.warn("road GLB",c),[[],[]])),o=new Map;Ql(s,o,e.pos,e.L,t*1.3,t,0,!0);let a=r.map(({geo:c,mat:u})=>{let h=c.toNonIndexed(),f=h.attributes.position,d=[];for(let _=0;_<f.count;_+=3)[0,1,2].every(m=>f.getZ(_+m)<-.49)&&d.push(_,_+1,_+2);let p=new Xt;for(let _ of["position","normal","uv"]){let m=h.attributes[_];if(!m)continue;let g=new Float32Array(d.length*m.itemSize);d.forEach((y,w)=>{for(let M=0;M<m.itemSize;M++)g[w*m.itemSize+M]=m.array[y*m.itemSize+M]}),p.setAttribute(_,new Qt(g,m.itemSize))}return{geo:p,mat:u}}).filter(c=>c.geo.attributes.position.count),l=n/.31;for(let c of[1,-1])Ql(a,o,e.pos,e.L,t*1.3,l,c*(.5*l-t/2),!0,c);a_(o,i,0)}var Gh=Math.SQRT1_2,kh=Math.PI/4,Ct=(i,e)=>[(i-e)*Gh,-(i+e)*Gh],ec=Mi.D,Ar=[[-12.37,-17.4-ec],[9.7,-17-ec],[0,-19.8-ec],[-14.2,13.5+ec],[-3.7,16.3+ec]],ji=[3,2.6,3.6,1.8,1.8],ma=[6.5,5.2,6.5],Vh=[1,1,.6],ET=[1,1.15,1.7],TT=[[0,.2],[0,.3],[0,-.5]],vs=(i,e,t)=>Ct(Ar[i][0]+e,Ar[i][1]-t),wT=(i,e,t)=>Array.from({length:e},(n,s)=>vs(i,s%2?.35:-.35,ji[i]/2+t+s*.8)),Qi=Dn.map((i,e)=>({id:i.id,node:e<3?vs(e,0,-ji[e]/2-Vh[e]):vs(e,0,ji[e]/2+.9+4*.8+.3),walk:e<3?[vs(e,ma[e],-ji[e]/2-Vh[e]),vs(e,ma[e],ji[e]/2+.7),vs(e,0,ji[e]/2+.7),vs(e,0,ET[e]),vs(e,...TT[e])]:[],inside:[[[-.9,-.5],[.9,-.5],[0,.3]],[[-.7,.4],[.7,.4],[0,.1]],[[0,-.5],[0,.9],[-1.6,-.7],[1.6,-.7]],[],[]][e].map(([t,n])=>vs(e,t,n)),queue:wT(e,e<3?5:4,.9)})),AT=new li({vertexColors:!0,flatShading:!0,roughness:.5,metalness:0});function RT(i){let e=[];return{box(t,n,s,r,o,a,l){e.push(lo(new vn(t,n,s).translate(r,o,a),l))},done(){let[t,n]=Ct(...Ar[i]),s=new ot(Ys(e).rotateY(kh).translate(t,0,n),AT);return s.castShadow=s.receiveShadow=!0,[s]}}}function CT(i,e,t,n){let s=RT(i);s.box(e,.1,t+.3,0,2.2,0,vt.dgray),s.box(e,2.1,.3,0,1.05,-t/2,vt.brown),s.box(e-.2,1.7,.12,0,.9,t/2-.1,vt.lavender);for(let r=.2;r<1.7;r+=.3)s.box(e-.1,.05,.16,0,r,t/2-.1,vt.dgray);for(let r of[-1,1])s.box(.16,2.2,.16,r*(e/2-.1),1.1,t/2,n);return s.done()}var Ms="cartoon/",Pn=(i,e,t,n=1,s=0,r=0)=>({f:i,x:e,z:t,k:n,ry:s,y:r,c:!0}),IT=(i,e,t)=>[Pn("kenney/furniture/tableRound",i,e,1.6),...[[-.75,0,Math.PI/2],[.75,0,-Math.PI/2],[0,.75,Math.PI]].map(([n,s,r])=>Pn("kenney/furniture/chair",i+n,e+s,2,r)),...t?[Pn(Ms+t,i,e,1.05)]:[]],Hh=(i,e)=>Pn(Ms+"Decoration_FlowerBox",i,e,.8),rm=(i,e,t)=>Pn(Ms+"LightChain",0,t,[i/5,.8,.8],0,e-.2),c_=(i,e,t)=>Pn(Ms+"ColorFlags",0,t,[i/11,.7,.7],0,e),zh=(i,e)=>Pn(Ms+"Balloon_Stand",i,e,.45),u_=(i,e)=>Pn(Ms+"Lantern_Path",i,e,.65),PT=[(i,e,t,n)=>[...[...Array(Math.min(i-1,3))].flatMap((s,r)=>IT(e/2+1.4,[t-.6,t-2.6,t+1.6][r],i>=4&&!r?"Umbrella_Red":null)),...i>=3?[-1,1].map(s=>Hh(s*(e/2+.5),t+.4)):[],...i>=5?[rm(e+.4,2.6,t+.5)]:[],...i>=6?[c_(e+1.2,n*.75,t+.3)]:[],...i>=8?[-1,1].map(s=>zh(s*(e/2+.6),t+.6)):[]],(i,e,t)=>[...i>=2?[Pn("palmov/bench_1",e/2+1.2,.3,.85)]:[],...i>=3?[-1,1].map(n=>Hh(n*(e/2+.5),t+.3)):[],...i>=4?[Pn(Ms+"Umbrella_Pink",-e/2-1.1,-1,1.2)]:[],...i>=5?[rm(e+.3,2.3,t+.45)]:[],...i>=6?[Pn("kenney/food/iceCreamCone",e/2+.8,t-.3,6.5,0,.3),Pn("palmov/stone_4",e/2+.8,t-.3,[.6,.45,.5])]:[],...i>=7?[Pn(Ms+"IceCreamCart",-e/2-1.6,-2.3,.7)]:[],...i>=8?[zh(e/2+.6,t+.5)]:[]],(i,e,t)=>[...i>=2?[-1,1].map(n=>Hh(n*(e/2+.5),t+.3)):[],...i>=3?[-1,1].map(n=>Pn("kenney/fantasy/stallRed",n*(e/2+1),.1,1.3)):[],...i>=4?[[-1,"Gift_Red"],[1,"Gift_Blue"]].flatMap(([n,s])=>[Pn(Ms+s,n*(e/2+1.5),1.1,.4,.4),Pn(Ms+"Gift_Yellow",n*(e/2+.9),1.2,.3,-.3)]):[],...i>=5?[rm(e+.4,2.9,t+.6)]:[],...i>=6?[-1,1].map(n=>zh(n*(e/2+.6),t+.3)):[],...i>=7?[-1,1].map(n=>u_(n*(e/2+1.9),t+.6)):[],...i>=8?[Pn("palmov/stone_4",-e/2-1.2,-t+1,[.9,.8,.7]),Pn("trex",-e/2-1.2,-t+1,.3,Math.PI/3,.5)]:[]],(i,e,t,n)=>[...i>=2?[Pn("kenney/coaster/queue-straight",0,t+1.9,[1.8,2,1.6])]:[],...i>=4?[-1,1].map(s=>Hh(s*(e/2+.5),t+.2)):[],...i>=5?[-1,1].map(s=>u_(s*(e/2+.6),t+.3)):[],...i>=7?[c_(e+1,n*.8,t+.3)]:[],...i>=8?[-1,1].map(s=>zh(s*(e/2+.6),t+.2)):[]]],LT=[[3.2,vt.red],[3,vt.pink],[5.6,vt.blue],null,null],h_=["Restaurant_Shop","Candy_Shop","Misc_Shop_1","Kiosk_Shop","Kiosk_Shop"],DT=[4.2,3.45,5,2.35,2.35],NT=[["FOOD",3.2],["ICE CREAM",3.4],["SOUVENIRS",4.6],["TICKETS",2.6]];function d_(i){let e=Dn.map(()=>-1),t=Dn.map(()=>0),n=Dn.map(()=>[]),s=Dn.map((c,u)=>{let[h,f]=NT[Math.min(u,3)],d=document.createElement("canvas");d.width=256,d.height=Math.round(256*.3);let p=d.getContext("2d");p.fillStyle="#3a2412",p.fillRect(0,0,d.width,d.height),p.strokeStyle="#d3bd46",p.lineWidth=4,p.strokeRect(3,3,d.width-6,d.height-6),p.fillStyle="#ecebe7",p.font="bold 40px system-ui, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText(h,d.width/2,d.height/2+2);let _=new cs(d);_.colorSpace=Yt;let m=new ot(new ei(f,f*.3),new rn({map:_}));return m.rotation.y=kh,m.visible=!1,i.add(m),m}),r=Dn.map(()=>[]);function o(c,u,h=0){let f=(c-u)*Gh,d=-(c+u)*Gh;return r.some((p,_)=>p.some(([m,g,y,w])=>Math.abs(f-Ar[_][0]-m)<y/2+h&&Math.abs(Ar[_][1]-d-g)<w/2+h))}let a=Dn.map(()=>0);function l(c){return c.forEach((u,h)=>{let f=Math.min(ar.length,Math.max(0,u|0));if(a[h]=f,e[h]===f)return;e[h]=f;let d=++t[h];if(n[h].forEach((p,_)=>{i.remove(p),(_||p.isMesh)&&p.traverse(m=>m.geometry?.dispose())}),n[h]=[],s[h].visible=f>0,!f){r[h]=[];let p=LT[h];p&&(r[h]=[[0,0,p[0],ji[h]]],n[h]=CT(h,p[0],ji[h],p[1]),n[h].forEach(_=>i.add(_)));return}r[h]=[],jl("cartoon/"+h_[h],!0).then(p=>{if(t[h]!==d)return;let _=p.clone(),m=new ln().setFromObject(_),g=DT[h]/(m.max.x-m.min.x)*(1+.04*(f-1)),[y,w]=Ct(...Ar[h]);_.scale.setScalar(g),_.rotation.y=kh,_.position.set(y,0,w),_.traverse(x=>{x.castShadow=x.receiveShadow=!0});let M=new tn;M.rotation.y=kh,M.position.set(y,0,w),n[h]=[_,M],n[h].forEach(x=>i.add(x)),wr(M,PT[Math.min(h,3)](f,(m.max.x-m.min.x)*g,m.max.z*g,m.max.y*g)).then(()=>{t[h]!==d&&M.traverse(x=>x.geometry?.dispose())});let[E,T]=vs(h,0,m.max.z*g+.1);s[h].position.set(E,m.max.y*g+.5,T)}).catch(p=>console.warn("shop GLB",h_[h],p))}),a}return{set:l,blocked:o}}var f_=Math.SQRT1_2,ts=Math.PI/4,Fn=Mi.RING_R,Ks=4.1,lm=1.8,p_=1.4,qt=Mi.D,$s=2.2,x_=i=>i.map(([e,t])=>[e,t+qt]);function __(i,e,t){let n=new ml(i.map(([_,m])=>{let[g,y]=Ct(_,m);return new O(g,0,y)}),!1,"centripetal"),s=new O,r=new O;n.arcLengthDivisions=400;let o=n.getLength(),a=_=>{let m=Math.min(Math.max(_/o,0),1);n.getPointAt(m,s),n.getTangentAt(m,r);let g=_-m*o;return[s.x+r.x*g,s.z+r.z*g,Math.atan2(r.x,r.z)]},[l,c]=Ct(e,t),u=0,h=1e9;for(let _=0;_<=400;_++){let[m,g]=a(_/400*o),y=Math.hypot(m-l,g-c);y<h&&(h=y,u=_/400*o)}let[f,d,p]=a(u);return{L:o,pos:a,stop:u,x:f,z:d,yaw:p}}var Rr=__(x_([[142,-37],[94,-17],[46,3],[34,8],[22,14.5],[12,19.2],[5,21],[-4,22.5],[-13,24.5],[-21,22],[-28,16],[-36,9],[-46,1],[-86,-31],[-134,-63]]),5,21+qt),Pi=__(x_([[-144,47],[-96,39.5],[-48,32],[-32,29.5],[-16,26.5],[-4,24],[5,22.6],[10,22.5],[15,22.4],[26,22],[37,20.2],[50,16.5],[98,2.8],[146,-10.9]]),10,22.5+qt),nc={x:Rr.x,z:Rr.z,yaw:Rr.yaw,walk:Ct(5,19+qt)},tc=Math.sqrt(Fn*Fn-9.5*9.5)+1,co=18.6+qt,uo=22.4+qt,es=1.5,xa={x:Pi.x,z:Pi.z,yaw:Pi.yaw,walk:Ct(9.5,tc)},y_=[[-9.2,14.6+qt,13.5,6.2],[-8.6,12+qt,3,3],[1.4,16.8+qt,2,4.4],[5,19+qt,8,1.4]],Wh=[-21.5,12.6+qt,6.4,9],ns=[-9.1,18.7+qt],om=6.4,am=1.8,ic=(i,e)=>Ct(ns[0]+i,ns[1]-e),UT=[[ns[0],ns[1]+1.2,om,.8],...[-1,1].map(i=>[ns[0]+i*(am/2+(om-am)/4),ns[1]-.4,(om-am)/2,2.4])],v_=(i,e,t=0)=>{let n=(i-e)*f_,s=-(i+e)*f_;return UT.some(([r,o,a,l])=>Math.abs(n-r)<a/2+t&&Math.abs(s-o)<l/2+t)},M_=i=>/^(palmov|cartoon)\//.test(i)?i:"kenney/"+i,ga=(i,e,t,n={})=>({f:M_(i),x:Ct(e,t)[0],z:Ct(e,t)[1],ry:ts,...n}),OT=[ga("cartoon/TownHall",ns[0],ns[1],{k:.9,c:!0}),ga("palmov/bench_1",3.4,19.2+qt,{k:.8,ry:ts+Math.PI}),ga("palmov/bench_1",6.8,19.2+qt,{k:.8,ry:ts+Math.PI}),ga("holiday/lightpost",.6,19.4+qt,{k:2.1}),ga("palmov/fountain_1",-23.5,-1.5,{k:.8}),...[9.2,11.4,13.6,15.8].map((i,e)=>ga(["car/sedan","car/hatchback-sports","car/suv","car/sedan"][e],-21.3,i+qt,{k:.95,ry:e%2?-ts:3*ts}))],b_=[[-1.4,15.4],[-1.4,18.8+qt],[-16.4,-17.2-qt],[-9.4,-23-qt],[10.5,-22.6-qt],[14.5,-21.9-qt],[8.2,-17-qt]].map(([i,e])=>Ct(i,e)),m_=i=>Array.from({length:Math.ceil(i.L/5)},(e,t)=>[...i.pos(t*5).slice(0,2),2.4]),Xh=[[...Ct(-9.2,16.5+qt),9.5],[...Ct(-21.5,12.6+qt),6],[...Ct(-23.5,-1.5),2.6],[...Ct(-11,-19.5-qt),5.5],[...Ct(1,-21.4-qt),5.5],[...Ct(11,-18.4-qt),4.5],...m_(Rr),...m_(Pi)],FT=(i,e)=>e*Math.sqrt(Math.max(0,Fn*Fn-i*i)),on={H:1,LEN:3.6,DEP:1.7},BT=[[1,0],[0,1],[0,1],[1,0]],g_=[[0,on.H,0,on.LEN,.14,on.DEP],...[-1,1].flatMap(i=>[-1,1].map(e=>[i*(on.LEN/2-.15),on.H/2,e*(on.DEP/2-.15),.16,on.H,.16])),[0,on.H+.55,on.DEP/2-.04,on.LEN,.07,.07],[0,on.H+.25,on.DEP/2-.04,on.LEN,.07,.07],[-on.LEN/2+.04,on.H+.55,0,.07,.07,on.DEP],...[0,1,2].map(i=>{let e=on.H-.25*(i+1);return[on.LEN/2+.3+.5*i,e/2,0,.5,e,.9]})],S_=[0,1,2,3,4].map(i=>{let[e,t]=Ar[i];if(i===3)return[[e,t-4,1.6,5.6]];if(i===4)return[[e,t-5.7,1.6,1.4]];let n=t-ji[i]/2-.7,s=t+ji[i]/2+Vh[i],r=e+ma[i],o=1.4,a=FT(e,-1)+.5;return[[e,(a+s)/2,2,a-s],[(e+r)/2,s,Math.abs(ma[i])+o,o],[r,(s+n)/2,o,s-n+o],[(e+r)/2,n,Math.abs(ma[i])+o,o]]});Xh.push(...[...S_.flat(),...y_.slice(2),[9.5,(tc+uo)/2,1.6,uo-tc]].flatMap(([i,e,t,n])=>{let s=Math.ceil(Math.max(t,n)/1.5)+1;return Array.from({length:s},(r,o)=>{let a=o/(s-1)-.5;return[...Ct(t>n?i+a*t:i,t>n?e:e+a*n),Math.min(t,n)/2+.6]})}));function E_(i,e){let t=(I,C,L,U=0)=>I.rotateX(-Math.PI/2).rotateY(U).translate(C,0,L),s=I=>(C,L)=>I.forEach(([U,G,P,V])=>P>=V?im(C,L,Ct(U-P/2,G),Ct(U+P/2,G),V,1.5):im(C,L,Ct(U,G-V/2),Ct(U,G+V/2),P,1.5)),r=[-1,1].flatMap(I=>[[0,I*(Fn+Ks)/2,p_,Fn-Ks],[I*(Fn+Ks)/2,0,Fn-Ks,p_]]);sm(i,(I,C)=>{for(let L of[Fn,Ks]){let U=o_(L);Ql(I,C,U.sample,U.L,1.5,lm)}s([...r,...y_])(I,C)}),l_(i,Rr,2.4,.5);let o=new ot(t(new ei(Wh[2],Wh[3]),...Ct(Wh[0],Wh[1]),ts),new Ki({color:5925256}));o.position.y=.02,o.receiveShadow=!0,i.add(o);let a=S_.map(I=>{if(!I.length)return null;let C=new tn;return i.add(C),sm(C,s(I)),C});wr(i,OT);let l=(I,C,L,U,G,P=9)=>{let V=[];for(let q=0;q<L;q++){let W=(q+U)/L*Math.PI*2,ue=Math.abs((W*180/Math.PI-45+360)%90-45),H=Math.cos(W)*C,$=Math.sin(W)*C;C>6&&(45-ue<P||Xh.some(([Q,he,Ue])=>Ue<8&&Math.hypot(H-Q,$-he)<Ue+1))||V.push({f:M_(I),x:H,z:$,ry:Math.atan2(-Math.cos(W),-Math.sin(W)),k:G})}return V},c=l("holiday/lightpost",Fn+1.5,22,.5,2.1);wr(i,[...c,...l("palmov/bench_1",Fn+1.35,14,0,.8).map(I=>({...I,ry:I.ry+Math.PI})),...l("furniture/trashcan",Fn+1.2,9,.25,2)]),ys("kenney/holiday/lightpost").then(I=>{let C=Math.max(...I.map(q=>(q.geo.computeBoundingBox(),q.geo.boundingBox.max.y)))*2.1,[L,U]=Ct(10,22.5+qt),G=new pn(new vn(1,1,1),new rn({color:16767370}),c.length),P=new At;c.forEach((q,W)=>{P.position.set(q.x,C-.25,q.z),P.scale.setScalar(.34),P.rotation.set(0,0,0),P.updateMatrix(),G.setMatrixAt(W,P.matrix)});let V=new ot(new vn(9.4,.7,.1),G.material);V.position.set(L-3.1*Math.sin(ts),$s+1.1,U-3.1*Math.cos(ts)),V.rotation.y=ts,u.add(V),G.frustumCulled=!1,i.add(G)},()=>{});let u=new tn;u.visible=!1,i.add(u);let h=Math.ceil(Pi.L/1.3),f=new pn(new vn(1.5,.3,.55),ni({color:14541806}),h),d=new At;for(let I=0;I<h;I++){let[C,L,U]=Pi.pos(I/(h-1)*Pi.L);d.position.set(C,$s-.2,L),d.rotation.y=U-Math.PI/2,d.updateMatrix(),f.setMatrixAt(I,d.matrix)}f.castShadow=f.receiveShadow=!0,u.add(f);let p=Array.from({length:Math.ceil(Pi.L/5.5)},(I,C)=>Pi.pos(C*5.5)).map(([I,C])=>({f:"kenney/roads/bridge_pillar",x:I,z:C,k:4.2,c:!0})),[_,m]=Ct(10,22.5+qt),g=(I,C,L,U,G,P,V)=>lo(new vn(I,C,L).translate(U,G,P).rotateY(ts).translate(_,0,m),V),y=[g(10,.3,2.4,0,$s-.05,-2,vt.lgray),g(10.4,.2,3.4,0,$s+2.5,-1.6,vt.dgray),g(10,.5,.1,0,$s+2.1,-3.2,vt.blue),...[-4.6,4.6].flatMap(I=>[-.6,-3].map(C=>g(.16,2.5,.16,I,$s+1.2,C,vt.white))),...Array.from({length:3},(I,C)=>{let L=$s*(6-C)/6;return g(1.4,L,.4,-.5,L/2,-.6+.4*C,vt.lgray)}),...(()=>{let I=(q,W,ue,H,$,Q,he=0,Ue=9.5)=>{let[j,ge]=Ct(Ue,H);return lo(new vn(q,W,ue).rotateX(he).translate(0,$,0).rotateY(ts).translate(j,0,ge),Q)},C=co-tc,L=Math.atan2(es,C),U=Math.hypot(C,es),G=(tc+co)/2,P=uo-co,V=(co+uo)/2;return[I(1.4,.12,U,G,es/2-.06,vt.lgray,L),I(1.4,.12,P,V,es-.06,vt.lgray),...[-.67,.67].flatMap(q=>[I(.06,.4,U,G,es/2+.2,vt.blue,L,9.5+q),I(.06,.4,P,V,es+.2,vt.blue,0,9.5+q),...[co,uo-.4].map(W=>I(.16,es-.1,.16,W,(es-.1)/2,vt.white,0,9.5+q))])]})()],w=new ot(Ys(y),ni({vertexColors:!0,flatShading:!0}));w.castShadow=w.receiveShadow=!0,u.add(w),p.push(...[-3.5,0,3.5].map(I=>({f:"kenney/roads/bridge_pillar",x:Ct(10+I,24.5+qt)[0],z:Ct(10+I,24.5+qt)[1],k:4.2,c:!0}))),wr(u,p);let M=Object.assign(new pn(new vn(1,1,1),ni({color:13666920,flatShading:!0}),g_.length*e.length),{frustumCulled:!1,castShadow:!0,receiveShadow:!0});M.count=0,i.add(M);let E=e.map(([I,C],L)=>{let[U,G]=BT[L],P=new At,V=_i+.45+on.DEP/2;return P.position.set(I+U*V,0,C+G*V),P.rotation.y=Math.atan2(U,G),P.updateMatrix(),P}),T=-1;function x(I){if(I===T)return;T=I;let C=0,L=new At;e.forEach((U,G)=>{if(!(I>>G&1))return;let P=E[G].matrix;for(let[V,q,W,ue,H,$]of g_)L.position.set(V,q,W),L.scale.set(ue,H,$),L.updateMatrix(),M.setMatrixAt(C++,new rt().multiplyMatrices(P,L.matrix))}),M.count=C,M.instanceMatrix.needsUpdate=!0}function S(I,C){x(I),a.forEach((L,U)=>{L&&(L.visible=C[U]>0)})}return{update:S,viaduct:u,frames:E}}var _a={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var ii=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},HT=new Ti(-1,1,1,-1,0,1),cm=class extends Xt{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}},zT=new cm,Li=class{constructor(e){this._mesh=new ot(zT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,HT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qh=class extends ii{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof xn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ci.clone(e.uniforms),this.material=new xn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var sc=class extends ii{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Yh=class extends ii{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var $h=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new it);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qh(_a),this.copyPass.material.blending=On,this.timer=new Tl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}sc!==void 0&&(o instanceof sc?n=!0:o instanceof Yh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Kh=class extends ii{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ze}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var rc={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new rt},cameraProjectionMatrixInverse:{value:new rt},cameraWorldMatrix:{value:new rt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new O(-1,-1,-1)},sceneBoxMax:{value:new O(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				#if PERSPECTIVE_CAMERA == 1
					vec3 viewDir = normalize(-viewPos.xyz);
				#else
					vec3 viewDir = vec3(0., 0., 1.);
				#endif
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},oc={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Zh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function T_(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=kT(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new O(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new ls(s,e,e);return r.wrapS=oi,r.wrapT=oi,r.needsUpdate=!0,r}function kT(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var ac={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:um(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new it},cameraProjectionMatrixInverse:{value:new rt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).r;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).r;
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function um(i,e,t){let n=GT(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function GT(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new O(Math.cos(r),Math.sin(r),o))}return n}var Jh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,f=l-h,d=c-h,p=e-f,_=t-d,m,g;p>_?(m=1,g=0):(m=0,g=1);let y=p-m+u,w=_-g+u,M=p-1+2*u,E=_-1+2*u,T=l&255,x=c&255,S=this.perm[T+this.perm[x]]%12,I=this.perm[T+m+this.perm[x+g]]%12,C=this.perm[T+1+this.perm[x+1]]%12,L=.5-p*p-_*_;L<0?n=0:(L*=L,n=L*L*this._dot(this.grad3[S],p,_));let U=.5-y*y-w*w;U<0?s=0:(U*=U,s=U*U*this._dot(this.grad3[I],y,w));let G=.5-M*M-E*E;return G<0?r=0:(G*=G,r=G*G*this._dot(this.grad3[C],M,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),f=Math.floor(n+c),d=1/6,p=(u+h+f)*d,_=u-p,m=h-p,g=f-p,y=e-_,w=t-m,M=n-g,E,T,x,S,I,C;y>=w?w>=M?(E=1,T=0,x=0,S=1,I=1,C=0):y>=M?(E=1,T=0,x=0,S=1,I=0,C=1):(E=0,T=0,x=1,S=1,I=0,C=1):w<M?(E=0,T=0,x=1,S=0,I=1,C=1):y<M?(E=0,T=1,x=0,S=0,I=1,C=1):(E=0,T=1,x=0,S=1,I=1,C=0);let L=y-E+d,U=w-T+d,G=M-x+d,P=y-S+2*d,V=w-I+2*d,q=M-C+2*d,W=y-1+3*d,ue=w-1+3*d,H=M-1+3*d,$=u&255,Q=h&255,he=f&255,Ue=this.perm[$+this.perm[Q+this.perm[he]]]%12,j=this.perm[$+E+this.perm[Q+T+this.perm[he+x]]]%12,ge=this.perm[$+S+this.perm[Q+I+this.perm[he+C]]]%12,Ce=this.perm[$+1+this.perm[Q+1+this.perm[he+1]]]%12,_e=.6-y*y-w*w-M*M;_e<0?s=0:(_e*=_e,s=_e*_e*this._dot3(this.grad3[Ue],y,w,M));let fe=.6-L*L-U*U-G*G;fe<0?r=0:(fe*=fe,r=fe*fe*this._dot3(this.grad3[j],L,U,G));let A=.6-P*P-V*V-q*q;A<0?o=0:(A*=A,o=A*A*this._dot3(this.grad3[ge],P,V,q));let re=.6-W*W-ue*ue-H*H;return re<0?a=0:(re*=re,a=re*re*this._dot3(this.grad3[Ce],W,ue,H)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,f,d,p,_=(e+t+n+s)*l,m=Math.floor(e+_),g=Math.floor(t+_),y=Math.floor(n+_),w=Math.floor(s+_),M=(m+g+y+w)*c,E=m-M,T=g-M,x=y-M,S=w-M,I=e-E,C=t-T,L=n-x,U=s-S,G=I>C?32:0,P=I>L?16:0,V=C>L?8:0,q=I>U?4:0,W=C>U?2:0,ue=L>U?1:0,H=G+P+V+q+W+ue,$=o[H][0]>=3?1:0,Q=o[H][1]>=3?1:0,he=o[H][2]>=3?1:0,Ue=o[H][3]>=3?1:0,j=o[H][0]>=2?1:0,ge=o[H][1]>=2?1:0,Ce=o[H][2]>=2?1:0,_e=o[H][3]>=2?1:0,fe=o[H][0]>=1?1:0,A=o[H][1]>=1?1:0,re=o[H][2]>=1?1:0,xe=o[H][3]>=1?1:0,Oe=I-$+c,$e=C-Q+c,He=L-he+c,Je=U-Ue+c,tt=I-j+2*c,Qe=C-ge+2*c,ke=L-Ce+2*c,K=U-_e+2*c,nt=I-fe+3*c,Nt=C-A+3*c,Vt=L-re+3*c,un=U-xe+3*c,z=I-1+4*c,It=C-1+4*c,mt=L-1+4*c,_t=U-1+4*c,Me=m&255,Ut=g&255,Ge=y&255,je=w&255,R=a[Me+a[Ut+a[Ge+a[je]]]]%32,v=a[Me+$+a[Ut+Q+a[Ge+he+a[je+Ue]]]]%32,k=a[Me+j+a[Ut+ge+a[Ge+Ce+a[je+_e]]]]%32,pe=a[Me+fe+a[Ut+A+a[Ge+re+a[je+xe]]]]%32,ae=a[Me+1+a[Ut+1+a[Ge+1+a[je+1]]]]%32,be=.6-I*I-C*C-L*L-U*U;be<0?u=0:(be*=be,u=be*be*this._dot4(r[R],I,C,L,U));let we=.6-Oe*Oe-$e*$e-He*He-Je*Je;we<0?h=0:(we*=we,h=we*we*this._dot4(r[v],Oe,$e,He,Je));let ne=.6-tt*tt-Qe*Qe-ke*ke-K*K;ne<0?f=0:(ne*=ne,f=ne*ne*this._dot4(r[k],tt,Qe,ke,K));let ie=.6-nt*nt-Nt*Nt-Vt*Vt-un*un;ie<0?d=0:(ie*=ie,d=ie*ie*this._dot4(r[pe],nt,Nt,Vt,un));let Ee=.6-z*z-It*It-mt*mt-_t*_t;return Ee<0?p=0:(Ee*=Ee,p=Ee*Ee*this._dot4(r[ae],z,It,mt,_t)),27*(u+h+f+d+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var lc=class i extends ii{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=T_(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new gn(this.width,this.height,{type:En,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new xn({defines:Object.assign({},rc.defines),uniforms:Ci.clone(rc.uniforms),vertexShader:rc.vertexShader,fragmentShader:rc.fragmentShader,blending:On,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new _l,this.normalMaterial.blending=On,this.pdMaterial=new xn({defines:Object.assign({},ac.defines),uniforms:Ci.clone(ac.uniforms),vertexShader:ac.vertexShader,fragmentShader:ac.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new xn({defines:Object.assign({},oc.defines),uniforms:Ci.clone(oc.uniforms),vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader,blending:On}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new xn({uniforms:Ci.clone(_a.uniforms),vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Rl,blendDst:no,blendEquation:wi,blendSrcAlpha:Al,blendDstAlpha:no,blendEquationAlpha:wi}),this.blendMaterial=new xn({uniforms:Ci.clone(Zh.uniforms),vertexShader:Zh.vertexShader,fragmentShader:Zh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Hu,blendSrc:Rl,blendDst:no,blendEquation:wi,blendSrcAlpha:Al,blendDstAlpha:no,blendEquationAlpha:wi}),this._fsQuad=new Li(null),this._originalClearColor=new ze,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new qi;s.format=Ji,s.type=Xs,this.normalRenderTarget=new gn(this.width,this.height,{minFilter:sn,magFilter:sn,type:En,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=um(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=On,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=On,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=On,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=On,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=On,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Jh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new ls(s,e,e,ui,Yn);return r.wrapS=oi,r.wrapT=oi,r.needsUpdate=!0,r}};lc.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var cc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var jh=class extends ii{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ci.clone(cc.uniforms),this.material=new jo({name:cc.name,uniforms:this.uniforms,vertexShader:cc.vertexShader,fragmentShader:cc.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Mt.getTransfer(this._outputColorSpace)===Gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Il?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Dl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var R_="ef_quality",Qh=.3,C_=.3,VT=1.8;function I_(){try{let i=localStorage.getItem(R_);if(i==="off"||i==="low"||i==="high")return i}catch{}return"low"}function P_(i){try{localStorage.setItem(R_,i)}catch{}}var w_="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",A_=i=>`
  uniform sampler2D t; uniform vec2 px; varying vec2 vUv;
  void main(){
    float m = smoothstep(${Qh.toFixed(2)}, ${(Qh+C_).toFixed(2)}, abs(vUv.y - .5)) * ${VT.toFixed(2)};
    vec4 c = texture2D(t, vUv) * .2270;
    vec2 d = ${i} * px * m;
    c += (texture2D(t, vUv + d * 1.385) + texture2D(t, vUv - d * 1.385)) * .3162;
    c += (texture2D(t, vUv + d * 3.231) + texture2D(t, vUv - d * 3.231)) * .0703;
    gl_FragColor = c;
  }`,WT=`
  uniform sampler2D a, b; varying vec2 vUv;
  void main(){ gl_FragColor = mix(texture2D(a, vUv), texture2D(b, vUv), smoothstep(${Qh.toFixed(2)}, ${(Qh+C_*.6).toFixed(2)}, abs(vUv.y - .5))); }`,hm=class extends ii{constructor(){super(...arguments);this.ping=new gn(1,1,{type:En});this.pong=new gn(1,1,{type:En});this.mats=[A_("vec2(1., 0.)"),A_("vec2(0., 1.)")].map(t=>new xn({vertexShader:w_,fragmentShader:t,uniforms:{t:{value:null},px:{value:new it}},depthTest:!1}));this.mix=new xn({vertexShader:w_,fragmentShader:WT,uniforms:{a:{value:null},b:{value:null}},depthTest:!1});this.quad=new Li}setSize(t,n){let s=Math.max(1,t>>1),r=Math.max(1,n>>1);this.ping.setSize(s,r),this.pong.setSize(s,r);for(let o of this.mats)o.uniforms.px.value.set(1/s,1/r)}render(t,n,s){let r=(o,a,l)=>{this.quad.material=o,o.uniforms.t&&(o.uniforms.t.value=a),t.setRenderTarget(l),this.quad.render(t)};r(this.mats[0],s.texture,this.ping),r(this.mats[1],this.ping.texture,this.pong),this.mix.uniforms.a.value=s.texture,this.mix.uniforms.b.value=this.pong.texture,r(this.mix,s.texture,this.renderToScreen?null:n)}dispose(){this.ping.dispose(),this.pong.dispose(),this.mats.forEach(t=>t.dispose()),this.mix.dispose(),this.quad.dispose()}};function L_(i,e,t,n){let s=n,r=1,o=1,a=new gn(1,1,{type:En,samples:4}),l=new $h(i,a),c=new lc(e,t,1,1);c.blendIntensity=.9,c.updateGtaoMaterial({radius:.9,distanceExponent:1,thickness:1,scale:1.1,samples:8,distanceFallOff:1,screenSpaceRadius:!1}),c.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:8}),l.addPass(new Kh(e,t)),l.addPass(c),l.addPass(new hm),l.addPass(new jh);let u=()=>{l.setPixelRatio(i.getPixelRatio()),l.setSize(r,o),c.setSize(Math.ceil(r*i.getPixelRatio()/2),Math.ceil(o*i.getPixelRatio()/2))};return{get quality(){return s},set(h){s=h,c.enabled=h==="high"},resize(h,f){r=h,o=f,u()},render(){s==="off"?i.render(e,t):l.render()}}}var dm="ef_orient",ed=()=>{try{let i=localStorage.getItem(dm);return i==="p"||i==="l"?i:null}catch{return null}};function D_(i){try{i?localStorage.setItem(dm,i):localStorage.removeItem(dm)}catch{}dispatchEvent(new Event("resize"))}function hi(){let i=innerWidth,e=innerHeight,t=ed(),[n,s]=t==="p"&&i>e?[e*9/16,e]:t==="l"&&e>i?[i,i*9/16]:[i,e],r=s>=n?Math.min(n/360,s/640):Math.min(n/1280,s/720);return{w:Math.round(n/r),h:Math.round(s/r),s:r}}var ya=()=>{let i=hi();return i.h>=i.w};function td(i,e){let t=document.body.getBoundingClientRect(),n=hi().s;return{x:(i-t.left)/n,y:(e-t.top)/n}}function N_(){let{w:i,h:e,s:t}=hi(),n=document.documentElement,s=!0;n.classList.toggle("port",e>=i),n.classList.toggle("land",e<i),n.classList.toggle("boxed",s),n.style.setProperty("--bw",i+"px"),n.style.setProperty("--bh",e+"px"),n.style.setProperty("--bs",String(t))}addEventListener("resize",N_);N_();var XT=()=>Object.fromEntries(Cs.map(i=>[i.id,0])),O_=(i,e,t)=>i+(e-i)*t(),F_=()=>Array.from({length:Ur},()=>({egg:-1,readyAt:0,r:-1})),B_=()=>Array(vo+1).fill(0);function pm(i){i.money=0,i.autoAcc=0,i.freeEggs=Zm,i.habs=[1,...Array(Od-1).fill(0)],i.dinos=i.habs.map(()=>[]),i.age=i.habs.map(()=>[]),i.nest=[],i.breedT=i.habs.map(()=>tg),i.vehs=[1,...Array(Or-1).fill(0)],i.shops=Dn.map(()=>0),i.research=XT(),i.eggReady=!1}function mm(i=Math.random){let e={eggIdx:0,essence:0,runEarnings:0,essenceClaimed:0,silos:1,incub:F_(),bestRarity:-1,droneT:O_(Hd,zd,i),giftT:kd,ad2xT:0,adPteroT:0,acc:0,fame:B_(),bonusEggs:Jn.map(()=>0),playSec:0,tSec:0,tSeen:0,tClaimed:[],tCyc:0,dDay:-1,dIdx:0,dCyc:0};return pm(e),e}var qT={money:1e13,runEarnings:1e13,essence:2500},hc=i=>i>0?kn[i-1].slots:0,uc=i=>i>0?kn[i-1].mult:0,nd=(i,e)=>typeof i=="number"&&isFinite(i)?i:e;function H_(i,e=Math.random,t){let n=mm(e),s=i&&typeof i=="object"?i:{},r={};for(let d of Object.keys(n)){if(d==="dinos"||d==="age"||d==="nest"||d==="incub"||d==="tClaimed")continue;let p=n[d],_=s[d];if(Array.isArray(p))r[d]=Array.isArray(_)?p.map((m,g)=>typeof _[g]=="number"&&isFinite(_[g])?_[g]:m):p;else if(p&&typeof p=="object"){let m=_&&typeof _=="object"?_:{};r[d]=Object.fromEntries(Object.entries(p).map(([g,y])=>[g,typeof m[g]=="number"&&isFinite(m[g])?m[g]:y]))}else r[d]=typeof _==typeof p&&(typeof _!="number"||isFinite(_))?_:p}r.bonusEggs=r.bonusEggs.map(d=>Math.max(0,Math.floor(d)));let o=Array.isArray(s.tClaimed)?s.tClaimed:[];r.tClaimed=[...new Set(o.filter(d=>typeof d=="number"&&Number.isInteger(d)&&d>=0&&d<Gn.length))],r.dIdx=Math.min(Is.length-1,Math.max(0,Math.floor(r.dIdx))),r.dCyc=Math.max(0,Math.floor(r.dCyc));let a=(d,p)=>Math.min(p,Math.max(0,Math.floor(d)));r.shops=r.shops.map(d=>a(d,ar.length)),r.vehs=r.vehs.map(d=>a(d,Rs.length)),r.eggIdx=a(r.eggIdx,ri.length-1),r.silos=Math.max(1,a(r.silos,So));let l=r.research;for(let d of Cs)l[d.id]=a(l[d.id],d.max);let c=r.habs.map(d=>a(d,kn.length));r.habs=c;let u=Array.isArray(s.dinos)?s.dinos:[];r.dinos=c.map((d,p)=>(Array.isArray(u[p])?u[p]:[]).filter(_=>typeof _=="number"&&Number.isInteger(_)&&_>=0).map(_=>Math.min(_,vo)).slice(0,hc(d))),r.nest=(Array.isArray(s.nest)?s.nest:[]).filter(d=>typeof d=="number"&&Number.isInteger(d)&&d>=0).map(d=>Math.min(d,vo)).slice(0,Oa),r.breedT=r.breedT.map(d=>Math.min(Math.max(d,0),Dd)),r.fame=r.fame.map(d=>Math.max(0,Math.floor(d)));let h=Array.isArray(s.incub)?s.incub:[];if(r.incub=F_().map((d,p)=>{let _=h[p]&&typeof h[p]=="object"?h[p]:{},m=nd(_.egg,-1),g=nd(_.r,-1);return m===ss?Number.isInteger(g)&&g>=0?{egg:m,readyAt:nd(_.readyAt,0),r:Math.min(g,vo)}:d:Number.isInteger(m)&&m>=0&&m<Jn.length?{egg:m,readyAt:nd(_.readyAt,0),r:-1}:d}),typeof t=="number"&&t<3)for(let[d,p]of Object.entries(qT))r[d]=Math.min(r[d],p);if((t??0)<4&&typeof s.pop=="number"&&isFinite(s.pop)){let d=1+.1*(r.research.space??0),p=c.reduce((m,g)=>m+(g>0?rg[g-1]:0),0)*d,_=p>0?Math.min(1,Math.max(0,s.pop/p)):0;r.dinos=c.map(m=>Array(Math.round(hc(m)*_)).fill(0)),r.freeEggs=0,r.bestRarity=0}let f=Array.isArray(s.age)?s.age:[];return r.age=r.dinos.map((d,p)=>d.map((_,m)=>{let g=Array.isArray(f[p])?f[p][m]:void 0;return _===0?-1:typeof g=="number"&&isFinite(g)?Math.min(Math.max(g,0),dc(_)):dc(_)})),r}var YT=["","I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV"],Zs=Bn.length-1,gm=i=>Qm**(i-Zs),Qs=i=>i<Bn.length?Bn[i].name:`${Bn[Zs].name} ${YT[i-Zs+1]??i-Zs+1}`,er=i=>Bn[Math.min(i,Zs)].color,$T=i=>i<Bn.length?Bn[i].power:Bn[Zs].power*gm(i),KT=i=>i<Bn.length?Bn[i].sell:Bn[Zs].sell*gm(i),xm=i=>i<=0?1/0:Bn[Math.min(i,Zs)].age,dc=i=>i<=0?-1:xm(i),rd=i=>i<Bn.length?Bn[i].fame:Bn[Zs].fame*gm(i),_m=i=>i.fame.reduce((e,t,n)=>e+t*rd(n),0),ZT=i=>1+_m(i),ym=(i,e)=>(i.dinos[e]?.length??0)<2?-1:i.breedT[e],Js=(i,e)=>i.research[e],js=Object.fromEntries(Cs.map(i=>[i.id,i.eff])),bs=(i,e)=>1+js[e]*Js(i,e),ho=i=>sg+js.vehicleSlot*Js(i,"vehicleSlot"),od=i=>Math.min(Ur,Jm+js.incubSlots*Js(i,"incubSlots")),ad=i=>Math.max(od(i),i.incub.reduce((e,t,n)=>t.egg>=0?n+1:e,0)),JT=i=>js.autoHatch1*Js(i,"autoHatch1")+js.autoHatch2*Js(i,"autoHatch2"),z_=i=>i.habs.reduce((e,t)=>e+hc(t),0),vm=i=>i.dinos.reduce((e,t)=>e+t.length,0),k_=(i,e)=>Dn.reduce((t,n,s)=>n.kind===e&&i.shops[s]>0?t+n.eff*Ac[i.shops[s]-1]:t,0),G_=i=>bs(i,"nests")*bs(i,"layers")*bs(i,"megaLay"),jT=i=>bs(i,"roads")*bs(i,"freight")*(1+k_(i,"lay")),QT=i=>bs(i,"feed")*bs(i,"packaging")*(1+k_(i,"spend")),Mm=i=>1+i.essence*(lg+js.essence*Js(i,"essence")),ew=(i,e,t)=>$T(e)*ri[i.eggIdx].power*uc(t)*bs(i,"space"),V_=(i,e)=>i.dinos[e].reduce((t,n)=>t+ew(i,n,i.habs[e]),0),tw=i=>i.dinos.reduce((e,t,n)=>e+V_(i,n),0),fc=i=>i.vehs.slice(0,ho(i)).reduce((e,t)=>e+(t>0?Rs[t-1].cap:0),0)/60*jT(i),W_=i=>1+Ud*tw(i)*G_(i),nw=i=>ri[i.eggIdx].value*QT(i)*Mm(i),Cr=i=>fc(i)*nw(i)*W_(i)*ZT(i);var ld=i=>Cr(i)*(i.ad2xT>0?2:1),X_=(i,e)=>ld(i)*Ud*V_(i,e)*G_(i)/W_(i),iw=i=>Cr(i)*3600,cd=(i,e)=>kn[e-1].cost*Fd**i,ud=(i,e)=>Rs[e-1].cost*Fd**i,bm=(i,e)=>ar[e-1]*Dn[i].cost,q_=i=>Cs.find(e=>e.id===i),Sm=(i,e)=>{let t=q_(e);return t.base*t.growth**i.research[e]},Em=i=>Object.values(i.research).reduce((e,t)=>e+t,0),Tm=(i,e)=>Em(i)>=Rc[e],wm=i=>_g*yg**(i.silos-1),hd=i=>i.eggIdx<ri.length-1&&iw(i)>=ri[i.eggIdx+1].threshold,dd=i=>i.runEarnings<og?0:Math.max(0,Math.floor(Math.sqrt(i.runEarnings/ag))-i.essenceClaimed),Y_=(i,e)=>Cr(i)*Math.min(Math.max(e,0),i.silos*Dc),sw=(i,e)=>ri[i.eggIdx].egg*Jn[e].priceMult*js.incubator**Js(i,"incubator"),pc=(i,e)=>(e===0?i.freeEggs:0)+(i.bonusEggs[e]??0),fd=(i,e)=>pc(i,e)>0?0:sw(i,e),fo=(i,e)=>e>=0&&e<Jn.length&&(i.bestRarity>=Jn[e].needs||i.bonusEggs[e]>0),va=(i,e,t=-1)=>(e===ss?Nd[Math.min(Math.max(t,0),Nd.length-1)]:Jn[e].hatchS)*(1-js.warmLamps*Js(i,"warmLamps")),pd=(i,e,t)=>{let n=i.incub[e];return n&&n.egg>=0?Math.max(0,(n.readyAt-t)/1e3):0},sd=i=>i.incub.findIndex((e,t)=>t<od(i)&&e.egg<0),Am=(i,e,t)=>fo(i,e)&&sd(i)>=0&&i.money>=fd(i,e)&&isFinite(t),fm=(i,e)=>ri[i.eggIdx].egg*KT(e);function rw(i,e){let t=bs(i,"runCap"),n=Jn[e].odds.map((r,o)=>r*t**o),s=n.reduce((r,o)=>r+o,0);return n.map(r=>r/s)}function $_(i,e,t){let n=rw(i,e),s=t();for(let r=0;r<n.length;r++)if((s-=n[r])<0)return r;return n.length-1-[...n].reverse().findIndex(r=>r>0)}function Rm(i){i.dinos.forEach((e,t)=>{var s;let n=(s=i.age)[t]??(s[t]=[]);for(;n.length<e.length;)n.push(dc(e[n.length]));n.length=e.length})}function ow(i,e){let t=-1;for(let o=0;o<i.dinos.length;o++)i.dinos[o].length<hc(i.habs[o])&&(t<0||uc(i.habs[o])>uc(i.habs[t]))&&(t=o);if(t>=0)return{kind:"free",hab:t,slot:i.dinos[t].length,old:-1};let n=-1,s=-1,r=99;return i.dinos.forEach((o,a)=>o.forEach((l,c)=>{(l<r||l===r&&uc(i.habs[a])<uc(i.habs[n]))&&(n=a,s=c,r=l)})),n>=0&&e>r?{kind:"replace",hab:n,slot:s,old:r}:{kind:"sell",hab:-1,slot:-1,old:-1}}function K_(i,e,t,n){Rm(i);let s=ow(i,e);if(s.kind==="free")i.dinos[s.hab].push(e),i.age[s.hab].push(dc(e)),n.push({type:"hatched",hab:s.hab,slot:s.slot,rarity:e,src:t});else if(s.kind==="replace"){let r=fm(i,s.old);i.money+=r,i.dinos[s.hab][s.slot]=e,i.age[s.hab][s.slot]=dc(e),n.push({type:"hatched",hab:s.hab,slot:s.slot,rarity:e,src:t},{type:"replaced",hab:s.hab,slot:s.slot,old:s.old,rarity:e,money:r})}else{let r=fm(i,e);i.money+=r,n.push({type:"sold",rarity:e,money:r,src:t})}if(e>i.bestRarity){let r=i.bestRarity;i.bestRarity=e,Jn.forEach((o,a)=>{o.needs>r&&o.needs<=e&&n.push({type:"typeUnlocked",egg:a})})}}function mc(i,e){return i.money<e?!1:(i.money-=e,!0)}function Z_(i,e,t){return Am(i,e,t)?(e===0&&i.freeEggs>0?i.freeEggs--:i.bonusEggs[e]>0?i.bonusEggs[e]--:i.money-=fd(i,e),i.incub[sd(i)]={egg:e,readyAt:t+va(i,e)*1e3,r:-1},!0):!1}function J_(i,e,t){let n=i.incub[e];!n||n.egg<0||n.readyAt-t<=Ua*1e3||i.incub.forEach((s,r)=>{s.egg>=0&&(s.readyAt-=(r===e?Da:Na)*1e3)})}var Cm=(i,e,t)=>{let n=i.incub[e];return!!n&&n.egg>=jm&&n.readyAt-t<=Ua*1e3};function j_(i,e,t){return Cm(i,e,t)?(i.incub[e].readyAt=Math.min(i.incub[e].readyAt,t),!0):!1}function Q_(i,e,t){return!Number.isInteger(e)||e<0||e>=Od||!Number.isInteger(t)||t<=i.habs[e]||t>kn.length||!mc(i,cd(e,t))?!1:(i.habs[e]=t,!0)}function ey(i,e,t){return!Number.isInteger(e)||e<0||e>=ho(i)||!Number.isInteger(t)||t<=i.vehs[e]||t>Rs.length||!mc(i,ud(e,t))?!1:(i.vehs[e]=t,!0)}function ty(i,e,t){return!Number.isInteger(e)||e<0||e>=Dn.length||!Number.isInteger(t)||t<=i.shops[e]||t>ar.length||!mc(i,bm(e,t))?!1:(i.shops[e]=t,!0)}function ny(i,e){let t=q_(e);return!t||i.research[e]>=t.max||!Tm(i,t.tier)||!mc(i,Sm(i,e))?!1:(i.research[e]++,!0)}function iy(i){return i.silos>=So||!mc(i,wm(i))?!1:(i.silos++,!0)}function sy(i){return hd(i)?(i.eggIdx++,pm(i),!0):!1}function ry(i){let e=dd(i);return e<1?!1:(i.essence+=e,i.eggIdx=0,i.runEarnings=0,i.essenceClaimed=0,i.bestRarity=-1,pm(i),i.fame=B_(),!0)}function oy(i,e,t=Math.random){let n=[],s=i.adPteroT>0,r=s&&e?2:1,o=e||s?2:1;for(let a=0;a<r;a++)K_(i,$_(i,o,t),"drone",n);return n}function ay(i,e){let t=Cr(i)*Pc*(e?Lc:1);return i.money+=t,i.runEarnings+=t,t}var ly=i=>{i.ad2xT=Math.min(Ic,i.ad2xT+hg)},cy=i=>{i.adPteroT=Math.min(Cc,i.adPteroT+ug)};function aw(i,e,t,n){let s=n(),r=eg*bs(i,"runCap")*ng**Math.max(0,e-3),o;return e===t?o=s<r?e+1:s<r+.55?e:t-1:o=s<.4?e:s<.85?t:t-1,Math.min(vo,Math.max(0,o))}function U_(i,e,t,n){if(i.nest.length<Oa){i.nest.push(e),n.push({type:"laid",hab:t,rarity:e});return}let s=fm(i,e);i.money+=s,n.push({type:"sold",rarity:e,money:s,src:"nest"})}function lw(i,e,t){for(let n=0;n<i.dinos.length;n++){let s=i.dinos[n],r=i.age[n];for(let l=s.length-1;l>=0;l--){if(r[l]<0||(r[l]-=Hi)>0)continue;let c=s[l];s.splice(l,1),r.splice(l,1),i.fame[c]++,t.push({type:"retired",hab:n,slot:l,rarity:c}),U_(i,e()<ig?c:Math.max(0,c-1),n,t)}if(s.length<2||i.habs[n]<=0||(i.breedT[n]-=Hi)>0)continue;i.breedT[n]=Dd*kn[i.habs[n]-1].breed;let[o,a]=[...s].sort((l,c)=>c-l);U_(i,aw(i,o,a,e),n,t)}}function uy(i,e,t,n,s){Rm(i);let r=a=>Number.isInteger(a)&&a>=0&&a<i.dinos.length;if(!r(e)||!r(n)||!Number.isInteger(t)||!Number.isInteger(s)||t<0||t>=i.dinos[e].length||s<0)return!1;let o=i.dinos[n];return s===o.length?e===n||o.length>=hc(i.habs[n])?!1:(o.push(i.dinos[e].splice(t,1)[0]),i.age[n].push(i.age[e].splice(t,1)[0]),!0):s>o.length||e===n&&t===s?!1:([i.dinos[e][t],o[s]]=[o[s],i.dinos[e][t]],[i.age[e][t],i.age[n][s]]=[i.age[n][s],i.age[e][t]],!0)}function cw(i,e,t,n){for(let o of i.incub){if(o.egg<0)continue;let a=va(i,o.egg,o.r)*1e3;if(o.readyAt-t>a+1e3&&(o.readyAt=t+a),t>=o.readyAt){let l=o.egg,c=l===ss,u=o.r;o.egg=-1,o.r=-1,K_(i,c?u:$_(i,l,e),c?"nest":"incub",n)}}for(;i.nest.length;){let o=sd(i);if(o<0)break;let a=i.nest.shift();i.incub[o]={egg:ss,readyAt:t+va(i,ss,a)*1e3,r:a}}for(Rm(i),lw(i,e,n),i.autoAcc+=JT(i)*Hi;i.autoAcc>=1;){let o=sd(i);if(o<0){i.autoAcc=1;break}i.autoAcc--,i.incub[o]={egg:0,readyAt:t+va(i,0)*1e3,r:-1}}let s=ld(i)*Hi;i.money+=s,i.runEarnings+=s,i.ad2xT>0&&(i.ad2xT=Math.max(0,i.ad2xT-Hi)),i.adPteroT>0&&(i.adPteroT=Math.max(0,i.adPteroT-Hi)),(i.droneT-=Hi)<=0&&(i.droneT=O_(Hd,zd,e),n.push({type:"drone",elite:e()<cg+js.drones*Js(i,"drones")})),(i.giftT-=Hi)<=0&&(i.giftT=kd,n.push({type:"gift"}));let r=hd(i);r&&!i.eggReady&&n.push({type:"eggUnlocked"}),i.eggReady=r}function hy(i,e,t,n=Date.now()){let s=[];for(i.acc+=Math.min(Math.max(e,0),Km);i.acc>=Hi-1e-9;)i.acc-=Hi,cw(i,t.rng??Math.random,n,s);return s}var id=["","K","M","B","T","q","Q","s","S","o","N","d"];function cn(i){if(!isFinite(i))return i>0?"inf":i<0?"-inf":"NaN";if(i<0)return"-"+cn(-i);let e=i<1?0:Math.min(id.length-1,Math.floor(Math.log10(i)/3)),t=i/1e3**e,n=s=>s<10?2:s<100?1:0;return+t.toFixed(n(t))>=1e3&&e<id.length-1&&(e++,t/=1e3),e===id.length-1&&t>=1e3?i.toExponential(2):+t.toFixed(n(t))+id[e]}var md=864e5,dy=i=>Math.floor(i/md);function fy(i,e,t=1,n=1){let s=(e.money??0)*t;return{money:Math.round(Math.max(s*Cr(i),s/60*gg*ri[i.eggIdx].egg)*n),egg:(e.egg??0)*n,gold:(e.gold??0)*n,crystal:(e.crystal??0)*n,x2:(e.x2??0)*n,sky:(e.sky??0)*n}}function py(i,e){i.money+=e.money,i.bonusEggs[0]+=e.egg,i.bonusEggs[1]+=e.gold,i.bonusEggs[2]+=e.crystal,e.x2&&(i.ad2xT=Math.min(Ic,i.ad2xT+e.x2)),e.sky&&(i.adPteroT=Math.min(Cc,i.adPteroT+e.sky))}function my(i,e,t){i.tSeen>0&&t-i.tSeen>mg*1e3&&(i.tSec=0,i.tClaimed=[]),i.tSeen=t,e>0&&e<=pg&&(i.tSec+=e,i.playSec+=e)}var gd=(i,e)=>i.playSec>=bo&&i.dDay!==dy(e),gc=(i,e)=>i.playSec<bo?bo-i.playSec:gd(i,e)?0:(md-e%md)/1e3,gy=(i,e)=>1-gc(i,e)/(i.playSec<bo?bo:md/1e3),xd=(i,e,t=i.dCyc)=>fy(i,Is[e%Is.length],dg**Math.min(t,fg));function xy(i,e){if(!gd(i,e))return null;let t=xd(i,i.dIdx);return py(i,t),i.dDay=dy(e),i.dIdx=(i.dIdx+1)%Is.length,i.dIdx===0&&i.dCyc++,t}var xc=(i,e)=>e>=0&&e<Gn.length&&!i.tClaimed.includes(e)&&i.tSec>=Gn[e].at&&Gn.every((t,n)=>n>=e||i.tClaimed.includes(n)||t.r.ad),_y=i=>Gn.some((e,t)=>xc(i,t));function yy(i){let e=Gn.find((t,n)=>!i.tClaimed.includes(n)&&t.at>i.tSec);return e?e.at-i.tSec:null}var _d=(i,e,t=!1)=>fy(i,Gn[e].r,1,t&&Gn[e].r.ad?2:1);function yd(i,e,t=!1){if(!xc(i,e))return null;let n=_d(i,e,t);return py(i,n),i.tClaimed=[...i.tClaimed,e],e===Gn.length-1&&(i.tSec=0,i.tClaimed=[],i.tCyc++),n}var Ne=i=>document.getElementById(i),bt=(i,e="",t)=>{let n=document.createElement(i);return e&&(n.className=e),t?.appendChild(n),n},xt=(i,e)=>{i.textContent!==e&&(i.textContent=e)},Kn=Object.fromEntries(Cs.map(i=>[i.id,i.eff])),Di=i=>`${+(i*100).toFixed(1)}%`,vy=i=>{let e=1/i;return e>=60?`${+(e/60).toFixed(1)} min`:`${Math.round(e)} s`},uw={nests:["Dino Shows",`Dino bonus +${Di(Kn.nests)}`],feed:["Gift Shop",`Ticket value +${Di(Kn.feed)}`],incubator:["Egg Lab",`Egg price -${Di(1-Kn.incubator)}`],autoHatch1:["Auto Hatch I",`Free Egg every ${vy(Kn.autoHatch1)}`],space:["Roomy Enclosures",`Enclosure power +${Di(Kn.space)}`],roads:["Tour Guides",`Visitors +${Di(Kn.roads)}`],runCap:["Lucky Eggs","Better rarity odds"],incubSlots:["Incubator Slots",`+${Kn.incubSlots} incubator slot`],warmLamps:["Warm Lamps",`Hatch time -${Di(Kn.warmLamps)}`],layers:["Feeding Shows",`Dino bonus +${Di(Kn.layers)}`],vehicleSlot:["Tour Depot",`+${Kn.vehicleSlot} tour slot`],packaging:["VIP Tickets",`Ticket value +${Di(Kn.packaging)}`],autoHatch2:["Auto Hatch II",`Free Egg every ${vy(Kn.autoHatch2)}`],drones:["Pterodactyl Training",`Golden pterodactyl +${Di(Kn.drones)}`],essence:["Amber Study",`Amber bonus +${Di(Kn.essence)}`],freight:["Express Lines",`Visitors +${Di(Kn.freight)}`],megaLay:["Star Attractions",`Dino bonus +${Di(Kn.megaLay)}`]},Md='<svg class="film" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM5 5v2h2V5H5zm0 4v2h2V9H5zm0 4v2h2v-2H5zm0 4v2h2v-2H5zM17 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zM9.5 7v10l6-5z"/></svg>',hw={coin:'<svg class="gi" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9.5" fill="currentColor"/><circle cx="12" cy="12" r="6.5" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.5"/><path fill="#fff" fill-opacity=".85" d="M13.2 6.5h-2.4v1.3c-1.5.3-2.4 1.2-2.4 2.4 0 1.6 1.3 2.1 3.1 2.5 1 .25 1.4.5 1.4.9 0 .45-.5.75-1.2.75-.8 0-1.4-.3-1.6-1l-1.8.5c.3 1.1 1.2 1.8 2.5 2v1.3h2.4v-1.3c1.6-.3 2.5-1.2 2.5-2.5 0-1.5-1.2-2-3-2.4-1.1-.25-1.5-.5-1.5-.95 0-.4.45-.7 1.1-.7.7 0 1.1.3 1.3.8l1.8-.5c-.3-1-1.1-1.6-2.2-1.8z"/></svg>',ptero:'<svg class="gi" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 8l2.5 2L23 7l-4 7-5-1.5L13 17l-1-2-1 2-1-4.5L5 14 1 7l8.5 3zM12 3l2 3.5-2 1.5-2-1.5z"/></svg>'};function vd(i,e,t){let n=i.querySelector(".adt");n||(i.innerHTML=(t?hw[t]+Md.replace('class="film"','class="film fb"'):Md)+'<span class="adt"></span>',n=i.querySelector(".adt")),xt(n,e)}function Ma(i,e,t,n){i.firstElementChild||(i.innerHTML='<span class="bl"></span><span class="bn"></span><span class="bp"></span>');let[s,r,o]=Array.from(i.children);xt(s,e),xt(r,t),xt(o,n),i.toggleAttribute("data-solo",!t&&!n)}var nn={star:'<path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.5 5.7 21l1.5-7L2 9.3l7-.8z"/>',gift:'<path d="M3 9h18v4H3zM4 14h16v7H4zM12 9C9 2 4 5 8 9zM12 9c3-7 8-4 4 0z"/>',bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',clock:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M11 6h2v6l4 2-1 1.7-5-2.7z"/>',expand:'<path d="M3 3h7v2.5H5.5V10H3zM21 3v7h-2.5V5.5H14V3zM3 21v-7h2.5v4.5H10V21zM21 21h-7v-2.5h4.5V14H21z"/>',person:'<circle cx="12" cy="7" r="4"/><path d="M4 21c0-5 3.5-8 8-8s8 3 8 8z"/>',paw:'<circle cx="6" cy="10" r="2.3"/><circle cx="10" cy="5.5" r="2.3"/><circle cx="14" cy="5.5" r="2.3"/><circle cx="18" cy="10" r="2.3"/><path d="M12 11c4 0 7 3 6 6-.8 2-3 2-6 1-3 1-5.2 1-6-1-1-3 2-6 6-6z"/>',meat:'<circle cx="15" cy="9" r="6"/><path d="M10 13l-6 6a2 2 0 003 3l6-6z"/>',house:'<path d="M12 2L2 11h3v10h14V11h3z"/>',ticket:'<path fill-rule="evenodd" d="M2 6h20v4a2 2 0 000 4v4H2v-4a2 2 0 000-4zM15 8v2h2V8zm0 3v2h2v-2zm0 3v2h2v-2z"/>',wing:'<path d="M2 6c6 0 9 3 10 7 1-4 4-7 10-7-2 4-3 8-10 13C5 14 4 10 2 6z"/>',gem:'<path d="M12 2l8 7-8 13L4 9z"/>',egg:'<path d="M12 2C7 2 4 10 4 14a8 8 0 0016 0c0-4-3-12-8-12z"/>',chev:'<path d="M3 4l8 8-8 8zM12 4l9 8-9 8z"/>',moon:'<path d="M20 14A9 9 0 119.5 3.5 7 7 0 0020 14z"/>',burger:'<path d="M3 11a9 7 0 0118 0z"/><rect x="3" y="12.5" width="18" height="2.5" rx="1.2"/><path d="M3 16.5h18a3 3 0 01-3 3.5H6a3 3 0 01-3-3.5z"/>',cone:'<path d="M7.5 14.6h9L12 23z"/><rect x="4.8" y="11.6" width="14.4" height="2.4" rx="1.2"/><path d="M6.4 10.6a5.6 5.6 0 0111.2 0z"/><circle cx="12" cy="3.6" r="1.9"/>',bag:'<path d="M5 8h14l1.5 13h-17z"/><path d="M8.5 10V7a3.5 3.5 0 017 0v3" fill="none" stroke="currentColor" stroke-width="2"/>',fence:'<ellipse cx="12" cy="17" rx="10" ry="4.5" opacity=".55"/><path d="M3 8v9M8 6v9M16 6v9M21 8v9M3 9l5-2.5h8L21 9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>'},dw=[nn.burger,nn.cone,nn.bag,nn.ticket,nn.ticket],fw=ar.map((i,e)=>({name:`Lv ${e+1}`})),pw={nests:nn.star,feed:nn.gift,incubator:nn.egg,autoHatch1:nn.clock,incubSlots:nn.expand,warmLamps:nn.bolt,space:nn.expand,roads:nn.person,runCap:nn.gem,layers:nn.meat,vehicleSlot:nn.house,packaging:nn.ticket,autoHatch2:nn.clock,drones:nn.wing,essence:nn.gem,freight:nn.chev,megaLay:nn.star+'<circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>'};function _c(i){let e=bt("div","row",i),t=bt("div","ico",e),n=bt("div","info",e),s=bt("div","acts",e),r=bt("span","",n),o=bt("small","",n),a=bt("small","nx",n),l=bt("button","btn",s),c=bt("button","btn best",s);return{root:e,icon:t,name:r,sub:o,nx:a,b1:l,b2:c,lv1:0,lv2:0}}function ba(i,e,t,n=!1,s=""){i.icon.dataset.k!==e&&(i.icon.dataset.k=e,i.icon.innerHTML=t),i.icon.classList.toggle("dim",n),i.icon.dataset.l!==s&&(s?i.icon.dataset.l=s:delete i.icon.dataset.l)}var mw=Math.max(...kn.map(i=>i.slots));function gw(i){let e=bt("div","dots",i.sub.parentElement);i.dots=Array.from({length:mw},()=>bt("button","dd",e)),i.bt=bt("span","bt",e)}var My=7,yc=i=>"#"+er(i).toString(16).padStart(6,"0"),Ir=i=>`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${i}</svg>`,by=["egg","golden","crystal"],Sa=new Map;function Sy(i){if(!Sa.has(i)){Sa.set(i,void 0);let e=new Image;e.onload=()=>Sa.set(i,!0),e.onerror=()=>Sa.set(i,!1),e.src=i}return Sa.get(i)===!0}function Im(i,e,t){let n=`ui/eggs/${e}-${by[t]}.png`,s=`ui/eggs/${by[t]}.png`,r=Sy(n),o=Sa.get(n)===!1&&Sy(s),a=r?n:o?s:"",l=e+":"+t+":"+a;i.dataset.k!==l&&(i.dataset.k=l,i.classList.toggle("css",!a),i.style.setProperty("--ei",a?`url(${a})`:"none"),i.style.setProperty("--ec","#"+Fa[t].toString(16).padStart(6,"0")))}var Ni=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Ey(i,e,t,n,s){let r=0,o=Ne("zoom");o.addEventListener("input",()=>s(+o.value/1e3));let a=Ne("eggbtn");a.innerHTML='<span class="eg2"></span>';let l=a.querySelector(".eg2"),c=0,u=Jn.map((N,Z)=>{let le=bt("button","btn chip",Ne("eggsw"));return le.innerHTML='<i class="eggi"></i><span></span>',le.onclick=()=>{if(!fo(i,Z)){Jt("deny");return}c=Z,Z===1&&!k.gold&&(k.gold=!0,pe()),me()},{b:le,ico:le.querySelector(".eggi"),lab:le.querySelector("span"),name:N.name.replace(" Egg","")}}),h=Array.from({length:Ur},(N,Z)=>{let le=bt("div","slot",Ne("incub")),ce=bt("div","sring",le),Ie=bt("i","eggi",ce),Se=bt("span","st",le),Ve=bt("button","btn ad",le),st=bt("button","btn fin",le);return st.textContent="Hatch!",st.hidden=!0,Ve.innerHTML=Md+'<span class="adt"></span><span class="m5"><i></i><i></i><i></i>-'+Na/60+"m</span>",st.onclick=()=>{j_(i,Z,Date.now())&&(Jt("shimmer"),me())},Ve.onclick=()=>ur(()=>{J_(i,Z,Date.now()),Jt("shimmer"),Q(`-${Ni(Da)} here, -${Ni(Na)} other eggs`),me()},ye),{root:le,ring:ce,ico:Ie,st:Se,ad:Ve,fin:st,p:-1}});a.addEventListener("click",()=>{if(!Z_(i,c,Date.now())){Jt("deny");return}Jt("buy"),k.eggs<3&&(k.eggs++,pe()),me()});function f(){let N=Date.now(),Z=od(i),le=ad(i);fo(i,c)||(c=0);let ce=!i.incub.some((Se,Ve)=>Ve<Z&&Se.egg<0),Ie=fd(i,c);xt(l,ce?"FULL":Ie===0?`FREE \xD7${pc(i,c)}`:`$${cn(Ie)}`),a.disabled=!Am(i,c,N),u.forEach((Se,Ve)=>{let st=fo(i,Ve);Se.b.classList.toggle("on",st&&Ve===c),Se.b.classList.toggle("lock",!st),Im(Se.ico,i.eggIdx,Ve);let pt=pc(i,Ve);xt(Se.lab,st?Se.name+(pt>0?` \xD7${pt}`:""):`\u{1F512} ${Qs(Jn[Ve].needs)}`),Se.ico.style.display=st?"":"none"}),h.forEach((Se,Ve)=>{if(Se.root.hidden=Ve>=le,Ve>=le)return;let st=i.incub[Ve],pt=st.egg>=0;if(Se.root.classList.toggle("empty",!pt),!pt){xt(Se.st,""),Se.ad.hidden=!0,Se.fin.hidden=!0,Se.p!==0&&(Se.p=0,Se.ring.style.setProperty("--p","0"));return}let an=st.egg===ss;Im(Se.ico,i.eggIdx,an?0:st.egg),Se.root.classList.toggle("bred",an),an&&Se.root.style.setProperty("--rc",yc(st.r));let Ot=pd(i,Ve,N),hn=Math.round((1-Ot/Math.max(1,va(i,st.egg,st.r)))*100);hn!==Se.p&&(Se.p=hn,Se.ring.style.setProperty("--p",String(hn))),xt(Se.st,Ni(Math.ceil(Ot))),Se.ad.hidden=Ot<=Ua,Se.ad.hidden||vd(Se.ad,`-${Da/60}m`),Se.fin.hidden=!(Ot>0&&Cm(i,Ve,N))})}document.addEventListener("click",N=>{let Z=N.target.closest("button");!Z||Z.closest(".row")||Z.id==="eggbtn"||Jt(Z.classList.contains("tab")?"tab":Z.id==="gear"?"open":Z.id==="sclose"||Z.id==="mno"?"close":"click")},!0);let d=Ne("modal"),p=Ne("sett"),_=Ne("fpop"),m=()=>!d.hidden||!p.hidden||!_.hidden,g=Ne("nest"),y=Ne("fame"),w=Ne("flist"),M=null,E=N=>`${+(N*100).toFixed(2)}%`;function T(N){M=N,_.hidden=!1,N==="f"&&!k.fame&&(k.fame=!0,pe()),me()}let x=()=>{M=null,_.hidden=!0};g.onclick=()=>T("n"),y.onclick=()=>T("f"),Ne("fx").onclick=x,_.addEventListener("click",N=>{N.target===_&&x()});function S(N,Z,le,ce=!1){let Ie=bt("div","fr",w);bt("i",(ce?"eg":"")+(N>=My?" cel":""),Ie).style.setProperty("--rc",yc(N)),bt("span","",Ie).textContent=Z,bt("b","",Ie).textContent=le}let I="";function C(){if(g.hidden=i.nest.length===0,g.hidden||xt(g.lastElementChild,`${i.nest.length}/${Oa}`),y.hidden=!i.fame.some(Z=>Z>0),!M)return;let N=M+(M==="n"?i.nest.join():i.fame.join());if(N!==I)if(I=N,w.textContent="",M==="n")xt(Ne("ftitle"),"Nest"),xt(Ne("fsub"),i.nest.length?"Bred eggs wait here for a free incubator slot.":"No eggs waiting."),i.nest.forEach((Z,le)=>S(Z,`${Qs(Z)} egg`,`#${le+1}`,!0));else{xt(Ne("ftitle"),"Hall of Fame"),xt(Ne("fsub"),`+${E(_m(i))} income`),i.fame.some(Z=>Z>0)||(bt("div","fr",w).textContent="Old dinos retire here and give a permanent bonus.");for(let Z=i.fame.length-1;Z>=1;Z--)i.fame[Z]>0&&S(Z,Qs(Z),`\xD7${i.fame[Z]}  +${E(rd(Z)*i.fame[Z])}`)}}Ne("gear").addEventListener("click",()=>{p.hidden=!1});let L=document.createElement("button");L.className="btn",L.id="quality",L.style.margin="14px auto 8px",L.style.display="block";let U=()=>{L.textContent="Quality: "+{off:"Off",low:"Low",high:"High"}[n.quality]};L.addEventListener("click",()=>{let N={off:"low",low:"high",high:"off"}[n.quality];n.set(N),P_(N),U()}),U();let G=p.querySelector(".box"),P=bt("button","btn",G);P.style.cssText="margin:14px auto 0;display:block";let V=()=>{P.textContent="Sound: "+(Bc()?"On":"Off")};P.addEventListener("click",()=>{Cg(!Bc()),V()}),V(),G.insertBefore(P,Ne("ver"));for(let[N,Z]of[["sfx","Sound"],["music","Music"],["ambient","Ambient"]]){let le=bt("label","vol",G),ce=bt("input","",le);le.prepend(Object.assign(document.createElement("span"),{textContent:Z})),Object.assign(ce,{type:"range",min:"0",max:"100",value:String(Math.round(Fc(N)*100))}),ce.oninput=()=>Ig(N,+ce.value/100),N==="sfx"&&(ce.onchange=()=>Jt("click")),G.insertBefore(le,Ne("ver"))}G.insertBefore(L,Ne("ver"));let q=[[null,"Auto"],["l","Wide"],["p","Tall"]],W=bt("button","btn",G);W.style.cssText="margin:0 auto 20px;display:block";let ue=()=>{let N=q.findIndex(([Z])=>Z===ed());W.textContent="Screen: "+q[N][1]+(N?"":` \xB7 ${ya()?"Tall":"Wide"}`)};W.addEventListener("click",()=>{D_(q[(q.findIndex(([N])=>N===ed())+1)%3][0]),ue()}),addEventListener("resize",ue),ue(),G.insertBefore(W,Ne("ver")),p.addEventListener("click",N=>{(N.target===p||N.target===Ne("sclose"))&&(p.hidden=!0)});function H(N,Z,le,ce=!0,Ie){xt(Ne("mtext"),N),xt(Ne("mok"),Z),Ne("mno").hidden=!ce,d.hidden=!1,Ne("mx").hidden=!Ie,Ie&&(vd(Ne("mx"),Ie[0]),Ne("mx").onclick=()=>{d.hidden=!0,Ie[1](),me()}),Ne("mok").onclick=()=>{d.hidden=!0,le(),me()},Ne("mno").onclick=()=>{d.hidden=!0}}let $=0;function Q(N){xt(Ne("toast"),N),Ne("toast").classList.add("on"),clearTimeout($),$=window.setTimeout(()=>Ne("toast").classList.remove("on"),2500)}let he=null;function Ue(N,Z){let le=!!he&&uy(i,he.h,he.i,N,Z);he=null,Jt(le?"click":"deny"),me()}function j(N,Z){let le=Z<i.dinos[N].length;if(!he){le&&(he={h:N,i:Z},Jt("click"),me());return}if(he.h===N){he=le&&he.i!==Z?{h:N,i:Z}:null,me();return}Ue(N,le?Z:i.dinos[N].length)}document.addEventListener("click",N=>{he&&!N.target.closest(".dd, #p-habs .row")&&(he=null,me())},!0);let ge=Array.from({length:4},(N,Z)=>{let le=_c(Ne("p-habs"));return gw(le),re(le,ce=>Q_(i,Z,ce)),le.dots.forEach((ce,Ie)=>{ce.onclick=Se=>{Se.stopPropagation(),j(Z,Ie)}}),le.bt.onclick=()=>{k.pair||(k.pair=!0,pe())},le.root.addEventListener("click",ce=>{he&&he.h!==Z&&!ce.target.closest(".acts")&&Ue(Z,i.dinos[Z].length)}),le}),Ce=Array.from({length:Or},(N,Z)=>{let le=_c(Ne("p-vehs"));return re(le,ce=>ey(i,Z,ce)),le}),_e=Dn.map((N,Z)=>{let le=_c(Ne("p-shops"));return re(le,ce=>ty(i,Z,ce)),le}),fe=_c(Ne("p-vehs"));fe.b2.hidden=!0,fe.b1.onclick=()=>{ae(iy(i)),me()};let A=Cs.map(N=>{let Z=_c(Ne("p-res"));return Z.b2.hidden=!0,Z.b1.onclick=()=>{ae(ny(i,N.id)),me()},Z});function re(N,Z){N.b1.onclick=()=>{ae(Z(N.lv1)),me()},N.b2.onclick=()=>{ae(Z(N.lv2)),me()}}let xe='<circle cx="12" cy="12" r="10"/><path d="M12 5v14M15.5 8.5C14.5 7 9 7 9 10.5S15 13 15 16.5 9.5 18 8.5 15.5" fill="none" stroke="#193c3e" stroke-width="2"/>',Oe=Ne("gdaily"),$e=Ne("gplay"),He=Ne("gpop"),Je=Ne("gweek"),tt=Ne("glist"),Qe=null;function ke(N){let Z=le=>`${Math.max(1,Math.round(le/60))} min`;return N.crystal?["e2",`\xD7${N.crystal}`,"Crystal Egg"]:N.gold?["e1",`\xD7${N.gold}`,"Golden Egg"]:N.egg?["e0",`\xD7${N.egg}`,"Egg"]:N.sky?["sky",Z(N.sky),"Crystal Skies"]:N.x2?["x2",Z(N.x2),"income \xD72"]:["$",`$${cn(N.money)}`,"Coins"]}let K=N=>{let[,Z,le]=ke(N);return`${Z} ${le}`};function nt(N,Z){if(Z[0]==="e"){N.dataset.k!==Z&&(N.dataset.k=Z,N.innerHTML='<i class="eggi"></i>'),Im(N.firstElementChild,i.eggIdx,+Z[1]);return}N.dataset.k!==Z&&(N.dataset.k=Z,N.innerHTML=Z==="$"?Ir(xe):Z==="sky"?Ir(nn.wing):"<b>\xD72</b>",N.style.color=Z==="sky"?"#7ff0ff":"")}function Nt(N,Z,le=!1){let ce=bt("button","tile "+N,Z),Ie=bt("small","tt",ce),Se=bt("div","gi",ce),Ve=bt("b","amt",ce),st=bt("small","cap",ce),pt={root:ce,tt:Ie,gi:Se,amt:Ve,cap:st,mark:bt("i","mark",ce)};return le&&(pt.bar=bt("div","bar",ce),bt("i","",pt.bar),pt.em=bt("em","",pt.bar),pt.vid=bt("span","vid",ce),pt.vid.innerHTML=Md),pt}function Vt(N,Z,le,ce=""){let[Ie,Se,Ve]=ke(Z);nt(N.gi,Ie),xt(N.amt,Se),xt(N.cap,Ve),xt(N.tt,ce),N.root.title=`${Se} ${Ve}`,N.root.className=N.root.className.replace(/ (done|ready|wait)\b/g,"")+" "+le,xt(N.mark,le==="done"?"\u2713":le==="wait"?"\u{1F512}":"")}let un=Is.map((N,Z)=>Nt(Z===Is.length-1?"card big":"card",Je)),z=Gn.map(()=>Nt("rw",tt,!0)),It=N=>(N=Math.ceil(N),N>=3600?`${Math.floor(N/3600)} h ${Math.floor(N/60)%60} m`:Ni(N));function mt(N){if(!N){Jt("deny");return}Jt("bonus");let Z={money:0,egg:0,gold:0,crystal:0,x2:0,sky:0};Q("Got "+Object.keys(Z).filter(le=>N[le]).map(le=>K({...Z,[le]:N[le]})).join(" + ")),me()}let _t=Ne("ginfo"),Me=_t.firstElementChild,Ut={e0:"Put it in the incubator: it hatches a dino of random rarity.",e1:"Hatches rarer dinos than a plain Egg.",e2:"The best odds of Epic and Legendary dinos.",sky:"Every pterodactyl brings a Crystal Egg while it lasts.",x2:"All park income is doubled while it lasts.",$:"Coins to spend on enclosures, tours and shops."};function Ge(N,Z){let[le,ce,Ie]=ke(N);nt(Me.children[0],le),Me.children[1].textContent=`${ce} ${Ie}`,Me.children[2].textContent=Ut[le],Me.children[3].textContent=Z,_t.hidden=!1,Jt("click")}_t.addEventListener("click",N=>{N.stopPropagation(),_t.hidden=!0}),un.forEach((N,Z)=>{N.root.onclick=()=>{if(N.root.classList.contains("ready")){mt(xy(i,Date.now()));return}Ge(xd(i,Z),Z<i.dIdx?"Already taken this week.":Z===i.dIdx?`Comes in ${It(gc(i,Date.now()))}.`:`Day ${Z+1}: one gift a day, in order.`)}}),z.forEach((N,Z)=>{N.root.onclick=()=>{if(!N.root.classList.contains("ready")){let ce=Gn[Z];Ge(_d(i,Z,!!ce.r.ad),i.tClaimed.includes(Z)?"Already taken.":(i.tSec>=ce.at?"Take the gifts above first.":`Play ${Ni(ce.at)} in one go to get it.`)+(ce.r.ad?" Watch a video: \xD72.":""));return}let le=ce=>{mt(ce),k.eggs<3&&R()};Gn[Z].r.ad?ur(()=>le(yd(i,Z,!0)),()=>{Q("No video available: normal reward"),le(yd(i,Z,!1))}):le(yd(i,Z,!1))}});function je(N){Qe=N,He.hidden=!1,me()}function R(){Qe=null,He.hidden=!0,_t.hidden=!0,me()}Oe.onclick=()=>je("d"),$e.onclick=()=>je("t"),Ne("gx").onclick=R,He.addEventListener("click",N=>{N.target===He&&R()});function v(){let N=Date.now(),Z=gd(i,N),le=_y(i),ce=yy(i);Oe.style.setProperty("--p",String(Z?100:Math.round(gy(i,N)*100))),Oe.classList.toggle("rdy",Z),xt(Oe.querySelector(".gt"),Z?"GIFT":It(gc(i,N)).replace(" h ","h").replace(" m","m")),$e.style.setProperty("--p",String(le||ce===null?100:Math.round(Math.min(1,i.tSec/(i.tSec+ce))*100))),$e.classList.toggle("rdy",le),xt($e.querySelector(".gt"),le?"TAKE":ce===null?"":Ni(ce)),!He.hidden&&(Ne("gweek").hidden=Qe!=="d",Ne("glist").hidden=Qe!=="t",xt(Ne("gtitle"),Qe==="d"?"Daily gift":"Play-time gifts"),Qe==="d"?(xt(Ne("gsub"),`Week ${i.dCyc+1} \xB7 ${Z?"your gift is waiting!":"next gift in "+It(gc(i,N))}`),un.forEach((Ie,Se)=>Vt(Ie,xd(i,Se),Se<i.dIdx?"done":Se===i.dIdx&&Z?"ready":"wait",`Day ${Se+1}`))):(xt(Ne("gsub"),`Played this session: ${Ni(i.tSec)}`),z.forEach((Ie,Se)=>{let Ve=Gn[Se],st=i.tClaimed.includes(Se)?"done":xc(i,Se)?"ready":"wait",pt=Math.min(1,i.tSec/Ve.at);Vt(Ie,_d(i,Se,!!Ve.r.ad),st),Ie.bar.style.setProperty("--k",String(pt)),Ie.bar.classList.toggle("go",st!=="wait"),xt(Ie.em,st==="done"?"taken":`${Ni(Math.min(i.tSec,Ve.at))} / ${Ni(Ve.at)}`),Ie.vid.hidden=!Ve.r.ad})))}let k={eggs:0,bought:!1,gold:!1,pair:!1,fame:!1};try{let N=JSON.parse(localStorage.getItem("ef_tut")??"{}");typeof N.eggs=="number"&&(k.eggs=N.eggs),k.bought=!!N.bought,k.gold=!!N.gold,k.pair=!!N.pair,k.fame=!!N.fame}catch{}(vm(i)>0||i.runEarnings>0||k.bought)&&(k.eggs=3,k.bought=!0,k.gold=!0);let pe=()=>{try{localStorage.setItem("ef_tut",JSON.stringify(k))}catch{}};function ae(N){return Jt(N?"buy":"deny"),N&&!k.bought&&(k.bought=!0,pe()),N}let be=Ne("finger"),we=()=>Ne("panel").classList.contains("open")?Ne("tabs").querySelector(".tab.on")?.getAttribute("data-tab"):null;function ne(){return!k.pair&&ge.some((N,Z)=>i.habs[Z]>0&&ym(i,Z)>=0)?we()==="habs"?ge.map(N=>N.bt).find(N=>N.textContent&&N.offsetParent)??null:Ne("tabs").querySelector("[data-tab=habs]"):!k.fame&&!Ne("fame").hidden?Ne("fame"):null}function ie(){let N=we(),Z={habs:i.habs.some((ce,Ie)=>ce<kn.length&&i.money>=cd(Ie,ce+1)),vehs:i.vehs.slice(0,ho(i)).some((ce,Ie)=>ce<Rs.length&&i.money>=ud(Ie,ce+1))},le=["habs","vehs"].find(ce=>Z[ce]);return le?le!==N?Ne("tabs").querySelector("[data-tab="+le+"]"):Array.from(Ne("p-"+le).querySelectorAll(".btn")).find(ce=>!ce.disabled&&ce.offsetParent)??null:null}function Ee(){let N=k.eggs<3&&pc(i,0)===0&&xc(i,0)&&!i.tClaimed.includes(0),Z=N||k.eggs<3||fo(i,1)&&!k.gold||!k.bought,le=N?Qe==="t"?z[0].root:$e:k.eggs<3?a.disabled?null:a:fo(i,1)&&!k.gold?u[1].b:Z?k.bought?null:ie():ne();if(be.hidden=!le||m()||!He.hidden&&!(N&&Qe==="t"),le&&!be.hidden){let ce=le.getBoundingClientRect(),Ie=td(ce.left+ce.width/2,ce.top);be.style.left=Ie.x+"px",be.style.top=Math.max(0,Ie.y-46)+"px"}}function D(N,Z,le,ce,Ie,Se,Ve,st="empty"){xt(N.name,`${Se}:
${le>0?ce[le-1].name:st}`),xt(N.sub,Ve);let pt=le+1;if(N.b1.hidden=pt>ce.length,N.b1.hidden)xt(N.nx,"");else{let Ot=Ie(Z,pt);N.lv1=pt,Ma(N.b1,le>0?"Upgrade:":"Build:",ce[pt-1].name,`$${cn(Ot)}`),N.b1.disabled=!(i.money>=Ot),xt(N.nx,`${le>0?"Next":"Build"}: ${ce[pt-1].name}`)}let an=0;for(let Ot=ce.length;Ot>pt;Ot--)if(i.money>=Ie(Z,Ot)){an=Ot;break}N.b2.hidden=an===0,an&&(N.lv2=an,Ma(N.b2,"Best:",ce[an-1].name,`$${cn(Ie(Z,an))}`),N.b2.disabled=!1)}function oe(){let N=Ne("panel").classList.contains("open"),Z=Ne("tabs").querySelector(".tab.on")?.getAttribute("data-tab");if(N){if(Z==="habs"&&ge.forEach((le,ce)=>{let Ie=i.habs[ce];ba(le,"hab",Ir(nn.fence),Ie===0,Ie>0?`L${Ie}`:""),D(le,ce,Ie,kn,cd,`Slot ${ce+1}`,Ie>0?`${i.dinos[ce].length}/${kn[Ie-1].slots} dinos \xB7 $${cn(X_(i,ce))}/s`:"Pick an enclosure"),he&&he.h===ce&&he.i>=i.dinos[ce].length&&(he=null),le.dots.forEach((Ve,st)=>{let pt=i.dinos[ce][st],an=i.age[ce]?.[st]??-1,Ot=pt===void 0?0:xm(pt),hn=pt===void 0||pt===0||an<0?-1:Math.min(100,Math.round(an/Ot*100));Ve.hidden=Ie===0||st>=kn[Ie-1].slots,Ve.classList.toggle("em",pt===void 0),Ve.classList.toggle("inf",pt!==void 0&&hn<0),Ve.classList.toggle("cel",pt>=My),Ve.classList.toggle("old",hn>=0&&an<60),Ve.classList.toggle("sel",!!he&&he.h===ce&&he.i===st),pt!==void 0&&Ve.dataset.r!==String(pt)&&(Ve.dataset.r=String(pt),Ve.style.setProperty("--rc",yc(pt))),hn>=0&&Ve.dataset.a!==String(hn)&&(Ve.dataset.a=String(hn),Ve.style.setProperty("--a",String(hn)))});let Se=Ie>0?ym(i,ce):-1;xt(le.bt,Se>=0?`Next egg ${Ni(Math.ceil(Se))}`:"")}),Z==="shops"&&_e.forEach((le,ce)=>{let Ie=i.shops[ce],Se=Dn[ce],Ve=st=>`${Se.kind==="lay"?"Visitors":"Visitor spending"} +${cn(Se.eff*Ac[st-1]*100)}%`;ba(le,"shop"+ce,Ir(dw[ce]),Ie===0,Ie>0?`L${Ie}`:""),D(le,ce,Ie,fw,bm,Se.name,Ie>0?Ve(Ie):Ve(1)+" when built",Se.kind==="lay"?"not built":"closed")}),Z==="vehs"){let le=ho(i);Ce.forEach((Ie,Se)=>{if(Ie.root.hidden=Se>=le,Se<le){let Ve=i.vehs[Se],st=t(Math.max(Ve,1));st?ba(Ie,st,`<img src="${st}" alt="">`,Ve===0):ba(Ie,"bus",Ir(nn.chev),Ve===0),D(Ie,Se,Ve,Rs,ud,`Slot ${Se+1}`,Ve>0?`${cn(Rs[Ve-1].cap)} visitors/min`:"Pick a tour")}});let ce=wm(i);ba(fe,"moon",Ir(nn.moon)),xt(fe.name,`Night Staff ${i.silos}/${So}`),xt(fe.sub,`Offline cap ${i.silos*Dc/3600} h of income`),fe.b1.hidden=i.silos>=So,Ma(fe.b1,"Hire:","night staff",`$${cn(ce)}`),xt(fe.nx,"Hire night staff"),fe.b1.disabled=!(i.money>=ce)}Z==="res"&&Cs.forEach((le,ce)=>{let Ie=A[ce],Se=i.research[le.id],[Ve,st]=uw[le.id],pt=Tm(i,le.tier);if(ba(Ie,le.id,Ir(pw[le.id])),xt(Ie.name,`${Ve}  ${Se}/${le.max}`),xt(Ie.sub,st),Ie.root.style.opacity=pt?"":".5",Se>=le.max)Ma(Ie.b1,"MAX","",""),Ie.b1.disabled=!0;else if(!pt)Ma(Ie.b1,`Unlock at ${Rc[le.tier]} research (${Em(i)})`,"",""),Ie.b1.disabled=!0;else{let an=Sm(i,le.id);Ma(Ie.b1,"","",`$${cn(an)}`),Ie.b1.disabled=!(i.money>=an)}})}}let te=Array.from(Ne("tabs").querySelectorAll(".tab"));function Ae(N){te.forEach(Z=>Z.classList.toggle("on",Z.dataset.tab===N));for(let Z of["habs","vehs","shops","res"])Ne("p-"+Z).classList.toggle("on",Z===N);Ne("panel").classList.toggle("open",N!==null),me()}te.forEach(N=>N.addEventListener("click",()=>Ae(N.classList.contains("on")?null:N.dataset.tab))),Ae(ya()?null:"habs"),Ne("newegg").addEventListener("click",()=>{let N=ri[i.eggIdx+1];H(`Switch to ${N.name}?
Park, money and research reset. Amber and night staff stay.`,"Start",()=>{sy(i)&&(Jt("trophy"),Q(`${N.name}!`))})}),Ne("prest").addEventListener("click",()=>{let N=dd(i);H(`Prestige for +${cn(N)} amber?
Everything resets to Compsognathus. Amber and night staff stay.`,"Prestige",()=>{ry(i)&&(Jt("prestige"),Q(`+${cn(N)} amber`))})});let ye=()=>Q("No video available right now"),Te=Ne("gift");Te.addEventListener("click",()=>{let N=Z=>{Te.hidden=!0,Jt("bonus"),Q(`+$${cn(ay(i,Z))}`)};H(`Gift: +$${cn(Cr(i)*Pc)}`,"Take",()=>N(!1),!1,[`Watch ad \xD7${Lc}`,()=>ur(()=>N(!0),ye)])}),Ne("ad2x").addEventListener("click",()=>ur(()=>{ly(i),Jt("shimmer"),Q("\xD72 income +30 min")},ye)),Ne("adptero").addEventListener("click",()=>ur(()=>{cy(i),Jt("shimmer"),Q("Crystal Skies +10 min: pterodactyls bring Crystal Eggs")},ye));function Ye(N,Z,le,ce=""){let Ie=bt("div","float",Ne("hud"));Ie.textContent=N,Ie.style.left=Z+"px",Ie.style.top=le+"px",ce&&(Ie.style.color=ce),setTimeout(()=>Ie.remove(),6100)}function ct(N,Z=!1){if(N<2)return;let le=bt("div",N>=4?"rpop big":"rpop",Ne("hud"));le.textContent=Z&&N>=4?`Bred a ${Qs(N)}!`:Qs(N).toUpperCase()+"!",le.style.setProperty("--rc",yc(N)),Jt(N>=3?"trophy":"bonus"),setTimeout(()=>le.remove(),2500)}function ve(N,Z,le){let ce=bt("div","fly",Ne("hud"));ce.innerHTML=Ir(nn.egg),ce.style.color=yc(le),ce.style.left=N.x+"px",ce.style.top=N.y+"px",requestAnimationFrame(()=>requestAnimationFrame(()=>{ce.style.left=Z.x+"px",ce.style.top=Z.y+"px",ce.style.opacity=".25"})),setTimeout(()=>ce.remove(),1100)}let Ke=()=>{k.pair||(k.pair=!0,pe())},at=N=>{N>0&&Q(`${Qs(N)} retired \xB7 +${E(rd(N))} forever`)};function me(){r=0,Pt()}function Pt(){let N=String(Math.round(s()*1e3));N!==o.value&&(o.value=N);let Z=performance.now();if(Z-r<100)return;r=Z,Ee(),vd(Ne("ad2x"),i.ad2xT>0?`\xD72 ${Ni(i.ad2xT)}`:"\xD72","coin"),vd(Ne("adptero"),i.adPteroT>0?Ni(i.adPteroT):"Skies","ptero"),f(),v(),C(),xt(Ne("money"),`$${cn(i.money)}`),xt(Ne("inc"),`+$${cn(ld(i))}/s`);let le=z_(i),ce=vm(i);xt(Ne("pop"),`Dinos ${ce} / ${le}`),xt(Ne("hint"),ce>=le?"Enclosures full: upgrade one":""),xt(Ne("visn"),`Visitors ${cn(fc(i)*60)}/min`);let Ie=Mm(i)-1;xt(Ne("egg"),`${ri[i.eggIdx].name} \xB7 Amber ${cn(i.essence)}${Ie>0?` (+${cn(Ie*100)}%)`:""}`);let Se=hd(i),Ve=dd(i);Ne("newegg").hidden=!Se,Se&&xt(Ne("newegg"),`NEW SPECIES: ${ri[i.eggIdx+1].name}`),Ne("prest").hidden=Ve<1,Ve>=1&&xt(Ne("prest"),`PRESTIGE +${cn(Ve)}`),oe()}return{update:Pt,toast:Q,ask:H,refresh:me,modalOpen:m,floatText:Ye,rarityPop:ct,flyEgg:ve,laid:Ke,retired:at,gift:()=>{Te.hidden=!1}}}var bd=class extends _r{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new vn;e.deleteAttribute("uv");let t=new li({side:zn}),n=new li,s=new Qr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ot(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new pn(e,n,6),a=new At;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ot(e,Ea(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ot(e,Ea(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new ot(e,Ea(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new ot(e,Ea(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new ot(e,Ea(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new ot(e,Ea(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Ea(i){return new Ki({color:0,emissive:16777215,emissiveIntensity:i})}var Pr=8,Ui=12,vc;function Pm(){return vc||(vc=new Vs().load("models/AllDinos.png"),vc.flipY=!1,vc.colorSpace=Yt),vc}function Sd(i,e,t,n=Pr){let s;i.traverse(c=>{c.isSkinnedMesh&&(s=c)});let r=s.geometry.attributes.position.count,o=new O,a=new eo(i);a.clipAction(e).play();let l=[];for(let c=0;c<n;c++){a.setTime(e.duration*c/n),i.updateMatrixWorld(!0),s.skeleton.update();let u=new Float32Array(r*3);for(let f=0;f<r;f++)s.getVertexPosition(f,o).applyMatrix4(s.matrixWorld).multiplyScalar(t),o.toArray(u,f*3);let h=new Xt;h.setAttribute("position",new Qt(u,3)),h.setAttribute("uv",s.geometry.attributes.uv),h.setIndex(s.geometry.index),h.computeVertexNormals(),l.push(h)}return a.stopAllAction(),a.uncacheRoot(i),l}async function Ty(i,e,t){let n=await new Tr().loadAsync(`models/${i}.glb`),s=new Map(n.animations.map(d=>[d.name,d]));n.scene.updateMatrixWorld(!0);let r=new ln().setFromObject(n.scene).getSize(new O),o=e/(t?r.z:r.x),a=[],l=a,c=a,u=1,h=1,f=1;if(t){let d=(g,y=Ui)=>Sd(n.scene,g,o,y),p=s.get("Run")??s.get("Walk"),_=s.get("Walk"),m=s.get("Idle");a=d(p,Pr),l=c=d(p),u=h=f=p.duration,_&&_!==p?(l=d(_),h=_.duration):_||(h=u/.4),m&&(c=d(m),f=m.duration)}return{scene:n.scene,clips:s,k:o,frames:a,dur:u,walk:l,walkDur:h,idle:c,idleDur:f}}var wy=Math.PI/4,Ed=Mi.D,xw=1,Ay=.9,_w=8,Mc=8,Ta=32,bc=40,Sc=41,Lm=42,Dm=43,Cy=44,Iy=45,Py=46,Ly=47,tr=50,yw=[Cy,Py,Iy,Dm,Lm],Ry=(i,e,t)=>Ct(i*Math.cos(e/t*Math.PI*2),i*Math.sin(e/t*Math.PI*2)),Ft=[...Array.from({length:Ta},(i,e)=>Ry(Fn,e,Ta)),...Array.from({length:8},(i,e)=>Ry(Ks,e,8)),ic(0,2),Ct(-8.6,14.2+Ed),Qi[4].node,Qi[3].node,Qi[0].node,Qi[2].node,Qi[1].node,nc.walk,Ct(1.4,18.8+Ed),Ct(1.4,18.2),xa.walk],vw=[...Array.from({length:Ta},(i,e)=>[e,(e+1)%Ta]),...Array.from({length:8},(i,e)=>[32+e,32+(e+1)%8]),...[0,1,2,3].map(i=>[32+2*i,8*i]),[bc,Sc],[Sc,11],[Sc,Lm],[Sc,Dm],[Lm,9],[Dm,12],[20,Cy],[24,Iy],[27,Py],[Ly,48],[48,49],[49,8],[tr,Ft.slice(0,Ta).reduce((i,e,t)=>Math.hypot(e[0]-Ft[tr][0],e[1]-Ft[tr][1])<Math.hypot(Ft[i][0]-Ft[tr][0],Ft[i][1]-Ft[tr][1])?t:i,0)]];function Dy(i,e,t){let n=Dn.map(()=>0),s={bus:!1,train:!1},r=!1,o=-1,a=0,l=1,c=2,u=3,h=Math.random,f=Ft.length,d=new Float32Array(f*f).fill(1e9),p=new Int16Array(f*f).fill(-1);for(let A=0;A<f;A++)d[A*f+A]=0,p[A*f+A]=A;for(let[A,re]of vw)d[A*f+re]=d[re*f+A]=Math.hypot(Ft[A][0]-Ft[re][0],Ft[A][1]-Ft[re][1]),p[A*f+re]=re,p[re*f+A]=A;for(let A=0;A<f;A++)for(let re=0;re<f;re++)for(let xe=0;xe<f;xe++)d[re*f+A]+d[A*f+xe]<d[re*f+xe]&&(d[re*f+xe]=d[re*f+A]+d[A*f+xe],p[re*f+xe]=p[re*f+A]);function _(A){A.m=h()<.35?0:h()<.62?1:2,A.h=.92+h()*.16,A.spd=Ay*(.85+h()*.3)*[1,1,.8][A.m]}let m=Array.from({length:Mo},()=>({m:0,spd:Ay,h:1,ph:h()*Mc,lat:0,wob:(h()-.5)*.5,st:a,tm:0,a:0,b:0,s:0,len:1,ex:0,ez:1,px:0,pz:0,goal:0,exit:!1,leave:!1,visits:0,dwell:0,stood:0,x:0,y:0,z:0,yaw:0,rx:0,ry:0,rz:0,sx:0,sy:0,sz:0,syaw:0,seq:[],after:null,ret:!1,shop:-1,slot:-1,force:!1,vanish:!1}));m.forEach(_);let g=8,y=[[],[],[]],w=[!1,!1,!1];["man","woman","stout"].forEach((A,re)=>new Tr().loadAsync(`models/people/${A}.glb`).then(xe=>{let Oe=new Vs().load(`models/people/palette${[2,3,1][re]}.png`);Oe.flipY=!1,Oe.colorSpace=Yt,Oe.magFilter=Oe.minFilter=sn;let $e=ni({map:Oe,roughness:.6,flatShading:!0}),He=ke=>xe.animations.find(K=>K.name===ke);xe.scene.updateMatrixWorld(!0);let Je=xw*[1,.94,.92][re]/new ln().setFromObject(xe.scene).getSize(I).y,tt=Sd(xe.scene,He("Idle"),Je,1)[0];tt.computeBoundingBox();let Qe=tt.boundingBox;y[re]=[...Sd(xe.scene,He("Walk"),Je,Mc),tt].map(ke=>{let K=new pn(ke.translate(-(Qe.min.x+Qe.max.x)/2,-Qe.min.y,-(Qe.min.z+Qe.max.z)/2),$e,Mo);return K.frustumCulled=!1,K.count=0,i.add(K),K})}).catch(xe=>{console.warn("people GLB",A,xe),w[re]=!0}));let M=0,E=0,T=!1,x=new At,S=y.map(()=>new Uint16Array(Mc+1)),I=new O,C=(A,re)=>Ct(A,re),L=(A,[re,xe],Oe,$e,He,Je)=>({node:A,lx:re,lz:xe,w:Oe,rad:$e,d0:He,d1:Je}),U=Qi.map((A,re)=>({...L(yw[re],[0,0],3,0,3,re<3?8:7),shop:re})),G=L(Sc,C(ns[0],ns[1]),1,1.3,3,6),P=[G,...U,...Array.from({length:8},(A,re)=>L(32+re,[0,0],.35,.4,4,10))],V=P,q=A=>A.shop===void 0?A.w:n[A.shop]?A.w*(.4+.3*n[A.shop]):0,W=Qi.map(A=>A.queue.map(()=>!1)),ue={in:Qi.map(()=>0),out:Qi.map(()=>0)};function H(A){let re=[];e.forEach(([xe,Oe],$e)=>{if(!(A>>$e&1))return;let He=t[$e],Je=[];for(let nt=0;nt<_w;nt++)I.set(-1.3+nt%4*.87,on.H+.07,nt<4?.3:-.35).applyMatrix4(He.matrix),Je.push({x:I.x,y:I.y,z:I.z,yaw:He.rotation.y+Math.PI});let tt=0,Qe=1e9;for(let nt=0;nt<Ta;nt++){let Nt=Math.hypot(Ft[nt][0]-He.position.x,Ft[nt][1]-He.position.z);Nt<Qe&&(Qe=Nt,tt=nt)}let ke=Math.atan2(Ft[tt][1],Ft[tt][0]);[-.2,-.1,.1,.2].forEach(nt=>{let Nt=Math.cos(ke+nt)*(Fn-.2),Vt=Math.sin(ke+nt)*(Fn-.2);Je.push({x:Nt,y:0,z:Vt,yaw:Math.atan2(xe-Nt,Oe-Vt)})});let K=[[on.LEN/2+1.75,0,on.DEP/2+.6],[on.LEN/2+1.75,0,0],[on.LEN/2-.2,on.H+.07,0]].map(([nt,Nt,Vt])=>(I.set(nt,Nt,Vt).applyMatrix4(He.matrix),[I.x,I.z,Nt]));re.push({node:tt,lx:xe,lz:Oe,w:5,rad:0,d0:6,d1:12,deck:Je,stairs:K})}),V=[...P,...re]}let $=()=>{let A=[s.bus&&Ly,s.train&&tr].filter(re=>re!==!1);return A.length&&h()<.6?A[h()*A.length|0]:bc};function Q(A,re){let xe=Ft[re][0]-Ft[A.a][0],Oe=Ft[re][1]-Ft[A.a][1],$e=Math.hypot(xe,Oe)||1;A.b=re,A.s=0,A.len=$e,A.ex=xe/$e,A.ez=Oe/$e,A.px=-A.ez*A.lat,A.pz=A.ex*A.lat}function he(A){if((s.bus||s.train)&&h()<.15&&(A.visits=0),A.exit=A.leave||A.visits<=0,A.seq=[],A.after=null,A.exit){A.goal=$();return}let re=G,xe=0;for(let Je of V)xe+=q(Je);if(A.force)A.force=!1;else for(let Je=0;Je<4;Je++){let tt=h()*xe;re=V[V.length-1];for(let Qe=0;Qe<V.length;Qe++)if(tt-=q(V[Qe]),tt<=0){re=V[Qe];break}if(re.node!==A.a)break}let Oe=re.shop===void 0||re.shop<3?0:W[re.shop].indexOf(!1);if(Oe<0&&(re=G),A.visits--,A.goal=re.node,A.dwell=re.d0+h()*(re.d1-re.d0),re.shop!==void 0){let Je=re.shop,tt=Qi[Je];if(A.shop=Je,Je<3){let Qe=tt.inside[h()*tt.inside.length|0];A.seq=tt.walk.map(ke=>[...ke]),A.sx=Qe[0],A.sz=Qe[1],A.sy=0,A.syaw=wy,A.after=tt.walk.map(ke=>[...ke]).reverse()}else W[Je][Oe]=!0,A.slot=Oe,A.sx=tt.queue[Oe][0],A.sz=tt.queue[Oe][1],A.sy=0,A.syaw=wy+Math.PI;return}if(re.deck){let Je=re.deck[h()*re.deck.length|0];A.sx=Je.x,A.sy=Je.y,A.sz=Je.z,A.syaw=Je.yaw,Je.y>0&&re.stairs&&(A.seq=[...re.stairs],A.after=[...re.stairs].reverse());return}let $e=h()*6.2832,He=re.rad*Math.sqrt(h());A.sx=Ft[re.node][0]+Math.cos($e)*He,A.sy=0,A.sz=Ft[re.node][1]+Math.sin($e)*He,A.syaw=Math.atan2(re.lx-A.sx,re.lz-A.sz)}let Ue=(A,re)=>A===bc?[[...ic(re,-.5),0],[...ic(re,.4),0],[...ic(re,1.9),0]]:[[...Ct(9.5,22.5+Ed+1.6),2.3],[...Ct(9.5,22.5+Ed+.6),2.2],[...Ct(9.5,uo-.1),es],[...Ct(9.5,co),es],[...xa.walk,0]];function j(A){if(!A.exit){A.st=c;return}if(A.a===bc||A.a===tr){A.seq=Ue(A.a,(h()-.5)*.8).reverse(),A.vanish=!0,A.st=c;return}A.st=a,A.tm=3+h()*2}function ge(A){if(A.shop>=0&&(ue.out[A.shop]++,A.slot>=0&&(W[A.shop][A.slot]=!1,A.slot=-1,A.force=!0),A.shop=-1),A.stood=0,he(A),A.a===A.goal){j(A);return}Q(A,p[A.a*f+A.goal]),A.st=l,A.rx=A.x-Ft[A.a][0]-A.px,A.ry=A.y,A.rz=A.z-Ft[A.a][1]-A.pz}function Ce(A){if(A.leave=!1,A.force=!1,A.vanish=!1,A.lat=h()-.5,A.a=$(),A.x=Ft[A.a][0],A.y=0,A.z=Ft[A.a][1],A.visits=3+(h()*4|0),_(A),A.a===bc||A.a===tr){let re=Ue(A.a,(h()-.5)*.8),[xe,Oe,$e]=re[0];A.x=xe,A.z=Oe,A.y=$e,A.seq=re.slice(1),A.ret=!0,A.sx=Ft[A.a][0],A.sz=Ft[A.a][1],A.st=c,A.yaw=Math.atan2(A.seq[0][0]-xe,A.seq[0][1]-Oe);return}ge(A),A.yaw=Math.atan2(A.ex,A.ez)}function _e(A){A.leave=!1,A.force=!1,A.lat=h()-.5,A.a=h()*(r?f:tr)|0,A.visits=1+(h()*5|0),A.x=Ft[A.a][0],A.y=0,A.z=Ft[A.a][1],ge(A),A.st===l?(A.s=h()*A.len*.9,A.yaw=Math.atan2(A.ex,A.ez)):h()<.6&&(A.a=A.goal,A.x=A.sx,A.y=A.sy,A.z=A.sz,A.st=u,A.tm=h()*A.dwell,A.yaw=A.syaw)}function fe(A,re,xe,Oe,$e,He){if(n=Oe,s=$e,r=He,xe!==o&&(o=xe,H(xe)),M+=A,y.some((ke,K)=>!ke.length&&!w[K])||y.every(ke=>!ke.length))return;let Je=y.findIndex(ke=>ke.length);if(!T&&re)for(T=!0;E<re;E++)_e(m[E]);let tt=re-E>6;for(;E<re;){let ke=m[E++];tt?_e(ke):(ke.st=a,ke.tm=h()*3)}S.forEach(ke=>ke.fill(0));let Qe=Math.min(1,A*8);for(let ke=0;ke<E;ke++){let K=m[ke],nt=y[K.m].length?K.m:Je,Nt=S[nt];K.leave=ke>=re;let Vt=K.yaw;if(K.st===a){!K.leave&&(K.tm-=A)<=0&&Ce(K);continue}if(K.st===u)K.stood+=A,K.tm-=K.leave?A*4:A,Vt=K.syaw+K.wob,K.tm<=0&&(K.after?(K.seq=K.after,K.after=null,K.sx=Ft[K.a][0],K.sz=Ft[K.a][1],K.sy=0,K.ret=!0,K.st=c):ge(K));else if(K.st===c&&K.vanish&&!K.seq.length)K.vanish=!1,K.st=a,K.tm=3+h()*2,K.y=0;else if(K.st===c){let It=K.seq[0],mt=It?It[0]:K.sx,_t=It?It[1]:K.sz,Me=It?It[2]??0:K.ret?0:K.sy,Ut=mt-K.x,Ge=_t-K.z,je=Math.hypot(Ut,Ge),R=K.spd*A;if(je<=R)K.x=mt,K.z=_t,K.y=Me,It?K.seq.shift():K.ret?(K.ret=!1,ge(K)):(K.st=u,K.tm=K.dwell,K.stood=0,K.shop>=0&&ue.in[K.shop]++);else{let v=R/je;K.x+=Ut*v,K.z+=Ge*v,K.y+=(Me-K.y)*v,Vt=Math.atan2(Ut,Ge)}}if(K.st===l){if(K.s+=K.spd*A,K.s>=K.len){let It=K.px,mt=K.pz;K.a=K.b,K.leave&&!K.exit&&(K.exit=!0,K.goal=$()),K.a===K.goal?(K.x=Ft[K.a][0]+It+K.rx,K.z=Ft[K.a][1]+mt+K.rz,K.y=K.ry,j(K)):(Q(K,p[K.a*f+K.goal]),K.rx+=It-K.px,K.rz+=mt-K.pz)}if(K.st===l){let It=Math.hypot(K.rx,K.ry,K.rz),mt=It>1e-4?Math.max(0,It-.6*K.spd*A)/It:0;K.rx*=mt,K.ry*=mt,K.rz*=mt,K.x=Ft[K.a][0]+K.ex*K.s+K.px+K.rx,K.z=Ft[K.a][1]+K.ez*K.s+K.pz+K.rz,K.y=K.ry,Vt=Math.atan2(K.ex,K.ez)}}if(K.st===a)continue;let un=K.st===u?Mc:(M*g+K.ph|0)%Mc,z=Vt-K.yaw;z-=6.2832*Math.round(z/6.2832),K.yaw+=z*Qe,x.position.set(K.x,K.y,K.z),x.rotation.y=K.yaw,x.scale.setScalar(K.h),x.updateMatrix(),y[nt][un].setMatrixAt(Nt[un]++,x.matrix)}for(;E>re&&m[E-1].st===a;)E--;y.forEach((ke,K)=>ke.forEach((nt,Nt)=>{nt.count=S[K][Nt],nt.instanceMatrix.needsUpdate=!0}))}return{update:fe,visitors:()=>y.flat().reduce((A,re)=>A+re.count,0),agents:()=>m.slice(0,E),stats:ue}}var Mw=500,bw=location.search.includes("hudcap");function Ny(i){if(!bw)return()=>{};let e=Array.from(document.querySelectorAll("style"),m=>m.textContent).join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;"),t=document.createElement("canvas"),n=t.getContext("2d"),s=new cs(t);s.colorSpace=Yt;let r=new Li(new rn({map:s,transparent:!0,depthTest:!1,depthWrite:!1})),o=!1,a=0,l=!1,c=!1,u="",h="",f=document.getElementById("top"),d=document.getElementById("bottom"),p=()=>[...f.querySelectorAll("#topL > *, #topR > *"),d].map(m=>m?`${m.offsetWidth}x${m.offsetHeight}`:"").join();function _(){let m=p(),{w:g,h:y}=hi(),w=1,M=document.documentElement,E=document.getElementById("hud").cloneNode(!0);E.querySelectorAll("input").forEach(I=>I.setAttribute("value",document.getElementById(I.id)?.value??I.value)),E.querySelectorAll("#finger, .float").forEach(I=>I.remove());let T=`--panel-w:${getComputedStyle(M).getPropertyValue("--panel-w")};${M.style.cssText}`,x=`<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(g*w)}" height="${Math.round(y*w)}" viewBox="0 0 ${g} ${y}"><foreignObject width="${g}" height="${y}"><div xmlns="http://www.w3.org/1999/xhtml" class="${M.className}" style="${T.replace(/"/g,"'")}"><style>${e}</style>${new XMLSerializer().serializeToString(E)}</div></foreignObject></svg>`;if(x===u){h=m;return}u=x;let S=new Image;o=!0,S.onload=()=>{o=!1,(t.width!==S.width||t.height!==S.height)&&(t.width=S.width,t.height=S.height,s.dispose()),n.clearRect(0,0,t.width,t.height),n.drawImage(S,0,0),s.needsUpdate=!0,l=!0,h=m},S.onerror=()=>{o=!1},S.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(x)}return function(){if(c)return;let g=performance.now(),y=l&&p()!==h;if(!o&&(y||g-a>Mw)&&(a=g,_()),!l||y)return;let w=i.autoClear;try{i.autoClear=!1,i.setRenderTarget(null),r.render(i)}catch{c=!0}finally{i.autoClear=w}}}var di=24,po=10,Td=.75,Uy=[1,1.08,1.15,1.25,1.35],Um=new ze(1,1,1),Om=new ze(0,0,0),wd=i=>i<Uy.length?Uy[i]:Math.min(1.6,1.35+.05*(i-4)),Oy=[],Fy=[],By=i=>Oy[i]||(Oy[i]=Um.clone().lerp(new ze(er(i)),[0,.3,.5,.55,.6][Math.min(i,4)])),Hy=i=>Fy[i]||(Fy[i]=i>0?new ze(er(i)):Om),zy=7,is=[[Mi.HAB,0],[0,Mi.HAB],[-Mi.HAB,0],[0,-Mi.HAB]],ky=6285567,Sw=30,Nm=i=>i===7?.35:.05,nr=i=>ni({color:i,flatShading:!0}),Oi=(i,e)=>i+(e-i)*Math.random(),Gy=1.5;function Vy(i){let e=I_(),t=new ql({antialias:e==="off"});t.setPixelRatio(Math.min(devicePixelRatio,Gy)),t.shadowMap.enabled=!0,t.shadowMap.type=to,t.shadowMap.autoUpdate=!1,document.getElementById("game").appendChild(t.domElement);let n=new _r;n.background=new ze(Zn.haze),n.fog=new il(Zn.haze,68,150);let s=new Ti(-1,1,1,-1,.1,200),r=Ri.degToRad(32),o=Math.PI/4;s.position.set(Math.cos(r)*Math.sin(o),Math.sin(r),Math.cos(r)*Math.cos(o)).multiplyScalar(60),s.lookAt(0,0,0),n.add(new ea(Zn.sky,Zn.bounce,1.4)),n.environment=new ha(t).fromScene(new bd,.04).texture,n.environmentIntensity=.3;let l=new br(Zn.sun,1.1);l.position.set(-30,22,-8),l.castShadow=!0,l.shadow.mapSize.set(e==="high"?2048:1024,e==="high"?2048:1024),l.shadow.radius=4,l.shadow.intensity=.6,l.shadow.bias=-5e-4,l.shadow.normalBias=.04,n.add(l,l.target);function c(){let{w:F,h:se}=hi(),de=Sw/2/Math.min(F,se),De=F>se,lt=De?document.getElementById("bottom").getBoundingClientRect().width:0,yt=De?-se*de*.125:se*de*-.04,gt=De?(F/2-.57*(F-lt))*2*de:0;s.left=-F*de+gt,s.right=F*de+gt,s.top=se*de-yt,s.bottom=-se*de-yt,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(devicePixelRatio*hi().s,Gy)),t.setSize(F,se),p.resize(F,se),u()}function u(){let F=l.shadow.camera,se=s.getWorldDirection(new O),de=new O;s.updateMatrixWorld(),F.position.copy(l.position),F.lookAt(l.target.position),F.updateMatrixWorld();let De=new ln;for(let[yt,gt]of[[-1,-1],[1,-1],[-1,1],[1,1]])de.set(yt,gt,-1).unproject(s),de.addScaledVector(se,-de.y/se.y).applyMatrix4(F.matrixWorldInverse),De.expandByPoint(de);let lt=4;F.left=De.min.x-lt,F.right=De.max.x+lt,F.bottom=De.min.y-lt,F.top=De.max.y+lt,F.near=-De.max.z-30,F.far=-De.min.z+10,F.updateProjectionMatrix(),t.shadowMap.needsUpdate=!0}let h=0,f=0;function d(){if(++f%10)return;let F=0;n.traverseVisible(se=>{se.castShadow&&se.isMesh&&(F=(F*31+se.id+(se.count|0))%1e9)}),F!==h&&(h=F,t.shadowMap.needsUpdate=!0)}let p=L_(t,n,s,e),_=Ny(t);p.set(e),addEventListener("resize",c);let m=()=>ya()?.9:.8;s.zoom=m(),c();let g=2.5,y=14,w=s.position.clone(),M=new O,E=new O(Math.SQRT1_2,0,-Math.SQRT1_2),T=new O(-Math.SQRT1_2,0,-Math.SQRT1_2);function x(){M.x=Ri.clamp(M.x,-y,y),M.z=Ri.clamp(M.z,-y,y),s.position.copy(w).add(M),s.lookAt(M),s.updateProjectionMatrix(),u()}let S=F=>{s.zoom=Ri.clamp(s.zoom*F,m(),g),x()},I=F=>{let se=m();return F!==void 0?(s.zoom=se*(g/se)**Ri.clamp(F,0,1),x()):s.zoom<se&&S(1),Math.log(s.zoom/se)/Math.log(g/se)},C=new Map,L=0,U=t.domElement;U.addEventListener("wheel",F=>{F.preventDefault(),S(Math.exp(-F.deltaY*.0015))},{passive:!1}),U.addEventListener("pointerdown",F=>{F.button===0&&(U.setPointerCapture(F.pointerId),C.set(F.pointerId,{x:F.clientX,y:F.clientY}),L=0)}),U.addEventListener("pointermove",F=>{let se=C.get(F.pointerId);if(!se)return;let de=F.clientX-se.x,De=F.clientY-se.y;if(se.x=F.clientX,se.y=F.clientY,C.size===2){let[yt,gt]=[...C.values()],Ht=Math.hypot(yt.x-gt.x,yt.y-gt.y);L&&S(Ht/L),L=Ht;return}let lt=(s.right-s.left)/s.zoom/(hi().w*hi().s);M.addScaledVector(E,-de*lt).addScaledVector(T,De*lt/Math.sin(r)),x()});for(let F of["pointerup","pointercancel","lostpointercapture"])U.addEventListener(F,se=>{C.delete(se.pointerId),L=0});addEventListener("blur",()=>{C.clear(),L=0});let G=new ei(300,300,60,60).rotateX(-Math.PI/2),P=new Float32Array(G.attributes.position.count*3),V=new ze(Zn.groundLo),q=new ze(Zn.groundHi),W=new ze;for(let F=0;F<P.length/3;F++)W.lerpColors(V,q,Math.random()**2).toArray(P,F*3);G.setAttribute("color",new Qt(P,3));let ue=new ot(G,new Ki({vertexColors:!0}));ue.receiveShadow=!0,n.add(ue);let H=F=>F.traverse(se=>{se.castShadow=se.receiveShadow=!0}),$=r_(n,is,Xh,Fn,Ks,lm,b_),Q=E_(n,is),he=d_(n),Ue=Dy(n,is,Q.frames),j={bus:!1,train:!1},ge=(F,se,de=0)=>he.blocked(F,se,de)||v_(F,se,de),Ce=new ot(new Yi(3.3,3.6,.5,16),nr(vt.lgray));Ce.position.y=.25,H(Ce),n.add(Ce);let _e=new ot(new xl(3.5,.1,4,40).rotateX(Math.PI/2),new rn({color:ky}));_e.position.y=.32,n.add(_e),n.add(new ot(new $i(2.8,16,8,0,Math.PI*2,0,Math.PI/2).scale(1,1.45,1),new Ki({color:vt.blue,transparent:!0,opacity:.35,depthWrite:!1})));let fe=[[0,0],[1.3,.7],[-1.2,.8],[.5,-1.4]].slice(0,Ur).map(([F,se],de)=>{let De=new ot(new $i(.58,8,6).scale(1,1.3,1),nr(vt.white));return De.position.set(F,.95,se),De.visible=!1,n.add(De),{e:De,y:.95,ph:de*1.3}}),A=new rn({color:vt.yellow}),re=new Yi(.4,.4,.1,10).rotateX(Math.PI/2),xe=Array.from({length:6},()=>{let F=new ot(re,A);return F.visible=!1,n.add(F),{m:F,t:1,x:0}});function Oe(){let F=xe.find(se=>se.t>=1);F&&(F.t=0,F.x=Oi(-1,1),F.m.visible=!0)}let $e=new vn(1,1,1),He=new Xt().setFromPoints([[-2.5,-2.5],[2.5,-2.5],[2.5,2.5],[-2.5,2.5]].map(([F,se])=>new O(F,.03,se))),Je=new Yi(1,1.08,1,9),tt=new $i(1,14,7,0,Math.PI*2,0,Math.PI/2),Qe=new pl(1,1,7),ke=new Yi(.28,.28,.08,7),K=new Ki({color:vt.blue,transparent:!0,opacity:.22,depthWrite:!1}),nt=is.map(([F,se])=>{let de=new tn;de.position.set(F,0,se);let De=new ot(Je,nr(Zn.pad[0])),lt=new ot(tt,K),yt=new tn,gt=new ot(Qe,nr(vt.brown)),Ht=new ot(ke,new rn({color:vt.orange}));gt.scale.set(1.3,1.8,1.3),gt.position.y=.9,Ht.position.y=1.29,yt.add(gt,Ht),yt.position.set(.6,0,-.6);let ut=new Zr(He,new yl({color:vt.white,dashSize:.5,gapSize:.35}));return ut.computeLineDistances(),de.add(De,yt),H(de),de.add(lt),De.castShadow=!1,n.add(de,ut),ut.position.set(F,0,se),{g:de,pad:De,dome:lt,volc:yt,outline:ut,level:-1,pop:0}});function Nt(F,se){let de=nt[F];if(de.level=se,de.pop=se>0?.35:0,de.g.visible=se>0,de.outline.visible=se===0,se===0)return;let De=1.9+.2*se,lt=Nm(se);de.pad.scale.set(De,lt,De),de.pad.position.y=lt/2,de.pad.material.color.setHex(se===7?vt.lgray:Zn.pad[Math.min(se,4)-1]),de.dome.visible=se===5||se===8,de.dome.scale.set(_i-.3,2.6,_i-.3),de.volc.visible=se===6}let Vt=1,un=1.7,z=Math.PI,It=F=>(F>5?["Front","Passenger","End"]:["Front","End"]).map(se=>"kenney/space/monorail_train"+se),mt=100,_t=5,Me=1.5,Ut=2.6,Ge=4,je=_t*_t/(2*Me),R=_t/Me,v=F=>F<=R?.5*Me*F*F:je+_t*(F-R),k=F=>F<=je?Math.sqrt(2*F/Me):R+(F-je)/_t,pe=1.5,ae=.6,be=60,we=[Rr,Pi].map(F=>{let se=k(Math.min(F.stop,mt)),de=k(Math.min(F.L-F.stop,mt));return{ta:se,TB:de,C:se+Ut+de+Ge}}),ne=Array.from({length:Or},()=>{let F=new tn,se=new ot($e,nr(vt.white));return se.position.y=.55,F.visible=!1,F.add(se),n.add(F),{g:F,body:se,level:-1,gen:0,k:1,cars:[se],gap:[0],wl:[[.9,1.7]],wait:!1}});function ie(F,se){let de=ne[F];de.level<1&&(de.wait=Se>1),de.level=se,de.g.visible=se>0;let De=++de.gen;if(se===0)return;de.cars.forEach(gt=>de.g.remove(gt)),de.cars=[de.body],de.wl=[[.9,1.7]],de.g.add(de.body),de.body.scale.set(.9,.7+.05*se,1.7),de.body.material.color.setHex(Ba[se-1]);let lt=se>4,yt=gt=>{if(de.gen!==De)return;de.g.remove(de.body),de.k=lt?Vt+.15*(se-5):.8,de.cars=gt.map(Wt=>{let Ln=Bh(Wt.clone(),Ba[se-1]);return Ln.scale.setScalar(lt?de.k*un:de.k),de.g.add(Ln),Ln});let Ht=gt.map(Wt=>new ln().setFromObject(Wt).getSize(new O).multiplyScalar(de.cars[0].scale.z)),ut=Ht.map(Wt=>Wt.z);de.wl=Ht.map(Wt=>[Wt.x,Wt.z]),de.gap=ut.map(()=>0);for(let Wt=1;Wt<ut.length;Wt++)de.gap[Wt]=de.gap[Wt-1]+(ut[Wt-1]+ut[Wt])/2+.05*de.k};(lt?Promise.all(It(se).map(gt=>jl(gt,!0))):jl("kenney/"+Bd[se-1]).then(gt=>[gt])).then(yt,gt=>console.warn("tour GLB",gt))}let Ee=Array.from({length:8},()=>null);Promise.all([...Bd.slice(0,4),...It(5)].map(F=>em(F.startsWith("kenney/")?F:"kenney/"+F))).then(F=>{let se=new ql({alpha:!0,antialias:!0}),de=new _r,De=new ln,lt=new O;se.setSize(192,128,!1);let yt=new br(Zn.sun,2.8);yt.position.set(-2,5,4),de.add(new ea(16777215,Zn.bounce,2.4),yt);let gt=new Ti(-1.8,1.8,1.2,-1.2,.1,50);gt.position.set(5,3.5,5),gt.lookAt(0,0,0);for(let Ht=0;Ht<8;Ht++){let ut=new tn;if(Ht<4)ut.add(Bh(F[Ht].clone(),Ba[Ht]));else for(let[Wt,Ln]of F.slice(4).entries())Ln.position.z=(Wt-.5)*1.05,ut.add(Bh(Ln.clone(),Ba[Ht]));ut.rotation.y=Ht<4?-Math.PI/2:Math.PI/2,De.setFromObject(ut),ut.scale.setScalar(4.5/De.getSize(lt).length()),De.setFromObject(ut),ut.position.sub(De.getCenter(lt)),de.add(ut),se.render(de,gt),Ee[Ht]=se.domElement.toDataURL(),de.remove(ut)}se.dispose(),se.forceContextLoss()},F=>console.warn("icon GLB",F));let D=ni({map:Pm(),roughness:.55}),oe=F=>(F.setColorAt(0,Um),F),te=Array.from({length:Pr},()=>oe(Object.assign(new pn(new Xt,D,di),{frustumCulled:!1,visible:!1})));te.forEach(F=>{F.count=0,n.add(F)});let Ae=new Float32Array(di),ye=new Float32Array(di),Te=new Float32Array(di),Ye=new Float32Array(di),ct=new Float32Array(di),ve=new Float32Array(di),Ke=new Float32Array(di),at=new Float32Array(di),me=new Uint8Array(di),Pt=new Float32Array(di),N=new Float32Array(di),Z=new Uint16Array(Pr),le=0,ce=-1,Ie=8,Se=0,Ve=new Float32Array(4*po),st=new At;st.scale.setScalar(Td);let pt=di+4*po+3*Or+Mo,an=new rn({color:16777215,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});an.onBeforeCompile=F=>{F.vertexShader=`varying vec2 vB;
`+F.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vB = position.xz;`),F.fragmentShader=`varying vec2 vB;
`+F.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= 1. - smoothstep(.15, .5, length(vB));`)},an.customProgramCacheKey=()=>"blob";let Ot=Object.assign(new pn(new ei(1,1).rotateX(-Math.PI/2),an,pt),{frustumCulled:!1,renderOrder:1});Ot.setColorAt(0,Om),Ot.count=0,n.add(Ot);let hn=new At,ir=(F,se,de,De,lt,yt,gt=Om)=>{Ot.count>=pt||(hn.position.set(F,se+.02,de),hn.rotation.y=De,hn.scale.set(lt,1,yt),hn.updateMatrix(),Ot.setColorAt(Ot.count,gt),Ot.setMatrixAt(Ot.count++,hn.matrix))},Aa=new ze,Lr=F=>F<=3?3:Math.min(8,4+.4*(F-4)),Cd=(F,se,de)=>Aa.setHSL((Se*(.12+.05*(F-zy))+se*.16)%1,.85,de),Ra=(F,se)=>F<3?By(F):(F>=zy?Cd(F,se,.8):Aa.copy(By(F))).multiplyScalar(1.1+.25*(.5+.5*Math.sin(Se*Math.max(4,Lr(F))+se))),mo=new Map,Ca=new Set,Ia=(F,se,de)=>{!F||Ca.has(F)||(Ca.add(F),Ty(F,se,de).then(De=>mo.set(F,De),De=>{console.warn("GLB",F,De),setTimeout(()=>Ca.delete(F),5e3)}))},Id=(F,se)=>F.traverse(de=>{de.isSkinnedMesh&&se(de)}),Dr=D.clone();Dr.onBeforeCompile=F=>{F.vertexShader=`attribute vec3 position2;
attribute vec3 normal2;
attribute float aB;
`+F.vertexShader.replace("#include <beginnormal_vertex>","vec3 objectNormal = normalize(mix(normal, normal2, aB));").replace("#include <begin_vertex>","vec3 transformed = mix(position, position2, aB);")};let b=Array.from({length:2*Ui},()=>oe(Object.assign(new pn(new Xt,Dr,4*po),{frustumCulled:!1,visible:!1})));b.forEach(F=>{F.count=0,n.add(F)});let B=b.map(()=>new Xi(new Float32Array(4*po),1)),J=new Uint16Array(2*Ui),X=new At,Y=[],Pe=[8,8];function We(F,se){ce=F,Ie=Pr/se.dur*1.5,te.forEach((de,De)=>{de.geometry=se.frames[De],de.visible=!0}),D.color.setHex(vg[F]),D.emissive.setHex(Mg[F]),Dr.color.copy(D.color),Dr.emissive.copy(D.emissive),Pe=[Ui/se.walkDur,Ui/se.idleDur],b.forEach((de,De)=>{let lt=De<Ui?se.walk:se.idle,yt=De%Ui,gt=lt[yt].attributes,Ht=lt[(yt+1)%Ui].attributes,ut=new Xt;ut.setIndex(lt[yt].index),ut.setAttribute("position",gt.position),ut.setAttribute("normal",gt.normal),ut.setAttribute("uv",gt.uv),ut.setAttribute("position2",Ht.position),ut.setAttribute("normal2",Ht.normal),ut.setAttribute("aB",B[De]),de.geometry=ut,de.visible=!0}),Y=[];for(let de=0;de<4;de++)for(let De=0;De<po;De++){let lt=De%3===0?0:(De%2?1:-1)*Oi(.5,.8);Y.push({hab:de,j:De,th:Oi(0,6.28),w:lt,ph:Oi(0,Ui)})}}function Le(F,se,de,De){let[lt,yt]=is[F],gt=Math.atan2(yt,lt),Ht=De==="drone",ut=le<di?le++:-1,Wt=lt+Oi(-2,2),Ln=yt+Oi(-2,2),vi=Math.cos(gt)*3.5,Pa=Math.sin(gt)*3.5,Tc=Math.max(1.1,Math.hypot(Wt-vi,Ln-Pa)/4),La=Ht?.3:0;Ve[F*po+se]=Se+La+Tc,!(ut<0)&&(Ae[ut]=vi,ye[ut]=Pa,Ye[ut]=0,ct[ut]=La,Te[ut]=Wt,ve[ut]=Ln,me[ut]=de,Ke[ut]=Math.atan2(Wt-vi,Ln-Pa),at[ut]=0,Pt[ut]=La+Tc,N[ut]=Oi(0,Pr))}let Fe=8,Ze=new $i(2.2,6,4),dt=new rn({visible:!1}),Lt=new $i(.35,8,6),Xe=[nr(vt.brown),nr(vt.yellow)],St=ni({map:Pm(),roughness:.55}),dn=new O(Math.SQRT1_2,0,-Math.SQRT1_2),Kt=new O(Math.SQRT1_2,0,Math.SQRT1_2),Et=[],Tn=new wl,qe=new it,fn=new O;function zt(F){let se=new tn;se.add(new ot(Ze,dt)),se.scale.setScalar(F?1.6:1.1),se.position.y=-100,n.add(se),Et.push({g:se,elite:F,t:0,dir:Math.random()<.5?1:-1,off:Oi(-6,4),lo:s.left-3,hi:s.right+3-(ya()?0:document.getElementById("bottom").getBoundingClientRect().width/hi().w*(s.right-s.left)),p0:M.clone(),z0:s.zoom})}function Ss(F,se){let de=Dh(se.scene),De=new tn;Id(de,yt=>{yt.material=St,yt.frustumCulled=!1,yt.raycast=()=>{}});let lt=new ot(Lt,Xe[+F.elite]);lt.position.set(0,-.7,.4),lt.raycast=()=>{},de.scale.setScalar(se.k),De.add(de,lt),De.rotation.y=Math.atan2(dn.x*F.dir,dn.z*F.dir),F.g.add(De),F.mixer=new eo(de),F.mixer.clipAction(se.clips.get("Fly")).play(),F.mixer.update(Oi(0,1))}t.domElement.addEventListener("pointerdown",F=>{if(!Et.length)return;let se=td(F.clientX,F.clientY),de=hi();Tn.setFromCamera(qe.set(se.x/de.w*2-1,-(se.y/de.h)*2+1),s);let De=Tn.intersectObjects(Et.map(yt=>yt.g),!0)[0],lt=De?Et.findIndex(yt=>yt.g.children.includes(De.object)):-1;lt<0||(n.remove(Et[lt].g),Bi(Et[lt].g.position,Et[lt].elite),Et.splice(lt,1))});let bn=4,go=4,Fi=.5,Es=new Yi(1.4,1.4,.75,12,1,!0,-1,2).rotateX(-Math.PI/2).translate(0,.5,0),Bt=new $i(.32,10,8),wn=new Yi(.015,.015,1,3).translate(0,.5,0),pi=ni({color:vt.orange,flatShading:!0,side:Un}),Zt=[],_n=!1;function Bi(F,se){let de=new tn,De=new tn,lt=new ot(Bt,nr(Fa[se||_n?2:1]));lt.scale.set(1,1.3,1),lt.position.y=.42,de.add(lt),De.add(new ot(Es,pi));for(let[yt,gt]of[[-1.15,.3],[-1.15,-.3],[-.55,0],[.55,0],[1.15,.3],[1.15,-.3]]){let Ht=new O(yt,.5+Math.sqrt(1.96-yt*yt),gt),ut=new O(0,.7,0),Wt=new ot(wn,nr(vt.white));Wt.position.copy(ut),Wt.scale.y=Ht.distanceTo(ut),Wt.quaternion.setFromUnitVectors(new O(0,1,0),Ht.sub(ut).normalize()),De.add(Wt)}de.add(De),de.scale.setScalar(se?2.2:1.8),de.position.copy(F),n.add(de),Zt.push({g:de,can:De,egg:lt,elite:se,s0:F.clone(),dur:Math.min(5,Math.max(1.8,Math.hypot(F.x,F.z)/go)),t:0,landed:-1})}let Ec=()=>Et.map(F=>{fn.copy(F.g.position).project(s);let se=hi();return{x:(fn.x+1)/2*se.w,y:(1-fn.y)/2*se.h,elite:F.elite}});function nv(F,se,de=Date.now()){let De=Math.min(Math.max(se,0),.1);Se+=De,Ia(Nc[F.eggIdx],Ha[F.eggIdx],!0),Ia(Nc[F.eggIdx+1],Ha[F.eggIdx+1],!0),Ia("ptera",bg,!1);let lt=mo.get(Nc[F.eggIdx]),yt=mo.get("ptera");St.emissive.setHex(F.adPteroT>0?1624272:0),St.emissiveIntensity=.75+.25*Math.sin(Se*5),lt&&ce!==F.eggIdx&&We(F.eggIdx,lt);for(let ee=Et.length-1;ee>=0;ee--){let Re=Et[ee];Re.t+=De/Fe;let Dt=Re.lo+(Re.hi-Re.lo)*(Re.dir>0?Re.t:1-Re.t);if(Re.g.position.copy(dn).multiplyScalar(Dt/Re.z0).addScaledVector(Kt,Re.off).add(Re.p0).setY(8+Math.sin(Se*3)*.4),Re.t>=1&&(Math.abs(fn.copy(Re.g.position).project(s).x)>1.15||Re.t>=3)){n.remove(Re.g),Et.splice(ee,1);continue}yt&&!Re.mixer&&Ss(Re,yt),Re.mixer?.update(De)}_n=F.adPteroT>0;for(let ee=Zt.length-1;ee>=0;ee--){let Re=Zt[ee];if(Re.landed<0){Re.t=Math.min(1,Re.t+De/Re.dur);let Dt=1-Re.t,en=Math.sin(Re.t*Math.PI)*2.5,si=Re.s0.x*Dt,xo=Re.s0.z*Dt,sr=Math.hypot(Re.s0.x,Re.s0.z)||1,Nr=-Re.s0.z/sr,rr=Re.s0.x/sr;if(Re.g.position.set(si+Nr*en*Math.sin(Re.t*Math.PI*2)*.5,bn+(Re.s0.y-bn)*(1-(1-Dt)**.7),xo+rr*en*Math.sin(Re.t*Math.PI*2)*.5),Re.g.rotation.set(0,Math.atan2(-Re.s0.x,-Re.s0.z),Math.sin(Se*2.4+ee)*.15),Re.t<1)continue;Re.landed=Se,Re.g.rotation.z=0,Re.g.remove(Re.can),i(Re.elite,0,0)}else if(Se-Re.landed>Fi)n.remove(Re.g),Zt.splice(ee,1);else{let Dt=(Se-Re.landed)/Fi;Re.g.position.y=bn-Dt*2,Re.egg.scale.set(1-Dt*.6,1.3*(1-Dt*.6),1-Dt*.6)}}let gt=0;for(let ee=0;ee<nt.length;ee++){F.habs[ee]>0&&(gt|=1<<ee),nt[ee].level!==F.habs[ee]&&Nt(ee,F.habs[ee]);let Re=nt[ee];Re.pop>0&&(Re.pop=Math.max(0,Re.pop-De),Re.g.scale.setScalar(1+Re.pop*.6),t.shadowMap.needsUpdate=!0)}Ot.count=0;let Ht=ce<0?0:Ha[ce];$.pens(gt,F.habs);let ut=F.incub.some(ee=>ee.egg>=0);_e.material.color.setHex(ky).multiplyScalar(ut?.85+.15*Math.sin(Se*6):.7+.3*Math.sin(Se*2));let Wt=ho(F),Ln=0;j.bus=j.train=!1;let vi=[NaN,NaN],Pa=[0,0];for(let ee=0;ee<ne.length;ee++){let Re=ee<Wt?F.vehs[ee]:0,Dt=ne[ee];if(Dt.level!==Re&&ie(ee,Re),Re>0){Ln=Math.max(Ln,Re);let en=Re>4?1:0,si=en===1,xo=si?Pi:Rr,sr=Dt.gap[Dt.gap.length-1],Nr=sr+(Dt.wl[0][1]+Dt.wl[Dt.wl.length-1][1])/2,rr=vi[en]===vi[en]?vi[en]-Nr/2:xo.stop;vi[en]=rr-Nr/2-ae;let _o=rr+sr/2,{ta:Ts,TB:wc,C:yo}=we[en],ws=((Se-pe*Pa[en]++)%yo+yo)%yo;Dt.wait&&ws<Ts-k(be)&&(Dt.wait=!1);let or=-1e9,As=!1;ws<Ts?or=_o-v(Ts-ws):ws<Ts+Ut?(or=_o,As=!0):ws<Ts+Ut+wc&&(or=_o+v(ws-Ts-Ut)),As&&(j[si?"train":"bus"]=!0),Dt.g.visible=or>-1e8&&!Dt.wait,Dt.cars.forEach((Wm,Ld)=>{let[Xm,qm,Ym]=xo.pos(or-(Dt.gap[Ld]??0));Wm.position.set(Xm,si?$s-.05:.05,qm),Wm.rotation.y=Ym+(si?z:0),Dt.g.visible&&ir(Xm,0,qm,Ym,Dt.wl[Ld][0]*1.5,Dt.wl[Ld][1]*1.25)})}}Q.viaduct.visible=Ln>4;let Tc=ad(F);fe.forEach((ee,Re)=>{let Dt=F.incub[Re],en=Re<Tc&&Dt&&Dt.egg>=0;if(ee.e.visible=en,!en)return;ee.e.material.color.setHex(Dt.egg===ss?er(Dt.r):Fa[Dt.egg]);let si=pd(F,Re,de)<1.5;ee.e.scale.setScalar(1+(si?.12*Math.sin(Se*30+ee.ph):.03*Math.sin(Se*3+ee.ph))),ee.e.rotation.z=si?Math.sin(Se*45+ee.ph)*.3:0,ee.e.position.y=ee.y+(si?Math.abs(Math.sin(Se*14+ee.ph))*.35:0)});for(let ee of xe)ee.t>=1||(ee.t=Math.min(1,ee.t+De/.9),ee.m.position.set(ee.x,4.3+ee.t*2.4,0),ee.m.rotation.y=Se*8,ee.m.scale.setScalar(1-ee.t**3),ee.m.visible=ee.t<1);for(let ee of Pd)ee.t>=1||(ee.t=Math.min(1,ee.t+De/.9),ee.m.visible=ee.t<1,ee.m.position.y+=De*1.4,ee.m.scale.setScalar(.5+ee.t*1.6),ee.m.material.opacity=.85*(1-ee.t));for(let ee=0;ee<le;){if(at[ee]+=De,at[ee]>=Pt[ee]){let Re=--le;Ae[ee]=Ae[Re],ye[ee]=ye[Re],Ye[ee]=Ye[Re],ct[ee]=ct[Re],Te[ee]=Te[Re],ve[ee]=ve[Re],Ke[ee]=Ke[Re],at[ee]=at[Re],Pt[ee]=Pt[Re],N[ee]=N[Re],me[ee]=me[Re];continue}ee++}Z.fill(0);for(let ee=0;ee<le;ee++){let Re=Math.max(0,at[ee]-ct[ee]),Dt=Re/(Pt[ee]-ct[ee]),en=(at[ee]*Ie+N[ee]|0)%Pr,si=ct[ee]>0&&at[ee]<ct[ee];st.position.set(Ae[ee]+(Te[ee]-Ae[ee])*Dt,si?Ye[ee]*(1-(at[ee]/ct[ee])**2):0,ye[ee]+(ve[ee]-ye[ee])*Dt),st.rotation.y=Ke[ee],st.scale.setScalar(Td*wd(me[ee])),st.updateMatrix(),te[en].setMatrixAt(Z[en],st.matrix),te[en].setColorAt(Z[en]++,Ra(me[ee],N[ee])),ce>=0&&ir(st.position.x,0,st.position.z,Ke[ee],Ht*Td*.8,Ht*Td*1.3,Hy(me[ee]))}te.forEach((ee,Re)=>{ee.count=ce<0?0:Z[Re],ee.instanceMatrix.needsUpdate=!0,ee.instanceColor&&(ee.instanceColor.needsUpdate=!0)}),J.fill(0);for(let ee of Y){let Re=F.habs[ee.hab],Dt=F.dinos[ee.hab],en=Dt?.[ee.j];if(Re<=0||en===void 0||Se<Ve[ee.hab*po+ee.j])continue;let si=kn[Re-1].slots,xo=Math.max(1.2,3-Ht*.15),sr=Re===6?2.3:.3,Nr=sr+(xo-sr)*Math.sqrt((ee.j+.5)/si),rr=ee.j*2.399,_o=ee.w?.4:0;ee.th+=ee.w*De;let Ts=Math.cos(ee.th),wc=Math.sin(ee.th),yo=Math.sign(ee.w)||1,ws=ee.w?0:1;X.position.set(is[ee.hab][0]+Math.cos(rr)*Nr+Ts*_o,Nm(Re),is[ee.hab][1]+Math.sin(rr)*Nr+wc*_o),X.rotation.y=ee.w?Math.atan2(-wc*yo,Ts*yo):rr+1.2,X.scale.setScalar(wd(en)),X.updateMatrix();let or=Se*Pe[ws]+ee.ph,As=ws*Ui+(or|0)%Ui;B[As].setX(J[As],or%1),b[As].setColorAt(J[As],Ra(en,ee.ph)),b[As].setMatrixAt(J[As]++,X.matrix),ir(X.position.x,X.position.y,X.position.z,X.rotation.y,Ht*.8*wd(en)*(en?1.3:1),Ht*1.3*wd(en)*(en?1.3:1),Hy(en))}b.forEach((ee,Re)=>{ee.count=J[Re],ee.instanceMatrix.needsUpdate=!0,B[Re].needsUpdate=!0,ee.instanceColor&&(ee.instanceColor.needsUpdate=!0)});let La=fc(F)*60,Vm=he.set(F.shops);Q.update(gt,Vm),Ue.update(De,3+Math.round((Mo-3)*Math.min(1,Math.log10(1+La)/4.5)**2.2),gt,Vm,j,Ln>4);for(let ee of Ue.agents())ee.st&&ir(ee.x,ee.y,ee.z,0,.5*ee.h,.5*ee.h);Ot.instanceMatrix.needsUpdate=!0,Ot.instanceColor.needsUpdate=!0,d()}let iv=new $i(.5,8,6),Pd=Array.from({length:18},()=>{let F=new ot(iv,new rn({transparent:!0,depthWrite:!1}));return F.visible=!1,n.add(F),{m:F,t:1}}),sv=0;function rv(F,se,de,De){if(De<=0)return;let lt=ce<0?0:Ha[ce],yt=kn[De-1].slots,gt=Math.max(1.2,3-lt*.15),Ht=De===6?2.3:.3,ut=Ht+(gt-Ht)*Math.sqrt((se+.5)/yt),Wt=se*2.399;for(let Ln=0;Ln<6;Ln++){let vi=Pd[sv++%Pd.length];vi.t=0,vi.m.position.set(is[F][0]+Math.cos(Wt)*ut+Oi(-.6,.6),Nm(De)+.6+Oi(0,1.2),is[F][1]+Math.sin(Wt)*ut+Oi(-.6,.6)),vi.m.material.color.set(er(de)).lerp(Um,.6)}}let ov=F=>Gm(is[F][0],1.2,is[F][1]),Gm=(F,se,de)=>{fn.set(F,se,de).project(s);let De=hi();return{x:(fn.x+1)/2*De.w,y:(1-fn.y)/2*De.h}};return{scene:n,camera:s,vehIcon:F=>Ee[F-1]??null,hatchBaby:Le,coin:Oe,puff:rv,habScreen:ov,screenOf:Gm,spawnDrone:zt,dronePos:Ec,update:nv,render:()=>{p.render(),_()},post:p,zoomT:I,visitors:Ue.visitors,agents:Ue.agents,blocked:ge,shopStats:Ue.stats,dwell:j,info:t.info}}var zm="ef_save",Ew=5,Tw=5e3;document.getElementById("ver").textContent="v"+$m.split(" ")[0];function ww(){try{let i=localStorage.getItem(zm);if(!i)return null;let e=JSON.parse(i);return{s:H_(e?.s,void 0,e?.v),t:typeof e?.t=="number"?e.t:Date.now()}}catch{return null}}var Bm=ww(),fi=Bm?.s??mm(),Zy={},Jy=1,jy=!1;function Rd(){if(!jy)try{localStorage.setItem(zm,JSON.stringify({v:Ew,t:Date.now(),s:fi}))}catch{}}Pg();function km(i){for(let e of i)if(e.type==="hatched")Mn.hatchBaby(e.hab,e.slot,e.rarity,e.src==="drone"?"drone":"incub"),yi.rarityPop(e.rarity,e.src==="nest"),e.src==="drone"&&Jt("wing");else if(e.type==="sold"||e.type==="replaced"){let t=e.type==="sold"?e.rarity:e.old,n=Mn.screenOf(0,4.5,0);e.type==="sold"&&Mn.coin(),yi.floatText(`+$${cn(e.money)} ${Qs(t)}`,n.x+(Math.random()-.5)*60,n.y,"#"+er(t).toString(16).padStart(6,"0")),Jt("coin")}else e.type==="laid"?(yi.flyEgg(Mn.habScreen(e.hab),Mn.screenOf(0,4.5,0),e.rarity),yi.laid()):e.type==="retired"?(Mn.puff(e.hab,e.slot,e.rarity,fi.habs[e.hab]),yi.retired(e.rarity),Jt("bonus")):e.type==="eggUnlocked"?(Jt("key"),yi.toast("New species available!")):e.type==="typeUnlocked"?(Jt("key"),yi.toast(`${Jn[e.egg].name} unlocked!`)):e.type==="drone"?Mn.spawnDrone(e.elite):e.type==="gift"&&yi.gift()}var Mn=Vy((i,e,t)=>km(oy(fi,i))),yi=Ey(fi,{speed:i=>{Jy=i},emit:km,reset:()=>{jy=!0;try{localStorage.removeItem(zm),localStorage.removeItem("ef_tut")}catch{}location.reload()}},Mn.vehIcon,Mn.post,Mn.zoomT);function Qy(i){let e=Y_(fi,i);e<=0||i<xg||(fi.money+=e,fi.runEarnings+=e,yi.ask(`While you were away:
+$${cn(e)}`,"OK",()=>{},!1,["Watch ad \xD72",()=>ur(()=>{fi.money+=e,fi.runEarnings+=e,yi.toast(`+$${cn(e)}`)},()=>yi.toast("No video available right now"))]))}Bm&&Qy(Math.max(0,(Date.now()-Bm.t)/1e3));function ev(i){my(fi,i,Date.now());for(let e=0;e<Jy;e++)km(hy(fi,i,Zy,Date.now()));Mn.update(fi,i,Date.now()),yi.update(),Aw(i)}var wa=new O,Wy=(i,e)=>(wa.set(i,0,e).project(Mn.camera),Math.abs(wa.x)<1&&Math.abs(wa.y)<1),Xy=15+Math.random()*25,qy=0,Fm=0,Yy=!1,$y=!1;function Aw(i){let{bus:e,train:t}=Mn.dwell;if((e&&!Yy&&Wy(nc.x,nc.z)||t&&!$y&&Wy(xa.x,xa.z))&&Jt("horn"),Yy=e,$y=t,fi.dinos.some(s=>s.length)&&(Xy-=i)<=0&&(Xy=15+Math.random()*25,Jt("roar")),--qy<=0){qy=10,Fm=0;for(let s of Mn.agents())wa.set(s.x,s.y,s.z).project(Mn.camera),Math.abs(wa.x)<.7&&Math.abs(wa.y)<.7&&Fm++}let n=Ri.smoothstep(Mn.camera.zoom,1,1.8);Lg((.05+.95*n)*Math.min(1,Fm/20),i)}var Hm=performance.now(),Rw=Ug(),Ky=!0;function tv(i){Ng()||ev((i-Hm)/1e3),Hm=i,Mn.render(),Ky&&(Ky=!1,Rw.then(Og)),requestAnimationFrame(tv)}requestAnimationFrame(tv);var Ad=0;document.addEventListener("visibilitychange",()=>{document.hidden?(Ad=Date.now(),Rd()):(Hm=performance.now(),Ad&&Qy(Math.max(0,(Date.now()-Ad)/1e3)),Ad=0)});addEventListener("pagehide",Rd);setInterval(()=>{document.hidden||Rd()},Tw);window.__game={state:fi,input:Zy,scene:Mn.scene,camera:Mn.camera,hud:yi,world:Mn,save:Rd,tick(i){for(let e=i;e>0;e-=1e3)ev(Math.min(e,1e3)/1e3);Mn.render()}};window.__booted=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
