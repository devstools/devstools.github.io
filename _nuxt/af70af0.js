(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{543:function(t,e,r){var content=r(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("a25b5200",content,!0,{sourceMap:!1})},597:function(t,e,r){"use strict";r(543)},598:function(t,e,r){var l=r(6)(!1);l.push([t.i,".ft-200[data-v-0fa501ff]{font-weight:200}.post--item[data-v-0fa501ff]:hover{background:#f6f6f6}.post--item a[data-v-0fa501ff]{text-decoration:none}.flex-list.vertical[data-v-0fa501ff]{flex-direction:column}.flex-list li[data-v-0fa501ff]{display:flex;padding:15px 0;border-bottom:1px solid #eee}.flex-list li[data-v-0fa501ff]:last-child{border:none}.flexbox-centering[data-v-0fa501ff]{display:flex;justify-content:center;align-items:center}.image-scale[data-v-0fa501ff]:hover{transform:scale(1.05);transition:.7s}",""]),t.exports=l},620:function(t,e,r){"use strict";var l=[{id:"150",product:"iPhone6",price:"$699",status:"processing"},{id:"151",product:"iPad Pro",price:"$299",status:"sent"},{id:"300",product:"Microsoft surface",price:"$1,699",status:"processing"},{id:"320",product:"Galaxy S7 edge",price:"$729",status:"processing"},{id:"501",product:"128G SD Card",price:"$699",status:"delivered"}],o={data:function(){return{headers:[{text:"#",align:"left",sortable:!1,value:"id"},{text:"Product",value:"deadline"},{text:"Price",value:"progress"},{text:"Status",value:"status"}],items:l,colors:{processing:"blue",sent:"red",delivered:"green"}}},computed:{randomColor:function(){var t=Math.floor(Math.random()*this.colors.length);return this.colors[t]}},methods:{getColorByStatus:function(t){return this.colors[t]}}},n=r(11),c=r(17),v=r.n(c),d=r(165),m=r(185),f=r(108),_=r(476),x=r(935),h=r(474),C=r(186),V=r(16),y=r(187),T=r(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Order")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[[r("v-data-table",{staticClass:"elevation-0 table-striped",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(t._s(e.item.id))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.product))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.price))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[r("v-chip",{attrs:{label:"",small:"",color:t.getColorByStatus(e.item.status),"text-color":"white"}},[t._v(t._s(e.item.status))])],1)]}}])})],t._v(" "),r("v-divider")],2)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VBtn:d.a,VCard:m.a,VCardText:f.b,VChip:_.a,VDataTable:x.a,VDivider:h.a,VIcon:C.a,VSpacer:V.a,VToolbar:y.a,VToolbarTitle:T.b})},623:function(t,e,r){"use strict";var l={props:{items:{type:[Array,Object]}},methods:{handleThumb:function(){},handleComment:function(){},handleFavorite:function(){}}},o=(r(597),r(11)),n=r(17),c=r.n(n),v=r(165),d=r(185),m=r(108),f=r(474),_=r(186),x=r(16),h=r(187),C=r(20),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{staticClass:"post-card"},[r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",{staticClass:"subheading ft-200"},[t._v("Recent Posts")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",{staticClass:"text--secondary"},[t._v("more_vert")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("ul",{staticClass:"post--list flex-list vertical"},t._l(t.items,(function(e,l){return r("li",{key:l,staticClass:"post--item"},[r("a",{staticClass:" post--link pa-4 layout row ma-0 text--primary",attrs:{href:"#"}},[r("div",{staticClass:"post--media"},[r("img",{staticClass:"image-scale",attrs:{src:e.featuredImage,alt:"",height:"100"}})]),t._v(" "),r("div",{staticClass:"post--content ml-3"},[r("h3",{staticClass:"title post--title"},[t._v("\n              "+t._s(e.title)+"\n            ")]),t._v(" "),r("div",{staticClass:"post--desc py-2 text--secondary"},[t._v("\n              "+t._s(e.desc.substr(0,150)+"...")+"\n            ")]),t._v(" "),r("div",{staticClass:"post--meta o-flex justify-space-between"},[r("div",{staticClass:"post--author caption grey--text text--darken-1"},[r("span",[t._v(t._s(e.author))]),t._v(" "),r("time",{staticClass:"px-2"},[t._v(t._s(e.createdAt))])]),t._v(" "),r("div",{staticClass:"social"},[r("a",{staticClass:"grey--text text--darken-1",on:{click:t.handleThumb}},[r("v-icon",{attrs:{small:""}},[t._v("thumb_up")]),t._v(" "),r("small",[t._v("100+")])],1),t._v(" "),r("a",{staticClass:"grey--text text--darken-1 mx-3",on:{click:t.handleComment}},[r("v-icon",{attrs:{small:""}},[t._v("mode_comment")]),t._v(" "),r("small",[t._v("12+")])],1),t._v(" "),r("a",{staticClass:"grey--text text--darken-1",on:{click:t.handleFavorite}},[r("v-icon",{attrs:{small:""}},[t._v("favorite")]),t._v(" "),r("small",[t._v("50+")])],1)])])])])])})),0)])],1)}),[],!1,null,"0fa501ff",null);e.a=component.exports;c()(component,{VBtn:v.a,VCard:d.a,VCardText:m.b,VDivider:f.a,VIcon:_.a,VSpacer:x.a,VToolbar:h.a,VToolbarTitle:C.b})},625:function(t,e,r){"use strict";var l=r(211),o={data:function(){return{headers:[{text:"",align:"center",sortable:!1,value:"avatar"},{text:"Name",align:"left",value:"name"},{text:"Deadline",value:"deadline"},{text:"Progress",value:"progress"},{text:"Action",value:"action",align:"right"}]}},computed:{projects:function(){return l.a}}},n=r(11),c=r(17),v=r.n(c),d=r(169),m=r(165),f=r(185),_=r(108),x=r(935),h=r(474),C=r(186),V=r(184),y=r(16),T=r(187),k=r(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Project")])]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{icon:""}},[r("v-icon",[t._v("more_vert")])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[[r("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.projects,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[r("v-avatar",{attrs:{size:"36px"}},[r("img",{attrs:{src:e.item.avatar,alt:e.item.username}})])],1),t._v(" "),r("td",[t._v(t._s(e.item.name))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[t._v(t._s(e.item.deadline))]),t._v(" "),r("td",{staticClass:"text-xs-left"},[r("v-progress-linear",{attrs:{value:e.item.progress,height:"5",color:e.item.color}})],1),t._v(" "),r("td",{staticClass:"text-xs-right"},[r("v-btn",{attrs:{flat:"",icon:"",color:"grey"}},[r("v-icon",[t._v("edit")])],1),t._v(" "),r("v-btn",{attrs:{flat:"",icon:"",color:"grey"}},[r("v-icon",[t._v("delete")])],1)],1)]}}])})],t._v(" "),r("v-divider")],2)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VAvatar:d.a,VBtn:m.a,VCard:f.a,VCardText:_.b,VDataTable:x.a,VDivider:h.a,VIcon:C.a,VProgressLinear:V.a,VSpacer:y.a,VToolbar:T.a,VToolbarTitle:k.b})},927:function(t,e,r){"use strict";r.r(e);var l=r(233),o=[{avatar:"https://randomuser.me/api/portraits/men/1.jpg",title:"Brunch this weekend?",subtitle:"<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood ?"},{divider:!0,inset:!0},{avatar:"https://randomuser.me/api/portraits/men/2.jpg",title:'Summer BBQ <span class="grey--text text--lighten-1">4</span>',subtitle:"<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{avatar:"https://randomuser.me/api/portraits/men/3.jpg",title:"Oui oui",subtitle:"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{avatar:"https://randomuser.me/api/portraits/men/1.jpg",title:"Dash",subtitle:"<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"}],n={data:function(){return{items:o}},methods:{handleClick:function(t){console.log(t)}}},c=r(11),v=r(17),d=r.n(v),m=r(165),f=r(185),_=r(108),x=r(474),h=r(170),C=r(171),V=r(176),y=r(10),T=r(475),k=r(187),j=r(20),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-toolbar",{attrs:{card:"",dense:"",color:"transparent"}},[r("v-toolbar-title",[r("h4",[t._v("Message")])])],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",{staticClass:"pa-0"},[r("v-list",{staticClass:"pa-0",attrs:{"two-line":""}},[t._l(t.items,(function(e,l){return[e.header?r("v-subheader",{key:e.header},[t._v(t._s(e.header))]):e.divider?r("v-divider",{key:l}):r("v-list-tile",{key:e.title,attrs:{avatar:""},on:{click:t.handleClick}},[r("v-list-tile-avatar",[r("img",{attrs:{src:e.avatar}})]),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),r("v-list-tile-sub-title",{domProps:{innerHTML:t._s(e.subtitle)}})],1)],1)]}))],2),t._v(" "),r("v-divider"),t._v(" "),r("v-btn",{staticClass:"ma-0",attrs:{block:"",flat:""}},[t._v("All")]),t._v(" "),r("v-divider")],1)],1)}),[],!1,null,null,null),w=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCardText:_.b,VDivider:x.a,VList:h.a,VListTile:C.a,VListTileAvatar:V.a,VListTileContent:y.b,VListTileSubTitle:y.c,VListTileTitle:y.d,VSubheader:T.a,VToolbar:k.a,VToolbarTitle:j.b});var P=r(240),S=r(625),L=r(620),D={components:{PostListCard:r(623).a,MessageList:w,NotificationList:P.a,PlainTable:S.a,PlainTableOrder:L.a},data:function(){return{}},computed:{posts:function(){return Object(l.a)()}},methods:{handleClick:function(t){console.log(t)}}},A=r(166),O=r(173),$=r(167),B=Object(c.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"social"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[r("message-list")],1),t._v(" "),r("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[r("notification-list")],1),t._v(" "),r("v-flex",{attrs:{lg7:"",sm12:"",xs12:""}},[r("plain-table")],1),t._v(" "),r("v-flex",{attrs:{lg5:"",sm12:"",xs12:""}},[r("plain-table-order")],1),t._v(" "),r("v-flex",{attrs:{lg12:"",sm12:"",xs12:""}},[r("post-list-card",{attrs:{items:t.posts}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=B.exports;d()(B,{VContainer:A.a,VFlex:O.a,VLayout:$.a})}}]);