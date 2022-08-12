define("elections",["module","jquery","page","utils","jquery-utils"],function(t,s,e,a){const r={name:t.id,class:"."+t.id};a.broadcast(r.name,"loaded"),a.createModule(r.name,function(t){const a=this;this.$el=t,this.module=r,this.groupId=t[0].dataset.groupId,this.getAllResultsByGroupIdAndLocationId=function(t,e){s.ajax({url:`/ajax/elections/getAllResultsByGroupIdAndLocationId/${t}/${e}`,type:"GET",dataType:"json",success:function(t){let e=a.getElements("result-template").html();a.getElements("results-list").html(""),t.forEach(t=>{a.getElements("results-list").append(e);let i=a.getElements("result").last();i.find(`${r.class}__result-title`).html(t.Title),i.find(`${r.class}__result-precinct`).html(`Precincts: ${t.PrecinctsReporting.toLocaleString()} / ${t.PrecinctsTotal.toLocaleString()} (${t.PrecinctsReportingPercent}% reporting)`),i.find(`${r.class}__result-total`).html(`Vote Total: ${t.VotesTotal.toLocaleString()}`),i.find(`${r.class}__result-updated`).html(`Last Updated: ${t.Updated}`);let d=i.find(`${r.class}__candidates`).html();i.find(`${r.class}__candidates`).html("");let c=0;t.Candidates.forEach(t=>{t.VotePercent>c&&(c=t.VotePercent)}),t.Candidates.forEach(t=>{var e=t.FirstName&&t.LastName?" ":"",a=`${t.FirstName}${e}${t.LastName}`,s=t.Party?`&nbsp;(${t.Party})`:"",n=""===t.Party?"i":t.Party.toLowerCase(),e=!0===t.Incumbent?"*":"";i.find(`${r.class}__candidates`).append(d);let l=i.find(`${r.class}__candidate`).last();l.find(`${r.class}__candidate-name`).html(`${a}${s}${e}`),t.Winner&&l.find(`${r.class}__candidate-name-wrap`).addClass(`${r.name}__candidate-name-wrap_winner_true`),l.find(`${r.class}__candidate-percent`).html(`${t.VotePercent}%`),l.find(`${r.class}__candidate-votes`).html(t.Votes.toLocaleString()),l.find(`${r.class}__candidate-bar`).addClass(`${r.name}__candidate-bar_color_${n}`),l.find(`${r.class}__candidate-bar`).find("progress").text(` ${t.VotePercent}% `),l.find(`${r.class}__candidate-bar`).find("progress").attr("value",t.VotePercent),l.find(`${r.class}__candidate-bar`).find("progress").attr("max",c)})})}})},this.applyFilter=function(t){a.getElements("result").each(function(){0<=s(this).text().toLowerCase().indexOf(t)?s(this).show():s(this).hide()})},this.setupEventHandlers=function(){t.on("keyup",".elections__filter",function(){var t=a.getElements("filter").val().toString().toLowerCase();a.applyFilter(t)}),t.on("change",".elections__locations",function(){var t=a.getElements("locations").val();a.getAllResultsByGroupIdAndLocationId(a.groupId,t),a.getElements("filter").val(""),a.applyFilter("")})},this.init=function(){a.broadcast("init"),a.setupEventHandlers(),a.broadcast("ready")}})});
//# sourceMappingURL=elections_5.8.4.js.map