(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"36ca":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-footer",{staticClass:"bg-grey-2 text-white",attrs:{bordered:""}},[a("q-tabs",{staticClass:"text-grey",attrs:{"no-caps":"","active-color":"deep-orange-10","indicator-color":"transparent"},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("q-tab",{staticClass:"q-mr-md",attrs:{name:"home",flat:"",round:"",dense:"",icon:"las la-home",label:"Home"},on:{click:function(e){return t.$router.push("/")}}}),a("q-tab",{staticClass:"q-mr-md",attrs:{name:"inbox",flat:"",round:"",dense:"",icon:"las la-stethoscope",label:"Consult"},on:{click:function(e){return t.$router.push("/inbox")}}},[t.noti?a("q-badge",{attrs:{color:"red",floating:""}},[t._v(t._s(t.noti))]):t._e()],1),a("q-tab",{staticClass:"q-mr-md",attrs:{flat:"",round:"",dense:"",icon:"las la-bars",label:"Menu"}},[a("q-menu",{attrs:{fit:""}},[a("q-list",{staticStyle:{"min-width":"100px"}},[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{on:{click:function(e){return t.$router.push("/profile")}}},[t._v("\n              My Profile\n              ")])],1),a("q-separator"),"1"===t.getDoctorProfile.status?a("div",[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{on:{click:function(e){return t.$router.push("doctor_wallet")}}},[t._v("My Wallet")])],1)],1):t._e(),"2"===t.getDoctorProfile.status?a("div",[a("q-item",{attrs:{clickable:""}},[a("q-item-section",{on:{click:function(e){return t.$router.push("patient_wallet")}}},[t._v("My Wallet")])],1)],1):t._e(),a("q-separator"),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{on:{click:function(e){return t.$router.push("/favourited")}}},[t._v("My favorites")])],1),a("q-separator"),a("q-item",{attrs:{clickable:""}},[a("q-item-section",{on:{click:function(e){return t.$router.push("/faq")}}},[t._v("FAQs")])],1)],1)],1)],1)],1)],1)},r=[],n=a("ded3"),i=a.n(n),s=a("2f62"),c=a("782e"),l=a.n(c),u={name:"Footer",data(){return{tab:"home",noti:0}},computed:i()({},Object(s["b"])({getDoctorToken:"doctor/getDoctorToken",getDoctorProfile:"doctor/getDoctorProfile"})),async created(){this.getDoctorProfile.app_user_id||await this.$store.dispatch("doctor/profile"),await this.subscribe()},methods:{async getNoti(){this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,await this.$api.get("message_unread_count").then((t=>{"0"===t.data.error_code&&(this.noti=t.data.noti)}))},async subscribe(){const t=this;l.a.logToConsole=!0;var e=new l.a("836d77ac3f3198d7cf6d",{cluster:"ap1",forceTLS:!0}),a=e.subscribe("chatNoti-"+this.getDoctorProfile.app_user_id);a.bind("App\\Events\\ChatNoti",(function(e){t.noti=e.noti.unread_count})),await this.getNoti();var o=new l.a("836d77ac3f3198d7cf6d",{cluster:"ap1",forceTLS:!0,authEndpoint:"http://188.166.217.32/broadcasting/auth",auth:{headers:{Authorization:`Bearer ${this.getDoctorToken}`}}}),r=o.subscribe("presence-online");r.bind("pusher:member_added",(async t=>{this.$root.$emit("pusher_member_added",t)})),r.bind("pusher:member_removed",(async t=>{this.$root.$emit("pusher_member_removed",t)}))}}},d=u,p=a("2877"),b=a("7ff0"),m=a("429b"),h=a("7460"),f=a("9c40"),_=a("58a81"),q=a("4e73"),g=a("1c1c"),v=a("66e5"),k=a("4074"),w=a("0016"),$=a("eb85"),y=a("eebe"),Q=a.n(y),C=Object(p["a"])(d,o,r,!1,null,null,null);e["a"]=C.exports;Q()(C,"components",{QFooter:b["a"],QTabs:m["a"],QTab:h["a"],QBtn:f["a"],QBadge:_["a"],QMenu:q["a"],QList:g["a"],QItem:v["a"],QItemSection:k["a"],QIcon:w["a"],QSeparator:$["a"]})},dead:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md"},[a("q-layout",{attrs:{view:"hHh lpR fFf"}},[a("Footer"),a("q-page-container",[a("router-view")],1)],1)],1)},r=[],n=a("36ca"),i={components:{Footer:n["a"]},data(){return{}}},s=i,c=a("2877"),l=a("4d5a"),u=a("09e3"),d=a("eebe"),p=a.n(d),b=Object(c["a"])(s,o,r,!1,null,null,null);e["default"]=b.exports;p()(b,"components",{QLayout:l["a"],QPageContainer:u["a"]})}}]);