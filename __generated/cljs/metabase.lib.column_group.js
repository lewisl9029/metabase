var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.card.js");require("./metabase.lib.equality.js");require("./metabase.lib.join.js");require("./metabase.lib.join.util.js");require("./metabase.lib.metadata.js");require("./metabase.lib.metadata.calculation.js");require("./metabase.lib.options.js");require("./metabase.lib.schema.common.js");require("./metabase.lib.schema.id.js");require("./metabase.lib.util.js");require("./metabase.util.malli.js");
'use strict';var t3,era,w3,x3,y3;$CLJS.s3=function(a,b,c){var d=$CLJS.DV(a,b);d=$CLJS.O(d);d=$CLJS.J.g(d,$CLJS.BM);var e=$CLJS.rG(function(f){return $CLJS.E.g($CLJS.XD.h(f),c)},d);if($CLJS.n(e))return e;throw $CLJS.ji($CLJS.iD("No join named {0}, found: {1}",$CLJS.H([$CLJS.Oh.l($CLJS.H([c])),$CLJS.Oh.l($CLJS.H([$CLJS.jk.g($CLJS.XD,d)]))])),new $CLJS.h(null,3,[$CLJS.rO,c,$CLJS.HE,a,$CLJS.CK,b],null));};t3=new $CLJS.M("metabase.lib.column-group","group-type","metabase.lib.column-group/group-type",6276454);
$CLJS.u3=new $CLJS.M("metadata","column-group","metadata/column-group",-902258024);era=new $CLJS.M(null,"fk-reference-name","fk-reference-name",74295339);$CLJS.v3=new $CLJS.M("metabase.lib.column-group","columns","metabase.lib.column-group/columns",1229087729);w3=new $CLJS.M("group-type","main","group-type/main",-938346573);x3=new $CLJS.M("group-type","join.implicit","group-type/join.implicit",-684408229);y3=new $CLJS.M("group-type","join.explicit","group-type/join.explicit",-627022785);var fra,gra,hra,ira,jra;$CLJS.K_.m(null,$CLJS.u3,function(a,b,c){return c});var z3=function(){var a=$CLJS.Ze($CLJS.N),b=$CLJS.Ze($CLJS.N),c=$CLJS.Ze($CLJS.N),d=$CLJS.Ze($CLJS.N),e=$CLJS.J.j($CLJS.N,$CLJS.Jk,$CLJS.Xh.o?$CLJS.Xh.o():$CLJS.Xh.call(null));return new $CLJS.fi($CLJS.Hh.g("metabase.lib.column-group","display-info-for-group-method"),function(f,k,l){return t3.h(l)},e,a,b,c,d)}();
z3.m(null,w3,function(a,b){return $CLJS.zk.l($CLJS.H([function(){var c=$CLJS.DV(a,b),d=function(){var e=$CLJS.cO.h(c);e=null==e?null:$CLJS.YZ(a,e);return $CLJS.n(e)?$CLJS.h_.j(a,b,e):null}();if($CLJS.n(d))return d;d=function(){var e=$CLJS.MU.h(c);e=null==e?null:$CLJS.$Z(a,e);return $CLJS.n(e)?$CLJS.h_.j(a,b,e):null}();if($CLJS.n(d))return d;d=$CLJS.B($CLJS.oK.h(a))?new $CLJS.h(null,1,[$CLJS.nD,""],null):null;return $CLJS.n(d)?d:new $CLJS.h(null,1,[$CLJS.nD,$CLJS.e_.j(a,b,c)],null)}(),new $CLJS.h(null,
2,[$CLJS.j_,!1,$CLJS.l_,!1],null)]))});
z3.m(null,y3,function(a,b,c){c=$CLJS.O(c);var d=$CLJS.J.g(c,$CLJS.rO),e=$CLJS.J.g(c,$CLJS.XJ),f=$CLJS.J.g(c,$CLJS.$P);return $CLJS.zk.l($CLJS.H([function(){var k=$CLJS.n(d)?function(){var l=$CLJS.s3(a,b,d);return $CLJS.n(l)?$CLJS.h_.j(a,b,l):null}():null;if($CLJS.n(k))return k;k=$CLJS.n(e)?function(){var l=$CLJS.YZ(a,e);return $CLJS.n(l)?$CLJS.h_.j(a,b,l):null}():null;return $CLJS.n(k)?k:$CLJS.n(f)?(k=$CLJS.$Z(a,f),$CLJS.n(k)?$CLJS.h_.j(a,b,k):new $CLJS.h(null,1,[$CLJS.nD,$CLJS.d1(f)],null)):null}(),
new $CLJS.h(null,2,[$CLJS.j_,!0,$CLJS.l_,!1],null)]))});
z3.m(null,x3,function(a,b,c){c=$CLJS.O(c);var d=$CLJS.J.g(c,$CLJS.WJ);c=$CLJS.zk.l;if("string"===typeof d){var e=$CLJS.DV(a,b);e=null==e?null:$CLJS.P_.j(a,b,e);d=null==e?null:$CLJS.x1.v(a,b,$CLJS.nV(new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.lF,new $CLJS.h(null,1,[$CLJS.nA,$CLJS.lj],null),d],null)),e);d=null==d?null:$CLJS.Si.h(d);d=null==d?null:$CLJS.Q0(a,d)}else d=$CLJS.Q0(a,d);$CLJS.n(d)?(a=$CLJS.h_.j(a,b,d),a=$CLJS.T.j(a,era,(0,$CLJS.na)($CLJS.Az($CLJS.nD.h(a),$CLJS.QV,"")))):a=null;return c.call($CLJS.zk,
$CLJS.H([a,new $CLJS.h(null,2,[$CLJS.j_,!1,$CLJS.l_,!0],null)]))});$CLJS.L_.m(null,$CLJS.u3,function(a,b,c){return z3.j(a,b,c)});fra=$CLJS.Ze($CLJS.N);gra=$CLJS.Ze($CLJS.N);hra=$CLJS.Ze($CLJS.N);ira=$CLJS.Ze($CLJS.N);jra=$CLJS.J.j($CLJS.N,$CLJS.Jk,$CLJS.Xh.o?$CLJS.Xh.o():$CLJS.Xh.call(null));$CLJS.A3=new $CLJS.fi($CLJS.Hh.g("metabase.lib.column-group","column-group-info-method"),$CLJS.IJ,jra,fra,gra,hra,ira);
$CLJS.A3.m(null,$CLJS.GY,function(a){return new $CLJS.h(null,3,[t3,x3,$CLJS.WJ,$CLJS.WJ.h(a),$CLJS.r_,$CLJS.r_.h(a)],null)});
$CLJS.A3.m(null,$CLJS.HY,function(a){var b=$CLJS.O(a),c=$CLJS.J.g(b,$CLJS.XJ),d=$CLJS.J.g(b,$CLJS.XY);a=$CLJS.zk.l;var e=new $CLJS.h(null,1,[t3,y3],null);b=$CLJS.Z0(b);b=$CLJS.n(b)?new $CLJS.h(null,1,[$CLJS.rO,b],null):null;$CLJS.n(b)?c=b:(d=$CLJS.n(d)?new $CLJS.h(null,1,[$CLJS.$P,d],null):null,c=$CLJS.n(d)?d:$CLJS.n(c)?new $CLJS.h(null,1,[$CLJS.XJ,c],null):null);return a.call($CLJS.zk,$CLJS.H([e,c]))});$CLJS.A3.m(null,$CLJS.ei,function(){return new $CLJS.h(null,1,[t3,w3],null)});