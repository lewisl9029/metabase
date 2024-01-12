var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.set.js");require("./clojure.walk.js");require("./malli.core.js");require("./medley.core.js");require("./metabase.lib.common.js");require("./metabase.lib.equality.js");require("./metabase.lib.expression.js");require("./metabase.lib.join.js");require("./metabase.lib.join.util.js");require("./metabase.lib.metadata.calculation.js");require("./metabase.lib.options.js");require("./metabase.lib.ref.js");require("./metabase.lib.util.js");require("./metabase.mbql.util.match.js");require("./metabase.types.js");require("./metabase.util.js");require("./metabase.util.malli.js");
'use strict';var Q4,fsa,gsa,hsa,S4,U4,V4,W4,isa,jsa,Z4,X4,Y4,b5,c5,ksa,lsa,d5,msa,nsa,osa,psa,e5,qsa,rsa,ssa,f5,tsa,usa,g5,vsa,wsa,xsa,ysa;Q4=function(a,b){if(b=$CLJS.y(b)){var c=$CLJS.y(b);b=$CLJS.z(c);c=$CLJS.B(c);return $CLJS.y(c)?(c=Q4($CLJS.J.g(a,b),c),$CLJS.ud(c)?$CLJS.ak.g(a,b):$CLJS.T.j(a,b,c)):$CLJS.ak.g(a,b)}return a};
fsa=function(a,b,c,d){return function t(f,k,l,m){var u=$CLJS.y(k);k=$CLJS.z(u);u=$CLJS.B(u);var v=$CLJS.Jl(f,k);return $CLJS.n(v)?u?$CLJS.T.j(f,k,t($CLJS.Gb(v),u,l,m)):$CLJS.T.j(f,k,$CLJS.P.j(l,$CLJS.Gb(v),m)):f}(a,b,c,d)};gsa=function(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return fsa(arguments[0],arguments[1],arguments[2],3<b.length?new $CLJS.w(b.slice(3),0,null):null)};$CLJS.R4=function(a){return $CLJS.AD.h($CLJS.HD(a))};
hsa=function(a,b,c,d){var e=$CLJS.E.g($CLJS.XO,$CLJS.z(b))?$CLJS.xV(d,function(){var f=$CLJS.OV.h(d);return $CLJS.n(f)?f:$CLJS.wV(c)}()):d;return gsa(a,b,function(f){return $CLJS.Ff(function(){return function m(l){return new $CLJS.pe(null,function(){for(;;){var t=$CLJS.y(l);if(t){if($CLJS.Bd(t)){var u=$CLJS.mc(t),v=$CLJS.D(u),x=$CLJS.se(v);a:for(var A=0;;)if(A<v){var C=$CLJS.ld(u,A);C=$CLJS.E.g($CLJS.R4(C),$CLJS.R4(c))?e:C;x.add(C);A+=1}else{u=!0;break a}return u?$CLJS.ve($CLJS.xe(x),m($CLJS.nc(t))):
$CLJS.ve($CLJS.xe(x),null)}x=$CLJS.z(t);return $CLJS.ge($CLJS.E.g($CLJS.R4(x),$CLJS.R4(c))?e:x,m($CLJS.Mc(t)))}return null}},null,null)}(f)}())})};
S4=function(a,b,c,d){var e=$CLJS.wz(a,b);if($CLJS.n(e)){var f=$CLJS.R4(c),k=new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.z(b),$CLJS.jd(b)],null);c=$CLJS.I(k,0,null);k=$CLJS.I(k,1,null);e=$CLJS.gg.j($CLJS.Ef,$CLJS.ik.h($CLJS.hk.g($CLJS.eh([f]),$CLJS.R4)),e);e=$CLJS.E.g(b,new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.TD],null))&&$CLJS.Te(function(l){return $CLJS.GX(l,$CLJS.kA)},e)?null:e;if($CLJS.y(e))return $CLJS.UK(a,b,e);if($CLJS.E.g(new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.BM,$CLJS.rK],null),new $CLJS.Q(null,2,5,$CLJS.R,
[c,k],null)))throw $CLJS.ji($CLJS.LD("Cannot remove the final join condition"),new $CLJS.h(null,5,[$CLJS.xx,$CLJS.IV,$CLJS.rK,$CLJS.wz(a,b),$CLJS.JV,$CLJS.wz(a,$CLJS.td(b)),$CLJS.CK,d,$CLJS.KV,a],null));return $CLJS.E.g(new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.BM,$CLJS.TD],null),new $CLJS.Q(null,2,5,$CLJS.R,[c,k],null))?$CLJS.vW.v(a,$CLJS.td(b),$CLJS.ak,k):Q4(a,b)}return a};
$CLJS.T4=function(a,b){a=$CLJS.PV.l(a,b,$CLJS.ak,$CLJS.H([$CLJS.TD]));return $CLJS.gg.j($CLJS.Ef,$CLJS.ik.h($CLJS.hk.g(new $CLJS.ch(null,new $CLJS.h(null,2,[$CLJS.HY,null,$CLJS.GY,null],null),null),$CLJS.IJ)),$CLJS.N_.j(a,b,$CLJS.DV(a,b)))};
U4=function(a,b,c,d){var e=$CLJS.t1.g($CLJS.D(c),$CLJS.D(d));return $CLJS.n(e)?(c=$CLJS.qG(function(f){return $CLJS.x1.v(a,b,f,d)},c),(e=!$CLJS.Jd(c,null))?(e=$CLJS.t1.g($CLJS.D(c),$CLJS.D(d)),$CLJS.n(e)?$CLJS.Te(function(f){return $CLJS.t1.g($CLJS.D(f),1)},$CLJS.ah(c)):e):e):e};
V4=function(a,b){var c=$CLJS.r3.g(a,b),d=$CLJS.nh(0,$CLJS.D(c));return $CLJS.jf.l(new $CLJS.Q(null,6,5,$CLJS.R,[new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.LQ],null),new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.$E],null),new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.gV],null),new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.TD],null),new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.aF],null),new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.XO],null)],null),function(){return function k(f){return new $CLJS.pe(null,function(){for(var l=f;;)if(l=$CLJS.y(l)){if($CLJS.Bd(l)){var m=
$CLJS.mc(l),t=$CLJS.D(m),u=$CLJS.se(t);a:for(var v=0;;)if(v<t){var x=$CLJS.ld(m,v),A=$CLJS.F(c,x);$CLJS.TD.h(A)instanceof $CLJS.M||u.add(new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.BM,x,$CLJS.TD],null));v+=1}else{m=!0;break a}return m?$CLJS.ve($CLJS.xe(u),k($CLJS.nc(l))):$CLJS.ve($CLJS.xe(u),null)}u=$CLJS.z(l);m=$CLJS.F(c,u);if($CLJS.TD.h(m)instanceof $CLJS.M)l=$CLJS.Mc(l);else return $CLJS.ge(new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.BM,u,$CLJS.TD],null),k($CLJS.Mc(l)))}else return null},null,null)}(d)}(),$CLJS.H([function(){return function k(f){return new $CLJS.pe(null,
function(){for(;;){var l=$CLJS.y(f);if(l){if($CLJS.Bd(l)){var m=$CLJS.mc(l),t=$CLJS.D(m),u=$CLJS.se(t);a:for(var v=0;;)if(v<t){var x=$CLJS.ld(m,v);u.add(new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.BM,x,$CLJS.rK],null));v+=1}else{m=!0;break a}return m?$CLJS.ve($CLJS.xe(u),k($CLJS.nc(l))):$CLJS.ve($CLJS.xe(u),null)}u=$CLJS.z(l);return $CLJS.ge(new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.BM,u,$CLJS.rK],null),k($CLJS.Mc(l)))}return null}},null,null)}(d)}()]))};
W4=function(a,b,c){var d=$CLJS.I(c,0,null),e=$CLJS.I(c,1,null);e=$CLJS.O(e);var f=$CLJS.J.g(e,$CLJS.rF),k=$CLJS.J.g(e,$CLJS.rQ),l=$CLJS.I(c,2,null);return $CLJS.z($CLJS.rG(function(m){$CLJS.I(m,0,null);m=$CLJS.I(m,1,null);$CLJS.I(m,0,null);$CLJS.I(m,1,null);m=$CLJS.I(m,2,null);return $CLJS.E.g($CLJS.z(m),d)&&$CLJS.E.g($CLJS.rF.h($CLJS.id(m)),f)&&$CLJS.E.g($CLJS.rQ.h($CLJS.id(m)),k)&&$CLJS.E.g($CLJS.jd(m),l)},$CLJS.Gl($CLJS.zr,$CLJS.LQ.h($CLJS.DV(a,b)))))};
isa=function(a,b,c,d){c=W4(a,b,c);return $CLJS.n(c)?$CLJS.PV.l(a,b,$CLJS.vW,$CLJS.H([new $CLJS.Q(null,4,5,$CLJS.R,[$CLJS.LQ,c,2,1],null),$CLJS.hk.g(function(e){return $CLJS.L0($CLJS.cl,e)},$CLJS.zk),d])):a};jsa=function(a,b,c){c=W4(a,b,c);return $CLJS.n(c)?$CLJS.PV.l(a,b,S4,$CLJS.H([new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.LQ],null),$CLJS.wz($CLJS.DV(a,b),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.LQ,c],null)),b])):a};
Z4=function(a,b,c,d,e,f){var k=$CLJS.PV.l(a,b,f,$CLJS.H([d,e])),l=$CLJS.R4(e);return $CLJS.gk.g(a,k)?$CLJS.z($CLJS.y($CLJS.nf($CLJS.Ya,function(m,t){try{if($CLJS.Ad(t)&&1===$CLJS.D(t))try{var u=$CLJS.F(t,0);if($CLJS.je(u,$CLJS.XO))return new $CLJS.Q(null,1,5,$CLJS.R,[function(){var K=$CLJS.wV(e);K=X4.W?X4.W(k,b,c,$CLJS.kA,$CLJS.N,K):X4.call(null,k,b,c,$CLJS.kA,$CLJS.N,K);return Y4.v?Y4.v(K,b,c,l):Y4.call(null,K,b,c,l)}()],null);throw $CLJS.Z;}catch(K){if(K instanceof Error)if(m=K,m===$CLJS.Z)try{u=
$CLJS.F(t,0);if($CLJS.je(u,$CLJS.aF))return new $CLJS.Q(null,1,5,$CLJS.R,[function(){var S=X4.W?X4.W(k,b,c,$CLJS.aF,$CLJS.N,l):X4.call(null,k,b,c,$CLJS.aF,$CLJS.N,l);return Y4.v?Y4.v(S,b,c,l):Y4.call(null,S,b,c,l)}()],null);throw $CLJS.Z;}catch(S){if(S instanceof Error){var v=S;if(v===$CLJS.Z)throw $CLJS.Z;throw v;}throw S;}else throw m;else throw K;}else throw $CLJS.Z;}catch(K){if(K instanceof Error)if(m=K,m===$CLJS.Z)try{if($CLJS.Ad(t)&&1===$CLJS.D(t))try{var x=$CLJS.F(t,0);if($CLJS.je(x,$CLJS.$E))return new $CLJS.Q(null,
1,5,$CLJS.R,[Y4.v?Y4.v(k,b,c,l):Y4.call(null,k,b,c,l)],null);throw $CLJS.Z;}catch(S){if(S instanceof Error)if(v=S,v===$CLJS.Z)try{x=$CLJS.F(t,0);if($CLJS.je(x,$CLJS.TD))return new $CLJS.Q(null,1,5,$CLJS.R,[Y4.v?Y4.v(k,b,c,l):Y4.call(null,k,b,c,l)],null);throw $CLJS.Z;}catch(X){if(X instanceof Error){var A=X;if(A===$CLJS.Z)throw $CLJS.Z;throw A;}throw X;}else throw v;else throw S;}else throw $CLJS.Z;}catch(S){if(S instanceof Error)if(v=S,v===$CLJS.Z)try{if($CLJS.Ad(t)&&3===$CLJS.D(t))try{var C=$CLJS.F(t,
0);if($CLJS.je(C,$CLJS.BM))try{var G=$CLJS.F(t,2);if($CLJS.je(G,$CLJS.TD))return new $CLJS.Q(null,1,5,$CLJS.R,[Y4.v?Y4.v(k,b,c,l):Y4.call(null,k,b,c,l)],null);throw $CLJS.Z;}catch(X){if(X instanceof Error){A=X;if(A===$CLJS.Z)throw $CLJS.Z;throw A;}throw X;}else throw $CLJS.Z;}catch(X){if(X instanceof Error){A=X;if(A===$CLJS.Z)throw $CLJS.Z;throw A;}throw X;}else throw $CLJS.Z;}catch(X){if(X instanceof Error){A=X;if(A===$CLJS.Z)return new $CLJS.Q(null,1,5,$CLJS.R,[k],null);throw A;}throw X;}else throw v;
else throw S;}else throw m;else throw K;}}($CLJS.Ef,d)))):k};
X4=function(a,b,c,d,e,f){var k=$CLJS.DV(a,b),l=$CLJS.lf(function(t){var u=$CLJS.wz(k,t);return $CLJS.n(u)?$CLJS.Fl(function(v){return $CLJS.z($CLJS.y($CLJS.nf($CLJS.Ya,function G(A,C){try{if($CLJS.Ad(C)&&3===$CLJS.D(C))try{var K=$CLJS.F(C,0);if($CLJS.E.g(K,d))try{var S=$CLJS.F(C,1);if($CLJS.ud(e)||$CLJS.K0($CLJS.hh(e),$CLJS.hh(S)))try{var X=$CLJS.F(C,2);if($CLJS.E.g(X,f))return new $CLJS.Q(null,1,5,$CLJS.R,[new $CLJS.Q(null,2,5,$CLJS.R,[t,v],null)],null);throw $CLJS.Z;}catch(ha){if(ha instanceof Error){var ba=
ha;if(ba===$CLJS.Z)throw $CLJS.Z;throw ba;}throw ha;}else throw $CLJS.Z;}catch(ha){if(ha instanceof Error){ba=ha;if(ba===$CLJS.Z)throw $CLJS.Z;throw ba;}throw ha;}else throw $CLJS.Z;}catch(ha){if(ha instanceof Error){ba=ha;if(ba===$CLJS.Z)throw $CLJS.Z;throw ba;}throw ha;}else throw $CLJS.Z;}catch(ha){if(ha instanceof Error){ba=ha;if(ba===$CLJS.Z)return $CLJS.yU(G,A,C);throw ba;}throw ha;}}($CLJS.Ef,v))))},u):null},$CLJS.H([V4(a,b)])),m=$CLJS.bf($CLJS.ec($CLJS.Ef));a=$CLJS.fb(function(t,u){var v=
$CLJS.I(u,0,null);u=$CLJS.I(u,1,null);return Z4(t,b,c,v,u,function(x,A,C){try{return S4(x,A,C,b)}catch(K){if(K instanceof Error){A=K;var G=$CLJS.O($CLJS.Ll(A));C=$CLJS.J.g(G,$CLJS.xx);G=$CLJS.J.g(G,$CLJS.JV);if($CLJS.E.g(C,$CLJS.IV))return m.md(null,$CLJS.Ae(m.Lb(null),G)),x;throw A;}throw K;}})},a,l);return $CLJS.fb(function(t,u){return $CLJS.$4.j?$CLJS.$4.j(t,b,u):$CLJS.$4.call(null,t,b,u)},a,$CLJS.hc($CLJS.q(m)))};
Y4=function(a,b,c,d){b=$CLJS.V1(c,b);if($CLJS.n(b)){var e=$CLJS.DV(c,b);c=$CLJS.Ue(function(f){f=$CLJS.O(f);var k=$CLJS.J.g(f,$CLJS.IJ),l=$CLJS.J.g(f,$CLJS.t0);return $CLJS.E.g($CLJS.wY,k)&&$CLJS.E.g(d,l)?$CLJS.KY.h(f):null},$CLJS.P_.j(c,b,e));return $CLJS.n(c)?X4(a,b,a,$CLJS.lF,$CLJS.N,c):a}return a};
b5=function(a,b,c,d,e){var f=$CLJS.pV.h(c),k=$CLJS.DV(a,b);c=$CLJS.rG(function(t){var u=$CLJS.wz(k,t);if($CLJS.n(u)){var v=$CLJS.R4(f);return $CLJS.n($CLJS.Ue($CLJS.hk.j($CLJS.eh([v]),$CLJS.AD,$CLJS.id),u))?t:null}return null},V4(a,b));var l=(d=$CLJS.E.g($CLJS.IF,d))?$CLJS.pV.h(e):null;e=d?function(t,u,v){return hsa(t,u,v,l)}:function(t,u,v){return S4(t,u,v,b)};var m=$CLJS.E.g(new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.$E],null),c);a=d&&m&&$CLJS.E.g($CLJS.z(f),$CLJS.z(l))&&$CLJS.E.g($CLJS.jd(f),$CLJS.jd(l))?
isa(a,b,f,$CLJS.Hl($CLJS.id(l),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.rQ,$CLJS.rF],null))):m?jsa(a,b,f):a;return $CLJS.n(c)?(a=Z4(a,b,a,c,f,e),$CLJS.a5.h?$CLJS.a5.h(a):$CLJS.a5.call(null,a)):a};c5=function(a){return $CLJS.ID(a,$CLJS.T,$CLJS.H([$CLJS.AD,$CLJS.p.h($CLJS.KD())]))};
ksa=function(a,b,c){return function(d){return function l(f,k){try{if($CLJS.Ad(k)&&3===$CLJS.D(k))try{var m=$CLJS.F(k,0);if($CLJS.je(m,$CLJS.kA))try{var t=$CLJS.F(k,2);if($CLJS.E.g(t,b))return c5(c);throw $CLJS.Z;}catch(v){if(v instanceof Error){var u=v;if(u===$CLJS.Z)throw $CLJS.Z;throw u;}throw v;}else throw $CLJS.Z;}catch(v){if(v instanceof Error){u=v;if(u===$CLJS.Z)throw $CLJS.Z;throw u;}throw v;}else throw $CLJS.Z;}catch(v){if(v instanceof Error){u=v;if(u===$CLJS.Z)return $CLJS.YV(l,f,k);throw u;
}throw v;}}($CLJS.Ef,d)}(a)};lsa=function(a,b,c){var d=function(){var l=$CLJS.wV(c);return $CLJS.n(l)?l:$CLJS.U.h($CLJS.HD(c))}(),e=c5($CLJS.xV(c,d));a=$CLJS.kk.j(a,$CLJS.XO,function(l){return $CLJS.jk.g(function(m){return $CLJS.E.g(m,b)?e:m},l)});var f=$CLJS.wV(b),k=$CLJS.Ci.h($CLJS.HD(c));return ksa(a,f,new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.kA,new $CLJS.h(null,1,[$CLJS.Ci,k],null),d],null))};
d5=function(a,b,c){return $CLJS.n($CLJS.wV(b))?lsa(a,b,c):$CLJS.sU(function(d){return $CLJS.E.g(d,b)?c:d},a)};msa=function(a,b,c){a=$CLJS.N_.j(a,b,$CLJS.DV(a,b));b=$CLJS.N_.j(c,b,$CLJS.DV(c,b));return $CLJS.nf(function(d){return $CLJS.gk.g($CLJS.z(d),$CLJS.id(d))},$CLJS.kf.j($CLJS.zr,a,b))};
nsa=function(a,b,c){var d=$CLJS.I(c,0,null);c=$CLJS.I(c,1,null);var e=$CLJS.KY.h(d),f=$CLJS.oV($CLJS.T.j(c,$CLJS.IJ,$CLJS.wY));return $CLJS.kf.g(function(k){return new $CLJS.Q(null,2,5,$CLJS.R,[k,c5(f)],null)},$CLJS.y($CLJS.nf($CLJS.Ya,function t(l,m){try{if($CLJS.Ad(m)&&3===$CLJS.D(m))try{var u=$CLJS.F(m,0);if($CLJS.je(u,$CLJS.lF))try{var v=$CLJS.F(m,2);if($CLJS.E.g(v,e))return new $CLJS.Q(null,1,5,$CLJS.R,[m],null);throw $CLJS.Z;}catch(A){if(A instanceof Error){var x=A;if(x===$CLJS.Z)throw $CLJS.Z;
throw x;}throw A;}else throw $CLJS.Z;}catch(A){if(A instanceof Error){x=A;if(x===$CLJS.Z)throw $CLJS.Z;throw x;}throw A;}else throw $CLJS.Z;}catch(A){if(A instanceof Error){x=A;if(x===$CLJS.Z)return $CLJS.yU(t,l,m);throw x;}throw A;}}($CLJS.Ef,$CLJS.DV(a,b)))))};osa=function(a,b,c){var d=$CLJS.Ci.h($CLJS.HD(c));$CLJS.n(d)||(d=$CLJS.D0.h?$CLJS.D0.h(c):$CLJS.D0.call(null,c),d=$CLJS.Wa(d));if($CLJS.n(d))return c;a=$CLJS.J_.j(a,b,c);return $CLJS.ID(c,$CLJS.T,$CLJS.H([$CLJS.Ci,a]))};
psa=function(a,b,c,d){d=osa(a,b,d);c=$CLJS.PV.l(a,b,d5,$CLJS.H([c,d]));for(var e=b;;){var f=$CLJS.V1(c,e);if($CLJS.n(f)){b=f;var k=$CLJS.lf(function(l,m,t){return function(u){return nsa(l,t,u)}}(c,e,b,f,a,d),$CLJS.H([msa(a,e,c)]));c=$CLJS.fb(function(l,m,t,u){return function(v,x){var A=$CLJS.I(x,0,null);x=$CLJS.I(x,1,null);return $CLJS.PV.l(v,u,d5,$CLJS.H([A,x]))}}(c,e,k,b,f,a,d),c,k);e=b}else return c}};e5=function(a,b){return $CLJS.GX(a,$CLJS.lF)&&$CLJS.E.g($CLJS.Z0(a),b)};
qsa=function(a,b,c){return function k(e,f){try{if(e5(f,b))return $CLJS.X2(f,c);throw $CLJS.Z;}catch(m){if(m instanceof Error){var l=m;if(l===$CLJS.Z)return $CLJS.YV(k,e,f);throw l;}throw m;}}($CLJS.Ef,a)};
rsa=function(a,b,c){var d=$CLJS.BM.h(a),e=-1<b&&b<$CLJS.D(d)?new $CLJS.Q(null,2,5,$CLJS.R,[b,$CLJS.wz(d,new $CLJS.Q(null,2,5,$CLJS.R,[b,$CLJS.XD],null))],null):null;b=$CLJS.I(e,0,null);e=$CLJS.I(e,1,null);if($CLJS.n($CLJS.n(b)?$CLJS.gk.g(e,c):b)){var f=$CLJS.GV();$CLJS.T2(f,$CLJS.kf.g($CLJS.XD,d));c=f(c);return qsa($CLJS.UK(a,new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.BM,b,$CLJS.XD],null),c),e,c)}return a};
ssa=function(a,b,c){if($CLJS.Gd(c))return c;var d=function(){var e=$CLJS.eh([c]);return"string"===typeof c?$CLJS.hk.g(e,$CLJS.XD):e}();return $CLJS.Ue(function(e){var f=$CLJS.I(e,0,null);e=$CLJS.I(e,1,null);return $CLJS.n(d.h?d.h(e):d.call(null,e))?f:null},$CLJS.Gl($CLJS.zr,$CLJS.BM.h($CLJS.DV(a,b))))};
f5=function(a,b,c,d){b=$CLJS.at.g($CLJS.hh($CLJS.P_.j(b,c,$CLJS.DV(b,c))),$CLJS.hh($CLJS.P_.j(a,c,$CLJS.DV(a,c))));return $CLJS.fb(function(e,f){return $CLJS.P.M(X4,e,c,a,d.h?d.h(f):d.call(null,f))},a,b)};tsa=function(a,b,c){a=f5(a,b,c,function(d){return new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.lF,new $CLJS.h(null,1,[$CLJS.rO,$CLJS.$Y.h(d)],null),$CLJS.Si.h(d)],null)});c=$CLJS.V1(a,c);return $CLJS.n(c)?f5(a,b,c,function(d){return new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.lF,$CLJS.N,$CLJS.KY.h(d)],null)}):a};
usa=function(a,b,c){return $CLJS.Gd(c)?$CLJS.wz($CLJS.DV(a,b),new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.BM,c,$CLJS.XD],null)):$CLJS.yd(c)?$CLJS.XD.h(c):c};
g5=function(a,b,c,d){var e=usa(a,b,c);return $CLJS.n(e)?(c=function(){var f=(0,$CLJS.PV)(a,b,function(k){var l=$CLJS.BM.h(k);l=d.g?d.g(l,e):d.call(null,l,e);return $CLJS.GD(k,$CLJS.BM,l)});return(0,$CLJS.PV)(f,b,function(k){return $CLJS.TV(k,$CLJS.BM,function(l){return $CLJS.jk.g(function(m){return $CLJS.e3(f,b,m)},l)})})}(),c=tsa(c,a,b),$CLJS.a5.h?$CLJS.a5.h(c):$CLJS.a5.call(null,c)):a};
vsa=function(a,b){return null!=$CLJS.z($CLJS.y($CLJS.nf($CLJS.Ya,function f(d,e){try{if(e5(e,b))return new $CLJS.Q(null,1,5,$CLJS.R,[e],null);throw $CLJS.Z;}catch(l){if(l instanceof Error){var k=l;if(k===$CLJS.Z)return $CLJS.yU(f,d,e);throw k;}throw l;}}($CLJS.Ef,a))))};wsa=function(a,b){var c=$CLJS.TD.h($CLJS.DV(a,b));if($CLJS.n(c)){var d=$CLJS.Wa($CLJS.Ue($CLJS.hk.g($CLJS.CM,$CLJS.HD),c));return d?U4(a,b,c,$CLJS.T4(a,b)):d}return c};
xsa=function(a,b){var c=$CLJS.DV(a,b),d=$CLJS.n(wsa(a,b))?$CLJS.PV.l(a,b,$CLJS.ak,$CLJS.H([$CLJS.TD])):a;return $CLJS.n($CLJS.BM.h(c))?$CLJS.PV.l(d,b,$CLJS.kk,$CLJS.H([$CLJS.BM,$CLJS.Xe($CLJS.jk,function(e){var f=$CLJS.TD.h(e);var k=new $CLJS.ch(null,new $CLJS.h(null,2,[$CLJS.rx,null,$CLJS.$y,null],null),null);f=k.h?k.h(f):k.call(null,f);return $CLJS.n(f)?e:$CLJS.n(U4(a,b,$CLJS.TD.h(e),$CLJS.N_.j(a,b,$CLJS.T.j(e,$CLJS.TD,$CLJS.rx))))?$CLJS.T.j(e,$CLJS.TD,$CLJS.rx):e})])):d};
$CLJS.a5=function(a){return $CLJS.fb(xsa,a,$CLJS.nh(0,$CLJS.D($CLJS.oK.h(a))))};ysa=new $CLJS.M(null,"remove","remove",-131428414);var i5;$CLJS.h5=function(){function a(d,e,f){return $CLJS.yd(f)&&$CLJS.E.g($CLJS.Us.h(f),$CLJS.jK)?$CLJS.$4.j?$CLJS.$4.j(d,e,f):$CLJS.$4.call(null,d,e,f):b5(d,e,f,ysa,null)}function b(d,e){return c.j?c.j(d,-1,e):c.call(null,d,-1,e)}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+arguments.length);};c.g=b;c.j=a;return c}();i5=$CLJS.oE.h($CLJS.ZD);
$CLJS.k5=function(){function a(d,e,f,k){if($CLJS.yd(f)&&$CLJS.E.g($CLJS.Us.h(f),$CLJS.jK))d=$CLJS.j5.v?$CLJS.j5.v(d,e,f,k):$CLJS.j5.call(null,d,e,f,k);else{var l=i5.h?i5.h(f):i5.call(null,f);$CLJS.n(l)&&(l=i5.h?i5.h(k):i5.call(null,k),l=$CLJS.n(l)?$CLJS.BE($CLJS.J_.j(d,e,k),$CLJS.J_.j(d,e,f)):l);d=$CLJS.n(l)?psa(d,e,f,k):b5(d,e,f,$CLJS.IF,k)}return d}function b(d,e,f){return c.v?c.v(d,-1,e,f):c.call(null,d,-1,e,f)}var c=null;c=function(d,e,f,k){switch(arguments.length){case 3:return b.call(this,d,
e,f);case 4:return a.call(this,d,e,f,k)}throw Error("Invalid arity: "+arguments.length);};c.j=b;c.v=a;return c}();$CLJS.zsa=function(){function a(d,e,f,k){f=ssa(d,e,f);return $CLJS.n(f)?$CLJS.PV.l(d,e,rsa,$CLJS.H([f,k])):d}function b(d,e,f){return c.v?c.v(d,-1,e,f):c.call(null,d,-1,e,f)}var c=null;c=function(d,e,f,k){switch(arguments.length){case 3:return b.call(this,d,e,f);case 4:return a.call(this,d,e,f,k)}throw Error("Invalid arity: "+arguments.length);};c.j=b;c.v=a;return c}();
$CLJS.$4=function(){function a(d,e,f){try{return g5(d,e,f,function(u,v){return $CLJS.Ie($CLJS.o0(function(x){return!($CLJS.E.g($CLJS.XD.h(x),v)||vsa(x,v))},u))})}catch(u){var k=u,l=$CLJS.O($CLJS.Ll(k)),m=$CLJS.J.g(l,$CLJS.CK),t=$CLJS.J.g(l,$CLJS.xx);l=$CLJS.J.g(l,$CLJS.JV);if($CLJS.E.g(t,$CLJS.IV))return d=c.j?c.j(d,m,l):c.call(null,d,m,l),c.j?c.j(d,e,f):c.call(null,d,e,f);throw k;}}function b(d,e){return c.j?c.j(d,-1,e):c.call(null,d,-1,e)}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,
d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+arguments.length);};c.g=b;c.j=a;return c}();
$CLJS.j5=function(){function a(d,e,f,k){return null==k?$CLJS.$4.j(d,e,f):g5(d,e,f,function(l,m){return $CLJS.jk.g(function(t){return $CLJS.E.g($CLJS.XD.h(t),m)?k:t},l)})}function b(d,e,f){return c.v?c.v(d,-1,e,f):c.call(null,d,-1,e,f)}var c=null;c=function(d,e,f,k){switch(arguments.length){case 3:return b.call(this,d,e,f);case 4:return a.call(this,d,e,f,k)}throw Error("Invalid arity: "+arguments.length);};c.j=b;c.v=a;return c}();