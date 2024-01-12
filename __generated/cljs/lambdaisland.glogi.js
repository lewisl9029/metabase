var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.string.js");
'use strict';var Yea,mx,ox,lx,Zea,afa,bfa;$CLJS.hx=function(){return null};Yea=function(){};$CLJS.jx=function(a){return $CLJS.E.g($CLJS.ix,a)?"":"string"===typeof a?a:$CLJS.me(a)?$CLJS.ih(a):$CLJS.ne(a)?[$CLJS.ke(a),"/",$CLJS.ih(a)].join(""):$CLJS.p.h(a)};mx=function(a){if("undefined"!==typeof $CLJS.la&&"undefined"!==typeof $CLJS.kx&&"undefined"!==typeof $CLJS.pa){if(!lx){lx={};for(let b=0,c;c=$CLJS.ra[b];b++)lx[c.value]=c,lx[c.name]=c}a=lx[a]||null}else a=null;return a};
ox=function(a,b){a=$CLJS.hx($CLJS.jx(a));null!=a&&(b=$CLJS.J.g($CLJS.nx,b),"undefined"!==typeof $CLJS.la&&"undefined"!==typeof $CLJS.kx&&"undefined"!==typeof Yea||a.Fi(b))};
$CLJS.px=function(a){for(var b=$CLJS.y(a),c=null,d=0,e=0;;)if(e<d){var f=c.X(null,e);a=$CLJS.I(f,0,null);f=$CLJS.I(f,1,null);f="string"===typeof f?$CLJS.Bh.h(f):f;ox(a,f);e+=1}else if(a=$CLJS.y(b))b=a,$CLJS.Bd(b)?(c=$CLJS.mc(b),b=$CLJS.nc(b),a=c,d=$CLJS.D(c),c=a):(c=$CLJS.z(b),a=$CLJS.I(c,0,null),f=$CLJS.I(c,1,null),c="string"===typeof f?$CLJS.Bh.h(f):f,ox(a,c),b=$CLJS.B(b),c=null,d=0),e=0;else return null};$CLJS.qx={};$CLJS.kx={};lx=null;$CLJS.rx=new $CLJS.M(null,"all","all",892129742);
$CLJS.sx=new $CLJS.M(null,"finest","finest",-1359568890);$CLJS.tx=new $CLJS.M(null,"logger-name","logger-name",-1988126927);Zea=new $CLJS.M(null,"off","off",606440789);$CLJS.ux=new $CLJS.M(null,"shout","shout",186018337);$CLJS.vx=new $CLJS.M(null,"config","config",994861415);$CLJS.wx=new $CLJS.M(null,"debug","debug",-1608172596);$CLJS.$ea=new $CLJS.M(null,"sequenceNumber","sequenceNumber",-543983615);$CLJS.xx=new $CLJS.M(null,"error","error",-978969032);afa=new $CLJS.M(null,"root","root",-448657453);
$CLJS.yx=new $CLJS.M(null,"finer","finer",974902846);bfa=new $CLJS.M(null,"trace","trace",-1082747415);$CLJS.zx=new $CLJS.M(null,"warn","warn",-436710552);$CLJS.Ax=new $CLJS.M(null,"time","time",1385887882);$CLJS.ix=new $CLJS.M("glogi","root","glogi/root",-77414841);$CLJS.Bx=new $CLJS.M(null,"info","info",-317069002);$CLJS.Cx=new $CLJS.M(null,"fine","fine",-873037193);$CLJS.Dx=new $CLJS.M(null,"warning","warning",-1685650671);$CLJS.Ex=new $CLJS.M(null,"severe","severe",-1364500238);
$CLJS.Fx=new $CLJS.M(null,"exception","exception",-335277064);var Gx="undefined"!==typeof $CLJS.la&&"undefined"!==typeof $CLJS.kx&&"undefined"!==typeof $CLJS.pa?$CLJS.pa:$CLJS.qx.pj.Wi;$CLJS.jx("");var Hx,Ix=Gx.Yi;Hx=$CLJS.n(Ix)?Ix:mx("SHOUT");var Jx,Kx=Gx.Ui;Jx=$CLJS.n(Kx)?Kx:mx("FINEST");var Lx,Mx=Gx.Ti;Lx=$CLJS.n(Mx)?Mx:mx("CONFIG");var Nx,Ox=Gx.Jg;Nx=$CLJS.n(Ox)?Ox:mx("WARNING");var Px,Qx=Gx.Gg;Px=$CLJS.n(Qx)?Qx:mx("FINER");var Rx,Sx=Gx.Fg;Rx=$CLJS.n(Sx)?Sx:mx("FINE");var Tx,Ux=Gx.Si;Tx=$CLJS.n(Ux)?Ux:mx("ALL");var Vx,Wx=Gx.Jg;Vx=$CLJS.n(Wx)?Wx:mx("WARNING");
var Xx,Yx=Gx.Ig;Xx=$CLJS.n(Yx)?Yx:mx("SEVERE");var Zx,$x=Gx.Xi;Zx=$CLJS.n($x)?$x:mx("OFF");var ay,by=Gx.Vi;ay=$CLJS.n(by)?by:mx("INFO");var cy,dy=Gx.Fg;cy=$CLJS.n(dy)?dy:mx("FINE");var ey,fy=Gx.Ig;ey=$CLJS.n(fy)?fy:mx("SEVERE");var gy,hy=Gx.Gg;gy=$CLJS.n(hy)?hy:mx("FINER");$CLJS.nx=$CLJS.Kg([$CLJS.ux,$CLJS.sx,$CLJS.vx,$CLJS.zx,bfa,$CLJS.wx,$CLJS.rx,$CLJS.Dx,$CLJS.Ex,Zea,$CLJS.Bx,$CLJS.Cx,$CLJS.xx,$CLJS.yx],[Hx,Jx,Lx,Nx,Px,Rx,Tx,Vx,Xx,Zx,ay,cy,ey,gy]);ox(afa,$CLJS.Bx);module.exports={set_levels:$CLJS.px};