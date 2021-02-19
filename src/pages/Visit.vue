<template>
  <q-page>
    <detail-header />
    <div class="q-pa-xs q-gutter-md">
      <div class="col-12 text-h6 q-mb-md">HISTORY</div>
      <q-input
        outlined
        v-model="chief_complaint"
        label="Chief complaint"
      />
      <q-input
        outlined
        v-model="history_of_present_illness"
        label="History of present illness"
      />
      <q-input
        outlined
        v-model="past_medical_history"
        label="Past Medical history"
      />
      <q-input
        outlined
        v-model="past_surgical_history"
        label="Past surgical history"
      />
      <q-input
        outlined
        v-model="social_history"
        label="Social history"
      />
      <q-input
        outlined
        v-model="drug_allergy"
        label="Drug allergy"
      />
      <q-input
        outlined
        v-model="other_history"
        label="Others"
      />
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="HISTORY(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      />
      <div class="col-12 text-h6 q-mb-md">PHYSICAL EXAMINATIONS</div>
      <q-input
        outlined
        v-model="general_Condition"
        label="General Condition"
      />
      <q-input
        outlined
        v-model="anaemia"
        label="Anaemia"
      />
      <q-input
        outlined
        v-model="jaundice"
        label="Juandice"
      />
      <q-input
        outlined
        v-model="temperature"
        label="Temperature"
      />
      <q-input
        outlined
        v-model="BP"
        label="BP"
      />
      <q-input
        outlined
        v-model="PR"
        label="PR"
      />
      <q-input
        outlined
        v-model="heart"
        label="Heart"
      />
      <q-input
        outlined
        v-model="lungs"
        label="Lungs"
      />
      <q-input
        outlined
        v-model="abdomen"
        label="Abdomen"
      />
      <q-input
        outlined
        v-model="other_physical"
        label="Others"
      />
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="PHYSICAL EXAMINATIONS(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      />
      <div class="col-12 text-h6 q-mb-md">INVESTIGATIONS</div>
      <q-input
        outlined
        v-model="blood_tests"
        label="Blood Tests"
      />
      <q-input
        outlined
        v-model="urinalysis"
        label="Urinalysis"
      />
      <q-input
        outlined
        v-model="swabs"
        label="Swabs"
      />
      <q-input
        outlined
        v-model="ECG_Echo"
        label="ECG/Echo"
      />
      <q-input
        outlined
        v-model="CXR"
        label="CXR"
      />
      <q-input
        outlined
        v-model="USG"
        label="USG"
      />
      <q-input
        outlined
        v-model="other_investigation"
        label="Others"
      />
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="INVESTIGATIONS(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      />
      <div class="col-12 text-h6 q-mb-md">TREATMENT</div>
      <q-input
        outlined
        v-model="treatment"
        label="Treatment"
      />
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="TREATMENT(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      />
      <div class="col-12 text-h6 q-mb-md">FURTHER PLAN</div>
      <q-input
        outlined
        v-model="further_plan"
        label="Further Plan"
      />
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="FURTHER PLAN(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      />
      <div class="col-12 text-h6 q-mb-md">OTHERS</div>
      <q-input
        outlined
        v-model="other"
        label="Others"
      />
      <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="OTHERS(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      />
      <q-btn
        color="primary"
        class="full-width"
        label="Save"
      />
    </div>
  </q-page>
</template>

<script>
import DetailHeader from 'src/layouts/partials/Header/DetailHeader.vue'
export default {
  name: 'Visit',
  data () {
    return {
      chief_complaint: '',
      history_of_present_illness: '',
      past_medical_history: '',
      past_surgical_history: '',
      social_history: '',
      drug_allergy: '',
      other_history: '',
      general_Condition: '',
      anaemia: '',
      jaundice: '',
      temperature: '',
      BP: '',
      PR: '',
      heart: '',
      lungs: '',
      abdomen: '',
      other_physical: '',
      blood_tests: '',
      urinalysis: '',
      swabs: '',
      ECG_Echo: '',
      CXR: '',
      USG: '',
      other_investigation: '',
      treatment: '',
      further_plan: '',
      other: ''

    }
  },
  components: {
    DetailHeader
  }
}
</script>
