var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./clojure.string.js");require("./clojure.walk.js");require("./no.en.core.js");
'use strict';var z1,Kpa,A1,E1,G1;z1=function(a,b,c,d,e){this.pattern=a;this.Ec=b;this.T=c;this.G=d;this.J=e;this.C=2230716170;this.I=139264};Kpa=function(a,b){return new z1(a,b,null,null,null)};A1=function(a,b){$CLJS.Jd($CLJS.hh($CLJS.q(a)),b)||$CLJS.Qh.j(a,$CLJS.de,b)};$CLJS.B1=function(a){if(null==a||"string"===typeof a)return a;if(a instanceof $CLJS.M||a instanceof $CLJS.r){var b=$CLJS.ke(a);return $CLJS.n(b)?[b,"/",$CLJS.ih(a)].join(""):$CLJS.ih(a)}return null};
E1=function(a){a=$CLJS.y($CLJS.P.g(C1,a));for(var b=null,c=0,d=0;;)if(d<c){var e=b.X(null,d);A1($CLJS.D1,e);d+=1}else if(a=$CLJS.y(a))b=a,$CLJS.Bd(b)?(a=$CLJS.mc(b),c=$CLJS.nc(b),b=a,e=$CLJS.D(a),a=c,c=e):(e=$CLJS.z(b),A1($CLJS.D1,e),a=$CLJS.B(b),b=null,c=0),d=0;else break};
G1=function(a){a=$CLJS.y($CLJS.P.g(C1,a));for(var b=null,c=0,d=0;;)if(d<c){var e=b.X(null,d);A1(F1,e);d+=1}else if(a=$CLJS.y(a))b=a,$CLJS.Bd(b)?(a=$CLJS.mc(b),c=$CLJS.nc(b),b=a,e=$CLJS.D(a),a=c,c=e):(e=$CLJS.z(b),A1(F1,e),a=$CLJS.B(b),b=null,c=0),d=0;else break};var F1,I1;$CLJS.g=z1.prototype;$CLJS.g.na=function(a,b){return this.$(null,b,null)};$CLJS.g.$=function(a,b,c){switch(b instanceof $CLJS.M?b.S:null){case "pattern":return this.pattern;case "replacement":return this.Ec;default:return $CLJS.J.j(this.G,b,c)}};$CLJS.g.Fb=function(a,b,c){return $CLJS.fb(function(d,e){var f=$CLJS.I(e,0,null);e=$CLJS.I(e,1,null);return b.j?b.j(d,f,e):b.call(null,d,f,e)},c,this)};
$CLJS.g.da=function(a,b,c){return $CLJS.uh(b,function(d){return $CLJS.uh(b,$CLJS.Ah,""," ","",c,d)},"#inflections.core.Rule{",", ","}",c,$CLJS.jf.g(new $CLJS.Q(null,2,5,$CLJS.R,[new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.ez,this.pattern],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.fz,this.Ec],null)],null),this.G))};$CLJS.g.Da=function(){return new $CLJS.es(this,2,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.ez,$CLJS.fz],null),$CLJS.n(this.G)?$CLJS.sc(this.G):$CLJS.Ke())};$CLJS.g.O=function(){return this.T};
$CLJS.g.ha=function(){return 2+$CLJS.D(this.G)};$CLJS.g.fa=function(){var a=this.J;return null!=a?a:this.J=a=-1327743444^$CLJS.Rc(this)};$CLJS.g.V=function(a,b){return null!=b&&this.constructor===b.constructor&&$CLJS.E.g(this.pattern,b.pattern)&&$CLJS.E.g(this.Ec,b.Ec)&&$CLJS.E.g(this.G,b.G)};
$CLJS.g.Gb=function(a,b){return $CLJS.Jd(new $CLJS.ch(null,new $CLJS.h(null,2,[$CLJS.fz,null,$CLJS.ez,null],null),null),b)?$CLJS.ak.g($CLJS.Pb($CLJS.gg.g($CLJS.N,this),this.T),b):new z1(this.pattern,this.Ec,this.T,$CLJS.Ie($CLJS.ak.g(this.G,b)),null)};$CLJS.g.Va=function(a,b){switch(b instanceof $CLJS.M?b.S:null){case "pattern":case "replacement":return!0;default:return $CLJS.Jd(this.G,b)}};
$CLJS.g.ma=function(a,b,c){return $CLJS.n($CLJS.je.g?$CLJS.je.g($CLJS.ez,b):$CLJS.je.call(null,$CLJS.ez,b))?new z1(c,this.Ec,this.T,this.G,null):$CLJS.n($CLJS.je.g?$CLJS.je.g($CLJS.fz,b):$CLJS.je.call(null,$CLJS.fz,b))?new z1(this.pattern,c,this.T,this.G,null):new z1(this.pattern,this.Ec,this.T,$CLJS.T.j(this.G,b,c),null)};$CLJS.g.ga=function(){return $CLJS.y($CLJS.jf.g(new $CLJS.Q(null,2,5,$CLJS.R,[new $CLJS.$f($CLJS.ez,this.pattern),new $CLJS.$f($CLJS.fz,this.Ec)],null),this.G))};
$CLJS.g.P=function(a,b){return new z1(this.pattern,this.Ec,b,this.G,this.J)};$CLJS.g.ja=function(a,b){return $CLJS.Ad(b)?this.ma(null,$CLJS.ld(b,0),$CLJS.ld(b,1)):$CLJS.fb($CLJS.qb,this,b)};var C1=function C1(a){for(var c=[],d=arguments.length,e=0;;)if(e<d)c.push(arguments[e]),e+=1;else break;return C1.l(0<c.length?new $CLJS.w(c.slice(0),0,null):null)};C1.l=function(a){return $CLJS.kf.g(function(b){return $CLJS.P.g(Kpa,b)},$CLJS.Vr(2,2,a))};C1.A=0;C1.B=function(a){return this.l($CLJS.y(a))};
$CLJS.H1=$CLJS.Ze(new $CLJS.ch(null,new $CLJS.h(null,81,["gossip",null,"sadness",null,"space",null,"happiness",null,"blood",null,"silver",null,"cotton",null,"species",null,"mist",null,"paper",null,"education",null,"wine",null,"up",null,"food",null,"sugar",null,"gold",null,"literature",null,"pork",null,"lightning",null,"sheep",null,"shopping",null,"fresh",null,"news",null,"pepper",null,"experience",null,"milk",null,"honey",null,"oxygen",null,"fiction",null,"luck",null,"vinegar",null,"coffee",null,
"ground",null,"peanut",null,"confusion",null,"tennis",null,"power",null,"meat",null,"butter",null,"music",null,"luggage",null,"love",null,"grass",null,"knowledge",null,"time",null,"cheese",null,"jam",null,"thunder",null,"electricity",null,"gum",null,"sunshine",null,"history",null,"snow",null,"money",null,"wool",null,"rice",null,"series",null,"liquid",null,"equipment",null,"pressure",null,"oil",null,"information",null,"steam",null,"chewing",null,"petrol",null,"research",null,"patience",null,"toothpaste",
null,"speed",null,"entertainment",null,"wood",null,"tea",null,"art",null,"washing",null,"forgiveness",null,"traffic",null,"alcohol",null,"ice",null,"homework",null,"fish",null,"air",null],null),null));$CLJS.D1=$CLJS.Ze($CLJS.Ef);F1=$CLJS.Ze($CLJS.Ef);I1=$CLJS.Ze(function(a){for(var b=[],c=arguments.length,d=0;;)if(d<c)b.push(arguments[d]),d+=1;else break;return $CLJS.fb($CLJS.qb,$CLJS.yaa,0<b.length?new $CLJS.w(b.slice(0),0,null):null)}());
E1($CLJS.H([/$/i,"s",/s$/i,"s",/(ax|test)is$/i,"$1es",/(octop|vir)us$/i,"$1i",/(alias|status)$/i,"$1es",/(bu)s$/i,"$1ses",/(buffal|tomat)o$/i,"$1oes",/([ti])um$/i,"$1a",/sis$/i,"ses",/(?:([^f])fe|([lr])f)$/i,"$1$2ves",/(hive)$/i,"$1s",/([^aeiouy]|qu)y$/i,"$1ies",/(x|ch|ss|sh)$/i,"$1es",/(matr|vert|ind)(?:ix|ex)$/i,"$1ices",/([m|l])ouse$/i,"$1ice",/^(ox)$/i,"$1en",/(quiz)$/i,"$1zes"]));
G1($CLJS.H([/s$/i,"",/(ss)$/i,"$1",/(n)ews$/i,"$1ews",/([ti])a$/i,"$1um",/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1$2sis",/(^analy)(sis|ses)$/i,"$1sis",/([^f])ves$/i,"$1fe",/(hive)s$/i,"$1",/(tive)s$/i,"$1",/([lr])ves$/i,"$1f",/([^aeiouy]|qu)ies$/i,"$1y",/(s)eries$/i,"$1eries",/(m)ovies$/i,"$1ovie",/(x|ch|ss|sh)es$/i,"$1",/([m|l])ice$/i,"$1ouse",/(bus)(es)?$/i,"$1",/(o)es$/i,"$1",/(shoe)s$/i,"$1",/(cris|ax|test)(is|es)$/i,"$1is",/(octop|vir)(us|i)$/i,"$1us",/(alias|status)(es)?$/i,
"$1",/^(ox)en/i,"$1",/(vert|ind)ices$/i,"$1ex",/(matr)ices$/i,"$1ix",/(quiz)zes$/i,"$1",/(database)s$/i,"$1"]));
$CLJS.oh($CLJS.kf.g(function(a){var b=$CLJS.z(a);a=$CLJS.id(a);b=$CLJS.B1(b).toLowerCase();a=$CLJS.B1(a).toLowerCase();$CLJS.Qh.j($CLJS.H1,$CLJS.bk,$CLJS.B1(b).toLowerCase());$CLJS.Qh.j($CLJS.H1,$CLJS.bk,$CLJS.B1(a).toLowerCase());G1($CLJS.H([$CLJS.rh(["^",a,"$"].join("")),b]));E1($CLJS.H([$CLJS.rh(["^",b,"$"].join("")),a]));$CLJS.Qh.j(I1,$CLJS.de,b);return $CLJS.Qh.j(I1,$CLJS.de,a)},new $CLJS.Q(null,14,5,$CLJS.R,[new $CLJS.Q(null,2,5,$CLJS.R,["amenity","amenities"],null),new $CLJS.Q(null,2,5,$CLJS.R,
["child","children"],null),new $CLJS.Q(null,2,5,$CLJS.R,["cow","kine"],null),new $CLJS.Q(null,2,5,$CLJS.R,["foot","feet"],null),new $CLJS.Q(null,2,5,$CLJS.R,["louse","lice"],null),new $CLJS.Q(null,2,5,$CLJS.R,["mailman","mailmen"],null),new $CLJS.Q(null,2,5,$CLJS.R,["man","men"],null),new $CLJS.Q(null,2,5,$CLJS.R,["mouse","mice"],null),new $CLJS.Q(null,2,5,$CLJS.R,["move","moves"],null),new $CLJS.Q(null,2,5,$CLJS.R,["ox","oxen"],null),new $CLJS.Q(null,2,5,$CLJS.R,["person","people"],null),new $CLJS.Q(null,
2,5,$CLJS.R,["sex","sexes"],null),new $CLJS.Q(null,2,5,$CLJS.R,["tooth","teeth"],null),new $CLJS.Q(null,2,5,$CLJS.R,["woman","women"],null)],null)));