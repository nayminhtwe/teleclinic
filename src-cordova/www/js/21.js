(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[21],{"013f":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("q-page",{staticClass:"flex flex-center"},[a("div",{staticClass:"text-heading"},[a("div",{staticClass:"sign-in"},[t._v("Sign in")]),a("div",{staticClass:"e-z-care-m-m row"},[t._v("EZ Care "),a("div",{staticStyle:{color:"red"}},[t._v("MM")])]),a("div",{staticClass:"text"},[t._v("A tele-consultation app")])]),a("div",{staticClass:"text-center"},[a("img",{attrs:{src:e("72d1")}})]),a("div",{staticClass:"text-body"},[a("div",{staticClass:"col-lg-6 col-12 q-py-xs input"},[t.banner?a("q-banner",{staticClass:"text-black bg-red",attrs:{"inline-actions":""},scopedSlots:t._u([{key:"action",fn:function(){return[a("q-btn",{attrs:{flat:"",color:"black",icon:"error"},on:{click:function(s){t.banner=!1}}})]},proxy:!0}],null,!1,1838126388)},[t._v("\n        "+t._s(t.message)+"\n        ")]):t._e(),a("q-input",{staticClass:"menu-1",attrs:{borderless:"",label:"User name","label-color":"black",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-btn",{staticClass:"q-mr-sm text-black",attrs:{flat:"",dense:"",id:"user",icon:"las la-user"}})]},proxy:!0}]),model:{value:t.name,callback:function(s){t.name=s},expression:"name"}})],1),a("div",{staticClass:"col-lg-6 col-12 q-py-xs input"},[a("q-input",{staticClass:"menu-1",attrs:{borderless:"",type:"password",label:"Password","label-color":"black",rules:[function(t){return!!t||"Field is required"}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-btn",{staticClass:"q-mr-sm text-black",attrs:{flat:"",dense:"",id:"password",icon:"las la-unlock-alt"}})]},proxy:!0}]),model:{value:t.password,callback:function(s){t.password=s},expression:"password"}})],1),a("div",{staticClass:"q-py-md q-gutter-sm text-center"},[a("q-btn",{staticClass:"text-white menu-2",staticStyle:{width:"100px"},attrs:{color:"deep-orange-10",rounded:"","no-caps":""},on:{click:t.submit}},[a("div",{staticClass:"ellipsis"},[t._v("\n          Sign in\n        ")])])],1),a("div",{staticClass:"text-center"},[a("q-btn",{staticClass:"forget-password",attrs:{flat:"",label:"Forget password","no-caps":""},on:{click:function(s){return t.$router.push("/start/forget_password")}}})],1),a("div",{staticClass:"text-center"},[a("q-btn",{staticClass:"register-button",attrs:{flat:"",label:"Doesn't have an account?","no-caps":""},on:{click:function(s){return t.$router.push("/start/register")}}})],1)])])},n=[],r=e("ded3"),o=e.n(r),i=e("2f62"),c={name:"Login",data(){return{banner:"",name:"",password:""}},computed:o()(o()({},Object(i["c"])({message:t=>t.doctor.message,errors:t=>t.doctor.errors})),Object(i["b"])({status:"doctor/status",getDoctorToken:"doctor/getDoctorToken"})),methods:{async submit(){const t=new FormData;t.append("name",this.name),t.append("password",this.password),await this.$store.dispatch("doctor/login",t),"success"===this.status&&(this.$q.platform.is.cordova?(await this.$store.dispatch("doctor/profile"),await cordova.plugins.firebase.messaging.getToken().then((t=>{this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,this.$api.post("deviceToken",{device_token:t}).then((()=>{this.$router.push("/")}))})).catch((t=>{console.log(t)}))):(await this.$store.dispatch("doctor/profile"),this.$router.push("/"))),"error"===this.status&&(this.banner=!0)}}},l=c,d=(e("6e40"),e("2877")),u=e("9989"),p=e("54e1"),b=e("9c40"),f=e("27f9"),m=e("cb32"),g=e("0016"),h=e("eebe"),v=e.n(h),w=Object(d["a"])(l,a,n,!1,null,"1bd0d7ff",null);s["default"]=w.exports;v()(w,"components",{QPage:u["a"],QBanner:p["a"],QBtn:b["a"],QInput:f["a"],QAvatar:m["a"],QIcon:g["a"]})},"6e40":function(t,s,e){"use strict";e("7330")},"72d1":function(t,s,e){t.exports=e.p+"img/login_signup.png"},7330:function(t,s,e){}}]);