(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{488:function(t,e,r){"use strict";var o={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},n=r(11),l=r(17),c=r.n(l),d=r(185),h=r(108),v=r(474),y=r(16),_=r(187),x=r(20),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?r("v-divider"):t._e(),t._v(" "),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardText:h.b,VDivider:v.a,VSpacer:y.a,VToolbar:_.a,VToolbarTitle:x.b})},521:function(t,e,r){"use strict";r(205),r(12);var o=r(196),n=r.n(o),l=r(631),c=r.n(l),d=window.echarts||void 0;void 0===d&&console.error("ECharts is not defined");var h=[];Object.entries(n.a).forEach((function(t){t[1].base&&h.push(t[1].base)})),function(t,e,r){r=r||window;var o=!1;r.addEventListener(t,(function(){o||(o=!0,requestAnimationFrame((function(){r.dispatchEvent(new CustomEvent(e)),o=!1})))}))}("resize","optimizedResize"),e.a={name:"v-echart",render:function(t){return t("div",{staticClass:"v-chart",style:this.canvasStyle,ref:"canvas",on:this.$listeners})},props:{width:{type:String,default:"auto"},height:{type:String,default:"400px"},merged:{type:Boolean,default:!0},pathOption:[Object,Array],option:Object,textStyle:Object,title:Object,legend:[Object,Array],tooltip:Object,grid:{type:[Object,Array]},xAxis:[Object,Array],yAxis:[Object,Array],series:[Object,Array],axisPointer:Object,dataset:{type:[Object,Array],default:function(){return{}}},colors:Array,backgroundColor:[Object,String],toolbox:{type:[Object,Array]},widthChangeDelay:{type:Number,default:450}},data:function(){return{chartInstance:null,clientWidth:null,allowedOptions:["textStyle","title","legend","xAxis","yAxis","series","tooltip","axisPointer","grid","dataset","colors","backgroundColor"],_defaultOption:{tooltip:{show:!0},title:{show:!0,textStyle:{color:"rgba(0, 0, 0 , .87)",fontFamily:"sans-serif"}},grid:{containLabel:!0},xAxis:{show:!0,type:"category",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisTick:{show:!0,alignWithLabel:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1}},yAxis:{show:!0,type:"value",axisLine:{lineStyle:{color:"rgba(0, 0, 0 , .54)",type:"dashed"}},axisLabel:{show:!1},splitLine:{lineStyle:{type:"dashed"}},axisTick:{show:!0,lineStyle:{show:!0,color:"rgba(0, 0, 0 , .54)",type:"dashed"}}},series:[{type:"line"}]}}},computed:{canvasStyle:function(){return{width:this.width,height:this.height}}},methods:{init:function(){var t=this;this.widthChangeDelay;this.pathOption&&this.pathOption.forEach((function(p){c.a.set(t.$data._defaultOption,p[0],p[1])})),this.chartInstance=d.init(this.$refs.canvas,"material"),this.chartInstance.setOption(c.a.merge(this.option,this.$data._defaultOption)),window.addEventListener("optimizedResize",(function(e){setTimeout((function(e){t.chartInstance.resize()}),t.widthChangeDelay)}))},resize:function(){this.chartInstance.resize()},clean:function(){window.removeEventListener("resize",this.chartInstance.resize),this.chartInstance.clear()}},mounted:function(){this.init()},beforeDestroy:function(){this.clean()}}},626:function(t,e,r){"use strict";var o={components:{EChart:r(521).a},props:{title:String,gradient:{type:Boolean,default:!1},subTitle:String,icon:String,cardColor:{type:String,default:"white"},iconColor:{type:String,default:"success"},type:String,chartColor:Array,data:Array},data:function(){return{defaultOption:[["dataset.source",this.data],["xAxis.show",!1],["yAxis.show",!1],["grid.top","15%"],["grid.left","0"],["grid.bottom","0"],["grid.right","0"],["color",this.chartColor]]}},computed:{computeCardDark:function(){return"white"!==this.cardColor},computeChartOption:function(){switch(this.type){case"bar":this.defaultOption.push(["series[0].type","bar"]),this.defaultOption.push(["series[0].barWidth","50%"]);break;case"stack-bar":this.defaultOption.push(["series[0].type","bar"]),this.defaultOption.push(["series[0].itemStyle.normar.color","rgba(0,0,0,0.05)"]),this.defaultOption.push(["series[0].barGap","-100%"]),this.defaultOption.push(["series[1].type","bar"]);break;case"area":this.defaultOption.push(["series[0].type","line"]),this.defaultOption.push(["series[0].smooth",!0]),this.defaultOption.push(["xAxis.boundaryGap",!1]),this.defaultOption.push(["series[0].areaStyle",{}]),this.gradient&&this.defaultOption.push(["series[0].areaStyle",{normal:{color:new window.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:this.chartColor[0]},{offset:1,color:this.chartColor[1]}])}}]);break;default:this.defaultOption.push(["series[0].smooth",!0]),this.defaultOption.push(["xAxis.boundaryGap",!1])}return this.defaultOption}}},n=r(11),l=r(17),c=r.n(l),d=r(185),h=r(180),v=r(186),y=r(179),_=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:t.cardColor,dark:t.computeCardDark}},[r("v-card-title",[r("div",{staticClass:"layout row ma-0"},[r("div",{staticClass:"subheading"},[t._v(t._s(t.title))]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"caption"},[r("v-icon",[t._v("trending_up")]),t._v("  "+t._s(t.subTitle))],1)],1)]),t._v(" "),r("v-responsive",{staticClass:"white--text"},[r("e-chart",{attrs:{"path-option":t.computeChartOption,height:"308px",width:"100%"}})],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:d.a,VCardTitle:h.a,VIcon:v.a,VResponsive:y.a,VSpacer:_.a})},930:function(t,e,r){"use strict";r.r(e);var o=r(521),n=r(129),l=r(196),c=r.n(l),d={components:{EChart:o.a},props:{title:String,subTitle:String,icon:String,iconColor:{type:String,default:"success"},type:String,chartColor:String,data:Array},data:function(){return{defaultOption:[["dataset.source",this.data],["xAxis.show",!1],["yAxis.show",!1],["color",[this.chartColor]]]}},computed:{computeChartOption:function(){switch(this.type){case"bar":this.defaultOption.push(["series[0].type","bar"]);break;case"area":this.defaultOption.push(["series[0].type","line"]),this.defaultOption.push(["series[0].areaStyle",{}])}return this.defaultOption}}},h=r(11),v=r(17),y=r.n(v),_=r(185),x=r(108),f=r(186),component=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-text",[r("div",{staticClass:"layout row ma-0 align-center justify-space-between"},[r("div",{staticClass:"text-box"},[r("div",{staticClass:"subheading pb-2"},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"grey--text"},[t._v(t._s(t.subTitle)+" "),r("v-icon",{attrs:{small:"",color:t.iconColor}},[t._v(t._s(t.icon))])],1)]),t._v(" "),r("div",{staticClass:"chart"},[r("e-chart",{attrs:{"path-option":t.computeChartOption,height:"68px",width:"100%"}})],1)])])],1)}),[],!1,null,null,null),w=component.exports;y()(component,{VCard:_.a,VCardText:x.b,VIcon:f.a});var m=r(626),C=r(488),O={components:{BoxChart:m.a,MiniChart:w,EChart:o.a,VWidget:C.a},data:function(){return{selectedTab:"tab-1",option:null,dataset:{sinData:n.a,monthVisit:n.e,campaign:n.c,location:n.d,stackData:n.b},color:c.a}},created:function(){console.log(this.$refs.chart)},methods:{handleTabChange:function(t,e){window.dispatchEvent(new Event("resize"))}}},V=r(180),A=r(166),S=r(173),T=r(167),k=r(141),j=r(179),E=r(16),z=r(710),I=r(921),B=r(916),L=r(576),M=Object(h.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"social"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Mini Chart")])]),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:""}},[r("mini-chart",{attrs:{title:"Monthly Sales","sub-title":"10%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":t.color.blue.base,type:"bar"}})],1),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:""}},[r("mini-chart",{attrs:{title:"Daily Visit","sub-title":"20%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":t.color.green.base,type:"area"}})],1),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:""}},[r("v-card",[r("v-card-text",[r("div",{staticClass:"layout row ma-0 align-center justify-space-between"},[r("div",{staticClass:"text-box"},[r("div",{staticClass:"subheading pb-2"},[t._v("Bounce Rate")]),t._v(" "),r("span",{staticClass:"grey--text"},[t._v("-10% "),r("v-icon",{attrs:{small:"",color:"green"}},[t._v("trending_down")])],1)]),t._v(" "),r("div",{staticClass:"chart"},[r("v-progress-circular",{attrs:{size:60,width:5,rotate:360,value:10,color:"success"}},[t._v("\n                  10\n                ")])],1)])])],1)],1),t._v(" "),r("v-flex",{attrs:{lg3:"",sm6:""}},[r("mini-chart",{attrs:{title:"Sales Trend","sub-title":"10%",icon:"trending_down",data:t.dataset.monthVisit,"chart-color":t.color.red.base,type:"line"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Box Chart")])]),t._v(" "),r("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[r("box-chart",{attrs:{title:"Page views","sub-title":"10%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":[t.color.blue.darken1],type:"area"}})],1),t._v(" "),r("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[r("box-chart",{attrs:{title:"Monthly Sales","sub-title":"10%",icon:"trending_up","card-color":"pink",data:t.dataset.monthVisit,"chart-color":[t.color.pink.lighten2],type:"bar"}})],1),t._v(" "),r("v-flex",{attrs:{lg4:"",sm6:"",xs12:""}},[r("box-chart",{attrs:{"card-color":"indigo",title:"Page views","sub-title":"10%",icon:"trending_up",data:t.dataset.monthVisit,"chart-color":[t.color.shades.white],type:"line"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{sm12:""}},[r("h4",[t._v("Complex Chart")])]),t._v(" "),r("v-flex",{attrs:{lg4:"",sm12:""}},[r("v-card",{attrs:{dark:"",color:"green"}},[r("v-card-title",[r("div",{staticClass:"layout row ma-0"},[r("div",{staticClass:"subheading"},[t._v("Today")]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"caption"},[r("v-icon",[t._v("trending_up")]),t._v("\n                20%\n              ")],1)],1)]),t._v(" "),r("v-responsive",{staticClass:"white--text"},[r("e-chart",{ref:"chart",attrs:{"path-option":[["dataset.source",t.dataset.stackData],["grid.bottom","10%"],["grid.top","5%"],["xAxis.show",!1],["yAxis.show",!1],["series[0].type","bar"],["series[0].barGap","-100%"],["series[0].itemStyle.normal.color","rgba(0,0,0,0.1)"],["series[0].barWidth","50%"],["series[1].barWidth","50%"],["series[1].type","bar"],["series[1].itemStyle.normal.color",t.color.shades.white]],height:"200px",width:"100%"}})],1),t._v(" "),r("v-card-text",{staticClass:"white"},[r("div",{staticClass:"layout row align-center ma-0"},[r("div",{staticClass:"grey--text"},[r("div",{staticClass:"caption"},[t._v("MAXIMUM BOUNCE")]),t._v(" "),r("div",{staticClass:"subheading mt-2"},[t._v("2500")])]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{},[r("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:10,color:"blue"}},[t._v("\n                  10\n                ")])],1)],1)])],1)],1),t._v(" "),r("v-flex",{attrs:{lg4:"",sm12:""}},[r("v-card",{staticClass:"elevation-0 box-shadow",attrs:{dark:"",color:"pink"}},[r("v-card-title",[r("div",{staticClass:"layout row ma-0"},[r("div",{staticClass:"subheading"},[t._v("Today")]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"caption"},[r("v-icon",[t._v("trending_up")]),t._v("\n                20%\n              ")],1)],1)]),t._v(" "),r("v-responsive",{staticClass:"white--text"},[r("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.monthVisit],["color",[t.color.pink.lighten2]],["grid.left","0"],["grid.bottom","0"],["grid.right","0"],["xAxis.show",!1],["yAxis.show",!1]],height:"200px",width:"100%"}})],1),t._v(" "),r("v-card-text",{staticClass:"white"},[r("div",{staticClass:"layout row align-center ma-0"},[r("div",{staticClass:"grey--text"},[r("div",{staticClass:"caption"},[t._v("MAXIMUM BOUNCE")]),t._v(" "),r("div",{staticClass:"subheading mt-2"},[t._v("2500")])]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{},[r("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:10,color:"blue"}},[t._v("\n                  10\n                ")])],1)],1)])],1)],1),t._v(" "),r("v-flex",{attrs:{lg4:"",sm12:""}},[r("v-card",{attrs:{color:"blue darken-1",dark:""}},[r("v-card-title",[r("div",{staticClass:"layout row ma-0"},[r("div",{staticClass:"subheading"},[t._v("Today")]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{staticClass:"caption"},[r("v-icon",[t._v("trending_up")]),t._v("\n                20%\n              ")],1)],1)]),t._v(" "),r("v-responsive",[r("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.monthVisit],["color",[t.color.blue.base]],["xAxis.show",!1],["xAxis.boundaryGap",!1],["grid.left","0"],["grid.bottom","0"],["grid.right","0"],["yAxis.show",!1],["series[0].areaStyle",{}],["series[0].smooth",!0]],height:"200px",width:"100%"}})],1),t._v(" "),r("v-card-text",{staticClass:"white"},[r("div",{staticClass:"layout row align-center ma-0"},[r("div",{staticClass:"grey--text"},[r("div",{staticClass:"caption"},[t._v("MAXIMUM BOUNCE")]),t._v(" "),r("div",{staticClass:"subheading mt-2"},[t._v("2500")])]),t._v(" "),r("v-spacer"),t._v(" "),r("div",{},[r("v-progress-circular",{attrs:{size:100,width:15,rotate:360,value:10,color:"blue"}},[t._v("\n                  10\n                ")])],1)],1)])],1)],1),t._v(" "),r("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[r("v-widget",{attrs:{title:"Analysis - Donut"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.campaign],["color",[t.color.amber.base,t.color.indigo.base,t.color.pink.base,t.color.green.base,t.color.teal.base,t.color.purple.base]],["legend.orient","horizontal"],["legend.y","bottom"],["xAxis.show",!1],["yAxis.show",!1],["series[0].type","pie"],["series[0].avoidLabelOverlap",!0],["series[0].radius",["50%","70%"]]],height:"350px",width:"100%"}})],1)])],1),t._v(" "),r("v-flex",{attrs:{lg6:"",sm12:"",xs12:""}},[r("v-widget",{attrs:{title:"Analysis - Pie"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.campaign],["color",[t.color.lightBlue.base,t.color.indigo.base,t.color.pink.base,t.color.green.base,t.color.cyan.base,t.color.teal.base]],["legend.orient","horizontal"],["legend.y","bottom"],["xAxis.show",!1],["yAxis.show",!1],["series[0].type","pie"]],height:"350px",width:"100%"}})],1)])],1),t._v(" "),r("v-flex",{attrs:{lg12:"",sm12:""}},[r("v-tabs",{on:{change:t.handleTabChange},model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[r("v-tab",{attrs:{ripple:"",href:"#tab-1"}},[t._v("\n            Sales\n          ")]),t._v(" "),r("v-tab",{attrs:{ripple:"",href:"#tab-2"}},[t._v("\n            Visit\n          ")]),t._v(" "),r("v-tabs-items",{model:{value:t.selectedTab,callback:function(e){t.selectedTab=e},expression:"selectedTab"}},[r("v-tab-item",{staticClass:"d-block",attrs:{value:"tab-1"}},[r("v-card",[r("e-chart",{attrs:{"path-option":[["color",[t.color.lightBlue.base,t.color.purple.base]],["dataset.source",t.dataset.monthVisit],["series[0].type","bar"],["series[1].type","bar"]],height:"350px",width:"100%"}})],1)],1),t._v(" "),r("v-tab-item",{attrs:{value:"tab-2"}},[r("v-card",[r("e-chart",{attrs:{"path-option":[["dataset.source",t.dataset.monthVisit],["series[0].type","line"]],height:"350px",width:"100%"}})],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=M.exports;y()(M,{VCard:_.a,VCardText:x.b,VCardTitle:V.a,VContainer:A.a,VFlex:S.a,VIcon:f.a,VLayout:T.a,VProgressCircular:k.a,VResponsive:j.a,VSpacer:E.a,VTab:z.a,VTabItem:I.a,VTabs:B.a,VTabsItems:L.a})}}]);