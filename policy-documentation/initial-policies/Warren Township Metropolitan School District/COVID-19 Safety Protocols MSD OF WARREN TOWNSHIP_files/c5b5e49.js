(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1010:function(e,t,n){"use strict";n.r(t);var r=n(9),o=n(773),c=n(603),h=n(600),l={name:"Page",components:{Breadcrumbs:c.a,PageContent:o.a},middleware:"auth",data:()=>({pageCrumbs:[]}),head(){return{title:Object(h.a)(this.getGlobals,"info.school_name",this.getPageConfig.name),titleTemplate:Object(h.a)(this.getGlobals,"info.school_name",this.getPageConfig.name)}},computed:{...Object(r.c)(["getPageConfig","getGlobals","getPathPrefix"])},mounted(){this.getBreadcrumbs()},methods:{getBreadcrumbs(){this.pageCrumbs.push({name:this.getGlobals.info.school_name,link:this.getPathPrefix+"/"}),this.getPageConfig.breadcrumbs&&this.getPageConfig.breadcrumbs.forEach(e=>{const link=e.slug?`${this.getPathPrefix}/page/${e.slug}`:"";this.pageCrumbs.push({name:e.name,link:link})})}}},m=n(3),component=Object(m.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"page-wrapper"}},[t("Breadcrumbs",{attrs:{crumbs:this.pageCrumbs}}),this._v(" "),t("PageContent")],1)}),[],!1,null,null,null);t.default=component.exports},600:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return h}));var r=n(5),o=n.n(r);function c(source,e,t){return`${t} | ${o()(source,e,"")}`}const h=(e="")=>{const t={"&amp;":"&","&nbsp;":" ","&apos;":"'","&#39;":"'","&quot;":'"',"&#44;":","},n=new RegExp(Object.keys(t).join("|"),"gi");return e.replace(n,e=>t[e.toLowerCase()])}}}]);