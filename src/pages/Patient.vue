<template>
  <q-page>
    <detail-header />
    <div class="q-pa-md">
      <q-list bordered>

        <div
          v-for="visit in visits"
          :key="visit.id"
        >
          <q-expansion-item
            group="somegroup"
            icon="explore"
            :label="visit.doctor.Name +'  '+visit.doctor.Qualifications"
            header-class="text-primary"
          >
            <q-card class="bg-teal-2">
              <q-card-section>
                <div class="text-h6 q-my-xs">HISTORY</div>
              </q-card-section>
              <q-card-section class="q-gutter-xs">
                <div v-if="!!visit.history.chief_complaint">Chief complaint : {{ visit.history.chief_complaint }}</div>
                <div v-if="!!visit.history.history_of_present_illness">History of present illness : {{ visit.history.history_of_present_illness }}</div>
                <div v-if="!!visit.history.past_medical_history">Past Medical history : {{ visit.history.past_medical_history }}</div>
                <div v-if="!!visit.history.past_surgical_history">Past surgical history : {{ visit.history.past_surgical_history }}</div>
                <div v-if="!!visit.history.social_history">Social history : {{ visit.history.social_history }}</div>
                <div v-if="!!visit.history.drug_allergy">Drug allergy : {{ visit.history.drug_allergy }}</div>
                <div v-if="!!visit.history.others">Others : {{ visit.history.others }}</div>
              </q-card-section>
            </q-card>
            <q-card-section class="q-gutter-md">
              <img
                v-for="history_file in visit.history_files"
                :key="history_file.id"
                :src="getFile(history_file.files)"
                style="width: 20em"
              />
            </q-card-section>

            <q-card class="bg-teal-2">
              <q-card-section>
                <div class="text-h6 q-my-xs">PHYSICAL EXAMINATIONS</div>
              </q-card-section>
              <q-card-section class="q-gutter-xs">
                <div v-if="!!visit.physical_examination.general_Condition">General Condition : {{ visit.physical_examination.general_Condition }}</div>
                <div v-if="!!visit.physical_examination.anaemia">Anaemia : {{ visit.physical_examination.anaemia }}</div>
                <div v-if="!!visit.physical_examination.jaundice">Juandice : {{ visit.physical_examination.jaundice }}</div>
                <div v-if="!!visit.physical_examination.temperature">Temperature : {{ visit.physical_examination.temperature }}</div>
                <div v-if="!!visit.physical_examination.BP">BP : {{ visit.physical_examination.BP }}</div>
                <div v-if="!!visit.physical_examination.PR">PR : {{ visit.physical_examination.PR }}</div>
                <div v-if="!!visit.physical_examination.heart">Heart : {{ visit.physical_examination.heart }}</div>
                <div v-if="!!visit.physical_examination.lungs">Lungs : {{ visit.physical_examination.lungs }}</div>
                <div v-if="!!visit.physical_examination.abdomen">Abdomen : {{ visit.physical_examination.abdomen }}</div>
                <div v-if="!!visit.physical_examination.others">Others : {{ visit.physical_examination.others }}</div>
              </q-card-section>
            </q-card>
            <q-card-section class="q-gutter-md">
              <img
                v-for="physical_examination_file in visit.physical_examination_files"
                :key="physical_examination_file.id"
                :src="getFile(physical_examination_file.files)"
                style="width: 20em"
              />
            </q-card-section>

            <q-card class="bg-teal-2">
              <q-card-section>
                <div class="text-h6 q-my-xs">INVESTIGATIONS</div>
              </q-card-section>
              <q-card-section class="q-gutter-xs">
                <div v-if="!!visit.investigation.blood_tests">Blood Tests : {{ visit.investigation.blood_tests }}</div>
                <div v-if="!!visit.investigation.urinalysis">Urinalysis : {{ visit.investigation.urinalysis }}</div>
                <div v-if="!!visit.investigation.swabs">Swabs : {{ visit.investigation.swabs }}</div>
                <div v-if="!!visit.investigation.temperature">Temperature : {{ visit.investigation.temperature }}</div>
                <!-- <div v-if="!!visit.investigation.ECG_Echo">ECG/Echo : {{ visit.investigation.ECG_Echo }}</div> -->
                <div v-if="!!visit.investigation.CXR">CXR : {{ visit.investigation.CXR }}</div>
                <div v-if="!!visit.investigation.USG">USG : {{ visit.investigation.USG }}</div>
                <div v-if="!!visit.investigation.others">Others : {{ visit.investigation.others }}</div>
              </q-card-section>
            </q-card>
            <q-card-section class="q-gutter-md">
              <img
                v-for="investigation_file in visit.investigation_files"
                :key="investigation_file.id"
                :src="getFile(investigation_file.files)"
                style="width: 20em"
              />
            </q-card-section>

            <q-card class="bg-teal-2">
              <q-card-section>
                <div class="text-h6 q-my-xs">TREATMENT</div>
              </q-card-section>
              <q-card-section class="q-gutter-xs">
                <div v-if="!!visit.treatment.treatment">Treatment : {{ visit.treatment.treatment }}</div>
              </q-card-section>
            </q-card>
            <q-card-section class="q-gutter-md">
              <img
                v-for="treatment_file in visit.treatment_files"
                :key="treatment_file.id"
                :src="getFile(treatment_file.files)"
                style="width: 20em"
              />
            </q-card-section>

            <q-card class="bg-teal-2">
              <q-card-section>
                <div class="text-h6 q-my-xs">FURTHER PLAN</div>
              </q-card-section>
              <q-card-section class="q-gutter-xs">
                <div v-if="!!visit.further_plan.further_plan">Further Plan : {{ visit.further_plan.further_plan }}</div>
              </q-card-section>
            </q-card>
            <q-card-section class="q-gutter-md">
              <img
                v-for="further_plan_file in visit.further_plan_files"
                :key="further_plan_file.id"
                :src="getFile(further_plan_file.files)"
                style="width: 20em"
              />
            </q-card-section>

            <q-card class="bg-teal-2">
              <q-card-section>
                <div class="text-h6 q-my-xs">OTHERS</div>
              </q-card-section>
              <q-card-section class="q-gutter-xs">
                <div v-if="!!visit.other.others">OTHERS : {{ visit.other.others }}</div>
              </q-card-section>
            </q-card>
            <q-card-section class="q-gutter-md">
              <img
                v-for="other_file in visit.other_files"
                :key="other_file.id"
                :src="getFile(other_file.files)"
                style="width: 20em"
              />
            </q-card-section>

          </q-expansion-item>

          <q-separator />
        </div>
      </q-list>
    </div>
    <div class="q-pa-md q-gutter-md">
      <q-btn-group spread>
        <q-btn
          color="red"
          label="Visit"
          icon="timeline"
          @click="visit"
        />
        <q-btn
          color="blue"
          label="Referal"
          icon="visibility"
          @click="prompt = true"
        />
      </q-btn-group>
    </div>
    <q-dialog
      v-model="prompt"
      full-height
      full-width
    >
      <q-card>
        <!-- <q-table
          grid
          card-class="bg-primary text-white"
          title="Referals"
          :data="data"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>
        </q-table> -->
        <q-table
          :data="data"
          :columns="columns"
          row-key="name"
          selection="single"
          :selected.sync="selected"
          :filter="filter"
          grid
          card-class="bg-primary text-white"
          hide-header
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
          </template>

          <template v-slot:item="props">
            <div
              class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
              :style="props.selected ? 'transform: scale(0.95);' : ''"
            >
              <q-card
                :class="props.selected ? 'bg-grey-2' : ''"
                @click="$parent.$emit('referal', props.row.id)"
              >
                <!-- <q-card-section>
                  <q-checkbox
                    dense
                    v-model="props.selected"
                    :label="props.row.name"
                  />
                </q-card-section>
                <q-separator /> -->
                <q-list dense>
                  <q-item
                    v-for="col in props.cols.filter(col => col.name !== 'desc')"
                    :key="col.name"
                  >
                    <q-item-section>
                      <q-item-label>{{ col.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label caption>{{ col.value }}</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>
            </div>
          </template>

        </q-table>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import DetailHeader from 'src/layouts/partials/Header/DetailHeader.vue'
export default {
  name: 'Patient',
  data () {
    return {
      prompt: false,
      selected: [],
      filter: '',
      columns: [
        { name: 'name', align: 'left', label: 'Name', field: 'Name', sortable: true },
        { name: 'qualifications', label: 'Qualifications', field: 'Qualifications', sortable: true },
        { name: 'contact number', label: 'Contact Number', field: 'Contact_Number' }
      ],
      data: [],
      visits: [],
      patientId: this.$route.params.patientId
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
  created () {
    this.$api.defaults.headers.Authorization = `Bearer ${this.getDoctorToken}`
    this.$api.get(
      `patient_detail/${this.patientId}`
    ).then((response) => {
      this.visits = response.data.data
    })

    this.$api.get(
      'doctors'
    ).then((response) => {
      this.data = response.data.data
    })

    this.$parent.$on('referal', id => {
      const formData = new FormData()
      formData.append('to_doctor_id', id)
      formData.append('patient_id', this.patientId)
      this.$api.post(
        'referral', formData
      ).then((response) => {
        this.$router.push('/')
      }).catch(err => {
        console.log(err.response.data)
      })
    })
  },
  methods: {
    getFile (path) {
      return `http://188.166.217.32/${path}`
    },
    visit () {
      this.$router.push(`/patient/${this.patientId}/visit`)
    }
  }
}
</script>
