var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.set.js");require("./clojure.string.js");require("./medley.core.js");require("./metabase.lib.metadata.js");require("./metabase.lib.query.js");require("./metabase.lib.schema.js");require("./metabase.lib.schema.common.js");require("./metabase.lib.schema.template_tag.js");require("./metabase.lib.util.js");require("./metabase.shared.util.i18n.js");require("./metabase.util.humanization.js");require("./metabase.util.malli.js");require("./metabase.util.malli.registry.js");
'use strict';var Jua,Kua,Mua,Nua,Oua,Pua;Jua=function(a,b){return $CLJS.Cz(function(c){return function(d,e,f){return $CLJS.n(a.h?a.h(e):a.call(null,e))?c.j?c.j(d,e,f):c.call(null,d,e,f):d}},b)};Kua=function(a,b){return $CLJS.hc($CLJS.fb(function(c,d){return $CLJS.jg.j(c,a.h?a.h(d):a.call(null,d),d)},$CLJS.ec($CLJS.N),b))};Mua=function(a){return $CLJS.gg.j($CLJS.dh,$CLJS.hk.g($CLJS.hD(function(b){return $CLJS.SV(b,a)}),$CLJS.kf.h($CLJS.id)),Lua)};
Nua=function(a){return new $CLJS.h(null,3,[$CLJS.aj,$CLJS.rA,$CLJS.U,a,$CLJS.Si,$CLJS.p.h($CLJS.KD())],null)};
Oua=function(a){a=$CLJS.O(a);var b=$CLJS.J.g(a,$CLJS.U);return $CLJS.zk.l($CLJS.H([a,function(){var c=$CLJS.ph(/^#(\d+)(-[a-z0-9-]*)?$/,b);$CLJS.n(c)?($CLJS.I(c,0,null),c=$CLJS.I(c,1,null),c=$CLJS.rV(c)):c=null;return $CLJS.n(c)?new $CLJS.h(null,2,[$CLJS.aj,$CLJS.tM,$CLJS.$P,c],null):null}(),function(){var c=0==b.lastIndexOf("snippet:",0)?(0,$CLJS.na)(b.substring(8)):null;return $CLJS.n(c)?new $CLJS.h(null,2,[$CLJS.aj,$CLJS.EL,$CLJS.qL,c],null):null}(),$CLJS.n($CLJS.nD.h(a))?null:new $CLJS.h(null,
1,[$CLJS.nD,$CLJS.X0.g($CLJS.W0,b)],null)]))};$CLJS.z8=function(a){a=$CLJS.P0(a);return $CLJS.n($CLJS.wz(a,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.az,Pua],null)))?$CLJS.de.g($CLJS.dh,$CLJS.jN):$CLJS.dh};$CLJS.A8=function(a,b){var c=$CLJS.z8(a);return(0,$CLJS.PV)(a,0,function(d){var e=$CLJS.at.g(Qua,c);d=$CLJS.P.j($CLJS.ak,d,e);d=$CLJS.zk.l($CLJS.H([d,$CLJS.Hl(b,c)]));$CLJS.at.g(c,$CLJS.hh($CLJS.Zg(b)));$CLJS.DV(a,0);return d})};$CLJS.B8=function(a){return $CLJS.Ie($CLJS.Hl($CLJS.DV(a,0),$CLJS.z8(a)))};
$CLJS.C8=function(a){return $CLJS.gP.h($CLJS.DV(a,0))};Pua=new $CLJS.M(null,"native-requires-specified-collection","native-requires-specified-collection",1239149925);$CLJS.Rua=new $CLJS.M(null,"write","write",-1857649168);$CLJS.Sua=new $CLJS.M(null,"native-permissions","native-permissions",1277672164);var Lua,Qua;Lua=new $CLJS.Q(null,3,5,$CLJS.R,[/\{\{\s*([A-Za-z0-9_\.]+)\s*\}\}/,/\{\{\s*(snippet:\s*[^}]+)\s*\}\}/,/\{\{\s*(#([0-9]*)(-[a-z0-9-]*)?)\s*\}\}/],null);
$CLJS.D8=function(){function a(d,e){d=$CLJS.Ie(Mua(d));var f=$CLJS.Ie($CLJS.hh($CLJS.Zg(e)));if($CLJS.n($CLJS.n(d)?d:f)){var k=$CLJS.at.g(d,f);d=$CLJS.at.g(f,d);if($CLJS.E.l(1,$CLJS.D(k),$CLJS.H([$CLJS.D(d)]))){d=$CLJS.z(d);k=$CLJS.z(k);f=$CLJS.J.g(e,d);var l=$CLJS.E.g($CLJS.nD.h(f),$CLJS.X0.g($CLJS.W0,d))?$CLJS.X0.g($CLJS.W0,k):$CLJS.nD.h(f);f=$CLJS.T.l($CLJS.ak.l(f,$CLJS.qL,$CLJS.H([$CLJS.$P,$CLJS.RO])),$CLJS.nD,l,$CLJS.H([$CLJS.U,k]));e=$CLJS.T.j($CLJS.ak.g(e,d),k,f)}else e=$CLJS.zk.l($CLJS.H([Jua($CLJS.Ve(d),
e),Kua($CLJS.U,$CLJS.kf.g(Nua,k))]));e=$CLJS.fs(e,Oua)}else e=$CLJS.N;return e}function b(d){return $CLJS.D8.g?$CLJS.D8.g(d,null):$CLJS.D8.call(null,d,null)}var c=null;c=function(d,e){switch(arguments.length){case 1:return b.call(this,d);case 2:return a.call(this,d,e)}throw Error("Invalid arity: "+arguments.length);};c.h=b;c.g=a;return c}();Qua=new $CLJS.ch(null,new $CLJS.h(null,1,[$CLJS.jN,null],null),null);
$CLJS.Y(new $CLJS.M("metabase.lib.native","native-extras","metabase.lib.native/native-extras",1125545077),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Gj,new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.jN,new $CLJS.h(null,1,[$CLJS.Ar,!0],null),$CLJS.sD],null)],null));
$CLJS.E8=function(){function a(d,e,f,k){var l=$CLJS.D8.h(e);return $CLJS.A8($CLJS.S0.g(d,new $CLJS.Q(null,1,5,$CLJS.R,[new $CLJS.h(null,4,[$CLJS.Us,$CLJS.$U,$CLJS.lU,f,$CLJS.DP,l,$CLJS.gP,e],null)],null)),k)}function b(d,e){return $CLJS.E8.v?$CLJS.E8.v(d,e,null,null):$CLJS.E8.call(null,d,e,null,null)}var c=null;c=function(d,e,f,k){switch(arguments.length){case 2:return b.call(this,d,e);case 4:return a.call(this,d,e,f,k)}throw Error("Invalid arity: "+arguments.length);};c.g=b;c.v=a;return c}();
$CLJS.F8=function(){function a(d,e,f){$CLJS.DV(d,0);return $CLJS.A8($CLJS.S0.g(e,$CLJS.oK.h(d)),f)}function b(d,e){return $CLJS.F8.j?$CLJS.F8.j(d,e,null):$CLJS.F8.call(null,d,e,null)}var c=null;c=function(d,e,f){switch(arguments.length){case 2:return b.call(this,d,e);case 3:return a.call(this,d,e,f)}throw Error("Invalid arity: "+arguments.length);};c.g=b;c.j=a;return c}();$CLJS.R0.m(null,$CLJS.$U,function(a){return $CLJS.K0($CLJS.z8(a),$CLJS.hh($CLJS.Zg($CLJS.B8(a))))&&!$CLJS.Bz($CLJS.C8(a))});