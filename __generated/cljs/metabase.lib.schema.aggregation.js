var window=global;var $CLJS=require("./cljs_env.js");require("./cljs.core.js");require("./metabase.lib.hierarchy.js");require("./metabase.lib.schema.expression.js");require("./metabase.lib.schema.mbql_clause.js");require("./metabase.shared.util.i18n.js");require("./metabase.util.malli.registry.js");
'use strict';var Dga,Ega,Fga,Gga,Hga,Iga,Jga,PF,Kga,Lga,Mga,Nga,Oga,Pga,Qga,Rga,RF,Sga;$CLJS.LF=new $CLJS.M(null,"supported-field","supported-field",-2061545519);Dga=new $CLJS.M("mbql.clause","distinct","mbql.clause/distinct",843025748);$CLJS.MF=new $CLJS.M("metabase.lib.schema.aggregation","aggregations","metabase.lib.schema.aggregation/aggregations",-203649172);Ega=new $CLJS.M("mbql.clause","count-where","mbql.clause/count-where",2010666417);
Fga=new $CLJS.M("mbql.clause","sum-where","mbql.clause/sum-where",-1599647617);$CLJS.NF=new $CLJS.M(null,"requires-column?","requires-column?",1623131448);Gga=new $CLJS.M("metabase.lib.schema.aggregation","operator","metabase.lib.schema.aggregation/operator",2070038764);$CLJS.OF=new $CLJS.M(null,"display-info","display-info",-816930907);Hga=new $CLJS.M("mbql.clause","max","mbql.clause/max",1615385533);Iga=new $CLJS.M("mbql.clause","cum-count","mbql.clause/cum-count",-1408720642);
Jga=new $CLJS.M("mbql.clause","median","mbql.clause/median",-1026386338);PF=new $CLJS.M("metabase.lib.schema.aggregation","percentile.percentile","metabase.lib.schema.aggregation/percentile.percentile",-144637711);Kga=new $CLJS.M("mbql.clause","min","mbql.clause/min",2074448531);Lga=new $CLJS.M("mbql.clause","percentile","mbql.clause/percentile",2064253651);Mga=new $CLJS.M("mbql.clause","stddev","mbql.clause/stddev",659381076);Nga=new $CLJS.M("mbql.clause","var","mbql.clause/var",809434920);
Oga=new $CLJS.M("mbql.clause","share","mbql.clause/share",-37921592);Pga=new $CLJS.M("mbql.clause","count","mbql.clause/count",-454225910);Qga=new $CLJS.M("mbql.clause","cum-sum","mbql.clause/cum-sum",468410018);$CLJS.QF=new $CLJS.M(null,"driver-feature","driver-feature",1905324248);Rga=new $CLJS.M("mbql.clause","avg","mbql.clause/avg",1826863173);RF=new $CLJS.M("metabase.lib.schema.aggregation","aggregation","metabase.lib.schema.aggregation/aggregation",-736862750);
$CLJS.SF=new $CLJS.M("operator","aggregation","operator/aggregation",-1961510924);Sga=new $CLJS.M("mbql.clause","sum","mbql.clause/sum",1691012107);$CLJS.AE($CLJS.Mw,$CLJS.H([$CLJS.Yr,$CLJS.hj,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.kA,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Mq,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.ZD],null)],null)],null)],null)]));$CLJS.AE($CLJS.mF,$CLJS.H([$CLJS.Yr,$CLJS.hj,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.kA,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Mq,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.ZD],null)],null)],null)],null)]));
$CLJS.yE($CLJS.fF,$CLJS.H([$CLJS.Yr,$CLJS.LC,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null)],null)]));$CLJS.yE($CLJS.QE,$CLJS.H([$CLJS.Yr,$CLJS.hj,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.ZD],null)],null)]));$CLJS.yE($CLJS.uF,$CLJS.H([$CLJS.Yr,$CLJS.hj,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.YD],null)],null)]));
$CLJS.yE($CLJS.Hj,$CLJS.H([new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.eE],null)],null)]));$CLJS.rE($CLJS.Hj,$CLJS.dE);$CLJS.yE($CLJS.yF,$CLJS.H([new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null)],null)]));$CLJS.rE($CLJS.yF,$CLJS.dE);$CLJS.yE($CLJS.ln,$CLJS.H([new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.eE],null)],null)]));$CLJS.rE($CLJS.ln,$CLJS.dE);
$CLJS.Y(PF,new $CLJS.Q(null,4,5,$CLJS.R,[$CLJS.mr,new $CLJS.h(null,1,[$CLJS.ss,"valid percentile"],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null),new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.Mi,new $CLJS.h(null,1,[$CLJS.ss,"percentile must be between zero and one"],null),function(a){return 0<=a&&1>=a}],null)],null));$CLJS.yE($CLJS.XE,$CLJS.H([new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,PF],null)]));$CLJS.rE($CLJS.XE,$CLJS.dE);
$CLJS.yE($CLJS.sF,$CLJS.H([$CLJS.Yr,$CLJS.LC,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.YD],null)],null)]));$CLJS.yE($CLJS.zF,$CLJS.H([$CLJS.Yr,$CLJS.LC,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null)],null)]));$CLJS.yE($CLJS.xF,$CLJS.H([new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null)],null)]));
$CLJS.yE($CLJS.GF,$CLJS.H([new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null)],null)]));$CLJS.rE($CLJS.xF,$CLJS.dE);$CLJS.rE($CLJS.GF,$CLJS.dE);$CLJS.yE($CLJS.EF,$CLJS.H([new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null)],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.YD],null)],null)]));$CLJS.rE($CLJS.EF,$CLJS.dE);
$CLJS.yE($CLJS.RE,$CLJS.H([$CLJS.Yr,$CLJS.LC,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Uk,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,$CLJS.jE],null)],null)]));$CLJS.Y(RF,new $CLJS.Q(null,17,5,$CLJS.R,[$CLJS.fr,Rga,Pga,Iga,Ega,Dga,Hga,Jga,Kga,Lga,Oga,Mga,Sga,Qga,Fga,Nga,$CLJS.fl],null));$CLJS.Y($CLJS.MF,new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.kj,new $CLJS.h(null,1,[$CLJS.ln,1],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.W,RF],null)],null));
$CLJS.TF=new $CLJS.Q(null,10,5,$CLJS.R,[new $CLJS.h(null,4,[$CLJS.eF,$CLJS.Mw,$CLJS.NF,!1,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Count of rows"),$CLJS.WE,$CLJS.LD("Count"),$CLJS.Gs,$CLJS.LD("Total number of rows in the answer.")],null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.xF,$CLJS.LF,$CLJS.Ej,$CLJS.NF,!0,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Sum of ..."),$CLJS.WE,$CLJS.LD("Sum"),$CLJS.Gs,$CLJS.LD("Sum of all the values of a column.")],
null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.fF,$CLJS.LF,$CLJS.Ej,$CLJS.NF,!0,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Average of ..."),$CLJS.WE,$CLJS.LD("Average"),$CLJS.Gs,$CLJS.LD("Average of all the values of a column")],null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.yF,$CLJS.LF,$CLJS.Ej,$CLJS.NF,!0,$CLJS.QF,$CLJS.hF,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Median of ..."),$CLJS.WE,$CLJS.LD("Median"),$CLJS.Gs,$CLJS.LD("Median of all the values of a column")],
null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.QE,$CLJS.LF,$CLJS.wr,$CLJS.NF,!0,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Number of distinct values of ..."),$CLJS.WE,$CLJS.LD("Distinct values"),$CLJS.Gs,$CLJS.LD("Number of unique values of a column among all the rows in the answer.")],null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.GF,$CLJS.LF,$CLJS.Ej,$CLJS.NF,!0,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Cumulative sum of ..."),
$CLJS.WE,$CLJS.LD("Sum"),$CLJS.Gs,$CLJS.LD("Additive sum of all the values of a column.\ne.x. total revenue over time.")],null)}],null),new $CLJS.h(null,4,[$CLJS.eF,$CLJS.mF,$CLJS.NF,!1,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Cumulative count of rows"),$CLJS.WE,$CLJS.LD("Count"),$CLJS.Gs,$CLJS.LD("Additive count of the number of rows.\ne.x. total number of sales over time.")],null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.zF,$CLJS.LF,$CLJS.Ej,$CLJS.NF,
!0,$CLJS.QF,$CLJS.vF,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Standard deviation of ..."),$CLJS.WE,$CLJS.LD("SD"),$CLJS.Gs,$CLJS.LD("Number which expresses how much the values of a column vary among all rows in the answer.")],null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.ln,$CLJS.LF,$CLJS.Ri,$CLJS.NF,!0,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Minimum of ..."),$CLJS.WE,$CLJS.LD("Min"),$CLJS.Gs,$CLJS.LD("Minimum value of a column")],
null)}],null),new $CLJS.h(null,5,[$CLJS.eF,$CLJS.Hj,$CLJS.LF,$CLJS.Ri,$CLJS.NF,!0,$CLJS.QF,$CLJS.FE,$CLJS.OF,function(){return new $CLJS.h(null,3,[$CLJS.nD,$CLJS.LD("Maximum of ..."),$CLJS.WE,$CLJS.LD("Max"),$CLJS.Gs,$CLJS.LD("Maximum value of a column")],null)}],null)],null);
$CLJS.Y(Gga,new $CLJS.Q(null,7,5,$CLJS.R,[$CLJS.Gj,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Us,new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.Nj,$CLJS.SF],null)],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.eF,$CLJS.gg.j(new $CLJS.Q(null,1,5,$CLJS.R,[$CLJS.cr],null),$CLJS.kf.h($CLJS.eF),$CLJS.TF)],null),new $CLJS.Q(null,3,5,$CLJS.R,[$CLJS.LF,new $CLJS.h(null,1,[$CLJS.Ar,!0],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.er,$CLJS.Qi],null)],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.NF,$CLJS.vr],null),new $CLJS.Q(null,2,5,
$CLJS.R,[$CLJS.QF,$CLJS.Qi],null),new $CLJS.Q(null,2,5,$CLJS.R,[$CLJS.OF,$CLJS.nd],null)],null));