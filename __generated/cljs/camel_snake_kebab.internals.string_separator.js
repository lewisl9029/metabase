var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.string.js");
'use strict';var Yca,Zca,Rs,Ps;$CLJS.Ms=function(a,b){return $CLJS.hs(a,b,0)};$CLJS.Ns=function(a,b){if(null!=a&&null!=a.df)a=a.df(a,b);else{var c=$CLJS.Ns[$CLJS.xa(null==a?null:a)];if(null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else if(c=$CLJS.Ns._,null!=c)a=c.g?c.g(a,b):c.call(null,a,b);else throw $CLJS.cb("StringSeparator.split",a);}return a};
Yca=function(a){switch(a){case "0":case "1":case "2":case "3":case "4":case "5":case "6":case "7":case "8":case "9":return $CLJS.Os;case "-":case "_":case " ":case "\t":case "\n":case "\v":case "\f":case "\r":return Ps;case "a":case "b":case "c":case "d":case "e":case "f":case "g":case "h":case "i":case "j":case "k":case "l":case "m":case "n":case "o":case "p":case "q":case "r":case "s":case "t":case "u":case "v":case "w":case "x":case "y":case "z":return $CLJS.os;case "A":case "B":case "C":case "D":case "E":case "F":case "G":case "H":case "I":case "J":case "K":case "L":case "M":case "N":case "O":case "P":case "Q":case "R":case "S":case "T":case "U":case "V":case "W":case "X":case "Y":case "Z":return $CLJS.is;
default:return $CLJS.Qs}};
Zca=function(a){for(var b=$CLJS.jk.g(Yca,a),c=a.length,d=$CLJS.ec($CLJS.Ef),e=0,f=0;;){var k=f+1,l=function(m,t){return function(u){return u>t?$CLJS.gc(m,a.substring(t,u)):m}}(d,e,f,k,b,c);if(f>=c)return(c=$CLJS.y($CLJS.hc(l(f))))?c:new $CLJS.Q(null,1,5,$CLJS.R,[""],null);$CLJS.E.g($CLJS.F(b,f),Ps)?(d=l(f),f=e=k):function(){var m=$CLJS.ok.g(b,f),t=$CLJS.I(m,0,null),u=$CLJS.I(m,1,null);m=$CLJS.I(m,2,null);return $CLJS.gk.g(t,$CLJS.is)&&$CLJS.E.g(u,$CLJS.is)||$CLJS.gk.g(t,$CLJS.Os)&&$CLJS.E.g(u,$CLJS.Os)||
$CLJS.E.g(t,$CLJS.is)&&$CLJS.E.g(u,$CLJS.is)&&$CLJS.E.g(m,$CLJS.os)}()?(d=l(k),f=e=k):f=k}};Rs=function(a){this.Ch=a;this.C=393216;this.I=0};$CLJS.Os=new $CLJS.M(null,"number","number",1570378438);Ps=new $CLJS.M(null,"whitespace","whitespace",-1340035483);$CLJS.Qs=new $CLJS.M(null,"other","other",995793544);RegExp.prototype.df=function(a,b){return $CLJS.Ms(b,this)};$CLJS.Ns.string=function(a,b){return $CLJS.Ms(b,a)};Rs.prototype.P=function(a,b){return new Rs(b)};Rs.prototype.O=function(){return this.Ch};Rs.prototype.df=function(a,b){return Zca(b)};$CLJS.$ca=new Rs($CLJS.N);