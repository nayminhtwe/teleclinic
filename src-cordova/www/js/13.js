(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"516d":function(t,e,a){},"54a2":function(t,e,a){"use strict";a("516d")},9393:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("list-header"),"1"===t.getDoctorProfile.status?s("div",{staticClass:"q-pa-md row items-start q-gutter-lg"},[s("div",{staticClass:"col-12 text-h6"},[t._v("All Patients ("+t._s(t.visited_patients.length)+")")]),t._l(t.visited_patients,(function(e){return s("q-card",{key:e.id,staticClass:"my-card text-center",staticStyle:{width:"10em",border:"1px solid grey"},on:{click:function(a){return t.$router.push({name:"chat",params:{user_id:e.app_user_id,user:e.patient_info}})}}},[s("q-avatar",{staticClass:"q-mt-md",staticStyle:{"border-radius":"1em"},attrs:{size:"5em"}},[e.patient.profile_image?s("img",{attrs:{src:t.getFile(e.patient.profile_image)}}):s("img",{attrs:{src:a("e5b4")}})]),s("q-card-section",[s("div",{staticClass:"text-weight-regular"},[t._v(t._s(e.patient_info.name))]),s("div",{staticClass:"text-weight-regular"},[t._v(t._s(e.patient_info.gender)+", "+t._s(e.patient_info.age))]),s("div",{staticClass:"text-weight-regular"},[t._v(t._s(e.patient_info.gender))])]),s("q-card-section",{staticClass:"q-pt-none"},[t._v("\n        "+t._s(t.lorem)+"\n      ")])],1)}))],2):t._e()],1)},i=[],r=a("ded3"),o=a.n(r),c=a("2f62"),n=a("cafa"),l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[s("q-toolbar",{staticClass:"q-py-md"},[s("div",{staticClass:"col-12 col-lg-4 offset-lg-4 col-md-4 offset-md-4"},[s("q-input",{attrs:{rounded:"",outlined:"",placeholder:"Search",dense:"dense"},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1)]),s("q-toolbar",{staticClass:"q-pa-md",attrs:{inset:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-9"},[s("q-avatar",{attrs:{size:"72px"}},[t.getDoctorProfile.profile_image?s("img",{attrs:{src:t.getFile(t.getDoctorProfile.profile_image.profile_picture)}}):s("img",{attrs:{src:a("a472")}})])],1),s("div",{staticClass:"col-9"},[s("div",{staticClass:"text-subtitle1 text-grey-5"},[t._v("Welcome Back")]),s("div",{staticClass:"text-h5"},[t._v(t._s(t.getDoctorProfile.name))])])])])],1)},d=[],p={data(){return{}},methods:{getFile(t){return`${n["a"].SERVER_MEDIA}${t}`}}},u=p,f=a("2877"),g=a("e359"),m=a("65c6"),v=a("27f9"),A=a("0016"),C=a("cb32"),R=a("eebe"),h=a.n(R),P=Object(f["a"])(u,l,d,!1,null,null,null),b=P.exports;h()(P,"components",{QHeader:g["a"],QToolbar:m["a"],QInput:v["a"],QIcon:A["a"],QAvatar:C["a"]});var q={name:"Home",components:{ListHeader:b},computed:o()({},Object(c["b"])({getDoctorProfile:"doctor/getDoctorProfile",getDoctorToken:"doctor/getDoctorToken"})),data(){return{alert:!1,visited_patients:[]}},async created(){this.getDoctorProfile.app_user_id||await this.$store.dispatch("doctor/profile"),this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,await this.$api.get("all_users").then((t=>{this.visited_patients=t.data.data}))},methods:{getFile(t){return`${n["a"].SERVER_MEDIA}${t}`},patientdetail(t){this.$router.push(`/patient/${t}`)}}},D=q,Q=(a("54a2"),a("9989")),T=a("f09f"),x=a("a370"),y=a("9c40"),B=Object(f["a"])(D,s,i,!1,null,"9245ab20",null);e["default"]=B.exports;h()(B,"components",{QPage:Q["a"],QCard:T["a"],QAvatar:C["a"],QCardSection:x["a"],QBtn:y["a"],QIcon:A["a"]})},a472:function(t,e,a){t.exports=a.p+"img/ezcare.png"},cafa:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));const s={APP_VERSION:"0.1",SERVER_MEDIA:"http://188.166.217.32/"}},e5b4:function(t,e){t.exports="data:image/png;base64,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"}}]);