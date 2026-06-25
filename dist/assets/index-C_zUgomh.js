(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jl="170",T0=0,pu=1,A0=2,Cd=1,Pd=2,_i=3,Xi=0,cn=1,gn=2,Vi=0,Ks=1,mu=2,gu=3,_u=4,b0=5,os=100,w0=101,R0=102,C0=103,P0=104,L0=200,I0=201,D0=202,U0=203,Hc=204,Vc=205,N0=206,F0=207,O0=208,B0=209,k0=210,z0=211,H0=212,V0=213,G0=214,Gc=0,Wc=1,Xc=2,er=3,Yc=4,qc=5,jc=6,Kc=7,Ld=0,W0=1,X0=2,Gi=0,Y0=1,q0=2,j0=3,Id=4,K0=5,J0=6,Z0=7,Dd=300,nr=301,ir=302,Jc=303,Zc=304,Ma=306,Qr=1e3,xi=1001,$c=1002,Vn=1003,$0=1004,bo=1005,$n=1006,Ja=1007,cs=1008,Ti=1009,Ud=1010,Nd=1011,to=1012,Kl=1013,_s=1014,Mi=1015,lo=1016,Jl=1017,Zl=1018,sr=1020,Fd=35902,Od=1021,Bd=1022,Hn=1023,kd=1024,zd=1025,Js=1026,rr=1027,Hd=1028,$l=1029,Vd=1030,Ql=1031,th=1033,ia=33776,sa=33777,ra=33778,oa=33779,Qc=35840,tl=35841,el=35842,nl=35843,il=36196,sl=37492,rl=37496,ol=37808,al=37809,cl=37810,ll=37811,hl=37812,ul=37813,fl=37814,dl=37815,pl=37816,ml=37817,gl=37818,_l=37819,vl=37820,xl=37821,aa=36492,Ml=36494,yl=36495,Gd=36283,Sl=36284,El=36285,Tl=36286,Q0=3200,tg=3201,Wd=0,eg=1,zi="",an="srgb",xr="srgb-linear",ya="linear",re="srgb",Rs=7680,vu=519,ng=512,ig=513,sg=514,Xd=515,rg=516,og=517,ag=518,cg=519,xu=35044,Mu="300 es",yi=2e3,ua=2001;class Mr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Za=Math.PI/180,Al=180/Math.PI;function yr(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qe[e&255]+qe[e>>8&255]+qe[e>>16&255]+qe[e>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[n&63|128]+qe[n>>8&255]+"-"+qe[n>>16&255]+qe[n>>24&255]+qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]).toLowerCase()}function Ge(e,t,n){return Math.max(t,Math.min(n,e))}function lg(e,t){return(e%t+t)%t}function $a(e,t,n){return(1-n)*e+n*t}function Or(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function sn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,n=0){lt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bt{constructor(t,n,i,s,r,o,a,c,l){Bt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l)}set(t,n,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],u=i[7],f=i[2],d=i[5],g=i[8],_=s[0],m=s[3],p=s[6],T=s[1],S=s[4],x=s[7],N=s[2],b=s[5],w=s[8];return r[0]=o*_+a*T+c*N,r[3]=o*m+a*S+c*b,r[6]=o*p+a*x+c*w,r[1]=l*_+h*T+u*N,r[4]=l*m+h*S+u*b,r[7]=l*p+h*x+u*w,r[2]=f*_+d*T+g*N,r[5]=f*m+d*S+g*b,r[8]=f*p+d*x+g*w,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return n*o*h-n*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=n*u+i*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*n-s*c)*_,t[5]=(s*r-a*n)*_,t[6]=d*_,t[7]=(i*c-l*n)*_,t[8]=(o*n-i*r)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Qa.makeScale(t,n)),this}rotate(t){return this.premultiply(Qa.makeRotation(-t)),this}translate(t,n){return this.premultiply(Qa.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qa=new Bt;function Yd(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function fa(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function hg(){const e=fa("canvas");return e.style.display="block",e}const yu={};function Gr(e){e in yu||(yu[e]=!0,console.warn(e))}function ug(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function fg(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dg(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===re&&(e.r=Ei(e.r),e.g=Ei(e.g),e.b=Ei(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===re&&(e.r=Zs(e.r),e.g=Zs(e.g),e.b=Zs(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===zi?ya:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function Ei(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Zs(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}const Su=[.64,.33,.3,.6,.15,.06],Eu=[.2126,.7152,.0722],Tu=[.3127,.329],Au=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bu=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[xr]:{primaries:Su,whitePoint:Tu,transfer:ya,toXYZ:Au,fromXYZ:bu,luminanceCoefficients:Eu,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:Su,whitePoint:Tu,transfer:re,toXYZ:Au,fromXYZ:bu,luminanceCoefficients:Eu,outputColorSpaceConfig:{drawingBufferColorSpace:an}}});let Cs;class pg{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cs===void 0&&(Cs=fa("canvas")),Cs.width=t.width,Cs.height=t.height;const i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=fa("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ei(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ei(n[i]/255)*255):n[i]=Ei(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mg=0;class qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mg++}),this.uuid=yr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tc(s[o].image)):r.push(tc(s[o]))}else r=tc(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function tc(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?pg.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gg=0;class en extends Mr{constructor(t=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=xi,s=xi,r=$n,o=cs,a=Hn,c=Ti,l=en.DEFAULT_ANISOTROPY,h=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=yr(),this.name="",this.source=new qd(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qr:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case $c:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qr:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case $c:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Dd;en.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,n=0,i=0,s=1){be.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,x=(d+1)/2,N=(p+1)/2,b=(h+f)/4,w=(u+_)/4,L=(g+m)/4;return S>x&&S>N?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=w/i):x>N?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=L/s):N<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),i=w/r,s=L/r),this.set(i,s,r,n),this}let T=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-_)/T,this.z=(f-h)/T,this.w=Math.acos((l+d+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _g extends Mr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new be(0,0,t,n),this.scissorTest=!1,this.viewport=new be(0,0,t,n);const s={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new en(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new qd(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vs extends _g{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class jd extends en{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vg extends en{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ho{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3];const f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[n+0]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u;return}if(a===1){t[n+0]=f,t[n+1]=d,t[n+2]=g,t[n+3]=_;return}if(u!==_||c!==f||l!==d||h!==g){let m=1-a;const p=c*f+l*d+h*g+u*_,T=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const N=Math.sqrt(S),b=Math.atan2(N,p*T);m=Math.sin(m*b)/N,a=Math.sin(a*b)/N}const x=a*T;if(c=c*m+f*x,l=l*m+d*x,h=h*m+g*x,u=u*m+_*x,m===1-a){const N=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=N,l*=N,h*=N,u*=N}}t[n]=c,t[n+1]=l,t[n+2]=h,t[n+3]=u}static multiplyQuaternionsFlat(t,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[n]=a*g+h*u+c*d-l*f,t[n+1]=c*g+h*f+l*u-a*d,t[n+2]=l*g+h*d+a*f-c*u,t[n+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),u=a(r/2),f=c(i/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],h=n[6],u=n[10],f=i+a+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(i>a&&i>u){const d=2*Math.sqrt(1+i-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){const d=2*Math.sqrt(1+a-i-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-i-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-n;return this._w=d*o+n*this._w,this._x=d*i+n*this._x,this._y=d*s+n*this._y,this._z=d*r+n*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-n)*h)/l,f=Math.sin(n*h)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,n=0,i=0){C.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(wu.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(wu.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*n-r*s),u=2*(r*i-o*n);return this.x=n+c*l+o*u-a*h,this.y=i+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ec.copy(this).projectOnVector(t),this.sub(ec)}reflect(t){return this.sub(ec.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ge(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ec=new C,wu=new ho;class uo{constructor(t=new C(1/0,1/0,1/0),n=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(r,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Br),Ro.subVectors(this.max,Br),Ps.subVectors(t.a,Br),Ls.subVectors(t.b,Br),Is.subVectors(t.c,Br),Li.subVectors(Ls,Ps),Ii.subVectors(Is,Ls),Zi.subVectors(Ps,Is);let n=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-Zi.z,Zi.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,Zi.z,0,-Zi.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-Zi.y,Zi.x,0];return!nc(n,Ps,Ls,Is,Ro)||(n=[1,0,0,0,1,0,0,0,1],!nc(n,Ps,Ls,Is,Ro))?!1:(Co.crossVectors(Li,Ii),n=[Co.x,Co.y,Co.z],nc(n,Ps,Ls,Is,Ro))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fi=[new C,new C,new C,new C,new C,new C,new C,new C],Fn=new C,wo=new uo,Ps=new C,Ls=new C,Is=new C,Li=new C,Ii=new C,Zi=new C,Br=new C,Ro=new C,Co=new C,$i=new C;function nc(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){$i.fromArray(e,r);const a=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),c=t.dot($i),l=n.dot($i),h=i.dot($i);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const xg=new uo,kr=new C,ic=new C;class eh{constructor(t=new C,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):xg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;kr.subVectors(t,this.center);const n=kr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(kr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(kr.copy(t.center).add(ic)),this.expandByPoint(kr.copy(t.center).sub(ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const di=new C,sc=new C,Po=new C,Di=new C,rc=new C,Lo=new C,oc=new C;class Mg{constructor(t=new C,n=new C(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,di)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=di.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){sc.copy(t).add(n).multiplyScalar(.5),Po.copy(n).sub(t).normalize(),Di.copy(this.origin).sub(sc);const r=t.distanceTo(n)*.5,o=-this.direction.dot(Po),a=Di.dot(this.direction),c=-Di.dot(Po),l=Di.lengthSq(),h=Math.abs(1-o*o);let u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(sc).addScaledVector(Po,f),d}intersectSphere(t,n){di.subVectors(t.center,this.origin);const i=di.dot(this.direction),s=di.dot(di)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,di)!==null}intersectTriangle(t,n,i,s,r){rc.subVectors(n,t),Lo.subVectors(i,t),oc.crossVectors(rc,Lo);let o=this.direction.dot(oc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Di.subVectors(this.origin,t);const c=a*this.direction.dot(Lo.crossVectors(Di,Lo));if(c<0)return null;const l=a*this.direction.dot(rc.cross(Di));if(l<0||c+l>o)return null;const h=-a*Di.dot(oc);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Se{constructor(t,n,i,s,r,o,a,c,l,h,u,f,d,g,_,m){Se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l,h,u,f,d,g,_,m)}set(t,n,i,s,r,o,a,c,l,h,u,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Se().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,s=1/Ds.setFromMatrixColumn(t,0).length(),r=1/Ds.setFromMatrixColumn(t,1).length(),o=1/Ds.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,d=o*u,g=a*h,_=a*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=d+g*l,n[5]=f-_*l,n[9]=-a*c,n[2]=_-f*l,n[6]=g+d*l,n[10]=o*c}else if(t.order==="YXZ"){const f=c*h,d=c*u,g=l*h,_=l*u;n[0]=f+_*a,n[4]=g*a-d,n[8]=o*l,n[1]=o*u,n[5]=o*h,n[9]=-a,n[2]=d*a-g,n[6]=_+f*a,n[10]=o*c}else if(t.order==="ZXY"){const f=c*h,d=c*u,g=l*h,_=l*u;n[0]=f-_*a,n[4]=-o*u,n[8]=g+d*a,n[1]=d+g*a,n[5]=o*h,n[9]=_-f*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const f=o*h,d=o*u,g=a*h,_=a*u;n[0]=c*h,n[4]=g*l-d,n[8]=f*l+_,n[1]=c*u,n[5]=_*l+f,n[9]=d*l-g,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const f=o*c,d=o*l,g=a*c,_=a*l;n[0]=c*h,n[4]=_-f*u,n[8]=g*u+d,n[1]=u,n[5]=o*h,n[9]=-a*h,n[2]=-l*h,n[6]=d*u+g,n[10]=f-_*u}else if(t.order==="XZY"){const f=o*c,d=o*l,g=a*c,_=a*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=f*u+_,n[5]=o*h,n[9]=d*u-g,n[2]=g*u-d,n[6]=a*h,n[10]=_*u+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yg,t,Sg)}lookAt(t,n,i){const s=this.elements;return un.subVectors(t,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ui.crossVectors(i,un),Ui.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ui.crossVectors(i,un)),Ui.normalize(),Io.crossVectors(un,Ui),s[0]=Ui.x,s[4]=Io.x,s[8]=un.x,s[1]=Ui.y,s[5]=Io.y,s[9]=un.y,s[2]=Ui.z,s[6]=Io.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],u=i[5],f=i[9],d=i[13],g=i[2],_=i[6],m=i[10],p=i[14],T=i[3],S=i[7],x=i[11],N=i[15],b=s[0],w=s[4],L=s[8],E=s[12],y=s[1],R=s[5],z=s[9],k=s[13],W=s[2],K=s[6],G=s[10],Z=s[14],V=s[3],it=s[7],ht=s[11],bt=s[15];return r[0]=o*b+a*y+c*W+l*V,r[4]=o*w+a*R+c*K+l*it,r[8]=o*L+a*z+c*G+l*ht,r[12]=o*E+a*k+c*Z+l*bt,r[1]=h*b+u*y+f*W+d*V,r[5]=h*w+u*R+f*K+d*it,r[9]=h*L+u*z+f*G+d*ht,r[13]=h*E+u*k+f*Z+d*bt,r[2]=g*b+_*y+m*W+p*V,r[6]=g*w+_*R+m*K+p*it,r[10]=g*L+_*z+m*G+p*ht,r[14]=g*E+_*k+m*Z+p*bt,r[3]=T*b+S*y+x*W+N*V,r[7]=T*w+S*R+x*K+N*it,r[11]=T*L+S*z+x*G+N*ht,r[15]=T*E+S*k+x*Z+N*bt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+i*l*f+s*a*d-i*c*d)+_*(+n*c*d-n*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+n*l*u-n*a*d-r*o*u+i*o*d+r*a*h-i*l*h)+p*(-s*a*h-n*c*u+n*a*f+s*o*u-i*o*f+i*c*h)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],T=u*m*l-_*f*l+_*c*d-a*m*d-u*c*p+a*f*p,S=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,x=h*_*l-g*u*l+g*a*d-o*_*d-h*a*p+o*u*p,N=g*u*c-h*_*c-g*a*f+o*_*f+h*a*m-o*u*m,b=n*T+i*S+s*x+r*N;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=T*w,t[1]=(_*f*r-u*m*r-_*s*d+i*m*d+u*s*p-i*f*p)*w,t[2]=(a*m*r-_*c*r+_*s*l-i*m*l-a*s*p+i*c*p)*w,t[3]=(u*c*r-a*f*r-u*s*l+i*f*l+a*s*d-i*c*d)*w,t[4]=S*w,t[5]=(h*m*r-g*f*r+g*s*d-n*m*d-h*s*p+n*f*p)*w,t[6]=(g*c*r-o*m*r-g*s*l+n*m*l+o*s*p-n*c*p)*w,t[7]=(o*f*r-h*c*r+h*s*l-n*f*l-o*s*d+n*c*d)*w,t[8]=x*w,t[9]=(g*u*r-h*_*r-g*i*d+n*_*d+h*i*p-n*u*p)*w,t[10]=(o*_*r-g*a*r+g*i*l-n*_*l-o*i*p+n*a*p)*w,t[11]=(h*a*r-o*u*r-h*i*l+n*u*l+o*i*d-n*a*d)*w,t[12]=N*w,t[13]=(h*_*s-g*u*s+g*i*f-n*_*f-h*i*m+n*u*m)*w,t[14]=(g*a*s-o*_*s-g*i*c+n*_*c+o*i*m-n*a*m)*w,t[15]=(o*u*s-h*a*s+h*i*c-n*u*c-o*i*f+n*a*f)*w,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,T=c*l,S=c*h,x=c*u,N=i.x,b=i.y,w=i.z;return s[0]=(1-(_+p))*N,s[1]=(d+x)*N,s[2]=(g-S)*N,s[3]=0,s[4]=(d-x)*b,s[5]=(1-(f+p))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(g+S)*w,s[9]=(m-T)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;let r=Ds.set(s[0],s[1],s[2]).length();const o=Ds.set(s[4],s[5],s[6]).length(),a=Ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],On.copy(this);const l=1/r,h=1/o,u=1/a;return On.elements[0]*=l,On.elements[1]*=l,On.elements[2]*=l,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,n.setFromRotationMatrix(On),i.x=r,i.y=o,i.z=a,this}makePerspective(t,n,i,s,r,o,a=yi){const c=this.elements,l=2*r/(n-t),h=2*r/(i-s),u=(n+t)/(n-t),f=(i+s)/(i-s);let d,g;if(a===yi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ua)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=yi){const c=this.elements,l=1/(n-t),h=1/(i-s),u=1/(o-r),f=(n+t)*l,d=(i+s)*h;let g,_;if(a===yi)g=(o+r)*u,_=-2*u;else if(a===ua)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const Ds=new C,On=new Se,yg=new C(0,0,0),Sg=new C(1,1,1),Ui=new C,Io=new C,un=new C,Ru=new Se,Cu=new ho;class ni{constructor(t=0,n=0,i=0,s=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(n){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ge(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Ru.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ru,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Cu.setFromEuler(this),this.setFromQuaternion(Cu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class Kd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Eg=0;const Pu=new C,Us=new ho,pi=new Se,Do=new C,zr=new C,Tg=new C,Ag=new ho,Lu=new C(1,0,0),Iu=new C(0,1,0),Du=new C(0,0,1),Uu={type:"added"},bg={type:"removed"},Ns={type:"childadded",child:null},ac={type:"childremoved",child:null};class We extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=yr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new C,n=new ni,i=new ho,s=new C(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Bt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Us.setFromAxisAngle(t,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,n){return Us.setFromAxisAngle(t,n),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(Lu,t)}rotateY(t){return this.rotateOnAxis(Iu,t)}rotateZ(t){return this.rotateOnAxis(Du,t)}translateOnAxis(t,n){return Pu.copy(t).applyQuaternion(this.quaternion),this.position.add(Pu.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Lu,t)}translateY(t){return this.translateOnAxis(Iu,t)}translateZ(t){return this.translateOnAxis(Du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Do.copy(t):Do.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(zr,Do,this.up):pi.lookAt(Do,zr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(pi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(bg),ac.child=t,this.dispatchEvent(ac),ac.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uu),Ns.child=t,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,Tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Ag,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(n){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}We.DEFAULT_UP=new C(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new C,mi=new C,cc=new C,gi=new C,Fs=new C,Os=new C,Nu=new C,lc=new C,hc=new C,uc=new C,fc=new be,dc=new be,pc=new be;class zn{constructor(t=new C,n=new C,i=new C){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Bn.subVectors(t,n),s.cross(Bn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Bn.subVectors(s,n),mi.subVectors(i,n),cc.subVectors(t,n);const o=Bn.dot(Bn),a=Bn.dot(mi),c=Bn.dot(cc),l=mi.dot(mi),h=mi.dot(cc),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,n,i,s,r,o,a,c){return this.getBarycoord(t,n,i,s,gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gi.x),c.addScaledVector(o,gi.y),c.addScaledVector(a,gi.z),c)}static getInterpolatedAttribute(t,n,i,s,r,o){return fc.setScalar(0),dc.setScalar(0),pc.setScalar(0),fc.fromBufferAttribute(t,n),dc.fromBufferAttribute(t,i),pc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(fc,r.x),o.addScaledVector(dc,r.y),o.addScaledVector(pc,r.z),o}static isFrontFacing(t,n,i,s){return Bn.subVectors(i,n),mi.subVectors(t,n),Bn.cross(mi).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return zn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return zn.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let o,a;Fs.subVectors(s,i),Os.subVectors(r,i),lc.subVectors(t,i);const c=Fs.dot(lc),l=Os.dot(lc);if(c<=0&&l<=0)return n.copy(i);hc.subVectors(t,s);const h=Fs.dot(hc),u=Os.dot(hc);if(h>=0&&u<=h)return n.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),n.copy(i).addScaledVector(Fs,o);uc.subVectors(t,r);const d=Fs.dot(uc),g=Os.dot(uc);if(g>=0&&d<=g)return n.copy(r);const _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),n.copy(i).addScaledVector(Os,a);const m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Nu.subVectors(r,s),a=(u-h)/(u-h+(d-g)),n.copy(s).addScaledVector(Nu,a);const p=1/(m+_+f);return o=_*p,a=f*p,n.copy(i).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Uo={h:0,s:0,l:0};function mc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Lt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=an){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,n),this}setRGB(t,n,i,s=Jt.workingColorSpace){return this.r=t,this.g=n,this.b=i,Jt.toWorkingColorSpace(this,s),this}setHSL(t,n,i,s=Jt.workingColorSpace){if(t=lg(t,1),n=Ge(n,0,1),i=Ge(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=mc(o,r,t+1/3),this.g=mc(o,r,t),this.b=mc(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,n=an){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=an){const i=Jd[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Zs(t.r),this.g=Zs(t.g),this.b=Zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=an){return Jt.fromWorkingColorSpace(je.copy(this),t),Math.round(Ge(je.r*255,0,255))*65536+Math.round(Ge(je.g*255,0,255))*256+Math.round(Ge(je.b*255,0,255))}getHexString(t=an){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Jt.workingColorSpace){Jt.fromWorkingColorSpace(je.copy(this),n);const i=je.r,s=je.g,r=je.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,n=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(je.copy(this),n),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=an){Jt.fromWorkingColorSpace(je.copy(this),t);const n=je.r,i=je.g,s=je.b;return t!==an?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+n,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Ni),t.getHSL(Uo);const i=$a(Ni.h,Uo.h,n),s=$a(Ni.s,Uo.s,n),r=$a(Ni.l,Uo.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new Lt;Lt.NAMES=Jd;let wg=0;class fo extends Mr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=yr(),this.name="",this.blending=Ks,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Vc,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hc&&(i.blendSrc=this.blendSrc),this.blendDst!==Vc&&(i.blendDst=this.blendDst),this.blendEquation!==os&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vu&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class us extends fo{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new C,No=new lt;class Gn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=xu,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)No.fromBufferAttribute(this,n),No.applyMatrix3(t),this.setXY(n,No.x,No.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyMatrix3(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyMatrix4(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.applyNormalMatrix(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Pe.fromBufferAttribute(this,n),Pe.transformDirection(t),this.setXYZ(n,Pe.x,Pe.y,Pe.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Or(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Or(n,this.array)),n}setX(t,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Or(n,this.array)),n}setY(t,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Or(n,this.array)),n}setZ(t,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Or(n,this.array)),n}setW(t,n){return this.normalized&&(n=sn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=sn(n,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xu&&(t.usage=this.usage),t}}class Zd extends Gn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class $d extends Gn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class ee extends Gn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let Rg=0;const wn=new Se,gc=new We,Bs=new C,fn=new uo,Hr=new uo,ze=new C;class Ze extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=yr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yd(t)?$d:Zd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,n,i){return wn.makeTranslation(t,n,i),this.applyMatrix4(wn),this}scale(t,n,i){return wn.makeScale(t,n,i),this.applyMatrix4(wn),this}lookAt(t){return gc.lookAt(t),gc.updateMatrix(),this.applyMatrix4(gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ee(i,3))}else{for(let i=0,s=n.count;i<s;i++){const r=t[i];n.setXYZ(i,r.x,r.y,r.z||0)}t.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new eh);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(fn.min,Hr.min),fn.expandByPoint(ze),ze.addVectors(fn.max,Hr.max),fn.expandByPoint(ze)):(fn.expandByPoint(Hr.min),fn.expandByPoint(Hr.max))}fn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(ze));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)ze.fromBufferAttribute(a,l),c&&(Bs.fromBufferAttribute(t,l),ze.add(Bs)),s=Math.max(s,i.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let L=0;L<i.count;L++)a[L]=new C,c[L]=new C;const l=new C,h=new C,u=new C,f=new lt,d=new lt,g=new lt,_=new C,m=new C;function p(L,E,y){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,E),u.fromBufferAttribute(i,y),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,E),g.fromBufferAttribute(r,y),h.sub(l),u.sub(l),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(R),a[L].add(_),a[E].add(_),a[y].add(_),c[L].add(m),c[E].add(m),c[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let L=0,E=T.length;L<E;++L){const y=T[L],R=y.start,z=y.count;for(let k=R,W=R+z;k<W;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new C,x=new C,N=new C,b=new C;function w(L){N.fromBufferAttribute(s,L),b.copy(N);const E=a[L];S.copy(E),S.sub(N.multiplyScalar(N.dot(E))).normalize(),x.crossVectors(b,E);const R=x.dot(c[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,R)}for(let L=0,E=T.length;L<E;++L){const y=T[L],R=y.start,z=y.count;for(let k=R,W=R+z;k<W;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const s=new C,r=new C,o=new C,a=new C,c=new C,l=new C,h=new C,u=new C;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=n.count;f<d;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)ze.fromBufferAttribute(t,n),ze.normalize(),t.setXYZ(n,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Gn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ze,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=t(f,i);c.push(d)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(n))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fu=new Se,Qi=new Mg,Fo=new eh,Ou=new C,Oo=new C,Bo=new C,ko=new C,_c=new C,zo=new C,Bu=new C,Ho=new C;class Yt extends We{constructor(t=new Ze,n=new us){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){zo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(_c.fromBufferAttribute(u,t),o?zo.addScaledVector(_c,h):zo.addScaledVector(_c.sub(n),h))}n.add(zo)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fo.copy(i.boundingSphere),Fo.applyMatrix4(r),Qi.copy(t.ray).recast(t.near),!(Fo.containsPoint(Qi.origin)===!1&&(Qi.intersectSphere(Fo,Ou)===null||Qi.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(Fu.copy(r).invert(),Qi.copy(t.ray).applyMatrix4(Fu),!(i.boundingBox!==null&&Qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Qi)))}_computeIntersections(t,n,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,N=S;x<N;x+=3){const b=a.getX(x),w=a.getX(x+1),L=a.getX(x+2);s=Vo(this,p,t,i,l,h,u,b,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);s=Vo(this,o,t,i,l,h,u,T,S,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],T=Math.max(m.start,d.start),S=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let x=T,N=S;x<N;x+=3){const b=x,w=x+1,L=x+2;s=Vo(this,p,t,i,l,h,u,b,w,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const T=m,S=m+1,x=m+2;s=Vo(this,o,t,i,l,h,u,T,S,x),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Cg(e,t,n,i,s,r,o,a){let c;if(t.side===cn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Xi,a),c===null)return null;Ho.copy(a),Ho.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Ho);return l<n.near||l>n.far?null:{distance:l,point:Ho.clone(),object:e}}function Vo(e,t,n,i,s,r,o,a,c,l){e.getVertexPosition(a,Oo),e.getVertexPosition(c,Bo),e.getVertexPosition(l,ko);const h=Cg(e,t,n,i,Oo,Bo,ko,Bu);if(h){const u=new C;zn.getBarycoord(Bu,Oo,Bo,ko,u),s&&(h.uv=zn.getInterpolatedAttribute(s,a,c,l,u,new lt)),r&&(h.uv1=zn.getInterpolatedAttribute(r,a,c,l,u,new lt)),o&&(h.normal=zn.getInterpolatedAttribute(o,a,c,l,u,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new C,materialIndex:0};zn.getNormal(Oo,Bo,ko,f.normal),h.face=f,h.barycoord=u}return h}class po extends Ze{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let f=0,d=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ee(l,3)),this.setAttribute("normal",new ee(h,3)),this.setAttribute("uv",new ee(u,2));function g(_,m,p,T,S,x,N,b,w,L,E){const y=x/w,R=N/L,z=x/2,k=N/2,W=b/2,K=w+1,G=L+1;let Z=0,V=0;const it=new C;for(let ht=0;ht<G;ht++){const bt=ht*R-k;for(let Ht=0;Ht<K;Ht++){const ae=Ht*y-z;it[_]=ae*T,it[m]=bt*S,it[p]=W,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=b>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ht/w),u.push(1-ht/L),Z+=1}}for(let ht=0;ht<L;ht++)for(let bt=0;bt<w;bt++){const Ht=f+bt+K*ht,ae=f+bt+K*(ht+1),Y=f+(bt+1)+K*(ht+1),tt=f+(bt+1)+K*ht;c.push(Ht,ae,tt),c.push(ae,Y,tt),V+=6}a.addGroup(d,V,E),d+=V,f+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new po(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function or(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone():Array.isArray(s)?t[n][i]=s.slice():t[n][i]=s}}return t}function tn(e){const t={};for(let n=0;n<e.length;n++){const i=or(e[n]);for(const s in i)t[s]=i[s]}return t}function Pg(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Qd(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Lg={clone:or,merge:tn};var Ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends fo{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ig,this.fragmentShader=Dg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=Pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class tp extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=yi}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new C,ku=new lt,zu=new lt;class kn extends tp{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Al*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Al*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,n){return this.getViewBounds(t,ku,zu),n.subVectors(zu,ku)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Za*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ks=-90,zs=1;class Ug extends We{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new kn(ks,zs,t,n);s.layers=this.layers,this.add(s);const r=new kn(ks,zs,t,n);r.layers=this.layers,this.add(r);const o=new kn(ks,zs,t,n);o.layers=this.layers,this.add(o);const a=new kn(ks,zs,t,n);a.layers=this.layers,this.add(a);const c=new kn(ks,zs,t,n);c.layers=this.layers,this.add(c);const l=new kn(ks,zs,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(const l of n)this.remove(l);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(n,r),t.setRenderTarget(i,1,s),t.render(n,o),t.setRenderTarget(i,2,s),t.render(n,a),t.setRenderTarget(i,3,s),t.render(n,c),t.setRenderTarget(i,4,s),t.render(n,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(n,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ep extends en{constructor(t,n,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],n=n!==void 0?n:nr,super(t,n,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ng extends vs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new ep(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:$n}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new po(5,5,5),r=new Yi({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Vi});r.uniforms.tEquirect.value=n;const o=new Yt(s,r),a=n.minFilter;return n.minFilter===cs&&(n.minFilter=$n),new Ug(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}}const vc=new C,Fg=new C,Og=new Bt;class ss{constructor(t=new C(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=vc.subVectors(i,n).cross(Fg.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(vc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Og.getNormalMatrix(t),s=this.coplanarPoint(vc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new eh,Go=new C;class nh{constructor(t=new ss,n=new ss,i=new ss,s=new ss,r=new ss,o=new ss){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=yi){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],T=s[13],S=s[14],x=s[15];if(i[0].setComponents(c-r,f-l,m-d,x-p).normalize(),i[1].setComponents(c+r,f+l,m+d,x+p).normalize(),i[2].setComponents(c+o,f+h,m+g,x+T).normalize(),i[3].setComponents(c-o,f-h,m-g,x-T).normalize(),i[4].setComponents(c-a,f-u,m-_,x-S).normalize(),n===yi)i[5].setComponents(c+a,f+u,m+_,x+S).normalize();else if(n===ua)i[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Go.x=s.normal.x>0?t.max.x:t.min.x,Go.y=s.normal.y>0?t.max.y:t.min.y,Go.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function np(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function Bg(e){const t=new WeakMap;function n(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=e.createBuffer();e.bindBuffer(c,f),e.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=e.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=e.HALF_FLOAT:d=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=e.SHORT;else if(l instanceof Uint32Array)d=e.UNSIGNED_INT;else if(l instanceof Int32Array)d=e.INT;else if(l instanceof Int8Array)d=e.BYTE;else if(l instanceof Uint8Array)d=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,c,l){const h=c.array,u=c.updateRanges;if(e.bindBuffer(l,a),u.length===0)e.bufferSubData(l,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){const g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){const _=u[d];e.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(e.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class Es extends Ze{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=n/c,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const T=p*f-o;for(let S=0;S<l;S++){const x=S*u-r;g.push(x,-T,0),_.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<a;T++){const S=T+l*p,x=T+l*(p+1),N=T+1+l*(p+1),b=T+1+l*p;d.push(S,x,b),d.push(x,N,b)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Es(t.width,t.height,t.widthSegments,t.heightSegments)}}var kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zg=`#ifdef USE_ALPHAHASH
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
#endif`,Hg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xg=`#ifdef USE_AOMAP
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
#endif`,Yg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qg=`#ifdef USE_BATCHING
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
#endif`,jg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$g=`#ifdef USE_IRIDESCENCE
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
#endif`,Qg=`#ifdef USE_BUMPMAP
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
#endif`,t_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,e_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,r_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
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
#endif`,c_=`#define PI 3.141592653589793
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
} // validated`,l_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h_=`vec3 transformedNormal = objectNormal;
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
#endif`,u_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,f_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,d_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,p_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,m_="gl_FragColor = linearToOutputTexel( gl_FragColor );",g_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,__=`#ifdef USE_ENVMAP
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
#endif`,v_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,x_=`#ifdef USE_ENVMAP
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
#endif`,M_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
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
#endif`,S_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,E_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b_=`#ifdef USE_GRADIENTMAP
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
}`,w_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P_=`uniform bool receiveShadow;
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
#endif`,L_=`#ifdef USE_ENVMAP
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
#endif`,I_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,N_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,F_=`PhysicalMaterial material;
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
#endif`,O_=`struct PhysicalMaterial {
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
}`,B_=`
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
#endif`,k_=`#if defined( RE_IndirectDiffuse )
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
#endif`,z_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,H_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,V_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,G_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,X_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,q_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j_=`#if defined( USE_POINTS_UV )
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
#endif`,K_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,J_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Z_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Q_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`#ifdef USE_MORPHTARGETS
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
#endif`,e1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,i1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,s1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a1=`#ifdef USE_NORMALMAP
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
#endif`,c1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,p1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,v1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,y1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,S1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,E1=`float getShadowMask() {
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
}`,T1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,A1=`#ifdef USE_SKINNING
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
#endif`,b1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
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
#endif`,R1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,C1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,L1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,I1=`#ifdef USE_TRANSMISSION
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
#endif`,D1=`#ifdef USE_TRANSMISSION
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
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,O1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,k1=`uniform sampler2D t2D;
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
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`#include <common>
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
}`,X1=`#if DEPTH_PACKING == 3200
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
}`,Y1=`#define DISTANCE
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
}`,q1=`#define DISTANCE
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,K1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J1=`uniform float scale;
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
}`,Z1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,Q1=`uniform vec3 diffuse;
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
}`,tv=`#define LAMBERT
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
}`,ev=`#define LAMBERT
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
}`,nv=`#define MATCAP
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
}`,iv=`#define MATCAP
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
}`,sv=`#define NORMAL
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
}`,rv=`#define NORMAL
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
}`,ov=`#define PHONG
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
}`,av=`#define PHONG
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
}`,cv=`#define STANDARD
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
}`,lv=`#define STANDARD
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
}`,hv=`#define TOON
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
}`,uv=`#define TOON
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
}`,fv=`uniform float size;
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
}`,dv=`uniform vec3 diffuse;
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
}`,pv=`#include <common>
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
}`,mv=`uniform vec3 color;
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
}`,gv=`uniform float rotation;
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
}`,_v=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:kg,alphahash_pars_fragment:zg,alphamap_fragment:Hg,alphamap_pars_fragment:Vg,alphatest_fragment:Gg,alphatest_pars_fragment:Wg,aomap_fragment:Xg,aomap_pars_fragment:Yg,batching_pars_vertex:qg,batching_vertex:jg,begin_vertex:Kg,beginnormal_vertex:Jg,bsdfs:Zg,iridescence_fragment:$g,bumpmap_pars_fragment:Qg,clipping_planes_fragment:t_,clipping_planes_pars_fragment:e_,clipping_planes_pars_vertex:n_,clipping_planes_vertex:i_,color_fragment:s_,color_pars_fragment:r_,color_pars_vertex:o_,color_vertex:a_,common:c_,cube_uv_reflection_fragment:l_,defaultnormal_vertex:h_,displacementmap_pars_vertex:u_,displacementmap_vertex:f_,emissivemap_fragment:d_,emissivemap_pars_fragment:p_,colorspace_fragment:m_,colorspace_pars_fragment:g_,envmap_fragment:__,envmap_common_pars_fragment:v_,envmap_pars_fragment:x_,envmap_pars_vertex:M_,envmap_physical_pars_fragment:L_,envmap_vertex:y_,fog_vertex:S_,fog_pars_vertex:E_,fog_fragment:T_,fog_pars_fragment:A_,gradientmap_pars_fragment:b_,lightmap_pars_fragment:w_,lights_lambert_fragment:R_,lights_lambert_pars_fragment:C_,lights_pars_begin:P_,lights_toon_fragment:I_,lights_toon_pars_fragment:D_,lights_phong_fragment:U_,lights_phong_pars_fragment:N_,lights_physical_fragment:F_,lights_physical_pars_fragment:O_,lights_fragment_begin:B_,lights_fragment_maps:k_,lights_fragment_end:z_,logdepthbuf_fragment:H_,logdepthbuf_pars_fragment:V_,logdepthbuf_pars_vertex:G_,logdepthbuf_vertex:W_,map_fragment:X_,map_pars_fragment:Y_,map_particle_fragment:q_,map_particle_pars_fragment:j_,metalnessmap_fragment:K_,metalnessmap_pars_fragment:J_,morphinstance_vertex:Z_,morphcolor_vertex:$_,morphnormal_vertex:Q_,morphtarget_pars_vertex:t1,morphtarget_vertex:e1,normal_fragment_begin:n1,normal_fragment_maps:i1,normal_pars_fragment:s1,normal_pars_vertex:r1,normal_vertex:o1,normalmap_pars_fragment:a1,clearcoat_normal_fragment_begin:c1,clearcoat_normal_fragment_maps:l1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:u1,opaque_fragment:f1,packing:d1,premultiplied_alpha_fragment:p1,project_vertex:m1,dithering_fragment:g1,dithering_pars_fragment:_1,roughnessmap_fragment:v1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:M1,shadowmap_pars_vertex:y1,shadowmap_vertex:S1,shadowmask_pars_fragment:E1,skinbase_vertex:T1,skinning_pars_vertex:A1,skinning_vertex:b1,skinnormal_vertex:w1,specularmap_fragment:R1,specularmap_pars_fragment:C1,tonemapping_fragment:P1,tonemapping_pars_fragment:L1,transmission_fragment:I1,transmission_pars_fragment:D1,uv_pars_fragment:U1,uv_pars_vertex:N1,uv_vertex:F1,worldpos_vertex:O1,background_vert:B1,background_frag:k1,backgroundCube_vert:z1,backgroundCube_frag:H1,cube_vert:V1,cube_frag:G1,depth_vert:W1,depth_frag:X1,distanceRGBA_vert:Y1,distanceRGBA_frag:q1,equirect_vert:j1,equirect_frag:K1,linedashed_vert:J1,linedashed_frag:Z1,meshbasic_vert:$1,meshbasic_frag:Q1,meshlambert_vert:tv,meshlambert_frag:ev,meshmatcap_vert:nv,meshmatcap_frag:iv,meshnormal_vert:sv,meshnormal_frag:rv,meshphong_vert:ov,meshphong_frag:av,meshphysical_vert:cv,meshphysical_frag:lv,meshtoon_vert:hv,meshtoon_frag:uv,points_vert:fv,points_frag:dv,shadow_vert:pv,shadow_frag:mv,sprite_vert:gv,sprite_frag:_v},et={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},Zn={basic:{uniforms:tn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:tn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:tn([et.common,et.specularmap,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.fog,et.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:tn([et.common,et.envmap,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.roughnessmap,et.metalnessmap,et.fog,et.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:tn([et.common,et.aomap,et.lightmap,et.emissivemap,et.bumpmap,et.normalmap,et.displacementmap,et.gradientmap,et.fog,et.lights,{emissive:{value:new Lt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:tn([et.common,et.bumpmap,et.normalmap,et.displacementmap,et.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:tn([et.points,et.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:tn([et.common,et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:tn([et.common,et.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:tn([et.common,et.bumpmap,et.normalmap,et.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:tn([et.sprite,et.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:tn([et.common,et.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:tn([et.lights,et.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Zn.physical={uniforms:tn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Wo={r:0,b:0,g:0},es=new ni,vv=new Se;function xv(e,t,n,i,s,r,o){const a=new Lt(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?n:t).get(S)),S}function _(T){let S=!1;const x=g(T);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const N=e.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(T,S){const x=g(S);x&&(x.isCubeTexture||x.mapping===Ma)?(h===void 0&&(h=new Yt(new po(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),es.copy(S.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vv.makeRotationFromEuler(es)),h.material.toneMapped=Jt.getTransfer(x.colorSpace)!==re,(u!==x||f!==x.version||d!==e.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,d=e.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Yt(new Es(2,2),new Yi({name:"BackgroundMaterial",uniforms:or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==re,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||d!==e.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,d=e.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function p(T,S){T.getRGB(Wo,Qd(e)),i.buffers.color.setClear(Wo.r,Wo.g,Wo.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,p(a,c)},render:_,addToRenderList:m}}function Mv(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(y,R,z,k,W){let K=!1;const G=u(k,z,R);r!==G&&(r=G,l(r.object)),K=d(y,k,z,W),K&&g(y,k,z,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,x(y,R,z,k),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return e.createVertexArray()}function l(y){return e.bindVertexArray(y)}function h(y){return e.deleteVertexArray(y)}function u(y,R,z){const k=z.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let K=W[R.id];K===void 0&&(K={},W[R.id]=K);let G=K[k];return G===void 0&&(G=f(c()),K[k]=G),G}function f(y){const R=[],z=[],k=[];for(let W=0;W<n;W++)R[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:y,attributes:{},index:null}}function d(y,R,z,k){const W=r.attributes,K=R.attributes;let G=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){const ht=W[V];let bt=K[V];if(bt===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(bt=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(bt=y.instanceColor)),ht===void 0||ht.attribute!==bt||bt&&ht.data!==bt.data)return!0;G++}return r.attributesNum!==G||r.index!==k}function g(y,R,z,k){const W={},K=R.attributes;let G=0;const Z=z.getAttributes();for(const V in Z)if(Z[V].location>=0){let ht=K[V];ht===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ht=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ht=y.instanceColor));const bt={};bt.attribute=ht,ht&&ht.data&&(bt.data=ht.data),W[V]=bt,G++}r.attributes=W,r.attributesNum=G,r.index=k}function _(){const y=r.newAttributes;for(let R=0,z=y.length;R<z;R++)y[R]=0}function m(y){p(y,0)}function p(y,R){const z=r.newAttributes,k=r.enabledAttributes,W=r.attributeDivisors;z[y]=1,k[y]===0&&(e.enableVertexAttribArray(y),k[y]=1),W[y]!==R&&(e.vertexAttribDivisor(y,R),W[y]=R)}function T(){const y=r.newAttributes,R=r.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==y[z]&&(e.disableVertexAttribArray(z),R[z]=0)}function S(y,R,z,k,W,K,G){G===!0?e.vertexAttribIPointer(y,R,z,W,K):e.vertexAttribPointer(y,R,z,k,W,K)}function x(y,R,z,k){_();const W=k.attributes,K=z.getAttributes(),G=R.defaultAttributeValues;for(const Z in K){const V=K[Z];if(V.location>=0){let it=W[Z];if(it===void 0&&(Z==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),Z==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){const ht=it.normalized,bt=it.itemSize,Ht=t.get(it);if(Ht===void 0)continue;const ae=Ht.buffer,Y=Ht.type,tt=Ht.bytesPerElement,yt=Y===e.INT||Y===e.UNSIGNED_INT||it.gpuType===Kl;if(it.isInterleavedBufferAttribute){const st=it.data,It=st.stride,Nt=it.offset;if(st.isInstancedInterleavedBuffer){for(let Vt=0;Vt<V.locationSize;Vt++)p(V.location+Vt,st.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Vt=0;Vt<V.locationSize;Vt++)m(V.location+Vt);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let Vt=0;Vt<V.locationSize;Vt++)S(V.location+Vt,bt/V.locationSize,Y,ht,It*tt,(Nt+bt/V.locationSize*Vt)*tt,yt)}else{if(it.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)p(V.location+st,it.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);e.bindBuffer(e.ARRAY_BUFFER,ae);for(let st=0;st<V.locationSize;st++)S(V.location+st,bt/V.locationSize,Y,ht,bt*tt,bt/V.locationSize*st*tt,yt)}}else if(G!==void 0){const ht=G[Z];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(V.location,ht);break;case 3:e.vertexAttrib3fv(V.location,ht);break;case 4:e.vertexAttrib4fv(V.location,ht);break;default:e.vertexAttrib1fv(V.location,ht)}}}}T()}function N(){L();for(const y in i){const R=i[y];for(const z in R){const k=R[z];for(const W in k)h(k[W].object),delete k[W];delete R[z]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const R=i[y.id];for(const z in R){const k=R[z];for(const W in k)h(k[W].object),delete k[W];delete R[z]}delete i[y.id]}function w(y){for(const R in i){const z=i[R];if(z[y.id]===void 0)continue;const k=z[y.id];for(const W in k)h(k[W].object),delete k[W];delete z[y.id]}}function L(){E(),o=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:E,dispose:N,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function yv(e,t,n){let i;function s(l){i=l}function r(l,h){e.drawArrays(i,l,h),n.update(h,i,1)}function o(l,h,u){u!==0&&(e.drawArraysInstanced(i,l,h,u),n.update(h,i,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];n.update(d,i,1)}function c(l,h,u,f){if(u===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(i,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];n.update(g,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Sv(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Hn&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===lo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ti&&i.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mi&&!L)}function c(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),T=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,b=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:N,maxSamples:b}}function Ev(e){const t=this;let n=null,i=0,s=!1,r=!1;const o=new ss,a=new Bt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||s;return s=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){n=h(u,f,0)},this.setState=function(u,f,d){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=e.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const T=r?0:i,S=T*4;let x=p.clippingState||null;c.value=x,x=h(g,f,S,d);for(let N=0;N!==S;++N)x[N]=n[N];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,d,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=d+_*4,T=f.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Tv(e){let t=new WeakMap;function n(o,a){return a===Jc?o.mapping=nr:a===Zc&&(o.mapping=ir),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jc||a===Zc)if(t.has(o)){const c=t.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Ng(c.height);return l.fromEquirectangularTexture(e,o),t.set(o,l),o.addEventListener("dispose",s),n(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class ih extends tp{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ys=4,Hu=[.125,.215,.35,.446,.526,.582],as=20,xc=new ih,Vu=new Lt;let Mc=null,yc=0,Sc=0,Ec=!1;const rs=(1+Math.sqrt(5))/2,Hs=1/rs,Gu=[new C(-rs,Hs,0),new C(rs,Hs,0),new C(-Hs,0,rs),new C(Hs,0,rs),new C(0,rs,-Hs),new C(0,rs,Hs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Wu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,s=100){Mc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mc,yc,Sc),this._renderer.xr.enabled=Ec,t.scissorTest=!1,Xo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===nr||t.mapping===ir?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mc=this._renderer.getRenderTarget(),yc=this._renderer.getActiveCubeFace(),Sc=this._renderer.getActiveMipmapLevel(),Ec=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:lo,format:Hn,colorSpace:xr,depthBuffer:!1},s=Xu(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xu(t,n,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Av(r)),this._blurMaterial=bv(r,t,n)}return s}_compileMaterial(t){const n=new Yt(this._lodPlanes[0],t);this._renderer.compile(n,xc)}_sceneToCubeUV(t,n,i,s){const a=new kn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Vu),h.toneMapping=Gi,h.autoClear=!1;const d=new us({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new Yt(new po,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Vu),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):T===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;Xo(s,T*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===nr||t.mapping===ir;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Xo(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,xc)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Gu[(s-r-1)%Gu.length];this._blur(t,r-1,r,o,a)}n.autoClear=i}_blur(t,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*as-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):as;m>as&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${as}`);const p=[];let T=0;for(let w=0;w<as;++w){const L=w/_,E=Math.exp(-L*L/2);p.push(E),w===0?T+=E:w<m&&(T+=2*E)}for(let w=0;w<p.length;w++)p[w]=p[w]/T;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const x=this._sizeLods[s],N=3*x*(s>S-Ys?s-S+Ys:0),b=4*(this._cubeSize-x);Xo(n,N,b,3*x,2*x),c.setRenderTarget(n),c.render(u,xc)}}function Av(e){const t=[],n=[],i=[];let s=e;const r=e-Ys+1+Hu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);n.push(a);let c=1/a;o>e-Ys?c=Hu[o-e+Ys-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*d),S=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let b=0;b<d;b++){const w=b%3*2/3-1,L=b>2?0:-1,E=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];T.set(E,_*g*b),S.set(f,m*g*b);const y=[b,b,b,b,b,b];x.set(y,p*g*b)}const N=new Ze;N.setAttribute("position",new Gn(T,_)),N.setAttribute("uv",new Gn(S,m)),N.setAttribute("faceIndex",new Gn(x,p)),t.push(N),s>Ys&&s--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Xu(e,t,n){const i=new vs(e,t,n);return i.texture.mapping=Ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function bv(e,t,n){const i=new Float32Array(as),s=new C(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Yu(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function qu(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function wv(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Jc||c===Zc,h=c===nr||c===ir;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Wu(e)),u=l?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(n===null&&(n=new Wu(e)),u=l?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Rv(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=e.getExtension(i)}return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Gr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Cv(e,t,n,i){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],e.ARRAY_BUFFER);const d=u.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],e.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,g=u.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let S=0,x=T.length;S<x;S+=3){const N=T[S+0],b=T[S+1],w=T[S+2];f.push(N,b,b,w,w,N)}}else if(g!==void 0){const T=g.array;_=g.version;for(let S=0,x=T.length/3-1;S<x;S+=3){const N=S+0,b=S+1,w=S+2;f.push(N,b,b,w,w,N)}}else return;const m=new(Yd(f)?$d:Zd)(f,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Pv(e,t,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){e.drawElements(i,d,r,f*o),n.update(d,i,1)}function l(f,d,g){g!==0&&(e.drawElementsInstanced(i,d,r,f*o,g),n.update(d,i,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];n.update(m,i,1)}function u(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)l(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=d[T]*_[T];n.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Lv(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function Iv(e,t,n){const i=new WeakMap,s=new be;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==u){let y=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let N=a.attributes.position.count*x,b=1;N>t.maxTextureSize&&(b=Math.ceil(N/t.maxTextureSize),N=t.maxTextureSize);const w=new Float32Array(N*b*4*u),L=new jd(w,N,b,u);L.type=Mi,L.needsUpdate=!0;const E=x*4;for(let R=0;R<u;R++){const z=p[R],k=T[R],W=S[R],K=N*b*4*R;for(let G=0;G<z.count;G++){const Z=G*E;g===!0&&(s.fromBufferAttribute(z,G),w[K+Z+0]=s.x,w[K+Z+1]=s.y,w[K+Z+2]=s.z,w[K+Z+3]=0),_===!0&&(s.fromBufferAttribute(k,G),w[K+Z+4]=s.x,w[K+Z+5]=s.y,w[K+Z+6]=s.z,w[K+Z+7]=0),m===!0&&(s.fromBufferAttribute(W,G),w[K+Z+8]=s.x,w[K+Z+9]=s.y,w[K+Z+10]=s.z,w[K+Z+11]=W.itemSize===4?s.w:1)}}f={count:u,texture:L,size:new lt(N,b)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(e,"morphTargetBaseInfluence",_),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function Dv(e,t,n,i){let s=new WeakMap;function r(c){const l=i.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:r,dispose:o}}class ip extends en{constructor(t,n,i,s,r,o,a,c,l,h=Js){if(h!==Js&&h!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Js&&(i=_s),i===void 0&&h===rr&&(i=sr),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:Vn,this.minFilter=c!==void 0?c:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const sp=new en,ju=new ip(1,1),rp=new jd,op=new vg,ap=new ep,Ku=[],Ju=[],Zu=new Float32Array(16),$u=new Float32Array(9),Qu=new Float32Array(4);function Sr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=Ku[s];if(r===void 0&&(r=new Float32Array(s),Ku[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function Oe(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Be(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Sa(e,t){let n=Ju[t];n===void 0&&(n=new Int32Array(t),Ju[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function Uv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Nv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2fv(this.addr,t),Be(n,t)}}function Fv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Oe(n,t))return;e.uniform3fv(this.addr,t),Be(n,t)}}function Ov(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4fv(this.addr,t),Be(n,t)}}function Bv(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Be(n,t)}else{if(Oe(n,i))return;Qu.set(i),e.uniformMatrix2fv(this.addr,!1,Qu),Be(n,i)}}function kv(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Be(n,t)}else{if(Oe(n,i))return;$u.set(i),e.uniformMatrix3fv(this.addr,!1,$u),Be(n,i)}}function zv(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(Oe(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Be(n,t)}else{if(Oe(n,i))return;Zu.set(i),e.uniformMatrix4fv(this.addr,!1,Zu),Be(n,i)}}function Hv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Vv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2iv(this.addr,t),Be(n,t)}}function Gv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oe(n,t))return;e.uniform3iv(this.addr,t),Be(n,t)}}function Wv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4iv(this.addr,t),Be(n,t)}}function Xv(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Yv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Oe(n,t))return;e.uniform2uiv(this.addr,t),Be(n,t)}}function qv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Oe(n,t))return;e.uniform3uiv(this.addr,t),Be(n,t)}}function jv(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Oe(n,t))return;e.uniform4uiv(this.addr,t),Be(n,t)}}function Kv(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(ju.compareFunction=Xd,r=ju):r=sp,n.setTexture2D(t||r,s)}function Jv(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||op,s)}function Zv(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||ap,s)}function $v(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||rp,s)}function Qv(e){switch(e){case 5126:return Uv;case 35664:return Nv;case 35665:return Fv;case 35666:return Ov;case 35674:return Bv;case 35675:return kv;case 35676:return zv;case 5124:case 35670:return Hv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return Wv;case 5125:return Xv;case 36294:return Yv;case 36295:return qv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Kv;case 35679:case 36299:case 36307:return Jv;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return $v}}function t2(e,t){e.uniform1fv(this.addr,t)}function e2(e,t){const n=Sr(t,this.size,2);e.uniform2fv(this.addr,n)}function n2(e,t){const n=Sr(t,this.size,3);e.uniform3fv(this.addr,n)}function i2(e,t){const n=Sr(t,this.size,4);e.uniform4fv(this.addr,n)}function s2(e,t){const n=Sr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function r2(e,t){const n=Sr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function o2(e,t){const n=Sr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function a2(e,t){e.uniform1iv(this.addr,t)}function c2(e,t){e.uniform2iv(this.addr,t)}function l2(e,t){e.uniform3iv(this.addr,t)}function h2(e,t){e.uniform4iv(this.addr,t)}function u2(e,t){e.uniform1uiv(this.addr,t)}function f2(e,t){e.uniform2uiv(this.addr,t)}function d2(e,t){e.uniform3uiv(this.addr,t)}function p2(e,t){e.uniform4uiv(this.addr,t)}function m2(e,t,n){const i=this.cache,s=t.length,r=Sa(n,s);Oe(i,r)||(e.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)n.setTexture2D(t[o]||sp,r[o])}function g2(e,t,n){const i=this.cache,s=t.length,r=Sa(n,s);Oe(i,r)||(e.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||op,r[o])}function _2(e,t,n){const i=this.cache,s=t.length,r=Sa(n,s);Oe(i,r)||(e.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||ap,r[o])}function v2(e,t,n){const i=this.cache,s=t.length,r=Sa(n,s);Oe(i,r)||(e.uniform1iv(this.addr,r),Be(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||rp,r[o])}function x2(e){switch(e){case 5126:return t2;case 35664:return e2;case 35665:return n2;case 35666:return i2;case 35674:return s2;case 35675:return r2;case 35676:return o2;case 5124:case 35670:return a2;case 35667:case 35671:return c2;case 35668:case 35672:return l2;case 35669:case 35673:return h2;case 5125:return u2;case 36294:return f2;case 36295:return d2;case 36296:return p2;case 35678:case 36198:case 36298:case 36306:case 35682:return m2;case 35679:case 36299:case 36307:return g2;case 35680:case 36300:case 36308:case 36293:return _2;case 36289:case 36303:case 36311:case 36292:return v2}}class M2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Qv(n.type)}}class y2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=x2(n.type)}}class S2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,n[a.id],i)}}}const Tc=/(\w+)(\])?(\[|\.)?/g;function tf(e,t){e.seq.push(t),e.map[t.id]=t}function E2(e,t,n){const i=e.name,s=i.length;for(Tc.lastIndex=0;;){const r=Tc.exec(i),o=Tc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){tf(n,l===void 0?new M2(a,e,t):new y2(a,e,t));break}else{let u=n.map[a];u===void 0&&(u=new S2(a),tf(n,u)),n=u}}}class ca{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(n,s),o=t.getUniformLocation(n,r.name);E2(r,o,this)}}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in n&&i.push(o)}return i}}function ef(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const T2=37297;let A2=0;function b2(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const nf=new Bt;function w2(e){Jt._getMatrix(nf,Jt.workingColorSpace,e);const t=`mat3( ${nf.elements.map(n=>n.toFixed(4))} )`;switch(Jt.getTransfer(e)){case ya:return[t,"LinearTransferOETF"];case re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function sf(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),s=e.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+b2(e.getShaderSource(t),o)}else return s}function R2(e,t){const n=w2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function C2(e,t){let n;switch(t){case Y0:n="Linear";break;case q0:n="Reinhard";break;case j0:n="Cineon";break;case Id:n="ACESFilmic";break;case J0:n="AgX";break;case Z0:n="Neutral";break;case K0:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yo=new C;function P2(){Jt.getLuminanceCoefficients(Yo);const e=Yo.x.toFixed(4),t=Yo.y.toFixed(4),n=Yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function I2(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function D2(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),o=r.name;let a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Wr(e){return e!==""}function rf(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function of(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U2=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(e){return e.replace(U2,F2)}const N2=new Map;function F2(e,t){let n=zt[t];if(n===void 0){const i=N2.get(t);if(i!==void 0)n=zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bl(n)}const O2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(e){return e.replace(O2,B2)}function B2(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cf(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function k2(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Cd?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Pd?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function z2(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case nr:case ir:t="ENVMAP_TYPE_CUBE";break;case Ma:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H2(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case ir:t="ENVMAP_MODE_REFRACTION";break}return t}function V2(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Ld:t="ENVMAP_BLENDING_MULTIPLY";break;case W0:t="ENVMAP_BLENDING_MIX";break;case X0:t="ENVMAP_BLENDING_ADD";break}return t}function G2(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function W2(e,t,n,i){const s=e.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=k2(n),l=z2(n),h=H2(n),u=V2(n),f=G2(n),d=L2(n),g=I2(r),_=s.createProgram();let m,p,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[cf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[cf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Gi?"#define TONE_MAPPING":"",n.toneMapping!==Gi?zt.tonemapping_pars_fragment:"",n.toneMapping!==Gi?C2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,R2("linearToOutputTexel",n.outputColorSpace),P2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wr).join(`
`)),o=bl(o),o=rf(o,n),o=of(o,n),a=bl(a),a=rf(a,n),a=of(a,n),o=af(o),a=af(a),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Mu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=T+m+o,x=T+p+a,N=ef(s,s.VERTEX_SHADER,S),b=ef(s,s.FRAGMENT_SHADER,x);s.attachShader(_,N),s.attachShader(_,b),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(e.debug.checkShaderErrors){const z=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(N).trim(),W=s.getShaderInfoLog(b).trim();let K=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,N,b);else{const Z=sf(s,N,"vertex"),V=sf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+Z+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||W==="")&&(G=!1);G&&(R.diagnostics={runnable:K,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(N),s.deleteShader(b),L=new ca(s,_),E=D2(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let E;this.getAttributes=function(){return E===void 0&&w(this),E};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=s.getProgramParameter(_,T2)),y},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=A2++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=b,this}let X2=0;class Y2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new q2(t),n.set(t,i)),i}}class q2{constructor(t){this.id=X2++,this.code=t,this.usedTimes=0}}function j2(e,t,n,i,s,r,o){const a=new Kd,c=new Y2,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function m(E,y,R,z,k){const W=z.fog,K=k.geometry,G=E.isMeshStandardMaterial?z.environment:null,Z=(E.isMeshStandardMaterial?n:t).get(E.envMap||G),V=Z&&Z.mapping===Ma?Z.image.height:null,it=g[E.type];E.precision!==null&&(d=s.getMaxPrecision(E.precision),d!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",d,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,bt=ht!==void 0?ht.length:0;let Ht=0;K.morphAttributes.position!==void 0&&(Ht=1),K.morphAttributes.normal!==void 0&&(Ht=2),K.morphAttributes.color!==void 0&&(Ht=3);let ae,Y,tt,yt;if(it){const se=Zn[it];ae=se.vertexShader,Y=se.fragmentShader}else ae=E.vertexShader,Y=E.fragmentShader,c.update(E),tt=c.getVertexShaderID(E),yt=c.getFragmentShaderID(E);const st=e.getRenderTarget(),It=e.state.buffers.depth.getReversed(),Nt=k.isInstancedMesh===!0,Vt=k.isBatchedMesh===!0,_e=!!E.map,jt=!!E.matcap,Re=!!Z,U=!!E.aoMap,An=!!E.lightMap,Gt=!!E.bumpMap,Wt=!!E.normalMap,Ct=!!E.displacementMap,ue=!!E.emissiveMap,Rt=!!E.metalnessMap,A=!!E.roughnessMap,v=E.anisotropy>0,F=E.clearcoat>0,q=E.dispersion>0,J=E.iridescence>0,X=E.sheen>0,Et=E.transmission>0,rt=v&&!!E.anisotropyMap,ut=F&&!!E.clearcoatMap,Kt=F&&!!E.clearcoatNormalMap,$=F&&!!E.clearcoatRoughnessMap,dt=J&&!!E.iridescenceMap,Pt=J&&!!E.iridescenceThicknessMap,Dt=X&&!!E.sheenColorMap,pt=X&&!!E.sheenRoughnessMap,Xt=!!E.specularMap,kt=!!E.specularColorMap,le=!!E.specularIntensityMap,P=Et&&!!E.transmissionMap,nt=Et&&!!E.thicknessMap,H=!!E.gradientMap,j=!!E.alphaMap,ct=E.alphaTest>0,ot=!!E.alphaHash,Ft=!!E.extensions;let Te=Gi;E.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Te=e.toneMapping);const Ye={shaderID:it,shaderType:E.type,shaderName:E.name,vertexShader:ae,fragmentShader:Y,defines:E.defines,customVertexShaderID:tt,customFragmentShaderID:yt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:d,batching:Vt,batchingColor:Vt&&k._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&k.instanceColor!==null,instancingMorph:Nt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?e.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:xr,alphaToCoverage:!!E.alphaToCoverage,map:_e,matcap:jt,envMap:Re,envMapMode:Re&&Z.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:An,bumpMap:Gt,normalMap:Wt,displacementMap:f&&Ct,emissiveMap:ue,normalMapObjectSpace:Wt&&E.normalMapType===eg,normalMapTangentSpace:Wt&&E.normalMapType===Wd,metalnessMap:Rt,roughnessMap:A,anisotropy:v,anisotropyMap:rt,clearcoat:F,clearcoatMap:ut,clearcoatNormalMap:Kt,clearcoatRoughnessMap:$,dispersion:q,iridescence:J,iridescenceMap:dt,iridescenceThicknessMap:Pt,sheen:X,sheenColorMap:Dt,sheenRoughnessMap:pt,specularMap:Xt,specularColorMap:kt,specularIntensityMap:le,transmission:Et,transmissionMap:P,thicknessMap:nt,gradientMap:H,opaque:E.transparent===!1&&E.blending===Ks&&E.alphaToCoverage===!1,alphaMap:j,alphaTest:ct,alphaHash:ot,combine:E.combine,mapUv:_e&&_(E.map.channel),aoMapUv:U&&_(E.aoMap.channel),lightMapUv:An&&_(E.lightMap.channel),bumpMapUv:Gt&&_(E.bumpMap.channel),normalMapUv:Wt&&_(E.normalMap.channel),displacementMapUv:Ct&&_(E.displacementMap.channel),emissiveMapUv:ue&&_(E.emissiveMap.channel),metalnessMapUv:Rt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:rt&&_(E.anisotropyMap.channel),clearcoatMapUv:ut&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(E.sheenRoughnessMap.channel),specularMapUv:Xt&&_(E.specularMap.channel),specularColorMapUv:kt&&_(E.specularColorMap.channel),specularIntensityMapUv:le&&_(E.specularIntensityMap.channel),transmissionMapUv:P&&_(E.transmissionMap.channel),thicknessMapUv:nt&&_(E.thicknessMap.channel),alphaMapUv:j&&_(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Wt||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(_e||j),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:It,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Ht,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&R.length>0,shadowMapType:e.shadowMap.type,toneMapping:Te,decodeVideoTexture:_e&&E.map.isVideoTexture===!0&&Jt.getTransfer(E.map.colorSpace)===re,decodeVideoTextureEmissive:ue&&E.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(E.emissiveMap.colorSpace)===re,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===gn,flipSided:E.side===cn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ft&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&E.extensions.multiDraw===!0||Vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=l.has(1),Ye.vertexUv2s=l.has(2),Ye.vertexUv3s=l.has(3),l.clear(),Ye}function p(E){const y=[];if(E.shaderID?y.push(E.shaderID):(y.push(E.customVertexShaderID),y.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)y.push(R),y.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(T(y,E),S(y,E),y.push(e.outputColorSpace)),y.push(E.customProgramCacheKey),y.join()}function T(E,y){E.push(y.precision),E.push(y.outputColorSpace),E.push(y.envMapMode),E.push(y.envMapCubeUVHeight),E.push(y.mapUv),E.push(y.alphaMapUv),E.push(y.lightMapUv),E.push(y.aoMapUv),E.push(y.bumpMapUv),E.push(y.normalMapUv),E.push(y.displacementMapUv),E.push(y.emissiveMapUv),E.push(y.metalnessMapUv),E.push(y.roughnessMapUv),E.push(y.anisotropyMapUv),E.push(y.clearcoatMapUv),E.push(y.clearcoatNormalMapUv),E.push(y.clearcoatRoughnessMapUv),E.push(y.iridescenceMapUv),E.push(y.iridescenceThicknessMapUv),E.push(y.sheenColorMapUv),E.push(y.sheenRoughnessMapUv),E.push(y.specularMapUv),E.push(y.specularColorMapUv),E.push(y.specularIntensityMapUv),E.push(y.transmissionMapUv),E.push(y.thicknessMapUv),E.push(y.combine),E.push(y.fogExp2),E.push(y.sizeAttenuation),E.push(y.morphTargetsCount),E.push(y.morphAttributeCount),E.push(y.numDirLights),E.push(y.numPointLights),E.push(y.numSpotLights),E.push(y.numSpotLightMaps),E.push(y.numHemiLights),E.push(y.numRectAreaLights),E.push(y.numDirLightShadows),E.push(y.numPointLightShadows),E.push(y.numSpotLightShadows),E.push(y.numSpotLightShadowsWithMaps),E.push(y.numLightProbes),E.push(y.shadowMapType),E.push(y.toneMapping),E.push(y.numClippingPlanes),E.push(y.numClipIntersection),E.push(y.depthPacking)}function S(E,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){const y=g[E.type];let R;if(y){const z=Zn[y];R=Lg.clone(z.uniforms)}else R=E.uniforms;return R}function N(E,y){let R;for(let z=0,k=h.length;z<k;z++){const W=h[z];if(W.cacheKey===y){R=W,++R.usedTimes;break}}return R===void 0&&(R=new W2(e,y,E,r),h.push(R)),R}function b(E){if(--E.usedTimes===0){const y=h.indexOf(E);h[y]=h[h.length-1],h.pop(),E.destroy()}}function w(E){c.remove(E)}function L(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:N,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:L}}function K2(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,c){e.get(o)[a]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function J2(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function lf(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function hf(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(u,f,d,g,_,m){let p=e[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},e[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):n.push(p)}function c(u,f,d,g,_,m){const p=o(u,f,d,g,_,m);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):n.unshift(p)}function l(u,f){n.length>1&&n.sort(u||J2),i.length>1&&i.sort(f||lf),s.length>1&&s.sort(f||lf)}function h(){for(let u=t,f=e.length;u<f;u++){const d=e[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Z2(){let e=new WeakMap;function t(i,s){const r=e.get(i);let o;return r===void 0?(o=new hf,e.set(i,[o])):s>=r.length?(o=new hf,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function $2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new C,color:new Lt};break;case"SpotLight":n={position:new C,direction:new C,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new C,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new C,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":n={color:new Lt,position:new C,halfWidth:new C,halfHeight:new C};break}return e[t.id]=n,n}}}function Q2(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let tx=0;function ex(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function nx(e){const t=new $2,n=Q2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new C);const s=new C,r=new Se,o=new Se;function a(l){let h=0,u=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,T=0,S=0,x=0,N=0,b=0,w=0;l.sort(ex);for(let E=0,y=l.length;E<y;E++){const R=l[E],z=R.color,k=R.intensity,W=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,u+=z.g*k,f+=z.b*k;else if(R.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(R.sh.coefficients[G],k);w++}else if(R.isDirectionalLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,V=n.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=R.shadow.matrix,T++}i.directional[d]=G,d++}else if(R.isSpotLight){const G=t.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(z).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,i.spot[_]=G;const Z=R.shadow;if(R.map&&(i.spotLightMap[N]=R.map,N++,Z.updateMatrices(R),R.castShadow&&b++),i.spotLightMatrix[_]=Z.matrix,R.castShadow){const V=n.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[_]=V,i.spotShadowMap[_]=K,x++}_++}else if(R.isRectAreaLight){const G=t.get(R);G.color.copy(z).multiplyScalar(k),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=G,m++}else if(R.isPointLight){const G=t.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){const Z=R.shadow,V=n.get(R);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=G,g++}else if(R.isHemisphereLight){const G=t.get(R);G.skyColor.copy(R.color).multiplyScalar(k),G.groundColor.copy(R.groundColor).multiplyScalar(k),i.hemi[p]=G,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=et.LTC_FLOAT_1,i.rectAreaLTC2=et.LTC_FLOAT_2):(i.rectAreaLTC1=et.LTC_HALF_1,i.rectAreaLTC2=et.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==d||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==S||L.numSpotShadows!==x||L.numSpotMaps!==N||L.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=x+N-b,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=w,L.directionalLength=d,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=S,L.numSpotShadows=x,L.numSpotMaps=N,L.numLightProbes=w,i.version=tx++)}function c(l,h){let u=0,f=0,d=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,T=l.length;p<T;p++){const S=l[p];if(S.isDirectionalLight){const x=i.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(S.isSpotLight){const x=i.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=i.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:i}}function uf(e){const t=new nx(e),n=[],i=[];function s(h){l.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function o(h){i.push(h)}function a(){t.setup(n)}function c(h){t.setupView(n,h)}const l={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ix(e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new uf(e),t.set(s,[a])):r>=o.length?(a=new uf(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class sx extends fo{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Q0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class rx extends fo{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
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
}`;function cx(e,t,n){let i=new nh;const s=new lt,r=new lt,o=new be,a=new sx({depthPacking:tg}),c=new rx,l={},h=n.maxTextureSize,u={[Xi]:cn,[cn]:Xi,[gn]:gn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:ox,fragmentShader:ax}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ze;g.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cd;let p=this.type;this.render=function(b,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const E=e.getRenderTarget(),y=e.getActiveCubeFace(),R=e.getActiveMipmapLevel(),z=e.state;z.setBlending(Vi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==_i&&this.type===_i,W=p===_i&&this.type!==_i;for(let K=0,G=b.length;K<G;K++){const Z=b[K],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||k===!0||W===!0){const bt=this.type!==_i?{minFilter:Vn,magFilter:Vn}:{};V.map!==null&&V.map.dispose(),V.map=new vs(s.x,s.y,bt),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}e.setRenderTarget(V.map),e.clear();const ht=V.getViewportCount();for(let bt=0;bt<ht;bt++){const Ht=V.getViewport(bt);o.set(r.x*Ht.x,r.y*Ht.y,r.x*Ht.z,r.y*Ht.w),z.viewport(o),V.updateMatrices(Z,bt),i=V.getFrustum(),x(w,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&T(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(E,y,R)};function T(b,w){const L=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vs(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,e.setRenderTarget(b.mapPass),e.clear(),e.renderBufferDirect(w,null,L,f,_,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,e.setRenderTarget(b.map),e.clear(),e.renderBufferDirect(w,null,L,d,_,null)}function S(b,w,L,E){let y=null;const R=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)y=R;else if(y=L.isPointLight===!0?c:a,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=y.uuid,k=w.uuid;let W=l[z];W===void 0&&(W={},l[z]=W);let K=W[k];K===void 0&&(K=y.clone(),W[k]=K,w.addEventListener("dispose",N)),y=K}if(y.visible=w.visible,y.wireframe=w.wireframe,E===_i?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:u[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const z=e.properties.get(y);z.light=L}return y}function x(b,w,L,E,y){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===_i)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const k=t.update(b),W=b.material;if(Array.isArray(W)){const K=k.groups;for(let G=0,Z=K.length;G<Z;G++){const V=K[G],it=W[V.materialIndex];if(it&&it.visible){const ht=S(b,it,E,y);b.onBeforeShadow(e,b,w,L,k,ht,V),e.renderBufferDirect(L,null,k,ht,b,V),b.onAfterShadow(e,b,w,L,k,ht,V)}}}else if(W.visible){const K=S(b,W,E,y);b.onBeforeShadow(e,b,w,L,k,K,null),e.renderBufferDirect(L,null,k,K,b,null),b.onAfterShadow(e,b,w,L,k,K,null)}}const z=b.children;for(let k=0,W=z.length;k<W;k++)x(z[k],w,L,E,y)}function N(b){b.target.removeEventListener("dispose",N);for(const L in l){const E=l[L],y=b.target.uuid;y in E&&(E[y].dispose(),delete E[y])}}}const lx={[Gc]:Wc,[Xc]:jc,[Yc]:Kc,[er]:qc,[Wc]:Gc,[jc]:Xc,[Kc]:Yc,[qc]:er};function hx(e,t){function n(){let P=!1;const nt=new be;let H=null;const j=new be(0,0,0,0);return{setMask:function(ct){H!==ct&&!P&&(e.colorMask(ct,ct,ct,ct),H=ct)},setLocked:function(ct){P=ct},setClear:function(ct,ot,Ft,Te,Ye){Ye===!0&&(ct*=Te,ot*=Te,Ft*=Te),nt.set(ct,ot,Ft,Te),j.equals(nt)===!1&&(e.clearColor(ct,ot,Ft,Te),j.copy(nt))},reset:function(){P=!1,H=null,j.set(-1,0,0,0)}}}function i(){let P=!1,nt=!1,H=null,j=null,ct=null;return{setReversed:function(ot){if(nt!==ot){const Ft=t.get("EXT_clip_control");nt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const Te=ct;ct=null,this.setClear(Te)}nt=ot},getReversed:function(){return nt},setTest:function(ot){ot?st(e.DEPTH_TEST):It(e.DEPTH_TEST)},setMask:function(ot){H!==ot&&!P&&(e.depthMask(ot),H=ot)},setFunc:function(ot){if(nt&&(ot=lx[ot]),j!==ot){switch(ot){case Gc:e.depthFunc(e.NEVER);break;case Wc:e.depthFunc(e.ALWAYS);break;case Xc:e.depthFunc(e.LESS);break;case er:e.depthFunc(e.LEQUAL);break;case Yc:e.depthFunc(e.EQUAL);break;case qc:e.depthFunc(e.GEQUAL);break;case jc:e.depthFunc(e.GREATER);break;case Kc:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}j=ot}},setLocked:function(ot){P=ot},setClear:function(ot){ct!==ot&&(nt&&(ot=1-ot),e.clearDepth(ot),ct=ot)},reset:function(){P=!1,H=null,j=null,ct=null,nt=!1}}}function s(){let P=!1,nt=null,H=null,j=null,ct=null,ot=null,Ft=null,Te=null,Ye=null;return{setTest:function(se){P||(se?st(e.STENCIL_TEST):It(e.STENCIL_TEST))},setMask:function(se){nt!==se&&!P&&(e.stencilMask(se),nt=se)},setFunc:function(se,Un,hi){(H!==se||j!==Un||ct!==hi)&&(e.stencilFunc(se,Un,hi),H=se,j=Un,ct=hi)},setOp:function(se,Un,hi){(ot!==se||Ft!==Un||Te!==hi)&&(e.stencilOp(se,Un,hi),ot=se,Ft=Un,Te=hi)},setLocked:function(se){P=se},setClear:function(se){Ye!==se&&(e.clearStencil(se),Ye=se)},reset:function(){P=!1,nt=null,H=null,j=null,ct=null,ot=null,Ft=null,Te=null,Ye=null}}}const r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,S=null,x=null,N=null,b=null,w=new Lt(0,0,0),L=0,E=!1,y=null,R=null,z=null,k=null,W=null;const K=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Z=0;const V=e.getParameter(e.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Z>=2);let it=null,ht={};const bt=e.getParameter(e.SCISSOR_BOX),Ht=e.getParameter(e.VIEWPORT),ae=new be().fromArray(bt),Y=new be().fromArray(Ht);function tt(P,nt,H,j){const ct=new Uint8Array(4),ot=e.createTexture();e.bindTexture(P,ot),e.texParameteri(P,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(P,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ft=0;Ft<H;Ft++)P===e.TEXTURE_3D||P===e.TEXTURE_2D_ARRAY?e.texImage3D(nt,0,e.RGBA,1,1,j,0,e.RGBA,e.UNSIGNED_BYTE,ct):e.texImage2D(nt+Ft,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,ct);return ot}const yt={};yt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),yt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),yt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(e.DEPTH_TEST),o.setFunc(er),Gt(!1),Wt(pu),st(e.CULL_FACE),U(Vi);function st(P){h[P]!==!0&&(e.enable(P),h[P]=!0)}function It(P){h[P]!==!1&&(e.disable(P),h[P]=!1)}function Nt(P,nt){return u[P]!==nt?(e.bindFramebuffer(P,nt),u[P]=nt,P===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=nt),P===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=nt),!0):!1}function Vt(P,nt){let H=d,j=!1;if(P){H=f.get(nt),H===void 0&&(H=[],f.set(nt,H));const ct=P.textures;if(H.length!==ct.length||H[0]!==e.COLOR_ATTACHMENT0){for(let ot=0,Ft=ct.length;ot<Ft;ot++)H[ot]=e.COLOR_ATTACHMENT0+ot;H.length=ct.length,j=!0}}else H[0]!==e.BACK&&(H[0]=e.BACK,j=!0);j&&e.drawBuffers(H)}function _e(P){return g!==P?(e.useProgram(P),g=P,!0):!1}const jt={[os]:e.FUNC_ADD,[w0]:e.FUNC_SUBTRACT,[R0]:e.FUNC_REVERSE_SUBTRACT};jt[C0]=e.MIN,jt[P0]=e.MAX;const Re={[L0]:e.ZERO,[I0]:e.ONE,[D0]:e.SRC_COLOR,[Hc]:e.SRC_ALPHA,[k0]:e.SRC_ALPHA_SATURATE,[O0]:e.DST_COLOR,[N0]:e.DST_ALPHA,[U0]:e.ONE_MINUS_SRC_COLOR,[Vc]:e.ONE_MINUS_SRC_ALPHA,[B0]:e.ONE_MINUS_DST_COLOR,[F0]:e.ONE_MINUS_DST_ALPHA,[z0]:e.CONSTANT_COLOR,[H0]:e.ONE_MINUS_CONSTANT_COLOR,[V0]:e.CONSTANT_ALPHA,[G0]:e.ONE_MINUS_CONSTANT_ALPHA};function U(P,nt,H,j,ct,ot,Ft,Te,Ye,se){if(P===Vi){_===!0&&(It(e.BLEND),_=!1);return}if(_===!1&&(st(e.BLEND),_=!0),P!==b0){if(P!==m||se!==E){if((p!==os||x!==os)&&(e.blendEquation(e.FUNC_ADD),p=os,x=os),se)switch(P){case Ks:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mu:e.blendFunc(e.ONE,e.ONE);break;case gu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _u:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ks:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mu:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case gu:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case _u:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}T=null,S=null,N=null,b=null,w.set(0,0,0),L=0,m=P,E=se}return}ct=ct||nt,ot=ot||H,Ft=Ft||j,(nt!==p||ct!==x)&&(e.blendEquationSeparate(jt[nt],jt[ct]),p=nt,x=ct),(H!==T||j!==S||ot!==N||Ft!==b)&&(e.blendFuncSeparate(Re[H],Re[j],Re[ot],Re[Ft]),T=H,S=j,N=ot,b=Ft),(Te.equals(w)===!1||Ye!==L)&&(e.blendColor(Te.r,Te.g,Te.b,Ye),w.copy(Te),L=Ye),m=P,E=!1}function An(P,nt){P.side===gn?It(e.CULL_FACE):st(e.CULL_FACE);let H=P.side===cn;nt&&(H=!H),Gt(H),P.blending===Ks&&P.transparent===!1?U(Vi):U(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),o.setFunc(P.depthFunc),o.setTest(P.depthTest),o.setMask(P.depthWrite),r.setMask(P.colorWrite);const j=P.stencilWrite;a.setTest(j),j&&(a.setMask(P.stencilWriteMask),a.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),a.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ue(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?st(e.SAMPLE_ALPHA_TO_COVERAGE):It(e.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(P){y!==P&&(P?e.frontFace(e.CW):e.frontFace(e.CCW),y=P)}function Wt(P){P!==T0?(st(e.CULL_FACE),P!==R&&(P===pu?e.cullFace(e.BACK):P===A0?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):It(e.CULL_FACE),R=P}function Ct(P){P!==z&&(G&&e.lineWidth(P),z=P)}function ue(P,nt,H){P?(st(e.POLYGON_OFFSET_FILL),(k!==nt||W!==H)&&(e.polygonOffset(nt,H),k=nt,W=H)):It(e.POLYGON_OFFSET_FILL)}function Rt(P){P?st(e.SCISSOR_TEST):It(e.SCISSOR_TEST)}function A(P){P===void 0&&(P=e.TEXTURE0+K-1),it!==P&&(e.activeTexture(P),it=P)}function v(P,nt,H){H===void 0&&(it===null?H=e.TEXTURE0+K-1:H=it);let j=ht[H];j===void 0&&(j={type:void 0,texture:void 0},ht[H]=j),(j.type!==P||j.texture!==nt)&&(it!==H&&(e.activeTexture(H),it=H),e.bindTexture(P,nt||yt[P]),j.type=P,j.texture=nt)}function F(){const P=ht[it];P!==void 0&&P.type!==void 0&&(e.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function q(){try{e.compressedTexImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{e.compressedTexImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function X(){try{e.texSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Et(){try{e.texSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ut(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Kt(){try{e.texStorage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function $(){try{e.texStorage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function dt(){try{e.texImage2D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Pt(){try{e.texImage3D.apply(e,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Dt(P){ae.equals(P)===!1&&(e.scissor(P.x,P.y,P.z,P.w),ae.copy(P))}function pt(P){Y.equals(P)===!1&&(e.viewport(P.x,P.y,P.z,P.w),Y.copy(P))}function Xt(P,nt){let H=l.get(nt);H===void 0&&(H=new WeakMap,l.set(nt,H));let j=H.get(P);j===void 0&&(j=e.getUniformBlockIndex(nt,P.name),H.set(P,j))}function kt(P,nt){const j=l.get(nt).get(P);c.get(nt)!==j&&(e.uniformBlockBinding(nt,j,P.__bindingPointIndex),c.set(nt,j))}function le(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),h={},it=null,ht={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,T=null,S=null,x=null,N=null,b=null,w=new Lt(0,0,0),L=0,E=!1,y=null,R=null,z=null,k=null,W=null,ae.set(0,0,e.canvas.width,e.canvas.height),Y.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:It,bindFramebuffer:Nt,drawBuffers:Vt,useProgram:_e,setBlending:U,setMaterial:An,setFlipSided:Gt,setCullFace:Wt,setLineWidth:Ct,setPolygonOffset:ue,setScissorTest:Rt,activeTexture:A,bindTexture:v,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:dt,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:kt,texStorage2D:Kt,texStorage3D:$,texSubImage2D:X,texSubImage3D:Et,compressedTexSubImage2D:rt,compressedTexSubImage3D:ut,scissor:Dt,viewport:pt,reset:le}}function ff(e,t,n,i){const s=ux(i);switch(n){case Od:return e*t;case kd:return e*t;case zd:return e*t*2;case Hd:return e*t/s.components*s.byteLength;case $l:return e*t/s.components*s.byteLength;case Vd:return e*t*2/s.components*s.byteLength;case Ql:return e*t*2/s.components*s.byteLength;case Bd:return e*t*3/s.components*s.byteLength;case Hn:return e*t*4/s.components*s.byteLength;case th:return e*t*4/s.components*s.byteLength;case ia:case sa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ra:case oa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tl:case nl:return Math.max(e,16)*Math.max(t,8)/4;case Qc:case el:return Math.max(e,8)*Math.max(t,8)/2;case il:case sl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case rl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ol:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case al:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case cl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ll:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case hl:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ul:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case fl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case dl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case pl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ml:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case gl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case _l:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case vl:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case xl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case aa:case Ml:case yl:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Gd:case Sl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case El:case Tl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ux(e){switch(e){case Ti:case Ud:return{byteLength:1,components:1};case to:case Nd:case lo:return{byteLength:2,components:1};case Jl:case Zl:return{byteLength:2,components:4};case _s:case Kl:case Mi:return{byteLength:4,components:1};case Fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function fx(e,t,n,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return d?new OffscreenCanvas(A,v):fa("canvas")}function _(A,v,F){let q=1;const J=Rt(A);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor(q*J.width),Et=Math.floor(q*J.height);u===void 0&&(u=g(X,Et));const rt=v?g(X,Et):u;return rt.width=X,rt.height=Et,rt.getContext("2d").drawImage(A,0,0,X,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Et+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){e.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(A,v,F,q,J=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=v;if(v===e.RED&&(F===e.FLOAT&&(X=e.R32F),F===e.HALF_FLOAT&&(X=e.R16F),F===e.UNSIGNED_BYTE&&(X=e.R8)),v===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.R8UI),F===e.UNSIGNED_SHORT&&(X=e.R16UI),F===e.UNSIGNED_INT&&(X=e.R32UI),F===e.BYTE&&(X=e.R8I),F===e.SHORT&&(X=e.R16I),F===e.INT&&(X=e.R32I)),v===e.RG&&(F===e.FLOAT&&(X=e.RG32F),F===e.HALF_FLOAT&&(X=e.RG16F),F===e.UNSIGNED_BYTE&&(X=e.RG8)),v===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.RG8UI),F===e.UNSIGNED_SHORT&&(X=e.RG16UI),F===e.UNSIGNED_INT&&(X=e.RG32UI),F===e.BYTE&&(X=e.RG8I),F===e.SHORT&&(X=e.RG16I),F===e.INT&&(X=e.RG32I)),v===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.RGB8UI),F===e.UNSIGNED_SHORT&&(X=e.RGB16UI),F===e.UNSIGNED_INT&&(X=e.RGB32UI),F===e.BYTE&&(X=e.RGB8I),F===e.SHORT&&(X=e.RGB16I),F===e.INT&&(X=e.RGB32I)),v===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(X=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(X=e.RGBA16UI),F===e.UNSIGNED_INT&&(X=e.RGBA32UI),F===e.BYTE&&(X=e.RGBA8I),F===e.SHORT&&(X=e.RGBA16I),F===e.INT&&(X=e.RGBA32I)),v===e.RGB&&F===e.UNSIGNED_INT_5_9_9_9_REV&&(X=e.RGB9_E5),v===e.RGBA){const Et=J?ya:Jt.getTransfer(q);F===e.FLOAT&&(X=e.RGBA32F),F===e.HALF_FLOAT&&(X=e.RGBA16F),F===e.UNSIGNED_BYTE&&(X=Et===re?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT_4_4_4_4&&(X=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(X=e.RGB5_A1)}return(X===e.R16F||X===e.R32F||X===e.RG16F||X===e.RG32F||X===e.RGBA16F||X===e.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(A,v){let F;return A?v===null||v===_s||v===sr?F=e.DEPTH24_STENCIL8:v===Mi?F=e.DEPTH32F_STENCIL8:v===to&&(F=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===_s||v===sr?F=e.DEPTH_COMPONENT24:v===Mi?F=e.DEPTH_COMPONENT32F:v===to&&(F=e.DEPTH_COMPONENT16),F}function N(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vn&&A.minFilter!==$n?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function b(A){const v=A.target;v.removeEventListener("dispose",b),L(v),v.isVideoTexture&&h.delete(v)}function w(A){const v=A.target;v.removeEventListener("dispose",w),y(v)}function L(A){const v=i.get(A);if(v.__webglInit===void 0)return;const F=A.source,q=f.get(F);if(q){const J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(A),Object.keys(q).length===0&&f.delete(F)}i.remove(A)}function E(A){const v=i.get(A);e.deleteTexture(v.__webglTexture);const F=A.source,q=f.get(F);delete q[v.__cacheKey],o.memory.textures--}function y(A){const v=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)e.deleteFramebuffer(v.__webglFramebuffer[q][J]);else e.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)e.deleteFramebuffer(v.__webglFramebuffer[q]);else e.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&e.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&e.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&e.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const F=A.textures;for(let q=0,J=F.length;q<J;q++){const X=i.get(F[q]);X.__webglTexture&&(e.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(A)}let R=0;function z(){R=0}function k(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function W(A){const v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function K(A,v){const F=i.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const q=A.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(F,A,v);return}}n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+v)}function G(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,v);return}n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+v)}function Z(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Y(F,A,v);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+v)}function V(A,v){const F=i.get(A);if(A.version>0&&F.__version!==A.version){tt(F,A,v);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+v)}const it={[Qr]:e.REPEAT,[xi]:e.CLAMP_TO_EDGE,[$c]:e.MIRRORED_REPEAT},ht={[Vn]:e.NEAREST,[$0]:e.NEAREST_MIPMAP_NEAREST,[bo]:e.NEAREST_MIPMAP_LINEAR,[$n]:e.LINEAR,[Ja]:e.LINEAR_MIPMAP_NEAREST,[cs]:e.LINEAR_MIPMAP_LINEAR},bt={[ng]:e.NEVER,[cg]:e.ALWAYS,[ig]:e.LESS,[Xd]:e.LEQUAL,[sg]:e.EQUAL,[ag]:e.GEQUAL,[rg]:e.GREATER,[og]:e.NOTEQUAL};function Ht(A,v){if(v.type===Mi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===$n||v.magFilter===Ja||v.magFilter===bo||v.magFilter===cs||v.minFilter===$n||v.minFilter===Ja||v.minFilter===bo||v.minFilter===cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,it[v.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,it[v.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,it[v.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,ht[v.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,bt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Vn||v.minFilter!==bo&&v.minFilter!==cs||v.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ae(A,v){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",b));const q=v.source;let J=f.get(q);J===void 0&&(J={},f.set(q,J));const X=W(v);if(X!==A.__cacheKey){J[X]===void 0&&(J[X]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[X].usedTimes++;const Et=J[A.__cacheKey];Et!==void 0&&(J[A.__cacheKey].usedTimes--,Et.usedTimes===0&&E(v)),A.__cacheKey=X,A.__webglTexture=J[X].texture}return F}function Y(A,v,F){let q=e.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=e.TEXTURE_3D);const J=ae(A,v),X=v.source;n.bindTexture(q,A.__webglTexture,e.TEXTURE0+F);const Et=i.get(X);if(X.version!==Et.__version||J===!0){n.activeTexture(e.TEXTURE0+F);const rt=Jt.getPrimaries(Jt.workingColorSpace),ut=v.colorSpace===zi?null:Jt.getPrimaries(v.colorSpace),Kt=v.colorSpace===zi||rt===ut?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let $=_(v.image,!1,s.maxTextureSize);$=ue(v,$);const dt=r.convert(v.format,v.colorSpace),Pt=r.convert(v.type);let Dt=S(v.internalFormat,dt,Pt,v.colorSpace,v.isVideoTexture);Ht(q,v);let pt;const Xt=v.mipmaps,kt=v.isVideoTexture!==!0,le=Et.__version===void 0||J===!0,P=X.dataReady,nt=N(v,$);if(v.isDepthTexture)Dt=x(v.format===rr,v.type),le&&(kt?n.texStorage2D(e.TEXTURE_2D,1,Dt,$.width,$.height):n.texImage2D(e.TEXTURE_2D,0,Dt,$.width,$.height,0,dt,Pt,null));else if(v.isDataTexture)if(Xt.length>0){kt&&le&&n.texStorage2D(e.TEXTURE_2D,nt,Dt,Xt[0].width,Xt[0].height);for(let H=0,j=Xt.length;H<j;H++)pt=Xt[H],kt?P&&n.texSubImage2D(e.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,Pt,pt.data):n.texImage2D(e.TEXTURE_2D,H,Dt,pt.width,pt.height,0,dt,Pt,pt.data);v.generateMipmaps=!1}else kt?(le&&n.texStorage2D(e.TEXTURE_2D,nt,Dt,$.width,$.height),P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,$.width,$.height,dt,Pt,$.data)):n.texImage2D(e.TEXTURE_2D,0,Dt,$.width,$.height,0,dt,Pt,$.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){kt&&le&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,Dt,Xt[0].width,Xt[0].height,$.depth);for(let H=0,j=Xt.length;H<j;H++)if(pt=Xt[H],v.format!==Hn)if(dt!==null)if(kt){if(P)if(v.layerUpdates.size>0){const ct=ff(pt.width,pt.height,v.format,v.type);for(const ot of v.layerUpdates){const Ft=pt.data.subarray(ot*ct/pt.data.BYTES_PER_ELEMENT,(ot+1)*ct/pt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,H,0,0,ot,pt.width,pt.height,1,dt,Ft)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,$.depth,dt,pt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,H,Dt,pt.width,pt.height,$.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?P&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,H,0,0,0,pt.width,pt.height,$.depth,dt,Pt,pt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,H,Dt,pt.width,pt.height,$.depth,0,dt,Pt,pt.data)}else{kt&&le&&n.texStorage2D(e.TEXTURE_2D,nt,Dt,Xt[0].width,Xt[0].height);for(let H=0,j=Xt.length;H<j;H++)pt=Xt[H],v.format!==Hn?dt!==null?kt?P&&n.compressedTexSubImage2D(e.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,pt.data):n.compressedTexImage2D(e.TEXTURE_2D,H,Dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?P&&n.texSubImage2D(e.TEXTURE_2D,H,0,0,pt.width,pt.height,dt,Pt,pt.data):n.texImage2D(e.TEXTURE_2D,H,Dt,pt.width,pt.height,0,dt,Pt,pt.data)}else if(v.isDataArrayTexture)if(kt){if(le&&n.texStorage3D(e.TEXTURE_2D_ARRAY,nt,Dt,$.width,$.height,$.depth),P)if(v.layerUpdates.size>0){const H=ff($.width,$.height,v.format,v.type);for(const j of v.layerUpdates){const ct=$.data.subarray(j*H/$.data.BYTES_PER_ELEMENT,(j+1)*H/$.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,j,$.width,$.height,1,dt,Pt,ct)}v.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,Pt,$.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Dt,$.width,$.height,$.depth,0,dt,Pt,$.data);else if(v.isData3DTexture)kt?(le&&n.texStorage3D(e.TEXTURE_3D,nt,Dt,$.width,$.height,$.depth),P&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,Pt,$.data)):n.texImage3D(e.TEXTURE_3D,0,Dt,$.width,$.height,$.depth,0,dt,Pt,$.data);else if(v.isFramebufferTexture){if(le)if(kt)n.texStorage2D(e.TEXTURE_2D,nt,Dt,$.width,$.height);else{let H=$.width,j=$.height;for(let ct=0;ct<nt;ct++)n.texImage2D(e.TEXTURE_2D,ct,Dt,H,j,0,dt,Pt,null),H>>=1,j>>=1}}else if(Xt.length>0){if(kt&&le){const H=Rt(Xt[0]);n.texStorage2D(e.TEXTURE_2D,nt,Dt,H.width,H.height)}for(let H=0,j=Xt.length;H<j;H++)pt=Xt[H],kt?P&&n.texSubImage2D(e.TEXTURE_2D,H,0,0,dt,Pt,pt):n.texImage2D(e.TEXTURE_2D,H,Dt,dt,Pt,pt);v.generateMipmaps=!1}else if(kt){if(le){const H=Rt($);n.texStorage2D(e.TEXTURE_2D,nt,Dt,H.width,H.height)}P&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,dt,Pt,$)}else n.texImage2D(e.TEXTURE_2D,0,Dt,dt,Pt,$);m(v)&&p(q),Et.__version=X.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function tt(A,v,F){if(v.image.length!==6)return;const q=ae(A,v),J=v.source;n.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+F);const X=i.get(J);if(J.version!==X.__version||q===!0){n.activeTexture(e.TEXTURE0+F);const Et=Jt.getPrimaries(Jt.workingColorSpace),rt=v.colorSpace===zi?null:Jt.getPrimaries(v.colorSpace),ut=v.colorSpace===zi||Et===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);const Kt=v.isCompressedTexture||v.image[0].isCompressedTexture,$=v.image[0]&&v.image[0].isDataTexture,dt=[];for(let j=0;j<6;j++)!Kt&&!$?dt[j]=_(v.image[j],!0,s.maxCubemapSize):dt[j]=$?v.image[j].image:v.image[j],dt[j]=ue(v,dt[j]);const Pt=dt[0],Dt=r.convert(v.format,v.colorSpace),pt=r.convert(v.type),Xt=S(v.internalFormat,Dt,pt,v.colorSpace),kt=v.isVideoTexture!==!0,le=X.__version===void 0||q===!0,P=J.dataReady;let nt=N(v,Pt);Ht(e.TEXTURE_CUBE_MAP,v);let H;if(Kt){kt&&le&&n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Xt,Pt.width,Pt.height);for(let j=0;j<6;j++){H=dt[j].mipmaps;for(let ct=0;ct<H.length;ct++){const ot=H[ct];v.format!==Hn?Dt!==null?kt?P&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,Dt,ot.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Xt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,0,0,ot.width,ot.height,Dt,pt,ot.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct,Xt,ot.width,ot.height,0,Dt,pt,ot.data)}}}else{if(H=v.mipmaps,kt&&le){H.length>0&&nt++;const j=Rt(dt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,nt,Xt,j.width,j.height)}for(let j=0;j<6;j++)if($){kt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,dt[j].width,dt[j].height,Dt,pt,dt[j].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xt,dt[j].width,dt[j].height,0,Dt,pt,dt[j].data);for(let ct=0;ct<H.length;ct++){const Ft=H[ct].image[j].image;kt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Ft.width,Ft.height,Dt,pt,Ft.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Xt,Ft.width,Ft.height,0,Dt,pt,Ft.data)}}else{kt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Dt,pt,dt[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Xt,Dt,pt,dt[j]);for(let ct=0;ct<H.length;ct++){const ot=H[ct];kt?P&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,0,0,Dt,pt,ot.image[j]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+j,ct+1,Xt,Dt,pt,ot.image[j])}}}m(v)&&p(e.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function yt(A,v,F,q,J,X){const Et=r.convert(F.format,F.colorSpace),rt=r.convert(F.type),ut=S(F.internalFormat,Et,rt,F.colorSpace),Kt=i.get(v),$=i.get(F);if($.__renderTarget=v,!Kt.__hasExternalTextures){const dt=Math.max(1,v.width>>X),Pt=Math.max(1,v.height>>X);J===e.TEXTURE_3D||J===e.TEXTURE_2D_ARRAY?n.texImage3D(J,X,ut,dt,Pt,v.depth,0,Et,rt,null):n.texImage2D(J,X,ut,dt,Pt,0,Et,rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,A),Wt(v)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,J,$.__webglTexture,0,Gt(v)):(J===e.TEXTURE_2D||J>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,J,$.__webglTexture,X),n.bindFramebuffer(e.FRAMEBUFFER,null)}function st(A,v,F){if(e.bindRenderbuffer(e.RENDERBUFFER,A),v.depthBuffer){const q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,X=x(v.stencilBuffer,J),Et=v.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=Gt(v);Wt(v)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt,X,v.width,v.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,X,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,X,v.width,v.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Et,e.RENDERBUFFER,A)}else{const q=v.textures;for(let J=0;J<q.length;J++){const X=q[J],Et=r.convert(X.format,X.colorSpace),rt=r.convert(X.type),ut=S(X.internalFormat,Et,rt,X.colorSpace),Kt=Gt(v);F&&Wt(v)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Kt,ut,v.width,v.height):Wt(v)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Kt,ut,v.width,v.height):e.renderbufferStorage(e.RENDERBUFFER,ut,v.width,v.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function It(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const J=q.__webglTexture,X=Gt(v);if(v.depthTexture.format===Js)Wt(v)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,J,0);else if(v.depthTexture.format===rr)Wt(v)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0,X):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const v=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");It(v.__webglFramebuffer,A)}else if(F){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=e.createRenderbuffer(),st(v.__webglDepthbuffer[q],A,!1);else{const J=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,X),e.framebufferRenderbuffer(e.FRAMEBUFFER,J,e.RENDERBUFFER,X)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=e.createRenderbuffer(),st(v.__webglDepthbuffer,A,!1);else{const q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,J=v.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,J),e.framebufferRenderbuffer(e.FRAMEBUFFER,q,e.RENDERBUFFER,J)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function Vt(A,v,F){const q=i.get(A);v!==void 0&&yt(q.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&Nt(A)}function _e(A){const v=A.texture,F=i.get(A),q=i.get(v);A.addEventListener("dispose",w);const J=A.textures,X=A.isWebGLCubeRenderTarget===!0,Et=J.length>1;if(Et||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=v.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[rt]=[];for(let ut=0;ut<v.mipmaps.length;ut++)F.__webglFramebuffer[rt][ut]=e.createFramebuffer()}else F.__webglFramebuffer[rt]=e.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let rt=0;rt<v.mipmaps.length;rt++)F.__webglFramebuffer[rt]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(Et)for(let rt=0,ut=J.length;rt<ut;rt++){const Kt=i.get(J[rt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=e.createTexture(),o.memory.textures++)}if(A.samples>0&&Wt(A)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let rt=0;rt<J.length;rt++){const ut=J[rt];F.__webglColorRenderbuffer[rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[rt]);const Kt=r.convert(ut.format,ut.colorSpace),$=r.convert(ut.type),dt=S(ut.internalFormat,Kt,$,ut.colorSpace,A.isXRRenderTarget===!0),Pt=Gt(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,Pt,dt,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,F.__webglColorRenderbuffer[rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),st(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(X){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),Ht(e.TEXTURE_CUBE_MAP,v);for(let rt=0;rt<6;rt++)if(v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)yt(F.__webglFramebuffer[rt][ut],A,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ut);else yt(F.__webglFramebuffer[rt],A,v,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(v)&&p(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Et){for(let rt=0,ut=J.length;rt<ut;rt++){const Kt=J[rt],$=i.get(Kt);n.bindTexture(e.TEXTURE_2D,$.__webglTexture),Ht(e.TEXTURE_2D,Kt),yt(F.__webglFramebuffer,A,Kt,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,0),m(Kt)&&p(e.TEXTURE_2D)}n.unbindTexture()}else{let rt=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,q.__webglTexture),Ht(rt,v),v.mipmaps&&v.mipmaps.length>0)for(let ut=0;ut<v.mipmaps.length;ut++)yt(F.__webglFramebuffer[ut],A,v,e.COLOR_ATTACHMENT0,rt,ut);else yt(F.__webglFramebuffer,A,v,e.COLOR_ATTACHMENT0,rt,0);m(v)&&p(rt),n.unbindTexture()}A.depthBuffer&&Nt(A)}function jt(A){const v=A.textures;for(let F=0,q=v.length;F<q;F++){const J=v[F];if(m(J)){const X=T(A),Et=i.get(J).__webglTexture;n.bindTexture(X,Et),p(X),n.unbindTexture()}}}const Re=[],U=[];function An(A){if(A.samples>0){if(Wt(A)===!1){const v=A.textures,F=A.width,q=A.height;let J=e.COLOR_BUFFER_BIT;const X=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Et=i.get(A),rt=v.length>1;if(rt)for(let ut=0;ut<v.length;ut++)n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let ut=0;ut<v.length;ut++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=e.STENCIL_BUFFER_BIT)),rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Et.__webglColorRenderbuffer[ut]);const Kt=i.get(v[ut]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Kt,0)}e.blitFramebuffer(0,0,F,q,0,0,F,q,J,e.NEAREST),c===!0&&(Re.length=0,U.length=0,Re.push(e.COLOR_ATTACHMENT0+ut),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Re.push(X),U.push(X),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,U)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Re))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),rt)for(let ut=0;ut<v.length;ut++){n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.RENDERBUFFER,Et.__webglColorRenderbuffer[ut]);const Kt=i.get(v[ut]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,Et.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ut,e.TEXTURE_2D,Kt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const v=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[v])}}}function Gt(A){return Math.min(s.maxSamples,A.samples)}function Wt(A){const v=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ct(A){const v=o.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function ue(A,v){const F=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==xr&&F!==zi&&(Jt.getTransfer(F)===re?(q!==Hn||J!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),v}function Rt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Vt,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Wt}function dx(e,t){function n(i,s=zi){let r;const o=Jt.getTransfer(s);if(i===Ti)return e.UNSIGNED_BYTE;if(i===Jl)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Zl)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Fd)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Ud)return e.BYTE;if(i===Nd)return e.SHORT;if(i===to)return e.UNSIGNED_SHORT;if(i===Kl)return e.INT;if(i===_s)return e.UNSIGNED_INT;if(i===Mi)return e.FLOAT;if(i===lo)return e.HALF_FLOAT;if(i===Od)return e.ALPHA;if(i===Bd)return e.RGB;if(i===Hn)return e.RGBA;if(i===kd)return e.LUMINANCE;if(i===zd)return e.LUMINANCE_ALPHA;if(i===Js)return e.DEPTH_COMPONENT;if(i===rr)return e.DEPTH_STENCIL;if(i===Hd)return e.RED;if(i===$l)return e.RED_INTEGER;if(i===Vd)return e.RG;if(i===Ql)return e.RG_INTEGER;if(i===th)return e.RGBA_INTEGER;if(i===ia||i===sa||i===ra||i===oa)if(o===re)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ia)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ia)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qc||i===tl||i===el||i===nl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===sl||i===rl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===il||i===sl)return o===re?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===rl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ol||i===al||i===cl||i===ll||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===_l||i===vl||i===xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ol)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===al)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===cl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ll)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_l)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xl)return o===re?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===aa||i===Ml||i===yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===aa)return o===re?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gd||i===Sl||i===El||i===Tl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===aa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===sr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class px extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Si extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mx={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mx)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Si;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`;class vx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const s=new en,r=t.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Yi({vertexShader:gx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Yt(new Es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xx extends Mr{constructor(t,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null;const _=new vx,m=n.getContextAttributes();let p=null,T=null;const S=[],x=[],N=new lt;let b=null;const w=new kn;w.viewport=new be;const L=new kn;L.viewport=new be;const E=[w,L],y=new px;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Ac,S[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Ac,S[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=S[Y];return tt===void 0&&(tt=new Ac,S[Y]=tt),tt.getHandSpace()};function k(Y){const tt=x.indexOf(Y.inputSource);if(tt===-1)return;const yt=S[tt];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,l||o),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){const tt=x[Y];tt!==null&&(x[Y]=null,S[Y].disconnect(tt))}R=null,z=null,_.reset(),t.setRenderTarget(p),d=null,f=null,u=null,s=null,T=null,ae.stop(),i.isPresenting=!1,t.setPixelRatio(b),t.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",W),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,n,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new vs(d.framebufferWidth,d.framebufferHeight,{format:Hn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,yt=null,st=null;m.depth&&(st=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=m.stencil?rr:Js,yt=m.stencil?sr:_s);const It={colorFormat:n.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(s,n),f=u.createProjectionLayer(It),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),T=new vs(f.textureWidth,f.textureHeight,{format:Hn,type:Ti,depthTexture:new ip(f.textureWidth,f.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ae.setContext(s),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let tt=0;tt<Y.removed.length;tt++){const yt=Y.removed[tt],st=x.indexOf(yt);st>=0&&(x[st]=null,S[st].disconnect(yt))}for(let tt=0;tt<Y.added.length;tt++){const yt=Y.added[tt];let st=x.indexOf(yt);if(st===-1){for(let Nt=0;Nt<S.length;Nt++)if(Nt>=x.length){x.push(yt),st=Nt;break}else if(x[Nt]===null){x[Nt]=yt,st=Nt;break}if(st===-1)break}const It=S[st];It&&It.connect(yt)}}const G=new C,Z=new C;function V(Y,tt,yt){G.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(yt.matrixWorld);const st=G.distanceTo(Z),It=tt.projectionMatrix.elements,Nt=yt.projectionMatrix.elements,Vt=It[14]/(It[10]-1),_e=It[14]/(It[10]+1),jt=(It[9]+1)/It[5],Re=(It[9]-1)/It[5],U=(It[8]-1)/It[0],An=(Nt[8]+1)/Nt[0],Gt=Vt*U,Wt=Vt*An,Ct=st/(-U+An),ue=Ct*-U;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ue),Y.translateZ(Ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),It[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const Rt=Vt+Ct,A=_e+Ct,v=Gt-ue,F=Wt+(st-ue),q=jt*_e/A*Rt,J=Re*_e/A*Rt;Y.projectionMatrix.makePerspective(v,F,q,J,Rt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,yt=Y.far;_.texture!==null&&(_.depthNear>0&&(tt=_.depthNear),_.depthFar>0&&(yt=_.depthFar)),y.near=L.near=w.near=tt,y.far=L.far=w.far=yt,(R!==y.near||z!==y.far)&&(s.updateRenderState({depthNear:y.near,depthFar:y.far}),R=y.near,z=y.far),w.layers.mask=Y.layers.mask|2,L.layers.mask=Y.layers.mask|4,y.layers.mask=w.layers.mask|L.layers.mask;const st=Y.parent,It=y.cameras;it(y,st);for(let Nt=0;Nt<It.length;Nt++)it(It[Nt],st);It.length===2?V(y,w,L):y.projectionMatrix.copy(w.projectionMatrix),ht(Y,y,st)};function ht(Y,tt,yt){yt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Al*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(y)};let bt=null;function Ht(Y,tt){if(h=tt.getViewerPose(l||o),g=tt,h!==null){const yt=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let st=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,st=!0);for(let Nt=0;Nt<yt.length;Nt++){const Vt=yt[Nt];let _e=null;if(d!==null)_e=d.getViewport(Vt);else{const Re=u.getViewSubImage(f,Vt);_e=Re.viewport,Nt===0&&(t.setRenderTargetTextures(T,Re.colorTexture,f.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(T))}let jt=E[Nt];jt===void 0&&(jt=new kn,jt.layers.enable(Nt),jt.viewport=new be,E[Nt]=jt),jt.matrix.fromArray(Vt.transform.matrix),jt.matrix.decompose(jt.position,jt.quaternion,jt.scale),jt.projectionMatrix.fromArray(Vt.projectionMatrix),jt.projectionMatrixInverse.copy(jt.projectionMatrix).invert(),jt.viewport.set(_e.x,_e.y,_e.width,_e.height),Nt===0&&(y.matrix.copy(jt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),st===!0&&y.cameras.push(jt)}const It=s.enabledFeatures;if(It&&It.includes("depth-sensing")){const Nt=u.getDepthInformation(yt[0]);Nt&&Nt.isValid&&Nt.texture&&_.init(t,Nt,s.renderState)}}for(let yt=0;yt<S.length;yt++){const st=x[yt],It=S[yt];st!==null&&It!==void 0&&It.update(st,tt,l||o)}bt&&bt(Y,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}const ae=new np;ae.setAnimationLoop(Ht),this.setAnimationLoop=function(Y){bt=Y},this.dispose=function(){}}}const ns=new ni,Mx=new Se;function yx(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qd(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,T,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=t.get(p),S=T.envMap,x=T.envMapRotation;S&&(m.envMap.value=S,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(ns)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sx(e,t,n,i){let s={},r={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,S){const x=S.program;i.uniformBlockBinding(T,x)}function l(T,S){let x=s[T.id];x===void 0&&(g(T),x=h(T),s[T.id]=x,T.addEventListener("dispose",m));const N=S.program;i.updateUBOMapping(T,N);const b=t.render.frame;r[T.id]!==b&&(f(T),r[T.id]=b)}function h(T){const S=u();T.__bindingPointIndex=S;const x=e.createBuffer(),N=T.__size,b=T.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,N,b),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,x),x}function u(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(T){const S=s[T.id],x=T.uniforms,N=T.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let b=0,w=x.length;b<w;b++){const L=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,y=L.length;E<y;E++){const R=L[E];if(d(R,b,E,N)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let K=0;K<k.length;K++){const G=k[K],Z=_(G);typeof G=="number"||typeof G=="boolean"?(R.__data[0]=G,e.bufferSubData(e.UNIFORM_BUFFER,z+W,R.__data)):G.isMatrix3?(R.__data[0]=G.elements[0],R.__data[1]=G.elements[1],R.__data[2]=G.elements[2],R.__data[3]=0,R.__data[4]=G.elements[3],R.__data[5]=G.elements[4],R.__data[6]=G.elements[5],R.__data[7]=0,R.__data[8]=G.elements[6],R.__data[9]=G.elements[7],R.__data[10]=G.elements[8],R.__data[11]=0):(G.toArray(R.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,z,R.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function d(T,S,x,N){const b=T.value,w=S+"_"+x;if(N[w]===void 0)return typeof b=="number"||typeof b=="boolean"?N[w]=b:N[w]=b.clone(),!0;{const L=N[w];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return N[w]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function g(T){const S=T.uniforms;let x=0;const N=16;for(let w=0,L=S.length;w<L;w++){const E=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,R=E.length;y<R;y++){const z=E[y],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,K=k.length;W<K;W++){const G=k[W],Z=_(G),V=x%N,it=V%Z.boundary,ht=V+it;x+=it,ht!==0&&N-ht<Z.storage&&(x+=N-ht),z.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=Z.storage}}}const b=x%N;return b>0&&(x+=N-b),T.__size=x,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),e.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const T in s)e.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Ex{constructor(t={}){const{canvas:n=hg(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=an,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let N=!1,b=0,w=0,L=null,E=-1,y=null;const R=new be,z=new be;let k=null;const W=new Lt(0);let K=0,G=n.width,Z=n.height,V=1,it=null,ht=null;const bt=new be(0,0,G,Z),Ht=new be(0,0,G,Z);let ae=!1;const Y=new nh;let tt=!1,yt=!1;const st=new Se,It=new Se,Nt=new C,Vt=new be,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let jt=!1;function Re(){return L===null?V:1}let U=i;function An(M,I){return n.getContext(M,I)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jl}`),n.addEventListener("webglcontextlost",j,!1),n.addEventListener("webglcontextrestored",ct,!1),n.addEventListener("webglcontextcreationerror",ot,!1),U===null){const I="webgl2";if(U=An(I,M),U===null)throw An(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Gt,Wt,Ct,ue,Rt,A,v,F,q,J,X,Et,rt,ut,Kt,$,dt,Pt,Dt,pt,Xt,kt,le,P;function nt(){Gt=new Rv(U),Gt.init(),kt=new dx(U,Gt),Wt=new Sv(U,Gt,t,kt),Ct=new hx(U,Gt),Wt.reverseDepthBuffer&&f&&Ct.buffers.depth.setReversed(!0),ue=new Lv(U),Rt=new K2,A=new fx(U,Gt,Ct,Rt,Wt,kt,ue),v=new Tv(x),F=new wv(x),q=new Bg(U),le=new Mv(U,q),J=new Cv(U,q,ue,le),X=new Dv(U,J,q,ue),Dt=new Iv(U,Wt,A),$=new Ev(Rt),Et=new j2(x,v,F,Gt,Wt,le,$),rt=new yx(x,Rt),ut=new Z2,Kt=new ix(Gt),Pt=new xv(x,v,F,Ct,X,d,c),dt=new cx(x,X,Wt),P=new Sx(U,ue,Wt,Ct),pt=new yv(U,Gt,ue),Xt=new Pv(U,Gt,ue),ue.programs=Et.programs,x.capabilities=Wt,x.extensions=Gt,x.properties=Rt,x.renderLists=ut,x.shadowMap=dt,x.state=Ct,x.info=ue}nt();const H=new xx(x,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const M=Gt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Gt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(G,Z,!1))},this.getSize=function(M){return M.set(G,Z)},this.setSize=function(M,I,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,Z=I,n.width=Math.floor(M*V),n.height=Math.floor(I*V),O===!0&&(n.style.width=M+"px",n.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(G*V,Z*V).floor()},this.setDrawingBufferSize=function(M,I,O){G=M,Z=I,V=O,n.width=Math.floor(M*O),n.height=Math.floor(I*O),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(R)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,I,O,B){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,I,O,B),Ct.viewport(R.copy(bt).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Ht)},this.setScissor=function(M,I,O,B){M.isVector4?Ht.set(M.x,M.y,M.z,M.w):Ht.set(M,I,O,B),Ct.scissor(z.copy(Ht).multiplyScalar(V).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(M){Ct.setScissorTest(ae=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){ht=M},this.getClearColor=function(M){return M.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(M=!0,I=!0,O=!0){let B=0;if(M){let D=!1;if(L!==null){const Q=L.texture.format;D=Q===th||Q===Ql||Q===$l}if(D){const Q=L.texture.type,at=Q===Ti||Q===_s||Q===to||Q===sr||Q===Jl||Q===Zl,gt=Pt.getClearColor(),_t=Pt.getClearAlpha(),Ut=gt.r,Ot=gt.g,vt=gt.b;at?(g[0]=Ut,g[1]=Ot,g[2]=vt,g[3]=_t,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ut,_[1]=Ot,_[2]=vt,_[3]=_t,U.clearBufferiv(U.COLOR,0,_))}else B|=U.COLOR_BUFFER_BIT}I&&(B|=U.DEPTH_BUFFER_BIT),O&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",j,!1),n.removeEventListener("webglcontextrestored",ct,!1),n.removeEventListener("webglcontextcreationerror",ot,!1),ut.dispose(),Kt.dispose(),Rt.dispose(),v.dispose(),F.dispose(),X.dispose(),le.dispose(),P.dispose(),Et.dispose(),H.dispose(),H.removeEventListener("sessionstart",ou),H.removeEventListener("sessionend",au),Ji.stop()};function j(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const M=ue.autoReset,I=dt.enabled,O=dt.autoUpdate,B=dt.needsUpdate,D=dt.type;nt(),ue.autoReset=M,dt.enabled=I,dt.autoUpdate=O,dt.needsUpdate=B,dt.type=D}function ot(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ft(M){const I=M.target;I.removeEventListener("dispose",Ft),Te(I)}function Te(M){Ye(M),Rt.remove(M)}function Ye(M){const I=Rt.get(M).programs;I!==void 0&&(I.forEach(function(O){Et.releaseProgram(O)}),M.isShaderMaterial&&Et.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,O,B,D,Q){I===null&&(I=_e);const at=D.isMesh&&D.matrixWorld.determinant()<0,gt=y0(M,I,O,B,D);Ct.setMaterial(B,at);let _t=O.index,Ut=1;if(B.wireframe===!0){if(_t=J.getWireframeAttribute(O),_t===void 0)return;Ut=2}const Ot=O.drawRange,vt=O.attributes.position;let $t=Ot.start*Ut,he=(Ot.start+Ot.count)*Ut;Q!==null&&($t=Math.max($t,Q.start*Ut),he=Math.min(he,(Q.start+Q.count)*Ut)),_t!==null?($t=Math.max($t,0),he=Math.min(he,_t.count)):vt!=null&&($t=Math.max($t,0),he=Math.min(he,vt.count));const fe=he-$t;if(fe<0||fe===1/0)return;le.setup(D,B,gt,O,_t);let nn,ne=pt;if(_t!==null&&(nn=q.get(_t),ne=Xt,ne.setIndex(nn)),D.isMesh)B.wireframe===!0?(Ct.setLineWidth(B.wireframeLinewidth*Re()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(D.isLine){let Tt=B.linewidth;Tt===void 0&&(Tt=1),Ct.setLineWidth(Tt*Re()),D.isLineSegments?ne.setMode(U.LINES):D.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else D.isPoints?ne.setMode(U.POINTS):D.isSprite&&ne.setMode(U.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)ne.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))ne.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const Tt=D._multiDrawStarts,ui=D._multiDrawCounts,ie=D._multiDrawCount,Nn=_t?q.get(_t).bytesPerElement:1,ws=Rt.get(B).currentProgram.getUniforms();for(let hn=0;hn<ie;hn++)ws.setValue(U,"_gl_DrawID",hn),ne.render(Tt[hn]/Nn,ui[hn])}else if(D.isInstancedMesh)ne.renderInstances($t,fe,D.count);else if(O.isInstancedBufferGeometry){const Tt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ui=Math.min(O.instanceCount,Tt);ne.renderInstances($t,fe,ui)}else ne.render($t,fe)};function se(M,I,O){M.transparent===!0&&M.side===gn&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,Ao(M,I,O),M.side=Xi,M.needsUpdate=!0,Ao(M,I,O),M.side=gn):Ao(M,I,O)}this.compile=function(M,I,O=null){O===null&&(O=M),p=Kt.get(O),p.init(I),S.push(p),O.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),M!==O&&M.traverseVisible(function(D){D.isLight&&D.layers.test(I.layers)&&(p.pushLight(D),D.castShadow&&p.pushShadow(D))}),p.setupLights();const B=new Set;return M.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const Q=D.material;if(Q)if(Array.isArray(Q))for(let at=0;at<Q.length;at++){const gt=Q[at];se(gt,O,D),B.add(gt)}else se(Q,O,D),B.add(Q)}),S.pop(),p=null,B},this.compileAsync=function(M,I,O=null){const B=this.compile(M,I,O);return new Promise(D=>{function Q(){if(B.forEach(function(at){Rt.get(at).currentProgram.isReady()&&B.delete(at)}),B.size===0){D(M);return}setTimeout(Q,10)}Gt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Un=null;function hi(M){Un&&Un(M)}function ou(){Ji.stop()}function au(){Ji.start()}const Ji=new np;Ji.setAnimationLoop(hi),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(M){Un=M,H.setAnimationLoop(M),M===null?Ji.stop():Ji.start()},H.addEventListener("sessionstart",ou),H.addEventListener("sessionend",au),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(I),I=H.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,I,L),p=Kt.get(M,S.length),p.init(I),S.push(p),It.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Y.setFromProjectionMatrix(It),yt=this.localClippingEnabled,tt=$.init(this.clippingPlanes,yt),m=ut.get(M,T.length),m.init(),T.push(m),H.enabled===!0&&H.isPresenting===!0){const Q=x.xr.getDepthSensingMesh();Q!==null&&Ka(Q,I,-1/0,x.sortObjects)}Ka(M,I,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(it,ht),jt=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,jt&&Pt.addToRenderList(m,M),this.info.render.frame++,tt===!0&&$.beginShadows();const O=p.state.shadowsArray;dt.render(O,M,I),tt===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,D=m.transmissive;if(p.setupLights(),I.isArrayCamera){const Q=I.cameras;if(D.length>0)for(let at=0,gt=Q.length;at<gt;at++){const _t=Q[at];lu(B,D,M,_t)}jt&&Pt.render(M);for(let at=0,gt=Q.length;at<gt;at++){const _t=Q[at];cu(m,M,_t,_t.viewport)}}else D.length>0&&lu(B,D,M,I),jt&&Pt.render(M),cu(m,M,I);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),M.isScene===!0&&M.onAfterRender(x,M,I),le.resetDefaultState(),E=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],tt===!0&&$.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function Ka(M,I,O,B){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)O=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Y.intersectsSprite(M)){B&&Vt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(It);const at=X.update(M),gt=M.material;gt.visible&&m.push(M,at,gt,O,Vt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Y.intersectsObject(M))){const at=X.update(M),gt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Vt.copy(M.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Vt.copy(at.boundingSphere.center)),Vt.applyMatrix4(M.matrixWorld).applyMatrix4(It)),Array.isArray(gt)){const _t=at.groups;for(let Ut=0,Ot=_t.length;Ut<Ot;Ut++){const vt=_t[Ut],$t=gt[vt.materialIndex];$t&&$t.visible&&m.push(M,at,$t,O,Vt.z,vt)}}else gt.visible&&m.push(M,at,gt,O,Vt.z,null)}}const Q=M.children;for(let at=0,gt=Q.length;at<gt;at++)Ka(Q[at],I,O,B)}function cu(M,I,O,B){const D=M.opaque,Q=M.transmissive,at=M.transparent;p.setupLightsView(O),tt===!0&&$.setGlobalState(x.clippingPlanes,O),B&&Ct.viewport(R.copy(B)),D.length>0&&To(D,I,O),Q.length>0&&To(Q,I,O),at.length>0&&To(at,I,O),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function lu(M,I,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[B.id]===void 0&&(p.state.transmissionRenderTarget[B.id]=new vs(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?lo:Ti,minFilter:cs,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const Q=p.state.transmissionRenderTarget[B.id],at=B.viewport||R;Q.setSize(at.z,at.w);const gt=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(W),K=x.getClearAlpha(),K<1&&x.setClearColor(16777215,.5),x.clear(),jt&&Pt.render(O);const _t=x.toneMapping;x.toneMapping=Gi;const Ut=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),p.setupLightsView(B),tt===!0&&$.setGlobalState(x.clippingPlanes,B),To(M,O,B),A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let vt=0,$t=I.length;vt<$t;vt++){const he=I[vt],fe=he.object,nn=he.geometry,ne=he.material,Tt=he.group;if(ne.side===gn&&fe.layers.test(B.layers)){const ui=ne.side;ne.side=cn,ne.needsUpdate=!0,hu(fe,O,B,nn,ne,Tt),ne.side=ui,ne.needsUpdate=!0,Ot=!0}}Ot===!0&&(A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q))}x.setRenderTarget(gt),x.setClearColor(W,K),Ut!==void 0&&(B.viewport=Ut),x.toneMapping=_t}function To(M,I,O){const B=I.isScene===!0?I.overrideMaterial:null;for(let D=0,Q=M.length;D<Q;D++){const at=M[D],gt=at.object,_t=at.geometry,Ut=B===null?at.material:B,Ot=at.group;gt.layers.test(O.layers)&&hu(gt,I,O,_t,Ut,Ot)}}function hu(M,I,O,B,D,Q){M.onBeforeRender(x,I,O,B,D,Q),M.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),D.onBeforeRender(x,I,O,B,M,Q),D.transparent===!0&&D.side===gn&&D.forceSinglePass===!1?(D.side=cn,D.needsUpdate=!0,x.renderBufferDirect(O,I,B,D,M,Q),D.side=Xi,D.needsUpdate=!0,x.renderBufferDirect(O,I,B,D,M,Q),D.side=gn):x.renderBufferDirect(O,I,B,D,M,Q),M.onAfterRender(x,I,O,B,D,Q)}function Ao(M,I,O){I.isScene!==!0&&(I=_e);const B=Rt.get(M),D=p.state.lights,Q=p.state.shadowsArray,at=D.state.version,gt=Et.getParameters(M,D.state,Q,I,O),_t=Et.getProgramCacheKey(gt);let Ut=B.programs;B.environment=M.isMeshStandardMaterial?I.environment:null,B.fog=I.fog,B.envMap=(M.isMeshStandardMaterial?F:v).get(M.envMap||B.environment),B.envMapRotation=B.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Ft),Ut=new Map,B.programs=Ut);let Ot=Ut.get(_t);if(Ot!==void 0){if(B.currentProgram===Ot&&B.lightsStateVersion===at)return fu(M,gt),Ot}else gt.uniforms=Et.getUniforms(M),M.onBeforeCompile(gt,x),Ot=Et.acquireProgram(gt,_t),Ut.set(_t,Ot),B.uniforms=gt.uniforms;const vt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(vt.clippingPlanes=$.uniform),fu(M,gt),B.needsLights=E0(M),B.lightsStateVersion=at,B.needsLights&&(vt.ambientLightColor.value=D.state.ambient,vt.lightProbe.value=D.state.probe,vt.directionalLights.value=D.state.directional,vt.directionalLightShadows.value=D.state.directionalShadow,vt.spotLights.value=D.state.spot,vt.spotLightShadows.value=D.state.spotShadow,vt.rectAreaLights.value=D.state.rectArea,vt.ltc_1.value=D.state.rectAreaLTC1,vt.ltc_2.value=D.state.rectAreaLTC2,vt.pointLights.value=D.state.point,vt.pointLightShadows.value=D.state.pointShadow,vt.hemisphereLights.value=D.state.hemi,vt.directionalShadowMap.value=D.state.directionalShadowMap,vt.directionalShadowMatrix.value=D.state.directionalShadowMatrix,vt.spotShadowMap.value=D.state.spotShadowMap,vt.spotLightMatrix.value=D.state.spotLightMatrix,vt.spotLightMap.value=D.state.spotLightMap,vt.pointShadowMap.value=D.state.pointShadowMap,vt.pointShadowMatrix.value=D.state.pointShadowMatrix),B.currentProgram=Ot,B.uniformsList=null,Ot}function uu(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=ca.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function fu(M,I){const O=Rt.get(M);O.outputColorSpace=I.outputColorSpace,O.batching=I.batching,O.batchingColor=I.batchingColor,O.instancing=I.instancing,O.instancingColor=I.instancingColor,O.instancingMorph=I.instancingMorph,O.skinning=I.skinning,O.morphTargets=I.morphTargets,O.morphNormals=I.morphNormals,O.morphColors=I.morphColors,O.morphTargetsCount=I.morphTargetsCount,O.numClippingPlanes=I.numClippingPlanes,O.numIntersection=I.numClipIntersection,O.vertexAlphas=I.vertexAlphas,O.vertexTangents=I.vertexTangents,O.toneMapping=I.toneMapping}function y0(M,I,O,B,D){I.isScene!==!0&&(I=_e),A.resetTextureUnits();const Q=I.fog,at=B.isMeshStandardMaterial?I.environment:null,gt=L===null?x.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:xr,_t=(B.isMeshStandardMaterial?F:v).get(B.envMap||at),Ut=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ot=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),vt=!!O.morphAttributes.position,$t=!!O.morphAttributes.normal,he=!!O.morphAttributes.color;let fe=Gi;B.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(fe=x.toneMapping);const nn=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=nn!==void 0?nn.length:0,Tt=Rt.get(B),ui=p.state.lights;if(tt===!0&&(yt===!0||M!==y)){const bn=M===y&&B.id===E;$.setState(B,M,bn)}let ie=!1;B.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ui.state.version||Tt.outputColorSpace!==gt||D.isBatchedMesh&&Tt.batching===!1||!D.isBatchedMesh&&Tt.batching===!0||D.isBatchedMesh&&Tt.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&Tt.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&Tt.instancing===!1||!D.isInstancedMesh&&Tt.instancing===!0||D.isSkinnedMesh&&Tt.skinning===!1||!D.isSkinnedMesh&&Tt.skinning===!0||D.isInstancedMesh&&Tt.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&Tt.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&Tt.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&Tt.instancingMorph===!1&&D.morphTexture!==null||Tt.envMap!==_t||B.fog===!0&&Tt.fog!==Q||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==$.numPlanes||Tt.numIntersection!==$.numIntersection)||Tt.vertexAlphas!==Ut||Tt.vertexTangents!==Ot||Tt.morphTargets!==vt||Tt.morphNormals!==$t||Tt.morphColors!==he||Tt.toneMapping!==fe||Tt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Tt.__version=B.version);let Nn=Tt.currentProgram;ie===!0&&(Nn=Ao(B,I,D));let ws=!1,hn=!1,Nr=!1;const de=Nn.getUniforms(),jn=Tt.uniforms;if(Ct.useProgram(Nn.program)&&(ws=!0,hn=!0,Nr=!0),B.id!==E&&(E=B.id,hn=!0),ws||y!==M){Ct.buffers.depth.getReversed()?(st.copy(M.projectionMatrix),fg(st),dg(st),de.setValue(U,"projectionMatrix",st)):de.setValue(U,"projectionMatrix",M.projectionMatrix),de.setValue(U,"viewMatrix",M.matrixWorldInverse);const Ci=de.map.cameraPosition;Ci!==void 0&&Ci.setValue(U,Nt.setFromMatrixPosition(M.matrixWorld)),Wt.logarithmicDepthBuffer&&de.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&de.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,hn=!0,Nr=!0)}if(D.isSkinnedMesh){de.setOptional(U,D,"bindMatrix"),de.setOptional(U,D,"bindMatrixInverse");const bn=D.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),de.setValue(U,"boneTexture",bn.boneTexture,A))}D.isBatchedMesh&&(de.setOptional(U,D,"batchingTexture"),de.setValue(U,"batchingTexture",D._matricesTexture,A),de.setOptional(U,D,"batchingIdTexture"),de.setValue(U,"batchingIdTexture",D._indirectTexture,A),de.setOptional(U,D,"batchingColorTexture"),D._colorsTexture!==null&&de.setValue(U,"batchingColorTexture",D._colorsTexture,A));const Fr=O.morphAttributes;if((Fr.position!==void 0||Fr.normal!==void 0||Fr.color!==void 0)&&Dt.update(D,O,Nn),(hn||Tt.receiveShadow!==D.receiveShadow)&&(Tt.receiveShadow=D.receiveShadow,de.setValue(U,"receiveShadow",D.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(jn.envMap.value=_t,jn.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&I.environment!==null&&(jn.envMapIntensity.value=I.environmentIntensity),hn&&(de.setValue(U,"toneMappingExposure",x.toneMappingExposure),Tt.needsLights&&S0(jn,Nr),Q&&B.fog===!0&&rt.refreshFogUniforms(jn,Q),rt.refreshMaterialUniforms(jn,B,V,Z,p.state.transmissionRenderTarget[M.id]),ca.upload(U,uu(Tt),jn,A)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ca.upload(U,uu(Tt),jn,A),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&de.setValue(U,"center",D.center),de.setValue(U,"modelViewMatrix",D.modelViewMatrix),de.setValue(U,"normalMatrix",D.normalMatrix),de.setValue(U,"modelMatrix",D.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const bn=B.uniformsGroups;for(let Ci=0,Pi=bn.length;Ci<Pi;Ci++){const du=bn[Ci];P.update(du,Nn),P.bind(du,Nn)}}return Nn}function S0(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function E0(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(M,I,O){Rt.get(M.texture).__webglTexture=I,Rt.get(M.depthTexture).__webglTexture=O;const B=Rt.get(M);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=O===void 0,B.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const O=Rt.get(M);O.__webglFramebuffer=I,O.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,O=0){L=M,b=I,w=O;let B=!0,D=null,Q=!1,at=!1;if(M){const _t=Rt.get(M);if(_t.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(_t.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if(_t.__hasExternalTextures)A.rebindTextures(M,Rt.get(M.texture).__webglTexture,Rt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const vt=M.depthTexture;if(_t.__boundDepthTexture!==vt){if(vt!==null&&Rt.has(vt)&&(M.width!==vt.image.width||M.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(at=!0);const Ot=Rt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[I])?D=Ot[I][O]:D=Ot[I],Q=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?D=Rt.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?D=Ot[O]:D=Ot,R.copy(M.viewport),z.copy(M.scissor),k=M.scissorTest}else R.copy(bt).multiplyScalar(V).floor(),z.copy(Ht).multiplyScalar(V).floor(),k=ae;if(Ct.bindFramebuffer(U.FRAMEBUFFER,D)&&B&&Ct.drawBuffers(M,D),Ct.viewport(R),Ct.scissor(z),Ct.setScissorTest(k),Q){const _t=Rt.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,O)}else if(at){const _t=Rt.get(M.texture),Ut=I||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,_t.__webglTexture,O||0,Ut)}E=-1},this.readRenderTargetPixels=function(M,I,O,B,D,Q,at){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&at!==void 0&&(gt=gt[at]),gt){Ct.bindFramebuffer(U.FRAMEBUFFER,gt);try{const _t=M.texture,Ut=_t.format,Ot=_t.type;if(!Wt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-B&&O>=0&&O<=M.height-D&&U.readPixels(I,O,B,D,kt.convert(Ut),kt.convert(Ot),Q)}finally{const _t=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(M,I,O,B,D,Q,at){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=Rt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&at!==void 0&&(gt=gt[at]),gt){const _t=M.texture,Ut=_t.format,Ot=_t.type;if(!Wt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-B&&O>=0&&O<=M.height-D){Ct.bindFramebuffer(U.FRAMEBUFFER,gt);const vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.bufferData(U.PIXEL_PACK_BUFFER,Q.byteLength,U.STREAM_READ),U.readPixels(I,O,B,D,kt.convert(Ut),kt.convert(Ot),0);const $t=L!==null?Rt.get(L).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,$t);const he=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ug(U,he,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Q),U.deleteBuffer(vt),U.deleteSync(he),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,O=0){M.isTexture!==!0&&(Gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const B=Math.pow(2,-O),D=Math.floor(M.image.width*B),Q=Math.floor(M.image.height*B),at=I!==null?I.x:0,gt=I!==null?I.y:0;A.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,O,0,0,at,gt,D,Q),Ct.unbindTexture()},this.copyTextureToTexture=function(M,I,O=null,B=null,D=0){M.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1],I=arguments[2],D=arguments[3]||0,O=null);let Q,at,gt,_t,Ut,Ot,vt,$t,he;const fe=M.isCompressedTexture?M.mipmaps[D]:M.image;O!==null?(Q=O.max.x-O.min.x,at=O.max.y-O.min.y,gt=O.isBox3?O.max.z-O.min.z:1,_t=O.min.x,Ut=O.min.y,Ot=O.isBox3?O.min.z:0):(Q=fe.width,at=fe.height,gt=fe.depth||1,_t=0,Ut=0,Ot=0),B!==null?(vt=B.x,$t=B.y,he=B.z):(vt=0,$t=0,he=0);const nn=kt.convert(I.format),ne=kt.convert(I.type);let Tt;I.isData3DTexture?(A.setTexture3D(I,0),Tt=U.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(A.setTexture2DArray(I,0),Tt=U.TEXTURE_2D_ARRAY):(A.setTexture2D(I,0),Tt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,I.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,I.unpackAlignment);const ui=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Nn=U.getParameter(U.UNPACK_SKIP_PIXELS),ws=U.getParameter(U.UNPACK_SKIP_ROWS),hn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,_t),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ut),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot);const Nr=M.isDataArrayTexture||M.isData3DTexture,de=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const jn=Rt.get(M),Fr=Rt.get(I),bn=Rt.get(jn.__renderTarget),Ci=Rt.get(Fr.__renderTarget);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,bn.__webglFramebuffer),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Pi=0;Pi<gt;Pi++)Nr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(M).__webglTexture,D,Ot+Pi),M.isDepthTexture?(de&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Rt.get(I).__webglTexture,D,he+Pi),U.blitFramebuffer(_t,Ut,Q,at,vt,$t,Q,at,U.DEPTH_BUFFER_BIT,U.NEAREST)):de?U.copyTexSubImage3D(Tt,D,vt,$t,he+Pi,_t,Ut,Q,at):U.copyTexSubImage2D(Tt,D,vt,$t,he+Pi,_t,Ut,Q,at);Ct.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else de?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Tt,D,vt,$t,he,Q,at,gt,nn,ne,fe.data):I.isCompressedArrayTexture?U.compressedTexSubImage3D(Tt,D,vt,$t,he,Q,at,gt,nn,fe.data):U.texSubImage3D(Tt,D,vt,$t,he,Q,at,gt,nn,ne,fe):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,D,vt,$t,Q,at,nn,ne,fe.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,D,vt,$t,fe.width,fe.height,nn,fe.data):U.texSubImage2D(U.TEXTURE_2D,D,vt,$t,Q,at,nn,ne,fe);U.pixelStorei(U.UNPACK_ROW_LENGTH,ui),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ws),U.pixelStorei(U.UNPACK_SKIP_IMAGES,hn),D===0&&I.generateMipmaps&&U.generateMipmap(Tt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(M,I,O=null,B=null,D=0){return M.isTexture!==!0&&(Gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,B=arguments[1]||null,M=arguments[2],I=arguments[3],D=arguments[4]||0),Gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,O,B,D)},this.initRenderTarget=function(M){Rt.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Ct.unbindTexture()},this.resetState=function(){b=0,w=0,L=null,Ct.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),n.unpackColorSpace=Jt._getUnpackColorSpace()}}class Tx extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class df extends en{constructor(t,n,i,s,r,o,a,c,l){super(t,n,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,n){const i=this.getUtoTmapping(t);return this.getPoint(i,n)}getPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return n}getSpacedPoints(t=5){const n=[];for(let i=0;i<=t;i++)n.push(this.getPointAt(i/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,s=this.getPoint(0),r=0;n.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n){const i=this.getLengths();let s=0;const r=i.length;let o;n?o=n:o=t*i[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=i[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===o)return s/(r-1);const h=i[s],f=i[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,n){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=n||(o.isVector2?new lt:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,n){const i=this.getUtoTmapping(t);return this.getTangent(i,n)}computeFrenetFrames(t,n){const i=new C,s=[],r=[],o=[],a=new C,c=new Se;for(let d=0;d<=t;d++){const g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ge(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(n===!0){let d=Math.acos(Ge(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rh extends si{constructor(t=0,n=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,n=new lt){const i=n,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Ax extends rh{constructor(t,n,i,s,r,o){super(t,n,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function oh(){let e=0,t=0,n=0,i=0;function s(r,o,a,c){e=r,t=a,n=-3*r+3*o-2*a-c,i=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){const o=r*r,a=o*r;return e+t*r+n*o+i*a}}}const qo=new C,bc=new oh,wc=new oh,Rc=new oh;class Ea extends si{constructor(t=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=i,this.tension=s}getPoint(t,n=new C){const i=n,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(qo.subVectors(s[0],s[1]).add(s[0]),l=qo);const u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(qo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=qo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),bc.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),wc.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Rc.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(bc.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),wc.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Rc.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return i.set(bc.calc(c),wc.calc(c),Rc.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pf(e,t,n,i,s){const r=(i-t)*.5,o=(s-n)*.5,a=e*e,c=e*a;return(2*n-2*i+r+o)*c+(-3*n+3*i-2*r-o)*a+r*e+n}function bx(e,t){const n=1-e;return n*n*t}function wx(e,t){return 2*(1-e)*e*t}function Rx(e,t){return e*e*t}function qr(e,t,n,i){return bx(e,t)+wx(e,n)+Rx(e,i)}function Cx(e,t){const n=1-e;return n*n*n*t}function Px(e,t){const n=1-e;return 3*n*n*e*t}function Lx(e,t){return 3*(1-e)*e*e*t}function Ix(e,t){return e*e*e*t}function jr(e,t,n,i,s){return Cx(e,t)+Px(e,n)+Lx(e,i)+Ix(e,s)}class cp extends si{constructor(t=new lt,n=new lt,i=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new lt){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Dx extends si{constructor(t=new C,n=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=i,this.v3=s}getPoint(t,n=new C){const i=n,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(jr(t,s.x,r.x,o.x,a.x),jr(t,s.y,r.y,o.y,a.y),jr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lp extends si{constructor(t=new lt,n=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new lt){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new lt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ux extends si{constructor(t=new C,n=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new C){const i=n;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new C){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hp extends si{constructor(t=new lt,n=new lt,i=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new lt){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class up extends si{constructor(t=new C,n=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=i}getPoint(t,n=new C){const i=n,s=this.v0,r=this.v1,o=this.v2;return i.set(qr(t,s.x,r.x,o.x),qr(t,s.y,r.y,o.y),qr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fp extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new lt){const i=n,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return i.set(pf(a,c.x,l.x,h.x,u.x),pf(a,c.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,i=this.points.length;n<i;n++){const s=this.points[n];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,i=t.points.length;n<i;n++){const s=t.points[n];this.points.push(new lt().fromArray(s))}return this}}var wl=Object.freeze({__proto__:null,ArcCurve:Ax,CatmullRomCurve3:Ea,CubicBezierCurve:cp,CubicBezierCurve3:Dx,EllipseCurve:rh,LineCurve:lp,LineCurve3:Ux,QuadraticBezierCurve:hp,QuadraticBezierCurve3:up,SplineCurve:fp});class Nx extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wl[i](n,t))}return this}getPoint(t,n){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const o=s[r]-i,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,n)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let i=0;i<=t;i++)n.push(this.getPoint(i/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const s=t.curves[n];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const s=this.curves[n];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,i=t.curves.length;n<i;n++){const s=t.curves[n];this.curves.push(new wl[s.type]().fromJSON(s))}return this}}class mf extends Nx{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,i=t.length;n<i;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const i=new lp(this.currentPoint.clone(),new lt(t,n));return this.curves.push(i),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,i,s){const r=new hp(this.currentPoint.clone(),new lt(t,n),new lt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,n,i,s,r,o){const a=new cp(this.currentPoint.clone(),new lt(t,n),new lt(i,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),i=new fp(n);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,i,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,n+c,i,s,r,o),this}absarc(t,n,i,s,r,o){return this.absellipse(t,n,i,i,s,r,o),this}ellipse(t,n,i,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,n+h,i,s,r,o,a,c),this}absellipse(t,n,i,s,r,o,a,c){const l=new rh(t,n,i,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ah extends Ze{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=Ge(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/n,u=new C,f=new lt,d=new C,g=new C,_=new C;let m=0,p=0;for(let T=0;T<=t.length-1;T++)switch(T){case 0:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[T+1].x-t[T].x,p=t[T+1].y-t[T].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let T=0;T<=n;T++){const S=i+T*h*s,x=Math.sin(S),N=Math.cos(S);for(let b=0;b<=t.length-1;b++){u.x=t[b].x*x,u.y=t[b].y,u.z=t[b].x*N,o.push(u.x,u.y,u.z),f.x=T/n,f.y=b/(t.length-1),a.push(f.x,f.y);const w=c[3*b+0]*x,L=c[3*b+1],E=c[3*b+0]*N;l.push(w,L,E)}}for(let T=0;T<n;T++)for(let S=0;S<t.length-1;S++){const x=S+T*t.length,N=x,b=x+t.length,w=x+t.length+1,L=x+1;r.push(N,b,L),r.push(w,L,b)}this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("uv",new ee(a,2)),this.setAttribute("normal",new ee(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ah(t.points,t.segments,t.phiStart,t.phiLength)}}class $s extends Ze{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);const r=[],o=[],a=[],c=[],l=new C,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=n;u++,f+=3){const d=i+u/n*s;l.x=t*Math.cos(d),l.y=t*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=n;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ee(o,3)),this.setAttribute("normal",new ee(a,3)),this.setAttribute("uv",new ee(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $s(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ta extends Ze{constructor(t=1,n=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],d=[];let g=0;const _=[],m=i/2;let p=0;T(),o===!1&&(t>0&&S(!0),n>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function T(){const x=new C,N=new C;let b=0;const w=(n-t)/i;for(let L=0;L<=r;L++){const E=[],y=L/r,R=y*(n-t)+t;for(let z=0;z<=s;z++){const k=z/s,W=k*c+a,K=Math.sin(W),G=Math.cos(W);N.x=R*K,N.y=-y*i+m,N.z=R*G,u.push(N.x,N.y,N.z),x.set(K,w,G).normalize(),f.push(x.x,x.y,x.z),d.push(k,1-y),E.push(g++)}_.push(E)}for(let L=0;L<s;L++)for(let E=0;E<r;E++){const y=_[E][L],R=_[E+1][L],z=_[E+1][L+1],k=_[E][L+1];(t>0||E!==0)&&(h.push(y,R,k),b+=3),(n>0||E!==r-1)&&(h.push(R,z,k),b+=3)}l.addGroup(p,b,0),p+=b}function S(x){const N=g,b=new lt,w=new C;let L=0;const E=x===!0?t:n,y=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,m*y,0),f.push(0,y,0),d.push(.5,.5),g++;const R=g;for(let z=0;z<=s;z++){const W=z/s*c+a,K=Math.cos(W),G=Math.sin(W);w.x=E*G,w.y=m*y,w.z=E*K,u.push(w.x,w.y,w.z),f.push(0,y,0),b.x=K*.5+.5,b.y=G*.5*y+.5,d.push(b.x,b.y),g++}for(let z=0;z<s;z++){const k=N+z,W=R+z;x===!0?h.push(W,W+1,k):h.push(W+1,W,k),L+=3}l.addGroup(p,L,x===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ta(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class dp extends mf{constructor(t){super(t),this.uuid=yr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const s=t.holes[n];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const s=this.holes[n];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,i=t.holes.length;n<i;n++){const s=t.holes[n];this.holes.push(new mf().fromJSON(s))}return this}}const Fx={triangulate:function(e,t,n=2){const i=t&&t.length,s=i?t[0]*n:e.length;let r=pp(e,0,s,n,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(i&&(r=Hx(e,t,r,n)),e.length>80*n){a=l=e[0],c=h=e[1];for(let g=n;g<s;g+=n)u=e[g],f=e[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return eo(r,o,n,a,c,d,0),o}};function pp(e,t,n,i,s){let r,o;if(s===$x(e,t,n,i)>0)for(r=t;r<n;r+=i)o=gf(r,e[r],e[r+1],o);else for(r=n-i;r>=t;r-=i)o=gf(r,e[r],e[r+1],o);return o&&Aa(o,o.next)&&(io(o),o=o.next),o}function xs(e,t){if(!e)return e;t||(t=e);let n=e,i;do if(i=!1,!n.steiner&&(Aa(n,n.next)||xe(n.prev,n,n.next)===0)){if(io(n),n=t=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==t);return t}function eo(e,t,n,i,s,r,o){if(!e)return;!o&&r&&Yx(e,i,s,r);let a=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,r?Bx(e,i,s,r):Ox(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),io(e),e=l.next,a=l.next;continue}if(e=l,e===a){o?o===1?(e=kx(xs(e),t,n),eo(e,t,n,i,s,r,2)):o===2&&zx(e,t,n,i,s,r):eo(xs(e),t,n,i,s,r,1);break}}}function Ox(e){const t=e.prev,n=e,i=e.next;if(xe(t,n,i)>=0)return!1;const s=t.x,r=n.x,o=i.x,a=t.y,c=n.y,l=i.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l;let g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&qs(s,a,r,c,o,l,g.x,g.y)&&xe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Bx(e,t,n,i){const s=e.prev,r=e,o=e.next;if(xe(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Rl(d,g,t,n,i),T=Rl(_,m,t,n,i);let S=e.prevZ,x=e.nextZ;for(;S&&S.z>=p&&x&&x.z<=T;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&qs(a,h,c,u,l,f,S.x,S.y)&&xe(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=d&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==o&&qs(a,h,c,u,l,f,S.x,S.y)&&xe(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=T;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==o&&qs(a,h,c,u,l,f,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function kx(e,t,n){let i=e;do{const s=i.prev,r=i.next.next;!Aa(s,r)&&mp(s,i,i.next,r)&&no(s,r)&&no(r,s)&&(t.push(s.i/n|0),t.push(i.i/n|0),t.push(r.i/n|0),io(i),io(i.next),i=e=r),i=i.next}while(i!==e);return xs(i)}function zx(e,t,n,i,s,r){let o=e;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kx(o,a)){let c=gp(o,a);o=xs(o,o.next),c=xs(c,c.next),eo(o,t,n,i,s,r,0),eo(c,t,n,i,s,r,0);return}a=a.next}o=o.next}while(o!==e)}function Hx(e,t,n,i){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*i,c=r<o-1?t[r+1]*i:e.length,l=pp(e,a,c,i,!1),l===l.next&&(l.steiner=!0),s.push(jx(l));for(s.sort(Vx),r=0;r<s.length;r++)n=Gx(s[r],n);return n}function Vx(e,t){return e.x-t.x}function Gx(e,t){const n=Wx(e,t);if(!n)return t;const i=gp(n,e);return xs(i,i.next),xs(n,n.next)}function Wx(e,t){let n=t,i=-1/0,s;const r=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const f=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=r&&f>i&&(i=f,s=n.x<n.next.x?n:n.next,f===r))return s}n=n.next}while(n!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;n=s;do r>=n.x&&n.x>=c&&r!==n.x&&qs(o<l?r:i,o,c,l,o<l?i:r,o,n.x,n.y)&&(u=Math.abs(o-n.y)/(r-n.x),no(n,e)&&(u<h||u===h&&(n.x>s.x||n.x===s.x&&Xx(s,n)))&&(s=n,h=u)),n=n.next;while(n!==a);return s}function Xx(e,t){return xe(e.prev,e,t.prev)<0&&xe(t.next,e,e.next)<0}function Yx(e,t,n,i){let s=e;do s.z===0&&(s.z=Rl(s.x,s.y,t,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==e);s.prevZ.nextZ=null,s.prevZ=null,qx(s)}function qx(e){let t,n,i,s,r,o,a,c,l=1;do{for(n=e,e=null,r=null,o=0;n;){for(o++,i=n,a=0,t=0;t<l&&(a++,i=i.nextZ,!!i);t++);for(c=l;a>0||c>0&&i;)a!==0&&(c===0||!i||n.z<=i.z)?(s=n,n=n.nextZ,a--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:e=s,s.prevZ=r,r=s;n=i}r.nextZ=null,l*=2}while(o>1);return e}function Rl(e,t,n,i,s){return e=(e-n)*s|0,t=(t-i)*s|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function jx(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function qs(e,t,n,i,s,r,o,a){return(s-o)*(t-a)>=(e-o)*(r-a)&&(e-o)*(i-a)>=(n-o)*(t-a)&&(n-o)*(r-a)>=(s-o)*(i-a)}function Kx(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Jx(e,t)&&(no(e,t)&&no(t,e)&&Zx(e,t)&&(xe(e.prev,e,t.prev)||xe(e,t.prev,t))||Aa(e,t)&&xe(e.prev,e,e.next)>0&&xe(t.prev,t,t.next)>0)}function xe(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Aa(e,t){return e.x===t.x&&e.y===t.y}function mp(e,t,n,i){const s=Ko(xe(e,t,n)),r=Ko(xe(e,t,i)),o=Ko(xe(n,i,e)),a=Ko(xe(n,i,t));return!!(s!==r&&o!==a||s===0&&jo(e,n,t)||r===0&&jo(e,i,t)||o===0&&jo(n,e,i)||a===0&&jo(n,t,i))}function jo(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ko(e){return e>0?1:e<0?-1:0}function Jx(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&mp(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function no(e,t){return xe(e.prev,e,e.next)<0?xe(e,t,e.next)>=0&&xe(e,e.prev,t)>=0:xe(e,t,e.prev)<0||xe(e,e.next,t)<0}function Zx(e,t){let n=e,i=!1;const s=(e.x+t.x)/2,r=(e.y+t.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==e);return i}function gp(e,t){const n=new Cl(e.i,e.x,e.y),i=new Cl(t.i,t.x,t.y),s=e.next,r=t.prev;return e.next=t,t.prev=e,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function gf(e,t,n,i){const s=new Cl(e,t,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function io(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Cl(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $x(e,t,n,i){let s=0;for(let r=t,o=n-i;r<n;r+=i)s+=(e[o]-e[r])*(e[r+1]+e[o+1]),o=r;return s}class Kr{static area(t){const n=t.length;let i=0;for(let s=n-1,r=0;r<n;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return Kr.area(t)<0}static triangulateShape(t,n){const i=[],s=[],r=[];_f(t),vf(i,t);let o=t.length;n.forEach(_f);for(let c=0;c<n.length;c++)s.push(o),o+=n[c].length,vf(i,n[c]);const a=Fx.triangulate(i,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function _f(e){const t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function vf(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}class mo extends Ze{constructor(t=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(n-t)/s,d=new C,g=new lt;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/n+1)/2,g.y=(d.y/n+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const T=p+m,S=T,x=T+i+1,N=T+i+2,b=T+1;a.push(S,x,b),a.push(x,N,b)}}this.setIndex(a),this.setAttribute("position",new ee(c,3)),this.setAttribute("normal",new ee(l,3)),this.setAttribute("uv",new ee(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mo(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ch extends Ze{constructor(t=new dp([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:n};const i=[],s=[],r=[],o=[];let a=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let h=0;h<t.length;h++)l(t[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(i),this.setAttribute("position",new ee(s,3)),this.setAttribute("normal",new ee(r,3)),this.setAttribute("uv",new ee(o,2));function l(h){const u=s.length/3,f=h.extractPoints(n);let d=f.shape;const g=f.holes;Kr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){const T=g[m];Kr.isClockWise(T)===!0&&(g[m]=T.reverse())}const _=Kr.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){const T=g[m];d=d.concat(T)}for(let m=0,p=d.length;m<p;m++){const T=d[m];s.push(T.x,T.y,0),r.push(0,0,1),o.push(T.x,T.y)}for(let m=0,p=_.length;m<p;m++){const T=_[m],S=T[0]+u,x=T[1]+u,N=T[2]+u;i.push(S,x,N),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes;return Qx(n,t)}static fromJSON(t,n){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=n[t.shapes[s]];i.push(o)}return new ch(i,t.curveSegments)}}function Qx(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){const s=e[n];t.shapes.push(s.uuid)}else t.shapes.push(e.uuid);return t}class Qn extends Ze{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const T=[],S=p/i;let x=0;p===0&&o===0?x=.5/n:p===i&&c===Math.PI&&(x=-.5/n);for(let N=0;N<=n;N++){const b=N/n;u.x=-t*Math.cos(s+b*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+b*r)*Math.sin(o+S*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(b+x,1-S),T.push(l++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<n;T++){const S=h[p][T+1],x=h[p][T],N=h[p+1][T],b=h[p+1][T+1];(p!==0||o>0)&&d.push(S,x,b),(p!==i-1||c<Math.PI)&&d.push(x,N,b)}this.setIndex(d),this.setAttribute("position",new ee(g,3)),this.setAttribute("normal",new ee(_,3)),this.setAttribute("uv",new ee(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lh extends Ze{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new C,u=new C,f=new C;for(let d=0;d<=i;d++)for(let g=0;g<=s;g++){const _=g/s*r,m=d/i*Math.PI*2;u.x=(t+n*Math.cos(m))*Math.cos(_),u.y=(t+n*Math.cos(m))*Math.sin(_),u.z=n*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=s;g++){const _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,T=(s+1)*d+g;o.push(_,m,T),o.push(m,p,T)}this.setIndex(o),this.setAttribute("position",new ee(a,3)),this.setAttribute("normal",new ee(c,3)),this.setAttribute("uv",new ee(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class so extends Ze{constructor(t=new up(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radius:i,radialSegments:s,closed:r};const o=t.computeFrenetFrames(n,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,c=new C,l=new lt;let h=new C;const u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new ee(u,3)),this.setAttribute("normal",new ee(f,3)),this.setAttribute("uv",new ee(d,2));function _(){for(let S=0;S<n;S++)m(S);m(r===!1?n:0),T(),p()}function m(S){h=t.getPointAt(S/n,h);const x=o.normals[S],N=o.binormals[S];for(let b=0;b<=s;b++){const w=b/s*Math.PI*2,L=Math.sin(w),E=-Math.cos(w);c.x=E*x.x+L*N.x,c.y=E*x.y+L*N.y,c.z=E*x.z+L*N.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+i*c.x,a.y=h.y+i*c.y,a.z=h.z+i*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let S=1;S<=n;S++)for(let x=1;x<=s;x++){const N=(s+1)*(S-1)+(x-1),b=(s+1)*S+(x-1),w=(s+1)*S+x,L=(s+1)*(S-1)+x;g.push(N,b,L),g.push(b,w,L)}}function T(){for(let S=0;S<=n;S++)for(let x=0;x<=s;x++)l.x=S/n,l.y=x/s,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new so(new wl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class _n extends fo{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _p extends _n{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class hh extends We{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class t3 extends hh{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}}const Cc=new Se,xf=new C,Mf=new C;class e3{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nh,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;xf.setFromMatrixPosition(t.matrixWorld),n.position.copy(xf),Mf.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Mf),n.updateMatrixWorld(),Cc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Cc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class n3 extends e3{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yf extends hh{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new n3}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class i3 extends hh{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jl);const mt={WORLD:{WIDTH:10,HEIGHT:18,BOTTOM:-9},HAND:{PALM_LANDMARKS:[0,5,9,13,17],REACH_MULTIPLIER:1.35,CALIB_PADDING:.04,MIN_CALIB_SPAN:.1,SWIPE_SPEED_THRESHOLD:.75,SLICE_HIT_PADDING:.55,MAX_CURSOR_SPEED:18,MIN_CURSOR_SPEED:5,SPEED_FOLLOW:1.35},SWORD:{RADIUS:.45,GLOW_COLOR:9133302,CORE_COLOR:6514417},TRAIL:{MAX_POINTS:32,FADE_TIME:.4,WIDTH:.65,COLOR:11032055},PHYSICS:{GRAVITY:-10,SPAWN_INTERVAL_MIN:1.1,SPAWN_INTERVAL_MAX:1.7,LAUNCH_VY_MIN:11,LAUNCH_VY_MAX:15,LAUNCH_VX_RANGE:3,ROTATION_SPEED:3,SPAWN_X_MIN:-4.2,SPAWN_X_MAX:2.8},FRUITS:{apple:{radius:.55,color:14034984,score:10,juiceColor:16724804},orange:{radius:.5,color:16747546,score:15,juiceColor:16750882},banana:{radius:.45,color:16767293,score:20,juiceColor:16772744},watermelon:{radius:.75,color:2976557,score:25,juiceColor:16720452}},FRUIT_TYPES:["apple","orange","banana","watermelon"],BOMB:{RADIUS:.5,SPAWN_CHANCE:.05},GAME:{INITIAL_LIVES:5,COMBO_TIMEOUT:1.5,MAX_COMBO:10,SCORE_TIER:100,SPAWN_FASTER_BY:.12,MIN_SPAWN_FACTOR:.35,FRUIT_SPEEDUP_BY:.06,MAX_FRUIT_SPEED_FACTOR:1.6},PARTICLES:{JUICE_DROPLETS:22,JUICE_STREAKS:8,JUICE_MIST:10,JUICE_LIFETIME:.9,JUICE_SPEED:5,BLAST_FLASH_TIME:.18,BLAST_FIRE:18,BLAST_FIRE_LIFE:.55,BLAST_SMOKE:14,BLAST_SMOKE_LIFE:1.1,BLAST_SPARKS:16,BLAST_SPARK_LIFE:.35,BLAST_DEBRIS:10,BLAST_DEBRIS_LIFE:.85,BLAST_SPEED:7},MEDIAPIPE:{WASM_PATH:"https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.18/wasm",MODEL_PATH:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"}};class s3{constructor(t){this.container=t,this.width=t.clientWidth,this.height=t.clientHeight,this.renderer=new Ex({antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(16777215),this.renderer.outputColorSpace=an,this.renderer.toneMapping=Id,this.renderer.toneMappingExposure=1.05,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Pd,t.appendChild(this.renderer.domElement);const n=this.width/this.height,i=mt.WORLD.HEIGHT,s=i*n;this.camera=new ih(-s/2,s/2,i/2,-i/2,.1,100),this.camera.position.z=10,this.scene=new Tx,this.scene.background=new Lt(16777215),this._setupLighting(),this._createEnvironment(),this._resizeObserver=new ResizeObserver(()=>this._onResize()),this._resizeObserver.observe(t),window.addEventListener("resize",()=>this._onResize())}_setupLighting(){const t=new t3(16777215,15790320,.65);this.scene.add(t);const n=new i3(16777215,.35);this.scene.add(n),this.keyLight=new yf(16777215,.95),this.keyLight.position.set(3,8,12),this.keyLight.castShadow=!0,this.keyLight.shadow.mapSize.set(1024,1024),this.keyLight.shadow.camera.near=.5,this.keyLight.shadow.camera.far=40;const i=Math.max(mt.WORLD.WIDTH,mt.WORLD.HEIGHT)*.75;this.keyLight.shadow.camera.left=-i,this.keyLight.shadow.camera.right=i,this.keyLight.shadow.camera.top=i,this.keyLight.shadow.camera.bottom=-i,this.keyLight.shadow.bias=-8e-4,this.scene.add(this.keyLight);const s=new yf(15660287,.3);s.position.set(-4,2,6),this.scene.add(s)}_createEnvironment(){const{WIDTH:t,HEIGHT:n}=mt.WORLD,i=new Yt(new Es(t+2,n+2),new us({color:16777215}));i.position.z=-.5,this.scene.add(i)}_onResize(){const t=this.container.clientWidth,n=this.container.clientHeight;if(t===0||n===0)return;this.width=t,this.height=n,this.renderer.setSize(t,n);const i=t/n,s=mt.WORLD.HEIGHT,r=s*i;this.camera.left=-r/2,this.camera.right=r/2,this.camera.top=s/2,this.camera.bottom=-s/2,this.camera.updateProjectionMatrix()}render(){this.renderer.render(this.scene,this.camera)}dispose(){this._resizeObserver.disconnect(),this.renderer.dispose()}}var ar=typeof self<"u"?self:{};function vp(e,t){t:{for(var n=["CLOSURE_FLAGS"],i=ar,s=0;s<n.length;s++)if((i=i[n[s]])==null){n=null;break t}n=i}return(e=n&&n[e])!=null?e:t}function is(){throw Error("Invalid UTF8")}function Sf(e,t){return t=String.fromCharCode.apply(null,t),e==null?t:e+t}let Jo,Pc;const r3=typeof TextDecoder<"u";let o3;const a3=typeof TextEncoder<"u";function xp(e){if(a3)e=(o3||=new TextEncoder).encode(e);else{let n=0;const i=new Uint8Array(3*e.length);for(let s=0;s<e.length;s++){var t=e.charCodeAt(s);if(t<128)i[n++]=t;else{if(t<2048)i[n++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&s<e.length){const r=e.charCodeAt(++s);if(r>=56320&&r<=57343){t=1024*(t-55296)+r-56320+65536,i[n++]=t>>18|240,i[n++]=t>>12&63|128,i[n++]=t>>6&63|128,i[n++]=63&t|128;continue}s--}t=65533}i[n++]=t>>12|224,i[n++]=t>>6&63|128}i[n++]=63&t|128}}e=n===i.length?i:i.subarray(0,n)}return e}function Mp(e){ar.setTimeout((()=>{throw e}),0)}var Pl,c3=vp(610401301,!1),Ef=vp(748402147,!0);function Tf(){var e=ar.navigator;return e&&(e=e.userAgent)?e:""}const Af=ar.navigator;function ba(e){return ba[" "](e),e}Pl=Af&&Af.userAgentData||null,ba[" "]=function(){};const yp={};let Xr=null;function l3(e){const t=e.length;let n=3*t/4;n%3?n=Math.floor(n):"=.".indexOf(e[t-1])!=-1&&(n="=.".indexOf(e[t-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let s=0;return(function(r,o){function a(l){for(;c<r.length;){const h=r.charAt(c++),u=Xr[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}Sp();let c=0;for(;;){const l=a(-1),h=a(0),u=a(64),f=a(64);if(f===64&&l===-1)break;o(l<<2|h>>4),u!=64&&(o(h<<4&240|u>>2),f!=64&&o(u<<6&192|f))}})(e,(function(r){i[s++]=r})),s!==n?i.subarray(0,s):i}function Sp(){if(!Xr){Xr={};var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=e.concat(t[n].split(""));yp[n]=i;for(let s=0;s<i.length;s++){const r=i[s];Xr[r]===void 0&&(Xr[r]=s)}}}}var h3=typeof Uint8Array<"u",Ep=!(!(c3&&Pl&&Pl.brands.length>0)&&(Tf().indexOf("Trident")!=-1||Tf().indexOf("MSIE")!=-1))&&typeof btoa=="function";const bf=/[-_.]/g,u3={"-":"+",_:"/",".":"="};function f3(e){return u3[e]||""}function Tp(e){if(!Ep)return l3(e);e=bf.test(e)?e.replace(bf,f3):e,e=atob(e);const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}function uh(e){return h3&&e!=null&&e instanceof Uint8Array}var cr={};function Ms(){return d3||=new ei(null,cr)}function fh(e){Ap(cr);var t=e.g;return(t=t==null||uh(t)?t:typeof t=="string"?Tp(t):null)==null?t:e.g=t}var ei=class{h(){return new Uint8Array(fh(this)||0)}constructor(e,t){if(Ap(t),this.g=e,e!=null&&e.length===0)throw Error("ByteString should be constructed with non-empty values")}};let d3,p3;function Ap(e){if(e!==cr)throw Error("illegal external caller")}function bp(e,t){e.__closure__error__context__984382||(e.__closure__error__context__984382={}),e.__closure__error__context__984382.severity=t}function Ll(e){return bp(e=Error(e),"warning"),e}function lr(e,t){if(e!=null){var n=p3??={},i=n[e]||0;i>=t||(n[e]=i+1,bp(e=Error(),"incident"),Mp(e))}}function Er(){return typeof BigInt=="function"}var Tr=typeof Symbol=="function"&&typeof Symbol()=="symbol";function ri(e,t,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&e?Symbol.for(e):e!=null?Symbol(e):Symbol():t}var m3=ri("jas",void 0,!0),wf=ri(void 0,"0di"),Vr=ri(void 0,"1oa"),vn=ri(void 0,Symbol()),g3=ri(void 0,"0ub"),_3=ri(void 0,"0ubs"),Il=ri(void 0,"0ubsb"),v3=ri(void 0,"0actk"),hr=ri("m_m","Pa",!0),Rf=ri();const wp={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Rp=Object.defineProperties,xt=Tr?m3:"Ga";var Ts;const Cf=[];function go(e,t){Tr||xt in e||Rp(e,wp),e[xt]|=t}function ke(e,t){Tr||xt in e||Rp(e,wp),e[xt]=t}function _o(e){return go(e,34),e}function ro(e){return go(e,8192),e}ke(Cf,7),Ts=Object.freeze(Cf);var ur={};function Mn(e,t){return t===void 0?e.h!==ys&&!!(2&(0|e.v[xt])):!!(2&t)&&e.h!==ys}const ys={};function dh(e,t){if(e!=null){if(typeof e=="string")e=e?new ei(e,cr):Ms();else if(e.constructor!==ei)if(uh(e))e=e.length?new ei(new Uint8Array(e),cr):Ms();else{if(!t)throw Error();e=void 0}}return e}class Pf{constructor(t,n,i){this.g=t,this.h=n,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}var x3=Object.freeze({});function Cp(e,t,n){const i=128&t?0:-1,s=e.length;var r;(r=!!s)&&(r=(r=e[s-1])!=null&&typeof r=="object"&&r.constructor===Object);const o=s+(r?-1:0);for(t=128&t?1:0;t<o;t++)n(t-i,e[t]);if(r){e=e[s-1];for(const a in e)!isNaN(a)&&n(+a,e[a])}}var Pp={};function Ar(e){return 128&e?Pp:void 0}function wa(e){return e.Na=!0,e}var M3=wa((e=>typeof e=="number")),Lf=wa((e=>typeof e=="string")),y3=wa((e=>typeof e=="boolean")),Ra=typeof ar.BigInt=="function"&&typeof ar.BigInt(0)=="bigint";function xn(e){var t=e;if(Lf(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(M3(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Ra?BigInt(e):e=y3(e)?e?"1":"0":Lf(e)?e.trim()||"0":String(e)}var Dl=wa((e=>Ra?e>=E3&&e<=A3:e[0]==="-"?If(e,S3):If(e,T3)));const S3=Number.MIN_SAFE_INTEGER.toString(),E3=Ra?BigInt(Number.MIN_SAFE_INTEGER):void 0,T3=Number.MAX_SAFE_INTEGER.toString(),A3=Ra?BigInt(Number.MAX_SAFE_INTEGER):void 0;function If(e,t){if(e.length>t.length)return!1;if(e.length<t.length||e===t)return!0;for(let n=0;n<e.length;n++){const i=e[n],s=t[n];if(i>s)return!1;if(i<s)return!0}}const b3=typeof Uint8Array.prototype.slice=="function";let w3,ve=0,Le=0;function Df(e){const t=e>>>0;ve=t,Le=(e-t)/4294967296>>>0}function fr(e){if(e<0){Df(-e);const[t,n]=gh(ve,Le);ve=t>>>0,Le=n>>>0}else Df(e)}function ph(e){const t=w3||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+e,!0),Le=0,ve=t.getUint32(0,!0)}function Lp(e,t){const n=4294967296*t+(e>>>0);return Number.isSafeInteger(n)?n:oo(e,t)}function R3(e,t){return xn(Er()?BigInt.asUintN(64,(BigInt(t>>>0)<<BigInt(32))+BigInt(e>>>0)):oo(e,t))}function Ip(e,t){return Er()?xn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(t))<<BigInt(32))+BigInt.asUintN(32,BigInt(e)))):xn(mh(e,t))}function oo(e,t){if(e>>>=0,(t>>>=0)<=2097151)var n=""+(4294967296*t+e);else Er()?n=""+(BigInt(t)<<BigInt(32)|BigInt(e)):(e=(16777215&e)+6777216*(n=16777215&(e>>>24|t<<8))+6710656*(t=t>>16&65535),n+=8147497*t,t*=2,e>=1e7&&(n+=e/1e7>>>0,e%=1e7),n>=1e7&&(t+=n/1e7>>>0,n%=1e7),n=t+Uf(n)+Uf(e));return n}function Uf(e){return e=String(e),"0000000".slice(e.length)+e}function mh(e,t){if(2147483648&t)if(Er())e=""+(BigInt(0|t)<<BigInt(32)|BigInt(e>>>0));else{const[n,i]=gh(e,t);e="-"+oo(n,i)}else e=oo(e,t);return e}function Ca(e){if(e.length<16)fr(Number(e));else if(Er())e=BigInt(e),ve=Number(e&BigInt(4294967295))>>>0,Le=Number(e>>BigInt(32)&BigInt(4294967295));else{const t=+(e[0]==="-");Le=ve=0;const n=e.length;for(let i=t,s=(n-t)%6+t;s<=n;i=s,s+=6){const r=Number(e.slice(i,s));Le*=1e6,ve=1e6*ve+r,ve>=4294967296&&(Le+=Math.trunc(ve/4294967296),Le>>>=0,ve>>>=0)}if(t){const[i,s]=gh(ve,Le);ve=i,Le=s}}}function gh(e,t){return t=~t,e?e=1+~e:t+=1,[e,t]}function Wn(e){return Array.prototype.slice.call(e)}const vo=typeof BigInt=="function"?BigInt.asIntN:void 0,C3=typeof BigInt=="function"?BigInt.asUintN:void 0,Ss=Number.isSafeInteger,Pa=Number.isFinite,dr=Math.trunc,P3=xn(0);function Yr(e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);return e}function ti(e){return e==null||typeof e=="number"?e:e==="NaN"||e==="Infinity"||e==="-Infinity"?Number(e):void 0}function ao(e){if(e!=null&&typeof e!="boolean"){var t=typeof e;throw Error(`Expected boolean but got ${t!="object"?t:e?Array.isArray(e)?"array":t:"null"}: ${e}`)}return e}function Dp(e){return e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0}const L3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function xo(e){switch(typeof e){case"bigint":return!0;case"number":return Pa(e);case"string":return L3.test(e);default:return!1}}function br(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Pa(e)?0|e:void 0}function Up(e){if(e==null)return e;if(typeof e=="string"&&e)e=+e;else if(typeof e!="number")return;return Pa(e)?e>>>0:void 0}function Np(e){const t=e.length;return(e[0]==="-"?t<20||t===20&&e<="-9223372036854775808":t<19||t===19&&e<="9223372036854775807")?e:(Ca(e),mh(ve,Le))}function _h(e){if(e=dr(e),!Ss(e)){fr(e);var t=ve,n=Le;(e=2147483648&n)&&(n=~n>>>0,(t=1+~t>>>0)==0&&(n=n+1>>>0)),e=typeof(t=Lp(t,n))=="number"?e?-t:t:e?"-"+t:t}return e}function Fp(e){var t=dr(Number(e));return Ss(t)?String(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Np(e))}function Op(e){var t=dr(Number(e));return Ss(t)?xn(t):((t=e.indexOf("."))!==-1&&(e=e.substring(0,t)),Er()?xn(vo(64,BigInt(e))):xn(Np(e)))}function Bp(e){return Ss(e)?e=xn(_h(e)):(e=dr(e),Ss(e)?e=String(e):(fr(e),e=mh(ve,Le)),e=xn(e)),e}function da(e){const t=typeof e;return e==null?e:t==="bigint"?xn(vo(64,e)):xo(e)?t==="string"?Op(e):Bp(e):void 0}function kp(e){if(typeof e!="string")throw Error();return e}function Mo(e){if(e!=null&&typeof e!="string")throw Error();return e}function Xe(e){return e==null||typeof e=="string"?e:void 0}function vh(e,t,n,i){return e!=null&&e[hr]===ur?e:Array.isArray(e)?((i=(n=0|e[xt])|32&i|2&i)!==n&&ke(e,i),new t(e)):(n?2&i?((e=t[wf])||(_o((e=new t).v),e=t[wf]=e),t=e):t=new t:t=void 0,t)}function I3(e,t,n){if(t)t:{if(!xo(t=e))throw Ll("int64");switch(typeof t){case"string":t=Op(t);break t;case"bigint":t=xn(vo(64,t));break t;default:t=Bp(t)}}else t=da(e);return(e=t)==null?n?P3:void 0:e}const D3={};let U3=(function(){try{return ba(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class Lc{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,n){return this.g.set(t,n),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,n){return this.g.forEach(t,n)}[Symbol.iterator](){return this.entries()}}const N3=U3?(Object.setPrototypeOf(Lc.prototype,Map.prototype),Object.defineProperties(Lc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Lc):class extends Map{constructor(){super()}};function Nf(e){return e}function Ic(e){if(2&e.J)throw Error("Cannot mutate an immutable Map")}var Ai=class extends N3{constructor(e,t,n=Nf,i=Nf){super(),this.J=0|e[xt],this.K=t,this.S=n,this.fa=this.K?F3:i;for(let s=0;s<e.length;s++){const r=e[s],o=n(r[0],!1,!0);let a=r[1];t?a===void 0&&(a=null):a=i(r[1],!1,!0,void 0,void 0,this.J),super.set(o,a)}}V(e){return ro(Array.from(super.entries(),e))}clear(){Ic(this),super.clear()}delete(e){return Ic(this),super.delete(this.S(e,!0,!1))}entries(){if(this.K){var e=super.keys();e=new Pf(e,O3,this)}else e=super.entries();return e}values(){if(this.K){var e=super.keys();e=new Pf(e,Ai.prototype.get,this)}else e=super.values();return e}forEach(e,t){this.K?super.forEach(((n,i,s)=>{e.call(t,s.get(i),i,s)})):super.forEach(e,t)}set(e,t){return Ic(this),(e=this.S(e,!0,!1))==null?this:t==null?(super.delete(e),this):super.set(e,this.fa(t,!0,!0,this.K,!1,this.J))}Ma(e){const t=this.S(e[0],!1,!0);e=e[1],e=this.K?e===void 0?null:e:this.fa(e,!1,!0,void 0,!1,this.J),super.set(t,e)}has(e){return super.has(this.S(e,!1,!1))}get(e){e=this.S(e,!1,!1);const t=super.get(e);if(t!==void 0){var n=this.K;return n?((n=this.fa(t,!1,!0,n,this.ra,this.J))!==t&&super.set(e,n),n):t}}[Symbol.iterator](){return this.entries()}};function F3(e,t,n,i,s,r){return e=vh(e,i,n,r),s&&(e=Mh(e)),e}function O3(e){return[e,this.get(e)]}let B3;function Ff(){return B3||=new Ai(_o([]),void 0,void 0,void 0,D3)}function La(e){return vn?e[vn]:void 0}function pa(e,t){for(const n in e)!isNaN(n)&&t(e,+n,e[n])}Ai.prototype.toJSON=void 0;var Ul=class{};const k3={Ka:!0};function z3(e,t){t<100||lr(_3,1)}function Ia(e,t,n,i){const s=i!==void 0;i=!!i;var r,o=vn;!s&&Tr&&o&&(r=e[o])&&pa(r,z3),o=[];var a=e.length;let c;r=4294967295;let l=!1;const h=!!(64&t),u=h?128&t?0:-1:void 0;1&t||(c=a&&e[a-1],c!=null&&typeof c=="object"&&c.constructor===Object?r=--a:c=void 0,!h||128&t||s||(l=!0,r=r-u+u)),t=void 0;for(var f=0;f<a;f++){let d=e[f];if(d!=null&&(d=n(d,i))!=null)if(h&&f>=r){const g=f-u;(t??={})[g]=d}else o[f]=d}if(c)for(let d in c){if((a=c[d])==null||(a=n(a,i))==null)continue;let g;f=+d,h&&!Number.isNaN(f)&&(g=f+u)<r?o[g]=a:(t??={})[d]=a}return t&&(l?o.push(t):o[r]=t),s&&vn&&(e=La(e))&&e instanceof Ul&&(o[vn]=(function(d){const g=new Ul;return pa(d,((_,m,p)=>{g[m]=Wn(p)})),g.da=d.da,g})(e)),o}function H3(e){return e[0]=co(e[0]),e[1]=co(e[1]),e}function co(e){switch(typeof e){case"number":return Number.isFinite(e)?e:""+e;case"bigint":return Dl(e)?Number(e):""+e;case"boolean":return e?1:0;case"object":if(Array.isArray(e)){var t=0|e[xt];return e.length===0&&1&t?void 0:Ia(e,t,co)}if(e!=null&&e[hr]===ur)return zp(e);if(e instanceof ei){if((t=e.g)==null)e="";else if(typeof t=="string")e=t;else{if(Ep){for(var n="",i=0,s=t.length-10240;i<s;)n+=String.fromCharCode.apply(null,t.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?t.subarray(i):t),t=btoa(n)}else{n===void 0&&(n=0),Sp(),n=yp[n],i=Array(Math.floor(t.length/3)),s=n[64]||"";let l=0,h=0;for(;l<t.length-2;l+=3){var r=t[l],o=t[l+1],a=t[l+2],c=n[r>>2];r=n[(3&r)<<4|o>>4],o=n[(15&o)<<2|a>>6],a=n[63&a],i[h++]=c+r+o+a}switch(c=0,a=s,t.length-l){case 2:a=n[(15&(c=t[l+1]))<<2]||s;case 1:t=t[l],i[h]=n[t>>2]+n[(3&t)<<4|c>>4]+a+s}t=i.join("")}e=e.g=t}return e}return e instanceof Ai?e=e.size!==0?e.V(H3):void 0:void 0}return e}let V3,G3;function zp(e){return Ia(e=e.v,0|e[xt],co)}function fs(e,t){return Hp(e,t[0],t[1])}function Hp(e,t,n,i=0){if(e==null){var s=32;n?(e=[n],s|=128):e=[],t&&(s=-16760833&s|(1023&t)<<14)}else{if(!Array.isArray(e))throw Error("narr");if(s=0|e[xt],Ef&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Ef)throw Error("carr");lr(v3,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&ke(e,s|i),e;if(n&&(s|=128,n!==e[0]))throw Error("mid");t:{s|=64;var r=(n=e).length;if(r){var o=r-1;const c=n[o];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((o-=t=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var a in c)(r=+a)<o&&(n[r+t]=c[a],delete c[a]);s=-16760833&s|(1023&o)<<14;break t}}if(t){if((a=Math.max(t,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&a)<<14}}}return ke(e,64|s|i),e}function W3(e,t){if(typeof e!="object")return e;if(Array.isArray(e)){var n=0|e[xt];return e.length===0&&1&n?void 0:Of(e,n,t)}if(e!=null&&e[hr]===ur)return Bf(e);if(e instanceof Ai){if(2&(t=e.J))return e;if(!e.size)return;if(n=_o(e.V()),e.K)for(e=0;e<n.length;e++){const i=n[e];let s=i[1];s=s==null||typeof s!="object"?void 0:s!=null&&s[hr]===ur?Bf(s):Array.isArray(s)?Of(s,0|s[xt],!!(32&t)):void 0,i[1]=s}return n}return e instanceof ei?e:void 0}function Of(e,t,n){return 2&t||(!n||4096&t||16&t?e=wr(e,t,!1,n&&!(16&t)):(go(e,34),4&t&&Object.freeze(e))),e}function xh(e,t,n){return e=new e.constructor(t),n&&(e.h=ys),e.m=ys,e}function Bf(e){const t=e.v,n=0|t[xt];return Mn(e,n)?e:yh(e,t,n)?xh(e,t):wr(t,n)}function wr(e,t,n,i){return i??=!!(34&t),e=Ia(e,t,W3,i),i=32,n&&(i|=2),ke(e,t=16769217&t|i),e}function Mh(e){const t=e.v,n=0|t[xt];return Mn(e,n)?yh(e,t,n)?xh(e,t,!0):new e.constructor(wr(t,n,!1)):e}function Rr(e){if(e.h!==ys)return!1;var t=e.v;return go(t=wr(t,0|t[xt]),2048),e.v=t,e.h=void 0,e.m=void 0,!0}function Cr(e){if(!Rr(e)&&Mn(e,0|e.v[xt]))throw Error()}function As(e,t){t===void 0&&(t=0|e[xt]),32&t&&!(4096&t)&&ke(e,4096|t)}function yh(e,t,n){return!!(2&n)||!(!(32&n)||4096&n)&&(ke(t,2|n),e.h=ys,!0)}const Vp=xn(0),Oi={};function Me(e,t,n,i,s){if((t=bi(e.v,t,n,s))!==null||i&&e.m!==ys)return t}function bi(e,t,n,i){if(t===-1)return null;const s=t+(n?0:-1),r=e.length-1;let o,a;if(!(r<1+(n?0:-1))){if(s>=r)if(o=e[r],o!=null&&typeof o=="object"&&o.constructor===Object)n=o[t],a=!0;else{if(s!==r)return;n=o}else n=e[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return a?o[t]=i:e[s]=i,i}return n}}function oe(e,t,n,i){Cr(e),Ne(e=e.v,0|e[xt],t,n,i)}function Ne(e,t,n,i,s){const r=n+(s?0:-1);var o=e.length-1;if(o>=1+(s?0:-1)&&r>=o){const a=e[o];if(a!=null&&typeof a=="object"&&a.constructor===Object)return a[n]=i,t}return r<=o?(e[r]=i,t):(i!==void 0&&(n>=(o=(t??=0|e[xt])>>14&1023||536870912)?i!=null&&(e[o+(s?0:-1)]={[n]:i}):e[r]=i),t)}function ls(){return x3===void 0?2:4}function hs(e,t,n,i,s){let r=e.v,o=0|r[xt];i=Mn(e,o)?1:i,s=!!s||i===3,i===2&&Rr(e)&&(r=e.v,o=0|r[xt]);let a=(e=Sh(r,t))===Ts?7:0|e[xt],c=Eh(a,o);var l=!(4&c);if(l){4&c&&(e=Wn(e),a=0,c=ps(c,o),o=Ne(r,o,t,e));let h=0,u=0;for(;h<e.length;h++){const f=n(e[h]);f!=null&&(e[u++]=f)}u<h&&(e.length=u),n=-513&(4|c),c=n&=-1025,c&=-4097}return c!==a&&(ke(e,c),2&c&&Object.freeze(e)),Gp(e,c,r,o,t,i,l,s)}function Gp(e,t,n,i,s,r,o,a){let c=t;return r===1||r===4&&(2&t||!(16&t)&&32&i)?ds(t)||((t|=!e.length||o&&!(4096&t)||32&i&&!(4096&t||16&t)?2:256)!==c&&ke(e,t),Object.freeze(e)):(r===2&&ds(t)&&(e=Wn(e),c=0,t=ps(t,i),i=Ne(n,i,s,e)),ds(t)||(a||(t|=16),t!==c&&ke(e,t))),2&t||!(4096&t||16&t)||As(n,i),e}function Sh(e,t,n){return e=bi(e,t,n),Array.isArray(e)?e:Ts}function Eh(e,t){return 2&t&&(e|=2),1|e}function ds(e){return!!(2&e)&&!!(4&e)||!!(256&e)}function Wp(e){return dh(e,!0)}function Xp(e){e=Wn(e);for(let t=0;t<e.length;t++){const n=e[t]=Wn(e[t]);Array.isArray(n[1])&&(n[1]=_o(n[1]))}return ro(e)}function ki(e,t,n,i){Cr(e),Ne(e=e.v,0|e[xt],t,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Pr(e,t,n){if(2&t)throw Error();const i=Ar(t);let s=Sh(e,n,i),r=s===Ts?7:0|s[xt],o=Eh(r,t);return(2&o||ds(o)||16&o)&&(o===r||ds(o)||ke(s,o),s=Wn(s),r=0,o=ps(o,t),Ne(e,t,n,s,i)),o&=-13,o!==r&&ke(s,o),s}function Dc(e,t){var n=Fm;return Ah(Th(e=e.v),e,void 0,n)===t?t:-1}function Th(e){if(Tr)return e[Vr]??(e[Vr]=new Map);if(Vr in e)return e[Vr];const t=new Map;return Object.defineProperty(e,Vr,{value:t}),t}function Yp(e,t,n,i,s){const r=Th(e),o=Ah(r,e,t,n,s);return o!==i&&(o&&(t=Ne(e,t,o,void 0,s)),r.set(n,i)),t}function Ah(e,t,n,i,s){let r=e.get(i);if(r!=null)return r;r=0;for(let o=0;o<i.length;o++){const a=i[o];bi(t,a,s)!=null&&(r!==0&&(n=Ne(t,n,r,void 0,s)),r=a)}return e.set(i,r),r}function bh(e,t,n){let i=0|e[xt];const s=Ar(i),r=bi(e,n,s);let o;if(r!=null&&r[hr]===ur){if(!Mn(r))return Rr(r),r.v;o=r.v}else Array.isArray(r)&&(o=r);if(o){const a=0|o[xt];2&a&&(o=wr(o,a))}return o=fs(o,t),o!==r&&Ne(e,i,n,o,s),o}function qp(e,t,n,i,s){let r=!1;if((i=bi(e,i,s,(o=>{const a=vh(o,n,!1,t);return r=a!==o&&a!=null,a})))!=null)return r&&!Mn(i)&&As(e,t),i}function Qt(e,t,n,i){let s=e.v,r=0|s[xt];if((t=qp(s,r,t,n,i))==null)return t;if(r=0|s[xt],!Mn(e,r)){const o=Mh(t);o!==t&&(Rr(e)&&(s=e.v,r=0|s[xt]),r=Ne(s,r,n,t=o,i),As(s,r))}return t}function jp(e,t,n,i,s,r,o,a){var c=Mn(e,n);r=c?1:r,o=!!o||r===3,c=a&&!c,(r===2||c)&&Rr(e)&&(n=0|(t=e.v)[xt]);var l=(e=Sh(t,s))===Ts?7:0|e[xt],h=Eh(l,n);if(a=!(4&h)){var u=e,f=n;const d=!!(2&h);d&&(f|=2);let g=!d,_=!0,m=0,p=0;for(;m<u.length;m++){const T=vh(u[m],i,!1,f);if(T instanceof i){if(!d){const S=Mn(T);g&&=!S,_&&=S}u[p++]=T}}p<m&&(u.length=p),h|=4,h=_?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(ke(e,h),2&h&&Object.freeze(e)),c&&!(8&h||!e.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(ds(h)&&(e=Wn(e),h=ps(h,n),n=Ne(t,n,s,e)),i=e,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=Mh(u))&&(i[l]=h);c|=8,ke(e,h=c=i.length?4096|c:-4097&c)}return Gp(e,h,t,n,s,r,a,o)}function wi(e,t,n){const i=e.v;return jp(e,i,0|i[xt],t,n,ls(),!1,!0)}function Kp(e){return e==null&&(e=void 0),e}function wt(e,t,n,i,s){return oe(e,n,i=Kp(i),s),i&&!Mn(i)&&As(e.v),e}function Jr(e,t,n,i){t:{var s=i=Kp(i);Cr(e);const r=e.v;let o=0|r[xt];if(s==null){const a=Th(r);if(Ah(a,r,o,n)!==t)break t;a.set(n,0)}else o=Yp(r,o,n,t);Ne(r,o,t,s)}i&&!Mn(i)&&As(e.v)}function ps(e,t){return-273&(2&t?2|e:-3&e)}function wh(e,t,n,i){var s=i;Cr(e),e=jp(e,i=e.v,0|i[xt],n,t,2,!0),s=s??new n,e.push(s),t=n=e===Ts?7:0|e[xt],(s=Mn(s))?(n&=-9,e.length===1&&(n&=-4097)):n|=4096,n!==t&&ke(e,n),s||As(i)}function Ln(e,t,n){return br(Me(e,t,void 0,n))}function Ce(e,t){return Me(e,t,void 0,void 0,ti)??0}function Ri(e,t,n){if(n!=null){if(typeof n!="number"||!Pa(n))throw Ll("int32");n|=0}oe(e,t,n)}function At(e,t,n){oe(e,t,Yr(n))}function yn(e,t,n){ki(e,t,Mo(n),"")}function ma(e,t,n){{Cr(e);const o=e.v;let a=0|o[xt];if(n==null)Ne(o,a,t);else{var i=e=n===Ts?7:0|n[xt],s=ds(e),r=s||Object.isFrozen(n);for(s||(e=0),r||(n=Wn(n),i=0,e=ps(e,a),r=!1),e|=5,e|=(4&e?512&e?512:1024&e?1024:0:void 0)??1024,s=0;s<n.length;s++){const c=n[s],l=kp(c);Object.is(c,l)||(r&&(n=Wn(n),i=0,e=ps(e,a),r=!1),n[s]=l)}e!==i&&(r&&(n=Wn(n),e=ps(e,a)),ke(n,e)),Ne(o,a,t,n)}}}function Da(e,t,n){Cr(e),hs(e,t,Xe,2,!0).push(kp(n))}var Vs=class{constructor(e,t,n){if(this.buffer=e,n&&!t)throw Error();this.g=t}};function Rh(e,t){if(typeof e=="string")return new Vs(Tp(e),t);if(Array.isArray(e))return new Vs(new Uint8Array(e),t);if(e.constructor===Uint8Array)return new Vs(e,!1);if(e.constructor===ArrayBuffer)return e=new Uint8Array(e),new Vs(e,!1);if(e.constructor===ei)return t=fh(e)||new Uint8Array(0),new Vs(t,!0,e);if(e instanceof Uint8Array)return e=e.constructor===Uint8Array?e:new Uint8Array(e.buffer,e.byteOffset,e.byteLength),new Vs(e,!1);throw Error()}function Ch(e,t){let n,i=0,s=0,r=0;const o=e.h;let a=e.g;do n=o[a++],i|=(127&n)<<r,r+=7;while(r<32&&128&n);if(r>32)for(s|=(127&n)>>4,r=3;r<32&&128&n;r+=7)n=o[a++],s|=(127&n)<<r;if(ms(e,a),!(128&n))return t(i>>>0,s>>>0);throw Error()}function Ph(e){let t=0,n=e.g;const i=n+10,s=e.h;for(;n<i;){const r=s[n++];if(t|=r,(128&r)==0)return ms(e,n),!!(127&t)}throw Error()}function qi(e){const t=e.h;let n=e.g,i=t[n++],s=127&i;if(128&i&&(i=t[n++],s|=(127&i)<<7,128&i&&(i=t[n++],s|=(127&i)<<14,128&i&&(i=t[n++],s|=(127&i)<<21,128&i&&(i=t[n++],s|=i<<28,128&i&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++]&&128&t[n++])))))throw Error();return ms(e,n),s}function ii(e){return qi(e)>>>0}function ga(e){var t=e.h;const n=e.g;var i=t[n],s=t[n+1];const r=t[n+2];return t=t[n+3],ms(e,e.g+4),e=2*((s=(i<<0|s<<8|r<<16|t<<24)>>>0)>>31)+1,i=s>>>23&255,s&=8388607,i==255?s?NaN:e*(1/0):i==0?1401298464324817e-60*e*s:e*Math.pow(2,i-150)*(s+8388608)}function X3(e){return qi(e)}function ms(e,t){if(e.g=t,t>e.l)throw Error()}function Jp(e,t){if(t<0)throw Error();const n=e.g;if((t=n+t)>e.l)throw Error();return e.g=t,n}function Zp(e,t){if(t==0)return Ms();var n=Jp(e,t);return e.Y&&e.j?n=e.h.subarray(n,n+t):(e=e.h,n=n===(t=n+t)?new Uint8Array(0):b3?e.slice(n,t):new Uint8Array(e.subarray(n,t))),n.length==0?Ms():new ei(n,cr)}var kf=[];function $p(e,t,n,i){if(_a.length){const s=_a.pop();return s.o(i),s.g.init(e,t,n,i),s}return new Y3(e,t,n,i)}function Qp(e){e.g.clear(),e.l=-1,e.h=-1,_a.length<100&&_a.push(e)}function tm(e){var t=e.g;if(t.g==t.l)return!1;e.m=e.g.g;var n=ii(e.g);if(t=n>>>3,!((n&=7)>=0&&n<=5)||t<1)throw Error();return e.l=t,e.h=n,!0}function la(e){switch(e.h){case 0:e.h!=0?la(e):Ph(e.g);break;case 1:ms(e=e.g,e.g+8);break;case 2:if(e.h!=2)la(e);else{var t=ii(e.g);ms(e=e.g,e.g+t)}break;case 5:ms(e=e.g,e.g+4);break;case 3:for(t=e.l;;){if(!tm(e))throw Error();if(e.h==4){if(e.l!=t)throw Error();break}la(e)}break;default:throw Error()}}function yo(e,t,n){const i=e.g.l;var s=ii(e.g);let r=(s=e.g.g+s)-i;if(r<=0&&(e.g.l=s,n(t,e,void 0,void 0,void 0),r=s-e.g.g),r)throw Error();return e.g.g=s,e.g.l=i,t}function Lh(e){var t=ii(e.g),n=Jp(e=e.g,t);if(e=e.h,r3){var i,s=e;(i=Pc)||(i=Pc=new TextDecoder("utf-8",{fatal:!0})),t=n+t,s=n===0&&t===s.length?s:s.subarray(n,t);try{var r=i.decode(s)}catch(a){if(Jo===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Jo=!0}catch{Jo=!1}}throw!Jo&&(Pc=void 0),a}}else{t=(r=n)+t,n=[];let a,c=null;for(;r<t;){var o=e[r++];o<128?n.push(o):o<224?r>=t?is():(a=e[r++],o<194||(192&a)!=128?(r--,is()):n.push((31&o)<<6|63&a)):o<240?r>=t-1?is():(a=e[r++],(192&a)!=128||o===224&&a<160||o===237&&a>=160||(192&(i=e[r++]))!=128?(r--,is()):n.push((15&o)<<12|(63&a)<<6|63&i)):o<=244?r>=t-2?is():(a=e[r++],(192&a)!=128||a-144+(o<<28)>>30!=0||(192&(i=e[r++]))!=128||(192&(s=e[r++]))!=128?(r--,is()):(o=(7&o)<<18|(63&a)<<12|(63&i)<<6|63&s,o-=65536,n.push(55296+(o>>10&1023),56320+(1023&o)))):is(),n.length>=8192&&(c=Sf(c,n),n.length=0)}r=Sf(c,n)}return r}function em(e){const t=ii(e.g);return Zp(e.g,t)}function Ua(e,t,n){var i=ii(e.g);for(i=e.g.g+i;e.g.g<i;)n.push(t(e.g))}var Y3=class{constructor(e,t,n,i){if(kf.length){const s=kf.pop();s.init(e,t,n,i),e=s}else e=new class{constructor(s,r,o,a){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.init(s,r,o,a)}init(s,r,o,{Y:a=!1,ea:c=!1}={}){this.Y=a,this.ea=c,s&&(s=Rh(s,this.ea),this.h=s.buffer,this.j=s.g,this.m=r||0,this.l=o!==void 0?this.m+o:this.h.length,this.g=this.m)}clear(){this.h=null,this.j=!1,this.g=this.l=this.m=0,this.Y=!1}}(e,t,n,i);this.g=e,this.m=this.g.g,this.h=this.l=-1,this.o(i)}o({ha:e=!1}={}){this.ha=e}},_a=[];function zf(e){return e?/^\d+$/.test(e)?(Ca(e),new Nl(ve,Le)):null:q3||=new Nl(0,0)}var Nl=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let q3;function Hf(e){return e?/^-?\d+$/.test(e)?(Ca(e),new Fl(ve,Le)):null:j3||=new Fl(0,0)}var Fl=class{constructor(e,t){this.h=e>>>0,this.g=t>>>0}};let j3;function Qs(e,t,n){for(;n>0||t>127;)e.g.push(127&t|128),t=(t>>>7|n<<25)>>>0,n>>>=7;e.g.push(t)}function Lr(e,t){for(;t>127;)e.g.push(127&t|128),t>>>=7;e.g.push(t)}function Na(e,t){if(t>=0)Lr(e,t);else{for(let n=0;n<9;n++)e.g.push(127&t|128),t>>=7;e.g.push(1)}}function Ih(e){var t=ve;e.g.push(t>>>0&255),e.g.push(t>>>8&255),e.g.push(t>>>16&255),e.g.push(t>>>24&255)}function pr(e,t){t.length!==0&&(e.l.push(t),e.h+=t.length)}function In(e,t,n){Lr(e.g,8*t+n)}function Dh(e,t){return In(e,t,2),t=e.g.end(),pr(e,t),t.push(e.h),t}function Uh(e,t){var n=t.pop();for(n=e.h+e.g.length()-n;n>127;)t.push(127&n|128),n>>>=7,e.h++;t.push(n),e.h++}function Fa(e,t,n){In(e,t,2),Lr(e.g,n.length),pr(e,e.g.end()),pr(e,n)}function va(e,t,n,i){n!=null&&(t=Dh(e,t),i(n,e),Uh(e,t))}function oi(){const e=class{constructor(){throw Error()}};return Object.setPrototypeOf(e,e.prototype),e}var Nh=oi(),nm=oi(),Fh=oi(),Oh=oi(),Bh=oi(),im=oi(),K3=oi(),Oa=oi(),sm=oi(),rm=oi();function ai(e,t,n){var i=e.v;vn&&vn in i&&(i=i[vn])&&delete i[t.g],t.h?t.j(e,t.h,t.g,n,t.l):t.j(e,t.g,n,t.l)}var Mt=class{constructor(e,t){this.v=Hp(e,t,void 0,2048)}toJSON(){return zp(this)}j(){var e=PM,t=this.v,n=e.g,i=vn;if(Tr&&i&&t[i]?.[n]!=null&&lr(g3,3),t=e.g,Rf&&vn&&Rf===void 0&&(i=(n=this.v)[vn])&&(i=i.da))try{i(n,t,k3)}catch(s){Mp(s)}return e.h?e.m(this,e.h,e.g,e.l):e.m(this,e.g,e.defaultValue,e.l)}clone(){const e=this.v,t=0|e[xt];return yh(this,e,t)?xh(this,e,!0):new this.constructor(wr(e,t,!1))}};Mt.prototype[hr]=ur,Mt.prototype.toString=function(){return this.v.toString()};var Ir=class{constructor(e,t,n){this.g=e,this.h=t,e=Nh,this.l=!!e&&n===e||!1}};function Ba(e,t){return new Ir(e,t,Nh)}function om(e,t,n,i,s){va(e,n,hm(t,i),s)}const J3=Ba((function(e,t,n,i,s){return e.h===2&&(yo(e,bh(t,i,n),s),!0)}),om),Z3=Ba((function(e,t,n,i,s){return e.h===2&&(yo(e,bh(t,i,n),s),!0)}),om);var ka=Symbol(),za=Symbol(),Ol=Symbol(),Vf=Symbol(),Gf=Symbol();let am,cm;function bs(e,t,n,i){var s=i[e];if(s)return s;(s={}).qa=i,s.T=(function(u){switch(typeof u){case"boolean":return V3||=[0,void 0,!0];case"number":return u>0?void 0:u===0?G3||=[0,void 0]:[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1];let o=1;r&&r.constructor===Object&&(s.ba=r,typeof(r=i[++o])=="function"&&(s.ma=!0,am??=r,cm??=i[o+1],r=i[o+=2]));const a={};for(;r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)a[r[c]]=r;r=i[++o]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++o]);var l=void 0;if(r instanceof Ir?u=r:(u=J3,o--),u?.l){r=i[++o],l=i;var h=o;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++o])=="number"&&r<0&&(h-=r,r=i[++o]);c<h;c++){const f=a[c];l?n(s,c,u,l,f):t(s,c,u,f)}}return i[e]=s}function lm(e){return Array.isArray(e)?e[0]instanceof Ir?e:[Z3,e]:[e,void 0]}function hm(e,t){return e instanceof Mt?e.v:Array.isArray(e)?fs(e,t):void 0}function kh(e,t,n,i){const s=n.g;e[t]=i?(r,o,a)=>s(r,o,a,i):s}function zh(e,t,n,i,s){const r=n.g;let o,a;e[t]=(c,l,h)=>r(c,l,h,a||=bs(za,kh,zh,i).T,o||=Hh(i),s)}function Hh(e){let t=e[Ol];if(t!=null)return t;const n=bs(za,kh,zh,e);return t=n.ma?(i,s)=>am(i,s,n):(i,s)=>{for(;tm(s)&&s.h!=4;){var r=s.l,o=n[r];if(o==null){var a=n.ba;a&&(a=a[r])&&(a=Q3(a))!=null&&(o=n[r]=a)}if(o==null||!o(s,i,r)){if(o=(a=s).m,la(a),a.ha)var c=void 0;else c=a.g.g-o,a.g.g=o,c=Zp(a.g,c);o=void 0,a=i,c&&((o=a[vn]??(a[vn]=new Ul))[r]??(o[r]=[])).push(c)}}return(i=La(i))&&(i.da=n.qa[Gf]),!0},e[Ol]=t,e[Gf]=$3.bind(e),t}function $3(e,t,n,i){var s=this[za];const r=this[Ol],o=fs(void 0,s.T),a=La(e);if(a){var c=!1,l=s.ba;if(l){if(s=(h,u,f)=>{if(f.length!==0)if(l[u])for(const d of f){h=$p(d);try{c=!0,r(o,h)}finally{Qp(h)}}else i?.(e,u,f)},t==null)pa(a,s);else if(a!=null){const h=a[t];h&&s(a,t,h)}if(c){let h=0|e[xt];if(2&h&&2048&h&&!n?.Ka)throw Error();const u=Ar(h),f=(d,g)=>{if(bi(e,d,u)!=null){if(n?.Qa===1)return;throw Error()}g!=null&&(h=Ne(e,h,d,g,u)),delete a[d]};t==null?Cp(o,0|o[xt],((d,g)=>{f(d,g)})):f(t,bi(o,t,u))}}}}function Q3(e){const t=(e=lm(e))[0].g;if(e=e[1]){const n=Hh(e),i=bs(za,kh,zh,e).T;return(s,r,o)=>t(s,r,o,i,n)}return t}function Ha(e,t,n){e[t]=n.h}function Va(e,t,n,i){let s,r;const o=n.h;e[t]=(a,c,l)=>o(a,c,l,r||=bs(ka,Ha,Va,i).T,s||=um(i))}function um(e){let t=e[Vf];if(!t){const n=bs(ka,Ha,Va,e);t=(i,s)=>fm(i,s,n),e[Vf]=t}return t}function fm(e,t,n){Cp(e,0|e[xt],((i,s)=>{if(s!=null){var r=(function(o,a){var c=o[a];if(c)return c;if((c=o.ba)&&(c=c[a])){var l=(c=lm(c))[0].h;if(c=c[1]){const h=um(c),u=bs(ka,Ha,Va,c).T;c=o.ma?cm(u,h):(f,d,g)=>l(f,d,g,u,h)}else c=l;return o[a]=c}})(n,i);r?r(t,s,i):i<500||lr(Il,3)}})),(e=La(e))&&pa(e,((i,s,r)=>{for(pr(t,t.g.end()),i=0;i<r.length;i++)pr(t,fh(r[i])||new Uint8Array(0))}))}const tM=xn(0);function Dr(e,t){if(Array.isArray(t)){var n=0|t[xt];if(4&n)return t;for(var i=0,s=0;i<t.length;i++){const r=e(t[i]);r!=null&&(t[s++]=r)}return s<i&&(t.length=s),(e=-1537&(5|n))!==n&&ke(t,e),2&e&&Object.freeze(t),t}}function $e(e,t,n){return new Ir(e,t,n)}function Ur(e,t,n){return new Ir(e,t,n)}function Qe(e,t,n){Ne(e,0|e[xt],t,n,Ar(0|e[xt]))}var eM=Ba((function(e,t,n,i,s){if(e.h!==2)return!1;if(e=Wn(e=yo(e,fs([void 0,void 0],i),s)),s=Ar(i=0|t[xt]),2&i)throw Error();let r=bi(t,n,s);if(r instanceof Ai)(2&r.J)!=0?(r=r.V(),r.push(e),Ne(t,i,n,r,s)):r.Ma(e);else if(Array.isArray(r)){var o=0|r[xt];8192&o||ke(r,o|=8192),2&o&&(r=Xp(r),Ne(t,i,n,r,s)),r.push(e)}else Ne(t,i,n,ro([e]),s);return!0}),(function(e,t,n,i,s){if(t instanceof Ai)t.forEach(((r,o)=>{va(e,n,fs([o,r],i),s)}));else if(Array.isArray(t)){for(let r=0;r<t.length;r++){const o=t[r];Array.isArray(o)&&va(e,n,fs(o,i),s)}ro(t)}}));function dm(e,t,n){(t=ti(t))!=null&&(In(e,n,5),e=e.g,ph(t),Ih(e))}function pm(e,t,n){if(t=(function(i){if(i==null)return i;const s=typeof i;if(s==="bigint")return String(vo(64,i));if(xo(i)){if(s==="string")return Fp(i);if(s==="number")return _h(i)}})(t),t!=null&&(typeof t=="string"&&Hf(t),t!=null))switch(In(e,n,0),typeof t){case"number":e=e.g,fr(t),Qs(e,ve,Le);break;case"bigint":n=BigInt.asUintN(64,t),n=new Fl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qs(e.g,n.h,n.g);break;default:n=Hf(t),Qs(e.g,n.h,n.g)}}function mm(e,t,n){(t=br(t))!=null&&t!=null&&(In(e,n,0),Na(e.g,t))}function gm(e,t,n){(t=Dp(t))!=null&&(In(e,n,0),e.g.g.push(t?1:0))}function _m(e,t,n){(t=Xe(t))!=null&&Fa(e,n,xp(t))}function vm(e,t,n,i,s){va(e,n,hm(t,i),s)}function xm(e,t,n){(t=t==null||typeof t=="string"||t instanceof ei?t:void 0)!=null&&Fa(e,n,Rh(t,!0).buffer)}function Mm(e,t,n){(t=Up(t))!=null&&t!=null&&(In(e,n,0),Lr(e.g,t))}function ym(e,t,n){return(e.h===5||e.h===2)&&(t=Pr(t,0|t[xt],n),e.h==2?Ua(e,ga,t):t.push(ga(e.g)),!0)}var Ie=$e((function(e,t,n){return e.h===5&&(Qe(t,n,ga(e.g)),!0)}),dm,Oa),nM=Ur(ym,(function(e,t,n){if((t=Dr(ti,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(In(i,s,5),i=i.g,ph(r),Ih(i))}}),Oa),Vh=Ur(ym,(function(e,t,n){if((t=Dr(ti,t))!=null&&t.length){In(e,n,2),Lr(e.g,4*t.length);for(let i=0;i<t.length;i++)n=e.g,ph(t[i]),Ih(n)}}),Oa),iM=$e((function(e,t,n){return e.h===5&&(Qe(t,n,(e=ga(e.g))===0?void 0:e),!0)}),dm,Oa),ji=$e((function(e,t,n){return e.h!==0?e=!1:(Qe(t,n,Ch(e.g,Ip)),e=!0),e}),pm,im),Uc=$e((function(e,t,n){return e.h!==0?t=!1:(Qe(t,n,(e=Ch(e.g,Ip))===tM?void 0:e),t=!0),t}),pm,im),sM=$e((function(e,t,n){return e.h!==0?e=!1:(Qe(t,n,Ch(e.g,R3)),e=!0),e}),(function(e,t,n){if(t=(function(i){if(i==null)return i;var s=typeof i;if(s==="bigint")return String(C3(64,i));if(xo(i)){if(s==="string")return s=dr(Number(i)),Ss(s)&&s>=0?i=String(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),(s=i[0]!=="-"&&((s=i.length)<20||s===20&&i<="18446744073709551615"))||(Ca(i),i=oo(ve,Le))),i;if(s==="number")return(i=dr(i))>=0&&Ss(i)||(fr(i),i=Lp(ve,Le)),i}})(t),t!=null&&(typeof t=="string"&&zf(t),t!=null))switch(In(e,n,0),typeof t){case"number":e=e.g,fr(t),Qs(e,ve,Le);break;case"bigint":n=BigInt.asUintN(64,t),n=new Nl(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Qs(e.g,n.h,n.g);break;default:n=zf(t),Qs(e.g,n.h,n.g)}}),K3),Ue=$e((function(e,t,n){return e.h===0&&(Qe(t,n,qi(e.g)),!0)}),mm,Oh),So=Ur((function(e,t,n){return(e.h===0||e.h===2)&&(t=Pr(t,0|t[xt],n),e.h==2?Ua(e,qi,t):t.push(qi(e.g)),!0)}),(function(e,t,n){if((t=Dr(br,t))!=null&&t.length){n=Dh(e,n);for(let i=0;i<t.length;i++)Na(e.g,t[i]);Uh(e,n)}}),Oh),js=$e((function(e,t,n){return e.h===0&&(Qe(t,n,(e=qi(e.g))===0?void 0:e),!0)}),mm,Oh),ye=$e((function(e,t,n){return e.h===0&&(Qe(t,n,Ph(e.g)),!0)}),gm,nm),gs=$e((function(e,t,n){return e.h===0&&(Qe(t,n,(e=Ph(e.g))===!1?void 0:e),!0)}),gm,nm),Ke=Ur((function(e,t,n){return e.h===2&&(e=Lh(e),Pr(t,0|t[xt],n).push(e),!0)}),(function(e,t,n){if((t=Dr(Xe,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&Fa(i,s,xp(r))}}),Fh),Hi=$e((function(e,t,n){return e.h===2&&(Qe(t,n,(e=Lh(e))===""?void 0:e),!0)}),_m,Fh),ce=$e((function(e,t,n){return e.h===2&&(Qe(t,n,Lh(e)),!0)}),_m,Fh),Ve=(function(e,t,n=Nh){return new Ir(e,t,n)})((function(e,t,n,i,s){return e.h===2&&(i=fs(void 0,i),Pr(t,0|t[xt],n).push(i),yo(e,i,s),!0)}),(function(e,t,n,i,s){if(Array.isArray(t)){for(let r=0;r<t.length;r++)vm(e,t[r],n,i,s);1&(e=0|t[xt])||ke(t,1|e)}})),me=Ba((function(e,t,n,i,s,r){if(e.h!==2)return!1;let o=0|t[xt];return Yp(t,o,r,n,Ar(o)),yo(e,t=bh(t,i,n),s),!0}),vm),Sm=$e((function(e,t,n){return e.h===2&&(Qe(t,n,em(e)),!0)}),xm,sm),rM=Ur((function(e,t,n){return(e.h===0||e.h===2)&&(t=Pr(t,0|t[xt],n),e.h==2?Ua(e,ii,t):t.push(ii(e.g)),!0)}),(function(e,t,n){if((t=Dr(Up,t))!=null)for(let o=0;o<t.length;o++){var i=e,s=n,r=t[o];r!=null&&(In(i,s,0),Lr(i.g,r))}}),Bh),oM=$e((function(e,t,n){return e.h===0&&(Qe(t,n,(e=ii(e.g))===0?void 0:e),!0)}),Mm,Bh),Je=$e((function(e,t,n){return e.h===0&&(Qe(t,n,qi(e.g)),!0)}),(function(e,t,n){(t=br(t))!=null&&(t=parseInt(t,10),In(e,n,0),Na(e.g,t))}),rm);class aM{constructor(t,n){var i=En;this.g=t,this.h=n,this.m=Qt,this.j=wt,this.defaultValue=void 0,this.l=i.Oa!=null?Pp:void 0}register(){ba(this)}}function ci(e,t){return new aM(e,t)}function Ki(e,t){return(n,i)=>{{const r={ea:!0};i&&Object.assign(r,i),n=$p(n,void 0,void 0,r);try{const o=new e,a=o.v;Hh(t)(a,n);var s=o}finally{Qp(n)}}return s}}function Ga(e){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const o=this.g;return this.g=[],o}}}};fm(this.v,t,bs(ka,Ha,Va,e)),pr(t,t.g.end());const n=new Uint8Array(t.h),i=t.l,s=i.length;let r=0;for(let o=0;o<s;o++){const a=i[o];n.set(a,r),r+=a.length}return t.l=[n],n}}var Wf=class extends Mt{constructor(e){super(e)}},Xf=[0,Hi,$e((function(e,t,n){return e.h===2&&(Qe(t,n,(e=em(e))===Ms()?void 0:e),!0)}),(function(e,t,n){if(t!=null){if(t instanceof Mt){const i=t.Ra;return void(i?(t=i(t),t!=null&&Fa(e,n,Rh(t,!0).buffer)):lr(Il,3))}if(Array.isArray(t))return void lr(Il,3)}xm(e,t,n)}),sm)];let Nc,Yf=globalThis.trustedTypes;function qf(e){var t;return Nc===void 0&&(Nc=(function(){let n=null;if(!Yf)return n;try{const i=s=>s;n=Yf.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),e=(t=Nc)?t.createScriptURL(e):e,new class{constructor(n){this.g=n}toString(){return this.g+""}}(e)}function Zo(e,...t){if(t.length===0)return qf(e[0]);let n=e[0];for(let i=0;i<t.length;i++)n+=encodeURIComponent(t[i])+e[i+1];return qf(n)}var Em=[0,Ue,Je,ye,-1,So,Je,-1,ye],cM=class extends Mt{constructor(e){super(e)}},Tm=[0,ye,ce,ye,Je,-1,Ur((function(e,t,n){return(e.h===0||e.h===2)&&(t=Pr(t,0|t[xt],n),e.h==2?Ua(e,X3,t):t.push(qi(e.g)),!0)}),(function(e,t,n){if((t=Dr(br,t))!=null&&t.length){n=Dh(e,n);for(let i=0;i<t.length;i++)Na(e.g,t[i]);Uh(e,n)}}),rm),ce,-1,[0,ye,-1],Je,ye,-1],Am=[0,3,ye,-1,2,[0,[2],Ue,me,[0,$e((function(e,t,n){return e.h===0&&(Qe(t,n,ii(e.g)),!0)}),Mm,Bh)]],[0,Je,ye,Je,ye,Je,ye,ce,-1],[0,[3,4],ce,-1,me,[0,Ue],me,[0,Je]],[0]],bm=[0,ce,-2],jf=class extends Mt{constructor(e){super(e)}},wm=[0],Rm=[0,Ue,ye,1,ye,-4],En=class extends Mt{constructor(e){super(e,2)}},Fe={};Fe[336783863]=[0,ce,ye,-1,Ue,[0,[1,2,3,4,5,6,7,8,9],me,wm,me,Tm,me,bm,me,Rm,me,Em,me,[0,ce,-2],me,[0,ce,Je],me,Am,me,[0,Je,-1,ye]],[0,ce],ye,[0,[1,3],[2,4],me,[0,So],-1,me,[0,Ke],-1,Ve,[0,ce,-1]],ce];var Kf=[0,Uc,-1,gs,-3,Uc,So,Hi,js,Uc,-1,gs,js,gs,-2,Hi];function ge(e,t){Da(e,3,t)}function qt(e,t){Da(e,4,t)}var ln=class extends Mt{constructor(e){super(e,500)}o(e){return wt(this,0,7,e)}},Zr=[-1,{}],Jf=[0,ce,1,Zr],Zf=[0,ce,Ke,Zr];function Dn(e,t){wh(e,1,ln,t)}function Ee(e,t){Da(e,10,t)}function te(e,t){Da(e,15,t)}var Tn=class extends Mt{constructor(e){super(e,500)}o(e){return wt(this,0,1001,e)}},Cm=[-500,Ve,[-500,Hi,-1,Ke,-3,[-2,Fe,ye],Ve,Xf,js,-1,Jf,Zf,Ve,[0,Hi,gs],Hi,Kf,js,Ke,987,Ke],4,Ve,[-500,ce,-1,[-1,{}],998,ce],Ve,[-500,ce,Ke,-1,[-2,{},ye],997,Ke,-1],js,Ve,[-500,ce,Ke,Zr,998,Ke],Ke,js,Jf,Zf,Ve,[0,Hi,-1,Zr],Ke,-2,Kf,Hi,-1,gs,[0,gs,oM],978,Zr,Ve,Xf];Tn.prototype.g=Ga(Cm);var lM=Ki(Tn,Cm),hM=class extends Mt{constructor(e){super(e)}},Pm=class extends Mt{constructor(e){super(e)}g(){return wi(this,hM,1)}},Lm=[0,Ve,[0,Ue,Ie,ce,-1]],Wa=Ki(Pm,Lm),uM=class extends Mt{constructor(e){super(e)}},fM=class extends Mt{constructor(e){super(e)}},Fc=class extends Mt{constructor(e){super(e)}l(){return Qt(this,uM,2)}g(){return wi(this,fM,5)}},Im=Ki(class extends Mt{constructor(e){super(e)}},[0,Ke,So,Vh,[0,Je,[0,Ue,-3],[0,Ie,-3],[0,Ue,-1,[0,Ve,[0,Ue,-2]]],Ve,[0,Ie,-1,ce,Ie]],ce,-1,ji,Ve,[0,Ue,Ie],Ke,ji]),Dm=class extends Mt{constructor(e){super(e)}},tr=Ki(class extends Mt{constructor(e){super(e)}},[0,Ve,[0,Ie,-4]]),Um=class extends Mt{constructor(e){super(e)}},Eo=Ki(class extends Mt{constructor(e){super(e)}},[0,Ve,[0,Ie,-4]]),dM=class extends Mt{constructor(e){super(e)}},pM=[0,Ue,-1,Vh,Je],Nm=class extends Mt{constructor(e){super(e)}};Nm.prototype.g=Ga([0,Ie,-4,ji]);var mM=class extends Mt{constructor(e){super(e)}},gM=Ki(class extends Mt{constructor(e){super(e)}},[0,Ve,[0,1,Ue,ce,Lm],ji]),$f=class extends Mt{constructor(e){super(e)}},_M=class extends Mt{constructor(e){super(e)}na(){const e=Me(this,1,void 0,void 0,Wp);return e??Ms()}},vM=class extends Mt{constructor(e){super(e)}},Fm=[1,2],xM=Ki(class extends Mt{constructor(e){super(e)}},[0,Ve,[0,Fm,me,[0,Vh],me,[0,Sm],Ue,ce],ji]),Gh=class extends Mt{constructor(e){super(e)}},Om=[0,ce,Ue,Ie,Ke,-1],Qf=class extends Mt{constructor(e){super(e)}},MM=[0,ye,-1],td=class extends Mt{constructor(e){super(e)}},ha=[1,2,3,4,5,6],xa=class extends Mt{constructor(e){super(e)}g(){return Me(this,1,void 0,void 0,Wp)!=null}l(){return Xe(Me(this,2))!=null}},we=class extends Mt{constructor(e){super(e)}g(){return Dp(Me(this,2))??!1}},Bm=[0,Sm,ce,[0,Ue,ji,-1],[0,sM,ji]],De=[0,Bm,ye,[0,ha,me,Rm,me,Tm,me,Em,me,wm,me,bm,me,Am],Je],Xa=class extends Mt{constructor(e){super(e)}},Wh=[0,De,Ie,-1,Ue],yM=ci(502141897,Xa);Fe[502141897]=Wh;var SM=Ki(class extends Mt{constructor(e){super(e)}},[0,[0,Je,-1,nM,rM],pM]),km=class extends Mt{constructor(e){super(e)}},zm=class extends Mt{constructor(e){super(e)}},Bl=[0,De,Ie,[0,De],ye],EM=ci(508968150,zm);Fe[508968150]=[0,De,Wh,Bl,Ie,[0,[0,Bm]]],Fe[508968149]=Bl;var Gs=class extends Mt{constructor(e){super(e)}l(){return Qt(this,Gh,2)}g(){oe(this,2)}},Hm=[0,De,Om];Fe[478825465]=Hm;var TM=class extends Mt{constructor(e){super(e)}},Vm=class extends Mt{constructor(e){super(e)}},Xh=class extends Mt{constructor(e){super(e)}},Yh=class extends Mt{constructor(e){super(e)}},Gm=class extends Mt{constructor(e){super(e)}},ed=[0,De,[0,De],Hm,-1],Wm=[0,De,Ie,Ue],qh=[0,De,Ie],Xm=[0,De,Wm,qh,Ie],AM=ci(479097054,Gm);Fe[479097054]=[0,De,Xm,ed],Fe[463370452]=ed,Fe[464864288]=Wm;var bM=ci(462713202,Yh);Fe[462713202]=Xm,Fe[474472470]=qh;var wM=class extends Mt{constructor(e){super(e)}},Ym=class extends Mt{constructor(e){super(e)}},qm=class extends Mt{constructor(e){super(e)}},jm=class extends Mt{constructor(e){super(e)}},jh=[0,De,Ie,-1,Ue],kl=[0,De,Ie,ye];jm.prototype.g=Ga([0,De,qh,[0,De],Wh,Bl,jh,kl]);var Km=class extends Mt{constructor(e){super(e)}},RM=ci(456383383,Km);Fe[456383383]=[0,De,Om];var Jm=class extends Mt{constructor(e){super(e)}},CM=ci(476348187,Jm);Fe[476348187]=[0,De,MM];var Zm=class extends Mt{constructor(e){super(e)}},nd=class extends Mt{constructor(e){super(e)}},$m=[0,Je,-1],PM=ci(458105876,class extends Mt{constructor(e){super(e)}g(){let e;var t=this.v;const n=0|t[xt];return e=Mn(this,n),t=(function(i,s,r,o){var a=nd;!o&&Rr(i)&&(r=0|(s=i.v)[xt]);var c=bi(s,2);if(i=!1,c==null){if(o)return Ff();c=[]}else if(c.constructor===Ai){if(!(2&c.J)||o)return c;c=c.V()}else Array.isArray(c)?i=!!(2&(0|c[xt])):c=[];if(o){if(!c.length)return Ff();i||(i=!0,_o(c))}else i&&(i=!1,ro(c),c=Xp(c));return!i&&32&r&&go(c,32),r=Ne(s,r,2,o=new Ai(c,a,I3,void 0)),i||As(s,r),o})(this,t,n,e),!e&&nd&&(t.ra=!0),t}});Fe[458105876]=[0,$m,eM,[!0,ji,[0,ce,-1,Ke]],[0,So,ye,Je]];var Kh=class extends Mt{constructor(e){super(e)}},Qm=ci(458105758,Kh);Fe[458105758]=[0,De,ce,$m];var Oc=class extends Mt{constructor(e){super(e)}},id=[0,iM,-1,gs],LM=class extends Mt{constructor(e){super(e)}},t0=class extends Mt{constructor(e){super(e)}},zl=[1,2];t0.prototype.g=Ga([0,zl,me,id,me,[0,Ve,id]]);var e0=class extends Mt{constructor(e){super(e)}},IM=ci(443442058,e0);Fe[443442058]=[0,De,ce,Ue,Ie,Ke,-1,ye,Ie],Fe[514774813]=jh;var n0=class extends Mt{constructor(e){super(e)}},DM=ci(516587230,n0);function Hl(e,t){return t=t?t.clone():new Gh,e.displayNamesLocale!==void 0?oe(t,1,Mo(e.displayNamesLocale)):e.displayNamesLocale===void 0&&oe(t,1),e.maxResults!==void 0?Ri(t,2,e.maxResults):"maxResults"in e&&oe(t,2),e.scoreThreshold!==void 0?At(t,3,e.scoreThreshold):"scoreThreshold"in e&&oe(t,3),e.categoryAllowlist!==void 0?ma(t,4,e.categoryAllowlist):"categoryAllowlist"in e&&oe(t,4),e.categoryDenylist!==void 0?ma(t,5,e.categoryDenylist):"categoryDenylist"in e&&oe(t,5),t}function i0(e){const t=Number(e);return Number.isSafeInteger(t)?t:String(e)}function Jh(e,t=-1,n=""){return{categories:e.map((i=>({index:Ln(i,1)??0??-1,score:Ce(i,2)??0,categoryName:Xe(Me(i,3))??""??"",displayName:Xe(Me(i,4))??""??""}))),headIndex:t,headName:n}}function UM(e){const t={classifications:wi(e,mM,1).map((n=>Jh(Qt(n,Pm,4)?.g()??[],Ln(n,2)??0,Xe(Me(n,3))??"")))};return(function(n){return n==null?n:typeof n=="bigint"?(Dl(n)?n=Number(n):(n=vo(64,n),n=Dl(n)?Number(n):String(n)),n):xo(n)?typeof n=="number"?_h(n):Fp(n):void 0})(Me(e,2,void 0,void 0,da))!=null&&(t.timestampMs=i0(Me(e,2,void 0,void 0,da)??Vp)),t}function s0(e){var t=hs(e,3,ti,ls()),n=hs(e,2,br,ls()),i=hs(e,1,Xe,ls()),s=hs(e,9,Xe,ls());const r={categories:[],keypoints:[]};for(let o=0;o<t.length;o++)r.categories.push({score:t[o],index:n[o]??-1,categoryName:i[o]??"",displayName:s[o]??""});if((t=Qt(e,Fc,4)?.l())&&(r.boundingBox={originX:Ln(t,1,Oi)??0,originY:Ln(t,2,Oi)??0,width:Ln(t,3,Oi)??0,height:Ln(t,4,Oi)??0,angle:0}),Qt(e,Fc,4)?.g().length)for(const o of Qt(e,Fc,4).g())r.keypoints.push({x:Me(o,1,void 0,Oi,ti)??0,y:Me(o,2,void 0,Oi,ti)??0,score:Me(o,4,void 0,Oi,ti)??0,label:Xe(Me(o,3,void 0,Oi))??""});return r}function Ya(e){const t=[];for(const n of wi(e,Um,1))t.push({x:Ce(n,1)??0,y:Ce(n,2)??0,z:Ce(n,3)??0,visibility:Ce(n,4)??0});return t}function $r(e){const t=[];for(const n of wi(e,Dm,1))t.push({x:Ce(n,1)??0,y:Ce(n,2)??0,z:Ce(n,3)??0,visibility:Ce(n,4)??0});return t}function sd(e){return Array.from(e,(t=>t>127?t-256:t))}function rd(e,t){if(e.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${e.length} vs. ${t.length}).`);let n=0,i=0,s=0;for(let r=0;r<e.length;r++)n+=e[r]*t[r],i+=e[r]*e[r],s+=t[r]*t[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}let $o;Fe[516587230]=[0,De,jh,kl,Ie],Fe[518928384]=kl;const NM=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function r0(e){if(e)return!0;if($o===void 0)try{await WebAssembly.instantiate(NM),$o=!0}catch{$o=!1}return $o}async function Qo(e,t,n){return{wasmLoaderPath:`${t}/${e}_${n=`wasm${n?"_module":""}${await r0(n)?"":"_nosimd"}_internal`}.js`,wasmBinaryPath:`${t}/${e}_${n}.wasm`}}var Xs=class{};function o0(){var e=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(e)||!!((e=e.userAgent.match(/Version\/([\d]+).*Safari/))&&e.length>=1&&Number(e[1])>=17))}async function od(e){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=e.toString(),t.crossOrigin="anonymous",new Promise(((n,i)=>{t.addEventListener("load",(()=>{n()}),!1),t.addEventListener("error",(s=>{i(s)}),!1),document.body.appendChild(t)}))}try{importScripts(e.toString())}catch(t){if(!(t instanceof TypeError))throw t;{const n=self.import;n?await n(e.toString()):await import(e.toString())}}}function a0(e){return e.videoWidth!==void 0?[e.videoWidth,e.videoHeight]:e.naturalWidth!==void 0?[e.naturalWidth,e.naturalHeight]:e.displayWidth!==void 0?[e.displayWidth,e.displayHeight]:[e.width,e.height]}function St(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(t=e.i.stringToNewUTF8(t)),e.i._free(t)}function ad(e,t,n){if(!e.i.canvas)throw Error("No OpenGL canvas configured.");if(n?e.i._bindTextureToStream(n):e.i._bindTextureToCanvas(),!(n=e.i.canvas.getContext("webgl2")||e.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t),e.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,s]=a0(t);return!e.l||i===e.i.canvas.width&&s===e.i.canvas.height||(e.i.canvas.width=i,e.i.canvas.height=s),[i,s]}function cd(e,t,n){e.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let s=0;s<t.length;s++)i[s]=e.i.stringToNewUTF8(t[s]);t=e.i._malloc(4*i.length),e.i.HEAPU32.set(i,t>>2),n(t);for(const s of i)e.i._free(s);e.i._free(t)}function Kn(e,t,n){e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=n}function Bi(e,t,n){let i=[];e.i.simpleListeners=e.i.simpleListeners||{},e.i.simpleListeners[t]=(s,r,o)=>{r?(n(i,o),i=[]):i.push(s)}}Xs.forVisionTasks=function(e,t=!1){return Qo("vision",e??Zo``,t)},Xs.forTextTasks=function(e,t=!1){return Qo("text",e??Zo``,t)},Xs.forGenAiTasks=function(e,t=!1){return Qo("genai",e??Zo``,t)},Xs.forAudioTasks=function(e,t=!1){return Qo("audio",e??Zo``,t)},Xs.isSimdSupported=function(e=!1){return r0(e)};async function FM(e,t,n,i){return e=await(async(s,r,o,a,c)=>{if(r&&await od(r),!self.ModuleFactory||o&&(await od(o),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,a)})(e,n.wasmLoaderPath,n.assetLoaderPath,t,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),await e.o(i),e}function Bc(e,t){const n=Qt(e.baseOptions,xa,1)||new xa;typeof t=="string"?(oe(n,2,Mo(t)),oe(n,1)):t instanceof Uint8Array&&(oe(n,1,dh(t,!1)),oe(n,2)),wt(e.baseOptions,0,1,n)}function ld(e){try{const t=e.H.length;if(t===1)throw Error(e.H[0].message);if(t>1)throw Error("Encountered multiple errors: "+e.H.map((n=>n.message)).join(", "))}finally{e.H=[]}}function ft(e,t){e.C=Math.max(e.C,t)}function qa(e,t){e.B=new ln,yn(e.B,2,"PassThroughCalculator"),ge(e.B,"free_memory"),qt(e.B,"free_memory_unused_out"),Ee(t,"free_memory"),Dn(t,e.B)}function mr(e,t){ge(e.B,t),qt(e.B,t+"_unused_out")}function ja(e){e.g.addBoolToStream(!0,"free_memory",e.C)}var Vl=class{constructor(e){this.g=e,this.H=[],this.C=0,this.g.setAutoRenderToScreen(!1)}l(e,t=!0){if(t){const n=e.baseOptions||{};if(e.baseOptions?.modelAssetBuffer&&e.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(Qt(this.baseOptions,xa,1)?.g()||Qt(this.baseOptions,xa,1)?.l()||e.baseOptions?.modelAssetBuffer||e.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,s){let r=Qt(i.baseOptions,td,3);if(!r){var o=r=new td,a=new jf;Jr(o,4,ha,a)}"delegate"in s&&(s.delegate==="GPU"?(s=r,o=new cM,Jr(s,2,ha,o)):(s=r,o=new jf,Jr(s,4,ha,o))),wt(i.baseOptions,0,3,r)})(this,n),n.modelAssetPath)return fetch(n.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${n.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),Bc(this,"/model.dat"),this.m(),this.L()}));if(n.modelAssetBuffer instanceof Uint8Array)Bc(this,n.modelAssetBuffer);else if(n.modelAssetBuffer)return(async function(i){const s=[];for(var r=0;;){const{done:o,value:a}=await i.read();if(o)break;s.push(a),r+=a.length}if(s.length===0)return new Uint8Array(0);if(s.length===1)return s[0];i=new Uint8Array(r),r=0;for(const o of s)i.set(o,r),r+=o.length;return i})(n.modelAssetBuffer).then((i=>{Bc(this,i),this.m(),this.L()}))}return this.m(),this.L(),Promise.resolve()}L(){}ca(){let e;if(this.g.ca((t=>{e=lM(t)})),!e)throw Error("Failed to retrieve CalculatorGraphConfig");return e}setGraph(e,t){this.g.attachErrorListener(((n,i)=>{this.H.push(Error(i))})),this.g.Ja(),this.g.setGraph(e,t),this.B=void 0,ld(this)}finishProcessing(){this.g.finishProcessing(),ld(this)}close(){this.B=void 0,this.g.closeGraph()}};function Wi(e,t){if(!e)throw Error(`Unable to obtain required WebGL resource: ${t}`);return e}Vl.prototype.close=Vl.prototype.close;class OM{constructor(t,n,i,s){this.g=t,this.h=n,this.m=i,this.l=s}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function hd(e,t,n){const i=e.g;if(n=Wi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,t),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(e.h,n),n}function ud(e,t){const n=e.g,i=Wi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const s=Wi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(e.O),n.vertexAttribPointer(e.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const r=Wi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(e.L),n.vertexAttribPointer(e.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new OM(n,i,s,r)}function Zh(e,t){if(e.g){if(t!==e.g)throw Error("Cannot change GL context once initialized")}else e.g=t}function BM(e,t,n,i){return Zh(e,t),e.h||(e.m(),e.D()),n?(e.u||(e.u=ud(e,!0)),n=e.u):(e.A||(e.A=ud(e,!1)),n=e.A),t.useProgram(e.h),n.bind(),e.l(),e=i(),n.g.bindVertexArray(null),e}function c0(e,t,n){return Zh(e,t),e=Wi(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,e),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),e}function l0(e,t,n){Zh(e,t),e.B||(e.B=Wi(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,e.B),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,n,0)}function kM(e){e.g?.bindFramebuffer(e.g.FRAMEBUFFER,null)}var h0=class{H(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const e=this.g;if(this.h=Wi(e.createProgram(),"Failed to create WebGL program"),this.X=hd(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,e.VERTEX_SHADER),this.W=hd(this,this.H(),e.FRAGMENT_SHADER),e.linkProgram(this.h),!e.getProgramParameter(this.h,e.LINK_STATUS))throw Error(`Error during program linking: ${e.getProgramInfoLog(this.h)}`);this.O=e.getAttribLocation(this.h,"aVertex"),this.L=e.getAttribLocation(this.h,"aTex")}D(){}l(){}close(){if(this.h){const e=this.g;e.deleteProgram(this.h),e.deleteShader(this.X),e.deleteShader(this.W)}this.B&&this.g.deleteFramebuffer(this.B),this.A&&this.A.close(),this.u&&this.u.close()}};function vi(e,t){switch(t){case 0:return e.g.find((n=>n instanceof Uint8Array));case 1:return e.g.find((n=>n instanceof Float32Array));case 2:return e.g.find((n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Gl(e){var t=vi(e,1);if(!t){if(t=vi(e,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(e.width*e.height);const i=gr(e);var n=$h(e);if(l0(n,i,u0(e)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(e.width*e.height*4),i.readPixels(0,0,e.width,e.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<t.length;++s,r+=4)t[s]=n[r]}else i.readPixels(0,0,e.width,e.height,i.RED,i.FLOAT,t)}e.g.push(t)}return t}function u0(e){let t=vi(e,2);if(!t){const n=gr(e);t=d0(e);const i=Gl(e),s=f0(e);n.texImage2D(n.TEXTURE_2D,0,s,e.width,e.height,0,n.RED,n.FLOAT,i),Wl(e)}return t}function gr(e){if(!e.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return e.h||(e.h=Wi(e.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),e.h}function f0(e){if(e=gr(e),!ta)if(e.getExtension("EXT_color_buffer_float")&&e.getExtension("OES_texture_float_linear")&&e.getExtension("EXT_float_blend"))ta=e.R32F;else{if(!e.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ta=e.R16F}return ta}function $h(e){return e.l||(e.l=new h0),e.l}function d0(e){const t=gr(e);t.viewport(0,0,e.width,e.height),t.activeTexture(t.TEXTURE0);let n=vi(e,2);return n||(n=c0($h(e),t,e.m?t.LINEAR:t.NEAREST),e.g.push(n),e.j=!0),t.bindTexture(t.TEXTURE_2D,n),n}function Wl(e){e.h.bindTexture(e.h.TEXTURE_2D,null)}var ta,He=class{constructor(e,t,n,i,s,r,o){this.g=e,this.m=t,this.j=n,this.canvas=i,this.l=s,this.width=r,this.height=o,this.j&&--fd===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!vi(this,0)}ka(){return!!vi(this,1)}R(){return!!vi(this,2)}ja(){return(t=vi(e=this,0))||(t=Gl(e),t=new Uint8Array(t.map((n=>Math.round(255*n)))),e.g.push(t)),t;var e,t}ia(){return Gl(this)}N(){return u0(this)}clone(){const e=[];for(const t of this.g){let n;if(t instanceof Uint8Array)n=new Uint8Array(t);else if(t instanceof Float32Array)n=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=gr(this),s=$h(this);i.activeTexture(i.TEXTURE1),n=c0(s,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const r=f0(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),l0(s,i,n),BM(s,i,!1,(()=>{d0(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Wl(this)})),kM(s),Wl(this)}}e.push(n)}return new He(e,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&gr(this).deleteTexture(vi(this,2)),fd=-1}};He.prototype.close=He.prototype.close,He.prototype.clone=He.prototype.clone,He.prototype.getAsWebGLTexture=He.prototype.N,He.prototype.getAsFloat32Array=He.prototype.ia,He.prototype.getAsUint8Array=He.prototype.ja,He.prototype.hasWebGLTexture=He.prototype.R,He.prototype.hasFloat32Array=He.prototype.ka,He.prototype.hasUint8Array=He.prototype.Fa;var fd=250;function Xn(...e){return e.map((([t,n])=>({start:t,end:n})))}const zM=(function(e){return class extends e{Ja(){this.i._registerModelResourcesGraphService()}}})((dd=class{constructor(e,t){this.l=!0,this.i=e,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:o0()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(e){const t=await(await fetch(e)).arrayBuffer();e=!(e.endsWith(".pbtxt")||e.endsWith(".textproto")),this.setGraph(new Uint8Array(t),e)}setGraphFromString(e){this.setGraph(new TextEncoder().encode(e),!1)}setGraph(e,t){const n=e.length,i=this.i._malloc(n);this.i.HEAPU8.set(e,i),t?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(e,t,n,i,s){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),St(this,i||"input_audio",(r=>{St(this,s=s||"audio_header",(o=>{this.i._configureAudio(r,o,e,t??0,n)}))}))}setAutoResizeCanvas(e){this.l=e}setAutoRenderToScreen(e){this.i._setAutoRenderToScreen(e)}setGpuBufferVerticalFlip(e){this.i.gpuOriginForWebTexturesIsBottomLeft=e}ca(e){Kn(this,"__graph_config__",(t=>{e(t)})),St(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(e){this.i.errorListener=e}attachEmptyPacketListener(e,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[e]=t}addAudioToStream(e,t,n){this.addAudioToStreamWithShape(e,0,0,t,n)}addAudioToStreamWithShape(e,t,n,i,s){const r=4*e.length;this.h!==r&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(r),this.h=r),this.i.HEAPF32.set(e,this.g/4),St(this,i,(o=>{this.i._addAudioToInputStream(this.g,t,n,o,s)}))}addGpuBufferToStream(e,t,n){St(this,t,(i=>{const[s,r]=ad(this,e,i);this.i._addBoundTextureToStream(i,s,r,n)}))}addBoolToStream(e,t,n){St(this,t,(i=>{this.i._addBoolToInputStream(e,i,n)}))}addDoubleToStream(e,t,n){St(this,t,(i=>{this.i._addDoubleToInputStream(e,i,n)}))}addFloatToStream(e,t,n){St(this,t,(i=>{this.i._addFloatToInputStream(e,i,n)}))}addIntToStream(e,t,n){St(this,t,(i=>{this.i._addIntToInputStream(e,i,n)}))}addUintToStream(e,t,n){St(this,t,(i=>{this.i._addUintToInputStream(e,i,n)}))}addStringToStream(e,t,n){St(this,t,(i=>{St(this,e,(s=>{this.i._addStringToInputStream(s,i,n)}))}))}addStringRecordToStream(e,t,n){St(this,t,(i=>{cd(this,Object.keys(e),(s=>{cd(this,Object.values(e),(r=>{this.i._addFlatHashMapToInputStream(s,r,Object.keys(e).length,i,n)}))}))}))}addProtoToStream(e,t,n,i){St(this,n,(s=>{St(this,t,(r=>{const o=this.i._malloc(e.length);this.i.HEAPU8.set(e,o),this.i._addProtoToInputStream(o,e.length,r,s,i),this.i._free(o)}))}))}addEmptyPacketToStream(e,t){St(this,e,(n=>{this.i._addEmptyPacketToInputStream(n,t)}))}addBoolVectorToStream(e,t,n){St(this,t,(i=>{const s=this.i._allocateBoolVector(e.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(const r of e)this.i._addBoolVectorEntry(s,r);this.i._addBoolVectorToInputStream(s,i,n)}))}addDoubleVectorToStream(e,t,n){St(this,t,(i=>{const s=this.i._allocateDoubleVector(e.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(const r of e)this.i._addDoubleVectorEntry(s,r);this.i._addDoubleVectorToInputStream(s,i,n)}))}addFloatVectorToStream(e,t,n){St(this,t,(i=>{const s=this.i._allocateFloatVector(e.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(const r of e)this.i._addFloatVectorEntry(s,r);this.i._addFloatVectorToInputStream(s,i,n)}))}addIntVectorToStream(e,t,n){St(this,t,(i=>{const s=this.i._allocateIntVector(e.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(const r of e)this.i._addIntVectorEntry(s,r);this.i._addIntVectorToInputStream(s,i,n)}))}addUintVectorToStream(e,t,n){St(this,t,(i=>{const s=this.i._allocateUintVector(e.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of e)this.i._addUintVectorEntry(s,r);this.i._addUintVectorToInputStream(s,i,n)}))}addStringVectorToStream(e,t,n){St(this,t,(i=>{const s=this.i._allocateStringVector(e.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(const r of e)St(this,r,(o=>{this.i._addStringVectorEntry(s,o)}));this.i._addStringVectorToInputStream(s,i,n)}))}addBoolToInputSidePacket(e,t){St(this,t,(n=>{this.i._addBoolToInputSidePacket(e,n)}))}addDoubleToInputSidePacket(e,t){St(this,t,(n=>{this.i._addDoubleToInputSidePacket(e,n)}))}addFloatToInputSidePacket(e,t){St(this,t,(n=>{this.i._addFloatToInputSidePacket(e,n)}))}addIntToInputSidePacket(e,t){St(this,t,(n=>{this.i._addIntToInputSidePacket(e,n)}))}addUintToInputSidePacket(e,t){St(this,t,(n=>{this.i._addUintToInputSidePacket(e,n)}))}addStringToInputSidePacket(e,t){St(this,t,(n=>{St(this,e,(i=>{this.i._addStringToInputSidePacket(i,n)}))}))}addProtoToInputSidePacket(e,t,n){St(this,n,(i=>{St(this,t,(s=>{const r=this.i._malloc(e.length);this.i.HEAPU8.set(e,r),this.i._addProtoToInputSidePacket(r,e.length,s,i),this.i._free(r)}))}))}addBoolVectorToInputSidePacket(e,t){St(this,t,(n=>{const i=this.i._allocateBoolVector(e.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const s of e)this.i._addBoolVectorEntry(i,s);this.i._addBoolVectorToInputSidePacket(i,n)}))}addDoubleVectorToInputSidePacket(e,t){St(this,t,(n=>{const i=this.i._allocateDoubleVector(e.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const s of e)this.i._addDoubleVectorEntry(i,s);this.i._addDoubleVectorToInputSidePacket(i,n)}))}addFloatVectorToInputSidePacket(e,t){St(this,t,(n=>{const i=this.i._allocateFloatVector(e.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const s of e)this.i._addFloatVectorEntry(i,s);this.i._addFloatVectorToInputSidePacket(i,n)}))}addIntVectorToInputSidePacket(e,t){St(this,t,(n=>{const i=this.i._allocateIntVector(e.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const s of e)this.i._addIntVectorEntry(i,s);this.i._addIntVectorToInputSidePacket(i,n)}))}addUintVectorToInputSidePacket(e,t){St(this,t,(n=>{const i=this.i._allocateUintVector(e.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of e)this.i._addUintVectorEntry(i,s);this.i._addUintVectorToInputSidePacket(i,n)}))}addStringVectorToInputSidePacket(e,t){St(this,t,(n=>{const i=this.i._allocateStringVector(e.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const s of e)St(this,s,(r=>{this.i._addStringVectorEntry(i,r)}));this.i._addStringVectorToInputSidePacket(i,n)}))}attachBoolListener(e,t){Kn(this,e,t),St(this,e,(n=>{this.i._attachBoolListener(n)}))}attachBoolVectorListener(e,t){Bi(this,e,t),St(this,e,(n=>{this.i._attachBoolVectorListener(n)}))}attachIntListener(e,t){Kn(this,e,t),St(this,e,(n=>{this.i._attachIntListener(n)}))}attachIntVectorListener(e,t){Bi(this,e,t),St(this,e,(n=>{this.i._attachIntVectorListener(n)}))}attachUintListener(e,t){Kn(this,e,t),St(this,e,(n=>{this.i._attachUintListener(n)}))}attachUintVectorListener(e,t){Bi(this,e,t),St(this,e,(n=>{this.i._attachUintVectorListener(n)}))}attachDoubleListener(e,t){Kn(this,e,t),St(this,e,(n=>{this.i._attachDoubleListener(n)}))}attachDoubleVectorListener(e,t){Bi(this,e,t),St(this,e,(n=>{this.i._attachDoubleVectorListener(n)}))}attachFloatListener(e,t){Kn(this,e,t),St(this,e,(n=>{this.i._attachFloatListener(n)}))}attachFloatVectorListener(e,t){Bi(this,e,t),St(this,e,(n=>{this.i._attachFloatVectorListener(n)}))}attachStringListener(e,t){Kn(this,e,t),St(this,e,(n=>{this.i._attachStringListener(n)}))}attachStringVectorListener(e,t){Bi(this,e,t),St(this,e,(n=>{this.i._attachStringVectorListener(n)}))}attachProtoListener(e,t,n){Kn(this,e,t),St(this,e,(i=>{this.i._attachProtoListener(i,n||!1)}))}attachProtoVectorListener(e,t,n){Bi(this,e,t),St(this,e,(i=>{this.i._attachProtoVectorListener(i,n||!1)}))}attachAudioListener(e,t,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Kn(this,e,((i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,s)})),St(this,e,(i=>{this.i._attachAudioListener(i,n||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends dd{get ga(){return this.i}pa(e,t,n){St(this,t,(i=>{const[s,r]=ad(this,e,i);this.ga._addBoundTextureAsImageToStream(i,s,r,n)}))}Z(e,t){Kn(this,e,t),St(this,e,(n=>{this.ga._attachImageListener(n)}))}aa(e,t){Bi(this,e,t),St(this,e,(n=>{this.ga._attachImageVectorListener(n)}))}}));var dd,Yn=class extends zM{};async function Zt(e,t,n){return(async function(i,s,r,o){return FM(i,s,r,o)})(e,n.canvas??(o0()?void 0:document.createElement("canvas")),t,n)}function p0(e,t,n,i){if(e.U){const r=new Nm;if(n?.regionOfInterest){if(!e.oa)throw Error("This task doesn't support region-of-interest.");var s=n.regionOfInterest;if(s.left>=s.right||s.top>=s.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(s.left<0||s.top<0||s.right>1||s.bottom>1)throw Error("Expected RectF values to be in [0,1].");At(r,1,(s.left+s.right)/2),At(r,2,(s.top+s.bottom)/2),At(r,4,s.right-s.left),At(r,3,s.bottom-s.top)}else At(r,1,.5),At(r,2,.5),At(r,4,1),At(r,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(At(r,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){const[o,a]=a0(t);n=Ce(r,3)*a/o,s=Ce(r,4)*o/a,At(r,4,n),At(r,3,s)}}e.g.addProtoToStream(r.g(),"mediapipe.NormalizedRect",e.U,i)}e.g.pa(t,e.X,i??performance.now()),e.finishProcessing()}function qn(e,t,n){if(e.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");p0(e,t,n,e.C+1)}function li(e,t,n,i){if(!e.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");p0(e,t,n,i)}function _r(e,t,n,i){var s=t.data;const r=t.width,o=r*(t=t.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==o)throw Error("Unsupported channel count: "+s.length/o);return e=new He([s],n,!1,e.g.i.canvas,e.P,r,t),i?e.clone():e}var Sn=class extends Vl{constructor(e,t,n,i){super(e),this.g=e,this.X=t,this.U=n,this.oa=i,this.P=new h0}l(e,t=!0){if("runningMode"in e&&oe(this.baseOptions,2,ao(!!e.runningMode&&e.runningMode!=="IMAGE")),e.canvas!==void 0&&this.g.i.canvas!==e.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(e,t)}close(){this.P.close(),super.close()}};Sn.prototype.close=Sn.prototype.close;var Rn=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect_in",!1),this.j={detections:[]},wt(e=this.h=new Xa,0,1,t=new we),At(this.h,2,.5),At(this.h,3,.3)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"minDetectionConfidence"in e&&At(this.h,2,e.minDetectionConfidence??.5),"minSuppressionThreshold"in e&&At(this.h,3,e.minSuppressionThreshold??.3),this.l(e)}F(e,t){return this.j={detections:[]},qn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},li(this,e,n,t),this.j}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"norm_rect_in"),te(e,"detections");const t=new En;ai(t,yM,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect_in"),qt(n,"DETECTIONS:detections"),n.o(t),Dn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Im(r),this.j.detections.push(s0(i));ft(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Rn.prototype.detectForVideo=Rn.prototype.G,Rn.prototype.detect=Rn.prototype.F,Rn.prototype.setOptions=Rn.prototype.o,Rn.createFromModelPath=async function(e,t){return Zt(Rn,e,{baseOptions:{modelAssetPath:t}})},Rn.createFromModelBuffer=function(e,t){return Zt(Rn,e,{baseOptions:{modelAssetBuffer:t}})},Rn.createFromOptions=function(e,t){return Zt(Rn,e,t)};var Qh=Xn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),tu=Xn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),eu=Xn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),m0=Xn([474,475],[475,476],[476,477],[477,474]),nu=Xn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),iu=Xn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),g0=Xn([469,470],[470,471],[471,472],[472,469]),su=Xn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),_0=[...Qh,...tu,...eu,...nu,...iu,...su],v0=Xn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function pd(e){e.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ae=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,wt(e=this.h=new zm,0,1,t=new we),this.A=new km,wt(this.h,0,3,this.A),this.u=new Xa,wt(this.h,0,2,this.u),Ri(this.u,4,1),At(this.u,2,.5),At(this.A,2,.5),At(this.h,4,.5)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"numFaces"in e&&Ri(this.u,4,e.numFaces??1),"minFaceDetectionConfidence"in e&&At(this.u,2,e.minFaceDetectionConfidence??.5),"minTrackingConfidence"in e&&At(this.h,4,e.minTrackingConfidence??.5),"minFacePresenceConfidence"in e&&At(this.A,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in e&&(this.outputFacialTransformationMatrixes=!!e.outputFacialTransformationMatrixes),this.l(e)}F(e,t){return pd(this),qn(this,e,t),this.j}G(e,t,n){return pd(this),li(this,e,n,t),this.j}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"norm_rect"),te(e,"face_landmarks");const t=new En;ai(t,EM,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),qt(n,"NORM_LANDMARKS:face_landmarks"),n.o(t),Dn(e,n),this.g.attachProtoVectorListener("face_landmarks",((i,s)=>{for(const r of i)i=Eo(r),this.j.faceLandmarks.push(Ya(i));ft(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{ft(this,i)})),this.outputFaceBlendshapes&&(te(e,"blendshapes"),qt(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,s)=>{if(this.outputFaceBlendshapes)for(const r of i)i=Wa(r),this.j.faceBlendshapes.push(Jh(i.g()??[]));ft(this,s)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{ft(this,i)}))),this.outputFacialTransformationMatrixes&&(te(e,"face_geometry"),qt(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,s)=>{if(this.outputFacialTransformationMatrixes)for(const r of i)(i=Qt(i=SM(r),dM,2))&&this.j.facialTransformationMatrixes.push({rows:Ln(i,1)??0??0,columns:Ln(i,2)??0??0,data:hs(i,3,ti,ls()).slice()??[]});ft(this,s)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{ft(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Ae.prototype.detectForVideo=Ae.prototype.G,Ae.prototype.detect=Ae.prototype.F,Ae.prototype.setOptions=Ae.prototype.o,Ae.createFromModelPath=function(e,t){return Zt(Ae,e,{baseOptions:{modelAssetPath:t}})},Ae.createFromModelBuffer=function(e,t){return Zt(Ae,e,{baseOptions:{modelAssetBuffer:t}})},Ae.createFromOptions=function(e,t){return Zt(Ae,e,t)},Ae.FACE_LANDMARKS_LIPS=Qh,Ae.FACE_LANDMARKS_LEFT_EYE=tu,Ae.FACE_LANDMARKS_LEFT_EYEBROW=eu,Ae.FACE_LANDMARKS_LEFT_IRIS=m0,Ae.FACE_LANDMARKS_RIGHT_EYE=nu,Ae.FACE_LANDMARKS_RIGHT_EYEBROW=iu,Ae.FACE_LANDMARKS_RIGHT_IRIS=g0,Ae.FACE_LANDMARKS_FACE_OVAL=su,Ae.FACE_LANDMARKS_CONTOURS=_0,Ae.FACE_LANDMARKS_TESSELATION=v0;var ru=Xn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function md(e){e.gestures=[],e.landmarks=[],e.worldLandmarks=[],e.handedness=[]}function gd(e){return e.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:e.gestures,landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handedness:e.handedness,handednesses:e.handedness}}function _d(e,t=!0){const n=[];for(const s of e){var i=Wa(s);e=[];for(const r of i.g())i=t&&Ln(r,1)!=null?Ln(r,1)??0:-1,e.push({score:Ce(r,2)??0,index:i,categoryName:Xe(Me(r,3))??""??"",displayName:Xe(Me(r,4))??""??""});n.push(e)}return n}var dn=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],wt(e=this.j=new Gm,0,1,t=new we),this.u=new Yh,wt(this.j,0,2,this.u),this.D=new Xh,wt(this.u,0,3,this.D),this.A=new Vm,wt(this.u,0,2,this.A),this.h=new TM,wt(this.j,0,3,this.h),At(this.A,2,.5),At(this.u,4,.5),At(this.D,2,.5)}get baseOptions(){return Qt(this.j,we,1)}set baseOptions(e){wt(this.j,0,1,e)}o(e){if(Ri(this.A,3,e.numHands??1),"minHandDetectionConfidence"in e&&At(this.A,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&At(this.u,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&At(this.D,2,e.minHandPresenceConfidence??.5),e.cannedGesturesClassifierOptions){var t=new Gs,n=t,i=Hl(e.cannedGesturesClassifierOptions,Qt(this.h,Gs,3)?.l());wt(n,0,2,i),wt(this.h,0,3,t)}else e.cannedGesturesClassifierOptions===void 0&&Qt(this.h,Gs,3)?.g();return e.customGesturesClassifierOptions?(wt(n=t=new Gs,0,2,i=Hl(e.customGesturesClassifierOptions,Qt(this.h,Gs,4)?.l())),wt(this.h,0,4,t)):e.customGesturesClassifierOptions===void 0&&Qt(this.h,Gs,4)?.g(),this.l(e)}Ha(e,t){return md(this),qn(this,e,t),gd(this)}Ia(e,t,n){return md(this),li(this,e,n,t),gd(this)}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"norm_rect"),te(e,"hand_gestures"),te(e,"hand_landmarks"),te(e,"world_hand_landmarks"),te(e,"handedness");const t=new En;ai(t,AM,this.j);const n=new ln;yn(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),qt(n,"HAND_GESTURES:hand_gestures"),qt(n,"LANDMARKS:hand_landmarks"),qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),qt(n,"HANDEDNESS:handedness"),n.o(t),Dn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i){i=Eo(r);const o=[];for(const a of wi(i,Um,1))o.push({x:Ce(a,1)??0,y:Ce(a,2)??0,z:Ce(a,3)??0,visibility:Ce(a,4)??0});this.landmarks.push(o)}ft(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ft(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i){i=tr(r);const o=[];for(const a of wi(i,Dm,1))o.push({x:Ce(a,1)??0,y:Ce(a,2)??0,z:Ce(a,3)??0,visibility:Ce(a,4)??0});this.worldLandmarks.push(o)}ft(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ft(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,s)=>{this.gestures.push(..._d(i,!1)),ft(this,s)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{ft(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{this.handedness.push(..._d(i)),ft(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};function vd(e){return{landmarks:e.landmarks,worldLandmarks:e.worldLandmarks,handednesses:e.handedness,handedness:e.handedness}}dn.prototype.recognizeForVideo=dn.prototype.Ia,dn.prototype.recognize=dn.prototype.Ha,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(e,t){return Zt(dn,e,{baseOptions:{modelAssetPath:t}})},dn.createFromModelBuffer=function(e,t){return Zt(dn,e,{baseOptions:{modelAssetBuffer:t}})},dn.createFromOptions=function(e,t){return Zt(dn,e,t)},dn.HAND_CONNECTIONS=ru;var on=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],wt(e=this.h=new Yh,0,1,t=new we),this.u=new Xh,wt(this.h,0,3,this.u),this.j=new Vm,wt(this.h,0,2,this.j),Ri(this.j,3,1),At(this.j,2,.5),At(this.u,2,.5),At(this.h,4,.5)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"numHands"in e&&Ri(this.j,3,e.numHands??1),"minHandDetectionConfidence"in e&&At(this.j,2,e.minHandDetectionConfidence??.5),"minTrackingConfidence"in e&&At(this.h,4,e.minTrackingConfidence??.5),"minHandPresenceConfidence"in e&&At(this.u,2,e.minHandPresenceConfidence??.5),this.l(e)}F(e,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],qn(this,e,t),vd(this)}G(e,t,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],li(this,e,n,t),vd(this)}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"norm_rect"),te(e,"hand_landmarks"),te(e,"world_hand_landmarks"),te(e,"handedness");const t=new En;ai(t,bM,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),qt(n,"LANDMARKS:hand_landmarks"),qt(n,"WORLD_LANDMARKS:world_hand_landmarks"),qt(n,"HANDEDNESS:handedness"),n.o(t),Dn(e,n),this.g.attachProtoVectorListener("hand_landmarks",((i,s)=>{for(const r of i)i=Eo(r),this.landmarks.push(Ya(i));ft(this,s)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{ft(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,s)=>{for(const r of i)i=tr(r),this.worldLandmarks.push($r(i));ft(this,s)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{ft(this,i)})),this.g.attachProtoVectorListener("handedness",((i,s)=>{var r=this.handedness,o=r.push;const a=[];for(const c of i){i=Wa(c);const l=[];for(const h of i.g())l.push({score:Ce(h,2)??0,index:Ln(h,1)??0??-1,categoryName:Xe(Me(h,3))??""??"",displayName:Xe(Me(h,4))??""??""});a.push(l)}o.call(r,...a),ft(this,s)})),this.g.attachEmptyPacketListener("handedness",(i=>{ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};on.prototype.detectForVideo=on.prototype.G,on.prototype.detect=on.prototype.F,on.prototype.setOptions=on.prototype.o,on.createFromModelPath=function(e,t){return Zt(on,e,{baseOptions:{modelAssetPath:t}})},on.createFromModelBuffer=function(e,t){return Zt(on,e,{baseOptions:{modelAssetBuffer:t}})},on.createFromOptions=function(e,t){return Zt(on,e,t)},on.HAND_CONNECTIONS=ru;var x0=Xn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function xd(e){e.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Md(e){try{if(!e.D)return e.h;e.D(e.h)}finally{ja(e)}}function ea(e,t){e=Eo(e),t.push(Ya(e))}var pe=class extends Sn{constructor(e,t){super(new Yn(e,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,wt(e=this.j=new jm,0,1,t=new we),this.I=new Xh,wt(this.j,0,2,this.I),this.W=new wM,wt(this.j,0,3,this.W),this.u=new Xa,wt(this.j,0,4,this.u),this.O=new km,wt(this.j,0,5,this.O),this.A=new Ym,wt(this.j,0,6,this.A),this.M=new qm,wt(this.j,0,7,this.M),At(this.u,2,.5),At(this.u,3,.3),At(this.O,2,.5),At(this.A,2,.5),At(this.A,3,.3),At(this.M,2,.5),At(this.I,2,.5)}get baseOptions(){return Qt(this.j,we,1)}set baseOptions(e){wt(this.j,0,1,e)}o(e){return"minFaceDetectionConfidence"in e&&At(this.u,2,e.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in e&&At(this.u,3,e.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in e&&At(this.O,2,e.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in e&&(this.outputFaceBlendshapes=!!e.outputFaceBlendshapes),"minPoseDetectionConfidence"in e&&At(this.A,2,e.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in e&&At(this.A,3,e.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in e&&At(this.M,2,e.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in e&&(this.outputPoseSegmentationMasks=!!e.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in e&&At(this.I,2,e.minHandLandmarksConfidence??.5),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.D=typeof t=="function"?t:n,xd(this),qn(this,e,i),Md(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.D=typeof n=="function"?n:i,xd(this),li(this,e,s,t),Md(this)}m(){var e=new Tn;Ee(e,"input_frames_image"),te(e,"pose_landmarks"),te(e,"pose_world_landmarks"),te(e,"face_landmarks"),te(e,"left_hand_landmarks"),te(e,"left_hand_world_landmarks"),te(e,"right_hand_landmarks"),te(e,"right_hand_world_landmarks");const t=new En,n=new Wf;yn(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))oe(s,2,Ia(r,0,co));else{if(!(typeof r=="string"||r instanceof ei||uh(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");ki(s,2,dh(r,!1),Ms())}})(n,this.j.g());const i=new ln;yn(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),wh(i,8,Wf,n),ge(i,"IMAGE:input_frames_image"),qt(i,"POSE_LANDMARKS:pose_landmarks"),qt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),qt(i,"FACE_LANDMARKS:face_landmarks"),qt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),qt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),qt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),qt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),Dn(e,i),qa(this,e),this.g.attachProtoListener("pose_landmarks",((s,r)=>{ea(s,this.h.poseLandmarks),ft(this,r)})),this.g.attachEmptyPacketListener("pose_landmarks",(s=>{ft(this,s)})),this.g.attachProtoListener("pose_world_landmarks",((s,r)=>{var o=this.h.poseWorldLandmarks;s=tr(s),o.push($r(s)),ft(this,r)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(s=>{ft(this,s)})),this.outputPoseSegmentationMasks&&(qt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),mr(this,"pose_segmentation_mask"),this.g.Z("pose_segmentation_mask",((s,r)=>{this.h.poseSegmentationMasks=[_r(this,s,!0,!this.D)],ft(this,r)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(s=>{this.h.poseSegmentationMasks=[],ft(this,s)}))),this.g.attachProtoListener("face_landmarks",((s,r)=>{ea(s,this.h.faceLandmarks),ft(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(s=>{ft(this,s)})),this.outputFaceBlendshapes&&(te(e,"extra_blendshapes"),qt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((s,r)=>{var o=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(s=Wa(s),o.push(Jh(s.g()??[]))),ft(this,r)})),this.g.attachEmptyPacketListener("extra_blendshapes",(s=>{ft(this,s)}))),this.g.attachProtoListener("left_hand_landmarks",((s,r)=>{ea(s,this.h.leftHandLandmarks),ft(this,r)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(s=>{ft(this,s)})),this.g.attachProtoListener("left_hand_world_landmarks",((s,r)=>{var o=this.h.leftHandWorldLandmarks;s=tr(s),o.push($r(s)),ft(this,r)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(s=>{ft(this,s)})),this.g.attachProtoListener("right_hand_landmarks",((s,r)=>{ea(s,this.h.rightHandLandmarks),ft(this,r)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(s=>{ft(this,s)})),this.g.attachProtoListener("right_hand_world_landmarks",((s,r)=>{var o=this.h.rightHandWorldLandmarks;s=tr(s),o.push($r(s)),ft(this,r)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(s=>{ft(this,s)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};pe.prototype.detectForVideo=pe.prototype.G,pe.prototype.detect=pe.prototype.F,pe.prototype.setOptions=pe.prototype.o,pe.createFromModelPath=function(e,t){return Zt(pe,e,{baseOptions:{modelAssetPath:t}})},pe.createFromModelBuffer=function(e,t){return Zt(pe,e,{baseOptions:{modelAssetBuffer:t}})},pe.createFromOptions=function(e,t){return Zt(pe,e,t)},pe.HAND_CONNECTIONS=ru,pe.POSE_CONNECTIONS=x0,pe.FACE_LANDMARKS_LIPS=Qh,pe.FACE_LANDMARKS_LEFT_EYE=tu,pe.FACE_LANDMARKS_LEFT_EYEBROW=eu,pe.FACE_LANDMARKS_LEFT_IRIS=m0,pe.FACE_LANDMARKS_RIGHT_EYE=nu,pe.FACE_LANDMARKS_RIGHT_EYEBROW=iu,pe.FACE_LANDMARKS_RIGHT_IRIS=g0,pe.FACE_LANDMARKS_FACE_OVAL=su,pe.FACE_LANDMARKS_CONTOURS=_0,pe.FACE_LANDMARKS_TESSELATION=v0;var Cn=class extends Sn{constructor(e,t){super(new Yn(e,t),"input_image","norm_rect",!0),this.j={classifications:[]},wt(e=this.h=new Km,0,1,t=new we)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return wt(this.h,0,2,Hl(e,Qt(this.h,Gh,2))),this.l(e)}sa(e,t){return this.j={classifications:[]},qn(this,e,t),this.j}ta(e,t,n){return this.j={classifications:[]},li(this,e,n,t),this.j}m(){var e=new Tn;Ee(e,"input_image"),Ee(e,"norm_rect"),te(e,"classifications");const t=new En;ai(t,RM,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ge(n,"IMAGE:input_image"),ge(n,"NORM_RECT:norm_rect"),qt(n,"CLASSIFICATIONS:classifications"),n.o(t),Dn(e,n),this.g.attachProtoListener("classifications",((i,s)=>{this.j=UM(gM(i)),ft(this,s)})),this.g.attachEmptyPacketListener("classifications",(i=>{ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Cn.prototype.classifyForVideo=Cn.prototype.ta,Cn.prototype.classify=Cn.prototype.sa,Cn.prototype.setOptions=Cn.prototype.o,Cn.createFromModelPath=function(e,t){return Zt(Cn,e,{baseOptions:{modelAssetPath:t}})},Cn.createFromModelBuffer=function(e,t){return Zt(Cn,e,{baseOptions:{modelAssetBuffer:t}})},Cn.createFromOptions=function(e,t){return Zt(Cn,e,t)};var pn=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect",!0),this.h=new Jm,this.embeddings={embeddings:[]},wt(e=this.h,0,1,t=new we)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){var t=this.h,n=Qt(this.h,Qf,2);return n=n?n.clone():new Qf,e.l2Normalize!==void 0?oe(n,1,ao(e.l2Normalize)):"l2Normalize"in e&&oe(n,1),e.quantize!==void 0?oe(n,2,ao(e.quantize)):"quantize"in e&&oe(n,2),wt(t,0,2,n),this.l(e)}za(e,t){return qn(this,e,t),this.embeddings}Aa(e,t,n){return li(this,e,n,t),this.embeddings}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"norm_rect"),te(e,"embeddings_out");const t=new En;ai(t,CM,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),qt(n,"EMBEDDINGS:embeddings_out"),n.o(t),Dn(e,n),this.g.attachProtoListener("embeddings_out",((i,s)=>{i=xM(i),this.embeddings=(function(r){return{embeddings:wi(r,vM,1).map((o=>{const a={headIndex:Ln(o,3)??0??-1,headName:Xe(Me(o,4))??""??""};var c=o.v;return qp(c,0|c[xt],$f,Dc(o,1))!==void 0?(o=hs(o=Qt(o,$f,Dc(o,1),void 0),1,ti,ls()),a.floatEmbedding=o.slice()):(c=new Uint8Array(0),a.quantizedEmbedding=Qt(o,_M,Dc(o,2),void 0)?.na()?.h()??c),a})),timestampMs:i0(Me(r,2,void 0,void 0,da)??Vp)}})(i),ft(this,s)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};pn.cosineSimilarity=function(e,t){if(e.floatEmbedding&&t.floatEmbedding)e=rd(e.floatEmbedding,t.floatEmbedding);else{if(!e.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");e=rd(sd(e.quantizedEmbedding),sd(t.quantizedEmbedding))}return e},pn.prototype.embedForVideo=pn.prototype.Aa,pn.prototype.embed=pn.prototype.za,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(e,t){return Zt(pn,e,{baseOptions:{modelAssetPath:t}})},pn.createFromModelBuffer=function(e,t){return Zt(pn,e,{baseOptions:{modelAssetBuffer:t}})},pn.createFromOptions=function(e,t){return Zt(pn,e,t)};var Xl=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};function HM(e){const t=(function(n){return wi(n,ln,1)})(e.ca()).filter((n=>(Xe(Me(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(e.u=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(Qt(t[0],En,7)?.j()?.g()??new Map).forEach(((n,i)=>{e.u[Number(i)]=Xe(Me(n,1))??""}))}function yd(e){e.categoryMask=void 0,e.confidenceMasks=void 0,e.qualityScores=void 0}function Sd(e){try{const t=new Xl(e.confidenceMasks,e.categoryMask,e.qualityScores);if(!e.j)return t;e.j(t)}finally{ja(e)}}Xl.prototype.close=Xl.prototype.close;var rn=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect",!1),this.u=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Kh,this.A=new Zm,wt(this.h,0,3,this.A),wt(e=this.h,0,1,t=new we)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?oe(this.h,2,Mo(e.displayNamesLocale)):"displayNamesLocale"in e&&oe(this.h,2),"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}L(){HM(this)}segment(e,t,n){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:n,yd(this),qn(this,e,i),Sd(this)}La(e,t,n,i){const s=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,yd(this),li(this,e,s,t),Sd(this)}Da(){return this.u}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"norm_rect");const t=new En;ai(t,Qm,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),n.o(t),Dn(e,n),qa(this,e),this.outputConfidenceMasks&&(te(e,"confidence_masks"),qt(n,"CONFIDENCE_MASKS:confidence_masks"),mr(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>_r(this,r,!0,!this.j))),ft(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ft(this,i)}))),this.outputCategoryMask&&(te(e,"category_mask"),qt(n,"CATEGORY_MASK:category_mask"),mr(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=_r(this,i,!1,!this.j),ft(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ft(this,i)}))),te(e,"quality_scores"),qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,ft(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};rn.prototype.getLabels=rn.prototype.Da,rn.prototype.segmentForVideo=rn.prototype.La,rn.prototype.segment=rn.prototype.segment,rn.prototype.setOptions=rn.prototype.o,rn.createFromModelPath=function(e,t){return Zt(rn,e,{baseOptions:{modelAssetPath:t}})},rn.createFromModelBuffer=function(e,t){return Zt(rn,e,{baseOptions:{modelAssetBuffer:t}})},rn.createFromOptions=function(e,t){return Zt(rn,e,t)};var Yl=class{constructor(e,t,n){this.confidenceMasks=e,this.categoryMask=t,this.qualityScores=n}close(){this.confidenceMasks?.forEach((e=>{e.close()})),this.categoryMask?.close()}};Yl.prototype.close=Yl.prototype.close;var Jn=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Kh,this.u=new Zm,wt(this.h,0,3,this.u),wt(e=this.h,0,1,t=new we)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"outputCategoryMask"in e&&(this.outputCategoryMask=e.outputCategoryMask??!1),"outputConfidenceMasks"in e&&(this.outputConfidenceMasks=e.outputConfidenceMasks??!0),super.l(e)}segment(e,t,n,i){const s=typeof n!="function"?n:{};if(this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.C+1,i=new t0,t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var r=new Oc;ki(r,3,ao(!0),!1),ki(r,1,Yr(t.keypoint.x),0),ki(r,2,Yr(t.keypoint.y),0),Jr(i,1,zl,r)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");{const a=new LM;for(r of t.scribble)ki(t=new Oc,3,ao(!0),!1),ki(t,1,Yr(r.x),0),ki(t,2,Yr(r.y),0),wh(a,1,Oc,t);Jr(i,2,zl,a)}}this.g.addProtoToStream(i.g(),"mediapipe.tasks.vision.interactive_segmenter.proto.RegionOfInterest","roi_in",n),qn(this,e,s);t:{try{const a=new Yl(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var o=a;break t}this.j(a)}finally{ja(this)}o=void 0}return o}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"roi_in"),Ee(e,"norm_rect_in");const t=new En;ai(t,Qm,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraphV2"),ge(n,"IMAGE:image_in"),ge(n,"ROI:roi_in"),ge(n,"NORM_RECT:norm_rect_in"),n.o(t),Dn(e,n),qa(this,e),this.outputConfidenceMasks&&(te(e,"confidence_masks"),qt(n,"CONFIDENCE_MASKS:confidence_masks"),mr(this,"confidence_masks"),this.g.aa("confidence_masks",((i,s)=>{this.confidenceMasks=i.map((r=>_r(this,r,!0,!this.j))),ft(this,s)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],ft(this,i)}))),this.outputCategoryMask&&(te(e,"category_mask"),qt(n,"CATEGORY_MASK:category_mask"),mr(this,"category_mask"),this.g.Z("category_mask",((i,s)=>{this.categoryMask=_r(this,i,!1,!this.j),ft(this,s)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,ft(this,i)}))),te(e,"quality_scores"),qt(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,s)=>{this.qualityScores=i,ft(this,s)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Jn.prototype.segment=Jn.prototype.segment,Jn.prototype.setOptions=Jn.prototype.o,Jn.createFromModelPath=function(e,t){return Zt(Jn,e,{baseOptions:{modelAssetPath:t}})},Jn.createFromModelBuffer=function(e,t){return Zt(Jn,e,{baseOptions:{modelAssetBuffer:t}})},Jn.createFromOptions=function(e,t){return Zt(Jn,e,t)};var Pn=class extends Sn{constructor(e,t){super(new Yn(e,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},wt(e=this.h=new e0,0,1,t=new we)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return e.displayNamesLocale!==void 0?oe(this.h,2,Mo(e.displayNamesLocale)):"displayNamesLocale"in e&&oe(this.h,2),e.maxResults!==void 0?Ri(this.h,3,e.maxResults):"maxResults"in e&&oe(this.h,3),e.scoreThreshold!==void 0?At(this.h,4,e.scoreThreshold):"scoreThreshold"in e&&oe(this.h,4),e.categoryAllowlist!==void 0?ma(this.h,5,e.categoryAllowlist):"categoryAllowlist"in e&&oe(this.h,5),e.categoryDenylist!==void 0?ma(this.h,6,e.categoryDenylist):"categoryDenylist"in e&&oe(this.h,6),this.l(e)}F(e,t){return this.j={detections:[]},qn(this,e,t),this.j}G(e,t,n){return this.j={detections:[]},li(this,e,n,t),this.j}m(){var e=new Tn;Ee(e,"input_frame_gpu"),Ee(e,"norm_rect"),te(e,"detections");const t=new En;ai(t,IM,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),ge(n,"IMAGE:input_frame_gpu"),ge(n,"NORM_RECT:norm_rect"),qt(n,"DETECTIONS:detections"),n.o(t),Dn(e,n),this.g.attachProtoVectorListener("detections",((i,s)=>{for(const r of i)i=Im(r),this.j.detections.push(s0(i));ft(this,s)})),this.g.attachEmptyPacketListener("detections",(i=>{ft(this,i)})),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};Pn.prototype.detectForVideo=Pn.prototype.G,Pn.prototype.detect=Pn.prototype.F,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=async function(e,t){return Zt(Pn,e,{baseOptions:{modelAssetPath:t}})},Pn.createFromModelBuffer=function(e,t){return Zt(Pn,e,{baseOptions:{modelAssetBuffer:t}})},Pn.createFromOptions=function(e,t){return Zt(Pn,e,t)};var ql=class{constructor(e,t,n){this.landmarks=e,this.worldLandmarks=t,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach((e=>{e.close()}))}};function Ed(e){e.landmarks=[],e.worldLandmarks=[],e.segmentationMasks=void 0}function Td(e){try{const t=new ql(e.landmarks,e.worldLandmarks,e.segmentationMasks);if(!e.u)return t;e.u(t)}finally{ja(e)}}ql.prototype.close=ql.prototype.close;var mn=class extends Sn{constructor(e,t){super(new Yn(e,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,wt(e=this.h=new n0,0,1,t=new we),this.A=new qm,wt(this.h,0,3,this.A),this.j=new Ym,wt(this.h,0,2,this.j),Ri(this.j,4,1),At(this.j,2,.5),At(this.A,2,.5),At(this.h,4,.5)}get baseOptions(){return Qt(this.h,we,1)}set baseOptions(e){wt(this.h,0,1,e)}o(e){return"numPoses"in e&&Ri(this.j,4,e.numPoses??1),"minPoseDetectionConfidence"in e&&At(this.j,2,e.minPoseDetectionConfidence??.5),"minTrackingConfidence"in e&&At(this.h,4,e.minTrackingConfidence??.5),"minPosePresenceConfidence"in e&&At(this.A,2,e.minPosePresenceConfidence??.5),"outputSegmentationMasks"in e&&(this.outputSegmentationMasks=e.outputSegmentationMasks??!1),this.l(e)}F(e,t,n){const i=typeof t!="function"?t:{};return this.u=typeof t=="function"?t:n,Ed(this),qn(this,e,i),Td(this)}G(e,t,n,i){const s=typeof n!="function"?n:{};return this.u=typeof n=="function"?n:i,Ed(this),li(this,e,s,t),Td(this)}m(){var e=new Tn;Ee(e,"image_in"),Ee(e,"norm_rect"),te(e,"normalized_landmarks"),te(e,"world_landmarks"),te(e,"segmentation_masks");const t=new En;ai(t,DM,this.h);const n=new ln;yn(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ge(n,"IMAGE:image_in"),ge(n,"NORM_RECT:norm_rect"),qt(n,"NORM_LANDMARKS:normalized_landmarks"),qt(n,"WORLD_LANDMARKS:world_landmarks"),n.o(t),Dn(e,n),qa(this,e),this.g.attachProtoVectorListener("normalized_landmarks",((i,s)=>{this.landmarks=[];for(const r of i)i=Eo(r),this.landmarks.push(Ya(i));ft(this,s)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],ft(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,s)=>{this.worldLandmarks=[];for(const r of i)i=tr(r),this.worldLandmarks.push($r(i));ft(this,s)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],ft(this,i)})),this.outputSegmentationMasks&&(qt(n,"SEGMENTATION_MASK:segmentation_masks"),mr(this,"segmentation_masks"),this.g.aa("segmentation_masks",((i,s)=>{this.segmentationMasks=i.map((r=>_r(this,r,!0,!this.u))),ft(this,s)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],ft(this,i)}))),e=e.g(),this.setGraph(new Uint8Array(e),!0)}};mn.prototype.detectForVideo=mn.prototype.G,mn.prototype.detect=mn.prototype.F,mn.prototype.setOptions=mn.prototype.o,mn.createFromModelPath=function(e,t){return Zt(mn,e,{baseOptions:{modelAssetPath:t}})},mn.createFromModelBuffer=function(e,t){return Zt(mn,e,{baseOptions:{modelAssetBuffer:t}})},mn.createFromOptions=function(e,t){return Zt(mn,e,t)},mn.POSE_CONNECTIONS=x0;class VM{constructor(t){this.video=t,this.landmarker=null,this.isReady=!1,this.tip={x:0,y:0},this.prevTip={x:0,y:0},this.rawTip={x:0,y:0},this.speed=0,this.isSwiping=!1,this.handDetected=!1,this.landmarks=null,this._lastTimestamp=-1,this._initialized=!1,this._prevRaw={x:0,y:0},this._swipeHistory=[],this._cal={minX:.42,maxX:.58,minY:.42,maxY:.58}}resetCalibration(){this._cal={minX:.42,maxX:.58,minY:.42,maxY:.58},this._initialized=!1}_getHandCenter(t){const n=mt.HAND.PALM_LANDMARKS;let i=0,s=0;for(const r of n)i+=t[r].x,s+=t[r].y;return{x:i/n.length,y:s/n.length}}_updateCalibration(t,n){const i=mt.HAND.CALIB_PADDING;this._cal.minX=Math.min(this._cal.minX,t-i),this._cal.maxX=Math.max(this._cal.maxX,t+i),this._cal.minY=Math.min(this._cal.minY,n-i),this._cal.maxY=Math.max(this._cal.maxY,n+i);const s=mt.HAND.MIN_CALIB_SPAN,r=(this._cal.minX+this._cal.maxX)/2,o=(this._cal.minY+this._cal.maxY)/2;this._cal.maxX-this._cal.minX<s&&(this._cal.minX=r-s/2,this._cal.maxX=r+s/2),this._cal.maxY-this._cal.minY<s&&(this._cal.minY=o-s/2,this._cal.maxY=o+s/2)}_mapToWorld(t,n){t=1-t,this._updateCalibration(t,n);const i=this._cal.maxX-this._cal.minX,s=this._cal.maxY-this._cal.minY;let r=(t-this._cal.minX)/i,o=(n-this._cal.minY)/s;r=Math.max(0,Math.min(1,r)),o=Math.max(0,Math.min(1,o));const a=mt.HAND.REACH_MULTIPLIER;r=Math.max(0,Math.min(1,(r-.5)*a+.5)),o=Math.max(0,Math.min(1,(o-.5)*a+.5));const c=mt.WORLD.WIDTH/2-.2,l=mt.WORLD.HEIGHT/2-.2;return{worldX:Math.max(-c,Math.min(c,(r-.5)*mt.WORLD.WIDTH)),worldY:Math.max(-l,Math.min(l,(.5-o)*mt.WORLD.HEIGHT))}}_moveCursorToward(t,n,i){if(!this._initialized){this.tip.x=t,this.tip.y=n,this.prevTip.x=t,this.prevTip.y=n,this._prevRaw.x=t,this._prevRaw.y=n,this._initialized=!0;return}const s=t-this.tip.x,r=n-this.tip.y,o=Math.hypot(s,r);if(o<.001)return;let a=0;i>0&&(a=Math.hypot(t-this._prevRaw.x,n-this._prevRaw.y)/i),this._prevRaw.x=t,this._prevRaw.y=n;const{MAX_CURSOR_SPEED:c,MIN_CURSOR_SPEED:l,SPEED_FOLLOW:h}=mt.HAND;let u=a*h;o>.4&&u<l&&(u=l),u=Math.min(u,c);const f=Math.min(o,u*i);this.tip.x+=s/o*f,this.tip.y+=r/o*f}async init(){const t=await Xs.forVisionTasks(mt.MEDIAPIPE.WASM_PATH);this.landmarker=await on.createFromOptions(t,{baseOptions:{modelAssetPath:mt.MEDIAPIPE.MODEL_PATH,delegate:"GPU"},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.4,minHandPresenceConfidence:.4,minTrackingConfidence:.35});const n=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"}});this.video.srcObject=n,await this.video.play(),this.isReady=!0}update(t,n=.016){if(!this.isReady||!this.landmarker)return;const i=this.landmarker.detectForVideo(this.video,t);if(i.landmarks&&i.landmarks.length>0){const s=i.landmarks[0];this.landmarks=s;const r=this._getHandCenter(s),{worldX:o,worldY:a}=this._mapToWorld(r.x,r.y);this.rawTip.x=o,this.rawTip.y=a,this.handDetected=!0,this._moveCursorToward(o,a,n)}else this.handDetected=!1,this.landmarks=null;if(this._lastTimestamp>0&&n>0&&this.handDetected){const s=this.tip.x-this.prevTip.x,r=this.tip.y-this.prevTip.y;this.speed=Math.hypot(s,r)/n;const o=mt.HAND.SWIPE_SPEED_THRESHOLD,a=o*.6;this.isSwiping=this.isSwiping?this.speed>=a:this.speed>=o}else this.handDetected||(this.speed=0,this.isSwiping=!1);this.isSwiping&&this.handDetected?(this._swipeHistory.push({x:this.tip.x,y:this.tip.y}),this._swipeHistory.length>12&&this._swipeHistory.shift()):this._swipeHistory.length=0,this.prevTip.x=this.tip.x,this.prevTip.y=this.tip.y,this._lastTimestamp=t}getSwipeSegment(){if(this._swipeHistory.length>=2){const t=this._swipeHistory[0],n=this._swipeHistory[this._swipeHistory.length-1];return{x1:t.x,y1:t.y,x2:n.x,y2:n.y}}return{x1:this.prevTip.x,y1:this.prevTip.y,x2:this.tip.x,y2:this.tip.y}}}const kc=new Map;function vr(e,t,n){const i=Math.sin(e*127.1+t*311.7+n*74.7)*43758.5453;return i-Math.floor(i)}function na(e,t,n){const i=e.createImageData(t,t),s=i.data;for(let r=0;r<t;r++){const o=r/(t-1),a=o*Math.PI,c=Math.sin(a),l=Math.cos(a);for(let h=0;h<t;h++){const u=h/(t-1),f=u*Math.PI*2,d=-c*Math.cos(f),g=l,_=c*Math.sin(f),[m,p,T]=n(d,g,_,u,o),S=(r*t+h)*4;s[S]=m,s[S+1]=p,s[S+2]=T,s[S+3]=255}}e.putImageData(i,0,0)}function M0(e,t,{bump:n=!0}={}){if(kc.has(e))return kc.get(e);const i=384,s=document.createElement("canvas");s.width=i,s.height=i;const r=s.getContext("2d");t(r,i);const o=new df(s);o.colorSpace=an,o.wrapS=Qr,o.wrapT=xi,o.anisotropy=4;let a=null;if(n){const l=document.createElement("canvas");l.width=i,l.height=i;const h=l.getContext("2d");h.drawImage(s,0,0);const u=h.getImageData(0,0,i,i),f=u.data;for(let d=0;d<f.length;d+=4){const g=f[d]*.299+f[d+1]*.587+f[d+2]*.114;f[d]=f[d+1]=f[d+2]=g}h.putImageData(u,0,0),a=new df(l),a.wrapS=Qr,a.wrapT=xi}const c={map:o,bumpMap:a};return kc.set(e,c),c}function GM(e,t,n){const i=vr(e*3,t*3,n*3),s=vr(e*9+1,t*9,n*9);let r=185+i*35,o=28+s*22,a=32+i*18;t>.55&&(o+=35,r-=20),t<-.35&&(r+=15,o+=10);const c=Math.max(0,.35-Math.hypot(e+.2,n-.1));return r+=c*80,o+=c*20,r+=(i-.5)*18,[Math.min(255,r),Math.min(255,o),Math.min(255,a)]}function WM(e,t,n){const i=vr(e*22,t*22,n*22),s=vr(e*40+2,n*40,t*40),r=i>.82?-18:s>.75?12:0,o=235+r+(i-.5)*15,a=118+r*.55+(s-.5)*20,c=18+r*.2;return[o,a,c]}function XM(e,t,n){const i=Math.sin(n*14+e*2)>0?1:0,s=vr(e*5,t*5,n*5);return i?[34+s*18,95+s*25,38+s*12]:[68+s*20,145+s*25,62+s*15]}function YM(e,t,n){const i=(e+1)*.5,s=vr(e*12,t*8,n*6);let r=248,o=214+i*25,a=58+i*10;return(i<.08||i>.92)&&(r*=.55,o*=.65,a*=.7),s>.88&&(r*=.45,o*=.55,a*=.5),[r,o,a]}function qM(e,t,n){const i=n/2,s=n/2,r=n/2-2;if(t.clearRect(0,0,n,n),e==="apple"){const o=t.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"#fff6e6"),o.addColorStop(.45,"#ffe4b8"),o.addColorStop(.78,"#f0c878"),o.addColorStop(1,"#b87830"),t.fillStyle=o,t.beginPath(),t.arc(i,s,r,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(180,100,40,0.35)",t.lineWidth=3,t.stroke();for(let a=0;a<5;a++){const c=a/5*Math.PI*2;t.fillStyle="#3d2010",t.beginPath(),t.ellipse(i+Math.cos(c)*r*.18,s+Math.sin(c)*r*.18,6,4,c,0,Math.PI*2),t.fill()}}else if(e==="orange"){t.fillStyle="#f09020",t.beginPath(),t.arc(i,s,r,0,Math.PI*2),t.fill();for(let o=0;o<10;o++){const a=o/10*Math.PI*2;t.fillStyle=o%2===0?"#ffb040":"#ff9820",t.beginPath(),t.moveTo(i,s),t.arc(i,s,r-2,a,a+Math.PI/5),t.closePath(),t.fill()}t.fillStyle="#fff0d0",t.beginPath(),t.arc(i,s,r*.14,0,Math.PI*2),t.fill(),t.strokeStyle="#e87810",t.lineWidth=4,t.beginPath(),t.arc(i,s,r,0,Math.PI*2),t.stroke()}else if(e==="banana"){const o=t.createRadialGradient(i,s,0,i,s,r);o.addColorStop(0,"#fff8dc"),o.addColorStop(.65,"#ffe680"),o.addColorStop(1,"#e8c040"),t.fillStyle=o,t.beginPath(),t.arc(i,s,r,0,Math.PI*2),t.fill()}else if(e==="watermelon"){t.fillStyle="#eef8ee",t.beginPath(),t.arc(i,s,r,0,Math.PI*2),t.fill();const o=t.createRadialGradient(i,s,r*.08,i,s,r*.82);o.addColorStop(0,"#ff6688"),o.addColorStop(.7,"#ee2244"),o.addColorStop(.92,"#cc1133"),o.addColorStop(1,"#eef8ee"),t.fillStyle=o,t.beginPath(),t.arc(i,s,r*.82,0,Math.PI*2),t.fill();for(let a=0;a<12;a++){const c=a/12*Math.PI*2+.2,l=r*(.15+a%3*.18);t.fillStyle="#111",t.beginPath(),t.ellipse(i+Math.cos(c)*l,s+Math.sin(c)*l,3,5,c,0,Math.PI*2),t.fill()}}}function zc(e){const t={apple:(n,i)=>na(n,i,GM),orange:(n,i)=>na(n,i,WM),banana:(n,i)=>{na(n,i,YM)},watermelon:(n,i)=>na(n,i,XM)};return M0(`skin-${e}`,t[e])}function Ad(e){return M0(`slice-${e}`,(t,n)=>qM(e,t,n),{bump:!1}).map}function jM(e){const t=[];for(let i=0;i<=24;i++){const s=i/24,r=s*Math.PI,o=Math.cos(r)*e,a=1-.12*Math.pow(Math.sin(s*Math.PI),1.6),c=Math.sin(r)*e*a;t.push(new lt(c,o))}return t}function bd(){return new Ea([new C(-.44,-.2,.02),new C(-.2,0,.05),new C(.05,.2,.04),new C(.28,.24,.01),new C(.46,.06,-.03),new C(.52,-.1,-.05)])}function Ws(e,t={}){return new _p({map:e.map,bumpMap:e.bumpMap,bumpScale:t.bumpScale??.025,roughness:t.roughness??.42,metalness:0,clearcoat:t.clearcoat??.45,clearcoatRoughness:t.clearcoatRoughness??.2,sheen:t.sheen??.15,sheenRoughness:.5,sheenColor:t.sheenColor??new Lt(16777215)})}function wd(e){return new _n({map:e,roughness:.82,metalness:0})}class KM{constructor(t,n){this.type=t,this.scene=n,this.alive=!0,this.sliced=!1;const i=mt.FRUITS[t];this.radius=i.radius,this.scoreValue=i.score,this.juiceColor=i.juiceColor,this.vx=0,this.vy=0,this.rotationSpeed=(Math.random()-.5)*mt.PHYSICS.ROTATION_SPEED*2,this.mesh=this._createMesh(t,i),this._enableShadows(this.mesh),n.add(this.mesh)}_enableShadows(t){t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)})}_createMesh(t,n){const i=new Si,s=zc(t);if(t==="apple"){const r=new Yt(new ah(jM(n.radius),40),Ws(s,{roughness:.38,clearcoat:.7,bumpScale:.02,sheen:.25}));i.add(r);const o=new Yt(new Ta(.025,.04,.22,8),new _n({color:4861976,roughness:.92}));o.position.set(0,n.radius*.88+.08,0),o.rotation.z=.15,i.add(o);const a=new Yt(new ch(this._leafShape()),new _n({color:4033074,roughness:.5,side:gn}));a.scale.set(.13,.13,.13),a.position.set(.12,n.radius*.86+.12,.05),a.rotation.set(-.35,.25,-.75),i.add(a)}else if(t==="orange"){const r=new Yt(new Qn(n.radius,40,40),Ws(s,{roughness:.78,clearcoat:.12,bumpScale:.045,sheen:.08}));i.add(r);const o=new Yt(new $s(.05,10),new _n({color:12081152,roughness:.95}));o.position.set(0,n.radius*.995,0),i.add(o)}else if(t==="banana"){const r=bd();new Yt(new so(r,32,.14,18,!1),Ws(s,{roughness:.48,clearcoat:.25,bumpScale:.018})),this._bananaCurve=r;for(const[o,a,c]of[[-.46,-.18,.02],[.54,-.12,-.05]]){const l=new Yt(new Qn(.08,10,10),new _n({color:5912592,roughness:.88}));l.scale.set(.85,1.15,.8),l.position.set(o,a,c),i.add(l)}this.radius=.52}else if(t==="watermelon"){const r=new Yt(new Qn(n.radius,40,40),Ws(s,{roughness:.68,clearcoat:.18,bumpScale:.035}));r.scale.set(1.12,.96,1.08),i.add(r)}return i}_leafShape(){const t=new dp;return t.moveTo(0,0),t.quadraticCurveTo(.85,.18,1.15,0),t.quadraticCurveTo(.75,-.12,0,0),t}launch(t,n=1){const i=mt.PHYSICS;this.mesh.position.set(t,mt.WORLD.BOTTOM-this.radius,0),this.vx=(Math.random()-.5)*i.LAUNCH_VX_RANGE*2*n,this.vy=(i.LAUNCH_VY_MIN+Math.random()*(i.LAUNCH_VY_MAX-i.LAUNCH_VY_MIN))*n}update(t){!this.alive||this.sliced||(this.vy+=mt.PHYSICS.GRAVITY*t,this.mesh.position.x+=this.vx*t,this.mesh.position.y+=this.vy*t,this.mesh.rotation.z+=this.rotationSpeed*t)}isOffScreen(){return this.mesh.position.y<mt.WORLD.BOTTOM-this.radius-1}getPosition(){return this.mesh.position}_getSliceVectors(t){let n=t.x2-t.x1,i=t.y2-t.y1;const s=Math.hypot(n,i);s<.05?(n=Math.cos(this.mesh.rotation.z),i=Math.sin(this.mesh.rotation.z)):(n/=s,i/=s);const r=Math.atan2(i,n)+Math.PI/2;return{sepX:Math.cos(r),sepY:Math.sin(r),splitAngle:r}}slice(t){this.sliced=!0,this.alive=!1;const n=this.mesh.position.clone();return this.scene.remove(this.mesh),this.type==="banana"?this._sliceBanana(n,t):this._sliceRound(n,t)}_sliceRound(t,n){const{sepX:i,sepY:s,splitAngle:r}=this._getSliceVectors(n),o=Ad(this.type),a=zc(this.type),c=this.radius,l=[];for(let h=-1;h<=1;h+=2){const u=new Si;u.rotation.z=r;const f=new Qn(c*.93,32,32,0,Math.PI),d=new Yt(f,Ws(a,{roughness:.5,clearcoat:.35,bumpScale:.02}));h<0&&(d.scale.x=-1),u.add(d);const g=new Yt(new $s(c*.84,40),wd(o));if(g.rotation.y=Math.PI/2,g.position.x=h*.02,u.add(g),this.type==="watermelon"){const _=new Yt(new mo(c*.84,c*.93,40),new _n({color:15398634,roughness:.85}));_.rotation.y=Math.PI/2,_.position.x=h*.015,u.add(_)}u.position.set(t.x+i*h*.14,t.y+s*h*.14,t.z),this.scene.add(u),l.push({mesh:u,vx:this.vx+i*h*3.5,vy:this.vy+s*h*3.5+1.6,rotationSpeed:h*5+this.rotationSpeed*.4,life:1.5})}return l}_sliceBanana(t,n){const{sepX:i,sepY:s,splitAngle:r}=this._getSliceVectors(n),o=Ad("banana"),a=zc("banana"),c=bd(),l=[];for(let h=-1;h<=1;h+=2){const u=new Si;u.rotation.z=r;const f=h<0?0:.48,d=h<0?.52:1,g=new Ea(c.getPoints(24).slice(Math.floor(f*24),Math.ceil(d*24)+1));if(g.points.length>=2){const m=new Yt(new so(g,16,.13,14,!1),Ws(a,{roughness:.5,clearcoat:.2}));m.position.x=h*.08,u.add(m)}const _=new Yt(new $s(.12,20),wd(o));_.rotation.y=Math.PI/2,_.position.x=h*.04,u.add(_),u.position.set(t.x+i*h*.22,t.y+s*h*.22,t.z),this.scene.add(u),l.push({mesh:u,vx:this.vx+i*h*3.2,vy:this.vy+s*h*3.2+1.4,rotationSpeed:h*7,life:1.3})}return l}dispose(){this.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(n=>n.dispose()):t.material.dispose())})}}class JM{constructor(t){this.scene=t,this.alive=!0,this.sliced=!1,this.radius=mt.BOMB.RADIUS,this.sparkPhase=Math.random()*Math.PI*2,this.vx=0,this.vy=0,this.rotationSpeed=(Math.random()-.5)*mt.PHYSICS.ROTATION_SPEED,this.mesh=this._createMesh(),this.spark=this.mesh.getObjectByName("spark"),this.fuseEmber=this.mesh.getObjectByName("fuseEmber"),t.add(this.mesh)}_createMesh(){const t=new Si,n=this.radius,i=new Yt(new Qn(n,32,32),new _p({color:2763306,roughness:.28,metalness:.88,clearcoat:.55,clearcoatRoughness:.15}));i.castShadow=!0,t.add(i);const s=new _n({color:13373713,roughness:.45,metalness:.35});for(let h=0;h<2;h++){const u=new Yt(new lh(n*.94,.055,10,40),s);u.rotation.x=Math.PI/2,u.rotation.y=h*Math.PI*.5,t.add(u)}const r=new Ea([new C(0,n,0),new C(.05,n+.12,.02),new C(-.04,n+.24,-.02),new C(.03,n+.36,.01)]),o=new Yt(new so(r,12,.035,8,!1),new _n({color:7029795,roughness:.95}));o.castShadow=!0,t.add(o);const a=new Yt(new Qn(.07,10,10),new _n({color:16737792,emissive:16724736,emissiveIntensity:2,roughness:.4}));a.name="fuseEmber",a.position.set(.03,n+.38,.01),t.add(a);const c=new Yt(new Qn(.05,8,8),new _n({color:16763904,emissive:16746496,emissiveIntensity:3,transparent:!0,opacity:.85,roughness:.2}));c.name="spark",c.position.set(.05,n+.42,.02),t.add(c);const l=new Yt(new mo(n*.22,n*.38,4),new _n({color:16720418,emissive:8912896,emissiveIntensity:.35,side:gn}));return l.rotation.z=Math.PI/4,t.add(l),t}launch(t,n=1){const i=mt.PHYSICS;this.mesh.position.set(t,mt.WORLD.BOTTOM-this.radius,0),this.vx=(Math.random()-.5)*i.LAUNCH_VX_RANGE*2*n,this.vy=(i.LAUNCH_VY_MIN+Math.random()*(i.LAUNCH_VY_MAX-i.LAUNCH_VY_MIN))*n}update(t){if(!this.alive)return;this.vy+=mt.PHYSICS.GRAVITY*t,this.mesh.position.x+=this.vx*t,this.mesh.position.y+=this.vy*t,this.mesh.rotation.z+=this.rotationSpeed*t,this.sparkPhase+=t*14;const n=.55+Math.sin(this.sparkPhase)*.45;this.spark&&(this.spark.material.emissiveIntensity=2+n*2,this.spark.scale.setScalar(.7+n*.5),this.spark.position.y=this.radius+.42+Math.sin(this.sparkPhase*2)*.02),this.fuseEmber&&(this.fuseEmber.material.emissiveIntensity=1.5+n*1.8)}isOffScreen(){return this.mesh.position.y<mt.WORLD.BOTTOM-this.radius-1}getPosition(){return this.mesh.position}dispose(){this.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class ZM{constructor(t){this.scene=t;const{RADIUS:n,GLOW_COLOR:i,CORE_COLOR:s}=mt.SWORD;this.glow=new Yt(new mo(n*.8,n*2.8,32),new us({color:i,transparent:!0,opacity:.45,depthWrite:!1})),this.core=new Yt(new $s(n*.85,20),new us({color:s,transparent:!0,opacity:.95,depthWrite:!1})),this.blade=new Yt(new Es(n*.35,n*3.2),new us({color:i,transparent:!0,opacity:.5,depthWrite:!1,side:gn})),this.blade.position.y=n*1.2,this.group=new Si,this.group.add(this.glow),this.group.add(this.core),this.group.add(this.blade),this.group.visible=!1,t.add(this.group)}update(t,n,i,s){if(this.group.visible=s,!s)return;this.group.position.set(t,n,.6);const r=i?1.7:1;this.glow.scale.setScalar(r),this.glow.material.opacity=i?.85:.4,this.core.material.opacity=i?1:.75,this.blade.material.opacity=i?.75:.35,this.blade.scale.y=i?1.3:1}}class $M{constructor(t){this.scene=t,this.points=[],this.maxPoints=mt.TRAIL.MAX_POINTS,this.positions=new Float32Array(this.maxPoints*2*3),this.opacities=new Float32Array(this.maxPoints*2),this.geometry=new Ze,this.geometry.setAttribute("position",new Gn(this.positions,3)),this.material=new us({color:mt.TRAIL.COLOR,transparent:!0,opacity:.7,side:gn,depthWrite:!1}),this.mesh=new Yt(this.geometry,this.material),this.mesh.visible=!1,this.mesh.frustumCulled=!1,t.add(this.mesh)}addPoint(t,n,i){const s=performance.now()/1e3;this.points.unshift({x:t,y:n,time:s,speed:i}),this.points.length>this.maxPoints&&this.points.pop()}update(){const t=performance.now()/1e3,n=mt.TRAIL.FADE_TIME;if(this.points=this.points.filter(s=>t-s.time<n),this.points.length<2){this.mesh.visible=!1;return}this.mesh.visible=!0;let i=0;for(let s=0;s<this.points.length-1;s++){const r=this.points[s],o=this.points[s+1],a=o.x-r.x,c=o.y-r.y,l=Math.hypot(a,c)||1,h=-c/l,u=a/l,d=1-(t-r.time)/n,g=mt.TRAIL.WIDTH*d*.5;this.positions[i++]=r.x+h*g,this.positions[i++]=r.y+u*g,this.positions[i++]=.3,this.positions[i++]=r.x-h*g,this.positions[i++]=r.y-u*g,this.positions[i++]=.3}this.geometry.setDrawRange(0,(this.points.length-1)*2),this.geometry.attributes.position.needsUpdate=!0,this.geometry.computeVertexNormals()}clear(){this.points=[],this.mesh.visible=!1}}class QM{constructor(t){this.scene=t,this.particles=[],this._pool=[]}get hasActive(){return this.particles.length>0}_acquire(t){let n=this._pool.find(i=>!i.alive&&i.kind===t);if(!n){const i=t==="mist"?new Es(.08,.08):t==="streak"?new Ta(.015,.04,.12,5):new Qn(.05,6,6),s=new _n({color:16777215,transparent:!0,roughness:t==="debris"?.6:.25,metalness:t==="debris"?.7:0,depthWrite:!1});n={mesh:new Yt(i,s),mat:s,geo:i,alive:!1,kind:t},this._pool.push(n)}return n}spawnJuice(t,n,i){const s=new Lt(i),r=mt.PARTICLES;for(let o=0;o<r.JUICE_DROPLETS;o++){const a=this._acquire("droplet");this._initParticle(a,t,n,{color:s.clone().offsetHSL(0,0,(Math.random()-.5)*.08),scale:.35+Math.random()*.55,life:r.JUICE_LIFETIME*(.7+Math.random()*.5),speed:r.JUICE_SPEED*(.6+Math.random()*.8),upward:1.2+Math.random()*2.5,gravity:.35,drag:.98})}for(let o=0;o<r.JUICE_STREAKS;o++){const a=this._acquire("streak"),c=Math.random()*Math.PI*2,l=r.JUICE_SPEED*(1+Math.random()*1.2);this._initParticle(a,t,n,{color:s,scale:.5+Math.random()*.8,life:r.JUICE_LIFETIME*.45,vx:Math.cos(c)*l,vy:Math.sin(c)*l+2,gravity:.2,drag:.94,stretch:!0})}for(let o=0;o<r.JUICE_MIST;o++){const a=this._acquire("mist");this._initParticle(a,t,n,{color:s.clone().offsetHSL(0,-.1,.15),scale:.25+Math.random()*.45,life:r.JUICE_LIFETIME*1.2,speed:r.JUICE_SPEED*.35,upward:.5+Math.random(),gravity:-.15,drag:.96,opacity:.45})}}spawnExplosion(t,n){const i=mt.PARTICLES,s=this._acquire("droplet");this._initParticle(s,t,n,{color:new Lt(16775392),emissive:new Lt(16755200),emissiveIntensity:2.5,scale:.5,life:i.BLAST_FLASH_TIME,vx:0,vy:0,gravity:0,drag:1,expand:8,opacity:.95});for(let r=0;r<i.BLAST_FIRE;r++){const o=this._acquire("droplet"),a=Math.random()*Math.PI*2,c=i.BLAST_SPEED*(.5+Math.random()),l=Math.random(),h=new Lt().lerpColors(new Lt(16772744),new Lt(16720384),l);this._initParticle(o,t,n,{color:h,emissive:h,emissiveIntensity:1.2+Math.random(),scale:.4+Math.random()*.7,life:i.BLAST_FIRE_LIFE*(.6+Math.random()*.6),vx:Math.cos(a)*c,vy:Math.sin(a)*c+1.5,gravity:-.5,drag:.97,shrink:.85})}for(let r=0;r<i.BLAST_SMOKE;r++){const o=this._acquire("mist"),a=Math.random()*Math.PI*2,c=i.BLAST_SPEED*(.25+Math.random()*.35),l=.15+Math.random()*.25;this._initParticle(o,t,n,{color:new Lt(l,l,l),scale:.6+Math.random()*.9,life:i.BLAST_SMOKE_LIFE*(.7+Math.random()*.5),vx:Math.cos(a)*c,vy:Math.sin(a)*c+1.8,gravity:-.8,drag:.98,expand:2.5+Math.random()*2,opacity:.55})}for(let r=0;r<i.BLAST_SPARKS;r++){const o=this._acquire("streak"),a=Math.random()*Math.PI*2,c=i.BLAST_SPEED*(1.2+Math.random()*1.5);this._initParticle(o,t,n,{color:new Lt(16768324),emissive:new Lt(16746496),emissiveIntensity:2,scale:.2+Math.random()*.25,life:i.BLAST_SPARK_LIFE,vx:Math.cos(a)*c,vy:Math.sin(a)*c,gravity:.15,drag:.92,stretch:!0})}for(let r=0;r<i.BLAST_DEBRIS;r++){const o=this._acquire("debris"),a=Math.random()*Math.PI*2,c=i.BLAST_SPEED*(.6+Math.random()*.9);this._initParticle(o,t,n,{color:new Lt(2763306),scale:.25+Math.random()*.35,life:i.BLAST_DEBRIS_LIFE,vx:Math.cos(a)*c,vy:Math.sin(a)*c+1,gravity:.4,drag:.98,spin:(Math.random()-.5)*12})}}_initParticle(t,n,i,s){if(t.mesh.position.set(n,i,.55+Math.random()*.15),t.mat.color.copy(s.color),t.mat.emissive=s.emissive?s.emissive.clone():new Lt(0),t.mat.emissiveIntensity=s.emissiveIntensity??.08,t.maxOpacity=s.opacity??1,t.mat.opacity=t.maxOpacity,t.mat.metalness=t.kind==="debris"?.65:0,t.mat.roughness=t.kind==="debris"?.55:.25,t.mesh.scale.setScalar(s.scale??1),t.maxLife=s.life,t.life=s.life,t.gravity=s.gravity??.3,t.drag=s.drag??.98,t.expand=s.expand??0,t.shrink=s.shrink??1,t.stretch=s.stretch??!1,t.spin=s.spin??0,t.alive=!0,s.vx!==void 0)t.vx=s.vx,t.vy=s.vy;else{const r=Math.random()*Math.PI*2,o=s.speed??3;t.vx=Math.cos(r)*o,t.vy=Math.sin(r)*o+(s.upward??1.5)}t.stretch&&(t.mesh.rotation.z=Math.atan2(t.vy,t.vx)+Math.PI/2),this.scene.add(t.mesh),this.particles.push(t)}spawn(t,n,i){this.spawnJuice(t,n,i)}update(t){for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];i.life-=t,i.vx*=i.drag,i.vy*=i.drag,i.vy+=mt.PHYSICS.GRAVITY*i.gravity*t,i.mesh.position.x+=i.vx*t,i.mesh.position.y+=i.vy*t,i.spin&&(i.mesh.rotation.z+=i.spin*t);const s=Math.max(0,i.life/i.maxLife);if(i.mat.opacity=i.maxOpacity*s,i.expand){const r=1+(1-s)*i.expand;i.mesh.scale.setScalar((i.maxLife===mt.PARTICLES.BLAST_FLASH_TIME?.5:1)*r),i.maxLife===mt.PARTICLES.BLAST_FLASH_TIME&&(i.mat.emissiveIntensity=2.5*s)}else i.shrink!==1&&i.mesh.scale.multiplyScalar(Math.pow(i.shrink,t*60));i.kind==="mist"&&i.expand&&i.mesh.scale.multiplyScalar(1+t*i.expand*.15),i.life<=0&&(this.scene.remove(i.mesh),i.alive=!1,this.particles.splice(n,1))}}clear(){for(const t of this.particles)this.scene.remove(t.mesh),t.alive=!1;this.particles=[]}}function ty(e,t,n,i,s,r){const o=s-n,a=r-i,c=o*o+a*a;if(c===0)return Math.hypot(e-n,t-i);let l=((e-n)*o+(t-i)*a)/c;l=Math.max(0,Math.min(1,l));const h=n+l*o,u=i+l*a;return Math.hypot(e-h,t-u)}function Rd(e,t,n,i){return ty(t,n,e.x1,e.y1,e.x2,e.y2)<=i}class ey{constructor(t,n,i,s){this.sceneManager=t,this.handTracker=n,this.ui=i,this.audio=s,this.scene=t.scene,this.sword=new ZM(this.scene),this.trail=new $M(this.scene),this.particles=new QM(this.scene),this.fruits=[],this.bombs=[],this.halves=[],this.score=0,this.lives=mt.GAME.INITIAL_LIVES,this.combo=1,this.comboTimer=0,this.difficultyTier=0,this.spawnTimer=0,this.nextSpawn=1,this.running=!1,this.gameOver=!1}_getDifficulty(){const t=Math.floor(this.score/mt.GAME.SCORE_TIER);t!==this.difficultyTier&&(this.difficultyTier=t);const n=Math.max(mt.GAME.MIN_SPAWN_FACTOR,1-t*mt.GAME.SPAWN_FASTER_BY),i=Math.min(mt.GAME.MAX_FRUIT_SPEED_FACTOR,1+t*mt.GAME.FRUIT_SPEEDUP_BY);return{tier:t,spawnFactor:n,fruitSpeedFactor:i}}_rollSpawnDelay(){const{spawnFactor:t}=this._getDifficulty(),n=mt.PHYSICS,i=n.SPAWN_INTERVAL_MIN*t,s=n.SPAWN_INTERVAL_MAX*t;return i+Math.random()*(s-i)}start(){this.reset(),this.handTracker.resetCalibration(),this.running=!0,this.gameOver=!1,this.ui.updateScore(0),this.ui.updateLives(this.lives),this.ui.updateCombo(1),this.nextSpawn=this._rollSpawnDelay()}reset(){this._clearEntities(),this.score=0,this.lives=mt.GAME.INITIAL_LIVES,this.combo=1,this.comboTimer=0,this.difficultyTier=0,this.spawnTimer=0,this.particles.clear(),this.trail.clear()}_clearEntities(){for(const t of this.fruits)t.dispose();for(const t of this.bombs)t.dispose();for(const t of this.halves)this.scene.remove(t.mesh),t.mesh.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()});this.fruits=[],this.bombs=[],this.halves=[],this.sword.group.visible=!1}stop(t="Game Over"){this.running=!1,this.gameOver=!0,this.ui.showGameOver(this.score,t)}update(t){if(!this.running)return;const{tip:n,isSwiping:i,handDetected:s,speed:r}=this.handTracker;this.sword.update(n.x,n.y,i,s),this.ui.updateHandStatus(s,i),i&&s&&(this.trail.addPoint(n.x,n.y,r),this._checkSlices()),this.trail.update(),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1,this.ui.updateCombo(this.combo))),this.spawnTimer+=t,this.spawnTimer>=this.nextSpawn&&(this.spawnTimer=0,this._spawnEntity(),this.nextSpawn=this._rollSpawnDelay());for(let o=this.fruits.length-1;o>=0;o--){const a=this.fruits[o];a.update(t),a.isOffScreen()&&(a.dispose(),this.fruits.splice(o,1),this._loseLife())}for(let o=this.bombs.length-1;o>=0;o--){const a=this.bombs[o];a.update(t),a.isOffScreen()&&(a.dispose(),this.bombs.splice(o,1))}for(let o=this.halves.length-1;o>=0;o--){const a=this.halves[o];a.vy+=mt.PHYSICS.GRAVITY*t,a.mesh.position.x+=a.vx*t,a.mesh.position.y+=a.vy*t,a.mesh.rotation.z+=a.rotationSpeed*t,a.life-=t,a.life<=0&&(this.scene.remove(a.mesh),this.halves.splice(o,1))}this.particles.update(t)}updateVisuals(t){for(let n=this.halves.length-1;n>=0;n--){const i=this.halves[n];i.vy+=mt.PHYSICS.GRAVITY*t,i.mesh.position.x+=i.vx*t,i.mesh.position.y+=i.vy*t,i.mesh.rotation.z+=i.rotationSpeed*t,i.life-=t,i.life<=0&&(this.scene.remove(i.mesh),this.halves.splice(n,1))}this.particles.update(t)}hasActiveVisuals(){return this.halves.length>0||this.particles.hasActive}_spawnEntity(){const t=mt.PHYSICS,n=t.SPAWN_X_MIN+Math.random()*(t.SPAWN_X_MAX-t.SPAWN_X_MIN),{fruitSpeedFactor:i}=this._getDifficulty();if(Math.random()<mt.BOMB.SPAWN_CHANCE){const s=new JM(this.scene);s.launch(n,i),this.bombs.push(s)}else{const s=mt.FRUIT_TYPES[Math.floor(Math.random()*mt.FRUIT_TYPES.length)],r=new KM(s,this.scene);r.launch(n,i),this.fruits.push(r)}}_checkSlices(){const t=this.handTracker.getSwipeSegment(),n=mt.HAND.SLICE_HIT_PADDING;for(const i of this.bombs){if(!i.alive)continue;const s=i.getPosition();if(Rd(t,s.x,s.y,i.radius+mt.SWORD.RADIUS+n)){i.alive=!1,this.particles.spawnExplosion(s.x,s.y),i.dispose(),this.bombs=this.bombs.filter(r=>r!==i),this.audio.playBomb(),this.stop("💣 You sliced a bomb!");return}}for(let i=this.fruits.length-1;i>=0;i--){const s=this.fruits[i];if(!s.alive||s.sliced)continue;const r=s.getPosition();if(Rd(t,r.x,r.y,s.radius+mt.SWORD.RADIUS+n)){const o=s.slice(t);this.halves.push(...o),this.fruits.splice(i,1),this.particles.spawnJuice(r.x,r.y,s.juiceColor),this.audio.playSlice(),this.comboTimer=mt.GAME.COMBO_TIMEOUT,this.combo=Math.min(this.combo+1,mt.GAME.MAX_COMBO),this.score+=Math.round(s.scoreValue*this.combo),this.ui.updateScore(this.score),this.ui.updateCombo(this.combo)}}}_loseLife(){this.lives--,this.combo=1,this.comboTimer=0,this.ui.updateLives(this.lives),this.ui.updateCombo(this.combo),this.lives<=0&&this.stop("No lives remaining!")}}class ny{constructor(){this.scoreEl=document.getElementById("score"),this.livesEl=document.getElementById("lives"),this.comboEl=document.getElementById("combo"),this.gameOverScreen=document.getElementById("game-over-screen"),this.finalScoreEl=document.getElementById("final-score"),this.gameOverReasonEl=document.getElementById("game-over-reason"),this.loadingText=document.getElementById("loading-text"),this.restartBtn=document.getElementById("restart-btn"),this.handStatus=document.getElementById("hand-status"),this.handStatusText=document.getElementById("hand-status-text"),this._lastHandState={detected:!1,swiping:!1}}setLoading(t){this.loadingText&&(this.loadingText.textContent=t)}hideGameOver(){this.gameOverScreen.classList.add("hidden")}showGameOver(t,n){this.finalScoreEl.textContent=t,this.gameOverReasonEl.textContent=n,this.gameOverScreen.classList.remove("hidden")}updateScore(t){this.scoreEl.textContent=t}updateLives(t){this.livesEl.textContent="❤️".repeat(Math.max(0,t))}updateCombo(t){this.comboEl.textContent=`x${t}`,this.comboEl.classList.remove("combo-bump"),this.comboEl.offsetWidth,this.comboEl.classList.add("combo-bump")}updateHandStatus(t,n,i){!i&&t===this._lastHandState.detected&&n===this._lastHandState.swiping||(i||(this._lastHandState={detected:t,swiping:n}),this.handStatus.classList.toggle("detected",t),this.handStatus.classList.toggle("swiping",n),i?this.handStatusText.textContent=i:t?n?this.handStatusText.textContent="Slicing!":this.handStatusText.textContent="Move hand":this.handStatusText.textContent="Show hand")}}const iy=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];class sy{constructor(t,n,i){this.video=t,this.canvas=n,this.placeholder=i,this.ctx=n.getContext("2d"),this._syncSize(),this._resizeObserver=new ResizeObserver(()=>this._syncSize()),this._resizeObserver.observe(n.parentElement)}_syncSize(){const t=this.canvas.parentElement;this.canvas.width=t.clientWidth,this.canvas.height=t.clientHeight}showVideo(){this.placeholder.classList.add("hidden")}_toPixel(t){let n=t.x;return n=1-n,{x:n*this.canvas.width,y:t.y*this.canvas.height}}_getPalmCenter(t){const n=mt.HAND.PALM_LANDMARKS;let i=0,s=0;for(const r of n)i+=t[r].x,s+=t[r].y;return{x:i/n.length,y:s/n.length}}draw(t){const n=this.ctx;if(n.clearRect(0,0,this.canvas.width,this.canvas.height),!t.landmarks)return;const i=t.landmarks,s=Math.max(5,this.canvas.width*.07),r=Math.max(2,this.canvas.width*.022);n.strokeStyle="rgba(139, 92, 246, 0.5)",n.lineWidth=1.5;for(const[c,l]of iy){const h=this._toPixel(i[c]),u=this._toPixel(i[l]);n.beginPath(),n.moveTo(h.x,h.y),n.lineTo(u.x,u.y),n.stroke()}for(let c=0;c<i.length;c++){const{x:l,y:h}=this._toPixel(i[c]);n.beginPath(),n.arc(l,h,r,0,Math.PI*2),n.fillStyle="rgba(255, 255, 255, 0.7)",n.fill()}const o=this._getPalmCenter(i),a=this._toPixel(o);n.beginPath(),n.arc(a.x,a.y,s,0,Math.PI*2),n.fillStyle=t.isSwiping?"#ec4899":"#8b5cf6",n.fill(),n.beginPath(),n.arc(a.x,a.y,s*1.6,0,Math.PI*2),n.strokeStyle=t.isSwiping?"rgba(236, 72, 153, 0.75)":"rgba(139, 92, 246, 0.55)",n.lineWidth=2,n.stroke()}}class ry{constructor(){this.ctx=null,this.enabled=!1}init(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.enabled=!0)}playSlice(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.sampleRate*.08,i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<n;c++)s[c]=(Math.random()*2-1)*(1-c/n);const r=this.ctx.createBufferSource();r.buffer=i;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.value=1200,o.Q.value=.8;const a=this.ctx.createGain();a.gain.setValueAtTime(.35,t),a.gain.exponentialRampToValueAtTime(.001,t+.1),r.connect(o),o.connect(a),a.connect(this.ctx.destination),r.start(t),r.stop(t+.1)}playBomb(){if(!this.enabled||!this.ctx)return;const t=this.ctx.currentTime,n=this.ctx.createOscillator();n.type="sawtooth",n.frequency.setValueAtTime(120,t),n.frequency.exponentialRampToValueAtTime(30,t+.5);const i=this.ctx.createGain();i.gain.setValueAtTime(.5,t),i.gain.exponentialRampToValueAtTime(.001,t+.6),n.connect(i),i.connect(this.ctx.destination),n.start(t),n.stop(t+.6)}}async function oy(){const e=document.getElementById("game-container"),t=document.getElementById("webcam"),n=document.getElementById("webcam-overlay"),i=document.getElementById("video-placeholder"),s=new ny,r=new ry,o=new s3(e),a=new VM(t),c=new sy(t,n,i),l=new ey(o,a,s,r);let h=0;function u(d){requestAnimationFrame(u);const g=h?Math.min((d-h)/1e3,.05):0;h=d,a.update(d,g),c.draw(a),l.running?l.update(g):l.hasActiveVisuals()?l.updateVisuals(g):l.gameOver||s.updateHandStatus(a.handDetected,a.isSwiping),o.render()}function f(){r.init(),s.hideGameOver(),l.start()}try{await a.init(),c.showVideo(),f()}catch(d){s.setLoading("Camera error — allow access & reload"),s.updateHandStatus(!1,!1,"No camera"),console.error(d)}s.restartBtn.addEventListener("click",f),requestAnimationFrame(u)}oy();
