var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.breakout.js");require("./metabase.lib.equality.js");require("./metabase.lib.filter.js");require("./metabase.lib.ref.js");require("./metabase.lib.remove_replace.js");require("./metabase.lib.schema.js");require("./metabase.lib.schema.literal.js");require("./metabase.lib.schema.metadata.js");require("./metabase.lib.schema.temporal_bucketing.js");require("./metabase.lib.temporal_bucket.js");require("./metabase.lib.util.js");require("./metabase.shared.util.time.js");require("./metabase.util.malli.js");require("./metabase.util.malli.registry.js");
'use strict';var l8=function(a,b,c){return $CLJS.k1($CLJS.NE,new $CLJS.Q(null,3,5,$CLJS.R,[a,b,c],null))},m8=function(a,b){var c=$CLJS.GX(a,$CLJS.lF);return c?$CLJS.x1.g(a,new $CLJS.Q(null,1,5,$CLJS.R,[b],null)):c},n8=function(a,b,c){return $CLJS.fb(function(d,e){$CLJS.I(e,0,null);$CLJS.I(e,1,null);var f=$CLJS.I(e,2,null);return $CLJS.n(m8(f,c))?$CLJS.h5.j(d,b,e):d},a,$CLJS.Q2.g(a,b))},Cua=function(a,b,c,d){return $CLJS.Vd($CLJS.Ud,function(){function e(l,m){var t=$CLJS.O(l);l=$CLJS.J.g(t,$CLJS.HE);
var u=$CLJS.J.g(t,o8);return $CLJS.n(m8(m,c))?($CLJS.n(u)?m=$CLJS.h5.j(l,b,m):(t=$CLJS.oV($CLJS.U2(c,d)),m=$CLJS.k5.v(l,b,m,t)),new $CLJS.h(null,2,[$CLJS.HE,m,o8,!0],null)):t}function f(l){l=$CLJS.O(l);return $CLJS.J.g(l,$CLJS.HE)}var k=null;k=function(l,m){switch(arguments.length){case 1:return f.call(this,l);case 2:return e.call(this,l,m)}throw Error("Invalid arity: "+arguments.length);};k.h=f;k.g=e;return k}(),new $CLJS.h(null,2,[$CLJS.HE,a,o8,!1],null),$CLJS.o5.g(a,b))},p8=new $CLJS.M(null,"south",
"south",1586796293),q8=new $CLJS.M(null,"north","north",651323902),o8=new $CLJS.M(null,"has-seen-column?","has-seen-column?",1994363064),r8=new $CLJS.M(null,"west","west",708776677),s8=new $CLJS.M(null,"east","east",1189821678),Dua=new $CLJS.M("metabase.lib.filter.update","lat-lon.bounds","metabase.lib.filter.update/lat-lon.bounds",1685811701);var t8,u8;$CLJS.Eua=function(){function a(d,e,f,k,l){l=$CLJS.xz($CLJS.Kd,new $CLJS.Q(null,2,5,$CLJS.R,[k,l],null));k=$CLJS.I(l,0,null);l=$CLJS.I(l,1,null);return $CLJS.P2.j(n8(d,e,f),e,l8(f,k,l))}function b(d,e,f,k){return c.M?c.M(d,-1,e,f,k):c.call(null,d,-1,e,f,k)}var c=null;c=function(d,e,f,k,l){switch(arguments.length){case 4:return b.call(this,d,e,f,k);case 5:return a.call(this,d,e,f,k,l)}throw Error("Invalid arity: "+arguments.length);};c.v=b;c.M=a;return c}();
u8=new $CLJS.Q(null,7,5,$CLJS.R,[$CLJS.Ik,$CLJS.Pk,$CLJS.Qk,$CLJS.cj,$CLJS.ij,$CLJS.qi,$CLJS.li],null);t8=$CLJS.nt(u8,$CLJS.ge(null,u8));
$CLJS.Fua=function(){function a(d,e,f,k,l){d=n8(d,e,f);var m=$CLJS.k0.h(f);if($CLJS.Wa(m))return $CLJS.P2.j(d,e,l8(f,k,l));k=$CLJS.g0.l($CLJS.H([$CLJS.Voa.l($CLJS.H([k,m,1])),m]));l=$CLJS.g0.l($CLJS.H([l,m]));var t;a:for(t=m;;){var u=4>$CLJS.Uoa.l($CLJS.H([t,k,l]))?t8.h?t8.h(t):t8.call(null,t):null;if($CLJS.n(u))t=u;else break a}d=$CLJS.E.g(m,t)?d:Cua(d,e,f,t);return $CLJS.E.g($CLJS.p.h(k),$CLJS.p.h(l))?$CLJS.P2.j(d,e,(0,$CLJS.O2)(f,k)):$CLJS.P2.j(d,e,l8(f,k,l))}function b(d,e,f,k){return c.M?c.M(d,
-1,e,f,k):c.call(null,d,-1,e,f,k)}var c=null;c=function(d,e,f,k,l){switch(arguments.length){case 4:return b.call(this,d,e,f,k);case 5:return a.call(this,d,e,f,k,l)}throw Error("Invalid arity: "+arguments.length);};c.v=b;c.M=a;return c}();$CLJS.Y(Dua,new $CLJS.Q(null,5,5,$CLJS.R,[$CLJS.Gj,new $CLJS.Q(null,2,5,$CLJS.R,[q8,$CLJS.dl],null),new $CLJS.Q(null,2,5,$CLJS.R,[s8,$CLJS.dl],null),new $CLJS.Q(null,2,5,$CLJS.R,[p8,$CLJS.dl],null),new $CLJS.Q(null,2,5,$CLJS.R,[r8,$CLJS.dl],null)],null));
$CLJS.Gua=function(){function a(d,e,f,k,l){l=$CLJS.O(l);var m=$CLJS.J.g(l,q8),t=$CLJS.J.g(l,s8),u=$CLJS.J.g(l,p8),v=$CLJS.J.g(l,r8);l=$CLJS.P2.j;d=n8(n8(d,e,f),e,k);u=$CLJS.xz($CLJS.Kd,new $CLJS.Q(null,2,5,$CLJS.R,[m,u],null));m=$CLJS.I(u,0,null);u=$CLJS.I(u,1,null);v=$CLJS.xz($CLJS.Kd,new $CLJS.Q(null,2,5,$CLJS.R,[t,v],null));t=$CLJS.I(v,0,null);v=$CLJS.I(v,1,null);f=$CLJS.k1($CLJS.TE,new $CLJS.Q(null,6,5,$CLJS.R,[f,k,u,t,m,v],null));return l.call($CLJS.P2,d,e,f)}function b(d,e,f,k){return c.M?c.M(d,
-1,e,f,k):c.call(null,d,-1,e,f,k)}var c=null;c=function(d,e,f,k,l){switch(arguments.length){case 4:return b.call(this,d,e,f,k);case 5:return a.call(this,d,e,f,k,l)}throw Error("Invalid arity: "+arguments.length);};c.v=b;c.M=a;return c}();