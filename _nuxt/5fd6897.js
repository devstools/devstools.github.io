(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{488:function(t,e,n){"use strict";var o={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=n(11),r=n(17),c=n.n(r),d=n(185),v=n(108),x=n(474),f=n(16),m=n(187),h=n(20),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"v-widget"}},[n("v-card",[t.enableHeader?n("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[n("v-toolbar-title",[n("h4",[t._v(t._s(t.title))])]),t._v(" "),n("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?n("v-divider"):t._e(),t._v(" "),n("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:v.b,VDivider:x.a,VSpacer:f.a,VToolbar:m.a,VToolbarTitle:h.b})},693:function(t,e,n){var content=n(896);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("6165d0d0",content,!0,{sourceMap:!1})},895:function(t,e,n){"use strict";n(693)},896:function(t,e,n){var o=n(6)(!1);o.push([t.i,".demo-icons-list[data-v-7b5b7897]{display:flex;flex-wrap:wrap;list-style:none;margin:0;padding:0;font-size:32px}.demo-icons-list li[data-v-7b5b7897]{display:flex;align-items:center;justify-content:center;margin-right:20px;margin-bottom:20px;width:72px;height:72px;text-align:center;cursor:pointer;transition:.1s}.demo-icons-list li .material-icons[data-v-7b5b7897]{font-size:inherit}.demo-icons-list li [data-i8-icon][data-v-7b5b7897]{margin:0 10px}.demo-icons-list li [data-provide~=emoji] svg[data-v-7b5b7897]{width:32px;height:32px}.demo-icons-list li[data-v-7b5b7897]:hover{background-color:#f7fafc}.demo-icons-list.icons-size-16px[data-v-7b5b7897]{font-size:16px}.demo-icons-list.icons-size-16px li[data-v-7b5b7897]{width:56px;height:56px}.demo-icons-list.icons-size-24px[data-v-7b5b7897]{font-size:24px}.demo-icons-list.icons-size-24px li[data-v-7b5b7897]{width:64px;height:64px}.demo-icons-list.icons-size-32px[data-v-7b5b7897]{font-size:32px}.demo-icons-list.icons-size-32px li[data-v-7b5b7897]{width:72px;height:72px}.demo-icons-list.icons-size-48px[data-v-7b5b7897]{font-size:48px}.demo-icons-list.icons-size-48px li[data-v-7b5b7897]{width:88px;height:88px}.demo-icons-list.icons-size-64px[data-v-7b5b7897]{font-size:64px}.demo-icons-list.icons-size-64px li[data-v-7b5b7897]{width:104px;height:104px}.demo-icons-list.icons-size-80px[data-v-7b5b7897]{font-size:80px}.demo-icons-list.icons-size-80px li[data-v-7b5b7897]{width:120px;height:120px}.demo-icons-list.icons-size-96px[data-v-7b5b7897]{font-size:96px}.demo-icons-list.icons-size-96px li[data-v-7b5b7897]{width:136px;height:136px}",""]),t.exports=o},953:function(t,e,n){"use strict";n.r(e);var o={components:{VWidget:n(488).a},data:function(){return{selectedTab:null,tabs:null,material:null,ft:null}},computed:{},created:function(){var t=this;fetch("/data/material.json").then((function(t){return t.json()})).then((function(e){t.material=e.icons.splice(0,100)})),fetch("/data/font-awesome.json").then((function(t){return t.json()})).then((function(e){t.ft=e["4.7.0"].splice(0,100)}))},methods:{}},l=(n(895),n(11)),r=n(17),c=n.n(r),d=n(165),v=n(185),x=n(108),f=n(166),m=n(173),h=n(167),_=n(710),w=n(921),z=n(916),V=n(576),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"page-icons"}},[n("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{12:""}},[n("v-tabs",{attrs:{color:"grey lighten-3"},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[n("v-tab",{attrs:{ripple:"",href:"#tab-1"}},[t._v("\n            Matrial Icons\n          ")]),t._v(" "),n("v-tab",{attrs:{ripple:"",href:"#tab-2"}},[t._v("\n            Font Awesome\n          ")]),t._v(" "),n("v-tabs-items",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[n("v-tab-item",{attrs:{id:"tab-1"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("ul",{staticClass:"demo-icons-list"},t._l(t.material,(function(e,o){return n("li",{key:o},[n("i",{staticClass:"icon material-icons"},[t._v(" "+t._s(e.ligature))])])})),0),t._v(" "),n("div",{staticClass:"text-sm-center"},[n("v-btn",{attrs:{href:"https://material.io/icons/",color:"primary",large:"",depressed:""}},[t._v("More")])],1)])],1)],1),t._v(" "),n("v-tab-item",{attrs:{id:"tab-2"}},[n("v-card",{attrs:{flat:""}},[n("v-card-text",[n("ul",{staticClass:"demo-icons-list"},t._l(t.ft,(function(t,e){return n("li",{key:e},[n("i",{staticClass:"fa",class:t})])})),0),t._v(" "),n("div",{staticClass:"text-sm-center"},[n("v-btn",{attrs:{href:"https://fontawesome.com/icons?d=gallery",color:"primary",large:"",depressed:""}},[t._v("More")])],1)])],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"7b5b7897",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VCardText:x.b,VContainer:f.a,VFlex:m.a,VLayout:h.a,VTab:_.a,VTabItem:w.a,VTabs:z.a,VTabsItems:V.a})}}]);