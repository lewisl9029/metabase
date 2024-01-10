var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.string.js");require("./malli.core.js");require("./medley.core.js");require("./metabase.lib.common.js");require("./metabase.lib.hierarchy.js");require("./metabase.lib.metadata.js");require("./metabase.lib.metadata.calculation.js");require("./metabase.lib.options.js");require("./metabase.lib.ref.js");require("./metabase.lib.schema.js");require("./metabase.lib.schema.common.js");require("./metabase.lib.schema.expression.js");require("./metabase.lib.schema.temporal_bucketing.js");require("./metabase.lib.temporal_bucket.js");require("./metabase.lib.util.js");require("./metabase.shared.util.i18n.js");require("./metabase.types.js");require("./metabase.util.js");require("./metabase.util.malli.js");
'use strict';var q0,dpa,epa,r0,s0;$CLJS.o0=function(a,b){return $CLJS.hc($CLJS.fb(function(c,d){return $CLJS.n(a.h?a.h(d):a.call(null,d))?$CLJS.gc(c,d):c},$CLJS.ec($CLJS.Ef),b))};q0=function(a){return $CLJS.n(p0)?["(",$CLJS.p.h(a),")"].join(""):a};dpa=function(a,b,c){var d=$CLJS.DV(a,b);a=$CLJS.P_.j(a,b,d);var e=$CLJS.Vz(c);return $CLJS.Ue(function(f){return $CLJS.E.g($CLJS.Vz($CLJS.U.h(f)),e)},a)};
epa=function(a,b){var c=$CLJS.kk.v(a,$CLJS.XO,$CLJS.RC($CLJS.de,$CLJS.Ef),b);return $CLJS.Ad($CLJS.TD.h(a))?$CLJS.kk.v(c,$CLJS.TD,$CLJS.de,$CLJS.nV(new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.kA,$CLJS.N,$CLJS.wV(b)],null))):c};r0=function(a,b,c){var d=$CLJS.wV(c);return $CLJS.T.l($CLJS.c_.j(a,b,c),$CLJS.IJ,$CLJS.EY,$CLJS.H([$CLJS.U,d,$CLJS.nD,d]))};s0=new $CLJS.M("metabase.lib.expression","infix-operator","metabase.lib.expression/infix-operator",246733613);
$CLJS.t0=new $CLJS.M("lib","source-uuid","lib/source-uuid",1828897581);var u0=function(){function a(d,e,f){var k=$CLJS.DV(d,e);k=$CLJS.rG($CLJS.hk.g($CLJS.eh([f]),$CLJS.wV),$CLJS.XO.h(k));if($CLJS.n(k))return k;throw $CLJS.ji($CLJS.iD("No expression named {0}",$CLJS.H([$CLJS.Oh.l($CLJS.H([f]))])),new $CLJS.h(null,3,[$CLJS.XQ,f,$CLJS.HE,d,$CLJS.CK,e],null));}function b(d,e){return c.j?c.j(d,-1,e):c.call(null,d,-1,e)}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+arguments.length);
};c.g=b;c.j=a;return c}();$CLJS.I_.m(null,$CLJS.kA,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);c=$CLJS.I(c,2,null);c=u0.j(a,b,c);return $CLJS.J_.j(a,b,c)});$CLJS.K_.m(null,$CLJS.kA,function(a,b,c){$CLJS.I(c,0,null);var d=$CLJS.I(c,1,null),e=$CLJS.I(c,2,null);return new $CLJS.h(null,7,[$CLJS.Us,$CLJS.GJ,$CLJS.t0,$CLJS.AD.h(d),$CLJS.U,e,$CLJS.rD,e,$CLJS.nD,$CLJS.e_.j(a,b,c),$CLJS.nA,$CLJS.J_.j(a,b,c),$CLJS.IJ,$CLJS.EY],null)});$CLJS.E_.m(null,$CLJS.fA,function(a,b,c){return $CLJS.p.h(c)});
$CLJS.E_.m(null,$CLJS.dA,function(a,b,c){return $CLJS.p.h(c)});$CLJS.E_.m(null,$CLJS.eA,function(a,b,c){return['"',$CLJS.p.h(c),'"'].join("")});$CLJS.E_.m(null,$CLJS.tA,function(a,b,c){return $CLJS.p.h(c)});$CLJS.E_.m(null,$CLJS.kA,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);return $CLJS.I(c,2,null)});$CLJS.F_.m(null,$CLJS.kA,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);return $CLJS.I(c,2,null)});
for(var p0=!1,fpa=new $CLJS.h(null,4,[$CLJS.Kq,"+",$CLJS.Yr,"-",$CLJS.Lq,"×",$CLJS.FF,"÷"],null),v0=$CLJS.y(new $CLJS.Q(null,4,5,$CLJS.R,[$CLJS.Kq,$CLJS.Yr,$CLJS.FF,$CLJS.Lq],null)),w0=null,x0=0,y0=0;;)if(y0<x0){var gpa=w0.X(null,y0);$CLJS.rE(gpa,s0);y0+=1}else{var z0=$CLJS.y(v0);if(z0){var A0=z0;if($CLJS.Bd(A0)){var B0=$CLJS.mc(A0),hpa=$CLJS.nc(A0),ipa=B0,jpa=$CLJS.D(B0);v0=hpa;w0=ipa;x0=jpa}else{var kpa=$CLJS.z(A0);$CLJS.rE(kpa,s0);v0=$CLJS.B(A0);w0=null;x0=0}y0=0}else break}
$CLJS.E_.m(null,s0,function(a,b,c){var d=$CLJS.y(c);c=$CLJS.z(d);d=$CLJS.B(d);$CLJS.z(d);d=$CLJS.B(d);c=$CLJS.J.g(fpa,c);a:{var e=p0;p0=!0;try{var f=$CLJS.gs([" ",$CLJS.ih(c)," "].join(""),$CLJS.kf.g($CLJS.Ws($CLJS.e_,a,b),d));break a}finally{p0=e}f=void 0}return q0(f)});$CLJS.F_.m(null,s0,function(){return"expression"});
$CLJS.I_.m(null,$CLJS.yG,function(a,b,c){c=$CLJS.y(c);$CLJS.z(c);c=$CLJS.B(c);$CLJS.z(c);var d=$CLJS.B(c);return $CLJS.Rd($CLJS.tE,function(){return function k(f){return new $CLJS.pe(null,function(){for(;;){var l=$CLJS.y(f);if(l){if($CLJS.Bd(l)){var m=$CLJS.mc(l),t=$CLJS.D(m),u=$CLJS.se(t);a:for(var v=0;;)if(v<t){var x=$CLJS.ld(m,v);x=$CLJS.J_.j(a,b,x);u.add(x);v+=1}else{m=!0;break a}return m?$CLJS.ve($CLJS.xe(u),k($CLJS.nc(l))):$CLJS.ve($CLJS.xe(u),null)}u=$CLJS.z(l);return $CLJS.ge($CLJS.J_.j(a,
b,u),k($CLJS.Mc(l)))}return null}},null,null)}(d)}())});$CLJS.E_.m(null,$CLJS.XA,function(a,b,c,d){$CLJS.I(c,0,null);$CLJS.I(c,1,null);var e=$CLJS.I(c,2,null),f=$CLJS.I(c,3,null);c=$CLJS.I(c,4,null);a=$CLJS.p.h($CLJS.e_.v(a,b,e,d));b=$CLJS.p;d=b.h;c=$CLJS.i0.g(f,c).toLowerCase();0<f?f=$CLJS.ia.j?$CLJS.ia.j("+ %d %s",f,c):$CLJS.ia.call(null,"+ %d %s",f,c):(f=$CLJS.tz(f),f=$CLJS.ia.j?$CLJS.ia.j("- %d %s",f,c):$CLJS.ia.call(null,"- %d %s",f,c));f=q0(f);return[a," ",d.call(b,f)].join("")});
$CLJS.F_.m(null,$CLJS.XA,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);var d=$CLJS.I(c,2,null),e=$CLJS.I(c,3,null);c=$CLJS.I(c,4,null);a=$CLJS.p.h($CLJS.G_.j(a,b,d));b=$CLJS.p;d=b.h;c=$CLJS.i0.g(e,c).toLowerCase();0<e?e=$CLJS.ia.j?$CLJS.ia.j("plus_%s_%s",e,c):$CLJS.ia.call(null,"plus_%s_%s",e,c):(e=$CLJS.tz(e),e=$CLJS.ia.j?$CLJS.ia.j("minus_%d_%s",e,c):$CLJS.ia.call(null,"minus_%d_%s",e,c));return[a,"_",d.call(b,e)].join("")});
$CLJS.E_.m(null,$CLJS.oF,function(a,b,c,d){$CLJS.I(c,0,null);$CLJS.I(c,1,null);var e=$CLJS.I(c,2,null);$CLJS.I(c,3,null);return $CLJS.e_.v(a,b,e,d)});$CLJS.F_.m(null,$CLJS.oF,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);var d=$CLJS.I(c,2,null);$CLJS.I(c,3,null);return $CLJS.G_.j(a,b,d)});
$CLJS.lpa=function(){function a(d,e,f,k){e=$CLJS.n(e)?e:-1;if($CLJS.n(dpa(d,e,f)))throw $CLJS.ji("Expression name conflicts with a column in the same query stage",new $CLJS.h(null,1,[$CLJS.XQ,f],null));return $CLJS.PV.l(d,e,epa,$CLJS.H([$CLJS.xV($CLJS.pV.h(k),f)]))}function b(d,e,f){return c.v?c.v(d,-1,e,f):c.call(null,d,-1,e,f)}var c=null;c=function(d,e,f,k){switch(arguments.length){case 3:return b.call(this,d,e,f);case 4:return a.call(this,d,e,f,k)}throw Error("Invalid arity: "+arguments.length);
};c.j=b;c.v=a;return c}();$CLJS.mpa=function(){function a(d,e){var f=$CLJS.Ie($CLJS.XO.h($CLJS.DV(d,e)));return null==f?null:$CLJS.jk.g($CLJS.Ws(r0,d,e),f)}function b(d){return c.g?c.g(d,-1):c.call(null,d,-1)}var c=null;c=function(d,e){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,d,e)}throw Error("Invalid arity: "+arguments.length);};c.h=b;c.g=a;return c}();
$CLJS.C0=function(){function a(d,e){return $CLJS.Ie($CLJS.XO.h($CLJS.DV(d,e)))}function b(d){return c.g?c.g(d,-1):c.call(null,d,-1)}var c=null;c=function(d,e){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,d,e)}throw Error("Invalid arity: "+arguments.length);};c.h=b;c.g=a;return c}();$CLJS.mV.m(null,$CLJS.kA,function(a){return a});
$CLJS.npa=function(){function a(d,e,f){var k=$CLJS.gg.g($CLJS.N,$CLJS.Gl(function(m,t){return new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.wV(t),m],null)},$CLJS.C0.g(d,e))),l=$CLJS.DV(d,e);d=$CLJS.P_.j(d,e,l);return $CLJS.Ie($CLJS.o0(function(m){return $CLJS.Wa(f)||$CLJS.gk.g($CLJS.IJ.h(m),$CLJS.EY)||$CLJS.J.g(k,$CLJS.U.h(m))<f},d))}function b(d,e){return c.j?c.j(d,-1,e):c.call(null,d,-1,e)}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+
arguments.length);};c.g=b;c.j=a;return c}();$CLJS.opa=function(){function a(d,e,f){return $CLJS.oV(r0(d,e,u0.j(d,e,f)))}function b(d,e){return c.j?c.j(d,-1,e):c.call(null,d,-1,e)}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+arguments.length);};c.g=b;c.j=a;return c}();$CLJS.D0=$CLJS.oE.h($CLJS.ZD);