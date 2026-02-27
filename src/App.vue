<template>
  <v-app>
    <v-main class="d-flex">
      <Steps :step="step"/>
      <div class="ma-16 px-16" style='width:100%'>
        <PersonalInfo 
          v-if="step === 1" 
        />
        <Plan
          v-else-if="step === 2" 
        />
        <Addons 
          v-else-if="step === 3" 
        />
        <Summary 
          v-else-if="step === 4"   
        />
        <Confirmed 
          v-else-if="step === 5" 
        />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Steps from './components/Steps.vue'
import PersonalInfo from './components/page/PersonalInfo.vue'
import Plan from './components/page/Plan.vue';
import Addons from './components/page/Addons.vue';
import Summary from './components/page/Summary.vue';
import Confirmed from './components/page/Confirmed.vue';
import { useStepStore } from '@/store/store'
export default {
  components: {
    Steps,
    PersonalInfo,
    Plan,
    Addons,
    Summary,
    Confirmed
  },
  computed: {
    step() {
      return useStepStore().step;
    },
  },
}
</script>

<style scoped>
.main-full-height {
  height: 100%;
}
</style>
