(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"5e60":function(t,e,a){"use strict";a("dc42")},"812a":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-header",{staticClass:"bg-grey-2 text-red",attrs:{elevated:""}},[a("q-toolbar",[a("div",{staticClass:"col-1"},["/"!==t.$route.fullPath?a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"west"},on:{click:function(e){return t.$router.go(-1)}}}):t._e()],1),a("div",{staticClass:"col-10"},[a("div",{staticClass:"absolute-center"},[a("q-toolbar-title",{staticClass:"text-red"},[t._v("\n          EZ Care\n        ")])],1)])]),a("q-toolbar",{staticClass:"q-pa-md",attrs:{inset:""}})],1)},s=[],r={data(){return{}}},i=r,l=a("2877"),c=a("e359"),n=a("65c6"),d=a("9c40"),u=a("6ac5"),g=a("cb32"),p=a("eebe"),b=a.n(p),f=Object(l["a"])(i,o,s,!1,null,null,null);e["a"]=f.exports;b()(f,"components",{QHeader:c["a"],QToolbar:n["a"],QBtn:d["a"],QToolbarTitle:u["a"],QAvatar:g["a"]})},a472:function(t,e,a){t.exports=a.p+"img/ezcare.png"},c09a:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-page",[o("profile-header"),o("div",{staticClass:"q-pa-md row items-start q-gutter-lg"},[o("div",{staticClass:"col-6 text-h6"},[t._v("Blogs ("+t._s(t.blogs.length)+")")]),t._l(t.blogs,(function(e){return o("div",{key:e.id,staticClass:"row q-gutter-sm"},[o("div",{staticClass:"col"},[null!=e.image?o("img",{staticStyle:{height:"150px","max-width":"150px"},attrs:{src:t.getFile(e.image)}}):o("img",{staticStyle:{height:"150px","max-width":"150px"},attrs:{src:a("a472")}})]),o("div",{staticClass:"col"},[o("div",{staticClass:"blog-heading",domProps:{innerHTML:t._s(e.heading)}}),o("div",{staticClass:"blog-body-trim",domProps:{innerHTML:t._s(e.body_trim)}}),o("div",{staticClass:"read-full-article"},[o("q-btn",{attrs:{color:"deep-orange-10",dense:"",round:"",flat:"",label:"Read full article >","no-caps":""},on:{click:function(a){return t.blogdetail(e.id)}}})],1)])])}))],2)],1)},s=[],r=a("ded3"),i=a.n(r),l=a("2f62"),c=a("cafa"),n=a("812a"),d={name:"Blogs",components:{ProfileHeader:n["a"]},computed:i()({},Object(l["b"])({getDoctorProfile:"doctor/getDoctorProfile",getDoctorToken:"doctor/getDoctorToken"})),data(){return{alert:!1,view:"list",blogs:[],blog_popup:!1}},async created(){this.getDoctorProfile.app_user_id||await this.$store.dispatch("doctor/profile"),this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,await this.$api.get("blog").then((t=>{this.blogs=t.data.data,console.log(this.blogs)}))},methods:{getFile(t){return`${c["a"].SERVER_MEDIA}${t}`},blogdetail(t){this.$router.push(`/blog/${t}`)}}},u=d,g=(a("5e60"),a("2877")),p=a("9989"),b=a("9c40"),f=a("24e8"),h=a("f09f"),m=a("a370"),v=a("eb85"),C=a("0016"),_=a("4b7e"),w=a("7f67"),Q=a("eebe"),q=a.n(Q),x=Object(g["a"])(u,o,s,!1,null,"392b2391",null);e["default"]=x.exports;q()(x,"components",{QPage:p["a"],QBtn:b["a"],QDialog:f["a"],QCard:h["a"],QCardSection:m["a"],QSeparator:v["a"],QIcon:C["a"],QCardActions:_["a"]}),q()(x,"directives",{ClosePopup:w["a"]})},cafa:function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));const o={APP_VERSION:"0.1",SERVER_MEDIA:"http://188.166.217.32/"}},dc42:function(t,e,a){}}]);