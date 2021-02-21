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
      <!-- <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="HISTORY(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      /> -->

      <q-btn
        round
        color="primary"
        icon="add"
        @click="addInput(histories)"
      />

      <div
        class="row"
        v-for="(history, id) in histories"
        :key="id"
      >
        <div class="col-6">
          <q-input
            v-model="history.name"
            label="Name"
          />
        </div>
        <div class="col-6">
          <q-file
            filled
            bottom-slots
            v-model="history.data"
            label="File"
            counter
          >
            <template v-slot:prepend>
              <q-icon
                name="cloud_upload"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.prevent="clearInput(histories,id)"
                class="cursor-pointer"
              />
            </template>
          </q-file>
        </div>
      </div>

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
      <!-- <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="PHYSICAL EXAMINATIONS(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      /> -->

      <q-btn
        round
        color="primary"
        icon="add"
        @click="addInput(examinations)"
      />

      <div
        class="row"
        v-for="(examination, id) in examinations"
        :key="id"
      >
        <div class="col-6">
          <q-input
            v-model="examination.name"
            label="Name"
          />
        </div>
        <div class="col-6">
          <q-file
            filled
            bottom-slots
            v-model="examination.data"
            label="File"
            counter
          >
            <template v-slot:prepend>
              <q-icon
                name="cloud_upload"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.prevent="clearInput(examinations,id)"
                class="cursor-pointer"
              />
            </template>
          </q-file>
        </div>
      </div>
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
      <!-- <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="INVESTIGATIONS(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      /> -->
      <q-btn
        round
        color="primary"
        icon="add"
        @click="addInput(investigations)"
      />

      <div
        class="row"
        v-for="(investigation, id) in investigations"
        :key="id"
      >
        <div class="col-6">
          <q-input
            v-model="investigation.name"
            label="Name"
          />
        </div>
        <div class="col-6">
          <q-file
            filled
            bottom-slots
            v-model="investigation.data"
            label="File"
            counter
          >
            <template v-slot:prepend>
              <q-icon
                name="cloud_upload"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.prevent="clearInput(investigations,id)"
                class="cursor-pointer"
              />
            </template>
          </q-file>
        </div>
      </div>
      <div class="col-12 text-h6 q-mb-md">TREATMENT</div>
      <q-input
        outlined
        v-model="treatment"
        label="Treatment"
      />
      <!-- <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="TREATMENT(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      /> -->
      <q-btn
        round
        color="primary"
        icon="add"
        @click="addInput(treatments)"
      />

      <div
        class="row"
        v-for="(treatment, id) in treatments"
        :key="id"
      >
        <div class="col-6">
          <q-input
            v-model="treatment.name"
            label="Name"
          />
        </div>
        <div class="col-6">
          <q-file
            filled
            bottom-slots
            v-model="treatment.data"
            label="File"
            counter
          >
            <template v-slot:prepend>
              <q-icon
                name="cloud_upload"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.prevent="clearInput(treatments,id)"
                class="cursor-pointer"
              />
            </template>
          </q-file>
        </div>
      </div>
      <div class="col-12 text-h6 q-mb-md">FURTHER PLAN</div>
      <q-input
        outlined
        v-model="further_plan"
        label="Further Plan"
      />
      <!-- <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="FURTHER PLAN(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      /> -->
      <q-btn
        round
        color="primary"
        icon="add"
        @click="addInput(plans)"
      />

      <div
        class="row"
        v-for="(plan, id) in plans"
        :key="id"
      >
        <div class="col-6">
          <q-input
            v-model="plan.name"
            label="Name"
          />
        </div>
        <div class="col-6">
          <q-file
            filled
            bottom-slots
            v-model="plan.data"
            label="File"
            counter
          >
            <template v-slot:prepend>
              <q-icon
                name="cloud_upload"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.prevent="clearInput(plans,id)"
                class="cursor-pointer"
              />
            </template>
          </q-file>
        </div>
      </div>
      <div class="col-12 text-h6 q-mb-md">OTHERS</div>
      <q-input
        outlined
        v-model="other"
        label="Others"
      />
      <!-- <q-uploader
        style="max-width: 300px"
        url="http://localhost:4444/upload"
        label="OTHERS(jpg or pdf)"
        multiple
        accept=".jpg, .pdf,image/*"
        @rejected="onRejected"
      /> -->
      <q-btn
        round
        color="primary"
        icon="add"
        @click="addInput(others)"
      />

      <div
        class="row"
        v-for="(other, id) in others"
        :key="id"
      >
        <div class="col-6">
          <q-input
            v-model="other.name"
            label="Name"
          />
        </div>
        <div class="col-6">
          <q-file
            filled
            bottom-slots
            v-model="other.data"
            label="File"
            counter
          >
            <template v-slot:prepend>
              <q-icon
                name="cloud_upload"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon
                name="close"
                @click.prevent="clearInput(others,id)"
                class="cursor-pointer"
              />
            </template>
          </q-file>
        </div>
      </div>
      <q-btn
        color="primary"
        class="full-width"
        label="Save"
        @click="submit"
      />
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
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
      other: '',
      histories: [
        { name: '', data: '' }
      ],
      examinations: [
        { name: '', data: '' }
      ],
      investigations: [
        { name: '', data: '' }
      ],
      treatments: [
        { name: '', data: '' }
      ],
      plans: [
        { name: '', data: '' }
      ],
      others: [
        { name: '', data: '' }
      ]

    }
  },
  components: {
    DetailHeader
  },
  computed: {
    ...mapGetters({
      getDoctorToken: 'doctor/getDoctorToken'
    })
  },
  methods: {
    addInput (model) {
      model.push({ name: '', data: '' })
    },
    clearInput (model, id) {
      model.splice(id, 1)
    },
    async submit () {
      const formData = new FormData()
      formData.append('chief_complaint', this.chief_complaint)
      formData.append('history_of_present_illness', this.history_of_present_illness)
      formData.append('past_medical_history', this.past_medical_history)
      formData.append('past_surgical_history', this.past_surgical_history)
      formData.append('social_history', this.social_history)
      formData.append('drug_allergy', this.drug_allergy)
      formData.append('other_history', this.other_history)
      formData.append('general_Condition', this.general_Condition)
      formData.append('anaemia', this.anaemia)
      formData.append('jaundice', this.jaundice)
      formData.append('temperature', this.temperature)
      formData.append('BP', this.BP)
      formData.append('PR', this.PR)
      formData.append('heart', this.heart)
      formData.append('lungs', this.lungs)
      formData.append('abdomen', this.abdomen)
      formData.append('other_physical', this.other_physical)
      formData.append('blood_tests', this.blood_tests)
      formData.append('urinalysis', this.urinalysis)
      formData.append('swabs', this.swabs)
      formData.append('ECG_Echo', this.ECG_Echo)
      formData.append('CXR', this.CXR)
      formData.append('USG', this.USG)
      formData.append('other_investigation', this.other_investigation)
      formData.append('treatment', this.treatment)
      formData.append('further_plan', this.further_plan)
      formData.append('other', this.other)
      for (const history of this.histories) {
        if (!!history.data && !!history.name) {
          formData.append('history_images[]', history.data, history.name)
        }
      }

      for (const examination of this.examinations) {
        if (!!examination.data && !!examination.name) {
          formData.append('physical_images[]', examination.data, examination.name)
        }
      }

      for (const investigation of this.investigations) {
        if (!!investigation.data && !!investigation.name) {
          formData.append('investigation_images[]', investigation.data, investigation.name)
        }
      }

      for (const treatment of this.treatments) {
        if (!!treatment.data && !!treatment.name) {
          formData.append('treatment_images[]', treatment.data, treatment.name)
        }
      }

      for (const plan of this.plans) {
        if (!!plan.data && !!plan.name) {
          formData.append('further_plan_images[]', plan.data, plan.name)
        }
      }

      for (const other of this.others) {
        if (!!other.data && !!other.name) {
          formData.append('other_images[]', other.data, other.name)
        }
      }
      this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
      this.$api
        .post(`patient_visit/${this.$route.params.patientId}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }).then(response => {
          this.$router.push('/home')
        })
    }
  }
}
</script>
