(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{488:function(t,e,r){"use strict";var n={name:"v-widget",props:{title:{type:String},enableHeader:{type:Boolean,default:!0},contentBg:{type:String,default:"white"}},data:function(){return{}},computed:{}},o=r(11),l=r(17),c=r.n(l),v=r(185),d=r(108),y=r(474),m=r(16),f=r(187),h=r(20),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"v-widget"}},[r("v-card",[t.enableHeader?r("v-toolbar",{attrs:{color:"transparent",flat:"",dense:"",card:""}},[r("v-toolbar-title",[r("h4",[t._v(t._s(t.title))])]),t._v(" "),r("v-spacer"),t._v(" "),t._t("widget-header-action")],2):t._e(),t._v(" "),t.enableHeader?r("v-divider"):t._e(),t._v(" "),r("v-card-text",{class:t.contentBg},[t._t("widget-content")],2)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VCard:v.a,VCardText:d.b,VDivider:y.a,VSpacer:m.a,VToolbar:f.a,VToolbarTitle:h.b})},504:function(t,e,r){"use strict";r.d(e,"a",(function(){return h}));var n=r(500),o=(r(76),r(517),r(503).a),l=r(50),c=r(36),v=r(5),d=o.extend({name:"v-overflow-btn",props:{segmented:Boolean,editable:Boolean,transition:n.a.options.props.transition},computed:{classes:function(){return Object.assign(o.options.computed.classes.call(this),{"v-overflow-btn":!0,"v-overflow-btn--segmented":this.segmented,"v-overflow-btn--editable":this.editable})},isAnyValueAllowed:function(){return this.editable||o.options.computed.isAnyValueAllowed.call(this)},isSingle:function(){return!0},computedItems:function(){return this.segmented?this.allItems:this.filteredItems},$_menuProps:function(){var t=o.options.computed.$_menuProps.call(this);return t.transition=t.transition||"v-menu-transition",t}},methods:{genSelections:function(){return this.editable?o.options.methods.genSelections.call(this):n.a.options.methods.genSelections.call(this)},genCommaSelection:function(t,e,r){return this.segmented?this.genSegmentedBtn(t):n.a.options.methods.genCommaSelection.call(this,t,e,r)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data.domProps.value=this.editable?this.internalSearch:"",input.data.attrs.readonly=!this.isAnyValueAllowed,input},genLabel:function(){if(this.editable&&this.isFocused)return null;var label=l.a.options.methods.genLabel.call(this);return label?(label.data.style={},label):label},genSegmentedBtn:function(t){var e=this,r=this.getValue(t),n=this.computedItems.find((function(i){return e.getValue(i)===r}))||t;return n.text&&n.callback?this.$createElement(c.a,{props:{flat:!0},on:{click:function(t){t.stopPropagation(),n.callback(t)}}},[n.text]):(Object(v.c)("When using 'segmented' prop without a selection slot, items must contain both a text and callback property",this),null)}}}),y=r(508),m=r(203),f=r(202),h={functional:!0,$_wrapperFor:n.a,props:{autocomplete:Boolean,combobox:Boolean,multiple:Boolean,tags:Boolean,editable:Boolean,overflow:Boolean,segmented:Boolean},render:function(t,e){var r=e.props,data=e.data,l=e.slots,c=e.parent;Object(f.a)(data);var _=Object(m.a)(l(),t);return r.autocomplete&&Object(v.d)("<v-select autocomplete>","<v-autocomplete>",h,c),r.combobox&&Object(v.d)("<v-select combobox>","<v-combobox>",h,c),r.tags&&Object(v.d)("<v-select tags>","<v-combobox multiple>",h,c),r.overflow&&Object(v.d)("<v-select overflow>","<v-overflow-btn>",h,c),r.segmented&&Object(v.d)("<v-select segmented>","<v-overflow-btn segmented>",h,c),r.editable&&Object(v.d)("<v-select editable>","<v-overflow-btn editable>",h,c),data.attrs=data.attrs||{},r.combobox||r.tags?(data.attrs.multiple=r.tags,t(y.a,data,_)):r.autocomplete?(data.attrs.multiple=r.multiple,t(o,data,_)):r.overflow||r.segmented||r.editable?(data.attrs.segmented=r.segmented,data.attrs.editable=r.editable,t(d,data,_)):(data.attrs.multiple=r.multiple,t(n.a,data,_))}};e.b=h},508:function(t,e,r){"use strict";var n=r(509);e.a=n.a},517:function(t,e,r){var content=r(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(7).default)("50fa3656",content,!0,{sourceMap:!1})},518:function(t,e,r){var n=r(6)(!1);n.push([t.i,'.theme--light.v-overflow-btn .v-input__control:before,.theme--light.v-overflow-btn .v-input__slot:before{background-color:rgba(0,0,0,.12)!important}.theme--light.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--light.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--light.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--light.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--light.v-overflow-btn--editable:hover .v-input__append-inner,.theme--light.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid rgba(0,0,0,.12)}.theme--light.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--light.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--light.v-overflow-btn:hover .v-input__slot{background:#fff}.theme--dark.v-overflow-btn .v-input__control:before,.theme--dark.v-overflow-btn .v-input__slot:before{background-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-overflow-btn.v-text-field--outline .v-input__control:before,.theme--dark.v-overflow-btn.v-text-field--outline .v-input__slot:before{background-color:transparent!important}.theme--dark.v-overflow-btn--editable.v-input--is-focused .v-input__append-inner,.theme--dark.v-overflow-btn--editable.v-select--is-menu-active .v-input__append-inner,.theme--dark.v-overflow-btn--editable:hover .v-input__append-inner,.theme--dark.v-overflow-btn--segmented .v-input__append-inner{border-left:1px solid hsla(0,0%,100%,.12)}.theme--dark.v-overflow-btn.v-input--is-focused .v-input__slot,.theme--dark.v-overflow-btn.v-select--is-menu-active .v-input__slot,.theme--dark.v-overflow-btn:hover .v-input__slot{background:#424242}.v-overflow-btn{margin-top:12px;padding-top:0}.v-overflow-btn:not(.v-overflow-btn--editable)>.v-input__control>.v-input__slot{cursor:pointer}.v-overflow-btn .v-select__slot{height:48px}.v-overflow-btn .v-select__slot input{margin-left:16px;cursor:pointer}.v-overflow-btn .v-select__selection--comma:first-child{margin-left:16px}.v-overflow-btn .v-input__slot{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-overflow-btn .v-input__slot:after{content:none}.v-overflow-btn .v-label{margin-left:16px;top:calc(50% - 10px)}.v-overflow-btn .v-input__append-inner{width:48px;height:48px;align-self:auto;align-items:center;margin-top:0;padding:0;flex-shrink:0}.v-overflow-btn .v-input__append-outer,.v-overflow-btn .v-input__prepend-outer{margin-top:12px;margin-bottom:12px}.v-overflow-btn .v-input__control:before{height:1px;top:-1px;content:"";left:0;position:absolute;transition:.3s cubic-bezier(.25,.8,.5,1);width:100%}.v-overflow-btn.v-input--is-focused .v-input__slot,.v-overflow-btn.v-select--is-menu-active .v-input__slot{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-overflow-btn .v-select__selections{width:0}.v-overflow-btn--segmented .v-select__selections{flex-wrap:nowrap}.v-overflow-btn--segmented .v-select__selections .v-btn{border-radius:0;margin:0 -16px 0 0;height:48px;width:100%}.v-overflow-btn--segmented .v-select__selections .v-btn__content{justify-content:start}.v-overflow-btn--segmented .v-select__selections .v-btn__content:before{background-color:transparent}.v-overflow-btn--editable .v-select__slot input{cursor:text}.v-overflow-btn--editable .v-input__append-inner,.v-overflow-btn--editable .v-input__append-inner *{cursor:pointer}',""]),t.exports=n},609:function(t,e,r){"use strict";e.a=[{country:"Aruba",abbr:"AW"},{country:"Afghanistan",abbr:"AF"},{country:"Angola",abbr:"AO"},{country:"Anguilla",abbr:"AI"},{country:"Albania",abbr:"AL"},{country:"Andorra",abbr:"AD"},{country:"Netherlands Antilles",abbr:"AN"},{country:"United Arab Emirates",abbr:"AE"},{country:"Argentina",abbr:"AR"},{country:"Armenia",abbr:"AM"},{country:"American Samoa",abbr:"AS"},{country:"Antarctica",abbr:"AQ"},{country:"French Southern territories",abbr:"TF"},{country:"Antigua and Barbuda",abbr:"AG"},{country:"Australia",abbr:"AU"},{country:"Austria",abbr:"AT"},{country:"Azerbaijan",abbr:"AZ"},{country:"Burundi",abbr:"BI"},{country:"Belgium",abbr:"BE"},{country:"Benin",abbr:"BJ"},{country:"Burkina Faso",abbr:"BF"},{country:"Bangladesh",abbr:"BD"},{country:"Bulgaria",abbr:"BG"},{country:"Bahrain",abbr:"BH"},{country:"Bahamas",abbr:"BS"},{country:"Bosnia and Herzegovina",abbr:"BA"},{country:"Belarus",abbr:"BY"},{country:"Belize",abbr:"BZ"},{country:"Bermuda",abbr:"BM"},{country:"Bolivia",abbr:"BO"},{country:"Brazil",abbr:"BR"},{country:"Barbados",abbr:"BB"},{country:"Brunei",abbr:"BN"},{country:"Bhutan",abbr:"BT"},{country:"Bouvet Island",abbr:"BV"},{country:"Botswana",abbr:"BW"},{country:"Central African Republic",abbr:"CF"},{country:"Canada",abbr:"CA"},{country:"Cocos (Keeling) Islands",abbr:"CC"},{country:"Switzerland",abbr:"CH"},{country:"Chile",abbr:"CL"},{country:"China",abbr:"CN"},{country:"Ivory Coast",abbr:"CI"},{country:"Cameroon",abbr:"CM"},{country:"Congo, The Democratic Republic of the",abbr:"CD"},{country:"Congo",abbr:"CG"},{country:"Cook Islands",abbr:"CK"},{country:"Colombia",abbr:"CO"},{country:"Comoros",abbr:"KM"},{country:"Cape Verde",abbr:"CV"},{country:"Costa Rica",abbr:"CR"},{country:"Cuba",abbr:"CU"},{country:"Christmas Island",abbr:"CX"},{country:"Cayman Islands",abbr:"KY"},{country:"Cyprus",abbr:"CY"},{country:"Czech Republic",abbr:"CZ"},{country:"Germany",abbr:"DE"},{country:"Djibouti",abbr:"DJ"},{country:"Dominica",abbr:"DM"},{country:"Denmark",abbr:"DK"},{country:"Dominican Republic",abbr:"DO"},{country:"Algeria",abbr:"DZ"},{country:"Ecuador",abbr:"EC"},{country:"Egypt",abbr:"EG"},{country:"Eritrea",abbr:"ER"},{country:"Western Sahara",abbr:"EH"},{country:"Spain",abbr:"ES"},{country:"Estonia",abbr:"EE"},{country:"Ethiopia",abbr:"ET"},{country:"Finland",abbr:"FI"},{country:"Fiji Islands",abbr:"FJ"},{country:"Falkland Islands",abbr:"FK"},{country:"France",abbr:"FR"},{country:"Faroe Islands",abbr:"FO"},{country:"Federated States of Micronesia",abbr:"FM"},{country:"Gabon",abbr:"GA"},{country:"United Kingdom",abbr:"GB"},{country:"Georgia",abbr:"GE"},{country:"Ghana",abbr:"GH"},{country:"Gibraltar",abbr:"GI"},{country:"Guinea",abbr:"GN"},{country:"Guadeloupe",abbr:"GP"},{country:"Gambia",abbr:"GM"},{country:"Guinea-Bissau",abbr:"GW"},{country:"Equatorial Guinea",abbr:"GQ"},{country:"Greece",abbr:"GR"},{country:"Grenada",abbr:"GD"},{country:"Greenland",abbr:"GL"},{country:"Guatemala",abbr:"GT"},{country:"French Guiana",abbr:"GF"},{country:"Guam",abbr:"GU"},{country:"Guyana",abbr:"GY"},{country:"Hong Kong",abbr:"HK"},{country:"Heard Island and McDonald Islands",abbr:"HM"},{country:"Honduras",abbr:"HN"},{country:"Croatia",abbr:"HR"},{country:"Haiti",abbr:"HT"},{country:"Hungary",abbr:"HU"},{country:"Indonesia",abbr:"ID"},{country:"India",abbr:"IN"},{country:"British Indian Ocean Territory",abbr:"IO"},{country:"Ireland",abbr:"IE"},{country:"Iran",abbr:"IR"},{country:"Iraq",abbr:"IQ"},{country:"Iceland",abbr:"IS"},{country:"Israel",abbr:"IL"},{country:"Italy",abbr:"IT"},{country:"Jamaica",abbr:"JM"},{country:"Jordan",abbr:"JO"},{country:"Japan",abbr:"JP"},{country:"Kazakhstan",abbr:"KZ"},{country:"Kenya",abbr:"KE"},{country:"Kyrgyzstan",abbr:"KG"},{country:"Cambodia",abbr:"KH"},{country:"Kiribati",abbr:"KI"},{country:"Saint Kitts and Nevis",abbr:"KN"},{country:"South Korea",abbr:"KR"},{country:"Kuwait",abbr:"KW"},{country:"Laos",abbr:"LA"},{country:"Lebanon",abbr:"LB"},{country:"Liberia",abbr:"LR"},{country:"Libyan Arab Jamahiriya",abbr:"LY"},{country:"Saint Lucia",abbr:"LC"},{country:"Liechtenstein",abbr:"LI"},{country:"Sri Lanka",abbr:"LK"},{country:"Lesotho",abbr:"LS"},{country:"Lithuania",abbr:"LT"},{country:"Luxembourg",abbr:"LU"},{country:"Latvia",abbr:"LV"},{country:"Macao",abbr:"MO"},{country:"Morocco",abbr:"MA"},{country:"Monaco",abbr:"MC"},{country:"Moldova",abbr:"MD"},{country:"Madagascar",abbr:"MG"},{country:"Maldives",abbr:"MV"},{country:"Mexico",abbr:"MX"},{country:"Marshall Islands",abbr:"MH"},{country:"Macedonia",abbr:"MK"},{country:"Mali",abbr:"ML"},{country:"Malta",abbr:"MT"},{country:"Myanmar",abbr:"MM"},{country:"Mongolia",abbr:"MN"},{country:"Northern Mariana Islands",abbr:"MP"},{country:"Mozambique",abbr:"MZ"},{country:"Mauritania",abbr:"MR"},{country:"Montserrat",abbr:"MS"},{country:"Martinique",abbr:"MQ"},{country:"Mauritius",abbr:"MU"},{country:"Malawi",abbr:"MW"},{country:"Malaysia",abbr:"MY"},{country:"Mayotte",abbr:"YT"},{country:"Namibia",abbr:"NA"},{country:"New Caledonia",abbr:"NC"},{country:"Niger",abbr:"NE"},{country:"Norfolk Island",abbr:"NF"},{country:"Nigeria",abbr:"NG"},{country:"Nicaragua",abbr:"NI"},{country:"Niue",abbr:"NU"},{country:"Netherlands",abbr:"NL"},{country:"Norway",abbr:"NO"},{country:"Nepal",abbr:"NP"},{country:"Nauru",abbr:"NR"},{country:"New Zealand",abbr:"NZ"},{country:"Oman",abbr:"OM"},{country:"Pakistan",abbr:"PK"},{country:"Panama",abbr:"PA"},{country:"Pitcairn",abbr:"PN"},{country:"Peru",abbr:"PE"},{country:"Philippines",abbr:"PH"},{country:"Palau",abbr:"PW"},{country:"Papua New Guinea",abbr:"PG"},{country:"Poland",abbr:"PL"},{country:"Puerto Rico",abbr:"PR"},{country:"North Korea",abbr:"KP"},{country:"Portugal",abbr:"PT"},{country:"Paraguay",abbr:"PY"},{country:"Palestine",abbr:"PS"},{country:"French Polynesia",abbr:"PF"},{country:"Qatar",abbr:"QA"},{country:"Reunion",abbr:"RE"},{country:"Romania",abbr:"RO"},{country:"Russian Federation",abbr:"RU"},{country:"Rwanda",abbr:"RW"},{country:"Saudi Arabia",abbr:"SA"},{country:"Sudan",abbr:"SD"},{country:"Senegal",abbr:"SN"},{country:"Singapore",abbr:"SG"},{country:"South Georgia and the South Sandwich Islands",abbr:"GS"},{country:"Saint Helena",abbr:"SH"},{country:"Svalbard and Jan Mayen",abbr:"SJ"},{country:"Solomon Islands",abbr:"SB"},{country:"Sierra Leone",abbr:"SL"},{country:"El Salvador",abbr:"SV"},{country:"San Marino",abbr:"SM"},{country:"Somalia",abbr:"SO"},{country:"Saint Pierre and Miquelon",abbr:"PM"},{country:"Sao Tome and Principe",abbr:"ST"},{country:"Suriname",abbr:"SR"},{country:"Slovakia",abbr:"SK"},{country:"Slovenia",abbr:"SI"},{country:"Sweden",abbr:"SE"},{country:"Swaziland",abbr:"SZ"},{country:"Seychelles",abbr:"SC"},{country:"Syria",abbr:"SY"},{country:"Turks and Caicos Islands",abbr:"TC"},{country:"Chad",abbr:"TD"},{country:"Togo",abbr:"TG"},{country:"Thailand",abbr:"TH"},{country:"Tajikistan",abbr:"TJ"},{country:"Tokelau",abbr:"TK"},{country:"Turkmenistan",abbr:"TM"},{country:"East Timor",abbr:"TP"},{country:"Tonga",abbr:"TO"},{country:"Trinidad and Tobago",abbr:"TT"},{country:"Tunisia",abbr:"TN"},{country:"Turkey",abbr:"TR"},{country:"Tuvalu",abbr:"TV"},{country:"Taiwan",abbr:"TW"},{country:"Tanzania",abbr:"TZ"},{country:"Uganda",abbr:"UG"},{country:"Ukraine",abbr:"UA"},{country:"United States Minor Outlying Islands",abbr:"UM"},{country:"Uruguay",abbr:"UY"},{country:"United States",abbr:"US"},{country:"Uzbekistan",abbr:"UZ"},{country:"Holy See (Vatican City State)",abbr:"VA"},{country:"Saint Vincent and the Grenadines",abbr:"VC"},{country:"Venezuela",abbr:"VE"},{country:"British Virgin Islands",abbr:"VG"},{country:"United States Virgin Islands",abbr:"VI"},{country:"Vietnam",abbr:"VN"},{country:"Vanuatu",abbr:"VU"},{country:"Wallis and Futuna",abbr:"WF"},{country:"Samoa",abbr:"WS"},{country:"Yemen",abbr:"YE"},{country:"Yugoslavia",abbr:"YU"},{country:"South Africa",abbr:"ZA"},{country:"Zambia",abbr:"ZM"},{country:"Zimbabwe",abbr:"ZW"}]},941:function(t,e,r){"use strict";r.r(e);r(33);var n=r(488),o=r(609),l={components:{VWidget:n.a},data:function(){return{loading:!1,items:[],search:null,select:[],e1:null,e2:null,e3:null,e4:null,e5:null,e6:null,e7:null,multi1:[],multi2:[],multi3:[],multi4:[],multi5:[],countries:o.a}},computed:{},watch:{search:function(t){t&&this.querySelections(t)}},methods:{querySelections:function(t){var e=this;console.log(t),this.loading=!0,setTimeout((function(){e.items=e.countries.filter((function(e){return(e.country||"").toLowerCase().indexOf((t||"").toLowerCase())>-1})),e.loading=!1}),500)}}},c=r(11),v=r(17),d=r.n(v),y=r(169),m=r(476),f=r(166),h=r(173),_=r(167),x=r(504),w=r(475),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"page-selects"}},[r("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{lg6:"",xs12:""}},[r("v-widget",{attrs:{title:"Single Selection"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Standard")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{items:t.countries,label:"Select","item-text":"country","item-value":"abbr","single-line":""},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Standard with focus")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{staticClass:"input-group--focused",attrs:{items:t.countries,label:"Select","item-text":"country","item-value":"abbr"},model:{value:t.e2,callback:function(e){t.e2=e},expression:"e2"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Error")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{label:"Select",items:t.countries,"error-messages":["Please select an option"],"item-text":"country","item-value":"abbr"},model:{value:t.e3,callback:function(e){t.e3=e},expression:"e3"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Prepend Icon")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{label:"Select","prepend-icon":"map",items:t.countries,"item-text":"country","item-value":"abbr"},model:{value:t.e5,callback:function(e){t.e5=e},expression:"e5"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Append Icon")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{label:"Select",items:t.countries,"append-icon":"map","item-text":"country","item-value":"abbr"},model:{value:t.e6,callback:function(e){t.e6=e},expression:"e6"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Auto complete")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{label:"Select",items:t.countries,autocomplete:"","item-text":"country","item-value":"abbr"},model:{value:t.e7,callback:function(e){t.e7=e},expression:"e7"}})],1)],1)],1)],1)])],1),t._v(" "),r("v-flex",{attrs:{lg6:"",xs12:""}},[r("v-widget",{attrs:{title:"Mulitple Selection"}},[r("div",{attrs:{slot:"widget-content"},slot:"widget-content"},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Tags")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{items:t.countries,tags:"",label:"Select","multi-line":"","item-text":"country","item-value":"abbr","return-object":""},model:{value:t.multi1,callback:function(e){t.multi1=e},expression:"multi1"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Tags and chips")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{staticClass:"input-group--focused",attrs:{items:t.countries,tags:"",chips:"",multiple:"",label:"Select","item-text":"country"},model:{value:t.multi2,callback:function(e){t.multi2=e},expression:"multi2"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Rules")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{label:"Async items",autocomplete:"",loading:t.loading,multiple:"","cache-items":"",chips:"",required:"",items:t.items,"item-text":"country","item-value":"country",rules:[function(){return t.select.length>0||"You must choose at least one"}],"search-input":t.search},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Slots - Closable chips")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{label:"Select",items:t.countries,chips:"",tags:"","multi-line":"","item-text":"country","item-value":"abbr","return-object":""},scopedSlots:t._u([{key:"selection",fn:function(data){return[r("v-chip",{key:JSON.stringify(data.item.abbr),staticClass:"chip--select-multi",attrs:{close:"",selected:data.selected},on:{input:function(t){return data.parent.selectItem(data.item.abbr)}}},[r("v-avatar",{staticClass:"accent"},[t._v(t._s(data.item.abbr.slice(0,1).toUpperCase()))]),t._v("\n                        "+t._s(data.item.country)+"\n                      ")],1)]}}]),model:{value:t.multi4,callback:function(e){t.multi4=e},expression:"multi4"}})],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-subheader",[t._v("Slots")])],1),t._v(" "),r("v-flex",{attrs:{xs6:""}},[r("v-select",{attrs:{label:"Select",items:t.countries,chips:"",tags:"","multi-line":"","item-text":"country","item-value":"abbr","return-object":""},scopedSlots:t._u([{key:"selection",fn:function(data){return[r("v-chip",{key:JSON.stringify(data.item.abbr),staticClass:"chip--select-multi",attrs:{selected:data.selected},on:{input:function(t){return data.parent.selectItem(data.item.abbr)}}},[r("v-avatar",{staticClass:"accent"},[t._v(t._s(data.item.abbr.slice(0,1).toUpperCase()))]),t._v("\n                        "+t._s(data.item.country)+"\n                      ")],1)]}}]),model:{value:t.multi3,callback:function(e){t.multi3=e},expression:"multi3"}})],1)],1)],1)],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAvatar:y.a,VChip:m.a,VContainer:f.a,VFlex:h.a,VLayout:_.a,VSelect:x.a,VSubheader:w.a})}}]);