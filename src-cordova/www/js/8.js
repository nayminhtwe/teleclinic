(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"0da7":function(t,a,s){},"812a":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-header",{staticClass:"bg-grey-2 text-red",attrs:{elevated:""}},[s("q-toolbar",[s("div",{staticClass:"col-1"},["/"!==t.$route.fullPath?s("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"west"},on:{click:function(a){return t.$router.go(-1)}}}):t._e()],1),s("div",{staticClass:"col-10"},[s("div",{staticClass:"absolute-center"},[s("q-toolbar-title",{staticClass:"text-red"},[t._v("\n          EZ Care\n        ")])],1)])]),s("q-toolbar",{staticClass:"q-pa-md",attrs:{inset:""}})],1)},i=[],r={data(){return{}}},c=r,o=s("2877"),n=s("e359"),l=s("65c6"),d=s("9c40"),u=s("6ac5"),h=s("cb32"),p=s("eebe"),f=s.n(p),m=Object(o["a"])(c,e,i,!1,null,null,null);a["a"]=m.exports;f()(m,"components",{QHeader:n["a"],QToolbar:l["a"],QBtn:d["a"],QToolbarTitle:u["a"],QAvatar:h["a"]})},"8e48":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("profile-header"),e("q-dialog",{attrs:{"full-width":""},model:{value:t.alert,callback:function(a){t.alert=a},expression:"alert"}},[e("q-card",[e("q-card-section",{attrs:{align:"center"}},[e("q-icon",{staticClass:"q-pa-sm",attrs:{size:"md",name:"far fa-thumbs-up",color:"blue"}}),e("div",{staticClass:"text-h4"},[t._v("Success")])],1),e("q-separator"),e("q-card-section",{staticClass:"q-pa-lg",attrs:{align:"center"}},[t._v("\n        "+t._s(this.message)+"\n      ")]),e("q-separator"),e("q-card-actions",{attrs:{align:"center"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"red"}})],1)],1)],1),e("q-dialog",{attrs:{"full-width":""},model:{value:t.card,callback:function(a){t.card=a},expression:"card"}},[e("q-card",{staticClass:"my-card",attrs:{id:"charity_info"}},[e("div",{staticClass:"row q-pa-xs"},[e("div",{staticClass:"col-3"},[e("q-avatar",{attrs:{size:"4em"}},[t.charity.profile_image?e("img",{attrs:{src:t.getFile(t.charity.profile_image)}}):e("img",{attrs:{src:s("a472")}})])],1),e("div",{staticClass:"col-7"},[e("div",{staticClass:"col text-subtitle1 ellipsis"},[t._v("\n            "+t._s(t.charity.name)+"\n          ")])]),e("div",{staticClass:"col-2"},[e("q-btn",{staticClass:"absolute",attrs:{round:"",color:t.charity.favorite_status?"primary":"black",icon:"favorite",size:"md"},on:{click:function(a){return t.favourite(t.charity.id)}}})],1)]),e("div",{staticClass:"q-pa-md"},[e("q-card",{staticClass:"my-card"},[e("q-card-section",{staticClass:"q-gutter-xs"},[e("div",{staticClass:"text-subtitle2"},[e("q-icon",{staticClass:"q-pa-sm",attrs:{size:"xs",name:"far fa-user",color:"negative"}}),t._v("\n              "+t._s(t.charity.name)+"\n            ")],1),e("q-separator"),e("div",{staticClass:"text-subtitle2"},[e("q-icon",{staticClass:"q-pa-sm",attrs:{size:"xs",name:"fas fa-stethoscope",color:"secondary"}}),t._v("\n              "+t._s(t.charity.charity_service)+"\n            ")],1),e("q-separator"),e("div",{staticClass:"text-subtitle2"},[e("q-icon",{staticClass:"q-pa-sm",attrs:{size:"xs",name:"fas fa-graduation-cap",color:"accent"}}),t._v("\n              "+t._s(t.charity.address)+"\n            ")],1),e("q-separator"),e("div",{staticClass:"text-subtitle2"},[e("q-icon",{staticClass:"q-pa-sm",attrs:{size:"xs",name:"far fa-clock",color:"primary"}}),t._v("\n              "+t._s(t.charity.available_time)+"\n            ")],1)],1)],1)],1),e("q-card-actions",[e("div",{staticClass:"col q-px-md"},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticClass:"full-width",attrs:{color:"primary",label:"Call",size:"md",type:"a",href:"tel:"+t.charity.contact_number}})],1)])],1)],1),e("div",{staticClass:"q-pa-sm"},[e("div",{staticClass:"q-gutter-y-xs"},[e("q-tabs",{attrs:{dense:"","inline-label":"","active-color":"white","active-bg-color":"red"},model:{value:t.tab,callback:function(a){t.tab=a},expression:"tab"}},[e("q-tab",{attrs:{name:"",label:t.$t("All"),"no-caps":""}}),t._l(t.regions,(function(a){return e("q-tab",{key:a.id,attrs:{name:a.id,label:t.$t(a.Region),"no-caps":""}})}))],2)],1)]),e("div",{staticClass:"q-py-lg"},["lab"==t.charity_type?e("div",{staticClass:"text-h5 q-mb-md"},[t._v("\n      Find your Oxygen\n    ")]):e("div",{staticClass:"text-h5 q-mb-md"},[t._v("\n      Find your "+t._s(t.charity_type)+"\n    ")]),e("div",{staticClass:"col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4"},[e("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Search",dense:"dense"},on:{keyup:t.inserted},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"search"},on:{click:t.filter}})]},proxy:!0}]),model:{value:t.search,callback:function(a){t.search=a},expression:"search"}})],1)]),e("div",{staticClass:"q-pa-xs q-gutter-md"},t._l(t.charities,(function(a){return e("div",{key:a.id,staticClass:"card-box"},[e("div",{staticClass:"row col-12"},[e("div",{staticClass:"col-3 column justify-center",on:{click:function(s){return t.popup(a)}}},[e("q-avatar",{attrs:{size:"60px"}},[a.profile_image?e("img",{attrs:{src:t.getFile(a.profile_image)}}):e("img",{attrs:{src:s("a472")}})])],1),e("div",{staticClass:"col-7",on:{click:function(s){return t.popup(a)}}},[e("div",{staticClass:"text-h6"},[t._v(t._s(a.name))]),e("div",[t._v(t._s(a.address))])]),e("div",{staticClass:"col-2 column justify-center"},[e("q-icon",{staticClass:"border-icon",class:a.favorite_status?"text-black":"text-white",attrs:{name:"favorite",size:"md"},on:{click:function(s){return t.favourite(a.id)}}})],1)])])})),0)],1)},i=[],r=s("ded3"),c=s.n(r),o=s("2f62"),n=s("cafa"),l=s("812a"),d={name:"Charity",components:{ProfileHeader:l["a"]},data(){return{banner:!1,alert:!1,card:!1,charity:{},charities:[],regions:[],search:"",timeout:null,message:"",tab:"",charity_type:this.$route.params.type}},computed:c()(c()({},Object(o["b"])({getDoctorProfile:"doctor/getDoctorProfile",getDoctorToken:"doctor/getDoctorToken"})),{},{getFavouriteStatus(){return this.charity.favorite_status?"black":"primary"}}),async created(){this.getDoctorProfile.app_user_id||await this.$store.dispatch("doctor/profile"),await this.$api.get("regions").then((t=>{this.regions=t.data.data})),await this.filter()},watch:{tab:function(t){this.filter()}},methods:{getFile(t){return`${n["a"].SERVER_MEDIA}${t}`},popup(t){this.charity=t,this.card=!0},async filter(){this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,await this.$api.get(`filter_${this.charity_type}?name=${this.search}&region_id=${this.tab}`).then((t=>{this.charities=t.data.data}))},inserted(){clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.filter()}),1e3)},favourite(t){this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,this.$api.post(`favorite_${this.charity_type}/${t}`).then((a=>{this.message=a.data.message,this.alert=!0,this.filter(),this.charity.id===t&&(this.charity.favorite_status=!this.charity.favorite_status)}))},async getCharity(){this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,this.search="","all"===this.tab&&this.$api.get(`get_${this.charity_type}`).then((t=>{this.charities=t.data.data})),"favourite"===this.tab&&this.$api.get(`get_favorite_${this.charity_type}?name=${this.search}`).then((t=>{this.charities=t.data.data}))}}},u=d,h=(s("95d1"),s("2877")),p=s("9989"),f=s("24e8"),m=s("f09f"),v=s("a370"),b=s("0016"),g=s("eb85"),_=s("4b7e"),y=s("9c40"),q=s("cb32"),C=s("068f"),x=s("429b"),$=s("7460"),k=s("27f9"),w=s("7f67"),Q=s("eebe"),z=s.n(Q),T=Object(h["a"])(u,e,i,!1,null,"5a40e3a5",null);a["default"]=T.exports;z()(T,"components",{QPage:p["a"],QDialog:f["a"],QCard:m["a"],QCardSection:v["a"],QIcon:b["a"],QSeparator:g["a"],QCardActions:_["a"],QBtn:y["a"],QAvatar:q["a"],QImg:C["a"],QTabs:x["a"],QTab:$["a"],QInput:k["a"]}),z()(T,"directives",{ClosePopup:w["a"]})},"95d1":function(t,a,s){"use strict";s("0da7")},a472:function(t,a,s){t.exports=s.p+"img/ezcare.png"},cafa:function(t,a,s){"use strict";s.d(a,"a",(function(){return e}));const e={APP_VERSION:"0.1",SERVER_MEDIA:"http://188.166.217.32/"}}}]);