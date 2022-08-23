"use strict";(self["webpackChunkwinktool"]=self["webpackChunkwinktool"]||[]).push([[794],{794:function(e,r,n){var t=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,i=Math.ceil,o=Math.floor,s="[BigNumber Error] ",u=s+"Number primitive has more than 15 significant digits: ",f=1e14,l=14,c=9007199254740991,a=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],h=1e7,g=1e9;function p(e){var r,n,y,E=k.prototype={constructor:k,toString:null,valueOf:null},A=new k(1),S=20,R=4,_=-7,D=21,P=-1e7,B=1e7,L=!1,U=1,x=0,C={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:" ",suffix:""},I="0123456789abcdefghijklmnopqrstuvwxyz",T=!0;function k(e,r){var i,s,f,a,h,g,p,w,m=this;if(!(m instanceof k))return new k(e,r);if(null==r){if(e&&!0===e._isBigNumber)return m.s=e.s,void(!e.c||e.e>B?m.c=m.e=null:e.e<P?m.c=[m.e=0]:(m.e=e.e,m.c=e.c.slice()));if((g="number"==typeof e)&&0*e==0){if(m.s=1/e<0?(e=-e,-1):1,e===~~e){for(a=0,h=e;h>=10;h/=10,a++);return void(a>B?m.c=m.e=null:(m.e=a,m.c=[e]))}w=String(e)}else{if(!t.test(w=String(e)))return y(m,w,g);m.s=45==w.charCodeAt(0)?(w=w.slice(1),-1):1}(a=w.indexOf("."))>-1&&(w=w.replace(".","")),(h=w.search(/e/i))>0?(a<0&&(a=h),a+=+w.slice(h+1),w=w.substring(0,h)):a<0&&(a=w.length)}else{if(v(r,2,I.length,"Base"),10==r&&T)return m=new k(e),j(m,S+m.e+1,R);if(w=String(e),g="number"==typeof e){if(0*e!=0)return y(m,w,g,r);if(m.s=1/e<0?(w=w.slice(1),-1):1,k.DEBUG&&w.replace(/^0\.0*|\./,"").length>15)throw Error(u+e)}else m.s=45===w.charCodeAt(0)?(w=w.slice(1),-1):1;for(i=I.slice(0,r),a=h=0,p=w.length;h<p;h++)if(i.indexOf(s=w.charAt(h))<0){if("."==s){if(h>a){a=p;continue}}else if(!f&&(w==w.toUpperCase()&&(w=w.toLowerCase())||w==w.toLowerCase()&&(w=w.toUpperCase()))){f=!0,h=-1,a=0;continue}return y(m,String(e),g,r)}g=!1,w=n(w,r,10,m.s),(a=w.indexOf("."))>-1?w=w.replace(".",""):a=w.length}for(h=0;48===w.charCodeAt(h);h++);for(p=w.length;48===w.charCodeAt(--p););if(w=w.slice(h,++p)){if(p-=h,g&&k.DEBUG&&p>15&&(e>c||e!==o(e)))throw Error(u+m.s*e);if((a=a-h-1)>B)m.c=m.e=null;else if(a<P)m.c=[m.e=0];else{if(m.e=a,m.c=[],h=(a+1)%l,a<0&&(h+=l),h<p){for(h&&m.c.push(+w.slice(0,h)),p-=l;h<p;)m.c.push(+w.slice(h,h+=l));h=l-(w=w.slice(h)).length}else h-=p;for(;h--;w+="0");m.c.push(+w)}}else m.c=[m.e=0]}function M(e,r,n,t){var i,o,s,u,f;if(null==n?n=R:v(n,0,8),!e.c)return e.toString();if(i=e.c[0],s=e.e,null==r)f=m(e.c),f=1==t||2==t&&(s<=_||s>=D)?O(f,s):b(f,s,"0");else if(e=j(new k(e),r,n),o=e.e,f=m(e.c),u=f.length,1==t||2==t&&(r<=o||o<=_)){for(;u<r;f+="0",u++);f=O(f,o)}else if(r-=s,f=b(f,o,"0"),o+1>u){if(--r>0)for(f+=".";r--;f+="0");}else if(r+=o-u,r>0)for(o+1==u&&(f+=".");r--;f+="0");return e.s<0&&i?"-"+f:f}function G(e,r){for(var n,t=1,i=new k(e[0]);t<e.length;t++){if(n=new k(e[t]),!n.s){i=n;break}r.call(i,n)&&(i=n)}return i}function F(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*l-1)>B?e.c=e.e=null:n<P?e.c=[e.e=0]:(e.e=n,e.c=r),e}function j(e,r,n,t){var s,u,c,h,g,p,w,m=e.c,d=a;if(m){e:{for(s=1,h=m[0];h>=10;h/=10,s++);if(u=r-s,u<0)u+=l,c=r,g=m[p=0],w=g/d[s-c-1]%10|0;else if(p=i((u+1)/l),p>=m.length){if(!t)break e;for(;m.length<=p;m.push(0));g=w=0,s=1,u%=l,c=u-l+1}else{for(g=h=m[p],s=1;h>=10;h/=10,s++);u%=l,c=u-l+s,w=c<0?0:g/d[s-c-1]%10|0}if(t=t||r<0||null!=m[p+1]||(c<0?g:g%d[s-c-1]),t=n<4?(w||t)&&(0==n||n==(e.s<0?3:2)):w>5||5==w&&(4==n||t||6==n&&(u>0?c>0?g/d[s-c]:0:m[p-1])%10&1||n==(e.s<0?8:7)),r<1||!m[0])return m.length=0,t?(r-=e.e+1,m[0]=d[(l-r%l)%l],e.e=-r||0):m[0]=e.e=0,e;if(0==u?(m.length=p,h=1,p--):(m.length=p+1,h=d[l-u],m[p]=c>0?o(g/d[s-c]%d[c])*h:0),t)for(;;){if(0==p){for(u=1,c=m[0];c>=10;c/=10,u++);for(c=m[0]+=h,h=1;c>=10;c/=10,h++);u!=h&&(e.e++,m[0]==f&&(m[0]=1));break}if(m[p]+=h,m[p]!=f)break;m[p--]=0,h=1}for(u=m.length;0===m[--u];m.pop());}e.e>B?e.c=e.e=null:e.e<P&&(e.c=[e.e=0])}return e}function q(e){var r,n=e.e;return null===n?e.toString():(r=m(e.c),r=n<=_||n>=D?O(r,n):b(r,n,"0"),e.s<0?"-"+r:r)}return k.clone=p,k.ROUND_UP=0,k.ROUND_DOWN=1,k.ROUND_CEIL=2,k.ROUND_FLOOR=3,k.ROUND_HALF_UP=4,k.ROUND_HALF_DOWN=5,k.ROUND_HALF_EVEN=6,k.ROUND_HALF_CEIL=7,k.ROUND_HALF_FLOOR=8,k.EUCLID=9,k.config=k.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(s+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(n=e[r],v(n,0,g,r),S=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(n=e[r],v(n,0,8,r),R=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&(n=e[r],n&&n.pop?(v(n[0],-g,0,r),v(n[1],0,g,r),_=n[0],D=n[1]):(v(n,-g,g,r),_=-(D=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if(n=e[r],n&&n.pop)v(n[0],-g,-1,r),v(n[1],1,g,r),P=n[0],B=n[1];else{if(v(n,-g,g,r),!n)throw Error(s+r+" cannot be zero: "+n);P=-(B=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if(n=e[r],n!==!!n)throw Error(s+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw L=!n,Error(s+"crypto unavailable");L=n}else L=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(n=e[r],v(n,0,9,r),U=n),e.hasOwnProperty(r="POW_PRECISION")&&(n=e[r],v(n,0,g,r),x=n),e.hasOwnProperty(r="FORMAT")){if(n=e[r],"object"!=typeof n)throw Error(s+r+" not an object: "+n);C=n}if(e.hasOwnProperty(r="ALPHABET")){if(n=e[r],"string"!=typeof n||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(s+r+" invalid: "+n);T="0123456789"==n.slice(0,10),I=n}}return{DECIMAL_PLACES:S,ROUNDING_MODE:R,EXPONENTIAL_AT:[_,D],RANGE:[P,B],CRYPTO:L,MODULO_MODE:U,POW_PRECISION:x,FORMAT:C,ALPHABET:I}},k.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!k.DEBUG)return!0;var r,n,t=e.c,i=e.e,u=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===u||-1===u)&&i>=-g&&i<=g&&i===o(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if(r=(i+1)%l,r<1&&(r+=l),String(t[0]).length==r){for(r=0;r<t.length;r++)if(n=t[r],n<0||n>=f||n!==o(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===u||1===u||-1===u))return!0;throw Error(s+"Invalid BigNumber: "+e)},k.maximum=k.max=function(){return G(arguments,E.lt)},k.minimum=k.min=function(){return G(arguments,E.gt)},k.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return o(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,u,f,c,h=0,p=[],w=new k(A);if(null==e?e=S:v(e,0,g),f=i(e/l),L)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(f*=2));h<f;)c=131072*n[h]+(n[h+1]>>>11),c>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[h]=t[0],n[h+1]=t[1]):(p.push(c%1e14),h+=2);h=f/2}else{if(!crypto.randomBytes)throw L=!1,Error(s+"crypto unavailable");for(n=crypto.randomBytes(f*=7);h<f;)c=281474976710656*(31&n[h])+1099511627776*n[h+1]+4294967296*n[h+2]+16777216*n[h+3]+(n[h+4]<<16)+(n[h+5]<<8)+n[h+6],c>=9e15?crypto.randomBytes(7).copy(n,h):(p.push(c%1e14),h+=7);h=f/7}if(!L)for(;h<f;)c=r(),c<9e15&&(p[h++]=c%1e14);for(f=p[--h],e%=l,f&&e&&(c=a[l-e],p[h]=o(f/c)*c);0===p[h];p.pop(),h--);if(h<0)p=[u=0];else{for(u=-1;0===p[0];p.splice(0,1),u-=l);for(h=1,c=p[0];c>=10;c/=10,h++);h<l&&(u-=l-h)}return w.e=u,w.c=p,w}}(),k.sum=function(){for(var e=1,r=arguments,n=new k(r[0]);e<r.length;)n=n.plus(r[e++]);return n},n=function(){var e="0123456789";function n(e,r,n,t){for(var i,o,s=[0],u=0,f=e.length;u<f;){for(o=s.length;o--;s[o]*=r);for(s[0]+=t.indexOf(e.charAt(u++)),i=0;i<s.length;i++)s[i]>n-1&&(null==s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/n|0,s[i]%=n)}return s.reverse()}return function(t,i,o,s,u){var f,l,c,a,h,g,p,w,d=t.indexOf("."),v=S,N=R;for(d>=0&&(a=x,x=0,t=t.replace(".",""),w=new k(i),g=w.pow(t.length-d),x=a,w.c=n(b(m(g.c),g.e,"0"),10,o,e),w.e=w.c.length),p=n(t,i,o,u?(f=I,e):(f=e,I)),c=a=p.length;0==p[--a];p.pop());if(!p[0])return f.charAt(0);if(d<0?--c:(g.c=p,g.e=c,g.s=s,g=r(g,w,v,N,o),p=g.c,h=g.r,c=g.e),l=c+v+1,d=p[l],a=o/2,h=h||l<0||null!=p[l+1],h=N<4?(null!=d||h)&&(0==N||N==(g.s<0?3:2)):d>a||d==a&&(4==N||h||6==N&&1&p[l-1]||N==(g.s<0?8:7)),l<1||!p[0])t=h?b(f.charAt(1),-v,f.charAt(0)):f.charAt(0);else{if(p.length=l,h)for(--o;++p[--l]>o;)p[l]=0,l||(++c,p=[1].concat(p));for(a=p.length;!p[--a];);for(d=0,t="";d<=a;t+=f.charAt(p[d++]));t=b(t,c,f.charAt(0))}return t}}(),r=function(){function e(e,r,n){var t,i,o,s,u=0,f=e.length,l=r%h,c=r/h|0;for(e=e.slice();f--;)o=e[f]%h,s=e[f]/h|0,t=c*o+s*l,i=l*o+t%h*h+u,u=(i/n|0)+(t/h|0)+c*s,e[f]=i%n;return u&&(e=[u].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,s,u,c){var a,h,g,p,m,d,v,N,O,b,y,E,A,S,R,_,D,P=t.s==i.s?1:-1,B=t.c,L=i.c;if(!B||!B[0]||!L||!L[0])return new k(t.s&&i.s&&(B?!L||B[0]!=L[0]:L)?B&&0==B[0]||!L?0*P:P/0:NaN);for(N=new k(P),O=N.c=[],h=t.e-i.e,P=s+h+1,c||(c=f,h=w(t.e/l)-w(i.e/l),P=P/l|0),g=0;L[g]==(B[g]||0);g++);if(L[g]>(B[g]||0)&&h--,P<0)O.push(1),p=!0;else{for(S=B.length,_=L.length,g=0,P+=2,m=o(c/(L[0]+1)),m>1&&(L=e(L,m,c),B=e(B,m,c),_=L.length,S=B.length),A=_,b=B.slice(0,_),y=b.length;y<_;b[y++]=0);D=L.slice(),D=[0].concat(D),R=L[0],L[1]>=c/2&&R++;do{if(m=0,a=r(L,b,_,y),a<0){if(E=b[0],_!=y&&(E=E*c+(b[1]||0)),m=o(E/R),m>1){m>=c&&(m=c-1),d=e(L,m,c),v=d.length,y=b.length;while(1==r(d,b,v,y))m--,n(d,_<v?D:L,v,c),v=d.length,a=1}else 0==m&&(a=m=1),d=L.slice(),v=d.length;if(v<y&&(d=[0].concat(d)),n(b,d,y,c),y=b.length,-1==a)while(r(L,b,_,y)<1)m++,n(b,_<y?D:L,y,c),y=b.length}else 0===a&&(m++,b=[0]);O[g++]=m,b[0]?b[y++]=B[A]||0:(b=[B[A]],y=1)}while((A++<S||null!=b[0])&&P--);p=null!=b[0],O[0]||O.splice(0,1)}if(c==f){for(g=1,P=O[0];P>=10;P/=10,g++);j(N,s+(N.e=g+h*l-1)+1,u,p)}else N.e=h,N.r=+p;return N}}(),y=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,u,f,l){var c,a=f?u:u.replace(i,"");if(t.test(a))o.s=isNaN(a)?null:a<0?-1:1;else{if(!f&&(a=a.replace(e,(function(e,r,n){return c="x"==(n=n.toLowerCase())?16:"b"==n?2:8,l&&l!=c?e:r})),l&&(c=l,a=a.replace(r,"$1").replace(n,"0.$1")),u!=a))return new k(a,c);if(k.DEBUG)throw Error(s+"Not a"+(l?" base "+l:"")+" number: "+u);o.s=null}o.c=o.e=null}}(),E.absoluteValue=E.abs=function(){var e=new k(this);return e.s<0&&(e.s=1),e},E.comparedTo=function(e,r){return d(this,new k(e,r))},E.decimalPlaces=E.dp=function(e,r){var n,t,i,o=this;if(null!=e)return v(e,0,g),null==r?r=R:v(r,0,8),j(new k(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-w(this.e/l))*l,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},E.dividedBy=E.div=function(e,n){return r(this,new k(e,n),S,R)},E.dividedToIntegerBy=E.idiv=function(e,n){return r(this,new k(e,n),0,1)},E.exponentiatedBy=E.pow=function(e,r){var n,t,u,f,c,a,h,g,p,w=this;if(e=new k(e),e.c&&!e.isInteger())throw Error(s+"Exponent not an integer: "+q(e));if(null!=r&&(r=new k(r)),a=e.e>14,!w.c||!w.c[0]||1==w.c[0]&&!w.e&&1==w.c.length||!e.c||!e.c[0])return p=new k(Math.pow(+q(w),a?2-N(e):+q(e))),r?p.mod(r):p;if(h=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new k(NaN);t=!h&&w.isInteger()&&r.isInteger(),t&&(w=w.mod(r))}else{if(e.e>9&&(w.e>0||w.e<-1||(0==w.e?w.c[0]>1||a&&w.c[1]>=24e7:w.c[0]<8e13||a&&w.c[0]<=9999975e7)))return f=w.s<0&&N(e)?-0:0,w.e>-1&&(f=1/f),new k(h?1/f:f);x&&(f=i(x/l+2))}for(a?(n=new k(.5),h&&(e.s=1),g=N(e)):(u=Math.abs(+q(e)),g=u%2),p=new k(A);;){if(g){if(p=p.times(w),!p.c)break;f?p.c.length>f&&(p.c.length=f):t&&(p=p.mod(r))}if(u){if(u=o(u/2),0===u)break;g=u%2}else if(e=e.times(n),j(e,e.e+1,1),e.e>14)g=N(e);else{if(u=+q(e),0===u)break;g=u%2}w=w.times(w),f?w.c&&w.c.length>f&&(w.c.length=f):t&&(w=w.mod(r))}return t?p:(h&&(p=A.div(p)),r?p.mod(r):f?j(p,x,R,c):p)},E.integerValue=function(e){var r=new k(this);return null==e?e=R:v(e,0,8),j(r,r.e+1,e)},E.isEqualTo=E.eq=function(e,r){return 0===d(this,new k(e,r))},E.isFinite=function(){return!!this.c},E.isGreaterThan=E.gt=function(e,r){return d(this,new k(e,r))>0},E.isGreaterThanOrEqualTo=E.gte=function(e,r){return 1===(r=d(this,new k(e,r)))||0===r},E.isInteger=function(){return!!this.c&&w(this.e/l)>this.c.length-2},E.isLessThan=E.lt=function(e,r){return d(this,new k(e,r))<0},E.isLessThanOrEqualTo=E.lte=function(e,r){return-1===(r=d(this,new k(e,r)))||0===r},E.isNaN=function(){return!this.s},E.isNegative=function(){return this.s<0},E.isPositive=function(){return this.s>0},E.isZero=function(){return!!this.c&&0==this.c[0]},E.minus=function(e,r){var n,t,i,o,s=this,u=s.s;if(e=new k(e,r),r=e.s,!u||!r)return new k(NaN);if(u!=r)return e.s=-r,s.plus(e);var c=s.e/l,a=e.e/l,h=s.c,g=e.c;if(!c||!a){if(!h||!g)return h?(e.s=-r,e):new k(g?s:NaN);if(!h[0]||!g[0])return g[0]?(e.s=-r,e):new k(h[0]?s:3==R?-0:0)}if(c=w(c),a=w(a),h=h.slice(),u=c-a){for((o=u<0)?(u=-u,i=h):(a=c,i=g),i.reverse(),r=u;r--;i.push(0));i.reverse()}else for(t=(o=(u=h.length)<(r=g.length))?u:r,u=r=0;r<t;r++)if(h[r]!=g[r]){o=h[r]<g[r];break}if(o&&(i=h,h=g,g=i,e.s=-e.s),r=(t=g.length)-(n=h.length),r>0)for(;r--;h[n++]=0);for(r=f-1;t>u;){if(h[--t]<g[t]){for(n=t;n&&!h[--n];h[n]=r);--h[n],h[t]+=f}h[t]-=g[t]}for(;0==h[0];h.splice(0,1),--a);return h[0]?F(e,h,a):(e.s=3==R?-1:1,e.c=[e.e=0],e)},E.modulo=E.mod=function(e,n){var t,i,o=this;return e=new k(e,n),!o.c||!e.s||e.c&&!e.c[0]?new k(NaN):!e.c||o.c&&!o.c[0]?new k(o):(9==U?(i=e.s,e.s=1,t=r(o,e,0,3),e.s=i,t.s*=i):t=r(o,e,0,U),e=o.minus(t.times(e)),e.c[0]||1!=U||(e.s=o.s),e)},E.multipliedBy=E.times=function(e,r){var n,t,i,o,s,u,c,a,g,p,m,d,v,N,O,b=this,y=b.c,E=(e=new k(e,r)).c;if(!y||!E||!y[0]||!E[0])return!b.s||!e.s||y&&!y[0]&&!E||E&&!E[0]&&!y?e.c=e.e=e.s=null:(e.s*=b.s,y&&E?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=w(b.e/l)+w(e.e/l),e.s*=b.s,c=y.length,p=E.length,c<p&&(v=y,y=E,E=v,i=c,c=p,p=i),i=c+p,v=[];i--;v.push(0));for(N=f,O=h,i=p;--i>=0;){for(n=0,m=E[i]%O,d=E[i]/O|0,s=c,o=i+s;o>i;)a=y[--s]%O,g=y[s]/O|0,u=d*a+g*m,a=m*a+u%O*O+v[o]+n,n=(a/N|0)+(u/O|0)+d*g,v[o--]=a%N;v[o]=n}return n?++t:v.splice(0,1),F(e,v,t)},E.negated=function(){var e=new k(this);return e.s=-e.s||null,e},E.plus=function(e,r){var n,t=this,i=t.s;if(e=new k(e,r),r=e.s,!i||!r)return new k(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/l,s=e.e/l,u=t.c,c=e.c;if(!o||!s){if(!u||!c)return new k(i/0);if(!u[0]||!c[0])return c[0]?e:new k(u[0]?t:0*i)}if(o=w(o),s=w(s),u=u.slice(),i=o-s){for(i>0?(s=o,n=c):(i=-i,n=u),n.reverse();i--;n.push(0));n.reverse()}for(i=u.length,r=c.length,i-r<0&&(n=c,c=u,u=n,r=i),i=0;r;)i=(u[--r]=u[r]+c[r]+i)/f|0,u[r]=f===u[r]?0:u[r]%f;return i&&(u=[i].concat(u),++s),F(e,u,s)},E.precision=E.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return v(e,1,g),null==r?r=R:v(r,0,8),j(new k(o),e,r);if(!(n=o.c))return null;if(i=n.length-1,t=i*l+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},E.shiftedBy=function(e){return v(e,-c,c),this.times("1e"+e)},E.squareRoot=E.sqrt=function(){var e,n,t,i,o,s=this,u=s.c,f=s.s,l=s.e,c=S+4,a=new k("0.5");if(1!==f||!u||!u[0])return new k(!f||f<0&&(!u||u[0])?NaN:u?s:1/0);if(f=Math.sqrt(+q(s)),0==f||f==1/0?(n=m(u),(n.length+l)%2==0&&(n+="0"),f=Math.sqrt(+n),l=w((l+1)/2)-(l<0||l%2),f==1/0?n="5e"+l:(n=f.toExponential(),n=n.slice(0,n.indexOf("e")+1)+l),t=new k(n)):t=new k(f+""),t.c[0])for(l=t.e,f=l+c,f<3&&(f=0);;)if(o=t,t=a.times(o.plus(r(s,o,c,1))),m(o.c).slice(0,f)===(n=m(t.c)).slice(0,f)){if(t.e<l&&--f,n=n.slice(f-3,f+1),"9999"!=n&&(i||"4999"!=n)){+n&&(+n.slice(1)||"5"!=n.charAt(0))||(j(t,t.e+S+2,1),e=!t.times(t).eq(s));break}if(!i&&(j(o,o.e+S+2,0),o.times(o).eq(s))){t=o;break}c+=4,f+=4,i=1}return j(t,t.e+S+1,R,e)},E.toExponential=function(e,r){return null!=e&&(v(e,0,g),e++),M(this,e,r,1)},E.toFixed=function(e,r){return null!=e&&(v(e,0,g),e=e+this.e+1),M(this,e,r)},E.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=C;else if("object"!=typeof n)throw Error(s+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,u=t.split("."),f=+n.groupSize,l=+n.secondaryGroupSize,c=n.groupSeparator||"",a=u[0],h=u[1],g=i.s<0,p=g?a.slice(1):a,w=p.length;if(l&&(o=f,f=l,l=o,w-=o),f>0&&w>0){for(o=w%f||f,a=p.substr(0,o);o<w;o+=f)a+=c+p.substr(o,f);l>0&&(a+=c+p.slice(o)),g&&(a="-"+a)}t=h?a+(n.decimalSeparator||"")+((l=+n.fractionGroupSize)?h.replace(new RegExp("\\d{"+l+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):h):a}return(n.prefix||"")+t+(n.suffix||"")},E.toFraction=function(e){var n,t,i,o,u,f,c,h,g,p,w,d,v=this,N=v.c;if(null!=e&&(c=new k(e),!c.isInteger()&&(c.c||1!==c.s)||c.lt(A)))throw Error(s+"Argument "+(c.isInteger()?"out of range: ":"not an integer: ")+q(c));if(!N)return new k(v);for(n=new k(A),g=t=new k(A),i=h=new k(A),d=m(N),u=n.e=d.length-v.e-1,n.c[0]=a[(f=u%l)<0?l+f:f],e=!e||c.comparedTo(n)>0?u>0?n:g:c,f=B,B=1/0,c=new k(d),h.c[0]=0;;){if(p=r(c,n,0,1),o=t.plus(p.times(i)),1==o.comparedTo(e))break;t=i,i=o,g=h.plus(p.times(o=g)),h=o,n=c.minus(p.times(o=n)),c=o}return o=r(e.minus(t),i,0,1),h=h.plus(o.times(g)),t=t.plus(o.times(i)),h.s=g.s=v.s,u*=2,w=r(g,i,u,R).minus(v).abs().comparedTo(r(h,t,u,R).minus(v).abs())<1?[g,i]:[h,t],B=f,w},E.toNumber=function(){return+q(this)},E.toPrecision=function(e,r){return null!=e&&v(e,1,g),M(this,e,r,2)},E.toString=function(e){var r,t=this,i=t.s,o=t.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=_||o>=D?O(m(t.c),o):b(m(t.c),o,"0"):10===e&&T?(t=j(new k(t),S+o+1,R),r=b(m(t.c),t.e,"0")):(v(e,2,I.length,"Base"),r=n(b(m(t.c),o,"0"),10,e,i,!0)),i<0&&t.c[0]&&(r="-"+r)),r},E.valueOf=E.toJSON=function(){return q(this)},E._isBigNumber=!0,E[Symbol.toStringTag]="BigNumber",E[Symbol.for("nodejs.util.inspect.custom")]=E.valueOf,null!=e&&k.set(e),k}function w(e){var r=0|e;return e>0||e===r?r:r-1}function m(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=l-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function d(e,r){var n,t,i=e.c,o=r.c,s=e.s,u=r.s,f=e.e,l=r.e;if(!s||!u)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-u:s;if(s!=u)return s;if(n=s<0,t=f==l,!i||!o)return t?0:!i^n?1:-1;if(!t)return f>l^n?1:-1;for(u=(f=i.length)<(l=o.length)?f:l,s=0;s<u;s++)if(i[s]!=o[s])return i[s]>o[s]^n?1:-1;return f==l?0:f>l^n?1:-1}function v(e,r,n,t){if(e<r||e>n||e!==o(e))throw Error(s+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function N(e){var r=e.c.length-1;return w(e.e/l)==r&&e.c[r]%2!=0}function O(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function b(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(t=e.length,++r>t){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}var y=p();r["Z"]=y}}]);