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
          :plans="plans"
          @duration-selection="handleYearlySelection" 
          @plan-selection="handlePlanSelection"
          @back="(n) => step = n" 
          @next="(n) => step = n"
        />
        <Addons 
          v-show="step === 3" 
          :step="step" 
          :isYearly="isYearly"
          :addons="addons"
          @addonSelection="handleAddonSelection"
          @back="(n) => step = n" 
          @next="(n) => step = n"
        />
        <Summary 
          v-show="step === 4" 
          :step="step" 
          :isYearly="isYearly"
          :plan="selectedPlan"
          :addons="addons"
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
        return this.plans.find(plan => plan.selected === true);
      }
  },
  data() {
    return {
      step: 1,
      isYearly: false,
      plans: [
          { id: 'arcade', title: 'Arcade', amount: 9, yearlyAmt: 90, img: '/src/assets/images/icon-arcade.svg', selected: true},
          { id: 'advanced', title: 'Advanced', amount: 12, yearlyAmt: 120, img: '/src/assets/images/icon-advanced.svg', selected: false},
          { id: 'pro', title: 'Pro', amount: 15, yearlyAmt: 150, img: '/src/assets/images/icon-pro.svg', selected: false}
      ],
      addons: [
          {
              id: 'online',
              title: "Online service",
              subtitle: "Access to multiplayer games",
              selected: false,
              amount: 1,
              yearlyAmt: 10
          },
          {
              id: 'storage',
              title: "Larger storage",
              subtitle: "Extra 1TB of cloud save",
              selected: false,
              amount: 2,
              yearlyAmt: 20
          },
          {
              id: 'profile',
              title: "Customizable profile",
              subtitle: "Custom theme on your profile",
              selected: false,
              amount: 2,
              yearlyAmt: 20
          }
        ]
    }
  },
  methods: {
    handleYearlySelection(isYearly) {
      this.isYearly = isYearly;
    },
    handlePlanSelection(planId) {
        this.plans.forEach(plan => {
            plan.selected = (plan.id === planId);
        });
    },
    handleAddonSelection(addonId) {
        this.addons.forEach(addon => {
            if(addonId === addon.id) {
                addon.selected = !addon.selected;
            }
        });
    },
  }

}
</script>

<style scoped>
.main-full-height {
  height: 100%;
}
</style>
