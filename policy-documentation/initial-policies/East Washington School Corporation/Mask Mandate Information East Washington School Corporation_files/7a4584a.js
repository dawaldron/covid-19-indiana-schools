(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{488:function(t,e,r){},489:function(t,e,r){"use strict";r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return c}));var n=r(5),o=r.n(n);function l(source,t,e){return`${e} | ${o()(source,t,"")}`}const c=(t="")=>{const e={"&amp;":"&","&nbsp;":" ","&apos;":"'","&#39;":"'","&quot;":'"',"&#44;":","},r=new RegExp(Object.keys(e).join("|"),"gi");return t.replace(r,t=>e[t.toLowerCase()])}},491:function(t,e,r){"use strict";var n={name:"Breadcrumbs",props:{crumbs:{type:Array,default:()=>[]}}},o=(r(492),r(3)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumb"}},[r("ul",t._l(t.crumbs,(function(e,n){return r("li",{key:n,attrs:{"data-testid":"crumb-"+e.name}},[""!==e.link?r("router-link",{attrs:{to:e.link}},[t._v("\n        "+t._s(e.name)+"\n      ")]):r("span",[t._v(t._s(e.name)+" ")])],1)})),0)])}),[],!1,null,"84678a94",null);e.a=component.exports},492:function(t,e,r){"use strict";r(488)},493:function(t,e,r){},494:function(t,e,r){"use strict";var n=r(6),o=r(5),l=r.n(o),c={name:"LoadingIndicator",props:{size:{type:Number,default:45}},computed:{...Object(n.c)(["getGlobals"]),styles(){return{"--spinner-width":this.size.toString()+"px","--spinner-height":this.size.toString()+"px","--spinner-border":`${(.1*this.size).toString()}px solid ${l()(this.getGlobals,"info.primary_color.hex","#000000")}80`,"--spinner-borderTop":`${(.1*this.size).toString()}px solid ${l()(this.getGlobals,"info.primary_color.hex","#000000")}`}}}},d=(r(495),r(3)),component=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loader",style:this.styles})}),[],!1,null,"6cfdb0cb",null);e.a=component.exports},495:function(t,e,r){"use strict";r(493)},496:function(t,e,r){},497:function(t,e,r){"use strict";var n=r(6),o=r(5),l=r.n(o),c={name:"Arrow",props:{fillColor:{type:String,default:"#000"},title:{type:String,default:""}}},d=r(3),f=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"7",height:"12",viewBox:"0 0 7 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[this.title?e("title",[this._v(this._s(this.title))]):this._e(),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6.35363 0.646447C6.54889 0.841709 6.54889 1.15829 6.35363 1.35355L1.70718 6L6.35363 10.6464C6.54889 10.8417 6.54889 11.1583 6.35363 11.3536C6.15837 11.5488 5.84178 11.5488 5.64652 11.3536L0.292969 6L5.64652 0.646447C5.84178 0.451184 6.15837 0.451184 6.35363 0.646447Z",fill:this.fillColor}})])}),[],!1,null,null,null).exports,m=r(9),h={name:"Pagination",components:{Arrow:f},props:{currentPage:{type:Number,default:1},totalPages:{type:Number,default:1},pageNameParam:{type:String,default:"page_no"}},data:()=>({pageJump:null}),computed:{...Object(n.c)(["getGlobals"]),...Object(n.c)("translation",["getComponentTranslation"]),cssVars(){return{"--primary-color":l()(this.getGlobals,"info.primary_color.hex","#000000"),"--secondary-color":l()(this.getGlobals,"info.secondary_color.hex","#000000"),"--links-color":l()(this.getGlobals,"info.links_color.hex","#000000"),"--disabled-link":"#E1E1E1"}},paginationWithDots(){return Object(m.b)(this.currentPage,this.totalPages)},translations(){return this.getComponentTranslation("pagination")}},methods:{goToPage(){this.pageJump>0&&this.pageJump<=this.totalPages&&this.$router.push({query:{...this.$route.query,[this.pageNameParam]:this.pageJump}})}}},_=(r(498),Object(d.a)(h,(function(){var t,e,r=this,n=r.$createElement,o=r._self._c||n;return o("nav",{staticClass:"cms-pagination",style:r.cssVars},[o("ul",[o("li",{staticClass:"prev"},[r.currentPage>1?o("nuxt-link",{staticClass:"image-button",attrs:{to:{path:r.$route.path,query:Object.assign({},r.$route.query,(t={},t[r.pageNameParam]=r.currentPage-1,t))}}},[o("arrow",{attrs:{"fill-color":r.cssVars["--primary-color"],title:"Previous Page"}})],1):o("span",{staticClass:"image-button disabled"},[o("arrow",{attrs:{"fill-color":r.cssVars["--disabled-link"],title:"Previous Page"}})],1)],1),r._v(" "),r._l(r.paginationWithDots,(function(t,e){var n;return o("li",{key:e,class:{active:t==r.currentPage}},["..."!==t?o("nuxt-link",{attrs:{to:{path:r.$route.path,query:Object.assign({},r.$route.query,(n={},n[r.pageNameParam]=t,n))}}},[r._v("\n        "+r._s(t)+"\n      ")]):o("span",[r._v(r._s(t))])],1)})),r._v(" "),o("li",{staticClass:"next"},[r.currentPage<r.totalPages?o("nuxt-link",{staticClass:"image-button",attrs:{to:{path:r.$route.path,query:Object.assign({},r.$route.query,(e={},e[r.pageNameParam]=r.currentPage+1,e))}}},[o("arrow",{attrs:{"fill-color":r.cssVars["--primary-color"],title:"Next Page"}})],1):o("span",{staticClass:"image-button disabled"},[o("arrow",{attrs:{"fill-color":r.cssVars["--disabled-link"],title:"Next Page"}})],1)],1),r._v(" "),o("li",{staticClass:"jump"},[o("label",{attrs:{for:"jump-number"}},[r._v(r._s(r.translations.jump_to_page))]),r._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:r.pageJump,expression:"pageJump"}],attrs:{id:"jump-number",type:"number",min:"1",max:r.totalPages},domProps:{value:r.pageJump},on:{keyup:function(t){return!t.type.indexOf("key")&&r._k(t.keyCode,"enter",13,t.key,"Enter")?null:r.goToPage.apply(null,arguments)},input:function(t){t.target.composing||(r.pageJump=t.target.value)}}})])],2)])}),[],!1,null,"21e5f2dd",null));e.a=_.exports},498:function(t,e,r){"use strict";r(496)},499:function(t,e,r){"use strict";r.d(e,"b",(function(){return y})),r.d(e,"a",(function(){return P})),r.d(e,"c",(function(){return w})),r.d(e,"d",(function(){return C}));var n=r(76),o=r.n(n),l=r(5),c=r.n(l),d=r(9);async function f(t,{url:e,params:r},n,o){n.filter_ids&&(n.filter_ids=n.filter_ids.split?n.filter_ids.split(","):n.filter_ids);const l=await o.get(e,{params:{...r,...n},cache:{ignoreCache:!1}}),{scores_schedules:c,meta:{links:f}}=l.data,{params:m}=Object(d.a)(f.last);return{games:c.sort((a,b)=>new Date(a.formatted_date)-new Date(b.formatted_date)),filters:t||[],totalPages:+m.page_no,currentPage:+n.page_no||1}}async function m(t,{url:e,params:r},n,o){const[l]=t,c=n.filter_id||l&&l.id,f=await o.get(e,{params:{...r,...n,filter_id:c},cache:{ignoreCache:!1}}),{articles:m,meta:{links:h}}=f.data,{params:_}=Object(d.a)(h.last);return{news:m,filters:t,selectedFilter:c,totalPages:+_.page_no,currentPage:+n.page_no||1}}async function h(t,{url:e,params:r},n,o){const[l]=t,c=n.filter_id||l&&l.id,f=await o.get(e,{params:{...n,...r,filter_id:c},cache:{ignoreCache:!1}}),{live_feeds:m,meta:{links:h}}=f.data,{params:_}=Object(d.a)(h.last);return{feeds:m,filters:t,selectedFilter:c,totalPages:+_.page_no,currentPage:+n.page_no||1}}async function _(t,{url:e,params:r},n,o){let l=e;n.id&&(l=`${e}/${n.id}`);const c=n.filter_ids&&n.filter_ids.split?n.filter_ids.split(","):"",f=await o.get(l,{params:{...r,...n,filter_ids:c},cache:{ignoreCache:!1}}).catch(async t=>o.get(e,{params:{...r,...n,filter_ids:c}}));if(f.data.directory)return{staff:[f.data.directory],filters:t,totalPages:0,total_entries:1,currentPage:1,memberName:f.data.directory.full_name};const{directories:m,meta:{links:h}}=f.data,{params:_}=Object(d.a)(h.last),v=m.reduce((t,e)=>(t.some(t=>t.id===e.id)||t.push(e),t),[]),{search:y}=n;return{staff:v,filters:t,totalPages:+_.page_no,total_entries:h.total_entries,currentPage:+n.page_no||1,search:y}}function v({type:t,fallbackSectionName:e,paths:r},n){return async function({dispatch:l,getters:c,commit:d},f,m){await l("setCustomSectionData",{type:t,fallbackSectionName:e});const h=c.getCustomSectionFilters({type:t}),_=c.getCustomSectionApi(m.defaults.baseURL,r),v=await async function(t,{url:e,params:r},n){let l=t;if(o()(l)){l=(await n.get(e,{params:{...r},cache:{ignoreCache:!1}})).data.meta.filters}return l}(h,_,m);return d("setDynamicPageFilters",{type:t,filters:v}),n(v,_,f,m)}}async function y(t,e,r){const n=t.getters.getCustomSectionPaths;return v({type:"scores_schedules",fallbackSectionName:"Athletics",paths:c()(n,"v4.athletics.main",n.athletics)},f)(t,e,r)}function P(t,e,r){return v({type:"articles",fallbackSectionName:"News",paths:t.getters.getCustomSectionPaths.news},m)(t,e,r)}function w(t,e,r){return v({type:"live_feeds",fallbackSectionName:"Live Feed",paths:t.getters.getCustomSectionPaths.live_feed},h)(t,e,r)}function C(t,e,r){const n=t.getters.getCustomSectionPaths;return v({type:"directories",fallbackSectionName:"Staff",paths:c()(n,"v4.staff.main",n.staff)},_)(t,e,r)}},520:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(12);function o(t,e){return t.getters["translation/getLanguage"]||Object(n.a)(e,"langCode","en")}},600:function(t,e,r){},767:function(t,e,r){"use strict";r(600)},923:function(t,e,r){"use strict";r.r(e);var n=r(6),o=r(5),l=r.n(o),c=r(76),d=r.n(c),f=r(491),m=r(494),h=r(497),_=r(489),v=r(520),y=r(499),P={name:"NewsList",components:{Breadcrumbs:f.a,LoadingIndicator:m.a,Pagination:h.a},beforeRouteUpdate(t,e,r){this&&this.$config.ssg?(this.fetchNews(t.query,document.cookie),r()):r()},asyncData:async({store:t,query:e,$axios:r})=>Object(y.a)(t,e,r),data:()=>({loading:!1,news:[],filters:[],bottom:!1,pageNumber:"1",selectedFilter:"",nextPageUrl:""}),head(){return{title:Object(_.a)(this.getGlobals,"info.school_name",this.getSectionName),titleTemplate:Object(_.a)(this.getGlobals,"info.school_name",this.getSectionName)}},computed:{...Object(n.c)(["getGlobals","getPathPrefix","getNews","getCustomSections","getSectionName"]),styles(){return{"--link-color":l()(this.getGlobals,"info.primary_color.hex","#000000")}},shouldFetchData(){const t=Object(v.a)(this.$store,document.cookie);return this.$config.ssg&&(!d()(l()(this.$route,"query",{}))||!d()(t)&&"en"!==t)}},watchQuery(t,e){return this&&this.$config.ssg&&t.page_no!==e.page_no&&window.scrollTo(0,0),!(this&&this.$config.ssg)},created(){this.shouldFetchData&&(this.filters=[],this.fetchNews(this.$route.query,document.cookie))},methods:{replaceHTMLEntities:_.b,async fetchNews(t){this.loading=!0,this.totalPages=0;const{news:e,filters:r,selectedFilter:n,totalPages:o,currentPage:l}=await Object(y.a)(this.$store,t,this.$axios);this.news=e,this.filters=r,this.selectedFilter=n,this.totalPages=o,this.currentPage=l,this.loading=!1},filterNews(){this.$router.push({query:{filter_id:this.selectedFilter}})}}},w=(r(767),r(3)),component=Object(w.a)(P,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{style:t.styles,attrs:{id:"news-list"}},[r("Breadcrumbs",{attrs:{crumbs:[{name:t.getGlobals.info.school_name,link:t.getPathPrefix+"/"},{name:t.getSectionName,link:t.getPathPrefix+"/news"}]}}),t._v(" "),r("div",{staticClass:"page-container"},[t.filters&&t.filters.length>1?r("div",{staticClass:"filter"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFilter,expression:"selectedFilter"}],attrs:{name:"filter","aria-label":"Select News Filter"},on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedFilter=e.target.multiple?r:r[0]},t.filterNews]}},t._l(t.filters,(function(filter){return r("option",{key:filter.id,domProps:{value:filter.id}},[t._v("\n          "+t._s(filter.name)+"\n        ")])})),0)]):t._e(),t._v(" "),t.loading?r("LoadingIndicator"):t._l(t.news,(function(article){return r("div",{key:article.id,staticClass:"page-container-item"},[article.cover_image?r("div",{staticClass:"article-image"},[r("img",{attrs:{alt:article.image_description||article.title,src:article.cover_image}})]):t._e(),t._v(" "),r("div",{staticClass:"article-info"},[r("div",{staticClass:"title"},[r("h2",[r("router-link",{attrs:{to:t.getPathPrefix+"/article/"+article.id}},[t._v("\n              "+t._s(t.replaceHTMLEntities(article.title))+"\n            ")])],1)]),t._v(" "),r("div",{staticClass:"content"},[t._v("\n          "+t._s(t.replaceHTMLEntities(article.snippet))+"\n        ")]),t._v(" "),r("div",{staticClass:"read-more"},[r("router-link",{attrs:{"aria-label":article.title,to:t.getPathPrefix+"/article/"+article.id}},[t._v("\n            READ MORE "),r("span",[t._v(">")])])],1)])])})),t._v(" "),t.totalPages>1?r("pagination",{attrs:{"current-page":t.currentPage,"total-pages":t.totalPages}}):t._e()],2)],1)}),[],!1,null,"75a4f356",null);e.default=component.exports}}]);