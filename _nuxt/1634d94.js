(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{692:function(t,e,r){var content=r(894);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("6d738344",content,!0,{sourceMap:!1})},893:function(t,e,r){"use strict";r(692)},894:function(t,e,r){var o=r(6)(!1);o.push([t.i,"#colors-page .flex{margin:1rem 0}#colors-page .card{color:#fff;font-weight:500;letter-spacing:.5px;padding:1rem;border-radius:0}#colors-page .card .card__text h3{color:#fff;align-self:flex-start;font-size:1.5rem;margin:0}#colors-page .card__text{padding:0}",""]),t.exports=o},951:function(t,e,r){"use strict";r.r(e);r(206),r(44),r(38);var o=r(196),n=r.n(o),l=r(212),c={data:function(){return{colors:n.a,search:""}},computed:{computedColors:function(){var t=this,e={},r=this.search.toLowerCase();return Object.keys(this.colors).forEach((function(o){var n=l.a.kebab(o).toLowerCase();n.indexOf(r)>-1&&(e[n]=t.colors[o])})),e}},methods:{endStr:function(t){return t[t.length-1]},convertToClass:function(t){var e=this.endStr(t),sub=t.substr(0,t.length-1);return isNaN(parseInt(e,10))?t:"".concat(sub,"-").concat(e)},getColorClass:function(t){return["white","transparent"].includes(t)||t.indexOf("light")>-1||t.indexOf("accent")>-1?"black--text":"white--text"}}},d=(r(893),r(11)),f=r(17),x=r.n(f),v=r(185),h=r(108),_=r(166),C=r(173),m=r(167),w=r(110),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{id:"page-colors",fluid:"","grid-list-xl":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"mb-3",attrs:{xs12:""}},[r("v-text-field",{attrs:{"prepend-icon":"filter_list",solo:"solo",label:"Search Materil Colors","single-line":"single-line"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),t._l(t.computedColors,(function(e,o){return r("v-flex",{key:o,attrs:{xs12:"",sm6:"",md4:""}},[r("v-card",{attrs:{color:o,tile:"tile"}},[r("v-card-text",[r("h3",{staticClass:"white--text"},[t._v(t._s(o))])])],1),t._v(" "),t._l(e,(function(e,n){return r("v-card",{key:n,class:t.getColorClass(n),attrs:{color:o+" "+t.convertToClass(n),tile:"tile"}},[r("v-card-text",[r("v-layout",[r("v-flex",{staticClass:"caption",attrs:{xs8:"xs8"}},["shades"!==o?r("span",[t._v(t._s(o)+" ")]):t._e(),"base"!==n?r("span",[t._v(t._s(n.replace(/(.*)(\d)/,"$1-$2")))]):t._e()]),t._v(" "),r("v-flex",{staticClass:"text-xs-right",attrs:{xs4:"xs4"}},["transparent"!==e?r("span",[t._v(t._s(e.toUpperCase()))]):t._e()])],1)],1)],1)}))],2)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;x()(component,{VCard:v.a,VCardText:h.b,VContainer:_.a,VFlex:C.a,VLayout:m.a,VTextField:w.a})}}]);