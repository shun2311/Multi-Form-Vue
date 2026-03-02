<template>
  <v-app>
    <v-main :class="isMobile ? 'd-flex flex-column' : 'd-flex'">
      <Steps :step="step"/>
      <div :class="isMobile ? 'ma-4' : 'ma-16 px-16'" :style="{ width: !isMobile ? '100%' : '' }">
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
    isMobile() {
      return this.$vuetify.display.mobile;
    },
  },
}
</script>

<style scoped>
.main-full-height {
  height: 100%;
}
@media only screen and (max-width: 960px) {
  .v-application::before {
    content: "";
    position: fixed; /* Changed from absolute to fixed */
    top: 0 !important;   /* Force it to the very top */
    left: 0;
    width: 100%;
    height: 25vh;
    background-image: url('/src/assets/images/bg-sidebar-mobile.svg');
    background-size: cover;
    background-position: center top; /* Ensure the top of the image stays visible */
    z-index: 0;
  }
  .v-application {
    background-color: rgb(240, 248, 255) !important;
  }
}
</style>
