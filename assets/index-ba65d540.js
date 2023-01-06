(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2022 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Nn="148",vi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qs=0,jn=1,Xs=2,hs=1,Ys=2,Qi=3,pi=0,bt=1,Ur=2,cr=3,Jt=0,Oi=1,qn=2,Xn=3,Yn=4,Zs=5,Ni=100,Ks=101,Js=102,Zn=103,Kn=104,$s=200,Qs=201,eo=202,to=203,us=204,ds=205,io=206,ro=207,no=208,ao=209,so=210,oo=0,lo=1,co=2,En=3,ho=4,uo=5,po=6,fo=7,ps=0,mo=1,go=2,Wt=0,_o=1,vo=2,xo=3,Mo=4,yo=5,fs=300,Fi=301,ki=302,Ln=303,An=304,Or=306,Cn=1e3,Lt=1001,Rn=1002,st=1003,Jn=1004,Wr=1005,St=1006,So=1007,tr=1008,fi=1009,bo=1010,wo=1011,ms=1012,To=1013,ci=1014,hi=1015,ir=1016,Eo=1017,Lo=1018,zi=1020,Ao=1021,Co=1022,At=1023,Ro=1024,Po=1025,ui=1026,Bi=1027,Do=1028,Io=1029,No=1030,Uo=1031,Oo=1033,jr=33776,qr=33777,Xr=33778,Yr=33779,$n=35840,Qn=35841,ea=35842,ta=35843,zo=36196,ia=37492,ra=37496,na=37808,aa=37809,sa=37810,oa=37811,la=37812,ca=37813,ha=37814,ua=37815,da=37816,pa=37817,fa=37818,ma=37819,ga=37820,_a=37821,va=36492,mi=3e3,ze=3001,Fo=3200,ko=3201,gs=0,Bo=1,Pt="srgb",Dr="srgb-linear",Zr=7680,Go=519,xa=35044,Ma="300 es",Pn=1035;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,ya=180/Math.PI;function nr(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tt[a&255]+tt[a>>8&255]+tt[a>>16&255]+tt[a>>24&255]+"-"+tt[e&255]+tt[e>>8&255]+"-"+tt[e>>16&15|64]+tt[e>>24&255]+"-"+tt[t&63|128]+tt[t>>8&255]+"-"+tt[t>>16&255]+tt[t>>24&255]+tt[i&255]+tt[i>>8&255]+tt[i>>16&255]+tt[i>>24&255]).toLowerCase()}function lt(a,e,t){return Math.max(e,Math.min(t,a))}function Ho(a,e){return(a%e+e)%e}function Jr(a,e,t){return(1-t)*a+t*e}function Sa(a){return(a&a-1)===0&&a!==0}function Dn(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function hr(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function dt(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,o,s,h,l){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=t,c[4]=n,c[5]=h,c[6]=i,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[3],h=i[6],l=i[1],c=i[4],p=i[7],u=i[2],m=i[5],_=i[8],f=r[0],d=r[3],x=r[6],E=r[1],S=r[4],y=r[7],w=r[2],C=r[5],N=r[8];return n[0]=o*f+s*E+h*w,n[3]=o*d+s*S+h*C,n[6]=o*x+s*y+h*N,n[1]=l*f+c*E+p*w,n[4]=l*d+c*S+p*C,n[7]=l*x+c*y+p*N,n[2]=u*f+m*E+_*w,n[5]=u*d+m*S+_*C,n[8]=u*x+m*y+_*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],h=e[6],l=e[7],c=e[8];return t*o*c-t*s*l-i*n*c+i*s*h+r*n*l-r*o*h}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],h=e[6],l=e[7],c=e[8],p=c*o-s*l,u=s*h-c*n,m=l*n-o*h,_=t*p+i*u+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/_;return e[0]=p*f,e[1]=(r*l-c*i)*f,e[2]=(s*i-r*o)*f,e[3]=u*f,e[4]=(c*t-r*h)*f,e[5]=(r*n-s*t)*f,e[6]=m*f,e[7]=(i*h-l*t)*f,e[8]=(o*t-i*n)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,s){const h=Math.cos(n),l=Math.sin(n);return this.set(i*h,i*l,-i*(h*o+l*s)+o+e,-r*l,r*h,-r*(-l*o+h*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new gt;function _s(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ir(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function di(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Rr(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const Qr={[Pt]:{[Dr]:di},[Dr]:{[Pt]:Rr}},nt={legacyMode:!0,get workingColorSpace(){return Dr},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.legacyMode||e===t||!e||!t)return a;if(Qr[e]&&Qr[e][t]!==void 0){const i=Qr[e][t];return a.r=i(a.r),a.g=i(a.g),a.b=i(a.b),a}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}},vs={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qe={r:0,g:0,b:0},wt={h:0,s:0,l:0},ur={h:0,s:0,l:0};function en(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}function dr(a,e){return e.r=a.r,e.g=a.g,e.b=a.b,e}class Oe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Ho(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=en(o,n,e+1/3),this.g=en(o,n,e),this.b=en(o,n,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Pt){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,nt.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,nt.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)){const h=parseFloat(n[1])/360,l=parseFloat(n[2])/100,c=parseFloat(n[3])/100;return i(n[4]),this.setHSL(h,l,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,nt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,nt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Pt){const i=vs[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=di(e.r),this.g=di(e.g),this.b=di(e.b),this}copyLinearToSRGB(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return nt.fromWorkingColorSpace(dr(this,qe),e),lt(qe.r*255,0,255)<<16^lt(qe.g*255,0,255)<<8^lt(qe.b*255,0,255)<<0}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(dr(this,qe),t);const i=qe.r,r=qe.g,n=qe.b,o=Math.max(i,r,n),s=Math.min(i,r,n);let h,l;const c=(s+o)/2;if(s===o)h=0,l=0;else{const p=o-s;switch(l=c<=.5?p/(o+s):p/(2-o-s),o){case i:h=(r-n)/p+(r<n?6:0);break;case r:h=(n-i)/p+2;break;case n:h=(i-r)/p+4;break}h/=6}return e.h=h,e.s=l,e.l=c,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(dr(this,qe),t),e.r=qe.r,e.g=qe.g,e.b=qe.b,e}getStyle(e=Pt){return nt.fromWorkingColorSpace(dr(this,qe),e),e!==Pt?`color(${e} ${qe.r} ${qe.g} ${qe.b})`:`rgb(${qe.r*255|0},${qe.g*255|0},${qe.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(wt),wt.h+=e,wt.s+=t,wt.l+=i,this.setHSL(wt.h,wt.s,wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wt),e.getHSL(ur);const i=Jr(wt.h,ur.h,t),r=Jr(wt.s,ur.s,t),n=Jr(wt.l,ur.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Oe.NAMES=vs;let Mi;class xs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mi===void 0&&(Mi=Ir("canvas")),Mi.width=e.width,Mi.height=e.height;const i=Mi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Mi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ir("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=di(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(di(t[i]/255)*255):t[i]=di(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ms{constructor(e=null){this.isSource=!0,this.uuid=nr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?n.push(tn(r[o].image)):n.push(tn(r[o]))}else n=tn(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function tn(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?xs.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vo=0;class _t extends _i{constructor(e=_t.DEFAULT_IMAGE,t=_t.DEFAULT_MAPPING,i=Lt,r=Lt,n=St,o=tr,s=At,h=fi,l=_t.DEFAULT_ANISOTROPY,c=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vo++}),this.uuid=nr(),this.name="",this.source=new Ms(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=h,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case Lt:e.x=e.x<0?0:1;break;case Rn:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case Lt:e.y=e.y<0?0:1;break;case Rn:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=fs;_t.DEFAULT_ANISOTROPY=1;class ke{constructor(e=0,t=0,i=0,r=1){ke.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const o=e.elements,s=o[0],h=o[4],l=o[8],c=o[1],p=o[5],u=o[9],m=o[2],_=o[6],f=o[10];if(Math.abs(h-c)<.01&&Math.abs(l-m)<.01&&Math.abs(u-_)<.01){if(Math.abs(h+c)<.1&&Math.abs(l+m)<.1&&Math.abs(u+_)<.1&&Math.abs(s+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(s+1)/2,E=(p+1)/2,S=(f+1)/2,y=(h+c)/4,w=(l+m)/4,C=(u+_)/4;return x>E&&x>S?x<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(x),r=y/i,n=w/i):E>S?E<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(E),i=y/r,n=C/r):S<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(S),i=w/n,r=C/n),this.set(i,r,n,t),this}let d=Math.sqrt((_-u)*(_-u)+(l-m)*(l-m)+(c-h)*(c-h));return Math.abs(d)<.001&&(d=1),this.x=(_-u)/d,this.y=(l-m)/d,this.z=(c-h)/d,this.w=Math.acos((s+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $t extends _i{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ke(0,0,e,t),this.scissorTest=!1,this.viewport=new ke(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new _t(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:St,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ms(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends _t{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo extends _t{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=st,this.minFilter=st,this.wrapR=Lt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,s){let h=i[r+0],l=i[r+1],c=i[r+2],p=i[r+3];const u=n[o+0],m=n[o+1],_=n[o+2],f=n[o+3];if(s===0){e[t+0]=h,e[t+1]=l,e[t+2]=c,e[t+3]=p;return}if(s===1){e[t+0]=u,e[t+1]=m,e[t+2]=_,e[t+3]=f;return}if(p!==f||h!==u||l!==m||c!==_){let d=1-s;const x=h*u+l*m+c*_+p*f,E=x>=0?1:-1,S=1-x*x;if(S>Number.EPSILON){const w=Math.sqrt(S),C=Math.atan2(w,x*E);d=Math.sin(d*C)/w,s=Math.sin(s*C)/w}const y=s*E;if(h=h*d+u*y,l=l*d+m*y,c=c*d+_*y,p=p*d+f*y,d===1-s){const w=1/Math.sqrt(h*h+l*l+c*c+p*p);h*=w,l*=w,c*=w,p*=w}}e[t]=h,e[t+1]=l,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,n,o){const s=i[r],h=i[r+1],l=i[r+2],c=i[r+3],p=n[o],u=n[o+1],m=n[o+2],_=n[o+3];return e[t]=s*_+c*p+h*m-l*u,e[t+1]=h*_+c*u+l*p-s*m,e[t+2]=l*_+c*m+s*u-h*p,e[t+3]=c*_-s*p-h*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,n=e._z,o=e._order,s=Math.cos,h=Math.sin,l=s(i/2),c=s(r/2),p=s(n/2),u=h(i/2),m=h(r/2),_=h(n/2);switch(o){case"XYZ":this._x=u*c*p+l*m*_,this._y=l*m*p-u*c*_,this._z=l*c*_+u*m*p,this._w=l*c*p-u*m*_;break;case"YXZ":this._x=u*c*p+l*m*_,this._y=l*m*p-u*c*_,this._z=l*c*_-u*m*p,this._w=l*c*p+u*m*_;break;case"ZXY":this._x=u*c*p-l*m*_,this._y=l*m*p+u*c*_,this._z=l*c*_+u*m*p,this._w=l*c*p-u*m*_;break;case"ZYX":this._x=u*c*p-l*m*_,this._y=l*m*p+u*c*_,this._z=l*c*_-u*m*p,this._w=l*c*p+u*m*_;break;case"YZX":this._x=u*c*p+l*m*_,this._y=l*m*p+u*c*_,this._z=l*c*_-u*m*p,this._w=l*c*p-u*m*_;break;case"XZY":this._x=u*c*p-l*m*_,this._y=l*m*p-u*c*_,this._z=l*c*_+u*m*p,this._w=l*c*p+u*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],s=t[5],h=t[9],l=t[2],c=t[6],p=t[10],u=i+s+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(c-h)*m,this._y=(n-l)*m,this._z=(o-r)*m}else if(i>s&&i>p){const m=2*Math.sqrt(1+i-s-p);this._w=(c-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(n+l)/m}else if(s>p){const m=2*Math.sqrt(1+s-i-p);this._w=(n-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+p-i-s);this._w=(o-r)/m,this._x=(n+l)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,s=t._x,h=t._y,l=t._z,c=t._w;return this._x=i*c+o*s+r*l-n*h,this._y=r*c+o*h+n*s-i*l,this._z=n*c+o*l+i*h-r*s,this._w=o*c-i*s-r*h-n*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+n*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const h=1-s*s;if(h<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),c=Math.atan2(l,s),p=Math.sin((1-t)*c)/l,u=Math.sin(t*c)/l;return this._w=o*p+this._w*u,this._x=i*p+this._x*u,this._y=r*p+this._y*u,this._z=n*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ba.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ba.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,s=e.z,h=e.w,l=h*t+o*r-s*i,c=h*i+s*t-n*r,p=h*r+n*i-o*t,u=-n*t-o*i-s*r;return this.x=l*h+u*-n+c*-s-p*-o,this.y=c*h+u*-o+p*-n-l*-s,this.z=p*h+u*-s+l*-o-c*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,s=t.y,h=t.z;return this.x=r*h-n*s,this.y=n*o-i*h,this.z=i*s-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rn.copy(this).projectOnVector(e),this.sub(rn)}reflect(e){return this.sub(rn.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rn=new I,ba=new gi;class ar{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let h=0,l=e.length;h<l;h+=3){const c=e[h],p=e[h+1],u=e[h+2];c<t&&(t=c),p<i&&(i=p),u<r&&(r=u),c>n&&(n=c),p>o&&(o=p),u>s&&(s=u)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,s=-1/0;for(let h=0,l=e.count;h<l;h++){const c=e.getX(h),p=e.getY(h),u=e.getZ(h);c<t&&(t=c),p<i&&(i=p),u<r&&(r=u),c>n&&(n=c),p>o&&(o=p),u>s&&(s=u)}return this.min.set(t,i,r),this.max.set(n,o,s),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let o=0,s=n.count;o<s;o++)ri.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ri)}else i.boundingBox===null&&i.computeBoundingBox(),nn.copy(i.boundingBox),nn.applyMatrix4(e.matrixWorld),this.union(nn);const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wi),pr.subVectors(this.max,Wi),yi.subVectors(e.a,Wi),Si.subVectors(e.b,Wi),bi.subVectors(e.c,Wi),qt.subVectors(Si,yi),Xt.subVectors(bi,Si),ni.subVectors(yi,bi);let t=[0,-qt.z,qt.y,0,-Xt.z,Xt.y,0,-ni.z,ni.y,qt.z,0,-qt.x,Xt.z,0,-Xt.x,ni.z,0,-ni.x,-qt.y,qt.x,0,-Xt.y,Xt.x,0,-ni.y,ni.x,0];return!an(t,yi,Si,bi,pr)||(t=[1,0,0,0,1,0,0,0,1],!an(t,yi,Si,bi,pr))?!1:(fr.crossVectors(qt,Xt),t=[fr.x,fr.y,fr.z],an(t,yi,Si,bi,pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ri.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zt=[new I,new I,new I,new I,new I,new I,new I,new I],ri=new I,nn=new ar,yi=new I,Si=new I,bi=new I,qt=new I,Xt=new I,ni=new I,Wi=new I,pr=new I,fr=new I,ai=new I;function an(a,e,t,i,r){for(let n=0,o=a.length-3;n<=o;n+=3){ai.fromArray(a,n);const s=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),h=e.dot(ai),l=t.dot(ai),c=i.dot(ai);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>s)return!1}return!0}const jo=new ar,ji=new I,sn=new I;class Un{constructor(e=new I,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jo.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sn.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(sn)),this.expandByPoint(ji.copy(e.center).sub(sn))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ft=new I,on=new I,mr=new I,Yt=new I,ln=new I,gr=new I,cn=new I;class qo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ft)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ft.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ft.copy(this.direction).multiplyScalar(t).add(this.origin),Ft.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){on.copy(e).add(t).multiplyScalar(.5),mr.copy(t).sub(e).normalize(),Yt.copy(this.origin).sub(on);const n=e.distanceTo(t)*.5,o=-this.direction.dot(mr),s=Yt.dot(this.direction),h=-Yt.dot(mr),l=Yt.lengthSq(),c=Math.abs(1-o*o);let p,u,m,_;if(c>0)if(p=o*h-s,u=o*s-h,_=n*c,p>=0)if(u>=-_)if(u<=_){const f=1/c;p*=f,u*=f,m=p*(p+o*u+2*s)+u*(o*p+u+2*h)+l}else u=n,p=Math.max(0,-(o*u+s)),m=-p*p+u*(u+2*h)+l;else u=-n,p=Math.max(0,-(o*u+s)),m=-p*p+u*(u+2*h)+l;else u<=-_?(p=Math.max(0,-(-o*n+s)),u=p>0?-n:Math.min(Math.max(-n,-h),n),m=-p*p+u*(u+2*h)+l):u<=_?(p=0,u=Math.min(Math.max(-n,-h),n),m=u*(u+2*h)+l):(p=Math.max(0,-(o*n+s)),u=p>0?n:Math.min(Math.max(-n,-h),n),m=-p*p+u*(u+2*h)+l);else u=o>0?-n:n,p=Math.max(0,-(o*u+s)),m=-p*p+u*(u+2*h)+l;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(mr).multiplyScalar(u).add(on),m}intersectSphere(e,t){Ft.subVectors(e.center,this.origin);const i=Ft.dot(this.direction),r=Ft.dot(Ft)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),s=i-o,h=i+o;return s<0&&h<0?null:s<0?this.at(h,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,s,h;const l=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,r=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,r=(e.min.x-u.x)*l),c>=0?(n=(e.min.y-u.y)*c,o=(e.max.y-u.y)*c):(n=(e.max.y-u.y)*c,o=(e.min.y-u.y)*c),i>o||n>r||((n>i||isNaN(i))&&(i=n),(o<r||isNaN(r))&&(r=o),p>=0?(s=(e.min.z-u.z)*p,h=(e.max.z-u.z)*p):(s=(e.max.z-u.z)*p,h=(e.min.z-u.z)*p),i>h||s>r)||((s>i||i!==i)&&(i=s),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ft)!==null}intersectTriangle(e,t,i,r,n){ln.subVectors(t,e),gr.subVectors(i,e),cn.crossVectors(ln,gr);let o=this.direction.dot(cn),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;Yt.subVectors(this.origin,e);const h=s*this.direction.dot(gr.crossVectors(Yt,gr));if(h<0)return null;const l=s*this.direction.dot(ln.cross(Yt));if(l<0||h+l>o)return null;const c=-s*Yt.dot(cn);return c<0?null:this.at(c/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,o,s,h,l,c,p,u,m,_,f,d){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=r,x[1]=n,x[5]=o,x[9]=s,x[13]=h,x[2]=l,x[6]=c,x[10]=p,x[14]=u,x[3]=m,x[7]=_,x[11]=f,x[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/wi.setFromMatrixColumn(e,0).length(),n=1/wi.setFromMatrixColumn(e,1).length(),o=1/wi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),s=Math.sin(i),h=Math.cos(r),l=Math.sin(r),c=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const u=o*c,m=o*p,_=s*c,f=s*p;t[0]=h*c,t[4]=-h*p,t[8]=l,t[1]=m+_*l,t[5]=u-f*l,t[9]=-s*h,t[2]=f-u*l,t[6]=_+m*l,t[10]=o*h}else if(e.order==="YXZ"){const u=h*c,m=h*p,_=l*c,f=l*p;t[0]=u+f*s,t[4]=_*s-m,t[8]=o*l,t[1]=o*p,t[5]=o*c,t[9]=-s,t[2]=m*s-_,t[6]=f+u*s,t[10]=o*h}else if(e.order==="ZXY"){const u=h*c,m=h*p,_=l*c,f=l*p;t[0]=u-f*s,t[4]=-o*p,t[8]=_+m*s,t[1]=m+_*s,t[5]=o*c,t[9]=f-u*s,t[2]=-o*l,t[6]=s,t[10]=o*h}else if(e.order==="ZYX"){const u=o*c,m=o*p,_=s*c,f=s*p;t[0]=h*c,t[4]=_*l-m,t[8]=u*l+f,t[1]=h*p,t[5]=f*l+u,t[9]=m*l-_,t[2]=-l,t[6]=s*h,t[10]=o*h}else if(e.order==="YZX"){const u=o*h,m=o*l,_=s*h,f=s*l;t[0]=h*c,t[4]=f-u*p,t[8]=_*p+m,t[1]=p,t[5]=o*c,t[9]=-s*c,t[2]=-l*c,t[6]=m*p+_,t[10]=u-f*p}else if(e.order==="XZY"){const u=o*h,m=o*l,_=s*h,f=s*l;t[0]=h*c,t[4]=-p,t[8]=l*c,t[1]=u*p+f,t[5]=o*c,t[9]=m*p-_,t[2]=_*p-m,t[6]=s*c,t[10]=f*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xo,e,Yo)}lookAt(e,t,i){const r=this.elements;return pt.subVectors(e,t),pt.lengthSq()===0&&(pt.z=1),pt.normalize(),Zt.crossVectors(i,pt),Zt.lengthSq()===0&&(Math.abs(i.z)===1?pt.x+=1e-4:pt.z+=1e-4,pt.normalize(),Zt.crossVectors(i,pt)),Zt.normalize(),_r.crossVectors(pt,Zt),r[0]=Zt.x,r[4]=_r.x,r[8]=pt.x,r[1]=Zt.y,r[5]=_r.y,r[9]=pt.y,r[2]=Zt.z,r[6]=_r.z,r[10]=pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],s=i[4],h=i[8],l=i[12],c=i[1],p=i[5],u=i[9],m=i[13],_=i[2],f=i[6],d=i[10],x=i[14],E=i[3],S=i[7],y=i[11],w=i[15],C=r[0],N=r[4],g=r[8],L=r[12],R=r[1],j=r[5],J=r[9],O=r[13],P=r[2],F=r[6],Y=r[10],K=r[14],X=r[3],ee=r[7],Z=r[11],H=r[15];return n[0]=o*C+s*R+h*P+l*X,n[4]=o*N+s*j+h*F+l*ee,n[8]=o*g+s*J+h*Y+l*Z,n[12]=o*L+s*O+h*K+l*H,n[1]=c*C+p*R+u*P+m*X,n[5]=c*N+p*j+u*F+m*ee,n[9]=c*g+p*J+u*Y+m*Z,n[13]=c*L+p*O+u*K+m*H,n[2]=_*C+f*R+d*P+x*X,n[6]=_*N+f*j+d*F+x*ee,n[10]=_*g+f*J+d*Y+x*Z,n[14]=_*L+f*O+d*K+x*H,n[3]=E*C+S*R+y*P+w*X,n[7]=E*N+S*j+y*F+w*ee,n[11]=E*g+S*J+y*Y+w*Z,n[15]=E*L+S*O+y*K+w*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],s=e[5],h=e[9],l=e[13],c=e[2],p=e[6],u=e[10],m=e[14],_=e[3],f=e[7],d=e[11],x=e[15];return _*(+n*h*p-r*l*p-n*s*u+i*l*u+r*s*m-i*h*m)+f*(+t*h*m-t*l*u+n*o*u-r*o*m+r*l*c-n*h*c)+d*(+t*l*p-t*s*m-n*o*p+i*o*m+n*s*c-i*l*c)+x*(-r*s*c-t*h*p+t*s*u+r*o*p-i*o*u+i*h*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],s=e[5],h=e[6],l=e[7],c=e[8],p=e[9],u=e[10],m=e[11],_=e[12],f=e[13],d=e[14],x=e[15],E=p*d*l-f*u*l+f*h*m-s*d*m-p*h*x+s*u*x,S=_*u*l-c*d*l-_*h*m+o*d*m+c*h*x-o*u*x,y=c*f*l-_*p*l+_*s*m-o*f*m-c*s*x+o*p*x,w=_*p*h-c*f*h-_*s*u+o*f*u+c*s*d-o*p*d,C=t*E+i*S+r*y+n*w;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=E*N,e[1]=(f*u*n-p*d*n-f*r*m+i*d*m+p*r*x-i*u*x)*N,e[2]=(s*d*n-f*h*n+f*r*l-i*d*l-s*r*x+i*h*x)*N,e[3]=(p*h*n-s*u*n-p*r*l+i*u*l+s*r*m-i*h*m)*N,e[4]=S*N,e[5]=(c*d*n-_*u*n+_*r*m-t*d*m-c*r*x+t*u*x)*N,e[6]=(_*h*n-o*d*n-_*r*l+t*d*l+o*r*x-t*h*x)*N,e[7]=(o*u*n-c*h*n+c*r*l-t*u*l-o*r*m+t*h*m)*N,e[8]=y*N,e[9]=(_*p*n-c*f*n-_*i*m+t*f*m+c*i*x-t*p*x)*N,e[10]=(o*f*n-_*s*n+_*i*l-t*f*l-o*i*x+t*s*x)*N,e[11]=(c*s*n-o*p*n-c*i*l+t*p*l+o*i*m-t*s*m)*N,e[12]=w*N,e[13]=(c*f*r-_*p*r+_*i*u-t*f*u-c*i*d+t*p*d)*N,e[14]=(_*s*r-o*f*r-_*i*h+t*f*h+o*i*d-t*s*d)*N,e[15]=(o*p*r-c*s*r+c*i*h-t*p*h-o*i*u+t*s*u)*N,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,s=e.y,h=e.z,l=n*o,c=n*s;return this.set(l*o+i,l*s-r*h,l*h+r*s,0,l*s+r*h,c*s+i,c*h-r*o,0,l*h-r*s,c*h+r*o,n*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,s=t._z,h=t._w,l=n+n,c=o+o,p=s+s,u=n*l,m=n*c,_=n*p,f=o*c,d=o*p,x=s*p,E=h*l,S=h*c,y=h*p,w=i.x,C=i.y,N=i.z;return r[0]=(1-(f+x))*w,r[1]=(m+y)*w,r[2]=(_-S)*w,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(u+x))*C,r[6]=(d+E)*C,r[7]=0,r[8]=(_+S)*N,r[9]=(d-E)*N,r[10]=(1-(u+f))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=wi.set(r[0],r[1],r[2]).length();const o=wi.set(r[4],r[5],r[6]).length(),s=wi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],Tt.copy(this);const h=1/n,l=1/o,c=1/s;return Tt.elements[0]*=h,Tt.elements[1]*=h,Tt.elements[2]*=h,Tt.elements[4]*=l,Tt.elements[5]*=l,Tt.elements[6]*=l,Tt.elements[8]*=c,Tt.elements[9]*=c,Tt.elements[10]*=c,t.setFromRotationMatrix(Tt),i.x=n,i.y=o,i.z=s,this}makePerspective(e,t,i,r,n,o){const s=this.elements,h=2*n/(t-e),l=2*n/(i-r),c=(t+e)/(t-e),p=(i+r)/(i-r),u=-(o+n)/(o-n),m=-2*o*n/(o-n);return s[0]=h,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=l,s[9]=p,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=m,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,i,r,n,o){const s=this.elements,h=1/(t-e),l=1/(i-r),c=1/(o-n),p=(t+e)*h,u=(i+r)*l,m=(o+n)*c;return s[0]=2*h,s[4]=0,s[8]=0,s[12]=-p,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-m,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const wi=new I,Tt=new Ve,Xo=new I(0,0,0),Yo=new I(1,1,1),Zt=new I,_r=new I,pt=new I,wa=new Ve,Ta=new gi;class sr{constructor(e=0,t=0,i=0,r=sr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],s=r[8],h=r[1],l=r[5],c=r[9],p=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(lt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,n));break;case"ZYX":this._y=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(h,n)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(lt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(s,n)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}sr.DefaultOrder="XYZ";sr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ss{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zo=0;const Ea=new I,Ti=new gi,kt=new Ve,vr=new I,qi=new I,Ko=new I,Jo=new gi,La=new I(1,0,0),Aa=new I(0,1,0),Ca=new I(0,0,1),$o={type:"added"},Ra={type:"removed"};class ct extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zo++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ct.DefaultUp.clone();const e=new I,t=new sr,i=new gi,r=new I(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ve},normalMatrix:{value:new gt}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=ct.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ct.DefaultMatrixWorldAutoUpdate,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.multiply(Ti),this}rotateOnWorldAxis(e,t){return Ti.setFromAxisAngle(e,t),this.quaternion.premultiply(Ti),this}rotateX(e){return this.rotateOnAxis(La,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(Ca,e)}translateOnAxis(e,t){return Ea.copy(e).applyQuaternion(this.quaternion),this.position.add(Ea.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(La,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(Ca,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kt.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vr.copy(e):vr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kt.lookAt(qi,vr,this.up):kt.lookAt(vr,qi,this.up),this.quaternion.setFromRotationMatrix(kt),r&&(kt.extractRotation(r.matrixWorld),Ti.setFromRotationMatrix(kt),this.quaternion.premultiply(Ti.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent($o)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ra)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ra)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),kt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kt.multiply(e.parent.matrixWorld)),e.applyMatrix4(kt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,n=this.children.length;r<n;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,e,Ko),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qi,Jo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++){const s=r[n];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(s,h){return s[h.uuid]===void 0&&(s[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const h=s.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const p=h[l];n(e.shapes,p)}else n(e.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let h=0,l=this.material.length;h<l;h++)s.push(n(e.materials,this.material[h]));r.material=s}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const h=this.animations[s];r.animations.push(n(e.animations,h))}}if(t){const s=o(e.geometries),h=o(e.materials),l=o(e.textures),c=o(e.images),p=o(e.shapes),u=o(e.skeletons),m=o(e.animations),_=o(e.nodes);s.length>0&&(i.geometries=s),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(s){const h=[];for(const l in s){const c=s[l];delete c.metadata,h.push(c)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ct.DefaultUp=new I(0,1,0);ct.DefaultMatrixAutoUpdate=!0;ct.DefaultMatrixWorldAutoUpdate=!0;const Et=new I,Bt=new I,hn=new I,Gt=new I,Ei=new I,Li=new I,Pa=new I,un=new I,dn=new I,pn=new I;class Vt{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Et.subVectors(e,t),r.cross(Et);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){Et.subVectors(r,t),Bt.subVectors(i,t),hn.subVectors(e,t);const o=Et.dot(Et),s=Et.dot(Bt),h=Et.dot(hn),l=Bt.dot(Bt),c=Bt.dot(hn),p=o*l-s*s;if(p===0)return n.set(-2,-1,-1);const u=1/p,m=(l*h-s*c)*u,_=(o*c-s*h)*u;return n.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gt),Gt.x>=0&&Gt.y>=0&&Gt.x+Gt.y<=1}static getUV(e,t,i,r,n,o,s,h){return this.getBarycoord(e,t,i,r,Gt),h.set(0,0),h.addScaledVector(n,Gt.x),h.addScaledVector(o,Gt.y),h.addScaledVector(s,Gt.z),h}static isFrontFacing(e,t,i,r){return Et.subVectors(i,t),Bt.subVectors(e,t),Et.cross(Bt).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Et.subVectors(this.c,this.b),Bt.subVectors(this.a,this.b),Et.cross(Bt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Vt.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Vt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,s;Ei.subVectors(r,i),Li.subVectors(n,i),un.subVectors(e,i);const h=Ei.dot(un),l=Li.dot(un);if(h<=0&&l<=0)return t.copy(i);dn.subVectors(e,r);const c=Ei.dot(dn),p=Li.dot(dn);if(c>=0&&p<=c)return t.copy(r);const u=h*p-c*l;if(u<=0&&h>=0&&c<=0)return o=h/(h-c),t.copy(i).addScaledVector(Ei,o);pn.subVectors(e,n);const m=Ei.dot(pn),_=Li.dot(pn);if(_>=0&&m<=_)return t.copy(n);const f=m*l-h*_;if(f<=0&&l>=0&&_<=0)return s=l/(l-_),t.copy(i).addScaledVector(Li,s);const d=c*_-m*p;if(d<=0&&p-c>=0&&m-_>=0)return Pa.subVectors(n,r),s=(p-c)/(p-c+(m-_)),t.copy(r).addScaledVector(Pa,s);const x=1/(d+f+u);return o=f*x,s=u*x,t.copy(i).addScaledVector(Ei,o).addScaledVector(Li,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Qo=0;class or extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qo++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=Oi,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=us,this.blendDst=ds,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=En,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Go,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const o=[];for(const s in n){const h=n[s];delete h.metadata,o.push(h)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bs extends or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ps,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const He=new I,xr=new Se;class vt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=xa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xr.fromBufferAttribute(this,t),xr.applyMatrix3(e),this.setXY(t,xr.x,xr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.applyMatrix3(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.applyMatrix4(e),this.setXYZ(t,He.x,He.y,He.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.applyNormalMatrix(e),this.setXYZ(t,He.x,He.y,He.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)He.fromBufferAttribute(this,t),He.transformDirection(e),this.setXYZ(t,He.x,He.y,He.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hr(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hr(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hr(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),r=dt(r,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ws extends vt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ts extends vt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ct extends vt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let el=0;const yt=new Ve,fn=new ct,Ai=new I,ft=new ar,Xi=new ar,$e=new I;class Nt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:el++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_s(e)?Ts:ws)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new gt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,i){return yt.makeTranslation(e,t,i),this.applyMatrix4(yt),this}scale(e,t,i){return yt.makeScale(e,t,i),this.applyMatrix4(yt),this}lookAt(e){return fn.lookAt(e),fn.updateMatrix(),this.applyMatrix4(fn.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];ft.setFromBufferAttribute(n),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,ft.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,ft.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(ft.min),this.boundingBox.expandByPoint(ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(ft.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const s=t[n];Xi.setFromBufferAttribute(s),this.morphTargetsRelative?($e.addVectors(ft.min,Xi.min),ft.expandByPoint($e),$e.addVectors(ft.max,Xi.max),ft.expandByPoint($e)):(ft.expandByPoint(Xi.min),ft.expandByPoint(Xi.max))}ft.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)$e.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared($e));if(t)for(let n=0,o=t.length;n<o;n++){const s=t[n],h=this.morphTargetsRelative;for(let l=0,c=s.count;l<c;l++)$e.fromBufferAttribute(s,l),h&&(Ai.fromBufferAttribute(e,l),$e.add(Ai)),r=Math.max(r,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vt(new Float32Array(4*s),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let R=0;R<s;R++)l[R]=new I,c[R]=new I;const p=new I,u=new I,m=new I,_=new Se,f=new Se,d=new Se,x=new I,E=new I;function S(R,j,J){p.fromArray(r,R*3),u.fromArray(r,j*3),m.fromArray(r,J*3),_.fromArray(o,R*2),f.fromArray(o,j*2),d.fromArray(o,J*2),u.sub(p),m.sub(p),f.sub(_),d.sub(_);const O=1/(f.x*d.y-d.x*f.y);isFinite(O)&&(x.copy(u).multiplyScalar(d.y).addScaledVector(m,-f.y).multiplyScalar(O),E.copy(m).multiplyScalar(f.x).addScaledVector(u,-d.x).multiplyScalar(O),l[R].add(x),l[j].add(x),l[J].add(x),c[R].add(E),c[j].add(E),c[J].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let R=0,j=y.length;R<j;++R){const J=y[R],O=J.start,P=J.count;for(let F=O,Y=O+P;F<Y;F+=3)S(i[F+0],i[F+1],i[F+2])}const w=new I,C=new I,N=new I,g=new I;function L(R){N.fromArray(n,R*3),g.copy(N);const j=l[R];w.copy(j),w.sub(N.multiplyScalar(N.dot(j))).normalize(),C.crossVectors(g,j);const J=C.dot(c[R])<0?-1:1;h[R*4]=w.x,h[R*4+1]=w.y,h[R*4+2]=w.z,h[R*4+3]=J}for(let R=0,j=y.length;R<j;++R){const J=y[R],O=J.start,P=J.count;for(let F=O,Y=O+P;F<Y;F+=3)L(i[F+0]),L(i[F+1]),L(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new I,n=new I,o=new I,s=new I,h=new I,l=new I,c=new I,p=new I;if(e)for(let u=0,m=e.count;u<m;u+=3){const _=e.getX(u+0),f=e.getX(u+1),d=e.getX(u+2);r.fromBufferAttribute(t,_),n.fromBufferAttribute(t,f),o.fromBufferAttribute(t,d),c.subVectors(o,n),p.subVectors(r,n),c.cross(p),s.fromBufferAttribute(i,_),h.fromBufferAttribute(i,f),l.fromBufferAttribute(i,d),s.add(c),h.add(c),l.add(c),i.setXYZ(_,s.x,s.y,s.z),i.setXYZ(f,h.x,h.y,h.z),i.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),n.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),c.subVectors(o,n),p.subVectors(r,n),c.cross(p),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$e.fromBufferAttribute(e,t),$e.normalize(),e.setXYZ(t,$e.x,$e.y,$e.z)}toNonIndexed(){function e(s,h){const l=s.array,c=s.itemSize,p=s.normalized,u=new l.constructor(h.length*c);let m=0,_=0;for(let f=0,d=h.length;f<d;f++){s.isInterleavedBufferAttribute?m=h[f]*s.data.stride+s.offset:m=h[f]*c;for(let x=0;x<c;x++)u[_++]=l[m++]}return new vt(u,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,i=this.index.array,r=this.attributes;for(const s in r){const h=r[s],l=e(h,i);t.setAttribute(s,l)}const n=this.morphAttributes;for(const s in n){const h=[],l=n[s];for(let c=0,p=l.length;c<p;c++){const u=l[c],m=e(u,i);h.push(m)}t.morphAttributes[s]=h}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,h=o.length;s<h;s++){const l=o[s];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(e[l]=h[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const l=i[h];e.data.attributes[h]=l.toJSON(e.data)}const r={};let n=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let p=0,u=l.length;p<u;p++){const m=l[p];c.push(m.toJSON(e.data))}c.length>0&&(r[h]=c,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(t))}const n=e.morphAttributes;for(const l in n){const c=[],p=n[l];for(let u=0,m=p.length;u<m;u++)c.push(p[u].clone(t));this.morphAttributes[l]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,c=o.length;l<c;l++){const p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Da=new Ve,Ci=new qo,mn=new Un,Yi=new I,Zi=new I,Ki=new I,gn=new I,Mr=new I,yr=new Se,Sr=new Se,br=new Se,_n=new I,wr=new I;class It extends ct{constructor(e=new Nt,t=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(n&&s){Mr.set(0,0,0);for(let h=0,l=n.length;h<l;h++){const c=s[h],p=n[h];c!==0&&(gn.fromBufferAttribute(p,e),o?Mr.addScaledVector(gn,c):Mr.addScaledVector(gn.sub(t),c))}t.add(Mr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),mn.copy(i.boundingSphere),mn.applyMatrix4(n),e.ray.intersectsSphere(mn)===!1)||(Da.copy(n).invert(),Ci.copy(e.ray).applyMatrix4(Da),i.boundingBox!==null&&Ci.intersectsBox(i.boundingBox)===!1))return;let o;const s=i.index,h=i.attributes.position,l=i.attributes.uv,c=i.attributes.uv2,p=i.groups,u=i.drawRange;if(s!==null)if(Array.isArray(r))for(let m=0,_=p.length;m<_;m++){const f=p[m],d=r[f.materialIndex],x=Math.max(f.start,u.start),E=Math.min(s.count,Math.min(f.start+f.count,u.start+u.count));for(let S=x,y=E;S<y;S+=3){const w=s.getX(S),C=s.getX(S+1),N=s.getX(S+2);o=Tr(this,d,e,Ci,l,c,w,C,N),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),_=Math.min(s.count,u.start+u.count);for(let f=m,d=_;f<d;f+=3){const x=s.getX(f),E=s.getX(f+1),S=s.getX(f+2);o=Tr(this,r,e,Ci,l,c,x,E,S),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(r))for(let m=0,_=p.length;m<_;m++){const f=p[m],d=r[f.materialIndex],x=Math.max(f.start,u.start),E=Math.min(h.count,Math.min(f.start+f.count,u.start+u.count));for(let S=x,y=E;S<y;S+=3){const w=S,C=S+1,N=S+2;o=Tr(this,d,e,Ci,l,c,w,C,N),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const m=Math.max(0,u.start),_=Math.min(h.count,u.start+u.count);for(let f=m,d=_;f<d;f+=3){const x=f,E=f+1,S=f+2;o=Tr(this,r,e,Ci,l,c,x,E,S),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}}function tl(a,e,t,i,r,n,o,s){let h;if(e.side===bt?h=i.intersectTriangle(o,n,r,!0,s):h=i.intersectTriangle(r,n,o,e.side===pi,s),h===null)return null;wr.copy(s),wr.applyMatrix4(a.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:a}}function Tr(a,e,t,i,r,n,o,s,h){a.getVertexPosition(o,Yi),a.getVertexPosition(s,Zi),a.getVertexPosition(h,Ki);const l=tl(a,e,t,i,Yi,Zi,Ki,_n);if(l){r&&(yr.fromBufferAttribute(r,o),Sr.fromBufferAttribute(r,s),br.fromBufferAttribute(r,h),l.uv=Vt.getUV(_n,Yi,Zi,Ki,yr,Sr,br,new Se)),n&&(yr.fromBufferAttribute(n,o),Sr.fromBufferAttribute(n,s),br.fromBufferAttribute(n,h),l.uv2=Vt.getUV(_n,Yi,Zi,Ki,yr,Sr,br,new Se));const c={a:o,b:s,c:h,normal:new I,materialIndex:0};Vt.getNormal(Yi,Zi,Ki,c.normal),l.face=c}return l}class lr extends Nt{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const s=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const h=[],l=[],c=[],p=[];let u=0,m=0;_("z","y","x",-1,-1,i,t,e,o,n,0),_("z","y","x",1,-1,i,t,-e,o,n,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,n,4),_("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(h),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(p,2));function _(f,d,x,E,S,y,w,C,N,g,L){const R=y/N,j=w/g,J=y/2,O=w/2,P=C/2,F=N+1,Y=g+1;let K=0,X=0;const ee=new I;for(let Z=0;Z<Y;Z++){const H=Z*j-O;for(let k=0;k<F;k++){const Q=k*R-J;ee[f]=Q*E,ee[d]=H*S,ee[x]=P,l.push(ee.x,ee.y,ee.z),ee[f]=0,ee[d]=0,ee[x]=C>0?1:-1,c.push(ee.x,ee.y,ee.z),p.push(k/N),p.push(1-Z/g),K+=1}}for(let Z=0;Z<g;Z++)for(let H=0;H<N;H++){const k=u+H+F*Z,Q=u+H+F*(Z+1),te=u+(H+1)+F*(Z+1),ce=u+(H+1)+F*Z;h.push(k,Q,ce),h.push(Q,te,ce),X+=6}s.addGroup(m,X,L),m+=X,u+=K}}static fromJSON(e){return new lr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const r=a[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function at(a){const e={};for(let t=0;t<a.length;t++){const i=Gi(a[t]);for(const r in i)e[r]=i[r]}return e}function il(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Es(a){return a.getRenderTarget()===null&&a.outputEncoding===ze?Pt:Dr}const Ls={clone:Gi,merge:at};var rl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rl,this.fragmentShader=nl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=il(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class As extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mt extends As{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ya*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;n+=o.offsetX*r/h,t-=o.offsetY*i/l,r*=o.width/h,i*=o.height/l}const s=this.filmOffset;s!==0&&(n+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ri=-90,Pi=1;class al extends ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new mt(Ri,Pi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new mt(Ri,Pi,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const o=new mt(Ri,Pi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new mt(Ri,Pi,e,t);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const h=new mt(Ri,Pi,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,1),this.add(h);const l=new mt(Ri,Pi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,o,s,h,l]=this.children,c=e.getRenderTarget(),p=e.toneMapping,u=e.xr.enabled;e.toneMapping=Wt,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,s),e.setRenderTarget(i,4),e.render(t,h),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(c),e.toneMapping=p,e.xr.enabled=u,i.texture.needsPMREMUpdate=!0}}class Cs extends _t{constructor(e,t,i,r,n,o,s,h,l,c){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,i,r,n,o,s,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sl extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cs(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:St}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lr(5,5,5),n=new jt({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:bt,blending:Jt});n.uniforms.tEquirect.value=t;const o=new It(r,n),s=t.minFilter;return t.minFilter===tr&&(t.minFilter=St),new al(1,10,this).update(e,o),t.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}const vn=new I,ol=new I,ll=new gt;class si{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vn.subVectors(i,t).cross(ol.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(vn),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ll.getNormalMatrix(e),r=this.coplanarPoint(vn).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Un,Er=new I;class On{constructor(e=new si,t=new si,i=new si,r=new si,n=new si,o=new si){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(n),s[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],o=i[2],s=i[3],h=i[4],l=i[5],c=i[6],p=i[7],u=i[8],m=i[9],_=i[10],f=i[11],d=i[12],x=i[13],E=i[14],S=i[15];return t[0].setComponents(s-r,p-h,f-u,S-d).normalize(),t[1].setComponents(s+r,p+h,f+u,S+d).normalize(),t[2].setComponents(s+n,p+l,f+m,S+x).normalize(),t[3].setComponents(s-n,p-l,f-m,S-x).normalize(),t[4].setComponents(s-o,p-c,f-_,S-E).normalize(),t[5].setComponents(s+o,p+c,f+_,S+E).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSprite(e){return Di.center.set(0,0,0),Di.radius=.7071067811865476,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Er.x=r.normal.x>0?e.max.x:e.min.x,Er.y=r.normal.y>0?e.max.y:e.min.y,Er.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rs(){let a=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=a.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=a.requestAnimationFrame(r),e=!0)},stop:function(){a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){a=n}}}function cl(a,e){const t=e.isWebGL2,i=new WeakMap;function r(l,c){const p=l.array,u=l.usage,m=a.createBuffer();a.bindBuffer(c,m),a.bufferData(c,p,u),l.onUploadCallback();let _;if(p instanceof Float32Array)_=5126;else if(p instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(p instanceof Int16Array)_=5122;else if(p instanceof Uint32Array)_=5125;else if(p instanceof Int32Array)_=5124;else if(p instanceof Int8Array)_=5120;else if(p instanceof Uint8Array)_=5121;else if(p instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:m,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:l.version}}function n(l,c,p){const u=c.array,m=c.updateRange;a.bindBuffer(p,l),m.count===-1?a.bufferSubData(p,0,u):(t?a.bufferSubData(p,m.offset*u.BYTES_PER_ELEMENT,u,m.offset,m.count):a.bufferSubData(p,m.offset*u.BYTES_PER_ELEMENT,u.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=i.get(l);c&&(a.deleteBuffer(c.buffer),i.delete(l))}function h(l,c){if(l.isGLBufferAttribute){const u=i.get(l);(!u||u.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const p=i.get(l);p===void 0?i.set(l,r(l,c)):p.version<l.version&&(n(p.buffer,l,c),p.version=l.version)}return{get:o,remove:s,update:h}}class zn extends Nt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,s=Math.floor(i),h=Math.floor(r),l=s+1,c=h+1,p=e/s,u=t/h,m=[],_=[],f=[],d=[];for(let x=0;x<c;x++){const E=x*u-o;for(let S=0;S<l;S++){const y=S*p-n;_.push(y,-E,0),f.push(0,0,1),d.push(S/s),d.push(1-x/h)}}for(let x=0;x<h;x++)for(let E=0;E<s;E++){const S=E+l*x,y=E+l*(x+1),w=E+1+l*(x+1),C=E+1+l*x;m.push(S,y,C),m.push(y,w,C)}this.setIndex(m),this.setAttribute("position",new Ct(_,3)),this.setAttribute("normal",new Ct(f,3)),this.setAttribute("uv",new Ct(d,2))}static fromJSON(e){return new zn(e.width,e.height,e.widthSegments,e.heightSegments)}}var hl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,ul=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ml=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gl="vec3 transformed = vec3( position );",_l=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vl=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,xl=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Ml=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,El=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ll=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Al=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cl=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Rl=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Pl=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Il=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Nl=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ul=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ol="gl_FragColor = linearToOutputTexel( gl_FragColor );",zl=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fl=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,kl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bl=`#ifdef USE_ENVMAP
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
#endif`,Gl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hl=`#ifdef USE_ENVMAP
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
#endif`,Vl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ql=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xl=`#ifdef USE_GRADIENTMAP
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
}`,Yl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jl=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$l=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Ql=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,ec=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ic=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ac=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,sc=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lc=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hc=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dc=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gc=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_c=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vc=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xc=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mc=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yc=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sc=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,bc=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,wc=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tc=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ec=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lc=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ac=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Cc=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Rc=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Pc=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dc=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ic=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nc=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Uc=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Oc=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zc=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fc=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kc=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bc=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gc=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Hc=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vc=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Wc=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jc=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qc=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Xc=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yc=`#ifdef USE_SKINNING
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
#endif`,Zc=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kc=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jc=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$c=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qc=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,eh=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,th=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ih=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,rh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ah=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,oh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ch=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,hh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ph=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,mh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,gh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,_h=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xh=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,bh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Th=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Lh=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ah=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ch=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rh=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ph=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Ih=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Uh=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,zh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fh=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Gh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,we={alphamap_fragment:hl,alphamap_pars_fragment:ul,alphatest_fragment:dl,alphatest_pars_fragment:pl,aomap_fragment:fl,aomap_pars_fragment:ml,begin_vertex:gl,beginnormal_vertex:_l,bsdfs:vl,iridescence_fragment:xl,bumpmap_pars_fragment:Ml,clipping_planes_fragment:yl,clipping_planes_pars_fragment:Sl,clipping_planes_pars_vertex:bl,clipping_planes_vertex:wl,color_fragment:Tl,color_pars_fragment:El,color_pars_vertex:Ll,color_vertex:Al,common:Cl,cube_uv_reflection_fragment:Rl,defaultnormal_vertex:Pl,displacementmap_pars_vertex:Dl,displacementmap_vertex:Il,emissivemap_fragment:Nl,emissivemap_pars_fragment:Ul,encodings_fragment:Ol,encodings_pars_fragment:zl,envmap_fragment:Fl,envmap_common_pars_fragment:kl,envmap_pars_fragment:Bl,envmap_pars_vertex:Gl,envmap_physical_pars_fragment:Ql,envmap_vertex:Hl,fog_vertex:Vl,fog_pars_vertex:Wl,fog_fragment:jl,fog_pars_fragment:ql,gradientmap_pars_fragment:Xl,lightmap_fragment:Yl,lightmap_pars_fragment:Zl,lights_lambert_fragment:Kl,lights_lambert_pars_fragment:Jl,lights_pars_begin:$l,lights_toon_fragment:ec,lights_toon_pars_fragment:tc,lights_phong_fragment:ic,lights_phong_pars_fragment:rc,lights_physical_fragment:nc,lights_physical_pars_fragment:ac,lights_fragment_begin:sc,lights_fragment_maps:oc,lights_fragment_end:lc,logdepthbuf_fragment:cc,logdepthbuf_pars_fragment:hc,logdepthbuf_pars_vertex:uc,logdepthbuf_vertex:dc,map_fragment:pc,map_pars_fragment:fc,map_particle_fragment:mc,map_particle_pars_fragment:gc,metalnessmap_fragment:_c,metalnessmap_pars_fragment:vc,morphcolor_vertex:xc,morphnormal_vertex:Mc,morphtarget_pars_vertex:yc,morphtarget_vertex:Sc,normal_fragment_begin:bc,normal_fragment_maps:wc,normal_pars_fragment:Tc,normal_pars_vertex:Ec,normal_vertex:Lc,normalmap_pars_fragment:Ac,clearcoat_normal_fragment_begin:Cc,clearcoat_normal_fragment_maps:Rc,clearcoat_pars_fragment:Pc,iridescence_pars_fragment:Dc,output_fragment:Ic,packing:Nc,premultiplied_alpha_fragment:Uc,project_vertex:Oc,dithering_fragment:zc,dithering_pars_fragment:Fc,roughnessmap_fragment:kc,roughnessmap_pars_fragment:Bc,shadowmap_pars_fragment:Gc,shadowmap_pars_vertex:Hc,shadowmap_vertex:Vc,shadowmask_pars_fragment:Wc,skinbase_vertex:jc,skinning_pars_vertex:qc,skinning_vertex:Xc,skinnormal_vertex:Yc,specularmap_fragment:Zc,specularmap_pars_fragment:Kc,tonemapping_fragment:Jc,tonemapping_pars_fragment:$c,transmission_fragment:Qc,transmission_pars_fragment:eh,uv_pars_fragment:th,uv_pars_vertex:ih,uv_vertex:rh,uv2_pars_fragment:nh,uv2_pars_vertex:ah,uv2_vertex:sh,worldpos_vertex:oh,background_vert:lh,background_frag:ch,backgroundCube_vert:hh,backgroundCube_frag:uh,cube_vert:dh,cube_frag:ph,depth_vert:fh,depth_frag:mh,distanceRGBA_vert:gh,distanceRGBA_frag:_h,equirect_vert:vh,equirect_frag:xh,linedashed_vert:Mh,linedashed_frag:yh,meshbasic_vert:Sh,meshbasic_frag:bh,meshlambert_vert:wh,meshlambert_frag:Th,meshmatcap_vert:Eh,meshmatcap_frag:Lh,meshnormal_vert:Ah,meshnormal_frag:Ch,meshphong_vert:Rh,meshphong_frag:Ph,meshphysical_vert:Dh,meshphysical_frag:Ih,meshtoon_vert:Nh,meshtoon_frag:Uh,points_vert:Oh,points_frag:zh,shadow_vert:Fh,shadow_frag:kh,sprite_vert:Bh,sprite_frag:Gh},ne={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new gt},uv2Transform:{value:new gt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new gt}}},Dt={basic:{uniforms:at([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:at([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:at([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:at([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:at([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Oe(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:at([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:at([ne.points,ne.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:at([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:at([ne.common,ne.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:at([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:at([ne.sprite,ne.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:at([ne.common,ne.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:at([ne.lights,ne.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};Dt.physical={uniforms:at([Dt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const Lr={r:0,b:0,g:0};function Hh(a,e,t,i,r,n,o){const s=new Oe(0);let h=n===!0?0:1,l,c,p=null,u=0,m=null;function _(d,x){let E=!1,S=x.isScene===!0?x.background:null;S&&S.isTexture&&(S=(x.backgroundBlurriness>0?t:e).get(S));const y=a.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(S=null),S===null?f(s,h):S&&S.isColor&&(f(S,1),E=!0),(a.autoClear||E)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),S&&(S.isCubeTexture||S.mapping===Or)?(c===void 0&&(c=new It(new lr(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:Gi(Dt.backgroundCube.uniforms),vertexShader:Dt.backgroundCube.vertexShader,fragmentShader:Dt.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,N,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=S.encoding!==ze,(p!==S||u!==S.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,p=S,u=S.version,m=a.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new It(new zn(2,2),new jt({name:"BackgroundMaterial",uniforms:Gi(Dt.background.uniforms),vertexShader:Dt.background.vertexShader,fragmentShader:Dt.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=S.encoding!==ze,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(p!==S||u!==S.version||m!==a.toneMapping)&&(l.material.needsUpdate=!0,p=S,u=S.version,m=a.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function f(d,x){d.getRGB(Lr,Es(a)),i.buffers.color.setClear(Lr.r,Lr.g,Lr.b,x,o)}return{getClearColor:function(){return s},setClearColor:function(d,x=1){s.set(d),h=x,f(s,h)},getClearAlpha:function(){return h},setClearAlpha:function(d){h=d,f(s,h)},render:_}}function Vh(a,e,t,i){const r=a.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,s={},h=d(null);let l=h,c=!1;function p(P,F,Y,K,X){let ee=!1;if(o){const Z=f(K,Y,F);l!==Z&&(l=Z,m(l.object)),ee=x(P,K,Y,X),ee&&E(P,K,Y,X)}else{const Z=F.wireframe===!0;(l.geometry!==K.id||l.program!==Y.id||l.wireframe!==Z)&&(l.geometry=K.id,l.program=Y.id,l.wireframe=Z,ee=!0)}X!==null&&t.update(X,34963),(ee||c)&&(c=!1,g(P,F,Y,K),X!==null&&a.bindBuffer(34963,t.get(X).buffer))}function u(){return i.isWebGL2?a.createVertexArray():n.createVertexArrayOES()}function m(P){return i.isWebGL2?a.bindVertexArray(P):n.bindVertexArrayOES(P)}function _(P){return i.isWebGL2?a.deleteVertexArray(P):n.deleteVertexArrayOES(P)}function f(P,F,Y){const K=Y.wireframe===!0;let X=s[P.id];X===void 0&&(X={},s[P.id]=X);let ee=X[F.id];ee===void 0&&(ee={},X[F.id]=ee);let Z=ee[K];return Z===void 0&&(Z=d(u()),ee[K]=Z),Z}function d(P){const F=[],Y=[],K=[];for(let X=0;X<r;X++)F[X]=0,Y[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Y,attributeDivisors:K,object:P,attributes:{},index:null}}function x(P,F,Y,K){const X=l.attributes,ee=F.attributes;let Z=0;const H=Y.getAttributes();for(const k in H)if(H[k].location>=0){const Q=X[k];let te=ee[k];if(te===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(te=P.instanceColor)),Q===void 0||Q.attribute!==te||te&&Q.data!==te.data)return!0;Z++}return l.attributesNum!==Z||l.index!==K}function E(P,F,Y,K){const X={},ee=F.attributes;let Z=0;const H=Y.getAttributes();for(const k in H)if(H[k].location>=0){let Q=ee[k];Q===void 0&&(k==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),k==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor));const te={};te.attribute=Q,Q&&Q.data&&(te.data=Q.data),X[k]=te,Z++}l.attributes=X,l.attributesNum=Z,l.index=K}function S(){const P=l.newAttributes;for(let F=0,Y=P.length;F<Y;F++)P[F]=0}function y(P){w(P,0)}function w(P,F){const Y=l.newAttributes,K=l.enabledAttributes,X=l.attributeDivisors;Y[P]=1,K[P]===0&&(a.enableVertexAttribArray(P),K[P]=1),X[P]!==F&&((i.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,F),X[P]=F)}function C(){const P=l.newAttributes,F=l.enabledAttributes;for(let Y=0,K=F.length;Y<K;Y++)F[Y]!==P[Y]&&(a.disableVertexAttribArray(Y),F[Y]=0)}function N(P,F,Y,K,X,ee){i.isWebGL2===!0&&(Y===5124||Y===5125)?a.vertexAttribIPointer(P,F,Y,X,ee):a.vertexAttribPointer(P,F,Y,K,X,ee)}function g(P,F,Y,K){if(i.isWebGL2===!1&&(P.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;S();const X=K.attributes,ee=Y.getAttributes(),Z=F.defaultAttributeValues;for(const H in ee){const k=ee[H];if(k.location>=0){let Q=X[H];if(Q===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const te=Q.normalized,ce=Q.itemSize,G=t.get(Q);if(G===void 0)continue;const Le=G.buffer,de=G.type,_e=G.bytesPerElement;if(Q.isInterleavedBufferAttribute){const he=Q.data,Ne=he.stride,be=Q.offset;if(he.isInstancedInterleavedBuffer){for(let ve=0;ve<k.locationSize;ve++)w(k.location+ve,he.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<k.locationSize;ve++)y(k.location+ve);a.bindBuffer(34962,Le);for(let ve=0;ve<k.locationSize;ve++)N(k.location+ve,ce/k.locationSize,de,te,Ne*_e,(be+ce/k.locationSize*ve)*_e)}else{if(Q.isInstancedBufferAttribute){for(let he=0;he<k.locationSize;he++)w(k.location+he,Q.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let he=0;he<k.locationSize;he++)y(k.location+he);a.bindBuffer(34962,Le);for(let he=0;he<k.locationSize;he++)N(k.location+he,ce/k.locationSize,de,te,ce*_e,ce/k.locationSize*he*_e)}}else if(Z!==void 0){const te=Z[H];if(te!==void 0)switch(te.length){case 2:a.vertexAttrib2fv(k.location,te);break;case 3:a.vertexAttrib3fv(k.location,te);break;case 4:a.vertexAttrib4fv(k.location,te);break;default:a.vertexAttrib1fv(k.location,te)}}}}C()}function L(){J();for(const P in s){const F=s[P];for(const Y in F){const K=F[Y];for(const X in K)_(K[X].object),delete K[X];delete F[Y]}delete s[P]}}function R(P){if(s[P.id]===void 0)return;const F=s[P.id];for(const Y in F){const K=F[Y];for(const X in K)_(K[X].object),delete K[X];delete F[Y]}delete s[P.id]}function j(P){for(const F in s){const Y=s[F];if(Y[P.id]===void 0)continue;const K=Y[P.id];for(const X in K)_(K[X].object),delete K[X];delete Y[P.id]}}function J(){O(),c=!0,l!==h&&(l=h,m(l.object))}function O(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:p,reset:J,resetDefaultState:O,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:j,initAttributes:S,enableAttribute:y,disableUnusedAttributes:C}}function Wh(a,e,t,i){const r=i.isWebGL2;let n;function o(l){n=l}function s(l,c){a.drawArrays(n,l,c),t.update(c,n,1)}function h(l,c,p){if(p===0)return;let u,m;if(r)u=a,m="drawArraysInstanced";else if(u=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[m](n,l,c,p),t.update(c,n,p)}this.setMode=o,this.render=s,this.renderInstances=h}function jh(a,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");i=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(N){if(N==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&a instanceof WebGL2ComputeRenderingContext;let s=t.precision!==void 0?t.precision:"highp";const h=n(s);h!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",h,"instead."),s=h);const l=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,p=a.getParameter(34930),u=a.getParameter(35660),m=a.getParameter(3379),_=a.getParameter(34076),f=a.getParameter(34921),d=a.getParameter(36347),x=a.getParameter(36348),E=a.getParameter(36349),S=u>0,y=o||e.has("OES_texture_float"),w=S&&y,C=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:n,precision:s,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:u,maxTextureSize:m,maxCubemapSize:_,maxAttributes:f,maxVertexUniforms:d,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:S,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:C}}function qh(a){const e=this;let t=null,i=0,r=!1,n=!1;const o=new si,s=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u,m){const _=p.length!==0||u||i!==0||r;return r=u,t=c(p,m,0),i=p.length,_},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1,l()},this.setState=function(p,u,m){const _=p.clippingPlanes,f=p.clipIntersection,d=p.clipShadows,x=a.get(p);if(!r||_===null||_.length===0||n&&!d)n?c(null):l();else{const E=n?0:i,S=E*4;let y=x.clippingState||null;h.value=y,y=c(_,u,S,m);for(let w=0;w!==S;++w)y[w]=t[w];x.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=E}};function l(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,u,m,_){const f=p!==null?p.length:0;let d=null;if(f!==0){if(d=h.value,_!==!0||d===null){const x=m+f*4,E=u.matrixWorldInverse;s.getNormalMatrix(E),(d===null||d.length<x)&&(d=new Float32Array(x));for(let S=0,y=m;S!==f;++S,y+=4)o.copy(p[S]).applyMatrix4(E,s),o.normal.toArray(d,y),d[y+3]=o.constant}h.value=d,h.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,d}}function Xh(a){let e=new WeakMap;function t(o,s){return s===Ln?o.mapping=Fi:s===An&&(o.mapping=ki),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===Ln||s===An)if(e.has(o)){const h=e.get(o).texture;return t(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new sl(h.height/2);return l.fromEquirectangularTexture(a,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const h=e.get(s);h!==void 0&&(e.delete(s),h.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class Ps extends As{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,s=r+t,h=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,o=n+l*this.view.width,s-=c*this.view.offsetY,h=s-c*this.view.height}this.projectionMatrix.makeOrthographic(n,o,s,h,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ui=4,Ia=[.125,.215,.35,.446,.526,.582],li=20,xn=new Ps,Na=new Oe;let Mn=null;const oi=(1+Math.sqrt(5))/2,Ii=1/oi,Ua=[new I(1,1,1),new I(-1,1,1),new I(1,1,-1),new I(-1,1,-1),new I(0,oi,Ii),new I(0,oi,-Ii),new I(Ii,0,oi),new I(-Ii,0,oi),new I(oi,Ii,0),new I(-oi,Ii,0)];class Oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Mn=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Mn),e.scissorTest=!1,Ar(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mn=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:St,minFilter:St,generateMipmaps:!1,type:ir,format:At,encoding:mi,depthBuffer:!1},r=za(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yh(n)),this._blurMaterial=Zh(n,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,xn)}_sceneToCubeUV(e,t,i,r){const n=new mt(90,1,t,i),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],h=this._renderer,l=h.autoClear,c=h.toneMapping;h.getClearColor(Na),h.toneMapping=Wt,h.autoClear=!1;const p=new bs({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),u=new It(new lr,p);let m=!1;const _=e.background;_?_.isColor&&(p.color.copy(_),e.background=null,m=!0):(p.color.copy(Na),m=!0);for(let f=0;f<6;f++){const d=f%3;d===0?(n.up.set(0,o[f],0),n.lookAt(s[f],0,0)):d===1?(n.up.set(0,0,o[f]),n.lookAt(0,s[f],0)):(n.up.set(0,o[f],0),n.lookAt(0,0,s[f]));const x=this._cubeSize;Ar(r,d*x,f>2?x:0,x,x),h.setRenderTarget(r),m&&h.render(u,n),h.render(e,n)}u.geometry.dispose(),u.material.dispose(),h.toneMapping=c,h.autoClear=l,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fa());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new It(this._lodPlanes[0],n),s=n.uniforms;s.envMap.value=e;const h=this._cubeSize;Ar(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(o,xn)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ua[(r-1)%Ua.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,s){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new It(this._lodPlanes[r],l),u=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(n)?Math.PI/(2*m):2*Math.PI/(2*li-1),f=n/_,d=isFinite(n)?1+Math.floor(c*f):li;d>li&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${li}`);const x=[];let E=0;for(let N=0;N<li;++N){const g=N/f,L=Math.exp(-g*g/2);x.push(L),N===0?E+=L:N<d&&(E+=2*L)}for(let N=0;N<x.length;N++)x[N]=x[N]/E;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=x,u.latitudinal.value=o==="latitudinal",s&&(u.poleAxis.value=s);const{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-i;const y=this._sizeLods[r],w=3*y*(r>S-Ui?r-S+Ui:0),C=4*(this._cubeSize-y);Ar(t,w,C,3*y,2*y),h.setRenderTarget(t),h.render(p,xn)}}function Yh(a){const e=[],t=[],i=[];let r=a;const n=a-Ui+1+Ia.length;for(let o=0;o<n;o++){const s=Math.pow(2,r);t.push(s);let h=1/s;o>a-Ui?h=Ia[o-a+Ui-1]:o===0&&(h=0),i.push(h);const l=1/(s-2),c=-l,p=1+l,u=[c,c,p,c,p,p,c,c,p,p,c,p],m=6,_=6,f=3,d=2,x=1,E=new Float32Array(f*_*m),S=new Float32Array(d*_*m),y=new Float32Array(x*_*m);for(let C=0;C<m;C++){const N=C%3*2/3-1,g=C>2?0:-1,L=[N,g,0,N+2/3,g,0,N+2/3,g+1,0,N,g,0,N+2/3,g+1,0,N,g+1,0];E.set(L,f*_*C),S.set(u,d*_*C);const R=[C,C,C,C,C,C];y.set(R,x*_*C)}const w=new Nt;w.setAttribute("position",new vt(E,f)),w.setAttribute("uv",new vt(S,d)),w.setAttribute("faceIndex",new vt(y,x)),e.push(w),r>Ui&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function za(a,e,t){const i=new $t(a,e,t);return i.texture.mapping=Or,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ar(a,e,t,i,r){a.viewport.set(e,t,i,r),a.scissor.set(e,t,i,r)}function Zh(a,e,t){const i=new Float32Array(li),r=new I(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fn(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Fa(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fn(),fragmentShader:`

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
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function ka(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fn(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jt,depthTest:!1,depthWrite:!1})}function Fn(){return`

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
	`}function Kh(a){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const h=s.mapping,l=h===Ln||h===An,c=h===Fi||h===ki;if(l||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let p=e.get(s);return t===null&&(t=new Oa(a)),p=l?t.fromEquirectangular(s,p):t.fromCubemap(s,p),e.set(s,p),p.texture}else{if(e.has(s))return e.get(s).texture;{const p=s.image;if(l&&p&&p.height>0||c&&p&&r(p)){t===null&&(t=new Oa(a));const u=l?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,u),s.addEventListener("dispose",n),u.texture}else return null}}}return s}function r(s){let h=0;const l=6;for(let c=0;c<l;c++)s[c]!==void 0&&h++;return h===l}function n(s){const h=s.target;h.removeEventListener("dispose",n);const l=e.get(h);l!==void 0&&(e.delete(h),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Jh(a){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=a.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function $h(a,e,t,i){const r={},n=new WeakMap;function o(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete r[u.id];const m=n.get(u);m&&(e.remove(m),n.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function s(p,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function h(p){const u=p.attributes;for(const _ in u)e.update(u[_],34962);const m=p.morphAttributes;for(const _ in m){const f=m[_];for(let d=0,x=f.length;d<x;d++)e.update(f[d],34962)}}function l(p){const u=[],m=p.index,_=p.attributes.position;let f=0;if(m!==null){const E=m.array;f=m.version;for(let S=0,y=E.length;S<y;S+=3){const w=E[S+0],C=E[S+1],N=E[S+2];u.push(w,C,C,N,N,w)}}else{const E=_.array;f=_.version;for(let S=0,y=E.length/3-1;S<y;S+=3){const w=S+0,C=S+1,N=S+2;u.push(w,C,C,N,N,w)}}const d=new(_s(u)?Ts:ws)(u,1);d.version=f;const x=n.get(p);x&&e.remove(x),n.set(p,d)}function c(p){const u=n.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return n.get(p)}return{get:s,update:h,getWireframeAttribute:c}}function Qh(a,e,t,i){const r=i.isWebGL2;let n;function o(u){n=u}let s,h;function l(u){s=u.type,h=u.bytesPerElement}function c(u,m){a.drawElements(n,m,s,u*h),t.update(m,n,1)}function p(u,m,_){if(_===0)return;let f,d;if(r)f=a,d="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](n,m,s,u*h,_),t.update(m,n,_)}this.setMode=o,this.setIndex=l,this.render=c,this.renderInstances=p}function eu(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,s){switch(t.calls++,o){case 4:t.triangles+=s*(n/3);break;case 1:t.lines+=s*(n/2);break;case 3:t.lines+=s*(n-1);break;case 2:t.lines+=s*n;break;case 0:t.points+=s*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tu(a,e){return a[0]-e[0]}function iu(a,e){return Math.abs(e[1])-Math.abs(a[1])}function ru(a,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new ke,s=[];for(let l=0;l<8;l++)s[l]=[l,0];function h(l,c,p,u){const m=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=_!==void 0?_.length:0;let d=n.get(c);if(d===void 0||d.count!==f){let S=function(){P.dispose(),n.delete(c),c.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const y=c.morphAttributes.position!==void 0,w=c.morphAttributes.normal!==void 0,C=c.morphAttributes.color!==void 0,N=c.morphAttributes.position||[],g=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let R=0;y===!0&&(R=1),w===!0&&(R=2),C===!0&&(R=3);let j=c.attributes.position.count*R,J=1;j>e.maxTextureSize&&(J=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const O=new Float32Array(j*J*4*f),P=new ys(O,j,J,f);P.type=hi,P.needsUpdate=!0;const F=R*4;for(let Y=0;Y<f;Y++){const K=N[Y],X=g[Y],ee=L[Y],Z=j*J*4*Y;for(let H=0;H<K.count;H++){const k=H*F;y===!0&&(o.fromBufferAttribute(K,H),O[Z+k+0]=o.x,O[Z+k+1]=o.y,O[Z+k+2]=o.z,O[Z+k+3]=0),w===!0&&(o.fromBufferAttribute(X,H),O[Z+k+4]=o.x,O[Z+k+5]=o.y,O[Z+k+6]=o.z,O[Z+k+7]=0),C===!0&&(o.fromBufferAttribute(ee,H),O[Z+k+8]=o.x,O[Z+k+9]=o.y,O[Z+k+10]=o.z,O[Z+k+11]=ee.itemSize===4?o.w:1)}}d={count:f,texture:P,size:new Se(j,J)},n.set(c,d),c.addEventListener("dispose",S)}let x=0;for(let S=0;S<m.length;S++)x+=m[S];const E=c.morphTargetsRelative?1:1-x;u.getUniforms().setValue(a,"morphTargetBaseInfluence",E),u.getUniforms().setValue(a,"morphTargetInfluences",m),u.getUniforms().setValue(a,"morphTargetsTexture",d.texture,t),u.getUniforms().setValue(a,"morphTargetsTextureSize",d.size)}else{const _=m===void 0?0:m.length;let f=i[c.id];if(f===void 0||f.length!==_){f=[];for(let y=0;y<_;y++)f[y]=[y,0];i[c.id]=f}for(let y=0;y<_;y++){const w=f[y];w[0]=y,w[1]=m[y]}f.sort(iu);for(let y=0;y<8;y++)y<_&&f[y][1]?(s[y][0]=f[y][0],s[y][1]=f[y][1]):(s[y][0]=Number.MAX_SAFE_INTEGER,s[y][1]=0);s.sort(tu);const d=c.morphAttributes.position,x=c.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const w=s[y],C=w[0],N=w[1];C!==Number.MAX_SAFE_INTEGER&&N?(d&&c.getAttribute("morphTarget"+y)!==d[C]&&c.setAttribute("morphTarget"+y,d[C]),x&&c.getAttribute("morphNormal"+y)!==x[C]&&c.setAttribute("morphNormal"+y,x[C]),r[y]=N,E+=N):(d&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),x&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const S=c.morphTargetsRelative?1:1-E;u.getUniforms().setValue(a,"morphTargetBaseInfluence",S),u.getUniforms().setValue(a,"morphTargetInfluences",r)}}return{update:h}}function nu(a,e,t,i){let r=new WeakMap;function n(h){const l=i.render.frame,c=h.geometry,p=e.get(h,c);return r.get(p)!==l&&(e.update(p),r.set(p,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",s)===!1&&h.addEventListener("dispose",s),t.update(h.instanceMatrix,34962),h.instanceColor!==null&&t.update(h.instanceColor,34962)),p}function o(){r=new WeakMap}function s(h){const l=h.target;l.removeEventListener("dispose",s),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:n,dispose:o}}const Ds=new _t,Is=new ys,Ns=new Wo,Us=new Cs,Ba=[],Ga=[],Ha=new Float32Array(16),Va=new Float32Array(9),Wa=new Float32Array(4);function Hi(a,e,t){const i=a[0];if(i<=0||i>0)return a;const r=e*t;let n=Ba[r];if(n===void 0&&(n=new Float32Array(r),Ba[r]=n),e!==0){i.toArray(n,0);for(let o=1,s=0;o!==e;++o)s+=t,a[o].toArray(n,s)}return n}function Xe(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Ye(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function zr(a,e){let t=Ga[e];t===void 0&&(t=new Int32Array(e),Ga[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function au(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function su(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;a.uniform2fv(this.addr,e),Ye(t,e)}}function ou(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xe(t,e))return;a.uniform3fv(this.addr,e),Ye(t,e)}}function lu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;a.uniform4fv(this.addr,e),Ye(t,e)}}function cu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xe(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,i))return;Wa.set(i),a.uniformMatrix2fv(this.addr,!1,Wa),Ye(t,i)}}function hu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xe(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,i))return;Va.set(i),a.uniformMatrix3fv(this.addr,!1,Va),Ye(t,i)}}function uu(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xe(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Ye(t,e)}else{if(Xe(t,i))return;Ha.set(i),a.uniformMatrix4fv(this.addr,!1,Ha),Ye(t,i)}}function du(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function pu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;a.uniform2iv(this.addr,e),Ye(t,e)}}function fu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;a.uniform3iv(this.addr,e),Ye(t,e)}}function mu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;a.uniform4iv(this.addr,e),Ye(t,e)}}function gu(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function _u(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xe(t,e))return;a.uniform2uiv(this.addr,e),Ye(t,e)}}function vu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xe(t,e))return;a.uniform3uiv(this.addr,e),Ye(t,e)}}function xu(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xe(t,e))return;a.uniform4uiv(this.addr,e),Ye(t,e)}}function Mu(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Ds,r)}function yu(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ns,r)}function Su(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Us,r)}function bu(a,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(a.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Is,r)}function wu(a){switch(a){case 5126:return au;case 35664:return su;case 35665:return ou;case 35666:return lu;case 35674:return cu;case 35675:return hu;case 35676:return uu;case 5124:case 35670:return du;case 35667:case 35671:return pu;case 35668:case 35672:return fu;case 35669:case 35673:return mu;case 5125:return gu;case 36294:return _u;case 36295:return vu;case 36296:return xu;case 35678:case 36198:case 36298:case 36306:case 35682:return Mu;case 35679:case 36299:case 36307:return yu;case 35680:case 36300:case 36308:case 36293:return Su;case 36289:case 36303:case 36311:case 36292:return bu}}function Tu(a,e){a.uniform1fv(this.addr,e)}function Eu(a,e){const t=Hi(e,this.size,2);a.uniform2fv(this.addr,t)}function Lu(a,e){const t=Hi(e,this.size,3);a.uniform3fv(this.addr,t)}function Au(a,e){const t=Hi(e,this.size,4);a.uniform4fv(this.addr,t)}function Cu(a,e){const t=Hi(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function Ru(a,e){const t=Hi(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function Pu(a,e){const t=Hi(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Du(a,e){a.uniform1iv(this.addr,e)}function Iu(a,e){a.uniform2iv(this.addr,e)}function Nu(a,e){a.uniform3iv(this.addr,e)}function Uu(a,e){a.uniform4iv(this.addr,e)}function Ou(a,e){a.uniform1uiv(this.addr,e)}function zu(a,e){a.uniform2uiv(this.addr,e)}function Fu(a,e){a.uniform3uiv(this.addr,e)}function ku(a,e){a.uniform4uiv(this.addr,e)}function Bu(a,e,t){const i=this.cache,r=e.length,n=zr(t,r);Xe(i,n)||(a.uniform1iv(this.addr,n),Ye(i,n));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Ds,n[o])}function Gu(a,e,t){const i=this.cache,r=e.length,n=zr(t,r);Xe(i,n)||(a.uniform1iv(this.addr,n),Ye(i,n));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ns,n[o])}function Hu(a,e,t){const i=this.cache,r=e.length,n=zr(t,r);Xe(i,n)||(a.uniform1iv(this.addr,n),Ye(i,n));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Us,n[o])}function Vu(a,e,t){const i=this.cache,r=e.length,n=zr(t,r);Xe(i,n)||(a.uniform1iv(this.addr,n),Ye(i,n));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Is,n[o])}function Wu(a){switch(a){case 5126:return Tu;case 35664:return Eu;case 35665:return Lu;case 35666:return Au;case 35674:return Cu;case 35675:return Ru;case 35676:return Pu;case 5124:case 35670:return Du;case 35667:case 35671:return Iu;case 35668:case 35672:return Nu;case 35669:case 35673:return Uu;case 5125:return Ou;case 36294:return zu;case 36295:return Fu;case 36296:return ku;case 35678:case 36198:case 36298:case 36306:case 35682:return Bu;case 35679:case 36299:case 36307:return Gu;case 35680:case 36300:case 36308:case 36293:return Hu;case 36289:case 36303:case 36311:case 36292:return Vu}}class ju{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=wu(t.type)}}class qu{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Wu(t.type)}}class Xu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const s=r[n];s.setValue(e,t[s.id],i)}}}const yn=/(\w+)(\])?(\[|\.)?/g;function ja(a,e){a.seq.push(e),a.map[e.id]=e}function Yu(a,e,t){const i=a.name,r=i.length;for(yn.lastIndex=0;;){const n=yn.exec(i),o=yn.lastIndex;let s=n[1];const h=n[2]==="]",l=n[3];if(h&&(s=s|0),l===void 0||l==="["&&o+2===r){ja(t,l===void 0?new ju(s,a,e):new qu(s,a,e));break}else{let c=t.map[s];c===void 0&&(c=new Xu(s),ja(t,c)),t=c}}}class Pr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);Yu(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const s=t[n],h=i[s.id];h.needsUpdate!==!1&&s.setValue(e,h.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function qa(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}let Zu=0;function Ku(a,e){const t=a.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${t[o]}`)}return i.join(`
`)}function Ju(a){switch(a){case mi:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Xa(a,e,t){const i=a.getShaderParameter(e,35713),r=a.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+Ku(a.getShaderSource(e),o)}else return r}function $u(a,e){const t=Ju(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Qu(a,e){let t;switch(e){case _o:t="Linear";break;case vo:t="Reinhard";break;case xo:t="OptimizedCineon";break;case Mo:t="ACESFilmic";break;case yo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ed(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function td(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function id(a,e){const t={},i=a.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=a.getActiveAttrib(e,r),o=n.name;let s=1;n.type===35674&&(s=2),n.type===35675&&(s=3),n.type===35676&&(s=4),t[o]={type:n.type,location:a.getAttribLocation(e,o),locationSize:s}}return t}function er(a){return a!==""}function Ya(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Za(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rd=/^[ \t]*#include +<([\w\d./]+)>/gm;function In(a){return a.replace(rd,nd)}function nd(a,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return In(t)}const ad=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(a){return a.replace(ad,sd)}function sd(a,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Ja(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function od(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===hs?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===Ys?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Qi&&(e="SHADOWMAP_TYPE_VSM"),e}function ld(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Fi:case ki:e="ENVMAP_TYPE_CUBE";break;case Or:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cd(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ki:e="ENVMAP_MODE_REFRACTION";break}return e}function hd(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case ps:e="ENVMAP_BLENDING_MULTIPLY";break;case mo:e="ENVMAP_BLENDING_MIX";break;case go:e="ENVMAP_BLENDING_ADD";break}return e}function ud(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dd(a,e,t,i){const r=a.getContext(),n=t.defines;let o=t.vertexShader,s=t.fragmentShader;const h=od(t),l=ld(t),c=cd(t),p=hd(t),u=ud(t),m=t.isWebGL2?"":ed(t),_=td(n),f=r.createProgram();let d,x,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=[_].filter(er).join(`
`),d.length>0&&(d+=`
`),x=[m,_].filter(er).join(`
`),x.length>0&&(x+=`
`)):(d=[Ja(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),x=[m,Ja(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wt?"#define TONE_MAPPING":"",t.toneMapping!==Wt?we.tonemapping_pars_fragment:"",t.toneMapping!==Wt?Qu("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,$u("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=In(o),o=Ya(o,t),o=Za(o,t),s=In(s),s=Ya(s,t),s=Za(s,t),o=Ka(o),s=Ka(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,d=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["#define varying in",t.glslVersion===Ma?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ma?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const S=E+d+o,y=E+x+s,w=qa(r,35633,S),C=qa(r,35632,y);if(r.attachShader(f,w),r.attachShader(f,C),t.index0AttributeName!==void 0?r.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f),a.debug.checkShaderErrors){const L=r.getProgramInfoLog(f).trim(),R=r.getShaderInfoLog(w).trim(),j=r.getShaderInfoLog(C).trim();let J=!0,O=!0;if(r.getProgramParameter(f,35714)===!1){J=!1;const P=Xa(r,w,"vertex"),F=Xa(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,35715)+`

Program Info Log: `+L+`
`+P+`
`+F)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(R===""||j==="")&&(O=!1);O&&(this.diagnostics={runnable:J,programLog:L,vertexShader:{log:R,prefix:d},fragmentShader:{log:j,prefix:x}})}r.deleteShader(w),r.deleteShader(C);let N;this.getUniforms=function(){return N===void 0&&(N=new Pr(r,f)),N};let g;return this.getAttributes=function(){return g===void 0&&(g=id(r,f)),g},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Zu++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=w,this.fragmentShader=C,this}let pd=0;class fd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new md(e),t.set(e,i)),i}}class md{constructor(e){this.id=pd++,this.code=e,this.usedTimes=0}}function gd(a,e,t,i,r,n,o){const s=new Ss,h=new fd,l=[],c=r.isWebGL2,p=r.logarithmicDepthBuffer,u=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g,L,R,j,J){const O=j.fog,P=J.geometry,F=g.isMeshStandardMaterial?j.environment:null,Y=(g.isMeshStandardMaterial?t:e).get(g.envMap||F),K=Y&&Y.mapping===Or?Y.image.height:null,X=_[g.type];g.precision!==null&&(m=r.getMaxPrecision(g.precision),m!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",m,"instead."));const ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Z=ee!==void 0?ee.length:0;let H=0;P.morphAttributes.position!==void 0&&(H=1),P.morphAttributes.normal!==void 0&&(H=2),P.morphAttributes.color!==void 0&&(H=3);let k,Q,te,ce;if(X){const he=Dt[X];k=he.vertexShader,Q=he.fragmentShader}else k=g.vertexShader,Q=g.fragmentShader,h.update(g),te=h.getVertexShaderID(g),ce=h.getFragmentShaderID(g);const G=a.getRenderTarget(),Le=g.alphaTest>0,de=g.clearcoat>0,_e=g.iridescence>0;return{isWebGL2:c,shaderID:X,shaderName:g.type,vertexShader:k,fragmentShader:Q,defines:g.defines,customVertexShaderID:te,customFragmentShaderID:ce,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:u,outputEncoding:G===null?a.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:mi,map:!!g.map,matcap:!!g.matcap,envMap:!!Y,envMapMode:Y&&Y.mapping,envMapCubeUVHeight:K,lightMap:!!g.lightMap,aoMap:!!g.aoMap,emissiveMap:!!g.emissiveMap,bumpMap:!!g.bumpMap,normalMap:!!g.normalMap,objectSpaceNormalMap:g.normalMapType===Bo,tangentSpaceNormalMap:g.normalMapType===gs,decodeVideoTexture:!!g.map&&g.map.isVideoTexture===!0&&g.map.encoding===ze,clearcoat:de,clearcoatMap:de&&!!g.clearcoatMap,clearcoatRoughnessMap:de&&!!g.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!g.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!g.iridescenceMap,iridescenceThicknessMap:_e&&!!g.iridescenceThicknessMap,displacementMap:!!g.displacementMap,roughnessMap:!!g.roughnessMap,metalnessMap:!!g.metalnessMap,specularMap:!!g.specularMap,specularIntensityMap:!!g.specularIntensityMap,specularColorMap:!!g.specularColorMap,opaque:g.transparent===!1&&g.blending===Oi,alphaMap:!!g.alphaMap,alphaTest:Le,gradientMap:!!g.gradientMap,sheen:g.sheen>0,sheenColorMap:!!g.sheenColorMap,sheenRoughnessMap:!!g.sheenRoughnessMap,transmission:g.transmission>0,transmissionMap:!!g.transmissionMap,thicknessMap:!!g.thicknessMap,combine:g.combine,vertexTangents:!!g.normalMap&&!!P.attributes.tangent,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!g.map||!!g.bumpMap||!!g.normalMap||!!g.specularMap||!!g.alphaMap||!!g.emissiveMap||!!g.roughnessMap||!!g.metalnessMap||!!g.clearcoatMap||!!g.clearcoatRoughnessMap||!!g.clearcoatNormalMap||!!g.iridescenceMap||!!g.iridescenceThicknessMap||!!g.displacementMap||!!g.transmissionMap||!!g.thicknessMap||!!g.specularIntensityMap||!!g.specularColorMap||!!g.sheenColorMap||!!g.sheenRoughnessMap,uvsVertexOnly:!(g.map||g.bumpMap||g.normalMap||g.specularMap||g.alphaMap||g.emissiveMap||g.roughnessMap||g.metalnessMap||g.clearcoatNormalMap||g.iridescenceMap||g.iridescenceThicknessMap||g.transmission>0||g.transmissionMap||g.thicknessMap||g.specularIntensityMap||g.specularColorMap||g.sheen>0||g.sheenColorMap||g.sheenRoughnessMap)&&!!g.displacementMap,fog:!!O,useFog:g.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:!!g.flatShading,sizeAttenuation:g.sizeAttenuation,logarithmicDepthBuffer:p,skinning:J.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:H,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:g.dithering,shadowMapEnabled:a.shadowMap.enabled&&R.length>0,shadowMapType:a.shadowMap.type,toneMapping:g.toneMapped?a.toneMapping:Wt,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Ur,flipSided:g.side===bt,useDepthPacking:!!g.depthPacking,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:g.extensions&&g.extensions.derivatives,extensionFragDepth:g.extensions&&g.extensions.fragDepth,extensionDrawBuffers:g.extensions&&g.extensions.drawBuffers,extensionShaderTextureLOD:g.extensions&&g.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:g.customProgramCacheKey()}}function d(g){const L=[];if(g.shaderID?L.push(g.shaderID):(L.push(g.customVertexShaderID),L.push(g.customFragmentShaderID)),g.defines!==void 0)for(const R in g.defines)L.push(R),L.push(g.defines[R]);return g.isRawShaderMaterial===!1&&(x(L,g),E(L,g),L.push(a.outputEncoding)),L.push(g.customProgramCacheKey),L.join()}function x(g,L){g.push(L.precision),g.push(L.outputEncoding),g.push(L.envMapMode),g.push(L.envMapCubeUVHeight),g.push(L.combine),g.push(L.vertexUvs),g.push(L.fogExp2),g.push(L.sizeAttenuation),g.push(L.morphTargetsCount),g.push(L.morphAttributeCount),g.push(L.numDirLights),g.push(L.numPointLights),g.push(L.numSpotLights),g.push(L.numSpotLightMaps),g.push(L.numHemiLights),g.push(L.numRectAreaLights),g.push(L.numDirLightShadows),g.push(L.numPointLightShadows),g.push(L.numSpotLightShadows),g.push(L.numSpotLightShadowsWithMaps),g.push(L.shadowMapType),g.push(L.toneMapping),g.push(L.numClippingPlanes),g.push(L.numClipIntersection),g.push(L.depthPacking)}function E(g,L){s.disableAll(),L.isWebGL2&&s.enable(0),L.supportsVertexTextures&&s.enable(1),L.instancing&&s.enable(2),L.instancingColor&&s.enable(3),L.map&&s.enable(4),L.matcap&&s.enable(5),L.envMap&&s.enable(6),L.lightMap&&s.enable(7),L.aoMap&&s.enable(8),L.emissiveMap&&s.enable(9),L.bumpMap&&s.enable(10),L.normalMap&&s.enable(11),L.objectSpaceNormalMap&&s.enable(12),L.tangentSpaceNormalMap&&s.enable(13),L.clearcoat&&s.enable(14),L.clearcoatMap&&s.enable(15),L.clearcoatRoughnessMap&&s.enable(16),L.clearcoatNormalMap&&s.enable(17),L.iridescence&&s.enable(18),L.iridescenceMap&&s.enable(19),L.iridescenceThicknessMap&&s.enable(20),L.displacementMap&&s.enable(21),L.specularMap&&s.enable(22),L.roughnessMap&&s.enable(23),L.metalnessMap&&s.enable(24),L.gradientMap&&s.enable(25),L.alphaMap&&s.enable(26),L.alphaTest&&s.enable(27),L.vertexColors&&s.enable(28),L.vertexAlphas&&s.enable(29),L.vertexUvs&&s.enable(30),L.vertexTangents&&s.enable(31),L.uvsVertexOnly&&s.enable(32),g.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.skinning&&s.enable(4),L.morphTargets&&s.enable(5),L.morphNormals&&s.enable(6),L.morphColors&&s.enable(7),L.premultipliedAlpha&&s.enable(8),L.shadowMapEnabled&&s.enable(9),L.physicallyCorrectLights&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.specularIntensityMap&&s.enable(15),L.specularColorMap&&s.enable(16),L.transmission&&s.enable(17),L.transmissionMap&&s.enable(18),L.thicknessMap&&s.enable(19),L.sheen&&s.enable(20),L.sheenColorMap&&s.enable(21),L.sheenRoughnessMap&&s.enable(22),L.decodeVideoTexture&&s.enable(23),L.opaque&&s.enable(24),g.push(s.mask)}function S(g){const L=_[g.type];let R;if(L){const j=Dt[L];R=Ls.clone(j.uniforms)}else R=g.uniforms;return R}function y(g,L){let R;for(let j=0,J=l.length;j<J;j++){const O=l[j];if(O.cacheKey===L){R=O,++R.usedTimes;break}}return R===void 0&&(R=new dd(a,L,g,n),l.push(R)),R}function w(g){if(--g.usedTimes===0){const L=l.indexOf(g);l[L]=l[l.length-1],l.pop(),g.destroy()}}function C(g){h.remove(g)}function N(){h.dispose()}return{getParameters:f,getProgramCacheKey:d,getUniforms:S,acquireProgram:y,releaseProgram:w,releaseShaderCache:C,programs:l,dispose:N}}function _d(){let a=new WeakMap;function e(n){let o=a.get(n);return o===void 0&&(o={},a.set(n,o)),o}function t(n){a.delete(n)}function i(n,o,s){a.get(n)[o]=s}function r(){a=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function vd(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function $a(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Qa(){const a=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(p,u,m,_,f,d){let x=a[e];return x===void 0?(x={id:p.id,object:p,geometry:u,material:m,groupOrder:_,renderOrder:p.renderOrder,z:f,group:d},a[e]=x):(x.id=p.id,x.object=p,x.geometry=u,x.material=m,x.groupOrder=_,x.renderOrder=p.renderOrder,x.z=f,x.group=d),e++,x}function s(p,u,m,_,f,d){const x=o(p,u,m,_,f,d);m.transmission>0?i.push(x):m.transparent===!0?r.push(x):t.push(x)}function h(p,u,m,_,f,d){const x=o(p,u,m,_,f,d);m.transmission>0?i.unshift(x):m.transparent===!0?r.unshift(x):t.unshift(x)}function l(p,u){t.length>1&&t.sort(p||vd),i.length>1&&i.sort(u||$a),r.length>1&&r.sort(u||$a)}function c(){for(let p=e,u=a.length;p<u;p++){const m=a[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:s,unshift:h,finish:c,sort:l}}function xd(){let a=new WeakMap;function e(i,r){const n=a.get(i);let o;return n===void 0?(o=new Qa,a.set(i,[o])):r>=n.length?(o=new Qa,n.push(o)):o=n[r],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Md(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Oe};break;case"SpotLight":t={position:new I,direction:new I,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new I,halfWidth:new I,halfHeight:new I};break}return a[e.id]=t,t}}}function yd(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Sd=0;function bd(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function wd(a,e){const t=new Md,i=yd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new I);const n=new I,o=new Ve,s=new Ve;function h(c,p){let u=0,m=0,_=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let f=0,d=0,x=0,E=0,S=0,y=0,w=0,C=0,N=0,g=0;c.sort(bd);const L=p!==!0?Math.PI:1;for(let j=0,J=c.length;j<J;j++){const O=c[j],P=O.color,F=O.intensity,Y=O.distance,K=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)u+=P.r*F*L,m+=P.g*F*L,_+=P.b*F*L;else if(O.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(O.sh.coefficients[X],F);else if(O.isDirectionalLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*L),O.castShadow){const ee=O.shadow,Z=i.get(O);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,r.directionalShadow[f]=Z,r.directionalShadowMap[f]=K,r.directionalShadowMatrix[f]=O.shadow.matrix,y++}r.directional[f]=X,f++}else if(O.isSpotLight){const X=t.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(P).multiplyScalar(F*L),X.distance=Y,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,r.spot[x]=X;const ee=O.shadow;if(O.map&&(r.spotLightMap[N]=O.map,N++,ee.updateMatrices(O),O.castShadow&&g++),r.spotLightMatrix[x]=ee.matrix,O.castShadow){const Z=i.get(O);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,r.spotShadow[x]=Z,r.spotShadowMap[x]=K,C++}x++}else if(O.isRectAreaLight){const X=t.get(O);X.color.copy(P).multiplyScalar(F),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),r.rectArea[E]=X,E++}else if(O.isPointLight){const X=t.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*L),X.distance=O.distance,X.decay=O.decay,O.castShadow){const ee=O.shadow,Z=i.get(O);Z.shadowBias=ee.bias,Z.shadowNormalBias=ee.normalBias,Z.shadowRadius=ee.radius,Z.shadowMapSize=ee.mapSize,Z.shadowCameraNear=ee.camera.near,Z.shadowCameraFar=ee.camera.far,r.pointShadow[d]=Z,r.pointShadowMap[d]=K,r.pointShadowMatrix[d]=O.shadow.matrix,w++}r.point[d]=X,d++}else if(O.isHemisphereLight){const X=t.get(O);X.skyColor.copy(O.color).multiplyScalar(F*L),X.groundColor.copy(O.groundColor).multiplyScalar(F*L),r.hemi[S]=X,S++}}E>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=u,r.ambient[1]=m,r.ambient[2]=_;const R=r.hash;(R.directionalLength!==f||R.pointLength!==d||R.spotLength!==x||R.rectAreaLength!==E||R.hemiLength!==S||R.numDirectionalShadows!==y||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==N)&&(r.directional.length=f,r.spot.length=x,r.rectArea.length=E,r.point.length=d,r.hemi.length=S,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=C+N-g,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=g,R.directionalLength=f,R.pointLength=d,R.spotLength=x,R.rectAreaLength=E,R.hemiLength=S,R.numDirectionalShadows=y,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=N,r.version=Sd++)}function l(c,p){let u=0,m=0,_=0,f=0,d=0;const x=p.matrixWorldInverse;for(let E=0,S=c.length;E<S;E++){const y=c[E];if(y.isDirectionalLight){const w=r.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(x),u++}else if(y.isSpotLight){const w=r.spot[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(x),_++}else if(y.isRectAreaLight){const w=r.rectArea[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),s.identity(),o.copy(y.matrixWorld),o.premultiply(x),s.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),f++}else if(y.isPointLight){const w=r.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(x),m++}else if(y.isHemisphereLight){const w=r.hemi[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(x),d++}}}return{setup:h,setupView:l,state:r}}function es(a,e){const t=new wd(a,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(c){i.push(c)}function s(c){r.push(c)}function h(c){t.setup(i,c)}function l(c){t.setupView(i,c)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:h,setupLightsView:l,pushLight:o,pushShadow:s}}function Td(a,e){let t=new WeakMap;function i(n,o=0){const s=t.get(n);let h;return s===void 0?(h=new es(a,e),t.set(n,[h])):o>=s.length?(h=new es(a,e),s.push(h)):h=s[o],h}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ed extends or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fo,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ld extends or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new I,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ad=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cd=`uniform sampler2D shadow_pass;
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
}`;function Rd(a,e,t){let i=new On;const r=new Se,n=new Se,o=new ke,s=new Ed({depthPacking:ko}),h=new Ld,l={},c=t.maxTextureSize,p={0:bt,1:pi,2:Ur},u=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Ad,fragmentShader:Cd}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new It(_,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hs,this.render=function(y,w,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||y.length===0)return;const N=a.getRenderTarget(),g=a.getActiveCubeFace(),L=a.getActiveMipmapLevel(),R=a.state;R.setBlending(Jt),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let j=0,J=y.length;j<J;j++){const O=y[j],P=O.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const F=P.getFrameExtents();if(r.multiply(F),n.copy(P.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(n.x=Math.floor(c/F.x),r.x=n.x*F.x,P.mapSize.x=n.x),r.y>c&&(n.y=Math.floor(c/F.y),r.y=n.y*F.y,P.mapSize.y=n.y)),P.map===null){const K=this.type!==Qi?{minFilter:st,magFilter:st}:{};P.map=new $t(r.x,r.y,K),P.map.texture.name=O.name+".shadowMap",P.camera.updateProjectionMatrix()}a.setRenderTarget(P.map),a.clear();const Y=P.getViewportCount();for(let K=0;K<Y;K++){const X=P.getViewport(K);o.set(n.x*X.x,n.y*X.y,n.x*X.z,n.y*X.w),R.viewport(o),P.updateMatrices(O,K),i=P.getFrustum(),S(w,C,P.camera,O,this.type)}P.isPointLightShadow!==!0&&this.type===Qi&&x(P,C),P.needsUpdate=!1}d.needsUpdate=!1,a.setRenderTarget(N,g,L)};function x(y,w){const C=e.update(f);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new $t(r.x,r.y)),u.uniforms.shadow_pass.value=y.map.texture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,a.setRenderTarget(y.mapPass),a.clear(),a.renderBufferDirect(w,null,C,u,f,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,a.setRenderTarget(y.map),a.clear(),a.renderBufferDirect(w,null,C,m,f,null)}function E(y,w,C,N,g,L){let R=null;const j=C.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(j!==void 0)R=j;else if(R=C.isPointLight===!0?h:s,a.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const J=R.uuid,O=w.uuid;let P=l[J];P===void 0&&(P={},l[J]=P);let F=P[O];F===void 0&&(F=R.clone(),P[O]=F),R=F}return R.visible=w.visible,R.wireframe=w.wireframe,L===Qi?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:p[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,C.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(C.matrixWorld),R.nearDistance=N,R.farDistance=g),R}function S(y,w,C,N,g){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&g===Qi)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,y.matrixWorld);const R=e.update(y),j=y.material;if(Array.isArray(j)){const J=R.groups;for(let O=0,P=J.length;O<P;O++){const F=J[O],Y=j[F.materialIndex];if(Y&&Y.visible){const K=E(y,Y,N,C.near,C.far,g);a.renderBufferDirect(C,null,R,K,y,F)}}}else if(j.visible){const J=E(y,j,N,C.near,C.far,g);a.renderBufferDirect(C,null,R,J,y,null)}}const L=y.children;for(let R=0,j=L.length;R<j;R++)S(L[R],w,C,N,g)}}function Pd(a,e,t){const i=t.isWebGL2;function r(){let A=!1;const V=new ke;let $=null;const oe=new ke(0,0,0,0);return{setMask:function(ge){$!==ge&&!A&&(a.colorMask(ge,ge,ge,ge),$=ge)},setLocked:function(ge){A=ge},setClear:function(ge,De,Je,Qe,Qt){Qt===!0&&(ge*=Qe,De*=Qe,Je*=Qe),V.set(ge,De,Je,Qe),oe.equals(V)===!1&&(a.clearColor(ge,De,Je,Qe),oe.copy(V))},reset:function(){A=!1,$=null,oe.set(-1,0,0,0)}}}function n(){let A=!1,V=null,$=null,oe=null;return{setTest:function(ge){ge?Le(2929):de(2929)},setMask:function(ge){V!==ge&&!A&&(a.depthMask(ge),V=ge)},setFunc:function(ge){if($!==ge){switch(ge){case oo:a.depthFunc(512);break;case lo:a.depthFunc(519);break;case co:a.depthFunc(513);break;case En:a.depthFunc(515);break;case ho:a.depthFunc(514);break;case uo:a.depthFunc(518);break;case po:a.depthFunc(516);break;case fo:a.depthFunc(517);break;default:a.depthFunc(515)}$=ge}},setLocked:function(ge){A=ge},setClear:function(ge){oe!==ge&&(a.clearDepth(ge),oe=ge)},reset:function(){A=!1,V=null,$=null,oe=null}}}function o(){let A=!1,V=null,$=null,oe=null,ge=null,De=null,Je=null,Qe=null,Qt=null;return{setTest:function(Fe){A||(Fe?Le(2960):de(2960))},setMask:function(Fe){V!==Fe&&!A&&(a.stencilMask(Fe),V=Fe)},setFunc:function(Fe,Ut,Mt){($!==Fe||oe!==Ut||ge!==Mt)&&(a.stencilFunc(Fe,Ut,Mt),$=Fe,oe=Ut,ge=Mt)},setOp:function(Fe,Ut,Mt){(De!==Fe||Je!==Ut||Qe!==Mt)&&(a.stencilOp(Fe,Ut,Mt),De=Fe,Je=Ut,Qe=Mt)},setLocked:function(Fe){A=Fe},setClear:function(Fe){Qt!==Fe&&(a.clearStencil(Fe),Qt=Fe)},reset:function(){A=!1,V=null,$=null,oe=null,ge=null,De=null,Je=null,Qe=null,Qt=null}}}const s=new r,h=new n,l=new o,c=new WeakMap,p=new WeakMap;let u={},m={},_=new WeakMap,f=[],d=null,x=!1,E=null,S=null,y=null,w=null,C=null,N=null,g=null,L=!1,R=null,j=null,J=null,O=null,P=null;const F=a.getParameter(35661);let Y=!1,K=0;const X=a.getParameter(7938);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),Y=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Y=K>=2);let ee=null,Z={};const H=a.getParameter(3088),k=a.getParameter(2978),Q=new ke().fromArray(H),te=new ke().fromArray(k);function ce(A,V,$){const oe=new Uint8Array(4),ge=a.createTexture();a.bindTexture(A,ge),a.texParameteri(A,10241,9728),a.texParameteri(A,10240,9728);for(let De=0;De<$;De++)a.texImage2D(V+De,0,6408,1,1,0,6408,5121,oe);return ge}const G={};G[3553]=ce(3553,3553,1),G[34067]=ce(34067,34069,6),s.setClear(0,0,0,1),h.setClear(1),l.setClear(0),Le(2929),h.setFunc(En),je(!1),it(jn),Le(2884),Ze(Jt);function Le(A){u[A]!==!0&&(a.enable(A),u[A]=!0)}function de(A){u[A]!==!1&&(a.disable(A),u[A]=!1)}function _e(A,V){return m[A]!==V?(a.bindFramebuffer(A,V),m[A]=V,i&&(A===36009&&(m[36160]=V),A===36160&&(m[36009]=V)),!0):!1}function he(A,V){let $=f,oe=!1;if(A)if($=_.get(V),$===void 0&&($=[],_.set(V,$)),A.isWebGLMultipleRenderTargets){const ge=A.texture;if($.length!==ge.length||$[0]!==36064){for(let De=0,Je=ge.length;De<Je;De++)$[De]=36064+De;$.length=ge.length,oe=!0}}else $[0]!==36064&&($[0]=36064,oe=!0);else $[0]!==1029&&($[0]=1029,oe=!0);oe&&(t.isWebGL2?a.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ne(A){return d!==A?(a.useProgram(A),d=A,!0):!1}const be={[Ni]:32774,[Ks]:32778,[Js]:32779};if(i)be[Zn]=32775,be[Kn]=32776;else{const A=e.get("EXT_blend_minmax");A!==null&&(be[Zn]=A.MIN_EXT,be[Kn]=A.MAX_EXT)}const ve={[$s]:0,[Qs]:1,[eo]:768,[us]:770,[so]:776,[no]:774,[io]:772,[to]:769,[ds]:771,[ao]:775,[ro]:773};function Ze(A,V,$,oe,ge,De,Je,Qe){if(A===Jt){x===!0&&(de(3042),x=!1);return}if(x===!1&&(Le(3042),x=!0),A!==Zs){if(A!==E||Qe!==L){if((S!==Ni||C!==Ni)&&(a.blendEquation(32774),S=Ni,C=Ni),Qe)switch(A){case Oi:a.blendFuncSeparate(1,771,1,771);break;case qn:a.blendFunc(1,1);break;case Xn:a.blendFuncSeparate(0,769,0,1);break;case Yn:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Oi:a.blendFuncSeparate(770,771,1,771);break;case qn:a.blendFunc(770,1);break;case Xn:a.blendFuncSeparate(0,769,0,1);break;case Yn:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}y=null,w=null,N=null,g=null,E=A,L=Qe}return}ge=ge||V,De=De||$,Je=Je||oe,(V!==S||ge!==C)&&(a.blendEquationSeparate(be[V],be[ge]),S=V,C=ge),($!==y||oe!==w||De!==N||Je!==g)&&(a.blendFuncSeparate(ve[$],ve[oe],ve[De],ve[Je]),y=$,w=oe,N=De,g=Je),E=A,L=!1}function We(A,V){A.side===Ur?de(2884):Le(2884);let $=A.side===bt;V&&($=!$),je($),A.blending===Oi&&A.transparent===!1?Ze(Jt):Ze(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),h.setFunc(A.depthFunc),h.setTest(A.depthTest),h.setMask(A.depthWrite),s.setMask(A.colorWrite);const oe=A.stencilWrite;l.setTest(oe),oe&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Ie(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Le(32926):de(32926)}function je(A){R!==A&&(A?a.frontFace(2304):a.frontFace(2305),R=A)}function it(A){A!==qs?(Le(2884),A!==j&&(A===jn?a.cullFace(1029):A===Xs?a.cullFace(1028):a.cullFace(1032))):de(2884),j=A}function Be(A){A!==J&&(Y&&a.lineWidth(A),J=A)}function Ie(A,V,$){A?(Le(32823),(O!==V||P!==$)&&(a.polygonOffset(V,$),O=V,P=$)):de(32823)}function xt(A){A?Le(3089):de(3089)}function ot(A){A===void 0&&(A=33984+F-1),ee!==A&&(a.activeTexture(A),ee=A)}function b(A,V,$){$===void 0&&(ee===null?$=33984+F-1:$=ee);let oe=Z[$];oe===void 0&&(oe={type:void 0,texture:void 0},Z[$]=oe),(oe.type!==A||oe.texture!==V)&&(ee!==$&&(a.activeTexture($),ee=$),a.bindTexture(A,V||G[A]),oe.type=A,oe.texture=V)}function v(){const A=Z[ee];A!==void 0&&A.type!==void 0&&(a.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function B(){try{a.compressedTexImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{a.compressedTexImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{a.texSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{a.texSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xe(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function T(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function D(){try{a.texStorage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function se(){try{a.texStorage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ue(){try{a.texImage2D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function le(){try{a.texImage3D.apply(a,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(A){Q.equals(A)===!1&&(a.scissor(A.x,A.y,A.z,A.w),Q.copy(A))}function me(A){te.equals(A)===!1&&(a.viewport(A.x,A.y,A.z,A.w),te.copy(A))}function ye(A,V){let $=p.get(V);$===void 0&&($=new WeakMap,p.set(V,$));let oe=$.get(A);oe===void 0&&(oe=a.getUniformBlockIndex(V,A.name),$.set(A,oe))}function Ae(A,V){const $=p.get(V).get(A);c.get(V)!==$&&(a.uniformBlockBinding(V,$,A.__bindingPointIndex),c.set(V,$))}function Ke(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),i===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),u={},ee=null,Z={},m={},_=new WeakMap,f=[],d=null,x=!1,E=null,S=null,y=null,w=null,C=null,N=null,g=null,L=!1,R=null,j=null,J=null,O=null,P=null,Q.set(0,0,a.canvas.width,a.canvas.height),te.set(0,0,a.canvas.width,a.canvas.height),s.reset(),h.reset(),l.reset()}return{buffers:{color:s,depth:h,stencil:l},enable:Le,disable:de,bindFramebuffer:_e,drawBuffers:he,useProgram:Ne,setBlending:Ze,setMaterial:We,setFlipSided:je,setCullFace:it,setLineWidth:Be,setPolygonOffset:Ie,setScissorTest:xt,activeTexture:ot,bindTexture:b,unbindTexture:v,compressedTexImage2D:B,compressedTexImage3D:ie,texImage2D:ue,texImage3D:le,updateUBOMapping:ye,uniformBlockBinding:Ae,texStorage2D:D,texStorage3D:se,texSubImage2D:re,texSubImage3D:ae,compressedTexSubImage2D:xe,compressedTexSubImage3D:T,scissor:pe,viewport:me,reset:Ke}}function Dd(a,e,t,i,r,n,o){const s=r.isWebGL2,h=r.maxTextures,l=r.maxCubemapSize,c=r.maxTextureSize,p=r.maxSamples,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let f;const d=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(b,v){return x?new OffscreenCanvas(b,v):Ir("canvas")}function S(b,v,B,ie){let re=1;if((b.width>ie||b.height>ie)&&(re=ie/Math.max(b.width,b.height)),re<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ae=v?Dn:Math.floor,xe=ae(re*b.width),T=ae(re*b.height);f===void 0&&(f=E(xe,T));const D=B?E(xe,T):f;return D.width=xe,D.height=T,D.getContext("2d").drawImage(b,0,0,xe,T),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+xe+"x"+T+")."),D}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return Sa(b.width)&&Sa(b.height)}function w(b){return s?!1:b.wrapS!==Lt||b.wrapT!==Lt||b.minFilter!==st&&b.minFilter!==St}function C(b,v){return b.generateMipmaps&&v&&b.minFilter!==st&&b.minFilter!==St}function N(b){a.generateMipmap(b)}function g(b,v,B,ie,re=!1){if(s===!1)return v;if(b!==null){if(a[b]!==void 0)return a[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ae=v;return v===6403&&(B===5126&&(ae=33326),B===5131&&(ae=33325),B===5121&&(ae=33321)),v===33319&&(B===5126&&(ae=33328),B===5131&&(ae=33327),B===5121&&(ae=33323)),v===6408&&(B===5126&&(ae=34836),B===5131&&(ae=34842),B===5121&&(ae=ie===ze&&re===!1?35907:32856),B===32819&&(ae=32854),B===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function L(b,v,B){return C(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==st&&b.minFilter!==St?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function R(b){return b===st||b===Jn||b===Wr?9728:9729}function j(b){const v=b.target;v.removeEventListener("dispose",j),O(v),v.isVideoTexture&&_.delete(v)}function J(b){const v=b.target;v.removeEventListener("dispose",J),F(v)}function O(b){const v=i.get(b);if(v.__webglInit===void 0)return;const B=b.source,ie=d.get(B);if(ie){const re=ie[v.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(b),Object.keys(ie).length===0&&d.delete(B)}i.remove(b)}function P(b){const v=i.get(b);a.deleteTexture(v.__webglTexture);const B=b.source,ie=d.get(B);delete ie[v.__cacheKey],o.memory.textures--}function F(b){const v=b.texture,B=i.get(b),ie=i.get(v);if(ie.__webglTexture!==void 0&&(a.deleteTexture(ie.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)a.deleteFramebuffer(B.__webglFramebuffer[re]),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer[re]);else{if(a.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&a.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&a.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let re=0;re<B.__webglColorRenderbuffer.length;re++)B.__webglColorRenderbuffer[re]&&a.deleteRenderbuffer(B.__webglColorRenderbuffer[re]);B.__webglDepthRenderbuffer&&a.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let re=0,ae=v.length;re<ae;re++){const xe=i.get(v[re]);xe.__webglTexture&&(a.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(v[re])}i.remove(v),i.remove(b)}let Y=0;function K(){Y=0}function X(){const b=Y;return b>=h&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+h),Y+=1,b}function ee(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.encoding),v.join()}function Z(b,v){const B=i.get(b);if(b.isVideoTexture&&xt(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ie=b.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(B,b,v);return}}t.bindTexture(3553,B.__webglTexture,33984+v)}function H(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){de(B,b,v);return}t.bindTexture(35866,B.__webglTexture,33984+v)}function k(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){de(B,b,v);return}t.bindTexture(32879,B.__webglTexture,33984+v)}function Q(b,v){const B=i.get(b);if(b.version>0&&B.__version!==b.version){_e(B,b,v);return}t.bindTexture(34067,B.__webglTexture,33984+v)}const te={[Cn]:10497,[Lt]:33071,[Rn]:33648},ce={[st]:9728,[Jn]:9984,[Wr]:9986,[St]:9729,[So]:9985,[tr]:9987};function G(b,v,B){if(B?(a.texParameteri(b,10242,te[v.wrapS]),a.texParameteri(b,10243,te[v.wrapT]),(b===32879||b===35866)&&a.texParameteri(b,32882,te[v.wrapR]),a.texParameteri(b,10240,ce[v.magFilter]),a.texParameteri(b,10241,ce[v.minFilter])):(a.texParameteri(b,10242,33071),a.texParameteri(b,10243,33071),(b===32879||b===35866)&&a.texParameteri(b,32882,33071),(v.wrapS!==Lt||v.wrapT!==Lt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(b,10240,R(v.magFilter)),a.texParameteri(b,10241,R(v.minFilter)),v.minFilter!==st&&v.minFilter!==St&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===st||v.minFilter!==Wr&&v.minFilter!==tr||v.type===hi&&e.has("OES_texture_float_linear")===!1||s===!1&&v.type===ir&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(a.texParameterf(b,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function Le(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",j));const ie=v.source;let re=d.get(ie);re===void 0&&(re={},d.set(ie,re));const ae=ee(v);if(ae!==b.__cacheKey){re[ae]===void 0&&(re[ae]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,B=!0),re[ae].usedTimes++;const xe=re[b.__cacheKey];xe!==void 0&&(re[b.__cacheKey].usedTimes--,xe.usedTimes===0&&P(v)),b.__cacheKey=ae,b.__webglTexture=re[ae].texture}return B}function de(b,v,B){let ie=3553;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=35866),v.isData3DTexture&&(ie=32879);const re=Le(b,v),ae=v.source;t.bindTexture(ie,b.__webglTexture,33984+B);const xe=i.get(ae);if(ae.version!==xe.__version||re===!0){t.activeTexture(33984+B),a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const T=w(v)&&y(v.image)===!1;let D=S(v.image,T,!1,c);D=ot(v,D);const se=y(D)||s,ue=n.convert(v.format,v.encoding);let le=n.convert(v.type),pe=g(v.internalFormat,ue,le,v.encoding,v.isVideoTexture);G(ie,v,se);let me;const ye=v.mipmaps,Ae=s&&v.isVideoTexture!==!0,Ke=xe.__version===void 0||re===!0,A=L(v,D,se);if(v.isDepthTexture)pe=6402,s?v.type===hi?pe=36012:v.type===ci?pe=33190:v.type===zi?pe=35056:pe=33189:v.type===hi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===ui&&pe===6402&&v.type!==ms&&v.type!==ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=ci,le=n.convert(v.type)),v.format===Bi&&pe===6402&&(pe=34041,v.type!==zi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=zi,le=n.convert(v.type))),Ke&&(Ae?t.texStorage2D(3553,1,pe,D.width,D.height):t.texImage2D(3553,0,pe,D.width,D.height,0,ue,le,null));else if(v.isDataTexture)if(ye.length>0&&se){Ae&&Ke&&t.texStorage2D(3553,A,pe,ye[0].width,ye[0].height);for(let V=0,$=ye.length;V<$;V++)me=ye[V],Ae?t.texSubImage2D(3553,V,0,0,me.width,me.height,ue,le,me.data):t.texImage2D(3553,V,pe,me.width,me.height,0,ue,le,me.data);v.generateMipmaps=!1}else Ae?(Ke&&t.texStorage2D(3553,A,pe,D.width,D.height),t.texSubImage2D(3553,0,0,0,D.width,D.height,ue,le,D.data)):t.texImage2D(3553,0,pe,D.width,D.height,0,ue,le,D.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ae&&Ke&&t.texStorage3D(35866,A,pe,ye[0].width,ye[0].height,D.depth);for(let V=0,$=ye.length;V<$;V++)me=ye[V],v.format!==At?ue!==null?Ae?t.compressedTexSubImage3D(35866,V,0,0,0,me.width,me.height,D.depth,ue,me.data,0,0):t.compressedTexImage3D(35866,V,pe,me.width,me.height,D.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?t.texSubImage3D(35866,V,0,0,0,me.width,me.height,D.depth,ue,le,me.data):t.texImage3D(35866,V,pe,me.width,me.height,D.depth,0,ue,le,me.data)}else{Ae&&Ke&&t.texStorage2D(3553,A,pe,ye[0].width,ye[0].height);for(let V=0,$=ye.length;V<$;V++)me=ye[V],v.format!==At?ue!==null?Ae?t.compressedTexSubImage2D(3553,V,0,0,me.width,me.height,ue,me.data):t.compressedTexImage2D(3553,V,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?t.texSubImage2D(3553,V,0,0,me.width,me.height,ue,le,me.data):t.texImage2D(3553,V,pe,me.width,me.height,0,ue,le,me.data)}else if(v.isDataArrayTexture)Ae?(Ke&&t.texStorage3D(35866,A,pe,D.width,D.height,D.depth),t.texSubImage3D(35866,0,0,0,0,D.width,D.height,D.depth,ue,le,D.data)):t.texImage3D(35866,0,pe,D.width,D.height,D.depth,0,ue,le,D.data);else if(v.isData3DTexture)Ae?(Ke&&t.texStorage3D(32879,A,pe,D.width,D.height,D.depth),t.texSubImage3D(32879,0,0,0,0,D.width,D.height,D.depth,ue,le,D.data)):t.texImage3D(32879,0,pe,D.width,D.height,D.depth,0,ue,le,D.data);else if(v.isFramebufferTexture){if(Ke)if(Ae)t.texStorage2D(3553,A,pe,D.width,D.height);else{let V=D.width,$=D.height;for(let oe=0;oe<A;oe++)t.texImage2D(3553,oe,pe,V,$,0,ue,le,null),V>>=1,$>>=1}}else if(ye.length>0&&se){Ae&&Ke&&t.texStorage2D(3553,A,pe,ye[0].width,ye[0].height);for(let V=0,$=ye.length;V<$;V++)me=ye[V],Ae?t.texSubImage2D(3553,V,0,0,ue,le,me):t.texImage2D(3553,V,pe,ue,le,me);v.generateMipmaps=!1}else Ae?(Ke&&t.texStorage2D(3553,A,pe,D.width,D.height),t.texSubImage2D(3553,0,0,0,ue,le,D)):t.texImage2D(3553,0,pe,ue,le,D);C(v,se)&&N(ie),xe.__version=ae.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function _e(b,v,B){if(v.image.length!==6)return;const ie=Le(b,v),re=v.source;t.bindTexture(34067,b.__webglTexture,33984+B);const ae=i.get(re);if(re.version!==ae.__version||ie===!0){t.activeTexture(33984+B),a.pixelStorei(37440,v.flipY),a.pixelStorei(37441,v.premultiplyAlpha),a.pixelStorei(3317,v.unpackAlignment),a.pixelStorei(37443,0);const xe=v.isCompressedTexture||v.image[0].isCompressedTexture,T=v.image[0]&&v.image[0].isDataTexture,D=[];for(let V=0;V<6;V++)!xe&&!T?D[V]=S(v.image[V],!1,!0,l):D[V]=T?v.image[V].image:v.image[V],D[V]=ot(v,D[V]);const se=D[0],ue=y(se)||s,le=n.convert(v.format,v.encoding),pe=n.convert(v.type),me=g(v.internalFormat,le,pe,v.encoding),ye=s&&v.isVideoTexture!==!0,Ae=ae.__version===void 0||ie===!0;let Ke=L(v,se,ue);G(34067,v,ue);let A;if(xe){ye&&Ae&&t.texStorage2D(34067,Ke,me,se.width,se.height);for(let V=0;V<6;V++){A=D[V].mipmaps;for(let $=0;$<A.length;$++){const oe=A[$];v.format!==At?le!==null?ye?t.compressedTexSubImage2D(34069+V,$,0,0,oe.width,oe.height,le,oe.data):t.compressedTexImage2D(34069+V,$,me,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?t.texSubImage2D(34069+V,$,0,0,oe.width,oe.height,le,pe,oe.data):t.texImage2D(34069+V,$,me,oe.width,oe.height,0,le,pe,oe.data)}}}else{A=v.mipmaps,ye&&Ae&&(A.length>0&&Ke++,t.texStorage2D(34067,Ke,me,D[0].width,D[0].height));for(let V=0;V<6;V++)if(T){ye?t.texSubImage2D(34069+V,0,0,0,D[V].width,D[V].height,le,pe,D[V].data):t.texImage2D(34069+V,0,me,D[V].width,D[V].height,0,le,pe,D[V].data);for(let $=0;$<A.length;$++){const oe=A[$].image[V].image;ye?t.texSubImage2D(34069+V,$+1,0,0,oe.width,oe.height,le,pe,oe.data):t.texImage2D(34069+V,$+1,me,oe.width,oe.height,0,le,pe,oe.data)}}else{ye?t.texSubImage2D(34069+V,0,0,0,le,pe,D[V]):t.texImage2D(34069+V,0,me,le,pe,D[V]);for(let $=0;$<A.length;$++){const oe=A[$];ye?t.texSubImage2D(34069+V,$+1,0,0,le,pe,oe.image[V]):t.texImage2D(34069+V,$+1,me,le,pe,oe.image[V])}}}C(v,ue)&&N(34067),ae.__version=re.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function he(b,v,B,ie,re){const ae=n.convert(B.format,B.encoding),xe=n.convert(B.type),T=g(B.internalFormat,ae,xe,B.encoding);i.get(v).__hasExternalTextures||(re===32879||re===35866?t.texImage3D(re,0,T,v.width,v.height,v.depth,0,ae,xe,null):t.texImage2D(re,0,T,v.width,v.height,0,ae,xe,null)),t.bindFramebuffer(36160,b),Ie(v)?u.framebufferTexture2DMultisampleEXT(36160,ie,re,i.get(B).__webglTexture,0,Be(v)):(re===3553||re>=34069&&re<=34074)&&a.framebufferTexture2D(36160,ie,re,i.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ne(b,v,B){if(a.bindRenderbuffer(36161,b),v.depthBuffer&&!v.stencilBuffer){let ie=33189;if(B||Ie(v)){const re=v.depthTexture;re&&re.isDepthTexture&&(re.type===hi?ie=36012:re.type===ci&&(ie=33190));const ae=Be(v);Ie(v)?u.renderbufferStorageMultisampleEXT(36161,ae,ie,v.width,v.height):a.renderbufferStorageMultisample(36161,ae,ie,v.width,v.height)}else a.renderbufferStorage(36161,ie,v.width,v.height);a.framebufferRenderbuffer(36160,36096,36161,b)}else if(v.depthBuffer&&v.stencilBuffer){const ie=Be(v);B&&Ie(v)===!1?a.renderbufferStorageMultisample(36161,ie,35056,v.width,v.height):Ie(v)?u.renderbufferStorageMultisampleEXT(36161,ie,35056,v.width,v.height):a.renderbufferStorage(36161,34041,v.width,v.height),a.framebufferRenderbuffer(36160,33306,36161,b)}else{const ie=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let re=0;re<ie.length;re++){const ae=ie[re],xe=n.convert(ae.format,ae.encoding),T=n.convert(ae.type),D=g(ae.internalFormat,xe,T,ae.encoding),se=Be(v);B&&Ie(v)===!1?a.renderbufferStorageMultisample(36161,se,D,v.width,v.height):Ie(v)?u.renderbufferStorageMultisampleEXT(36161,se,D,v.width,v.height):a.renderbufferStorage(36161,D,v.width,v.height)}}a.bindRenderbuffer(36161,null)}function be(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);const B=i.get(v.depthTexture).__webglTexture,ie=Be(v);if(v.depthTexture.format===ui)Ie(v)?u.framebufferTexture2DMultisampleEXT(36160,36096,3553,B,0,ie):a.framebufferTexture2D(36160,36096,3553,B,0);else if(v.depthTexture.format===Bi)Ie(v)?u.framebufferTexture2DMultisampleEXT(36160,33306,3553,B,0,ie):a.framebufferTexture2D(36160,33306,3553,B,0);else throw new Error("Unknown depthTexture format")}function ve(b){const v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]=a.createRenderbuffer(),Ne(v.__webglDepthbuffer[ie],b,!1)}else t.bindFramebuffer(36160,v.__webglFramebuffer),v.__webglDepthbuffer=a.createRenderbuffer(),Ne(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function Ze(b,v,B){const ie=i.get(b);v!==void 0&&he(ie.__webglFramebuffer,b,b.texture,36064,3553),B!==void 0&&ve(b)}function We(b){const v=b.texture,B=i.get(b),ie=i.get(v);b.addEventListener("dispose",J),b.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=v.version,o.memory.textures++);const re=b.isWebGLCubeRenderTarget===!0,ae=b.isWebGLMultipleRenderTargets===!0,xe=y(b)||s;if(re){B.__webglFramebuffer=[];for(let T=0;T<6;T++)B.__webglFramebuffer[T]=a.createFramebuffer()}else{if(B.__webglFramebuffer=a.createFramebuffer(),ae)if(r.drawBuffers){const T=b.texture;for(let D=0,se=T.length;D<se;D++){const ue=i.get(T[D]);ue.__webglTexture===void 0&&(ue.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&b.samples>0&&Ie(b)===!1){const T=ae?v:[v];B.__webglMultisampledFramebuffer=a.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let D=0;D<T.length;D++){const se=T[D];B.__webglColorRenderbuffer[D]=a.createRenderbuffer(),a.bindRenderbuffer(36161,B.__webglColorRenderbuffer[D]);const ue=n.convert(se.format,se.encoding),le=n.convert(se.type),pe=g(se.internalFormat,ue,le,se.encoding,b.isXRRenderTarget===!0),me=Be(b);a.renderbufferStorageMultisample(36161,me,pe,b.width,b.height),a.framebufferRenderbuffer(36160,36064+D,36161,B.__webglColorRenderbuffer[D])}a.bindRenderbuffer(36161,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=a.createRenderbuffer(),Ne(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(re){t.bindTexture(34067,ie.__webglTexture),G(34067,v,xe);for(let T=0;T<6;T++)he(B.__webglFramebuffer[T],b,v,36064,34069+T);C(v,xe)&&N(34067),t.unbindTexture()}else if(ae){const T=b.texture;for(let D=0,se=T.length;D<se;D++){const ue=T[D],le=i.get(ue);t.bindTexture(3553,le.__webglTexture),G(3553,ue,xe),he(B.__webglFramebuffer,b,ue,36064+D,3553),C(ue,xe)&&N(3553)}t.unbindTexture()}else{let T=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(s?T=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(T,ie.__webglTexture),G(T,v,xe),he(B.__webglFramebuffer,b,v,36064,T),C(v,xe)&&N(T),t.unbindTexture()}b.depthBuffer&&ve(b)}function je(b){const v=y(b)||s,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ie=0,re=B.length;ie<re;ie++){const ae=B[ie];if(C(ae,v)){const xe=b.isWebGLCubeRenderTarget?34067:3553,T=i.get(ae).__webglTexture;t.bindTexture(xe,T),N(xe),t.unbindTexture()}}}function it(b){if(s&&b.samples>0&&Ie(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,ie=b.height;let re=16384;const ae=[],xe=b.stencilBuffer?33306:36096,T=i.get(b),D=b.isWebGLMultipleRenderTargets===!0;if(D)for(let se=0;se<v.length;se++)t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+se,36161,null),t.bindFramebuffer(36160,T.__webglFramebuffer),a.framebufferTexture2D(36009,36064+se,3553,null,0);t.bindFramebuffer(36008,T.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,T.__webglFramebuffer);for(let se=0;se<v.length;se++){ae.push(36064+se),b.depthBuffer&&ae.push(xe);const ue=T.__ignoreDepthValues!==void 0?T.__ignoreDepthValues:!1;if(ue===!1&&(b.depthBuffer&&(re|=256),b.stencilBuffer&&(re|=1024)),D&&a.framebufferRenderbuffer(36008,36064,36161,T.__webglColorRenderbuffer[se]),ue===!0&&(a.invalidateFramebuffer(36008,[xe]),a.invalidateFramebuffer(36009,[xe])),D){const le=i.get(v[se]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,le,0)}a.blitFramebuffer(0,0,B,ie,0,0,B,ie,re,9728),m&&a.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),D)for(let se=0;se<v.length;se++){t.bindFramebuffer(36160,T.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+se,36161,T.__webglColorRenderbuffer[se]);const ue=i.get(v[se]).__webglTexture;t.bindFramebuffer(36160,T.__webglFramebuffer),a.framebufferTexture2D(36009,36064+se,3553,ue,0)}t.bindFramebuffer(36009,T.__webglMultisampledFramebuffer)}}function Be(b){return Math.min(p,b.samples)}function Ie(b){const v=i.get(b);return s&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function xt(b){const v=o.render.frame;_.get(b)!==v&&(_.set(b,v),b.update())}function ot(b,v){const B=b.encoding,ie=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Pn||B!==mi&&(B===ze?s===!1?e.has("EXT_sRGB")===!0&&ie===At?(b.format=Pn,b.minFilter=St,b.generateMipmaps=!1):v=xs.sRGBToLinear(v):(ie!==At||re!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),v}this.allocateTextureUnit=X,this.resetTextureUnits=K,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Ze,this.setupRenderTarget=We,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ie}function Id(a,e,t){const i=t.isWebGL2;function r(n,o=null){let s;if(n===fi)return 5121;if(n===Eo)return 32819;if(n===Lo)return 32820;if(n===bo)return 5120;if(n===wo)return 5122;if(n===ms)return 5123;if(n===To)return 5124;if(n===ci)return 5125;if(n===hi)return 5126;if(n===ir)return i?5131:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(n===Ao)return 6406;if(n===At)return 6408;if(n===Ro)return 6409;if(n===Po)return 6410;if(n===ui)return 6402;if(n===Bi)return 34041;if(n===Co)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===Pn)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(n===Do)return 6403;if(n===Io)return 36244;if(n===No)return 33319;if(n===Uo)return 33320;if(n===Oo)return 36249;if(n===jr||n===qr||n===Xr||n===Yr)if(o===ze)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$n||n===Qn||n===ea||n===ta)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$n)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qn)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ea)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ta)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zo)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===ia||n===ra)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ia)return o===ze?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ra)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===aa||n===sa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===pa||n===fa||n===ma||n===ga||n===_a)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===na)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===aa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===la)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ca)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ha)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ua)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===da)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===pa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ma)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ga)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_a)return o===ze?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===va)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===va)return o===ze?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return n===zi?i?34042:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):a[n]!==void 0?a[n]:null}return{convert:r}}class Nd extends mt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cr extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ud={type:"move"};class Sn{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const s=this._targetRay,h=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const f of e.hand.values()){const d=t.getJointPose(f,i),x=this._getHandJoint(l,f);d!==null&&(x.matrix.fromArray(d.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=d.radius),x.visible=d!==null}const c=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=c.position.distanceTo(p.position),m=.02,_=.005;l.inputState.pinching&&u>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(h.matrix.fromArray(n.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),n.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(n.linearVelocity)):h.hasLinearVelocity=!1,n.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(n.angularVelocity)):h.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Ud)))}return s!==null&&(s.visible=r!==null),h!==null&&(h.visible=n!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Cr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Od extends _t{constructor(e,t,i,r,n,o,s,h,l,c){if(c=c!==void 0?c:ui,c!==ui&&c!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ui&&(i=ci),i===void 0&&c===Bi&&(i=zi),super(null,r,n,o,s,h,c,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:st,this.minFilter=h!==void 0?h:st,this.flipY=!1,this.generateMipmaps=!1}}class zd extends _i{constructor(e,t){super();const i=this;let r=null,n=1,o=null,s="local-floor",h=null,l=null,c=null,p=null,u=null,m=null;const _=t.getContextAttributes();let f=null,d=null;const x=[],E=[],S=new Set,y=new Map,w=new mt;w.layers.enable(1),w.viewport=new ke;const C=new mt;C.layers.enable(2),C.viewport=new ke;const N=[w,C],g=new Nd;g.layers.enable(1),g.layers.enable(2);let L=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let k=x[H];return k===void 0&&(k=new Sn,x[H]=k),k.getTargetRaySpace()},this.getControllerGrip=function(H){let k=x[H];return k===void 0&&(k=new Sn,x[H]=k),k.getGripSpace()},this.getHand=function(H){let k=x[H];return k===void 0&&(k=new Sn,x[H]=k),k.getHandSpace()};function j(H){const k=E.indexOf(H.inputSource);if(k===-1)return;const Q=x[k];Q!==void 0&&Q.dispatchEvent({type:H.type,data:H.inputSource})}function J(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",O);for(let H=0;H<x.length;H++){const k=E[H];k!==null&&(E[H]=null,x[H].disconnect(k))}L=null,R=null,e.setRenderTarget(f),u=null,p=null,c=null,r=null,d=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){n=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(H){h=H},this.getBaseLayer=function(){return p!==null?p:u},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",J),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:n};u=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:u}),d=new $t(u.framebufferWidth,u.framebufferHeight,{format:At,type:fi,encoding:e.outputEncoding,stencilBuffer:_.stencil})}else{let k=null,Q=null,te=null;_.depth&&(te=_.stencil?35056:33190,k=_.stencil?Bi:ui,Q=_.stencil?zi:ci);const ce={colorFormat:32856,depthFormat:te,scaleFactor:n};c=new XRWebGLBinding(r,t),p=c.createProjectionLayer(ce),r.updateRenderState({layers:[p]}),d=new $t(p.textureWidth,p.textureHeight,{format:At,type:fi,depthTexture:new Od(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:_.stencil,encoding:e.outputEncoding,samples:_.antialias?4:0});const G=e.properties.get(d);G.__ignoreDepthValues=p.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(1),h=null,o=await r.requestReferenceSpace(s),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function O(H){for(let k=0;k<H.removed.length;k++){const Q=H.removed[k],te=E.indexOf(Q);te>=0&&(E[te]=null,x[te].disconnect(Q))}for(let k=0;k<H.added.length;k++){const Q=H.added[k];let te=E.indexOf(Q);if(te===-1){for(let G=0;G<x.length;G++)if(G>=E.length){E.push(Q),te=G;break}else if(E[G]===null){E[G]=Q,te=G;break}if(te===-1)break}const ce=x[te];ce&&ce.connect(Q)}}const P=new I,F=new I;function Y(H,k,Q){P.setFromMatrixPosition(k.matrixWorld),F.setFromMatrixPosition(Q.matrixWorld);const te=P.distanceTo(F),ce=k.projectionMatrix.elements,G=Q.projectionMatrix.elements,Le=ce[14]/(ce[10]-1),de=ce[14]/(ce[10]+1),_e=(ce[9]+1)/ce[5],he=(ce[9]-1)/ce[5],Ne=(ce[8]-1)/ce[0],be=(G[8]+1)/G[0],ve=Le*Ne,Ze=Le*be,We=te/(-Ne+be),je=We*-Ne;k.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(je),H.translateZ(We),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const it=Le+We,Be=de+We,Ie=ve-je,xt=Ze+(te-je),ot=_e*de/Be*it,b=he*de/Be*it;H.projectionMatrix.makePerspective(Ie,xt,ot,b,it,Be)}function K(H,k){k===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(k.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;g.near=C.near=w.near=H.near,g.far=C.far=w.far=H.far,(L!==g.near||R!==g.far)&&(r.updateRenderState({depthNear:g.near,depthFar:g.far}),L=g.near,R=g.far);const k=H.parent,Q=g.cameras;K(g,k);for(let ce=0;ce<Q.length;ce++)K(Q[ce],k);g.matrixWorld.decompose(g.position,g.quaternion,g.scale),H.matrix.copy(g.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const te=H.children;for(let ce=0,G=te.length;ce<G;ce++)te[ce].updateMatrixWorld(!0);Q.length===2?Y(g,w,C):g.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return g},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(H){p!==null&&(p.fixedFoveation=H),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=H)},this.getPlanes=function(){return S};let X=null;function ee(H,k){if(l=k.getViewerPose(h||o),m=k,l!==null){const Q=l.views;u!==null&&(e.setRenderTargetFramebuffer(d,u.framebuffer),e.setRenderTarget(d));let te=!1;Q.length!==g.cameras.length&&(g.cameras.length=0,te=!0);for(let ce=0;ce<Q.length;ce++){const G=Q[ce];let Le=null;if(u!==null)Le=u.getViewport(G);else{const _e=c.getViewSubImage(p,G);Le=_e.viewport,ce===0&&(e.setRenderTargetTextures(d,_e.colorTexture,p.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(d))}let de=N[ce];de===void 0&&(de=new mt,de.layers.enable(ce),de.viewport=new ke,N[ce]=de),de.matrix.fromArray(G.transform.matrix),de.projectionMatrix.fromArray(G.projectionMatrix),de.viewport.set(Le.x,Le.y,Le.width,Le.height),ce===0&&g.matrix.copy(de.matrix),te===!0&&g.cameras.push(de)}}for(let Q=0;Q<x.length;Q++){const te=E[Q],ce=x[Q];te!==null&&ce!==void 0&&ce.update(te,k,h||o)}if(X&&X(H,k),k.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:k.detectedPlanes});let Q=null;for(const te of S)k.detectedPlanes.has(te)||(Q===null&&(Q=[]),Q.push(te));if(Q!==null)for(const te of Q)S.delete(te),y.delete(te),i.dispatchEvent({type:"planeremoved",data:te});for(const te of k.detectedPlanes)if(!S.has(te))S.add(te),y.set(te,k.lastChangedTime),i.dispatchEvent({type:"planeadded",data:te});else{const ce=y.get(te);te.lastChangedTime>ce&&(y.set(te,te.lastChangedTime),i.dispatchEvent({type:"planechanged",data:te}))}}m=null}const Z=new Rs;Z.setAnimationLoop(ee),this.setAnimationLoop=function(H){X=H},this.dispose=function(){}}}function Fd(a,e){function t(f,d){d.color.getRGB(f.fogColor.value,Es(a)),d.isFog?(f.fogNear.value=d.near,f.fogFar.value=d.far):d.isFogExp2&&(f.fogDensity.value=d.density)}function i(f,d,x,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(f,d):d.isMeshToonMaterial?(r(f,d),c(f,d)):d.isMeshPhongMaterial?(r(f,d),l(f,d)):d.isMeshStandardMaterial?(r(f,d),p(f,d),d.isMeshPhysicalMaterial&&u(f,d,S)):d.isMeshMatcapMaterial?(r(f,d),m(f,d)):d.isMeshDepthMaterial?r(f,d):d.isMeshDistanceMaterial?(r(f,d),_(f,d)):d.isMeshNormalMaterial?r(f,d):d.isLineBasicMaterial?(n(f,d),d.isLineDashedMaterial&&o(f,d)):d.isPointsMaterial?s(f,d,x,E):d.isSpriteMaterial?h(f,d):d.isShadowMaterial?(f.color.value.copy(d.color),f.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(f,d){f.opacity.value=d.opacity,d.color&&f.diffuse.value.copy(d.color),d.emissive&&f.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.bumpMap&&(f.bumpMap.value=d.bumpMap,f.bumpScale.value=d.bumpScale,d.side===bt&&(f.bumpScale.value*=-1)),d.displacementMap&&(f.displacementMap.value=d.displacementMap,f.displacementScale.value=d.displacementScale,f.displacementBias.value=d.displacementBias),d.emissiveMap&&(f.emissiveMap.value=d.emissiveMap),d.normalMap&&(f.normalMap.value=d.normalMap,f.normalScale.value.copy(d.normalScale),d.side===bt&&f.normalScale.value.negate()),d.specularMap&&(f.specularMap.value=d.specularMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(f.envMap.value=x,f.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=d.reflectivity,f.ior.value=d.ior,f.refractionRatio.value=d.refractionRatio),d.lightMap){f.lightMap.value=d.lightMap;const y=a.physicallyCorrectLights!==!0?Math.PI:1;f.lightMapIntensity.value=d.lightMapIntensity*y}d.aoMap&&(f.aoMap.value=d.aoMap,f.aoMapIntensity.value=d.aoMapIntensity);let E;d.map?E=d.map:d.specularMap?E=d.specularMap:d.displacementMap?E=d.displacementMap:d.normalMap?E=d.normalMap:d.bumpMap?E=d.bumpMap:d.roughnessMap?E=d.roughnessMap:d.metalnessMap?E=d.metalnessMap:d.alphaMap?E=d.alphaMap:d.emissiveMap?E=d.emissiveMap:d.clearcoatMap?E=d.clearcoatMap:d.clearcoatNormalMap?E=d.clearcoatNormalMap:d.clearcoatRoughnessMap?E=d.clearcoatRoughnessMap:d.iridescenceMap?E=d.iridescenceMap:d.iridescenceThicknessMap?E=d.iridescenceThicknessMap:d.specularIntensityMap?E=d.specularIntensityMap:d.specularColorMap?E=d.specularColorMap:d.transmissionMap?E=d.transmissionMap:d.thicknessMap?E=d.thicknessMap:d.sheenColorMap?E=d.sheenColorMap:d.sheenRoughnessMap&&(E=d.sheenRoughnessMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),f.uvTransform.value.copy(E.matrix));let S;d.aoMap?S=d.aoMap:d.lightMap&&(S=d.lightMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),f.uv2Transform.value.copy(S.matrix))}function n(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity}function o(f,d){f.dashSize.value=d.dashSize,f.totalSize.value=d.dashSize+d.gapSize,f.scale.value=d.scale}function s(f,d,x,E){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.size.value=d.size*x,f.scale.value=E*.5,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let S;d.map?S=d.map:d.alphaMap&&(S=d.alphaMap),S!==void 0&&(S.matrixAutoUpdate===!0&&S.updateMatrix(),f.uvTransform.value.copy(S.matrix))}function h(f,d){f.diffuse.value.copy(d.color),f.opacity.value=d.opacity,f.rotation.value=d.rotation,d.map&&(f.map.value=d.map),d.alphaMap&&(f.alphaMap.value=d.alphaMap),d.alphaTest>0&&(f.alphaTest.value=d.alphaTest);let x;d.map?x=d.map:d.alphaMap&&(x=d.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),f.uvTransform.value.copy(x.matrix))}function l(f,d){f.specular.value.copy(d.specular),f.shininess.value=Math.max(d.shininess,1e-4)}function c(f,d){d.gradientMap&&(f.gradientMap.value=d.gradientMap)}function p(f,d){f.roughness.value=d.roughness,f.metalness.value=d.metalness,d.roughnessMap&&(f.roughnessMap.value=d.roughnessMap),d.metalnessMap&&(f.metalnessMap.value=d.metalnessMap),e.get(d).envMap&&(f.envMapIntensity.value=d.envMapIntensity)}function u(f,d,x){f.ior.value=d.ior,d.sheen>0&&(f.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),f.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(f.sheenColorMap.value=d.sheenColorMap),d.sheenRoughnessMap&&(f.sheenRoughnessMap.value=d.sheenRoughnessMap)),d.clearcoat>0&&(f.clearcoat.value=d.clearcoat,f.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(f.clearcoatMap.value=d.clearcoatMap),d.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap),d.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),f.clearcoatNormalMap.value=d.clearcoatNormalMap,d.side===bt&&f.clearcoatNormalScale.value.negate())),d.iridescence>0&&(f.iridescence.value=d.iridescence,f.iridescenceIOR.value=d.iridescenceIOR,f.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(f.iridescenceMap.value=d.iridescenceMap),d.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=d.iridescenceThicknessMap)),d.transmission>0&&(f.transmission.value=d.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(f.transmissionMap.value=d.transmissionMap),f.thickness.value=d.thickness,d.thicknessMap&&(f.thicknessMap.value=d.thicknessMap),f.attenuationDistance.value=d.attenuationDistance,f.attenuationColor.value.copy(d.attenuationColor)),f.specularIntensity.value=d.specularIntensity,f.specularColor.value.copy(d.specularColor),d.specularIntensityMap&&(f.specularIntensityMap.value=d.specularIntensityMap),d.specularColorMap&&(f.specularColorMap.value=d.specularColorMap)}function m(f,d){d.matcap&&(f.matcap.value=d.matcap)}function _(f,d){f.referencePosition.value.copy(d.referencePosition),f.nearDistance.value=d.nearDistance,f.farDistance.value=d.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function kd(a,e,t,i){let r={},n={},o=[];const s=t.isWebGL2?a.getParameter(35375):0;function h(E,S){const y=S.program;i.uniformBlockBinding(E,y)}function l(E,S){let y=r[E.id];y===void 0&&(_(E),y=c(E),r[E.id]=y,E.addEventListener("dispose",d));const w=S.program;i.updateUBOMapping(E,w);const C=e.render.frame;n[E.id]!==C&&(u(E),n[E.id]=C)}function c(E){const S=p();E.__bindingPointIndex=S;const y=a.createBuffer(),w=E.__size,C=E.usage;return a.bindBuffer(35345,y),a.bufferData(35345,w,C),a.bindBuffer(35345,null),a.bindBufferBase(35345,S,y),y}function p(){for(let E=0;E<s;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(E){const S=r[E.id],y=E.uniforms,w=E.__cache;a.bindBuffer(35345,S);for(let C=0,N=y.length;C<N;C++){const g=y[C];if(m(g,C,w)===!0){const L=g.__offset,R=Array.isArray(g.value)?g.value:[g.value];let j=0;for(let J=0;J<R.length;J++){const O=R[J],P=f(O);typeof O=="number"?(g.__data[0]=O,a.bufferSubData(35345,L+j,g.__data)):O.isMatrix3?(g.__data[0]=O.elements[0],g.__data[1]=O.elements[1],g.__data[2]=O.elements[2],g.__data[3]=O.elements[0],g.__data[4]=O.elements[3],g.__data[5]=O.elements[4],g.__data[6]=O.elements[5],g.__data[7]=O.elements[0],g.__data[8]=O.elements[6],g.__data[9]=O.elements[7],g.__data[10]=O.elements[8],g.__data[11]=O.elements[0]):(O.toArray(g.__data,j),j+=P.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,L,g.__data)}}a.bindBuffer(35345,null)}function m(E,S,y){const w=E.value;if(y[S]===void 0){if(typeof w=="number")y[S]=w;else{const C=Array.isArray(w)?w:[w],N=[];for(let g=0;g<C.length;g++)N.push(C[g].clone());y[S]=N}return!0}else if(typeof w=="number"){if(y[S]!==w)return y[S]=w,!0}else{const C=Array.isArray(y[S])?y[S]:[y[S]],N=Array.isArray(w)?w:[w];for(let g=0;g<C.length;g++){const L=C[g];if(L.equals(N[g])===!1)return L.copy(N[g]),!0}}return!1}function _(E){const S=E.uniforms;let y=0;const w=16;let C=0;for(let N=0,g=S.length;N<g;N++){const L=S[N],R={boundary:0,storage:0},j=Array.isArray(L.value)?L.value:[L.value];for(let J=0,O=j.length;J<O;J++){const P=j[J],F=f(P);R.boundary+=F.boundary,R.storage+=F.storage}if(L.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,N>0){C=y%w;const J=w-C;C!==0&&J-R.boundary<0&&(y+=w-C,L.__offset=y)}y+=R.storage}return C=y%w,C>0&&(y+=w-C),E.__size=y,E.__cache={},this}function f(E){const S={boundary:0,storage:0};return typeof E=="number"?(S.boundary=4,S.storage=4):E.isVector2?(S.boundary=8,S.storage=8):E.isVector3||E.isColor?(S.boundary=16,S.storage=12):E.isVector4?(S.boundary=16,S.storage=16):E.isMatrix3?(S.boundary=48,S.storage=48):E.isMatrix4?(S.boundary=64,S.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),S}function d(E){const S=E.target;S.removeEventListener("dispose",d);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),a.deleteBuffer(r[S.id]),delete r[S.id],delete n[S.id]}function x(){for(const E in r)a.deleteBuffer(r[E]);o=[],r={},n={}}return{bind:h,update:l,dispose:x}}function Bd(){const a=Ir("canvas");return a.style.display="block",a}function Os(a={}){this.isWebGLRenderer=!0;const e=a.canvas!==void 0?a.canvas:Bd(),t=a.context!==void 0?a.context:null,i=a.depth!==void 0?a.depth:!0,r=a.stencil!==void 0?a.stencil:!0,n=a.antialias!==void 0?a.antialias:!1,o=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,s=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,h=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=a.alpha!==void 0?a.alpha:!1;let p=null,u=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mi,this.physicallyCorrectLights=!1,this.toneMapping=Wt,this.toneMappingExposure=1;const f=this;let d=!1,x=0,E=0,S=null,y=-1,w=null;const C=new ke,N=new ke;let g=null,L=e.width,R=e.height,j=1,J=null,O=null;const P=new ke(0,0,L,R),F=new ke(0,0,L,R);let Y=!1;const K=new On;let X=!1,ee=!1,Z=null;const H=new Ve,k=new Se,Q=new I,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return S===null?j:1}let G=t;function Le(M,z){for(let W=0;W<M.length;W++){const U=M[W],q=e.getContext(U,z);if(q!==null)return q}return null}try{const M={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:s,powerPreference:h,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nn}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",ye,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&z.shift(),G=Le(z,M),G===null)throw Le(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let de,_e,he,Ne,be,ve,Ze,We,je,it,Be,Ie,xt,ot,b,v,B,ie,re,ae,xe,T,D,se;function ue(){de=new Jh(G),_e=new jh(G,de,a),de.init(_e),T=new Id(G,de,_e),he=new Pd(G,de,_e),Ne=new eu,be=new _d,ve=new Dd(G,de,he,be,_e,T,Ne),Ze=new Xh(f),We=new Kh(f),je=new cl(G,_e),D=new Vh(G,de,je,_e),it=new $h(G,je,Ne,D),Be=new nu(G,it,je,Ne),re=new ru(G,_e,ve),v=new qh(be),Ie=new gd(f,Ze,We,de,_e,D,v),xt=new Fd(f,be),ot=new xd,b=new Td(de,_e),ie=new Hh(f,Ze,We,he,Be,c,o),B=new Rd(f,Be,_e),se=new kd(G,Ne,_e,he),ae=new Wh(G,de,Ne,_e),xe=new Qh(G,de,Ne,_e),Ne.programs=Ie.programs,f.capabilities=_e,f.extensions=de,f.properties=be,f.renderLists=ot,f.shadowMap=B,f.state=he,f.info=Ne}ue();const le=new zd(f,G);this.xr=le,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const M=de.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=de.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(M){M!==void 0&&(j=M,this.setSize(L,R,!1))},this.getSize=function(M){return M.set(L,R)},this.setSize=function(M,z,W){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=M,R=z,e.width=Math.floor(M*j),e.height=Math.floor(z*j),W!==!1&&(e.style.width=M+"px",e.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(L*j,R*j).floor()},this.setDrawingBufferSize=function(M,z,W){L=M,R=z,j=W,e.width=Math.floor(M*W),e.height=Math.floor(z*W),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(P)},this.setViewport=function(M,z,W,U){M.isVector4?P.set(M.x,M.y,M.z,M.w):P.set(M,z,W,U),he.viewport(C.copy(P).multiplyScalar(j).floor())},this.getScissor=function(M){return M.copy(F)},this.setScissor=function(M,z,W,U){M.isVector4?F.set(M.x,M.y,M.z,M.w):F.set(M,z,W,U),he.scissor(N.copy(F).multiplyScalar(j).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(M){he.setScissorTest(Y=M)},this.setOpaqueSort=function(M){J=M},this.setTransparentSort=function(M){O=M},this.getClearColor=function(M){return M.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor.apply(ie,arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha.apply(ie,arguments)},this.clear=function(M=!0,z=!0,W=!0){let U=0;M&&(U|=16384),z&&(U|=256),W&&(U|=1024),G.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),ot.dispose(),b.dispose(),be.dispose(),Ze.dispose(),We.dispose(),Be.dispose(),D.dispose(),se.dispose(),Ie.dispose(),le.dispose(),le.removeEventListener("sessionstart",oe),le.removeEventListener("sessionend",ge),Z&&(Z.dispose(),Z=null),De.stop()};function pe(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),d=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),d=!1;const M=Ne.autoReset,z=B.enabled,W=B.autoUpdate,U=B.needsUpdate,q=B.type;ue(),Ne.autoReset=M,B.enabled=z,B.autoUpdate=W,B.needsUpdate=U,B.type=q}function ye(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ae(M){const z=M.target;z.removeEventListener("dispose",Ae),Ke(z)}function Ke(M){A(M),be.remove(M)}function A(M){const z=be.get(M).programs;z!==void 0&&(z.forEach(function(W){Ie.releaseProgram(W)}),M.isShaderMaterial&&Ie.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,W,U,q,fe){z===null&&(z=te);const Me=q.isMesh&&q.matrixWorld.determinant()<0,Te=Hs(M,z,W,U,q);he.setMaterial(U,Me);let Ee=W.index,Ue=1;U.wireframe===!0&&(Ee=it.getWireframeAttribute(W),Ue=2);const Pe=W.drawRange,Ce=W.attributes.position;let et=Pe.start*Ue,ht=(Pe.start+Pe.count)*Ue;fe!==null&&(et=Math.max(et,fe.start*Ue),ht=Math.min(ht,(fe.start+fe.count)*Ue)),Ee!==null?(et=Math.max(et,0),ht=Math.min(ht,Ee.count)):Ce!=null&&(et=Math.max(et,0),ht=Math.min(ht,Ce.count));const Ot=ht-et;if(Ot<0||Ot===1/0)return;D.setup(q,U,Te,W,Ee);let ei,Ge=ae;if(Ee!==null&&(ei=je.get(Ee),Ge=xe,Ge.setIndex(ei)),q.isMesh)U.wireframe===!0?(he.setLineWidth(U.wireframeLinewidth*ce()),Ge.setMode(1)):Ge.setMode(4);else if(q.isLine){let Re=U.linewidth;Re===void 0&&(Re=1),he.setLineWidth(Re*ce()),q.isLineSegments?Ge.setMode(1):q.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else q.isPoints?Ge.setMode(0):q.isSprite&&Ge.setMode(4);if(q.isInstancedMesh)Ge.renderInstances(et,Ot,q.count);else if(W.isInstancedBufferGeometry){const Re=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,kr=Math.min(W.instanceCount,Re);Ge.renderInstances(et,Ot,kr)}else Ge.render(et,Ot)},this.compile=function(M,z){function W(U,q,fe){U.transparent===!0&&U.side===cr?(U.side=bt,U.needsUpdate=!0,Mt(U,q,fe),U.side=pi,U.needsUpdate=!0,Mt(U,q,fe),U.side=cr):Mt(U,q,fe)}u=b.get(M),u.init(),_.push(u),M.traverseVisible(function(U){U.isLight&&U.layers.test(z.layers)&&(u.pushLight(U),U.castShadow&&u.pushShadow(U))}),u.setupLights(f.physicallyCorrectLights),M.traverse(function(U){const q=U.material;if(q)if(Array.isArray(q))for(let fe=0;fe<q.length;fe++){const Me=q[fe];W(Me,M,U)}else W(q,M,U)}),_.pop(),u=null};let V=null;function $(M){V&&V(M)}function oe(){De.stop()}function ge(){De.start()}const De=new Rs;De.setAnimationLoop($),typeof self<"u"&&De.setContext(self),this.setAnimationLoop=function(M){V=M,le.setAnimationLoop(M),M===null?De.stop():De.start()},le.addEventListener("sessionstart",oe),le.addEventListener("sessionend",ge),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(d===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(z),z=le.getCamera()),M.isScene===!0&&M.onBeforeRender(f,M,z,S),u=b.get(M,_.length),u.init(),_.push(u),H.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),K.setFromProjectionMatrix(H),ee=this.localClippingEnabled,X=v.init(this.clippingPlanes,ee,z),p=ot.get(M,m.length),p.init(),m.push(p),Je(M,z,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(J,O),X===!0&&v.beginShadows();const W=u.state.shadowsArray;if(B.render(W,M,z),X===!0&&v.endShadows(),this.info.autoReset===!0&&this.info.reset(),ie.render(p,M),u.setupLights(f.physicallyCorrectLights),z.isArrayCamera){const U=z.cameras;for(let q=0,fe=U.length;q<fe;q++){const Me=U[q];Qe(p,M,Me,Me.viewport)}}else Qe(p,M,z);S!==null&&(ve.updateMultisampleRenderTarget(S),ve.updateRenderTargetMipmap(S)),M.isScene===!0&&M.onAfterRender(f,M,z),D.resetDefaultState(),y=-1,w=null,_.pop(),_.length>0?u=_[_.length-1]:u=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function Je(M,z,W,U){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)W=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){U&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(H);const fe=Be.update(M),Me=M.material;Me.visible&&p.push(M,fe,Me,W,Q.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==Ne.render.frame&&(M.skeleton.update(),M.skeleton.frame=Ne.render.frame),!M.frustumCulled||K.intersectsObject(M))){U&&Q.setFromMatrixPosition(M.matrixWorld).applyMatrix4(H);const fe=Be.update(M),Me=M.material;if(Array.isArray(Me)){const Te=fe.groups;for(let Ee=0,Ue=Te.length;Ee<Ue;Ee++){const Pe=Te[Ee],Ce=Me[Pe.materialIndex];Ce&&Ce.visible&&p.push(M,fe,Ce,W,Q.z,Pe)}}else Me.visible&&p.push(M,fe,Me,W,Q.z,null)}}const q=M.children;for(let fe=0,Me=q.length;fe<Me;fe++)Je(q[fe],z,W,U)}function Qe(M,z,W,U){const q=M.opaque,fe=M.transmissive,Me=M.transparent;u.setupLightsView(W),fe.length>0&&Qt(q,z,W),U&&he.viewport(C.copy(U)),q.length>0&&Fe(q,z,W),fe.length>0&&Fe(fe,z,W),Me.length>0&&Fe(Me,z,W),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Qt(M,z,W){const U=_e.isWebGL2;Z===null&&(Z=new $t(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?ir:fi,minFilter:tr,samples:U&&n===!0?4:0})),f.getDrawingBufferSize(k),U?Z.setSize(k.x,k.y):Z.setSize(Dn(k.x),Dn(k.y));const q=f.getRenderTarget();f.setRenderTarget(Z),f.clear();const fe=f.toneMapping;f.toneMapping=Wt,Fe(M,z,W),f.toneMapping=fe,ve.updateMultisampleRenderTarget(Z),ve.updateRenderTargetMipmap(Z),f.setRenderTarget(q)}function Fe(M,z,W){const U=z.isScene===!0?z.overrideMaterial:null;for(let q=0,fe=M.length;q<fe;q++){const Me=M[q],Te=Me.object,Ee=Me.geometry,Ue=U===null?Me.material:U,Pe=Me.group;Te.layers.test(W.layers)&&Ut(Te,z,W,Ee,Ue,Pe)}}function Ut(M,z,W,U,q,fe){M.onBeforeRender(f,z,W,U,q,fe),M.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),q.onBeforeRender(f,z,W,U,M,fe),q.transparent===!0&&q.side===cr?(q.side=bt,q.needsUpdate=!0,f.renderBufferDirect(W,z,U,q,M,fe),q.side=pi,q.needsUpdate=!0,f.renderBufferDirect(W,z,U,q,M,fe),q.side=cr):f.renderBufferDirect(W,z,U,q,M,fe),M.onAfterRender(f,z,W,U,q,fe)}function Mt(M,z,W){z.isScene!==!0&&(z=te);const U=be.get(M),q=u.state.lights,fe=u.state.shadowsArray,Me=q.state.version,Te=Ie.getParameters(M,q.state,fe,z,W),Ee=Ie.getProgramCacheKey(Te);let Ue=U.programs;U.environment=M.isMeshStandardMaterial?z.environment:null,U.fog=z.fog,U.envMap=(M.isMeshStandardMaterial?We:Ze).get(M.envMap||U.environment),Ue===void 0&&(M.addEventListener("dispose",Ae),Ue=new Map,U.programs=Ue);let Pe=Ue.get(Ee);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===Me)return Hn(M,Te),Pe}else Te.uniforms=Ie.getUniforms(M),M.onBuild(W,Te,f),M.onBeforeCompile(Te,f),Pe=Ie.acquireProgram(Te,Ee),Ue.set(Ee,Pe),U.uniforms=Te.uniforms;const Ce=U.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=v.uniform),Hn(M,Te),U.needsLights=Ws(M),U.lightsStateVersion=Me,U.needsLights&&(Ce.ambientLightColor.value=q.state.ambient,Ce.lightProbe.value=q.state.probe,Ce.directionalLights.value=q.state.directional,Ce.directionalLightShadows.value=q.state.directionalShadow,Ce.spotLights.value=q.state.spot,Ce.spotLightShadows.value=q.state.spotShadow,Ce.rectAreaLights.value=q.state.rectArea,Ce.ltc_1.value=q.state.rectAreaLTC1,Ce.ltc_2.value=q.state.rectAreaLTC2,Ce.pointLights.value=q.state.point,Ce.pointLightShadows.value=q.state.pointShadow,Ce.hemisphereLights.value=q.state.hemi,Ce.directionalShadowMap.value=q.state.directionalShadowMap,Ce.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ce.spotShadowMap.value=q.state.spotShadowMap,Ce.spotLightMatrix.value=q.state.spotLightMatrix,Ce.spotLightMap.value=q.state.spotLightMap,Ce.pointShadowMap.value=q.state.pointShadowMap,Ce.pointShadowMatrix.value=q.state.pointShadowMatrix);const et=Pe.getUniforms(),ht=Pr.seqWithValue(et.seq,Ce);return U.currentProgram=Pe,U.uniformsList=ht,Pe}function Hn(M,z){const W=be.get(M);W.outputEncoding=z.outputEncoding,W.instancing=z.instancing,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function Hs(M,z,W,U,q){z.isScene!==!0&&(z=te),ve.resetTextureUnits();const fe=z.fog,Me=U.isMeshStandardMaterial?z.environment:null,Te=S===null?f.outputEncoding:S.isXRRenderTarget===!0?S.texture.encoding:mi,Ee=(U.isMeshStandardMaterial?We:Ze).get(U.envMap||Me),Ue=U.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Pe=!!U.normalMap&&!!W.attributes.tangent,Ce=!!W.morphAttributes.position,et=!!W.morphAttributes.normal,ht=!!W.morphAttributes.color,Ot=U.toneMapped?f.toneMapping:Wt,ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ge=ei!==void 0?ei.length:0,Re=be.get(U),kr=u.state.lights;if(X===!0&&(ee===!0||M!==w)){const ut=M===w&&U.id===y;v.setState(U,M,ut)}let Br=!1;U.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==kr.state.version||Re.outputEncoding!==Te||q.isInstancedMesh&&Re.instancing===!1||!q.isInstancedMesh&&Re.instancing===!0||q.isSkinnedMesh&&Re.skinning===!1||!q.isSkinnedMesh&&Re.skinning===!0||Re.envMap!==Ee||U.fog===!0&&Re.fog!==fe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==v.numPlanes||Re.numIntersection!==v.numIntersection)||Re.vertexAlphas!==Ue||Re.vertexTangents!==Pe||Re.morphTargets!==Ce||Re.morphNormals!==et||Re.morphColors!==ht||Re.toneMapping!==Ot||_e.isWebGL2===!0&&Re.morphTargetsCount!==Ge)&&(Br=!0):(Br=!0,Re.__version=U.version);let ti=Re.currentProgram;Br===!0&&(ti=Mt(U,z,q));let Vn=!1,Vi=!1,Gr=!1;const rt=ti.getUniforms(),ii=Re.uniforms;if(he.useProgram(ti.program)&&(Vn=!0,Vi=!0,Gr=!0),U.id!==y&&(y=U.id,Vi=!0),Vn||w!==M){if(rt.setValue(G,"projectionMatrix",M.projectionMatrix),_e.logarithmicDepthBuffer&&rt.setValue(G,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),w!==M&&(w=M,Vi=!0,Gr=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const ut=rt.map.cameraPosition;ut!==void 0&&ut.setValue(G,Q.setFromMatrixPosition(M.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&rt.setValue(G,"isOrthographic",M.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||q.isSkinnedMesh)&&rt.setValue(G,"viewMatrix",M.matrixWorldInverse)}if(q.isSkinnedMesh){rt.setOptional(G,q,"bindMatrix"),rt.setOptional(G,q,"bindMatrixInverse");const ut=q.skeleton;ut&&(_e.floatVertexTextures?(ut.boneTexture===null&&ut.computeBoneTexture(),rt.setValue(G,"boneTexture",ut.boneTexture,ve),rt.setValue(G,"boneTextureSize",ut.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Hr=W.morphAttributes;if((Hr.position!==void 0||Hr.normal!==void 0||Hr.color!==void 0&&_e.isWebGL2===!0)&&re.update(q,W,U,ti),(Vi||Re.receiveShadow!==q.receiveShadow)&&(Re.receiveShadow=q.receiveShadow,rt.setValue(G,"receiveShadow",q.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(ii.envMap.value=Ee,ii.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),Vi&&(rt.setValue(G,"toneMappingExposure",f.toneMappingExposure),Re.needsLights&&Vs(ii,Gr),fe&&U.fog===!0&&xt.refreshFogUniforms(ii,fe),xt.refreshMaterialUniforms(ii,U,j,R,Z),Pr.upload(G,Re.uniformsList,ii,ve)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Pr.upload(G,Re.uniformsList,ii,ve),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&rt.setValue(G,"center",q.center),rt.setValue(G,"modelViewMatrix",q.modelViewMatrix),rt.setValue(G,"normalMatrix",q.normalMatrix),rt.setValue(G,"modelMatrix",q.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const ut=U.uniformsGroups;for(let Vr=0,js=ut.length;Vr<js;Vr++)if(_e.isWebGL2){const Wn=ut[Vr];se.update(Wn,ti),se.bind(Wn,ti)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ti}function Vs(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Ws(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(M,z,W){be.get(M.texture).__webglTexture=z,be.get(M.depthTexture).__webglTexture=W;const U=be.get(M);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=W===void 0,U.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,z){const W=be.get(M);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(M,z=0,W=0){S=M,x=z,E=W;let U=!0,q=null,fe=!1,Me=!1;if(M){const Te=be.get(M);Te.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(36160,null),U=!1):Te.__webglFramebuffer===void 0?ve.setupRenderTarget(M):Te.__hasExternalTextures&&ve.rebindTextures(M,be.get(M.texture).__webglTexture,be.get(M.depthTexture).__webglTexture);const Ee=M.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Me=!0);const Ue=be.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(q=Ue[z],fe=!0):_e.isWebGL2&&M.samples>0&&ve.useMultisampledRTT(M)===!1?q=be.get(M).__webglMultisampledFramebuffer:q=Ue,C.copy(M.viewport),N.copy(M.scissor),g=M.scissorTest}else C.copy(P).multiplyScalar(j).floor(),N.copy(F).multiplyScalar(j).floor(),g=Y;if(he.bindFramebuffer(36160,q)&&_e.drawBuffers&&U&&he.drawBuffers(M,q),he.viewport(C),he.scissor(N),he.setScissorTest(g),fe){const Te=be.get(M.texture);G.framebufferTexture2D(36160,36064,34069+z,Te.__webglTexture,W)}else if(Me){const Te=be.get(M.texture),Ee=z||0;G.framebufferTextureLayer(36160,36064,Te.__webglTexture,W||0,Ee)}y=-1},this.readRenderTargetPixels=function(M,z,W,U,q,fe,Me){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=be.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){he.bindFramebuffer(36160,Te);try{const Ee=M.texture,Ue=Ee.format,Pe=Ee.type;if(Ue!==At&&T.convert(Ue)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ce=Pe===ir&&(de.has("EXT_color_buffer_half_float")||_e.isWebGL2&&de.has("EXT_color_buffer_float"));if(Pe!==fi&&T.convert(Pe)!==G.getParameter(35738)&&!(Pe===hi&&(_e.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Ce){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-U&&W>=0&&W<=M.height-q&&G.readPixels(z,W,U,q,T.convert(Ue),T.convert(Pe),fe)}finally{const Ee=S!==null?be.get(S).__webglFramebuffer:null;he.bindFramebuffer(36160,Ee)}}},this.copyFramebufferToTexture=function(M,z,W=0){const U=Math.pow(2,-W),q=Math.floor(z.image.width*U),fe=Math.floor(z.image.height*U);ve.setTexture2D(z,0),G.copyTexSubImage2D(3553,W,0,0,M.x,M.y,q,fe),he.unbindTexture()},this.copyTextureToTexture=function(M,z,W,U=0){const q=z.image.width,fe=z.image.height,Me=T.convert(W.format),Te=T.convert(W.type);ve.setTexture2D(W,0),G.pixelStorei(37440,W.flipY),G.pixelStorei(37441,W.premultiplyAlpha),G.pixelStorei(3317,W.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,U,M.x,M.y,q,fe,Me,Te,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,U,M.x,M.y,z.mipmaps[0].width,z.mipmaps[0].height,Me,z.mipmaps[0].data):G.texSubImage2D(3553,U,M.x,M.y,Me,Te,z.image),U===0&&W.generateMipmaps&&G.generateMipmap(3553),he.unbindTexture()},this.copyTextureToTexture3D=function(M,z,W,U,q=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const fe=M.max.x-M.min.x+1,Me=M.max.y-M.min.y+1,Te=M.max.z-M.min.z+1,Ee=T.convert(U.format),Ue=T.convert(U.type);let Pe;if(U.isData3DTexture)ve.setTexture3D(U,0),Pe=32879;else if(U.isDataArrayTexture)ve.setTexture2DArray(U,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,U.flipY),G.pixelStorei(37441,U.premultiplyAlpha),G.pixelStorei(3317,U.unpackAlignment);const Ce=G.getParameter(3314),et=G.getParameter(32878),ht=G.getParameter(3316),Ot=G.getParameter(3315),ei=G.getParameter(32877),Ge=W.isCompressedTexture?W.mipmaps[0]:W.image;G.pixelStorei(3314,Ge.width),G.pixelStorei(32878,Ge.height),G.pixelStorei(3316,M.min.x),G.pixelStorei(3315,M.min.y),G.pixelStorei(32877,M.min.z),W.isDataTexture||W.isData3DTexture?G.texSubImage3D(Pe,q,z.x,z.y,z.z,fe,Me,Te,Ee,Ue,Ge.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Pe,q,z.x,z.y,z.z,fe,Me,Te,Ee,Ge.data)):G.texSubImage3D(Pe,q,z.x,z.y,z.z,fe,Me,Te,Ee,Ue,Ge),G.pixelStorei(3314,Ce),G.pixelStorei(32878,et),G.pixelStorei(3316,ht),G.pixelStorei(3315,Ot),G.pixelStorei(32877,ei),q===0&&U.generateMipmaps&&G.generateMipmap(Pe),he.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?ve.setTextureCube(M,0):M.isData3DTexture?ve.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ve.setTexture2DArray(M,0):ve.setTexture2D(M,0),he.unbindTexture()},this.resetState=function(){x=0,E=0,S=null,he.reset(),D.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Gd extends Os{}Gd.prototype.isWebGL1Renderer=!0;class Hd extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Vd extends or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gs,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ts={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Wd{constructor(e,t,i){const r=this;let n=!1,o=0,s=0,h;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){s++,n===!1&&r.onStart!==void 0&&r.onStart(c,o,s),n=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,s),o===s&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,p){return l.push(c,p),this},this.removeHandler=function(c){const p=l.indexOf(c);return p!==-1&&l.splice(p,2),this},this.getHandler=function(c){for(let p=0,u=l.length;p<u;p+=2){const m=l[p],_=l[p+1];if(m.global&&(m.lastIndex=0),m.test(c))return _}return null}}}const jd=new Wd;class zs{constructor(e){this.manager=e!==void 0?e:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ht={};class qd extends Error{constructor(e,t){super(e),this.response=t}}class Xd extends zs{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=ts.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Ht[e]!==void 0){Ht[e].push({onLoad:t,onProgress:i,onError:r});return}Ht[e]=[],Ht[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),s=this.mimeType,h=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const c=Ht[e],p=l.body.getReader(),u=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=u?parseInt(u):0,_=m!==0;let f=0;const d=new ReadableStream({start(x){E();function E(){p.read().then(({done:S,value:y})=>{if(S)x.close();else{f+=y.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:f,total:m});for(let C=0,N=c.length;C<N;C++){const g=c[C];g.onProgress&&g.onProgress(w)}x.enqueue(y),E()}})}}});return new Response(d)}else throw new qd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(h){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,s));case"json":return l.json();default:if(s===void 0)return l.text();{const c=/charset="?([^;"\s]*)"?/i.exec(s),p=c&&c[1]?c[1].toLowerCase():void 0,u=new TextDecoder(p);return l.arrayBuffer().then(m=>u.decode(m))}}}).then(l=>{ts.add(e,l);const c=Ht[e];delete Ht[e];for(let p=0,u=c.length;p<u;p++){const m=c[p];m.onLoad&&m.onLoad(l)}}).catch(l=>{const c=Ht[e];if(c===void 0)throw this.manager.itemError(e),l;delete Ht[e];for(let p=0,u=c.length;p<u;p++){const m=c[p];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Yd extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const bn=new Ve,is=new I,rs=new I;class Zd{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new On,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new ke(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;is.setFromMatrixPosition(e.matrixWorld),t.position.copy(is),rs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rs),t.updateMatrixWorld(),bn.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bn),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bn)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ns=new Ve,Ji=new I,wn=new I;class Kd extends Zd{constructor(){super(new mt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new ke(2,1,1,1),new ke(0,1,1,1),new ke(3,1,1,1),new ke(1,1,1,1),new ke(3,0,1,1),new ke(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Ji.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ji),wn.copy(i.position),wn.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(wn),i.updateMatrixWorld(),r.makeTranslation(-Ji.x,-Ji.y,-Ji.z),ns.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ns)}}class Fs extends Yd{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Kd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Jd{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ks{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=as(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=as();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function as(){return(typeof performance>"u"?Date:performance).now()}class ss{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nn}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nn);const os={type:"change"},Tn={type:"start"},ls={type:"end"};class $d extends _i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:vi.ROTATE,MIDDLE:vi.DOLLY,RIGHT:vi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",ot),this._domElementKeyEvents=T},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(os),i.update(),n=r.NONE},this.update=function(){const T=new I,D=new gi().setFromUnitVectors(e.up,new I(0,1,0)),se=D.clone().invert(),ue=new I,le=new gi,pe=2*Math.PI;return function(){const me=i.object.position;T.copy(me).sub(i.target),T.applyQuaternion(D),s.setFromVector3(T),i.autoRotate&&n===r.NONE&&L(N()),i.enableDamping?(s.theta+=h.theta*i.dampingFactor,s.phi+=h.phi*i.dampingFactor):(s.theta+=h.theta,s.phi+=h.phi);let ye=i.minAzimuthAngle,Ae=i.maxAzimuthAngle;return isFinite(ye)&&isFinite(Ae)&&(ye<-Math.PI?ye+=pe:ye>Math.PI&&(ye-=pe),Ae<-Math.PI?Ae+=pe:Ae>Math.PI&&(Ae-=pe),ye<=Ae?s.theta=Math.max(ye,Math.min(Ae,s.theta)):s.theta=s.theta>(ye+Ae)/2?Math.max(ye,s.theta):Math.min(Ae,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=l,s.radius=Math.max(i.minDistance,Math.min(i.maxDistance,s.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),T.setFromSpherical(s),T.applyQuaternion(se),me.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),c.set(0,0,0)),l=1,p||ue.distanceToSquared(i.object.position)>o||8*(1-le.dot(i.object.quaternion))>o?(i.dispatchEvent(os),ue.copy(i.object.position),le.copy(i.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",B),i.domElement.removeEventListener("pointerdown",Ze),i.domElement.removeEventListener("pointercancel",it),i.domElement.removeEventListener("wheel",xt),i.domElement.removeEventListener("pointermove",We),i.domElement.removeEventListener("pointerup",je),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",ot)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let n=r.NONE;const o=1e-6,s=new ss,h=new ss;let l=1;const c=new I;let p=!1;const u=new Se,m=new Se,_=new Se,f=new Se,d=new Se,x=new Se,E=new Se,S=new Se,y=new Se,w=[],C={};function N(){return 2*Math.PI/60/60*i.autoRotateSpeed}function g(){return Math.pow(.95,i.zoomSpeed)}function L(T){h.theta-=T}function R(T){h.phi-=T}const j=function(){const T=new I;return function(D,se){T.setFromMatrixColumn(se,0),T.multiplyScalar(-D),c.add(T)}}(),J=function(){const T=new I;return function(D,se){i.screenSpacePanning===!0?T.setFromMatrixColumn(se,1):(T.setFromMatrixColumn(se,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(D),c.add(T)}}(),O=function(){const T=new I;return function(D,se){const ue=i.domElement;if(i.object.isPerspectiveCamera){const le=i.object.position;T.copy(le).sub(i.target);let pe=T.length();pe*=Math.tan(i.object.fov/2*Math.PI/180),j(2*D*pe/ue.clientHeight,i.object.matrix),J(2*se*pe/ue.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(D*(i.object.right-i.object.left)/i.object.zoom/ue.clientWidth,i.object.matrix),J(se*(i.object.top-i.object.bottom)/i.object.zoom/ue.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function P(T){i.object.isPerspectiveCamera?l/=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*T)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(T){i.object.isPerspectiveCamera?l*=T:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/T)),i.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(T){u.set(T.clientX,T.clientY)}function K(T){E.set(T.clientX,T.clientY)}function X(T){f.set(T.clientX,T.clientY)}function ee(T){m.set(T.clientX,T.clientY),_.subVectors(m,u).multiplyScalar(i.rotateSpeed);const D=i.domElement;L(2*Math.PI*_.x/D.clientHeight),R(2*Math.PI*_.y/D.clientHeight),u.copy(m),i.update()}function Z(T){S.set(T.clientX,T.clientY),y.subVectors(S,E),y.y>0?P(g()):y.y<0&&F(g()),E.copy(S),i.update()}function H(T){d.set(T.clientX,T.clientY),x.subVectors(d,f).multiplyScalar(i.panSpeed),O(x.x,x.y),f.copy(d),i.update()}function k(T){T.deltaY<0?F(g()):T.deltaY>0&&P(g()),i.update()}function Q(T){let D=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),D=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),D=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),D=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),D=!0;break}D&&(T.preventDefault(),i.update())}function te(){if(w.length===1)u.set(w[0].pageX,w[0].pageY);else{const T=.5*(w[0].pageX+w[1].pageX),D=.5*(w[0].pageY+w[1].pageY);u.set(T,D)}}function ce(){if(w.length===1)f.set(w[0].pageX,w[0].pageY);else{const T=.5*(w[0].pageX+w[1].pageX),D=.5*(w[0].pageY+w[1].pageY);f.set(T,D)}}function G(){const T=w[0].pageX-w[1].pageX,D=w[0].pageY-w[1].pageY,se=Math.sqrt(T*T+D*D);E.set(0,se)}function Le(){i.enableZoom&&G(),i.enablePan&&ce()}function de(){i.enableZoom&&G(),i.enableRotate&&te()}function _e(T){if(w.length==1)m.set(T.pageX,T.pageY);else{const se=xe(T),ue=.5*(T.pageX+se.x),le=.5*(T.pageY+se.y);m.set(ue,le)}_.subVectors(m,u).multiplyScalar(i.rotateSpeed);const D=i.domElement;L(2*Math.PI*_.x/D.clientHeight),R(2*Math.PI*_.y/D.clientHeight),u.copy(m)}function he(T){if(w.length===1)d.set(T.pageX,T.pageY);else{const D=xe(T),se=.5*(T.pageX+D.x),ue=.5*(T.pageY+D.y);d.set(se,ue)}x.subVectors(d,f).multiplyScalar(i.panSpeed),O(x.x,x.y),f.copy(d)}function Ne(T){const D=xe(T),se=T.pageX-D.x,ue=T.pageY-D.y,le=Math.sqrt(se*se+ue*ue);S.set(0,le),y.set(0,Math.pow(S.y/E.y,i.zoomSpeed)),P(y.y),E.copy(S)}function be(T){i.enableZoom&&Ne(T),i.enablePan&&he(T)}function ve(T){i.enableZoom&&Ne(T),i.enableRotate&&_e(T)}function Ze(T){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",We),i.domElement.addEventListener("pointerup",je)),ie(T),T.pointerType==="touch"?b(T):Be(T))}function We(T){i.enabled!==!1&&(T.pointerType==="touch"?v(T):Ie(T))}function je(T){re(T),w.length===0&&(i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",We),i.domElement.removeEventListener("pointerup",je)),i.dispatchEvent(ls),n=r.NONE}function it(T){re(T)}function Be(T){let D;switch(T.button){case 0:D=i.mouseButtons.LEFT;break;case 1:D=i.mouseButtons.MIDDLE;break;case 2:D=i.mouseButtons.RIGHT;break;default:D=-1}switch(D){case vi.DOLLY:if(i.enableZoom===!1)return;K(T),n=r.DOLLY;break;case vi.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;X(T),n=r.PAN}else{if(i.enableRotate===!1)return;Y(T),n=r.ROTATE}break;case vi.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;Y(T),n=r.ROTATE}else{if(i.enablePan===!1)return;X(T),n=r.PAN}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(Tn)}function Ie(T){switch(n){case r.ROTATE:if(i.enableRotate===!1)return;ee(T);break;case r.DOLLY:if(i.enableZoom===!1)return;Z(T);break;case r.PAN:if(i.enablePan===!1)return;H(T);break}}function xt(T){i.enabled===!1||i.enableZoom===!1||n!==r.NONE||(T.preventDefault(),i.dispatchEvent(Tn),k(T),i.dispatchEvent(ls))}function ot(T){i.enabled===!1||i.enablePan===!1||Q(T)}function b(T){switch(ae(T),w.length){case 1:switch(i.touches.ONE){case xi.ROTATE:if(i.enableRotate===!1)return;te(),n=r.TOUCH_ROTATE;break;case xi.PAN:if(i.enablePan===!1)return;ce(),n=r.TOUCH_PAN;break;default:n=r.NONE}break;case 2:switch(i.touches.TWO){case xi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Le(),n=r.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(),n=r.TOUCH_DOLLY_ROTATE;break;default:n=r.NONE}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(Tn)}function v(T){switch(ae(T),n){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;_e(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;he(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;be(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ve(T),i.update();break;default:n=r.NONE}}function B(T){i.enabled!==!1&&T.preventDefault()}function ie(T){w.push(T)}function re(T){delete C[T.pointerId];for(let D=0;D<w.length;D++)if(w[D].pointerId==T.pointerId){w.splice(D,1);return}}function ae(T){let D=C[T.pointerId];D===void 0&&(D=new Se,C[T.pointerId]=D),D.set(T.pageX,T.pageY)}function xe(T){const D=T.pointerId===w[0].pointerId?w[1]:w[0];return C[D.pointerId]}i.domElement.addEventListener("contextmenu",B),i.domElement.addEventListener("pointerdown",Ze),i.domElement.addEventListener("pointercancel",it),i.domElement.addEventListener("wheel",xt,{passive:!1}),this.update()}}class Qd extends zs{constructor(e){super(e)}load(e,t,i,r){const n=this,o=new Xd(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(s){try{t(n.parse(s))}catch(h){r?r(h):console.error(h),n.manager.itemError(e)}},i,r)}parse(e){function t(l){const c=new DataView(l),p=32/8*3+32/8*3*3+16/8,u=c.getUint32(80,!0);if(80+32/8+u*p===c.byteLength)return!0;const m=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(m,c,_))return!1;return!0}function i(l,c,p){for(let u=0,m=l.length;u<m;u++)if(l[u]!==c.getUint8(p+u))return!1;return!0}function r(l){const c=new DataView(l),p=c.getUint32(80,!0);let u,m,_,f=!1,d,x,E,S,y;for(let R=0;R<80-10;R++)c.getUint32(R,!1)==1129270351&&c.getUint8(R+4)==82&&c.getUint8(R+5)==61&&(f=!0,d=new Float32Array(p*3*3),x=c.getUint8(R+6)/255,E=c.getUint8(R+7)/255,S=c.getUint8(R+8)/255,y=c.getUint8(R+9)/255);const w=84,C=12*4+2,N=new Nt,g=new Float32Array(p*3*3),L=new Float32Array(p*3*3);for(let R=0;R<p;R++){const j=w+R*C,J=c.getFloat32(j,!0),O=c.getFloat32(j+4,!0),P=c.getFloat32(j+8,!0);if(f){const F=c.getUint16(j+48,!0);F&32768?(u=x,m=E,_=S):(u=(F&31)/31,m=(F>>5&31)/31,_=(F>>10&31)/31)}for(let F=1;F<=3;F++){const Y=j+F*12,K=R*3*3+(F-1)*3;g[K]=c.getFloat32(Y,!0),g[K+1]=c.getFloat32(Y+4,!0),g[K+2]=c.getFloat32(Y+8,!0),L[K]=J,L[K+1]=O,L[K+2]=P,f&&(d[K]=u,d[K+1]=m,d[K+2]=_)}}return N.setAttribute("position",new vt(g,3)),N.setAttribute("normal",new vt(L,3)),f&&(N.setAttribute("color",new vt(d,3)),N.hasColors=!0,N.alpha=y),N}function n(l){const c=new Nt,p=/solid([\s\S]*?)endsolid/g,u=/facet([\s\S]*?)endfacet/g;let m=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,f=new RegExp("vertex"+_+_+_,"g"),d=new RegExp("normal"+_+_+_,"g"),x=[],E=[],S=new I;let y,w=0,C=0,N=0;for(;(y=p.exec(l))!==null;){C=N;const g=y[0];for(;(y=u.exec(g))!==null;){let j=0,J=0;const O=y[0];for(;(y=d.exec(O))!==null;)S.x=parseFloat(y[1]),S.y=parseFloat(y[2]),S.z=parseFloat(y[3]),J++;for(;(y=f.exec(O))!==null;)x.push(parseFloat(y[1]),parseFloat(y[2]),parseFloat(y[3])),E.push(S.x,S.y,S.z),j++,N++;J!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+m),j!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+m),m++}const L=C,R=N-C;c.addGroup(L,R,w),w++}return c.setAttribute("position",new Ct(x,3)),c.setAttribute("normal",new Ct(E,3)),c}function o(l){return typeof l!="string"?Jd.decodeText(new Uint8Array(l)):l}function s(l){if(typeof l=="string"){const c=new Uint8Array(l.length);for(let p=0;p<l.length;p++)c[p]=l.charCodeAt(p)&255;return c.buffer||c}else return l}const h=s(e);return t(h)?r(h):n(o(e))}}class ep{constructor(e,t=" .:-=+*#%@",i={}){const r=i.resolution||.15,n=i.scale||1,o=i.color||!1,s=i.alpha||!1,h=i.block||!1,l=i.invert||!1,c=i.strResolution||"low";let p,u;const m=document.createElement("div");m.style.cursor="default";const _=document.createElement("table");m.appendChild(_);let f,d,x;this.setSize=function(P,F){p=P,u=F,e.setSize(P,F),E()},this.render=function(P,F){e.render(P,F),O(_)},this.domElement=m;function E(){f=Math.floor(p*r),d=Math.floor(u*r),N.width=f,N.height=d,x=e.domElement,x.style.backgroundColor&&(_.rows[0].cells[0].style.backgroundColor=x.style.backgroundColor,_.rows[0].cells[0].style.color=x.style.color),_.cellSpacing=0,_.cellPadding=0;const P=_.style;P.whiteSpace="pre",P.margin="0px",P.padding="0px",P.letterSpacing=J+"px",P.fontFamily=w,P.fontSize=R+"px",P.lineHeight=j+"px",P.textAlign="left",P.textDecoration="none"}const S=" .,:;i1tfLCG08@".split(""),y=" CGO08@".split(""),w="courier new, monospace",C=e.domElement,N=document.createElement("canvas");if(!N.getContext)return;const g=N.getContext("2d");if(!g.getImageData)return;let L=o?y:S;t&&(L=t);const R=2/r*n,j=2/r*n;let J=0;if(c=="low")switch(n){case 1:J=-1;break;case 2:case 3:J=-2.1;break;case 4:J=-3.1;break;case 5:J=-4.15;break}if(c=="medium")switch(n){case 1:J=0;break;case 2:J=-1;break;case 3:J=-1.04;break;case 4:case 5:J=-2.1;break}if(c=="high")switch(n){case 1:case 2:J=0;break;case 3:case 4:case 5:J=-1;break}function O(P){g.clearRect(0,0,f,d),g.drawImage(C,0,0,f,d);const F=g.getImageData(0,0,f,d).data;let Y="";for(let K=0;K<d;K+=2){for(let X=0;X<f;X++){const ee=(K*f+X)*4,Z=F[ee],H=F[ee+1],k=F[ee+2],Q=F[ee+3];let te,ce;ce=(.3*Z+.59*H+.11*k)/255,Q==0&&(ce=1),te=Math.floor((1-ce)*(L.length-1)),l&&(te=L.length-te-1);let G=L[te];(G===void 0||G==" ")&&(G="&nbsp;"),o?Y+="<span style='color:rgb("+Z+","+H+","+k+");"+(h?"background-color:rgb("+Z+","+H+","+k+");":"")+(s?"opacity:"+Q/255+";":"")+"'>"+G+"</span>":Y+=G}Y+="<br/>"}P.innerHTML=`<tr><td style="display:block;width:${p}px;height:${u}px;overflow:hidden">${Y}</td></tr>`}}}const tp={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class kn{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ip=new Ps(-1,1,1,-1,0,1),Bn=new Nt;Bn.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3));Bn.setAttribute("uv",new Ct([0,2,0,0,2,0],2));class rp{constructor(e){this._mesh=new It(Bn,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ip)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class np extends kn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new jt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new rp(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class cs extends kn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),n=e.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let o,s;this.inverse?(o=0,s=1):(o=1,s=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),n.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),n.buffers.stencil.setClear(s),n.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(r.EQUAL,1,4294967295),n.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),n.buffers.stencil.setLocked(!0)}}class ap extends kn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sp{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Se);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new $t(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new np(tp),this.clock=new ks}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,n=this.passes.length;r<n;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const s=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}cs!==void 0&&(o instanceof cs?i=!0:o instanceof ap&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new ks;const Rt=new It,rr=new Hd;rr.background=new Oe(0,0,0);const Bs=new Fs(16777215,1);Bs.position.set(100,100,400);rr.add(Bs);const Gs=new Fs(16777215,.5);Gs.position.set(-500,100,-400);rr.add(Gs);const op=new Qd,Gn=new Vd;Gn.flatShading=!0;Gn.side=Ur;const Nr={width:window.innerWidth,height:window.innerHeight},$i=new mt(45,Nr.width/Nr.height,.1,2e3),Fr=new Os;new sp(Fr);Fr.setPixelRatio(window.devicePixelRatio);Fr.setSize(window.innerWidth,window.innerHeight);let Kt,lp=" .:-+*=%@#$!";const cp={amount:.205};let hp="black",up="white";function dp(){Kt=new ep(Fr,lp,{invert:!0,resolution:cp.amount,scale:0}),Kt.setSize(Nr.width,Nr.height),Kt.domElement.style.color=up,Kt.domElement.style.backgroundColor=hp}dp();document.getElementById("bg").appendChild(Kt.domElement);var pp=Kt.domElement;pp.id="effectID";op.load(toLoad,function(a){Rt.material=Gn,Rt.geometry=a,Rt.geometry.center(),Rt.rotation.x=-90*Math.PI/180,Rt.geometry.computeBoundingBox();var e=Rt.geometry.boundingBox;Rt.position.y=(e.max.z-e.min.z)/7,$i.position.x=e.max.x*3,$i.position.y=e.max.y,$i.position.z=e.max.z*3,rr.add(Rt),new $d($i,Kt.domElement);function t(){document.body.getBoundingClientRect().top,Rt.rotation.z+=.05}document.body.onscroll=t,t();function i(){requestAnimationFrame(i),Rt.rotation.z+=.002,Kt.render(rr,$i)}i()});
