var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./medley.core.js");require("./metabase.lib.aggregation.js");require("./metabase.lib.binning.js");require("./metabase.lib.convert.js");require("./metabase.lib.drill_thru.common.js");require("./metabase.lib.filter.js");require("./metabase.lib.metadata.js");require("./metabase.lib.metadata.calculation.js");require("./metabase.lib.options.js");require("./metabase.lib.schema.js");require("./metabase.lib.schema.drill_thru.js");require("./metabase.lib.schema.metadata.js");require("./metabase.lib.temporal_bucket.js");require("./metabase.lib.types.isa.js");require("./metabase.lib.underlying.js");require("./metabase.lib.util.js");require("./metabase.util.malli.js");
'use strict';var b7,d7,f7,Wsa,h7,i7,Xsa;b7=function(a){if("string"===typeof a)return $CLJS.ph(/[\x00-\x20]*[+-]?NaN[\x00-\x20]*/,a)?NaN:$CLJS.ph(/[\x00-\x20]*[+-]?(Infinity|((\d+\.?\d*|\.\d+)([eE][+-]?\d+)?)[dDfF]?)[\x00-\x20]*/,a)?parseFloat(a):null;throw Error($CLJS.Nl(a));};$CLJS.c7=function(a){return $CLJS.Za(a)?$CLJS.Hy(a,$CLJS.H([$CLJS.yi,!0])):a};
d7=function(a,b){if(null!=a&&null!=a.yg)a=a.yg(a,b);else{var c=d7[$CLJS.xa(null==a?null:a)];if(null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else if(c=d7._,null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else throw $CLJS.cb("MetadataProvider.setting",a);}return a};$CLJS.e7=function(a,b){return d7($CLJS.XZ(a),b)};f7=function(a,b,c){a=(b-a)/c;if(null!=a)a=Math.ceil(a);else throw $CLJS.ji("Unexpected Null passed to ceil",new $CLJS.h(null,1,[$CLJS.Mi,"ceil"],null));a=$CLJS.Wd(a);return 1<a?a:1};
Wsa=function(a,b,c){var d=b7(((b-a)/c).toFixed(5)),e=Math.pow(10,0===d?0:Math.floor(Math.log($CLJS.tz(d))/Math.log(10)));return $CLJS.Ue(function(f){f*=e;return f>=d?f:null},$CLJS.Fra)};
$CLJS.g7=function(a,b,c){var d=$CLJS.L6(b);if($CLJS.n(d)){var e=$CLJS.ED.h(d);e=e instanceof $CLJS.M?e.S:null;switch(e){case "num-bins":e=$CLJS.wz(b,new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.QM,$CLJS.aj,$CLJS.uj],null));if($CLJS.n(e)){a=$CLJS.O(e);e=$CLJS.J.g(a,$CLJS.ln);var f=$CLJS.J.g(a,$CLJS.Hj);a=$CLJS.O(d);a=$CLJS.J.g(a,$CLJS.lD);a=Wsa(e,f,a);return new $CLJS.h(null,3,[$CLJS.DD,a,$CLJS.EK,c,$CLJS.HK,c+a],null)}return null;case "bin-width":return a=$CLJS.O(d),a=$CLJS.J.g(a,$CLJS.DD),new $CLJS.h(null,
3,[$CLJS.DD,a,$CLJS.EK,c,$CLJS.HK,c+a],null);case "default":e=$CLJS.wz(b,new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.QM,$CLJS.aj,$CLJS.uj],null));if($CLJS.n(e)){d=$CLJS.O(e);e=$CLJS.J.g(d,$CLJS.ln);f=$CLJS.J.g(d,$CLJS.Hj);a:switch(d=e,e=f,f=$CLJS.ei,f=f instanceof $CLJS.M?f.S:null,f){case "num-bins":a=new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.lD,new $CLJS.h(null,2,[$CLJS.lD,null,$CLJS.DD,b7(((e-d)/0).toFixed(5))],null)],null);break a;case "bin-width":a=new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.DD,new $CLJS.h(null,2,
[$CLJS.DD,null,$CLJS.lD,f7(d,e,null)],null)],null);break a;case "default":$CLJS.MZ(b)?(a=$CLJS.e7(a,$CLJS.Era),a=new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.DD,new $CLJS.h(null,2,[$CLJS.DD,a,$CLJS.lD,f7(d,e,a)],null)],null)):(a=$CLJS.e7(a,$CLJS.Dra),a=new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.lD,new $CLJS.h(null,2,[$CLJS.lD,a,$CLJS.DD,b7(((e-d)/a).toFixed(5))],null)],null));break a;default:throw Error(["No matching clause: ",$CLJS.p.h(f)].join(""));}if($CLJS.n(a))return $CLJS.I(a,0,null),a=$CLJS.I(a,1,null),a=
$CLJS.O(a),a=$CLJS.J.g(a,$CLJS.DD),new $CLJS.h(null,3,[$CLJS.DD,a,$CLJS.EK,c,$CLJS.HK,c+a],null)}return null;default:throw Error(["No matching clause: ",$CLJS.p.h(e)].join(""));}}else return null};h7=function(a){var b=$CLJS.az.h($CLJS.P0(a));b=b.h?b.h($CLJS.$6):b.call(null,$CLJS.$6);if($CLJS.n(b))a:for(b=a;;)if($CLJS.ud($CLJS.V3.g(b,-1))&&$CLJS.ud($CLJS.o5.g(b,-1))){if(b=$CLJS.kk.j(b,$CLJS.oK,$CLJS.td),!$CLJS.y($CLJS.oK.h(b))){b=null;break a}}else break a;else b=null;return $CLJS.n(b)?b:a};
i7=function(a,b){var c=h7(a);if($CLJS.E.g(a,c))return b;for(;;){if($CLJS.E.g(a,c))return $CLJS.xU(b,new $CLJS.h(null,2,[$CLJS.HV,$CLJS.a7,$CLJS.NV,$CLJS.Vsa],null));var d=$CLJS.N_,e=d.j,f=a;var k=a;var l=$CLJS.l1(k,-1);k=$CLJS.n(l)?$CLJS.DV(k,l):null;d=e.call(d,f,-2,k);b=$CLJS.x1.v(a,-2,$CLJS.oV(b),d);if($CLJS.n(b))a=$CLJS.kk.j(a,$CLJS.oK,$CLJS.td);else return null}};
Xsa=function(a,b,c){var d=function(){var e=$CLJS.n($CLJS.L6(b))?function(){var f=$CLJS.I4(b,null);if(null!=c){var k=$CLJS.g7(a,b,c);if($CLJS.n(k)){var l=$CLJS.O(k);k=$CLJS.J.g(l,$CLJS.EK);l=$CLJS.J.g(l,$CLJS.HK);return new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.m5(f,k),$CLJS.l5(f,l)],null)}return null}return new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.k1($CLJS.ME,new $CLJS.Q(null,1,5,$CLJS.R,[f],null))],null)}():null;if($CLJS.n(e))return e;e=function(){var f=$CLJS.a7.h(b);return $CLJS.n(f)?$CLJS.U2(b,f):b}();return new $CLJS.Q(null,
1,5,$CLJS.R,[(0,$CLJS.O2)(e,c)],null)}();return $CLJS.fb(function(e,f){return $CLJS.P2.j(e,-1,f)},a,d)};
$CLJS.j7=function(a,b){b=$CLJS.O(b);var c=$CLJS.J.g(b,$CLJS.C5),d=$CLJS.J.g(b,$CLJS.FK);b=$CLJS.PV.l(a,-1,$CLJS.ak,$CLJS.H([$CLJS.aF,$CLJS.$E,$CLJS.LQ,$CLJS.iR,$CLJS.TD]));b=$CLJS.fb(function(f,k){var l=$CLJS.O(k);k=$CLJS.J.g(l,$CLJS.Ni);l=$CLJS.J.g(l,$CLJS.nj);return Xsa(f,k,l)},b,function(){return function l(k){return new $CLJS.pe(null,function(){for(var m=k;;)if(m=$CLJS.y(m)){if($CLJS.Bd(m)){var t=$CLJS.mc(m),u=$CLJS.D(t),v=$CLJS.se(u);a:for(var x=0;;)if(x<u){var A=$CLJS.ld(t,x);$CLJS.gk.g($CLJS.IJ.h($CLJS.Ni.h(A)),
$CLJS.hK)&&v.add(A);x+=1}else{t=!0;break a}return t?$CLJS.ve($CLJS.xe(v),l($CLJS.nc(m))):$CLJS.ve($CLJS.xe(v),null)}v=$CLJS.z(m);if($CLJS.gk.g($CLJS.IJ.h($CLJS.Ni.h(v)),$CLJS.hK))return $CLJS.ge(v,l($CLJS.Mc(m)));m=$CLJS.Mc(m)}else return null},null,null)}(d)}());var e=function(){var f=$CLJS.jd(c);return $CLJS.n(f)?$CLJS.rG(function(k){return $CLJS.E.g($CLJS.R4(k),f)},$CLJS.V3.g(a,-1)):null}();return $CLJS.fb(function(f,k){return $CLJS.P2.j(f,-1,k)},b,$CLJS.n(e)?function(){var f=$CLJS.z(e);switch(f instanceof
$CLJS.M?f.S:null){case "sum-where":case "count-where":case "share":return new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.jd(e)],null);case "metric":return $CLJS.Q2.g($CLJS.T.j($CLJS.XX.h((0,$CLJS.BX)($CLJS.j1($CLJS.c7(new $CLJS.h(null,2,[$CLJS.aj,$CLJS.HE,$CLJS.HE,$CLJS.c7($CLJS.FY.h($CLJS.a_(a,$CLJS.jd(e))))],null)),$CLJS.aj,$CLJS.HE))),$CLJS.SO,$CLJS.SO.h(a)),-1);default:return null}}():null)};$CLJS.w5.m(null,$CLJS.t6,function(a,b,c){b=$CLJS.O(c);a=$CLJS.J.g(b,$CLJS.n6);b=$CLJS.J.g(b,$CLJS.MY);return new $CLJS.h(null,3,[$CLJS.aj,$CLJS.t6,$CLJS.n6,a,$CLJS.MY,b],null)});
$CLJS.v5.m(null,$CLJS.t6,function(){function a(c,d,e,f){var k=null;if(3<arguments.length){k=0;for(var l=Array(arguments.length-3);k<l.length;)l[k]=arguments[k+3],++k;k=new $CLJS.w(l,0,null)}return b.call(this,c,d,e,k)}function b(c,d,e){return $CLJS.j7(h7(c),$CLJS.kk.j(e,$CLJS.FK,function(f){return function m(l){return new $CLJS.pe(null,function(){for(;;){var t=$CLJS.y(l);if(t){var u=t;if($CLJS.Bd(u)){var v=$CLJS.mc(u),x=$CLJS.D(v),A=$CLJS.se(x);return function(){for(var G=0;;)if(G<x){var K=$CLJS.ld(v,
G);$CLJS.we(A,$CLJS.kk.j(K,$CLJS.Ni,function(){return function(S){return i7(c,S)}}(G,K,v,x,A,u,t)));G+=1}else return!0}()?$CLJS.ve($CLJS.xe(A),m($CLJS.nc(u))):$CLJS.ve($CLJS.xe(A),null)}var C=$CLJS.z(u);return $CLJS.ge($CLJS.kk.j(C,$CLJS.Ni,function(){return function(G){return i7(c,G)}}(C,u,t)),m($CLJS.Mc(u)))}return null}},null,null)}(f)}))}a.A=3;a.B=function(c){var d=$CLJS.z(c);c=$CLJS.B(c);var e=$CLJS.z(c);c=$CLJS.B(c);var f=$CLJS.z(c);c=$CLJS.Mc(c);return b(d,e,f,c)};a.l=b;return a}());