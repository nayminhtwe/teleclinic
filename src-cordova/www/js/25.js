(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"5f2c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-header",{staticClass:"bg-primary text-white",attrs:{elevated:""}},[n("q-toolbar",[n("div",{staticClass:"col-1"},[n("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"west"},on:{click:function(e){return t.$router.go(-1)}}})],1),n("div",{staticClass:"col-10"},[n("div",{staticClass:"absolute-center"},[n("q-toolbar-title",[t._v("\n          Visit Details\n        ")])],1)]),n("div",{staticClass:"col-1"},[n("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",round:"",dense:"",icon:"apps"}})],1)]),n("q-toolbar",{staticClass:"q-pa-md"},[n("div",{staticClass:"col-3 col-lg-1"},[n("q-avatar",{attrs:{size:"72px"}},[t.patient.profile_image?n("img",{attrs:{src:t.getFile(t.patient.profile_image)}}):n("img",{attrs:{src:a("e5b4")}})]),n("div",{staticClass:"text-h6 q-ml-sm"},[t._v("EZ "+t._s(new Intl.NumberFormat("en",{minimumIntegerDigits:3,minimumSignificantDigits:1,useGrouping:!1}).format(t.patient.id)))])],1),n("div",{staticClass:"col-8 col-lg-4"},[n("div",{staticClass:"text-h6"},[t._v(t._s(t.patient.name))]),n("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.patient.age)+" years")]),n("div",{staticClass:"text-subtitle2"},[t._v(t._s(t.patient.gender))]),n("div",{staticClass:"text-weight-regular"},[t._v(t._s(t.patient.address))]),n("div",{staticClass:"text-weight-regular"},[t._v(t._s(t.patient.contact_number))])])])],1)},s=[],i=a("ded3"),o=a.n(i),l=a("2f62"),r=a("cafa"),c={data(){return{patient:{}}},computed:o()({},Object(l["b"])({getDoctorToken:"doctor/getDoctorToken"})),created(){this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,this.$api.get(`patient/${this.$route.params.patientId}`).then((t=>{this.patient=t.data.data}))},methods:{getFile(t){return`${r["a"].SERVER_MEDIA}${t}`}}},u=c,p=a("2877"),d=a("e359"),m=a("65c6"),f=a("9c40"),h=a("6ac5"),b=a("cb32"),y=a("eebe"),v=a.n(y),_=Object(p["a"])(u,n,s,!1,null,null,null);e["a"]=_.exports;v()(_,"components",{QHeader:d["a"],QToolbar:m["a"],QBtn:f["a"],QToolbarTitle:h["a"],QAvatar:b["a"]})},"81cf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",[a("detail-header"),a("div",{staticClass:"q-pa-xs q-gutter-md"},[a("div",{staticClass:"col-12 text-h6 q-mb-md"},[t._v("HISTORY")]),a("q-input",{attrs:{outlined:"",label:"Chief complaint",type:"textarea"},model:{value:t.chief_complaint,callback:function(e){t.chief_complaint=e},expression:"chief_complaint"}}),a("q-input",{attrs:{outlined:"",label:"History of present illness",type:"textarea"},model:{value:t.history_of_present_illness,callback:function(e){t.history_of_present_illness=e},expression:"history_of_present_illness"}}),a("q-input",{attrs:{outlined:"",label:"Past Medical history",type:"textarea"},model:{value:t.past_medical_history,callback:function(e){t.past_medical_history=e},expression:"past_medical_history"}}),a("q-input",{attrs:{outlined:"",label:"Past surgical history",type:"textarea"},model:{value:t.past_surgical_history,callback:function(e){t.past_surgical_history=e},expression:"past_surgical_history"}}),a("q-input",{attrs:{outlined:"",label:"Social history",type:"textarea"},model:{value:t.social_history,callback:function(e){t.social_history=e},expression:"social_history"}}),a("q-input",{attrs:{outlined:"",label:"Drug allergy",type:"textarea"},model:{value:t.drug_allergy,callback:function(e){t.drug_allergy=e},expression:"drug_allergy"}}),a("q-input",{attrs:{outlined:"",label:"Others",type:"textarea"},model:{value:t.other_history,callback:function(e){t.other_history=e},expression:"other_history"}}),a("q-btn",{attrs:{round:"",color:"primary",icon:"add"},on:{click:function(e){return t.addInput(t.histories)}}}),t._l(t.histories,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{label:"Name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"history.name"}})],1),a("div",{staticClass:"col-6"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"File",counter:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return e.preventDefault(),t.clearInput(t.histories,n)}}})]},proxy:!0}],null,!0),model:{value:e.data,callback:function(a){t.$set(e,"data",a)},expression:"history.data"}})],1)])})),a("div",{staticClass:"col-12 text-h6 q-mb-md"},[t._v("PHYSICAL EXAMINATIONS")]),a("q-input",{attrs:{outlined:"",label:"General Condition",type:"textarea"},model:{value:t.general_Condition,callback:function(e){t.general_Condition=e},expression:"general_Condition"}}),a("q-input",{attrs:{outlined:"",label:"Anaemia",type:"textarea"},model:{value:t.anaemia,callback:function(e){t.anaemia=e},expression:"anaemia"}}),a("q-input",{attrs:{outlined:"",label:"Juandice",type:"textarea"},model:{value:t.jaundice,callback:function(e){t.jaundice=e},expression:"jaundice"}}),a("q-input",{attrs:{outlined:"",label:"Temperature",type:"textarea"},model:{value:t.temperature,callback:function(e){t.temperature=e},expression:"temperature"}}),a("q-input",{attrs:{outlined:"",label:"BP",type:"textarea"},model:{value:t.BP,callback:function(e){t.BP=e},expression:"BP"}}),a("q-input",{attrs:{outlined:"",label:"PR",type:"textarea"},model:{value:t.PR,callback:function(e){t.PR=e},expression:"PR"}}),a("q-input",{attrs:{outlined:"",label:"Heart",type:"textarea"},model:{value:t.heart,callback:function(e){t.heart=e},expression:"heart"}}),a("q-input",{attrs:{outlined:"",label:"Lungs",type:"textarea"},model:{value:t.lungs,callback:function(e){t.lungs=e},expression:"lungs"}}),a("q-input",{attrs:{outlined:"",label:"Abdomen",type:"textarea"},model:{value:t.abdomen,callback:function(e){t.abdomen=e},expression:"abdomen"}}),a("q-input",{attrs:{outlined:"",label:"Others",type:"textarea"},model:{value:t.other_physical,callback:function(e){t.other_physical=e},expression:"other_physical"}}),a("q-btn",{attrs:{round:"",color:"primary",icon:"add"},on:{click:function(e){return t.addInput(t.examinations)}}}),t._l(t.examinations,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{label:"Name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"examination.name"}})],1),a("div",{staticClass:"col-6"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"File",counter:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return e.preventDefault(),t.clearInput(t.examinations,n)}}})]},proxy:!0}],null,!0),model:{value:e.data,callback:function(a){t.$set(e,"data",a)},expression:"examination.data"}})],1)])})),a("div",{staticClass:"col-12 text-h6 q-mb-md"},[t._v("INVESTIGATIONS")]),a("q-input",{attrs:{outlined:"",label:"Blood Tests",type:"textarea"},model:{value:t.blood_tests,callback:function(e){t.blood_tests=e},expression:"blood_tests"}}),a("q-input",{attrs:{outlined:"",label:"Urinalysis",type:"textarea"},model:{value:t.urinalysis,callback:function(e){t.urinalysis=e},expression:"urinalysis"}}),a("q-input",{attrs:{outlined:"",label:"Swabs",type:"textarea"},model:{value:t.swabs,callback:function(e){t.swabs=e},expression:"swabs"}}),a("q-input",{attrs:{outlined:"",label:"ECG/Echo",type:"textarea"},model:{value:t.ECG_Echo,callback:function(e){t.ECG_Echo=e},expression:"ECG_Echo"}}),a("q-input",{attrs:{outlined:"",label:"CXR",type:"textarea"},model:{value:t.CXR,callback:function(e){t.CXR=e},expression:"CXR"}}),a("q-input",{attrs:{outlined:"",label:"USG",type:"textarea"},model:{value:t.USG,callback:function(e){t.USG=e},expression:"USG"}}),a("q-input",{attrs:{outlined:"",label:"Others",type:"textarea"},model:{value:t.other_investigation,callback:function(e){t.other_investigation=e},expression:"other_investigation"}}),a("q-btn",{attrs:{round:"",color:"primary",icon:"add"},on:{click:function(e){return t.addInput(t.investigations)}}}),t._l(t.investigations,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{label:"Name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"investigation.name"}})],1),a("div",{staticClass:"col-6"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"File",counter:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return e.preventDefault(),t.clearInput(t.investigations,n)}}})]},proxy:!0}],null,!0),model:{value:e.data,callback:function(a){t.$set(e,"data",a)},expression:"investigation.data"}})],1)])})),a("div",{staticClass:"col-12 text-h6 q-mb-md"},[t._v("TREATMENT")]),a("q-input",{attrs:{outlined:"",label:"Treatment",type:"textarea"},model:{value:t.treatment,callback:function(e){t.treatment=e},expression:"treatment"}}),a("q-btn",{attrs:{round:"",color:"primary",icon:"add"},on:{click:function(e){return t.addInput(t.treatments)}}}),t._l(t.treatments,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{label:"Name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"treatment.name"}})],1),a("div",{staticClass:"col-6"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"File",counter:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return e.preventDefault(),t.clearInput(t.treatments,n)}}})]},proxy:!0}],null,!0),model:{value:e.data,callback:function(a){t.$set(e,"data",a)},expression:"treatment.data"}})],1)])})),a("div",{staticClass:"col-12 text-h6 q-mb-md"},[t._v("FURTHER PLAN")]),a("q-input",{attrs:{outlined:"",label:"Further Plan",type:"textarea"},model:{value:t.further_plan,callback:function(e){t.further_plan=e},expression:"further_plan"}}),a("q-btn",{attrs:{round:"",color:"primary",icon:"add"},on:{click:function(e){return t.addInput(t.plans)}}}),t._l(t.plans,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{label:"Name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"plan.name"}})],1),a("div",{staticClass:"col-6"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"File",counter:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return e.preventDefault(),t.clearInput(t.plans,n)}}})]},proxy:!0}],null,!0),model:{value:e.data,callback:function(a){t.$set(e,"data",a)},expression:"plan.data"}})],1)])})),a("div",{staticClass:"col-12 text-h6 q-mb-md"},[t._v("OTHERS")]),a("q-input",{attrs:{outlined:"",label:"Others",type:"textarea"},model:{value:t.other,callback:function(e){t.other=e},expression:"other"}}),a("q-btn",{attrs:{round:"",color:"primary",icon:"add"},on:{click:function(e){return t.addInput(t.others)}}}),t._l(t.others,(function(e,n){return a("div",{key:n,staticClass:"row"},[a("div",{staticClass:"col-6"},[a("q-input",{attrs:{label:"Name"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"other.name"}})],1),a("div",{staticClass:"col-6"},[a("q-file",{attrs:{filled:"","bottom-slots":"",label:"File",counter:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(t){t.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){return e.preventDefault(),t.clearInput(t.others,n)}}})]},proxy:!0}],null,!0),model:{value:e.data,callback:function(a){t.$set(e,"data",a)},expression:"other.data"}})],1)])})),a("q-btn",{staticClass:"full-width",attrs:{color:"deep-orange-10",label:"Save",rounded:""},on:{click:t.submit}})],2)],1)},s=[],i=a("ded3"),o=a.n(i),l=(a("ddb0"),a("2f62")),r=a("5f2c"),c={name:"Visit",data(){return{chief_complaint:"",history_of_present_illness:"",past_medical_history:"",past_surgical_history:"",social_history:"",drug_allergy:"",other_history:"",general_Condition:"",anaemia:"",jaundice:"",temperature:"",BP:"",PR:"",heart:"",lungs:"",abdomen:"",other_physical:"",blood_tests:"",urinalysis:"",swabs:"",ECG_Echo:"",CXR:"",USG:"",other_investigation:"",treatment:"",further_plan:"",other:"",histories:[{name:"",data:""}],examinations:[{name:"",data:""}],investigations:[{name:"",data:""}],treatments:[{name:"",data:""}],plans:[{name:"",data:""}],others:[{name:"",data:""}]}},components:{DetailHeader:r["a"]},computed:o()({},Object(l["b"])({getDoctorProfile:"doctor/getDoctorProfile",getDoctorToken:"doctor/getDoctorToken"})),async created(){this.getDoctorProfile.app_user_id||await this.$store.dispatch("doctor/profile")},methods:{addInput(t){t.push({name:"",data:""})},clearInput(t,e){t.splice(e,1)},async submit(){const t=new FormData;t.append("chief_complaint",this.chief_complaint),t.append("history_of_present_illness",this.history_of_present_illness),t.append("past_medical_history",this.past_medical_history),t.append("past_surgical_history",this.past_surgical_history),t.append("social_history",this.social_history),t.append("drug_allergy",this.drug_allergy),t.append("other_history",this.other_history),t.append("general_Condition",this.general_Condition),t.append("anaemia",this.anaemia),t.append("jaundice",this.jaundice),t.append("temperature",this.temperature),t.append("BP",this.BP),t.append("PR",this.PR),t.append("heart",this.heart),t.append("lungs",this.lungs),t.append("abdomen",this.abdomen),t.append("other_physical",this.other_physical),t.append("blood_tests",this.blood_tests),t.append("urinalysis",this.urinalysis),t.append("swabs",this.swabs),t.append("ECG_Echo",this.ECG_Echo),t.append("CXR",this.CXR),t.append("USG",this.USG),t.append("other_investigation",this.other_investigation),t.append("treatment",this.treatment),t.append("further_plan",this.further_plan),t.append("other",this.other);for(const e of this.histories)e.data&&e.name&&t.append("history_images[]",e.data,e.name);for(const e of this.examinations)e.data&&e.name&&t.append("physical_images[]",e.data,e.name);for(const e of this.investigations)e.data&&e.name&&t.append("investigation_images[]",e.data,e.name);for(const e of this.treatments)e.data&&e.name&&t.append("treatment_images[]",e.data,e.name);for(const e of this.plans)e.data&&e.name&&t.append("further_plan_images[]",e.data,e.name);for(const e of this.others)e.data&&e.name&&t.append("other_images[]",e.data,e.name);this.$api.defaults.headers.Authorization=`Bearer ${this.getDoctorToken}`,this.$api.post(`patient_visit/${this.$route.params.patientId}`,t,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{this.$router.push("/")}))}}},u=c,p=a("2877"),d=a("9989"),m=a("27f9"),f=a("ee89"),h=a("9c40"),b=a("7d53"),y=a("0016"),v=a("eebe"),_=a.n(v),g=Object(p["a"])(u,n,s,!1,null,null,null);e["default"]=g.exports;_()(g,"components",{QPage:d["a"],QInput:m["a"],QUploader:f["a"],QBtn:h["a"],QFile:b["a"],QIcon:y["a"]})},cafa:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));const n={APP_VERSION:"0.1",SERVER_MEDIA:"http://188.166.217.32/"}},e5b4:function(t,e){t.exports="data:image/png;base64,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"}}]);