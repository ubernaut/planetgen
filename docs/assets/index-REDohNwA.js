(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ul="171",Pa={ROTATE:0,DOLLY:1,PAN:2},cd=0,gc=1,ud=2,rh=1,oh=2,Bn=3,Dn=0,kt=1,un=2,oi=0,Sn=1,No=2,vc=3,_c=4,hd=5,Pi=100,dd=101,fd=102,pd=103,md=104,gd=200,vd=201,_d=202,xd=203,Oo=204,Bo=205,yd=206,Md=207,Sd=208,Ed=209,bd=210,wd=211,Td=212,Ad=213,Rd=214,zo=0,ko=1,Vo=2,Wa=3,Ho=4,Go=5,Wo=6,Xo=7,Fl=0,Cd=1,Pd=2,li=0,Dd=1,Ld=2,Id=3,Ud=4,Fd=5,Nd=6,Od=7,lh=300,Xa=301,qa=302,qo=303,Yo=304,Ur=306,bn=1e3,vt=1001,Ko=1002,St=1003,Bd=1004,Os=1005,ot=1006,Yr=1007,Ui=1008,Rt=1009,ch=1010,uh=1011,Es=1012,Nl=1013,Xi=1014,kn=1015,Cs=1016,Ol=1017,Bl=1018,Ya=1020,hh=35902,dh=1021,fh=1022,Mt=1023,ph=1024,mh=1025,Da=1026,Ka=1027,gh=1028,zl=1029,vh=1030,kl=1031,Vl=1033,gr=33776,vr=33777,_r=33778,xr=33779,jo=35840,Zo=35841,$o=35842,Jo=35843,Qo=36196,el=37492,tl=37496,nl=37808,il=37809,al=37810,sl=37811,rl=37812,ol=37813,ll=37814,cl=37815,ul=37816,hl=37817,dl=37818,fl=37819,pl=37820,ml=37821,yr=36492,gl=36494,vl=36495,_h=36283,_l=36284,xl=36285,yl=36286,zd=3200,kd=3201,Hl=0,Vd=1,Lt="",Qt="srgb",ja="srgb-linear",br="linear",st="srgb",aa=7680,xc=519,Hd=512,Gd=513,Wd=514,xh=515,Xd=516,qd=517,Yd=518,Kd=519,Ml=35044,yc="300 es",Vn=2e3,wr=2001;class na{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mc=1234567;const fs=Math.PI/180,bs=180/Math.PI;function Wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function ze(i,e,t){return Math.max(e,Math.min(t,i))}function Gl(i,e){return(i%e+e)%e}function jd(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function Zd(i,e,t){return i!==e?(t-i)/(e-i):0}function ps(i,e,t){return(1-t)*i+t*e}function $d(i,e,t,n){return ps(i,e,1-Math.exp(-t*n))}function Jd(i,e=1){return e-Math.abs(Gl(i,e*2)-e)}function Qd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ef(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function nf(i,e){return i+Math.random()*(e-i)}function af(i){return i*(.5-Math.random())}function sf(i){i!==void 0&&(Mc=i);let e=Mc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rf(i){return i*fs}function of(i){return i*bs}function lf(i){return(i&i-1)===0&&i!==0}function cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function uf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hf(i,e,t,n,a){const s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),u=r((e+n)/2),h=s((e-n)/2),f=r((e-n)/2),m=s((n-e)/2),g=r((n-e)/2);switch(a){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Tr={DEG2RAD:fs,RAD2DEG:bs,generateUUID:Wn,clamp:ze,euclideanModulo:Gl,mapLinear:jd,inverseLerp:Zd,lerp:ps,damp:$d,pingpong:Jd,smoothstep:Qd,smootherstep:ef,randInt:tf,randFloat:nf,randFloatSpread:af,seededRandom:sf,degToRad:rf,radToDeg:of,isPowerOfTwo:lf,ceilPowerOfTwo:cf,floorPowerOfTwo:uf,setQuaternionFromProperEuler:hf,normalize:et,denormalize:yn};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(e,t,n,a,s,r,o,l,c){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c)}set(e,t,n,a,s,r,o,l,c){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=a[0],p=a[3],d=a[6],x=a[1],y=a[4],v=a[7],w=a[2],T=a[5],A=a[8];return s[0]=r*_+o*x+l*w,s[3]=r*p+o*y+l*T,s[6]=r*d+o*v+l*A,s[1]=c*_+u*x+h*w,s[4]=c*p+u*y+h*T,s[7]=c*d+u*v+h*A,s[2]=f*_+m*x+g*w,s[5]=f*p+m*y+g*T,s[8]=f*d+m*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*r*u-t*o*c-n*s*u+n*o*l+a*s*c-a*r*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*r-o*c,f=o*l-u*s,m=c*s-r*l,g=t*h+n*f+a*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(a*c-u*n)*_,e[2]=(o*n-a*r)*_,e[3]=f*_,e[4]=(u*t-a*l)*_,e[5]=(a*s-o*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Kr.makeScale(e,t)),this}rotate(e){return this.premultiply(Kr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Kr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kr=new Ce;function yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function df(){const i=Ar("canvas");return i.style.display="block",i}const Sc={};function ba(i){i in Sc||(Sc[i]=!0,console.warn(i))}function ff(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function pf(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mf(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ec=new Ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bc=new Ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gf(){const i={enabled:!0,workingColorSpace:ja,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===st&&(a.r=Xn(a.r),a.g=Xn(a.g),a.b=Xn(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===st&&(a.r=La(a.r),a.g=La(a.g),a.b=La(a.b))),a},fromWorkingColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},toWorkingColorSpace:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Lt?br:this.spaces[a].transfer},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ja]:{primaries:e,whitePoint:n,transfer:br,toXYZ:Ec,fromXYZ:bc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Ec,fromXYZ:bc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const Ye=gf();function Xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function La(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let sa;class vf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sa===void 0&&(sa=Ar("canvas")),sa.width=e.width,sa.height=e.height;const n=sa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=sa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Xn(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xn(t[n]/255)*255):t[n]=Xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _f=0;class Mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(jr(a[r].image)):s.push(jr(a[r]))}else s=jr(a);n.url=s}return t||(e.images[this.uuid]=n),n}}function jr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xf=0;class Vt extends na{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,n=vt,a=vt,s=ot,r=Ui,o=Mt,l=Rt,c=Vt.DEFAULT_ANISOTROPY,u=Lt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Wn(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bn:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case Ko:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bn:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case Ko:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=lh;Vt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,a=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(m+1)/2,w=(d+1)/2,T=(u+f)/4,A=(h+_)/4,D=(g+p)/4;return y>v&&y>w?y<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(y),a=T/n,s=A/n):v>w?v<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(v),n=T/a,s=D/a):w<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(w),n=A/s,a=D/s),this.set(n,a,s,t),this}let x=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-_)/x,this.z=(f-u)/x,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this.w=ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this.w=ze(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yf extends na{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const a={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ot,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Vt(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,a=e.textures.length;n<a;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends yf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Sh extends Vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=St,this.minFilter=St,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Mf extends Vt{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=St,this.minFilter=St,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bt{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let l=n[a+0],c=n[a+1],u=n[a+2],h=n[a+3];const f=s[r+0],m=s[r+1],g=s[r+2],_=s[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-o;const d=l*f+c*m+u*g+h*_,x=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const w=Math.sqrt(y),T=Math.atan2(w,d*x);p=Math.sin(p*T)/w,o=Math.sin(o*T)/w}const v=o*x;if(l=l*p+f*v,c=c*p+m*v,u=u*p+g*v,h=h*p+_*v,p===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,a,s,r){const o=n[a],l=n[a+1],c=n[a+2],u=n[a+3],h=s[r],f=s[r+1],m=s[r+2],g=s[r+3];return e[t]=o*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-o*m,e[t+2]=c*g+u*m+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(a/2),h=o(s/2),f=l(n/2),m=l(a/2),g=l(s/2);switch(r){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(r-a)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(u-l)/m,this._x=.25*m,this._y=(a+r)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-c)/m,this._x=(a+r)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(r-a)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ze(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+r*o+a*c-s*l,this._y=a*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-a*o,this._w=r*u-n*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,s=this._z,r=this._w;let o=r*e._w+n*e._x+a*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=n,this._y=a,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*r+t*this._w,this._x=m*n+t*this._x,this._y=m*a+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=r*h+this._w*f,this._x=n*h+this._x*f,this._y=a*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*n),u=2*(o*t-s*a),h=2*(s*n-r*t);return this.x=t+l*c+r*h-o*u,this.y=n+l*u+o*c-s*h,this.z=a+l*h+s*u-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ze(this.x,e.x,t.x),this.y=ze(this.y,e.y,t.y),this.z=ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ze(this.x,e,t),this.y=ze(this.y,e,t),this.z=ze(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-n*l,this.z=n*o-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Zr.copy(this).projectOnVector(e),this.sub(Zr)}reflect(e){return this.sub(Zr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zr=new C,wc=new Bt;class Ps{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,mn):mn.fromBufferAttribute(s,r),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bs.copy(n.boundingBox)),Bs.applyMatrix4(e.matrixWorld),this.union(Bs)}const a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ss),zs.subVectors(this.max,ss),ra.subVectors(e.a,ss),oa.subVectors(e.b,ss),la.subVectors(e.c,ss),$n.subVectors(oa,ra),Jn.subVectors(la,oa),Mi.subVectors(ra,la);let t=[0,-$n.z,$n.y,0,-Jn.z,Jn.y,0,-Mi.z,Mi.y,$n.z,0,-$n.x,Jn.z,0,-Jn.x,Mi.z,0,-Mi.x,-$n.y,$n.x,0,-Jn.y,Jn.x,0,-Mi.y,Mi.x,0];return!$r(t,ra,oa,la,zs)||(t=[1,0,0,0,1,0,0,0,1],!$r(t,ra,oa,la,zs))?!1:(ks.crossVectors($n,Jn),t=[ks.x,ks.y,ks.z],$r(t,ra,oa,la,zs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new C,new C,new C,new C,new C,new C,new C,new C],mn=new C,Bs=new Ps,ra=new C,oa=new C,la=new C,$n=new C,Jn=new C,Mi=new C,ss=new C,zs=new C,ks=new C,Si=new C;function $r(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){Si.fromArray(i,s);const o=a.x*Math.abs(Si.x)+a.y*Math.abs(Si.y)+a.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Sf=new Ps,rs=new C,Jr=new C;class Fr{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Sf.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rs.subVectors(e,this.center);const t=rs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(rs,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rs.copy(e.center).add(Jr)),this.expandByPoint(rs.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new C,Qr=new C,Vs=new C,Qn=new C,eo=new C,Hs=new C,to=new C;class Wl{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Qr.copy(e).add(t).multiplyScalar(.5),Vs.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(Qr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Vs),o=Qn.dot(this.direction),l=-Qn.dot(Vs),c=Qn.lengthSq(),u=Math.abs(1-r*r);let h,f,m,g;if(u>0)if(h=r*l-o,f=r*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+r*f+2*o)+f*(r*h+f+2*l)+c}else f=s,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-r*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(r*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=r>0?-s:s,h=Math.max(0,-(r*f+o)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),a&&a.copy(Qr).addScaledVector(Vs,f),m}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),a=Un.dot(Un)-n*n,s=e.radius*e.radius;if(a>s)return null;const r=Math.sqrt(s-a),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,r=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,r=(e.min.y-f.y)*u),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,a,s){eo.subVectors(t,e),Hs.subVectors(n,e),to.crossVectors(eo,Hs);let r=this.direction.dot(to),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Qn.subVectors(this.origin,e);const l=o*this.direction.dot(Hs.crossVectors(Qn,Hs));if(l<0)return null;const c=o*this.direction.dot(eo.cross(Qn));if(c<0||l+c>r)return null;const u=-o*Qn.dot(to);return u<0?null:this.at(u/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,a,s,r,o,l,c,u,h,f,m,g,_,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c,u,h,f,m,g,_,p)}set(e,t,n,a,s,r,o,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=a,d[1]=s,d[5]=r,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/ca.setFromMatrixColumn(e,0).length(),s=1/ca.setFromMatrixColumn(e,1).length(),r=1/ca.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=r*u,m=r*h,g=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-o*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*o,t[4]=g*o-m,t[8]=r*c,t[1]=r*h,t[5]=r*u,t[9]=-o,t[2]=m*o-g,t[6]=_+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*o,t[4]=-r*h,t[8]=g+m*o,t[1]=m+g*o,t[5]=r*u,t[9]=_-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*u,m=r*h,g=o*u,_=o*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,m=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=r*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=r*l,m=r*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=r*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=o*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ef,e,bf)}lookAt(e,t,n){const a=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),ei.crossVectors(n,$t),ei.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),ei.crossVectors(n,$t)),ei.normalize(),Gs.crossVectors($t,ei),a[0]=ei.x,a[4]=Gs.x,a[8]=$t.x,a[1]=ei.y,a[5]=Gs.y,a[9]=$t.y,a[2]=ei.z,a[6]=Gs.z,a[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],x=n[3],y=n[7],v=n[11],w=n[15],T=a[0],A=a[4],D=a[8],E=a[12],S=a[1],P=a[5],B=a[9],N=a[13],W=a[2],q=a[6],G=a[10],K=a[14],V=a[3],ee=a[7],ce=a[11],_e=a[15];return s[0]=r*T+o*S+l*W+c*V,s[4]=r*A+o*P+l*q+c*ee,s[8]=r*D+o*B+l*G+c*ce,s[12]=r*E+o*N+l*K+c*_e,s[1]=u*T+h*S+f*W+m*V,s[5]=u*A+h*P+f*q+m*ee,s[9]=u*D+h*B+f*G+m*ce,s[13]=u*E+h*N+f*K+m*_e,s[2]=g*T+_*S+p*W+d*V,s[6]=g*A+_*P+p*q+d*ee,s[10]=g*D+_*B+p*G+d*ce,s[14]=g*E+_*N+p*K+d*_e,s[3]=x*T+y*S+v*W+w*V,s[7]=x*A+y*P+v*q+w*ee,s[11]=x*D+y*B+v*G+w*ce,s[15]=x*E+y*N+v*K+w*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+s*l*h-a*c*h-s*o*f+n*c*f+a*o*m-n*l*m)+_*(+t*l*m-t*c*f+s*r*f-a*r*m+a*c*u-s*l*u)+p*(+t*c*h-t*o*m-s*r*h+n*r*m+s*o*u-n*c*u)+d*(-a*o*u-t*l*h+t*o*f+a*r*h-n*r*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],x=h*p*c-_*f*c+_*l*m-o*p*m-h*l*d+o*f*d,y=g*f*c-u*p*c-g*l*m+r*p*m+u*l*d-r*f*d,v=u*_*c-g*h*c+g*o*m-r*_*m-u*o*d+r*h*d,w=g*h*l-u*_*l-g*o*f+r*_*f+u*o*p-r*h*p,T=t*x+n*y+a*v+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=x*A,e[1]=(_*f*s-h*p*s-_*a*m+n*p*m+h*a*d-n*f*d)*A,e[2]=(o*p*s-_*l*s+_*a*c-n*p*c-o*a*d+n*l*d)*A,e[3]=(h*l*s-o*f*s-h*a*c+n*f*c+o*a*m-n*l*m)*A,e[4]=y*A,e[5]=(u*p*s-g*f*s+g*a*m-t*p*m-u*a*d+t*f*d)*A,e[6]=(g*l*s-r*p*s-g*a*c+t*p*c+r*a*d-t*l*d)*A,e[7]=(r*f*s-u*l*s+u*a*c-t*f*c-r*a*m+t*l*m)*A,e[8]=v*A,e[9]=(g*h*s-u*_*s-g*n*m+t*_*m+u*n*d-t*h*d)*A,e[10]=(r*_*s-g*o*s+g*n*c-t*_*c-r*n*d+t*o*d)*A,e[11]=(u*o*s-r*h*s-u*n*c+t*h*c+r*n*m-t*o*m)*A,e[12]=w*A,e[13]=(u*_*a-g*h*a+g*n*f-t*_*f-u*n*p+t*h*p)*A,e[14]=(g*o*a-r*_*a-g*n*l+t*_*l+r*n*p-t*o*p)*A,e[15]=(r*h*a-u*o*a+u*n*l-t*h*l-r*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-a*l,c*l+a*o,0,c*o+a*l,u*o+n,u*l-a*r,0,c*l-a*o,u*l+a*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,u=r+r,h=o+o,f=s*c,m=s*u,g=s*h,_=r*u,p=r*h,d=o*h,x=l*c,y=l*u,v=l*h,w=n.x,T=n.y,A=n.z;return a[0]=(1-(_+d))*w,a[1]=(m+v)*w,a[2]=(g-y)*w,a[3]=0,a[4]=(m-v)*T,a[5]=(1-(f+d))*T,a[6]=(p+x)*T,a[7]=0,a[8]=(g+y)*A,a[9]=(p-x)*A,a[10]=(1-(f+_))*A,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let s=ca.set(a[0],a[1],a[2]).length();const r=ca.set(a[4],a[5],a[6]).length(),o=ca.set(a[8],a[9],a[10]).length();this.determinant()<0&&(s=-s),e.x=a[12],e.y=a[13],e.z=a[14],gn.copy(this);const c=1/s,u=1/r,h=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=h,gn.elements[9]*=h,gn.elements[10]*=h,t.setFromRotationMatrix(gn),n.x=s,n.y=r,n.z=o,this}makePerspective(e,t,n,a,s,r,o=Vn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-a),h=(t+e)/(t-e),f=(n+a)/(n-a);let m,g;if(o===Vn)m=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(o===wr)m=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=Vn){const l=this.elements,c=1/(t-e),u=1/(n-a),h=1/(r-s),f=(t+e)*c,m=(n+a)*u;let g,_;if(o===Vn)g=(r+s)*h,_=-2*h;else if(o===wr)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ca=new C,gn=new lt,Ef=new C(0,0,0),bf=new C(1,1,1),ei=new C,Gs=new C,$t=new C,Tc=new lt,Ac=new Bt;class wn{constructor(e=0,t=0,n=0,a=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],u=a[9],h=a[2],f=a[6],m=a[10];switch(t){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Tc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Xl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wf=0;const Rc=new C,ua=new Bt,Fn=new lt,Ws=new C,os=new C,Tf=new C,Af=new Bt,Cc=new C(1,0,0),Pc=new C(0,1,0),Dc=new C(0,0,1),Lc={type:"added"},Rf={type:"removed"},ha={type:"childadded",child:null},no={type:"childremoved",child:null};class yt extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new C,t=new wn,n=new Bt,a=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new lt},normalMatrix:{value:new Ce}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,t){return ua.setFromAxisAngle(e,t),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(Cc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Dc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ws.copy(e):Ws.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(os,Ws,this.up):Fn.lookAt(Ws,os,this.up),this.quaternion.setFromRotationMatrix(Fn),a&&(Fn.extractRotation(a.matrixWorld),ua.setFromRotationMatrix(Fn),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),ha.child=e,this.dispatchEvent(ha),ha.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rf),no.child=e,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Tf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Af,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),u=r(e.images),h=r(e.shapes),f=r(e.skeletons),m=r(e.animations),g=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=a,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}yt.DEFAULT_UP=new C(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new C,Nn=new C,io=new C,On=new C,da=new C,fa=new C,Ic=new C,ao=new C,so=new C,ro=new C,oo=new pt,lo=new pt,co=new pt;class hn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),vn.subVectors(e,t),a.cross(vn);const s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){vn.subVectors(a,t),Nn.subVectors(n,t),io.subVectors(e,t);const r=vn.dot(vn),o=vn.dot(Nn),l=vn.dot(io),c=Nn.dot(Nn),u=Nn.dot(io),h=r*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*u)*f,g=(r*u-o*l)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,n,a,s,r,o,l){return this.getBarycoord(e,t,n,a,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(r,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,n,a,s,r){return oo.setScalar(0),lo.setScalar(0),co.setScalar(0),oo.fromBufferAttribute(e,t),lo.fromBufferAttribute(e,n),co.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(oo,s.x),r.addScaledVector(lo,s.y),r.addScaledVector(co,s.z),r}static isFrontFacing(e,t,n,a){return vn.subVectors(n,t),Nn.subVectors(e,t),vn.cross(Nn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),vn.cross(Nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,s=this.c;let r,o;da.subVectors(a,n),fa.subVectors(s,n),ao.subVectors(e,n);const l=da.dot(ao),c=fa.dot(ao);if(l<=0&&c<=0)return t.copy(n);so.subVectors(e,a);const u=da.dot(so),h=fa.dot(so);if(u>=0&&h<=u)return t.copy(a);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return r=l/(l-u),t.copy(n).addScaledVector(da,r);ro.subVectors(e,s);const m=da.dot(ro),g=fa.dot(ro);if(g>=0&&m<=g)return t.copy(s);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(fa,o);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Ic.subVectors(s,a),o=(h-u)/(h-u+(m-g)),t.copy(a).addScaledVector(Ic,o);const d=1/(p+_+f);return r=_*d,o=f*d,t.copy(n).addScaledVector(da,r).addScaledVector(fa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},Xs={h:0,s:0,l:0};function uo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,a=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,a),this}setHSL(e,t,n,a=Ye.workingColorSpace){if(e=Gl(e,1),t=ze(t,0,1),n=ze(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=uo(r,s,e+1/3),this.g=uo(r,s,e),this.b=uo(r,s,e-1/3)}return Ye.toWorkingColorSpace(this,a),this}setStyle(e,t=Qt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Eh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=La(e.r),this.g=La(e.g),this.b=La(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Ye.fromWorkingColorSpace(Dt.copy(this),e),Math.round(ze(Dt.r*255,0,255))*65536+Math.round(ze(Dt.g*255,0,255))*256+Math.round(ze(Dt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Dt.copy(this),t);const n=Dt.r,a=Dt.g,s=Dt.b,r=Math.max(n,a,s),o=Math.min(n,a,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const h=r-o;switch(c=u<=.5?h/(r+o):h/(2-r-o),r){case n:l=(a-s)/h+(a<s?6:0);break;case a:l=(s-n)/h+2;break;case s:l=(n-a)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Qt){Ye.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,n=Dt.g,a=Dt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(Xs);const n=ps(ti.h,Xs.h,t),a=ps(ti.s,Xs.s,t),s=ps(ti.l,Xs.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new Ee;Ee.NAMES=Eh;let Cf=0;class vi extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=Sn,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oo,this.blendDst=Bo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Sn&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oo&&(n.blendSrc=this.blendSrc),this.blendDst!==Bo&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Wa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==aa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==aa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==aa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(t){const s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ql extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new C,qs=new ve;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)qs.fromBufferAttribute(this,t),qs.applyMatrix3(e),this.setXY(t,qs.x,qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class bh extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wh extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class It extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pf=0;const rn=new lt,ho=new yt,pa=new C,Jt=new Ps,ls=new Ps,wt=new C;class jt extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?wh:bh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return ho.lookAt(e),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pa).negate(),this.translate(pa.x,pa.y,pa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,s=e.length;a<s;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new It(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const o=t[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(Jt.min,ls.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,ls.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(ls.min),Jt.expandByPoint(ls.max))}Jt.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)wt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(wt));if(t)for(let s=0,r=t.length;s<r;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)wt.fromBufferAttribute(o,c),l&&(pa.fromBufferAttribute(e,c),wt.add(pa)),a=Math.max(a,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<n.count;D++)o[D]=new C,l[D]=new C;const c=new C,u=new C,h=new C,f=new ve,m=new ve,g=new ve,_=new C,p=new C;function d(D,E,S){c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,E),h.fromBufferAttribute(n,S),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,E),g.fromBufferAttribute(s,S),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const P=1/(m.x*g.y-g.x*m.y);isFinite(P)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(P),o[D].add(_),o[E].add(_),o[S].add(_),l[D].add(p),l[E].add(p),l[S].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,E=x.length;D<E;++D){const S=x[D],P=S.start,B=S.count;for(let N=P,W=P+B;N<W;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new C,v=new C,w=new C,T=new C;function A(D){w.fromBufferAttribute(a,D),T.copy(w);const E=o[D];y.copy(E),y.sub(w.multiplyScalar(w.dot(E))).normalize(),v.crossVectors(T,E);const P=v.dot(l[D])<0?-1:1;r.setXYZW(D,y.x,y.y,y.z,P)}for(let D=0,E=x.length;D<E;++D){const S=x[D],P=S.start,B=S.count;for(let N=P,W=P+B;N<W;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const a=new C,s=new C,r=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);a.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,p),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),u.subVectors(r,s),h.subVectors(a,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new Ht(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,a=this.attributes;for(const o in a){const l=a[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(a[l]=u,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const a=e.attributes;for(const c in a){const u=a[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,u=r.length;c<u;c++){const h=r[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new lt,Ei=new Wl,Ys=new Fr,Fc=new C,Ks=new C,js=new C,Zs=new C,fo=new C,$s=new C,Nc=new C,Js=new C;class Tt extends yt{constructor(e=new jt,t=new ql){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(s&&o){$s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(fo.fromBufferAttribute(h,e),r?$s.addScaledVector(fo,u):$s.addScaledVector(fo.sub(t),u))}t.add($s)}return t}raycast(e,t){const n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(s),Ei.copy(e.ray).recast(e.near),!(Ys.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Ys,Fc)===null||Ei.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(s).invert(),Ei.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let a;const s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=r[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=x,w=y;v<w;v+=3){const T=o.getX(v),A=o.getX(v+1),D=o.getX(v+2);a=Qs(this,d,e,n,c,u,h,T,A,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const x=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);a=Qs(this,r,e,n,c,u,h,x,y,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=r[p.materialIndex],x=Math.max(p.start,m.start),y=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=x,w=y;v<w;v+=3){const T=v,A=v+1,D=v+2;a=Qs(this,d,e,n,c,u,h,T,A,D),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const x=p,y=p+1,v=p+2;a=Qs(this,r,e,n,c,u,h,x,y,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function Df(i,e,t,n,a,s,r,o){let l;if(e.side===kt?l=n.intersectTriangle(r,s,a,!0,o):l=n.intersectTriangle(a,s,r,e.side===Dn,o),l===null)return null;Js.copy(o),Js.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Js);return c<t.near||c>t.far?null:{distance:c,point:Js.clone(),object:i}}function Qs(i,e,t,n,a,s,r,o,l,c){i.getVertexPosition(o,Ks),i.getVertexPosition(l,js),i.getVertexPosition(c,Zs);const u=Df(i,e,t,n,Ks,js,Zs,Nc);if(u){const h=new C;hn.getBarycoord(Nc,Ks,js,Zs,h),a&&(u.uv=hn.getInterpolatedAttribute(a,o,l,c,h,new ve)),s&&(u.uv1=hn.getInterpolatedAttribute(s,o,l,c,h,new ve)),r&&(u.normal=hn.getInterpolatedAttribute(r,o,l,c,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new C,materialIndex:0};hn.getNormal(Ks,js,Zs,f.normal),u.face=f,u.barycoord=h}return u}class Ds extends jt{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};const o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,r,s,0),g("z","y","x",1,-1,n,t,-e,r,s,1),g("x","z","y",1,1,e,n,t,a,r,2),g("x","z","y",1,-1,e,n,-t,a,r,3),g("x","y","z",1,-1,e,t,n,a,s,4),g("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(u,3)),this.setAttribute("uv",new It(h,2));function g(_,p,d,x,y,v,w,T,A,D,E){const S=v/A,P=w/D,B=v/2,N=w/2,W=T/2,q=A+1,G=D+1;let K=0,V=0;const ee=new C;for(let ce=0;ce<G;ce++){const _e=ce*P-N;for(let Fe=0;Fe<q;Fe++){const Je=Fe*S-B;ee[_]=Je*x,ee[p]=_e*y,ee[d]=W,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[p]=0,ee[d]=T>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(Fe/A),h.push(1-ce/D),K+=1}}for(let ce=0;ce<D;ce++)for(let _e=0;_e<A;_e++){const Fe=f+_e+q*ce,Je=f+_e+q*(ce+1),Y=f+(_e+1)+q*(ce+1),te=f+(_e+1)+q*ce;l.push(Fe,Je,te),l.push(Je,Y,te),V+=6}o.addGroup(m,V,E),m+=V,f+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Za(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function Ot(i){const e={};for(let t=0;t<i.length;t++){const n=Za(i[t]);for(const a in n)e[a]=n[a]}return e}function Lf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Th(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const If={clone:Za,merge:Ot};var Uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kt extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uf,this.fragmentShader=Ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Za(e.uniforms),this.uniformsGroups=Lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ah extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new C,Oc=new ve,Bc=new ve;class ln extends Ah{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Oc,Bc),t.subVectors(Bc,Oc)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fs*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*n/c,a*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ma=-90,ga=1;class Nf extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ln(ma,ga,e,t);a.layers=this.layers,this.add(a);const s=new ln(ma,ga,e,t);s.layers=this.layers,this.add(s);const r=new ln(ma,ga,e,t);r.layers=this.layers,this.add(r);const o=new ln(ma,ga,e,t);o.layers=this.layers,this.add(o);const l=new ln(ma,ga,e,t);l.layers=this.layers,this.add(l);const c=new ln(ma,ga,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,l]=t;for(const c of t)this.remove(c);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,o,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,s),e.setRenderTarget(n,1,a),e.render(t,r),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rh extends Vt{constructor(e,t,n,a,s,r,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xa,super(e,t,n,a,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Of extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Rh(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ds(5,5,5),s=new Kt({name:"CubemapFromEquirect",uniforms:Za(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:oi});s.uniforms.tEquirect.value=t;const r=new Tt(a,s),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=ot),new Nf(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,a){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}}class Yl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ee(e),this.near=t,this.far=n}clone(){return new Yl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Bf extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zf{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ml,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new C;class Rr{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ch extends vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let va;const cs=new C,_a=new C,xa=new C,ya=new ve,us=new ve,Ph=new lt,er=new C,hs=new C,tr=new C,zc=new ve,po=new ve,kc=new ve;class kf extends yt{constructor(e=new Ch){if(super(),this.isSprite=!0,this.type="Sprite",va===void 0){va=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zf(t,5);va.setIndex([0,1,2,0,2,3]),va.setAttribute("position",new Rr(n,3,0,!1)),va.setAttribute("uv",new Rr(n,2,3,!1))}this.geometry=va,this.material=e,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_a.setFromMatrixScale(this.matrixWorld),Ph.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),xa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_a.multiplyScalar(-xa.z);const n=this.material.rotation;let a,s;n!==0&&(s=Math.cos(n),a=Math.sin(n));const r=this.center;nr(er.set(-.5,-.5,0),xa,r,_a,a,s),nr(hs.set(.5,-.5,0),xa,r,_a,a,s),nr(tr.set(.5,.5,0),xa,r,_a,a,s),zc.set(0,0),po.set(1,0),kc.set(1,1);let o=e.ray.intersectTriangle(er,hs,tr,!1,cs);if(o===null&&(nr(hs.set(-.5,.5,0),xa,r,_a,a,s),po.set(0,1),o=e.ray.intersectTriangle(er,tr,hs,!1,cs),o===null))return;const l=e.ray.origin.distanceTo(cs);l<e.near||l>e.far||t.push({distance:l,point:cs.clone(),uv:hn.getInterpolation(cs,er,hs,tr,zc,po,kc,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nr(i,e,t,n,a,s){ya.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(us.x=s*ya.x-a*ya.y,us.y=a*ya.x+s*ya.y):us.copy(ya),i.copy(e),i.x+=us.x,i.y+=us.y,i.applyMatrix4(Ph)}class _i extends Vt{constructor(e=null,t=1,n=1,a,s,r,o,l,c=St,u=St,h,f){super(null,r,o,l,c,u,a,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vc extends Ht{constructor(e,t,n,a=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const mo=new C,Vf=new C,Hf=new Ce;class Ai{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=mo.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(mo),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/a;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hf.getNormalMatrix(e),a=this.coplanarPoint(mo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Fr,ir=new C;class Kl{constructor(e=new Ai,t=new Ai,n=new Ai,a=new Ai,s=new Ai,r=new Ai){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,a=e.elements,s=a[0],r=a[1],o=a[2],l=a[3],c=a[4],u=a[5],h=a[6],f=a[7],m=a[8],g=a[9],_=a[10],p=a[11],d=a[12],x=a[13],y=a[14],v=a[15];if(n[0].setComponents(l-s,f-c,p-m,v-d).normalize(),n[1].setComponents(l+s,f+c,p+m,v+d).normalize(),n[2].setComponents(l+r,f+u,p+g,v+x).normalize(),n[3].setComponents(l-r,f-u,p-g,v-x).normalize(),n[4].setComponents(l-o,f-h,p-_,v-y).normalize(),t===Vn)n[5].setComponents(l+o,f+h,p+_,v+y).normalize();else if(t===wr)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(ir.x=a.normal.x>0?e.max.x:e.min.x,ir.y=a.normal.y>0?e.max.y:e.min.y,ir.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ir)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Dh extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hc=new lt,Sl=new Wl,ar=new Fr,sr=new C;class Gf extends yt{constructor(e=new jt,t=new Dh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(a),ar.radius+=s,e.ray.intersectsSphere(ar)===!1)return;Hc.copy(a).invert(),Sl.copy(e.ray).applyMatrix4(Hc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,r.start),m=Math.min(c.count,r.start+r.count);for(let g=f,_=m;g<_;g++){const p=c.getX(g);sr.fromBufferAttribute(h,p),Gc(sr,p,l,a,e,t,this)}}else{const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let g=f,_=m;g<_;g++)sr.fromBufferAttribute(h,g),Gc(sr,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){const o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Gc(i,e,t,n,a,s,r){const o=Sl.distanceSqToPoint(i);if(o<t){const l=new C;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Ta extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Lh extends Vt{constructor(e,t,n,a,s,r,o,l,c,u=Da){if(u!==Da&&u!==Ka)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Da&&(n=Xi),n===void 0&&u===Ka&&(n=Ya),super(null,a,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jl extends jt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const s=[],r=[];o(a),c(n),u(),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(s.slice(),3)),this.setAttribute("uv",new It(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new C,v=new C,w=new C;for(let T=0;T<t.length;T+=3)m(t[T+0],y),m(t[T+1],v),m(t[T+2],w),l(y,v,w,x)}function l(x,y,v,w){const T=w+1,A=[];for(let D=0;D<=T;D++){A[D]=[];const E=x.clone().lerp(v,D/T),S=y.clone().lerp(v,D/T),P=T-D;for(let B=0;B<=P;B++)B===0&&D===T?A[D][B]=E:A[D][B]=E.clone().lerp(S,B/P)}for(let D=0;D<T;D++)for(let E=0;E<2*(T-D)-1;E++){const S=Math.floor(E/2);E%2===0?(f(A[D][S+1]),f(A[D+1][S]),f(A[D][S])):(f(A[D][S+1]),f(A[D+1][S+1]),f(A[D+1][S]))}}function c(x){const y=new C;for(let v=0;v<s.length;v+=3)y.x=s[v+0],y.y=s[v+1],y.z=s[v+2],y.normalize().multiplyScalar(x),s[v+0]=y.x,s[v+1]=y.y,s[v+2]=y.z}function u(){const x=new C;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const v=p(x)/2/Math.PI+.5,w=d(x)/Math.PI+.5;r.push(v,1-w)}g(),h()}function h(){for(let x=0;x<r.length;x+=6){const y=r[x+0],v=r[x+2],w=r[x+4],T=Math.max(y,v,w),A=Math.min(y,v,w);T>.9&&A<.1&&(y<.2&&(r[x+0]+=1),v<.2&&(r[x+2]+=1),w<.2&&(r[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function m(x,y){const v=x*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){const x=new C,y=new C,v=new C,w=new C,T=new ve,A=new ve,D=new ve;for(let E=0,S=0;E<s.length;E+=9,S+=6){x.set(s[E+0],s[E+1],s[E+2]),y.set(s[E+3],s[E+4],s[E+5]),v.set(s[E+6],s[E+7],s[E+8]),T.set(r[S+0],r[S+1]),A.set(r[S+2],r[S+3]),D.set(r[S+4],r[S+5]),w.copy(x).add(y).add(v).divideScalar(3);const P=p(w);_(T,S+0,x,P),_(A,S+2,y,P),_(D,S+4,v,P)}}function _(x,y,v,w){w<0&&x.x===1&&(r[y]=x.x-1),v.x===0&&v.z===0&&(r[y]=w/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function d(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.vertices,e.indices,e.radius,e.details)}}class mi extends jl{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new mi(e.radius,e.detail)}}class Ls extends jt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,u=l+1,h=e/o,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const x=d*f-r;for(let y=0;y<c;y++){const v=y*h-s;g.push(v,-x,0),_.push(0,0,1),p.push(y/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<o;x++){const y=x+c*d,v=x+c*(d+1),w=x+1+c*(d+1),T=x+1+c*d;m.push(y,v,T),m.push(v,w,T)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zl extends jt{constructor(e=.5,t=1,n=32,a=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:a,thetaStart:s,thetaLength:r},n=Math.max(3,n),a=Math.max(1,a);const o=[],l=[],c=[],u=[];let h=e;const f=(t-e)/a,m=new C,g=new ve;for(let _=0;_<=a;_++){for(let p=0;p<=n;p++){const d=s+p/n*r;m.x=h*Math.cos(d),m.y=h*Math.sin(d),l.push(m.x,m.y,m.z),c.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=f}for(let _=0;_<a;_++){const p=_*(n+1);for(let d=0;d<n;d++){const x=d+p,y=x,v=x+n+1,w=x+n+2,T=x+1;o.push(y,v,T),o.push(v,w,T)}}this.setIndex(o),this.setAttribute("position",new It(l,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class $l extends jt{constructor(e=1,t=32,n=16,a=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:s,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],h=new C,f=new C,m=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const x=[],y=d/n;let v=0;d===0&&r===0?v=.5/t:d===n&&l===Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const T=w/t;h.x=-e*Math.cos(a+T*s)*Math.sin(r+y*o),h.y=e*Math.cos(r+y*o),h.z=e*Math.sin(a+T*s)*Math.sin(r+y*o),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),p.push(T+v,1-y),x.push(c++)}u.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const y=u[d][x+1],v=u[d][x],w=u[d+1][x],T=u[d+1][x+1];(d!==0||r>0)&&m.push(y,v,T),(d!==n-1||l<Math.PI)&&m.push(v,w,T)}this.setIndex(m),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(_,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wf extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xf extends vi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ee(16777215),this.specular=new Ee(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hl,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Fl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qf extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yf extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ih extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kf extends Ih{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ee(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const go=new lt,Wc=new C,Xc=new C;class jf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kl,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Wc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wc),Xc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xc),t.updateMatrixWorld(),go.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(go),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(go)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Uh extends Ah{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let s=n-e,r=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zf extends jf{constructor(){super(new Uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $f extends Ih{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Zf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jf extends jt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Qf extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ep{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=qc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function qc(){return performance.now()}const Yc=new lt;class El{constructor(e,t,n=0,a=1/0){this.ray=new Wl(e,t),this.near=n,this.far=a,this.camera=null,this.layers=new Xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yc),this}intersectObject(e,t=!0,n=[]){return bl(e,this,n,t),n.sort(Kc),n}intersectObjects(e,t=!0,n=[]){for(let a=0,s=e.length;a<s;a++)bl(e[a],this,n,t);return n.sort(Kc),n}}function Kc(i,e){return i.distance-e.distance}function bl(i,e,t,n){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)bl(s[r],e,t,!0)}}class tp extends na{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function jc(i,e,t,n){const a=np(n);switch(t){case dh:return i*e;case ph:return i*e;case mh:return i*e*2;case gh:return i*e/a.components*a.byteLength;case zl:return i*e/a.components*a.byteLength;case vh:return i*e*2/a.components*a.byteLength;case kl:return i*e*2/a.components*a.byteLength;case fh:return i*e*3/a.components*a.byteLength;case Mt:return i*e*4/a.components*a.byteLength;case Vl:return i*e*4/a.components*a.byteLength;case gr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case Jo:return Math.max(i,16)*Math.max(e,8)/4;case jo:case $o:return Math.max(i,8)*Math.max(e,8)/2;case Qo:case el:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case al:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ml:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yr:case gl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case _h:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case xl:case yl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function np(i){switch(i){case Rt:case ch:return{byteLength:1,components:1};case Es:case uh:case Cs:return{byteLength:2,components:1};case Ol:case Bl:return{byteLength:2,components:4};case Xi:case Nl:case kn:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ul}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ul);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fh(){let i=null,e=!1,t=null,n=null;function a(s,r){t(s,r),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ip(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sp=`#ifdef USE_ALPHAHASH
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
#endif`,rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,up=`#ifdef USE_AOMAP
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
#endif`,hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vp=`#ifdef USE_IRIDESCENCE
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
#endif`,_p=`#ifdef USE_BUMPMAP
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ep=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ap=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Rp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cp=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Up="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,zp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xp=`#ifdef USE_GRADIENTMAP
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
}`,qp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Zp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$p=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,nm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,im=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,am=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,um=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,pm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,ym=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Om=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,km=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Hm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wm=`#ifdef USE_SKINNING
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
#endif`,Xm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qm=`#ifdef USE_SKINNING
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
#endif`,Ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$m=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jm=`#ifdef USE_TRANSMISSION
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const i0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a0=`uniform sampler2D t2D;
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c0=`#include <common>
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
}`,u0=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h0=`#define DISTANCE
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
}`,d0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,f0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,p0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`uniform float scale;
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
}`,g0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,_0=`uniform vec3 diffuse;
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
}`,x0=`#define LAMBERT
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
}`,y0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,M0=`#define MATCAP
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
}`,S0=`#define MATCAP
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
}`,E0=`#define NORMAL
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
}`,b0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w0=`#define PHONG
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
}`,T0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,A0=`#define STANDARD
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
}`,R0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,C0=`#define TOON
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
}`,P0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,D0=`uniform float size;
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
}`,L0=`uniform vec3 diffuse;
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
}`,I0=`#include <common>
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
}`,U0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,F0=`uniform float rotation;
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
}`,N0=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:ap,alphahash_pars_fragment:sp,alphamap_fragment:rp,alphamap_pars_fragment:op,alphatest_fragment:lp,alphatest_pars_fragment:cp,aomap_fragment:up,aomap_pars_fragment:hp,batching_pars_vertex:dp,batching_vertex:fp,begin_vertex:pp,beginnormal_vertex:mp,bsdfs:gp,iridescence_fragment:vp,bumpmap_pars_fragment:_p,clipping_planes_fragment:xp,clipping_planes_pars_fragment:yp,clipping_planes_pars_vertex:Mp,clipping_planes_vertex:Sp,color_fragment:Ep,color_pars_fragment:bp,color_pars_vertex:wp,color_vertex:Tp,common:Ap,cube_uv_reflection_fragment:Rp,defaultnormal_vertex:Cp,displacementmap_pars_vertex:Pp,displacementmap_vertex:Dp,emissivemap_fragment:Lp,emissivemap_pars_fragment:Ip,colorspace_fragment:Up,colorspace_pars_fragment:Fp,envmap_fragment:Np,envmap_common_pars_fragment:Op,envmap_pars_fragment:Bp,envmap_pars_vertex:zp,envmap_physical_pars_fragment:Zp,envmap_vertex:kp,fog_vertex:Vp,fog_pars_vertex:Hp,fog_fragment:Gp,fog_pars_fragment:Wp,gradientmap_pars_fragment:Xp,lightmap_pars_fragment:qp,lights_lambert_fragment:Yp,lights_lambert_pars_fragment:Kp,lights_pars_begin:jp,lights_toon_fragment:$p,lights_toon_pars_fragment:Jp,lights_phong_fragment:Qp,lights_phong_pars_fragment:em,lights_physical_fragment:tm,lights_physical_pars_fragment:nm,lights_fragment_begin:im,lights_fragment_maps:am,lights_fragment_end:sm,logdepthbuf_fragment:rm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:lm,logdepthbuf_vertex:cm,map_fragment:um,map_pars_fragment:hm,map_particle_fragment:dm,map_particle_pars_fragment:fm,metalnessmap_fragment:pm,metalnessmap_pars_fragment:mm,morphinstance_vertex:gm,morphcolor_vertex:vm,morphnormal_vertex:_m,morphtarget_pars_vertex:xm,morphtarget_vertex:ym,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:Em,normal_pars_vertex:bm,normal_vertex:wm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:Rm,clearcoat_pars_fragment:Cm,iridescence_pars_fragment:Pm,opaque_fragment:Dm,packing:Lm,premultiplied_alpha_fragment:Im,project_vertex:Um,dithering_fragment:Fm,dithering_pars_fragment:Nm,roughnessmap_fragment:Om,roughnessmap_pars_fragment:Bm,shadowmap_pars_fragment:zm,shadowmap_pars_vertex:km,shadowmap_vertex:Vm,shadowmask_pars_fragment:Hm,skinbase_vertex:Gm,skinning_pars_vertex:Wm,skinning_vertex:Xm,skinnormal_vertex:qm,specularmap_fragment:Ym,specularmap_pars_fragment:Km,tonemapping_fragment:jm,tonemapping_pars_fragment:Zm,transmission_fragment:$m,transmission_pars_fragment:Jm,uv_pars_fragment:Qm,uv_pars_vertex:e0,uv_vertex:t0,worldpos_vertex:n0,background_vert:i0,background_frag:a0,backgroundCube_vert:s0,backgroundCube_frag:r0,cube_vert:o0,cube_frag:l0,depth_vert:c0,depth_frag:u0,distanceRGBA_vert:h0,distanceRGBA_frag:d0,equirect_vert:f0,equirect_frag:p0,linedashed_vert:m0,linedashed_frag:g0,meshbasic_vert:v0,meshbasic_frag:_0,meshlambert_vert:x0,meshlambert_frag:y0,meshmatcap_vert:M0,meshmatcap_frag:S0,meshnormal_vert:E0,meshnormal_frag:b0,meshphong_vert:w0,meshphong_frag:T0,meshphysical_vert:A0,meshphysical_frag:R0,meshtoon_vert:C0,meshtoon_frag:P0,points_vert:D0,points_frag:L0,shadow_vert:I0,shadow_frag:U0,sprite_vert:F0,sprite_frag:N0},ne={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},envMapRotation:{value:new Ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},Rn={basic:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Ot([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Ot([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ee(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Ot([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Ot([ne.points,ne.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Ot([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Ot([ne.common,ne.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Ot([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Ot([ne.sprite,ne.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ce}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Ot([ne.common,ne.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Ot([ne.lights,ne.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};Rn.physical={uniforms:Ot([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const rr={r:0,b:0,g:0},wi=new wn,O0=new lt;function B0(i,e,t,n,a,s,r){const o=new Ee(0);let l=s===!0?0:1,c,u,h=null,f=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?t:e).get(v)),v}function _(y){let v=!1;const w=g(y);w===null?d(o,l):w&&w.isColor&&(d(w,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(y,v){const w=g(v);w&&(w.isCubeTexture||w.mapping===Ur)?(u===void 0&&(u=new Tt(new Ds(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:Za(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,A,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),wi.copy(v.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(O0.makeRotationFromEuler(wi)),u.material.toneMapped=Ye.getTransfer(w.colorSpace)!==st,(h!==w||f!==w.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,m=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Tt(new Ls(2,2),new Kt({name:"BackgroundMaterial",uniforms:Za(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(w.colorSpace)!==st,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,m=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function d(y,v){y.getRGB(rr,Th(i)),n.buffers.color.setClear(rr.r,rr.g,rr.b,v,r)}function x(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,d(o,l)},render:_,addToRenderList:p,dispose:x}}function z0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let s=a,r=!1;function o(S,P,B,N,W){let q=!1;const G=h(N,B,P);s!==G&&(s=G,c(s.object)),q=m(S,N,B,W),q&&g(S,N,B,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),(q||r)&&(r=!1,v(S,P,B,N),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,P,B){const N=B.wireframe===!0;let W=n[S.id];W===void 0&&(W={},n[S.id]=W);let q=W[P.id];q===void 0&&(q={},W[P.id]=q);let G=q[N];return G===void 0&&(G=f(l()),q[N]=G),G}function f(S){const P=[],B=[],N=[];for(let W=0;W<t;W++)P[W]=0,B[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:N,object:S,attributes:{},index:null}}function m(S,P,B,N){const W=s.attributes,q=P.attributes;let G=0;const K=B.getAttributes();for(const V in K)if(K[V].location>=0){const ce=W[V];let _e=q[V];if(_e===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),ce===void 0||ce.attribute!==_e||_e&&ce.data!==_e.data)return!0;G++}return s.attributesNum!==G||s.index!==N}function g(S,P,B,N){const W={},q=P.attributes;let G=0;const K=B.getAttributes();for(const V in K)if(K[V].location>=0){let ce=q[V];ce===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor));const _e={};_e.attribute=ce,ce&&ce.data&&(_e.data=ce.data),W[V]=_e,G++}s.attributes=W,s.attributesNum=G,s.index=N}function _(){const S=s.newAttributes;for(let P=0,B=S.length;P<B;P++)S[P]=0}function p(S){d(S,0)}function d(S,P){const B=s.newAttributes,N=s.enabledAttributes,W=s.attributeDivisors;B[S]=1,N[S]===0&&(i.enableVertexAttribArray(S),N[S]=1),W[S]!==P&&(i.vertexAttribDivisor(S,P),W[S]=P)}function x(){const S=s.newAttributes,P=s.enabledAttributes;for(let B=0,N=P.length;B<N;B++)P[B]!==S[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function y(S,P,B,N,W,q,G){G===!0?i.vertexAttribIPointer(S,P,B,W,q):i.vertexAttribPointer(S,P,B,N,W,q)}function v(S,P,B,N){_();const W=N.attributes,q=B.getAttributes(),G=P.defaultAttributeValues;for(const K in q){const V=q[K];if(V.location>=0){let ee=W[K];if(ee===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const ce=ee.normalized,_e=ee.itemSize,Fe=e.get(ee);if(Fe===void 0)continue;const Je=Fe.buffer,Y=Fe.type,te=Fe.bytesPerElement,me=Y===i.INT||Y===i.UNSIGNED_INT||ee.gpuType===Nl;if(ee.isInterleavedBufferAttribute){const se=ee.data,Re=se.stride,Ie=ee.offset;if(se.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)d(V.location+Be,se.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Be=0;Be<V.locationSize;Be++)p(V.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let Be=0;Be<V.locationSize;Be++)y(V.location+Be,_e/V.locationSize,Y,ce,Re*te,(Ie+_e/V.locationSize*Be)*te,me)}else{if(ee.isInstancedBufferAttribute){for(let se=0;se<V.locationSize;se++)d(V.location+se,ee.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let se=0;se<V.locationSize;se++)p(V.location+se);i.bindBuffer(i.ARRAY_BUFFER,Je);for(let se=0;se<V.locationSize;se++)y(V.location+se,_e/V.locationSize,Y,ce,_e*te,_e/V.locationSize*se*te,me)}}else if(G!==void 0){const ce=G[K];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(V.location,ce);break;case 3:i.vertexAttrib3fv(V.location,ce);break;case 4:i.vertexAttrib4fv(V.location,ce);break;default:i.vertexAttrib1fv(V.location,ce)}}}}x()}function w(){D();for(const S in n){const P=n[S];for(const B in P){const N=P[B];for(const W in N)u(N[W].object),delete N[W];delete P[B]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const B in P){const N=P[B];for(const W in N)u(N[W].object),delete N[W];delete P[B]}delete n[S.id]}function A(S){for(const P in n){const B=n[P];if(B[S.id]===void 0)continue;const N=B[S.id];for(const W in N)u(N[W].object),delete N[W];delete B[S.id]}}function D(){E(),r=!0,s!==a&&(s=a,c(s.object))}function E(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:D,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function k0(i,e,t){let n;function a(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function r(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)r(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function V0(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(A){return!(A!==Mt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const D=A===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Rt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==kn&&!D)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:w,maxSamples:T}}function H0(i){const e=this;let t=null,n=0,a=!1,s=!1;const r=new Ai,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||a;return a=f,n=h.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!a||g===null||g.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,y=x*4;let v=d.clippingState||null;l.value=v,v=u(g,f,y,m);for(let w=0;w!==y;++w)v[w]=t[w];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,v=m;y!==_;++y,v+=4)r.copy(h[y]).applyMatrix4(x,o),r.normal.toArray(p,v),p[v+3]=r.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function G0(i){let e=new WeakMap;function t(r,o){return o===qo?r.mapping=Xa:o===Yo&&(r.mapping=qa),r}function n(r){if(r&&r.isTexture){const o=r.mapping;if(o===qo||o===Yo)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Of(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Aa=4,Zc=[.125,.215,.35,.446,.526,.582],Di=20,vo=new Uh,$c=new Ee;let _o=null,xo=0,yo=0,Mo=!1;const Ri=(1+Math.sqrt(5))/2,Ma=1/Ri,Jc=[new C(-Ri,Ma,0),new C(Ri,Ma,0),new C(-Ma,0,Ri),new C(Ma,0,Ri),new C(0,Ri,-Ma),new C(0,Ri,Ma),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100){_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,a,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=nu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_o,xo,yo),this._renderer.xr.enabled=Mo,e.scissorTest=!1,or(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xa||e.mapping===qa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_o=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),yo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ot,minFilter:ot,generateMipmaps:!1,type:Cs,format:Mt,colorSpace:ja,depthBuffer:!1},a=eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=eu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=W0(s)),this._blurMaterial=X0(s,e,t)}return a}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,vo)}_sceneToCubeUV(e,t,n,a){const o=new ln(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor($c),u.toneMapping=li,u.autoClear=!1;const m=new ql({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1}),g=new Tt(new Ds,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy($c),_=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):x===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;or(a,x*y,d>2?y:0,y,y),u.setRenderTarget(a),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Xa||e.mapping===qa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=nu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tu());const s=a?this._cubemapMaterial:this._equirectMaterial,r=new Tt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;or(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,vo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let s=1;s<a;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Jc[(a-s-1)%Jc.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,a,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,a,"latitudinal",s),this._halfBlur(r,e,n,n,a,"longitudinal",s)}_halfBlur(e,t,n,a,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Tt(this._lodPlanes[a],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Di-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Di;p>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const d=[];let x=0;for(let A=0;A<Di;++A){const D=A/_,E=Math.exp(-D*D/2);d.push(E),A===0?x+=E:A<p&&(x+=2*E)}for(let A=0;A<d.length;A++)d[A]=d[A]/x;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[a],w=3*v*(a>y-Aa?a-y+Aa:0),T=4*(this._cubeSize-v);or(t,w,T,3*v,2*v),l.setRenderTarget(t),l.render(h,vo)}}function W0(i){const e=[],t=[],n=[];let a=i;const s=i-Aa+1+Zc.length;for(let r=0;r<s;r++){const o=Math.pow(2,a);t.push(o);let l=1/o;r>i-Aa?l=Zc[r-i+Aa-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,x=new Float32Array(_*g*m),y=new Float32Array(p*g*m),v=new Float32Array(d*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,D=T>2?0:-1,E=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];x.set(E,_*g*T),y.set(f,p*g*T);const S=[T,T,T,T,T,T];v.set(S,d*g*T)}const w=new jt;w.setAttribute("position",new Ht(x,_)),w.setAttribute("uv",new Ht(y,p)),w.setAttribute("faceIndex",new Ht(v,d)),e.push(w),a>Aa&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function eu(i,e,t){const n=new qi(i,e,t);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function or(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function X0(i,e,t){const n=new Float32Array(Di),a=new C(0,1,0);return new Kt({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function tu(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function nu(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function q0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qo||l===Yo,u=l===Xa||l===qa;if(c||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Qc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&a(m)?(t===null&&(t=new Qc(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function a(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function Y0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&ba("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function K0(i,e,t,n){const a={},s=new WeakMap;function r(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete a[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let y=0,v=x.length;y<v;y+=3){const w=x[y+0],T=x[y+1],A=x[y+2];f.push(w,T,T,A,A,w)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const w=y+0,T=y+1,A=y+2;f.push(w,T,T,A,A,w)}}else return;const p=new(yh(f)?wh:bh)(f,1);p.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,p)}function u(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function j0(i,e,t){let n;function a(f){n=f}let s,r;function o(f){s=f.type,r=f.bytesPerElement}function l(f,m){i.drawElements(n,m,s,f*r),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,f*r,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function h(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/r,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,_,0,g);let d=0;for(let x=0;x<g;x++)d+=m[x]*_[x];t.update(d,n,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Z0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function $0(i,e,t){const n=new WeakMap,a=new pt;function s(r,o,l){const c=r.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var m=S;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let w=o.attributes.position.count*v,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const A=new Float32Array(w*T*4*h),D=new Sh(A,w,T,h);D.type=kn,D.needsUpdate=!0;const E=v*4;for(let P=0;P<h;P++){const B=d[P],N=x[P],W=y[P],q=w*T*4*P;for(let G=0;G<B.count;G++){const K=G*E;g===!0&&(a.fromBufferAttribute(B,G),A[q+K+0]=a.x,A[q+K+1]=a.y,A[q+K+2]=a.z,A[q+K+3]=0),_===!0&&(a.fromBufferAttribute(N,G),A[q+K+4]=a.x,A[q+K+5]=a.y,A[q+K+6]=a.z,A[q+K+7]=0),p===!0&&(a.fromBufferAttribute(W,G),A[q+K+8]=a.x,A[q+K+9]=a.y,A[q+K+10]=a.z,A[q+K+11]=W.itemSize===4?a.w:1)}}f={count:h,texture:D,size:new ve(w,T)},n.set(o,f),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function J0(i,e,t,n){let a=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(a.get(h)!==c&&(e.update(h),a.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return h}function r(){a=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const Nh=new Vt,iu=new Lh(1,1),Oh=new Sh,Bh=new Mf,zh=new Rh,au=[],su=[],ru=new Float32Array(16),ou=new Float32Array(9),lu=new Float32Array(4);function ns(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let s=au[a];if(s===void 0&&(s=new Float32Array(a),au[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Nr(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function eg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function tg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function ng(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function ig(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),bt(t,n)}}function ag(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;ou.set(n),i.uniformMatrix3fv(this.addr,!1,ou),bt(t,n)}}function sg(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(Et(t,n))return;ru.set(n),i.uniformMatrix4fv(this.addr,!1,ru),bt(t,n)}}function rg(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function og(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function lg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function cg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function ug(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function dg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function fg(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function pg(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(iu.compareFunction=xh,s=iu):s=Nh,t.setTexture2D(e||s,a)}function mg(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Bh,a)}function gg(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||zh,a)}function vg(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Oh,a)}function _g(i){switch(i){case 5126:return Q0;case 35664:return eg;case 35665:return tg;case 35666:return ng;case 35674:return ig;case 35675:return ag;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return ug;case 36294:return hg;case 36295:return dg;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return pg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return vg}}function xg(i,e){i.uniform1fv(this.addr,e)}function yg(i,e){const t=ns(e,this.size,2);i.uniform2fv(this.addr,t)}function Mg(i,e){const t=ns(e,this.size,3);i.uniform3fv(this.addr,t)}function Sg(i,e){const t=ns(e,this.size,4);i.uniform4fv(this.addr,t)}function Eg(i,e){const t=ns(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bg(i,e){const t=ns(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wg(i,e){const t=ns(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Tg(i,e){i.uniform1iv(this.addr,e)}function Ag(i,e){i.uniform2iv(this.addr,e)}function Rg(i,e){i.uniform3iv(this.addr,e)}function Cg(i,e){i.uniform4iv(this.addr,e)}function Pg(i,e){i.uniform1uiv(this.addr,e)}function Dg(i,e){i.uniform2uiv(this.addr,e)}function Lg(i,e){i.uniform3uiv(this.addr,e)}function Ig(i,e){i.uniform4uiv(this.addr,e)}function Ug(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Et(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Nh,s[r])}function Fg(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Et(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Bh,s[r])}function Ng(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Et(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||zh,s[r])}function Og(i,e,t){const n=this.cache,a=e.length,s=Nr(t,a);Et(n,s)||(i.uniform1iv(this.addr,s),bt(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||Oh,s[r])}function Bg(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return Mg;case 35666:return Sg;case 35674:return Eg;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Tg;case 35667:case 35671:return Ag;case 35668:case 35672:return Rg;case 35669:case 35673:return Cg;case 5125:return Pg;case 36294:return Dg;case 36295:return Lg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return Ug;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Ng;case 36289:case 36303:case 36311:case 36292:return Og}}class zg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_g(t.type)}}class kg{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bg(t.type)}}class Vg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let s=0,r=a.length;s!==r;++s){const o=a[s];o.setValue(e,t[o.id],n)}}}const So=/(\w+)(\])?(\[|\.)?/g;function cu(i,e){i.seq.push(e),i.map[e.id]=e}function Hg(i,e,t){const n=i.name,a=n.length;for(So.lastIndex=0;;){const s=So.exec(n),r=So.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){cu(t,c===void 0?new zg(o,i,e):new kg(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Vg(o),cu(t,h)),t=h}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const s=e.getActiveUniform(t,a),r=e.getUniformLocation(t,s.name);Hg(s,r,this)}}setValue(e,t,n,a){const s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,s=e.length;a!==s;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gg=37297;let Wg=0;function Xg(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){const o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}const hu=new Ce;function qg(i){Ye._getMatrix(hu,Ye.workingColorSpace,i);const e=`mat3( ${hu.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(i)){case br:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function du(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=i.getShaderInfoLog(e).trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Xg(i.getShaderSource(e),r)}else return a}function Yg(i,e){const t=qg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Kg(i,e){let t;switch(e){case Dd:t="Linear";break;case Ld:t="Reinhard";break;case Id:t="Cineon";break;case Ud:t="ACESFilmic";break;case Nd:t="AgX";break;case Od:t="Neutral";break;case Fd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lr=new C;function jg(){Ye.getLuminanceCoefficients(lr);const i=lr.x.toFixed(4),e=lr.y.toFixed(4),t=lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function $g(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const s=i.getActiveAttrib(e,a),r=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function ds(i){return i!==""}function fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(Qg,tv)}const ev=new Map;function tv(i,e){let t=Oe[e];if(t===void 0){const n=ev.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const nv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(i){return i.replace(nv,iv)}function iv(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function gu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function av(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function sv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xa:case qa:e="ENVMAP_TYPE_CUBE";break;case Ur:e="ENVMAP_TYPE_CUBE_UV";break}return e}function rv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case qa:e="ENVMAP_MODE_REFRACTION";break}return e}function ov(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Fl:e="ENVMAP_BLENDING_MULTIPLY";break;case Cd:e="ENVMAP_BLENDING_MIX";break;case Pd:e="ENVMAP_BLENDING_ADD";break}return e}function lv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cv(i,e,t,n){const a=i.getContext(),s=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=av(t),c=sv(t),u=rv(t),h=ov(t),f=lv(t),m=Zg(t),g=$g(s),_=a.createProgram();let p,d,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),d.length>0&&(d+=`
`)):(p=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),d=[gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Oe.tonemapping_pars_fragment:"",t.toneMapping!==li?Kg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,Yg("linearToOutputTexel",t.outputColorSpace),jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),r=wl(r),r=fu(r,t),r=pu(r,t),o=wl(o),o=fu(o,t),o=pu(o,t),r=mu(r),o=mu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=x+p+r,v=x+d+o,w=uu(a,a.VERTEX_SHADER,y),T=uu(a,a.FRAGMENT_SHADER,v);a.attachShader(_,w),a.attachShader(_,T),t.index0AttributeName!==void 0?a.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function A(P){if(i.debug.checkShaderErrors){const B=a.getProgramInfoLog(_).trim(),N=a.getShaderInfoLog(w).trim(),W=a.getShaderInfoLog(T).trim();let q=!0,G=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,_,w,T);else{const K=du(a,w,"vertex"),V=du(a,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+K+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(N===""||W==="")&&(G=!1);G&&(P.diagnostics={runnable:q,programLog:B,vertexShader:{log:N,prefix:p},fragmentShader:{log:W,prefix:d}})}a.deleteShader(w),a.deleteShader(T),D=new Mr(a,_),E=Jg(a,_)}let D;this.getUniforms=function(){return D===void 0&&A(this),D};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(_,Gg)),S},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let uv=0;class hv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dv(e),t.set(e,n)),n}}class dv{constructor(e){this.id=uv++,this.code=e,this.usedTimes=0}}function fv(i,e,t,n,a,s,r){const o=new Xl,l=new hv,c=new Set,u=[],h=a.logarithmicDepthBuffer,f=a.vertexTextures;let m=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,S,P,B,N){const W=B.fog,q=N.geometry,G=E.isMeshStandardMaterial?B.environment:null,K=(E.isMeshStandardMaterial?t:e).get(E.envMap||G),V=K&&K.mapping===Ur?K.image.height:null,ee=g[E.type];E.precision!==null&&(m=a.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const ce=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_e=ce!==void 0?ce.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let Je,Y,te,me;if(ee){const Qe=Rn[ee];Je=Qe.vertexShader,Y=Qe.fragmentShader}else Je=E.vertexShader,Y=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),me=l.getFragmentShaderID(E);const se=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),Ie=N.isInstancedMesh===!0,Be=N.isBatchedMesh===!0,ht=!!E.map,Ge=!!E.matcap,mt=!!K,L=!!E.aoMap,nn=!!E.lightMap,ke=!!E.bumpMap,Ve=!!E.normalMap,xe=!!E.displacementMap,ct=!!E.emissiveMap,ye=!!E.metalnessMap,R=!!E.roughnessMap,M=E.anisotropy>0,O=E.clearcoat>0,j=E.dispersion>0,$=E.iridescence>0,X=E.sheen>0,ge=E.transmission>0,re=M&&!!E.anisotropyMap,he=O&&!!E.clearcoatMap,We=O&&!!E.clearcoatNormalMap,Q=O&&!!E.clearcoatRoughnessMap,de=$&&!!E.iridescenceMap,we=$&&!!E.iridescenceThicknessMap,Pe=X&&!!E.sheenColorMap,fe=X&&!!E.sheenRoughnessMap,He=!!E.specularMap,Ne=!!E.specularColorMap,rt=!!E.specularIntensityMap,I=ge&&!!E.transmissionMap,ie=ge&&!!E.thicknessMap,H=!!E.gradientMap,Z=!!E.alphaMap,le=E.alphaTest>0,oe=!!E.alphaHash,Ue=!!E.extensions;let dt=li;E.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(dt=i.toneMapping);const Ct={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:Je,fragmentShader:Y,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:Be,batchingColor:Be&&N._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&N.instanceColor!==null,instancingMorph:Ie&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ja,alphaToCoverage:!!E.alphaToCoverage,map:ht,matcap:Ge,envMap:mt,envMapMode:mt&&K.mapping,envMapCubeUVHeight:V,aoMap:L,lightMap:nn,bumpMap:ke,normalMap:Ve,displacementMap:f&&xe,emissiveMap:ct,normalMapObjectSpace:Ve&&E.normalMapType===Vd,normalMapTangentSpace:Ve&&E.normalMapType===Hl,metalnessMap:ye,roughnessMap:R,anisotropy:M,anisotropyMap:re,clearcoat:O,clearcoatMap:he,clearcoatNormalMap:We,clearcoatRoughnessMap:Q,dispersion:j,iridescence:$,iridescenceMap:de,iridescenceThicknessMap:we,sheen:X,sheenColorMap:Pe,sheenRoughnessMap:fe,specularMap:He,specularColorMap:Ne,specularIntensityMap:rt,transmission:ge,transmissionMap:I,thicknessMap:ie,gradientMap:H,opaque:E.transparent===!1&&E.blending===Sn&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:oe,combine:E.combine,mapUv:ht&&_(E.map.channel),aoMapUv:L&&_(E.aoMap.channel),lightMapUv:nn&&_(E.lightMap.channel),bumpMapUv:ke&&_(E.bumpMap.channel),normalMapUv:Ve&&_(E.normalMap.channel),displacementMapUv:xe&&_(E.displacementMap.channel),emissiveMapUv:ct&&_(E.emissiveMap.channel),metalnessMapUv:ye&&_(E.metalnessMap.channel),roughnessMapUv:R&&_(E.roughnessMap.channel),anisotropyMapUv:re&&_(E.anisotropyMap.channel),clearcoatMapUv:he&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:We&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:fe&&_(E.sheenRoughnessMap.channel),specularMapUv:He&&_(E.specularMap.channel),specularColorMapUv:Ne&&_(E.specularColorMap.channel),specularIntensityMapUv:rt&&_(E.specularIntensityMap.channel),transmissionMapUv:I&&_(E.transmissionMap.channel),thicknessMapUv:ie&&_(E.thicknessMap.channel),alphaMapUv:Z&&_(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ve||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!q.attributes.uv&&(ht||Z),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:N.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Fe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:ht&&E.map.isVideoTexture===!0&&Ye.getTransfer(E.map.colorSpace)===st,decodeVideoTextureEmissive:ct&&E.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(E.emissiveMap.colorSpace)===st,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===un,flipSided:E.side===kt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ue&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&E.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function d(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const P in E.defines)S.push(P),S.push(E.defines[P]);return E.isRawShaderMaterial===!1&&(x(S,E),y(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function x(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function y(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const S=g[E.type];let P;if(S){const B=Rn[S];P=If.clone(B.uniforms)}else P=E.uniforms;return P}function w(E,S){let P;for(let B=0,N=u.length;B<N;B++){const W=u[B];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new cv(i,S,E,s),u.push(P)),P}function T(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function A(E){l.remove(E)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:w,releaseProgram:T,releaseShaderCache:A,programs:u,dispose:D}}function pv(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,l){i.get(r)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function mv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function vu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _u(){const i=[];let e=0;const t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(h,f,m,g,_,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function o(h,f,m,g,_,p){const d=r(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?a.push(d):t.push(d)}function l(h,f,m,g,_,p){const d=r(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?a.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||mv),n.length>1&&n.sort(f||vu),a.length>1&&a.sort(f||vu)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:o,unshift:l,finish:u,sort:c}}function gv(){let i=new WeakMap;function e(n,a){const s=i.get(n);let r;return s===void 0?(r=new _u,i.set(n,[r])):a>=s.length?(r=new _u,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function vv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ee};break;case"SpotLight":t={position:new C,direction:new C,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function _v(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xv=0;function yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Mv(i){const e=new vv,t=_v(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const a=new C,s=new lt,r=new lt;function o(c){let u=0,h=0,f=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,x=0,y=0,v=0,w=0,T=0,A=0;c.sort(yv);for(let E=0,S=c.length;E<S;E++){const P=c[E],B=P.color,N=P.intensity,W=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=B.r*N,h+=B.g*N,f+=B.b*N;else if(P.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(P.sh.coefficients[G],N);A++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,V=t.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=P.shadow.matrix,x++}n.directional[m]=G,m++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(B).multiplyScalar(N),G.distance=W,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,n.spot[_]=G;const K=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=q,v++}_++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(B).multiplyScalar(N),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=G,p++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const K=P.shadow,V=t.get(P);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(N),G.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[d]=G,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const D=n.hash;(D.directionalLength!==m||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==p||D.hemiLength!==d||D.numDirectionalShadows!==x||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==w||D.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+w-T,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,D.directionalLength=m,D.pointLength=g,D.spotLength=_,D.rectAreaLength=p,D.hemiLength=d,D.numDirectionalShadows=x,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=w,D.numLightProbes=A,n.version=xv++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,x=c.length;d<x;d++){const y=c[d];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(p),h++}else if(y.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),a.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(a),v.direction.transformDirection(p),m++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),r.identity(),s.copy(y.matrixWorld),s.premultiply(p),r.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function xu(i){const e=new Mv(i),t=[],n=[];function a(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function r(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:r}}function Sv(i){let e=new WeakMap;function t(a,s=0){const r=e.get(a);let o;return r===void 0?(o=new xu(i),e.set(a,[o])):s>=r.length?(o=new xu(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wv(i,e,t){let n=new Kl;const a=new ve,s=new ve,r=new pt,o=new qf({depthPacking:kd}),l=new Yf,c={},u=t.maxTextureSize,h={[Dn]:kt,[kt]:Dn,[un]:un},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:Ev,fragmentShader:bv}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Tt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let d=this.type;this.render=function(T,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(oi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const N=d!==Bn&&this.type===Bn,W=d===Bn&&this.type!==Bn;for(let q=0,G=T.length;q<G;q++){const K=T[q],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ee=V.getFrameExtents();if(a.multiply(ee),s.copy(V.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(s.x=Math.floor(u/ee.x),a.x=s.x*ee.x,V.mapSize.x=s.x),a.y>u&&(s.y=Math.floor(u/ee.y),a.y=s.y*ee.y,V.mapSize.y=s.y)),V.map===null||N===!0||W===!0){const _e=this.type!==Bn?{minFilter:St,magFilter:St}:{};V.map!==null&&V.map.dispose(),V.map=new qi(a.x,a.y,_e),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ce=V.getViewportCount();for(let _e=0;_e<ce;_e++){const Fe=V.getViewport(_e);r.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),B.viewport(r),V.updateMatrices(K,_e),n=V.getFrustum(),v(A,D,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Bn&&x(V,D),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(E,S,P)};function x(T,A){const D=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qi(a.x,a.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,D,f,_,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,D,m,_,null)}function y(T,A,D,E){let S=null;const P=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)S=P;else if(S=D.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=S.uuid,N=A.uuid;let W=c[B];W===void 0&&(W={},c[B]=W);let q=W[N];q===void 0&&(q=S.clone(),W[N]=q,A.addEventListener("dispose",w)),S=q}if(S.visible=A.visible,S.wireframe=A.wireframe,E===Bn?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:h[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const B=i.properties.get(S);B.light=D}return S}function v(T,A,D,E,S){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Bn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const N=e.update(T),W=T.material;if(Array.isArray(W)){const q=N.groups;for(let G=0,K=q.length;G<K;G++){const V=q[G],ee=W[V.materialIndex];if(ee&&ee.visible){const ce=y(T,ee,E,S);T.onBeforeShadow(i,T,A,D,N,ce,V),i.renderBufferDirect(D,null,N,ce,T,V),T.onAfterShadow(i,T,A,D,N,ce,V)}}}else if(W.visible){const q=y(T,W,E,S);T.onBeforeShadow(i,T,A,D,N,q,null),i.renderBufferDirect(D,null,N,q,T,null),T.onAfterShadow(i,T,A,D,N,q,null)}}const B=T.children;for(let N=0,W=B.length;N<W;N++)v(B[N],A,D,E,S)}function w(T){T.target.removeEventListener("dispose",w);for(const D in c){const E=c[D],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}const Tv={[zo]:ko,[Vo]:Wo,[Ho]:Xo,[Wa]:Go,[ko]:zo,[Wo]:Vo,[Xo]:Ho,[Go]:Wa};function Av(i,e){function t(){let I=!1;const ie=new pt;let H=null;const Z=new pt(0,0,0,0);return{setMask:function(le){H!==le&&!I&&(i.colorMask(le,le,le,le),H=le)},setLocked:function(le){I=le},setClear:function(le,oe,Ue,dt,Ct){Ct===!0&&(le*=dt,oe*=dt,Ue*=dt),ie.set(le,oe,Ue,dt),Z.equals(ie)===!1&&(i.clearColor(le,oe,Ue,dt),Z.copy(ie))},reset:function(){I=!1,H=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,ie=!1,H=null,Z=null,le=null;return{setReversed:function(oe){if(ie!==oe){const Ue=e.get("EXT_clip_control");ie?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const dt=le;le=null,this.setClear(dt)}ie=oe},getReversed:function(){return ie},setTest:function(oe){oe?se(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(oe){H!==oe&&!I&&(i.depthMask(oe),H=oe)},setFunc:function(oe){if(ie&&(oe=Tv[oe]),Z!==oe){switch(oe){case zo:i.depthFunc(i.NEVER);break;case ko:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case Wa:i.depthFunc(i.LEQUAL);break;case Ho:i.depthFunc(i.EQUAL);break;case Go:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=oe}},setLocked:function(oe){I=oe},setClear:function(oe){le!==oe&&(ie&&(oe=1-oe),i.clearDepth(oe),le=oe)},reset:function(){I=!1,H=null,Z=null,le=null,ie=!1}}}function a(){let I=!1,ie=null,H=null,Z=null,le=null,oe=null,Ue=null,dt=null,Ct=null;return{setTest:function(Qe){I||(Qe?se(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(Qe){ie!==Qe&&!I&&(i.stencilMask(Qe),ie=Qe)},setFunc:function(Qe,fn,Ln){(H!==Qe||Z!==fn||le!==Ln)&&(i.stencilFunc(Qe,fn,Ln),H=Qe,Z=fn,le=Ln)},setOp:function(Qe,fn,Ln){(oe!==Qe||Ue!==fn||dt!==Ln)&&(i.stencilOp(Qe,fn,Ln),oe=Qe,Ue=fn,dt=Ln)},setLocked:function(Qe){I=Qe},setClear:function(Qe){Ct!==Qe&&(i.clearStencil(Qe),Ct=Qe)},reset:function(){I=!1,ie=null,H=null,Z=null,le=null,oe=null,Ue=null,dt=null,Ct=null}}}const s=new t,r=new n,o=new a,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,x=null,y=null,v=null,w=null,T=null,A=new Ee(0,0,0),D=0,E=!1,S=null,P=null,B=null,N=null,W=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=K>=2);let ee=null,ce={};const _e=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Je=new pt().fromArray(_e),Y=new pt().fromArray(Fe);function te(I,ie,H,Z){const le=new Uint8Array(4),oe=i.createTexture();i.bindTexture(I,oe),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ue=0;Ue<H;Ue++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(ie+Ue,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return oe}const me={};me[i.TEXTURE_2D]=te(i.TEXTURE_2D,i.TEXTURE_2D,1),me[i.TEXTURE_CUBE_MAP]=te(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[i.TEXTURE_2D_ARRAY]=te(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),me[i.TEXTURE_3D]=te(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),se(i.DEPTH_TEST),r.setFunc(Wa),ke(!1),Ve(gc),se(i.CULL_FACE),L(oi);function se(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function Re(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Ie(I,ie){return h[I]!==ie?(i.bindFramebuffer(I,ie),h[I]=ie,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ie),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Be(I,ie){let H=m,Z=!1;if(I){H=f.get(ie),H===void 0&&(H=[],f.set(ie,H));const le=I.textures;if(H.length!==le.length||H[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Ue=le.length;oe<Ue;oe++)H[oe]=i.COLOR_ATTACHMENT0+oe;H.length=le.length,Z=!0}}else H[0]!==i.BACK&&(H[0]=i.BACK,Z=!0);Z&&i.drawBuffers(H)}function ht(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Ge={[Pi]:i.FUNC_ADD,[dd]:i.FUNC_SUBTRACT,[fd]:i.FUNC_REVERSE_SUBTRACT};Ge[pd]=i.MIN,Ge[md]=i.MAX;const mt={[gd]:i.ZERO,[vd]:i.ONE,[_d]:i.SRC_COLOR,[Oo]:i.SRC_ALPHA,[bd]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[yd]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[Bo]:i.ONE_MINUS_SRC_ALPHA,[Ed]:i.ONE_MINUS_DST_COLOR,[Md]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(I,ie,H,Z,le,oe,Ue,dt,Ct,Qe){if(I===oi){_===!0&&(Re(i.BLEND),_=!1);return}if(_===!1&&(se(i.BLEND),_=!0),I!==hd){if(I!==p||Qe!==E){if((d!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),d=Pi,v=Pi),Qe)switch(I){case Sn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFunc(i.ONE,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Sn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case No:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _c:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,y=null,w=null,T=null,A.set(0,0,0),D=0,p=I,E=Qe}return}le=le||ie,oe=oe||H,Ue=Ue||Z,(ie!==d||le!==v)&&(i.blendEquationSeparate(Ge[ie],Ge[le]),d=ie,v=le),(H!==x||Z!==y||oe!==w||Ue!==T)&&(i.blendFuncSeparate(mt[H],mt[Z],mt[oe],mt[Ue]),x=H,y=Z,w=oe,T=Ue),(dt.equals(A)===!1||Ct!==D)&&(i.blendColor(dt.r,dt.g,dt.b,Ct),A.copy(dt),D=Ct),p=I,E=!1}function nn(I,ie){I.side===un?Re(i.CULL_FACE):se(i.CULL_FACE);let H=I.side===kt;ie&&(H=!H),ke(H),I.blending===Sn&&I.transparent===!1?L(oi):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ct(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){S!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),S=I)}function Ve(I){I!==cd?(se(i.CULL_FACE),I!==P&&(I===gc?i.cullFace(i.BACK):I===ud?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),P=I}function xe(I){I!==B&&(G&&i.lineWidth(I),B=I)}function ct(I,ie,H){I?(se(i.POLYGON_OFFSET_FILL),(N!==ie||W!==H)&&(i.polygonOffset(ie,H),N=ie,W=H)):Re(i.POLYGON_OFFSET_FILL)}function ye(I){I?se(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function R(I){I===void 0&&(I=i.TEXTURE0+q-1),ee!==I&&(i.activeTexture(I),ee=I)}function M(I,ie,H){H===void 0&&(ee===null?H=i.TEXTURE0+q-1:H=ee);let Z=ce[H];Z===void 0&&(Z={type:void 0,texture:void 0},ce[H]=Z),(Z.type!==I||Z.texture!==ie)&&(ee!==H&&(i.activeTexture(H),ee=H),i.bindTexture(I,ie||me[I]),Z.type=I,Z.texture=ie)}function O(){const I=ce[ee];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ge(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function he(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function We(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pe(I){Je.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Je.copy(I))}function fe(I){Y.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Y.copy(I))}function He(I,ie){let H=c.get(ie);H===void 0&&(H=new WeakMap,c.set(ie,H));let Z=H.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(ie,I.name),H.set(I,Z))}function Ne(I,ie){const Z=c.get(ie).get(I);l.get(ie)!==Z&&(i.uniformBlockBinding(ie,Z,I.__bindingPointIndex),l.set(ie,Z))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,ce={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,x=null,y=null,v=null,w=null,T=null,A=new Ee(0,0,0),D=0,E=!1,S=null,P=null,B=null,N=null,W=null,Je.set(0,0,i.canvas.width,i.canvas.height),Y.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:se,disable:Re,bindFramebuffer:Ie,drawBuffers:Be,useProgram:ht,setBlending:L,setMaterial:nn,setFlipSided:ke,setCullFace:Ve,setLineWidth:xe,setPolygonOffset:ct,setScissorTest:ye,activeTexture:R,bindTexture:M,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:$,texImage2D:de,texImage3D:we,updateUBOMapping:He,uniformBlockBinding:Ne,texStorage2D:We,texStorage3D:Q,texSubImage2D:X,texSubImage3D:ge,compressedTexSubImage2D:re,compressedTexSubImage3D:he,scissor:Pe,viewport:fe,reset:rt}}function Rv(i,e,t,n,a,s,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return m?new OffscreenCanvas(R,M):Ar("canvas")}function _(R,M,O){let j=1;const $=ye(R);if(($.width>O||$.height>O)&&(j=O/Math.max($.width,$.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const X=Math.floor(j*$.width),ge=Math.floor(j*$.height);h===void 0&&(h=g(X,ge));const re=M?g(X,ge):h;return re.width=X,re.height=ge,re.getContext("2d").drawImage(R,0,0,X,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+ge+")."),re}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,M,O,j,$=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let X=M;if(M===i.RED&&(O===i.FLOAT&&(X=i.R32F),O===i.HALF_FLOAT&&(X=i.R16F),O===i.UNSIGNED_BYTE&&(X=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.R8UI),O===i.UNSIGNED_SHORT&&(X=i.R16UI),O===i.UNSIGNED_INT&&(X=i.R32UI),O===i.BYTE&&(X=i.R8I),O===i.SHORT&&(X=i.R16I),O===i.INT&&(X=i.R32I)),M===i.RG&&(O===i.FLOAT&&(X=i.RG32F),O===i.HALF_FLOAT&&(X=i.RG16F),O===i.UNSIGNED_BYTE&&(X=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RG8UI),O===i.UNSIGNED_SHORT&&(X=i.RG16UI),O===i.UNSIGNED_INT&&(X=i.RG32UI),O===i.BYTE&&(X=i.RG8I),O===i.SHORT&&(X=i.RG16I),O===i.INT&&(X=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGB8UI),O===i.UNSIGNED_SHORT&&(X=i.RGB16UI),O===i.UNSIGNED_INT&&(X=i.RGB32UI),O===i.BYTE&&(X=i.RGB8I),O===i.SHORT&&(X=i.RGB16I),O===i.INT&&(X=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),O===i.UNSIGNED_INT&&(X=i.RGBA32UI),O===i.BYTE&&(X=i.RGBA8I),O===i.SHORT&&(X=i.RGBA16I),O===i.INT&&(X=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),M===i.RGBA){const ge=$?br:Ye.getTransfer(j);O===i.FLOAT&&(X=i.RGBA32F),O===i.HALF_FLOAT&&(X=i.RGBA16F),O===i.UNSIGNED_BYTE&&(X=ge===st?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(R,M){let O;return R?M===null||M===Xi||M===Ya?O=i.DEPTH24_STENCIL8:M===kn?O=i.DEPTH32F_STENCIL8:M===Es&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Xi||M===Ya?O=i.DEPTH_COMPONENT24:M===kn?O=i.DEPTH_COMPONENT32F:M===Es&&(O=i.DEPTH_COMPONENT16),O}function w(R,M){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==St&&R.minFilter!==ot?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function T(R){const M=R.target;M.removeEventListener("dispose",T),D(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),S(M)}function D(R){const M=n.get(R);if(M.__webglInit===void 0)return;const O=R.source,j=f.get(O);if(j){const $=j[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(R),Object.keys(j).length===0&&f.delete(O)}n.remove(R)}function E(R){const M=n.get(R);i.deleteTexture(M.__webglTexture);const O=R.source,j=f.get(O);delete j[M.__cacheKey],r.memory.textures--}function S(R){const M=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let $=0;$<M.__webglFramebuffer[j].length;$++)i.deleteFramebuffer(M.__webglFramebuffer[j][$]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let j=0,$=O.length;j<$;j++){const X=n.get(O[j]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),r.memory.textures--),n.remove(O[j])}n.remove(R)}let P=0;function B(){P=0}function N(){const R=P;return R>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+a.maxTextures),P+=1,R}function W(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const O=n.get(R);if(R.isVideoTexture&&xe(R),R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,R,M);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function G(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function K(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){Y(O,R,M);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function V(R,M){const O=n.get(R);if(R.version>0&&O.__version!==R.version){te(O,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const ee={[bn]:i.REPEAT,[vt]:i.CLAMP_TO_EDGE,[Ko]:i.MIRRORED_REPEAT},ce={[St]:i.NEAREST,[Bd]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[ot]:i.LINEAR,[Yr]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},_e={[Hd]:i.NEVER,[Kd]:i.ALWAYS,[Gd]:i.LESS,[xh]:i.LEQUAL,[Wd]:i.EQUAL,[Yd]:i.GEQUAL,[Xd]:i.GREATER,[qd]:i.NOTEQUAL};function Fe(R,M){if(M.type===kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ot||M.magFilter===Yr||M.magFilter===Os||M.magFilter===Ui||M.minFilter===ot||M.minFilter===Yr||M.minFilter===Os||M.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,ee[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,ee[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,ee[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ce[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ce[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_e[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===St||M.minFilter!==Os&&M.minFilter!==Ui||M.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,a.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Je(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const j=M.source;let $=f.get(j);$===void 0&&($={},f.set(j,$));const X=W(M);if(X!==R.__cacheKey){$[X]===void 0&&($[X]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),$[X].usedTimes++;const ge=$[R.__cacheKey];ge!==void 0&&($[R.__cacheKey].usedTimes--,ge.usedTimes===0&&E(M)),R.__cacheKey=X,R.__webglTexture=$[X].texture}return O}function Y(R,M,O){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const $=Je(R,M),X=M.source;t.bindTexture(j,R.__webglTexture,i.TEXTURE0+O);const ge=n.get(X);if(X.version!==ge.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const re=Ye.getPrimaries(Ye.workingColorSpace),he=M.colorSpace===Lt?null:Ye.getPrimaries(M.colorSpace),We=M.colorSpace===Lt||re===he?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Q=_(M.image,!1,a.maxTextureSize);Q=ct(M,Q);const de=s.convert(M.format,M.colorSpace),we=s.convert(M.type);let Pe=y(M.internalFormat,de,we,M.colorSpace,M.isVideoTexture);Fe(j,M);let fe;const He=M.mipmaps,Ne=M.isVideoTexture!==!0,rt=ge.__version===void 0||$===!0,I=X.dataReady,ie=w(M,Q);if(M.isDepthTexture)Pe=v(M.format===Ka,M.type),rt&&(Ne?t.texStorage2D(i.TEXTURE_2D,1,Pe,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Pe,Q.width,Q.height,0,de,we,null));else if(M.isDataTexture)if(He.length>0){Ne&&rt&&t.texStorage2D(i.TEXTURE_2D,ie,Pe,He[0].width,He[0].height);for(let H=0,Z=He.length;H<Z;H++)fe=He[H],Ne?I&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,de,we,fe.data):t.texImage2D(i.TEXTURE_2D,H,Pe,fe.width,fe.height,0,de,we,fe.data);M.generateMipmaps=!1}else Ne?(rt&&t.texStorage2D(i.TEXTURE_2D,ie,Pe,Q.width,Q.height),I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,de,we,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,Q.width,Q.height,0,de,we,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ne&&rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Pe,He[0].width,He[0].height,Q.depth);for(let H=0,Z=He.length;H<Z;H++)if(fe=He[H],M.format!==Mt)if(de!==null)if(Ne){if(I)if(M.layerUpdates.size>0){const le=jc(fe.width,fe.height,M.format,M.type);for(const oe of M.layerUpdates){const Ue=fe.data.subarray(oe*le/fe.data.BYTES_PER_ELEMENT,(oe+1)*le/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,oe,fe.width,fe.height,1,de,Ue)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Q.depth,de,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,H,Pe,fe.width,fe.height,Q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?I&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,H,0,0,0,fe.width,fe.height,Q.depth,de,we,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,H,Pe,fe.width,fe.height,Q.depth,0,de,we,fe.data)}else{Ne&&rt&&t.texStorage2D(i.TEXTURE_2D,ie,Pe,He[0].width,He[0].height);for(let H=0,Z=He.length;H<Z;H++)fe=He[H],M.format!==Mt?de!==null?Ne?I&&t.compressedTexSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,H,Pe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?I&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,fe.width,fe.height,de,we,fe.data):t.texImage2D(i.TEXTURE_2D,H,Pe,fe.width,fe.height,0,de,we,fe.data)}else if(M.isDataArrayTexture)if(Ne){if(rt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ie,Pe,Q.width,Q.height,Q.depth),I)if(M.layerUpdates.size>0){const H=jc(Q.width,Q.height,M.format,M.type);for(const Z of M.layerUpdates){const le=Q.data.subarray(Z*H/Q.data.BYTES_PER_ELEMENT,(Z+1)*H/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,Q.width,Q.height,1,de,we,le)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,de,we,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,Q.width,Q.height,Q.depth,0,de,we,Q.data);else if(M.isData3DTexture)Ne?(rt&&t.texStorage3D(i.TEXTURE_3D,ie,Pe,Q.width,Q.height,Q.depth),I&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,de,we,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,Q.width,Q.height,Q.depth,0,de,we,Q.data);else if(M.isFramebufferTexture){if(rt)if(Ne)t.texStorage2D(i.TEXTURE_2D,ie,Pe,Q.width,Q.height);else{let H=Q.width,Z=Q.height;for(let le=0;le<ie;le++)t.texImage2D(i.TEXTURE_2D,le,Pe,H,Z,0,de,we,null),H>>=1,Z>>=1}}else if(He.length>0){if(Ne&&rt){const H=ye(He[0]);t.texStorage2D(i.TEXTURE_2D,ie,Pe,H.width,H.height)}for(let H=0,Z=He.length;H<Z;H++)fe=He[H],Ne?I&&t.texSubImage2D(i.TEXTURE_2D,H,0,0,de,we,fe):t.texImage2D(i.TEXTURE_2D,H,Pe,de,we,fe);M.generateMipmaps=!1}else if(Ne){if(rt){const H=ye(Q);t.texStorage2D(i.TEXTURE_2D,ie,Pe,H.width,H.height)}I&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,we,Q)}else t.texImage2D(i.TEXTURE_2D,0,Pe,de,we,Q);p(M)&&d(j),ge.__version=X.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function te(R,M,O){if(M.image.length!==6)return;const j=Je(R,M),$=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+O);const X=n.get($);if($.version!==X.__version||j===!0){t.activeTexture(i.TEXTURE0+O);const ge=Ye.getPrimaries(Ye.workingColorSpace),re=M.colorSpace===Lt?null:Ye.getPrimaries(M.colorSpace),he=M.colorSpace===Lt||ge===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!We&&!Q?de[Z]=_(M.image[Z],!0,a.maxCubemapSize):de[Z]=Q?M.image[Z].image:M.image[Z],de[Z]=ct(M,de[Z]);const we=de[0],Pe=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),He=y(M.internalFormat,Pe,fe,M.colorSpace),Ne=M.isVideoTexture!==!0,rt=X.__version===void 0||j===!0,I=$.dataReady;let ie=w(M,we);Fe(i.TEXTURE_CUBE_MAP,M);let H;if(We){Ne&&rt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,He,we.width,we.height);for(let Z=0;Z<6;Z++){H=de[Z].mipmaps;for(let le=0;le<H.length;le++){const oe=H[le];M.format!==Mt?Pe!==null?Ne?I&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,oe.width,oe.height,Pe,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,He,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,oe.width,oe.height,Pe,fe,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,He,oe.width,oe.height,0,Pe,fe,oe.data)}}}else{if(H=M.mipmaps,Ne&&rt){H.length>0&&ie++;const Z=ye(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ie,He,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(Q){Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,Pe,fe,de[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,de[Z].width,de[Z].height,0,Pe,fe,de[Z].data);for(let le=0;le<H.length;le++){const Ue=H[le].image[Z].image;Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ue.width,Ue.height,Pe,fe,Ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,He,Ue.width,Ue.height,0,Pe,fe,Ue.data)}}else{Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Pe,fe,de[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,He,Pe,fe,de[Z]);for(let le=0;le<H.length;le++){const oe=H[le];Ne?I&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Pe,fe,oe.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,He,Pe,fe,oe.image[Z])}}}p(M)&&d(i.TEXTURE_CUBE_MAP),X.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function me(R,M,O,j,$,X){const ge=s.convert(O.format,O.colorSpace),re=s.convert(O.type),he=y(O.internalFormat,ge,re,O.colorSpace),We=n.get(M),Q=n.get(O);if(Q.__renderTarget=M,!We.__hasExternalTextures){const de=Math.max(1,M.width>>X),we=Math.max(1,M.height>>X);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,X,he,de,we,M.depth,0,ge,re,null):t.texImage2D($,X,he,de,we,0,ge,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,Q.__webglTexture,0,ke(M)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,$,Q.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(R,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){const j=M.depthTexture,$=j&&j.isDepthTexture?j.type:null,X=v(M.stencilBuffer,$),ge=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=ke(M);Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,X,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{const j=M.textures;for(let $=0;$<j.length;$++){const X=j[$],ge=s.convert(X.format,X.colorSpace),re=s.convert(X.type),he=y(X.internalFormat,ge,re,X.colorSpace),We=ke(M);O&&Ve(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,We,he,M.width,M.height):Ve(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We,he,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,he,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const $=j.__webglTexture,X=ke(M);if(M.depthTexture.format===Da)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(M.depthTexture.format===Ka)Ve(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const M=n.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",$)};j.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=j}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,R)}else if(O){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),se(M.__webglDepthbuffer[j],R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),se(M.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Be(R,M,O){const j=n.get(R);M!==void 0&&me(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ie(R)}function ht(R){const M=R.texture,O=n.get(R),j=n.get(M);R.addEventListener("dispose",A);const $=R.textures,X=R.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,r.memory.textures++),X){O.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[re]=[];for(let he=0;he<M.mipmaps.length;he++)O.__webglFramebuffer[re][he]=i.createFramebuffer()}else O.__webglFramebuffer[re]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)O.__webglFramebuffer[re]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ge)for(let re=0,he=$.length;re<he;re++){const We=n.get($[re]);We.__webglTexture===void 0&&(We.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&Ve(R)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){const he=$[re];O.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[re]);const We=s.convert(he.format,he.colorSpace),Q=s.convert(he.type),de=y(he.internalFormat,We,Q,he.colorSpace,R.isXRRenderTarget===!0),we=ke(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,de,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,O.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),se(O.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Fe(i.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)me(O.__webglFramebuffer[re][he],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,he);else me(O.__webglFramebuffer[re],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(M)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let re=0,he=$.length;re<he;re++){const We=$[re],Q=n.get(We);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Fe(i.TEXTURE_2D,We),me(O.__webglFramebuffer,R,We,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),p(We)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,j.__webglTexture),Fe(re,M),M.mipmaps&&M.mipmaps.length>0)for(let he=0;he<M.mipmaps.length;he++)me(O.__webglFramebuffer[he],R,M,i.COLOR_ATTACHMENT0,re,he);else me(O.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,re,0);p(M)&&d(re),t.unbindTexture()}R.depthBuffer&&Ie(R)}function Ge(R){const M=R.textures;for(let O=0,j=M.length;O<j;O++){const $=M[O];if(p($)){const X=x(R),ge=n.get($).__webglTexture;t.bindTexture(X,ge),d(X),t.unbindTexture()}}}const mt=[],L=[];function nn(R){if(R.samples>0){if(Ve(R)===!1){const M=R.textures,O=R.width,j=R.height;let $=i.COLOR_BUFFER_BIT;const X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),re=M.length>1;if(re)for(let he=0;he<M.length;he++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let he=0;he<M.length;he++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const We=n.get(M[he]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,We,0)}i.blitFramebuffer(0,0,O,j,0,0,O,j,$,i.NEAREST),l===!0&&(mt.length=0,L.length=0,mt.push(i.COLOR_ATTACHMENT0+he),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(X),L.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let he=0;he<M.length;he++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.RENDERBUFFER,ge.__webglColorRenderbuffer[he]);const We=n.get(M[he]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+he,i.TEXTURE_2D,We,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ke(R){return Math.min(a.maxSamples,R.samples)}function Ve(R){const M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xe(R){const M=r.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function ct(R,M){const O=R.colorSpace,j=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==ja&&O!==Lt&&(Ye.getTransfer(O)===st?(j!==Mt||$!==Rt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=B,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Be,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ve}function Cv(i,e){function t(n,a=Lt){let s;const r=Ye.getTransfer(a);if(n===Rt)return i.UNSIGNED_BYTE;if(n===Ol)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.BYTE;if(n===uh)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===Nl)return i.INT;if(n===Xi)return i.UNSIGNED_INT;if(n===kn)return i.FLOAT;if(n===Cs)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===fh)return i.RGB;if(n===Mt)return i.RGBA;if(n===ph)return i.LUMINANCE;if(n===mh)return i.LUMINANCE_ALPHA;if(n===Da)return i.DEPTH_COMPONENT;if(n===Ka)return i.DEPTH_STENCIL;if(n===gh)return i.RED;if(n===zl)return i.RED_INTEGER;if(n===vh)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Vl)return i.RGBA_INTEGER;if(n===gr||n===vr||n===_r||n===xr)if(r===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jo||n===Zo||n===$o||n===Jo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qo||n===el||n===tl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qo||n===el)return r===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===tl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===al||n===sl||n===rl||n===ol||n===ll||n===cl||n===ul||n===hl||n===dl||n===fl||n===pl||n===ml)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===al)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ml)return r===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yr||n===gl||n===vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===yr)return r===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===_l||n===xl||n===yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===yr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ya?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Pv={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pv)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ta;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Dv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lv=`
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

}`;class Iv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const a=new Vt,s=e.properties.get(a);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Kt({vertexShader:Dv,fragmentShader:Lv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Uv extends na{constructor(e,t){super();const n=this;let a=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new Iv,p=t.getContextAttributes();let d=null,x=null;const y=[],v=[],w=new ve;let T=null;const A=new ln;A.viewport=new pt;const D=new ln;D.viewport=new pt;const E=[A,D],S=new Qf;let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=y[Y];return te===void 0&&(te=new Eo,y[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=y[Y];return te===void 0&&(te=new Eo,y[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=y[Y];return te===void 0&&(te=new Eo,y[Y]=te),te.getHandSpace()};function N(Y){const te=v.indexOf(Y.inputSource);if(te===-1)return;const me=y[te];me!==void 0&&(me.update(Y.inputSource,Y.frame,c||r),me.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){a.removeEventListener("select",N),a.removeEventListener("selectstart",N),a.removeEventListener("selectend",N),a.removeEventListener("squeeze",N),a.removeEventListener("squeezestart",N),a.removeEventListener("squeezeend",N),a.removeEventListener("end",W),a.removeEventListener("inputsourceschange",q);for(let Y=0;Y<y.length;Y++){const te=v[Y];te!==null&&(v[Y]=null,y[Y].disconnect(te))}P=null,B=null,_.reset(),e.setRenderTarget(d),m=null,f=null,h=null,a=null,x=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(d=e.getRenderTarget(),a.addEventListener("select",N),a.addEventListener("selectstart",N),a.addEventListener("selectend",N),a.addEventListener("squeeze",N),a.addEventListener("squeezestart",N),a.addEventListener("squeezeend",N),a.addEventListener("end",W),a.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),a.renderState.layers===void 0){const te={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(a,t,te),a.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new qi(m.framebufferWidth,m.framebufferHeight,{format:Mt,type:Rt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let te=null,me=null,se=null;p.depth&&(se=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=p.stencil?Ka:Da,me=p.stencil?Ya:Xi);const Re={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(a,t),f=h.createProjectionLayer(Re),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new qi(f.textureWidth,f.textureHeight,{format:Mt,type:Rt,depthTexture:new Lh(f.textureWidth,f.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),Je.setContext(a),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function q(Y){for(let te=0;te<Y.removed.length;te++){const me=Y.removed[te],se=v.indexOf(me);se>=0&&(v[se]=null,y[se].disconnect(me))}for(let te=0;te<Y.added.length;te++){const me=Y.added[te];let se=v.indexOf(me);if(se===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=v.length){v.push(me),se=Ie;break}else if(v[Ie]===null){v[Ie]=me,se=Ie;break}if(se===-1)break}const Re=y[se];Re&&Re.connect(me)}}const G=new C,K=new C;function V(Y,te,me){G.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const se=G.distanceTo(K),Re=te.projectionMatrix.elements,Ie=me.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),ht=Re[14]/(Re[10]+1),Ge=(Re[9]+1)/Re[5],mt=(Re[9]-1)/Re[5],L=(Re[8]-1)/Re[0],nn=(Ie[8]+1)/Ie[0],ke=Be*L,Ve=Be*nn,xe=se/(-L+nn),ct=xe*-L;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ct),Y.translateZ(xe),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const ye=Be+xe,R=ht+xe,M=ke-ct,O=Ve+(se-ct),j=Ge*ht/R*ye,$=mt*ht/R*ye;Y.projectionMatrix.makePerspective(M,O,j,$,ye,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ee(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let te=Y.near,me=Y.far;_.texture!==null&&(_.depthNear>0&&(te=_.depthNear),_.depthFar>0&&(me=_.depthFar)),S.near=D.near=A.near=te,S.far=D.far=A.far=me,(P!==S.near||B!==S.far)&&(a.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,B=S.far),A.layers.mask=Y.layers.mask|2,D.layers.mask=Y.layers.mask|4,S.layers.mask=A.layers.mask|D.layers.mask;const se=Y.parent,Re=S.cameras;ee(S,se);for(let Ie=0;Ie<Re.length;Ie++)ee(Re[Ie],se);Re.length===2?V(S,A,D):S.projectionMatrix.copy(A.projectionMatrix),ce(Y,S,se)};function ce(Y,te,me){me===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(me.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let _e=null;function Fe(Y,te){if(u=te.getViewerPose(c||r),g=te,u!==null){const me=u.views;m!==null&&(e.setRenderTargetFramebuffer(x,m.framebuffer),e.setRenderTarget(x));let se=!1;me.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let Ie=0;Ie<me.length;Ie++){const Be=me[Ie];let ht=null;if(m!==null)ht=m.getViewport(Be);else{const mt=h.getViewSubImage(f,Be);ht=mt.viewport,Ie===0&&(e.setRenderTargetTextures(x,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(x))}let Ge=E[Ie];Ge===void 0&&(Ge=new ln,Ge.layers.enable(Ie),Ge.viewport=new pt,E[Ie]=Ge),Ge.matrix.fromArray(Be.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Be.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(ht.x,ht.y,ht.width,ht.height),Ie===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Ge)}const Re=a.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ie=h.getDepthInformation(me[0]);Ie&&Ie.isValid&&Ie.texture&&_.init(e,Ie,a.renderState)}}for(let me=0;me<y.length;me++){const se=v[me],Re=y[me];se!==null&&Re!==void 0&&Re.update(se,te,c||r)}_e&&_e(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Je=new Fh;Je.setAnimationLoop(Fe),this.setAnimationLoop=function(Y){_e=Y},this.dispose=function(){}}}const Ti=new wn,Fv=new lt;function Nv(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,Th(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function a(p,d,x,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),h(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(s(p,d),g(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),_(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(r(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,x,y):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===kt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===kt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const x=e.get(d),y=x.envMap,v=x.envMapRotation;y&&(p.envMap.value=y,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),p.envMapRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(Ti)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function r(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,x,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*x,p.scale.value=y*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,x){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===kt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const x=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Ov(i,e,t,n){let a={},s={},r=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=a[x.id];v===void 0&&(g(x),v=u(x),a[x.id]=v,x.addEventListener("dispose",p));const w=y.program;n.updateUBOMapping(x,w);const T=e.render.frame;s[x.id]!==T&&(f(x),s[x.id]=T)}function u(x){const y=h();x.__bindingPointIndex=y;const v=i.createBuffer(),w=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const y=a[x.id],v=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=v.length;T<A;T++){const D=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,S=D.length;E<S;E++){const P=D[E];if(m(P,T,E,w)===!0){const B=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let q=0;q<N.length;q++){const G=N[q],K=_(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,B+W,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,y,v,w){const T=x.value,A=y+"_"+v;if(w[A]===void 0)return typeof T=="number"||typeof T=="boolean"?w[A]=T:w[A]=T.clone(),!0;{const D=w[A];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return w[A]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(x){const y=x.uniforms;let v=0;const w=16;for(let A=0,D=y.length;A<D;A++){const E=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,P=E.length;S<P;S++){const B=E[S],N=Array.isArray(B.value)?B.value:[B.value];for(let W=0,q=N.length;W<q;W++){const G=N[W],K=_(G),V=v%w,ee=V%K.boundary,ce=V+ee;v+=ee,ce!==0&&w-ce<K.storage&&(v+=w-ce),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=K.storage}}}const T=v%w;return T>0&&(v+=w-T),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function p(x){const y=x.target;y.removeEventListener("dispose",p);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(a[y.id]),delete a[y.id],delete s[y.id]}function d(){for(const x in a)i.deleteBuffer(a[x]);r=[],a={},s={}}return{bind:l,update:c,dispose:d}}class Bv{constructor(e={}){const{canvas:t=df(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=li,this.toneMappingExposure=1;const v=this;let w=!1,T=0,A=0,D=null,E=-1,S=null;const P=new pt,B=new pt;let N=null;const W=new Ee(0);let q=0,G=t.width,K=t.height,V=1,ee=null,ce=null;const _e=new pt(0,0,G,K),Fe=new pt(0,0,G,K);let Je=!1;const Y=new Kl;let te=!1,me=!1;const se=new lt,Re=new lt,Ie=new C,Be=new pt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function mt(){return D===null?V:1}let L=n;function nn(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ul}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",oe,!1),L===null){const U="webgl2";if(L=nn(U,b),L===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ke,Ve,xe,ct,ye,R,M,O,j,$,X,ge,re,he,We,Q,de,we,Pe,fe,He,Ne,rt,I;function ie(){ke=new Y0(L),ke.init(),Ne=new Cv(L,ke),Ve=new V0(L,ke,e,Ne),xe=new Av(L,ke),Ve.reverseDepthBuffer&&f&&xe.buffers.depth.setReversed(!0),ct=new Z0(L),ye=new pv,R=new Rv(L,ke,xe,ye,Ve,Ne,ct),M=new G0(v),O=new q0(v),j=new ip(L),rt=new z0(L,j),$=new K0(L,j,ct,rt),X=new J0(L,$,j,ct),Pe=new $0(L,Ve,R),Q=new H0(ye),ge=new fv(v,M,O,ke,Ve,rt,Q),re=new Nv(v,ye),he=new gv,We=new Sv(ke),we=new B0(v,M,O,xe,X,m,l),de=new wv(v,X,Ve),I=new Ov(L,ct,Ve,xe),fe=new k0(L,ke,ct),He=new j0(L,ke,ct),ct.programs=ge.programs,v.capabilities=Ve,v.extensions=ke,v.properties=ye,v.renderLists=he,v.shadowMap=de,v.state=xe,v.info=ct}ie();const H=new Uv(v,L);this.xr=H,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=ke.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ke.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(G,K,!1))},this.getSize=function(b){return b.set(G,K)},this.setSize=function(b,U,z=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=b,K=U,t.width=Math.floor(b*V),t.height=Math.floor(U*V),z===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(G*V,K*V).floor()},this.setDrawingBufferSize=function(b,U,z){G=b,K=U,V=z,t.width=Math.floor(b*z),t.height=Math.floor(U*z),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,U,z,k){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,U,z,k),xe.viewport(P.copy(_e).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(Fe)},this.setScissor=function(b,U,z,k){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,U,z,k),xe.scissor(B.copy(Fe).multiplyScalar(V).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){xe.setScissorTest(Je=b)},this.setOpaqueSort=function(b){ee=b},this.setTransparentSort=function(b){ce=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(b=!0,U=!0,z=!0){let k=0;if(b){let F=!1;if(D!==null){const J=D.texture.format;F=J===Vl||J===kl||J===zl}if(F){const J=D.texture.type,ae=J===Rt||J===Xi||J===Es||J===Ya||J===Ol||J===Bl,ue=we.getClearColor(),pe=we.getClearAlpha(),De=ue.r,Le=ue.g,Me=ue.b;ae?(g[0]=De,g[1]=Le,g[2]=Me,g[3]=pe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=De,_[1]=Le,_[2]=Me,_[3]=pe,L.clearBufferiv(L.COLOR,0,_))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT),z&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),we.dispose(),he.dispose(),We.dispose(),ye.dispose(),M.dispose(),O.dispose(),X.dispose(),rt.dispose(),I.dispose(),ge.dispose(),H.dispose(),H.removeEventListener("sessionstart",cc),H.removeEventListener("sessionend",uc),xi.stop()};function Z(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=ct.autoReset,U=de.enabled,z=de.autoUpdate,k=de.needsUpdate,F=de.type;ie(),ct.autoReset=b,de.enabled=U,de.autoUpdate=z,de.needsUpdate=k,de.type=F}function oe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ue(b){const U=b.target;U.removeEventListener("dispose",Ue),dt(U)}function dt(b){Ct(b),ye.remove(b)}function Ct(b){const U=ye.get(b).programs;U!==void 0&&(U.forEach(function(z){ge.releaseProgram(z)}),b.isShaderMaterial&&ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,z,k,F,J){U===null&&(U=ht);const ae=F.isMesh&&F.matrixWorld.determinant()<0,ue=ad(b,U,z,k,F);xe.setMaterial(k,ae);let pe=z.index,De=1;if(k.wireframe===!0){if(pe=$.getWireframeAttribute(z),pe===void 0)return;De=2}const Le=z.drawRange,Me=z.attributes.position;let Xe=Le.start*De,je=(Le.start+Le.count)*De;J!==null&&(Xe=Math.max(Xe,J.start*De),je=Math.min(je,(J.start+J.count)*De)),pe!==null?(Xe=Math.max(Xe,0),je=Math.min(je,pe.count)):Me!=null&&(Xe=Math.max(Xe,0),je=Math.min(je,Me.count));const _t=je-Xe;if(_t<0||_t===1/0)return;rt.setup(F,k,ue,z,pe);let ft,qe=fe;if(pe!==null&&(ft=j.get(pe),qe=He,qe.setIndex(ft)),F.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*mt()),qe.setMode(L.LINES)):qe.setMode(L.TRIANGLES);else if(F.isLine){let Se=k.linewidth;Se===void 0&&(Se=1),xe.setLineWidth(Se*mt()),F.isLineSegments?qe.setMode(L.LINES):F.isLineLoop?qe.setMode(L.LINE_LOOP):qe.setMode(L.LINE_STRIP)}else F.isPoints?qe.setMode(L.POINTS):F.isSprite&&qe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Se=F._multiDrawStarts,At=F._multiDrawCounts,Ze=F._multiDrawCount,pn=pe?j.get(pe).bytesPerElement:1,ia=ye.get(k).currentProgram.getUniforms();for(let Zt=0;Zt<Ze;Zt++)ia.setValue(L,"_gl_DrawID",Zt),qe.render(Se[Zt]/pn,At[Zt])}else if(F.isInstancedMesh)qe.renderInstances(Xe,_t,F.count);else if(z.isInstancedBufferGeometry){const Se=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,At=Math.min(z.instanceCount,Se);qe.renderInstances(Xe,_t,At)}else qe.render(Xe,_t)};function Qe(b,U,z){b.transparent===!0&&b.side===un&&b.forceSinglePass===!1?(b.side=kt,b.needsUpdate=!0,Ns(b,U,z),b.side=Dn,b.needsUpdate=!0,Ns(b,U,z),b.side=un):Ns(b,U,z)}this.compile=function(b,U,z=null){z===null&&(z=b),d=We.get(z),d.init(U),y.push(d),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),b!==z&&b.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const k=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const J=F.material;if(J)if(Array.isArray(J))for(let ae=0;ae<J.length;ae++){const ue=J[ae];Qe(ue,z,F),k.add(ue)}else Qe(J,z,F),k.add(J)}),y.pop(),d=null,k},this.compileAsync=function(b,U,z=null){const k=this.compile(b,U,z);return new Promise(F=>{function J(){if(k.forEach(function(ae){ye.get(ae).currentProgram.isReady()&&k.delete(ae)}),k.size===0){F(b);return}setTimeout(J,10)}ke.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let fn=null;function Ln(b){fn&&fn(b)}function cc(){xi.stop()}function uc(){xi.start()}const xi=new Fh;xi.setAnimationLoop(Ln),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(b){fn=b,H.setAnimationLoop(b),b===null?xi.stop():xi.start()},H.addEventListener("sessionstart",cc),H.addEventListener("sessionend",uc),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,U,D),d=We.get(b,y.length),d.init(U),y.push(d),Re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(Re),me=this.localClippingEnabled,te=Q.init(this.clippingPlanes,me),p=he.get(b,x.length),p.init(),x.push(p),H.enabled===!0&&H.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&Xr(J,U,-1/0,v.sortObjects)}Xr(b,U,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(ee,ce),Ge=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ge&&we.addToRenderList(p,b),this.info.render.frame++,te===!0&&Q.beginShadows();const z=d.state.shadowsArray;de.render(z,b,U),te===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=p.opaque,F=p.transmissive;if(d.setupLights(),U.isArrayCamera){const J=U.cameras;if(F.length>0)for(let ae=0,ue=J.length;ae<ue;ae++){const pe=J[ae];dc(k,F,b,pe)}Ge&&we.render(b);for(let ae=0,ue=J.length;ae<ue;ae++){const pe=J[ae];hc(p,b,pe,pe.viewport)}}else F.length>0&&dc(k,F,b,U),Ge&&we.render(b),hc(p,b,U);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),b.isScene===!0&&b.onAfterRender(v,b,U),rt.resetDefaultState(),E=-1,S=null,y.pop(),y.length>0?(d=y[y.length-1],te===!0&&Q.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,x.pop(),x.length>0?p=x[x.length-1]:p=null};function Xr(b,U,z,k){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)z=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){k&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const ae=X.update(b),ue=b.material;ue.visible&&p.push(b,ae,ue,z,Be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){const ae=X.update(b),ue=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Be.copy(ae.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(ue)){const pe=ae.groups;for(let De=0,Le=pe.length;De<Le;De++){const Me=pe[De],Xe=ue[Me.materialIndex];Xe&&Xe.visible&&p.push(b,ae,Xe,z,Be.z,Me)}}else ue.visible&&p.push(b,ae,ue,z,Be.z,null)}}const J=b.children;for(let ae=0,ue=J.length;ae<ue;ae++)Xr(J[ae],U,z,k)}function hc(b,U,z,k){const F=b.opaque,J=b.transmissive,ae=b.transparent;d.setupLightsView(z),te===!0&&Q.setGlobalState(v.clippingPlanes,z),k&&xe.viewport(P.copy(k)),F.length>0&&Fs(F,U,z),J.length>0&&Fs(J,U,z),ae.length>0&&Fs(ae,U,z),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function dc(b,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[k.id]===void 0&&(d.state.transmissionRenderTarget[k.id]=new qi(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Cs:Rt,minFilter:Ui,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const J=d.state.transmissionRenderTarget[k.id],ae=k.viewport||P;J.setSize(ae.z,ae.w);const ue=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Ge&&we.render(z);const pe=v.toneMapping;v.toneMapping=li;const De=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),d.setupLightsView(k),te===!0&&Q.setGlobalState(v.clippingPlanes,k),Fs(b,z,k),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Me=0,Xe=U.length;Me<Xe;Me++){const je=U[Me],_t=je.object,ft=je.geometry,qe=je.material,Se=je.group;if(qe.side===un&&_t.layers.test(k.layers)){const At=qe.side;qe.side=kt,qe.needsUpdate=!0,fc(_t,z,k,ft,qe,Se),qe.side=At,qe.needsUpdate=!0,Le=!0}}Le===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J))}v.setRenderTarget(ue),v.setClearColor(W,q),De!==void 0&&(k.viewport=De),v.toneMapping=pe}function Fs(b,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,J=b.length;F<J;F++){const ae=b[F],ue=ae.object,pe=ae.geometry,De=k===null?ae.material:k,Le=ae.group;ue.layers.test(z.layers)&&fc(ue,U,z,pe,De,Le)}}function fc(b,U,z,k,F,J){b.onBeforeRender(v,U,z,k,F,J),b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(v,U,z,k,b,J),F.transparent===!0&&F.side===un&&F.forceSinglePass===!1?(F.side=kt,F.needsUpdate=!0,v.renderBufferDirect(z,U,k,F,b,J),F.side=Dn,F.needsUpdate=!0,v.renderBufferDirect(z,U,k,F,b,J),F.side=un):v.renderBufferDirect(z,U,k,F,b,J),b.onAfterRender(v,U,z,k,F,J)}function Ns(b,U,z){U.isScene!==!0&&(U=ht);const k=ye.get(b),F=d.state.lights,J=d.state.shadowsArray,ae=F.state.version,ue=ge.getParameters(b,F.state,J,U,z),pe=ge.getProgramCacheKey(ue);let De=k.programs;k.environment=b.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(b.isMeshStandardMaterial?O:M).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,De===void 0&&(b.addEventListener("dispose",Ue),De=new Map,k.programs=De);let Le=De.get(pe);if(Le!==void 0){if(k.currentProgram===Le&&k.lightsStateVersion===ae)return mc(b,ue),Le}else ue.uniforms=ge.getUniforms(b),b.onBeforeCompile(ue,v),Le=ge.acquireProgram(ue,pe),De.set(pe,Le),k.uniforms=ue.uniforms;const Me=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Me.clippingPlanes=Q.uniform),mc(b,ue),k.needsLights=rd(b),k.lightsStateVersion=ae,k.needsLights&&(Me.ambientLightColor.value=F.state.ambient,Me.lightProbe.value=F.state.probe,Me.directionalLights.value=F.state.directional,Me.directionalLightShadows.value=F.state.directionalShadow,Me.spotLights.value=F.state.spot,Me.spotLightShadows.value=F.state.spotShadow,Me.rectAreaLights.value=F.state.rectArea,Me.ltc_1.value=F.state.rectAreaLTC1,Me.ltc_2.value=F.state.rectAreaLTC2,Me.pointLights.value=F.state.point,Me.pointLightShadows.value=F.state.pointShadow,Me.hemisphereLights.value=F.state.hemi,Me.directionalShadowMap.value=F.state.directionalShadowMap,Me.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Me.spotShadowMap.value=F.state.spotShadowMap,Me.spotLightMatrix.value=F.state.spotLightMatrix,Me.spotLightMap.value=F.state.spotLightMap,Me.pointShadowMap.value=F.state.pointShadowMap,Me.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=Le,k.uniformsList=null,Le}function pc(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Mr.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function mc(b,U){const z=ye.get(b);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function ad(b,U,z,k,F){U.isScene!==!0&&(U=ht),R.resetTextureUnits();const J=U.fog,ae=k.isMeshStandardMaterial?U.environment:null,ue=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ja,pe=(k.isMeshStandardMaterial?O:M).get(k.envMap||ae),De=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Me=!!z.morphAttributes.position,Xe=!!z.morphAttributes.normal,je=!!z.morphAttributes.color;let _t=li;k.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_t=v.toneMapping);const ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,qe=ft!==void 0?ft.length:0,Se=ye.get(k),At=d.state.lights;if(te===!0&&(me===!0||b!==S)){const Ft=b===S&&k.id===E;Q.setState(k,b,Ft)}let Ze=!1;k.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==At.state.version||Se.outputColorSpace!==ue||F.isBatchedMesh&&Se.batching===!1||!F.isBatchedMesh&&Se.batching===!0||F.isBatchedMesh&&Se.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Se.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Se.instancing===!1||!F.isInstancedMesh&&Se.instancing===!0||F.isSkinnedMesh&&Se.skinning===!1||!F.isSkinnedMesh&&Se.skinning===!0||F.isInstancedMesh&&Se.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Se.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Se.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Se.instancingMorph===!1&&F.morphTexture!==null||Se.envMap!==pe||k.fog===!0&&Se.fog!==J||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==Q.numPlanes||Se.numIntersection!==Q.numIntersection)||Se.vertexAlphas!==De||Se.vertexTangents!==Le||Se.morphTargets!==Me||Se.morphNormals!==Xe||Se.morphColors!==je||Se.toneMapping!==_t||Se.morphTargetsCount!==qe)&&(Ze=!0):(Ze=!0,Se.__version=k.version);let pn=Se.currentProgram;Ze===!0&&(pn=Ns(k,U,F));let ia=!1,Zt=!1,as=!1;const ut=pn.getUniforms(),an=Se.uniforms;if(xe.useProgram(pn.program)&&(ia=!0,Zt=!0,as=!0),k.id!==E&&(E=k.id,Zt=!0),ia||S!==b){xe.buffers.depth.getReversed()?(se.copy(b.projectionMatrix),pf(se),mf(se),ut.setValue(L,"projectionMatrix",se)):ut.setValue(L,"projectionMatrix",b.projectionMatrix),ut.setValue(L,"viewMatrix",b.matrixWorldInverse);const Wt=ut.map.cameraPosition;Wt!==void 0&&Wt.setValue(L,Ie.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ut.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),S!==b&&(S=b,Zt=!0,as=!0)}if(F.isSkinnedMesh){ut.setOptional(L,F,"bindMatrix"),ut.setOptional(L,F,"bindMatrixInverse");const Ft=F.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ut.setValue(L,"boneTexture",Ft.boneTexture,R))}F.isBatchedMesh&&(ut.setOptional(L,F,"batchingTexture"),ut.setValue(L,"batchingTexture",F._matricesTexture,R),ut.setOptional(L,F,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",F._indirectTexture,R),ut.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",F._colorsTexture,R));const sn=z.morphAttributes;if((sn.position!==void 0||sn.normal!==void 0||sn.color!==void 0)&&Pe.update(F,z,pn),(Zt||Se.receiveShadow!==F.receiveShadow)&&(Se.receiveShadow=F.receiveShadow,ut.setValue(L,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(an.envMap.value=pe,an.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(an.envMapIntensity.value=U.environmentIntensity),Zt&&(ut.setValue(L,"toneMappingExposure",v.toneMappingExposure),Se.needsLights&&sd(an,as),J&&k.fog===!0&&re.refreshFogUniforms(an,J),re.refreshMaterialUniforms(an,k,V,K,d.state.transmissionRenderTarget[b.id]),Mr.upload(L,pc(Se),an,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Mr.upload(L,pc(Se),an,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ut.setValue(L,"center",F.center),ut.setValue(L,"modelViewMatrix",F.modelViewMatrix),ut.setValue(L,"normalMatrix",F.normalMatrix),ut.setValue(L,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Ft=k.uniformsGroups;for(let Wt=0,qr=Ft.length;Wt<qr;Wt++){const yi=Ft[Wt];I.update(yi,pn),I.bind(yi,pn)}}return pn}function sd(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function rd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(b,U,z){ye.get(b.texture).__webglTexture=U,ye.get(b.depthTexture).__webglTexture=z;const k=ye.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,U){const z=ye.get(b);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,z=0){D=b,T=U,A=z;let k=!0,F=null,J=!1,ae=!1;if(b){const pe=ye.get(b);if(pe.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(L.FRAMEBUFFER,null),k=!1;else if(pe.__webglFramebuffer===void 0)R.setupRenderTarget(b);else if(pe.__hasExternalTextures)R.rebindTextures(b,ye.get(b.texture).__webglTexture,ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Me=b.depthTexture;if(pe.__boundDepthTexture!==Me){if(Me!==null&&ye.has(Me)&&(b.width!==Me.image.width||b.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(b)}}const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ae=!0);const Le=ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?F=Le[U][z]:F=Le[U],J=!0):b.samples>0&&R.useMultisampledRTT(b)===!1?F=ye.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[z]:F=Le,P.copy(b.viewport),B.copy(b.scissor),N=b.scissorTest}else P.copy(_e).multiplyScalar(V).floor(),B.copy(Fe).multiplyScalar(V).floor(),N=Je;if(xe.bindFramebuffer(L.FRAMEBUFFER,F)&&k&&xe.drawBuffers(b,F),xe.viewport(P),xe.scissor(B),xe.setScissorTest(N),J){const pe=ye.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,z)}else if(ae){const pe=ye.get(b.texture),De=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.__webglTexture,z||0,De)}E=-1},this.readRenderTargetPixels=function(b,U,z,k,F,J,ae){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue){xe.bindFramebuffer(L.FRAMEBUFFER,ue);try{const pe=b.texture,De=pe.format,Le=pe.type;if(!Ve.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-k&&z>=0&&z<=b.height-F&&L.readPixels(U,z,k,F,Ne.convert(De),Ne.convert(Le),J)}finally{const pe=D!==null?ye.get(D).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,pe)}}},this.readRenderTargetPixelsAsync=async function(b,U,z,k,F,J,ae){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ae!==void 0&&(ue=ue[ae]),ue){const pe=b.texture,De=pe.format,Le=pe.type;if(!Ve.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=b.width-k&&z>=0&&z<=b.height-F){xe.bindFramebuffer(L.FRAMEBUFFER,ue);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,J.byteLength,L.STREAM_READ),L.readPixels(U,z,k,F,Ne.convert(De),Ne.convert(Le),0);const Xe=D!==null?ye.get(D).__webglFramebuffer:null;xe.bindFramebuffer(L.FRAMEBUFFER,Xe);const je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ff(L,je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,J),L.deleteBuffer(Me),L.deleteSync(je),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,U=null,z=0){b.isTexture!==!0&&(ba("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-z),F=Math.floor(b.image.width*k),J=Math.floor(b.image.height*k),ae=U!==null?U.x:0,ue=U!==null?U.y:0;R.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,z,0,0,ae,ue,F,J),xe.unbindTexture()};const od=L.createFramebuffer(),ld=L.createFramebuffer();this.copyTextureToTexture=function(b,U,z=null,k=null,F=0,J=null){b.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],U=arguments[2],J=arguments[3]||0,z=null),J===null&&(F!==0?(ba("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=F,F=0):J=0);let ae,ue,pe,De,Le,Me,Xe,je,_t;const ft=b.isCompressedTexture?b.mipmaps[J]:b.image;if(z!==null)ae=z.max.x-z.min.x,ue=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Le=z.min.y,Me=z.isBox3?z.min.z:0;else{const sn=Math.pow(2,-F);ae=Math.floor(ft.width*sn),ue=Math.floor(ft.height*sn),b.isDataArrayTexture?pe=ft.depth:b.isData3DTexture?pe=Math.floor(ft.depth*sn):pe=1,De=0,Le=0,Me=0}k!==null?(Xe=k.x,je=k.y,_t=k.z):(Xe=0,je=0,_t=0);const qe=Ne.convert(U.format),Se=Ne.convert(U.type);let At;U.isData3DTexture?(R.setTexture3D(U,0),At=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),At=L.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),At=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ia=L.getParameter(L.UNPACK_SKIP_PIXELS),Zt=L.getParameter(L.UNPACK_SKIP_ROWS),as=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ft.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,De),L.pixelStorei(L.UNPACK_SKIP_ROWS,Le),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Me);const ut=b.isDataArrayTexture||b.isData3DTexture,an=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const sn=ye.get(b),Ft=ye.get(U),Wt=ye.get(sn.__renderTarget),qr=ye.get(Ft.__renderTarget);xe.bindFramebuffer(L.READ_FRAMEBUFFER,Wt.__webglFramebuffer),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let yi=0;yi<pe;yi++)ut&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(b).__webglTexture,F,Me+yi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ye.get(U).__webglTexture,J,_t+yi)),L.blitFramebuffer(De,Le,ae,ue,Xe,je,ae,ue,L.DEPTH_BUFFER_BIT,L.NEAREST);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||ye.has(b)){const sn=ye.get(b),Ft=ye.get(U);xe.bindFramebuffer(L.READ_FRAMEBUFFER,od),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,ld);for(let Wt=0;Wt<pe;Wt++)ut?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,sn.__webglTexture,F,Me+Wt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,sn.__webglTexture,F),an?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,J,_t+Wt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,J),F!==0?L.blitFramebuffer(De,Le,ae,ue,Xe,je,ae,ue,L.COLOR_BUFFER_BIT,L.NEAREST):an?L.copyTexSubImage3D(At,J,Xe,je,_t+Wt,De,Le,ae,ue):L.copyTexSubImage2D(At,J,Xe,je,De,Le,ae,ue);xe.bindFramebuffer(L.READ_FRAMEBUFFER,null),xe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else an?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(At,J,Xe,je,_t,ae,ue,pe,qe,Se,ft.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(At,J,Xe,je,_t,ae,ue,pe,qe,ft.data):L.texSubImage3D(At,J,Xe,je,_t,ae,ue,pe,qe,Se,ft):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,J,Xe,je,ae,ue,qe,Se,ft.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,J,Xe,je,ft.width,ft.height,qe,ft.data):L.texSubImage2D(L.TEXTURE_2D,J,Xe,je,ae,ue,qe,Se,ft);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ze),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ia),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,as),J===0&&U.generateMipmaps&&L.generateMipmap(At),xe.unbindTexture()},this.copyTextureToTexture3D=function(b,U,z=null,k=null,F=0){return b.isTexture!==!0&&(ba("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,b=arguments[2],U=arguments[3],F=arguments[4]||0),ba('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,U,z,k,F)},this.initRenderTarget=function(b){ye.get(b).__webglFramebuffer===void 0&&R.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?R.setTextureCube(b,0):b.isData3DTexture?R.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?R.setTexture2DArray(b,0):R.setTexture2D(b,0),xe.unbindTexture()},this.resetState=function(){T=0,A=0,D=null,xe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}const bo={type:"change"},Ql={type:"start"},ec={type:"end"},yu=1e-6,Ke={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},cr=new ve,ii=new ve,zv=new C,ur=new C,wo=new C,Sa=new Bt,Mu=new C,hr=new C,To=new C,dr=new C;class kv extends tp{constructor(e,t=null){super(e,t),this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Pa.ROTATE,MIDDLE:Pa.DOLLY,RIGHT:Pa.PAN},this.state=Ke.NONE,this.keyState=Ke.NONE,this.target=new C,this._lastPosition=new C,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new C,this._movePrev=new ve,this._moveCurr=new ve,this._lastAxis=new C,this._zoomStart=new ve,this._zoomEnd=new ve,this._panStart=new ve,this._panEnd=new ve,this._pointers=[],this._pointerPositions={},this._onPointerMove=Hv.bind(this),this._onPointerDown=Vv.bind(this),this._onPointerUp=Gv.bind(this),this._onPointerCancel=Wv.bind(this),this._onContextMenu=$v.bind(this),this._onMouseWheel=Zv.bind(this),this._onKeyDown=qv.bind(this),this._onKeyUp=Xv.bind(this),this._onTouchStart=Jv.bind(this),this._onTouchMove=Qv.bind(this),this._onTouchEnd=e_.bind(this),this._onMouseDown=Yv.bind(this),this._onMouseMove=Kv.bind(this),this._onMouseUp=jv.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,t!==null&&(this.connect(),this.handleResize()),this.update()}connect(){window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const e=this.domElement.getBoundingClientRect(),t=this.domElement.ownerDocument.documentElement;this.screen.left=e.left+window.pageXOffset-t.clientLeft,this.screen.top=e.top+window.pageYOffset-t.clientTop,this.screen.width=e.width,this.screen.height=e.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>yu&&(this.dispatchEvent(bo),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>yu||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(bo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=Ke.NONE,this.keyState=Ke.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(bo),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(ii.copy(this._panEnd).sub(this._panStart),ii.lengthSq()){if(this.object.isOrthographicCamera){const e=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,t=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;ii.x*=e,ii.y*=t}ii.multiplyScalar(this._eye.length()*this.panSpeed),ur.copy(this._eye).cross(this.object.up).setLength(ii.x),ur.add(zv.copy(this.object.up).setLength(ii.y)),this.object.position.add(ur),this.target.add(ur),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(ii.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){dr.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let e=dr.length();e?(this._eye.copy(this.object.position).sub(this.target),Mu.copy(this._eye).normalize(),hr.copy(this.object.up).normalize(),To.crossVectors(hr,Mu).normalize(),hr.setLength(this._moveCurr.y-this._movePrev.y),To.setLength(this._moveCurr.x-this._movePrev.x),dr.copy(hr.add(To)),wo.crossVectors(dr,this._eye).normalize(),e*=this.rotateSpeed,Sa.setFromAxisAngle(wo,e),this._eye.applyQuaternion(Sa),this.object.up.applyQuaternion(Sa),this._lastAxis.copy(wo),this._lastAngle=e):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Sa.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Sa),this.object.up.applyQuaternion(Sa)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let e;this.state===Ke.TOUCH_ZOOM_PAN?(e=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Tr.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(e=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,e!==1&&e>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(e):this.object.isOrthographicCamera?(this.object.zoom=Tr.clamp(this.object.zoom/e,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(e,t){return cr.set((e-this.screen.left)/this.screen.width,(t-this.screen.top)/this.screen.height),cr}_getMouseOnCircle(e,t){return cr.set((e-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-t))/this.screen.width),cr}_addPointer(e){this._pointers.push(e)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId==e.pointerId){this._pointers.splice(t,1);return}}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ve,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[t.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function Vv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i))}function Hv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Gv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchEnd(i):this._onMouseUp(),this._removePointer(i),this._pointers.length===0&&(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp)))}function Wv(i){this._removePointer(i)}function Xv(){this.enabled!==!1&&(this.keyState=Ke.NONE,window.addEventListener("keydown",this._onKeyDown))}function qv(i){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===Ke.NONE&&(i.code===this.keys[Ke.ROTATE]&&!this.noRotate?this.keyState=Ke.ROTATE:i.code===this.keys[Ke.ZOOM]&&!this.noZoom?this.keyState=Ke.ZOOM:i.code===this.keys[Ke.PAN]&&!this.noPan&&(this.keyState=Ke.PAN)))}function Yv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pa.DOLLY:this.state=Ke.ZOOM;break;case Pa.ROTATE:this.state=Ke.ROTATE;break;case Pa.PAN:this.state=Ke.PAN;break;default:this.state=Ke.NONE}const t=this.keyState!==Ke.NONE?this.keyState:this.state;t===Ke.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr)):t===Ke.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._zoomEnd.copy(this._zoomStart)):t===Ke.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(i.pageX,i.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(Ql)}function Kv(i){const e=this.keyState!==Ke.NONE?this.keyState:this.state;e===Ke.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY))):e===Ke.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY)):e===Ke.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(i.pageX,i.pageY))}function jv(){this.state=Ke.NONE,this.dispatchEvent(ec)}function Zv(i){if(this.enabled!==!1&&this.noZoom!==!0){switch(i.preventDefault(),i.deltaMode){case 2:this._zoomStart.y-=i.deltaY*.025;break;case 1:this._zoomStart.y-=i.deltaY*.01;break;default:this._zoomStart.y-=i.deltaY*25e-5;break}this.dispatchEvent(Ql),this.dispatchEvent(ec)}}function $v(i){this.enabled!==!1&&i.preventDefault()}function Jv(i){switch(this._trackPointer(i),this._pointers.length){case 1:this.state=Ke.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);break;default:this.state=Ke.TOUCH_ZOOM_PAN;const e=this._pointers[0].pageX-this._pointers[1].pageX,t=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(e*e+t*t);const n=(this._pointers[0].pageX+this._pointers[1].pageX)/2,a=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(n,a)),this._panEnd.copy(this._panStart);break}this.dispatchEvent(Ql)}function Qv(i){switch(this._trackPointer(i),this._pointers.length){case 1:this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY));break;default:const e=this._getSecondPointerPosition(i),t=i.pageX-e.x,n=i.pageY-e.y;this._touchZoomDistanceEnd=Math.sqrt(t*t+n*n);const a=(i.pageX+e.x)/2,s=(i.pageY+e.y)/2;this._panEnd.copy(this._getMouseOnScreen(a,s));break}}function e_(i){switch(this._pointers.length){case 0:this.state=Ke.NONE;break;case 1:this.state=Ke.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(i.pageX,i.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=Ke.TOUCH_ZOOM_PAN;for(let e=0;e<this._pointers.length;e++)if(this._pointers[e].pointerId!==i.pointerId){const t=this._pointerPositions[this._pointers[e].pointerId];this._moveCurr.copy(this._getMouseOnCircle(t.x,t.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(ec)}class t_{constructor(e,t,n,a,s=null){this.camera=e,this.domElement=t,this.scene=n,this.onExitCallback=a,this.externalInput=s,this.planetMesh=null,this.planetGroup=null,this.surfaceRay=new El,this.planetRadius=10,this.walkSpeed=5,this.runSpeed=10,this.flySpeed=10,this.swimSpeed=3,this.jumpForce=2,this.gravity=30,this.playerHeight=.04,this.enabled=!1,this.isLocked=!1,this.isFlying=!1,this.isSwimming=!1,this.moveForward=!1,this.moveBackward=!1,this.moveLeft=!1,this.moveRight=!1,this.moveUp=!1,this.moveDown=!1,this.rollLeft=!1,this.rollRight=!1,this.isRunning=!1,this.canJump=!1,this.velocity=new C,this.direction=new C,this.verticalVelocity=0,this.player=new yt,this.player.name="TinyPlanetPlayer",this.raycaster=new El,this.worldUp=new C,this.dummyVec=new C,this.dummyQuat=new Bt,this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onPointerLockChange=this.onPointerLockChange.bind(this)}setPlanet(e){this.planetMesh=e}enter(e,t){if(this.enabled)return;this.enabled=!0,this.planetMesh=t,this.planetGroup=t.parent;const n=e.clone();this.planetMesh.worldToLocal(n);const a=n.normalize();this.planetMesh.add(this.player);const s=n.length()+2;this.player.position.copy(a).multiplyScalar(s);const r=new Bt;r.setFromUnitVectors(new C(0,1,0),a),this.player.quaternion.copy(r),this.player.up.copy(a),this.player.add(this.camera),this.camera.position.set(0,0,0),this.camera.rotation.set(0,0,0),this.velocity.set(0,0,0),this.verticalVelocity=0,this.isFlying=!1,this.externalInput&&this.externalInput.setLookMode&&this.externalInput.setLookMode("surface"),!/Mobi|Android|iP(ad|hone|od)/i.test(navigator.userAgent||"")&&this.domElement.requestPointerLock&&this.domElement.requestPointerLock(),this.addListeners()}exit(){this.enabled&&(this.enabled=!1,this.removeListeners(),document.exitPointerLock(),this.player.remove(this.camera),this.scene.add(this.camera),this.player.parent&&this.player.parent.remove(this.player),this.onExitCallback&&this.onExitCallback(),this.externalInput&&(this.externalInput.clear(),this.externalInput.setLookMode&&this.externalInput.setLookMode("orbit")))}addListeners(){this.externalInput||(document.addEventListener("keydown",this.onKeyDown),document.addEventListener("keyup",this.onKeyUp)),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("pointerlockchange",this.onPointerLockChange)}removeListeners(){this.externalInput||(document.removeEventListener("keydown",this.onKeyDown),document.removeEventListener("keyup",this.onKeyUp)),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("pointerlockchange",this.onPointerLockChange)}onPointerLockChange(){this.isLocked=document.pointerLockElement===this.domElement,!this.isLocked&&this.enabled}onKeyDown(e){switch(e.code){case"ArrowUp":this.camera.rotateX(-.02),this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x));break;case"ArrowDown":this.camera.rotateX(.02),this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x));break;case"ArrowLeft":this.player.rotateY(.03);break;case"ArrowRight":this.player.rotateY(-.03);break;case"KeyW":this.moveForward=!0;break;case"KeyA":this.moveLeft=!0;break;case"KeyS":this.moveBackward=!0;break;case"KeyD":this.moveRight=!0;break;case"Space":this.isFlying?this.moveUp=!0:this.canJump&&(this.verticalVelocity=this.jumpForce,this.canJump=!1);break;case"ControlLeft":this.moveDown=!0;break;case"ShiftLeft":this.isRunning=!0;break;case"KeyF":this.toggleFlight();break;case"KeyQ":this.rollLeft=!0;break;case"KeyE":this.rollRight=!0;break;case"Escape":this.exit();break}}onKeyUp(e){switch(e.code){case"KeyW":this.moveForward=!1;break;case"KeyA":this.moveLeft=!1;break;case"KeyS":this.moveBackward=!1;break;case"KeyD":this.moveRight=!1;break;case"Space":this.moveUp=!1;break;case"ControlLeft":this.moveDown=!1;break;case"ShiftLeft":this.isRunning=!1;break;case"KeyQ":this.rollLeft=!1;break;case"KeyE":this.rollRight=!1;break}}onMouseMove(e){if(!this.isLocked)return;const t=e.movementX||0,n=e.movementY||0;if(this.isFlying){const a=new C(0,1,0).applyQuaternion(this.camera.quaternion);this.player.rotateOnAxis(a,-t*.002),this.camera.rotateX(-n*.002)}else this.player.rotateY(-t*.002),this.camera.rotateX(-n*.002),this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x))}toggleFlight(){if(this.isFlying=!this.isFlying,this.verticalVelocity=0,!this.isFlying){const e=this.player.position.clone().normalize(),t=new C(0,1,0),n=new Bt().setFromUnitVectors(t,e);this.player.quaternion.copy(n),this.player.up.copy(e),this.camera.rotation.x=0,this.velocity.set(0,0,0)}}snapToSurface(){var h,f;if(!this.planetMesh||!((h=this.planetMesh.userData)!=null&&h.forge)||!((f=this.planetMesh.userData)!=null&&f.settings))return;const e=this.planetMesh.userData.forge,t=this.planetMesh.userData.settings;this.surfaceRay.setFromCamera(new ve(0,0),this.camera);const n=this.surfaceRay.intersectObject(this.planetMesh,!1);if(!n.length)return;const s=n[0].point.clone().clone();this.planetMesh.worldToLocal(s);const r=s.normalize(),o=e.getHeightAt(r),l=t.radius+(o-t.seaLevel)*t.heightScale+this.playerHeight,c=r.clone().multiplyScalar(l+.2);this.player.position.copy(c);const u=new Bt().setFromUnitVectors(new C(0,1,0),r);this.player.quaternion.copy(u),this.player.up.copy(r),this.camera.rotation.set(0,0,0),this.velocity.set(0,0,0),this.verticalVelocity=0}update(e){if(!this.enabled)return;if(this.externalInput){const s=this.externalInput.getState();if(this.moveForward=!!s.forward,this.moveBackward=!!s.backward,this.moveLeft=!!s.left,this.moveRight=!!s.right,this.moveUp=!!s.up,this.moveDown=!!s.down,this.isRunning=!!s.run,this.rollLeft=!!s.rollLeft,this.rollRight=!!s.rollRight,this.externalInput.consume("flyToggle")&&this.toggleFlight(),this.externalInput.consume("exit")){this.exit();return}this.externalInput.consume("surface")&&this.snapToSurface(),!this.isFlying&&!this.isSwimming&&this.canJump&&this.externalInput.consume("jump")&&(this.verticalVelocity=this.jumpForce,this.canJump=!1);const r=this.externalInput.consumeLookDelta();if(Math.abs(r.x)>1e-4||Math.abs(r.y)>1e-4){const o=-r.x*.01,l=-r.y*.01;this.player.rotateY(o),this.camera.rotateX(l),this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x))}}let t=!1;if(this.planetMesh&&this.planetMesh.userData.forge){const s=this.planetMesh.userData.forge,r=this.planetMesh.userData.settings;this.player.getWorldPosition(this.dummyVec);const o=Math.abs(this.dummyVec.normalize().y),l=Math.max(0,Math.min(1,1-r.iceCap));t=o>l;const c=this.player.position.clone().normalize(),u=s.getWaterDataAt(c),h=r.radius+(u.waterHeight-r.seaLevel)*r.heightScale,f=this.player.position.length(),m=u.hasWater&&u.waterMask>.15;if(!t&&m&&f<h+.05)this.isSwimming||(this.isSwimming=!0,this.verticalVelocity=0);else if(this.isSwimming&&(f>h+.3||!m||t)){this.isSwimming=!1;const g=this.player.position.clone().normalize(),_=new Bt().setFromUnitVectors(this.player.up,g);this.player.quaternion.premultiply(_),this.player.up.copy(g),this.camera.rotation.x=0,this.verticalVelocity=0}}this.velocity.x-=this.velocity.x*10*e,this.velocity.z-=this.velocity.z*10*e;let n=this.walkSpeed;this.isFlying?n=this.flySpeed:this.isSwimming?n=this.swimSpeed:this.isRunning&&(n=this.runSpeed);const a=new C;if(this.moveForward&&(a.z-=1),this.moveBackward&&(a.z+=1),this.moveLeft&&(a.x-=1),this.moveRight&&(a.x+=1),a.normalize(),this.isFlying||this.isSwimming){const s=a.clone().multiplyScalar(n*e);s.applyQuaternion(this.camera.quaternion),s.applyQuaternion(this.player.quaternion),this.player.position.add(s);const r=Number(this.rollLeft)-Number(this.rollRight);r!==0&&this.camera.rotateZ(r*2*e)}else{const s=this.player.position.clone().normalize(),r=new C(0,0,-1).applyQuaternion(this.camera.quaternion).projectOnPlane(s).normalize(),o=new C().crossVectors(r,s).normalize(),l=new C;l.addScaledVector(r,a.z),l.addScaledVector(o,a.x),l.lengthSq()>1e-6&&(l.normalize().multiplyScalar(n*e),this.player.position.add(l)),this.verticalVelocity-=this.gravity*e,this.player.translateY(this.verticalVelocity*e);let c=this.planetRadius;const u=this.planetMesh.userData.forge,h=this.planetMesh.userData.settings;if(u&&h){const p=this.player.position.clone().normalize(),d=u.getHeightAt(p);c=h.radius+(d-h.seaLevel)*h.heightScale}if(this.player.position.length()<=c+.05&&(this.verticalVelocity=Math.max(0,this.verticalVelocity),this.canJump=!0),this.player.position.length()<c){const p=this.player.position.clone().normalize();this.player.position.copy(p.multiplyScalar(c+this.playerHeight)),this.verticalVelocity=0,this.canJump=!0}const g=this.player.position.clone().normalize(),_=new Bt().setFromUnitVectors(this.player.up,g);this.player.quaternion.premultiply(_),this.player.up.copy(g),this.camera.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,this.camera.rotation.x))}}}function Su(i,e=1e-4){e=Math.max(e,Number.EPSILON);const t={},n=i.getIndex(),a=i.getAttribute("position"),s=n?n.count:a.count;let r=0;const o=Object.keys(i.attributes),l={},c={},u=[],h=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let x=0,y=o.length;x<y;x++){const v=o[x],w=i.attributes[v];l[v]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);const T=i.morphAttributes[v];T&&(c[v]||(c[v]=[]),T.forEach((A,D)=>{const E=new A.array.constructor(A.count*A.itemSize);c[v][D]=new A.constructor(E,A.itemSize,A.normalized)}))}const m=e*.5,g=Math.log10(1/e),_=Math.pow(10,g),p=m*_;for(let x=0;x<s;x++){const y=n?n.getX(x):x;let v="";for(let w=0,T=o.length;w<T;w++){const A=o[w],D=i.getAttribute(A),E=D.itemSize;for(let S=0;S<E;S++)v+=`${~~(D[h[S]](y)*_+p)},`}if(v in t)u.push(t[v]);else{for(let w=0,T=o.length;w<T;w++){const A=o[w],D=i.getAttribute(A),E=i.morphAttributes[A],S=D.itemSize,P=l[A],B=c[A];for(let N=0;N<S;N++){const W=h[N],q=f[N];if(P[q](r,D[W](y)),E)for(let G=0,K=E.length;G<K;G++)B[G][q](r,E[G][W](y))}}t[v]=r,u.push(r),r++}}const d=i.clone();for(const x in i.attributes){const y=l[x];if(d.setAttribute(x,new y.constructor(y.array.slice(0,r*y.itemSize),y.itemSize,y.normalized)),x in c)for(let v=0;v<c[x].length;v++){const w=c[x][v];d.morphAttributes[x][v]=new w.constructor(w.array.slice(0,r*w.itemSize),w.itemSize,w.normalized)}}return d.setIndex(u),d}const Eu=(()=>{const i=new Uint8Array([0,0,128,0]),e=new _i(i,1,1,Mt,Rt);return e.needsUpdate=!0,e.wrapS=bn,e.wrapT=vt,e.minFilter=ot,e.magFilter=ot,e.generateMipmaps=!1,e.colorSpace=Lt,e})(),bu=(()=>{const i=new Uint8Array([160,0,128,128]),e=new _i(i,1,1,Mt,Rt);return e.needsUpdate=!0,e.wrapS=bn,e.wrapT=vt,e.minFilter=ot,e.magFilter=ot,e.generateMipmaps=!1,e.colorSpace=Lt,e})();class n_{constructor(e=512){this.size=e,this.data=new Float32Array(e*e),this.waterMask=new Float32Array(e*e),this.rng=Math.random}generateTectonics({numPlates:e=15,jitter:t=.5,oceanFloor:n=.2,plateDelta:a=1,faultType:s="ridge",plateSizeVariance:r=0,desymmetrizeTiling:o=!1}){console.time("Tectonics Generation");const l=Math.max(0,r),c=[];for(let u=0;u<e;u++)c.push({x:Math.floor(this.rng()*this.size),y:Math.floor(this.rng()*this.size),z:this.rng()*.5+.5,type:this.rng()>.6?1:-1,sizeBias:Math.max(.25,1+(this.rng()*2-1)*l),skew:o?(this.rng()*2-1)*l*.5*this.size:0});for(let u=0;u<this.size;u++)for(let h=0;h<this.size;h++){let f=1/0,m=1/0,g=null;for(const y of c){const w=((o?y.x+y.skew*(u/this.size):y.x)%this.size+this.size)%this.size,T=Math.min(Math.abs(h-w),this.size-Math.abs(h-w)),A=u-y.y,E=Math.sqrt(T*T+A*A)/y.sizeBias;E<f?(m=f,f=E,g=y):E<m&&(m=E)}const _=f/(m+.001);let p=0;g.type>0?p=g.z*a-_*t:p=n-.08+_*.05;const d=Math.pow(_,5)*g.z;let x=s;if(s==="mixed"){const y=Math.abs(Math.sin((g.x+g.y+g.z)*12.9898));x=y<.33?"ridge":y<.66?"trench":"shear"}x==="ridge"?p+=d:x==="trench"?p-=d*.7:x==="shear"?p+=d*.2*Math.sign(g.type):p+=d,this.data[u*this.size+h]=Math.max(0,Math.min(1,p))}console.timeEnd("Tectonics Generation")}applyErosion({iterations:e=5e4,inertia:t=.05,gravity:n=4,evaporation:a=.01,erosionRate:s=.3,depositionRate:r=.1}){console.time("Hydraulic Erosion");const o=this.size;for(let l=0;l<e;l++){let c=this.rng()*(o-1),u=this.rng()*(o-1),h=0,f=0,m=1,g=1,_=0;for(let p=0;p<30;p++){let d=Math.floor(c),x=Math.floor(u),y=(d+o)%o,v=(d+1+o)%o,w=Math.max(0,Math.min(o-1,x));const T=this.data[w*o+y],A=this.data[w*o+(d-1+o)%o],D=this.data[w*o+v],E=this.data[Math.max(0,x-1)*o+y],S=this.data[Math.min(o-1,x+1)*o+y],P=D-A,B=S-E;h=h*t-P*(1-t),f=f*t-B*(1-t);const N=Math.sqrt(h*h+f*f);if(N!==0&&(h/=N,f/=N),c+=h,u+=f,u<0||u>=o-1||!Number.isFinite(u)||!Number.isFinite(c))break;const W=Math.max(0,Math.min(o-1,Math.floor(u))),q=(Math.floor(c)+o)%o;let G=this.data[W*o+q],K=T-G;const V=Math.max(-K,.01)*m*g*4;if(_>V||K<0){const ee=(_-V)*r;_-=ee,this.data[w*o+y]+=ee}else{const ee=Math.min((V-_)*s,-K);_+=ee,this.data[w*o+y]-=ee}if(m=Math.sqrt(m*m+Math.max(0,K)*n),g*=1-a,g<.01)break}}console.timeEnd("Hydraulic Erosion"),this._sanitize()}createMesh(e=10,t=2,n=.5,a=6,s=.12,r=null,o=null){this._sanitize();let l=new mi(e,Math.max(0,Math.floor(a)));l.deleteAttribute("uv"),l=Su(l);const c=x=>Math.min(Math.max(x,0),1),u=(x,y,v)=>{const w=c(x)*(this.size-1),T=c(1-y)*(this.size-1),A=Math.floor(w),D=Math.floor(T),E=Math.min(this.size-1,A+1),S=Math.min(this.size-1,D+1),P=w-A,B=T-D,N=v[D*this.size+A],W=v[D*this.size+E],q=v[S*this.size+A],G=v[S*this.size+E],K=N*(1-P)+W*P,V=q*(1-P)+G*P,ee=K*(1-B)+V*B;return Number.isFinite(ee)?ee:0},h=(x,y)=>u(x,y,this.data),f=(x,y)=>u(x,y,this.waterMask),m=x=>{const y=new C(Math.abs(x.x),Math.abs(x.y),Math.abs(x.z)),v=y.x+y.y+y.z+1e-6,w=y.x/v,T=y.y/v,A=y.z/v,D={u:x.z*.5+.5,v:x.y*.5+.5},E={u:x.x*.5+.5,v:x.z*.5+.5},S={u:x.x*.5+.5,v:x.y*.5+.5},P=h(D.u,D.v),B=h(E.u,E.v),N=h(S.u,S.v);return P*w+B*T+N*A},g=l.attributes.position,_=new C,p=new Float32Array(g.count);for(let x=0;x<g.count;x++){_.fromBufferAttribute(g,x);const y=_.length();if(y===0||!Number.isFinite(y)){_.set(e,0,0),g.setXYZ(x,_.x,_.y,_.z);continue}const v=_.clone().normalize(),w=m(v),T=f(v.x*.5+.5,v.y*.5+.5),A=(w-n)*t;v.multiplyScalar(e+A),g.setXYZ(x,v.x,v.y,v.z),p[x]=T}l.computeVertexNormals(),this._ensureFinitePositions(l,e),l.normalizeNormals(),l.setAttribute("waterMask",new Ht(p,1));const d=new Xf({shininess:50,specular:new Ee(6710886),color:8947848,flatShading:!1,onBeforeCompile:function(x){var y,v,w,T;x.vertexShader=`
                    varying float vHeight;
                    varying vec3 vDir;
                    attribute float waterMask;
                    varying float vWater;
                    varying float vSlope;
                    uniform float uIceCap;
                    ${x.vertexShader}
                `.replace("#include <begin_vertex>",`
                    #include <begin_vertex>
                    vHeight = length(transformed) - ${e.toFixed(1)};
                    vDir = normalize(transformed);
                    vWater = waterMask;
                    vSlope = 1.0 - dot(normalize(normal), normalize(position));
                    float rough = smoothstep(0.2, 0.7, vSlope);
                    float rockNoise = sin(dot(position.xyz, vec3(12.9898,78.233,37.719))) * 0.5 + 0.5;
                    transformed += normalize(normal) * rockNoise * rough * 0.08;
                    `),x.fragmentShader=`
                    varying float vHeight;
                    varying vec3 vDir;
                    varying float vWater;
                    varying float vSlope;
                    uniform float uIceCap;
                    uniform sampler2D uWeatherMap;
                    uniform sampler2D uWeatherAuxMap;
                    uniform float uWeatherStrength;
                    uniform float uWeatherDebug;
                    
	                    float hash(vec3 p) {
	                        p = fract(p * 0.3183099 + .1);
	                        p *= 17.0;
	                        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
	                    }

	                    vec3 hsv2rgb(vec3 c) {
	                        vec4 K = vec4(1.0, 2.0/3.0, 1.0/3.0, 3.0);
	                        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
	                        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
	                    }
	                    
	                    ${x.fragmentShader}
	                `.replace("#include <color_fragment>",`
                    // Recover normalized height value used for displacement
                    float heightVal = (vHeight / ${t.toFixed(3)}) + ${n.toFixed(3)};
                    // Thresholds relative to sea level
                    float sea = ${n.toFixed(3)};
                    float shore = sea + 0.015;
                    float lowland = sea + 0.08;
                    float midland = sea + 0.25;
                    float highland = sea + 0.45;
                    vec3 deep = vec3(0.01, 0.04, 0.12);
                    vec3 shallow = vec3(0.04, 0.20, 0.40);
                    vec3 grass = vec3(0.12, 0.44, 0.18);
                    vec3 rock = vec3(0.45, 0.45, 0.45);
                    vec3 snow = vec3(1.0, 1.0, 1.0);
                    vec3 col;
                    float waterFactor = vWater;

                    // Weather wetness (RGBA: cloud, rain, pressure, soil)
                    vec3 d = normalize(vDir);
                    float wu = atan(d.z, d.x) / (2.0 * 3.14159265) + 0.5;
                    float wv = asin(clamp(d.y, -1.0, 1.0)) / 3.14159265 + 0.5;
                    vec4 wData = texture2D(uWeatherMap, vec2(wu, wv));
                    vec4 wAux = texture2D(uWeatherAuxMap, vec2(wu, wv));
                    float rainNow = wData.g;
                    float soilWet = wData.a;
                    float wetness = clamp(max(rainNow, soilWet) * uWeatherStrength, 0.0, 1.0);

	                    // Weather debug visualization:
	                    // 0=off, 1=cloud, 2=rain, 3=pressure, 4=soil, 5=temp, 6=snow, 7=wind
	                    if (uWeatherDebug > 0.5) {
	                        if (uWeatherDebug < 1.5) {
	                            float v = wData.r;
	                            col = mix(vec3(0.02, 0.08, 0.02), vec3(0.65, 1.0, 0.65), v);
	                        } else if (uWeatherDebug < 2.5) {
	                            float v = wData.g;
	                            col = mix(vec3(0.02, 0.05, 0.10), vec3(0.20, 0.55, 1.0), v);
	                        } else if (uWeatherDebug < 3.5) {
	                            float p = (wData.b - 0.5) * 2.0;
	                            col = (p >= 0.0)
	                                ? mix(vec3(0.0, 0.0, 0.0), vec3(1.0, 0.15, 0.15), clamp(p, 0.0, 1.0))
	                                : mix(vec3(0.0, 0.0, 0.0), vec3(0.15, 0.55, 1.0), clamp(-p, 0.0, 1.0));
	                        } else if (uWeatherDebug < 4.5) {
	                            float v = wData.a;
	                            col = mix(vec3(0.03, 0.03, 0.03), vec3(0.10, 1.0, 0.20), v);
	                        } else if (uWeatherDebug < 5.5) {
	                            float t = wAux.r;
	                            col = mix(vec3(0.08, 0.12, 0.35), vec3(1.0, 0.35, 0.15), t);
	                        } else if (uWeatherDebug < 6.5) {
	                            float s = wAux.g;
	                            col = mix(vec3(0.02, 0.02, 0.02), vec3(1.0, 1.0, 1.0), s);
	                        } else {
	                            vec2 wv2 = (wAux.ba - 0.5) * 2.0;
	                            float sp = clamp(length(wv2), 0.0, 1.0);
	                            float ang = atan(wv2.y, wv2.x);
	                            float hue = ang / (2.0 * 3.14159265) + 0.5;
	                            vec3 windCol = hsv2rgb(vec3(hue, 0.85, pow(sp, 0.65)));
	                            col = mix(vec3(0.02, 0.02, 0.02), windCol, smoothstep(0.05, 0.15, sp));
	                        }
	                    } else {
                        if(heightVal < sea) {
                            float t = smoothstep(sea - 0.05, sea, heightVal);
                            col = mix(deep, shallow, t);
                            waterFactor = 1.0;
                        } else if(heightVal < lowland) {
                            float t = smoothstep(sea, lowland, heightVal);
                            col = mix(shallow, grass, t);
                        } else if(heightVal < midland) {
                            float t = smoothstep(lowland, midland, heightVal);
                            col = mix(grass, rock, t);
                        } else if(heightVal < highland) {
                            float t = smoothstep(midland, highland, heightVal);
                            col = mix(rock, snow, t * 0.7);
                        } else {
                            col = snow;
                        }
                        
                        // ROCKY AREAS: modulated by slope and noise
                        float noise = hash(vDir * 80.0);
                        // Steepness threshold (0 = flat, 1 = vertical)
                        // We start mixing rock on slopes > ~10-15%
                        float steepness = smoothstep(0.1, 0.35, vSlope + (noise * 0.1 - 0.05));
                        
                        if (heightVal >= sea) {
                            col = mix(col, rock, steepness);
                        }
                        
                        // Add roughness/noise to rock areas
                        if (steepness > 0.1 || (heightVal >= midland && heightVal < highland)) {
                            col *= (0.9 + 0.2 * noise);
                        }

                        float snowBlend = smoothstep(highland - 0.02, highland + 0.1, heightVal);
	                        float pole = smoothstep(1.0 - uIceCap, 1.0, abs(vDir.y));
	                        
	                        // Reduce snow on very steep cliffs (optional realism)
	                        float snowStick = 1.0 - smoothstep(0.4, 0.6, vSlope); 
	                        float landMask = step(sea, heightVal); // avoid snow coloring underwater; ocean ice is handled by water mesh
	                        float dynSnow = wAux.g * landMask;
	                        float snowAmt = landMask * max(max(snowBlend, pole * 0.8), dynSnow) * snowStick;
	                        
	                        col = mix(col, snow, snowAmt);

                        // Wet land darkening (avoid snow/ice).
                        if (heightVal >= sea) {
                            float landWet = wetness * (1.0 - snowAmt);
                            vec3 damp = col * vec3(0.70, 0.82, 0.74);
                            col = mix(col, damp, landWet);
                        }
                        
                        if(waterFactor > 0.0) {
                            float wf = clamp(waterFactor, 0.0, 1.0);
                            vec3 wet = mix(shallow, deep, 0.6);
                            col = mix(col, wet, wf);
                        }
                    }
                    diffuseColor = vec4(col, 1.0);
                    `),x.uniforms.uIceCap={value:s},x.uniforms.uWeatherMap={value:((y=this.userData.weather)==null?void 0:y.texture)??Eu},x.uniforms.uWeatherAuxMap={value:((v=this.userData.weather)==null?void 0:v.auxTexture)??bu},x.uniforms.uWeatherStrength={value:((w=this.userData.weather)==null?void 0:w.strength)??.75},x.uniforms.uWeatherDebug={value:((T=this.userData.weather)==null?void 0:T.debug)??0},this.userData.shader=x}});return d.userData.weather={texture:r??Eu,auxTexture:o??bu,strength:.75,debug:0},new Tt(l,d)}createFreshwaterMesh(e=10,t=2,n=.5,a=6){let s=new mi(e,Math.max(0,Math.floor(a)));s.deleteAttribute("uv"),s=Su(s);const r=s.attributes.position,o=new C,l=new Float32Array(r.count),c=(g,_)=>this._sampleBilinear(g,_,this.data),u=(g,_)=>this._sampleBilinear(g,_,this.waterMask),h=g=>{const _=new C(Math.abs(g.x),Math.abs(g.y),Math.abs(g.z)),p=_.x+_.y+_.z+1e-6,d=_.x/p,x=_.y/p,y=_.z/p,v={u:g.z*.5+.5,v:g.y*.5+.5},w={u:g.x*.5+.5,v:g.z*.5+.5},T={u:g.x*.5+.5,v:g.y*.5+.5},A=c(v.u,v.v),D=c(w.u,w.v),E=c(T.u,T.v),S=u(v.u,v.v),P=u(w.u,w.v),B=u(T.u,T.v);return{height:A*d+D*x+E*y,mask:S*d+P*x+B*y}},f=this.riverDepth||.015;for(let g=0;g<r.count;g++){o.fromBufferAttribute(r,g);const _=o.clone().normalize(),p=h(_),d=p.height,x=p.mask,v=(d+x*f*.5-n)*t;_.multiplyScalar(e+v+.001),r.setXYZ(g,_.x,_.y,_.z),l[g]=x}s.computeVertexNormals(),this._ensureFinitePositions(s,e),s.normalizeNormals(),s.setAttribute("waterMask",new Ht(l,1));const m=new Kt({uniforms:{time:{value:0},deepColor:{value:new Ee(532543)},shallowColor:{value:new Ee(1396618)},opacity:{value:.8},fresnelPower:{value:3.4}},transparent:!0,depthWrite:!1,side:Dn,blending:Sn,vertexShader:`
                #include <common>
                #include <logdepthbuf_pars_vertex>
                uniform float time;
                varying vec3 vWorldPos;
                varying vec3 vNormal;
                varying float vWater;
                attribute float waterMask;
                
                void main() {
                    vWater = waterMask;
                    vec3 pos = position;
                    // Only apply waves if we have water
                    if (vWater > 0.01) {
                        float wave = sin((pos.x + pos.z) * 0.35 + time * 0.6) * 0.02;
                        pos += normalize(normal) * wave * vWater; // Scale wave by depth mask
                    }
                    vec4 worldPos = modelMatrix * vec4(pos, 1.0);
                    vWorldPos = worldPos.xyz;
                    vNormal = normalize(normalMatrix * normalize(pos));
                    vec4 mvPosition = viewMatrix * worldPos;
                    gl_Position = projectionMatrix * mvPosition;
                    #include <logdepthbuf_vertex>
                }
            `,fragmentShader:`
                #include <common>
                #include <logdepthbuf_pars_fragment>
                uniform vec3 deepColor;
                uniform vec3 shallowColor;
                uniform float opacity;
                uniform float fresnelPower;
                varying vec3 vWorldPos;
                varying vec3 vNormal;
                varying float vWater;
                
                void main() {
                    #include <logdepthbuf_fragment>
                    
                    // Discard if not water
                    if (vWater < 0.05) discard;
                    
                    vec3 viewDir = normalize(cameraPosition - vWorldPos);
                    float fresnel = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), fresnelPower);
                    
                    // Use brighter debug colors or original
                    // vec3 base = vec3(1.0, 0.0, 0.0); // Debug RED
                    vec3 base = mix(shallowColor, deepColor, fresnel);
                    
                    float sparkle = pow(fresnel, 4.0) * 0.5;
                    
                    // Fade out at edges of river
                    float alpha = opacity * smoothstep(0.05, 0.2, vWater);
                    
                    gl_FragColor = vec4(base + sparkle, alpha);
                }
            `});return new Tt(s,m)}_sanitize(e=-5,t=5){const n=this.data;for(let a=0;a<n.length;a++){let s=n[a];Number.isFinite(s)?s<e?s=e:s>t&&(s=t):s=0,n[a]=s}}_clamp01(e){return Math.min(Math.max(e,0),1)}_sampleBilinear(e,t,n){const a=this._clamp01(e)*(this.size-1),s=this._clamp01(1-t)*(this.size-1),r=Math.floor(a),o=Math.floor(s),l=Math.min(this.size-1,r+1),c=Math.min(this.size-1,o+1),u=a-r,h=s-o,f=n[o*this.size+r],m=n[o*this.size+l],g=n[c*this.size+r],_=n[c*this.size+l],p=f*(1-u)+m*u,d=g*(1-u)+_*u;return p*(1-h)+d*h}getHeightAt(e){const t=(_,p)=>this._sampleBilinear(_,p,this.data),n=new C(Math.abs(e.x),Math.abs(e.y),Math.abs(e.z)),a=n.x+n.y+n.z+1e-6,s=n.x/a,r=n.y/a,o=n.z/a,l={u:e.z*.5+.5,v:e.y*.5+.5},c={u:e.x*.5+.5,v:e.z*.5+.5},u={u:e.x*.5+.5,v:e.y*.5+.5},h=t(l.u,l.v),f=t(c.u,c.v),m=t(u.u,u.v);let g=h*s+f*r+m*o;return Number.isFinite(g)?g:0}getWaterDataAt(e){const t=(T,A)=>this._sampleBilinear(T,A,this.data),n=(T,A)=>this._sampleBilinear(T,A,this.waterMask),a=new C(Math.abs(e.x),Math.abs(e.y),Math.abs(e.z)),s=a.x+a.y+a.z+1e-6,r=a.x/s,o=a.y/s,l=a.z/s,c={u:e.z*.5+.5,v:e.y*.5+.5},u={u:e.x*.5+.5,v:e.z*.5+.5},h={u:e.x*.5+.5,v:e.y*.5+.5},f=t(c.u,c.v),m=t(u.u,u.v),g=t(h.u,h.v),_=f*r+m*o+g*l,p=n(c.u,c.v),d=n(u.u,u.v),x=n(h.u,h.v),y=p*r+d*o+x*l,v=this.riverDepth||.015,w=_+y*v*.5;return{height:Number.isFinite(_)?_:0,waterHeight:Number.isFinite(w)?w:0,waterMask:Number.isFinite(y)?y:0,hasWater:y>.05}}applyHydrology({seaLevel:e=.5,riverDepth:t=.015,lakeThreshold:n=.003}={}){this.riverDepth=t;const a=this.size,s=a*a;this.waterMask.fill(0);const r=new Float32Array(this.data),o=new Uint8Array(s),l=new Int32Array(s+a*4),c=new Float32Array(s+a*4);let u=0;const h=(v,w)=>{let T=u++;for(l[T]=v,c[T]=w;T>0;){const A=T-1>>1;if(c[A]<=w)break;l[T]=l[A],c[T]=c[A],l[A]=v,c[A]=w,T=A}},f=()=>{const v=l[0],w=c[0];if(u--,u>0){l[0]=l[u],c[0]=c[u];let T=0;for(;;){const A=(T<<1)+1,D=A+1;if(A>=u)break;let E=A;if(D<u&&c[D]<c[A]&&(E=D),c[T]<=c[E])break;[l[T],l[E]]=[l[E],l[T]],[c[T],c[E]]=[c[E],c[T]],T=E}}return[v,w]},m=(v,w)=>{const T=w*a+v;o[T]||(o[T]=1,h(T,r[T]))};for(let v=0;v<a;v++)m(v,0),m(v,a-1);for(let v=1;v<a-1;v++)m(0,v),m(a-1,v);const g=[[-1,-1],[0,-1],[1,-1],[-1,0],[1,0],[-1,1],[0,1],[1,1]];for(;u>0;){const[v,w]=f(),T=v%a,A=Math.floor(v/a);for(const[D,E]of g){const S=(T+D+a)%a,P=A+E;if(P<0||P>=a)continue;const B=P*a+S;if(o[B])continue;o[B]=1,r[B]<w&&(r[B]=w),h(B,r[B])}}const _=new Int32Array(s);for(let v=0;v<a;v++)for(let w=0;w<a;w++){const T=v*a+w,A=r[T];let D=-1,E=A;for(const[S,P]of g){const B=(w+S+a)%a,N=v+P;if(N<0||N>=a)continue;const W=N*a+B,q=r[W];q<E&&(E=q,D=W)}_[T]=D}const p=new Array(s);for(let v=0;v<s;v++)p[v]=v;p.sort((v,w)=>r[w]-r[v]);const d=new Float32Array(s);d.fill(1);for(const v of p){const w=_[v];w>=0&&(d[w]+=d[v])}let x=0;for(let v=0;v<s;v++)d[v]>x&&(x=d[v]);const y=x>0?1/x:0;for(let v=0;v<s;v++){const w=Math.max(0,r[v]-this.data[v]);let T=0;w>n&&(T=Math.min(1,w*12));const A=Math.pow(d[v]*y,.5);A>.1&&r[v]>e&&(T=Math.max(T,A)),this.waterMask[v]=T,T>0&&(this.data[v]=Math.max(0,this.data[v]-T*t))}}_ensureFinitePositions(e,t=10){const n=e.attributes.position,a=n.array;let s=!1;for(let r=0;r<a.length;r++)Number.isFinite(a[r])||(s=!0,a[r]=0);s&&(a[0]=t,a[1]=0,a[2]=0,n.needsUpdate=!0)}}const wu=()=>({forward:!1,backward:!1,left:!1,right:!1,up:!1,down:!1,run:!1,rollLeft:!1,rollRight:!1}),Ao=new Set(["flyToggle","jump","exit","surface"]);class i_{constructor(e=document){this.target=e,this.state=wu(),this.once=new Set,this.lookDelta={x:0,y:0},this.mode="desktop",this.lookMode="orbit",this.onKeyDown=this.onKeyDown.bind(this),this.onKeyUp=this.onKeyUp.bind(this),this.target.addEventListener("keydown",this.onKeyDown),this.target.addEventListener("keyup",this.onKeyUp)}setMode(e){this.mode=e}setLookMode(e){this.lookMode=e}onKeyDown(e){const{code:t,repeat:n}=e;switch(t){case"KeyW":case"ArrowUp":if(t==="ArrowUp"){this.addLookDelta(0,-5);break}this.state.forward=!0;break;case"KeyS":case"ArrowDown":if(t==="ArrowDown"){this.addLookDelta(0,5);break}this.state.backward=!0;break;case"KeyA":case"ArrowLeft":if(t==="ArrowLeft"){this.addLookDelta(-5,0);break}this.state.left=!0;break;case"KeyD":case"ArrowRight":if(t==="ArrowRight"){this.addLookDelta(5,0);break}this.state.right=!0;break;case"Space":this.state.up=!0,n||this.once.add("jump");break;case"ControlLeft":case"ControlRight":this.state.down=!0;break;case"ShiftLeft":case"ShiftRight":this.state.run=!0;break;case"KeyQ":this.state.rollLeft=!0;break;case"KeyE":this.state.rollRight=!0;break;case"KeyF":n||this.once.add("flyToggle");break;case"Enter":n||this.once.add("surface");break;case"Escape":n||this.once.add("exit");break}}onKeyUp(e){switch(e.code){case"KeyW":case"ArrowUp":this.state.forward=!1;break;case"KeyS":case"ArrowDown":this.state.backward=!1;break;case"KeyA":case"ArrowLeft":this.state.left=!1;break;case"KeyD":case"ArrowRight":this.state.right=!1;break;case"Space":this.state.up=!1;break;case"ControlLeft":case"ControlRight":this.state.down=!1;break;case"ShiftLeft":case"ShiftRight":this.state.run=!1;break;case"KeyQ":this.state.rollLeft=!1;break;case"KeyE":this.state.rollRight=!1;break}}consume(e){if(!Ao.has(e))return!1;const t=this.once.has(e);return t&&this.once.delete(e),t}setAction(e,t){e in this.state?this.state[e]=!!t:Ao.has(e)&&t&&this.once.add(e)}trigger(e){Ao.has(e)&&this.once.add(e)}addLookDelta(e,t){this.lookDelta.x+=e,this.lookDelta.y+=t}consumeLookDelta(){const{x:e,y:t}=this.lookDelta;return this.lookDelta.x=0,this.lookDelta.y=0,{x:e,y:t}}getState(){return this.state}clear(){this.state=wu(),this.once.clear(),this.lookDelta={x:0,y:0}}dispose(){this.target.removeEventListener("keydown",this.onKeyDown),this.target.removeEventListener("keyup",this.onKeyUp)}}function a_(i,e,t){return Math.min(Math.max(i,e),t)}function on(i){return a_(i,0,1)}function s_(i,e){const t=Math.cos(i);return{x:t*Math.cos(e),y:Math.sin(i),z:t*Math.sin(e)}}function Ro(i,e,t,n){const a=on(i)*(n-1),s=on(1-e)*(n-1),r=Math.floor(a),o=Math.floor(s),l=Math.min(n-1,r+1),c=Math.min(n-1,o+1),u=a-r,h=s-o,f=t[o*n+r],m=t[o*n+l],g=t[c*n+r],_=t[c*n+l],p=f*(1-u)+m*u,d=g*(1-u)+_*u,x=p*(1-h)+d*h;return Number.isFinite(x)?x:0}function r_(i,e,t){const n=Math.abs(i.x),a=Math.abs(i.y),s=Math.abs(i.z),r=n+a+s+1e-6,o=n/r,l=a/r,c=s/r,u={u:i.z*.5+.5,v:i.y*.5+.5},h={u:i.x*.5+.5,v:i.z*.5+.5},f={u:i.x*.5+.5,v:i.y*.5+.5},m=Ro(u.u,u.v,e,t),g=Ro(h.u,h.v,e,t),_=Ro(f.u,f.v,e,t);return m*o+g*l+_*c}function kh({heightmap:i,size:e,seaLevel:t,gridWidth:n,gridHeight:a}){const s=n*a,r=new Float32Array(s*4);for(let o=0;o<a;o++){const c=((o+.5)/a-.5)*Math.PI;for(let u=0;u<n;u++){const f=((u+.5)/n-.5)*Math.PI*2,m=s_(c,f),g=r_(m,i,e),_=g<t?1:0,p=_?0:on((g-t)/Math.max(1e-6,1-t)),d=(o*n+u)*4;r[d+0]=_,r[d+1]=p,r[d+2]=g,r[d+3]=0}}return r}const o_=256,l_=128;function Tu(i,e,t){const n=new _i(i,e,t,Mt,Rt);return n.needsUpdate=!0,n.wrapS=bn,n.wrapT=vt,n.minFilter=ot,n.magFilter=ot,n.generateMipmaps=!1,n.colorSpace=Lt,n}class tc{constructor({gridWidth:e=o_,gridHeight:t=l_}={}){this.gridWidth=e,this.gridHeight=t,this.cellCount=e*t,this.enabled=!1,this.ready=!1,this.device=null,this.pipeline=null,this.bindGroups=null,this.uniformBuffer=null,this.uniformData=new Float32Array(32),this.stateBuffers=null,this.surfaceBuffer=null,this.outputBuffer=null,this.readbackBuffers=null,this.readbackInFlight=[!1,!1],this.readbackWriteIndex=0,this.ping=0,this.hasSurface=!1,this.simTimeS=0,this.timeScale=1200,this.readbackIntervalS=.15,this.readbackTimerS=0,this.evapStrength=1,this.precipStrength=1,this.windStrength=1,this.oceanInertia=.25,this.moistureLayers=2,this.planetRadiusM=5e5,this.textureData=new Uint8Array(this.cellCount*4),this.weatherTexture=Tu(this.textureData,e,t),this.auxTextureData=new Uint8Array(this.cellCount*4),this.weatherAuxTexture=Tu(this.auxTextureData,e,t)}setConfig({timeScale:e,readbackIntervalS:t,evapStrength:n,precipStrength:a,windStrength:s,oceanInertia:r,moistureLayers:o}={}){Number.isFinite(e)&&(this.timeScale=Math.max(0,e)),Number.isFinite(t)&&(this.readbackIntervalS=Math.max(.01,t)),Number.isFinite(n)&&(this.evapStrength=Math.max(0,n)),Number.isFinite(a)&&(this.precipStrength=Math.max(0,a)),Number.isFinite(s)&&(this.windStrength=Math.max(0,s)),Number.isFinite(r)&&(this.oceanInertia=on(r)),Number.isFinite(o)&&(this.moistureLayers=Math.max(1,Math.min(4,Math.round(o))))}static async create(e){const t=new tc(e);return await t.init(),t}async init(){if(typeof navigator>"u"||!navigator.gpu){console.warn("[WaterCycleSystem] WebGPU not available; weather simulation disabled."),this.enabled=!1;return}const e=await navigator.gpu.requestAdapter();if(!e){console.warn("[WaterCycleSystem] No GPU adapter found; weather simulation disabled."),this.enabled=!1;return}this.device=await e.requestDevice(),this.enabled=!0;const t=this.device,n=48,a=16,s=8;this.uniformBuffer=t.createBuffer({size:this.uniformData.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.stateBuffers=[t.createBuffer({size:this.cellCount*n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),t.createBuffer({size:this.cellCount*n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})],this.surfaceBuffer=t.createBuffer({size:this.cellCount*a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.outputBuffer=t.createBuffer({size:this.cellCount*s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.readbackBuffers=[t.createBuffer({size:this.cellCount*s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),t.createBuffer({size:this.cellCount*s,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})];const r=t.createShaderModule({code:this._wgsl()});this.pipeline=t.createComputePipeline({layout:"auto",compute:{module:r,entryPoint:"main"}}),this.bindGroups=[t.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.stateBuffers[0]}},{binding:2,resource:{buffer:this.stateBuffers[1]}},{binding:3,resource:{buffer:this.surfaceBuffer}},{binding:4,resource:{buffer:this.outputBuffer}}]}),t.createBindGroup({layout:this.pipeline.getBindGroupLayout(0),entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:this.stateBuffers[1]}},{binding:2,resource:{buffer:this.stateBuffers[0]}},{binding:3,resource:{buffer:this.surfaceBuffer}},{binding:4,resource:{buffer:this.outputBuffer}}]})],this.ready=!0}getTexture(){return this.weatherTexture}getAuxTexture(){return this.weatherAuxTexture}setPlanetSurface({heightmap:e,size:t,seaLevel:n,planetRadiusM:a}){if(!this.enabled||!this.ready||!e||!t)return;this.planetRadiusM=a??this.planetRadiusM;const s=kh({heightmap:e,size:t,seaLevel:n,gridWidth:this.gridWidth,gridHeight:this.gridHeight}),r=new Float32Array(this.cellCount*12),o=288,l=8e3,c=(h,f)=>{const m=Math.sin(h*127.1+f*311.7)*43758.5453123;return m-Math.floor(m)};for(let h=0;h<this.gridHeight;h++){const m=((h+.5)/this.gridHeight-.5)*Math.PI,g=Math.abs(Math.sin(m));for(let _=0;_<this.gridWidth;_++){const p=h*this.gridWidth+_,d=s[p*4+0],x=s[p*4+1],y=x*l,v=(c(_,h)-.5)*2,w=o-55*g-y*.0065+v*1.2,T=this._qsApprox(w),A=(d?.94:.65)*T,D=A*.85,E=D*.72,S=E*.55,P=d?25e-5*(1-g):5e-5*(1-g)*(1-x),B=v*700+Math.sin(m*3)*250,N=10*Math.sin(m*2);r[p*12+0]=w,r[p*12+1]=A,r[p*12+2]=P,r[p*12+3]=0,r[p*12+4]=B,r[p*12+5]=N,r[p*12+6]=0,r[p*12+7]=d?1:.25,r[p*12+8]=D,r[p*12+9]=E,r[p*12+10]=S,r[p*12+11]=0}}const u=this.device;u.queue.writeBuffer(this.surfaceBuffer,0,s),u.queue.writeBuffer(this.stateBuffers[0],0,r),u.queue.writeBuffer(this.stateBuffers[1],0,r);for(let h=0;h<this.cellCount;h++){const f=r[h*12+0],m=r[h*12+2],g=r[h*12+4],_=r[h*12+5],p=r[h*12+6],d=r[h*12+7],x=on(m*600),y=on(.5+g*(1/6e3)),v=on(d);this.textureData[h*4+0]=Math.round(x*255),this.textureData[h*4+1]=0,this.textureData[h*4+2]=Math.round(y*255),this.textureData[h*4+3]=Math.round(v*255);const w=on((f-240)/70),T=on(.5+_*(1/120)),A=on(.5+p*(1/120));this.auxTextureData[h*4+0]=Math.round(w*255),this.auxTextureData[h*4+1]=0,this.auxTextureData[h*4+2]=Math.round(T*255),this.auxTextureData[h*4+3]=Math.round(A*255)}this.weatherTexture.needsUpdate=!0,this.weatherAuxTexture.needsUpdate=!0,this.simTimeS=0,this.ping=0,this.hasSurface=!0}update(e,t,n={}){if(!this.enabled||!this.ready||!this.hasSurface)return;const a=Math.min(Math.max(e??0,0),.25),s=Number.isFinite(n.dtSimOverride)?n.dtSimOverride:a*this.timeScale,r=Math.min(Math.max(s,0),900);if(r<=0)return;this.simTimeS+=r,this.readbackTimerS+=a,this._writeUniforms(r,this.simTimeS,t);const o=this.device,l=o.createCommandEncoder(),c=l.beginComputePass();c.setPipeline(this.pipeline),c.setBindGroup(0,this.bindGroups[this.ping]),c.dispatchWorkgroups(Math.ceil(this.gridWidth/8),Math.ceil(this.gridHeight/8)),c.end();let u=null;if(!!n.forceReadback||this.readbackTimerS>=this.readbackIntervalS){const f=this.readbackWriteIndex&1;this.readbackInFlight[f]||(l.copyBufferToBuffer(this.outputBuffer,0,this.readbackBuffers[f],0,this.cellCount*8),u=f,this.readbackWriteIndex++,this.readbackTimerS=0)}o.queue.submit([l.finish()]),u!==null&&this._scheduleReadback(u),this.ping=1-this.ping}_scheduleReadback(e){this.readbackInFlight[e]=!0;const t=this.readbackBuffers[e];this.device.queue.onSubmittedWorkDone().then(async()=>{await t.mapAsync(GPUMapMode.READ);const n=t.getMappedRange(),a=new Uint8Array(n),s=this.cellCount*4;this.textureData.set(a.subarray(0,s)),this.auxTextureData.set(a.subarray(s,s*2)),t.unmap(),this.weatherTexture.needsUpdate=!0,this.weatherAuxTexture.needsUpdate=!0}).catch(n=>{console.warn("[WaterCycleSystem] Readback failed",n)}).finally(()=>{this.readbackInFlight[e]=!1})}_writeUniforms(e,t,n){const a=this.uniformData;a[0]=this.gridWidth,a[1]=this.gridHeight,a[2]=e,a[3]=t,a[4]=this.planetRadiusM,a[5]=2*Math.PI/86400,a[6]=288,a[7]=.0065,a[8]=8e3,a[9]=8e3,a[10]=.0098,a[11]=this.moistureLayers,a[12]=(n==null?void 0:n.x)??0,a[13]=(n==null?void 0:n.y)??1,a[14]=(n==null?void 0:n.z)??0,a[15]=0,a[16]=18,a[17]=1/21600,a[18]=3e-5*this.evapStrength,a[19]=12e-6*this.evapStrength,a[20]=1/1800,a[21]=1/1200*this.precipStrength,a[22]=1/1800,a[23]=1/3600,a[24]=1/7200*this.windStrength,a[25]=1/14400,a[26]=2e-5,a[27]=60*this.windStrength,a[28]=120,a[29]=45e3,a[30]=1/7200,a[31]=this.oceanInertia,this.device.queue.writeBuffer(this.uniformBuffer,0,a)}_qsApprox(e){const t=e-273.15,a=6.112*Math.exp(17.67*t/(t+243.5))*100;return .622*a/Math.max(101325-a,1)}_wgsl(){return`
struct Cell {
  a: vec4<f32>, // T, q0, qc, rain
  b: vec4<f32>, // p, u, v, soil
  c: vec4<f32>, // q1, q2, q3, snow
};

@group(0) @binding(0) var<uniform> params: array<vec4<f32>, 8>;
@group(0) @binding(1) var<storage, read> stateSrc: array<Cell>;
@group(0) @binding(2) var<storage, read_write> stateDst: array<Cell>;
@group(0) @binding(3) var<storage, read> surface: array<vec4<f32>>; // ocean, elev01, rawHeight, _
@group(0) @binding(4) var<storage, read_write> outPixels: array<u32>;

const MAX_MOISTURE_LAYERS: u32 = 4u;

fn getW() -> u32 { return u32(params[0].x); }
fn getH() -> u32 { return u32(params[0].y); }
fn getDt() -> f32 { return params[0].z; }
fn getTime() -> f32 { return params[0].w; }

fn radiusM() -> f32 { return params[1].x; }
fn omega() -> f32 { return params[1].y; }
fn baseTemp() -> f32 { return params[1].z; }
fn lapseRate() -> f32 { return params[1].w; }

fn scaleHeight() -> f32 { return params[2].x; }
fn mountainHeight() -> f32 { return params[2].y; }
fn gammaKPerM() -> f32 { return params[2].z; }

fn moistureLayers() -> u32 {
  let m = u32(clamp(params[2].w, 1.0, f32(MAX_MOISTURE_LAYERS)) + 0.5);
  return clamp(m, 1u, MAX_MOISTURE_LAYERS);
}

fn sunDir() -> vec3<f32> { return params[3].xyz; }

fn solarHeatingK() -> f32 { return params[4].x; }
fn tempRelax() -> f32 { return params[4].y; }
fn evapOcean() -> f32 { return params[4].z; }
fn evapLand() -> f32 { return params[4].w; }

fn condenseRate() -> f32 { return params[5].x; }
fn precipRate() -> f32 { return params[5].y; }
fn rainDecay() -> f32 { return params[5].z; }
fn cloudEvapRate() -> f32 { return params[5].w; }

fn windRelax() -> f32 { return params[6].x; }
fn windDrag() -> f32 { return params[6].y; }
fn coriolisMin() -> f32 { return params[6].z; }
fn maxWind() -> f32 { return params[6].w; }

fn pTempCoeff() -> f32 { return params[7].x; }
fn pVaporCoeff() -> f32 { return params[7].y; }
fn pSmooth() -> f32 { return params[7].z; }
fn oceanTempRelaxMul() -> f32 { return params[7].w; }

fn wrapX(x: i32, w: i32) -> u32 {
  var r = x % w;
  if (r < 0) { r = r + w; }
  return u32(r);
}

fn clampY(y: i32, h: i32) -> u32 {
  return u32(clamp(y, 0, h - 1));
}

fn idx(x: u32, y: u32) -> u32 {
  return y * getW() + x;
}

fn metersPerCellX(cosLat: f32) -> f32 {
  let w = f32(getW());
  let cl = max(cosLat, 0.08);
  return 2.0 * 3.14159265 * radiusM() * cl / w;
}

fn metersPerCellY() -> f32 {
  let h = f32(getH());
  return 3.14159265 * radiusM() / h;
}

fn satVaporPressurePa(T: f32) -> f32 {
  let Tc = T - 273.15;
  let es_hPa = 6.112 * exp((17.67 * Tc) / (Tc + 243.5));
  return es_hPa * 100.0;
}

fn satMixingRatio(T: f32) -> f32 {
  let e = satVaporPressurePa(T);
  let p = 101325.0;
  let eps = 0.622;
  return (eps * e) / max(p - e, 1.0);
}

fn packRGBA8(r: f32, g: f32, b: f32, a: f32) -> u32 {
  let R = u32(clamp(r, 0.0, 1.0) * 255.0 + 0.5);
  let G = u32(clamp(g, 0.0, 1.0) * 255.0 + 0.5);
  let B = u32(clamp(b, 0.0, 1.0) * 255.0 + 0.5);
  let A = u32(clamp(a, 0.0, 1.0) * 255.0 + 0.5);
  return (A << 24u) | (B << 16u) | (G << 8u) | R;
}

	fn wrapCoord(x: f32, w: f32) -> f32 {
	  return x - floor(x / w) * w;
	}

fn sampleTQc(xf: f32, yf: f32) -> vec2<f32> {
  let w = f32(getW());
  let h = f32(getH());
  let xw = wrapCoord(xf, w);
  let yc = clamp(yf, 0.0, h - 1.001);

  let x0i = i32(floor(xw));
  let y0i = i32(floor(yc));
  let x1i = x0i + 1;
  let y1i = y0i + 1;
  let tx = fract(xw);
  let ty = fract(yc);

  let x0 = wrapX(x0i, i32(getW()));
  let x1 = wrapX(x1i, i32(getW()));
  let y0 = clampY(y0i, i32(getH()));
  let y1 = clampY(y1i, i32(getH()));

  let c00 = vec2<f32>(stateSrc[idx(x0, y0)].a.x, stateSrc[idx(x0, y0)].a.z);
  let c10 = vec2<f32>(stateSrc[idx(x1, y0)].a.x, stateSrc[idx(x1, y0)].a.z);
  let c01 = vec2<f32>(stateSrc[idx(x0, y1)].a.x, stateSrc[idx(x0, y1)].a.z);
  let c11 = vec2<f32>(stateSrc[idx(x1, y1)].a.x, stateSrc[idx(x1, y1)].a.z);

  let c0 = mix(c00, c10, tx);
  let c1 = mix(c01, c11, tx);
  return mix(c0, c1, ty);
}

fn sampleQ(xf: f32, yf: f32) -> vec4<f32> {
  let w = f32(getW());
  let h = f32(getH());
  let xw = wrapCoord(xf, w);
  let yc = clamp(yf, 0.0, h - 1.001);

  let x0i = i32(floor(xw));
  let y0i = i32(floor(yc));
  let x1i = x0i + 1;
  let y1i = y0i + 1;
  let tx = fract(xw);
  let ty = fract(yc);

  let x0 = wrapX(x0i, i32(getW()));
  let x1 = wrapX(x1i, i32(getW()));
  let y0 = clampY(y0i, i32(getH()));
  let y1 = clampY(y1i, i32(getH()));

  let q00 = vec4<f32>(stateSrc[idx(x0, y0)].a.y, stateSrc[idx(x0, y0)].c.x, stateSrc[idx(x0, y0)].c.y, stateSrc[idx(x0, y0)].c.z);
  let q10 = vec4<f32>(stateSrc[idx(x1, y0)].a.y, stateSrc[idx(x1, y0)].c.x, stateSrc[idx(x1, y0)].c.y, stateSrc[idx(x1, y0)].c.z);
  let q01 = vec4<f32>(stateSrc[idx(x0, y1)].a.y, stateSrc[idx(x0, y1)].c.x, stateSrc[idx(x0, y1)].c.y, stateSrc[idx(x0, y1)].c.z);
  let q11 = vec4<f32>(stateSrc[idx(x1, y1)].a.y, stateSrc[idx(x1, y1)].c.x, stateSrc[idx(x1, y1)].c.y, stateSrc[idx(x1, y1)].c.z);

  let q0 = mix(q00, q10, tx);
  let q1 = mix(q01, q11, tx);
  return mix(q0, q1, ty);
}

fn sampleP(xf: f32, yf: f32) -> f32 {
  let w = f32(getW());
  let h = f32(getH());
  let xw = wrapCoord(xf, w);
  let yc = clamp(yf, 0.0, h - 1.001);

  let x0i = i32(floor(xw));
  let y0i = i32(floor(yc));
  let x1i = x0i + 1;
  let y1i = y0i + 1;
  let tx = fract(xw);
  let ty = fract(yc);

  let x0 = wrapX(x0i, i32(getW()));
  let x1 = wrapX(x1i, i32(getW()));
  let y0 = clampY(y0i, i32(getH()));
  let y1 = clampY(y1i, i32(getH()));

  let p00 = stateSrc[idx(x0, y0)].b.x;
  let p10 = stateSrc[idx(x1, y0)].b.x;
  let p01 = stateSrc[idx(x0, y1)].b.x;
  let p11 = stateSrc[idx(x1, y1)].b.x;

  let p0 = mix(p00, p10, tx);
  let p1 = mix(p01, p11, tx);
  return mix(p0, p1, ty);
}

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let w = getW();
  let h = getH();
  if (gid.x >= w || gid.y >= h) { return; }
  let i = idx(gid.x, gid.y);

  let dt = getDt();

  let src = stateSrc[i];
  var T0 = src.a.x;
  var q0 = src.a.y;
  var qc0 = src.a.z;
  var rain0 = src.a.w;
  var p0 = src.b.x;
  var u0 = src.b.y;
  var v0 = src.b.z;
  var soil0 = src.b.w;
  var snow0 = src.c.w;

  let surf = surface[i];
  let ocean = surf.x;
  let elev01 = surf.y;
  let altM = elev01 * mountainHeight();

  let u = (f32(gid.x) + 0.5) / f32(w);
  let v = (f32(gid.y) + 0.5) / f32(h);
  let lon = (u - 0.5) * 6.28318531;
  let lat = (v - 0.5) * 3.14159265;
  let sinLat = sin(lat);
  let cosLat = cos(lat);
  let n = vec3<f32>(cosLat * cos(lon), sinLat, cosLat * sin(lon));
  let insolation = max(dot(normalize(n), normalize(sunDir())), 0.0);

  // Pressure gradient (Pa/m) from stored anomaly field.
  let xL = wrapX(i32(gid.x) - 1, i32(w));
  let xR = wrapX(i32(gid.x) + 1, i32(w));
  let yD = clampY(i32(gid.y) - 1, i32(h));
  let yU = clampY(i32(gid.y) + 1, i32(h));

  let mpcX = metersPerCellX(abs(cosLat));
  let mpcY = metersPerCellY();
  let inv2dx = 0.5 / mpcX;
  let inv2dy = 0.5 / mpcY;

  let pL = stateSrc[idx(xL, gid.y)].b.x;
  let pR = stateSrc[idx(xR, gid.y)].b.x;
  let pD = stateSrc[idx(gid.x, yD)].b.x;
  let pU = stateSrc[idx(gid.x, yU)].b.x;
  let dpdx = (pR - pL) * inv2dx;
  let dpdy = (pU - pD) * inv2dy;

  // Geostrophic wind estimate + relaxation.
  let rho = 1.2;
  var f = 2.0 * omega() * sinLat;
  if (abs(f) < coriolisMin()) {
    f = coriolisMin() * select(1.0, -1.0, f < 0.0);
  }
  let uGeo = -(1.0 / (rho * f)) * dpdy;
  let vGeo =  (1.0 / (rho * f)) * dpdx;
  let wMix = clamp(dt * windRelax(), 0.0, 1.0);
  var u1 = mix(u0, uGeo, wMix);
  var v1 = mix(v0, vGeo, wMix);
  let drag = exp(-windDrag() * dt);
  u1 *= drag;
  v1 *= drag;
  let spd = length(vec2<f32>(u1, v1));
  if (spd > maxWind()) {
    let s = maxWind() / max(spd, 1e-6);
    u1 *= s;
    v1 *= s;
  }

  // Semi-Lagrangian advection of T/q/qc using updated wind.
  let xB = f32(gid.x) - (u1 * dt) / mpcX;
  let yB = f32(gid.y) - (v1 * dt) / mpcY;
  let tqc = sampleTQc(xB, yB);
  let qAdv = sampleQ(xB, yB);
  let pAdv = sampleP(xB, yB);
  var T = tqc.x;
  var qc = tqc.y;
  var q: array<f32, MAX_MOISTURE_LAYERS>;
  q[0] = qAdv.x;
  q[1] = qAdv.y;
  q[2] = qAdv.z;
  q[3] = qAdv.w;
  var snow = snow0;
  let layers = moistureLayers();

  // Radiative equilibrium temperature + simple relaxation.
  let latFactor = abs(sinLat);
  let snowCover = clamp(snow, 0.0, 1.0) * (1.0 - ocean);
  let albedoBase = mix(0.22, 0.06, ocean);
  let albedo = mix(albedoBase, 0.75, snowCover);
  let Teq = baseTemp() - 55.0 * latFactor + solarHeatingK() * insolation * (1.0 - albedo) - (lapseRate() * altM);
  let relaxRate = tempRelax() * mix(1.0, oceanTempRelaxMul(), ocean);
  T = mix(T, Teq, clamp(dt * relaxRate, 0.0, 1.0));

  // Lift cooling (convergence + orographic).
  let uL = stateSrc[idx(xL, gid.y)].b.y;
  let uR = stateSrc[idx(xR, gid.y)].b.y;
  let vD2 = stateSrc[idx(gid.x, yD)].b.z;
  let vU2 = stateSrc[idx(gid.x, yU)].b.z;
  let div = (uR - uL) * inv2dx + (vU2 - vD2) * inv2dy;
  let wConv = (-div) * scaleHeight();

  let altL = surface[idx(xL, gid.y)].y * mountainHeight();
  let altR = surface[idx(xR, gid.y)].y * mountainHeight();
  let altD = surface[idx(gid.x, yD)].y * mountainHeight();
  let altU = surface[idx(gid.x, yU)].y * mountainHeight();
  let dhdx = (altR - altL) * inv2dx;
  let dhdy = (altU - altD) * inv2dy;
  let wOrog = u1 * dhdx + v1 * dhdy;
  let wLift = clamp(wConv + wOrog, -20.0, 20.0);
  T -= gammaKPerM() * wLift * dt;

  // Evaporation (ocean deficit-based, land soil-based).
  let qs = satMixingRatio(T);
  let deficit = max(0.0, qs - q[0]);
  q[0] += ocean * evapOcean() * insolation * deficit * dt;
  q[0] += (1.0 - ocean) * evapLand() * insolation * soil0 * (1.0 - 0.85 * snowCover) * dt;

  // Configurable moisture layering: diffuse mixing between adjacent layers, enhanced by lift.
  let mixRate = (1.0 / 7200.0) * (0.35 + 0.65 * insolation);
  let liftMix = clamp(abs(wLift) * dt / scaleHeight(), 0.0, 0.25);
  for (var k: u32 = 0u; k < (MAX_MOISTURE_LAYERS - 1u); k = k + 1u) {
    if (k + 1u >= layers) { break; }
    let altFactor = exp(-f32(k) * 0.75);
    let mixAmt = clamp(dt * mixRate * altFactor + liftMix * altFactor, 0.0, 0.35);
    let dq = (q[k] - q[k + 1u]) * mixAmt;
    q[k] -= dq;
    q[k + 1u] += dq;
  }

  // Condensation / evaporation of cloud water.
  let latentK = 2000.0;
  let cloudIdx = select(0u, 1u, layers > 1u);
  if (q[cloudIdx] > qs) {
    let cond = (q[cloudIdx] - qs) * clamp(dt * condenseRate(), 0.0, 1.0);
    q[cloudIdx] -= cond;
    qc += cond;
    T += latentK * cond;
  } else if (qc > 0.0) {
    let evap = min(qs - q[cloudIdx], qc) * clamp(dt * cloudEvapRate(), 0.0, 1.0);
    q[cloudIdx] += evap;
    qc -= evap;
    T -= latentK * evap;
  }

  // Precipitation + soil moisture deposition.
  let qcThresh = 0.001;
  let pr = max(0.0, qc - qcThresh) * clamp(dt * precipRate(), 0.0, 1.0);
  qc -= pr;
  // Snow/rain phase: below freezing, precipitation does not count as "rain" and does not wet soil.
  let liquid = smoothstep(271.15, 275.15, T);
  let prLiquid = pr * liquid;
  let prSnow = pr * (1.0 - liquid);
  var rain = rain0 * exp(-rainDecay() * dt) + prLiquid;
  var soil = clamp(soil0 + prLiquid * (1.0 - ocean) * 400.0, 0.0, 1.0);
  soil *= exp(-dt * (1.0 / 86400.0)); // ~1 day drydown baseline
  snow = clamp(snow + prSnow * (1.0 - ocean) * 650.0, 0.0, 1.0);

  // Snowmelt adds surface wetness.
  let meltFactor = clamp((T - 272.15) / 6.0 + insolation * 0.15, 0.0, 1.0);
  let melt = min(snow, snow * meltFactor * dt * (1.0 / 21600.0)); // ~6h warm-season timescale
  snow -= melt;
  soil = clamp(soil + melt * (1.0 - ocean) * 0.65, 0.0, 1.0);

  // Pressure anomaly relax toward T/q-driven target.
  var qCol = q[0];
  if (layers > 1u) {
    qCol = q[1] + 0.6 * q[0];
    if (layers > 2u) { qCol += 0.35 * q[2]; }
    if (layers > 3u) { qCol += 0.25 * q[3]; }
  }
  let pEq = -(T - baseTemp()) * pTempCoeff() - (qCol * pVaporCoeff()) - (altM * 0.08);
  var p = mix(pAdv, pEq, clamp(dt * pSmooth(), 0.0, 1.0));

  // Clamp.
  T = clamp(T, 180.0, 330.0);
  for (var k: u32 = 0u; k < MAX_MOISTURE_LAYERS; k = k + 1u) {
    q[k] = clamp(q[k], 0.0, 0.05);
  }
  qc = clamp(qc, 0.0, 0.02);
  rain = clamp(rain, 0.0, 0.02);

  // Output packed weather (cloud, rain, pressure, soil).
  let cloud01 = clamp(qc * 600.0, 0.0, 1.0);
  let rain01 = clamp(rain * 800.0, 0.0, 1.0);
  let p01 = clamp(0.5 + p * (1.0 / 6000.0), 0.0, 1.0);
  let soil01 = clamp(soil, 0.0, 1.0);
  outPixels[i] = packRGBA8(cloud01, rain01, p01, soil01);

  // Aux packed weather (temp, snow, windU, windV).
  let cellCount = w * h;
  let temp01 = clamp((T - 240.0) / 70.0, 0.0, 1.0);
  let snow01 = clamp(snow, 0.0, 1.0);
  let u01 = clamp(0.5 + 0.5 * clamp(u1 / maxWind(), -1.0, 1.0), 0.0, 1.0);
  let v01 = clamp(0.5 + 0.5 * clamp(v1 / maxWind(), -1.0, 1.0), 0.0, 1.0);
  outPixels[i + cellCount] = packRGBA8(temp01, snow01, u01, v01);

  stateDst[i] = Cell(vec4<f32>(T, q[0], qc, rain), vec4<f32>(p, u1, v1, soil), vec4<f32>(q[1], q[2], q[3], snow));
}
        `}}const c_=256,u_=128,h_=64;function Co(i,e,t,{wrapS:n=vt,wrapT:a=vt,minFilter:s=St,magFilter:r=St}={}){const o=new _i(i,e,t,Mt,Rt);return o.needsUpdate=!0,o.wrapS=n,o.wrapT=a,o.minFilter=s,o.magFilter=r,o.generateMipmaps=!1,o.colorSpace=Lt,o}function d_(i){const e=Math.max(1,Math.ceil(Math.sqrt(i))),t=Math.max(1,Math.ceil(i/e));return{tilesX:e,tilesY:t,atlasW:e*i,atlasH:t*i}}class nc{constructor({volumeN:e=h_,surfaceW:t=c_,surfaceH:n=u_}={}){this.volumeN=Math.max(8,Math.min(192,Math.round(e))),this.surfaceW=Math.max(8,Math.min(1024,Math.round(t))),this.surfaceH=Math.max(8,Math.min(1024,Math.round(n))),this.voxelCount=this.volumeN*this.volumeN*this.volumeN,this.surfaceCellCount=this.surfaceW*this.surfaceH;const a=d_(this.volumeN);this.tilesX=a.tilesX,this.tilesY=a.tilesY,this.atlasW=a.atlasW,this.atlasH=a.atlasH,this.atlasPixelCount=this.atlasW*this.atlasH,this.weatherW=this.surfaceW,this.weatherH=this.surfaceH,this.weatherCellCount=this.weatherW*this.weatherH,this.weatherOffset=this.atlasPixelCount,this.auxOffset=this.atlasPixelCount+this.weatherCellCount,this.totalOutPixels=this.atlasPixelCount+this.weatherCellCount*2,this.enabled=!1,this.ready=!1,this.device=null,this.pipelineSim=null,this.pipelineCollapse=null,this.bindGroupLayout=null,this.bindGroupsSim=null,this.bindGroupsCollapse=null,this.uniformBuffer=null,this.uniformData=new Float32Array(48),this.stateBuffers=null,this.surfaceBuffer=null,this.surfaceStateBuffers=null,this.outputBuffer=null,this.readbackBuffers=null,this.readbackInFlight=[!1,!1],this.readbackWriteIndex=0,this.ping=0,this.hasSurface=!1,this.simTimeS=0,this.timeScale=1200,this.readbackIntervalS=.15,this.readbackTimerS=0,this.evapStrength=1,this.precipStrength=1,this.windStrength=1,this.oceanInertia=.25,this.planetRadiusM=5e5,this.atmoThicknessM=2e4,this.mountainHeightM=8e3,this.volumeTextureData=new Uint8Array(this.atlasPixelCount*4),this.volumeAtlasTexture=Co(this.volumeTextureData,this.atlasW,this.atlasH,{wrapS:vt,wrapT:vt,minFilter:St,magFilter:St}),this.weatherTextureData=new Uint8Array(this.weatherCellCount*4),this.weatherTexture=Co(this.weatherTextureData,this.weatherW,this.weatherH,{wrapS:bn,wrapT:vt,minFilter:ot,magFilter:ot}),this.auxTextureData=new Uint8Array(this.weatherCellCount*4),this.weatherAuxTexture=Co(this.auxTextureData,this.weatherW,this.weatherH,{wrapS:bn,wrapT:vt,minFilter:ot,magFilter:ot})}static async create(e){const t=new nc(e);return await t.init(),t}setConfig({timeScale:e,readbackIntervalS:t,evapStrength:n,precipStrength:a,windStrength:s,oceanInertia:r,atmoThicknessM:o}={}){Number.isFinite(e)&&(this.timeScale=Math.max(0,e)),Number.isFinite(t)&&(this.readbackIntervalS=Math.max(.01,t)),Number.isFinite(n)&&(this.evapStrength=Math.max(0,n)),Number.isFinite(a)&&(this.precipStrength=Math.max(0,a)),Number.isFinite(s)&&(this.windStrength=Math.max(0,s)),Number.isFinite(r)&&(this.oceanInertia=on(r)),Number.isFinite(o)&&(this.atmoThicknessM=Math.max(1e3,o))}getVolumeTexture(){return this.volumeAtlasTexture}getVolumeMeta(){return{n:this.volumeN,tilesX:this.tilesX,tilesY:this.tilesY,atlasW:this.atlasW,atlasH:this.atlasH,extentM:this.planetRadiusM+this.atmoThicknessM+this.mountainHeightM,planetRadiusM:this.planetRadiusM,atmoThicknessM:this.atmoThicknessM}}getTexture(){return this.weatherTexture}getAuxTexture(){return this.weatherAuxTexture}async init(){if(typeof navigator>"u"||!navigator.gpu){console.warn("[WaterCycleVolumeSystem] WebGPU not available; volume weather disabled."),this.enabled=!1;return}const e=await navigator.gpu.requestAdapter();if(!e){console.warn("[WaterCycleVolumeSystem] No GPU adapter found; volume weather disabled."),this.enabled=!1;return}this.device=await e.requestDevice(),this.enabled=!0;const t=this.device,n=32,a=16,s=16,r=this.totalOutPixels*4;this.uniformBuffer=t.createBuffer({size:this.uniformData.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST}),this.stateBuffers=[t.createBuffer({size:this.voxelCount*n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),t.createBuffer({size:this.voxelCount*n,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})],this.surfaceBuffer=t.createBuffer({size:this.surfaceCellCount*a,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST}),this.surfaceStateBuffers=[t.createBuffer({size:this.weatherCellCount*s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),t.createBuffer({size:this.weatherCellCount*s,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC})],this.outputBuffer=t.createBuffer({size:r,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC}),this.readbackBuffers=[t.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ}),t.createBuffer({size:r,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ})],this.bindGroupLayout=t.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:4,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:5,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:6,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});const o=t.createPipelineLayout({bindGroupLayouts:[this.bindGroupLayout]}),l=t.createShaderModule({code:this._wgslSim()}),c=t.createShaderModule({code:this._wgslCollapse()});this.pipelineSim=t.createComputePipeline({layout:o,compute:{module:l,entryPoint:"main"}}),this.pipelineCollapse=t.createComputePipeline({layout:o,compute:{module:c,entryPoint:"main"}});const u=({volumeSrc:h,volumeDst:f,surfaceStateSrc:m,surfaceStateDst:g})=>t.createBindGroup({layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.uniformBuffer}},{binding:1,resource:{buffer:h}},{binding:2,resource:{buffer:f}},{binding:3,resource:{buffer:this.surfaceBuffer}},{binding:4,resource:{buffer:m}},{binding:5,resource:{buffer:g}},{binding:6,resource:{buffer:this.outputBuffer}}]});this.bindGroupsSim=[u({volumeSrc:this.stateBuffers[0],volumeDst:this.stateBuffers[1],surfaceStateSrc:this.surfaceStateBuffers[0],surfaceStateDst:this.surfaceStateBuffers[1]}),u({volumeSrc:this.stateBuffers[1],volumeDst:this.stateBuffers[0],surfaceStateSrc:this.surfaceStateBuffers[1],surfaceStateDst:this.surfaceStateBuffers[0]})],this.bindGroupsCollapse=[u({volumeSrc:this.stateBuffers[1],volumeDst:this.stateBuffers[0],surfaceStateSrc:this.surfaceStateBuffers[0],surfaceStateDst:this.surfaceStateBuffers[1]}),u({volumeSrc:this.stateBuffers[0],volumeDst:this.stateBuffers[1],surfaceStateSrc:this.surfaceStateBuffers[1],surfaceStateDst:this.surfaceStateBuffers[0]})],this.ready=!0}setPlanetSurface({heightmap:e,size:t,seaLevel:n,planetRadiusM:a}={}){if(!this.enabled||!this.ready||!(e&&t&&Number.isFinite(n)))return;Number.isFinite(a)&&(this.planetRadiusM=Math.max(1,a)),this.seaLevel=on(n);const s=kh({heightmap:e,size:t,seaLevel:this.seaLevel,gridWidth:this.surfaceW,gridHeight:this.surfaceH});this.device.queue.writeBuffer(this.surfaceBuffer,0,s),this._resetState(),this.hasSurface=!0}_resetState(){const e=this.volumeN,t=this.voxelCount,n=8,a=new Float32Array(t*n),s=(this.seaLevel-.5)*this.mountainHeightM,r=this.planetRadiusM+s,o=this.planetRadiusM+this.atmoThicknessM+this.mountainHeightM,c=2*o/Math.max(e,1)*.5,u=288,h=.0065,f=8e3,m=p=>{const d=p-273.15,y=6.112*Math.exp(17.67*d/(d+243.5))*100;return .622*y/Math.max(101325-y,1)};let g=0;for(let p=0;p<e;p++){const x=((p+.5)/e*2-1)*o;for(let y=0;y<e;y++){const w=((y+.5)/e*2-1)*o;for(let T=0;T<e;T++){const D=((T+.5)/e*2-1)*o,E=Math.hypot(D,w,x),S=E-r;let P=0,B=0;if(E>.001){const N=D/E,W=w/E,q=x/E,G=c*(Math.abs(N)+Math.abs(W)+Math.abs(q)),K=S-G;if(S+G>0&&K<this.atmoThicknessM){const ee=Math.min(Math.max(K,0),this.atmoThicknessM),ce=Math.abs(W);P=u-55*ce-h*ee;const Fe=m(P),Je=ee<2e3?.85:.55;B=Fe*Je*Math.exp(-ee/(f*1.25)),ee<2e3&&(a[g+2]=Fe*.02)}}a[g+0]=P,a[g+1]=B,a[g+2]=0,a[g+3]=0,a[g+4]=0,a[g+5]=0,a[g+6]=0,a[g+7]=0,g+=n}}}const _=new Float32Array(this.weatherCellCount*4);for(let p=0;p<this.weatherCellCount;p++)_[p*4+0]=.15,_[p*4+1]=0,_[p*4+2]=0,_[p*4+3]=0;this.device.queue.writeBuffer(this.stateBuffers[0],0,a),this.device.queue.writeBuffer(this.stateBuffers[1],0,a),this.device.queue.writeBuffer(this.surfaceStateBuffers[0],0,_),this.device.queue.writeBuffer(this.surfaceStateBuffers[1],0,_),this.simTimeS=0,this.readbackTimerS=0,this.ping=0,this.lastDiag={maxCloud:0,maxRain:0}}update(e,t,n={}){if(!this.enabled||!this.ready||!this.hasSurface)return;const a=Math.min(Math.max(e??0,0),.25),s=Number.isFinite(n.dtSimOverride)?n.dtSimOverride:a*this.timeScale;let r=Math.max(s,0);if(r<=0)return;const l=2*(this.planetRadiusM+this.atmoThicknessM+this.mountainHeightM)/Math.max(this.volumeN,1),c=Math.max(5,60*this.windStrength),u=.25*l/c,f=Math.max(.5,Math.min(10,u)),m=64;this.readbackTimerS+=a;const g=this.device,_=g.createCommandEncoder();let p=0;for(;r>0&&p<m;){const y=Math.min(r,f);if(y<=0)break;r-=y,this.simTimeS+=y,this._writeUniforms(y,this.simTimeS,t);{const v=_.beginComputePass();v.setPipeline(this.pipelineSim),v.setBindGroup(0,this.bindGroupsSim[this.ping]);const w=4;v.dispatchWorkgroups(Math.ceil(this.volumeN/w),Math.ceil(this.volumeN/w),Math.ceil(this.volumeN/w)),v.end()}{const v=_.beginComputePass();v.setPipeline(this.pipelineCollapse),v.setBindGroup(0,this.bindGroupsCollapse[this.ping]),v.dispatchWorkgroups(Math.ceil(this.weatherW/8),Math.ceil(this.weatherH/8)),v.end()}this.ping=1-this.ping,p++}let d=null;if(!!n.forceReadback||this.readbackTimerS>=this.readbackIntervalS){const y=this.readbackWriteIndex&1;this.readbackInFlight[y]||(_.copyBufferToBuffer(this.outputBuffer,0,this.readbackBuffers[y],0,this.totalOutPixels*4),d=y,this.readbackWriteIndex++,this.readbackTimerS=0)}g.queue.submit([_.finish()]),d!==null&&this._scheduleReadback(d)}_scheduleReadback(e){this.readbackInFlight[e]=!0;const t=this.readbackBuffers[e];this.device.queue.onSubmittedWorkDone().then(async()=>{await t.mapAsync(GPUMapMode.READ);const n=t.getMappedRange(),a=new Uint8Array(n),s=this.atlasPixelCount*4,r=this.weatherCellCount*4;this.volumeTextureData.set(a.subarray(0,s)),this.weatherTextureData.set(a.subarray(s,s+r)),this.auxTextureData.set(a.subarray(s+r,s+r*2));let o=0,l=0;for(let c=0;c<s;c+=4)this.volumeTextureData[c]>o&&(o=this.volumeTextureData[c]),this.volumeTextureData[c+1]>l&&(l=this.volumeTextureData[c+1]);this.lastDiag.maxCloud=o/255,this.lastDiag.maxRain=l/255,t.unmap(),this.volumeAtlasTexture.needsUpdate=!0,this.weatherTexture.needsUpdate=!0,this.weatherAuxTexture.needsUpdate=!0}).catch(n=>{console.warn("[WaterCycleVolumeSystem] Readback failed",n)}).finally(()=>{this.readbackInFlight[e]=!1})}_writeUniforms(e,t,n){const a=this.uniformData,s=this.planetRadiusM,r=this.volumeN/Math.max(2*s,1e-6),o=Math.max(1,this.volumeN/32);a[0]=this.volumeN,a[1]=this.volumeN,a[2]=this.volumeN,a[3]=e,a[4]=t,a[5]=s,a[6]=r,a[7]=this.planetRadiusM,a[8]=this.atmoThicknessM,a[9]=288,a[10]=.0065,a[11]=8e3,a[12]=(n==null?void 0:n.x)??0,a[13]=(n==null?void 0:n.y)??1,a[14]=(n==null?void 0:n.z)??0,a[15]=2*Math.PI/86400,a[16]=18,a[17]=1/21600;const l=Math.pow(o,3);a[18]=45e-5*this.evapStrength*l,a[19]=16e-5*this.evapStrength*l,a[20]=1/200*l;const c=1/24e4,u=Math.pow(o,3);a[21]=c*this.precipStrength/u,a[22]=1/259200,a[23]=1/259200,a[24]=1/7200*this.windStrength,a[25]=1/14400,a[26]=2e-5,a[27]=60*this.windStrength,a[28]=120,a[29]=45e3,a[30]=1/7200,a[31]=.05/l,a[32]=this.surfaceW,a[33]=this.surfaceH,a[34]=this.weatherW,a[35]=this.weatherH,a[36]=this.atlasW,a[37]=this.atlasH,a[38]=this.tilesX,a[39]=this.tilesY,a[40]=this.weatherOffset,a[41]=this.auxOffset,a[42]=this.oceanInertia,a[43]=0,a[44]=this.mountainHeightM,a[45]=(this.seaLevel-.5)*this.mountainHeightM,a[46]=0,a[47]=0,this.device.queue.writeBuffer(this.uniformBuffer,0,a)}_wgslSim(){return`
struct Voxel {
  a: vec4<f32>, // T, qv, qc, qr
  b: vec4<f32>, // p, vx, vy, vz
};

@group(0) @binding(0) var<uniform> params: array<vec4<f32>, 12>;
@group(0) @binding(1) var<storage, read> stateSrc: array<Voxel>;
@group(0) @binding(2) var<storage, read_write> stateDst: array<Voxel>;
@group(0) @binding(3) var<storage, read> surface: array<vec4<f32>>; // ocean, elev01, rawHeight, _
@group(0) @binding(4) var<storage, read> surfaceStateSrc: array<vec4<f32>>; // soil, snow, rain, _
@group(0) @binding(5) var<storage, read_write> surfaceStateDst: array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> outPixels: array<u32>;

fn N() -> u32 { return u32(params[0].x + 0.5); }
fn dt() -> f32 { return params[0].w; }
fn timeS() -> f32 { return params[1].x; }
fn extentM() -> f32 { return params[1].y; }
fn invVoxelSize() -> f32 { return params[1].z; }
fn planetRadiusM() -> f32 { return params[1].w; }
fn seaOffsetM() -> f32 { return params[11].y; }

fn atmoThicknessM() -> f32 { return params[2].x; }
fn baseTempK() -> f32 { return params[2].y; }
fn lapseRate() -> f32 { return params[2].z; }
fn scaleHeightM() -> f32 { return params[2].w; }

fn sunDir() -> vec3<f32> { return params[3].xyz; }
fn omega() -> f32 { return params[3].w; }

fn solarHeatingK() -> f32 { return params[4].x; }
fn tempRelax() -> f32 { return params[4].y; }
fn evapOcean() -> f32 { return params[4].z; }
fn evapLand() -> f32 { return params[4].w; }

fn condenseRate() -> f32 { return params[5].x; }
fn precipRate() -> f32 { return params[5].y; }
fn rainDecay() -> f32 { return params[5].z; }
fn cloudEvapRate() -> f32 { return params[5].w; }

fn windRelax() -> f32 { return params[6].x; }
fn windDrag() -> f32 { return params[6].y; }
fn coriolisMin() -> f32 { return params[6].z; }
fn maxWind() -> f32 { return params[6].w; }

fn pTempCoeff() -> f32 { return params[7].x; }
fn pVaporCoeff() -> f32 { return params[7].y; }
fn pSmooth() -> f32 { return params[7].z; }
fn fallSpeed() -> f32 { return params[7].w; }

fn surfaceW() -> u32 { return u32(params[8].x + 0.5); }
fn surfaceH() -> u32 { return u32(params[8].y + 0.5); }

fn atlasW() -> u32 { return u32(params[9].x + 0.5); }
fn tilesX() -> u32 { return u32(params[9].z + 0.5); }

fn oceanInertia() -> f32 { return clamp(params[10].z, 0.05, 1.0); }
fn mountainHeightM() -> f32 { return max(params[11].x, 0.0); }

fn idx3(x: u32, y: u32, z: u32) -> u32 {
  let n = N();
  return (z * n + y) * n + x;
}

fn clampU(v: i32, lo: i32, hi: i32) -> u32 {
  return u32(clamp(v, lo, hi));
}

fn posFromIndex(x: u32, y: u32, z: u32) -> vec3<f32> {
  let n = f32(N());
  let fx = ((f32(x) + 0.5) / n) * 2.0 - 1.0;
  let fy = ((f32(y) + 0.5) / n) * 2.0 - 1.0;
  let fz = ((f32(z) + 0.5) / n) * 2.0 - 1.0;
  return vec3<f32>(fx, fy, fz) * extentM();
}

fn uvwFromPos(pos: vec3<f32>) -> vec3<f32> {
  return clamp(pos / extentM() * 0.5 + vec3<f32>(0.5), vec3<f32>(0.0), vec3<f32>(0.999999));
}

fn sampleNearest(pos: vec3<f32>) -> Voxel {
  let n = f32(N());
  let uvw = uvwFromPos(pos);
  let x = clampU(i32(floor(uvw.x * n)), 0, i32(N()) - 1);
  let y = clampU(i32(floor(uvw.y * n)), 0, i32(N()) - 1);
  let z = clampU(i32(floor(uvw.z * n)), 0, i32(N()) - 1);
  return stateSrc[idx3(x, y, z)];
}

fn surfaceIndexFromDir(dir: vec3<f32>) -> u32 {
  let u = atan2(dir.z, dir.x) / (2.0 * 3.14159265) + 0.5;
  let v = asin(clamp(dir.y, -1.0, 1.0)) / 3.14159265 + 0.5;
  let uu = fract(u);
  let vv = clamp(v, 0.0, 0.999999);
  let x = u32(uu * f32(surfaceW()));
  let y = u32(vv * f32(surfaceH()));
  return y * surfaceW() + x;
}

fn groundAltFromSurface(s: vec4<f32>) -> f32 {
  let ocean = clamp(s.x, 0.0, 1.0);
  let elev01 = clamp(s.y, 0.0, 1.0);
  // Oceans sit at sea level offset; land uses elevation meters.
  return mix(seaOffsetM(), elev01 * mountainHeightM(), 1.0 - ocean);
}

fn satVaporPressurePa(T: f32) -> f32 {
  let Tc = T - 273.15;
  let es_hPa = 6.112 * exp((17.67 * Tc) / (Tc + 243.5));
  return es_hPa * 100.0;
}

fn satMixingRatio(T: f32) -> f32 {
  let e = satVaporPressurePa(T);
  let p = 101325.0;
  let eps = 0.622;
  return (eps * e) / max(p - e, 1.0);
}

fn packRGBA8(r: f32, g: f32, b: f32, a: f32) -> u32 {
  let R = u32(clamp(r, 0.0, 1.0) * 255.0 + 0.5);
  let G = u32(clamp(g, 0.0, 1.0) * 255.0 + 0.5);
  let B = u32(clamp(b, 0.0, 1.0) * 255.0 + 0.5);
  let A = u32(clamp(a, 0.0, 1.0) * 255.0 + 0.5);
  return (A << 24u) | (B << 16u) | (G << 8u) | R;
}

@compute @workgroup_size(4, 4, 4)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  let n = N();
  if (gid.x >= n || gid.y >= n || gid.z >= n) { return; }

  let i = idx3(gid.x, gid.y, gid.z);
  let pos = posFromIndex(gid.x, gid.y, gid.z);
  let r = length(pos);
  if (r < 1e-3) {
    stateDst[i] = Voxel(vec4<f32>(0.0), vec4<f32>(0.0));
    return;
  }
  let dir = pos / r;

  // Surface coupling (ocean mask + soil/snow from 2D surface state).
  let surfIdx = surfaceIndexFromDir(dir);
  let surf = surface[surfIdx];
  let ocean = clamp(surf.x, 0.0, 1.0);
  let ss = surfaceStateSrc[surfIdx];
  let soil = clamp(ss.x, 0.0, 1.0);
  let snow = clamp(ss.y, 0.0, 1.0);

  // Terrain-aware ground radius so we don't simulate atmosphere under sea level or inside mountains.
  let groundR = planetRadiusM() + groundAltFromSurface(surf);
  let altCenter = r - groundR;
  // Approx radial reach of this voxel along the radial direction (reduces near-surface altitude bias at low N).
  let halfVoxelM = 0.5 / max(invVoxelSize(), 1e-9);
  let halfRadialM = halfVoxelM * (abs(dir.x) + abs(dir.y) + abs(dir.z));
  let altMin = altCenter - halfRadialM;
  let altMax = altCenter + halfRadialM;
  let inAtmo = (altMax > 0.0) && (altMin < atmoThicknessM());
  let altEff = clamp(altMin, 0.0, atmoThicknessM());

  // Outside atmosphere shell: damp to zero quickly to avoid garbage.
  if (!inAtmo) {
    stateDst[i] = Voxel(vec4<f32>(0.0), vec4<f32>(0.0));
    // Still write atlas pixel so we don't leave stale data in used voxels.
    let tx = gid.z % tilesX();
    let ty = gid.z / tilesX();
    let ax = tx * n + gid.x;
    let ay = ty * n + gid.y;
    outPixels[ay * atlasW() + ax] = packRGBA8(0.0, 0.0, 0.5, 0.0);
    return;
  }

  let s0 = stateSrc[i];
  let vel0 = s0.b.yzw;

  // Semi-Lagrangian advection (nearest for now; stable + fast).
  let posBack = pos - vel0 * dt();
  let sAdv = sampleNearest(posBack);

  // Rain sedimentation: advect with additional radial fall speed.
  let posBackRain = pos - (vel0 - dir * fallSpeed()) * dt();
  let sRain = sampleNearest(posBackRain);

  var T = sAdv.a.x;
  var qv = sAdv.a.y;
  var qc = sAdv.a.z;
  var qr = sRain.a.w * exp(-rainDecay() * dt());
  var p = sAdv.b.x;
  var vel = sAdv.b.yzw;

  // Radiative equilibrium temperature proxy.
  let insolation = max(dot(dir, normalize(sunDir())), 0.0);
  // Keep a floor so the sun-facing half still evaporates when the sun is low.
  let insFloor = max(insolation, 0.2);
  let latFactor = abs(dir.y);
  let snowCover = snow * (1.0 - ocean);
  let albedoBase = mix(0.22, 0.06, ocean);
  let albedo = mix(albedoBase, 0.75, snowCover);
  let Teq = baseTempK() - 55.0 * latFactor + solarHeatingK() * insFloor * (1.0 - albedo) - (lapseRate() * altEff);
  let relaxRate = tempRelax() * mix(1.0, oceanInertia(), ocean);
  T = mix(T, Teq, clamp(dt() * relaxRate, 0.0, 1.0));

  // Convergence lift proxy (uses full divergence as a cheap stand-in).
  let inv2dx = 0.5 * invVoxelSize();
  let xL = clampU(i32(gid.x) - 1, 0, i32(n) - 1);
  let xR = clampU(i32(gid.x) + 1, 0, i32(n) - 1);
  let yD = clampU(i32(gid.y) - 1, 0, i32(n) - 1);
  let yU = clampU(i32(gid.y) + 1, 0, i32(n) - 1);
  let zB = clampU(i32(gid.z) - 1, 0, i32(n) - 1);
  let zF = clampU(i32(gid.z) + 1, 0, i32(n) - 1);

  let vL = stateSrc[idx3(xL, gid.y, gid.z)].b.yzw;
  let vR = stateSrc[idx3(xR, gid.y, gid.z)].b.yzw;
  let vD = stateSrc[idx3(gid.x, yD, gid.z)].b.yzw;
  let vU = stateSrc[idx3(gid.x, yU, gid.z)].b.yzw;
  let vB = stateSrc[idx3(gid.x, gid.y, zB)].b.yzw;
  let vF = stateSrc[idx3(gid.x, gid.y, zF)].b.yzw;

  let div = (vR.x - vL.x) * inv2dx + (vU.y - vD.y) * inv2dx + (vF.z - vB.z) * inv2dx;
  let wConv = (-div) * scaleHeightM();
  
  // Orographic lift from terrain slope projected into local east/north wind.
  let sw = surfaceW();
  let sh = surfaceH();
  let sx = surfIdx % sw;
  let sy = surfIdx / sw;
  let xLs = (sx + sw - 1u) % sw;
  let xRs = (sx + 1u) % sw;
  let yDs = u32(max(i32(sy) - 1, 0));
  let yUs = u32(min(i32(sy) + 1, i32(sh) - 1));

  let altL = groundAltFromSurface(surface[sy * sw + xLs]);
  let altR = groundAltFromSurface(surface[sy * sw + xRs]);
  let altD = groundAltFromSurface(surface[yDs * sw + sx]);
  let altU = groundAltFromSurface(surface[yUs * sw + sx]);

  let cosLat = max(sqrt(max(1.0 - dir.y * dir.y, 0.0)), 0.08);
  let dxM = 2.0 * 3.14159265 * planetRadiusM() * cosLat / f32(sw);
  let dyM = 3.14159265 * planetRadiusM() / f32(sh);
  let dhdx = (altR - altL) * (0.5 / max(dxM, 1.0));
  let dhdy = (altU - altD) * (0.5 / max(dyM, 1.0));

  let up = select(vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 0.0, 0.0), abs(dir.y) > 0.99);
  let east = normalize(cross(up, dir));
  let north = normalize(cross(dir, east));
  let velHoriz = vel - dir * dot(vel, dir);
  let uEast = dot(velHoriz, east);
  let vNorth = dot(velHoriz, north);
  let orogMask = exp(-altEff / 4500.0);
  let wOrog = (uEast * dhdx + vNorth * dhdy) * orogMask;

  let wLift = clamp(wConv + wOrog, -20.0, 20.0);
  T -= 0.0098 * wLift * dt();

  // Evaporation near surface.
  let qs = satMixingRatio(T);
  let deficit = max(0.0, qs - qv);
  let nearSurface = select(0.0, 1.0, altEff < 2000.0);
  qv += nearSurface * ocean * evapOcean() * insFloor * deficit * dt();
  qv += nearSurface * (1.0 - ocean) * evapLand() * insFloor * soil * (1.0 - 0.85 * snowCover) * dt();
  // Keep a minimum humidity reservoir near the surface so it can't dry out completely.
  let qMin = qs * 0.35;
  qv = max(qv, nearSurface * qMin + (1.0 - nearSurface) * qv);
  // Seed a tiny cloud amount near the surface to kickstart visuals/stability.
  let seedQc = nearSurface * insFloor * (0.0015 + 0.0015 * ocean);
  let take = min(seedQc, qv * 0.7);
  qv -= take;
  qc += take;

  // Condensation / evaporation of cloud water.
  let latentK = 2000.0;
  if (qv > qs) {
    let cond = (qv - qs) * clamp(dt() * condenseRate(), 0.0, 1.0);
    qv -= cond;
    qc += cond;
    T += latentK * cond;
  } else if (qc > 0.0) {
    let evap = min(qs - qv, qc) * clamp(dt() * cloudEvapRate(), 0.0, 1.0);
    qv += evap;
    qc -= evap;
    T -= latentK * evap;
  }

  // Precipitation generation.
  // Threshold tuned so small clouds survive; autoconversion is slow.
  let qcThresh = 0.0015;
  let pr = max(0.0, qc - qcThresh) * clamp(dt() * precipRate(), 0.0, 1.0);
  qc -= pr;
  qr += pr;

  // Pressure relax toward a T/q-driven target.
  let pEq = -(T - baseTempK()) * pTempCoeff() - (qv * pVaporCoeff()) - (altEff * 0.08);
  p = mix(p, pEq, clamp(dt() * pSmooth(), 0.0, 1.0));

  // Wind from geostrophic balance in the local tangent plane + weak ageostrophic convergence.
  let pL = stateSrc[idx3(xL, gid.y, gid.z)].b.x;
  let pR = stateSrc[idx3(xR, gid.y, gid.z)].b.x;
  let pD = stateSrc[idx3(gid.x, yD, gid.z)].b.x;
  let pU = stateSrc[idx3(gid.x, yU, gid.z)].b.x;
  let pB = stateSrc[idx3(gid.x, gid.y, zB)].b.x;
  let pF = stateSrc[idx3(gid.x, gid.y, zF)].b.x;
  let dpdx = (pR - pL) * inv2dx;
  let dpdy = (pU - pD) * inv2dx;
  let dpdz = (pF - pB) * inv2dx;
  let gradP = vec3<f32>(dpdx, dpdy, dpdz);
  let gradH = gradP - dir * dot(gradP, dir);

  var f = 2.0 * omega() * dir.y;
  if (abs(f) < coriolisMin()) {
    f = select(-coriolisMin(), coriolisMin(), f >= 0.0);
  }
  let rho = 1.2;
  let vGeo = cross(dir, gradH) * (1.0 / (rho * f));
  let vAgeo = -gradH * 0.012;
  let vTarget = vGeo + vAgeo;

  vel = mix(vel, vTarget, clamp(dt() * windRelax(), 0.0, 1.0));
  vel *= exp(-windDrag() * dt());
  // Add a small vertical component for convection/uplift so moisture can become volumetric.
  let topFrac = clamp(altEff / max(atmoThicknessM(), 1e-3), 0.0, 1.0);
  let wDamp = 1.0 - smoothstep(0.70, 1.0, topFrac);
  vel += dir * clamp(wLift, -8.0, 8.0) * 0.25 * wDamp;
  let sp = length(vel);
  if (sp > maxWind()) {
    vel *= maxWind() / max(sp, 1e-3);
  }

  // Clamp.
  T = clamp(T, 180.0, 330.0);
  qv = clamp(qv, 0.0, 0.05);
  qc = clamp(qc, 0.0, 0.02);
  qr = clamp(qr, 0.0, 0.02);

  stateDst[i] = Voxel(vec4<f32>(T, qv, qc, qr), vec4<f32>(p, vel));

  // Pack volume atlas (cloud, rain, pressure, RH).
  // Boost visual contrast so low but non‑zero cloud water shows up.
  let scaleN = max(1.0, 64.0 / f32(N())); // higher res → scale up visibility
  let cloud01 = clamp(qc * 8000.0 * scaleN, 0.0, 1.0);
  let rain01 = clamp(qr * 800.0, 0.0, 1.0);
  let p01 = clamp(0.5 + p * (1.0 / 6000.0), 0.0, 1.0);
  let rh01 = clamp(select(0.0, qv / max(qs, 1e-6), qs > 0.0), 0.0, 1.0);

  let tx = gid.z % tilesX();
  let ty = gid.z / tilesX();
  let ax = tx * n + gid.x;
  let ay = ty * n + gid.y;
  outPixels[ay * atlasW() + ax] = packRGBA8(cloud01, rain01, p01, rh01);

}
        `}_wgslCollapse(){return`
struct Voxel {
  a: vec4<f32>, // T, qv, qc, qr
  b: vec4<f32>, // p, vx, vy, vz
};

@group(0) @binding(0) var<uniform> params: array<vec4<f32>, 12>;
@group(0) @binding(1) var<storage, read> stateSrc: array<Voxel>;
@group(0) @binding(2) var<storage, read_write> stateDst: array<Voxel>;
@group(0) @binding(3) var<storage, read> surface: array<vec4<f32>>;
@group(0) @binding(4) var<storage, read> surfaceStateSrc: array<vec4<f32>>; // soil, snow, rain, _
@group(0) @binding(5) var<storage, read_write> surfaceStateDst: array<vec4<f32>>;
@group(0) @binding(6) var<storage, read_write> outPixels: array<u32>;

fn N() -> u32 { return u32(params[0].x + 0.5); }
fn dt() -> f32 { return params[0].w; }
fn extentM() -> f32 { return params[1].y; }
fn invVoxelSize() -> f32 { return params[1].z; }
fn planetRadiusM() -> f32 { return params[1].w; }

fn atmoThicknessM() -> f32 { return params[2].x; }
fn sunDir() -> vec3<f32> { return params[3].xyz; }

fn maxWind() -> f32 { return params[6].w; }

fn surfaceW() -> u32 { return u32(params[8].x + 0.5); }
fn surfaceH() -> u32 { return u32(params[8].y + 0.5); }
fn weatherW() -> u32 { return u32(params[8].z + 0.5); }
fn weatherH() -> u32 { return u32(params[8].w + 0.5); }

fn weatherOffset() -> u32 { return u32(params[10].x + 0.5); }
fn auxOffset() -> u32 { return u32(params[10].y + 0.5); }
fn mountainHeightM() -> f32 { return max(params[11].x, 0.0); }
fn seaOffsetM() -> f32 { return params[11].y; }

fn idx3(x: u32, y: u32, z: u32) -> u32 {
  let n = N();
  return (z * n + y) * n + x;
}

fn clampU(v: i32, lo: i32, hi: i32) -> u32 {
  return u32(clamp(v, lo, hi));
}

fn uvwFromPos(pos: vec3<f32>) -> vec3<f32> {
  return clamp(pos / extentM() * 0.5 + vec3<f32>(0.5), vec3<f32>(0.0), vec3<f32>(0.999999));
}

fn sampleNearest(pos: vec3<f32>) -> Voxel {
  let n = f32(N());
  let uvw = uvwFromPos(pos);
  let x = clampU(i32(floor(uvw.x * n)), 0, i32(N()) - 1);
  let y = clampU(i32(floor(uvw.y * n)), 0, i32(N()) - 1);
  let z = clampU(i32(floor(uvw.z * n)), 0, i32(N()) - 1);
  return stateSrc[idx3(x, y, z)];
}

fn surfaceIndexFromDir(dir: vec3<f32>) -> u32 {
  let u = atan2(dir.z, dir.x) / (2.0 * 3.14159265) + 0.5;
  let v = asin(clamp(dir.y, -1.0, 1.0)) / 3.14159265 + 0.5;
  let uu = fract(u);
  let vv = clamp(v, 0.0, 0.999999);
  let x = u32(uu * f32(surfaceW()));
  let y = u32(vv * f32(surfaceH()));
  return y * surfaceW() + x;
}

fn groundAltFromSurface(s: vec4<f32>) -> f32 {
  let ocean = clamp(s.x, 0.0, 1.0);
  let elev01 = clamp(s.y, 0.0, 1.0);
  return (1.0 - ocean) * elev01 * mountainHeightM();
}

fn packRGBA8(r: f32, g: f32, b: f32, a: f32) -> u32 {
  let R = u32(clamp(r, 0.0, 1.0) * 255.0 + 0.5);
  let G = u32(clamp(g, 0.0, 1.0) * 255.0 + 0.5);
  let B = u32(clamp(b, 0.0, 1.0) * 255.0 + 0.5);
  let A = u32(clamp(a, 0.0, 1.0) * 255.0 + 0.5);
  return (A << 24u) | (B << 16u) | (G << 8u) | R;
}

fn directionFromLatLon(lat: f32, lon: f32) -> vec3<f32> {
  let cl = cos(lat);
  return vec3<f32>(cl * cos(lon), sin(lat), cl * sin(lon));
}

fn makeBasis(dir: vec3<f32>) -> mat3x3<f32> {
  let up = select(vec3<f32>(0.0, 1.0, 0.0), vec3<f32>(1.0, 0.0, 0.0), abs(dir.y) > 0.99);
  let east = normalize(cross(up, dir));
  let north = normalize(cross(dir, east));
  return mat3x3<f32>(east, north, dir);
}

@compute @workgroup_size(8, 8)
fn main(@builtin(global_invocation_id) gid: vec3<u32>) {
  if (gid.x >= weatherW() || gid.y >= weatherH()) { return; }
  let w = weatherW();
  let h = weatherH();
  let i2 = gid.y * w + gid.x;

  let u = (f32(gid.x) + 0.5) / f32(w);
  let v = (f32(gid.y) + 0.5) / f32(h);
  let lat = (v - 0.5) * 3.14159265;
  let lon = (u - 0.5) * 2.0 * 3.14159265;
  let dir = directionFromLatLon(lat, lon);

  let surfIdx = surfaceIndexFromDir(dir);
  let surf = surface[surfIdx];
  let ocean = clamp(surf.x, 0.0, 1.0);
  var groundR = planetRadiusM() + groundAltFromSurface(surf);
  // Ensure ocean columns start at sea surface, not base planet radius.
  groundR = max(groundR, planetRadiusM() + seaOffsetM());

  let ss0 = surfaceStateSrc[i2];
  var soil = clamp(ss0.x, 0.0, 1.0);
  var snow = clamp(ss0.y, 0.0, 1.0);
  var rain = clamp(ss0.z, 0.0, 0.02);
  var runoff = clamp(ss0.w, 0.0, 1.0);

  // Integrate along the column to form 2D maps.
  var maxQc = 0.0;
  var maxQr = 0.0;
  var pMid = 0.0;
  var Tsurf = 280.0;
  var velSample = vec3<f32>(0.0);

  // Sample more layers so thin clouds are captured in the 2D maps.
  let steps: u32 = 32u;
  for (var k: u32 = 0u; k < steps; k = k + 1u) {
    let t = (f32(k) + 0.5) / f32(steps);
    let r = groundR + t * atmoThicknessM();
    let pos = dir * r;
    let s = sampleNearest(pos);
    maxQc = max(maxQc, s.a.z);
    maxQr = max(maxQr, s.a.w);
    if (k == 0u) { Tsurf = s.a.x; }
    if (k == steps / 2u) { pMid = s.b.x; }
    if (k == 3u) { velSample = s.b.yzw; }
  }

  // Update surface rain/soil/snow (simple persistence).
  let liquid = smoothstep(271.15, 275.15, Tsurf);
  let prLiquid = maxQr * liquid;
  let prSnow = maxQr * (1.0 - liquid);
  rain = rain * exp(-params[5].z * dt()) + prLiquid; // rainDecay in params[5].z
  soil = clamp(soil + prLiquid * (1.0 - ocean) * 400.0, 0.0, 1.0);
  soil *= exp(-dt() * (1.0 / 86400.0));
  snow = clamp(snow + prSnow * (1.0 - ocean) * 650.0, 0.0, 1.0);

  let insolation = max(dot(dir, normalize(sunDir())), 0.0);
  let meltFactor = clamp((Tsurf - 272.15) / 6.0 + insolation * 0.15, 0.0, 1.0);
  let melt = min(snow, snow * meltFactor * dt() * (1.0 / 21600.0));
  snow -= melt;
  soil = clamp(soil + melt * (1.0 - ocean) * 0.65, 0.0, 1.0);
  runoff = clamp(runoff + prLiquid * 120.0 + prSnow * 80.0 + melt * 60.0, 0.0, 5.0);
  runoff *= exp(-dt() * (1.0 / 172800.0)); // 2-day decay
  // Glacier formation proxy: excess snow turns into slow-decay runoff/glacier store.
  let glacier = max(0.0, snow - 1.0);
  snow = min(snow, 1.0);
  runoff = min(runoff + glacier * 0.2, 5.0);

  surfaceStateDst[i2] = vec4<f32>(soil, snow, rain, runoff);

  // Main weather map (cloud, rain, pressure, soil).
  // If column is very humid but maxQc is tiny, boost cloud to make it visible.
  var cloud01 = clamp(maxQc * 600.0, 0.0, 1.0);
  let rain01 = clamp(rain * 800.0, 0.0, 1.0);
  let p01 = clamp(0.5 + pMid * (1.0 / 6000.0), 0.0, 1.0);
  outPixels[weatherOffset() + i2] = packRGBA8(cloud01, rain01, p01, clamp(soil, 0.0, 1.0));

  // Aux map (temp, snow, windU, windV) where wind is (east,north).
  let temp01 = clamp((Tsurf - 240.0) / 70.0, 0.0, 1.0);
  let snow01 = clamp(snow, 0.0, 1.0);

  // If column is very humid/warm (temp01 high) but cloud is tiny, nudge visibility.
  if (cloud01 < 0.02 && maxQr < 1e-4) {
    cloud01 = max(cloud01, temp01 * 0.25);
  }

  let basis = makeBasis(dir);
  let windEast = dot(velSample, basis[0]);
  let windNorth = dot(velSample, basis[1]);
  let u01 = clamp(0.5 + 0.5 * clamp(windEast / maxWind(), -1.0, 1.0), 0.0, 1.0);
  let v01 = clamp(0.5 + 0.5 * clamp(windNorth / maxWind(), -1.0, 1.0), 0.0, 1.0);
  outPixels[auxOffset() + i2] = packRGBA8(temp01, snow01, u01, v01);

}
        `}}const Au=(()=>{const i=new Uint8Array([0,0,0,0]),e=new _i(i,1,1,Mt,Rt);return e.needsUpdate=!0,e.wrapS=bn,e.wrapT=vt,e.minFilter=ot,e.magFilter=ot,e.generateMipmaps=!1,e.colorSpace=Lt,e})();class f_{constructor(e,{maxDrops:t=12e3}={}){this.scene=e,this.maxDrops=Math.max(0,Math.floor(t)),this.enabled=!0,this.uniforms={time:{value:0},color:{value:new Ee("#bfe8ff")},opacity:{value:.55},strength:{value:1},density:{value:.65},rainThreshold:{value:.03},volumeRadius:{value:.012},volumeHeight:{value:.012},fallDistance:{value:.016},fallSpeed:{value:.35},dropLength:{value:25e-5},dropWidth:{value:5e-5},planetNearRadius:{value:12},nearMargin:{value:.35},weatherMap:{value:Au},planetInvRot:{value:new Ce},planetInvScale:{value:1},windWorld:{value:new C(0,0,0)},windTilt:{value:.65}},this.mesh=this._buildMesh(),this.mesh.visible=this.enabled,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1.2,e.add(this.mesh)}dispose(){var e,t;this.mesh&&(this.scene.remove(this.mesh),this.mesh.geometry.dispose(),(t=(e=this.mesh.material).dispose)==null||t.call(e),this.mesh=null)}setEnabled(e){this.enabled=!!e,this.mesh&&(this.mesh.visible=this.enabled)}setWeatherMap(e){this.uniforms.weatherMap.value=e??Au}setWeatherFrame({planetInvRot:e,planetInvScale:t}){e&&this.uniforms.planetInvRot.value.copy(e),Number.isFinite(t)&&(this.uniforms.planetInvScale.value=t)}setWindWorld(e){e&&this.uniforms.windWorld.value.copy(e)}setPlanetNearRadius(e){Number.isFinite(e)&&(this.uniforms.planetNearRadius.value=Math.max(.1,e))}setStrength(e){Number.isFinite(e)&&(this.uniforms.strength.value=Math.max(0,e))}setDensity(e){Number.isFinite(e)&&(this.uniforms.density.value=Math.min(Math.max(e,0),1))}setSizes({volumeRadius:e,volumeHeight:t,fallDistance:n,dropLength:a,dropWidth:s}={}){Number.isFinite(e)&&(this.uniforms.volumeRadius.value=Math.max(0,e)),Number.isFinite(t)&&(this.uniforms.volumeHeight.value=Math.max(0,t)),Number.isFinite(n)&&(this.uniforms.fallDistance.value=Math.max(0,n)),Number.isFinite(a)&&(this.uniforms.dropLength.value=Math.max(0,a)),Number.isFinite(s)&&(this.uniforms.dropWidth.value=Math.max(0,s))}update(e){if(!this.enabled||!this.mesh)return;const t=Math.min(Math.max(e??0,0),.25);this.uniforms.time.value+=t}_buildMesh(){const e=new Ls(1,1,1,1),t=new Jf;t.index=e.index,t.attributes.position=e.attributes.position,t.attributes.uv=e.attributes.uv;const n=new Float32Array(this.maxDrops*3),a=new Float32Array(this.maxDrops);for(let r=0;r<this.maxDrops;r++){const o=r*3;n[o+0]=Math.random()*2-1,n[o+1]=Math.random(),n[o+2]=Math.random()*2-1,a[r]=Math.random()}t.setAttribute("aOffset",new Vc(n,3)),t.setAttribute("aSeed",new Vc(a,1)),t.instanceCount=this.maxDrops;const s=new Kt({uniforms:this.uniforms,transparent:!0,depthWrite:!1,depthTest:!0,side:un,blending:Sn,vertexShader:`
                #include <common>
                #include <logdepthbuf_pars_vertex>

                attribute vec3 aOffset;
                attribute float aSeed;

                uniform float time;
                uniform float density;

                uniform float volumeRadius;
                uniform float volumeHeight;
                uniform float fallDistance;
                uniform float fallSpeed;
                uniform float dropLength;
                uniform float dropWidth;

                uniform float planetNearRadius;
                uniform float nearMargin;

                uniform mat3 planetInvRot;
                uniform float planetInvScale;
                uniform vec3 windWorld;
                uniform float windTilt;

                varying vec2 vWeatherUV;
                varying float vSeed;
                varying float vVisible;
                varying vec2 vUV;

                vec3 safeNormalize(vec3 v) {
                    float l = length(v);
                    if (l < 1e-6) return vec3(0.0, 1.0, 0.0);
                    return v / l;
                }

                vec3 basisEast(vec3 up) {
                    vec3 axis = vec3(0.0, 1.0, 0.0);
                    vec3 e = cross(axis, up);
                    if (length(e) < 1e-5) {
                        axis = vec3(1.0, 0.0, 0.0);
                        e = cross(axis, up);
                    }
                    return safeNormalize(e);
                }

                void main() {
                    vUV = uv;
                    vSeed = aSeed;
                    if (aSeed > density) {
                        vVisible = 0.0;
                        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
                        return;
                    }

                    // Disable rain when the camera is far from the surface (orbit view).
                    vec3 camLocal = planetInvRot * (cameraPosition * planetInvScale);
                    float camR = length(camLocal);
                    float camNear = 1.0 - smoothstep(planetNearRadius + nearMargin, planetNearRadius + nearMargin * 3.0, camR);
                    if (camNear <= 0.001) {
                        vVisible = 0.0;
                        gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
                        return;
                    }

                    vec3 upWorld = safeNormalize(cameraPosition);
                    vec3 eastWorld = basisEast(upWorld);
                    vec3 northWorld = safeNormalize(cross(upWorld, eastWorld));

                    float t = fract(time * fallSpeed + aSeed * 31.7);
                    vec3 offsetWorld = eastWorld * (aOffset.x * volumeRadius)
                        + northWorld * (aOffset.z * volumeRadius)
                        + upWorld * (aOffset.y * volumeHeight)
                        - upWorld * (t * fallDistance);

                    vec3 basePosWorld = cameraPosition + offsetWorld;
                    vec3 basePosLocal = planetInvRot * (basePosWorld * planetInvScale);
                    vec3 dirLocal = safeNormalize(basePosLocal);
                    float wu = atan(dirLocal.z, dirLocal.x) / (2.0 * 3.14159265) + 0.5;
                    float wv = asin(clamp(dirLocal.y, -1.0, 1.0)) / 3.14159265 + 0.5;
                    vWeatherUV = vec2(wu, wv);

                    vec3 downWorld = -upWorld;
                    vec3 fallDirWorld = safeNormalize(downWorld + windWorld * windTilt);
                    vec3 viewDirWorld = safeNormalize(cameraPosition - basePosWorld);
                    vec3 rightWorld = cross(viewDirWorld, fallDirWorld);
                    float rl = length(rightWorld);
                    if (rl < 1e-5) rightWorld = eastWorld;
                    else rightWorld /= rl;

                    float widthCoord = (uv.x - 0.5) * dropWidth;
                    float along = uv.y * dropLength;
                    vec3 worldPos = basePosWorld + rightWorld * widthCoord + fallDirWorld * along;

                    vVisible = camNear;
                    vec4 mv = viewMatrix * vec4(worldPos, 1.0);
                    gl_Position = projectionMatrix * mv;
                    #include <logdepthbuf_vertex>
                }
            `,fragmentShader:`
                #include <common>
                #include <logdepthbuf_pars_fragment>

                uniform sampler2D weatherMap;
                uniform vec3 color;
                uniform float opacity;
                uniform float strength;
                uniform float rainThreshold;

                varying vec2 vWeatherUV;
                varying float vSeed;
                varying float vVisible;
                varying vec2 vUV;

                void main() {
                    #include <logdepthbuf_fragment>

                    if (vVisible <= 0.001) discard;

                    vec4 w = texture2D(weatherMap, vWeatherUV);
                    float rainNow = w.g;
                    float rainFactor = smoothstep(rainThreshold, rainThreshold + 0.18, rainNow);

                    float across = abs(vUV.x - 0.5) * 2.0;
                    float core = 1.0 - smoothstep(0.65, 1.0, across);
                    float taper = smoothstep(0.0, 0.08, vUV.y) * (1.0 - smoothstep(0.85, 1.0, vUV.y));

                    float a = opacity * strength * rainFactor * core * taper * vVisible;
                    if (a < 0.01) discard;

                    gl_FragColor = vec4(color, a);
                }
            `});return e.dispose(),new Tt(t,s)}}const p_=document.getElementById("viewport"),Tl=document.getElementById("hud"),ms=document.getElementById("hudToggle"),Ru=document.getElementById("hudContent"),m_=document.getElementById("status"),jn=document.getElementById("preset"),Al=document.getElementById("regen"),$a=document.getElementById("resolution"),Ja=document.getElementById("plates"),Yi=document.getElementById("plateSizeVariance"),Ki=document.getElementById("jitter"),ji=document.getElementById("heightScale"),Qa=document.getElementById("iterations"),Zi=document.getElementById("erosionRate"),$i=document.getElementById("evaporation"),Ji=document.getElementById("seaLevel"),Qi=document.getElementById("smoothPasses"),ea=document.getElementById("subdivisions"),ta=document.getElementById("iceCap"),Is=document.getElementById("plateDelta"),Or=document.getElementById("faultType"),qn=document.getElementById("desymmetrizeTiling"),Zn=document.getElementById("atmosphere"),g_=document.getElementById("jitterValue"),v_=document.getElementById("heightScaleValue"),__=document.getElementById("erosionRateValue"),x_=document.getElementById("evaporationValue"),y_=document.getElementById("seaLevelValue"),M_=document.getElementById("smoothPassesValue"),S_=document.getElementById("subdivisionsValue"),E_=document.getElementById("iceCapValue"),b_=document.getElementById("plateDeltaValue"),w_=document.getElementById("plateSizeVarianceValue"),T_=document.getElementById("atmosphereValue"),ci=document.getElementById("atmosphereHeight"),A_=document.getElementById("atmosphereHeightValue"),ic=document.getElementById("atmosphereToggle"),is=document.getElementById("atmosphereAlpha"),R_=document.getElementById("atmosphereAlphaValue"),Us=document.getElementById("atmosphereColor"),Vh=document.getElementById("cloudToggle"),Ia=document.getElementById("cloudAlpha"),C_=document.getElementById("cloudAlphaValue"),Ua=document.getElementById("cloudSpeed"),P_=document.getElementById("cloudSpeedValue"),Fa=document.getElementById("cloudQuantity"),D_=document.getElementById("cloudQuantityValue"),Na=document.getElementById("cloudHeight"),L_=document.getElementById("cloudHeightValue"),gs=document.getElementById("cloudColor"),Oa=document.getElementById("cloudResolution"),I_=document.getElementById("cloudResolutionValue"),vs=document.getElementById("cloudShader"),Cu=document.getElementById("cloudLayers"),U_=document.getElementById("addCloudLayer"),it=document.getElementById("waterCycleToggle"),En=document.getElementById("waterCycleCloudToggle"),ui=document.getElementById("waterCycleRun"),ws=document.getElementById("waterCycleStep"),_s=document.getElementById("weatherSimMode"),Yn=document.getElementById("weatherVolumeRes"),Pu=document.getElementById("weatherVolumeResValue"),Ba=document.getElementById("weatherAtmoThickness"),Du=document.getElementById("weatherAtmoThicknessValue"),hi=document.getElementById("axialTilt"),Lu=document.getElementById("axialTiltValue"),di=document.getElementById("seasonProgress"),Iu=document.getElementById("seasonProgressValue"),xs=document.getElementById("weatherDebug"),Pn=document.getElementById("volumeSlice"),es=document.getElementById("volumeSliceValue");let Mn=null;const Ni=document.getElementById("weatherSpeed"),Uu=document.getElementById("weatherSpeedValue"),Oi=document.getElementById("weatherUpdateHz"),Fu=document.getElementById("weatherUpdateHzValue"),Kn=document.getElementById("weatherMoistureLayers"),Nu=document.getElementById("weatherMoistureLayersValue"),Bi=document.getElementById("weatherEvap"),Ou=document.getElementById("weatherEvapValue"),zi=document.getElementById("weatherPrecip"),Bu=document.getElementById("weatherPrecipValue"),ki=document.getElementById("weatherWind"),zu=document.getElementById("weatherWindValue"),Vi=document.getElementById("weatherWetness"),ku=document.getElementById("weatherWetnessValue"),Hi=document.getElementById("weatherOceanInertia"),Vu=document.getElementById("weatherOceanInertiaValue"),ys=document.getElementById("weatherRainFxToggle"),Gi=document.getElementById("weatherRainFx"),Hu=document.getElementById("weatherRainFxValue"),Wi=document.getElementById("weatherRainHaze"),Gu=document.getElementById("weatherRainHazeValue"),Cr=document.getElementById("movePad"),Pr=document.getElementById("lookPad"),Fi=document.getElementById("mobileControls"),Ms=document.getElementById("surfaceOnly"),Dr=document.getElementById("configToggle"),Po=document.getElementById("configPanel"),ri=document.getElementById("vrToggle"),Ra=document.getElementById("reticle"),za=document.getElementById("leftStickSensitivity"),Wu=document.getElementById("leftStickSensitivityValue"),ka=document.getElementById("lookSensitivityX"),Xu=document.getElementById("lookSensitivityXValue"),Va=document.getElementById("lookSensitivityY"),qu=document.getElementById("lookSensitivityYValue"),Ss=document.getElementById("invertLook"),fi=document.getElementById("planetDiameter"),Yu=document.getElementById("planetDiameterValue"),Ts=1e3,F_=2,dn=10,Hh=Ts*1e3*.5,Br=(()=>{const i=new Uint8Array([110,0,128,0]),e=new _i(i,1,1,Mt,Rt);return e.needsUpdate=!0,e.wrapS=bn,e.wrapT=vt,e.minFilter=ot,e.magFilter=ot,e.generateMipmaps=!1,e.colorSpace=Lt,e})(),Gh=(()=>{const i=new Uint8Array([160,0,128,128]),e=new _i(i,1,1,Mt,Rt);return e.needsUpdate=!0,e.wrapS=bn,e.wrapT=vt,e.minFilter=ot,e.magFilter=ot,e.generateMipmaps=!1,e.colorSpace=Lt,e})();function N_(){if(Mn)return Mn;const i=new Ch({map:Br,transparent:!0,opacity:1,depthTest:!1,depthWrite:!1,toneMapped:!1}),e=new kf(i);return e.renderOrder=999,e.scale.set(5,5,1),e.position.set(7.2,7.5,-12),at.add(e),Mn=e,e}function O_(i){Xh=i,!i&&Mn&&(Mn.visible=!1),i&&(N_(),Mn.visible=!0)}function B_(i){const e=document.getElementById("volumeSliceField");e&&(e.style.display=i?"block":"none")}function Ku(i){if(!Pn)return;const e=Math.max(0,Number(Pn.max)||0),t=Math.min(Math.max(Math.floor(i),0),e);Ir=t,Pn.value!==String(t)&&(Pn.value=t),es&&(es.textContent=t),Wh()}function Rl(){if(!Pn)return;const i=Vr(),e=(i==null?void 0:i.n)??0,t=Math.max(0,e-1);Pn.max=String(t),Ir>t&&(Ir=t,es&&(es.textContent=t))}function z_(){var c;const i=sc(),e=Vr();if(!i||!e)return null;const t=e.n||0;if(!Xt||Xt.image.width!==t||Xt.image.height!==t){const u=new Uint8Array(Math.max(1,t*t*4));Xt=new _i(u,Math.max(1,t),Math.max(1,t),Mt,Rt),Xt.needsUpdate=!0,Xt.wrapS=vt,Xt.wrapT=vt,Xt.minFilter=St,Xt.magFilter=St,Xt.generateMipmaps=!1,Xt.colorSpace=Lt}const n=Math.min(Math.max(Ir|0,0),Math.max(0,t-1)),a=e.tilesX||1,s=n%a,r=Math.floor(n/a),o=(c=i.image)==null?void 0:c.data;if(!(o&&o.length>=e.atlasW*e.atlasH*4))return i;const l=Xt.image.data;for(let u=0;u<t;u++){const h=((r*t+u)*e.atlasW+s*t)*4,f=u*t*4;for(let m=0;m<t;m++){const g=h+m*4,_=f+m*4,p=o[g]??0,d=o[g+1]??0,x=o[g+2]??128,y=o[g+3]??0,v=Math.min(255,p*2);l[_+0]=v,l[_+1]=Math.min(255,d+v*.3),l[_+2]=Math.min(255,x),l[_+3]=Math.max(160,y)}}return Xt.needsUpdate=!0,Xt}function Wh(){if(!Xh||!Mn)return;const i=z_();if(!i){Mn.visible=!1;return}Mn.visible=!0,Mn.material.map=i,Mn.material.needsUpdate=!0}const zr=()=>window.matchMedia("(max-width: 768px)").matches||/Mobi|Android|iP(ad|hone|od)|IEMobile|BlackBerry|Kindle|Silk|Opera Mini/i.test(navigator.userAgent||""),Yt=new Bv({antialias:!0,canvas:p_,logarithmicDepthBuffer:!0});Yt.setPixelRatio(Math.min(window.devicePixelRatio,2));Yt.setSize(window.innerWidth,window.innerHeight);Yt.setClearColor(329487);Yt.outputColorSpace=Qt;Yt.shadowMap.enabled=!0;Yt.shadowMap.type=oh;const tn=new Bf;tn.background=new Ee(329487);tn.fog=new Yl(329487,30,120);const Ut=new Ta;tn.add(Ut);let qt=null,Do=0;const k_={sunDir:{value:new C(0,1,0)}};let cn=null;function V_(){var o,l;qt&&(tn.remove(qt),qt.geometry.dispose(),(l=(o=qt.material).dispose)==null||l.call(o));const i=Math.max(.05,((Te==null?void 0:Te.radius)??dn)*.2),e=new $l(i,96,48),t=42,n=[];for(let c=0;c<t;c++){const u=Math.random()*Math.PI*2,h=Math.acos(2*Math.random()-1),f=Math.sin(h);n.push(new C(Math.cos(u)*f,Math.cos(h),Math.sin(u)*f))}const a=e.attributes.position,s=new C;for(let c=0;c<a.count;c++){s.fromBufferAttribute(a,c).normalize();let u=0;for(const h of n){const f=s.angleTo(h);if(f<.25){const m=1-f/.25;u-=m*m*.08}}s.multiplyScalar(1+u),a.setXYZ(c,s.x*i,s.y*i,s.z*i)}a.needsUpdate=!0,e.computeVertexNormals();const r=new Wf({color:14739181,roughness:.7,metalness:0,emissive:new Ee(16777215),emissiveIntensity:.15});qt=new Tt(e,r),qt.castShadow=!0,qt.receiveShadow=!0,tn.add(qt)}const Li=new Ta;tn.add(Li);const at=new ln(55,window.innerWidth/window.innerHeight,.1,200);Li.add(at);at.position.set(0,10,28);const nt=new kv(at,Yt.domElement);nt.rotateSpeed=1;nt.zoomSpeed=1.2;nt.panSpeed=.8;nt.dynamicDampingFactor=.15;nt.noPan=!0;nt.minDistance=12;nt.maxDistance=60;const tt=new i_;tt.setMode(zr()?"mobile":"desktop");tt.setLookMode("orbit");const en=new t_(at,Yt.domElement,tn,()=>{nt.enabled=!0,zt(""),Ca&&(nt.target.copy(Ca.target),at.position.copy(Ca.position),Ca=null),Yh(),tt.setLookMode("orbit")},tt),H_=new ep;tn.add(new Kf(14215167,658450,9e-4));const gt=new $f(16777215,1.35);gt.position.set(12,16,10);gt.castShadow=!0;gt.shadow.mapSize.set(2048,2048);gt.shadow.camera.near=1;gt.shadow.camera.far=200;tn.add(gt);tn.add(ox());let $e=null,Ha=!1,Cl=null,ai=null,An=null,Cn=null,As=[],zn=null,Hn=[],Te=null,be=null,Sr=null,Ci=null,Pl=null,Ca=null,gi=null,Dl=new Map;const ts=new El,Lo=new ve;let Io=!1;const fr=new Bt,ju=new lt,Ii=new Ce,Ga=new C,Lr=new C,Zu=new Ce,pr=new C,Ea=new C,$u=new C,Ju=new C,wa=new C;let Xh=!1,Ir=0,Xt=null,Gt=null,Uo=60;const _n=new f_(tn,{maxDrops:12e3});Gt=document.createElement("div");Gt.style.position="fixed";Gt.style.top="8px";Gt.style.right="60px";Gt.style.padding="4px 8px";Gt.style.background="rgba(0,0,0,0.35)";Gt.style.color="#fff";Gt.style.fontSize="12px";Gt.style.fontFamily="monospace";Gt.style.borderRadius="6px";Gt.style.pointerEvents="none";Gt.textContent="fps: --";document.body.appendChild(Gt);window.addEventListener("mousedown",i=>{if(i.button===1){if(i.preventDefault(),en.enabled){en.exit(),nt.enabled=!0;return}if(Lo.x=i.clientX/window.innerWidth*2-1,Lo.y=-(i.clientY/window.innerHeight)*2+1,ts.setFromCamera(Lo,at),$e){Ca={position:at.position.clone(),target:nt.target.clone()};const e=ts.intersectObject($e,!1);if(e.length>0){const t=e[0].point;en.enter(t,$e),nt.enabled=!1,zt("Mode: Tiny Planet Explorer (ESC to exit)")}}}});function ac(){if(en.enabled){en.snapToSurface();return}if(!$e)return;tt.setLookMode("surface"),ts.setFromCamera(new ve(0,0),at);const i=ts.intersectObject($e,!1);i.length&&(Ca={position:at.position.clone(),target:nt.target.clone()},en.enter(i[0].point,$e),nt.enabled=!1,zt("Mode: Tiny Planet Explorer (ESC to exit)"))}const Qu={fast:{resolution:384,numPlates:9,jitter:.6,iterations:8e4,erosionRate:.36,evaporation:.5,radius:10,heightScale:18.2,seaLevel:.53,smoothPasses:20,subdivisions:128,iceCap:.15,plateDelta:1.25,plateSizeVariance:.35,desymmetrizeTiling:!0,atmosphere:.35,atmosphereHeight:.5,atmosphereAlpha:1,atmosphereColor:"#4da8ff",faultType:"ridge"},balanced:{resolution:384,numPlates:9,jitter:.6,iterations:8e4,erosionRate:.36,evaporation:.5,radius:10,heightScale:18.2,seaLevel:.53,smoothPasses:20,subdivisions:128,iceCap:.12,plateDelta:1.25,plateSizeVariance:.35,desymmetrizeTiling:!0,atmosphere:.35,atmosphereHeight:.5,atmosphereAlpha:1,atmosphereColor:"#4da8ff",faultType:"mixed"},high:{resolution:384,numPlates:9,jitter:.6,iterations:8e4,erosionRate:.36,evaporation:.5,radius:10,heightScale:18.2,seaLevel:.53,smoothPasses:20,subdivisions:128,iceCap:.15,plateDelta:1.25,plateSizeVariance:.45,desymmetrizeTiling:!0,atmosphere:.35,atmosphereHeight:.5,atmosphereAlpha:1,atmosphereColor:"#4da8ff",faultType:"ridge"}},Fo=()=>new Promise(i=>requestAnimationFrame(i)),zt=i=>{m_.textContent=i};function qh(i){!Tl||!ms||!Ru||(Tl.classList.toggle("collapsed",i),ms.setAttribute("aria-expanded",(!i).toString()),Ru.setAttribute("aria-hidden",i.toString()),ms.textContent=i?"Show controls":"Hide controls")}qh(zr());function G_(){if(!Fi||!Cr||!Pr)return;const i=(n,a)=>tt==null?void 0:tt.setAction(n,a),e=n=>tt==null?void 0:tt.trigger(n),t=(n,a,s)=>{let r=!1,o=null;const l=()=>{o=n.getBoundingClientRect()},c=h=>{o||l();const f=h.touches?h.touches[0]:h,m=f.clientX-o.left-o.width/2,g=f.clientY-o.top-o.height/2,_=Math.min(o.width,o.height)/2,p=Math.max(-_,Math.min(_,m)),d=Math.max(-_,Math.min(_,g)),x=p/_,y=d/_;a(x,y)},u=()=>{r=!1,s()};n.addEventListener("pointerdown",h=>{h.preventDefault(),r=!0,l(),c(h)}),window.addEventListener("pointermove",h=>{r&&(h.preventDefault(),c(h))}),window.addEventListener("pointerup",h=>{r&&(h.preventDefault(),u())}),n.addEventListener("touchstart",h=>{r=!0,l(),c(h)},{passive:!1}),n.addEventListener("touchmove",h=>{r&&c(h)},{passive:!1}),n.addEventListener("touchend",h=>{r&&u()},{passive:!1}),n.addEventListener("touchcancel",h=>{r&&u()},{passive:!1})};t(Cr,(n,a)=>{const s=Math.max(.1,Z_()),r=Math.max(.1,.25/s);i("forward",a<-r),i("backward",a>r),i("left",n<-r),i("right",n>r)},()=>{i("forward",!1),i("backward",!1),i("left",!1),i("right",!1)}),t(Pr,(n,a)=>{const s=Math.max(.1,$_()),r=Math.max(.1,J_()),o=Q_()?-1:1;tt==null||tt.addLookDelta(n*6*s,a*6*r*o)},()=>{}),Fi.querySelectorAll("[data-trigger]").forEach(n=>{const a=n.getAttribute("data-trigger"),s=()=>{e(a),a==="surface"&&ac()};n.addEventListener("pointerdown",r=>{r.preventDefault(),s()}),n.addEventListener("touchstart",r=>{r.preventDefault(),s()},{passive:!1})}),Fi.querySelectorAll(".action-btn[data-action]").forEach(n=>{const a=n.getAttribute("data-action"),s=()=>i(a,!0),r=()=>i(a,!1);n.addEventListener("pointerdown",o=>{o.preventDefault(),s()}),n.addEventListener("pointerup",o=>{o.preventDefault(),r()}),n.addEventListener("pointerleave",r),n.addEventListener("pointercancel",r),n.addEventListener("touchstart",o=>{o.preventDefault(),s()},{passive:!1}),n.addEventListener("touchend",o=>{o.preventDefault(),r()},{passive:!1}),n.addEventListener("touchcancel",o=>{o.preventDefault(),r()},{passive:!1})}),Ms&&(Ms.addEventListener("pointerdown",n=>{n.preventDefault(),e("surface")}),Ms.addEventListener("touchstart",n=>{n.preventDefault(),e("surface")},{passive:!1}))}const Ll={time:{value:0},deepColor:{value:new Ee(532543)},shallowColor:{value:new Ee(1396618)},opacity:{value:.95},fresnelPower:{value:3.4},iceCap:{value:0},iceColor:{value:new Ee(14283263)}},xn={sunDir:{value:new C(0,1,0)},glowColor:{value:new Ee(5089535)},alpha:{value:1},density:{value:6},weatherMap:{value:Br},rainHaze:{value:.9},planetInvRot:{value:new Ce},planetInvScale:{value:1},innerRadius:{value:dn},outerRadius:{value:dn+1},rayleighScaleHeight:{value:.25},mieScaleHeight:{value:.08},mieG:{value:.76},exposure:{value:1.15}};function Ae(i,e,t){return Math.min(Math.max(i,e),t)}function Rs(){if(!fi)return Ts;const i=parseFloat(fi.value);return Ae(Number.isFinite(i)?i:Ts,1,1e3)}function kr(){return Rs()/Ts}function Gn(){return it!=null&&it.checked&&(be!=null&&be.enabled)&&be.ready&&be.hasSurface?be.getTexture():Br}function pi(){return it!=null&&it.checked&&(be!=null&&be.enabled)&&be.ready&&be.hasSurface?be.getAuxTexture():Gh}function sc(){return!((it==null?void 0:it.checked)??!1)||!((En==null?void 0:En.checked)??!1)||!(be!=null&&be.enabled)||!be.ready||!be.hasSurface||typeof be.getVolumeTexture!="function"?null:be.getVolumeTexture()}function Vr(){return!(be!=null&&be.enabled)||!be.ready||!be.hasSurface||typeof be.getVolumeMeta!="function"?null:be.getVolumeMeta()}function W_(i,e,t){const n=i==null?void 0:i.image,a=n==null?void 0:n.data,s=(n==null?void 0:n.width)??0,r=(n==null?void 0:n.height)??0;if(!a||!s||!r)return{r:0,g:0,b:0,a:0};const o=(e%1+1)%1,l=Ae(t,0,1),c=Math.min(s-1,Math.floor(o*s)),h=(Math.min(r-1,Math.floor(l*r))*s+c)*4;return{r:a[h]??0,g:a[h+1]??0,b:a[h+2]??0,a:a[h+3]??0}}function X_(i,e,t,n){var m;if(!((m=i==null?void 0:i.image)!=null&&m.data)||!t||(pr.copy(at.position).multiplyScalar(e).applyMatrix3(t),pr.lengthSq()<1e-12))return(n??wa).set(0,0,0),n??wa;const a=pr.normalize(),s=Math.atan2(a.z,a.x)/(2*Math.PI)+.5,r=Math.asin(Ae(a.y,-1,1))/Math.PI+.5,o=W_(i,s,r),l=((o.b??128)/255-.5)*2,c=((o.a??128)/255-.5)*2;Ea.set(-a.z,0,a.x),Ea.lengthSq()<1e-8&&Ea.set(1,0,0),Ea.normalize(),$u.crossVectors(a,Ea).normalize(),Ju.copy(Ea).multiplyScalar(l).addScaledVector($u,c),Zu.copy(t).transpose();const u=(n??wa).copy(Ju).applyMatrix3(Zu),h=pr.copy(at.position).normalize();u.addScaledVector(h,-u.dot(h));const f=u.length();if(!(f>1e-6))u.set(0,0,0);else{const g=Math.min(1,f);u.multiplyScalar(g/f)}return u}function Hr(i){var t,n;if(!$e)return;const e=$e.material;e!=null&&e.userData&&(e.userData.weather&&(e.userData.weather.texture=i),(n=(t=e.userData.shader)==null?void 0:t.uniforms)!=null&&n.uWeatherMap&&(e.userData.shader.uniforms.uWeatherMap.value=i))}function Gr(i){var t,n;if(!$e)return;const e=$e.material;e!=null&&e.userData&&(e.userData.weather&&(e.userData.weather.auxTexture=i),(n=(t=e.userData.shader)==null?void 0:t.uniforms)!=null&&n.uWeatherAuxMap&&(e.userData.shader.uniforms.uWeatherAuxMap.value=i))}function q_(i){var t,n;if(!$e)return;const e=$e.material;e!=null&&e.userData&&(e.userData.weather&&(e.userData.weather.strength=i),(n=(t=e.userData.shader)==null?void 0:t.uniforms)!=null&&n.uWeatherStrength&&(e.userData.shader.uniforms.uWeatherStrength.value=i))}function Y_(i){var t,n;if(!$e)return;const e=$e.material;e!=null&&e.userData&&(e.userData.weather&&(e.userData.weather.debug=i),(n=(t=e.userData.shader)==null?void 0:t.uniforms)!=null&&n.uWeatherDebug&&(e.userData.shader.uniforms.uWeatherDebug.value=i))}function K_(i,e){if(!i||!e)return;const t=(e.planetDiameterKm??Rs())*1e3*.5,n={heightmap:i.data,size:i.size,seaLevel:e.seaLevel,planetRadiusM:t};Pl=n;const a=[be,Sr,Ci].filter(Boolean);for(const s of a)s!=null&&s.enabled&&s.ready&&s.setPlanetSurface(n);Hr(Gn()),Gr(pi())}function j_(){const e=Ts*1e3*.5/dn;return F_/e*kr()}function Z_(){const i=parseFloat(za==null?void 0:za.value);return Number.isFinite(i)?i:1}function $_(){const i=parseFloat(ka==null?void 0:ka.value);return Number.isFinite(i)?i:.4}function J_(){const i=parseFloat(Va==null?void 0:Va.value);return Number.isFinite(i)?i:.4}function Q_(){return!!(Ss!=null&&Ss.checked)}function Yh(){if(!Te)return;const i=(Te.radius??dn)+(Te.heightScale??0),e=kr(),t=Math.max(.5,i*e);nt.minDistance=Math.max(.2,t*.1),nt.maxDistance=Math.max(t*8,nt.minDistance+1);const n=at.position.clone().sub(nt.target),a=n.length(),s=Ae(a,nt.minDistance,nt.maxDistance);Math.abs(s-a)>1e-4&&(n.setLength(s),at.position.copy(nt.target).add(n)),at.near=Math.max(.002,t*5e-4),at.far=Math.max(150,t*14),at.updateProjectionMatrix()}function Kh(){const i=kr();Ut.scale.setScalar(i),Yh()}function jh(){if(!Fi)return;if(!zr()){Fi.style.display="none",tt==null||tt.clear(),Ra&&(Ra.style.display="none");return}const e=en.enabled;Fi.style.display="block",Cr&&(Cr.style.display=e?"grid":"none"),Pr&&(Pr.style.display=e?"grid":"none");const t=Fi.querySelector(".action-column");t&&(t.style.display=e?"grid":"none"),Ms&&(Ms.style.display=e?"none":"inline-flex"),Ra&&(Ra.style.display="block")}function Tn(){g_.textContent=Number(Ki.value).toFixed(2),v_.textContent=Number(ji.value).toFixed(2),__.textContent=Number(Zi.value).toFixed(2),x_.textContent=Number($i.value).toFixed(3),y_.textContent=Number(Ji.value).toFixed(2),T_.textContent=Number(Zn.value).toFixed(2),A_.textContent=Number(ci.value).toFixed(2),M_.textContent=Number(Qi.value).toFixed(0),S_.textContent=Number(ea.value).toFixed(0),E_.textContent=Number(ta.value).toFixed(2),b_.textContent=Number(Is.value).toFixed(2),w_.textContent=Number(Yi.value).toFixed(2),R_.textContent=Number(is.value).toFixed(2),C_.textContent=Number(Ia.value).toFixed(2),P_.textContent=Number(Ua.value).toFixed(2),D_.textContent=Number(Fa.value).toFixed(2),L_.textContent=Number(Na.value).toFixed(2),I_.textContent=Number(Oa.value).toFixed(0),Ni&&Uu&&(Uu.textContent=Number(Ni.value).toFixed(0)),Oi&&Fu&&(Fu.textContent=Number(Oi.value).toFixed(0)),Yn&&Pu&&(Pu.textContent=Number(Yn.value).toFixed(0)),Ba&&Du&&(Du.textContent=Number(Ba.value).toFixed(0)),hi&&Lu&&(Lu.textContent=Number(hi.value).toFixed(1)),di&&Iu&&(Iu.textContent=Number(di.value).toFixed(2)),Kn&&Nu&&(Nu.textContent=Number(Kn.value).toFixed(0)),Bi&&Ou&&(Ou.textContent=Number(Bi.value).toFixed(2)),zi&&Bu&&(Bu.textContent=Number(zi.value).toFixed(2)),ki&&zu&&(zu.textContent=Number(ki.value).toFixed(2)),Vi&&ku&&(ku.textContent=Number(Vi.value).toFixed(2)),Hi&&Vu&&(Vu.textContent=Number(Hi.value).toFixed(2)),Gi&&Hu&&(Hu.textContent=Number(Gi.value).toFixed(2)),Wi&&Gu&&(Gu.textContent=Number(Wi.value).toFixed(2)),fi&&Yu&&(Yu.textContent=Number(fi.value).toFixed(0)),za&&Wu&&(Wu.textContent=Number(za.value).toFixed(1)),ka&&Xu&&(Xu.textContent=Number(ka.value).toFixed(1)),Va&&qu&&(qu.textContent=Number(Va.value).toFixed(1))}function eh(){zt("Params changed. Regenerating…")}function Zh(i){const e=Qu[i]||Qu.balanced;jn.value=i,$a.value=e.resolution,Ja.value=e.numPlates,Yi.value=e.plateSizeVariance??.35,qn.checked=e.desymmetrizeTiling??!0,Ki.value=e.jitter,ji.value=e.heightScale,Qa.value=e.iterations,Zi.value=e.erosionRate,$i.value=e.evaporation,Ji.value=e.seaLevel??.53,Zn.value=e.atmosphere??.35,ci.value=e.atmosphereHeight??.5,is.value=e.atmosphereAlpha??1,Us.value=e.atmosphereColor||"#4da8ff",Qi.value=e.smoothPasses??20,ea.value=e.subdivisions??60,ta.value=e.iceCap??.15,Is.value=e.plateDelta??1.25,Or.value=e.faultType||"ridge",Tn()}function ex(){return{resolution:Ae(parseInt($a.value,10)||256,64,4096),numPlates:Ae(parseInt(Ja.value,10)||9,4,400),plateSizeVariance:Ae(parseFloat(Yi.value)||0,0,2),desymmetrizeTiling:!!(qn!=null&&qn.checked),jitter:Ae(parseFloat(Ki.value)||.5,0,1),iterations:Ae(parseInt(Qa.value,10)||5e4,1e3,2e6),erosionRate:Ae(parseFloat(Zi.value)||.1,.001,2),evaporation:Ae(parseFloat($i.value)||.02,0,2),heightScale:Ae(parseFloat(ji.value)||2,0,80),seaLevel:Ae(parseFloat(Ji.value)||.5,0,1),atmosphere:Ae(parseFloat(Zn.value)||.35,.05,1.5),atmosphereHeight:Ae(parseFloat(ci.value)||.5,0,5),atmosphereAlpha:Ae(parseFloat(is.value)||1,0,1),atmosphereColor:Us.value||"#4da8ff",smoothPasses:Math.round(Ae(parseFloat(Qi.value)||0,0,40)),subdivisions:Math.round(Ae(parseFloat(ea.value)||128,0,512)),iceCap:Ae(parseFloat(ta.value)||.1,0,1),plateDelta:Ae(parseFloat(Is.value)||1.25,0,2),faultType:Or.value||"ridge",radius:dn}}function tx(i){$a.value=i.resolution,Ja.value=i.numPlates,Yi.value=i.plateSizeVariance,qn&&(qn.checked=!!i.desymmetrizeTiling),Ki.value=i.jitter,Qa.value=i.iterations,Zi.value=i.erosionRate,$i.value=i.evaporation,ji.value=i.heightScale,Ji.value=i.seaLevel,Zn.value=i.atmosphere,ci.value=i.atmosphereHeight,is.value=i.atmosphereAlpha,Us.value=i.atmosphereColor,Qi.value=i.smoothPasses,ea.value=i.subdivisions,ta.value=i.iceCap,Is.value=i.plateDelta,Or.value=i.faultType,Tn()}function nx(i){let e=1/0,t=-1/0;for(let a=0;a<i.length;a++){const s=i[a];s<e&&(e=s),s>t&&(t=s)}const n=Math.max(t-e,1e-5);for(let a=0;a<i.length;a++)i[a]=(i[a]-e)/n}function ix(i,e,t=1){if(t<=0)return;const n=new Float32Array(i.length);for(let a=0;a<t;a++){for(let s=0;s<e;s++){const r=Math.max(0,s-1),o=Math.min(e-1,s+1);for(let l=0;l<e;l++){const c=(l-1+e)%e,u=(l+1)%e,h=s*e+l,f=i[h]*2+i[s*e+c]+i[s*e+u]+i[r*e+l]+i[o*e+l];n[h]=f/6}}i.set(n)}}async function rc(i){if(Ha)return;en.enabled&&(en.exit(),nt.enabled=!0),Ha=!0,clearTimeout(Cl),Al.disabled=!0,jn.disabled=!0,$a.disabled=!0,Ja.disabled=!0,Yi.disabled=!0,qn.disabled=!0,Ki.disabled=!0,ji.disabled=!0,Qa.disabled=!0,Zi.disabled=!0,$i.disabled=!0,Ji.disabled=!0,Zn.disabled=!0,ci.disabled=!0,Qi.disabled=!0,ea.disabled=!0,ta.disabled=!0,ci.disabled=!0;const e=ex();tx(e);try{zt(`Tectonics: ${e.numPlates} plates`),await Fo();const t=new n_(e.resolution);t.generateTectonics({numPlates:e.numPlates,jitter:e.jitter,oceanFloor:.2,plateDelta:e.plateDelta,faultType:e.faultType,plateSizeVariance:e.plateSizeVariance,desymmetrizeTiling:e.desymmetrizeTiling}),zt(`Erosion: ${e.iterations.toLocaleString()} droplets`),await Fo(),t.applyErosion({iterations:e.iterations,erosionRate:e.erosionRate,evaporation:e.evaporation}),nx(t.data),ix(t.data,t.size,e.smoothPasses),t.applyHydrology({seaLevel:e.seaLevel,riverDepth:.015,lakeThreshold:.003}),zt("Meshing planet…"),await Fo(),Te={...e,planetDiameterKm:Rs()},K_(t,Te);const n=t.createMesh(e.radius,e.heightScale,e.seaLevel,e.subdivisions,e.iceCap,Gn(),pi());n.userData.forge=t,n.userData.settings=e,n.rotation.x=.25,ax(n),Hr(Gn()),Gr(pi()),lc(),sx(lx(e.radius,e.subdivisions,e.seaLevel,e.heightScale,e.iceCap)),rx(t.createFreshwaterMesh(e.radius,e.heightScale,e.seaLevel,e.subdivisions));const a=new C().copy(gt.position).normalize();ic.checked?$h(Jh(e.radius,e.subdivisions,e.heightScale,e.atmosphereHeight,e.atmosphere,a,e.atmosphereAlpha,e.atmosphereColor)):Cn&&(Cn.visible=!1),si(a),Wr(a),V_(),Kh(),zt(`${e.resolution}² map · ${e.iterations.toLocaleString()} steps`)}catch(t){console.error(t),zt("Generation failed – check console")}finally{Ha=!1,Al.disabled=!1,jn.disabled=!1,$a.disabled=!1,Ja.disabled=!1,Yi.disabled=!1,qn.disabled=!1,Ki.disabled=!1,ji.disabled=!1,Qa.disabled=!1,Zi.disabled=!1,$i.disabled=!1,Ji.disabled=!1,Zn.disabled=!1,ci.disabled=!1,Qi.disabled=!1,ea.disabled=!1,ta.disabled=!1}}function ax(i){var e,t;$e&&($e.geometry.dispose(),Array.isArray($e.material)?$e.material.forEach(n=>{var a;return(a=n.dispose)==null?void 0:a.call(n)}):(t=(e=$e.material).dispose)==null||t.call(e),Ut.remove($e)),$e=i,Ut.add(i)}function sx(i){var e,t;ai&&(ai.geometry.dispose(),Array.isArray(ai.material)?ai.material.forEach(n=>{var a;return(a=n.dispose)==null?void 0:a.call(n)}):(t=(e=ai.material).dispose)==null||t.call(e),Ut.remove(ai)),ai=i,Ut.add(i)}function rx(i){var e,t;An&&(An.geometry.dispose(),(t=(e=An.material).dispose)==null||t.call(e),An.parent&&An.parent.remove(An)),An=i,An.renderOrder=1,$e?$e.add(i):Ut.add(i)}function $h(i){var e,t;Cn&&(Cn.geometry.dispose(),(t=(e=Cn.material).dispose)==null||t.call(e),Ut.remove(Cn)),Cn=i,Cn.renderOrder=1,Ut.add(i)}function ox(){const e=new Float32Array(3600);for(let a=0;a<1200;a++){const s=90+Math.random()*60,r=Math.random()*Math.PI*2,o=Math.random()*2-1,l=Math.acos(o),c=Math.sin(l);e[a*3]=s*c*Math.cos(r),e[a*3+1]=s*Math.cos(l),e[a*3+2]=s*c*Math.sin(r)}const t=new jt;t.setAttribute("position",new Ht(e,3));const n=new Dh({color:8246268,size:.5,sizeAttenuation:!0,transparent:!0,opacity:.7});return new Gf(t,n)}function lx(i,e,t,n,a){const s=i+(t-.5)*n+.01,r=new mi(s,Math.max(0,Math.floor(e)));Ll.iceCap.value=a??0;const o=new Kt({uniforms:Ll,transparent:!0,depthWrite:!0,side:Dn,blending:Sn,vertexShader:`
            #include <common>
            #include <logdepthbuf_pars_vertex>
            uniform float time;
            varying vec3 vWorldPos;
            varying vec3 vNormal;
            void main() {
                vec3 pos = position;
                float wave = sin((pos.x + pos.z) * 0.35 + time * 0.6) * 0.02;
                pos += normalize(normal) * wave;
                vec4 worldPos = modelMatrix * vec4(pos, 1.0);
                vWorldPos = worldPos.xyz;
                vNormal = normalize(normalMatrix * normalize(pos));
                vec4 mvPosition = viewMatrix * worldPos;
                gl_Position = projectionMatrix * mvPosition;
                #include <logdepthbuf_vertex>
            }
        `,fragmentShader:`
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform vec3 deepColor;
            uniform vec3 shallowColor;
            uniform float opacity;
            uniform float fresnelPower;
            uniform float iceCap;
            uniform vec3 iceColor;
            varying vec3 vWorldPos;
            varying vec3 vNormal;
            void main() {
                #include <logdepthbuf_fragment>
                vec3 viewDir = normalize(cameraPosition - vWorldPos);
                float fresnel = pow(1.0 - max(dot(viewDir, normalize(vNormal)), 0.0), fresnelPower);
                vec3 base = mix(shallowColor, deepColor, fresnel);
                float sparkle = pow(fresnel, 4.0) * 0.3;
                float pole = abs(normalize(vWorldPos).y);
                float start = clamp(1.0 - iceCap, 0.0, 1.0);
                float iceMask = smoothstep(start, start + 0.08, pole);
                vec3 color = mix(base + sparkle, iceColor, iceMask);
                gl_FragColor = vec4(color, opacity);
            }
        `});return new Tt(r,o)}function Jh(i,e,t,n,a,s,r,o){const l=i+n+Math.max(.05,a)*t;xn.alpha.value=r,xn.glowColor.value=new Ee(o),xn.sunDir.value=s.clone().normalize(),xn.innerRadius.value=i,xn.outerRadius.value=l;const c=Math.max(2,Math.min(6,Math.floor(e/24))),u=new mi(l,c),h=new Kt({uniforms:xn,transparent:!0,depthWrite:!1,side:kt,blending:No,vertexShader:`
            #include <common>
            #include <logdepthbuf_pars_vertex>
            varying vec3 vWorld;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorld = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
                #include <logdepthbuf_vertex>
            }
        `,fragmentShader:`
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform float alpha;
            uniform float density;
            uniform vec3 glowColor;
            uniform vec3 sunDir;
            uniform sampler2D weatherMap;
            uniform float rainHaze;
            uniform mat3 planetInvRot;
            uniform float planetInvScale;
            uniform float innerRadius;
            uniform float outerRadius;
            uniform float rayleighScaleHeight;
            uniform float mieScaleHeight;
            uniform float mieG;
            uniform float exposure;
            varying vec3 vWorld;

            vec2 raySphere(vec3 ro, vec3 rd, float r) {
                float b = dot(ro, rd);
                float c = dot(ro, ro) - r * r;
                float h = b * b - c;
                if (h < 0.0) return vec2(1e9, -1e9);
                h = sqrt(h);
                return vec2(-b - h, -b + h);
            }

            float phaseRayleigh(float mu) {
                return 3.0 / (16.0 * PI) * (1.0 + mu * mu);
            }

            float phaseMie(float mu, float g) {
                float g2 = g * g;
                float denom = pow(max(1.0 + g2 - 2.0 * g * mu, 1e-4), 1.5);
                return (1.0 - g2) / (4.0 * PI * denom);
            }

            vec3 exp3(vec3 v) {
                return vec3(exp(-v.x), exp(-v.y), exp(-v.z));
            }

            void main() {
                #include <logdepthbuf_fragment>

                vec3 ro = planetInvRot * (cameraPosition * planetInvScale);
                vec3 p1 = planetInvRot * (vWorld * planetInvScale);
                vec3 rd = normalize(p1 - ro);
                float tFrag = length(p1 - ro);

                vec3 sunLocal = normalize(planetInvRot * sunDir);
                vec3 viewDirLocal = normalize(p1);
                float wu = atan(viewDirLocal.z, viewDirLocal.x) / (2.0 * PI) + 0.5;
                float wv = asin(clamp(viewDirLocal.y, -1.0, 1.0)) / PI + 0.5;
                float rainDir = texture2D(weatherMap, vec2(wu, wv)).g;

                vec2 tOuter = raySphere(ro, rd, outerRadius);
                float tStart = max(tOuter.x, 0.0);
                float tEnd = min(tOuter.y, tFrag);
                if (tEnd <= tStart) discard;

                vec2 tInner = raySphere(ro, rd, innerRadius);
                if (tInner.x > 0.0) {
                    tEnd = min(tEnd, tInner.x);
                }
                if (tEnd <= tStart) discard;

                float atmoH = max(outerRadius - innerRadius, 1e-3);
                float HR = max(atmoH * rayleighScaleHeight, 1e-4);
                float HM = max(atmoH * mieScaleHeight, 1e-4);
                float rainM = clamp(rainDir * rainHaze, 0.0, 2.0);
                HM = max(HM / (1.0 + rainM * 0.9), 1e-4); // concentrate haze near ground

                // Wavelength-weighted Rayleigh coefficients (scaled for our unit system)
                vec3 betaR = vec3(5.8e-3, 13.5e-3, 33.1e-3);
                // Use glowColor as a tint/bias for Rayleigh (keeps UI meaningful)
                betaR *= mix(vec3(0.75), glowColor, 0.85);

                betaR *= density;
                float betaM = 21e-3 * density;
                betaM *= (1.0 + rainM * 1.35);

                const int PRIMARY_STEPS = 8;
                const int LIGHT_STEPS = 4;

                float segLen = (tEnd - tStart) / float(PRIMARY_STEPS);
                float optR = 0.0;
                float optM = 0.0;
                vec3 sumR = vec3(0.0);
                vec3 sumM = vec3(0.0);

                for (int i = 0; i < PRIMARY_STEPS; i++) {
                    float t = tStart + (float(i) + 0.5) * segLen;
                    vec3 pos = ro + rd * t;
                    float height = max(length(pos) - innerRadius, 0.0);
                    float dR = exp(-height / HR);
                    float dM = exp(-height / HM);

                    optR += dR * segLen;
                    optM += dM * segLen;

                    vec2 tSunOuter = raySphere(pos, sunLocal, outerRadius);
                    float tSunEnd = tSunOuter.y;
                    if (tSunEnd <= 0.0) continue;

                    vec2 tSunInner = raySphere(pos, sunLocal, innerRadius);
                    float shadow = 1.0;
                    if (tSunInner.x > 0.0 && tSunInner.x < tSunEnd) {
                        shadow = 0.0;
                    }

                    float segL = tSunEnd / float(LIGHT_STEPS);
                    float optSunR = 0.0;
                    float optSunM = 0.0;
                    for (int j = 0; j < LIGHT_STEPS; j++) {
                        float tl = (float(j) + 0.5) * segL;
                        vec3 pl = pos + sunLocal * tl;
                        float hL = max(length(pl) - innerRadius, 0.0);
                        optSunR += exp(-hL / HR) * segL;
                        optSunM += exp(-hL / HM) * segL;
                    }

                    vec3 tau = betaR * (optR + optSunR) + vec3(betaM * (optM + optSunM));
                    vec3 trans = exp3(tau);
                    trans *= shadow;

                    sumR += trans * dR * segLen;
                    sumM += trans * dM * segLen;
                }

                float mu = dot(rd, sunLocal);
                float pR = phaseRayleigh(mu);
                float pM = phaseMie(mu, mieG);

                vec3 radiance = (betaR * sumR * pR + vec3(betaM) * sumM * pM) * 18.0;
                radiance = vec3(1.0) - exp(-radiance * exposure);
                radiance *= alpha;

                float lum = max(radiance.r, max(radiance.g, radiance.b));
                if (lum < 0.002) discard;

                gl_FragColor = vec4(radiance, 1.0);
            }
        `});return new Tt(u,h)}function Qh(i,e,t,n,a,s,r){const o=Math.max(.1,i+r.height),l=Math.max(.25,s*.03),c=n+(a-.5)*s+.05,u=Math.max(c,o-l),h=u+2*l,f=r.mode==="billow"?1:r.mode==="cellular"?2:0,m={windOffset:{value:0},color:{value:new Ee(r.color)},opacity:{value:r.alpha},sunDir:{value:t.clone().normalize()},windDir:{value:new C(0,0,1)},quantity:{value:r.quantity},noiseScale:{value:Math.max(1,r.resolution)},mode:{value:f},weatherMap:{value:Gn()},weatherAuxMap:{value:pi()},planetInvRot:{value:new Ce},planetInvScale:{value:1},innerRadius:{value:u},outerRadius:{value:h}},g=Math.max(2,Math.min(6,Math.floor(e/24))),_=new mi(h,g),p=new Kt({uniforms:m,transparent:!0,depthWrite:!1,side:un,blending:Sn,vertexShader:`
            #include <common>
            #include <logdepthbuf_pars_vertex>
            varying vec3 vWorld;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorld = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
                #include <logdepthbuf_vertex>
            }
        `,fragmentShader:`
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform vec3 color;
            uniform float opacity;
            uniform float windOffset;
            uniform vec3 sunDir;
            uniform vec3 windDir;
            uniform float quantity;
            uniform float noiseScale;
            uniform float mode;
            uniform sampler2D weatherMap;
            uniform sampler2D weatherAuxMap;
            uniform mat3 planetInvRot;
            uniform float planetInvScale;
            uniform float innerRadius;
            uniform float outerRadius;
            varying vec3 vWorld;

            float hash(vec3 p) {
                p = fract(p * 0.3183099 + vec3(0.1,0.2,0.3));
                p *= 17.0;
                return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
            }
            float noise(vec3 p) {
                vec3 i = floor(p);
                vec3 f = fract(p);
                f = f*f*(3.0-2.0*f);
                float n000 = hash(i + vec3(0,0,0));
                float n100 = hash(i + vec3(1,0,0));
                float n010 = hash(i + vec3(0,1,0));
                float n110 = hash(i + vec3(1,1,0));
                float n001 = hash(i + vec3(0,0,1));
                float n101 = hash(i + vec3(1,0,1));
                float n011 = hash(i + vec3(0,1,1));
                float n111 = hash(i + vec3(1,1,1));
                float nx00 = mix(n000, n100, f.x);
                float nx10 = mix(n010, n110, f.x);
                float nx01 = mix(n001, n101, f.x);
                float nx11 = mix(n011, n111, f.x);
                float nxy0 = mix(nx00, nx10, f.y);
                float nxy1 = mix(nx01, nx11, f.y);
                return mix(nxy0, nxy1, f.z);
            }
            float fbm(vec3 p) {
                float sum = 0.0;
                float amp = 0.55;
                for(int i=0;i<4;i++){
                    sum += noise(p) * amp;
                    p *= 2.1;
                    amp *= 0.5;
                }
                return sum;
            }

            float densityAt(vec3 pos, out float rainOut) {
                float r = length(pos);
                if (r < innerRadius || r > outerRadius) { rainOut = 0.0; return 0.0; }
                float h = (r - innerRadius) / max(outerRadius - innerRadius, 1e-3);
                float profile = smoothstep(0.0, 0.12, h) * (1.0 - smoothstep(0.55, 1.0, h));

                vec3 dir = pos / max(r, 1e-6);
                float u = atan(dir.z, dir.x) / (2.0 * 3.14159265) + 0.5;
                float v = asin(clamp(dir.y, -1.0, 1.0)) / 3.14159265 + 0.5;
                vec4 w = texture2D(weatherMap, vec2(u, v));
                vec4 wa = texture2D(weatherAuxMap, vec2(u, v));
                float cloud = w.r;
                float rain = w.g;
                rainOut = rain;

                float cover = cloud * (0.45 + quantity * 1.1);

                float freq = max(1.0, noiseScale) * 0.003;
                vec2 windUV = (wa.ba - 0.5) * 2.0;
                vec3 east = vec3(-dir.z, 0.0, dir.x);
                float el = length(east);
                east = (el < 1e-5) ? vec3(1.0, 0.0, 0.0) : (east / el);
                vec3 north = normalize(cross(dir, east));
                vec3 windVec = east * windUV.x + north * windUV.y;
                float wMag = clamp(length(windUV), 0.0, 1.0);
                vec3 advDir = normalize(mix(windDir, windVec, 0.75));
                vec3 np = pos * freq + advDir * (windOffset * (0.35 + 1.05 * wMag));
                float n = fbm(np);
                if (mode > 0.5 && mode < 1.5) {
                    n = abs(n) * 2.0 - 1.0;
                } else if (mode > 1.5) {
                    vec3 q = floor(np * 0.9);
                    float c = fract(sin(dot(q, vec3(12.9898,78.233,45.164))) * 43758.5453);
                    n = mix(n, c * 2.0 - 1.0, 0.55);
                }
                float detail = smoothstep(0.15, 0.75, n + 0.2);
                float d = cover * profile * detail;
                d *= mix(1.0, 1.25, rain);
                return d;
            }

            vec2 raySphere(vec3 ro, vec3 rd, float r) {
                float b = dot(ro, rd);
                float c = dot(ro, ro) - r * r;
                float h = b*b - c;
                if (h < 0.0) return vec2(1e9, -1e9);
                h = sqrt(h);
                return vec2(-b - h, -b + h);
            }

            void main() {
                #include <logdepthbuf_fragment>

                vec3 ro = planetInvRot * (cameraPosition * planetInvScale);
                vec3 p1 = planetInvRot * (vWorld * planetInvScale);
                vec3 rd = normalize(p1 - ro);

                vec2 tOuter = raySphere(ro, rd, outerRadius);
                float tStart = max(tOuter.x, 0.0);
                float tEnd = tOuter.y;
                if (tEnd <= tStart) discard;

                vec2 tInner = raySphere(ro, rd, innerRadius);
                // Clip marching segment to the cloud shell so step sizes stay stable from orbit.
                if (tInner.x <= tInner.y) {
                    if (tInner.x > 0.0) tEnd = min(tEnd, tInner.x);
                    else if (tInner.y > 0.0) tStart = max(tStart, tInner.y);
                }
                if (tEnd <= tStart) discard;

                const int STEPS = 26;
                float stepSize = (tEnd - tStart) / float(STEPS);
                vec3 sum = vec3(0.0);
                float alpha = 0.0;

                vec3 sunLocal = normalize(planetInvRot * sunDir);

                for (int i = 0; i < STEPS; i++) {
                    float t = tStart + (float(i) + 0.5) * stepSize;
                    vec3 pos = ro + rd * t;

                    float rainNow = 0.0;
                    float d = densityAt(pos, rainNow);
                    if (d <= 1e-4) continue;

                    float day = clamp(dot(normalize(pos), sunLocal), 0.0, 1.0);
                    float light = mix(0.55, 1.15, day);
                    vec3 ccol = mix(color, color * 0.85, rainNow) * light;

                    float a = 1.0 - exp(-d * stepSize * 4.5);
                    sum += (1.0 - alpha) * ccol * a;
                    alpha += (1.0 - alpha) * a;
                    if (alpha > 0.985) break;
                }

                alpha *= opacity;
                if (alpha < 0.01) discard;
                gl_FragColor = vec4(sum, alpha);
            }
        `}),d=new Tt(_,p);return d.userData.uniforms=m,d.userData.settings=r,d.renderOrder=2,d}function cx(){var i,e;zn&&(Ut.remove(zn),zn.geometry.dispose(),(e=(i=zn.material).dispose)==null||e.call(i),zn=null)}function ux(){return{id:"watercycle",enabled:(En==null?void 0:En.checked)??!0,alpha:Ae(parseFloat(Ia==null?void 0:Ia.value)||.74,0,1),speed:Ae(parseFloat(Ua==null?void 0:Ua.value)||.9,0,2),quantity:Ae(parseFloat(Fa==null?void 0:Fa.value)||.76,0,1),height:Ae(parseFloat(Na==null?void 0:Na.value)||-2.4,-5,5),color:(gs==null?void 0:gs.value)||"#ffffff",resolution:Math.max(1,Math.floor(parseFloat(Oa==null?void 0:Oa.value)||256)),mode:(vs==null?void 0:vs.value)||"billow"}}function hx(i,e,t,n,a,s,r,o,l){const c=r.mode==="billow"?1:r.mode==="cellular"?2:0,u=n+(a-.5)*s+.05,h=((l==null?void 0:l.planetRadiusM)??Hh)/dn,f=((l==null?void 0:l.atmoThicknessM)??2e4)/Math.max(h,1e-6),m=u,g=Math.max(.25,f*.5),_=Math.max(.1,m-.05),p=_+2*g,d={windOffset:{value:0},color:{value:new Ee(r.color)},opacity:{value:r.alpha},sunDir:{value:t.clone().normalize()},windDir:{value:new C(0,0,1)},quantity:{value:r.quantity},noiseScale:{value:Math.max(1,r.resolution)},mode:{value:c},volumeAtlas:{value:o},volumeN:{value:(l==null?void 0:l.n)??64},tilesX:{value:(l==null?void 0:l.tilesX)??8},atlasW:{value:(l==null?void 0:l.atlasW)??512},atlasH:{value:(l==null?void 0:l.atlasH)??512},volumeExtentM:{value:(l==null?void 0:l.extentM)??52e4},metersPerUnit:{value:h},planetInvRot:{value:new Ce},planetInvScale:{value:1},innerRadius:{value:_},outerRadius:{value:p}},x=Math.max(2,Math.min(6,Math.floor(e/24))),y=new mi(p,x),v=new Kt({uniforms:d,transparent:!0,depthWrite:!1,side:un,blending:Sn,vertexShader:`
            #include <common>
            #include <logdepthbuf_pars_vertex>
            varying vec3 vWorld;
            void main() {
                vec4 worldPos = modelMatrix * vec4(position, 1.0);
                vWorld = worldPos.xyz;
                gl_Position = projectionMatrix * viewMatrix * worldPos;
                #include <logdepthbuf_vertex>
            }
        `,fragmentShader:`
            #include <common>
            #include <logdepthbuf_pars_fragment>
            uniform vec3 color;
            uniform float opacity;
            uniform float windOffset;
            uniform vec3 sunDir;
            uniform vec3 windDir;
            uniform float quantity;
            uniform float noiseScale;
            uniform float mode;
            uniform sampler2D volumeAtlas;
            uniform float volumeN;
            uniform float tilesX;
            uniform float atlasW;
            uniform float atlasH;
            uniform float volumeExtentM;
            uniform float metersPerUnit;
            uniform mat3 planetInvRot;
            uniform float planetInvScale;
            uniform float innerRadius;
            uniform float outerRadius;
            varying vec3 vWorld;

            float hash(vec3 p) {
                p = fract(p * 0.3183099 + vec3(0.1,0.2,0.3));
                p *= 17.0;
                return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
            }
            float noise(vec3 p) {
                vec3 i = floor(p);
                vec3 f = fract(p);
                f = f*f*(3.0-2.0*f);
                float n000 = hash(i + vec3(0,0,0));
                float n100 = hash(i + vec3(1,0,0));
                float n010 = hash(i + vec3(0,1,0));
                float n110 = hash(i + vec3(1,1,0));
                float n001 = hash(i + vec3(0,0,1));
                float n101 = hash(i + vec3(1,0,1));
                float n011 = hash(i + vec3(0,1,1));
                float n111 = hash(i + vec3(1,1,1));
                float nx00 = mix(n000, n100, f.x);
                float nx10 = mix(n010, n110, f.x);
                float nx01 = mix(n001, n101, f.x);
                float nx11 = mix(n011, n111, f.x);
                float nxy0 = mix(nx00, nx10, f.y);
                float nxy1 = mix(nx01, nx11, f.y);
                return mix(nxy0, nxy1, f.z);
            }
            float fbm(vec3 p) {
                float sum = 0.0;
                float amp = 0.55;
                for(int i=0;i<4;i++){
                    sum += noise(p) * amp;
                    p *= 2.1;
                    amp *= 0.5;
                }
                return sum;
            }

            vec2 sampleVolumeAtlas(vec3 idx) {
                float tx = mod(idx.z, tilesX);
                float ty = floor(idx.z / tilesX);
                float ax = (tx * volumeN + idx.x + 0.5) / atlasW;
                float ay = (ty * volumeN + idx.y + 0.5) / atlasH;
                return texture2D(volumeAtlas, vec2(ax, ay)).rg; // cloud, rain
            }

            vec4 sampleVolumeTrilinear(vec3 posLocal) {
                // posLocal is in planet-local *unscaled* render units.
                vec3 posM = posLocal * metersPerUnit;
                vec3 uvw = clamp(posM / max(volumeExtentM, 1e-3) * 0.5 + vec3(0.5), 0.0, 0.999999);
                vec3 posGrid = uvw * (volumeN - 1.0);
                vec3 i0 = floor(posGrid);
                vec3 f = clamp(posGrid - i0, 0.0, 1.0);
                vec3 i1 = min(i0 + 1.0, vec3(volumeN - 1.0));
                vec2 c000 = sampleVolumeAtlas(i0);
                vec2 c100 = sampleVolumeAtlas(vec3(i1.x, i0.y, i0.z));
                vec2 c010 = sampleVolumeAtlas(vec3(i0.x, i1.y, i0.z));
                vec2 c110 = sampleVolumeAtlas(vec3(i1.x, i1.y, i0.z));
                vec2 c001 = sampleVolumeAtlas(vec3(i0.x, i0.y, i1.z));
                vec2 c101 = sampleVolumeAtlas(vec3(i1.x, i0.y, i1.z));
                vec2 c011 = sampleVolumeAtlas(vec3(i0.x, i1.y, i1.z));
                vec2 c111 = sampleVolumeAtlas(i1);

                float wx = f.x, wy = f.y, wz = f.z;
                vec2 cx0 = mix(c000, c100, wx);
                vec2 cx1 = mix(c010, c110, wx);
                vec2 cx2 = mix(c001, c101, wx);
                vec2 cx3 = mix(c011, c111, wx);
                vec2 cy0 = mix(cx0, cx1, wy);
                vec2 cy1 = mix(cx2, cx3, wy);
                vec2 c = mix(cy0, cy1, wz);

                return vec4(c, 0.0, 0.0);
            }

            float densityAt(vec3 pos, out float rainOut) {
                float r = length(pos);
                if (r < innerRadius || r > outerRadius) { rainOut = 0.0; return 0.0; }
                float h = (r - innerRadius) / max(outerRadius - innerRadius, 1e-3);
                float profile = smoothstep(0.0, 0.12, h) * (1.0 - smoothstep(0.55, 1.0, h));

                // Slight atlas smoothing to hide voxel seams at high res.
                vec4 v = sampleVolumeTrilinear(pos);
                vec4 v2 = sampleVolumeTrilinear(pos + vec3(0.3, -0.2, 0.15) * metersPerUnit * 0.25);
                vec4 v3 = sampleVolumeTrilinear(pos + vec3(-0.25, 0.18, -0.22) * metersPerUnit * 0.35);
                vec4 v4 = sampleVolumeTrilinear(pos + vec3(0.12, 0.24, -0.3) * metersPerUnit * 0.2);
                vec4 vMix = (v + v2 + v3 + v4) * 0.25;

                float cloud = vMix.r;
                float rain = vMix.g;
                rainOut = rain;

                float cover = cloud * (0.45 + quantity * 1.1);

                float freq = max(1.0, noiseScale) * 0.003;
                vec3 advDir = normalize(windDir);
                vec3 np = pos * freq + advDir * (windOffset * 0.35);
                float n = fbm(np);
                if (mode > 0.5 && mode < 1.5) {
                    n = abs(n) * 2.0 - 1.0;
                } else if (mode > 1.5) {
                    vec3 q = floor(np * 0.9);
                    float c = fract(sin(dot(q, vec3(12.9898,78.233,45.164))) * 43758.5453);
                    n = mix(n, c * 2.0 - 1.0, 0.55);
                }
                float detail = smoothstep(0.15, 0.75, n + 0.2);
                float d = cover * profile * detail;
                d *= mix(1.0, 1.25, rain);
                return d;
            }

            vec2 raySphere(vec3 ro, vec3 rd, float r) {
                float b = dot(ro, rd);
                float c = dot(ro, ro) - r * r;
                float h = b*b - c;
                if (h < 0.0) return vec2(1e9, -1e9);
                h = sqrt(h);
                return vec2(-b - h, -b + h);
            }

            void main() {
                #include <logdepthbuf_fragment>

                vec3 ro = planetInvRot * (cameraPosition * planetInvScale);
                vec3 p1 = planetInvRot * (vWorld * planetInvScale);
                vec3 rd = normalize(p1 - ro);

                vec2 tOuter = raySphere(ro, rd, outerRadius);
                float tStart = max(tOuter.x, 0.0);
                float tEnd = tOuter.y;
                if (tEnd <= tStart) discard;

                vec2 tInner = raySphere(ro, rd, innerRadius);
                // Clip marching segment to the cloud shell so step sizes stay stable from orbit.
                if (tInner.x <= tInner.y) {
                    if (tInner.x > 0.0) tEnd = min(tEnd, tInner.x);
                    else if (tInner.y > 0.0) tStart = max(tStart, tInner.y);
                }
                if (tEnd <= tStart) discard;

                // More steps for higher volume resolutions to accumulate enough opacity.
                int steps = int(clamp(mix(28.0, 48.0, clamp((volumeN - 32.0) / 96.0, 0.0, 1.0)), 28.0, 48.0));
                float stepSize = (tEnd - tStart) / float(steps);
                vec3 sum = vec3(0.0);
                float alpha = 0.0;

                vec3 sunLocal = normalize(planetInvRot * sunDir);

                for (int i = 0; i < 48; i++) { // 48 is the max; exit early if steps smaller.
                    if (i >= steps) break;
                    float t = tStart + (float(i) + 0.5) * stepSize;
                    vec3 pos = ro + rd * t;

                    float rainNow = 0.0;
                    float d = densityAt(pos, rainNow);
                    if (d <= 1e-4) continue;

                    float day = clamp(dot(normalize(pos), sunLocal), 0.0, 1.0);
                    float light = mix(0.55, 1.15, day);
                    vec3 ccol = mix(color, color * 0.85, rainNow) * light;

                    float a = 1.0 - exp(-d * stepSize * 4.5);
                    sum += (1.0 - alpha) * ccol * a;
                    alpha += (1.0 - alpha) * a;
                    if (alpha > 0.985) break;
                }

                alpha *= opacity;
                if (alpha < 0.01) discard;
                gl_FragColor = vec4(sum, alpha);
            }
        `}),w=new Tt(y,v);return w.userData.uniforms=d,w.userData.settings=r,w.renderOrder=2,w}function Wr(i){if(!Te||(cx(),!(((it==null?void 0:it.checked)??!1)&&((En==null?void 0:En.checked)??!1))))return;const t=ux(),n=sc(),a=Vr();let s=null;n&&a?s=hx(Te.radius+Te.heightScale*.2,Te.subdivisions,i,Te.radius,Te.seaLevel,Te.heightScale,t,n,a):s=Qh(Te.radius+Te.heightScale*.2,Te.subdivisions,i,Te.radius,Te.seaLevel,Te.heightScale,t),zn=s,Ut.add(s)}function dx(){var i,e;for(const t of As)Ut.remove(t),t.geometry.dispose(),(e=(i=t.material).dispose)==null||e.call(i);As=[]}function ed(){return{id:"base",enabled:Vh.checked,alpha:Ae(parseFloat(Ia.value)||.74,0,1),speed:Ae(parseFloat(Ua.value)||.9,0,2),quantity:Ae(parseFloat(Fa.value)||.76,0,1),height:Ae(parseFloat(Na.value)||-2.4,-5,5),color:gs.value||"#ffffff",resolution:Math.max(1,Math.floor(parseFloat(Oa.value)||256)),mode:vs.value||"billow"}}function si(i){if(!Te)return;dx();const e=[],t=ed();t.enabled&&e.push(t);for(const n of Hn)n.enabled&&e.push(n);for(const n of e){const a=Qh(Te.radius+Te.heightScale*.2,Te.subdivisions,i,Te.radius,Te.seaLevel,Te.heightScale,n);As.push(a),Ut.add(a)}}function fx(i){if(!Te)return;if(!ic.checked){Cn&&(Cn.visible=!1);return}const e=Ae(parseFloat(Zn.value)||.35,.05,1.5),t=Ae(parseFloat(ci.value)||.5,0,5),n=Ae(parseFloat(is.value)||1,0,1),a=Us.value||"#4da8ff";$h(Jh(Te.radius,Te.subdivisions,Te.heightScale,t,e,i,n,a))}function px(i){const e=document.createElement("div");e.className="layer",e.style.border="1px solid var(--border)",e.style.padding="8px",e.style.marginBottom="8px";const t=document.createElement("div");t.textContent=`Layer ${i.label||Hn.length+1}`,t.style.fontSize="12px",t.style.color="var(--muted)",e.appendChild(t);const n=(m,g,_,p,d)=>{const x=document.createElement("div");x.className="field";const y=document.createElement("label");y.textContent=m;const v=document.createElement("div");v.className="range-row";const w=document.createElement("input");w.type="range",w.min=_,w.max=p,w.step=d,w.value=i[g];const T=document.createElement("span");return T.className="value",T.textContent=Number(i[g]).toFixed(d<1?2:0),v.appendChild(w),v.appendChild(T),x.appendChild(y),x.appendChild(v),w.addEventListener("input",()=>{i[g]=parseFloat(w.value),T.textContent=Number(i[g]).toFixed(d<1?2:0),si(new C().copy(gt.position).normalize())}),x},a=document.createElement("label"),s=document.createElement("input");s.type="checkbox",s.checked=i.enabled,s.addEventListener("change",()=>{i.enabled=s.checked,si(new C().copy(gt.position).normalize())}),a.appendChild(s),a.append(" Layer enabled"),e.appendChild(a),e.appendChild(n("Alpha","alpha",0,1,.01)),e.appendChild(n("Speed","speed",0,2,.05)),e.appendChild(n("Quantity","quantity",0,1,.01)),e.appendChild(n("Height","height",-5,5,.05)),e.appendChild(n("Resolution","resolution",1,256,1));const r=document.createElement("div");r.className="field";const o=document.createElement("label");o.textContent="Shader";const l=document.createElement("select");["fbm","billow","cellular"].forEach(m=>{const g=document.createElement("option");g.value=m,g.textContent=m.charAt(0).toUpperCase()+m.slice(1),i.mode===m&&(g.selected=!0),l.appendChild(g)}),l.addEventListener("change",()=>{i.mode=l.value,si(new C().copy(gt.position).normalize())}),r.appendChild(o),r.appendChild(l),e.appendChild(r);const c=document.createElement("div");c.className="field";const u=document.createElement("label");u.textContent="Color";const h=document.createElement("input");h.type="color",h.value=i.color,h.addEventListener("input",()=>{i.color=h.value,si(new C().copy(gt.position).normalize())}),c.appendChild(u),c.appendChild(h),e.appendChild(c);const f=document.createElement("button");return f.type="button",f.textContent="Remove layer",f.addEventListener("click",()=>{Hn=Hn.filter(m=>m!==i),oc(),si(new C().copy(gt.position).normalize())}),e.appendChild(f),e}function oc(){Cu.innerHTML="";for(const i of Hn)Cu.appendChild(px(i))}function mx(){if(cn)return cn;const i=new Zl(.15,.18,32),e=new ql({color:65535,transparent:!0,opacity:.8,depthWrite:!1});return cn=new Tt(i,e),cn.visible=!1,tn.add(cn),cn}function gx(){const{innerWidth:i,innerHeight:e}=window;at.aspect=i/e,at.updateProjectionMatrix(),Yt.setSize(i,e),tt&&tt.setMode(zr()?"mobile":"desktop"),jh()}function vx(i){const{x:e,y:t}=i;if(Math.abs(e)<1e-4&&Math.abs(t)<1e-4)return;const n=nt.target,a=at.position.clone().sub(n),s=-e*.01,r=-t*.01,o=new C(0,1,0),l=new Bt().setFromAxisAngle(o,s);a.applyQuaternion(l);const c=new C().crossVectors(o,a).normalize(),u=new Bt().setFromAxisAngle(c,r);a.applyQuaternion(u),at.position.copy(n).add(a),at.lookAt(n)}function td(){const i=Ut.scale.x?1/Ut.scale.x:1,e=Ae(parseFloat(hi==null?void 0:hi.value)||23.4,0,45),t=Ae(parseFloat(di==null?void 0:di.value)||0,0,1),n=Tr.degToRad(e),a=t*Math.PI*2,s=n*Math.sin(a),r=new C(Math.cos(s),Math.sin(s),.6).normalize().multiplyScalar(16);return gt.position.copy(r),Ga.copy(gt.position).normalize(),Ii.identity(),Lr.copy(Ga),$e&&($e.getWorldQuaternion(fr),fr.invert(),ju.makeRotationFromQuaternion(fr),Ii.setFromMatrix4(ju),Lr.copy(Ga).applyQuaternion(fr).normalize()),i}function _x(i){if(!qt)return;Math.max(.05,((Te==null?void 0:Te.radius)??dn)*.2);const e=Math.max(3,((Te==null?void 0:Te.radius)??dn)*4),t=Tr.degToRad(8);Do+=i*.02;const n=Math.cos(Do),a=Math.sin(Do),s=e*n,r=e*Math.sin(t)*a,o=e*Math.cos(t)*a;qt.position.set(s,r,o),qt.lookAt(Ut.position),k_.sunDir.value.copy(Ga),Rx(),gt.target.position.set(0,0,0),gt.target.updateMatrixWorld()}function xx(){const i=H_.getDelta(),e=i>1e-6?1/i:0;Uo=Uo*.9+e*.1,Gt&&(Gt.textContent=`fps: ${Uo.toFixed(1)}`),Tn(),gi&&bx(),en.enabled?en.update(i):(tt.consume("surface")&&ac(),$e&&!Ha&&($e.rotation.y+=9e-4),nt.update(),vx(tt.consumeLookDelta())),jh();const t=td();if(_x(i),mx(),!en.enabled&&$e){ts.setFromCamera(new ve(0,0),at);const a=ts.intersectObject($e,!1);a.length?(cn.visible=!0,cn.position.copy(a[0].point),cn.lookAt(at.position)):cn.visible=!1}else cn&&(cn.visible=!1);if(((it==null?void 0:it.checked)??!1)&&((ui==null?void 0:ui.checked)??!0)&&(be!=null&&be.enabled)&&be.update(i,Lr),xn.sunDir.value.copy(Ga),xn.planetInvRot.value.copy(Ii),xn.planetInvScale.value=t,xn.weatherMap.value=Gn(),ai&&(Ll.time.value+=.016),An&&(An.material.uniforms.time.value+=.016),As.length){const a=Math.min(i,.25),s=Br,r=Gh;for(const o of As){const l=o.userData.uniforms,u=o.userData.settings.speed||1;l.windOffset.value+=a*u*.3,l.planetInvRot&&l.planetInvRot.value.copy(Ii),l.planetInvScale&&(l.planetInvScale.value=t),l.weatherMap&&(l.weatherMap.value=s),l.weatherAuxMap&&(l.weatherAuxMap.value=r)}}if(zn){const a=Math.min(i,.25),s=zn.userData.uniforms,r=zn.userData.settings,o=(r==null?void 0:r.speed)||1;s.windOffset.value+=a*o*.3,s.planetInvRot&&s.planetInvRot.value.copy(Ii),s.planetInvScale&&(s.planetInvScale.value=t),s.weatherMap&&(s.weatherMap.value=Gn()),s.weatherAuxMap&&(s.weatherAuxMap.value=pi()),s.volumeAtlas&&(s.volumeAtlas.value=sc()??s.volumeAtlas.value);const l=Vr();l&&(s.volumeN&&(s.volumeN.value=l.n),s.tilesX&&(s.tilesX.value=l.tilesX),s.atlasW&&(s.atlasW.value=l.atlasW),s.atlasH&&(s.atlasH.value=l.atlasH),s.volumeExtentM&&(s.volumeExtentM.value=l.extentM),s.metersPerUnit&&(s.metersPerUnit.value=(l.planetRadiusM??Hh)/dn))}Wh(),_n&&(_n.setWeatherFrame({planetInvRot:Ii,planetInvScale:t}),_n.setWeatherMap(Gn()),_n.setWindWorld(X_(pi(),t,Ii,wa)),_n.update(i)),Hr(Gn()),Gr(pi()),Yt.render(tn,at)}ms&&ms.addEventListener("click",()=>{qh(!Tl.classList.contains("collapsed"))});document.addEventListener("surface",ac);function yx(i){if(!Po||!Dr)return;const e=Po.style.display!=="block";Po.style.display=e?"block":"none",Dr.setAttribute("aria-expanded",e.toString()),Ra&&(Ra.style.display=e?"none":"block")}Dr&&Dr.addEventListener("click",()=>yx());async function Mx(){if(!(!navigator.xr||!ri))try{Io=await navigator.xr.isSessionSupported("immersive-vr"),ri.style.display=Io?"block":"none",ri&&(ri.disabled=!Io)}catch(i){console.warn("XR support check failed",i)}}async function Sx(){if(!navigator.xr){zt("WebXR not available");return}try{const i=await navigator.xr.requestSession("immersive-vr",{optionalFeatures:["local-floor","bounded-floor"]});if(gi=i,Yt.xr.enabled=!0,await Yt.xr.setSession(i),nt&&(nt.enabled=!1),$e&&!en.enabled){const e=((Te==null?void 0:Te.radius)??dn)*kr()+((Te==null?void 0:Te.heightScale)??0),t=Math.max(e*2,30),n=at.position.clone().sub(nt.target);n.lengthSq()<1e-6&&n.set(0,0,1),n.normalize();const a=new C(0,0,0),s=a.clone().sub(n.multiplyScalar(t));Li.position.copy(s),Li.lookAt(a),at.position.set(0,0,0),at.rotation.set(0,0,0)}ri.textContent="Exit VR",zt("VR session started"),i.addEventListener("end",()=>{gi=null,Dl.clear(),Yt.xr.enabled=!1,Li.position.set(0,0,0),Li.rotation.set(0,0,0),Li.quaternion.identity(),nt&&(nt.enabled=!0),ri.textContent="Enter VR",zt("")})}catch(i){console.error(i),zt("VR start failed")}}function Ex(){gi&&gi.end()}function bx(){if(!gi||!tt)return;let i=0,e=0;const t=.15;for(const n of gi.inputSources){const a=n.gamepad;if(!a)continue;const s=Dl.get(n)||[],r=a.buttons||[],o=a.axes||[];o.length>=4&&(i=o[2],e=o[3]);const l=r.map(c=>!!c&&c.pressed);l[0]&&!s[0]&&tt.trigger("jump"),l[1]&&!s[1]&&tt.trigger("flyToggle"),l[3]&&!s[3]&&tt.trigger("exit"),Dl.set(n,l)}tt.setAction("forward",e>t),tt.setAction("backward",e<-t),tt.setAction("left",i>t),tt.setAction("right",i<-t)}ri&&ri.addEventListener("click",()=>{gi?Ex():Sx()});Al.addEventListener("click",()=>rc(jn.value));const wx=[$a,Ja,Yi,qn,Ki,ji,Qa,Zi,$i,Ji,Zn,Qi,ea,ta,Is,Or];function th(){fi&&(Tn(),Te&&(Te.planetDiameterKm=Rs()),Kh(),Ha||zt(`Planet diameter set to ${Rs().toLocaleString()} km`))}function Il(){Ha||(clearTimeout(Cl),Cl=setTimeout(()=>rc(jn.value),400))}wx.forEach(i=>{i.addEventListener("input",()=>{Tn(),eh(),Il()}),i.addEventListener("change",()=>{Tn(),eh(),Il()})});jn.addEventListener("change",()=>{Zh(jn.value),zt("Preset applied. Regenerating…"),Il()});fi&&(fi.addEventListener("input",th),fi.addEventListener("change",th));function nh(){Tn(),fx(new C().copy(gt.position).normalize())}function ih(){Tn();const i=new C().copy(gt.position).normalize();si(i),Wr(i)}const Tx=[it,En,ui,ws,_s,Yn,xs,Ni,Oi,Kn,Bi,zi,ki,Vi,Hi,ys,Gi,Wi].filter(Boolean);function Er(i){for(const e of Tx)e.disabled=i}function nd(){return((_s==null?void 0:_s.value)||"3d").toLowerCase()==="2d"?"2d":"3d"}function Ax(){const i=parseFloat(Yn==null?void 0:Yn.value),e=Number.isFinite(i)?i:64;return Ae(Math.round(e),32,128)}function ah(i){const e=i==="3d";Kn&&(Kn.disabled=e),Yn&&(Yn.disabled=!e)}let mr=0;async function id(){const i=nd();ah(i);const e=++mr;try{if(i==="3d"){const t=Ax();if(Ci&&Ci.volumeN!==t&&(Ci=null),Ci||(Ci=await nc.create({volumeN:t,surfaceW:256,surfaceH:128})),e!==mr)return;be=Ci}else{if(Sr||(Sr=await tc.create({gridWidth:256,gridHeight:128})),e!==mr)return;be=Sr}}catch(t){if(console.warn("[WaterCycle] init failed",t),e!==mr)return;Er(!0),it&&(it.checked=!1,it.disabled=!0);return}if(!(be!=null&&be.enabled)){Er(!0),it&&(it.checked=!1,it.disabled=!0),ui&&(ui.checked=!1,ui.disabled=!0),ws&&(ws.disabled=!0);return}Er(!1),ah(i),Pl&&be.enabled&&be.ready&&be.setPlanetSurface(Pl),lc(),Hr(Gn()),Gr(pi()),Wr(new C().copy(gt.position).normalize())}function lc(){const i=nd(),e=Ae(parseFloat(Ni==null?void 0:Ni.value)||20,0,60),t=Ae(parseFloat(Oi==null?void 0:Oi.value)||7,1,20),n=Ae(parseFloat(Kn==null?void 0:Kn.value)||2,1,4),a=Ae(parseFloat(Bi==null?void 0:Bi.value)||1,0,3),s=Ae(parseFloat(zi==null?void 0:zi.value)||1,0,3),r=Ae(parseFloat(ki==null?void 0:ki.value)||1,0,3),o=Ae(parseFloat(Vi==null?void 0:Vi.value)||.75,0,2),l=Ae(parseFloat(Hi==null?void 0:Hi.value)||.25,.05,1),c=(ys==null?void 0:ys.checked)??!0,u=Ae(parseFloat(Gi==null?void 0:Gi.value)||1,0,2),h=Ae(parseFloat(Wi==null?void 0:Wi.value)||.9,0,2),f=((xs==null?void 0:xs.value)||"off").toLowerCase(),m=f==="cloud"?1:f==="rain"?2:f==="pressure"?3:f==="soil"?4:f==="temp"?5:f==="snow"?6:f==="wind"?7:0,g=f==="volume",_=Ae(parseFloat(Ba==null?void 0:Ba.value)||20,5,60),p=Ae(parseFloat(hi==null?void 0:hi.value)||23.4,0,45),d=Ae(parseFloat(di==null?void 0:di.value)||0,0,1);if(be!=null&&be.enabled&&be.ready){const x={timeScale:e*60,readbackIntervalS:1/t,evapStrength:a,precipStrength:s,windStrength:r,oceanInertia:l,atmoThicknessM:_*1e3,axialTiltDeg:p,seasonPhase:d};i==="2d"&&(x.moistureLayers=n),be.setConfig(x)}if(q_(o),Y_(m),O_(g),B_(g),xn.rainHaze.value=h,Rl(),Rl(),_n){const x=((it==null?void 0:it.checked)??!1)&&c;if(_n.setEnabled(x),_n.setStrength(u),_n.setDensity(Ae(.15+u*.35,0,1)),Te){const w=(Te.radius??dn)+(Te.heightScale??0);_n.setPlanetNearRadius(w)}const y=j_(),v=.7+u*.65;_n.setSizes({dropLength:y*(6*v),dropWidth:y*(.08*v),volumeRadius:y*(340*v),volumeHeight:y*(260*v),fallDistance:y*(420*v)})}}function sh(){Tn(),id(),Rl(),lc(),Wr(new C().copy(gt.position).normalize())}[Zn,is,Us,ic].forEach(i=>{i.addEventListener(i.type==="color"?"input":"change",nh),i.type==="range"&&i.addEventListener("input",nh)});[Vh,Ia,Ua,Fa,Na,gs,Oa,vs].forEach(i=>{i.addEventListener(i.type==="color"?"input":"change",ih),i.type==="range"&&i.addEventListener("input",ih)});[it,En,ui,_s,Yn,Ba,xs,Ni,Oi,Kn,Bi,zi,ki,Vi,Hi,ys,Gi,Wi].forEach(i=>{i&&(i.addEventListener(i.type==="checkbox"?"change":i.type==="color"?"input":"change",sh),i.type==="range"&&i.addEventListener("input",sh))});Pn&&(Pn.addEventListener("input",i=>Ku(Number(i.target.value))),Pn.addEventListener("change",i=>Ku(Number(i.target.value))),es&&(es.textContent=Pn.value));ws&&ws.addEventListener("click",()=>{it!=null&&it.checked&&be!=null&&be.enabled&&be.ready&&be.hasSurface&&(td(),be.update(0,Lr,{dtSimOverride:600,forceReadback:!0}))});U_.addEventListener("click",()=>{const i=ed(),e=Hn.length?Hn[Hn.length-1].height:i.height,t={...i,id:`extra-${Date.now()}`,height:e+.3};Hn.push(t),oc(),si(new C().copy(gt.position).normalize())});window.addEventListener("resize",gx);[za,ka,Va].forEach(i=>{i&&i.addEventListener("input",Tn)});Ss&&Ss.addEventListener("change",Tn);Er(!0);id();Zh(jn.value);rc(jn.value);oc();G_();Yt.setAnimationLoop(xx);Mx();function Rx(){if(!qt)return;const i=new C().copy(Ga).normalize().multiplyScalar(-1),e=new C().copy(at.position).sub(qt.position).normalize(),t=Math.max(0,i.dot(e)),n=qt.material;n.emissiveIntensity=0,n.color.setScalar(.75+.25*t),n.needsUpdate=!0}
