(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{4048:function(t,a,e){},4515:function(t,a,e){"use strict";e("4048")},"4bd0":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",[e("profile-header"),e("div",{staticClass:"q-pa-md row items-start q-gutter-lg"},[e("div",{staticClass:"q-my-sm q-ml-md"},[e("div",{staticClass:"text-h6"},[t._v(t._s(t.$t("What are you looking for?")))])])]),e("div",{staticClass:"row q-ma-xs text-center"},[e("div",{staticClass:"col-6 col-lg-2 q-mb-md"},[e("q-btn",{staticClass:"menu-box",attrs:{id:"doctors",icon:"fas fa-user-md",label:"EZ Care Doctors","no-caps":"",stack:"",outline:""},on:{click:function(a){return t.$router.push("doctor")}}})],1),e("div",{staticClass:"col-6 col-lg-2 q-mb-md"},[e("q-btn",{staticClass:"menu-box",attrs:{id:"clinics",icon:"las la-hospital",label:"Clinic","no-caps":"",stack:"",outline:""},on:{click:function(a){return t.$router.push("charity/clinic")}}})],1),e("div",{staticClass:"col-6 col-lg-2 q-mb-md"},[e("q-btn",{staticClass:"menu-box",attrs:{id:"ambulances",icon:"las la-ambulance",label:"Ambulance","no-caps":"",stack:"",outline:""},on:{click:function(a){return t.$router.push("charity/ambulance")}}})],1),e("div",{staticClass:"col-6 col-lg-2 q-mb-md"},[e("q-btn",{staticClass:"text-black menu-box",attrs:{id:"pharmacy",icon:"las la-plus-square",label:"Pharmacy","no-caps":"",stack:"",outline:""},on:{click:function(a){return t.$router.push("charity/pharmacy")}}})],1),e("div",{staticClass:"col-6 col-lg-2 q-mb-md"},[e("q-btn",{staticClass:"text-black menu-box",attrs:{id:"labs",icon:"las la-heartbeat",label:"Oxygen","no-caps":"",stack:"",outline:""},on:{click:function(a){return t.$router.push("charity/lab")}}})],1)])],1)},c=[],o=e("ded3"),l=e.n(o),n=e("2f62"),r=e("cafa"),i=e("812a"),u={name:"Directory",components:{ProfileHeader:i["a"]},computed:l()({},Object(n["b"])({getDoctorProfile:"doctor/getDoctorProfile",getDoctorToken:"doctor/getDoctorToken"})),data(){return{alert:!1}},async created(){this.getDoctorProfile.app_user_id||await this.$store.dispatch("doctor/profile")},methods:{getFile(t){return`${r["a"].SERVER_MEDIA}${t}`}}},d=u,b=(e("4515"),e("2877")),m=e("9989"),p=e("9c40"),f=e("0016"),h=e("eebe"),q=e.n(h),C=Object(b["a"])(d,s,c,!1,null,"1f510bde",null);a["default"]=C.exports;q()(C,"components",{QPage:m["a"],QBtn:p["a"],QIcon:f["a"]})},"812a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-header",{staticClass:"bg-grey-2 text-red",attrs:{elevated:""}},[e("q-toolbar",[e("div",{staticClass:"col-1"},["/"!==t.$route.fullPath?e("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"west"},on:{click:function(a){return t.$router.go(-1)}}}):t._e()],1),e("div",{staticClass:"col-10"},[e("div",{staticClass:"absolute-center"},[e("q-toolbar-title",{staticClass:"text-red"},[t._v("\n          EZ Care\n        ")])],1)])]),e("q-toolbar",{staticClass:"q-pa-md",attrs:{inset:""}})],1)},c=[],o={data(){return{}}},l=o,n=e("2877"),r=e("e359"),i=e("65c6"),u=e("9c40"),d=e("6ac5"),b=e("cb32"),m=e("eebe"),p=e.n(m),f=Object(n["a"])(l,s,c,!1,null,null,null);a["a"]=f.exports;p()(f,"components",{QHeader:r["a"],QToolbar:i["a"],QBtn:u["a"],QToolbarTitle:d["a"],QAvatar:b["a"]})},cafa:function(t,a,e){"use strict";e.d(a,"a",(function(){return s}));const s={APP_VERSION:"0.1",SERVER_MEDIA:"http://188.166.217.32/"}}}]);