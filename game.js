"use strict";(()=>{var Tm="0.1.45 (20261118)",ot={black:1578021,navy:2501444,plum:6830188,green:4098376,brown:12087120,dgray:3818598,lgray:12635100,white:16777215,red:14957380,orange:16217634,yellow:16705377,lime:6539085,blue:39387,lavender:9149364,pink:16151930,peach:15251350,khaki:15389866,olive:16690740,jungle:2513986,rust:12470831,teal:2943221},Wn={sun:16773336,sky:16777215,bounce:10934416,groundLo:4761672,groundHi:8179554,haze:13625528,path:15841442,pad:[15983288,15516308,14278634,16575646],ao:.75},xs=1/20,wm=1,Am=2,Rm=1,br=4,Aa=600,Ra=300,Ca=30,Cm=1,Ey=.92,Ty=.1,wy=.08,Ay=1/120,Ry=1/30,Cy=.1,Cn=[{name:"Common",chance:.67,power:1,sell:.3,color:10133670},{name:"Uncommon",chance:.22,power:2,sell:.6,color:5025616},{name:"Rare",chance:.1,power:5,sell:1.5,color:3114731},{name:"Epic",chance:.0098,power:12,sell:4,color:10182117},{name:"Legendary",chance:2e-4,power:30,sell:10,color:16036864}],Qn=[{name:"Egg",priceMult:1,hatchS:5,needs:-1,odds:Cn.map(i=>i.chance)},{name:"Golden Egg",priceMult:25,hatchS:60,needs:2,odds:[0,.7,.26,.037,.003]},{name:"Crystal Egg",priceMult:250,hatchS:900,needs:3,odds:[0,0,.77,.215,.015]}],Pm=2.8,vd=4,Im=4,Er=10,Md=1.6,pi=[{name:"Small Enclosure",slots:3,mult:1,cost:300},{name:"Paddock",slots:4,mult:2,cost:5e3},{name:"Big Paddock",slots:5,mult:3.5,cost:12e4},{name:"Fern Valley",slots:6,mult:6,cost:3e6},{name:"Glass Dome",slots:7,mult:10,cost:8e7},{name:"Volcano Valley",slots:8,mult:15,cost:12e8},{name:"Sky Island",slots:9,mult:22,cost:8e9},{name:"Orbit Dome",slots:10,mult:30,cost:5e10}],Lm=[250,1e3,5e3,25e3,15e4,3e5,5e5,8e5],_s=[{name:"Tour Cart",cap:1500,cost:500},{name:"Safari Jeep",cap:6e3,cost:8e3},{name:"Tour Bus",cap:25e3,cost:2e5},{name:"Double-Decker",cap:12e4,cost:5e6},{name:"Monorail",cap:6e5,cost:15e7},{name:"Tour Copter",cap:1e6,cost:2e9},{name:"Airship",cap:15e5,cost:14e9},{name:"Sky Lift",cap:22e5,cost:9e10}],js=[600,1e4,25e4,6e6,16e7,3e9,2e10,12e10],vc=[.03,.06,.1,.15,.21,.28,.36,.45],bn=[{id:"food",name:"Food Court",cost:1,eff:1,kind:"spend"},{id:"ice",name:"Ice Cream",cost:.6,eff:.6,kind:"spend"},{id:"souv",name:"Souvenirs",cost:1.6,eff:1.2,kind:"spend"},{id:"boothW",name:"West Tickets",cost:1.2,eff:.5,kind:"lay"},{id:"boothE",name:"East Tickets",cost:2,eff:.5,kind:"lay"}],ei=[{name:"Compsognathus",value:.25,threshold:0,power:1,egg:10},{name:"Velociraptor",value:1.25,threshold:4e5,power:1,egg:50},{name:"Triceratops",value:3.5,threshold:19e7,power:1,egg:240},{name:"Stegosaurus",value:4.5,threshold:5e9,power:1,egg:520},{name:"Tyrannosaurus",value:5,threshold:12e10,power:1,egg:1160},{name:"Brachiosaurus",value:6,threshold:2e13,power:1,egg:2560},{name:"Lava Spinosaurus",value:6.5,threshold:2e14,power:1,egg:5600},{name:"Cosmic Rex",value:10,threshold:215e12,power:1,egg:12400}],Sd=["car/suv","car/suv-luxury","car/van","car/delivery"],mi={HAB:10.5,RING_R:17.5,D:3},co=100,Pa=[16773608,16705377,6285567],Ia=[ot.yellow,ot.orange,ot.red,ot.white,ot.lime,ot.teal,ot.pink,ot.plum],Mc=[0,25,55,85],ys=[{id:"nests",tier:0,max:10,base:15,growth:1.55,eff:.1},{id:"feed",tier:0,max:10,base:60,growth:1.6,eff:.25},{id:"incubator",tier:0,max:10,base:40,growth:1.5,eff:Ey},{id:"autoHatch1",tier:0,max:10,base:400,growth:1.6,eff:Ay},{id:"incubSlots",tier:0,max:3,base:2e3,growth:10,eff:1},{id:"warmLamps",tier:0,max:5,base:500,growth:4,eff:Ty},{id:"space",tier:1,max:10,base:2e4,growth:1.7,eff:Cy},{id:"roads",tier:1,max:10,base:25e3,growth:1.7,eff:.1},{id:"runCap",tier:1,max:4,base:6e4,growth:4,eff:wy},{id:"layers",tier:1,max:15,base:5e4,growth:1.65,eff:.15},{id:"vehicleSlot",tier:2,max:6,base:2e7,growth:4,eff:1},{id:"packaging",tier:2,max:15,base:15e6,growth:1.7,eff:.2},{id:"autoHatch2",tier:2,max:10,base:3e7,growth:1.8,eff:Ry},{id:"drones",tier:2,max:10,base:1e7,growth:1.7,eff:.01},{id:"essence",tier:3,max:20,base:5e8,growth:1.5,eff:.01},{id:"freight",tier:3,max:15,base:4e8,growth:1.4,eff:.15},{id:"megaLay",tier:3,max:15,base:6e8,growth:1.45,eff:.2}],Dm=1e7,Nm=65e7,Um=.0015,bd=20,Ed=40,Om=.1,Fm=600,Sc=1800,Bm=1800,bc=4*3600,Td=600,Ec=300,Tc=3,vs=[{money:600},{egg:3},{money:1200},{gold:1},{x2:1800},{money:2400},{crystal:1}],Ln=[{at:60,r:{egg:1}},{at:180,r:{money:120}},{at:300,r:{gold:1}},{at:420,r:{money:240}},{at:600,r:{x2:1800,ad:!0}},{at:840,r:{egg:2}},{at:1200,r:{money:600}},{at:1800,r:{gold:1,ad:!0}},{at:2400,r:{money:900}},{at:3e3,r:{sky:600}},{at:3600,r:{crystal:1}}],uo=60,zm=1.5,Hm=3,km=40,Gm=1800,Vm=1,wc=3600,Wm=30,ho=10,Xm=1e6,qm=10,Ac=["compy","raptor","triceratops","stego","trex","brachio","spino","trex"],Rc=[2.1,2,2.2,2.6,2.8,4.1,3.1,2.8],Ym=[16777215,16777215,16777215,16758928,16777215,16777215,16756848,12095743],$m=[9061392,0,0,0,0,0,9054720,4856474],Km=3;var Jm={click:[["click-1"],.5,40,"h"],tab:[["tab"],.5,40,"h"],open:[["open"],.5,40,"h"],close:[["close"],.5,40,"h"],deny:[["deny"],.5,100,"h"],buy:[["buy"],.8,80,"h"],unlock:[["unlock-1","unlock-2"],.8,150,"hn"],key:[["key-1"],.8,200,"hn"],trophy:[["trophy"],.9,200,"hn"],prestige:[["prestige"],.7,2e3,"hn"],wing:[["wing"],.4,80,""],coin:[["coin-1","coin-2"],.35,60,"hn"],bonus:[["bonus"],.8,500,"hn"],shimmer:[["shimmer"],.32,2e3,"hn"],horn:[["whistle-1"],.12,3e3,""],roar:[["roar","roar-2","roar-3","roar-4"],.22,5e3,""]},er={music:["music-base",1,"music"],day:["amb-day",.6,"ambient"],leaves:["amb-leaves",.4,"ambient"],crowd:["crowd",1.6,"ambient"]},Py={music:.3,sfx:1,ambient:.5},jm=i=>({music:"ef_music_vol",sfx:"ef_sfx_vol",ambient:"ef_amb_vol"})[i],Qm=i=>{try{return localStorage.getItem(i)}catch{return null}},eg=(i,e)=>{try{localStorage.setItem(i,e)}catch{}};function Ic(i){let e=parseFloat(Qm(jm(i))??"");return isNaN(e)?Py[i]:Math.max(0,Math.min(1,e))}var Lc=()=>Qm("ef_sound")!=="0",cn=null,La,Rd,Qs={},Cd=new Map,Pc=new Set(Lc()?[]:["user"]);function tg(){cn&&La.gain.setTargetAtTime(Pc.size?0:1,cn.currentTime,.03)}function Da(i,e){e?Pc.add(i):Pc.delete(i),tg()}function ng(i){eg("ef_sound",i?"1":"0"),Da("user",!i)}var Pd=i=>er[i][1]*Ic(er[i][2]);function ig(i,e){if(eg(jm(i),e.toFixed(2)),!!cn){for(let t of Object.keys(er))er[t][2]===i&&t!=="crowd"&&Qs[t].gain.setTargetAtTime(Pd(t),cn.currentTime,.1);Id()}}async function Iy(i){try{let e=await fetch(`audio/${i}.ogg`);e.ok&&Cd.set(i,await cn.decodeAudioData(await e.arrayBuffer()))}catch{}}function Ly(){if(cn){cn.resume();return}let i=window.AudioContext??window.webkitAudioContext;if(!i)return;cn=new i,La=cn.createGain();let e=cn.createDynamicsCompressor();e.threshold.value=-6,e.knee.value=0,e.ratio.value=20,e.attack.value=.003,e.release.value=.15,La.connect(e),e.connect(cn.destination),Rd=cn.createGain(),Rd.connect(La);for(let n of Object.keys(er))Qs[n]=cn.createGain(),Qs[n].gain.value=0,Qs[n].connect(La);tg();let t=new Set([...Object.values(Jm).flatMap(n=>n[0]),...Object.values(er).map(n=>n[0])]);Promise.all([...t].map(Iy)).then(()=>{for(let n of Object.keys(er)){let s=Cd.get(er[n][0]);if(!s)continue;let r=cn.createBufferSource();r.buffer=s,r.loop=!0,r.connect(Qs[n]),r.start(),n!=="crowd"&&Qs[n].gain.setTargetAtTime(Pd(n),cn.currentTime,1.2)}Id()})}function sg(){for(let i of["pointerdown","keydown"])addEventListener(i,Ly,{capture:!0});document.addEventListener("visibilitychange",()=>Da("pause",document.hidden))}var Zm=new Map,wd=0;function Zt(i,e=1){let t=Ic("sfx");if(!cn||cn.state!=="running"||Pc.size||!t)return;let[n,s,r,o]=Jm[i],a=performance.now();if(wd>=24&&!o.includes("h")||a-(Zm.get(i)??-1e9)<r)return;let l=Cd.get(n[Math.random()*n.length|0]);if(!l)return;Zm.set(i,a);let c=cn.createBufferSource(),u=cn.createGain();c.buffer=l,c.playbackRate.value=e,c.detune.value=o.includes("n")?0:(Math.random()-.5)*120,u.gain.value=s*t,c.connect(u),u.connect(Rd),wd++,c.onended=()=>{wd--,u.disconnect()},c.start()}var Ad=0,Cc=0;function Id(){cn&&Qs.crowd&&Qs.crowd.gain.setTargetAtTime(Pd("crowd")*Cc,cn.currentTime,.15)}function rg(i,e){Ad=i,Cc+=(Ad-Cc)*Math.min(1,e*(Ad>Cc?1.5:1)),Id()}var fo=()=>window.PokiSDK,Ld=i=>{try{i()}catch(e){console.warn("[poki]",e)}},Dc=!1,Tr=!1,og=!1,ag=()=>Tr;function Dd(i){!Dc||i===og||(og=i,Ld(()=>i?fo().gameplayStart():fo().gameplayStop()))}async function lg(){if(!location.search.includes("welcome"))return;let i=document.getElementById("welcome"),e=()=>{i.hidden=!0};i.hidden=!1,i.addEventListener("pointerdown",s=>{(s.target===i||s.target.id==="wok")&&e()}),addEventListener("keydown",e),addEventListener("keydown",s=>{[" ","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(s.key)&&s.preventDefault()});let t=fo();if(!t)return;try{await t.init(),Dc=!0}catch(s){console.warn("[poki] init (adblock?)",s)}let n=()=>setTimeout(()=>{!Tr&&i.hidden&&Dd(!0)});addEventListener("pointerdown",n),addEventListener("keydown",n),document.addEventListener("visibilitychange",()=>{document.hidden&&Dd(!1)})}function cg(){Dc&&(Ld(()=>fo().gameLoadingFinished()),Ld(()=>fo().playtestSetCanvas?.(document.querySelector("#game canvas"))))}function tr(i,e=()=>{}){if(!Tr)return Dy(i)}function Dy(i){let e=document.getElementById("adov"),t=document.getElementById("adn"),n=3;Tr=!0,e.hidden=!1,t.textContent=`Reward in ${n}`;let s=setInterval(()=>{if(--n>0){t.textContent=`Reward in ${n}`;return}clearInterval(s),e.hidden=!0,Tr=!1,i()},1e3)}var e0=0,_f=1,t0=2;var Vr=1,n0=2,qo=3,ns=0,In=1,Tn=2,wn=0,Yo=1,yf=2,vf=3,Mf=4,Du=5;var vi=100,i0=101,s0=102,r0=103,o0=104,Wr=200,a0=201,l0=202,c0=203,Sf=204,bf=205,yl=206,u0=207,vl=208,h0=209,d0=210,f0=211,p0=212,m0=213,g0=214,au=0,lu=1,cu=2,Co=3,uu=4,hu=5,du=6,fu=7,Nu=0,x0=1,_0=2,is=0,Ml=1,Sl=2,bl=3,El=4,Tl=5,wl=6,Al=7,lf="attached",y0="detached",Ef=300,Xr=301,$o=302,Uu=303,Ou=304,ti=1e3,xi=1001,Po=1002,qt=1003,Fu=1004;var qr=1005;var xn=1006,Ko=1007;var Mi=1008;var Bn=1009,Tf=1010,wf=1011,Zo=1012,Bu=1013,zi=1014,hi=1015,fn=1016,zu=1017,Hu=1018,Os=1020,Af=35902,Rf=35899,Cf=1021,Pf=1022,ri=1023,Rs=1026,Hi=1027,ku=1028,Gu=1029,pr=1030,Vu=1031;var Wu=1033,Rl=33776,Cl=33777,Pl=33778,Il=33779,Xu=35840,qu=35841,Yu=35842,$u=35843,Ku=36196,Zu=37492,Ju=37496,ju=37488,Qu=37489,Ll=37490,eh=37491,th=37808,nh=37809,ih=37810,sh=37811,rh=37812,oh=37813,ah=37814,lh=37815,ch=37816,uh=37817,hh=37818,dh=37819,fh=37820,ph=37821,mh=36492,gh=36494,xh=36495,_h=36283,yh=36284,Dl=36285,vh=36286,v0=2200,M0=2201,S0=2202,Dr=2300,Nr=2301,ru=2302,cf=2303,Pr=2400,Ir=2401,Xa=2402,Mh=2500,b0=2501,If=0,Nl=1,Jo=2,E0=3200;var jo=0,T0=1,Fs="",Ft="srgb",qn="srgb-linear",qa="linear",Lt="srgb";var ou=7680;var w0=519,A0=512,R0=513,C0=514,Lf=515,P0=516,I0=517,Df=518,Nf=519,Uf=35044;var Of="300 es",_i=2e3,Io=2001;function Ny(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uy(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function L0(){let i=Lo("canvas");return i.style.display="block",i}var ug={},Do=null;function Ya(...i){let e="THREE."+i.shift();Do?Do("log",e,...i):console.log(e,...i)}function D0(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function $e(...i){i=D0(i);let e="THREE."+i.shift();if(Do)Do("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=D0(i);let e="THREE."+i.shift();if(Do)Do("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Lr(...i){let e=i.join(" ");e in ug||(ug[e]=!0,$e(...i))}function N0(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var U0={[au]:au,[cu]:du,[uu]:uu,[Co]:hu,[lu]:lu,[du]:cu,[fu]:fu,[hu]:Co},Ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hg=1234567,Va=Math.PI/180,Ur=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function Ff(i,e){return(i%e+e)%e}function Oy(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Fy(i,e,t){return i!==e?(t-i)/(e-i):0}function Wa(i,e,t){return(1-t)*i+t*e}function By(i,e,t,n){return Wa(i,e,1-Math.exp(-t*n))}function zy(i,e=1){return e-Math.abs(Ff(i,e*2)-e)}function Hy(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ky(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Gy(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Vy(i,e){return i+Math.random()*(e-i)}function Wy(i){return i*(.5-Math.random())}function Xy(i){i!==void 0&&(hg=i);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qy(i){return i*Va}function Yy(i){return i*Ur}function $y(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ky(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Zy(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),p=o((n-e)/2);switch(s){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*p,l*f,a*c);break;case"YXY":i.set(l*f,a*u,l*p,a*c);break;case"ZYZ":i.set(l*p,l*f,a*u,a*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zf(i,e){if(e.constructor===Float32Array)return i;let t=Sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Hf(i,e){if(e.constructor===Float32Array)return i;let t=Sh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Si={DEG2RAD:Va,RAD2DEG:Ur,generateUUID:ss,clamp:pt,euclideanModulo:Ff,mapLinear:Oy,inverseLerp:Fy,lerp:Wa,damp:By,pingpong:zy,smoothstep:Hy,smootherstep:ky,randInt:Gy,randFloat:Vy,randFloatSpread:Wy,seededRandom:Xy,degToRad:qy,radToDeg:Yy,isPowerOfTwo:$y,ceilPowerOfTwo:Ky,floorPowerOfTwo:Bf,setQuaternionFromProperEuler:Zy,normalize:Hf,denormalize:zf},qf=class qf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};qf.prototype.isVector2=!0;var Ke=qf,Un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(h!==_||l!==d||c!==f||u!==p){let m=l*d+c*f+u*p+h*_;m<0&&(d=-d,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){let y=Math.acos(m),w=Math.sin(y);g=Math.sin(g*y)/w,a=Math.sin(a*y)/w,l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a}else{l=l*g+d*a,c=c*g+f*a,u=u*g+p*a,h=h*g+_*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],f=r[o+2],p=r[o+3];return e[t]=a*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-a*f,e[t+2]=c*p+u*f+a*d-l*h,e[t+3]=u*p-a*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),d=l(n/2),f=l(s/2),p=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>h){let f=2*Math.sqrt(1+n-a-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-n-h);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Yf=class Yf{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dg.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Nd.copy(this).projectOnVector(e),this.sub(Nd)}reflect(e){return this.sub(Nd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yf.prototype.isVector3=!0;var F=Yf,Nd=new F,dg=new Un,$f=class $f{constructor(e,t,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],_=s[0],m=s[3],g=s[6],y=s[1],w=s[4],M=s[7],E=s[2],T=s[5],x=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*m+a*w+l*T,r[6]=o*g+a*M+l*x,r[1]=c*_+u*y+h*E,r[4]=c*m+u*w+h*T,r[7]=c*g+u*M+h*x,r[2]=d*_+f*y+p*E,r[5]=d*m+f*w+p*T,r[8]=d*g+f*M+p*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,f=c*r-o*l,p=t*h+n*d+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return Lr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ud.makeScale(e,t)),this}rotate(e){return Lr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ud.makeRotation(-e)),this}translate(e,t){return Lr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ud.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};$f.prototype.isMatrix3=!0;var st=$f,Ud=new st,fg=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pg=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jy(){let i={enabled:!0,workingColorSpace:qn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Lt&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Lt&&(s.r=Ro(s.r),s.g=Ro(s.g),s.b=Ro(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Fs?qa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qn]:{primaries:e,whitePoint:n,transfer:qa,toXYZ:fg,fromXYZ:pg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:Lt,toXYZ:fg,fromXYZ:pg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var lt=Jy();function As(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ro(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var po,pu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{po===void 0&&(po=Lo("canvas")),po.width=e.width,po.height=e.height;let s=po.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=po}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Lo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=As(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(As(t[n]/255)*255):t[n]=As(t[n]);return{data:t,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jy=0,No=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Od(s[o].image)):r.push(Od(s[o]))}else r=Od(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Od(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}var Qy=0,Fd=new F,_n=class i extends Ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=xn,o=Mi,a=ri,l=Bn,c=i.DEFAULT_ANISOTROPY,u=Fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=ss(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Fd).x}get height(){return this.source.getSize(Fd).y}get depth(){return this.source.getSize(Fd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){$e(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ef)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ti:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Po:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ti:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Po:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Ef;_n.DEFAULT_ANISOTROPY=1;var Kf=class Kf{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(f+1)/2,E=(g+1)/2,T=(u+d)/4,x=(h+_)/4,b=(p+m)/4;return w>M&&w>E?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=x/n):M>E?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=b/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=x/r,s=b/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(h-_)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kf.prototype.isVector4=!0;var Bt=Kf,mu=class extends Ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new _n({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new No(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$a=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gu=class extends _n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Lu=class Lu{constructor(e,t,n,s,r,o,a,l,c,u,h,d,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,_,m)}set(e,t,n,s,r,o,a,l,c,u,h,d,f,p,_,m){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lu().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/mo.setFromMatrixColumn(e,0).length(),r=1/mo.setFromMatrixColumn(e,1).length(),o=1/mo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=p+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d+_*a,t[4]=p*a-f,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=f*a-p,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,p=c*u,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=p+f*a,t[1]=f+p*a,t[5]=o*u,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,f=o*h,p=a*u,_=a*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-p,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=_-d*h,t[8]=p*h+f,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-_*h}else if(e.order==="XZY"){let d=o*l,f=o*c,p=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=o*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=a*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ev,e,tv)}lookAt(e,t,n){let s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),nr.crossVectors(n,ci),nr.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),nr.crossVectors(n,ci)),nr.normalize(),Nc.crossVectors(ci,nr),s[0]=nr.x,s[4]=Nc.x,s[8]=ci.x,s[1]=nr.y,s[5]=Nc.y,s[9]=ci.y,s[2]=nr.z,s[6]=Nc.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],y=n[3],w=n[7],M=n[11],E=n[15],T=s[0],x=s[4],b=s[8],L=s[12],A=s[1],N=s[5],O=s[9],X=s[13],D=s[2],Y=s[6],j=s[10],K=s[14],ce=s[3],z=s[7],J=s[11],re=s[15];return r[0]=o*T+a*A+l*D+c*ce,r[4]=o*x+a*N+l*Y+c*z,r[8]=o*b+a*O+l*j+c*J,r[12]=o*L+a*X+l*K+c*re,r[1]=u*T+h*A+d*D+f*ce,r[5]=u*x+h*N+d*Y+f*z,r[9]=u*b+h*O+d*j+f*J,r[13]=u*L+h*X+d*K+f*re,r[2]=p*T+_*A+m*D+g*ce,r[6]=p*x+_*N+m*Y+g*z,r[10]=p*b+_*O+m*j+g*J,r[14]=p*L+_*X+m*K+g*re,r[3]=y*T+w*A+M*D+E*ce,r[7]=y*x+w*N+M*Y+E*z,r[11]=y*b+w*O+M*j+E*J,r[15]=y*L+w*X+M*K+E*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],_=e[7],m=e[11],g=e[15],y=l*f-c*d,w=a*f-c*h,M=a*d-l*h,E=o*f-c*u,T=o*d-l*u,x=o*h-a*u;return t*(_*y-m*w+g*M)-n*(p*y-m*E+g*T)+s*(p*w-_*E+g*x)-r*(p*M-_*T+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],c=e[6],u=e[10];return t*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],_=e[13],m=e[14],g=e[15],y=t*a-n*o,w=t*l-s*o,M=t*c-r*o,E=n*l-s*a,T=n*c-r*a,x=s*c-r*l,b=u*_-h*p,L=u*m-d*p,A=u*g-f*p,N=h*m-d*_,O=h*g-f*_,X=d*g-f*m,D=y*X-w*O+M*N+E*A-T*L+x*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let Y=1/D;return e[0]=(a*X-l*O+c*N)*Y,e[1]=(s*O-n*X-r*N)*Y,e[2]=(_*x-m*T+g*E)*Y,e[3]=(d*T-h*x-f*E)*Y,e[4]=(l*A-o*X-c*L)*Y,e[5]=(t*X-s*A+r*L)*Y,e[6]=(m*M-p*x-g*w)*Y,e[7]=(u*x-d*M+f*w)*Y,e[8]=(o*O-a*A+c*b)*Y,e[9]=(n*A-t*O-r*b)*Y,e[10]=(p*T-_*M+g*y)*Y,e[11]=(h*M-u*T-f*y)*Y,e[12]=(a*L-o*N-l*b)*Y,e[13]=(t*N-n*L+s*b)*Y,e[14]=(_*w-p*E-m*y)*Y,e[15]=(u*E-h*w+d*y)*Y,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,f=r*u,p=r*h,_=o*u,m=o*h,g=a*h,y=l*c,w=l*u,M=l*h,E=n.x,T=n.y,x=n.z;return s[0]=(1-(_+g))*E,s[1]=(f+M)*E,s[2]=(p-w)*E,s[3]=0,s[4]=(f-M)*T,s[5]=(1-(d+g))*T,s[6]=(m+y)*T,s[7]=0,s[8]=(p+w)*x,s[9]=(m-y)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=mo.set(s[0],s[1],s[2]).length(),a=mo.set(s[4],s[5],s[6]).length(),l=mo.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Ii.copy(this);let c=1/o,u=1/a,h=1/l;return Ii.elements[0]*=c,Ii.elements[1]*=c,Ii.elements[2]*=c,Ii.elements[4]*=u,Ii.elements[5]*=u,Ii.elements[6]*=u,Ii.elements[8]*=h,Ii.elements[9]*=h,Ii.elements[10]*=h,t.setFromRotationMatrix(Ii),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===_i)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Io)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=_i,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===_i)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Io)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Lu.prototype.isMatrix4=!0;var Ze=Lu,mo=new F,Ii=new Ze,ev=new F(0,0,0),tv=new F(1,1,1),nr=new F,Nc=new F,ci=new F,mg=new Ze,gg=new Un,Zi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return gg.setFromEuler(this),this.setFromQuaternion(gg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zi.DEFAULT_ORDER="XYZ";var Uo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nv=0,xg=new F,go=new Un,Ms=new Ze,Uc=new F,Na=new F,iv=new F,sv=new Un,_g=new F(1,0,0),yg=new F(0,1,0),vg=new F(0,0,1),Mg={type:"added"},rv={type:"removed"},xo={type:"childadded",child:null},Bd={type:"childremoved",child:null},mt=class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Zi,n=new Un,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ze},normalMatrix:{value:new st}}),this.matrix=new Ze,this.matrixWorld=new Ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.multiply(go),this}rotateOnWorldAxis(e,t){return go.setFromAxisAngle(e,t),this.quaternion.premultiply(go),this}rotateX(e){return this.rotateOnAxis(_g,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(vg,e)}translateOnAxis(e,t){return xg.copy(e).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_g,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uc.copy(e):Uc.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(Na,Uc,this.up):Ms.lookAt(Uc,Na,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),go.setFromRotationMatrix(Ms),this.quaternion.premultiply(go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),xo.child=e,this.dispatchEvent(xo),xo.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rv),Bd.child=e,this.dispatchEvent(Bd),Bd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ms.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ms),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),xo.child=e,this.dispatchEvent(xo),xo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,iv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,sv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),f=o(e.animations),p=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};mt.DEFAULT_UP=new F(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Wt=class extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ov={type:"move"},Oo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Wt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},O0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function zd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=Ff(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=zd(o,r,e+1/3),this.g=zd(o,r,e),this.b=zd(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:$e("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=O0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}copyLinearToSRGB(e){return this.r=Ro(e.r),this.g=Ro(e.g),this.b=Ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return lt.workingToColorSpace(Nn.copy(this),e),Math.round(pt(Nn.r*255,0,255))*65536+Math.round(pt(Nn.g*255,0,255))*256+Math.round(pt(Nn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,s=Nn.g,r=Nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Ft){lt.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,s=Nn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(Oc);let n=Wa(ir.h,Oc.h,t),s=Wa(ir.s,Oc.s,t),r=Wa(ir.l,Oc.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new De;De.NAMES=O0;var Ka=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new De(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Li=new F,Ss=new F,Hd=new F,bs=new F,_o=new F,yo=new F,Sg=new F,kd=new F,Gd=new F,Vd=new F,Wd=new Bt,Xd=new Bt,qd=new Bt,lr=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Li.subVectors(e,t),s.cross(Li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Li.subVectors(s,t),Ss.subVectors(n,t),Hd.subVectors(e,t);let o=Li.dot(Li),a=Li.dot(Ss),l=Li.dot(Hd),c=Ss.dot(Ss),u=Ss.dot(Hd),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-a*u)*d,p=(o*u-a*l)*d;return r.set(1-f-p,p,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bs.x),l.addScaledVector(o,bs.y),l.addScaledVector(a,bs.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wd.setScalar(0),Xd.setScalar(0),qd.setScalar(0),Wd.fromBufferAttribute(e,t),Xd.fromBufferAttribute(e,n),qd.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wd,r.x),o.addScaledVector(Xd,r.y),o.addScaledVector(qd,r.z),o}static isFrontFacing(e,t,n,s){return Li.subVectors(n,t),Ss.subVectors(e,t),Li.cross(Ss).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),Ss.subVectors(this.a,this.b),Li.cross(Ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;_o.subVectors(s,n),yo.subVectors(r,n),kd.subVectors(e,n);let l=_o.dot(kd),c=yo.dot(kd);if(l<=0&&c<=0)return t.copy(n);Gd.subVectors(e,s);let u=_o.dot(Gd),h=yo.dot(Gd);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return o=l/(l-u),t.copy(n).addScaledVector(_o,o);Vd.subVectors(e,r);let f=_o.dot(Vd),p=yo.dot(Vd);if(p>=0&&f<=p)return t.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),t.copy(n).addScaledVector(yo,a);let m=u*p-f*h;if(m<=0&&h-u>=0&&f-p>=0)return Sg.subVectors(r,s),a=(h-u)/(h-u+(f-p)),t.copy(s).addScaledVector(Sg,a);let g=1/(m+_+d);return o=_*g,a=d*g,t.copy(n).addScaledVector(_o,o).addScaledVector(yo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jt=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Di):Di.fromBufferAttribute(r,o),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fc.copy(n.boundingBox)),Fc.applyMatrix4(e.matrixWorld),this.union(Fc)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Bc.subVectors(this.max,Ua),vo.subVectors(e.a,Ua),Mo.subVectors(e.b,Ua),So.subVectors(e.c,Ua),sr.subVectors(Mo,vo),rr.subVectors(So,Mo),wr.subVectors(vo,So);let t=[0,-sr.z,sr.y,0,-rr.z,rr.y,0,-wr.z,wr.y,sr.z,0,-sr.x,rr.z,0,-rr.x,wr.z,0,-wr.x,-sr.y,sr.x,0,-rr.y,rr.x,0,-wr.y,wr.x,0];return!Yd(t,vo,Mo,So,Bc)||(t=[1,0,0,0,1,0,0,0,1],!Yd(t,vo,Mo,So,Bc))?!1:(zc.crossVectors(sr,rr),t=[zc.x,zc.y,zc.z],Yd(t,vo,Mo,So,Bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Es=[new F,new F,new F,new F,new F,new F,new F,new F],Di=new F,Fc=new Jt,vo=new F,Mo=new F,So=new F,sr=new F,rr=new F,wr=new F,Ua=new F,Bc=new F,zc=new F,Ar=new F;function Yd(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ar.fromArray(i,r);let a=s.x*Math.abs(Ar.x)+s.y*Math.abs(Ar.y)+s.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),u=n.dot(Ar);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var dn=new F,Hc=new Ke,av=0,Vt=class extends Ui{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:av++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Uf,this.updateRanges=[],this.gpuType=hi,this.version=0,this._normalizationScale=e!==void 0?Sh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Hc.fromBufferAttribute(this,t),Hc.applyMatrix3(e),this.setXY(t,Hc.x,Hc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zf(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.array)}};var Za=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ja=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var It=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},lv=new Jt,Oa=new F,$d=new F,ni=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):lv.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);let t=Oa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oa,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($d.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add($d)),this.expandByPoint(Oa.copy(e.center).sub($d))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cv=0,gi=new Ze,Kd=new mt,bo=new F,ui=new Jt,Fa=new Jt,En=new F,Ut=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ny(e)?Ja:Za)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,n){return gi.makeTranslation(e,t,n),this.applyMatrix4(gi),this}scale(e,t,n){return gi.makeScale(e,t,n),this.applyMatrix4(gi),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bo).negate(),this.translate(bo.x,bo.y,bo.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new It(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Fa.setFromBufferAttribute(a),this.morphTargetsRelative?(En.addVectors(ui.min,Fa.min),ui.expandByPoint(En),En.addVectors(ui.max,Fa.max),ui.expandByPoint(En)):(ui.expandByPoint(Fa.min),ui.expandByPoint(Fa.max))}ui.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)En.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(En));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)En.fromBufferAttribute(a,c),l&&(bo.fromBufferAttribute(e,c),En.add(bo)),s=Math.max(s,n.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Vt(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let L=0;L<n.count;L++)a[L]=new F,l[L]=new F;let u=new F,h=new F,d=new F,f=new Ke,p=new Ke,_=new Ke,m=new F,g=new F;function y(L,A,N){c[L]=c[A]=c[N]=1,u.fromBufferAttribute(n,L),h.fromBufferAttribute(n,A),d.fromBufferAttribute(n,N),f.fromBufferAttribute(r,L),p.fromBufferAttribute(r,A),_.fromBufferAttribute(r,N),h.sub(u),d.sub(u),p.sub(f),_.sub(f);let O=1/(p.x*_.y-_.x*p.y);isFinite(O)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(d,-p.y).multiplyScalar(O),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(O),a[L].add(m),a[A].add(m),a[N].add(m),l[L].add(g),l[A].add(g),l[N].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let L=0,A=w.length;L<A;++L){let N=w[L],O=N.start,X=N.count;for(let D=O,Y=O+X;D<Y;D+=3)y(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let M=new F,E=new F,T=new F,x=new F;function b(L){T.fromBufferAttribute(s,L),x.copy(T);let A=a[L];M.copy(A),M.sub(T.multiplyScalar(T.dot(A))).normalize(),E.crossVectors(x,A);let O=E.dot(l[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,O)}for(let L=0,A=n.count;L<A;++L)c[L]&&b(L);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new F,r=new F,o=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let p=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*u;for(let g=0;g<u;g++)d[p++]=c[f++]}return new Vt(d,u,h)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uf,this.updateRanges=[],this.version=0,this.uuid=ss()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=bg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=bg(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function bg(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=ss()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Xn=new F,Bo=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Sh(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix4(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyNormalMatrix(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.transformDirection(e),this.setXYZ(t,Xn.x,Xn.y,Xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Ya("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ya("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zf(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Hf(e,this.data.array)}},Zd=new F,uv=new F,hv=new st,Ni=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zd.subVectors(n,t).cross(uv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hv.getNormalMatrix(e),s=this.coplanarPoint(Zd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dv=0,On=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Yo,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=bf,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=w0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ou,this.stencilZFail=ou,this.stencilZPass=ou,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){$e(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){$e(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Ni().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ke().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ts=new F,Jd=new F,kc=new F,Gc=new F,ur=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ts.copy(this.origin).addScaledVector(this.direction,t),Ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jd.copy(e).add(t).multiplyScalar(.5),kc.copy(t).sub(e).normalize(),Gc.copy(this.origin).sub(Jd);let r=e.distanceTo(t)*.5,o=-this.direction.dot(kc),a=Gc.dot(this.direction),l=-Gc.dot(kc),c=Gc.lengthSq(),u=Math.abs(1-o*o),h,d,f,p;if(u>0)if(h=o*l-a,d=o*a-l,p=r*u,h>=0)if(d>=-p)if(d<=p){let _=1/u;h*=_,d*=_,f=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Jd).addScaledVector(kc,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ts.subVectors(e.center,this.origin);let n=Ts.dot(this.direction),s=Ts.dot(Ts)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ts)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,h=e.x-o.x,d=e.y-o.y,f=e.z-o.z,p=t.x-o.x,_=t.y-o.y,m=t.z-o.z,g=n.x-o.x,y=n.y-o.y,w=n.z-o.z,M=Math.abs(l),E=Math.abs(c),T=Math.abs(u),x,b,L,A,N,O,X,D,Y,j,K,ce;if(M>=E&&M>=T?(L=l,O=h,Y=p,ce=g,l>=0?(x=c,b=u,A=d,N=f,X=_,D=m,j=y,K=w):(x=u,b=c,A=f,N=d,X=m,D=_,j=w,K=y)):E>=T?(L=c,O=d,Y=_,ce=y,c>=0?(x=u,b=l,A=f,N=h,X=m,D=p,j=w,K=g):(x=l,b=u,A=h,N=f,X=p,D=m,j=g,K=w)):(L=u,O=f,Y=m,ce=w,u>=0?(x=l,b=c,A=h,N=d,X=p,D=_,j=g,K=y):(x=c,b=l,A=d,N=h,X=_,D=p,j=y,K=g)),L===0)return null;let z=x/L,J=b/L,re=1/L,_e=A-z*O,Ee=N-J*O,ie=X-z*Y,xe=D-J*Y,Se=j-z*ce,ge=K-J*ce,de=Se*xe-ge*ie,R=_e*ge-Ee*Se,le=ie*Ee-xe*_e;if(s){if(de<0||R<0||le<0)return null}else if((de<0||R<0||le<0)&&(de>0||R>0||le>0))return null;let pe=de+R+le;if(pe===0)return null;let Ie=re*(de*O+R*Y+le*ce);return(pe>0?Ie<0:Ie>0)?null:this.at(Ie/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Nu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Eg=new Ze,Rr=new ur,Vc=new ni,Tg=new F,Wc=new F,Xc=new F,qc=new F,jd=new F,Yc=new F,wg=new F,$c=new F,je=class extends mt{constructor(e=new Ut,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Yc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],h=r[l];u!==0&&(jd.fromBufferAttribute(h,e),o?Yc.addScaledVector(jd,u):Yc.addScaledVector(jd.sub(t),u))}t.add(Yc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vc.copy(n.boundingSphere),Vc.applyMatrix4(r),Rr.copy(e.ray).recast(e.near),!(Vc.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Vc,Tg)===null||Rr.origin.distanceToSquared(Tg)>(e.far-e.near)**2))&&(Eg.copy(r).invert(),Rr.copy(e.ray).applyMatrix4(Eg),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=w;M<E;M+=3){let T=a.getX(M),x=a.getX(M+1),b=a.getX(M+2);s=Kc(this,g,e,n,c,u,h,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=a.getX(m),w=a.getX(m+1),M=a.getX(m+2);s=Kc(this,o,e,n,c,u,h,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=d.length;p<_;p++){let m=d[p],g=o[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=y,E=w;M<E;M+=3){let T=M,x=M+1,b=M+2;s=Kc(this,g,e,n,c,u,h,T,x,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){let y=m,w=m+1,M=m+2;s=Kc(this,o,e,n,c,u,h,y,w,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function fv(i,e,t,n,s,r,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ns,a),l===null)return null;$c.copy(a),$c.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo($c);return c<t.near||c>t.far?null:{distance:c,point:$c.clone(),object:i}}function Kc(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Wc),i.getVertexPosition(l,Xc),i.getVertexPosition(c,qc);let u=fv(i,e,t,n,Wc,Xc,qc,wg);if(u){let h=new F;lr.getBarycoord(wg,Wc,Xc,qc,h),s&&(u.uv=lr.getInterpolatedAttribute(s,a,l,c,h,new Ke)),r&&(u.uv1=lr.getInterpolatedAttribute(r,a,l,c,h,new Ke)),o&&(u.normal=lr.getInterpolatedAttribute(o,a,l,c,h,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new F,materialIndex:0};lr.getNormal(Wc,Xc,qc,d.normal),u.face=d,u.barycoord=h}return u}var Ba=new Bt,Ag=new Bt,Rg=new Bt,pv=new Bt,Cg=new Ze,Zc=new F,Qd=new ni,Pg=new Ze,ef=new ur,ja=class extends je{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lf,this.bindMatrix=new Ze,this.bindMatrixInverse=new Ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Jt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zc),this.boundingBox.expandByPoint(Zc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ni),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zc),this.boundingSphere.expandByPoint(Zc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qd.copy(this.boundingSphere),Qd.applyMatrix4(s),e.ray.intersectsSphere(Qd)!==!1&&(Pg.copy(s).invert(),ef.copy(e.ray).applyMatrix4(Pg),!(this.boundingBox!==null&&ef.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ef)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Bt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===y0?this.bindMatrixInverse.copy(this.bindMatrix).invert():$e("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ag.fromBufferAttribute(s.attributes.skinIndex,e),Rg.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Ba.copy(t),t.set(0,0,0,0)):(Ba.set(t.x,t.y,t.z,1),t.set(0,0,0)),Ba.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let o=Rg.getComponent(r);if(o!==0){let a=Ag.getComponent(r);Cg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(pv.copy(Ba).applyMatrix4(Cg),o)}}return t.isVector4&&(t.w=Ba.w),t.applyMatrix4(this.bindMatrixInverse)}},zo=class extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},Ji=class extends _n{constructor(e=null,t=1,n=1,s,r,o,a,l,c=qt,u=qt,h,d){super(null,o,a,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ig=new Ze,mv=new Ze,Qa=class i{constructor(e=[],t=[]){this.uuid=ss(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){$e("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:mv;Ig.multiplyMatrices(a,t[r]),Ig.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new Ji(t,e,e,ri,hi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&($e("Skeleton: No bone found with UUID:",r),o=new zo),this.bones.push(o),this.boneInverses.push(new Ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Cs=class extends Vt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Eo=new Ze,Lg=new Ze,Jc=[],Dg=new Jt,gv=new Ze,za=new je,Ha=new ni,nn=class extends je{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gv)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Eo),Dg.copy(e.boundingBox).applyMatrix4(Eo),this.boundingBox.union(Dg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Eo),Ha.copy(e.boundingSphere).applyMatrix4(Eo),this.boundingSphere.union(Ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(za.geometry=this.geometry,za.material=this.material,za.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ha.copy(this.boundingSphere),Ha.applyMatrix4(n),e.ray.intersectsSphere(Ha)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Eo),Lg.multiplyMatrices(n,Eo),za.matrixWorld=Lg,za.raycast(e,Jc);for(let o=0,a=Jc.length;o<a;o++){let l=Jc[o];l.instanceId=r,l.object=this,t.push(l)}Jc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ji(new Float32Array(s*this.count),s,this.count,ku,hi));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Cr=new ni,xv=new Ke(.5,.5),jc=new F,hr=class{constructor(e=new Ni,t=new Ni,n=new Ni,s=new Ni,r=new Ni,o=new Ni){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_i,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],y=r[12],w=r[13],M=r[14],E=r[15];if(s[0].setComponents(c-o,f-u,g-p,E-y).normalize(),s[1].setComponents(c+o,f+u,g+p,E+y).normalize(),s[2].setComponents(c+a,f+h,g+_,E+w).normalize(),s[3].setComponents(c-a,f-h,g-_,E-w).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,g-m,E-M).normalize();else if(s[4].setComponents(c-l,f-d,g-m,E-M).normalize(),t===_i)s[5].setComponents(c+l,f+d,g+m,E+M).normalize();else if(t===Io)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){Cr.center.set(0,0,0);let t=xv.distanceTo(e.center);return Cr.radius=.7071067811865476+t,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(jc.x=s.normal.x>0?e.max.x:e.min.x,jc.y=s.normal.y>0?e.max.y:e.min.y,jc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ng=new Ze,xu=class i{constructor(){this.coordinateSystem=_i,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ng.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new hr),n[s].setFromProjectionMatrix(Ng,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new hr),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Or=class extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},_u=new F,yu=new F,Ug=new Ze,ka=new ur,Qc=new ni,tf=new F,Og=new F,Fr=class extends mt{constructor(e=new Ut,t=new Or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)_u.fromBufferAttribute(t,s-1),yu.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=_u.distanceTo(yu);e.setAttribute("lineDistance",new It(n,1))}else $e("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qc.copy(n.boundingSphere),Qc.applyMatrix4(s),Qc.radius+=r,e.ray.intersectsSphere(Qc)===!1)return;Ug.copy(s).invert(),ka.copy(e.ray).applyMatrix4(Ug);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=u.getX(_),y=u.getX(_+1),w=eu(this,e,ka,l,g,y,_);w&&t.push(w)}if(this.isLineLoop){let _=u.getX(p-1),m=u.getX(f),g=eu(this,e,ka,l,_,m,p-1);g&&t.push(g)}}else{let f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){let g=eu(this,e,ka,l,_,_+1,_);g&&t.push(g)}if(this.isLineLoop){let _=eu(this,e,ka,l,p-1,f,p-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function eu(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(_u.fromBufferAttribute(a,s),yu.fromBufferAttribute(a,r),t.distanceSqToSegment(_u,yu,tf,Og)>n)return;tf.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(tf);if(!(c<e.near||c>e.far))return{distance:c,point:Og.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Fg=new F,Bg=new F,el=class extends Fr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Fg.fromBufferAttribute(t,s),Bg.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Fg.distanceTo(Bg);e.setAttribute("lineDistance",new It(n,1))}else $e("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Br=class extends Fr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ho=class extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},zg=new Ze,uf=new ur,tu=new ni,nu=new F,tl=class extends mt{constructor(e=new Ut,t=new Ho){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(s),tu.radius+=r,e.ray.intersectsSphere(tu)===!1)return;zg.copy(s).invert(),uf.copy(e.ray).applyMatrix4(zg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=d,_=f;p<_;p++){let m=c.getX(p);nu.fromBufferAttribute(h,m),Hg(nu,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let p=d,_=f;p<_;p++)nu.fromBufferAttribute(h,p),Hg(nu,p,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Hg(i,e,t,n,s,r,o){let a=uf.distanceSqToPoint(i);if(a<t){let l=new F;uf.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var nl=class extends _n{constructor(e=[],t=Xr,n,s,r,o,a,l,c,u){super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ji=class extends _n{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Oi=class extends _n{constructor(e,t,n=zi,s,r,o,a=qt,l=qt,c,u=Rs,h=1){if(u!==Rs&&u!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new No(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},il=class extends Oi{constructor(e,t=zi,n=Xr,s,r,o=qt,a=qt,l,c=Rs){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},sl=class extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},un=class i extends Ut{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,f=0;p("z","y","x",-1,-1,n,t,e,o,r,0),p("z","y","x",1,-1,n,t,-e,o,r,1),p("x","z","y",1,1,e,n,t,s,o,2),p("x","z","y",1,-1,e,n,-t,s,o,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function p(_,m,g,y,w,M,E,T,x,b,L){let A=M/x,N=E/b,O=M/2,X=E/2,D=T/2,Y=x+1,j=b+1,K=0,ce=0,z=new F;for(let J=0;J<j;J++){let re=J*N-X;for(let _e=0;_e<Y;_e++){let Ee=_e*A-O;z[_]=Ee*y,z[m]=re*w,z[g]=D,c.push(z.x,z.y,z.z),z[_]=0,z[m]=0,z[g]=T>0?1:-1,u.push(z.x,z.y,z.z),h.push(_e/x),h.push(1-J/b),K+=1}}for(let J=0;J<b;J++)for(let re=0;re<x;re++){let _e=d+re+Y*J,Ee=d+re+Y*(J+1),ie=d+(re+1)+Y*(J+1),xe=d+(re+1)+Y*J;l.push(_e,Ee,xe),l.push(Ee,ie,xe),ce+=6}a.addGroup(f,ce,L),f+=ce,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rl=class i extends Ut{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new F,u=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){let f=n+h/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new It(o,3)),this.setAttribute("normal",new It(a,3)),this.setAttribute("uv",new It(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fi=class i extends Ut{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],p=0,_=[],m=n/2,g=0;y(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new It(h,3)),this.setAttribute("normal",new It(d,3)),this.setAttribute("uv",new It(f,2));function y(){let M=new F,E=new F,T=0,x=(t-e)/n;for(let b=0;b<=r;b++){let L=[],A=b/r,N=A*(t-e)+e;for(let O=0;O<=s;O++){let X=O/s,D=X*l+a,Y=Math.sin(D),j=Math.cos(D);E.x=N*Y,E.y=-A*n+m,E.z=N*j,h.push(E.x,E.y,E.z),M.set(Y,x,j).normalize(),d.push(M.x,M.y,M.z),f.push(X,1-A),L.push(p++)}_.push(L)}for(let b=0;b<s;b++)for(let L=0;L<r;L++){let A=_[L][b],N=_[L+1][b],O=_[L+1][b+1],X=_[L][b+1];(e>0||L!==0)&&(u.push(A,N,X),T+=3),(t>0||L!==r-1)&&(u.push(N,O,X),T+=3)}c.addGroup(g,T,0),g+=T}function w(M){let E=p,T=new Ke,x=new F,b=0,L=M===!0?e:t,A=M===!0?1:-1;for(let O=1;O<=s;O++)h.push(0,m*A,0),d.push(0,A,0),f.push(.5,.5),p++;let N=p;for(let O=0;O<=s;O++){let D=O/s*l+a,Y=Math.cos(D),j=Math.sin(D);x.x=L*j,x.y=m*A,x.z=L*Y,h.push(x.x,x.y,x.z),d.push(0,A,0),T.x=Y*.5+.5,T.y=j*.5*A+.5,f.push(T.x,T.y),p++}for(let O=0;O<s;O++){let X=E+O,D=N+O;M===!0?u.push(D,D+1,X):u.push(D+1,D,X),b+=3}c.addGroup(g,b,M===!0?1:2),g+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ol=class i extends Fi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var vu=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$e("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(o-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new Ke:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,l=new Ze;for(let f=0;f<=e;f++){let p=f/e;s[f]=this.getTangentAt(p,new F)}r[0]=new F,o[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(pt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(pt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function kf(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let d=(o-r)/c-(a-r)/(c+u)+(a-o)/u,f=(a-o)/u-(l-o)/(u+h)+(l-a)/h;d*=u,f*=u,s(o,a,d,f)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var kg=new F,Gg=new F,nf=new kf,sf=new kf,rf=new kf,al=class extends vu{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Gg.subVectors(s[0],s[1]).add(s[0]),c=Gg);let h=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(kg.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=kg),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(h),f),_=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),nf.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,_,m),sf.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,_,m),rf.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,_,m)}else this.curveType==="catmullrom"&&(nf.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),sf.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),rf.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(nf.calc(l),sf.calc(l),rf.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};var Fn=class i extends Ut{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,d=t/l,f=[],p=[],_=[],m=[];for(let g=0;g<u;g++){let y=g*d-o;for(let w=0;w<c;w++){let M=w*h-r;p.push(M,-y,0),_.push(0,0,1),m.push(w/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let w=y+c*g,M=y+c*(g+1),E=y+1+c*(g+1),T=y+1+c*g;f.push(w,M,T),f.push(M,E,T)}this.setIndex(f),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ll=class i extends Ut{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new F,p=new Ke;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let g=r+m/n*o;f.x=h*Math.cos(g),f.y=h*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let _=0;_<s;_++){let m=_*(n+1);for(let g=0;g<n;g++){let y=g+m,w=y,M=y+n+1,E=y+n+2,T=y+1;a.push(w,M,T),a.push(M,E,T)}}this.setIndex(a),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Qi=class i extends Ut{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new F,d=new F,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){let y=[],w=g/n,M=o+w*a,E=e*Math.cos(M),T=Math.sqrt(e*e-E*E),x=0;g===0&&o===0?x=.5/t:g===n&&l===Math.PI&&(x=-.5/t);for(let b=0;b<=t;b++){let L=b/t,A=s+L*r;h.x=-T*Math.cos(A),h.y=E,h.z=T*Math.sin(A),p.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(L+x,1-w),y.push(c++)}u.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let w=u[g][y+1],M=u[g][y],E=u[g+1][y],T=u[g+1][y+1];(g!==0||o>0)&&f.push(w,M,T),(g!==n-1||l<Math.PI)&&f.push(M,E,T)}this.setIndex(f),this.setAttribute("position",new It(p,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var cl=class i extends Ut{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new F,f=new F,p=new F;for(let _=0;_<=n;_++){let m=o+_/n*a;for(let g=0;g<=s;g++){let y=g/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(f,d).normalize(),u.push(p.x,p.y,p.z),h.push(g/s),h.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let g=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,w=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(g,y,M),l.push(y,w,M)}this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function Yr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Vg(s))s.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Vg(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function zn(i){let e={};for(let t=0;t<i.length;t++){let n=Yr(i[t]);for(let s in n)e[s]=n[s]}return e}function Vg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function _v(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var bi={clone:Yr,merge:zn},yv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yv,this.fragmentShader=vv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yr(e.uniforms),this.uniformsGroups=_v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ke().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Bt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ze().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ko=class extends sn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ii=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yn=class extends ii{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Lr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ul=class extends On{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}},Bi=class extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=Nu,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mu=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Su=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var hl=class extends Or{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ga(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Mv(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Wg(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Sv(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}var es=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bu=class extends es{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Pr,endingEnd:Pr}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ir:r=e,a=2*t-n;break;case Xa:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ir:o=e,l=2*n-t;break;case Xa:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(s-t),_=p*p,m=_*p,g=-d*m+2*d*_-d*p,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*p+1,w=(-1-f)*m+(1.5+f)*_+.5*p,M=f*m-f*_;for(let E=0;E!==a;++E)r[E]=g*o[u+E]+y*o[c+E]+w*o[l+E]+M*o[h+E];return r}},dl=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}},Eu=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Tu=class extends es{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this.inTangents,h=this.outTangents;if(!u||!h){let p=(n-t)/(s-t),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}let d=a*2,f=e-1;for(let p=0;p!==a;++p){let _=o[c+p],m=o[l+p],g=f*d+p*2,y=h[g],w=h[g+1],M=e*d+p*2,E=u[M],T=u[M+1],x=Ev(n,t,y,E,s);r[p]=F0(x,_,w,T,m)}return r}};function F0(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bv(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ev(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=F0(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let l=bv(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var si=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ga(e.settings)&&(n.settings={inTangents:ar(e.settings.inTangents,Array),outTangents:ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Tu(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Dr:t=this.InterpolantFactoryMethodDiscrete;break;case Nr:t=this.InterpolantFactoryMethodLinear;break;case ru:t=this.InterpolantFactoryMethodSmooth;break;case cf:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return $e("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Dr;case this.InterpolantFactoryMethodLinear:return Nr;case this.InterpolantFactoryMethodSmooth:return ru;case this.InterpolantFactoryMethodBezier:return cf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ga(this.settings)&&(Xg(this.settings.inTangents,e),Xg(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ga(this.settings)&&(qg(this.settings.inTangents,e),qg(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){nt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){nt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Uy(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){nt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ru,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{let h=a*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){let _=t[h+p];if(_!==t[d+p]||_!==t[f+p]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ga(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xg(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function qg(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}si.prototype.ValueTypeName="";si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=Nr;var Ps=class extends si{constructor(e,t,n){super(e,t,n)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Dr;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};fl.prototype.ValueTypeName="color";var Is=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};Is.prototype.ValueTypeName="number";var wu=class extends es{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let u=c+a;c!==u;c+=4)Un.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ls=class extends si{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wu(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends si{constructor(e,t,n){super(e,t,n)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Dr;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends si{constructor(e,t,n,s){super(e,t,n,s)}};dr.prototype.ValueTypeName="vector";var zr=class{constructor(e="",t=-1,n=[],s=Mh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=ss(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(wv(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(si.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let u=Mv(l);l=Wg(l,1,u),c=Wg(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Is(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Tv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return fl;case"quaternion":return Ls;case"bool":case"boolean":return Ps;case"string":return Ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function wv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Tv(i.type);if(i.times===void 0){let n=[],s=[];Sv(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Ga(i.settings)&&(t.settings={inTangents:ar(i.settings.inTangents,Float32Array),outTangents:ar(i.settings.outTangents,Float32Array)}),t}var Ki={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yg(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yg(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yg(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Au=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},B0=new Au,ts=class{constructor(e){this.manager=e!==void 0?e:B0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};ts.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws={},hf=class extends Error{constructor(e,t){super(e),this.response=t}},Go=class extends ts{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ki.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ws[e]!==void 0){ws[e].push({onLoad:t,onProgress:n,onError:s});return}ws[e]=[],ws[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&$e("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=ws[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0,_=0,m=new ReadableStream({start(g){y();function y(){h.read().then(({done:w,value:M})=>{if(w)g.close();else{_+=M.byteLength;let E=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,x=u.length;T<x;T++){let b=u[T];b.onProgress&&b.onProgress(E)}g.enqueue(M),y()}},w=>{g.error(w)})}}});return new Response(m)}else throw new hf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Ki.add(`file:${e}`,c);let u=ws[e];delete ws[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=ws[e];if(u===void 0)throw this.manager.itemError(e),c;delete ws[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var To=new WeakMap,Ru=class extends ts{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let h=To.get(o);h===void 0&&(h=[],To.set(o,h)),h.push({onLoad:t,onError:s})}return o}let a=Lo("img");function l(){u(),t&&t(this);let h=To.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}To.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),Ki.remove(`image:${e}`);let d=To.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onError&&p.onError(h)}To.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ki.add(`image:${e}`,a),r.manager.itemStart(e),a.fetchPriority=this.priority,a.src=e,a}};var Ns=class extends ts{constructor(e){super(e)}load(e,t,n,s){let r=new _n,o=new Ru(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hr=class extends mt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Vo=class extends Hr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},of=new Ze,$g=new F,Kg=new F,Wo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Bn,this.map=null,this.mapPass=null,this.matrix=new Ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;$g.setFromMatrixPosition(e.matrixWorld),t.position.copy($g),Kg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){of.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(of,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Io||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},iu=new F,su=new Un,$i=new F,pl=class extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ze,this.projectionMatrix=new Ze,this.projectionMatrixInverse=new Ze,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(iu,su,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,su,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(iu,su,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(iu,su,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},or=new F,Zg=new Ke,Jg=new Ke,Pn=class extends pl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ur*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Va*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ur*2*Math.atan(Math.tan(Va*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){or.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(or.x,or.y).multiplyScalar(-e/or.z),or.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(or.x,or.y).multiplyScalar(-e/or.z)}getViewSize(e,t){return this.getViewBounds(e,Zg,Jg),t.subVectors(Jg,Zg)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Va*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},df=class extends Wo{constructor(){super(new Pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ur*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ml=class extends Hr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new df}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ff=class extends Wo{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}},kr=class extends Hr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ff}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},yi=class extends pl{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pf=class extends Wo{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends Hr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new pf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Us=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var af=new WeakMap,gl=class extends ts{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&$e("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&$e("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ki.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{af.has(o)===!0?(s&&s(af.get(o)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(c),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);return}let a={};a.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",a.headers=this.requestHeader,a.priority=this.priority,a.cache=this.cache,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ki.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),af.set(l,c),Ki.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ki.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var wo=-90,Ao=1,Xo=class extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(wo,Ao,e,t);s.layers=this.layers,this.add(s);let r=new Pn(wo,Ao,e,t);r.layers=this.layers,this.add(r);let o=new Pn(wo,Ao,e,t);o.layers=this.layers,this.add(o);let a=new Pn(wo,Ao,e,t);a.layers=this.layers,this.add(a);let l=new Pn(wo,Ao,e,t);l.layers=this.layers,this.add(l);let c=new Pn(wo,Ao,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===_i)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cu=class extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},xl=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Av.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Av(){this._document.hidden===!1&&this.reset()}var Pu=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Un.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Un.multiplyQuaternionsFlat(e,o,e,t,e,n),Un.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Vf="\\[\\]\\.:\\/",Rv=new RegExp("["+Vf+"]","g"),Wf="[^"+Vf+"]",Cv="[^"+Vf.replace("\\.","")+"]",Pv=/((?:WC+[\/:])*)/.source.replace("WC",Wf),Iv=/(WCOD+)?/.source.replace("WCOD",Cv),Lv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wf),Dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wf),Nv=new RegExp("^"+Pv+Iv+Lv+Dv+"$"),Uv=["material","materials","bones","map"],mf=class{constructor(e,t,n){let s=n||Gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rv,"")}static parseTrackName(e){let t=Nv.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Uv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){$e("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=mf;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Iu=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Pr,endingEnd:Pr};for(let c=0;c!==o;++c){let u=r[c].createInterpolant(null);a[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=M0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case b0:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulateAdditive(a);break;case Mh:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(o),c[u].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===S0;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===v0){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Ir,s.endingEnd=Ir):(e?s.endingStart=this.zeroSlopeAtStart?Ir:Pr:s.endingStart=Xa,t?s.endingEnd=this.zeroSlopeAtEnd?Ir:Pr:s.endingEnd=Xa)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Ov=new Float32Array(1),Gr=class extends Ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){let d=s[h],f=d.name,p=u[f];if(p!==void 0)++p.referenceCount,o[h]=p;else{if(p=o[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;p=new Pu(Gt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[h]=p}a[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new dl(new Float32Array(2),new Float32Array(2),1,Ov),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?zr.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Mh),l!==void 0){let h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let u=new Iu(this,o,t,n);return this._bindAction(u,c),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?zr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var jg=new Ze,_l=class{constructor(e,t,n=0,s=1/0){this.ray=new ur(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Uo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jg),this}intersectObject(e,t=!0,n=[]){return gf(e,this,n,t),n.sort(Qg),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)gf(e[s],this,n,t);return n.sort(Qg),n}};function Qg(i,e){return i.distance-e.distance}function gf(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)gf(r[o],e,t,!0)}}var Zf=class Zf{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Zf.prototype.isMatrix2=!0;var xf=Zf;function Xf(i,e,t,n){let s=Fv(n);switch(t){case Cf:return i*e;case ku:return i*e/s.components*s.byteLength;case Gu:return i*e/s.components*s.byteLength;case pr:return i*e*2/s.components*s.byteLength;case Vu:return i*e*2/s.components*s.byteLength;case Pf:return i*e*3/s.components*s.byteLength;case ri:return i*e*4/s.components*s.byteLength;case Wu:return i*e*4/s.components*s.byteLength;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pl:case Il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qu:case $u:return Math.max(i,16)*Math.max(e,8)/4;case Xu:case Yu:return Math.max(i,8)*Math.max(e,8)/2;case Ku:case Zu:case ju:case Qu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ju:case Ll:case eh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case th:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ih:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case oh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ah:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case uh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ph:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case mh:case gh:case xh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _h:case yh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dl:case vh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fv(i){switch(i){case Bn:case Tf:return{byteLength:1,components:1};case Zo:case wf:case fn:return{byteLength:2,components:1};case zu:case Hu:return{byteLength:2,components:4};case zi:case Bu:case hi:return{byteLength:4,components:1};case Af:case Rf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function ox(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zv(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,p)=>f.start-p.start);let d=0;for(let f=1;f<h.length;f++){let p=h[d],_=h[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,p=h.length;f<p;f++){let _=h[f];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kv=`#ifdef USE_ALPHAHASH
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
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qv=`#ifdef USE_AOMAP
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
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$v=`#ifdef USE_BATCHING
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
#endif`,Kv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qv=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cM=`#define PI 3.141592653589793
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
} // validated`,uM=`vec3 transformedNormal = objectNormal;
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
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IM=`#ifdef USE_ENVMAP
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
#endif`,LM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,FM=`uniform sampler2D dfgLUT;
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
}`,BM=`
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
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
#endif`,eS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tS=`#ifdef USE_MORPHTARGETS
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
#endif`,nS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lS=`#ifdef USE_NORMALMAP
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
#endif`,cS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_S=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ES=`float getShadowMask() {
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
}`,TS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wS=`#ifdef USE_SKINNING
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
#endif`,AS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,CS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DS=`#ifdef USE_TRANSMISSION
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
#endif`,NS=`#ifdef USE_TRANSMISSION
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
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HS=`uniform sampler2D t2D;
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
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`uniform float backgroundBlurriness;
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
}`,VS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`#include <common>
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
}`,qS=`#if DEPTH_PACKING == 3200
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
}`,YS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
}`,KS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`uniform float scale;
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
}`,jS=`uniform vec3 diffuse;
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
}`,QS=`#include <common>
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
}`,eb=`uniform vec3 diffuse;
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
}`,tb=`#define LAMBERT
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
}`,nb=`#define LAMBERT
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
}`,ib=`#define MATCAP
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
}`,sb=`#define MATCAP
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
}`,rb=`#define NORMAL
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
}`,ob=`#define NORMAL
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
}`,ab=`#define PHONG
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
}`,lb=`#define PHONG
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
}`,cb=`#define STANDARD
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
}`,ub=`#define STANDARD
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
}`,hb=`#define TOON
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
}`,db=`#define TOON
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
}`,fb=`uniform float size;
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
}`,pb=`uniform vec3 diffuse;
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
}`,mb=`#include <common>
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
}`,gb=`uniform vec3 color;
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
}`,xb=`uniform float rotation;
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
}`,_b=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Hv,alphahash_pars_fragment:kv,alphamap_fragment:Gv,alphamap_pars_fragment:Vv,alphatest_fragment:Wv,alphatest_pars_fragment:Xv,aomap_fragment:qv,aomap_pars_fragment:Yv,batching_pars_vertex:$v,batching_vertex:Kv,begin_vertex:Zv,beginnormal_vertex:Jv,bsdfs:jv,iridescence_fragment:Qv,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:sM,color_fragment:rM,color_pars_fragment:oM,color_pars_vertex:aM,color_vertex:lM,common:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:hM,displacementmap_vertex:dM,emissivemap_fragment:fM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:xM,envmap_common_pars_fragment:_M,envmap_pars_fragment:yM,envmap_pars_vertex:vM,envmap_physical_pars_fragment:IM,envmap_vertex:MM,fog_vertex:SM,fog_pars_vertex:bM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:wM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:CM,lights_pars_begin:PM,lights_toon_fragment:LM,lights_toon_pars_fragment:DM,lights_phong_fragment:NM,lights_phong_pars_fragment:UM,lights_physical_fragment:OM,lights_physical_pars_fragment:FM,lights_fragment_begin:BM,lights_fragment_maps:zM,lights_fragment_end:HM,lightprobes_pars_fragment:kM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:VM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:XM,map_fragment:qM,map_pars_fragment:YM,map_particle_fragment:$M,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:JM,morphinstance_vertex:jM,morphcolor_vertex:QM,morphnormal_vertex:eS,morphtarget_pars_vertex:tS,morphtarget_vertex:nS,normal_fragment_begin:iS,normal_fragment_maps:sS,normal_pars_fragment:rS,normal_pars_vertex:oS,normal_vertex:aS,normalmap_pars_fragment:lS,clearcoat_normal_fragment_begin:cS,clearcoat_normal_fragment_maps:uS,clearcoat_pars_fragment:hS,iridescence_pars_fragment:dS,opaque_fragment:fS,packing:pS,premultiplied_alpha_fragment:mS,project_vertex:gS,dithering_fragment:xS,dithering_pars_fragment:_S,roughnessmap_fragment:yS,roughnessmap_pars_fragment:vS,shadowmap_pars_fragment:MS,shadowmap_pars_vertex:SS,shadowmap_vertex:bS,shadowmask_pars_fragment:ES,skinbase_vertex:TS,skinning_pars_vertex:wS,skinning_vertex:AS,skinnormal_vertex:RS,specularmap_fragment:CS,specularmap_pars_fragment:PS,tonemapping_fragment:IS,tonemapping_pars_fragment:LS,transmission_fragment:DS,transmission_pars_fragment:NS,uv_pars_fragment:US,uv_pars_vertex:OS,uv_vertex:FS,worldpos_vertex:BS,background_vert:zS,background_frag:HS,backgroundCube_vert:kS,backgroundCube_frag:GS,cube_vert:VS,cube_frag:WS,depth_vert:XS,depth_frag:qS,distance_vert:YS,distance_frag:$S,equirect_vert:KS,equirect_frag:ZS,linedashed_vert:JS,linedashed_frag:jS,meshbasic_vert:QS,meshbasic_frag:eb,meshlambert_vert:tb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:sb,meshnormal_vert:rb,meshnormal_frag:ob,meshphong_vert:ab,meshphong_frag:lb,meshphysical_vert:cb,meshphysical_frag:ub,meshtoon_vert:hb,meshtoon_frag:db,points_vert:fb,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:xb,sprite_frag:_b},Pe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},os={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new De(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};os.physical={uniforms:zn([os.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};var bh={r:0,b:0,g:0},yb=new Ze,ax=new st;ax.set(-1,0,0,0,1,0,0,0,1);function vb(i,e,t,n,s,r){let o=new De(0),a=s===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function p(y){let w=!1,M=f(y);M===null?m(o,a):M&&M.isColor&&(m(M,1),w=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,w){let M=f(w);M&&M.isCubeTexture?(c===void 0&&(c=new je(new un(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:Yr(os.backgroundCube.uniforms),vertexShader:os.backgroundCube.vertexShader,fragmentShader:os.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yb.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(ax),c.material.toneMapped=lt.getTransfer(M.colorSpace)!==Lt,(u!==M||h!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new je(new Fn(2,2),new sn({name:"BackgroundMaterial",uniforms:Yr(os.background.uniforms),vertexShader:os.background.vertexShader,fragmentShader:os.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=lt.getTransfer(M.colorSpace)!==Lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||h!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=M,h=M.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(bh,Gf(i)),t.buffers.color.setClear(bh.r,bh.g,bh.b,w,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,w=1){o.set(y),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:p,addToRenderList:_,dispose:g}}function Mb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(N,O,X,D,Y){let j=!1,K=h(N,D,X,O);r!==K&&(r=K,c(r.object)),j=f(N,D,X,Y),j&&p(N,D,X,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,M(N,O,X,D),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function u(N){return i.deleteVertexArray(N)}function h(N,O,X,D){let Y=D.wireframe===!0,j=n[O.id];j===void 0&&(j={},n[O.id]=j);let K=N.isInstancedMesh===!0?N.id:0,ce=j[K];ce===void 0&&(ce={},j[K]=ce);let z=ce[X.id];z===void 0&&(z={},ce[X.id]=z);let J=z[Y];return J===void 0&&(J=d(l()),z[Y]=J),J}function d(N){let O=[],X=[],D=[];for(let Y=0;Y<t;Y++)O[Y]=0,X[Y]=0,D[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:D,object:N,attributes:{},index:null}}function f(N,O,X,D){let Y=r.attributes,j=O.attributes,K=0,ce=X.getAttributes();for(let z in ce)if(ce[z].location>=0){let re=Y[z],_e=j[z];if(_e===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),re===void 0||re.attribute!==_e||_e&&re.data!==_e.data)return!0;K++}return r.attributesNum!==K||r.index!==D}function p(N,O,X,D){let Y={},j=O.attributes,K=0,ce=X.getAttributes();for(let z in ce)if(ce[z].location>=0){let re=j[z];re===void 0&&(z==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),z==="instanceColor"&&N.instanceColor&&(re=N.instanceColor));let _e={};_e.attribute=re,re&&re.data&&(_e.data=re.data),Y[z]=_e,K++}r.attributes=Y,r.attributesNum=K,r.index=D}function _(){let N=r.newAttributes;for(let O=0,X=N.length;O<X;O++)N[O]=0}function m(N){g(N,0)}function g(N,O){let X=r.newAttributes,D=r.enabledAttributes,Y=r.attributeDivisors;X[N]=1,D[N]===0&&(i.enableVertexAttribArray(N),D[N]=1),Y[N]!==O&&(i.vertexAttribDivisor(N,O),Y[N]=O)}function y(){let N=r.newAttributes,O=r.enabledAttributes;for(let X=0,D=O.length;X<D;X++)O[X]!==N[X]&&(i.disableVertexAttribArray(X),O[X]=0)}function w(N,O,X,D,Y,j,K){K===!0?i.vertexAttribIPointer(N,O,X,Y,j):i.vertexAttribPointer(N,O,X,D,Y,j)}function M(N,O,X,D){_();let Y=D.attributes,j=X.getAttributes(),K=O.defaultAttributeValues;for(let ce in j){let z=j[ce];if(z.location>=0){let J=Y[ce];if(J===void 0&&(ce==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),ce==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let re=J.normalized,_e=J.itemSize,Ee=e.get(J);if(Ee===void 0)continue;let ie=Ee.buffer,xe=Ee.type,Se=Ee.bytesPerElement,ge=xe===i.INT||xe===i.UNSIGNED_INT||J.gpuType===Bu;if(J.isInterleavedBufferAttribute){let de=J.data,R=de.isInterleavedBuffer===!0?de.stride:de.itemSize,le=J.offset;if(de.isInstancedInterleavedBuffer||de.isInstancedBufferAttribute){for(let pe=0;pe<z.locationSize;pe++)g(z.location+pe,de.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<z.locationSize;pe++)m(z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let pe=0;pe<z.locationSize;pe++)w(z.location+pe,_e/z.locationSize,xe,re,R*Se,(le+_e/z.locationSize*pe)*Se,ge)}else{if(J.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)g(z.location+de,J.meshPerAttribute);N.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let de=0;de<z.locationSize;de++)m(z.location+de);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let de=0;de<z.locationSize;de++)w(z.location+de,_e/z.locationSize,xe,re,_e*Se,_e/z.locationSize*de*Se,ge)}}else if(K!==void 0){let re=K[ce];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(z.location,re);break;case 3:i.vertexAttrib3fv(z.location,re);break;case 4:i.vertexAttrib4fv(z.location,re);break;default:i.vertexAttrib1fv(z.location,re)}}}}y()}function E(){L();for(let N in n){let O=n[N];for(let X in O){let D=O[X];for(let Y in D){let j=D[Y];for(let K in j)u(j[K].object),delete j[K];delete D[Y]}}delete n[N]}}function T(N){if(n[N.id]===void 0)return;let O=n[N.id];for(let X in O){let D=O[X];for(let Y in D){let j=D[Y];for(let K in j)u(j[K].object),delete j[K];delete D[Y]}}delete n[N.id]}function x(N){for(let O in n){let X=n[O];for(let D in X){let Y=X[D];if(Y[N.id]===void 0)continue;let j=Y[N.id];for(let K in j)u(j[K].object),delete j[K];delete Y[N.id]}}}function b(N){for(let O in n){let X=n[O],D=N.isInstancedMesh===!0?N.id:0,Y=X[D];if(Y!==void 0){for(let j in Y){let K=Y[j];for(let ce in K)u(K[ce].object),delete K[ce];delete Y[j]}delete X[D],Object.keys(X).length===0&&delete n[O]}}}function L(){A(),o=!0,r!==s&&(r=s,c(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:A,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function Sb(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function bb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(x){return!(x!==ri&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===fn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Bn&&x!==hi&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:E,samples:T}}function Eb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Ni,a=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let p=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!m)r?u(null):c();else{let y=r?0:n,w=y*4,M=g.clippingState||null;l.value=M,M=u(p,d,w,f);for(let E=0;E!==w;++E)M[E]=t[E];g.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=l.value,p!==!0||m===null){let g=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let w=0,M=f;w!==_;++w,M+=4)o.copy(h[w]).applyMatrix4(y,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Fl=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new nl(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:Yr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:wn});r.uniforms.tEquirect.value=t;let o=new je(s,r),a=t.minFilter;return t.minFilter===Mi&&(t.minFilter=xn),new Xo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},z0=256,Tb=3,wb=20,lx=256,cx=16,Ab=3,Rb=new F,Cb=new De,ea=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xo(1,10,null),this._boxMesh=new je(new un(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Rb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Cb));let m=new Xo(n,s,u);return m.position.copy(a),m.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=p,e.background=_,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(z0,Bf(e))}_fromTexture(e,t){e.mapping===Xr||e.mapping===$o?this._setSize(e.image.length===0?z0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=H0(e,!1,!1),n=Math.log2(e)-Tb;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=H0(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Xr||e.mapping===$o?(this._cubemapMaterial===null&&(this._cubemapMaterial=G0()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=k0()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Pb(),this._integrationMaterial=Ib());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/cx);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Ab)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let l=a>0?Math.log2(t)+.5*Math.log2(6/(lx*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=l,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Lb());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function H0(i,e,t){return new Fl(i,{minFilter:Mi,generateMipmaps:e,type:fn,colorSpace:qn,depthBuffer:t})}function zl(i,e,t){return new sn({name:i,uniforms:e,vertexShader:ht.cube_vert,fragmentShader:t,side:In,blending:wn,depthTest:!1,depthWrite:!1})}function Pb(){return zl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${lx}u

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
	`)}function Ib(){return zl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:cx}},`

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
	`)}function Lb(){return zl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${wb}
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
	`)}function k0(){return zl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function G0(){return zl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Db(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?o(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Uu||f===Ou)if(e.has(d)){let p=e.get(d).texture;return a(p,d.mapping)}else{let p=d.image;if(p&&p.height>0){let _=new Fl(p.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,p=f===Uu||f===Ou,_=f===Xr||f===$o;if(p||_){let m=t.get(d),g=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new ea(i)),m=p?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return p&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new ea(i)),m=p?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,f){return f===Uu?d.mapping=Xr:f===Ou&&(d.mapping=$o),d}function l(d){let f=0,p=6;for(let _=0;_<p;_++)d[_]!==void 0&&f++;return f===p}function c(d){let f=d.target;f.removeEventListener("dispose",c);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Nb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Lr("WebGLRenderer: "+n+" extension not supported."),s}}}function Ub(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(p=>delete s[p]);function a(p){l(p.target)}function l(p){p.index!==null&&e.remove(p.index);for(let m in p.attributes)e.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete s[p.id],o.unregister(p);let _=r.get(p);_&&(e.remove(_),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function c(p,_){return s[_.id]!==void 0||(_.addEventListener("dispose",a),s[_.id]=new WeakRef(_),o.register(_,_.id,_),t.memory.geometries++),_}function u(p){let _=p.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function h(p){let _=p.index,m=p.attributes.position,g=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,w=m.count>=65535?Ja:Za,M=new w(Math.ceil(y/3)*6,1),E=M.array;if(_!==null){let x=_.array;g=_.version;for(let b=0,L=0;b<y;b+=3){let A=x[b+0],N=x[b+1],O=x[b+2];E[L++]=A,E[L++]=N,E[L++]=N,E[L++]=O,E[L++]=O,E[L++]=A}}else{g=m.version;for(let x=0,b=0;x<y;x+=3){let L=x+0,A=x+1,N=x+2;E[b++]=L,E[b++]=A,E[b++]=A,E[b++]=N,E[b++]=N,E[b++]=L}}M.version=g;let T=r.get(p);T&&e.remove(T),r.set(p,M)}function d(p){let _=r.get(p);if(_){let m=p.index;m!==null&&_.version<m.version&&h(p)}else h(p);return r.get(p)}function f(){for(let p in s){let _=s[p].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Ob(i,e,t){let n;function s(h){n=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*o),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*o,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Fb(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Bb(i,e,t){let n=new WeakMap,s=new Bt;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let L=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],w=0;f===!0&&(w=1),p===!0&&(w=2),_===!0&&(w=3);let M=a.attributes.position.count*w,E=1;M>e.maxTextureSize&&(E=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let T=new Float32Array(M*E*4*h),x=new $a(T,M,E,h);x.type=hi,x.needsUpdate=!0;let b=w*4;for(let A=0;A<h;A++){let N=m[A],O=g[A],X=y[A],D=M*E*4*A;for(let Y=0;Y<N.count;Y++){let j=Y*b;f===!0&&(s.fromBufferAttribute(N,Y),T[D+j+0]=s.x,T[D+j+1]=s.y,T[D+j+2]=s.z,T[D+j+3]=0),p===!0&&(s.fromBufferAttribute(O,Y),T[D+j+4]=s.x,T[D+j+5]=s.y,T[D+j+6]=s.z,T[D+j+7]=0),_===!0&&(s.fromBufferAttribute(X,Y),T[D+j+8]=s.x,T[D+j+9]=s.y,T[D+j+10]=s.z,T[D+j+11]=X.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new Ke(M,E)},n.set(a,d),a.addEventListener("dispose",L)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zb(i,e,t,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:o,dispose:a}}var Hb={[Ml]:"LINEAR_TONE_MAPPING",[Sl]:"REINHARD_TONE_MAPPING",[bl]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[wl]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function kb(i,e,t,n,s,r){let o=new an(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,u=new Ut;u.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new It([0,2,0,0,2,0],2));let h=new ko({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new je(u,h),f=new yi(-1,1,1,-1,0,1),p=null,_=null,m=!1,g,y=null,w=[],M=!1;this.setSize=function(E,T){o.setSize(E,T),a!==null&&a.setSize(E,T),l!==null&&l.setSize(E,T);for(let x=0;x<w.length;x++){let b=w[x];b.setSize&&b.setSize(E,T)}},this.setEffects=function(E){w=E,M=w.length>0&&w[0].isRenderPass===!0;let T=o.width,x=o.height;w.length>0&&a===null&&(a=new an(T,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}),l=new an(T,x,{type:fn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&w.some(L=>L.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Oi(T,x),r===!0&&(c.format=Hi,c.type=Os)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let L=0;L<w.length;L++){let A=w[L];A.setSize&&A.setSize(T,x),b&&A.needsDepthTexture===!0&&A.setDepthTexture&&A.setDepthTexture(c)}},this.begin=function(E,T){if(m||E.toneMapping===is&&w.length===0)return!1;if(y=T,T!==null){let x=T.width,b=T.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return M===!1&&E.setRenderTarget(o),g=E.toneMapping,E.toneMapping=is,!0},this.hasRenderPass=function(){return M},this.end=function(E,T){E.toneMapping=g,m=!0;let x=o,b=a;for(let L=0;L<w.length;L++){let A=w[L];A.enabled!==!1&&(A.render(E,b,x,T),A.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==E.outputColorSpace||_!==E.toneMapping){p=E.outputColorSpace,_=E.toneMapping,h.defines={},lt.getTransfer(p)===Lt&&(h.defines.SRGB_TRANSFER="");let L=Hb[_];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=x.texture,E.setRenderTarget(y),E.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var ux=new _n,hx=new Oi(1,1),dx=new il(1),fx=new $a,px=new gu,mx=new nl,V0=[],W0=[],X0=new Float32Array(16),q0=new Float32Array(9),Y0=new Float32Array(4);function ta(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=V0[s];if(r===void 0&&(r=new Float32Array(s),V0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function yn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Th(i,e){let t=W0[e];t===void 0&&(t=new Int32Array(e),W0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function Xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function qb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;Y0.set(n),i.uniformMatrix2fv(this.addr,!1,Y0),vn(t,n)}}function Yb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;q0.set(n),i.uniformMatrix3fv(this.addr,!1,q0),vn(t,n)}}function $b(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(yn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(yn(t,n))return;X0.set(n),i.uniformMatrix4fv(this.addr,!1,X0),vn(t,n)}}function Kb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function Jb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function jb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function Qb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function eE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function tE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function nE(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function wh(i){return i.version===0&&(i.compareFunction=Nf,i.needsUpdate=!0),i}function iE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=wh(hx):r=ux,t.setTexture2D(e||r,s)}function sE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||px,s)}function rE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=wh(dx):r=mx,t.setTextureCube(e||r,s)}function oE(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||fx,s)}function aE(i){switch(i){case 5126:return Gb;case 35664:return Vb;case 35665:return Wb;case 35666:return Xb;case 35674:return qb;case 35675:return Yb;case 35676:return $b;case 5124:case 35670:return Kb;case 35667:case 35671:return Zb;case 35668:case 35672:return Jb;case 35669:case 35673:return jb;case 5125:return Qb;case 36294:return eE;case 36295:return tE;case 36296:return nE;case 35678:case 36198:case 36298:case 36306:case 35682:return iE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return oE}}function lE(i,e){i.uniform1fv(this.addr,e)}function cE(i,e){let t=ta(e,this.size,2);i.uniform2fv(this.addr,t)}function uE(i,e){let t=ta(e,this.size,3);i.uniform3fv(this.addr,t)}function hE(i,e){let t=ta(e,this.size,4);i.uniform4fv(this.addr,t)}function dE(i,e){let t=ta(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fE(i,e){let t=ta(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function pE(i,e){let t=ta(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mE(i,e){i.uniform1iv(this.addr,e)}function gE(i,e){i.uniform2iv(this.addr,e)}function xE(i,e){i.uniform3iv(this.addr,e)}function _E(i,e){i.uniform4iv(this.addr,e)}function yE(i,e){i.uniform1uiv(this.addr,e)}function vE(i,e){i.uniform2uiv(this.addr,e)}function ME(i,e){i.uniform3uiv(this.addr,e)}function SE(i,e){i.uniform4uiv(this.addr,e)}function bE(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=wh(hx):o=ux;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function EE(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||px,r[o])}function TE(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=wh(dx):o=mx;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function wE(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);yn(n,r)||(i.uniform1iv(this.addr,r),vn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||fx,r[o])}function AE(i){switch(i){case 5126:return lE;case 35664:return cE;case 35665:return uE;case 35666:return hE;case 35674:return dE;case 35675:return fE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return xE;case 35669:case 35673:return _E;case 5125:return yE;case 36294:return vE;case 36295:return ME;case 36296:return SE;case 35678:case 36198:case 36298:case 36306:case 35682:return bE;case 35679:case 36299:case 36307:return EE;case 35680:case 36300:case 36308:case 36293:return TE;case 36289:case 36303:case 36311:case 36292:return wE}}var Qf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=aE(t.type)}},ep=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AE(t.type)}},tp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Jf=/(\w+)(\])?(\[|\.)?/g;function $0(i,e){i.seq.push(e),i.map[e.id]=e}function RE(i,e,t){let n=i.name,s=n.length;for(Jf.lastIndex=0;;){let r=Jf.exec(n),o=Jf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$0(t,c===void 0?new Qf(a,i,e):new ep(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new tp(a),$0(t,h)),t=h}}}var Qo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);RE(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function K0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var CE=37297,PE=0;function IE(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Z0=new st;function LE(i){lt._getMatrix(Z0,lt.workingColorSpace,i);let e=`mat3( ${Z0.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case qa:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function J0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+IE(i.getShaderSource(e),a)}else return r}function DE(i,e){let t=LE(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var NE={[Ml]:"Linear",[Sl]:"Reinhard",[bl]:"Cineon",[El]:"ACESFilmic",[wl]:"AgX",[Al]:"Neutral",[Tl]:"Custom"};function UE(i,e){let t=NE[e];return t===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eh=new F;function OE(){lt.getLuminanceCoefficients(Eh);let i=Eh.x.toFixed(4),e=Eh.y.toFixed(4),t=Eh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FE(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ol).join(`
`)}function BE(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zE(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Ol(i){return i!==""}function j0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Q0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var HE=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(i){return i.replace(HE,kE)}function kE(i,e){let t=ht[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return np(t)}var GE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ex(i){return i.replace(GE,VE)}function VE(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var WE={[Vr]:"SHADOWMAP_TYPE_PCF",[qo]:"SHADOWMAP_TYPE_VSM"};function XE(i){return WE[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var qE={[$o]:"ENVMAP_MODE_REFRACTION"};function YE(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":qE[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $E={[Nu]:"ENVMAP_BLENDING_MULTIPLY",[x0]:"ENVMAP_BLENDING_MIX",[_0]:"ENVMAP_BLENDING_ADD"};function KE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$E[i.combine]||"ENVMAP_BLENDING_NONE"}function ZE(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=XE(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=YE(t),h=KE(t),d=FE(t),f=BE(r),p=s.createProgram(),_,m,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ol).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ol).join(`
`),m.length>0&&(m+=`
`)):(_=[tx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ol).join(`
`),m=[tx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==is?"#define TONE_MAPPING":"",t.toneMapping!==is?ht.tonemapping_pars_fragment:"",t.toneMapping!==is?UE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,DE("linearToOutputTexel",t.outputColorSpace),OE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ol).join(`
`)),o=np(o),o=j0(o,t),o=Q0(o,t),a=np(a),a=j0(a,t),a=Q0(a,t),o=ex(o),a=ex(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Of?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Of?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=g+_+o,w=g+m+a,M=K0(s,s.VERTEX_SHADER,y),E=K0(s,s.FRAGMENT_SHADER,w);s.attachShader(p,M),s.attachShader(p,E),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function T(A){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(p)||"",O=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(E)||"",D=N.trim(),Y=O.trim(),j=X.trim(),K=!0,ce=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,M,E);else{let z=J0(s,M,"vertex"),J=J0(s,E,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+z+`
`+J)}else D!==""?$e("WebGLProgram: Program Info Log:",D):(Y===""||j==="")&&(ce=!1);ce&&(A.diagnostics={runnable:K,programLog:D,vertexShader:{log:Y,prefix:_},fragmentShader:{log:j,prefix:m}})}s.deleteShader(M),s.deleteShader(E),x=new Qo(s,p),b=zE(s,p)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=s.getProgramParameter(p,CE)),L},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PE++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=E,this}var JE=0,ip=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sp(e),t.set(e,n)),n}},sp=class{constructor(e){this.id=JE++,this.code=e,this.usedTimes=0}};function jE(i){return i===pr||i===Ll||i===Dl}function QE(i,e,t,n,s,r){let o=new Uo,a=new ip,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,L,A,N,O){let X=A.fog,D=N.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,j=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,K=e.get(x.envMap||Y,j),ce=d[x.type],z=n.precision;x.precision!==null&&(z=n.getMaxPrecision(x.precision),z!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",z,"instead."));let J=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,re=J!==void 0?J.length:0,_e=0;D.morphAttributes.position!==void 0&&(_e=1),D.morphAttributes.normal!==void 0&&(_e=2),D.morphAttributes.color!==void 0&&(_e=3);let Ee,ie,xe,Se;if(ce){let Te=os[ce];Ee=Te.vertexShader,ie=Te.fragmentShader}else{Ee=x.vertexShader,ie=x.fragmentShader;let Te=a.getVertexShaderStage(x),wt=a.getFragmentShaderStage(x);a.update(x,Te,wt),xe=Te.id,Se=wt.id}let ge=i.getRenderTarget(),de=i.state.buffers.depth.getReversed(),R=N.isInstancedMesh===!0,le=N.isBatchedMesh===!0,pe=!!x.map,Ie=!!x.matcap,ke=!!K,Ue=ke&&K.isPMREMTexture===!0,Xe=!!x.aoMap,Ye=!!x.lightMap,Je=!!x.bumpMap&&x.wireframe===!1,Ne=!!x.normalMap,ee=!!x.displacementMap,Le=!!x.emissiveMap,Mt=!!x.metalnessMap,Ct=!!x.roughnessMap,Xt=x.anisotropy>0,G=x.clearcoat>0,bt=x.diffuseRoughness>0,rt=x.dispersion>0,dt=x.retroreflectivity>0,ve=x.iridescence>0,St=x.sheen>0,Fe=x.transmission>0,Ve=Xt&&!!x.anisotropyMap,C=G&&!!x.clearcoatMap,v=G&&!!x.clearcoatNormalMap,q=G&&!!x.clearcoatRoughnessMap,me=bt&&!!x.diffuseRoughnessMap,P=ve&&!!x.iridescenceMap,H=ve&&!!x.iridescenceThicknessMap,W=St&&!!x.sheenColorMap,U=St&&!!x.sheenRoughnessMap,k=!!x.specularMap,te=!!x.specularColorMap,I=!!x.specularIntensityMap,ne=Fe&&!!x.transmissionMap,Z=Fe&&!!x.thicknessMap,fe=!!x.gradientMap,he=!!x.alphaMap,Me=x.alphaTest>0,Ge=!!x.alphaHash,tt=!!x.extensions,ye=is;x.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(ye=i.toneMapping);let qe=Ue?K.isCompressedCubeTexture?K.image[0].mipmaps:K.mipmaps:null,et={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:Ee,fragmentShader:ie,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:Se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:z,batching:le,batchingColor:le&&N._colorsTexture!==null,instancing:R,instancingColor:R&&N.instanceColor!==null,instancingMorph:R&&N.morphTexture!==null,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:lt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:pe,matcap:Ie,envMap:ke,envMapMode:ke&&K.mapping,envMapPMREM:Ue,envMapMaxLod:Ue?qe.length-1:null,envMapSize:Ue?qe[0].width:null,aoMap:Xe,lightMap:Ye,bumpMap:Je,normalMap:Ne,displacementMap:ee,emissiveMap:Le,normalMapObjectSpace:Ne&&x.normalMapType===T0,normalMapTangentSpace:Ne&&x.normalMapType===jo,packedNormalMap:Ne&&x.normalMapType===jo&&jE(x.normalMap.format),metalnessMap:Mt,roughnessMap:Ct,anisotropy:Xt,anisotropyMap:Ve,clearcoat:G,clearcoatMap:C,clearcoatNormalMap:v,clearcoatRoughnessMap:q,diffuseRoughness:bt,diffuseRoughnessMap:me,dispersion:rt,retroreflection:dt,iridescence:ve,iridescenceMap:P,iridescenceThicknessMap:H,sheen:St,sheenColorMap:W,sheenRoughnessMap:U,specularMap:k,specularColorMap:te,specularIntensityMap:I,transmission:Fe,transmissionMap:ne,thicknessMap:Z,gradientMap:fe,opaque:x.transparent===!1&&x.blending===Yo&&x.alphaToCoverage===!1,alphaMap:he,alphaTest:Me,alphaHash:Ge,combine:x.combine,mapUv:pe&&f(x.map.channel),aoMapUv:Xe&&f(x.aoMap.channel),lightMapUv:Ye&&f(x.lightMap.channel),bumpMapUv:Je&&f(x.bumpMap.channel),normalMapUv:Ne&&f(x.normalMap.channel),displacementMapUv:ee&&f(x.displacementMap.channel),emissiveMapUv:Le&&f(x.emissiveMap.channel),metalnessMapUv:Mt&&f(x.metalnessMap.channel),roughnessMapUv:Ct&&f(x.roughnessMap.channel),anisotropyMapUv:Ve&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:v&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:P&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:H&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:W&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:U&&f(x.sheenRoughnessMap.channel),specularMapUv:k&&f(x.specularMap.channel),specularColorMapUv:te&&f(x.specularColorMap.channel),specularIntensityMapUv:I&&f(x.specularIntensityMap.channel),transmissionMapUv:ne&&f(x.transmissionMap.channel),thicknessMapUv:Z&&f(x.thicknessMap.channel),alphaMapUv:he&&f(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ne||Xt),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(pe||he),fog:!!X,useFog:x.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&Ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:de,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:_e,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:O.filter(Te=>Te.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:pe&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===Lt,decodeVideoTextureEmissive:Le&&x.emissiveMap.isVideoTexture===!0&&lt.getTransfer(x.emissiveMap.colorSpace)===Lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===In,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:tt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&x.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=l.has(1),et.vertexUv2s=l.has(2),et.vertexUv3s=l.has(3),l.clear(),et}function _(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(m(b,x),g(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function g(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){let b=d[x.type],L;if(b){let A=os[b];L=bi.clone(A.uniforms)}else L=x.uniforms;return L}function w(x,b){let L=u.get(b);return L!==void 0?++L.usedTimes:(L=new ZE(i,b,x,s),c.push(L),u.set(b,L)),L}function M(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function T(){a.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:T}}function e1(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function t1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ix(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function a(d,f,p,_,m,g){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:p,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:g},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=p,y.materialVariant=o(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=g),e++,y}function l(d,f,p,_,m,g,y){y.reversedDepth===!0&&(m=-m);let w=a(d,f,p,_,m,g);p.transmission>0?n.push(w):p.transparent===!0?s.push(w):t.push(w)}function c(d,f,p,_,m,g){let y=a(d,f,p,_,m,g);p.transmission>0?n.unshift(y):p.transparent===!0?s.unshift(y):t.unshift(y)}function u(d,f){t.length>1&&t.sort(d||t1),n.length>1&&n.sort(f||nx),s.length>1&&s.sort(f||nx)}function h(){for(let d=e,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function n1(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new ix,i.set(n,[o])):s>=r.length?(o=new ix,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function i1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new De};break;case"SpotLight":t={position:new F,direction:new F,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function s1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var r1=0;function o1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function a1(i){let e=new i1,t=s1(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new Ze,o=new Ze;function a(c){let u=0,h=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,y=0,w=0,M=0,E=0,T=0,x=0,b=0,L=0,A=0;c.sort(o1);for(let O=0,X=c.length;O<X;O++){let D=c[O],Y=D.color,j=D.intensity,K=D.distance,ce=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pr?ce=D.shadow.map.texture:ce=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=Y.r*j,h+=Y.g*j,d+=Y.b*j;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],j);A++}else if(D.isSunLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,re=t.get(D);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),n.sunShadow[p]=re,n.sunShadowMap[p]=ce;let _e=J.getViewportCount();for(let Ee=0;Ee<_e;Ee++)n.sunShadowMatrix[_+Ee]=J.getMatrix(Ee),n.sunShadowCascade[_+Ee]=J._cascadeData[Ee];_+=_e,p++}n.sun[f]=z,f++}else if(D.isDirectionalLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let J=D.shadow,re=t.get(D);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.directionalShadow[m]=re,n.directionalShadowMap[m]=ce,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=z,m++}else if(D.isSpotLight){let z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(Y).multiplyScalar(j),z.distance=K,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[y]=z;let J=D.shadow;if(D.map&&(n.spotLightMap[b]=D.map,b++,J.updateMatrices(D),D.castShadow&&L++),n.spotLightMatrix[y]=J.matrix,D.castShadow){let re=t.get(D);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,n.spotShadow[y]=re,n.spotShadowMap[y]=ce,x++}y++}else if(D.isRectAreaLight){let z=e.get(D);z.color.copy(Y).multiplyScalar(j),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=z,w++}else if(D.isPointLight){let z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){let J=D.shadow,re=t.get(D);re.shadowIntensity=J.intensity,re.shadowBias=J.bias,re.shadowNormalBias=J.normalBias,re.shadowRadius=J.radius,re.shadowMapSize=J.mapSize,re.shadowCameraNear=J.camera.near,re.shadowCameraFar=J.camera.far,n.pointShadow[g]=re,n.pointShadowMap[g]=ce,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=z,g++}else if(D.isHemisphereLight){let z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(j),z.groundColor.copy(D.groundColor).multiplyScalar(j),n.hemi[M]=z,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Pe.LTC_FLOAT_1,n.rectAreaLTC2=Pe.LTC_FLOAT_2):(n.rectAreaLTC1=Pe.LTC_HALF_1,n.rectAreaLTC2=Pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==w||N.hemiLength!==M||N.numSunShadows!==p||N.numDirectionalShadows!==E||N.numPointShadows!==T||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=w,n.point.length=g,n.hemi.length=M,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-L,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=A,N.sunLength=f,N.directionalLength=m,N.pointLength=g,N.spotLength=y,N.rectAreaLength=w,N.hemiLength=M,N.numSunShadows=p,N.numDirectionalShadows=E,N.numPointShadows=T,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=A,n.version=r1++)}function l(c,u){let h=0,d=0,f=0,p=0,_=0,m=0,g=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let M=c[y];if(M.isSunLight){let E=n.sun[h];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),h++}else if(M.isDirectionalLight){let E=n.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),d++}else if(M.isSpotLight){let E=n.spot[p];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(g),p++}else if(M.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),o.identity(),r.copy(M.matrixWorld),r.premultiply(g),o.extractRotation(r),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(g),f++}else if(M.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function sx(i){let e=new a1(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function o(h){h.isLightProbeGrid?s.push(h):t.push(h)}function a(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function l1(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new sx(i),e.set(s,[a])):r>=o.length?(a=new sx(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var c1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u1=`uniform sampler2D shadow_pass;
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
}`,h1=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],d1=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],rx=new Ze,Ul=new F,jf=new F;function f1(i,e,t){let n=new hr,s=new Ke,r=new Ke,o=new Bt,a=new Mu,l=new Su,c={},u=t.maxTextureSize,h={[ns]:In,[In]:ns,[Tn]:Tn},d=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:c1,fragmentShader:u1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ut;p.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new je(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vr;let g=this.type;this.render=function(T,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===n0&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vr);let L=i.getRenderTarget(),A=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),O=i.state;O.setBlending(wn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let X=g!==this.type;X&&x.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(Y=>Y.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,Y=T.length;D<Y;D++){let j=T[D],K=j.shadow;if(K===void 0){$e("WebGLShadowMap:",j,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);let ce=K.getFrameExtents();s.multiply(ce),r.copy(K.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,K.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,K.mapSize.y=r.y));let z=i.state.buffers.depth.getReversed();if(K.camera._reversedDepth=z,K.map===null||X===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===qo){if(j.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new an(s.x,s.y,{format:pr,type:fn,minFilter:xn,magFilter:xn,generateMipmaps:!1}),K.map.texture.name=j.name+".shadowMap",K.map.depthTexture=new Oi(s.x,s.y,hi),K.map.depthTexture.name=j.name+".shadowMapDepth",K.map.depthTexture.format=Rs,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=qt,K.map.depthTexture.magFilter=qt}else j.isPointLight?(K.map=new Fl(s.x),K.map.depthTexture=new il(s.x,zi)):(K.map=new an(s.x,s.y),K.map.depthTexture=new Oi(s.x,s.y,zi)),K.map.depthTexture.name=j.name+".shadowMap",K.map.depthTexture.format=Rs,this.type===Vr?(K.map.depthTexture.compareFunction=z?Df:Lf,K.map.depthTexture.minFilter=xn,K.map.depthTexture.magFilter=xn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=qt,K.map.depthTexture.magFilter=qt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==s.x||K.map.height!==s.y)&&K.map.setSize(s.x,s.y);let J=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();j.isPointLight!==!0&&K.updateMatrices(j,b);let re=(K.camera.layers.mask&4294967294)!==0?K.camera.layers:b.layers;for(let _e=0;_e<J;_e++){let Ee=K.getCamera(_e);if(j.isPointLight){let ie=K.camera,xe=K.matrix,Se=j.distance||ie.far;Se!==ie.far&&(ie.far=Se,ie.updateProjectionMatrix()),Ul.setFromMatrixPosition(j.matrixWorld),ie.position.copy(Ul),jf.copy(ie.position),jf.add(h1[_e]),ie.up.copy(d1[_e]),ie.lookAt(jf),ie.updateMatrixWorld(),xe.makeTranslation(-Ul.x,-Ul.y,-Ul.z),rx.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),K._frustum.setFromProjectionMatrix(rx,ie.coordinateSystem,ie.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)i.setRenderTarget(K.map,_e),i.clear();else{_e===0&&(i.setRenderTarget(K.map),i.clear());let ie=K.getViewport(_e);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),O.viewport(o)}n=K.getFrustum(_e),M(x,b,Ee,j,re,this.type)}K.isPointLightShadow!==!0&&this.type===qo&&y(K,b),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(L,A,N)};function y(T,x){let b=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new an(s.x,s.y,{format:pr,type:fn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,b,f,_,null)}function w(T,x,b,L){let A=null,N=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)A=N;else if(A=b.isPointLight===!0?l:a,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let O=A.uuid,X=x.uuid,D=c[O];D===void 0&&(D={},c[O]=D);let Y=D[X];Y===void 0&&(Y=A.clone(),D[X]=Y,x.addEventListener("dispose",E)),A=Y}if(A.visible=x.visible,A.wireframe=x.wireframe,L===qo?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let O=i.properties.get(A);O.light=b}return A}function M(T,x,b,L,A,N){if(T.visible===!1)return;if(T.layers.test(A)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===qo)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);let D=e.update(T),Y=T.material;if(Array.isArray(Y)){let j=D.groups;for(let K=0,ce=j.length;K<ce;K++){let z=j[K],J=Y[z.materialIndex];if(J&&J.visible){let re=w(T,J,L,N);T.onBeforeShadow(i,T,x,b,D,re,z),i.renderBufferDirect(b,null,D,re,T,z),T.onAfterShadow(i,T,x,b,D,re,z)}}}else if(Y.visible){let j=w(T,Y,L,N);T.onBeforeShadow(i,T,x,b,D,j,null),i.renderBufferDirect(b,null,D,j,T,null),T.onAfterShadow(i,T,x,b,D,j,null)}}let X=T.children;for(let D=0,Y=X.length;D<Y;D++)M(X[D],x,b,L,A,N)}function E(T){T.target.removeEventListener("dispose",E);for(let b in c){let L=c[b],A=T.target.uuid;A in L&&(L[A].dispose(),delete L[A])}}}function p1(i,e){function t(){let I=!1,ne=new Bt,Z=null,fe=new Bt(0,0,0,0);return{setMask:function(he){Z!==he&&!I&&(i.colorMask(he,he,he,he),Z=he)},setLocked:function(he){I=he},setClear:function(he,Me,Ge,tt,ye){ye===!0&&(he*=tt,Me*=tt,Ge*=tt),ne.set(he,Me,Ge,tt),fe.equals(ne)===!1&&(i.clearColor(he,Me,Ge,tt),fe.copy(ne))},reset:function(){I=!1,Z=null,fe.set(-1,0,0,0)}}}function n(){let I=!1,ne=!1,Z=null,fe=null,he=null;return{setReversed:function(Me){if(ne!==Me){let Ge=e.get("EXT_clip_control");Me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),ne=Me;let tt=he;he=null,this.setClear(tt)}},getReversed:function(){return ne},setTest:function(Me){Me?de(i.DEPTH_TEST):R(i.DEPTH_TEST)},setMask:function(Me){Z!==Me&&!I&&(i.depthMask(Me),Z=Me)},setFunc:function(Me){if(ne&&(Me=U0[Me]),fe!==Me){switch(Me){case au:i.depthFunc(i.NEVER);break;case lu:i.depthFunc(i.ALWAYS);break;case cu:i.depthFunc(i.LESS);break;case Co:i.depthFunc(i.LEQUAL);break;case uu:i.depthFunc(i.EQUAL);break;case hu:i.depthFunc(i.GEQUAL);break;case du:i.depthFunc(i.GREATER);break;case fu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=Me}},setLocked:function(Me){I=Me},setClear:function(Me){he!==Me&&(he=Me,ne&&(Me=1-Me),i.clearDepth(Me))},reset:function(){I=!1,Z=null,fe=null,he=null,ne=!1}}}function s(){let I=!1,ne=null,Z=null,fe=null,he=null,Me=null,Ge=null,tt=null,ye=null;return{setTest:function(qe){I||(qe?de(i.STENCIL_TEST):R(i.STENCIL_TEST))},setMask:function(qe){ne!==qe&&!I&&(i.stencilMask(qe),ne=qe)},setFunc:function(qe,et,Te){(Z!==qe||fe!==et||he!==Te)&&(i.stencilFunc(qe,et,Te),Z=qe,fe=et,he=Te)},setOp:function(qe,et,Te){(Me!==qe||Ge!==et||tt!==Te)&&(i.stencilOp(qe,et,Te),Me=qe,Ge=et,tt=Te)},setLocked:function(qe){I=qe},setClear:function(qe){ye!==qe&&(i.clearStencil(qe),ye=qe)},reset:function(){I=!1,ne=null,Z=null,fe=null,he=null,Me=null,Ge=null,tt=null,ye=null}}}let r=new t,o=new n,a=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,M=null,E=null,T=null,x=null,b=new De(0,0,0),L=0,A=!1,N=null,O=null,X=null,D=null,Y=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,ce=0,z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),K=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),K=ce>=2);let J=null,re={},_e=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),ie=new Bt().fromArray(_e),xe=new Bt().fromArray(Ee);function Se(I,ne,Z,fe){let he=new Uint8Array(4),Me=i.createTexture();i.bindTexture(I,Me),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<Z;Ge++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(ne+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return Me}let ge={};ge[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(i.DEPTH_TEST),o.setFunc(Co),Je(!1),Ne(_f),de(i.CULL_FACE),Xe(wn);function de(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function R(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function le(I,ne){return d[I]!==ne?(i.bindFramebuffer(I,ne),d[I]=ne,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function pe(I,ne){let Z=p,fe=!1;if(I){Z=f.get(ne),Z===void 0&&(Z=[],f.set(ne,Z));let he=I.textures;if(Z.length!==he.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Me=0,Ge=he.length;Me<Ge;Me++)Z[Me]=i.COLOR_ATTACHMENT0+Me;Z.length=he.length,fe=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,fe=!0);fe&&i.drawBuffers(Z)}function Ie(I){return _!==I?(i.useProgram(I),_=I,!0):!1}let ke={[vi]:i.FUNC_ADD,[i0]:i.FUNC_SUBTRACT,[s0]:i.FUNC_REVERSE_SUBTRACT};ke[r0]=i.MIN,ke[o0]=i.MAX;let Ue={[Wr]:i.ZERO,[a0]:i.ONE,[l0]:i.SRC_COLOR,[Sf]:i.SRC_ALPHA,[d0]:i.SRC_ALPHA_SATURATE,[vl]:i.DST_COLOR,[yl]:i.DST_ALPHA,[c0]:i.ONE_MINUS_SRC_COLOR,[bf]:i.ONE_MINUS_SRC_ALPHA,[h0]:i.ONE_MINUS_DST_COLOR,[u0]:i.ONE_MINUS_DST_ALPHA,[f0]:i.CONSTANT_COLOR,[p0]:i.ONE_MINUS_CONSTANT_COLOR,[m0]:i.CONSTANT_ALPHA,[g0]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(I,ne,Z,fe,he,Me,Ge,tt,ye,qe){if(I===wn){m===!0&&(R(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),I!==Du){if(I!==g||qe!==A){if((y!==vi||E!==vi)&&(i.blendEquation(i.FUNC_ADD),y=vi,E=vi),qe)switch(I){case Yo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yf:i.blendFunc(i.ONE,i.ONE);break;case vf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Mf:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",I);break}else switch(I){case Yo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case yf:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vf:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",I);break}w=null,M=null,T=null,x=null,b.set(0,0,0),L=0,g=I,A=qe}return}he=he||ne,Me=Me||Z,Ge=Ge||fe,(ne!==y||he!==E)&&(i.blendEquationSeparate(ke[ne],ke[he]),y=ne,E=he),(Z!==w||fe!==M||Me!==T||Ge!==x)&&(i.blendFuncSeparate(Ue[Z],Ue[fe],Ue[Me],Ue[Ge]),w=Z,M=fe,T=Me,x=Ge),(tt.equals(b)===!1||ye!==L)&&(i.blendColor(tt.r,tt.g,tt.b,ye),b.copy(tt),L=ye),g=I,A=!1}function Ye(I,ne){I.side===Tn?R(i.CULL_FACE):de(i.CULL_FACE);let Z=I.side===In;ne&&(Z=!Z),Je(Z),I.blending===Yo&&I.transparent===!1?Xe(wn):Xe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);let fe=I.stencilWrite;a.setTest(fe),fe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Le(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):R(i.SAMPLE_ALPHA_TO_COVERAGE)}function Je(I){N!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),N=I)}function Ne(I){I!==e0?(de(i.CULL_FACE),I!==O&&(I===_f?i.cullFace(i.BACK):I===t0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):R(i.CULL_FACE),O=I}function ee(I){I!==X&&(K&&i.lineWidth(I),X=I)}function Le(I,ne,Z){I?(de(i.POLYGON_OFFSET_FILL),(D!==ne||Y!==Z)&&(D=ne,Y=Z,o.getReversed()&&(ne=-ne,Z=-Z),i.polygonOffset(ne,Z))):R(i.POLYGON_OFFSET_FILL)}function Mt(I){I?de(i.SCISSOR_TEST):R(i.SCISSOR_TEST)}function Ct(I){I===void 0&&(I=i.TEXTURE0+j-1),J!==I&&(i.activeTexture(I),J=I)}function Xt(I,ne,Z){Z===void 0&&(J===null?Z=i.TEXTURE0+j-1:Z=J);let fe=re[Z];fe===void 0&&(fe={type:void 0,texture:void 0},re[Z]=fe),(fe.type!==I||fe.texture!==ne)&&(J!==Z&&(i.activeTexture(Z),J=Z),i.bindTexture(I,ne||ge[I]),fe.type=I,fe.texture=ne)}function G(){let I=re[J];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function rt(){try{i.compressedTexImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function dt(){try{i.texSubImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function ve(){try{i.texSubImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function St(){try{i.compressedTexSubImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function Ve(){try{i.texStorage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function C(){try{i.texStorage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function v(){try{i.texImage2D(...arguments)}catch(I){nt("WebGLState:",I)}}function q(){try{i.texImage3D(...arguments)}catch(I){nt("WebGLState:",I)}}function me(I){return h[I]!==void 0?h[I]:i.getParameter(I)}function P(I,ne){h[I]!==ne&&(i.pixelStorei(I,ne),h[I]=ne)}function H(I){ie.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ie.copy(I))}function W(I){xe.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),xe.copy(I))}function U(I,ne){let Z=c.get(ne);Z===void 0&&(Z=new WeakMap,c.set(ne,Z));let fe=Z.get(I);fe===void 0&&(fe=i.getUniformBlockIndex(ne,I.name),i.uniformBlockBinding(ne,fe,fe),Z.set(I,fe))}function k(I,ne,Z){let he=c.get(ne).get(I);l[he]!==Z&&(i.bindBufferBase(i.UNIFORM_BUFFER,he,Z),l[he]=Z)}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},J=null,re={},d={},l={},f=new WeakMap,p=[],_=null,m=!1,g=null,y=null,w=null,M=null,E=null,T=null,x=null,b=new De(0,0,0),L=0,A=!1,N=null,O=null,X=null,D=null,Y=null,ie.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:R,bindFramebuffer:le,drawBuffers:pe,useProgram:Ie,setBlending:Xe,setMaterial:Ye,setFlipSided:Je,setCullFace:Ne,setLineWidth:ee,setPolygonOffset:Le,setScissorTest:Mt,activeTexture:Ct,bindTexture:Xt,unbindTexture:G,compressedTexImage2D:bt,compressedTexImage3D:rt,texImage2D:v,texImage3D:q,pixelStorei:P,getParameter:me,updateUBOMapping:U,uniformBlockBinding:k,texStorage2D:Ve,texStorage3D:C,texSubImage2D:dt,texSubImage3D:ve,compressedTexSubImage2D:St,compressedTexSubImage3D:Fe,scissor:H,viewport:W,reset:te}}function m1(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,u=new WeakMap,h=new Set,d,f=new WeakMap,p=new Set,_=new FinalizationRegistry(C=>p.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return m?new OffscreenCanvas(C,v):Lo("canvas")}function y(C,v,q){let me=1,P=Ve(C);if((P.width>q||P.height>q)&&(me=q/Math.max(P.width,P.height)),me<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let H=Math.floor(me*P.width),W=Math.floor(me*P.height);d===void 0&&(d=g(H,W));let U=v?g(H,W):d;return U.width=H,U.height=W,U.getContext("2d").drawImage(C,0,0,H,W),$e("WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+H+"x"+W+")."),U}else return"data"in C&&$e("WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),C;return C}function w(C){return C.generateMipmaps}function M(C){i.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(C,v,q,me,P,H=!1){if(C!==null){if(i[C]!==void 0)return i[C];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W;me&&(W=e.get("EXT_texture_norm16"),W||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let U=v;if(v===i.RED&&(q===i.FLOAT&&(U=i.R32F),q===i.HALF_FLOAT&&(U=i.R16F),q===i.UNSIGNED_BYTE&&(U=i.R8),q===i.UNSIGNED_SHORT&&W&&(U=W.R16_EXT),q===i.SHORT&&W&&(U=W.R16_SNORM_EXT)),v===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(U=i.R8UI),q===i.UNSIGNED_SHORT&&(U=i.R16UI),q===i.UNSIGNED_INT&&(U=i.R32UI),q===i.BYTE&&(U=i.R8I),q===i.SHORT&&(U=i.R16I),q===i.INT&&(U=i.R32I)),v===i.RG&&(q===i.FLOAT&&(U=i.RG32F),q===i.HALF_FLOAT&&(U=i.RG16F),q===i.UNSIGNED_BYTE&&(U=i.RG8),q===i.UNSIGNED_SHORT&&W&&(U=W.RG16_EXT),q===i.SHORT&&W&&(U=W.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(U=i.RG8UI),q===i.UNSIGNED_SHORT&&(U=i.RG16UI),q===i.UNSIGNED_INT&&(U=i.RG32UI),q===i.BYTE&&(U=i.RG8I),q===i.SHORT&&(U=i.RG16I),q===i.INT&&(U=i.RG32I)),v===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(U=i.RGB8UI),q===i.UNSIGNED_SHORT&&(U=i.RGB16UI),q===i.UNSIGNED_INT&&(U=i.RGB32UI),q===i.BYTE&&(U=i.RGB8I),q===i.SHORT&&(U=i.RGB16I),q===i.INT&&(U=i.RGB32I)),v===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(U=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(U=i.RGBA16UI),q===i.UNSIGNED_INT&&(U=i.RGBA32UI),q===i.BYTE&&(U=i.RGBA8I),q===i.SHORT&&(U=i.RGBA16I),q===i.INT&&(U=i.RGBA32I)),v===i.RGB&&(q===i.UNSIGNED_SHORT&&W&&(U=W.RGB16_EXT),q===i.SHORT&&W&&(U=W.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(U=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(U=i.R11F_G11F_B10F)),v===i.RGBA){let k=H?qa:lt.getTransfer(P);q===i.FLOAT&&(U=i.RGBA32F),q===i.HALF_FLOAT&&(U=i.RGBA16F),q===i.UNSIGNED_BYTE&&(U=k===Lt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&W&&(U=W.RGBA16_EXT),q===i.SHORT&&W&&(U=W.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(U=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(U=i.RGB5_A1)}return(U===i.R16F||U===i.R32F||U===i.RG16F||U===i.RG32F||U===i.RGBA16F||U===i.RGBA32F)&&e.get("EXT_color_buffer_float"),U}function x(C,v){let q;return C?v===null||v===zi||v===Os?q=i.DEPTH24_STENCIL8:v===hi?q=i.DEPTH32F_STENCIL8:v===Zo&&(q=i.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===zi||v===Os?q=i.DEPTH_COMPONENT24:v===hi?q=i.DEPTH_COMPONENT32F:v===Zo&&(q=i.DEPTH_COMPONENT16),q}function b(C,v){return w(C)===!0||C.isFramebufferTexture&&C.minFilter!==qt&&C.minFilter!==xn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function L(C){let v=new WeakRef(C);n.get(C).__ref=v,p.add(v),_.register(C,v,v)}function A(C){let v=n.get(C).__ref;v!==void 0&&(p.delete(v),_.unregister(v))}function N(C){X(C.target)}function O(C){D(C.target)}function X(C){C.removeEventListener("dispose",N),A(C),j(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function D(C){C.removeEventListener("dispose",O),A(C),ce(C)}function Y(){for(let C of p){let v=C.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):X(v))}p.clear(),h.clear()}function j(C){let v=n.get(C);if(v.__webglInit===void 0)return;let q=C.source,me=f.get(q);if(me){let P=me[v.__cacheKey];P.usedTimes--,P.usedTimes===0&&K(C),Object.keys(me).length===0&&f.delete(q)}n.remove(C)}function K(C){let v=n.get(C);i.deleteTexture(v.__webglTexture);let q=C.source,me=f.get(q);delete me[v.__cacheKey],o.memory.textures--}function ce(C){let v=n.get(C);v.__depthDisposeCallback&&v.__depthDisposeCallback();let q=C.depthTexture;if(q&&q.renderTarget===C&&X(q),C.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(v.__webglFramebuffer[P]))for(let H=0;H<v.__webglFramebuffer[P].length;H++)i.deleteFramebuffer(v.__webglFramebuffer[P][H]);else i.deleteFramebuffer(v.__webglFramebuffer[P]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[P])}else{if(Array.isArray(v.__webglFramebuffer))for(let P=0;P<v.__webglFramebuffer.length;P++)i.deleteFramebuffer(v.__webglFramebuffer[P]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let P=0;P<v.__webglColorRenderbuffer.length;P++)v.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[P]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let me=C.textures;for(let P=0,H=me.length;P<H;P++){let W=n.get(me[P]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),o.memory.textures--),n.remove(me[P])}n.remove(C)}let z=0;function J(){z=0}function re(){return z}function _e(C){z=C}function Ee(){let C=z;return C>=s.maxTextures&&$e("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,C}function ie(C){let v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.mipmapsAutoUpdate),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function xe(C,v){let q=n.get(C);if(C.isVideoTexture&&St(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&q.__version!==C.version){let me=C.image;if(me===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(q,C,v);return}}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+v)}function Se(C,v){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Ye(q,C,v);return}else C.isExternalTexture&&(q.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+v)}function ge(C,v){let q=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&q.__version!==C.version){Ye(q,C,v);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+v)}function de(C,v){let q=n.get(C);if(C.version>0&&q.__version!==C.version){Je(q,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+v)}let R={[ti]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Po]:i.MIRRORED_REPEAT},le={[qt]:i.NEAREST,[Fu]:i.NEAREST_MIPMAP_NEAREST,[qr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[Ko]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},pe={[A0]:i.NEVER,[Nf]:i.ALWAYS,[R0]:i.LESS,[Lf]:i.LEQUAL,[C0]:i.EQUAL,[Df]:i.GEQUAL,[P0]:i.GREATER,[I0]:i.NOTEQUAL};function Ie(C,v){if(v.type===hi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===xn||v.magFilter===Ko||v.magFilter===qr||v.magFilter===Mi||v.minFilter===xn||v.minFilter===Ko||v.minFilter===qr||v.minFilter===Mi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,R[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,R[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,R[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,le[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,le[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===qt||v.minFilter!==qr&&v.minFilter!==Mi||v.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ke(C,v){let q=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",N),L(v));let me=v.source,P=f.get(me);P===void 0&&(P={},f.set(me,P));let H=ie(v);if(H!==C.__cacheKey){P[H]===void 0&&(P[H]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,q=!0),P[H].usedTimes++;let W=P[C.__cacheKey];W!==void 0&&(P[C.__cacheKey].usedTimes--,W.usedTimes===0&&K(v)),C.__cacheKey=H,C.__webglTexture=P[H].texture}return q}function Ue(C,v,q){return Math.floor(Math.floor(C/q)/v)}function Xe(C,v,q,me){let H=C.updateRanges;if(H.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,q,me,v.data);else{H.sort((I,ne)=>I.start-ne.start);let W=0;for(let I=1;I<H.length;I++){let ne=H[W],Z=H[I],fe=ne.start+ne.count,he=Ue(Z.start,v.width,4),Me=Ue(ne.start,v.width,4);Z.start<=fe+1&&he===Me&&Ue(Z.start+Z.count-1,v.width,4)===he?ne.count=Math.max(ne.count,Z.start+Z.count-ne.start):(++W,H[W]=Z)}H.length=W+1;let U=t.getParameter(i.UNPACK_ROW_LENGTH),k=t.getParameter(i.UNPACK_SKIP_PIXELS),te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let I=0,ne=H.length;I<ne;I++){let Z=H[I],fe=Math.floor(Z.start/4),he=Math.ceil(Z.count/4),Me=fe%v.width,Ge=Math.floor(fe/v.width),tt=he,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ge),t.texSubImage2D(i.TEXTURE_2D,0,Me,Ge,tt,ye,q,me,v.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,U),t.pixelStorei(i.UNPACK_SKIP_PIXELS,k),t.pixelStorei(i.UNPACK_SKIP_ROWS,te)}}function Ye(C,v,q){let me=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(me=i.TEXTURE_3D);let P=ke(C,v),H=v.source;t.bindTexture(me,C.__webglTexture,i.TEXTURE0+q);let W=n.get(H);if(H.version!==W.__version||P===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ye=lt.getPrimaries(lt.workingColorSpace),qe=v.colorSpace===Fs?null:lt.getPrimaries(v.colorSpace),et=v.colorSpace===Fs||ye===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let k=y(v.image,!1,s.maxTextureSize);k=Fe(v,k);let te=r.convert(v.format,v.colorSpace),I=r.convert(v.type),ne=T(v.internalFormat,te,I,v.normalized,v.colorSpace,v.isVideoTexture);Ie(me,v);let Z,fe=v.mipmaps,he=v.isVideoTexture!==!0,Me=W.__version===void 0||P===!0,Ge=H.dataReady,tt=b(v,k);if(v.isDepthTexture)ne=x(v.format===Hi,v.type),Me&&(he?t.texStorage2D(i.TEXTURE_2D,1,ne,k.width,k.height):t.texImage2D(i.TEXTURE_2D,0,ne,k.width,k.height,0,te,I,null));else if(v.isDataTexture)if(fe.length>0){he&&Me&&t.texStorage2D(i.TEXTURE_2D,tt,ne,fe[0].width,fe[0].height);for(let ye=0,qe=fe.length;ye<qe;ye++)Z=fe[ye],he?Ge&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Z.width,Z.height,te,I,Z.data):t.texImage2D(i.TEXTURE_2D,ye,ne,Z.width,Z.height,0,te,I,Z.data);v.generateMipmaps=!1}else he?(Me&&t.texStorage2D(i.TEXTURE_2D,tt,ne,k.width,k.height),Ge&&Xe(v,k,te,I)):t.texImage2D(i.TEXTURE_2D,0,ne,k.width,k.height,0,te,I,k.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){he&&Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ne,fe[0].width,fe[0].height,k.depth);for(let ye=0,qe=fe.length;ye<qe;ye++)if(Z=fe[ye],v.format!==ri)if(te!==null)if(he){if(Ge)if(v.layerUpdates.size>0){let et=Xf(Z.width,Z.height,v.format,v.type);for(let Te of v.layerUpdates){let wt=Z.data.subarray(Te*et/Z.data.BYTES_PER_ELEMENT,(Te+1)*et/Z.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Te,Z.width,Z.height,1,te,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Z.width,Z.height,k.depth,te,Z.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,ne,Z.width,Z.height,k.depth,0,Z.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?Ge&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Z.width,Z.height,k.depth,te,I,Z.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,ne,Z.width,Z.height,k.depth,0,te,I,Z.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{he&&Me&&t.texStorage2D(i.TEXTURE_2D,tt,ne,fe[0].width,fe[0].height);for(let ye=0,qe=fe.length;ye<qe;ye++)Z=fe[ye],v.format!==ri?te!==null?he?Ge&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Z.width,Z.height,te,Z.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,ne,Z.width,Z.height,0,Z.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?Ge&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Z.width,Z.height,te,I,Z.data):t.texImage2D(i.TEXTURE_2D,ye,ne,Z.width,Z.height,0,te,I,Z.data)}else if(v.isDataArrayTexture)if(he){if(Me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ne,k.width,k.height,k.depth),Ge)if(v.layerUpdates.size>0){let ye=Xf(k.width,k.height,v.format,v.type);for(let qe of v.layerUpdates){let et=k.data.subarray(qe*ye/k.data.BYTES_PER_ELEMENT,(qe+1)*ye/k.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,k.width,k.height,1,te,I,et)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,te,I,k.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,k.width,k.height,k.depth,0,te,I,k.data);else if(v.isData3DTexture)he?(Me&&t.texStorage3D(i.TEXTURE_3D,tt,ne,k.width,k.height,k.depth),Ge&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,te,I,k.data)):t.texImage3D(i.TEXTURE_3D,0,ne,k.width,k.height,k.depth,0,te,I,k.data);else if(v.isFramebufferTexture){if(Me)if(he)t.texStorage2D(i.TEXTURE_2D,tt,ne,k.width,k.height);else{let ye=k.width,qe=k.height;for(let et=0;et<tt;et++)t.texImage2D(i.TEXTURE_2D,et,ne,ye,qe,0,te,I,null),ye>>=1,qe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),k.parentNode!==ye){ye.appendChild(k),h.add(v),ye.onpaint=qe=>{let et=qe.changedElements;for(let Te of h)et.includes(Te.image)&&(Te.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,k);else{let et=i.RGBA,Te=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,et,Te,wt,k)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(he&&Me){let ye=Ve(fe[0]);t.texStorage2D(i.TEXTURE_2D,tt,ne,ye.width,ye.height)}for(let ye=0,qe=fe.length;ye<qe;ye++)Z=fe[ye],he?Ge&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,te,I,Z):t.texImage2D(i.TEXTURE_2D,ye,ne,te,I,Z);v.generateMipmaps=!1}else if(he){if(Me){let ye=Ve(k);t.texStorage2D(i.TEXTURE_2D,tt,ne,ye.width,ye.height)}Ge&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te,I,k)}else t.texImage2D(i.TEXTURE_2D,0,ne,te,I,k);w(v)&&v.mipmapsAutoUpdate===!0&&M(me),W.__version=H.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Je(C,v,q){if(v.image.length!==6)return;let me=ke(C,v),P=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+q);let H=n.get(P);if(P.version!==H.__version||me===!0){t.activeTexture(i.TEXTURE0+q);let W=lt.getPrimaries(lt.workingColorSpace),U=v.colorSpace===Fs?null:lt.getPrimaries(v.colorSpace),k=v.colorSpace===Fs||W===U?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let te=v.isCompressedTexture||v.image[0].isCompressedTexture,I=v.image[0]&&v.image[0].isDataTexture,ne=[];for(let Te=0;Te<6;Te++)!te&&!I?ne[Te]=y(v.image[Te],!0,s.maxCubemapSize):ne[Te]=I?v.image[Te].image:v.image[Te],ne[Te]=Fe(v,ne[Te]);let Z=ne[0],fe=r.convert(v.format,v.colorSpace),he=r.convert(v.type),Me=T(v.internalFormat,fe,he,v.normalized,v.colorSpace),Ge=v.isVideoTexture!==!0,tt=H.__version===void 0||me===!0,ye=P.dataReady,qe=b(v,Z);Ie(i.TEXTURE_CUBE_MAP,v);let et;if(v.isDepthTexture){if(Me=x(v.format===Hi,v.type),tt)if(Ge)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Me,Z.width,Z.height);else for(let Te=0;Te<6;Te++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,Z.width,Z.height,0,fe,he,null)}else if(te){Ge&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Me,Z.width,Z.height);for(let Te=0;Te<6;Te++){et=ne[Te].mipmaps;for(let wt=0;wt<et.length;wt++){let Kt=et[wt];v.format!==ri?fe!==null?Ge?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt,0,0,Kt.width,Kt.height,fe,Kt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt,Me,Kt.width,Kt.height,0,Kt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt,0,0,Kt.width,Kt.height,fe,he,Kt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt,Me,Kt.width,Kt.height,0,fe,he,Kt.data)}}}else{if(et=v.mipmaps,Ge&&tt){et.length>0&&qe++;let Te=Ve(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Me,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(I){Ge?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,ne[Te].width,ne[Te].height,fe,he,ne[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,ne[Te].width,ne[Te].height,0,fe,he,ne[Te].data);for(let wt=0;wt<et.length;wt++){let ai=et[wt].image[Te].image;Ge?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt+1,0,0,ai.width,ai.height,fe,he,ai.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt+1,Me,ai.width,ai.height,0,fe,he,ai.data)}}else{Ge?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,fe,he,ne[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Me,fe,he,ne[Te]);for(let wt=0;wt<et.length;wt++){let Kt=et[wt];Ge?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt+1,0,0,fe,he,Kt.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,wt+1,Me,fe,he,Kt.image[Te])}}}w(v)&&v.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),H.__version=P.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Ne(C,v,q,me,P,H){let W=r.convert(q.format,q.colorSpace),U=r.convert(q.type),k=T(q.internalFormat,W,U,q.normalized,q.colorSpace),te=n.get(v),I=n.get(q);if(I.__renderTarget=v,!te.__hasExternalTextures){let ne=Math.max(1,v.width>>H),Z=Math.max(1,v.height>>H);P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?t.texImage3D(P,H,k,ne,Z,v.depth,0,W,U,null):t.texImage2D(P,H,k,ne,Z,0,W,U,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,P,I.__webglTexture,0,dt(v)):(P===i.TEXTURE_2D||P>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&P<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,P,I.__webglTexture,H),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(C,v,q){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){let me=v.depthTexture,P=me&&me.isDepthTexture?me.type:null,H=x(v.stencilBuffer,P),W=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(v),H,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(v),H,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,H,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,C)}else{let me=v.textures;for(let P=0;P<me.length;P++){let H=me[P],W=r.convert(H.format,H.colorSpace),U=r.convert(H.type),k=T(H.internalFormat,W,U,H.normalized,H.colorSpace);ve(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(v),k,v.width,v.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(v),k,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,k,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Le(C,v,q){let me=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let P=n.get(v.depthTexture);P.__renderTarget=v;let H=me?v.depthTexture.image[0]:v.depthTexture.image;(!P.__webglTexture||H.width!==v.width||H.height!==v.height)&&(H.width=v.width,H.height=v.height,v.depthTexture.needsUpdate=!0),me?de(v.depthTexture,0):xe(v.depthTexture,0);let W=P.__webglTexture,U=dt(v),k=me?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,te=v.depthTexture.format===Hi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Rs)ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,k,W,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,te,k,W,0);else if(v.depthTexture.format===Hi)ve(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,k,W,0,U):i.framebufferTexture2D(i.FRAMEBUFFER,te,k,W,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(C){let v=n.get(C),q=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){let me=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),me){let P=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,me.removeEventListener("dispose",P)};me.addEventListener("dispose",P),v.__depthDisposeCallback=P}v.__boundDepthTexture=me}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(q)for(let me=0;me<6;me++)Le(v.__webglFramebuffer[me],C,me);else C.texture.mipmaps.length>0?Le(v.__webglFramebuffer[0],C,0):Le(v.__webglFramebuffer,C,0);else if(q){v.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[me]),v.__webglDepthbuffer[me]===void 0)v.__webglDepthbuffer[me]=i.createRenderbuffer(),ee(v.__webglDepthbuffer[me],C,!1);else{let P=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,H)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ee(v.__webglDepthbuffer,C,!1);else{let P=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,H),i.framebufferRenderbuffer(i.FRAMEBUFFER,P,i.RENDERBUFFER,H)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(C,v,q){let me=n.get(C);v!==void 0&&Ne(me.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Mt(C)}function Xt(C){let v=C.texture,q=n.get(C),me=n.get(v);C.addEventListener("dispose",O),L(C);let P=C.textures,H=C.isWebGLCubeRenderTarget===!0,W=P.length>1;if(W||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=v.version,o.memory.textures++),H){q.__webglFramebuffer=[];for(let U=0;U<6;U++)if(v.mipmaps.length>0){q.__webglFramebuffer[U]=[];for(let k=0;k<v.mipmaps.length;k++)q.__webglFramebuffer[U][k]=i.createFramebuffer()}else q.__webglFramebuffer[U]=i.createFramebuffer()}else{if(v.mipmaps.length>0){q.__webglFramebuffer=[];for(let U=0;U<v.mipmaps.length;U++)q.__webglFramebuffer[U]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(W)for(let U=0,k=P.length;U<k;U++){let te=n.get(P[U]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ve(C)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let U=0;U<P.length;U++){let k=P[U];q.__webglColorRenderbuffer[U]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[U]);let te=r.convert(k.format,k.colorSpace),I=r.convert(k.type),ne=T(k.internalFormat,te,I,k.normalized,k.colorSpace,C.isXRRenderTarget===!0),Z=dt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+U,i.RENDERBUFFER,q.__webglColorRenderbuffer[U])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(q.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(H){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,v);for(let U=0;U<6;U++)if(v.mipmaps.length>0)for(let k=0;k<v.mipmaps.length;k++)Ne(q.__webglFramebuffer[U][k],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,k);else Ne(q.__webglFramebuffer[U],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+U,0);w(v)?M(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(W){for(let U=0,k=P.length;U<k;U++){let te=P[U],I=n.get(te),ne=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,I.__webglTexture),Ie(ne,te),Ne(q.__webglFramebuffer,C,te,i.COLOR_ATTACHMENT0+U,ne,0),w(te)&&M(ne)}t.unbindTexture()}else{let U=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(U=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(U,me.__webglTexture),Ie(U,v),v.mipmaps.length>0)for(let k=0;k<v.mipmaps.length;k++)Ne(q.__webglFramebuffer[k],C,v,i.COLOR_ATTACHMENT0,U,k);else Ne(q.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,U,0);w(v)?M(U):v.mipmaps.length>0&&i.texParameteri(U,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&Mt(C)}function G(C){let v=C.textures;for(let q=0,me=v.length;q<me;q++){let P=v[q];if(w(P)&&P.mipmapsAutoUpdate===!0){let H=E(C),W=n.get(P).__webglTexture;t.bindTexture(H,W),M(H),t.unbindTexture()}}}let bt=[];function rt(C){if(C.samples>0){if(ve(C)===!1){let v=C.textures,q=C.width,me=C.height,P=i.COLOR_BUFFER_BIT,H=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(C),U=v.length>1;if(U)for(let te=0;te<v.length;te++)t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let te=0;te<v.length;te++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(P|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(P|=i.STENCIL_BUFFER_BIT)),U){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[te]);let I=n.get(v[te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,I,0)}i.blitFramebuffer(0,0,q,me,0,0,q,me,P,i.NEAREST),l===!0&&(bt.length=0,bt.push(i.COLOR_ATTACHMENT0+te),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&bt.push(H),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),U)for(let te=0;te<v.length;te++){t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,W.__webglColorRenderbuffer[te]);let I=n.get(v[te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,I,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function dt(C){return Math.min(s.maxSamples,C.samples)}function ve(C){let v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(C){let v=o.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Fe(C,v){let q=C.colorSpace,me=C.format,P=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||q!==qn&&q!==Fs&&(lt.getTransfer(q)===Lt?(me!==ri||P!==Bn)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",q)),v}function Ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ee,this.resetTextureUnits=J,this.getTextureUnits=re,this.setTextureUnits=_e,this.setTexture2D=xe,this.setTexture2DArray=Se,this.setTexture3D=ge,this.setTextureCube=de,this.rebindTextures=Ct,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=ve,this.dispose=Y}function g1(i,e){function t(n,s=Fs){let r,o=lt.getTransfer(s);if(n===Bn)return i.UNSIGNED_BYTE;if(n===zu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Hu)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Af)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Tf)return i.BYTE;if(n===wf)return i.SHORT;if(n===Zo)return i.UNSIGNED_SHORT;if(n===Bu)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===hi)return i.FLOAT;if(n===fn)return i.HALF_FLOAT;if(n===Cf)return i.ALPHA;if(n===Pf)return i.RGB;if(n===ri)return i.RGBA;if(n===Rs)return i.DEPTH_COMPONENT;if(n===Hi)return i.DEPTH_STENCIL;if(n===ku)return i.RED;if(n===Gu)return i.RED_INTEGER;if(n===pr)return i.RG;if(n===Vu)return i.RG_INTEGER;if(n===Wu)return i.RGBA_INTEGER;if(n===Rl||n===Cl||n===Pl||n===Il)if(o===Lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Il)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xu||n===qu||n===Yu||n===$u)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$u)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ku||n===Zu||n===Ju||n===ju||n===Qu||n===Ll||n===eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ku||n===Zu)return o===Lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ju)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ju)return r.COMPRESSED_R11_EAC;if(n===Qu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ll)return r.COMPRESSED_RG11_EAC;if(n===eh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch||n===uh||n===hh||n===dh||n===fh||n===ph)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===th)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ih)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ah)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ch)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fh)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ph)return o===Lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===mh||n===gh||n===xh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===mh)return o===Lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===yh||n===Dl||n===vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_h)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var x1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_1=`
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

}`,rp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new sl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new sn({vertexShader:x1,fragmentShader:_1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},op=class extends Ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null,_=typeof XRWebGLBinding<"u",m=new rp,g={},y=t.getContextAttributes(),w=null,M=null,E=[],T=[],x=new Ke,b=null,L=null,A=new Pn;A.viewport=new Bt;let N=new Pn;N.viewport=new Bt;let O=[A,N],X=new Cu,D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let xe=E[ie];return xe===void 0&&(xe=new Oo,E[ie]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ie){let xe=E[ie];return xe===void 0&&(xe=new Oo,E[ie]=xe),xe.getGripSpace()},this.getHand=function(ie){let xe=E[ie];return xe===void 0&&(xe=new Oo,E[ie]=xe),xe.getHandSpace()};function j(ie){let xe=T.indexOf(ie.inputSource);if(xe===-1)return;let Se=E[xe];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,c||o),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",ce);for(let ie=0;ie<E.length;ie++){let xe=T[ie];xe!==null&&(T[ie]=null,E[ie].disconnect(xe))}D=null,Y=null,m.reset();for(let ie in g)delete g[ie];if(e.setRenderTarget(w),f=null,d=null,h=null,s=null,M=null,Ee.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(x.width,x.height,!1),L!==null){let ie=L.camera;ie.fov=L.fov,ie.zoom=L.zoom,ie.updateProjectionMatrix(),L=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",K),s.addEventListener("inputsourceschange",ce),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,ge=null,de=null;y.depth&&(de=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?Hi:Rs,ge=y.stencil?Os:zi);let R={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(R),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new an(d.textureWidth,d.textureHeight,{format:ri,type:Bn,depthTexture:new Oi(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new an(f.framebufferWidth,f.framebufferHeight,{format:ri,type:Bn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ee.setContext(s),Ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(ie){for(let xe=0;xe<ie.removed.length;xe++){let Se=ie.removed[xe],ge=T.indexOf(Se);ge>=0&&(T[ge]=null,E[ge].disconnect(Se))}for(let xe=0;xe<ie.added.length;xe++){let Se=ie.added[xe],ge=T.indexOf(Se);if(ge===-1){for(let R=0;R<E.length;R++)if(R>=T.length){T.push(Se),ge=R;break}else if(T[R]===null){T[R]=Se,ge=R;break}if(ge===-1)break}let de=E[ge];de&&de.connect(Se)}}function z(ie,xe){xe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(xe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let xe=ie.near,Se=ie.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),X.near=N.near=A.near=xe,X.far=N.far=A.far=Se,(D!==X.near||Y!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),D=X.near,Y=X.far),X.layers.mask=ie.layers.mask|6,A.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;let ge=ie.parent,de=X.cameras;z(X,ge);for(let R=0;R<de.length;R++)z(de[R],ge);X.projectionMatrix.copy(A.projectionMatrix),X.projectionMatrixInverse.copy(A.projectionMatrixInverse),L===null&&ie.isPerspectiveCamera&&(L={camera:ie,fov:ie.fov,zoom:ie.zoom}),J(ie,X,ge)};function J(ie,xe,Se){Se===null?ie.matrix.copy(xe.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(xe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(xe.projectionMatrix),ie.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ur*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(X)},this.getCameraTexture=function(ie){return g[ie]};let re=null;function _e(ie,xe){if(u=xe.getViewerPose(c||o),p=xe,u!==null){let Se=u.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ge=!1;Se.length!==X.cameras.length&&(X.cameras.length=0,ge=!0);for(let pe=0;pe<Se.length;pe++){let Ie=Se[pe],ke=null;if(f!==null)ke=f.getViewport(Ie);else{let Xe=h.getViewSubImage(d,Ie);ke=Xe.viewport,pe===0&&(e.setRenderTargetTextures(M,Xe.colorTexture,Xe.depthStencilTexture),e.setRenderTarget(M))}let Ue=O[pe];Ue===void 0&&(Ue=new Pn,Ue.layers.enable(pe),Ue.viewport=new Bt,O[pe]=Ue),Ue.matrix.fromArray(Ie.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ie.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(ke.x,ke.y,ke.width,ke.height),pe===0&&(X.matrix.copy(Ue.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ge===!0&&X.cameras.push(Ue)}let de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let pe=h.getDepthInformation(Se[0]);pe&&pe.isValid&&pe.texture&&m.init(pe,s.renderState)}if(de&&de.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let pe=0;pe<Se.length;pe++){let Ie=Se[pe].camera;if(Ie){let ke=g[Ie];ke||(ke=new sl,g[Ie]=ke);let Ue=h.getCameraImage(Ie);ke.sourceTexture=Ue}}}}for(let Se=0;Se<E.length;Se++){let ge=T[Se],de=E[Se];ge!==null&&de!==void 0&&de.update(ge,xe,c||o)}re&&re(ie,xe),xe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:xe}),p=null}let Ee=new ox;Ee.setAnimationLoop(_e),this.setAnimationLoop=function(ie){re=ie},this.dispose=function(){}}},y1=new Ze,gx=new st;gx.set(-1,0,0,0,1,0,0,0,1);function v1(i,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,Gf(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,y,w,M){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),d(m,g),g.isMeshPhysicalMaterial&&f(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,y,w):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===In&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===In&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let y=e.get(g),w=y.envMap,M=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(y1.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gx),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,w){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=w*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,y){m.ior.value=g.ior,g.diffuseRoughness>0&&(m.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){let y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function M1(i,e,t,n){let s={},r={};function o(y,w){let M=w.program;n.uniformBlockBinding(y,M,s[y.id])}function a(y,w){let M=s[y.id];M===void 0&&(p(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",m));let E=w.program;n.updateUBOMapping(y,E);let T=e.render.frame;r[y.id]!==T&&(c(y),r[y.id]=T)}function l(y){let w=i.createBuffer(),M=y.__size,E=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,E),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],M=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,x=M.length;T<x;T++){let b=M[T];if(Array.isArray(b))for(let L=0,A=b.length;L<A;L++)u(b[L],T,L,E);else u(b,T,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,w,M,E){if(d(y,w,M,E)===!0){let T=y.__offset,x=y.value;if(Array.isArray(x)){let b=0;for(let L=0;L<x.length;L++){let A=x[L],N=_(A,!0);h(A,y.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else h(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,y.__data)}}function h(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function d(y,w,M,E){let T=y.value,x=w+"_"+M;if(Array.isArray(T)){E[x]===void 0&&(E[x]=[]);let b=E[x],L=!1;for(let A=0;A<T.length;A++)f(T[A],b,A)===!0&&(L=!0);return L}return f(T,E,x)}function f(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let E=w[M];if(typeof y=="number"||typeof y=="boolean"){if(E!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(E.equals(y)===!1)return E.copy(y),!0}}return!1}function p(y){let w=y.uniforms,M=0,E=16;for(let x=0,b=w.length;x<b;x++){let L=Array.isArray(w[x])?w[x]:[w[x]];for(let A=0,N=L.length;A<N;A++){let O=L[A],X=Array.isArray(O.value)?O.value:[O.value],D=Array.isArray(w[x])||Array.isArray(O.value),Y=M;for(let K=0,ce=X.length;K<ce;K++){let z=X[K],J=_(z,D),re=M%E,_e=re%J.boundary,Ee=re+_e;M+=_e,Ee!==0&&E-Ee<J.storage&&(M+=E-Ee),K===0&&(Y=M),M+=J.storage}let j=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new j((M-Y)/Float32Array.BYTES_PER_ELEMENT),O.__offset=Y}}let T=M%E;return T>0&&(M+=E-T),y.__size=M,y.__cache={},this}function _(y,w){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function m(y){let w=y.target;w.removeEventListener("dispose",m),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var S1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rs=null;function b1(){return rs===null&&(rs=new Ji(S1,16,16,pr,fn),rs.name="DFG_LUT",rs.minFilter=xn,rs.magFilter=xn,rs.wrapS=xi,rs.wrapT=xi,rs.generateMipmaps=!1,rs.needsUpdate=!0),rs}var Bl=class{constructor(e={}){let{canvas:t=L0(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Bn}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,m=new Set([Wu,Vu,Gu]),g=new Set([Bn,zi,Zo,Os,zu,Hu]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},E=null,T=null,x=[],b=[],L=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,N=!1,O=null,X=null,D=null,Y=null;this._outputColorSpace=Ft;let j=0,K=0,ce=null,z=-1,J=null,re=new Bt,_e=new Bt,Ee=null,ie=new De(0),xe=0,Se=t.width,ge=t.height,de=1,R=null,le=null,pe=new Bt(0,0,Se,ge),Ie=new Bt(0,0,Se,ge),ke=!1,Ue=new hr,Xe=new xu,Ye=!1,Je=!1,Ne=new Ze,ee=new F,Le=new Bt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ct=!1;function Xt(){return ce===null?de:1}let G=n;function bt(S,B){return t.getContext(S,B)}let rt,dt,ve,St,Fe,Ve,C,v,q,me,P,H,W,U,k,te,I,ne,Z,fe,he,Me,Ge;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",Te,!1),G===null){let B="webgl2";if(G=bt(B,S),G===null)throw bt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(S){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),nt("WebGLRenderer: "+S.message),S}function tt(){rt=new Nb(G),rt.init(),he=new g1(G,rt),dt=new bb(G,rt,e,he),ve=new p1(G,rt),dt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),X=G.createFramebuffer(),D=G.createFramebuffer(),Y=G.createFramebuffer(),St=new Fb(G),Fe=new e1,Ve=new m1(G,rt,ve,Fe,dt,he,St),C=new Db(A),v=new zv(G),Me=new Mb(G,v),q=new Ub(G,v,St,Me),me=new zb(G,q,v,Me,St),ne=new Bb(G,dt,Ve),k=new Eb(Fe),P=new QE(A,C,rt,dt,Me,k),H=new v1(A,Fe),W=new n1,U=new l1(rt),I=new vb(A,C,ve,me,p,l),te=new f1(A,me,dt),Ge=new M1(G,St,dt,ve),Z=new Sb(G,rt,St),fe=new Ob(G,rt,St),St.programs=P.programs,A.capabilities=dt,A.extensions=rt,A.properties=Fe,A.renderLists=W,A.shadowMap=te,A.state=ve,A.info=St}_!==Bn&&(L=new kb(_,t.width,t.height,a,s,r));let ye=new op(A,G);this.xr=ye,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(S){S!==void 0&&(de=S,this.setSize(Se,ge,!1))},this.getSize=function(S){return S.set(Se,ge)},this.setSize=function(S,B,se=!0){if(ye.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=S,ge=B,t.width=Math.floor(S*de),t.height=Math.floor(B*de),se===!0&&(t.style.width=S+"px",t.style.height=B+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Se*de,ge*de).floor()},this.setDrawingBufferSize=function(S,B,se){Se=S,ge=B,de=se,t.width=Math.floor(S*se),t.height=Math.floor(B*se),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(_===Bn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(re)},this.getViewport=function(S){return S.copy(pe)},this.setViewport=function(S,B,se,$){S.isVector4?pe.set(S.x,S.y,S.z,S.w):pe.set(S,B,se,$),ve.viewport(re.copy(pe).multiplyScalar(Xt()).round())},this.getScissor=function(S){return S.copy(Ie)},this.setScissor=function(S,B,se,$){S.isVector4?Ie.set(S.x,S.y,S.z,S.w):Ie.set(S,B,se,$),ve.scissor(_e.copy(Ie).multiplyScalar(Xt()).round())},this.getScissorTest=function(){return ke},this.setScissorTest=function(S){ve.setScissorTest(ke=S)},this.setOpaqueSort=function(S){R=S},this.setTransparentSort=function(S){le=S},this.getClearColor=function(S){return S.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,se=!0){let $=0;if(S){let Q=!1;if(ce!==null){let we=ce.texture.format;Q=m.has(we)}if(Q){let we=ce.texture.type,Be=g.has(we),Ae=I.getClearColor(),Ce=I.getClearAlpha(),We=Ae.r,it=Ae.g,yt=Ae.b;Be?(y[0]=We,y[1]=it,y[2]=yt,y[3]=Ce,G.clearBufferuiv(G.COLOR,0,y)):(w[0]=We,w[1]=it,w[2]=yt,w[3]=Ce,G.clearBufferiv(G.COLOR,0,w))}else $|=G.COLOR_BUFFER_BIT}B&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",Te,!1),I.dispose(),W.dispose(),U.dispose(),Ve.dispose(),Fe.dispose(),C.dispose(),me.dispose(),q.dispose(),Me.dispose(),Ge.dispose(),P.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",en),ye.removeEventListener("sessionend",ya),pn.stop()};function qe(S){S.preventDefault(),Ya("WebGLRenderer: Context Lost."),N=!0}function et(){Ya("WebGLRenderer: Context Restored."),N=!1;let S=St.autoReset,B=te.enabled,se=te.autoUpdate,$=te.needsUpdate,Q=te.type;tt(),St.autoReset=S,te.enabled=B,te.autoUpdate=se,te.needsUpdate=$,te.type=Q}function Te(S){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function wt(S){let B=S.target;B.removeEventListener("dispose",wt),Kt(B)}function Kt(S){ai(S),Fe.remove(S)}function ai(S){let B=Fe.get(S).programs;B!==void 0&&(B.forEach(function(se){P.releaseProgram(se)}),S.isShaderMaterial&&P.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,se,$,Q,we){B===null&&(B=Mt);let Be=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ae=Sa(S,B,se,$,Q);ve.setMaterial($,Be);let Ce=se.index,We=1;if($.wireframe===!0){if(Ce=q.getWireframeAttribute(se),Ce===void 0)return;We=2}let it=se.drawRange,yt=se.attributes.position,ze=it.start*We,ct=(it.start+it.count)*We;we!==null&&(ze=Math.max(ze,we.start*We),ct=Math.min(ct,(we.start+we.count)*We)),Ce!==null?(ze=Math.max(ze,0),ct=Math.min(ct,Ce.count)):yt!=null&&(ze=Math.max(ze,0),ct=Math.min(ct,yt.count));let tn=ct-ze;if(tn<0||tn===1/0)return;Me.setup(Q,$,Ae,se,Ce);let zt,ut=Z;if(Ce!==null&&(zt=v.get(Ce),ut=fe,ut.setIndex(zt)),Q.isMesh)$.wireframe===!0?(ve.setLineWidth($.wireframeLinewidth*Xt()),ut.setMode(G.LINES)):ut.setMode(G.TRIANGLES);else if(Q.isLine){let mn=$.linewidth;mn===void 0&&(mn=1),ve.setLineWidth(mn*Xt()),Q.isLineSegments?ut.setMode(G.LINES):Q.isLineLoop?ut.setMode(G.LINE_LOOP):ut.setMode(G.LINE_STRIP)}else Q.isPoints?ut.setMode(G.POINTS):Q.isSprite&&ut.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let mn=Q._multiDrawStarts,He=Q._multiDrawCounts,rn=Q._multiDrawCount,Pt=Ce?v.get(Ce).bytesPerElement:1,fs=Fe.get($).currentProgram.getUniforms();for(let hn=0;hn<rn;hn++)fs.setValue(G,"_gl_DrawID",hn),ut.render(mn[hn]/Pt,He[hn])}else if(Q.isInstancedMesh)ut.renderInstances(ze,tn,Q.count);else if(se.isInstancedBufferGeometry){let mn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,He=Math.min(se.instanceCount,mn);ut.renderInstances(ze,tn,He)}else ut.render(ze,tn)};function Ys(S,B,se,$){O!==null&&S.isNodeMaterial&&O.setObject($,S),Ye===!0&&k.setState(S,se,!1),S.transparent===!0&&S.side===Tn&&S.forceSinglePass===!1?(S.side=In,S.needsUpdate=!0,Sn(S,B,$),S.side=ns,S.needsUpdate=!0,Sn(S,B,$),S.side=Tn):Sn(S,B,$)}this.compile=function(S,B,se=null){se===null&&(se=S),O!==null&&O.renderStart(S,B,se),T=U.get(se),T.init(B),b.push(T),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),S!==se&&S.traverseVisible(function(Q){Q.isLight&&Q.layers.test(B.layers)&&(T.pushLight(Q),Q.castShadow&&T.pushShadow(Q))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),Je=this.localClippingEnabled,Ye=k.init(this.clippingPlanes,Je),Ye===!0&&k.setGlobalState(this.clippingPlanes,B),O!==null&&te.render(T.state.shadowsArray,se,B);let $=new Set;return S.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let we=Q.material;if(we)if(Array.isArray(we))for(let Be=0;Be<we.length;Be++){let Ae=we[Be];Ys(Ae,se,B,Q),$.add(Ae)}else Ys(we,se,B,Q),$.add(we)}),T=b.pop(),O!==null&&O.renderEnd(),$},this.compileAsync=function(S,B,se=null){let $=this.compile(S,B,se);return new Promise(Q=>{function we(){if($.forEach(function(Be){let Ce=Fe.get(Be).currentProgram;(Ce===void 0||Ce.isReady())&&$.delete(Be)}),$.size===0){Q(S);return}setTimeout(we,10)}rt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ri=null;function pc(S){Ri&&Ri(S)}function en(){pn.stop()}function ya(){pn.start()}let pn=new ox;pn.setAnimationLoop(pc),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(S){Ri=S,ye.setAnimationLoop(S),S===null?pn.stop():pn.start()},ye.addEventListener("sessionstart",en),ye.addEventListener("sessionend",ya),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;O!==null&&O.renderStart(S,B);let se=ye.enabled===!0&&ye.isPresenting===!0,$=L!==null&&(ce===null||se)&&L.begin(A,ce);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(B),B=ye.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,B,ce),T=U.get(S,b.length),T.init(B),T.state.textureUnits=Ve.getTextureUnits(),b.push(T),Ne.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),B.isArrayCamera?Xe.setFromArrayCamera(B):Ue.setFromProjectionMatrix(Ne,_i,B.reversedDepth),Je=this.localClippingEnabled,Ye=k.init(this.clippingPlanes,Je),E=W.get(S,x.length),E.init(),x.push(E),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let Be=A.xr.getDepthSensingMesh();Be!==null&&io(Be,B,-1/0,A.sortObjects)}io(S,B,0,A.sortObjects),E.finish(),O!==null&&O.updateLights(T.state.lightsArray),A.sortObjects===!0&&E.sort(R,le),Ct=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ct&&I.addToRenderList(E,S),this.info.autoReset===!0&&this.info.reset(),Ye===!0&&k.beginShadows();let Q=T.state.shadowsArray;if(te.render(Q,S,B),Ye===!0&&k.endShadows(),($&&L.hasRenderPass())===!1){let Be=E.opaque,Ae=E.transmissive;if(T.setupLights(),B.isArrayCamera){let Ce=B.cameras;if(Ae.length>0)for(let We=0,it=Ce.length;We<it;We++){let yt=Ce[We];Jn(Be,Ae,S,yt)}Ct&&I.render(S);for(let We=0,it=Ce.length;We<it;We++){let yt=Ce[We];so(E,S,yt,yt.viewport)}}else Ae.length>0&&Jn(Be,Ae,S,B),Ct&&I.render(S),so(E,S,B)}ce!==null&&K===0&&(Ve.updateMultisampleRenderTarget(ce),Ve.updateRenderTargetMipmap(ce)),$&&L.end(A),S.isScene===!0&&S.onAfterRender(A,S,B),Me.resetDefaultState(),z=-1,J=null,b.pop(),b.length>0?(T=b[b.length-1],Ve.setTextureUnits(T.state.textureUnits),Ye===!0&&k.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?E=x[x.length-1]:E=null,O!==null&&O.renderEnd()};function io(S,B,se,$){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)se=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){let Be=B.isArrayCamera?Xe:Ue;if(!S.frustumCulled||S.intersectsFrustum(Be)){$&&Le.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ne);let Ae=me.update(S),Ce=S.material;Ce.visible&&E.push(S,Ae,Ce,se,Le.z,null,B)}}else if(S.isMesh||S.isLine||S.isPoints){let Be=B.isArrayCamera?Xe:Ue;if(!S.frustumCulled||S.intersectsFrustum(Be)){let Ae=me.update(S),Ce=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Le.copy(S.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Le.copy(Ae.boundingSphere.center)),Le.applyMatrix4(S.matrixWorld).applyMatrix4(Ne)),Array.isArray(Ce)){let We=Ae.groups;for(let it=0,yt=We.length;it<yt;it++){let ze=We[it],ct=Ce[ze.materialIndex];ct&&ct.visible&&E.push(S,Ae,ct,se,Le.z,ze,B)}}else Ce.visible&&E.push(S,Ae,Ce,se,Le.z,null,B)}}}let we=S.children;for(let Be=0,Ae=we.length;Be<Ae;Be++)io(we[Be],B,se,$)}function so(S,B,se,$){let{opaque:Q,transmissive:we,transparent:Be}=S;T.setupLightsView(se),Ye===!0&&k.setGlobalState(A.clippingPlanes,se),$&&ve.viewport(re.copy($)),Q.length>0&&Gn(Q,B,se),we.length>0&&Gn(we,B,se),Be.length>0&&Gn(Be,B,se),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Jn(S,B,se,$){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let ze=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new an(1,1,{generateMipmaps:!0,type:ze?fn:Bn,minFilter:Mi,samples:Math.max(4,dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let we=T.state.transmissionRenderTarget[$.id],Be=$.viewport||re;we.setSize(Be.z*A.transmissionResolutionScale,Be.w*A.transmissionResolutionScale);let Ae=A.getRenderTarget(),Ce=A.getActiveCubeFace(),We=A.getActiveMipmapLevel();A.setRenderTarget(we),A.getClearColor(ie),xe=A.getClearAlpha(),xe<1&&A.setClearColor(16777215,.5),A.clear(),Ct&&I.render(se);let it=A.toneMapping;A.toneMapping=is;let yt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),Ye===!0&&k.setGlobalState(A.clippingPlanes,$),Gn(S,se,$),Ve.updateMultisampleRenderTarget(we),Ve.updateRenderTargetMipmap(we),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ct=0,tn=B.length;ct<tn;ct++){let zt=B[ct],{object:ut,geometry:mn,material:He,group:rn}=zt;if(He.side===Tn&&ut.layers.test($.layers)){let Pt=He.side;He.side=In,He.needsUpdate=!0,Mr(ut,se,$,mn,He,rn),He.side=Pt,He.needsUpdate=!0,ze=!0}}ze===!0&&(Ve.updateMultisampleRenderTarget(we),Ve.updateRenderTargetMipmap(we))}A.setRenderTarget(Ae,Ce,We),A.setClearColor(ie,xe),yt!==void 0&&($.viewport=yt),A.toneMapping=it}function Gn(S,B,se){let $=B.isScene===!0?B.overrideMaterial:null;for(let Q=0,we=S.length;Q<we;Q++){let Be=S[Q],{object:Ae,geometry:Ce,group:We}=Be,it=Be.material;it.allowOverride===!0&&$!==null&&(it=$),Ae.layers.test(se.layers)&&Mr(Ae,B,se,Ce,it,We)}}function Mr(S,B,se,$,Q,we){O!==null&&Q.isNodeMaterial&&O.setObject(S,Q),S.onBeforeRender(A,B,se,$,Q,we),S.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Q.onBeforeRender(A,B,se,$,S,we),Q.transparent===!0&&Q.side===Tn&&Q.forceSinglePass===!1?(Q.side=In,Q.needsUpdate=!0,A.renderBufferDirect(se,B,$,Q,S,we),Q.side=ns,Q.needsUpdate=!0,A.renderBufferDirect(se,B,$,Q,S,we),Q.side=Tn):A.renderBufferDirect(se,B,$,Q,S,we),S.onAfterRender(A,B,se,$,Q,we)}function mc(S){let B=0;for(let se of S)se.texture!==null&&B++;return B}function Sn(S,B,se){B.isScene!==!0&&(B=Mt);let $=Fe.get(S),Q=T.state.lights,we=T.state.shadowsArray,Be=Q.state.version,Ae=P.getParameters(S,Q.state,we,B,se,T.state.lightProbeGridArray),Ce=P.getProgramCacheKey(Ae),We=$.programs;$.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,$.fog=B.fog;let it=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;$.envMap=C.get(S.envMap||$.environment,it),$.envMapRotation=$.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",wt),We=new Map,$.programs=We,$.programVariants=new Map);let yt=We.get(Ce);if(yt!==void 0){if($.currentProgram===yt&&$.lightsStateVersion===Be)return Ma(S,Ae),yt}else Ae.uniforms=P.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,se,Ae),S.onBeforeCompile(Ae,A),yt=P.acquireProgram(Ae,Ce),We.set(Ce,yt),$.uniforms=Ae.uniforms;let ze=$.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=k.uniform),Ma(S,Ae),$.needsLights=Ea(S),$.lightsStateVersion=Be,$.needsLights&&(ze.ambientLightColor.value=Q.state.ambient,ze.lightProbe.value=Q.state.probe,ze.sunLights.value=Q.state.sun,ze.sunLightShadows.value=Q.state.sunShadow,ze.directionalLights.value=Q.state.directional,ze.directionalLightShadows.value=Q.state.directionalShadow,ze.spotLights.value=Q.state.spot,ze.spotLightShadows.value=Q.state.spotShadow,ze.rectAreaLights.value=Q.state.rectArea,ze.ltc_1.value=Q.state.rectAreaLTC1,ze.ltc_2.value=Q.state.rectAreaLTC2,ze.pointLights.value=Q.state.point,ze.pointLightShadows.value=Q.state.pointShadow,ze.hemisphereLights.value=Q.state.hemi,ze.sunShadowMatrix.value=Q.state.sunShadowMatrix,ze.sunShadowCascade.value=Q.state.sunShadowCascade,ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ze.spotLightMatrix.value=Q.state.spotLightMatrix,ze.spotLightMap.value=Q.state.spotLightMap,ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),$.numLightProbeGrids=mc(T.state.lightProbeGridArray),$.currentProgram=yt,$.uniformsList=null,yt}function $s(S,B,se,$,Q){let we=Fe.get(S),Be=we.currentProgram.id+","+$+","+Q,Ae=we.programVariants.get(Be);return Ae===void 0?(Ae=Sn(S,B,se),we.programVariants.set(Be,Ae)):(we.currentProgram=Ae,we.uniformsList=null,we.outputColorSpace=$,we.toneMapping=Q),Ae}function va(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Qo.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Ma(S,B){let se=Fe.get(S);se.outputColorSpace=B.outputColorSpace,se.batching=B.batching,se.batchingColor=B.batchingColor,se.instancing=B.instancing,se.instancingColor=B.instancingColor,se.instancingMorph=B.instancingMorph,se.skinning=B.skinning,se.morphTargets=B.morphTargets,se.morphNormals=B.morphNormals,se.morphColors=B.morphColors,se.morphTargetsCount=B.morphTargetsCount,se.numClippingPlanes=B.numClippingPlanes,se.numIntersection=B.numClipIntersection,se.vertexAlphas=B.vertexAlphas,se.vertexTangents=B.vertexTangents,se.toneMapping=B.toneMapping}function Sa(S,B,se,$,Q){B.isScene!==!0&&(B=Mt),Ve.resetTextureUnits();let we=B.fog,Be=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?B.environment:null,Ae=ce===null?A.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:lt.workingColorSpace,Ce=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,We=C.get($.envMap||Be,Ce),it=$.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,yt=!!se.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,tn=!!se.morphAttributes.color,zt=is;$.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(zt=A.toneMapping);let ut=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,mn=ut!==void 0?ut.length:0,He=Fe.get($),rn=T.state.lights;if(Ye===!0&&(Je===!0||S!==J)){let Ht=S===J&&$.id===z;k.setState($,S,Ht)}let Pt=!1,fs=!1;$.version===He.__version?He.needsLights&&He.lightsStateVersion!==rn.state.version||Q.isBatchedMesh&&He.batching===!1||!Q.isBatchedMesh&&He.batching===!0||Q.isBatchedMesh&&He.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&He.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&He.instancing===!1||!Q.isInstancedMesh&&He.instancing===!0||Q.isSkinnedMesh&&He.skinning===!1||!Q.isSkinnedMesh&&He.skinning===!0||Q.isInstancedMesh&&He.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&He.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&He.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&He.instancingMorph===!1&&Q.morphTexture!==null||He.envMap!==We||$.fog===!0&&He.fog!==we||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==k.numPlanes||He.numIntersection!==k.numIntersection)||He.vertexAlphas!==it||He.vertexTangents!==yt||He.morphTargets!==ze||He.morphNormals!==ct||He.morphColors!==tn||He.morphTargetsCount!==mn||He.numLightProbeGrids!==mc(T.state.lightProbeGridArray)?Pt=!0:(He.outputColorSpace!==Ae||He.toneMapping!==zt)&&(fs=!0):(Pt=!0,He.__version=$.version);let hn=He.currentProgram;(Pt===!0||fs===!0)&&(hn=fs===!0?$s($,B,Q,Ae,zt):Sn($,B,Q),O&&$.isNodeMaterial&&O.onUpdateProgram($,hn,He));let ro=!1,Ci=!1,ps=!1,At=hn.getUniforms(),gn=He.uniforms;if(ve.useProgram(hn.program)&&(ro=!0,Ci=!0,ps=!0),$.id!==z&&(z=$.id,Ci=!0),ro||J!==S){ve.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),At.setValue(G,"projectionMatrix",S.projectionMatrix),At.setValue(G,"viewMatrix",S.matrixWorldInverse);let ln=At.map.cameraPosition;ln!==void 0&&ln.setValue(G,ee.setFromMatrixPosition(S.matrixWorld)),dt.logarithmicDepthBuffer&&At.setValue(G,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&At.setValue(G,"isOrthographic",S.isOrthographicCamera===!0),J!==S&&(J=S,Ci=!0,ps=!0)}if(He.needsLights&&(rn.state.sunShadowMap.length>0&&At.setValue(G,"sunShadowMap",rn.state.sunShadowMap,Ve),rn.state.directionalShadowMap.length>0&&At.setValue(G,"directionalShadowMap",rn.state.directionalShadowMap,Ve),rn.state.spotShadowMap.length>0&&At.setValue(G,"spotShadowMap",rn.state.spotShadowMap,Ve),rn.state.pointShadowMap.length>0&&At.setValue(G,"pointShadowMap",rn.state.pointShadowMap,Ve)),Q.isSkinnedMesh){At.setOptional(G,Q,"bindMatrix"),At.setOptional(G,Q,"bindMatrixInverse");let Ht=Q.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),At.setValue(G,"boneTexture",Ht.boneTexture,Ve))}Q.isBatchedMesh&&(At.setOptional(G,Q,"batchingTexture"),At.setValue(G,"batchingTexture",Q._matricesTexture,Ve),At.setOptional(G,Q,"batchingIdTexture"),At.setValue(G,"batchingIdTexture",Q._indirectTexture,Ve),At.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&At.setValue(G,"batchingColorTexture",Q._colorsTexture,Ve));let li=se.morphAttributes;if((li.position!==void 0||li.normal!==void 0||li.color!==void 0)&&ne.update(Q,se,hn),(Ci||He.receiveShadow!==Q.receiveShadow)&&(He.receiveShadow=Q.receiveShadow,At.setValue(G,"receiveShadow",Q.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&B.environment!==null&&(gn.envMapIntensity.value=B.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=b1()),Ci){if(At.setValue(G,"toneMappingExposure",A.toneMappingExposure),He.needsLights&&ba(gn,ps),we&&$.fog===!0&&H.refreshFogUniforms(gn,we),H.refreshMaterialUniforms(gn,$,de,ge,T.state.transmissionRenderTarget[S.id]),He.needsLights&&He.numLightProbeGrids>0){let Ht=M,ln=0;for(let Pi of T.state.lightProbeGridArray)Pi.texture!==null&&(Ht.textures[ln]=Pi.texture,Ht.min[ln]=Pi.boundingBox.min,Ht.max[ln]=Pi.boundingBox.max,Ht.resolution[ln]=Pi.resolution,ln++);for(let Pi in Ht)Ht[Pi].length=ln;gn.probesSH.value=Ht.textures,gn.probesMin.value=Ht.min,gn.probesMax.value=Ht.max,gn.probesResolution.value=Ht.resolution}Qo.upload(G,va(He),gn,Ve)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Qo.upload(G,va(He),gn,Ve),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&At.setValue(G,"center",Q.center),At.setValue(G,"modelViewMatrix",Q.modelViewMatrix),At.setValue(G,"normalMatrix",Q.normalMatrix),At.setValue(G,"modelMatrix",Q.matrixWorld),$.uniformsGroups!==void 0){let Ht=$.uniformsGroups;for(let ln=0,Pi=Ht.length;ln<Pi;ln++){let xc=Ht[ln];Ge.update(xc,hn),Ge.bind(xc,hn)}}return hn}function ba(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Ea(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(S,B,se){let $=Fe.get(S);$.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Fe.get(S.texture).__webglTexture=B,Fe.get(S.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:se,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let se=Fe.get(S);se.__webglFramebuffer=B,se.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,se=0){ce=S,j=B,K=se;let $=null,Q=!1,we=!1;if(S){let Ae=Fe.get(S);if(Ae.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(G.FRAMEBUFFER,Ae.__webglFramebuffer),re.copy(S.viewport),_e.copy(S.scissor),Ee=S.scissorTest,ve.viewport(re),ve.scissor(_e),ve.setScissorTest(Ee),z=-1;return}else if(Ae.__webglFramebuffer===void 0)Ve.setupRenderTarget(S);else if(Ae.__hasExternalTextures)Ve.rebindTextures(S,Fe.get(S.texture).__webglTexture,Fe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let it=S.depthTexture;if(Ae.__boundDepthTexture!==it){if(it!==null&&Fe.has(it)&&(S.width!==it.image.width||S.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(S)}}let Ce=S.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(we=!0);let We=Fe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(We[B])?$=We[B][se]:$=We[B],Q=!0):S.samples>0&&Ve.useMultisampledRTT(S)===!1?$=Fe.get(S).__webglMultisampledFramebuffer:Array.isArray(We)?$=We[se]:$=We,re.copy(S.viewport),_e.copy(S.scissor),Ee=S.scissorTest}else re.copy(pe).multiplyScalar(de).floor(),_e.copy(Ie).multiplyScalar(de).floor(),Ee=ke;if(se!==0&&($=X),ve.bindFramebuffer(G.FRAMEBUFFER,$)&&ve.drawBuffers(S,$),ve.viewport(re),ve.scissor(_e),ve.setScissorTest(Ee),Q){let Ae=Fe.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ae.__webglTexture,se)}else if(we){let Ae=B;for(let Ce=0;Ce<S.textures.length;Ce++){let We=Fe.get(S.textures[Ce]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ce,We.__webglTexture,se,Ae)}}else if(S!==null&&se!==0){let Ae=Fe.get(S.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ae.__webglTexture,se)}z=-1};function gc(S){let B=Fe.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=dt.textureFormatReadable(S.format),B.__typeReadable=dt.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,se,$,Q,we,Be,Ae=0){if(!(S&&S.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Be!==void 0&&(Ce=Ce[Be],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){ve.bindFramebuffer(G.FRAMEBUFFER,Ce);try{let We=S.textures[Ae],it=We.format,yt=We.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae);let ze=gc(We);if(ze.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-$&&se>=0&&se<=S.height-Q&&G.readPixels(B,se,$,Q,he.convert(it),he.convert(yt),we)}finally{let We=ce!==null?Fe.get(ce).__webglFramebuffer:null;ve.bindFramebuffer(G.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(S,B,se,$,Q,we,Be,Ae=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Fe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Be!==void 0&&(Ce=Ce[Be],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(B>=0&&B<=S.width-$&&se>=0&&se<=S.height-Q){ve.bindFramebuffer(G.FRAMEBUFFER,Ce);let We=S.textures[Ae],it=We.format,yt=We.type;S.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ae);let ze=gc(We);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,ct),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),G.readPixels(B,se,$,Q,he.convert(it),he.convert(yt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let tn=ce!==null?Fe.get(ce).__webglFramebuffer:null;ve.bindFramebuffer(G.FRAMEBUFFER,tn);let zt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await N0(G,zt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,ct),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(ct),G.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,se=0){let $=Math.pow(2,-se),Q=Math.floor(S.image.width*$),we=Math.floor(S.image.height*$),Be=B!==null?B.x:0,Ae=B!==null?B.y:0;Ve.setTexture2D(S,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Be,Ae,Q,we),ve.unbindTexture()},this.copyTextureToTexture=function(S,B,se=null,$=null,Q=0,we=0){let Be,Ae,Ce,We,it,yt,ze,ct,tn,zt=S.isCompressedTexture?S.mipmaps[we]:S.image;if(se!==null)Be=se.max.x-se.min.x,Ae=se.max.y-se.min.y,Ce=se.isBox3?se.max.z-se.min.z:1,We=se.min.x,it=se.min.y,yt=se.isBox3?se.min.z:0;else{let At=Math.pow(2,-Q);Be=Math.floor(zt.width*At),Ae=Math.floor(zt.height*At),S.isDataArrayTexture?Ce=zt.depth:S.isData3DTexture?Ce=Math.floor(zt.depth*At):Ce=1,We=0,it=0,yt=0}$!==null?(ze=$.x,ct=$.y,tn=$.z):(ze=0,ct=0,tn=0);let ut=he.convert(B.format),mn=he.convert(B.type),He;B.isData3DTexture?(Ve.setTexture3D(B,0),He=G.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(Ve.setTexture2DArray(B,0),He=G.TEXTURE_2D_ARRAY):(Ve.setTexture2D(B,0),He=G.TEXTURE_2D),ve.activeTexture(G.TEXTURE0),ve.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,B.flipY),ve.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),ve.pixelStorei(G.UNPACK_ALIGNMENT,B.unpackAlignment);let rn=ve.getParameter(G.UNPACK_ROW_LENGTH),Pt=ve.getParameter(G.UNPACK_IMAGE_HEIGHT),fs=ve.getParameter(G.UNPACK_SKIP_PIXELS),hn=ve.getParameter(G.UNPACK_SKIP_ROWS),ro=ve.getParameter(G.UNPACK_SKIP_IMAGES);ve.pixelStorei(G.UNPACK_ROW_LENGTH,zt.width),ve.pixelStorei(G.UNPACK_IMAGE_HEIGHT,zt.height),ve.pixelStorei(G.UNPACK_SKIP_PIXELS,We),ve.pixelStorei(G.UNPACK_SKIP_ROWS,it),ve.pixelStorei(G.UNPACK_SKIP_IMAGES,yt);let Ci=S.isDataArrayTexture||S.isData3DTexture,ps=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let At=Fe.get(S),gn=Fe.get(B),li=Fe.get(At.__renderTarget),Ht=Fe.get(gn.__renderTarget);ve.bindFramebuffer(G.READ_FRAMEBUFFER,li.__webglFramebuffer),ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let ln=0;ln<Ce;ln++)Ci&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.get(S).__webglTexture,Q,yt+ln),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Fe.get(B).__webglTexture,we,tn+ln)),G.blitFramebuffer(We,it,We+Be,it+Ae,ze,ct,ze+Be,ct+Ae,G.DEPTH_BUFFER_BIT,G.NEAREST);ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||S.isRenderTargetTexture||Fe.has(S)){let At=Fe.get(S),gn=Fe.get(B);ve.bindFramebuffer(G.READ_FRAMEBUFFER,D),ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,Y);for(let li=0;li<Ce;li++)Ci?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,At.__webglTexture,Q,yt+li):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,At.__webglTexture,Q),ps?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,gn.__webglTexture,we,tn+li):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,gn.__webglTexture,we),Q!==0?G.blitFramebuffer(We,it,We+Be,it+Ae,ze,ct,ze+Be,ct+Ae,G.COLOR_BUFFER_BIT,G.NEAREST):ps?G.copyTexSubImage3D(He,we,ze,ct,tn+li,We,it,Be,Ae):G.copyTexSubImage2D(He,we,ze,ct,We,it,Be,Ae);ve.bindFramebuffer(G.READ_FRAMEBUFFER,null),ve.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else ps?S.isDataTexture||S.isData3DTexture?G.texSubImage3D(He,we,ze,ct,tn,Be,Ae,Ce,ut,mn,zt.data):B.isCompressedArrayTexture?G.compressedTexSubImage3D(He,we,ze,ct,tn,Be,Ae,Ce,ut,zt.data):G.texSubImage3D(He,we,ze,ct,tn,Be,Ae,Ce,ut,mn,zt):S.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,ze,ct,Be,Ae,ut,mn,zt.data):S.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,ze,ct,zt.width,zt.height,ut,zt.data):G.texSubImage2D(G.TEXTURE_2D,we,ze,ct,Be,Ae,ut,mn,zt);ve.pixelStorei(G.UNPACK_ROW_LENGTH,rn),ve.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt),ve.pixelStorei(G.UNPACK_SKIP_PIXELS,fs),ve.pixelStorei(G.UNPACK_SKIP_ROWS,hn),ve.pixelStorei(G.UNPACK_SKIP_IMAGES,ro),we===0&&B.generateMipmaps===!0&&B.mipmapsAutoUpdate===!0&&G.generateMipmap(He),ve.unbindTexture()},this.initRenderTarget=function(S){Fe.get(S).__webglFramebuffer===void 0&&Ve.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ve.setTextureCube(S,0):S.isData3DTexture?Ve.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ve.setTexture2DArray(S,0):Ve.setTexture2D(S,0),ve.unbindTexture()},this.resetState=function(){j=0,K=0,ce=null,ve.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};function Bs(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ut;l.morphTargetsRelative=a;let c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0,f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in h.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(h.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in h.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;if(h.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;o[p]===void 0&&(o[p]=[]),o[p].push(h.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of morph attributes."),null;if(e){let p;if(t)p=h.index.count;else if(h.attributes.position!==void 0)p=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let p=0;p<f.count;++p)h.push(f.getX(p)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=xx(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let _=0;_<o[u].length;++_)f.push(o[u][_][d]);let p=xx(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(p)}}}return l}function xx(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let o=new e(r),a=new Vt(o,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let p=0;p<t;p++){let _=u.getComponent(d,p);a.setComponent(d+h,p,_)}}else o.set(u.array,l);l+=u.count*t}return s!==void 0&&(a.gpuType=s),a}function ap(i,e){if(e===If)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Jo||e===Nl){let t=i.getIndex();if(t===null){let r=[],o=i.getAttribute("position");if(o!==void 0){for(let a=0;a<o.count;a++)r.push(a);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Jo)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Ah(i){let e=new Map,t=new Map,n=i.clone();return _x(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function _x(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)_x(i.children[n],e.children[n],t)}var gr=class extends ts{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new pp(t)}),this.register(function(t){return new mp(t)}),this.register(function(t){return new gp(t)}),this.register(function(t){return new Tp(t)}),this.register(function(t){return new wp(t)}),this.register(function(t){return new Ap(t)}),this.register(function(t){return new _p(t)}),this.register(function(t){return new yp(t)}),this.register(function(t){return new vp(t)}),this.register(function(t){return new Mp(t)}),this.register(function(t){return new fp(t)}),this.register(function(t){return new Sp(t)}),this.register(function(t){return new xp(t)}),this.register(function(t){return new Ep(t)}),this.register(function(t){return new bp(t)}),this.register(function(t){return new hp(t)}),this.register(function(t){return new Rh(t,gt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rh(t,gt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new Rp(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=Us.extractUrlBase(e);o=Us.resolveURL(c,this.path)}else o=Us.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Go(this.manager);l.setPriority(this.priority),l.setCache(this.cache),l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bx){try{o[gt.KHR_BINARY_GLTF]=new Cp(e)}catch(h){s&&s(h);return}r=JSON.parse(o[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Op(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:o[h]=new dp;break;case gt.KHR_DRACO_MESH_COMPRESSION:o[h]=new Pp(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:o[h]=new Ip;break;case gt.KHR_MESH_QUANTIZATION:o[h]=new Lp;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function E1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function on(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},hp=class{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new De(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],qn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new fr(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new kr(u),c.distance=h;break;case"spot":c=new ml(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),ls(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},dp=class{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return jt}extendParams(e,t,n){let s=[];e.color=new De(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],qn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(s)}},fp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},pp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(r,r)}return Promise.all(s)}},mp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.diffuseRoughness=n.diffuseRoughnessFactor!==void 0?n.diffuseRoughnessFactor:0,n.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"diffuseRoughnessMap",n.diffuseRoughnessTexture)),Promise.all(s)}},gp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},xp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessMinimum=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessMaximum=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},_p=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],qn)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,Ft)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},yp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},vp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(r[0],r[1],r[2],qn),Promise.all(s)}},Mp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},Sp=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(r[0],r[1],r[2],qn),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,Ft)),Promise.all(s)}},bp=class{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ep=class{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return on(this.parser,e,this.name)!==null?Yn:null}extendMaterialParams(e,t){let n=on(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Tp=class{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},wp=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Ap=class{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Rh=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Rp=class{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Ei.TRIANGLES&&c.mode!==Ei.TRIANGLE_STRIP&&c.mode!==Ei.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let p of h){let _=new Ze,m=new F,g=new Un,y=new F(1,1,1),w=new nn(p.geometry,p.material,d);for(let E=0;E<d;E++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&g.fromBufferAttribute(l.ROTATION,E),l.SCALE&&y.fromBufferAttribute(l.SCALE,E),w.setMatrixAt(E,_.compose(m,g,y));let M=null;for(let E in l)if(E==="_COLOR_0"){let T=l[E];w.instanceColor=new Cs(T.array,T.itemSize,T.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(M===null){let x=w.geometry;M=new Ut,M.name=x.name;for(let b in x.attributes)M.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)M.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&M.setIndex(x.index),M.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)M.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(M.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(M.boundingSphere=x.boundingSphere.clone()),M.drawRange.start=x.drawRange.start,M.drawRange.count=x.drawRange.count,M.userData=Object.assign({},x.userData),w.geometry=M}let T=l[E];M.setAttribute(E,new Cs(T.array,T.itemSize,T.normalized))}mt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),f.push(w)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},bx="glTF",Hl=12,yx={JSON:1313821514,BIN:5130562},Cp=class{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Hl),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Hl,r=new DataView(e,Hl),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===yx.JSON){let c=new Uint8Array(e,Hl+o,a);this.content=n.decode(c)}else if(l===yx.BIN){let c=Hl+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Pp=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let u in o){let h=Np[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Np[u]||u.toLowerCase();if(o[u]!==void 0){let d=n.accessors[e.attributes[u]],f=na[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let p in f.attributes){let _=f.attributes[p],m=l[p];m!==void 0&&(_.normalized=m)}h(f)},a,c,qn,d)})})}},Ip=class{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Lp=class{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}},Ch=class extends es{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,p=e*c,_=p-c,m=-2*f+3*d,g=f-d,y=1-m,w=g-d+h;for(let M=0;M!==a;M++){let E=o[_+M+a],T=o[_+M+l]*u,x=o[p+M+a],b=o[p+M]*u;r[M]=y*E+w*T+m*x+g*b}return r}},T1=new Un,Dp=class extends Ch{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return T1.fromArray(r).normalize().toArray(r),r}},Ei={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},na={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},vx={9728:qt,9729:xn,9984:Fu,9985:Ko,9986:qr,9987:Mi},Mx={33071:xi,33648:Po,10497:ti},lp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Np={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},w1={CUBICSPLINE:void 0,LINEAR:Nr,STEP:Dr},cp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function A1(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new ii({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ns})),i.DefaultMaterial}function $r(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function ls(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function R1(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;o.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function C1(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function P1(i){let e,t=i.extensions&&i.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+up(t.attributes):e=i.indices+":"+up(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+up(i.targets[n]);return e}function up(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Up(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function I1(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var L1=new Ze,Op=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new E1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?(this.textureLoader=new Ns(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new gl(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Go(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return $r(r,a,s),ls(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,u]of o.children.entries())r(u,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(Us.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=lp[s.type],a=na[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Vt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=lp[s.type],c=na[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,p=s.normalized===!0,_,m;if(f&&f!==h){let g=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,w=t.cache.get(y);w||(_=new c(a,g*f,s.count*f/u),w=new Fo(_,f/u),t.cache.add(y,w)),m=new Bo(w,l,d%f/u,p)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Vt(_,l,p);if(s.sparse!==void 0){let g=lp.SCALAR,y=na[s.sparse.indices.componentType],w=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,E=new y(o[1],w,s.sparse.count*g),T=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Vt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let x=0,b=E.length;x<b;x++){let L=E[x];if(m.setX(L,T[x*l]),l>=2&&m.setY(L,T[x*l+1]),l>=3&&m.setZ(L,T[x*l+2]),l>=4&&m.setW(L,T[x*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return u.magFilter=vx[d.magFilter]||xn,u.minFilter=vx[d.minFilter]||Mi,u.wrapS=Mx[d.wrapS]||ti,u.wrapT=Mx[d.wrapT]||ti,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==qt&&u.minFilter!==xn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1,u;if(t.isKTX2Loader===!0&&o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(d){return new Promise(function(f,p){t.parse(d,f,p)})});else{if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");u=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let _=f;t.isImageBitmapLoader===!0&&(_=function(m){let g=new _n(m);g.needsUpdate=!0,f(g)}),t.load(Us.resolveURL(d,r.path),_,void 0,p)})})}let h=u.then(function(d){return c===!0&&a.revokeObjectURL(l),ls(d,o),d.userData.mimeType=o.mimeType||I1(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Ho,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new Or,On.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ii}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[gt.KHR_MATERIALS_UNLIT]){let h=s[gt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],qn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Tn);let u=r.alphaMode||cp.OPAQUE;if(u===cp.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===cp.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==jt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==jt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==jt){let h=r.emissiveFactor;a.emissive=new De().setRGB(h[0],h[1],h[2],qn)}return r.emissiveTexture!==void 0&&o!==jt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let h=new o(a);return r.name&&(h.name=r.name),ls(h,r),t.associations.set(h,{materials:e}),r.extensions&&$r(s,h,r),h})}createUniqueName(e){let t=Gt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Sx(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],u=P1(c),h=s[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Sx(new Ut,c,t),c.mode===Ei.TRIANGLE_STRIP?d=d.then(f=>ap(f,Nl)):c.mode===Ei.TRIANGLE_FAN&&(d=d.then(f=>ap(f,Jo))),s[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let u=o[l].material===void 0?A1(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(async function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,p=u.length;f<p;f++){let _=u[f],m=o[f],g,y=c[f];if(m.mode===Ei.TRIANGLES||m.mode===Ei.TRIANGLE_STRIP||m.mode===Ei.TRIANGLE_FAN||m.mode===void 0){let w=r.isSkinnedMesh===!0,M=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");w&&M===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=w&&M?new ja(_,y):new je(_,y),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(m.mode===Ei.LINES)g=new el(_,y);else if(m.mode===Ei.LINE_STRIP)g=new Fr(_,y);else if(m.mode===Ei.LINE_LOOP)g=new Br(_,y);else if(m.mode===Ei.POINTS)g=new tl(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&C1(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),ls(g,r),m.extensions&&$r(s,g,m),t.assignFinalMaterial(g),h.push(g)}for(let f=0,p=h.length;f<p;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&$r(s,h[0],r),h[0];let d=new Wt;r.extensions&&$r(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,p=h.length;f<p;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Pn(Si.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),ls(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){let h=o[c];if(h){a.push(h);let d=new Ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Qa(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],p=s.samplers[f.sampler],_=f.target,m=_.node,g=s.parameters!==void 0?s.parameters[p.input]:p.input,y=s.parameters!==void 0?s.parameters[p.output]:p.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",g)),l.push(this.getDependency("accessor",y)),c.push(p),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],p=h[2],_=h[3],m=h[4],g=[];for(let w=0,M=d.length;w<M;w++){let E=d[w],T=f[w],x=p[w],b=_[w],L=m[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let A=n._createAnimationTracks(E,T,x,b,L);if(A)for(let N=0;N<A.length;N++)g.push(A[N])}let y=new zr(r,void 0,g);return ls(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,L1)});for(let f=0,p=h.length;f<p;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,p=h[0];u.pivot=new F().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new zo:c.length>1?u=new Wt:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),ls(u,r),r.extensions&&$r(n,u,r),r.matrix!==void 0){let h=new Ze;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Wt;n.name&&(r.name=s.createUniqueName(n.name)),ls(r,n),n.extensions&&$r(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++){let d=l[u];d.parent!==null?r.add(Ah(d)):r.add(d)}let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof On||d instanceof _n)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];function c(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}mr[r.path]===mr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(a);let u;switch(mr[r.path]){case mr.weights:u=Is;break;case mr.rotation:u=Ls;break;case mr.translation:case mr.scale:u=dr;break;default:n.itemSize===1?u=Is:u=dr;break}let h=s.interpolation!==void 0?w1[s.interpolation]:Nr,d=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){let _=new u(l[f]+"."+mr[r.path],t.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Up(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Ls?Dp:Ch;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function D1(i,e,t){let n=e.attributes,s=new Jt;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),a.normalized){let u=Up(na[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new F,l=new F;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,p=d.max;if(f!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(p[2]))),d.normalized){let _=Up(na[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new ni;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Sx(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Np[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return lt.workingColorSpace!==qn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),ls(i,e),D1(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?R1(i,e.targets,t):i})}var $n=(i={})=>new ii({roughness:.5,metalness:0,...i}),di=3.9,Ex=Math.SQRT1_2,Tx={leafsDark:5221973,leafsGreen:8311914,grass:5813333,stone:14541806,stoneDark:11187657,_defaultMat:14541806,roof:8030378,"kenney/space/metalRed":39387,"kenney/space/metal":16777215,"kenney/space/metalDark":12635100,"kenney/space/dark":3818598},wx=new Map,Ax=new Map;function Bp(i){let e=wx.get(i);return e||wx.set(i,e=new gr().loadAsync(`models/${i}.glb`).then(t=>{let n=i.slice(0,i.lastIndexOf("/"));return t.scene.traverse(s=>{s.castShadow=s.receiveShadow=!0;let r=s;if(!r.isMesh)return;let o=r.material,a=n+"/"+o.name,l=Ax.get(a);l||Ax.set(a,l=o.map?Object.assign(o,{roughness:.55,metalness:0}):$n({color:Tx[a]??Tx[o.name]??o.color,flatShading:!0})),r.material=l}),t.scene})),e}function Zr(i,e){i.deleteAttribute("uv");let t=new De(e),n=i.attributes.position.count,s=new Float32Array(n*3);for(let r=0;r<n;r++)t.toArray(s,r*3);return i.setAttribute("color",new Vt(s,3))}function Lh(i,e){let t={value:new De(e)};return i.traverse(n=>{let s=n;if(!s.isMesh)return;let r=s.material.clone();r.onBeforeCompile=o=>{o.uniforms.tint=t,o.fragmentShader=`uniform vec3 tint;
`+o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float lum = dot(diffuseColor.rgb, vec3(.3, .6, .1)); vec3 d = diffuseColor.rgb; if ((d.b < d.r * 1.4 + .05 || d.b < d.g) && (lum > .7 || max(d.r, max(d.g, d.b)) - min(d.r, min(d.g, d.b)) > .12)) diffuseColor.rgb = tint * (.55 + .45 * min(lum, 1.));`)},r.customProgramCacheKey=()=>"paint",s.material=r}),i}async function cs(i,e=!1){let t=await Bp(i);t.updateMatrixWorld(!0);let n=[];if(t.traverse(s=>{let r=s;r.isMesh&&n.push({geo:r.geometry.clone().applyMatrix4(r.matrixWorld),mat:r.material})}),e){let s=new Jt;n.forEach(r=>{r.geo.computeBoundingBox(),s.union(r.geo.boundingBox)}),n.forEach(r=>r.geo.translate(-(s.min.x+s.max.x)/2,-s.min.y,-(s.min.z+s.max.z)/2))}return n}var Kr=(i,e,t,n,s=0)=>{let r=new mt;return r.position.set(i,s,e),r.rotation.y=t,typeof n=="number"?r.scale.setScalar(n):r.scale.set(...n),r.updateMatrix(),r.matrix};function zp(i,e,t){for(let{geo:n,mat:s}of i){let r=n.clone().applyMatrix4(e),o=!!s.map;for(let h of Object.keys(r.attributes))h!=="position"&&h!=="normal"&&!(h==="uv"&&o)&&r.deleteAttribute(h);r.morphAttributes={},r.morphTargetsRelative=!1,r.attributes.normal||r.computeVertexNormals();for(let[h,d]of Object.entries(r.attributes))if(!d.isBufferAttribute||!(d.array instanceof Float32Array)||d.normalized){let f=new Float32Array(d.count*d.itemSize);for(let p=0;p<d.count;p++)for(let _=0;_<d.itemSize;_++)f[p*d.itemSize+_]=d.getComponent(p,_);r.setAttribute(h,new Vt(f,d.itemSize))}let a=r.attributes.position.count,l=new Float32Array(a*3),c=o?new De(1,1,1):s.color;for(let h=0;h<a;h++){let d=Math.min(Math.max(r.attributes.position.getY(h)/.3,0),1),f=Wn.ao+(1-Wn.ao)*d*d*(3-2*d);l[h*3]=c.r*f,l[h*3+1]=c.g*f,l[h*3+2]=c.b*f}r.setAttribute("color",new Vt(l,3));let u=o?s:null;t.has(u)?t.get(u).push(r):t.set(u,[r])}}var N1=$n({vertexColors:!0,flatShading:!0}),Rx=new Map,U1=i=>{let e=Rx.get(i);return e||Rx.set(i,e=Object.assign(i.clone(),{vertexColors:!0})),e},Hp=i=>[...i].map(([e,t])=>new je(Bs(t,!1)??t[0],e?U1(e):N1));async function xr(i,e,t=!0){let n=new Map;await Promise.all(e.map(async s=>zp(await cs(s.f,s.c).catch(r=>(console.warn("prop GLB",s.f,r),[])),Kr(s.x,s.z,s.ry??0,s.k??1,s.y),n)));for(let s of Hp(n))s.castShadow=t,s.receiveShadow=!0,i.add(s)}var Cx=new Map;function Wl(i,e=!1){let t=i+e,n=Cx.get(t);return n||Cx.set(t,n=cs(i,e).then(s=>{let r=new Map;zp(s,new Ze,r);let o=new Wt;return Hp(r).forEach(a=>{a.castShadow=!1,o.add(a)}),o})),n}var O1=[["palmov/tall_palm_tree",9,1,20,32,!0],["palmov/palm_tree",8,1.4,20,32,!0],["palmov/tall_palm_tree",6,.8,20,32,!0],["palmov/little_palm_tree",5,1.4,20,32,!0],["palmov/stone_4",4,1.4,18,29,!0],["palmov/stone_2",3,2,18,29,!0],["palmov/stone_5",4,1.05,18,29,!0],["palmov/stone_3",3,1.3,18,29,!0],["palmov/bush_plant",5,.5,18,29,!0],["palmov/bush_plant",4,.65,18,29,!0],["nature/plant_flatTall",16,3.2,4,31,!1],["nature/plant_flatShort",14,3.2,4,31,!1],["nature/grass",14,2.2,4,29,!1],["nature/grass_large",12,2.2,4,29,!1],["nature/flower_yellowA",8,2.4,4,27,!1],["nature/flower_redA",6,2.4,4,27,!1],["nature/flower_purpleA",6,2.4,4,27,!1]],F1=["nature/flower_redA","nature/flower_yellowA","nature/flower_redA","nature/flower_yellowA"],B1=(i,e,t=0,n=10)=>[{f:"palmov/bush_plant",x:i,z:e,ry:t,k:.6},...Array.from({length:n},(s,r)=>{let o=(r+t)*2.39996,a=.5+.6*((r*.618034+t*.37)%1);return{f:F1[(r+Math.floor(t))%4],x:i+Math.cos(o)*a,z:e+Math.sin(o)*a,ry:o*3,k:4+r%3*.5}})],kl={x:-2.7,z:-2.7,r:.95},Vl="palmov/little_palm_tree",Ih="palmov/stone_4",Fp="palmov/stone_2",Ix="palmov/stone_5",Ph="nature/plant_flatTall",Gl="nature/plant_flatShort",ia="palmov/bush_plant",z1={[Vl]:.32,[Ih]:.55,[Fp]:1.1,[Ix]:.65,[ia]:.3},Px=[[Ih,-3.1,-1.2,1.5,1],[Ph,3.2,-1.1,2.6,1],[Gl,1.3,-3.2,2.6,1],[Ph,-3.2,1.2,2.6,1],[Gl,1.7,3.2,2.6,1],[ia,3.2,1.7,1.7,1],[Fp,-1.3,-3.1,1.3,2],[ia,.2,-3.3,1.8,2],[Gl,-1.2,3.2,2.6,2],[Vl,3.15,-3.15,2.2,1],[Ph,-3.4,-.2,2.8,3],[Vl,-3.15,3.15,2.2,3],[Ih,3.3,.3,1.2,3],[ia,-3.3,2.2,1.7,4],[Gl,2.4,-3.3,2.8,4],[Ix,-2.2,-3.4,1.4,4],[Ph,3.4,2.8,2.8,5],[Fp,.6,3.4,1.2,5],[ia,-3.4,-2.2,1.9,5],[Vl,1.3,-3.4,2.6,6],[Gl,-3.4,.9,2.8,6],[Ih,2.6,3.4,1.1,7],[Vl,-3.4,1.7,2.4,8],[ia,3.4,-2.2,1.9,8]];function Lx(i,e,t,n,s,r,o=[]){let a=(z,J,re)=>{let _e=Math.hypot(z,J),Ee=(z-J)*Ex,ie=-(z+J)*Ex,xe=re?2.2:.7,Se=r/2+xe;return _e>3.5&&Math.abs(_e-n)>Se&&Math.abs(_e-s)>Se&&!(_e<n&&(Math.abs(Ee)<Se||Math.abs(ie)<Se))&&t.every(([ge,de,R])=>Math.hypot(z-ge,J-de)>R+(re?2:0))&&e.every(([ge,de])=>Math.max(Math.abs(z-ge),Math.abs(J-de))>(re?di+1.2:2.6))},l=(z,J,re,_e,Ee,ie,xe)=>{let Se=[];for(let ge=0;Se.length<J&&ge<J*40;ge++){let de=(ge+xe)*2.39996,R=_e+(ge*.618034+xe*.37)%1*(Ee-_e),le=Math.cos(de)*R,pe=Math.sin(de)*R;a(le,pe,ie)&&Se.push({f:z,x:le,z:pe,ry:de*3,k:re*(.8+ge*5%7/15)})}return Se},c=O1.flatMap(([z,J,re,_e,Ee,ie],xe)=>l(z,J,re,_e,Ee,ie,xe*1.7+.3)),u=z=>/\/(grass|flower|plant_flat)/.test(z.f),h=[...o];for(let z=0;z<20;z++){let J=(z+.5)/20*Math.PI*2,re=Math.cos(J)*(n+2.9),_e=Math.sin(J)*(n+2.9);a(re,_e,!1)&&h.push([re,_e])}for(let[z,J]of e)for(let[re,_e]of[[2.3,2.3],[2.3,-2.3],[-2.3,2.3]])h.push([z+re,J+_e]);let d=h.flatMap(([z,J],re)=>B1(z,J,re*1.3));xr(i,c.filter(z=>!u(z))),xr(i,[...c.filter(u),...d],!1);let f=document.createElement("canvas");f.width=128,f.height=64;let p=f.getContext("2d");p.fillStyle="#fff",p.fillRect(0,0,128,7),p.fillRect(0,57,128,7),p.fillRect(0,26,128,4);for(let z=3;z<128;z+=16)p.fillRect(z,0,4,64);let _=new ji(f);_.colorSpace=Ft;let m=1.5,g=2.3,y=1.1,w=e.length*9,M=e.length*8,E=Object.assign(new nn(new Fn(1,m).translate(0,m/2+.1,0),$n({map:_,alphaTest:.5,side:Tn,color:5661578}),M),{frustumCulled:!1,castShadow:!0});E.count=0,i.add(E);let T=Object.assign(new nn(Bs([Zr(new ll(kl.r-.05,kl.r+.3,10).rotateX(-Math.PI/2),9149364),Zr(new rl(kl.r,10).rotateX(-Math.PI/2).translate(0,.01,0),39387)]),$n({vertexColors:!0,emissive:739946,roughness:.25}),e.length),{frustumCulled:!1,receiveShadow:!0});T.count=0,i.add(T);let x=document.createElement("canvas");x.width=x.height=64;let b=x.getContext("2d"),L=b.createRadialGradient(32,32,2,32,32,32);L.addColorStop(0,"rgba(20,40,20,.55)"),L.addColorStop(1,"rgba(20,40,20,0)"),b.fillStyle=L,b.fillRect(0,0,64,64);let A=Object.assign(new nn(new Fn(1,1).rotateX(-Math.PI/2),new jt({map:new ji(x),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),w),{frustumCulled:!1});A.count=0,i.add(A);let N=Object.assign(new nn(new un(.5,.18,.5),new jt({color:16767370}),w),{frustumCulled:!1,count:0});i.add(N);let O=new Map,X=[];Promise.all([...new Set(Px.map(z=>z[0]))].map(z=>cs(z).then(J=>O.set(z,J)))).then(()=>{Y="",ce(j,K)},z=>console.warn("dress GLB",z));let D=[],Y="",j=0,K=[];cs("kenney/fantasy/pillarStone",!0).then(z=>{D=z.map(J=>Object.assign(new nn(J.geo,J.mat,w),{frustumCulled:!1,castShadow:!0,count:0})),i.add(...D),Y="",ce(j,K)},z=>console.warn("pillar GLB",z));function ce(z,J=[]){j=z,K=J;let re=z+"|"+J.join();if(!D.length||re===Y)return;Y=re;let _e=0,Ee=0,ie=(ge,de,R,le)=>E.setMatrixAt(_e++,Kr(ge,de,R,[le,1,1]));e.forEach(([ge,de],R)=>{if(!(z>>R&1))return;let le=Math.atan2(ge,de);for(let pe=0;pe<4;pe++){let Ie=le+pe*Math.PI/2,ke=Math.cos(Ie),Ue=Math.sin(Ie),Xe=Je=>[ge+Je*ke-di*Ue,de-Je*Ue-di*ke],Ye=(Je,Ne=1)=>{let[ee,Le]=Xe(Je);D.forEach(Mt=>Mt.setMatrixAt(Ee,Kr(ee,Le,Ie,[5*Ne,g,5*Ne]))),N.setMatrixAt(Ee,Kr(ee,Le,Ie,Ne,g+.05)),A.setMatrixAt(Ee,Kr(ee,Le,0,2.4*Ne,.045)),Ee++};if(Ye(-di),pe===0){Ye(-y,1.1),Ye(y,1.1);for(let Je of[-1,1])ie(...Xe(Je*(di+y)/2),Ie,di-y)}else{Ye(0);for(let Je of[-1,1])ie(...Xe(Je*di/2),Ie,di)}}});let xe=0;e.forEach(([ge,de],R)=>{z>>R&1&&T.setMatrixAt(xe++,Kr(ge+kl.x,de+kl.z,0,1,.09))}),T.count=xe,T.instanceMatrix.needsUpdate=!0;let Se=new Map;e.forEach(([ge,de],R)=>{let le=J[R]??0,pe=Math.hypot(ge,de),Ie=-ge/pe,ke=-de/pe;if(z>>R&1)for(let[Ue,Xe,Ye,Je,Ne]of Px)le<Ne||Xe*Ie+Ye*ke>2.4&&Math.abs(Xe*ke-Ye*Ie)<1.8||zp(O.get(Ue)??[],Kr(ge+Xe,de+Ye,(Xe*7.3+Ye*3.1)%6.28,Je*1.4*(z1[Ue]??1),le===7?.35:.06),Se)}),X.forEach(ge=>{i.remove(ge),ge.geometry.dispose()}),X=Hp(Se),X.forEach(ge=>{ge.castShadow=ge.receiveShadow=!0,i.add(ge)}),E.count=_e,E.instanceMatrix.needsUpdate=!0,D.forEach(ge=>{ge.count=Ee,ge.instanceMatrix.needsUpdate=!0}),N.count=Ee,N.instanceMatrix.needsUpdate=!0,A.count=Ee,A.instanceMatrix.needsUpdate=!0}return{pens:ce}}var H1=(i,e)=>{let t=Math.hypot(e[0]-i[0],e[1]-i[1]),n=Math.atan2(e[0]-i[0],e[1]-i[1]);return{L:t,sample:s=>[i[0]+(e[0]-i[0])*s/t,i[1]+(e[1]-i[1])*s/t,n]}},Dx=i=>({L:2*Math.PI*i,sample:e=>{let t=e/i;return[Math.cos(t)*i,Math.sin(t)*i,Math.atan2(-Math.sin(t),Math.cos(t))]}});function Xl(i,e,t,n,s,r,o=0,a=!1,l=1){let c=Math.max(1,Math.round(n/s));for(let u=0;u<c;u++)for(let{geo:h,mat:d}of i){let f=h.index?h.toNonIndexed():h.clone(),p=f.attributes.position,_=f.attributes.normal;for(let m=0;m<p.count;m++){let g=p.getX(m),y=p.getZ(m),w=a?g:y,M=(a?y:g)*l,[E,T,x]=t((u+w+.5)/c*n),b=Math.cos(x),L=-Math.sin(x),A=o+M*r;p.setXYZ(m,E+b*A,p.getY(m),T+L*A),_.setXYZ(m,0,1,0)}for(let m of Object.keys(f.attributes))m!=="position"&&m!=="normal"&&m!=="uv"&&f.deleteAttribute(m);(e.get(d)??e.set(d,[]).get(d)).push(f)}}function kp(i,e,t,n,s,r){let{L:o,sample:a}=H1(t,n),l=Math.max(1,Math.round(s/r));for(let c=0;c<l;c++)Xl(i,e,a,o,r,s/l,(c+.5)*s/l-s/2)}var Nx=(i,e,t)=>{for(let[n,s]of i){let r=new je(Bs(s,!1)??s[0],Object.assign(n.clone(),{side:Tn}));r.position.y=t,r.receiveShadow=!0,r.castShadow=!1,e.add(r)}};async function Gp(i,e,t=0,n="kenney/paving/road"){let s=await cs(n).catch(o=>(console.warn("paving GLB",o),[])),r=new Map;e(s,r),Nx(r,i,t)}async function Ux(i,e,t,n){let[s,r]=await Promise.all([cs("kenney/cityroads/road-straight"),cs("kenney/cityroads/road-side")]).catch(c=>(console.warn("road GLB",c),[[],[]])),o=new Map;Xl(s,o,e.pos,e.L,t*1.3,t,0,!0);let a=r.map(({geo:c,mat:u})=>{let h=c.toNonIndexed(),d=h.attributes.position,f=[];for(let _=0;_<d.count;_+=3)[0,1,2].every(m=>d.getZ(_+m)<-.49)&&f.push(_,_+1,_+2);let p=new Ut;for(let _ of["position","normal","uv"]){let m=h.attributes[_];if(!m)continue;let g=new Float32Array(f.length*m.itemSize);f.forEach((y,w)=>{for(let M=0;M<m.itemSize;M++)g[w*m.itemSize+M]=m.array[y*m.itemSize+M]}),p.setAttribute(_,new Vt(g,m.itemSize))}return{geo:p,mat:u}}).filter(c=>c.geo.attributes.position.count),l=n/.31;for(let c of[1,-1])Xl(a,o,e.pos,e.L,t*1.3,l,c*(.5*l-t/2),!0,c);Nx(o,i,0)}var Oh=Math.SQRT1_2,Uh=Math.PI/4,xt=(i,e)=>[(i-e)*Oh,-(i+e)*Oh],ql=mi.D,_r=[[-12.37,-17.4-ql],[9.7,-17-ql],[0,-19.8-ql],[-14.2,13.5+ql],[-3.7,16.3+ql]],ki=[3,2.6,3.6,1.8,1.8],sa=[6.5,5.2,6.5],Fh=[1,1,.6],k1=[1,1.15,1.7],G1=[[0,.2],[0,.3],[0,-.5]],us=(i,e,t)=>xt(_r[i][0]+e,_r[i][1]-t),V1=(i,e,t)=>Array.from({length:e},(n,s)=>us(i,s%2?.35:-.35,ki[i]/2+t+s*.8)),Gi=bn.map((i,e)=>({id:i.id,node:e<3?us(e,0,-ki[e]/2-Fh[e]):us(e,0,ki[e]/2+.9+4*.8+.3),walk:e<3?[us(e,sa[e],-ki[e]/2-Fh[e]),us(e,sa[e],ki[e]/2+.7),us(e,0,ki[e]/2+.7),us(e,0,k1[e]),us(e,...G1[e])]:[],inside:[[[-.9,-.5],[.9,-.5],[0,.3]],[[-.7,.4],[.7,.4],[0,.1]],[[0,-.5],[0,.9],[-1.6,-.7],[1.6,-.7]],[],[]][e].map(([t,n])=>us(e,t,n)),queue:V1(e,e<3?5:4,.9)})),W1=new ii({vertexColors:!0,flatShading:!0,roughness:.5,metalness:0});function X1(i){let e=[];return{box(t,n,s,r,o,a,l){e.push(Zr(new un(t,n,s).translate(r,o,a),l))},done(){let[t,n]=xt(..._r[i]),s=new je(Bs(e).rotateY(Uh).translate(t,0,n),W1);return s.castShadow=s.receiveShadow=!0,[s]}}}function q1(i,e,t,n){let s=X1(i);s.box(e,.1,t+.3,0,2.2,0,ot.dgray),s.box(e,2.1,.3,0,1.05,-t/2,ot.brown),s.box(e-.2,1.7,.12,0,.9,t/2-.1,ot.lavender);for(let r=.2;r<1.7;r+=.3)s.box(e-.1,.05,.16,0,r,t/2-.1,ot.dgray);for(let r of[-1,1])s.box(.16,2.2,.16,r*(e/2-.1),1.1,t/2,n);return s.done()}var hs="cartoon/",Mn=(i,e,t,n=1,s=0,r=0)=>({f:i,x:e,z:t,k:n,ry:s,y:r,c:!0}),Y1=(i,e,t)=>[Mn("kenney/furniture/tableRound",i,e,1.6),...[[-.75,0,Math.PI/2],[.75,0,-Math.PI/2],[0,.75,Math.PI]].map(([n,s,r])=>Mn("kenney/furniture/chair",i+n,e+s,2,r)),...t?[Mn(hs+t,i,e,1.05)]:[]],Dh=(i,e)=>Mn(hs+"Decoration_FlowerBox",i,e,.8),Vp=(i,e,t)=>Mn(hs+"LightChain",0,t,[i/5,.8,.8],0,e-.2),Ox=(i,e,t)=>Mn(hs+"ColorFlags",0,t,[i/11,.7,.7],0,e),Nh=(i,e)=>Mn(hs+"Balloon_Stand",i,e,.45),Fx=(i,e)=>Mn(hs+"Lantern_Path",i,e,.65),$1=[(i,e,t,n)=>[...[...Array(Math.min(i-1,3))].flatMap((s,r)=>Y1(e/2+1.4,[t-.6,t-2.6,t+1.6][r],i>=4&&!r?"Umbrella_Red":null)),...i>=3?[-1,1].map(s=>Dh(s*(e/2+.5),t+.4)):[],...i>=5?[Vp(e+.4,2.6,t+.5)]:[],...i>=6?[Ox(e+1.2,n*.75,t+.3)]:[],...i>=8?[-1,1].map(s=>Nh(s*(e/2+.6),t+.6)):[]],(i,e,t)=>[...i>=2?[Mn("palmov/bench_1",e/2+1.2,.3,.85)]:[],...i>=3?[-1,1].map(n=>Dh(n*(e/2+.5),t+.3)):[],...i>=4?[Mn(hs+"Umbrella_Pink",-e/2-1.1,-1,1.2)]:[],...i>=5?[Vp(e+.3,2.3,t+.45)]:[],...i>=6?[Mn("kenney/food/iceCreamCone",e/2+.8,t-.3,6.5,0,.3),Mn("palmov/stone_4",e/2+.8,t-.3,[.6,.45,.5])]:[],...i>=7?[Mn(hs+"IceCreamCart",-e/2-1.6,-2.3,.7)]:[],...i>=8?[Nh(e/2+.6,t+.5)]:[]],(i,e,t)=>[...i>=2?[-1,1].map(n=>Dh(n*(e/2+.5),t+.3)):[],...i>=3?[-1,1].map(n=>Mn("kenney/fantasy/stallRed",n*(e/2+1),.1,1.3)):[],...i>=4?[[-1,"Gift_Red"],[1,"Gift_Blue"]].flatMap(([n,s])=>[Mn(hs+s,n*(e/2+1.5),1.1,.4,.4),Mn(hs+"Gift_Yellow",n*(e/2+.9),1.2,.3,-.3)]):[],...i>=5?[Vp(e+.4,2.9,t+.6)]:[],...i>=6?[-1,1].map(n=>Nh(n*(e/2+.6),t+.3)):[],...i>=7?[-1,1].map(n=>Fx(n*(e/2+1.9),t+.6)):[],...i>=8?[Mn("palmov/stone_4",-e/2-1.2,-t+1,[.9,.8,.7]),Mn("trex",-e/2-1.2,-t+1,.3,Math.PI/3,.5)]:[]],(i,e,t,n)=>[...i>=2?[Mn("kenney/coaster/queue-straight",0,t+1.9,[1.8,2,1.6])]:[],...i>=4?[-1,1].map(s=>Dh(s*(e/2+.5),t+.2)):[],...i>=5?[-1,1].map(s=>Fx(s*(e/2+.6),t+.3)):[],...i>=7?[Ox(e+1,n*.8,t+.3)]:[],...i>=8?[-1,1].map(s=>Nh(s*(e/2+.6),t+.2)):[]]],K1=[[3.2,ot.red],[3,ot.pink],[5.6,ot.blue],null,null],Bx=["Restaurant_Shop","Candy_Shop","Misc_Shop_1","Kiosk_Shop","Kiosk_Shop"],Z1=[4.2,3.45,5,2.35,2.35],J1=[["FOOD",3.2],["ICE CREAM",3.4],["SOUVENIRS",4.6],["TICKETS",2.6]];function zx(i){let e=bn.map(()=>-1),t=bn.map(()=>0),n=bn.map(()=>[]),s=bn.map((c,u)=>{let[h,d]=J1[Math.min(u,3)],f=document.createElement("canvas");f.width=256,f.height=Math.round(256*.3);let p=f.getContext("2d");p.fillStyle="#3a2412",p.fillRect(0,0,f.width,f.height),p.strokeStyle="#d3bd46",p.lineWidth=4,p.strokeRect(3,3,f.width-6,f.height-6),p.fillStyle="#ecebe7",p.font="bold 40px system-ui, sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText(h,f.width/2,f.height/2+2);let _=new ji(f);_.colorSpace=Ft;let m=new je(new Fn(d,d*.3),new jt({map:_}));return m.rotation.y=Uh,m.visible=!1,i.add(m),m}),r=bn.map(()=>[]);function o(c,u,h=0){let d=(c-u)*Oh,f=-(c+u)*Oh;return r.some((p,_)=>p.some(([m,g,y,w])=>Math.abs(d-_r[_][0]-m)<y/2+h&&Math.abs(_r[_][1]-f-g)<w/2+h))}let a=bn.map(()=>0);function l(c){return c.forEach((u,h)=>{let d=Math.min(js.length,Math.max(0,u|0));if(a[h]=d,e[h]===d)return;e[h]=d;let f=++t[h];if(n[h].forEach((p,_)=>{i.remove(p),(_||p.isMesh)&&p.traverse(m=>m.geometry?.dispose())}),n[h]=[],s[h].visible=d>0,!d){r[h]=[];let p=K1[h];p&&(r[h]=[[0,0,p[0],ki[h]]],n[h]=q1(h,p[0],ki[h],p[1]),n[h].forEach(_=>i.add(_)));return}r[h]=[],Wl("cartoon/"+Bx[h],!0).then(p=>{if(t[h]!==f)return;let _=p.clone(),m=new Jt().setFromObject(_),g=Z1[h]/(m.max.x-m.min.x)*(1+.04*(d-1)),[y,w]=xt(..._r[h]);_.scale.setScalar(g),_.rotation.y=Uh,_.position.set(y,0,w),_.traverse(x=>{x.castShadow=x.receiveShadow=!0});let M=new Wt;M.rotation.y=Uh,M.position.set(y,0,w),n[h]=[_,M],n[h].forEach(x=>i.add(x)),xr(M,$1[Math.min(h,3)](d,(m.max.x-m.min.x)*g,m.max.z*g,m.max.y*g)).then(()=>{t[h]!==f&&M.traverse(x=>x.geometry?.dispose())});let[E,T]=us(h,0,m.max.z*g+.1);s[h].position.set(E,m.max.y*g+.5,T)}).catch(p=>console.warn("shop GLB",Bx[h],p))}),a}return{set:l,blocked:o}}var Hx=Math.SQRT1_2,Wi=Math.PI/4,An=mi.RING_R,Hs=4.1,qp=1.8,kx=1.4,Dt=mi.D,zs=2.2,Wx=i=>i.map(([e,t])=>[e,t+Dt]);function Xx(i,e,t){let n=new al(i.map(([_,m])=>{let[g,y]=xt(_,m);return new F(g,0,y)}),!1,"centripetal"),s=new F,r=new F;n.arcLengthDivisions=400;let o=n.getLength(),a=_=>{let m=Math.min(Math.max(_/o,0),1);n.getPointAt(m,s),n.getTangentAt(m,r);let g=_-m*o;return[s.x+r.x*g,s.z+r.z*g,Math.atan2(r.x,r.z)]},[l,c]=xt(e,t),u=0,h=1e9;for(let _=0;_<=400;_++){let[m,g]=a(_/400*o),y=Math.hypot(m-l,g-c);y<h&&(h=y,u=_/400*o)}let[d,f,p]=a(u);return{L:o,pos:a,stop:u,x:d,z:f,yaw:p}}var yr=Xx(Wx([[142,-37],[94,-17],[46,3],[34,8],[22,14.5],[12,19.2],[5,21],[-4,22.5],[-13,24.5],[-21,22],[-28,16],[-36,9],[-46,1],[-86,-31],[-134,-63]]),5,21+Dt),Ti=Xx(Wx([[-144,47],[-96,39.5],[-48,32],[-32,29.5],[-16,26.5],[-4,24],[5,22.6],[10,22.5],[15,22.4],[26,22],[37,20.2],[50,16.5],[98,2.8],[146,-10.9]]),10,22.5+Dt),$l={x:yr.x,z:yr.z,yaw:yr.yaw,walk:xt(5,19+Dt)},Yl=Math.sqrt(An*An-9.5*9.5)+1,Jr=18.6+Dt,jr=22.4+Dt,Vi=1.5,oa={x:Ti.x,z:Ti.z,yaw:Ti.yaw,walk:xt(9.5,Yl)},qx=[[-9.2,14.6+Dt,13.5,6.2],[-8.6,12+Dt,3,3],[1.4,16.8+Dt,2,4.4],[5,19+Dt,8,1.4]],Bh=[-21.5,12.6+Dt,6.4,9],Xi=[-9.1,18.7+Dt],Wp=6.4,Xp=1.8,Kl=(i,e)=>xt(Xi[0]+i,Xi[1]-e),j1=[[Xi[0],Xi[1]+1.2,Wp,.8],...[-1,1].map(i=>[Xi[0]+i*(Xp/2+(Wp-Xp)/4),Xi[1]-.4,(Wp-Xp)/2,2.4])],Yx=(i,e,t=0)=>{let n=(i-e)*Hx,s=-(i+e)*Hx;return j1.some(([r,o,a,l])=>Math.abs(n-r)<a/2+t&&Math.abs(s-o)<l/2+t)},$x=i=>/^(palmov|cartoon)\//.test(i)?i:"kenney/"+i,ra=(i,e,t,n={})=>({f:$x(i),x:xt(e,t)[0],z:xt(e,t)[1],ry:Wi,...n}),Q1=[ra("cartoon/TownHall",Xi[0],Xi[1],{k:.9,c:!0}),ra("palmov/bench_1",3.4,19.2+Dt,{k:.8,ry:Wi+Math.PI}),ra("palmov/bench_1",6.8,19.2+Dt,{k:.8,ry:Wi+Math.PI}),ra("holiday/lightpost",.6,19.4+Dt,{k:2.1}),ra("palmov/fountain_1",-23.5,-1.5,{k:.8}),...[9.2,11.4,13.6,15.8].map((i,e)=>ra(["car/sedan","car/hatchback-sports","car/suv","car/sedan"][e],-21.3,i+Dt,{k:.95,ry:e%2?-Wi:3*Wi}))],Kx=[[-1.4,15.4],[-1.4,18.8+Dt],[-16.4,-17.2-Dt],[-9.4,-23-Dt],[10.5,-22.6-Dt],[14.5,-21.9-Dt],[8.2,-17-Dt]].map(([i,e])=>xt(i,e)),Gx=i=>Array.from({length:Math.ceil(i.L/5)},(e,t)=>[...i.pos(t*5).slice(0,2),2.4]),zh=[[...xt(-9.2,16.5+Dt),9.5],[...xt(-21.5,12.6+Dt),6],[...xt(-23.5,-1.5),2.6],[...xt(-11,-19.5-Dt),5.5],[...xt(1,-21.4-Dt),5.5],[...xt(11,-18.4-Dt),4.5],...Gx(yr),...Gx(Ti)],eT=(i,e)=>e*Math.sqrt(Math.max(0,An*An-i*i)),Yt={H:1,LEN:3.6,DEP:1.7},tT=[[1,0],[0,1],[0,1],[1,0]],Vx=[[0,Yt.H,0,Yt.LEN,.14,Yt.DEP],...[-1,1].flatMap(i=>[-1,1].map(e=>[i*(Yt.LEN/2-.15),Yt.H/2,e*(Yt.DEP/2-.15),.16,Yt.H,.16])),[0,Yt.H+.55,Yt.DEP/2-.04,Yt.LEN,.07,.07],[0,Yt.H+.25,Yt.DEP/2-.04,Yt.LEN,.07,.07],[-Yt.LEN/2+.04,Yt.H+.55,0,.07,.07,Yt.DEP],...[0,1,2].map(i=>{let e=Yt.H-.25*(i+1);return[Yt.LEN/2+.3+.5*i,e/2,0,.5,e,.9]})],Zx=[0,1,2,3,4].map(i=>{let[e,t]=_r[i];if(i===3)return[[e,t-4,1.6,5.6]];if(i===4)return[[e,t-5.7,1.6,1.4]];let n=t-ki[i]/2-.7,s=t+ki[i]/2+Fh[i],r=e+sa[i],o=1.4,a=eT(e,-1)+.5;return[[e,(a+s)/2,2,a-s],[(e+r)/2,s,Math.abs(sa[i])+o,o],[r,(s+n)/2,o,s-n+o],[(e+r)/2,n,Math.abs(sa[i])+o,o]]});zh.push(...[...Zx.flat(),...qx.slice(2),[9.5,(Yl+jr)/2,1.6,jr-Yl]].flatMap(([i,e,t,n])=>{let s=Math.ceil(Math.max(t,n)/1.5)+1;return Array.from({length:s},(r,o)=>{let a=o/(s-1)-.5;return[...xt(t>n?i+a*t:i,t>n?e:e+a*n),Math.min(t,n)/2+.6]})}));function Jx(i,e){let t=(L,A,N,O=0)=>L.rotateX(-Math.PI/2).rotateY(O).translate(A,0,N),s=L=>(A,N)=>L.forEach(([O,X,D,Y])=>D>=Y?kp(A,N,xt(O-D/2,X),xt(O+D/2,X),Y,1.5):kp(A,N,xt(O,X-Y/2),xt(O,X+Y/2),D,1.5)),r=[-1,1].flatMap(L=>[[0,L*(An+Hs)/2,kx,An-Hs],[L*(An+Hs)/2,0,An-Hs,kx]]);Gp(i,(L,A)=>{for(let N of[An,Hs]){let O=Dx(N);Xl(L,A,O.sample,O.L,1.5,qp)}s([...r,...qx])(L,A)}),Ux(i,yr,2.4,.5);let o=new je(t(new Fn(Bh[2],Bh[3]),...xt(Bh[0],Bh[1]),Wi),new Bi({color:5925256}));o.position.y=.02,o.receiveShadow=!0,i.add(o);let a=Zx.map(L=>{if(!L.length)return null;let A=new Wt;return i.add(A),Gp(A,s(L)),A});xr(i,Q1);let l=(L,A,N,O,X,D=9)=>{let Y=[];for(let j=0;j<N;j++){let K=(j+O)/N*Math.PI*2,ce=Math.abs((K*180/Math.PI-45+360)%90-45),z=Math.cos(K)*A,J=Math.sin(K)*A;A>6&&(45-ce<D||zh.some(([re,_e,Ee])=>Ee<8&&Math.hypot(z-re,J-_e)<Ee+1))||Y.push({f:$x(L),x:z,z:J,ry:Math.atan2(-Math.cos(K),-Math.sin(K)),k:X})}return Y},c=l("holiday/lightpost",An+1.5,22,.5,2.1);xr(i,[...c,...l("palmov/bench_1",An+1.35,14,0,.8).map(L=>({...L,ry:L.ry+Math.PI})),...l("furniture/trashcan",An+1.2,9,.25,2)]),cs("kenney/holiday/lightpost").then(L=>{let A=Math.max(...L.map(j=>(j.geo.computeBoundingBox(),j.geo.boundingBox.max.y)))*2.1,[N,O]=xt(10,22.5+Dt),X=new nn(new un(1,1,1),new jt({color:16767370}),c.length),D=new mt;c.forEach((j,K)=>{D.position.set(j.x,A-.25,j.z),D.scale.setScalar(.34),D.rotation.set(0,0,0),D.updateMatrix(),X.setMatrixAt(K,D.matrix)});let Y=new je(new un(9.4,.7,.1),X.material);Y.position.set(N-3.1*Math.sin(Wi),zs+1.1,O-3.1*Math.cos(Wi)),Y.rotation.y=Wi,u.add(Y),X.frustumCulled=!1,i.add(X)},()=>{});let u=new Wt;u.visible=!1,i.add(u);let h=Math.ceil(Ti.L/1.3),d=new nn(new un(1.5,.3,.55),$n({color:14541806}),h),f=new mt;for(let L=0;L<h;L++){let[A,N,O]=Ti.pos(L/(h-1)*Ti.L);f.position.set(A,zs-.2,N),f.rotation.y=O-Math.PI/2,f.updateMatrix(),d.setMatrixAt(L,f.matrix)}d.castShadow=d.receiveShadow=!0,u.add(d);let p=Array.from({length:Math.ceil(Ti.L/5.5)},(L,A)=>Ti.pos(A*5.5)).map(([L,A])=>({f:"kenney/roads/bridge_pillar",x:L,z:A,k:4.2,c:!0})),[_,m]=xt(10,22.5+Dt),g=(L,A,N,O,X,D,Y)=>Zr(new un(L,A,N).translate(O,X,D).rotateY(Wi).translate(_,0,m),Y),y=[g(10,.3,2.4,0,zs-.05,-2,ot.lgray),g(10.4,.2,3.4,0,zs+2.5,-1.6,ot.dgray),g(10,.5,.1,0,zs+2.1,-3.2,ot.blue),...[-4.6,4.6].flatMap(L=>[-.6,-3].map(A=>g(.16,2.5,.16,L,zs+1.2,A,ot.white))),...Array.from({length:3},(L,A)=>{let N=zs*(6-A)/6;return g(1.4,N,.4,-.5,N/2,-.6+.4*A,ot.lgray)}),...(()=>{let L=(j,K,ce,z,J,re,_e=0,Ee=9.5)=>{let[ie,xe]=xt(Ee,z);return Zr(new un(j,K,ce).rotateX(_e).translate(0,J,0).rotateY(Wi).translate(ie,0,xe),re)},A=Jr-Yl,N=Math.atan2(Vi,A),O=Math.hypot(A,Vi),X=(Yl+Jr)/2,D=jr-Jr,Y=(Jr+jr)/2;return[L(1.4,.12,O,X,Vi/2-.06,ot.lgray,N),L(1.4,.12,D,Y,Vi-.06,ot.lgray),...[-.67,.67].flatMap(j=>[L(.06,.4,O,X,Vi/2+.2,ot.blue,N,9.5+j),L(.06,.4,D,Y,Vi+.2,ot.blue,0,9.5+j),...[Jr,jr-.4].map(K=>L(.16,Vi-.1,.16,K,(Vi-.1)/2,ot.white,0,9.5+j))])]})()],w=new je(Bs(y),$n({vertexColors:!0,flatShading:!0}));w.castShadow=w.receiveShadow=!0,u.add(w),p.push(...[-3.5,0,3.5].map(L=>({f:"kenney/roads/bridge_pillar",x:xt(10+L,24.5+Dt)[0],z:xt(10+L,24.5+Dt)[1],k:4.2,c:!0}))),xr(u,p);let M=Object.assign(new nn(new un(1,1,1),$n({color:13666920,flatShading:!0}),Vx.length*e.length),{frustumCulled:!1,castShadow:!0,receiveShadow:!0});M.count=0,i.add(M);let E=e.map(([L,A],N)=>{let[O,X]=tT[N],D=new mt,Y=di+.45+Yt.DEP/2;return D.position.set(L+O*Y,0,A+X*Y),D.rotation.y=Math.atan2(O,X),D.updateMatrix(),D}),T=-1;function x(L){if(L===T)return;T=L;let A=0,N=new mt;e.forEach((O,X)=>{if(!(L>>X&1))return;let D=E[X].matrix;for(let[Y,j,K,ce,z,J]of Vx)N.position.set(Y,j,K),N.scale.set(ce,z,J),N.updateMatrix(),M.setMatrixAt(A++,new Ze().multiplyMatrices(D,N.matrix))}),M.count=A,M.instanceMatrix.needsUpdate=!0}function b(L,A){x(L),a.forEach((N,O)=>{N&&(N.visible=A[O]>0)})}return{update:b,viaduct:u,frames:E}}var aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Kn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},nT=new yi(-1,1,1,-1,0,1),Yp=class extends Ut{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}},iT=new Yp,wi=class{constructor(e){this._mesh=new je(iT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,nT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hh=class extends Kn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof sn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=bi.clone(e.uniforms),this.material=new sn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new wi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zl=class extends Kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},kh=class extends Kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new Ke);this._width=n.width,this._height=n.height,t=new an(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:fn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hh(aa),this.copyPass.material.blending=wn,this.timer=new xl}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Zl!==void 0&&(o instanceof Zl?n=!0:o instanceof kh&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vh=class extends Kn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new De}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var Jl={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Ze},cameraProjectionMatrixInverse:{value:new Ze},cameraWorldMatrix:{value:new Ze},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new F(-1,-1,-1)},sceneBoxMax:{value:new F(1,1,1)}},vertexShader:`

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
		}`},jl={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
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

		}`},Wh={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
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
		}`};function jx(i=5){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=sT(e),n=t.length,s=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=t[o],l=2*Math.PI*a/n,c=new F(Math.cos(l),Math.sin(l),0).normalize();s[o*4]=(c.x*.5+.5)*255,s[o*4+1]=(c.y*.5+.5)*255,s[o*4+2]=127,s[o*4+3]=255}let r=new Ji(s,e,e);return r.wrapS=ti,r.wrapT=ti,r.needsUpdate=!0,r}function sT(i){let e=Math.floor(i)%2===0?Math.floor(i)+1:Math.floor(i),t=e*e,n=Array(t).fill(0),s=Math.floor(e/2),r=e-1;for(let o=1;o<=t;){if(s===-1&&r===e?(r=e-2,s=0):(r===e&&(r=0),s<0&&(s=e-1)),n[s*e+r]!==0){r-=2,s++;continue}else n[s*e+r]=o++;r++,s--}return n}var Ql={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:$p(16,2,1),NORMAL_VECTOR_TYPE:1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new Ke},cameraProjectionMatrixInverse:{value:new Ze},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

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
		}`};function $p(i,e,t){let n=rT(i,e,t),s="vec3[SAMPLES](";for(let r=0;r<i;r++){let o=n[r];s+=`vec3(${o.x}, ${o.y}, ${o.z})${r<i-1?",":")"}`}return s}function rT(i,e,t){let n=[];for(let s=0;s<i;s++){let r=2*Math.PI*e*s/i,o=Math.pow(s/(i-1),t);n.push(new F(Math.cos(r),Math.sin(r),o))}return n}var Xh=class{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let n,s,r,o=.5*(Math.sqrt(3)-1),a=(e+t)*o,l=Math.floor(e+a),c=Math.floor(t+a),u=(3-Math.sqrt(3))/6,h=(l+c)*u,d=l-h,f=c-h,p=e-d,_=t-f,m,g;p>_?(m=1,g=0):(m=0,g=1);let y=p-m+u,w=_-g+u,M=p-1+2*u,E=_-1+2*u,T=l&255,x=c&255,b=this.perm[T+this.perm[x]]%12,L=this.perm[T+m+this.perm[x+g]]%12,A=this.perm[T+1+this.perm[x+1]]%12,N=.5-p*p-_*_;N<0?n=0:(N*=N,n=N*N*this._dot(this.grad3[b],p,_));let O=.5-y*y-w*w;O<0?s=0:(O*=O,s=O*O*this._dot(this.grad3[L],y,w));let X=.5-M*M-E*E;return X<0?r=0:(X*=X,r=X*X*this._dot(this.grad3[A],M,E)),70*(n+s+r)}noise3d(e,t,n){let s,r,o,a,c=(e+t+n)*.3333333333333333,u=Math.floor(e+c),h=Math.floor(t+c),d=Math.floor(n+c),f=1/6,p=(u+h+d)*f,_=u-p,m=h-p,g=d-p,y=e-_,w=t-m,M=n-g,E,T,x,b,L,A;y>=w?w>=M?(E=1,T=0,x=0,b=1,L=1,A=0):y>=M?(E=1,T=0,x=0,b=1,L=0,A=1):(E=0,T=0,x=1,b=1,L=0,A=1):w<M?(E=0,T=0,x=1,b=0,L=1,A=1):y<M?(E=0,T=1,x=0,b=0,L=1,A=1):(E=0,T=1,x=0,b=1,L=1,A=0);let N=y-E+f,O=w-T+f,X=M-x+f,D=y-b+2*f,Y=w-L+2*f,j=M-A+2*f,K=y-1+3*f,ce=w-1+3*f,z=M-1+3*f,J=u&255,re=h&255,_e=d&255,Ee=this.perm[J+this.perm[re+this.perm[_e]]]%12,ie=this.perm[J+E+this.perm[re+T+this.perm[_e+x]]]%12,xe=this.perm[J+b+this.perm[re+L+this.perm[_e+A]]]%12,Se=this.perm[J+1+this.perm[re+1+this.perm[_e+1]]]%12,ge=.6-y*y-w*w-M*M;ge<0?s=0:(ge*=ge,s=ge*ge*this._dot3(this.grad3[Ee],y,w,M));let de=.6-N*N-O*O-X*X;de<0?r=0:(de*=de,r=de*de*this._dot3(this.grad3[ie],N,O,X));let R=.6-D*D-Y*Y-j*j;R<0?o=0:(R*=R,o=R*R*this._dot3(this.grad3[xe],D,Y,j));let le=.6-K*K-ce*ce-z*z;return le<0?a=0:(le*=le,a=le*le*this._dot3(this.grad3[Se],K,ce,z)),32*(s+r+o+a)}noise4d(e,t,n,s){let r=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,u,h,d,f,p,_=(e+t+n+s)*l,m=Math.floor(e+_),g=Math.floor(t+_),y=Math.floor(n+_),w=Math.floor(s+_),M=(m+g+y+w)*c,E=m-M,T=g-M,x=y-M,b=w-M,L=e-E,A=t-T,N=n-x,O=s-b,X=L>A?32:0,D=L>N?16:0,Y=A>N?8:0,j=L>O?4:0,K=A>O?2:0,ce=N>O?1:0,z=X+D+Y+j+K+ce,J=o[z][0]>=3?1:0,re=o[z][1]>=3?1:0,_e=o[z][2]>=3?1:0,Ee=o[z][3]>=3?1:0,ie=o[z][0]>=2?1:0,xe=o[z][1]>=2?1:0,Se=o[z][2]>=2?1:0,ge=o[z][3]>=2?1:0,de=o[z][0]>=1?1:0,R=o[z][1]>=1?1:0,le=o[z][2]>=1?1:0,pe=o[z][3]>=1?1:0,Ie=L-J+c,ke=A-re+c,Ue=N-_e+c,Xe=O-Ee+c,Ye=L-ie+2*c,Je=A-xe+2*c,Ne=N-Se+2*c,ee=O-ge+2*c,Le=L-de+3*c,Mt=A-R+3*c,Ct=N-le+3*c,Xt=O-pe+3*c,G=L-1+4*c,bt=A-1+4*c,rt=N-1+4*c,dt=O-1+4*c,ve=m&255,St=g&255,Fe=y&255,Ve=w&255,C=a[ve+a[St+a[Fe+a[Ve]]]]%32,v=a[ve+J+a[St+re+a[Fe+_e+a[Ve+Ee]]]]%32,q=a[ve+ie+a[St+xe+a[Fe+Se+a[Ve+ge]]]]%32,me=a[ve+de+a[St+R+a[Fe+le+a[Ve+pe]]]]%32,P=a[ve+1+a[St+1+a[Fe+1+a[Ve+1]]]]%32,H=.6-L*L-A*A-N*N-O*O;H<0?u=0:(H*=H,u=H*H*this._dot4(r[C],L,A,N,O));let W=.6-Ie*Ie-ke*ke-Ue*Ue-Xe*Xe;W<0?h=0:(W*=W,h=W*W*this._dot4(r[v],Ie,ke,Ue,Xe));let U=.6-Ye*Ye-Je*Je-Ne*Ne-ee*ee;U<0?d=0:(U*=U,d=U*U*this._dot4(r[q],Ye,Je,Ne,ee));let k=.6-Le*Le-Mt*Mt-Ct*Ct-Xt*Xt;k<0?f=0:(k*=k,f=k*k*this._dot4(r[me],Le,Mt,Ct,Xt));let te=.6-G*G-bt*bt-rt*rt-dt*dt;return te<0?p=0:(te*=te,p=te*te*this._dot4(r[P],G,bt,rt,dt)),27*(u+h+d+f+p)}_dot(e,t,n){return e[0]*t+e[1]*n}_dot3(e,t,n,s){return e[0]*t+e[1]*n+e[2]*s}_dot4(e,t,n,s,r){return e[0]*t+e[1]*n+e[2]*s+e[3]*r}};var ec=class i extends Kn{constructor(e,t,n=512,s=512,r,o,a){super(),this.width=n,this.height=s,this.clear=!0,this.camera=t,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=jx(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new an(this.width,this.height,{type:fn,depthBuffer:!1}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new sn({defines:Object.assign({},Jl.defines),uniforms:bi.clone(Jl.uniforms),vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader,blending:wn,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new ul,this.normalMaterial.blending=wn,this.pdMaterial=new sn({defines:Object.assign({},Ql.defines),uniforms:bi.clone(Ql.uniforms),vertexShader:Ql.vertexShader,fragmentShader:Ql.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new sn({defines:Object.assign({},jl.defines),uniforms:bi.clone(jl.uniforms),vertexShader:jl.vertexShader,fragmentShader:jl.fragmentShader,blending:wn}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new sn({uniforms:bi.clone(aa.uniforms),vertexShader:aa.vertexShader,fragmentShader:aa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:vl,blendDst:Wr,blendEquation:vi,blendSrcAlpha:yl,blendDstAlpha:Wr,blendEquationAlpha:vi}),this.blendMaterial=new sn({uniforms:bi.clone(Wh.uniforms),vertexShader:Wh.vertexShader,fragmentShader:Wh.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:Du,blendSrc:vl,blendDst:Wr,blendEquation:vi,blendSrcAlpha:yl,blendDstAlpha:Wr,blendEquationAlpha:vi}),this._fsQuad=new wi(null),this._originalClearColor=new De,this.setGBuffer(r?r.depthTexture:void 0,r?r.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}setSize(e,t){this.width=e,this.height=t,this.gtaoRenderTarget.setSize(e,t),this.normalRenderTarget&&this.normalRenderTarget.setSize(e,t),this.pdRenderTarget.setSize(e,t),this.gtaoMaterial.uniforms.resolution.value.set(e,t),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,t),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget&&this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,t){if(e!==void 0)this.depthTexture=e,this.normalTexture=t,this._renderGBuffer=!1;else{if(this.normalRenderTarget===void 0){let s=new Oi;s.format=Hi,s.type=Os,this.normalRenderTarget=new an(this.width,this.height,{minFilter:qt,magFilter:qt,type:fn,depthTexture:s})}this.depthTexture=this.normalRenderTarget.depthTexture,this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0}let n=this.normalTexture?1:0;this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.needsUpdate=!0,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.needsUpdate=!0,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let t=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,t=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,t=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,t=!0),t&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=$p(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,t,n){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case i.OUTPUT.Off:break;case i.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=wn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=wn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalTexture||null,this.copyMaterial.blending=wn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case i.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=wn,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_renderOverride(e,t,n,s,r){e.getClearColor(this._originalClearColor);let o=e.getClearAlpha(),a=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,s=t.clearColor||s,r=t.clearAlpha||r,s!=null&&(e.setClearColor(s),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this._originalClearColor),e.setClearAlpha(o)}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(n){(n.isPoints||n.isLine||n.isLine2)&&n.visible&&(n.visible=!1,t.push(n))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}_generateNoise(e=64){let t=new Xh,n=e*e*4,s=new Uint8Array(n);for(let o=0;o<e;o++)for(let a=0;a<e;a++){let l=o,c=a;s[(o*e+a)*4]=(t.noise(l,c)*.5+.5)*255,s[(o*e+a)*4+1]=(t.noise(l+e,c)*.5+.5)*255,s[(o*e+a)*4+2]=(t.noise(l,c+e)*.5+.5)*255,s[(o*e+a)*4+3]=(t.noise(l+e,c+e)*.5+.5)*255}let r=new Ji(s,e,e,ri,Bn);return r.wrapS=ti,r.wrapT=ti,r.needsUpdate=!0,r}};ec.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var tc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var qh=class extends Kn{constructor(){super(),this.isOutputPass=!0,this.uniforms=bi.clone(tc.uniforms),this.material=new ko({name:tc.name,uniforms:this.uniforms,vertexShader:tc.vertexShader,fragmentShader:tc.fragmentShader}),this._fsQuad=new wi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},lt.getTransfer(this._outputColorSpace)===Lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ml?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Sl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===El?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===wl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Al?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Tl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var t_="ef_quality",Yh=.3,n_=.3,oT=1.8;function i_(){try{let i=localStorage.getItem(t_);if(i==="off"||i==="low"||i==="high")return i}catch{}return"low"}function s_(i){try{localStorage.setItem(t_,i)}catch{}}var Qx="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",e_=i=>`
  uniform sampler2D t; uniform vec2 px; varying vec2 vUv;
  void main(){
    float m = smoothstep(${Yh.toFixed(2)}, ${(Yh+n_).toFixed(2)}, abs(vUv.y - .5)) * ${oT.toFixed(2)};
    vec4 c = texture2D(t, vUv) * .2270;
    vec2 d = ${i} * px * m;
    c += (texture2D(t, vUv + d * 1.385) + texture2D(t, vUv - d * 1.385)) * .3162;
    c += (texture2D(t, vUv + d * 3.231) + texture2D(t, vUv - d * 3.231)) * .0703;
    gl_FragColor = c;
  }`,aT=`
  uniform sampler2D a, b; varying vec2 vUv;
  void main(){ gl_FragColor = mix(texture2D(a, vUv), texture2D(b, vUv), smoothstep(${Yh.toFixed(2)}, ${(Yh+n_*.6).toFixed(2)}, abs(vUv.y - .5))); }`,Kp=class extends Kn{constructor(){super(...arguments);this.ping=new an(1,1,{type:fn});this.pong=new an(1,1,{type:fn});this.mats=[e_("vec2(1., 0.)"),e_("vec2(0., 1.)")].map(t=>new sn({vertexShader:Qx,fragmentShader:t,uniforms:{t:{value:null},px:{value:new Ke}},depthTest:!1}));this.mix=new sn({vertexShader:Qx,fragmentShader:aT,uniforms:{a:{value:null},b:{value:null}},depthTest:!1});this.quad=new wi}setSize(t,n){let s=Math.max(1,t>>1),r=Math.max(1,n>>1);this.ping.setSize(s,r),this.pong.setSize(s,r);for(let o of this.mats)o.uniforms.px.value.set(1/s,1/r)}render(t,n,s){let r=(o,a,l)=>{this.quad.material=o,o.uniforms.t&&(o.uniforms.t.value=a),t.setRenderTarget(l),this.quad.render(t)};r(this.mats[0],s.texture,this.ping),r(this.mats[1],this.ping.texture,this.pong),this.mix.uniforms.a.value=s.texture,this.mix.uniforms.b.value=this.pong.texture,r(this.mix,s.texture,this.renderToScreen?null:n)}dispose(){this.ping.dispose(),this.pong.dispose(),this.mats.forEach(t=>t.dispose()),this.mix.dispose(),this.quad.dispose()}};function r_(i,e,t,n){let s=n,r=1,o=1,a=new an(1,1,{type:fn,samples:4}),l=new Gh(i,a),c=new ec(e,t,1,1);c.blendIntensity=.9,c.updateGtaoMaterial({radius:.9,distanceExponent:1,thickness:1,scale:1.1,samples:8,distanceFallOff:1,screenSpaceRadius:!1}),c.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,radiusExponent:1,rings:2,samples:8}),l.addPass(new Vh(e,t)),l.addPass(c),l.addPass(new Kp),l.addPass(new qh);let u=()=>{l.setPixelRatio(i.getPixelRatio()),l.setSize(r,o),c.setSize(Math.ceil(r*i.getPixelRatio()/2),Math.ceil(o*i.getPixelRatio()/2))};return{get quality(){return s},set(h){s=h,c.enabled=h==="high"},resize(h,d){r=h,o=d,u()},render(){s==="off"?i.render(e,t):l.render()}}}var Zp="ef_orient",$h=()=>{try{let i=localStorage.getItem(Zp);return i==="p"||i==="l"?i:null}catch{return null}};function o_(i){try{i?localStorage.setItem(Zp,i):localStorage.removeItem(Zp)}catch{}dispatchEvent(new Event("resize"))}function oi(){let i=innerWidth,e=innerHeight,t=$h(),[n,s]=t==="p"&&i>e?[e*9/16,e]:t==="l"&&e>i?[i,i*9/16]:[i,e],r=s>=n?Math.min(n/360,s/640):Math.min(n/1280,s/720);return{w:Math.round(n/r),h:Math.round(s/r),s:r}}var la=()=>{let i=oi();return i.h>=i.w};function Kh(i,e){let t=document.body.getBoundingClientRect(),n=oi().s;return{x:(i-t.left)/n,y:(e-t.top)/n}}function a_(){let{w:i,h:e,s:t}=oi(),n=document.documentElement,s=!0;n.classList.toggle("port",e>=i),n.classList.toggle("land",e<i),n.classList.toggle("boxed",s),n.style.setProperty("--bw",i+"px"),n.style.setProperty("--bh",e+"px"),n.style.setProperty("--bs",String(t))}addEventListener("resize",a_);a_();var lT=()=>Object.fromEntries(ys.map(i=>[i.id,0])),u_=(i,e,t)=>i+(e-i)*t(),h_=()=>Array.from({length:br},()=>({egg:-1,readyAt:0}));function jp(i){i.money=0,i.autoAcc=0,i.freeEggs=Am,i.habs=[1,...Array(vd-1).fill(0)],i.dinos=i.habs.map(()=>[]),i.vehs=[1,...Array(Er-1).fill(0)],i.shops=bn.map(()=>0),i.research=lT(),i.eggReady=!1}function Qp(i=Math.random){let e={eggIdx:0,essence:0,runEarnings:0,essenceClaimed:0,silos:1,incub:h_(),bestRarity:-1,droneT:u_(bd,Ed,i),giftT:Td,ad2xT:0,adPteroT:0,acc:0,bonusEggs:Qn.map(()=>0),playSec:0,tSec:0,tSeen:0,tClaimed:[],tCyc:0,dDay:-1,dIdx:0,dCyc:0};return jp(e),e}var cT={money:1e13,runEarnings:1e13,essence:2500},Jh=i=>i>0?pi[i-1].slots:0,nc=i=>i>0?pi[i-1].mult:0,l_=(i,e)=>typeof i=="number"&&isFinite(i)?i:e;function d_(i,e=Math.random,t){let n=Qp(e),s=i&&typeof i=="object"?i:{},r={};for(let d of Object.keys(n)){if(d==="dinos"||d==="incub"||d==="tClaimed")continue;let f=n[d],p=s[d];if(Array.isArray(f))r[d]=Array.isArray(p)?f.map((_,m)=>typeof p[m]=="number"&&isFinite(p[m])?p[m]:_):f;else if(f&&typeof f=="object"){let _=p&&typeof p=="object"?p:{};r[d]=Object.fromEntries(Object.entries(f).map(([m,g])=>[m,typeof _[m]=="number"&&isFinite(_[m])?_[m]:g]))}else r[d]=typeof p==typeof f&&(typeof p!="number"||isFinite(p))?p:f}r.bonusEggs=r.bonusEggs.map(d=>Math.max(0,Math.floor(d)));let o=Array.isArray(s.tClaimed)?s.tClaimed:[];r.tClaimed=[...new Set(o.filter(d=>typeof d=="number"&&Number.isInteger(d)&&d>=0&&d<Ln.length))],r.dIdx=Math.min(vs.length-1,Math.max(0,Math.floor(r.dIdx))),r.dCyc=Math.max(0,Math.floor(r.dCyc));let a=(d,f)=>Math.min(f,Math.max(0,Math.floor(d)));r.shops=r.shops.map(d=>a(d,js.length)),r.vehs=r.vehs.map(d=>a(d,_s.length)),r.eggIdx=a(r.eggIdx,ei.length-1),r.silos=Math.max(1,a(r.silos,ho));let l=r.research;for(let d of ys)l[d.id]=a(l[d.id],d.max);let c=r.habs.map(d=>a(d,pi.length));r.habs=c;let u=Array.isArray(s.dinos)?s.dinos:[];r.dinos=c.map((d,f)=>(Array.isArray(u[f])?u[f]:[]).filter(p=>typeof p=="number"&&Number.isInteger(p)&&p>=0&&p<Cn.length).slice(0,Jh(d)));let h=Array.isArray(s.incub)?s.incub:[];if(r.incub=h_().map((d,f)=>{let p=h[f]&&typeof h[f]=="object"?h[f]:{},_=l_(p.egg,-1);return Number.isInteger(_)&&_>=0&&_<Qn.length?{egg:_,readyAt:l_(p.readyAt,0)}:d}),typeof t=="number"&&t<3)for(let[d,f]of Object.entries(cT))r[d]=Math.min(r[d],f);if((t??0)<4&&typeof s.pop=="number"&&isFinite(s.pop)){let d=1+.1*(r.research.space??0),f=c.reduce((_,m)=>_+(m>0?Lm[m-1]:0),0)*d,p=f>0?Math.min(1,Math.max(0,s.pop/f)):0;r.dinos=c.map(_=>Array(Math.round(Jh(_)*p)).fill(0)),r.freeEggs=0,r.bestRarity=0}return r}var Gs=(i,e)=>i.research[e],Vs=Object.fromEntries(ys.map(i=>[i.id,i.eff])),ks=(i,e)=>1+Vs[e]*Gs(i,e),Qr=i=>Im+Vs.vehicleSlot*Gs(i,"vehicleSlot"),jh=i=>Math.min(br,Rm+Vs.incubSlots*Gs(i,"incubSlots")),Qh=i=>Math.max(jh(i),i.incub.reduce((e,t,n)=>t.egg>=0?n+1:e,0)),uT=i=>Vs.autoHatch1*Gs(i,"autoHatch1")+Vs.autoHatch2*Gs(i,"autoHatch2"),f_=i=>i.habs.reduce((e,t)=>e+Jh(t),0),em=i=>i.dinos.reduce((e,t)=>e+t.length,0),p_=(i,e)=>bn.reduce((t,n,s)=>n.kind===e&&i.shops[s]>0?t+n.eff*vc[i.shops[s]-1]:t,0),hT=i=>ks(i,"nests")*ks(i,"layers")*ks(i,"megaLay")*(1+p_(i,"lay")),dT=i=>ks(i,"roads")*ks(i,"freight"),fT=i=>ks(i,"feed")*ks(i,"packaging")*(1+p_(i,"spend")),tm=i=>1+i.essence*(Um+Vs.essence*Gs(i,"essence")),pT=(i,e,t)=>Cn[e].power*ei[i.eggIdx].power*nc(t)*ks(i,"space"),Jp=(i,e)=>i.dinos[e].reduce((t,n)=>t+pT(i,n,i.habs[e]),0),ca=i=>i.dinos.reduce((e,t,n)=>e+Jp(i,n),0)*Pm*hT(i),ua=i=>i.vehs.slice(0,Qr(i)).reduce((e,t)=>e+(t>0?_s[t-1].cap:0),0)/60*dT(i),vr=i=>Math.min(ca(i),ua(i))*ei[i.eggIdx].value*fT(i)*tm(i),ed=i=>vr(i)*(i.ad2xT>0?2:1);function m_(i,e){let t=i.dinos.reduce((n,s,r)=>n+Jp(i,r),0);return t>0?ed(i)*Jp(i,e)/t:0}var mT=i=>vr(i)*3600,td=(i,e)=>pi[e-1].cost*Md**i,nd=(i,e)=>_s[e-1].cost*Md**i,nm=(i,e)=>js[e-1]*bn[i].cost,g_=i=>ys.find(e=>e.id===i),im=(i,e)=>{let t=g_(e);return t.base*t.growth**i.research[e]},sm=i=>Object.values(i.research).reduce((e,t)=>e+t,0),rm=(i,e)=>sm(i)>=Mc[e],om=i=>Xm*qm**(i.silos-1),id=i=>i.eggIdx<ei.length-1&&mT(i)>=ei[i.eggIdx+1].threshold,sd=i=>i.runEarnings<Dm?0:Math.max(0,Math.floor(Math.sqrt(i.runEarnings/Nm))-i.essenceClaimed),x_=(i,e)=>vr(i)*Math.min(Math.max(e,0),i.silos*wc),gT=(i,e)=>ei[i.eggIdx].egg*Qn[e].priceMult*Vs.incubator**Gs(i,"incubator"),sc=(i,e)=>(e===0?i.freeEggs:0)+(i.bonusEggs[e]??0),rd=(i,e)=>sc(i,e)>0?0:gT(i,e),ha=(i,e)=>e>=0&&e<Qn.length&&(i.bestRarity>=Qn[e].needs||i.bonusEggs[e]>0),ic=(i,e)=>Qn[e].hatchS*(1-Vs.warmLamps*Gs(i,"warmLamps")),od=(i,e,t)=>{let n=i.incub[e];return n&&n.egg>=0?Math.max(0,(n.readyAt-t)/1e3):0},am=i=>i.incub.findIndex((e,t)=>t<jh(i)&&e.egg<0),lm=(i,e,t)=>ha(i,e)&&am(i)>=0&&i.money>=rd(i,e)&&isFinite(t),c_=(i,e)=>ei[i.eggIdx].egg*Cn[e].sell;function xT(i,e){let t=ks(i,"runCap"),n=Qn[e].odds.map((r,o)=>r*t**o),s=n.reduce((r,o)=>r+o,0);return n.map(r=>r/s)}function __(i,e,t){let n=xT(i,e),s=t();for(let r=0;r<n.length;r++)if((s-=n[r])<0)return r;return n.length-1-[...n].reverse().findIndex(r=>r>0)}function _T(i,e){let t=-1;for(let o=0;o<i.dinos.length;o++)i.dinos[o].length<Jh(i.habs[o])&&(t<0||nc(i.habs[o])>nc(i.habs[t]))&&(t=o);if(t>=0)return{kind:"free",hab:t,slot:i.dinos[t].length,old:-1};let n=-1,s=-1,r=99;return i.dinos.forEach((o,a)=>o.forEach((l,c)=>{(l<r||l===r&&nc(i.habs[a])<nc(i.habs[n]))&&(n=a,s=c,r=l)})),n>=0&&e>r?{kind:"replace",hab:n,slot:s,old:r}:{kind:"sell",hab:-1,slot:-1,old:-1}}function y_(i,e,t,n){let s=_T(i,e);if(s.kind==="free")i.dinos[s.hab].push(e),n.push({type:"hatched",hab:s.hab,slot:s.slot,rarity:e,src:t});else if(s.kind==="replace"){let r=c_(i,s.old);i.money+=r,i.dinos[s.hab][s.slot]=e,n.push({type:"hatched",hab:s.hab,slot:s.slot,rarity:e,src:t},{type:"replaced",hab:s.hab,slot:s.slot,old:s.old,rarity:e,money:r})}else{let r=c_(i,e);i.money+=r,n.push({type:"sold",rarity:e,money:r,src:t})}if(e>i.bestRarity){let r=i.bestRarity;i.bestRarity=e,Qn.forEach((o,a)=>{o.needs>r&&o.needs<=e&&n.push({type:"typeUnlocked",egg:a})})}}function rc(i,e){return i.money<e?!1:(i.money-=e,!0)}function v_(i,e,t){return lm(i,e,t)?(e===0&&i.freeEggs>0?i.freeEggs--:i.bonusEggs[e]>0?i.bonusEggs[e]--:i.money-=rd(i,e),i.incub[am(i)]={egg:e,readyAt:t+ic(i,e)*1e3},!0):!1}function M_(i,e,t){let n=i.incub[e];!n||n.egg<0||n.readyAt-t<=Ca*1e3||i.incub.forEach((s,r)=>{s.egg>=0&&(s.readyAt-=(r===e?Aa:Ra)*1e3)})}var cm=(i,e,t)=>{let n=i.incub[e];return!!n&&n.egg>=Cm&&n.readyAt-t<=Ca*1e3};function S_(i,e,t){return cm(i,e,t)?(i.incub[e].readyAt=Math.min(i.incub[e].readyAt,t),!0):!1}function b_(i,e,t){return!Number.isInteger(e)||e<0||e>=vd||!Number.isInteger(t)||t<=i.habs[e]||t>pi.length||!rc(i,td(e,t))?!1:(i.habs[e]=t,!0)}function E_(i,e,t){return!Number.isInteger(e)||e<0||e>=Qr(i)||!Number.isInteger(t)||t<=i.vehs[e]||t>_s.length||!rc(i,nd(e,t))?!1:(i.vehs[e]=t,!0)}function T_(i,e,t){return!Number.isInteger(e)||e<0||e>=bn.length||!Number.isInteger(t)||t<=i.shops[e]||t>js.length||!rc(i,nm(e,t))?!1:(i.shops[e]=t,!0)}function w_(i,e){let t=g_(e);return!t||i.research[e]>=t.max||!rm(i,t.tier)||!rc(i,im(i,e))?!1:(i.research[e]++,!0)}function A_(i){return i.silos>=ho||!rc(i,om(i))?!1:(i.silos++,!0)}function R_(i){return id(i)?(i.eggIdx++,jp(i),!0):!1}function C_(i){let e=sd(i);return e<1?!1:(i.essence+=e,i.eggIdx=0,i.runEarnings=0,i.essenceClaimed=0,i.bestRarity=-1,jp(i),!0)}function P_(i,e,t=Math.random){let n=[],s=i.adPteroT>0,r=s&&e?2:1,o=e||s?2:1;for(let a=0;a<r;a++)y_(i,__(i,o,t),"drone",n);return n}function I_(i,e){let t=vr(i)*Ec*(e?Tc:1);return i.money+=t,i.runEarnings+=t,t}var L_=i=>{i.ad2xT=Math.min(bc,i.ad2xT+Bm)},D_=i=>{i.adPteroT=Math.min(Sc,i.adPteroT+Fm)};function yT(i,e,t,n){for(let o of i.incub){if(o.egg<0)continue;let a=ic(i,o.egg)*1e3;if(o.readyAt-t>a+1e3&&(o.readyAt=t+a),t>=o.readyAt){let l=o.egg;o.egg=-1,y_(i,__(i,l,e),"incub",n)}}for(i.autoAcc+=uT(i)*xs;i.autoAcc>=1;){let o=am(i);if(o<0){i.autoAcc=1;break}i.autoAcc--,i.incub[o]={egg:0,readyAt:t+ic(i,0)*1e3}}let s=ed(i)*xs;i.money+=s,i.runEarnings+=s,i.ad2xT>0&&(i.ad2xT=Math.max(0,i.ad2xT-xs)),i.adPteroT>0&&(i.adPteroT=Math.max(0,i.adPteroT-xs)),(i.droneT-=xs)<=0&&(i.droneT=u_(bd,Ed,e),n.push({type:"drone",elite:e()<Om+Vs.drones*Gs(i,"drones")})),(i.giftT-=xs)<=0&&(i.giftT=Td,n.push({type:"gift"}));let r=id(i);r&&!i.eggReady&&n.push({type:"eggUnlocked"}),i.eggReady=r}function N_(i,e,t,n=Date.now()){let s=[];for(i.acc+=Math.min(Math.max(e,0),wm);i.acc>=xs-1e-9;)i.acc-=xs,yT(i,t.rng??Math.random,n,s);return s}var Zh=["","K","M","B","T","q","Q","s","S","o","N","d"];function Qt(i){if(!isFinite(i))return i>0?"inf":i<0?"-inf":"NaN";if(i<0)return"-"+Qt(-i);let e=i<1?0:Math.min(Zh.length-1,Math.floor(Math.log10(i)/3)),t=i/1e3**e,n=s=>s<10?2:s<100?1:0;return+t.toFixed(n(t))>=1e3&&e<Zh.length-1&&(e++,t/=1e3),e===Zh.length-1&&t>=1e3?i.toExponential(2):+t.toFixed(n(t))+Zh[e]}var ad=864e5,U_=i=>Math.floor(i/ad);function O_(i,e,t=1,n=1){let s=(e.money??0)*t;return{money:Math.round(Math.max(s*vr(i),s/60*Vm*ei[i.eggIdx].egg)*n),egg:(e.egg??0)*n,gold:(e.gold??0)*n,crystal:(e.crystal??0)*n,x2:(e.x2??0)*n,sky:(e.sky??0)*n}}function F_(i,e){i.money+=e.money,i.bonusEggs[0]+=e.egg,i.bonusEggs[1]+=e.gold,i.bonusEggs[2]+=e.crystal,e.x2&&(i.ad2xT=Math.min(bc,i.ad2xT+e.x2)),e.sky&&(i.adPteroT=Math.min(Sc,i.adPteroT+e.sky))}function B_(i,e,t){i.tSeen>0&&t-i.tSeen>Gm*1e3&&(i.tSec=0,i.tClaimed=[]),i.tSeen=t,e>0&&e<=km&&(i.tSec+=e,i.playSec+=e)}var ld=(i,e)=>i.playSec>=uo&&i.dDay!==U_(e),oc=(i,e)=>i.playSec<uo?uo-i.playSec:ld(i,e)?0:(ad-e%ad)/1e3,z_=(i,e)=>1-oc(i,e)/(i.playSec<uo?uo:ad/1e3),cd=(i,e,t=i.dCyc)=>O_(i,vs[e%vs.length],zm**Math.min(t,Hm));function H_(i,e){if(!ld(i,e))return null;let t=cd(i,i.dIdx);return F_(i,t),i.dDay=U_(e),i.dIdx=(i.dIdx+1)%vs.length,i.dIdx===0&&i.dCyc++,t}var ac=(i,e)=>e>=0&&e<Ln.length&&!i.tClaimed.includes(e)&&i.tSec>=Ln[e].at&&Ln.every((t,n)=>n>=e||i.tClaimed.includes(n)||t.r.ad),k_=i=>Ln.some((e,t)=>ac(i,t));function G_(i){let e=Ln.find((t,n)=>!i.tClaimed.includes(n)&&t.at>i.tSec);return e?e.at-i.tSec:null}var ud=(i,e,t=!1)=>O_(i,Ln[e].r,1,t&&Ln[e].r.ad?2:1);function hd(i,e,t=!1){if(!ac(i,e))return null;let n=ud(i,e,t);return F_(i,n),i.tClaimed=[...i.tClaimed,e],e===Ln.length-1&&(i.tSec=0,i.tClaimed=[],i.tCyc++),n}var Oe=i=>document.getElementById(i),Et=(i,e="",t)=>{let n=document.createElement(i);return e&&(n.className=e),t?.appendChild(n),n},_t=(i,e)=>{i.textContent!==e&&(i.textContent=e)},Hn=Object.fromEntries(ys.map(i=>[i.id,i.eff])),Ai=i=>`${+(i*100).toFixed(1)}%`,V_=i=>{let e=1/i;return e>=60?`${+(e/60).toFixed(1)} min`:`${Math.round(e)} s`},vT={nests:["Dino Shows",`Attraction +${Ai(Hn.nests)}`],feed:["Gift Shop",`Ticket value +${Ai(Hn.feed)}`],incubator:["Egg Lab",`Egg price -${Ai(1-Hn.incubator)}`],autoHatch1:["Auto Hatch I",`Free Egg every ${V_(Hn.autoHatch1)}`],space:["Roomy Enclosures",`Enclosure power +${Ai(Hn.space)}`],roads:["Tour Guides",`Tour capacity +${Ai(Hn.roads)}`],runCap:["Lucky Eggs","Better rarity odds"],incubSlots:["Incubator Slots",`+${Hn.incubSlots} incubator slot`],warmLamps:["Warm Lamps",`Hatch time -${Ai(Hn.warmLamps)}`],layers:["Feeding Shows",`Attraction +${Ai(Hn.layers)}`],vehicleSlot:["Tour Depot",`+${Hn.vehicleSlot} tour slot`],packaging:["VIP Tickets",`Ticket value +${Ai(Hn.packaging)}`],autoHatch2:["Auto Hatch II",`Free Egg every ${V_(Hn.autoHatch2)}`],drones:["Pterodactyl Training",`Golden pterodactyl +${Ai(Hn.drones)}`],essence:["Amber Study",`Amber bonus +${Ai(Hn.essence)}`],freight:["Express Lines",`Tour capacity +${Ai(Hn.freight)}`],megaLay:["Star Attractions",`Attraction +${Ai(Hn.megaLay)}`]},q_='<svg class="film" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM5 5v2h2V5H5zm0 4v2h2V9H5zm0 4v2h2v-2H5zm0 4v2h2v-2H5zM17 5v2h2V5h-2zm0 4v2h2V9h-2zm0 4v2h2v-2h-2zm0 4v2h2v-2h-2zM9.5 7v10l6-5z"/></svg>';function dd(i,e){let t=i.querySelector(".adt");t||(i.innerHTML=q_+'<span class="adt"></span>',t=i.querySelector(".adt")),_t(t,e)}function da(i,e,t,n){i.firstElementChild||(i.innerHTML='<span class="bl"></span><span class="bn"></span><span class="bp"></span>');let[s,r,o]=Array.from(i.children);_t(s,e),_t(r,t),_t(o,n),i.toggleAttribute("data-solo",!t&&!n)}var $t={star:'<path d="M12 2l3 6.5 7 .8-5.2 4.8 1.5 7L12 17.5 5.7 21l1.5-7L2 9.3l7-.8z"/>',gift:'<path d="M3 9h18v4H3zM4 14h16v7H4zM12 9C9 2 4 5 8 9zM12 9c3-7 8-4 4 0z"/>',bolt:'<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',clock:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M11 6h2v6l4 2-1 1.7-5-2.7z"/>',expand:'<path d="M3 3h7v2.5H5.5V10H3zM21 3v7h-2.5V5.5H14V3zM3 21v-7h2.5v4.5H10V21zM21 21h-7v-2.5h4.5V14H21z"/>',person:'<circle cx="12" cy="7" r="4"/><path d="M4 21c0-5 3.5-8 8-8s8 3 8 8z"/>',paw:'<circle cx="6" cy="10" r="2.3"/><circle cx="10" cy="5.5" r="2.3"/><circle cx="14" cy="5.5" r="2.3"/><circle cx="18" cy="10" r="2.3"/><path d="M12 11c4 0 7 3 6 6-.8 2-3 2-6 1-3 1-5.2 1-6-1-1-3 2-6 6-6z"/>',meat:'<circle cx="15" cy="9" r="6"/><path d="M10 13l-6 6a2 2 0 003 3l6-6z"/>',house:'<path d="M12 2L2 11h3v10h14V11h3z"/>',ticket:'<path fill-rule="evenodd" d="M2 6h20v4a2 2 0 000 4v4H2v-4a2 2 0 000-4zM15 8v2h2V8zm0 3v2h2v-2zm0 3v2h2v-2z"/>',wing:'<path d="M2 6c6 0 9 3 10 7 1-4 4-7 10-7-2 4-3 8-10 13C5 14 4 10 2 6z"/>',gem:'<path d="M12 2l8 7-8 13L4 9z"/>',egg:'<path d="M12 2C7 2 4 10 4 14a8 8 0 0016 0c0-4-3-12-8-12z"/>',chev:'<path d="M3 4l8 8-8 8zM12 4l9 8-9 8z"/>',moon:'<path d="M20 14A9 9 0 119.5 3.5 7 7 0 0020 14z"/>',burger:'<path d="M3 11a9 7 0 0118 0z"/><rect x="3" y="12.5" width="18" height="2.5" rx="1.2"/><path d="M3 16.5h18a3 3 0 01-3 3.5H6a3 3 0 01-3-3.5z"/>',cone:'<path d="M7.5 14.6h9L12 23z"/><rect x="4.8" y="11.6" width="14.4" height="2.4" rx="1.2"/><path d="M6.4 10.6a5.6 5.6 0 0111.2 0z"/><circle cx="12" cy="3.6" r="1.9"/>',bag:'<path d="M5 8h14l1.5 13h-17z"/><path d="M8.5 10V7a3.5 3.5 0 017 0v3" fill="none" stroke="currentColor" stroke-width="2"/>',fence:'<ellipse cx="12" cy="17" rx="10" ry="4.5" opacity=".55"/><path d="M3 8v9M8 6v9M16 6v9M21 8v9M3 9l5-2.5h8L21 9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>'},MT=[$t.burger,$t.cone,$t.bag,$t.ticket,$t.ticket],ST=js.map((i,e)=>({name:`Lv ${e+1}`})),bT={nests:$t.star,feed:$t.gift,incubator:$t.egg,autoHatch1:$t.clock,incubSlots:$t.expand,warmLamps:$t.bolt,space:$t.expand,roads:$t.person,runCap:$t.gem,layers:$t.meat,vehicleSlot:$t.house,packaging:$t.ticket,autoHatch2:$t.clock,drones:$t.wing,essence:$t.gem,freight:$t.chev,megaLay:$t.star+'<circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" stroke-width="1.5"/>'};function lc(i){let e=Et("div","row",i),t=Et("div","ico",e),n=Et("div","info",e),s=Et("div","acts",e),r=Et("span","",n),o=Et("small","",n),a=Et("small","nx",n),l=Et("button","btn",s),c=Et("button","btn best",s);return{root:e,icon:t,name:r,sub:o,nx:a,b1:l,b2:c,lv1:0,lv2:0}}function fa(i,e,t,n=!1,s=""){i.icon.dataset.k!==e&&(i.icon.dataset.k=e,i.icon.innerHTML=t),i.icon.classList.toggle("dim",n),i.icon.dataset.l!==s&&(s?i.icon.dataset.l=s:delete i.icon.dataset.l)}function ET(i){let e=Et("div","dots",i.sub.parentElement);i.dots=Cn.map(t=>{let n=Et("span","z",e);return Et("i","",n).style.setProperty("--rc","#"+t.color.toString(16).padStart(6,"0")),Et("b","",n),n})}var TT=i=>"#"+Cn[i].color.toString(16).padStart(6,"0"),eo=i=>`<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${i}</svg>`,W_=["egg","golden","crystal"],pa=new Map;function X_(i){if(!pa.has(i)){pa.set(i,void 0);let e=new Image;e.onload=()=>pa.set(i,!0),e.onerror=()=>pa.set(i,!1),e.src=i}return pa.get(i)===!0}function um(i,e,t){let n=`ui/eggs/${e}-${W_[t]}.png`,s=`ui/eggs/${W_[t]}.png`,r=X_(n),o=pa.get(n)===!1&&X_(s),a=r?n:o?s:"",l=e+":"+t+":"+a;i.dataset.k!==l&&(i.dataset.k=l,i.classList.toggle("css",!a),i.style.setProperty("--ei",a?`url(${a})`:"none"),i.style.setProperty("--ec","#"+Pa[t].toString(16).padStart(6,"0")))}var qi=i=>`${Math.floor(i/60)}:${String(Math.floor(i%60)).padStart(2,"0")}`;function Y_(i,e,t,n,s){let r=0,o=Oe("zoom");o.addEventListener("input",()=>s(+o.value/1e3));let a=Oe("eggbtn");a.innerHTML='<span class="eg2"></span>';let l=a.querySelector(".eg2"),c=0,u=Qn.map((P,H)=>{let W=Et("button","btn chip",Oe("eggsw"));return W.innerHTML='<i class="eggi"></i><span></span>',W.onclick=()=>{if(!ha(i,H)){Zt("deny");return}c=H,H===1&&!Le.gold&&(Le.gold=!0,Mt()),q()},{b:W,ico:W.querySelector(".eggi"),lab:W.querySelector("span"),name:P.name.replace(" Egg","")}}),h=Array.from({length:br},(P,H)=>{let W=Et("div","slot",Oe("incub")),U=Et("div","sring",W),k=Et("i","eggi",U),te=Et("span","st",W),I=Et("button","btn ad",W),ne=Et("button","btn fin",W);return ne.textContent="Hatch!",ne.hidden=!0,ne.onclick=()=>{S_(i,H,Date.now())&&(Zt("shimmer"),q())},I.onclick=()=>tr(()=>{M_(i,H,Date.now()),Zt("shimmer"),A(`-${qi(Aa)} here, -${qi(Ra)} other eggs`),q()},Fe),{root:W,ring:U,ico:k,st:te,ad:I,fin:ne,p:-1}});a.addEventListener("click",()=>{if(!v_(i,c,Date.now())){Zt("deny");return}Zt("buy"),Le.eggs<3&&(Le.eggs++,Mt()),q()});function d(){let P=Date.now(),H=jh(i),W=Qh(i);ha(i,c)||(c=0);let U=!i.incub.some((te,I)=>I<H&&te.egg<0),k=rd(i,c);_t(l,U?"FULL":k===0?`FREE \xD7${sc(i,c)}`:`$${Qt(k)}`),a.disabled=!lm(i,c,P),u.forEach((te,I)=>{let ne=ha(i,I);te.b.classList.toggle("on",ne&&I===c),te.b.classList.toggle("lock",!ne),um(te.ico,i.eggIdx,I);let Z=sc(i,I);_t(te.lab,ne?te.name+(Z>0?` \xD7${Z}`:""):`\u{1F512} ${Cn[Qn[I].needs].name}`),te.ico.style.display=ne?"":"none"}),h.forEach((te,I)=>{if(te.root.hidden=I>=W,I>=W)return;let ne=i.incub[I],Z=ne.egg>=0;if(te.root.classList.toggle("empty",!Z),!Z){_t(te.st,""),te.ad.hidden=!0,te.fin.hidden=!0,te.p!==0&&(te.p=0,te.ring.style.setProperty("--p","0"));return}um(te.ico,i.eggIdx,ne.egg);let fe=od(i,I,P),he=Math.round((1-fe/Math.max(1,ic(i,ne.egg)))*100);he!==te.p&&(te.p=he,te.ring.style.setProperty("--p",String(he))),_t(te.st,qi(Math.ceil(fe))),te.ad.hidden=fe<=Ca,te.ad.hidden||dd(te.ad,`-${Aa/60}m
-${Ra/60}m others`),te.fin.hidden=!(fe>0&&cm(i,I,P))})}document.addEventListener("click",P=>{let H=P.target.closest("button");!H||H.closest(".row")||H.id==="eggbtn"||Zt(H.classList.contains("tab")?"tab":H.id==="gear"?"open":H.id==="sclose"||H.id==="mno"?"close":"click")},!0);let f=Oe("modal"),p=Oe("sett"),_=()=>!f.hidden||!p.hidden;Oe("gear").addEventListener("click",()=>{p.hidden=!1});let m=document.createElement("button");m.className="btn",m.id="quality",m.style.margin="14px auto 8px",m.style.display="block";let g=()=>{m.textContent="Quality: "+{off:"Off",low:"Low",high:"High"}[n.quality]};m.addEventListener("click",()=>{let P={off:"low",low:"high",high:"off"}[n.quality];n.set(P),s_(P),g()}),g();let y=p.querySelector(".box"),w=Et("button","btn",y);w.style.cssText="margin:14px auto 0;display:block";let M=()=>{w.textContent="Sound: "+(Lc()?"On":"Off")};w.addEventListener("click",()=>{ng(!Lc()),M()}),M(),y.insertBefore(w,Oe("ver"));for(let[P,H]of[["sfx","Sound"],["music","Music"],["ambient","Ambient"]]){let W=Et("label","vol",y),U=Et("input","",W);W.prepend(Object.assign(document.createElement("span"),{textContent:H})),Object.assign(U,{type:"range",min:"0",max:"100",value:String(Math.round(Ic(P)*100))}),U.oninput=()=>ig(P,+U.value/100),P==="sfx"&&(U.onchange=()=>Zt("click")),y.insertBefore(W,Oe("ver"))}y.insertBefore(m,Oe("ver"));let E=[[null,"Auto"],["l","Wide"],["p","Tall"]],T=Et("button","btn",y);T.style.cssText="margin:0 auto 20px;display:block";let x=()=>{let P=E.findIndex(([H])=>H===$h());T.textContent="Screen: "+E[P][1]+(P?"":` \xB7 ${la()?"Tall":"Wide"}`)};T.addEventListener("click",()=>{o_(E[(E.findIndex(([P])=>P===$h())+1)%3][0]),x()}),addEventListener("resize",x),x(),y.insertBefore(T,Oe("ver")),p.addEventListener("click",P=>{(P.target===p||P.target===Oe("sclose"))&&(p.hidden=!0)});function b(P,H,W,U=!0,k){_t(Oe("mtext"),P),_t(Oe("mok"),H),Oe("mno").hidden=!U,f.hidden=!1,Oe("mx").hidden=!k,k&&(dd(Oe("mx"),k[0]),Oe("mx").onclick=()=>{f.hidden=!0,k[1](),q()}),Oe("mok").onclick=()=>{f.hidden=!0,W(),q()},Oe("mno").onclick=()=>{f.hidden=!0}}let L=0;function A(P){_t(Oe("toast"),P),Oe("toast").classList.add("on"),clearTimeout(L),L=window.setTimeout(()=>Oe("toast").classList.remove("on"),2500)}let N=Array.from({length:4},(P,H)=>{let W=lc(Oe("p-habs"));return ET(W),j(W,U=>b_(i,H,U)),W}),O=Array.from({length:Er},(P,H)=>{let W=lc(Oe("p-vehs"));return j(W,U=>E_(i,H,U)),W}),X=bn.map((P,H)=>{let W=lc(Oe("p-shops"));return j(W,U=>T_(i,H,U)),W}),D=lc(Oe("p-vehs"));D.b2.hidden=!0,D.b1.onclick=()=>{Ct(A_(i)),q()};let Y=ys.map(P=>{let H=lc(Oe("p-res"));return H.b2.hidden=!0,H.b1.onclick=()=>{Ct(w_(i,P.id)),q()},H});function j(P,H){P.b1.onclick=()=>{Ct(H(P.lv1)),q()},P.b2.onclick=()=>{Ct(H(P.lv2)),q()}}let K='<circle cx="12" cy="12" r="10"/><path d="M12 5v14M15.5 8.5C14.5 7 9 7 9 10.5S15 13 15 16.5 9.5 18 8.5 15.5" fill="none" stroke="#193c3e" stroke-width="2"/>',ce=Oe("gdaily"),z=Oe("gplay"),J=Oe("gpop"),re=Oe("gweek"),_e=Oe("glist"),Ee=null;function ie(P){let H=W=>`${Math.max(1,Math.round(W/60))} min`;return P.crystal?["e2",`\xD7${P.crystal}`,"Crystal Egg"]:P.gold?["e1",`\xD7${P.gold}`,"Golden Egg"]:P.egg?["e0",`\xD7${P.egg}`,"Egg"]:P.sky?["sky",H(P.sky),"Crystal Skies"]:P.x2?["x2",H(P.x2),"income \xD72"]:["$",`$${Qt(P.money)}`,"Coins"]}let xe=P=>{let[,H,W]=ie(P);return`${H} ${W}`};function Se(P,H){if(H[0]==="e"){P.dataset.k!==H&&(P.dataset.k=H,P.innerHTML='<i class="eggi"></i>'),um(P.firstElementChild,i.eggIdx,+H[1]);return}P.dataset.k!==H&&(P.dataset.k=H,P.innerHTML=H==="$"?eo(K):H==="sky"?eo($t.wing):"<b>\xD72</b>",P.style.color=H==="sky"?"#7ff0ff":"")}function ge(P,H,W=!1){let U=Et("button","tile "+P,H),k=Et("small","tt",U),te=Et("div","gi",U),I=Et("b","amt",U),ne=Et("small","cap",U),Z={root:U,tt:k,gi:te,amt:I,cap:ne,mark:Et("i","mark",U)};return W&&(Z.bar=Et("div","bar",U),Et("i","",Z.bar),Z.em=Et("em","",Z.bar),Z.vid=Et("span","vid",U),Z.vid.innerHTML=q_),Z}function de(P,H,W,U=""){let[k,te,I]=ie(H);Se(P.gi,k),_t(P.amt,te),_t(P.cap,I),_t(P.tt,U),P.root.title=`${te} ${I}`,P.root.className=P.root.className.replace(/ (done|ready|wait)\b/g,"")+" "+W,_t(P.mark,W==="done"?"\u2713":W==="wait"?"\u{1F512}":"")}let R=vs.map((P,H)=>ge(H===vs.length-1?"card big":"card",re)),le=Ln.map(()=>ge("rw",_e,!0)),pe=P=>(P=Math.ceil(P),P>=3600?`${Math.floor(P/3600)} h ${Math.floor(P/60)%60} m`:qi(P));function Ie(P){if(!P){Zt("deny");return}Zt("bonus");let H={money:0,egg:0,gold:0,crystal:0,x2:0,sky:0};A("Got "+Object.keys(H).filter(W=>P[W]).map(W=>xe({...H,[W]:P[W]})).join(" + ")),q()}let ke=Oe("ginfo"),Ue=ke.firstElementChild,Xe={e0:"Put it in the incubator: it hatches a dino of random rarity.",e1:"Hatches rarer dinos than a plain Egg.",e2:"The best odds of Epic and Legendary dinos.",sky:"Every pterodactyl brings a Crystal Egg while it lasts.",x2:"All park income is doubled while it lasts.",$:"Coins to spend on enclosures, tours and shops."};function Ye(P,H){let[W,U,k]=ie(P);Se(Ue.children[0],W),Ue.children[1].textContent=`${U} ${k}`,Ue.children[2].textContent=Xe[W],Ue.children[3].textContent=H,ke.hidden=!1,Zt("click")}ke.addEventListener("click",P=>{P.stopPropagation(),ke.hidden=!0}),R.forEach((P,H)=>{P.root.onclick=()=>{if(P.root.classList.contains("ready")){Ie(H_(i,Date.now()));return}Ye(cd(i,H),H<i.dIdx?"Already taken this week.":H===i.dIdx?`Comes in ${pe(oc(i,Date.now()))}.`:`Day ${H+1}: one gift a day, in order.`)}}),le.forEach((P,H)=>{P.root.onclick=()=>{if(!P.root.classList.contains("ready")){let U=Ln[H];Ye(ud(i,H,!!U.r.ad),i.tClaimed.includes(H)?"Already taken.":(i.tSec>=U.at?"Take the gifts above first.":`Play ${qi(U.at)} in one go to get it.`)+(U.r.ad?" Watch a video: \xD72.":""));return}let W=U=>{Ie(U),Le.eggs<3&&Ne()};Ln[H].r.ad?tr(()=>W(hd(i,H,!0)),()=>{A("No video available: normal reward"),W(hd(i,H,!1))}):W(hd(i,H,!1))}});function Je(P){Ee=P,J.hidden=!1,q()}function Ne(){Ee=null,J.hidden=!0,ke.hidden=!0,q()}ce.onclick=()=>Je("d"),z.onclick=()=>Je("t"),Oe("gx").onclick=Ne,J.addEventListener("click",P=>{P.target===J&&Ne()});function ee(){let P=Date.now(),H=ld(i,P),W=k_(i),U=G_(i);ce.style.setProperty("--p",String(H?100:Math.round(z_(i,P)*100))),ce.classList.toggle("rdy",H),_t(ce.querySelector(".gt"),H?"GIFT":pe(oc(i,P)).replace(" h ","h").replace(" m","m")),z.style.setProperty("--p",String(W||U===null?100:Math.round(Math.min(1,i.tSec/(i.tSec+U))*100))),z.classList.toggle("rdy",W),_t(z.querySelector(".gt"),W?"TAKE":U===null?"":qi(U)),!J.hidden&&(Oe("gweek").hidden=Ee!=="d",Oe("glist").hidden=Ee!=="t",_t(Oe("gtitle"),Ee==="d"?"Daily gift":"Play-time gifts"),Ee==="d"?(_t(Oe("gsub"),`Week ${i.dCyc+1} \xB7 ${H?"your gift is waiting!":"next gift in "+pe(oc(i,P))}`),R.forEach((k,te)=>de(k,cd(i,te),te<i.dIdx?"done":te===i.dIdx&&H?"ready":"wait",`Day ${te+1}`))):(_t(Oe("gsub"),`Played this session: ${qi(i.tSec)}`),le.forEach((k,te)=>{let I=Ln[te],ne=i.tClaimed.includes(te)?"done":ac(i,te)?"ready":"wait",Z=Math.min(1,i.tSec/I.at);de(k,ud(i,te,!!I.r.ad),ne),k.bar.style.setProperty("--k",String(Z)),k.bar.classList.toggle("go",ne!=="wait"),_t(k.em,ne==="done"?"taken":`${qi(Math.min(i.tSec,I.at))} / ${qi(I.at)}`),k.vid.hidden=!I.r.ad})))}let Le={eggs:0,bought:!1,gold:!1};try{let P=JSON.parse(localStorage.getItem("ef_tut")??"{}");typeof P.eggs=="number"&&(Le.eggs=P.eggs),Le.bought=!!P.bought,Le.gold=!!P.gold}catch{}(em(i)>0||i.runEarnings>0||Le.bought)&&(Le.eggs=3,Le.bought=!0,Le.gold=!0);let Mt=()=>{try{localStorage.setItem("ef_tut",JSON.stringify(Le))}catch{}};function Ct(P){return Zt(P?"buy":"deny"),P&&!Le.bought&&(Le.bought=!0,Mt()),P}let Xt=Oe("finger");function G(){let P=Oe("panel").classList.contains("open")?Oe("tabs").querySelector(".tab.on")?.getAttribute("data-tab"):null,H={habs:i.habs.some((U,k)=>U<pi.length&&i.money>=td(k,U+1)),vehs:i.vehs.slice(0,Qr(i)).some((U,k)=>U<_s.length&&i.money>=nd(k,U+1))},W=["habs","vehs"].find(U=>H[U]);return W?W!==P?Oe("tabs").querySelector("[data-tab="+W+"]"):Array.from(Oe("p-"+W).querySelectorAll(".btn")).find(U=>!U.disabled&&U.offsetParent)??null:null}function bt(){let P=Le.eggs<3&&sc(i,0)===0&&ac(i,0)&&!i.tClaimed.includes(0),H=P?Ee==="t"?le[0].root:z:Le.eggs<3?a.disabled?null:a:ha(i,1)&&!Le.gold?u[1].b:Le.bought?null:G();if(Xt.hidden=!H||_()||!J.hidden&&!(P&&Ee==="t"),H&&!Xt.hidden){let W=H.getBoundingClientRect(),U=Kh(W.left+W.width/2,W.top);Xt.style.left=U.x+"px",Xt.style.top=Math.max(0,U.y-46)+"px"}}function rt(P,H,W,U,k,te,I,ne="empty"){_t(P.name,`${te}:
${W>0?U[W-1].name:ne}`),_t(P.sub,I);let Z=W+1;if(P.b1.hidden=Z>U.length,P.b1.hidden)_t(P.nx,"");else{let he=k(H,Z);P.lv1=Z,da(P.b1,W>0?"Upgrade:":"Build:",U[Z-1].name,`$${Qt(he)}`),P.b1.disabled=!(i.money>=he),_t(P.nx,`${W>0?"Next":"Build"}: ${U[Z-1].name}`)}let fe=0;for(let he=U.length;he>Z;he--)if(i.money>=k(H,he)){fe=he;break}P.b2.hidden=fe===0,fe&&(P.lv2=fe,da(P.b2,"Best:",U[fe-1].name,`$${Qt(k(H,fe))}`),P.b2.disabled=!1)}function dt(){let P=Oe("panel").classList.contains("open"),H=Oe("tabs").querySelector(".tab.on")?.getAttribute("data-tab");if(P){if(H==="habs"&&N.forEach((W,U)=>{let k=i.habs[U];fa(W,"hab",eo($t.fence),k===0,k>0?`L${k}`:""),rt(W,U,k,pi,td,`Slot ${U+1}`,k>0?`${i.dinos[U].length}/${pi[k-1].slots} dinos \xB7 $${Qt(m_(i,U))}/s`:"Pick an enclosure"),W.dots?.forEach((te,I)=>{let ne=i.dinos[U].filter(Z=>Z===I).length;te.classList.toggle("z",ne===0),_t(te.lastElementChild,String(ne)),te.hidden=k===0})}),H==="shops"&&X.forEach((W,U)=>{let k=i.shops[U],te=bn[U],I=ne=>`${te.kind==="lay"?"Attraction":"Visitor spending"} +${Qt(te.eff*vc[ne-1]*100)}%`;fa(W,"shop"+U,eo(MT[U]),k===0,k>0?`L${k}`:""),rt(W,U,k,ST,nm,te.name,k>0?I(k):I(1)+" when built",te.kind==="lay"?"not built":"closed")}),H==="vehs"){let W=Qr(i);O.forEach((k,te)=>{if(k.root.hidden=te>=W,te<W){let I=i.vehs[te],ne=t(Math.max(I,1));ne?fa(k,ne,`<img src="${ne}" alt="">`,I===0):fa(k,"bus",eo($t.chev),I===0),rt(k,te,I,_s,nd,`Slot ${te+1}`,I>0?`${Qt(_s[I-1].cap)} visitors/min`:"Pick a tour")}});let U=om(i);fa(D,"moon",eo($t.moon)),_t(D.name,`Night Staff ${i.silos}/${ho}`),_t(D.sub,`Offline cap ${i.silos*wc/3600} h of income`),D.b1.hidden=i.silos>=ho,da(D.b1,"Hire:","night staff",`$${Qt(U)}`),_t(D.nx,"Hire night staff"),D.b1.disabled=!(i.money>=U)}H==="res"&&ys.forEach((W,U)=>{let k=Y[U],te=i.research[W.id],[I,ne]=vT[W.id],Z=rm(i,W.tier);if(fa(k,W.id,eo(bT[W.id])),_t(k.name,`${I}  ${te}/${W.max}`),_t(k.sub,ne),k.root.style.opacity=Z?"":".5",te>=W.max)da(k.b1,"MAX","",""),k.b1.disabled=!0;else if(!Z)da(k.b1,`Unlock at ${Mc[W.tier]} research (${sm(i)})`,"",""),k.b1.disabled=!0;else{let fe=im(i,W.id);da(k.b1,"","",`$${Qt(fe)}`),k.b1.disabled=!(i.money>=fe)}})}}let ve=Array.from(Oe("tabs").querySelectorAll(".tab"));function St(P){ve.forEach(H=>H.classList.toggle("on",H.dataset.tab===P));for(let H of["habs","vehs","shops","res"])Oe("p-"+H).classList.toggle("on",H===P);Oe("panel").classList.toggle("open",P!==null),q()}ve.forEach(P=>P.addEventListener("click",()=>St(P.classList.contains("on")?null:P.dataset.tab))),St(la()?null:"habs"),Oe("newegg").addEventListener("click",()=>{let P=ei[i.eggIdx+1];b(`Switch to ${P.name}?
Park, money and research reset. Amber and night staff stay.`,"Start",()=>{R_(i)&&(Zt("trophy"),A(`${P.name}!`))})}),Oe("prest").addEventListener("click",()=>{let P=sd(i);b(`Prestige for +${Qt(P)} amber?
Everything resets to Compsognathus. Amber and night staff stay.`,"Prestige",()=>{C_(i)&&(Zt("prestige"),A(`+${Qt(P)} amber`))})});let Fe=()=>A("No video available right now"),Ve=Oe("gift");Ve.addEventListener("click",()=>{let P=H=>{Ve.hidden=!0,Zt("bonus"),A(`+$${Qt(I_(i,H))}`)};b(`Gift: +$${Qt(vr(i)*Ec)}`,"Take",()=>P(!1),!1,[`Watch ad \xD7${Tc}`,()=>tr(()=>P(!0),Fe)])}),Oe("ad2x").addEventListener("click",()=>tr(()=>{L_(i),Zt("shimmer"),A("\xD72 income +30 min")},Fe)),Oe("adptero").addEventListener("click",()=>tr(()=>{D_(i),Zt("shimmer"),A("Crystal Skies +10 min: pterodactyls bring Crystal Eggs")},Fe));function C(P,H,W,U=""){let k=Et("div","float",Oe("hud"));k.textContent=P,k.style.left=H+"px",k.style.top=W+"px",U&&(k.style.color=U),setTimeout(()=>k.remove(),1300)}function v(P){if(P<2)return;let H=Et("div",P===4?"rpop big":"rpop",Oe("hud"));H.textContent=Cn[P].name.toUpperCase()+"!",H.style.setProperty("--rc",TT(P)),Zt(P>=3?"trophy":"bonus"),setTimeout(()=>H.remove(),2500)}function q(){r=0,me()}function me(){let P=String(Math.round(s()*1e3));P!==o.value&&(o.value=P);let H=performance.now();if(H-r<100)return;r=H,bt(),dd(Oe("ad2x"),i.ad2xT>0?`\xD72 ${qi(i.ad2xT)}`:"\xD72"),dd(Oe("adptero"),i.adPteroT>0?qi(i.adPteroT):"Skies"),d(),ee(),_t(Oe("money"),`$${Qt(i.money)}`),_t(Oe("inc"),`+$${Qt(ed(i))}/s`);let W=f_(i),U=em(i);_t(Oe("pop"),`Dinos ${U} / ${W}`),_t(Oe("hint"),ca(i)>ua(i)?"Tours full: visitors turned away":U>=W?"Enclosures full: upgrade one":""),_t(Oe("visn"),`Visitors ${Qt(Math.min(ca(i),ua(i))*60)}/min`);let k=tm(i)-1;_t(Oe("egg"),`${ei[i.eggIdx].name} \xB7 Amber ${Qt(i.essence)}${k>0?` (+${Qt(k*100)}%)`:""}`);let te=id(i),I=sd(i);Oe("newegg").hidden=!te,te&&_t(Oe("newegg"),`NEW SPECIES: ${ei[i.eggIdx+1].name}`),Oe("prest").hidden=I<1,I>=1&&_t(Oe("prest"),`PRESTIGE +${Qt(I)}`),dt()}return{update:me,toast:A,ask:b,refresh:q,modalOpen:_,floatText:C,rarityPop:v,gift:()=>{Ve.hidden=!1}}}var fd=class extends cr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new un;e.deleteAttribute("uv");let t=new ii({side:In}),n=new ii,s=new kr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new je(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new nn(e,n,6),a=new mt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new je(e,ma(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new je(e,ma(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new je(e,ma(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new je(e,ma(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new je(e,ma(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new je(e,ma(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ma(i){return new Bi({color:0,emissive:16777215,emissiveIntensity:i})}var kn=8,cc;function hm(){return cc||(cc=new Ns().load("models/AllDinos.png"),cc.flipY=!1,cc.colorSpace=Ft),cc}function pd(i,e,t,n=kn){let s;i.traverse(c=>{c.isSkinnedMesh&&(s=c)});let r=s.geometry.attributes.position.count,o=new F,a=new Gr(i);a.clipAction(e).play();let l=[];for(let c=0;c<n;c++){a.setTime(e.duration*c/n),i.updateMatrixWorld(!0),s.skeleton.update();let u=new Float32Array(r*3);for(let d=0;d<r;d++)s.getVertexPosition(d,o).applyMatrix4(s.matrixWorld).multiplyScalar(t),o.toArray(u,d*3);let h=new Ut;h.setAttribute("position",new Vt(u,3)),h.setAttribute("uv",s.geometry.attributes.uv),h.setIndex(s.geometry.index),h.computeVertexNormals(),l.push(h)}return a.stopAllAction(),a.uncacheRoot(i),l}async function $_(i,e,t){let n=await new gr().loadAsync(`models/${i}.glb`),s=new Map(n.animations.map(f=>[f.name,f]));n.scene.updateMatrixWorld(!0);let r=new Jt().setFromObject(n.scene).getSize(new F),o=e/(t?r.z:r.x),a=[],l=a,c=a,u=1,h=1,d=1;if(t){let f=g=>pd(n.scene,g,o),p=s.get("Run")??s.get("Walk"),_=s.get("Walk"),m=s.get("Idle");a=l=c=f(p),u=h=d=p.duration,_&&_!==p?(l=f(_),h=_.duration):_||(h=u/.4),m&&(c=f(m),d=m.duration)}return{scene:n.scene,clips:s,k:o,frames:a,dur:u,walk:l,walkDur:h,idle:c,idleDur:d}}var K_=Math.PI/4,md=mi.D,wT=1,Z_=.9,AT=8,uc=8,ga=32,hc=40,dc=41,dm=42,fm=43,j_=44,Q_=45,ey=46,ty=47,Ws=50,RT=[j_,ey,Q_,fm,dm],J_=(i,e,t)=>xt(i*Math.cos(e/t*Math.PI*2),i*Math.sin(e/t*Math.PI*2)),Tt=[...Array.from({length:ga},(i,e)=>J_(An,e,ga)),...Array.from({length:8},(i,e)=>J_(Hs,e,8)),Kl(0,2),xt(-8.6,14.2+md),Gi[4].node,Gi[3].node,Gi[0].node,Gi[2].node,Gi[1].node,$l.walk,xt(1.4,18.8+md),xt(1.4,18.2),oa.walk],CT=[...Array.from({length:ga},(i,e)=>[e,(e+1)%ga]),...Array.from({length:8},(i,e)=>[32+e,32+(e+1)%8]),...[0,1,2,3].map(i=>[32+2*i,8*i]),[hc,dc],[dc,11],[dc,dm],[dc,fm],[dm,9],[fm,12],[20,j_],[24,Q_],[27,ey],[ty,48],[48,49],[49,8],[Ws,Tt.slice(0,ga).reduce((i,e,t)=>Math.hypot(e[0]-Tt[Ws][0],e[1]-Tt[Ws][1])<Math.hypot(Tt[i][0]-Tt[Ws][0],Tt[i][1]-Tt[Ws][1])?t:i,0)]];function ny(i,e,t){let n=bn.map(()=>0),s={bus:!1,train:!1},r=!1,o=-1,a=0,l=1,c=2,u=3,h=Math.random,d=Tt.length,f=new Float32Array(d*d).fill(1e9),p=new Int16Array(d*d).fill(-1);for(let R=0;R<d;R++)f[R*d+R]=0,p[R*d+R]=R;for(let[R,le]of CT)f[R*d+le]=f[le*d+R]=Math.hypot(Tt[R][0]-Tt[le][0],Tt[R][1]-Tt[le][1]),p[R*d+le]=le,p[le*d+R]=R;for(let R=0;R<d;R++)for(let le=0;le<d;le++)for(let pe=0;pe<d;pe++)f[le*d+R]+f[R*d+pe]<f[le*d+pe]&&(f[le*d+pe]=f[le*d+R]+f[R*d+pe],p[le*d+pe]=p[le*d+R]);function _(R){R.m=h()<.35?0:h()<.62?1:2,R.h=.92+h()*.16,R.spd=Z_*(.85+h()*.3)*[1,1,.8][R.m]}let m=Array.from({length:co},()=>({m:0,spd:Z_,h:1,ph:h()*uc,lat:0,wob:(h()-.5)*.5,st:a,tm:0,a:0,b:0,s:0,len:1,ex:0,ez:1,px:0,pz:0,goal:0,exit:!1,leave:!1,visits:0,dwell:0,stood:0,x:0,y:0,z:0,yaw:0,rx:0,ry:0,rz:0,sx:0,sy:0,sz:0,syaw:0,seq:[],after:null,ret:!1,shop:-1,slot:-1,force:!1,vanish:!1}));m.forEach(_);let g=8,y=[[],[],[]],w=[!1,!1,!1];["man","woman","stout"].forEach((R,le)=>new gr().loadAsync(`models/people/${R}.glb`).then(pe=>{let Ie=new Ns().load(`models/people/palette${[2,3,1][le]}.png`);Ie.flipY=!1,Ie.colorSpace=Ft,Ie.magFilter=Ie.minFilter=qt;let ke=$n({map:Ie,roughness:.6,flatShading:!0}),Ue=Ne=>pe.animations.find(ee=>ee.name===Ne);pe.scene.updateMatrixWorld(!0);let Xe=wT*[1,.94,.92][le]/new Jt().setFromObject(pe.scene).getSize(L).y,Ye=pd(pe.scene,Ue("Idle"),Xe,1)[0];Ye.computeBoundingBox();let Je=Ye.boundingBox;y[le]=[...pd(pe.scene,Ue("Walk"),Xe,uc),Ye].map(Ne=>{let ee=new nn(Ne.translate(-(Je.min.x+Je.max.x)/2,-Je.min.y,-(Je.min.z+Je.max.z)/2),ke,co);return ee.frustumCulled=!1,ee.count=0,i.add(ee),ee})}).catch(pe=>{console.warn("people GLB",R,pe),w[le]=!0}));let M=0,E=0,T=!1,x=new mt,b=y.map(()=>new Uint16Array(uc+1)),L=new F,A=(R,le)=>xt(R,le),N=(R,[le,pe],Ie,ke,Ue,Xe)=>({node:R,lx:le,lz:pe,w:Ie,rad:ke,d0:Ue,d1:Xe}),O=Gi.map((R,le)=>({...N(RT[le],[0,0],3,0,3,le<3?8:7),shop:le})),X=N(dc,A(Xi[0],Xi[1]),1,1.3,3,6),D=[X,...O,...Array.from({length:8},(R,le)=>N(32+le,[0,0],.35,.4,4,10))],Y=D,j=R=>R.shop===void 0?R.w:n[R.shop]?R.w*(.4+.3*n[R.shop]):0,K=Gi.map(R=>R.queue.map(()=>!1)),ce={in:Gi.map(()=>0),out:Gi.map(()=>0)};function z(R){let le=[];e.forEach(([pe,Ie],ke)=>{if(!(R>>ke&1))return;let Ue=t[ke],Xe=[];for(let Le=0;Le<AT;Le++)L.set(-1.3+Le%4*.87,Yt.H+.07,Le<4?.3:-.35).applyMatrix4(Ue.matrix),Xe.push({x:L.x,y:L.y,z:L.z,yaw:Ue.rotation.y+Math.PI});let Ye=0,Je=1e9;for(let Le=0;Le<ga;Le++){let Mt=Math.hypot(Tt[Le][0]-Ue.position.x,Tt[Le][1]-Ue.position.z);Mt<Je&&(Je=Mt,Ye=Le)}let Ne=Math.atan2(Tt[Ye][1],Tt[Ye][0]);[-.2,-.1,.1,.2].forEach(Le=>{let Mt=Math.cos(Ne+Le)*(An-.2),Ct=Math.sin(Ne+Le)*(An-.2);Xe.push({x:Mt,y:0,z:Ct,yaw:Math.atan2(pe-Mt,Ie-Ct)})});let ee=[[Yt.LEN/2+1.75,0,Yt.DEP/2+.6],[Yt.LEN/2+1.75,0,0],[Yt.LEN/2-.2,Yt.H+.07,0]].map(([Le,Mt,Ct])=>(L.set(Le,Mt,Ct).applyMatrix4(Ue.matrix),[L.x,L.z,Mt]));le.push({node:Ye,lx:pe,lz:Ie,w:5,rad:0,d0:6,d1:12,deck:Xe,stairs:ee})}),Y=[...D,...le]}let J=()=>{let R=[s.bus&&ty,s.train&&Ws].filter(le=>le!==!1);return R.length&&h()<.6?R[h()*R.length|0]:hc};function re(R,le){let pe=Tt[le][0]-Tt[R.a][0],Ie=Tt[le][1]-Tt[R.a][1],ke=Math.hypot(pe,Ie)||1;R.b=le,R.s=0,R.len=ke,R.ex=pe/ke,R.ez=Ie/ke,R.px=-R.ez*R.lat,R.pz=R.ex*R.lat}function _e(R){if((s.bus||s.train)&&h()<.15&&(R.visits=0),R.exit=R.leave||R.visits<=0,R.seq=[],R.after=null,R.exit){R.goal=J();return}let le=X,pe=0;for(let Xe of Y)pe+=j(Xe);if(R.force)R.force=!1;else for(let Xe=0;Xe<4;Xe++){let Ye=h()*pe;le=Y[Y.length-1];for(let Je=0;Je<Y.length;Je++)if(Ye-=j(Y[Je]),Ye<=0){le=Y[Je];break}if(le.node!==R.a)break}let Ie=le.shop===void 0||le.shop<3?0:K[le.shop].indexOf(!1);if(Ie<0&&(le=X),R.visits--,R.goal=le.node,R.dwell=le.d0+h()*(le.d1-le.d0),le.shop!==void 0){let Xe=le.shop,Ye=Gi[Xe];if(R.shop=Xe,Xe<3){let Je=Ye.inside[h()*Ye.inside.length|0];R.seq=Ye.walk.map(Ne=>[...Ne]),R.sx=Je[0],R.sz=Je[1],R.sy=0,R.syaw=K_,R.after=Ye.walk.map(Ne=>[...Ne]).reverse()}else K[Xe][Ie]=!0,R.slot=Ie,R.sx=Ye.queue[Ie][0],R.sz=Ye.queue[Ie][1],R.sy=0,R.syaw=K_+Math.PI;return}if(le.deck){let Xe=le.deck[h()*le.deck.length|0];R.sx=Xe.x,R.sy=Xe.y,R.sz=Xe.z,R.syaw=Xe.yaw,Xe.y>0&&le.stairs&&(R.seq=[...le.stairs],R.after=[...le.stairs].reverse());return}let ke=h()*6.2832,Ue=le.rad*Math.sqrt(h());R.sx=Tt[le.node][0]+Math.cos(ke)*Ue,R.sy=0,R.sz=Tt[le.node][1]+Math.sin(ke)*Ue,R.syaw=Math.atan2(le.lx-R.sx,le.lz-R.sz)}let Ee=(R,le)=>R===hc?[[...Kl(le,-.5),0],[...Kl(le,.4),0],[...Kl(le,1.9),0]]:[[...xt(9.5,22.5+md+1.6),2.3],[...xt(9.5,22.5+md+.6),2.2],[...xt(9.5,jr-.1),Vi],[...xt(9.5,Jr),Vi],[...oa.walk,0]];function ie(R){if(!R.exit){R.st=c;return}if(R.a===hc||R.a===Ws){R.seq=Ee(R.a,(h()-.5)*.8).reverse(),R.vanish=!0,R.st=c;return}R.st=a,R.tm=3+h()*2}function xe(R){if(R.shop>=0&&(ce.out[R.shop]++,R.slot>=0&&(K[R.shop][R.slot]=!1,R.slot=-1,R.force=!0),R.shop=-1),R.stood=0,_e(R),R.a===R.goal){ie(R);return}re(R,p[R.a*d+R.goal]),R.st=l,R.rx=R.x-Tt[R.a][0]-R.px,R.ry=R.y,R.rz=R.z-Tt[R.a][1]-R.pz}function Se(R){if(R.leave=!1,R.force=!1,R.vanish=!1,R.lat=h()-.5,R.a=J(),R.x=Tt[R.a][0],R.y=0,R.z=Tt[R.a][1],R.visits=3+(h()*4|0),_(R),R.a===hc||R.a===Ws){let le=Ee(R.a,(h()-.5)*.8),[pe,Ie,ke]=le[0];R.x=pe,R.z=Ie,R.y=ke,R.seq=le.slice(1),R.ret=!0,R.sx=Tt[R.a][0],R.sz=Tt[R.a][1],R.st=c,R.yaw=Math.atan2(R.seq[0][0]-pe,R.seq[0][1]-Ie);return}xe(R),R.yaw=Math.atan2(R.ex,R.ez)}function ge(R){R.leave=!1,R.force=!1,R.lat=h()-.5,R.a=h()*(r?d:Ws)|0,R.visits=1+(h()*5|0),R.x=Tt[R.a][0],R.y=0,R.z=Tt[R.a][1],xe(R),R.st===l?(R.s=h()*R.len*.9,R.yaw=Math.atan2(R.ex,R.ez)):h()<.6&&(R.a=R.goal,R.x=R.sx,R.y=R.sy,R.z=R.sz,R.st=u,R.tm=h()*R.dwell,R.yaw=R.syaw)}function de(R,le,pe,Ie,ke,Ue){if(n=Ie,s=ke,r=Ue,pe!==o&&(o=pe,z(pe)),M+=R,y.some((Ne,ee)=>!Ne.length&&!w[ee])||y.every(Ne=>!Ne.length))return;let Xe=y.findIndex(Ne=>Ne.length);if(!T&&le)for(T=!0;E<le;E++)ge(m[E]);let Ye=le-E>6;for(;E<le;){let Ne=m[E++];Ye?ge(Ne):(Ne.st=a,Ne.tm=h()*3)}b.forEach(Ne=>Ne.fill(0));let Je=Math.min(1,R*8);for(let Ne=0;Ne<E;Ne++){let ee=m[Ne],Le=y[ee.m].length?ee.m:Xe,Mt=b[Le];ee.leave=Ne>=le;let Ct=ee.yaw;if(ee.st===a){!ee.leave&&(ee.tm-=R)<=0&&Se(ee);continue}if(ee.st===u)ee.stood+=R,ee.tm-=ee.leave?R*4:R,Ct=ee.syaw+ee.wob,ee.tm<=0&&(ee.after?(ee.seq=ee.after,ee.after=null,ee.sx=Tt[ee.a][0],ee.sz=Tt[ee.a][1],ee.sy=0,ee.ret=!0,ee.st=c):xe(ee));else if(ee.st===c&&ee.vanish&&!ee.seq.length)ee.vanish=!1,ee.st=a,ee.tm=3+h()*2,ee.y=0;else if(ee.st===c){let bt=ee.seq[0],rt=bt?bt[0]:ee.sx,dt=bt?bt[1]:ee.sz,ve=bt?bt[2]??0:ee.ret?0:ee.sy,St=rt-ee.x,Fe=dt-ee.z,Ve=Math.hypot(St,Fe),C=ee.spd*R;if(Ve<=C)ee.x=rt,ee.z=dt,ee.y=ve,bt?ee.seq.shift():ee.ret?(ee.ret=!1,xe(ee)):(ee.st=u,ee.tm=ee.dwell,ee.stood=0,ee.shop>=0&&ce.in[ee.shop]++);else{let v=C/Ve;ee.x+=St*v,ee.z+=Fe*v,ee.y+=(ve-ee.y)*v,Ct=Math.atan2(St,Fe)}}if(ee.st===l){if(ee.s+=ee.spd*R,ee.s>=ee.len){let bt=ee.px,rt=ee.pz;ee.a=ee.b,ee.leave&&!ee.exit&&(ee.exit=!0,ee.goal=J()),ee.a===ee.goal?(ee.x=Tt[ee.a][0]+bt+ee.rx,ee.z=Tt[ee.a][1]+rt+ee.rz,ee.y=ee.ry,ie(ee)):(re(ee,p[ee.a*d+ee.goal]),ee.rx+=bt-ee.px,ee.rz+=rt-ee.pz)}if(ee.st===l){let bt=Math.hypot(ee.rx,ee.ry,ee.rz),rt=bt>1e-4?Math.max(0,bt-.6*ee.spd*R)/bt:0;ee.rx*=rt,ee.ry*=rt,ee.rz*=rt,ee.x=Tt[ee.a][0]+ee.ex*ee.s+ee.px+ee.rx,ee.z=Tt[ee.a][1]+ee.ez*ee.s+ee.pz+ee.rz,ee.y=ee.ry,Ct=Math.atan2(ee.ex,ee.ez)}}if(ee.st===a)continue;let Xt=ee.st===u?uc:(M*g+ee.ph|0)%uc,G=Ct-ee.yaw;G-=6.2832*Math.round(G/6.2832),ee.yaw+=G*Je,x.position.set(ee.x,ee.y,ee.z),x.rotation.y=ee.yaw,x.scale.setScalar(ee.h),x.updateMatrix(),y[Le][Xt].setMatrixAt(Mt[Xt]++,x.matrix)}for(;E>le&&m[E-1].st===a;)E--;y.forEach((Ne,ee)=>Ne.forEach((Le,Mt)=>{Le.count=b[ee][Mt],Le.instanceMatrix.needsUpdate=!0}))}return{update:de,visitors:()=>y.flat().reduce((R,le)=>R+le.count,0),agents:()=>m.slice(0,E),stats:ce}}var PT=500,IT=location.search.includes("hudcap");function iy(i){if(!IT)return()=>{};let e=Array.from(document.querySelectorAll("style"),m=>m.textContent).join(`
`).replace(/&/g,"&amp;").replace(/</g,"&lt;"),t=document.createElement("canvas"),n=t.getContext("2d"),s=new ji(t);s.colorSpace=Ft;let r=new wi(new jt({map:s,transparent:!0,depthTest:!1,depthWrite:!1})),o=!1,a=0,l=!1,c=!1,u="",h="",d=document.getElementById("top"),f=document.getElementById("bottom"),p=()=>[...d.querySelectorAll("#topL > *, #topR > *"),f].map(m=>m?`${m.offsetWidth}x${m.offsetHeight}`:"").join();function _(){let m=p(),{w:g,h:y}=oi(),w=1,M=document.documentElement,E=document.getElementById("hud").cloneNode(!0);E.querySelectorAll("input").forEach(L=>L.setAttribute("value",document.getElementById(L.id)?.value??L.value)),E.querySelectorAll("#finger, .float").forEach(L=>L.remove());let T=`--panel-w:${getComputedStyle(M).getPropertyValue("--panel-w")};${M.style.cssText}`,x=`<svg xmlns="http://www.w3.org/2000/svg" width="${Math.round(g*w)}" height="${Math.round(y*w)}" viewBox="0 0 ${g} ${y}"><foreignObject width="${g}" height="${y}"><div xmlns="http://www.w3.org/1999/xhtml" class="${M.className}" style="${T.replace(/"/g,"'")}"><style>${e}</style>${new XMLSerializer().serializeToString(E)}</div></foreignObject></svg>`;if(x===u){h=m;return}u=x;let b=new Image;o=!0,b.onload=()=>{o=!1,(t.width!==b.width||t.height!==b.height)&&(t.width=b.width,t.height=b.height,s.dispose()),n.clearRect(0,0,t.width,t.height),n.drawImage(b,0,0),s.needsUpdate=!0,l=!0,h=m},b.onerror=()=>{o=!1},b.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(x)}return function(){if(c)return;let g=performance.now(),y=l&&p()!==h;if(!o&&(y||g-a>PT)&&(a=g,_()),!l||y)return;let w=i.autoClear;try{i.autoClear=!1,i.setRenderTarget(null),r.render(i)}catch{c=!0}finally{i.autoClear=w}}}var Zn=24,to=10,fc=.75,xa=[1,1.08,1.15,1.25,1.35],cy=new De(1,1,1),gd=new De(0,0,0),sy=Cn.map((i,e)=>cy.clone().lerp(new De(i.color),[0,.3,.5,.55,.6][e])),ry=Cn.map((i,e)=>e>0?new De(i.color):gd),no=[[mi.HAB,0],[0,mi.HAB],[-mi.HAB,0],[0,-mi.HAB]],oy=6285567,LT=30,ay=i=>i===7?.35:.05,Xs=i=>$n({color:i,flatShading:!0}),qs=(i,e)=>i+(e-i)*Math.random(),ly=1.5;function uy(i){let e=i_(),t=new Bl({antialias:e==="off"});t.setPixelRatio(Math.min(devicePixelRatio,ly)),t.shadowMap.enabled=!0,t.shadowMap.type=Vr,t.shadowMap.autoUpdate=!1,document.getElementById("game").appendChild(t.domElement);let n=new cr;n.background=new De(Wn.haze),n.fog=new Ka(Wn.haze,68,150);let s=new yi(-1,1,1,-1,.1,200),r=Si.degToRad(32),o=Math.PI/4;s.position.set(Math.cos(r)*Math.sin(o),Math.sin(r),Math.cos(r)*Math.cos(o)).multiplyScalar(60),s.lookAt(0,0,0),n.add(new Vo(Wn.sky,Wn.bounce,1.4)),n.environment=new ea(t).fromScene(new fd,.04).texture,n.environmentIntensity=.3;let l=new fr(Wn.sun,1.1);l.position.set(-30,22,-8),l.castShadow=!0,l.shadow.mapSize.set(e==="high"?2048:1024,e==="high"?2048:1024),l.shadow.radius=4,l.shadow.intensity=.6,l.shadow.bias=-5e-4,l.shadow.normalBias=.04,n.add(l,l.target);function c(){let{w:V,h:ae}=oi(),ue=LT/2/Math.min(V,ae),Re=V>ae,Qe=Re?document.getElementById("bottom").getBoundingClientRect().width:0,ft=Re?-ae*ue*.125:ae*ue*-.04,at=Re?(V/2-.57*(V-Qe))*2*ue:0;s.left=-V*ue+at,s.right=V*ue+at,s.top=ae*ue-ft,s.bottom=-ae*ue-ft,s.updateProjectionMatrix(),t.setPixelRatio(Math.min(devicePixelRatio*oi().s,ly)),t.setSize(V,ae),p.resize(V,ae),u()}function u(){let V=l.shadow.camera,ae=s.getWorldDirection(new F),ue=new F;s.updateMatrixWorld(),V.position.copy(l.position),V.lookAt(l.target.position),V.updateMatrixWorld();let Re=new Jt;for(let[ft,at]of[[-1,-1],[1,-1],[-1,1],[1,1]])ue.set(ft,at,-1).unproject(s),ue.addScaledVector(ae,-ue.y/ae.y).applyMatrix4(V.matrixWorldInverse),Re.expandByPoint(ue);let Qe=4;V.left=Re.min.x-Qe,V.right=Re.max.x+Qe,V.bottom=Re.min.y-Qe,V.top=Re.max.y+Qe,V.near=-Re.max.z-30,V.far=-Re.min.z+10,V.updateProjectionMatrix(),t.shadowMap.needsUpdate=!0}let h=0,d=0;function f(){if(++d%10)return;let V=0;n.traverseVisible(ae=>{ae.castShadow&&ae.isMesh&&(V=(V*31+ae.id+(ae.count|0))%1e9)}),V!==h&&(h=V,t.shadowMap.needsUpdate=!0)}let p=r_(t,n,s,e),_=iy(t);p.set(e),addEventListener("resize",c);let m=()=>la()?.9:.8;s.zoom=m(),c();let g=2.5,y=14,w=s.position.clone(),M=new F,E=new F(Math.SQRT1_2,0,-Math.SQRT1_2),T=new F(-Math.SQRT1_2,0,-Math.SQRT1_2);function x(){M.x=Si.clamp(M.x,-y,y),M.z=Si.clamp(M.z,-y,y),s.position.copy(w).add(M),s.lookAt(M),s.updateProjectionMatrix(),u()}let b=V=>{s.zoom=Si.clamp(s.zoom*V,m(),g),x()},L=V=>{let ae=m();return V!==void 0?(s.zoom=ae*(g/ae)**Si.clamp(V,0,1),x()):s.zoom<ae&&b(1),Math.log(s.zoom/ae)/Math.log(g/ae)},A=new Map,N=0,O=t.domElement;O.addEventListener("wheel",V=>{V.preventDefault(),b(Math.exp(-V.deltaY*.0015))},{passive:!1}),O.addEventListener("pointerdown",V=>{V.button===0&&(O.setPointerCapture(V.pointerId),A.set(V.pointerId,{x:V.clientX,y:V.clientY}),N=0)}),O.addEventListener("pointermove",V=>{let ae=A.get(V.pointerId);if(!ae)return;let ue=V.clientX-ae.x,Re=V.clientY-ae.y;if(ae.x=V.clientX,ae.y=V.clientY,A.size===2){let[ft,at]=[...A.values()],Nt=Math.hypot(ft.x-at.x,ft.y-at.y);N&&b(Nt/N),N=Nt;return}let Qe=(s.right-s.left)/s.zoom/(oi().w*oi().s);M.addScaledVector(E,-ue*Qe).addScaledVector(T,Re*Qe/Math.sin(r)),x()});for(let V of["pointerup","pointercancel","lostpointercapture"])O.addEventListener(V,ae=>{A.delete(ae.pointerId),N=0});addEventListener("blur",()=>{A.clear(),N=0});let X=new Fn(300,300,60,60).rotateX(-Math.PI/2),D=new Float32Array(X.attributes.position.count*3),Y=new De(Wn.groundLo),j=new De(Wn.groundHi),K=new De;for(let V=0;V<D.length/3;V++)K.lerpColors(Y,j,Math.random()**2).toArray(D,V*3);X.setAttribute("color",new Vt(D,3));let ce=new je(X,new Bi({vertexColors:!0}));ce.receiveShadow=!0,n.add(ce);let z=V=>V.traverse(ae=>{ae.castShadow=ae.receiveShadow=!0}),J=Lx(n,no,zh,An,Hs,qp,Kx),re=Jx(n,no),_e=zx(n),Ee=ny(n,no,re.frames),ie={bus:!1,train:!1},xe=(V,ae,ue=0)=>_e.blocked(V,ae,ue)||Yx(V,ae,ue),Se=new je(new Fi(3.3,3.6,.5,16),Xs(ot.lgray));Se.position.y=.25,z(Se),n.add(Se);let ge=new je(new cl(3.5,.1,4,40).rotateX(Math.PI/2),new jt({color:oy}));ge.position.y=.32,n.add(ge),n.add(new je(new Qi(2.8,16,8,0,Math.PI*2,0,Math.PI/2).scale(1,1.45,1),new Bi({color:ot.blue,transparent:!0,opacity:.35,depthWrite:!1})));let de=[[0,0],[1.3,.7],[-1.2,.8],[.5,-1.4]].slice(0,br).map(([V,ae],ue)=>{let Re=new je(new Qi(.58,8,6).scale(1,1.3,1),Xs(ot.white));return Re.position.set(V,.95,ae),Re.visible=!1,n.add(Re),{e:Re,y:.95,ph:ue*1.3}}),R=new jt({color:ot.yellow}),le=new Fi(.4,.4,.1,10).rotateX(Math.PI/2),pe=Array.from({length:6},()=>{let V=new je(le,R);return V.visible=!1,n.add(V),{m:V,t:1,x:0}});function Ie(){let V=pe.find(ae=>ae.t>=1);V&&(V.t=0,V.x=qs(-1,1),V.m.visible=!0)}let ke=new un(1,1,1),Ue=new Ut().setFromPoints([[-2.5,-2.5],[2.5,-2.5],[2.5,2.5],[-2.5,2.5]].map(([V,ae])=>new F(V,.03,ae))),Xe=new Fi(1,1.08,1,9),Ye=new Qi(1,14,7,0,Math.PI*2,0,Math.PI/2),Je=new ol(1,1,7),Ne=new Fi(.28,.28,.08,7),ee=new Bi({color:ot.blue,transparent:!0,opacity:.22,depthWrite:!1}),Le=no.map(([V,ae])=>{let ue=new Wt;ue.position.set(V,0,ae);let Re=new je(Xe,Xs(Wn.pad[0])),Qe=new je(Ye,ee),ft=new Wt,at=new je(Je,Xs(ot.brown)),Nt=new je(Ne,new jt({color:ot.orange}));at.scale.set(1.3,1.8,1.3),at.position.y=.9,Nt.position.y=1.29,ft.add(at,Nt),ft.position.set(.6,0,-.6);let vt=new Br(Ue,new hl({color:ot.white,dashSize:.5,gapSize:.35}));return vt.computeLineDistances(),ue.add(Re,ft),z(ue),ue.add(Qe),Re.castShadow=!1,n.add(ue,vt),vt.position.set(V,0,ae),{g:ue,pad:Re,dome:Qe,volc:ft,outline:vt,level:-1,pop:0}});function Mt(V,ae){let ue=Le[V];if(ue.level=ae,ue.pop=ae>0?.35:0,ue.g.visible=ae>0,ue.outline.visible=ae===0,ae===0)return;let Re=1.9+.2*ae,Qe=ay(ae);ue.pad.scale.set(Re,Qe,Re),ue.pad.position.y=Qe/2,ue.pad.material.color.setHex(ae===7?ot.lgray:Wn.pad[Math.min(ae,4)-1]),ue.dome.visible=ae===5||ae===8,ue.dome.scale.set(di-.3,2.6,di-.3),ue.volc.visible=ae===6}let Ct=1,Xt=1.7,G=Math.PI,bt=V=>(V>5?["Front","Passenger","End"]:["Front","End"]).map(ae=>"kenney/space/monorail_train"+ae),rt=100,dt=5,ve=1.5,St=2.6,Fe=4,Ve=dt*dt/(2*ve),C=dt/ve,v=V=>V<=C?.5*ve*V*V:Ve+dt*(V-C),q=V=>V<=Ve?Math.sqrt(2*V/ve):C+(V-Ve)/dt,me=1.5,P=.6,H=60,W=[yr,Ti].map(V=>{let ae=q(Math.min(V.stop,rt)),ue=q(Math.min(V.L-V.stop,rt));return{ta:ae,TB:ue,C:ae+St+ue+Fe}}),U=Array.from({length:Er},()=>{let V=new Wt,ae=new je(ke,Xs(ot.white));return ae.position.y=.55,V.visible=!1,V.add(ae),n.add(V),{g:V,body:ae,level:-1,gen:0,k:1,cars:[ae],gap:[0],wl:[[.9,1.7]],wait:!1}});function k(V,ae){let ue=U[V];ue.level<1&&(ue.wait=en>1),ue.level=ae,ue.g.visible=ae>0;let Re=++ue.gen;if(ae===0)return;ue.cars.forEach(at=>ue.g.remove(at)),ue.cars=[ue.body],ue.wl=[[.9,1.7]],ue.g.add(ue.body),ue.body.scale.set(.9,.7+.05*ae,1.7),ue.body.material.color.setHex(Ia[ae-1]);let Qe=ae>4,ft=at=>{if(ue.gen!==Re)return;ue.g.remove(ue.body),ue.k=Qe?Ct+.15*(ae-5):.8,ue.cars=at.map(kt=>{let Vn=Lh(kt.clone(),Ia[ae-1]);return Vn.scale.setScalar(Qe?ue.k*Xt:ue.k),ue.g.add(Vn),Vn});let Nt=at.map(kt=>new Jt().setFromObject(kt).getSize(new F).multiplyScalar(ue.cars[0].scale.z)),vt=Nt.map(kt=>kt.z);ue.wl=Nt.map(kt=>[kt.x,kt.z]),ue.gap=vt.map(()=>0);for(let kt=1;kt<vt.length;kt++)ue.gap[kt]=ue.gap[kt-1]+(vt[kt-1]+vt[kt])/2+.05*ue.k};(Qe?Promise.all(bt(ae).map(at=>Wl(at,!0))):Wl("kenney/"+Sd[ae-1]).then(at=>[at])).then(ft,at=>console.warn("tour GLB",at))}let te=Array.from({length:8},()=>null);Promise.all([...Sd.slice(0,4),...bt(5)].map(V=>Bp(V.startsWith("kenney/")?V:"kenney/"+V))).then(V=>{let ae=new Bl({alpha:!0,antialias:!0}),ue=new cr,Re=new Jt,Qe=new F;ae.setSize(192,128,!1);let ft=new fr(Wn.sun,2.8);ft.position.set(-2,5,4),ue.add(new Vo(16777215,Wn.bounce,2.4),ft);let at=new yi(-1.8,1.8,1.2,-1.2,.1,50);at.position.set(5,3.5,5),at.lookAt(0,0,0);for(let Nt=0;Nt<8;Nt++){let vt=new Wt;if(Nt<4)vt.add(Lh(V[Nt].clone(),Ia[Nt]));else for(let[kt,Vn]of V.slice(4).entries())Vn.position.z=(kt-.5)*1.05,vt.add(Lh(Vn.clone(),Ia[Nt]));vt.rotation.y=Nt<4?-Math.PI/2:Math.PI/2,Re.setFromObject(vt),vt.scale.setScalar(4.5/Re.getSize(Qe).length()),Re.setFromObject(vt),vt.position.sub(Re.getCenter(Qe)),ue.add(vt),ae.render(ue,at),te[Nt]=ae.domElement.toDataURL(),ue.remove(vt)}ae.dispose(),ae.forceContextLoss()},V=>console.warn("icon GLB",V));let I=$n({map:hm(),roughness:.55}),ne=V=>(V.setColorAt(0,cy),V),Z=Array.from({length:kn},()=>ne(Object.assign(new nn(new Ut,I,Zn),{frustumCulled:!1,visible:!1})));Z.forEach(V=>{V.count=0,n.add(V)});let fe=new Float32Array(Zn),he=new Float32Array(Zn),Me=new Float32Array(Zn),Ge=new Float32Array(Zn),tt=new Float32Array(Zn),ye=new Float32Array(Zn),qe=new Float32Array(Zn),et=new Float32Array(Zn),Te=new Uint8Array(Zn),wt=new Float32Array(Zn),Kt=new Float32Array(Zn),ai=new Uint16Array(kn),Ys=0,Ri=-1,pc=8,en=0,ya=new Float32Array(4*to),pn=new mt;pn.scale.setScalar(fc);let io=Zn+4*to+3*Er+co,so=new jt({color:16777215,transparent:!0,opacity:.5,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-4});so.onBeforeCompile=V=>{V.vertexShader=`varying vec2 vB;
`+V.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vB = position.xz;`),V.fragmentShader=`varying vec2 vB;
`+V.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= 1. - smoothstep(.15, .5, length(vB));`)},so.customProgramCacheKey=()=>"blob";let Jn=Object.assign(new nn(new Fn(1,1).rotateX(-Math.PI/2),so,io),{frustumCulled:!1,renderOrder:1});Jn.setColorAt(0,gd),Jn.count=0,n.add(Jn);let Gn=new mt,Mr=(V,ae,ue,Re,Qe,ft,at=gd)=>{Jn.count>=io||(Gn.position.set(V,ae+.02,ue),Gn.rotation.y=Re,Gn.scale.set(Qe,1,ft),Gn.updateMatrix(),Jn.setColorAt(Jn.count,at),Jn.setMatrixAt(Jn.count++,Gn.matrix))},mc=new sn({transparent:!0,depthWrite:!1,vertexShader:`varying vec2 vU; varying vec3 vC;
      void main() { vU = position.xy; vC = instanceColor; float k = length(instanceMatrix[0].xyz);
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(0., 0., 0., 1.);
        mv.xy += position.xy * k; mv.z -= k * 0.5; gl_Position = projectionMatrix * mv; }`,fragmentShader:`varying vec2 vU; varying vec3 vC;
      void main() { float d = length(vU) * 2., m = max(vC.r, max(vC.g, vC.b)); // instance colour brightness = opacity (pulse)
        gl_FragColor = vec4(vC / m, m * smoothstep(1., 0.45, d)); }`}),Sn=Object.assign(new nn(new Fn(1,1),mc,Zn+4*to),{frustumCulled:!1,renderOrder:2});Sn.setColorAt(0,gd),Sn.count=0,n.add(Sn);let $s=new De,va=(V,ae,ue,Re,Qe,ft)=>{if(Qe<3||Sn.count>=Sn.instanceMatrix.count)return;let at=.5+.5*Math.sin(en*(Qe===4?4:3)+ft);Gn.position.set(V,ae+Re*.3,ue),Gn.rotation.set(0,0,0),Gn.scale.setScalar(Re*(.95+.12*at)),Gn.updateMatrix(),$s.setHex(Cn[Qe].color),Sn.setColorAt(Sn.count,$s.multiplyScalar(((Qe===4?.75:.6)+.25*at)/Math.max($s.r,$s.g,$s.b))),Sn.setMatrixAt(Sn.count++,Gn.matrix)},Ma=(V,ae)=>V<3?sy[V]:$s.copy(sy[V]).multiplyScalar(1.1+.25*(.5+.5*Math.sin(en*4+ae))),Sa=new Map,ba=new Set,Ea=(V,ae,ue)=>{!V||ba.has(V)||(ba.add(V),$_(V,ae,ue).then(Re=>Sa.set(V,Re),Re=>{console.warn("GLB",V,Re),setTimeout(()=>ba.delete(V),5e3)}))},gc=(V,ae)=>V.traverse(ue=>{ue.isSkinnedMesh&&ae(ue)}),S=I.clone(),B=Array.from({length:2*kn},()=>ne(Object.assign(new nn(new Ut,S,4*to),{frustumCulled:!1,visible:!1})));B.forEach(V=>{V.count=0,n.add(V)});let se=new Uint16Array(2*kn),$=new mt,Q=[],we=[8,8];function Be(V,ae){Ri=V,pc=kn/ae.dur*1.5,Z.forEach((ue,Re)=>{ue.geometry=ae.frames[Re],ue.visible=!0}),I.color.setHex(Ym[V]),I.emissive.setHex($m[V]),S.color.copy(I.color),S.emissive.copy(I.emissive),we=[kn/ae.walkDur,kn/ae.idleDur],B.forEach((ue,Re)=>{ue.geometry=(Re<kn?ae.walk:ae.idle)[Re%kn],ue.visible=!0}),Q=[];for(let ue=0;ue<4;ue++)for(let Re=0;Re<to;Re++){let Qe=Re%3===0?0:(Re%2?1:-1)*qs(.5,.8);Q.push({hab:ue,j:Re,th:qs(0,6.28),w:Qe,ph:qs(0,kn)})}}function Ae(V,ae,ue,Re){let[Qe,ft]=no[V],at=Math.atan2(ft,Qe),Nt=Re==="drone",vt=Ys<Zn?Ys++:-1,kt=Qe+qs(-2,2),Vn=ft+qs(-2,2),Ks=Math.cos(at)*3.5,Ta=Math.sin(at)*3.5,_c=Math.max(1.1,Math.hypot(kt-Ks,Vn-Ta)/4),wa=Nt?.3:0;ya[V*to+ae]=en+wa+_c,!(vt<0)&&(fe[vt]=Ks,he[vt]=Ta,Ge[vt]=0,tt[vt]=wa,Me[vt]=kt,ye[vt]=Vn,Te[vt]=ue,qe[vt]=Math.atan2(kt-Ks,Vn-Ta),et[vt]=0,wt[vt]=wa+_c,Kt[vt]=qs(0,kn))}let Ce=8,We=new Qi(2.2,6,4),it=new jt({visible:!1}),yt=new Qi(.35,8,6),ze=[Xs(ot.brown),Xs(ot.yellow)],ct=$n({map:hm(),roughness:.55}),tn=new F(Math.SQRT1_2,0,-Math.SQRT1_2),zt=new F(Math.SQRT1_2,0,Math.SQRT1_2),ut=[],mn=new _l,He=new Ke,rn=new F;function Pt(V){let ae=new Wt;ae.add(new je(We,it)),ae.scale.setScalar(V?1.6:1.1),ae.position.y=-100,n.add(ae),ut.push({g:ae,elite:V,t:0,dir:Math.random()<.5?1:-1,off:qs(-6,4),lo:s.left-3,hi:s.right+3-(la()?0:document.getElementById("bottom").getBoundingClientRect().width/oi().w*(s.right-s.left)),p0:M.clone(),z0:s.zoom})}function fs(V,ae){let ue=Ah(ae.scene),Re=new Wt;gc(ue,ft=>{ft.material=ct,ft.frustumCulled=!1,ft.raycast=()=>{}});let Qe=new je(yt,ze[+V.elite]);Qe.position.set(0,-.7,.4),Qe.raycast=()=>{},ue.scale.setScalar(ae.k),Re.add(ue,Qe),Re.rotation.y=Math.atan2(tn.x*V.dir,tn.z*V.dir),V.g.add(Re),V.mixer=new Gr(ue),V.mixer.clipAction(ae.clips.get("Fly")).play(),V.mixer.update(qs(0,1))}t.domElement.addEventListener("pointerdown",V=>{if(!ut.length)return;let ae=Kh(V.clientX,V.clientY),ue=oi();mn.setFromCamera(He.set(ae.x/ue.w*2-1,-(ae.y/ue.h)*2+1),s);let Re=mn.intersectObjects(ut.map(ft=>ft.g),!0)[0],Qe=Re?ut.findIndex(ft=>ft.g.children.includes(Re.object)):-1;Qe<0||(n.remove(ut[Qe].g),Pi(ut[Qe].g.position,ut[Qe].elite),ut.splice(Qe,1))});let hn=4,ro=4,Ci=.5,ps=new Fi(1.4,1.4,.75,12,1,!0,-1,2).rotateX(-Math.PI/2).translate(0,.5,0),At=new Qi(.32,10,8),gn=new Fi(.015,.015,1,3).translate(0,.5,0),li=$n({color:ot.orange,flatShading:!0,side:Tn}),Ht=[],ln=!1;function Pi(V,ae){let ue=new Wt,Re=new Wt,Qe=new je(At,Xs(Pa[ae||ln?2:1]));Qe.scale.set(1,1.3,1),Qe.position.y=.42,ue.add(Qe),Re.add(new je(ps,li));for(let[ft,at]of[[-1.15,.3],[-1.15,-.3],[-.55,0],[.55,0],[1.15,.3],[1.15,-.3]]){let Nt=new F(ft,.5+Math.sqrt(1.96-ft*ft),at),vt=new F(0,.7,0),kt=new je(gn,Xs(ot.white));kt.position.copy(vt),kt.scale.y=Nt.distanceTo(vt),kt.quaternion.setFromUnitVectors(new F(0,1,0),Nt.sub(vt).normalize()),Re.add(kt)}ue.add(Re),ue.scale.setScalar(ae?2.2:1.8),ue.position.copy(V),n.add(ue),Ht.push({g:ue,can:Re,egg:Qe,elite:ae,s0:V.clone(),dur:Math.min(5,Math.max(1.8,Math.hypot(V.x,V.z)/ro)),t:0,landed:-1})}let xc=()=>ut.map(V=>{rn.copy(V.g.position).project(s);let ae=oi();return{x:(rn.x+1)/2*ae.w,y:(1-rn.y)/2*ae.h,elite:V.elite}});function by(V,ae,ue=Date.now()){let Re=Math.min(Math.max(ae,0),.1);en+=Re,Ea(Ac[V.eggIdx],Rc[V.eggIdx],!0),Ea(Ac[V.eggIdx+1],Rc[V.eggIdx+1],!0),Ea("ptera",Km,!1);let Qe=Sa.get(Ac[V.eggIdx]),ft=Sa.get("ptera");ct.emissive.setHex(V.adPteroT>0?1624272:0),ct.emissiveIntensity=.75+.25*Math.sin(en*5),Qe&&Ri!==V.eggIdx&&Be(V.eggIdx,Qe);for(let oe=ut.length-1;oe>=0;oe--){let be=ut[oe];be.t+=Re/Ce;let Rt=be.lo+(be.hi-be.lo)*(be.dir>0?be.t:1-be.t);if(be.g.position.copy(tn).multiplyScalar(Rt/be.z0).addScaledVector(zt,be.off).add(be.p0).setY(8+Math.sin(en*3)*.4),be.t>=1&&(Math.abs(rn.copy(be.g.position).project(s).x)>1.15||be.t>=3)){n.remove(be.g),ut.splice(oe,1);continue}ft&&!be.mixer&&fs(be,ft),be.mixer?.update(Re)}ln=V.adPteroT>0;for(let oe=Ht.length-1;oe>=0;oe--){let be=Ht[oe];if(be.landed<0){be.t=Math.min(1,be.t+Re/be.dur);let Rt=1-be.t,Ot=Math.sin(be.t*Math.PI)*2.5,jn=be.s0.x*Rt,oo=be.s0.z*Rt,Zs=Math.hypot(be.s0.x,be.s0.z)||1,Sr=-be.s0.z/Zs,Js=be.s0.x/Zs;if(be.g.position.set(jn+Sr*Ot*Math.sin(be.t*Math.PI*2)*.5,hn+(be.s0.y-hn)*(1-(1-Rt)**.7),oo+Js*Ot*Math.sin(be.t*Math.PI*2)*.5),be.g.rotation.set(0,Math.atan2(-be.s0.x,-be.s0.z),Math.sin(en*2.4+oe)*.15),be.t<1)continue;be.landed=en,be.g.rotation.z=0,be.g.remove(be.can),i(be.elite,0,0)}else if(en-be.landed>Ci)n.remove(be.g),Ht.splice(oe,1);else{let Rt=(en-be.landed)/Ci;be.g.position.y=hn-Rt*2,be.egg.scale.set(1-Rt*.6,1.3*(1-Rt*.6),1-Rt*.6)}}let at=0;for(let oe=0;oe<Le.length;oe++){V.habs[oe]>0&&(at|=1<<oe),Le[oe].level!==V.habs[oe]&&Mt(oe,V.habs[oe]);let be=Le[oe];be.pop>0&&(be.pop=Math.max(0,be.pop-Re),be.g.scale.setScalar(1+be.pop*.6),t.shadowMap.needsUpdate=!0)}Jn.count=0;let Nt=Ri<0?0:Rc[Ri];J.pens(at,V.habs);let vt=V.incub.some(oe=>oe.egg>=0);ge.material.color.setHex(oy).multiplyScalar(vt?.85+.15*Math.sin(en*6):.7+.3*Math.sin(en*2));let kt=Qr(V),Vn=0;ie.bus=ie.train=!1;let Ks=[NaN,NaN],Ta=[0,0];for(let oe=0;oe<U.length;oe++){let be=oe<kt?V.vehs[oe]:0,Rt=U[oe];if(Rt.level!==be&&k(oe,be),be>0){Vn=Math.max(Vn,be);let Ot=be>4?1:0,jn=Ot===1,oo=jn?Ti:yr,Zs=Rt.gap[Rt.gap.length-1],Sr=Zs+(Rt.wl[0][1]+Rt.wl[Rt.wl.length-1][1])/2,Js=Ks[Ot]===Ks[Ot]?Ks[Ot]-Sr/2:oo.stop;Ks[Ot]=Js-Sr/2-P;let ao=Js+Zs/2,{ta:ms,TB:yc,C:lo}=W[Ot],gs=((en-me*Ta[Ot]++)%lo+lo)%lo;Rt.wait&&gs<ms-q(H)&&(Rt.wait=!1);let Yi=-1e9,vm=!1;gs<ms?Yi=ao-v(ms-gs):gs<ms+St?(Yi=ao,vm=!0):gs<ms+St+yc&&(Yi=ao+v(gs-ms-St)),vm&&(ie[jn?"train":"bus"]=!0),Rt.g.visible=Yi>-1e8&&!Rt.wait,Rt.cars.forEach((Mm,yd)=>{let[Sm,bm,Em]=oo.pos(Yi-(Rt.gap[yd]??0));Mm.position.set(Sm,jn?zs-.05:.05,bm),Mm.rotation.y=Em+(jn?G:0),Rt.g.visible&&Mr(Sm,0,bm,Em,Rt.wl[yd][0]*1.5,Rt.wl[yd][1]*1.25)})}}re.viaduct.visible=Vn>4;let _c=Qh(V);de.forEach((oe,be)=>{let Rt=V.incub[be],Ot=be<_c&&Rt&&Rt.egg>=0;if(oe.e.visible=Ot,!Ot)return;oe.e.material.color.setHex(Pa[Rt.egg]);let jn=od(V,be,ue)<1.5;oe.e.scale.setScalar(1+(jn?.12*Math.sin(en*30+oe.ph):.03*Math.sin(en*3+oe.ph))),oe.e.rotation.z=jn?Math.sin(en*45+oe.ph)*.3:0,oe.e.position.y=oe.y+(jn?Math.abs(Math.sin(en*14+oe.ph))*.35:0)});for(let oe of pe)oe.t>=1||(oe.t=Math.min(1,oe.t+Re/.9),oe.m.position.set(oe.x,4.3+oe.t*2.4,0),oe.m.rotation.y=en*8,oe.m.scale.setScalar(1-oe.t**3),oe.m.visible=oe.t<1);for(let oe=0;oe<Ys;){if(et[oe]+=Re,et[oe]>=wt[oe]){let be=--Ys;fe[oe]=fe[be],he[oe]=he[be],Ge[oe]=Ge[be],tt[oe]=tt[be],Me[oe]=Me[be],ye[oe]=ye[be],qe[oe]=qe[be],et[oe]=et[be],wt[oe]=wt[be],Kt[oe]=Kt[be],Te[oe]=Te[be];continue}oe++}ai.fill(0),Sn.count=0;for(let oe=0;oe<Ys;oe++){let be=Math.max(0,et[oe]-tt[oe]),Rt=be/(wt[oe]-tt[oe]),Ot=(et[oe]*pc+Kt[oe]|0)%kn,jn=tt[oe]>0&&et[oe]<tt[oe];pn.position.set(fe[oe]+(Me[oe]-fe[oe])*Rt,jn?Ge[oe]*(1-(et[oe]/tt[oe])**2):0,he[oe]+(ye[oe]-he[oe])*Rt),pn.rotation.y=qe[oe],pn.scale.setScalar(fc*xa[Te[oe]]),pn.updateMatrix(),Z[Ot].setMatrixAt(ai[Ot],pn.matrix),Z[Ot].setColorAt(ai[Ot]++,Ma(Te[oe],Kt[oe])),Ri>=0&&va(pn.position.x,pn.position.y,pn.position.z,Nt*fc*xa[Te[oe]],Te[oe],Kt[oe]),Ri>=0&&Mr(pn.position.x,0,pn.position.z,qe[oe],Nt*fc*.8,Nt*fc*1.3,ry[Te[oe]])}Z.forEach((oe,be)=>{oe.count=Ri<0?0:ai[be],oe.instanceMatrix.needsUpdate=!0,oe.instanceColor&&(oe.instanceColor.needsUpdate=!0)}),se.fill(0);for(let oe of Q){let be=V.habs[oe.hab],Rt=V.dinos[oe.hab],Ot=Rt?.[oe.j];if(be<=0||Ot===void 0||en<ya[oe.hab*to+oe.j])continue;let jn=pi[be-1].slots,oo=Math.max(1.2,3-Nt*.15),Zs=be===6?2.3:.3,Sr=Zs+(oo-Zs)*Math.sqrt((oe.j+.5)/jn),Js=oe.j*2.399,ao=oe.w?.4:0;oe.th+=oe.w*Re;let ms=Math.cos(oe.th),yc=Math.sin(oe.th),lo=Math.sign(oe.w)||1,gs=oe.w?0:1;$.position.set(no[oe.hab][0]+Math.cos(Js)*Sr+ms*ao,ay(be),no[oe.hab][1]+Math.sin(Js)*Sr+yc*ao),$.rotation.y=oe.w?Math.atan2(-yc*lo,ms*lo):Js+1.2,$.scale.setScalar(xa[Ot]),$.updateMatrix();let Yi=gs*kn+(en*we[gs]+oe.ph|0)%kn;B[Yi].setColorAt(se[Yi],Ma(Ot,oe.ph)),B[Yi].setMatrixAt(se[Yi]++,$.matrix),va($.position.x,$.position.y,$.position.z,Nt*xa[Ot],Ot,oe.ph),Mr($.position.x,$.position.y,$.position.z,$.rotation.y,Nt*.8*xa[Ot]*(Ot?1.3:1),Nt*1.3*xa[Ot]*(Ot?1.3:1),ry[Ot])}B.forEach((oe,be)=>{oe.count=se[be],oe.instanceMatrix.needsUpdate=!0,oe.instanceColor&&(oe.instanceColor.needsUpdate=!0)}),Sn.instanceMatrix.needsUpdate=!0,Sn.instanceColor.needsUpdate=!0;let wa=Math.min(ca(V),ua(V))*60,ym=_e.set(V.shops);re.update(at,ym),Ee.update(Re,3+Math.round((co-3)*Math.min(1,Math.log10(1+wa)/4.5)**2.2),at,ym,ie,Vn>4);for(let oe of Ee.agents())oe.st&&Mr(oe.x,oe.y,oe.z,0,.5*oe.h,.5*oe.h);Jn.instanceMatrix.needsUpdate=!0,Jn.instanceColor.needsUpdate=!0,f()}return{scene:n,camera:s,vehIcon:V=>te[V-1]??null,hatchBaby:Ae,coin:Ie,screenOf:(V,ae,ue)=>{rn.set(V,ae,ue).project(s);let Re=oi();return{x:(rn.x+1)/2*Re.w,y:(1-rn.y)/2*Re.h}},spawnDrone:Pt,dronePos:xc,update:by,render:()=>{p.render(),_()},post:p,zoomT:L,visitors:Ee.visitors,agents:Ee.agents,blocked:xe,shopStats:Ee.stats,dwell:ie,info:t.info}}var xm="ef_save",DT=4,NT=5e3;document.getElementById("ver").textContent="v"+Tm.split(" ")[0];function UT(){try{let i=localStorage.getItem(xm);if(!i)return null;let e=JSON.parse(i);return{s:d_(e?.s,void 0,e?.v),t:typeof e?.t=="number"?e.t:Date.now()}}catch{return null}}var mm=UT(),fi=mm?.s??Qp(),xy={},_y=1,yy=!1;function _d(){if(!yy)try{localStorage.setItem(xm,JSON.stringify({v:DT,t:Date.now(),s:fi}))}catch{}}sg();function _m(i){for(let e of i)if(e.type==="hatched")Rn.hatchBaby(e.hab,e.slot,e.rarity,e.src),ds.rarityPop(e.rarity),e.src==="drone"&&Zt("wing");else if(e.type==="sold"||e.type==="replaced"){let t=e.type==="sold"?e.rarity:e.old,n=Rn.screenOf(0,4.5,0);e.type==="sold"&&Rn.coin(),ds.floatText(`+$${Qt(e.money)} ${Cn[t].name}`,n.x+(Math.random()-.5)*60,n.y,"#"+Cn[t].color.toString(16).padStart(6,"0")),Zt("coin")}else e.type==="eggUnlocked"?(Zt("key"),ds.toast("New species available!")):e.type==="typeUnlocked"?(Zt("key"),ds.toast(`${Qn[e.egg].name} unlocked!`)):e.type==="drone"?Rn.spawnDrone(e.elite):e.type==="gift"&&ds.gift()}var Rn=uy((i,e,t)=>_m(P_(fi,i))),ds=Y_(fi,{speed:i=>{_y=i},emit:_m,reset:()=>{yy=!0;try{localStorage.removeItem(xm),localStorage.removeItem("ef_tut")}catch{}location.reload()}},Rn.vehIcon,Rn.post,Rn.zoomT);function vy(i){let e=x_(fi,i);e<=0||i<Wm||(fi.money+=e,fi.runEarnings+=e,ds.ask(`While you were away:
+$${Qt(e)}`,"OK",()=>{},!1,["Watch ad \xD72",()=>tr(()=>{fi.money+=e,fi.runEarnings+=e,ds.toast(`+$${Qt(e)}`)},()=>ds.toast("No video available right now"))]))}mm&&vy(Math.max(0,(Date.now()-mm.t)/1e3));function My(i){B_(fi,i,Date.now());for(let e=0;e<_y;e++)_m(N_(fi,i,xy,Date.now()));Rn.update(fi,i,Date.now()),ds.update(),OT(i)}var _a=new F,hy=(i,e)=>(_a.set(i,0,e).project(Rn.camera),Math.abs(_a.x)<1&&Math.abs(_a.y)<1),dy=15+Math.random()*25,fy=0,pm=0,py=!1,my=!1;function OT(i){let{bus:e,train:t}=Rn.dwell;if((e&&!py&&hy($l.x,$l.z)||t&&!my&&hy(oa.x,oa.z))&&Zt("horn"),py=e,my=t,fi.dinos.some(s=>s.length)&&(dy-=i)<=0&&(dy=15+Math.random()*25,Zt("roar")),--fy<=0){fy=10,pm=0;for(let s of Rn.agents())_a.set(s.x,s.y,s.z).project(Rn.camera),Math.abs(_a.x)<.7&&Math.abs(_a.y)<.7&&pm++}let n=Si.smoothstep(Rn.camera.zoom,1,1.8);rg((.05+.95*n)*Math.min(1,pm/20),i)}var gm=performance.now(),FT=lg(),gy=!0;function Sy(i){ag()||My((i-gm)/1e3),gm=i,Rn.render(),gy&&(gy=!1,FT.then(cg)),requestAnimationFrame(Sy)}requestAnimationFrame(Sy);var xd=0;document.addEventListener("visibilitychange",()=>{document.hidden?(xd=Date.now(),_d()):(gm=performance.now(),xd&&vy(Math.max(0,(Date.now()-xd)/1e3)),xd=0)});addEventListener("pagehide",_d);setInterval(()=>{document.hidden||_d()},NT);window.__game={state:fi,input:xy,scene:Rn.scene,camera:Rn.camera,hud:ds,world:Rn,save:_d,tick(i){for(let e=i;e>0;e-=1e3)My(Math.min(e,1e3)/1e3);Rn.render()}};window.__booted=!0;})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
