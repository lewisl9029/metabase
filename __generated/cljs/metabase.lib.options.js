var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.schema.common.js");require("./metabase.shared.util.i18n.js");require("./metabase.util.js");require("./metabase.util.malli.js");
'use strict';$CLJS.GD=function(a,b,c){return null!=c?$CLJS.T.j(a,b,c):$CLJS.ak.g(a,b)};$CLJS.HD=function(a){return $CLJS.yd(a)?$CLJS.oA.h(a):$CLJS.Ad(a)&&$CLJS.z(a)instanceof $CLJS.M?$CLJS.yd($CLJS.id(a))?$CLJS.id(a):null:null};$CLJS.JD=function(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return $CLJS.ID(arguments[0],arguments[1],2<b.length?new $CLJS.w(b.slice(2),0,null):null)};
$CLJS.ID=function(a,b,c){var d=$CLJS.HD(a);b=$CLJS.P.j(b,d,c);if($CLJS.yd(a))a=$CLJS.GD(a,$CLJS.oA,$CLJS.Ie(b));else if($CLJS.Ad(a)&&$CLJS.z(a)instanceof $CLJS.M)a=$CLJS.n($CLJS.uz($CLJS.cl,$CLJS.yd)($CLJS.id(a)))?$CLJS.T.j($CLJS.Ff(a),1,b):$CLJS.gg.g(new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.z(a),b],null),$CLJS.Mc(a));else throw $CLJS.ji($CLJS.iD("Don''t know how to set options for {0}",$CLJS.H([$CLJS.Oh.l($CLJS.H([a]))])),new $CLJS.h(null,1,[$CLJS.BD,a],null));return a};