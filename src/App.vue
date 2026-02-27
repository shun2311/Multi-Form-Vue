<template>
  <v-app>
    <v-main class="d-flex">
      <Steps :step="step"/>
      <div class="ma-16 px-16" style='width:100%'>
        <PersonalInfo 
          v-show="step === 1" 
          :step="step"  
          @next="(n) => step = n"
        />
        <Plan
          v-show="step === 2" 
          :step="step" 
          :plans="planStore.plans"
          @duration-selection="isYearlyStore.handleYearlySelection" 
          @plan-selection="planStore.handlePlanSelection"
          @back="(n) => step = n" 
          @next="(n) => step = n"
        />
        <Addons 
          v-show="step === 3" 
          :step="step" 
          :isYearly="isYearlyStore.isYearly"
          :addons="addonsStore.addons"
          @addonSelection="addonsStore.handleAddonSelection"
          @back="(n) => step = n" 
          @next="(n) => step = n"
        />
        <Summary 
          v-show="step === 4" 
          :step="step" 
          :isYearly="isYearlyStore.isYearly"
          :plan="selectedPlan"
          :addons="addonsStore.addons"
          @back="(n) => step = n" 
          @next="(n) => step = n"
        />
        <Confirmed 
          v-show="step === 5" 
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
import { useisYearly, usePlanStore, useAddonStore } from '@/store/store'

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
      selectedPlan() {
        return this.planStore.plans.find(plan => plan.selected === true);
      },
      planStore() {
        return usePlanStore();
      },
      addonsStore() {
        return useAddonStore(); 
      },
      isYearlyStore() {
        return useisYearly();
      }
  },
  data() {
    return {
      step: 1,
    }
  },
}
</script>

<style scoped>
.main-full-height {
  height: 100%;
}
</style>
