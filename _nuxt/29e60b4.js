(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{488:function(t,e,o){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},l=o(11),r=o(17),v=o.n(r),d=o(185),c=o(108),h=o(474),f=o(16),m=o(187),_=o(20),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"v-widget"}},[o("v-card",[t.enableHeader?o("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[o("v-toolbar-title",[o("h4",[t._v(t._s(t.title))])]),t._v(" "),o("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?o("v-divider"):t._e(),t._v(" "),o("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;v()(component,{VCard:d.a,VCardText:c.b,VDivider:h.a,VSpacer:f.a,VToolbar:m.a,VToolbarTitle:_.b})},504:function(t,e,o){"use strict";o.d(e,"a",(function(){return _}));var n=o(500),l=(o(76),o(517),o(503).a),r=o(50),v=o(36),d=o(5),c=l.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:n.a.options.props.transition},computed:{classes:function(){return Object.assign(l.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||l.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=l.options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?l.options.methods.genSelections.call(this):n.a.options.methods.genSelections.call(this)},genCommaSelection:function(t,e,o){return this.segmented?this.genSegmentedBtn(t):n.a.options.methods.genCommaSelection.call(this,t,e,o)},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=r.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(t){var e=this,o=this.getValue(t),n=this.computedItems.find((function(i){return e.getValue(i)===o}))||t;return n.text&&n.callback?this.$createElement(v.a,{props:{flat:!0},on:{click:function(t){t.stopPropagation(),n.callback(t)}}},[n.text]):(Object(d.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),h=o(508),f=o(203),m=o(202),_={functional:!0,$_wrapperFor:n.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(t,e){var o=e.props,data=e.data,r=e.slots,v=e.parent;Object(m.a)(data);var w=Object(f.a)(r(),t);return o.autocomplete&&Object(d.d)("<v-select autocomplete>","<v-autocomplete>",_,v),o.combobox&&Object(d.d)("<v-select combobox>","<v-combobox>",_,v),o.tags&&Object(d.d)("<v-select tags>","<v-combobox multiple>",_,v),o.overflow&&Object(d.d)("<v-select overflow>","<v-overflow-btn>",_,v),o.segmented&&Object(d.d)("<v-select segmented>","<v-overflow-btn segmented>",_,v),o.editable&&Object(d.d)("<v-select editable>","<v-overflow-btn editable>",_,v),data.attrs=data.attrs||{},o.combobox||o.tags?(data.attrs.multiple=o.tags,t(h.a,data,w)):o.autocomplete?(data.attrs.multiple=o.multiple,t(l,data,w)):o.overflow||o.segmented||o.editable?(data.attrs.segmented=o.segmented,data.attrs.editable=o.editable,t(c,data,w)):(data.attrs.multiple=o.multiple,t(n.a,data,w))}};e.b=_},508:function(t,e,o){"use strict";var n=o(509);e.a=n.a},517:function(t,e,o){var content=o(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("50fa3656",content,!0,{sourceMap:!1})},518:function(t,e,o){var n=o(6)(!1);n.push([t.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""]),t.exports=n},549:function(t,e,o){var content=o(550);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("605ac091",content,!0,{sourceMap:!1})},550:function(t,e,o){var n=o(6)(!1);n.push([t.i,".theme--light.v-radio--is-disabled label{color:rgba(0,0,0,.38)}.theme--light.v-radio--is-disabled .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-radio--is-disabled label{color:hsla(0,0%,100%,.5)}.theme--dark.v-radio--is-disabled .v-icon{color:hsla(0,0%,100%,.3)!important}.v-radio{align-items:center;display:flex;height:auto;margin-right:16px;outline:none}.v-radio--is-disabled{pointer-events:none}",""]),t.exports=n},551:function(t,e,o){var content=o(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("701cd39e",content,!0,{sourceMap:!1})},552:function(t,e,o){var n=o(6)(!1);n.push([t.i,".v-input--radio-group__input{display:flex;width:100%}.v-input--radio-group--column .v-input--radio-group__input>.v-label{padding-bottom:8px}.v-input--radio-group--row .v-input--radio-group__input>.v-label{padding-right:8px}.v-input--radio-group--row .v-input--radio-group__input{flex-direction:row;flex-wrap:wrap}.v-input--radio-group--column .v-radio:not(:last-child):not(:only-child){margin-bottom:8px}.v-input--radio-group--column .v-input--radio-group__input{flex-direction:column}",""]),t.exports=n},688:function(t,e,o){"use strict";o(18),o(39),o(22),o(13),o(23),o(26),o(549);var n=o(24),l=o(116),r=o(9),v=o(494),d=o(4),c=o(491),h=o(55),f=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function m(t){if(Array.isArray(t)){for(var i=0,e=Array(t.length);i<t.length;i++)e[i]=t[i];return e}return Array.from(t)}e.a={name:"v-radio",mixins:[r.a,v.a,Object(h.a)("radio","v-radio","v-radio-group"),d.a],inheritAttrs:!1,props:{color:{type:String,default:"accent"},disabled:Boolean,label:String,onIcon:{type:String,default:"$vuetify.icons.radioOn"},offIcon:{type:String,default:"$vuetify.icons.radioOff"},readonly:Boolean,value:null},data:function(){return{isActive:!1,isFocused:!1,parentError:!1}},computed:{computedData:function(){return this.setTextColor(!this.parentError&&this.isActive&&this.color,{staticClass:"v-radio",class:f({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses)})},computedColor:function(){return this.isActive?this.color:this.radio.validationState||!1},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},hasState:function(){return this.isActive||!!this.radio.validationState},isDisabled:function(){return this.disabled||!!this.radio.disabled},isReadonly:function(){return this.readonly||!!this.radio.readonly}},mounted:function(){this.radio.register(this)},beforeDestroy:function(){this.radio.unregister(this)},methods:{genInput:function(){for(var t,e=arguments.length,o=Array(e),n=0;n<e;n++)o[n]=arguments[n];return(t=c.a.options.methods.genInput).call.apply(t,[this].concat(m(o)))},genLabel:function(){return this.$createElement(l.a,{on:{click:this.onChange},attrs:{for:this.id},props:{color:this.radio.validationState||"",dark:this.dark,focused:this.hasState,light:this.light}},this.$slots.label||this.label)},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("radio",f({name:this.radio.name||!!this.radio._uid&&"v-radio-"+this.radio._uid,value:this.value},this.$attrs)),this.genRipple(this.setTextColor(this.computedColor)),this.$createElement(n.a,this.setTextColor(this.computedColor,{props:{dark:this.dark,light:this.light}}),this.computedIcon)])},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onChange:function(){this.isDisabled||this.isReadonly||this.isDisabled||this.isActive&&this.radio.mandatory||this.$emit("change",this.value)},onKeydown:function(){}},render:function(t){return t("div",this.computedData,[this.genRadio(),this.genLabel()])}}},689:function(t,e,o){"use strict";o(12),o(195),o(490),o(551);var n=o(77),l=o(493),r=o(55);e.a=n.a.extend({name:"v-radio-group",mixins:[l.a,Object(r.b)("radio")],model:{prop:"value",event:"change"},provide:function(){return{radio:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},mandatory:{type:Boolean,default:!0},name:String,row:Boolean,value:{default:null}},data:function(){return{internalTabIndex:-1,radios:[]}},computed:{classes:function(){return{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row}}},watch:{hasError:"setErrorState",internalValue:"setActiveRadio"},mounted:function(){this.setErrorState(this.hasError),this.setActiveRadio()},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{role:"radiogroup"}},n.a.options.methods.genDefaultSlot.call(this))},onRadioChange:function(t){this.disabled||(this.hasInput=!0,this.internalValue=t,this.setActiveRadio(),this.$nextTick(this.validate))},onRadioBlur:function(t){t.relatedTarget&&t.relatedTarget.classList.contains("v-radio")||(this.hasInput=!0,this.$emit("blur",t))},register:function(t){t.isActive=this.valueComparator(this.internalValue,t.value),t.$on("change",this.onRadioChange),t.$on("blur",this.onRadioBlur),this.radios.push(t)},setErrorState:function(t){for(var e=this.radios.length;--e>=0;)this.radios[e].parentError=t},setActiveRadio:function(){for(var t=this.radios.length;--t>=0;){var e=this.radios[t];e.isActive=this.valueComparator(this.internalValue,e.value)}},unregister:function(t){t.$off("change",this.onRadioChange),t.$off("blur",this.onRadioBlur);var e=this.radios.findIndex((function(e){return e===t}));e>-1&&this.radios.splice(e,1)}}})},952:function(t,e,o){"use strict";o.r(e);var n={components:{VWidget:o(488).a},data:function(){return{basic:{dialog:!1},fullscreen:{dialog:!1,notifications:!1,sound:!0,widgets:!1},scrollable:{name:"",dialog:!1}}},computed:{},methods:{}},l=o(11),r=o(17),v=o.n(r),d=o(165),c=o(185),h=o(108),f=o(180),m=o(544),_=o(166),w=o(486),x=o(474),k=o(173),y=o(186),B=o(167),V=o(170),S=o(171),C=o(175),A=o(10),$=o(688),O=o(689),T=o(504),I=o(16),R=o(475),j=o(110),D=o(187),E=o(20),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"page-dialogs"}},[o("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[o("v-layout",{attrs:{row:"",wrap:""}},[o("v-flex",{attrs:{lg4:""}},[o("v-widget",{attrs:{title:"Basic Usage"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.basic.dialog,callback:function(e){t.$set(t.basic,"dialog",e)},expression:"basic.dialog"}},[o("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Open Dialog")]),t._v(" "),o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("User Profile")])]),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"Legal first name",required:""}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"Legal middle name",hint:"example of helper text only on focus"}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[o("v-text-field",{attrs:{label:"Legal last name",hint:"example of persistent helper text","persistent-hint":"",required:""}})],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Email",required:""}})],1),t._v(" "),o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Password",type:"password",required:""}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[o("v-select",{attrs:{label:"Age",required:"",items:["0-17","18-29","30-54","54+"]}})],1),t._v(" "),o("v-flex",{attrs:{xs12:"",sm6:""}},[o("v-select",{attrs:{label:"Interests",multiple:"",autocomplete:"",chips:"",items:["Skiing","Ice hockey","Soccer","Basketball","Hockey","Reading","Writing","Coding","Basejump"]}})],1)],1)],1),t._v(" "),o("small",[t._v("*indicates required field")])],1),t._v(" "),o("v-card-actions",[o("v-spacer"),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.basic.dialog=!1}}},[t._v("Close")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.basic.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)])],1),t._v(" "),o("v-flex",{attrs:{xl4:""}},[o("v-widget",{attrs:{title:"Fullscreen Dialog"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("v-dialog",{attrs:{fullscreen:"",transition:"dialog-bottom-transition",overlay:!1},model:{value:t.fullscreen.dialog,callback:function(e){t.$set(t.fullscreen,"dialog",e)},expression:"fullscreen.dialog"}},[o("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Open Dialog")]),t._v(" "),o("v-card",[o("v-toolbar",{attrs:{dark:"",color:"primary"}},[o("v-btn",{attrs:{icon:"",dark:""},nativeOn:{click:function(e){t.fullscreen.dialog=!1}}},[o("v-icon",[t._v("close")])],1),t._v(" "),o("v-toolbar-title",[t._v("Settings")]),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-items",[o("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1),t._v(" "),o("v-list",{attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("User Controls")]),t._v(" "),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-content",[o("v-list-tile-title",[t._v("Content filtering")]),t._v(" "),o("v-list-tile-sub-title",[t._v("Set the content filtering level to restrict apps that can be downloaded\n                      ")])],1)],1),t._v(" "),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-content",[o("v-list-tile-title",[t._v("Password")]),t._v(" "),o("v-list-tile-sub-title",[t._v("Require password for purchase or use password to restrict purchase\n                      ")])],1)],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-list",{attrs:{"three-line":"",subheader:""}},[o("v-subheader",[t._v("General")]),t._v(" "),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-action",[o("v-checkbox",{model:{value:t.fullscreen.notifications,callback:function(e){t.$set(t.fullscreen,"notifications",e)},expression:"fullscreen.notifications"}})],1),t._v(" "),o("v-list-tile-content",[o("v-list-tile-title",[t._v("Notifications")]),t._v(" "),o("v-list-tile-sub-title",[t._v("Notify me about updates to apps or games that I downloaded\n                      ")])],1)],1),t._v(" "),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-action",[o("v-checkbox",{model:{value:t.fullscreen.sound,callback:function(e){t.$set(t.fullscreen,"sound",e)},expression:"fullscreen.sound"}})],1),t._v(" "),o("v-list-tile-content",[o("v-list-tile-title",[t._v("Sound")]),t._v(" "),o("v-list-tile-sub-title",[t._v("Auto-update apps at any time. Data charges may apply\n                      ")])],1)],1),t._v(" "),o("v-list-tile",{attrs:{avatar:""}},[o("v-list-tile-action",[o("v-checkbox",{model:{value:t.fullscreen.widgets,callback:function(e){t.$set(t.fullscreen,"widgets",e)},expression:"fullscreen.widgets"}})],1),t._v(" "),o("v-list-tile-content",[o("v-list-tile-title",[t._v("Auto-add widgets")]),t._v(" "),o("v-list-tile-sub-title",[t._v("Automatically add home screen widgets")])],1)],1)],1)],1)],1)],1)])],1),t._v(" "),o("v-flex",{attrs:{xl4:""}},[o("v-widget",{attrs:{title:"Scrollable Dialog"}},[o("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[o("v-dialog",{attrs:{scrollable:"","max-width":"300px"},model:{value:t.scrollable.dialog,callback:function(e){t.$set(t.scrollable,"dialog",e)},expression:"scrollable.dialog"}},[o("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("Open Dialog")]),t._v(" "),o("v-card",[o("v-card-title",[t._v("Select Country")]),t._v(" "),o("v-divider"),t._v(" "),o("v-card-text",[o("v-radio-group",{attrs:{column:""},model:{value:t.scrollable.name,callback:function(e){t.$set(t.scrollable,"name",e)},expression:"scrollable.name"}},[o("v-radio",{attrs:{label:"Bahamas, The",value:"bahamas"}}),t._v(" "),o("v-radio",{attrs:{label:"Bahrain",value:"bahrain"}}),t._v(" "),o("v-radio",{attrs:{label:"Bangladesh",value:"bangladesh"}}),t._v(" "),o("v-radio",{attrs:{label:"Barbados",value:"barbados"}}),t._v(" "),o("v-radio",{attrs:{label:"Belarus",value:"belarus"}}),t._v(" "),o("v-radio",{attrs:{label:"Belgium",value:"belgium"}}),t._v(" "),o("v-radio",{attrs:{label:"Belize",value:"belize"}}),t._v(" "),o("v-radio",{attrs:{label:"Benin",value:"benin"}}),t._v(" "),o("v-radio",{attrs:{label:"Bhutan",value:"bhutan"}}),t._v(" "),o("v-radio",{attrs:{label:"Bolivia",value:"bolivia"}}),t._v(" "),o("v-radio",{attrs:{label:"Bosnia and Herzegovina",value:"bosnia"}}),t._v(" "),o("v-radio",{attrs:{label:"Botswana",value:"botswana"}}),t._v(" "),o("v-radio",{attrs:{label:"Brazil",value:"brazil"}}),t._v(" "),o("v-radio",{attrs:{label:"Brunei",value:"brunei"}}),t._v(" "),o("v-radio",{attrs:{label:"Bulgaria",value:"bulgaria"}}),t._v(" "),o("v-radio",{attrs:{label:"Burkina Faso",value:"burkina"}}),t._v(" "),o("v-radio",{attrs:{label:"Burma",value:"burma"}}),t._v(" "),o("v-radio",{attrs:{label:"Burundi",value:"burundi"}})],1)],1),t._v(" "),o("v-divider"),t._v(" "),o("v-card-actions",[o("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.scrollable.dialog=!1}}},[t._v("Close")]),t._v(" "),o("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.scrollable.dialog=!1}}},[t._v("Save")])],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCard:c.a,VCardActions:h.a,VCardText:h.b,VCardTitle:f.a,VCheckbox:m.a,VContainer:_.a,VDialog:w.a,VDivider:x.a,VFlex:k.a,VIcon:y.a,VLayout:B.a,VList:V.a,VListTile:S.a,VListTileAction:C.a,VListTileContent:A.b,VListTileSubTitle:A.c,VListTileTitle:A.d,VRadio:$.a,VRadioGroup:O.a,VSelect:T.a,VSpacer:I.a,VSubheader:R.a,VTextField:j.a,VToolbar:D.a,VToolbarItems:E.a,VToolbarTitle:E.b})}}]);