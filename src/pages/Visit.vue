<template>
  <q-page>
    <detail-header />
    <div class="q-pa-xs q-gutter-md">
      <div class="col-12 text-h6 q-mb-md">HISTORY</div>
      <q-input
        outlined
        v-model="text"
        label="Chief complaint"
      />
      <q-input
        outlined
        v-model="text"
        label="History of present illness"
      />
      <q-input
        outlined
        v-model="text"
        label="Past Medical history"
      />
      <q-input
        outlined
        v-model="text"
        label="Past surgical history"
      />
      <q-input
        outlined
        v-model="text"
        label="Social history"
      />
      <q-input
        outlined
        v-model="text"
        label="Drug allergy"
      />
      <q-input
        outlined
        v-model="text"
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
        v-model="text"
        label="General Condition"
      />
      <q-input
        outlined
        v-model="text"
        label="Anaemia"
      />
      <q-input
        outlined
        v-model="text"
        label="Juandice"
      />
      <q-input
        outlined
        v-model="text"
        label="Temperature"
      />
      <q-input
        outlined
        v-model="text"
        label="BP"
      />
      <q-input
        outlined
        v-model="text"
        label="PR"
      />
      <q-input
        outlined
        v-model="text"
        label="Heart"
      />
      <q-input
        outlined
        v-model="text"
        label="Lungs"
      />
      <q-input
        outlined
        v-model="text"
        label="Abdomen"
      />
      <q-input
        outlined
        v-model="text"
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
        v-model="text"
        label="Blood Tests"
      />
      <q-input
        outlined
        v-model="text"
        label="Urinalysis"
      />
      <q-input
        outlined
        v-model="text"
        label="Swabs"
      />
      <q-input
        outlined
        v-model="text"
        label="ECG/Echo"
      />
      <q-input
        outlined
        v-model="text"
        label="CXR"
      />
      <q-input
        outlined
        v-model="text"
        label="USG"
      />
      <q-input
        outlined
        v-model="text"
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
        v-model="text"
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
        v-model="text"
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
        v-model="text"
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
  components: {
    DetailHeader
  }
}
</script>
