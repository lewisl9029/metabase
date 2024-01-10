var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.convert.js");require("./metabase.lib.metadata.js");require("./metabase.lib.metadata.calculation.js");require("./metabase.lib.metadata.protocols.js");require("./metabase.lib.ref.js");require("./metabase.lib.schema.js");require("./metabase.lib.schema.expression.js");require("./metabase.lib.util.js");require("./metabase.mbql.normalize.js");require("./metabase.shared.util.i18n.js");require("./metabase.util.malli.js");
'use strict';var v8=function(a,b){if(null!=a&&null!=a.vg)a=a.vg(a,b);else{var c=v8[$CLJS.xa(null==a?null:a)];if(null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else if(c=v8._,null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else throw $CLJS.cb("MetadataProvider.metrics",a);}return a},w8=function(a){a=$CLJS.O(a);var b=$CLJS.J.g(a,$CLJS.FY);$CLJS.n(b)?$CLJS.n(Hua.h(b))?a=b:(a=$CLJS.XX.h,b=$CLJS.zk.l($CLJS.H([new $CLJS.h(null,2,[$CLJS.SO,Number.MAX_SAFE_INTEGER,$CLJS.aj,$CLJS.HE],null),$CLJS.n($CLJS.gP.h(b))?new $CLJS.h(null,
1,[$CLJS.gP,$CLJS.xU(b,new $CLJS.h(null,1,[$CLJS.gP,$CLJS.HE],null))],null):new $CLJS.h(null,1,[$CLJS.HE,b],null)])),a=$CLJS.DV(a.call($CLJS.XX,(0,$CLJS.BX)(b)),-1)):a=null;return a},x8=function(){return $CLJS.LD("[Unknown Metric]")},Hua=new $CLJS.M("mbql","type","mbql/type",1170405116),y8=new $CLJS.M(null,"aggregation-position","aggregation-position",441696125);$CLJS.mV.m(null,$CLJS.MJ,function(a){var b=$CLJS.O(a);a=$CLJS.J.g(b,$CLJS.Si);var c=function(){var e=$CLJS.Ci.h(b);if($CLJS.n(e))return e;e=$CLJS.nA.h(b);if($CLJS.n(e))return e;e=$CLJS.z($CLJS.aF.h(w8(b)));return $CLJS.n(e)?(e=$CLJS.OD(e),$CLJS.nB(e,$CLJS.lj)?e:null):null}(),d=function(){var e=new $CLJS.h(null,1,[$CLJS.AD,$CLJS.p.h($CLJS.KD())],null);return $CLJS.n(c)?$CLJS.T.j(e,$CLJS.Ci,c):e}();return new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.gF,d,a],null)});
$CLJS.I_.m(null,$CLJS.MJ,function(a,b,c){c=$CLJS.Ie($CLJS.aF.h(w8(c)));$CLJS.n(c)?(c=$CLJS.I(c,0,null),a=$CLJS.J_.j(a,b,c)):a=null;return $CLJS.n(a)?a:$CLJS.lj});$CLJS.I_.m(null,$CLJS.gF,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);c=$CLJS.I(c,2,null);c=$CLJS.Gd(c)?$CLJS.a_(a,c):null;a=$CLJS.n(c)?$CLJS.J_.j(a,b,c):null;return $CLJS.n(a)?a:$CLJS.lj});$CLJS.E_.m(null,$CLJS.MJ,function(a,b,c){a=$CLJS.uz($CLJS.nD,$CLJS.U)(c);return $CLJS.n(a)?a:x8()});
$CLJS.E_.m(null,$CLJS.gF,function(a,b,c,d){$CLJS.I(c,0,null);$CLJS.I(c,1,null);c=$CLJS.I(c,2,null);c=$CLJS.Gd(c)?$CLJS.a_(a,c):null;a=$CLJS.n(c)?$CLJS.e_.v(a,b,c,d):null;return $CLJS.n(a)?a:x8()});$CLJS.L_.m(null,$CLJS.MJ,function(a,b,c){var d=$CLJS.zk.l,e=$CLJS.kH($CLJS.L_,$CLJS.ei);a=e.j?e.j(a,b,c):e.call(null,a,b,c);return d.call($CLJS.zk,$CLJS.H([a,$CLJS.Hl(c,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Gs,y8],null))]))});
$CLJS.L_.m(null,$CLJS.gF,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);c=$CLJS.I(c,2,null);c=$CLJS.Gd(c)?$CLJS.a_(a,c):null;return $CLJS.n(c)?$CLJS.h_.j(a,b,c):new $CLJS.h(null,3,[$CLJS.Ci,$CLJS.lj,$CLJS.nD,x8(),$CLJS.g_,x8()],null)});$CLJS.F_.m(null,$CLJS.gF,function(a,b,c){$CLJS.I(c,0,null);$CLJS.I(c,1,null);c=$CLJS.I(c,2,null);c=$CLJS.Gd(c)?$CLJS.a_(a,c):null;a=$CLJS.n(c)?$CLJS.G_.j(a,b,c):null;return $CLJS.n(a)?a:"metric"});
$CLJS.Iua=function(){function a(d,e){var f=$CLJS.SZ(d);if($CLJS.n(f)){f=v8($CLJS.XZ(d),f);var k=$CLJS.gg.j($CLJS.N,$CLJS.EX(function(l,m){return $CLJS.GX(m,$CLJS.gF)?new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.J.g(m,2),l],null):null}),$CLJS.aF.h($CLJS.DV(d,e)));return $CLJS.ud(f)?null:$CLJS.ud(k)?$CLJS.Ff(f):$CLJS.jk.g(function(l){var m=$CLJS.Si.h(l);m=k.h?k.h(m):k.call(null,m);return $CLJS.n(m)?$CLJS.T.j(l,y8,m):l},f)}return null}function b(d){return c.g?c.g(d,-1):c.call(null,d,-1)}var c=null;c=function(d,
e){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,d,e)}throw Error("Invalid arity: "+arguments.length);};c.h=b;c.g=a;return c}();