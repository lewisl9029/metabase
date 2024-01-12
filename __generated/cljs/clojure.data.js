var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.set.js");
'use strict';var Xs,ada,bda,$s,cda,ct,dt;
$CLJS.Ws=function(a,b,c){return function(){function d(t,u,v){return a.M?a.M(b,c,t,u,v):a.call(null,b,c,t,u,v)}function e(t,u){return a.v?a.v(b,c,t,u):a.call(null,b,c,t,u)}function f(t){return a.j?a.j(b,c,t):a.call(null,b,c,t)}function k(){return a.g?a.g(b,c):a.call(null,b,c)}var l=null,m=function(){function t(v,x,A,C){var G=null;if(3<arguments.length){G=0;for(var K=Array(arguments.length-3);G<K.length;)K[G]=arguments[G+3],++G;G=new $CLJS.w(K,0,null)}return u.call(this,v,x,A,G)}function u(v,x,A,C){return $CLJS.P.l(a,
b,c,v,x,$CLJS.H([A,C]))}t.A=3;t.B=function(v){var x=$CLJS.z(v);v=$CLJS.B(v);var A=$CLJS.z(v);v=$CLJS.B(v);var C=$CLJS.z(v);v=$CLJS.Mc(v);return u(x,A,C,v)};t.l=u;return t}();l=function(t,u,v,x){switch(arguments.length){case 0:return k.call(this);case 1:return f.call(this,t);case 2:return e.call(this,t,u);case 3:return d.call(this,t,u,v);default:var A=null;if(3<arguments.length){A=0;for(var C=Array(arguments.length-3);A<C.length;)C[A]=arguments[A+3],++A;A=new $CLJS.w(C,0,null)}return m.l(t,u,v,A)}throw Error("Invalid arity: "+
arguments.length);};l.A=3;l.B=m.B;l.o=k;l.h=f;l.g=e;l.j=d;l.l=m.l;return l}()};Xs=function(a,b){return $CLJS.E.g(a,b)?new $CLJS.Q(null,3,5,$CLJS.R,[null,null,a],null):new $CLJS.Q(null,3,5,$CLJS.R,[a,b,null],null)};ada=function(a){return $CLJS.y(a)?$CLJS.fb(function(b,c){var d=$CLJS.I(c,0,null);c=$CLJS.I(c,1,null);return $CLJS.T.j(b,d,c)},$CLJS.Ff($CLJS.ff($CLJS.P.g($CLJS.ek,$CLJS.Zg(a)),null)),a):null};
bda=function(a,b,c){var d=$CLJS.J.g(a,c),e=$CLJS.J.g(b,c),f=$CLJS.Ys(d,e),k=$CLJS.I(f,0,null),l=$CLJS.I(f,1,null);f=$CLJS.I(f,2,null);a=$CLJS.Jd(a,c);b=$CLJS.Jd(b,c);d=a&&b&&(null!=f||null==d&&null==e);return new $CLJS.Q(null,3,5,$CLJS.R,[!a||null==k&&d?null:$CLJS.He([c,k]),!b||null==l&&d?null:$CLJS.He([c,l]),d?$CLJS.He([c,f]):null],null)};
$s=function(a,b){var c=$CLJS.kf.g,d=Zs.j,e=$CLJS.Ad(a)?a:$CLJS.Ff(a),f=$CLJS.Ad(b)?b:$CLJS.Ff(b);a=$CLJS.D(a);b=$CLJS.D(b);return $CLJS.Ff(c.call($CLJS.kf,ada,d.call(Zs,e,f,$CLJS.nh(0,a>b?a:b))))};cda=function(a,b){return new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.Ie($CLJS.at.g(a,b)),$CLJS.Ie($CLJS.at.g(b,a)),$CLJS.Ie($CLJS.bt.g(a,b))],null)};
ct=function(a){if(null!=a&&null!=a.hh)a=a.hh(a);else{var b=ct[$CLJS.xa(null==a?null:a)];if(null!=b)a=b.h?b.h(a):b.call(null,a);else if(b=ct._,null!=b)a=b.h?b.h(a):b.call(null,a);else throw $CLJS.cb("EqualityPartition.equality-partition",a);}return a};dt=function(a,b){if(null!=a&&null!=a.gh)a=a.gh(a,b);else{var c=dt[$CLJS.xa(null==a?null:a)];if(null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else if(c=dt._,null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else throw $CLJS.cb("Diff.diff-similar",a);}return a};
$CLJS.Ys=function(a,b){return $CLJS.E.g(a,b)?new $CLJS.Q(null,3,5,$CLJS.R,[null,null,a],null):$CLJS.E.g(ct(a),ct(b))?dt(a,b):Xs(a,b)};$CLJS.bt=function bt(a){switch(arguments.length){case 1:return bt.h(arguments[0]);case 2:return bt.g(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return bt.l(arguments[0],arguments[1],new $CLJS.w(c.slice(2),0,null))}};$CLJS.bt.h=function(a){return a};
$CLJS.bt.g=function(a,b){for(;;)if($CLJS.D(b)<$CLJS.D(a)){var c=a;a=b;b=c}else return $CLJS.fb(function(d,e){return function(f,k){return $CLJS.Jd(e,k)?f:$CLJS.bk.g(f,k)}}(a,b),a,a)};$CLJS.bt.l=function(a,b,c){a=$CLJS.Ts(function(d){return-$CLJS.D(d)},$CLJS.de.l(c,b,$CLJS.H([a])));return $CLJS.fb($CLJS.bt,$CLJS.z(a),$CLJS.Mc(a))};$CLJS.bt.B=function(a){var b=$CLJS.z(a),c=$CLJS.B(a);a=$CLJS.z(c);c=$CLJS.B(c);return this.l(b,a,c)};$CLJS.bt.A=2;
$CLJS.at=function at(a){switch(arguments.length){case 1:return at.h(arguments[0]);case 2:return at.g(arguments[0],arguments[1]);default:for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return at.l(arguments[0],arguments[1],new $CLJS.w(c.slice(2),0,null))}};$CLJS.at.h=function(a){return a};$CLJS.at.g=function(a,b){return $CLJS.D(a)<$CLJS.D(b)?$CLJS.fb(function(c,d){return $CLJS.Jd(b,d)?$CLJS.bk.g(c,d):c},a,a):$CLJS.fb($CLJS.bk,a,b)};
$CLJS.at.l=function(a,b,c){return $CLJS.fb($CLJS.at,a,$CLJS.de.g(c,b))};$CLJS.at.B=function(a){var b=$CLJS.z(a),c=$CLJS.B(a);a=$CLJS.z(c);c=$CLJS.B(c);return this.l(b,a,c)};$CLJS.at.A=2;var et=new $CLJS.M(null,"atom","atom",-397043653);var Zs=function Zs(a){switch(arguments.length){case 2:return Zs.g(arguments[0],arguments[1]);case 3:return Zs.j(arguments[0],arguments[1],arguments[2]);default:throw Error(["Invalid arity: ",$CLJS.p.h(arguments.length)].join(""));}};Zs.g=function(a,b){return Zs.j(a,b,$CLJS.Vs.g($CLJS.Zg(a),$CLJS.Zg(b)))};Zs.j=function(a,b,c){return $CLJS.fb(function(d,e){return $CLJS.oh($CLJS.kf.j($CLJS.zk,d,e))},new $CLJS.Q(null,3,5,$CLJS.R,[null,null,null],null),$CLJS.kf.g($CLJS.Ws(bda,a,b),c))};Zs.A=3;
ct["null"]=function(){return et};ct.string=function(){return et};ct.number=function(){return et};ct.array=function(){return $CLJS.kj};ct["function"]=function(){return et};ct["boolean"]=function(){return et};
ct._=function(a){return(null!=a?a.C&1024||$CLJS.Cc===a.Vg||(a.C?0:$CLJS.ab($CLJS.Cb,a)):$CLJS.ab($CLJS.Cb,a))?$CLJS.Gj:(null!=a?a.C&4096||$CLJS.Cc===a.Zg||(a.C?0:$CLJS.ab($CLJS.Hb,a)):$CLJS.ab($CLJS.Hb,a))?$CLJS.Ti:(null!=a?a.C&16777216||$CLJS.Cc===a.pf||(a.C?0:$CLJS.ab($CLJS.Xb,a)):$CLJS.ab($CLJS.Xb,a))?$CLJS.kj:et};dt["null"]=function(a,b){return Xs(a,b)};dt.string=function(a,b){return Xs(a,b)};dt.number=function(a,b){return Xs(a,b)};dt.array=function(a,b){return $s(a,b)};
dt["function"]=function(a,b){return Xs(a,b)};dt["boolean"]=function(a,b){return Xs(a,b)};dt._=function(a,b){var c=function(){var d=ct(a);d=d instanceof $CLJS.M?d.S:null;switch(d){case "atom":return Xs;case "set":return cda;case "sequential":return $s;case "map":return Zs;default:throw Error(["No matching clause: ",$CLJS.p.h(d)].join(""));}}();return c.g?c.g(a,b):c.call(null,a,b)};