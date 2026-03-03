<template>
  <v-sheet v-if="!isMobile" class="rounded-lg" width="25%">
    <v-img :src="sidebar" cover aspect-ratio="16/9">
      <div class="pa-16">
        <Step v-for="(step, index) in steps" :key="index" :icon="step.icon" :title="step.title"
          :subtitle="step.subtitle" :color="step.color" :isMobile="isMobile" />
      </div>
    </v-img> 
  </v-sheet>
  <div v-else class="d-flex align-stretch justify-center my-10">
    <Step class="mr-2" v-for="(step, index) in steps" :key="index" :icon="step.icon" :title="step.title"
      :subtitle="step.subtitle" :color="step.color" :isMobile="isMobile" />
  </div>
</template>

<script setup>
import sidebar from '@/assets/images/bg-sidebar-desktop.svg'
</script>

<script>
import Step from './Step.vue'
import { useStepStore } from '@/store/store'
export default {
  components: {
    Step
  },
  computed: {
    step() {
      return useStepStore().step;
    },
    isMobile() {
      return this.$vuetify.display.mobile;
    },
  },
  data() {
    return {
      steps: [
        {
          icon: 'mdi-numeric-1-circle',
          title: 'STEP 1',
          subtitle: 'YOUR INFO',
          color: 'secondary'
        },
        {
          icon: 'mdi-numeric-2-circle-outline',
          title: 'STEP 2',
          subtitle: 'SELECT PLAN',
          color: 'white'
        },
        {
          icon: 'mdi-numeric-3-circle-outline',
          title: 'STEP 3',
          subtitle: 'ADD-ONS',
          color: 'white'
        },
        {
          icon: 'mdi-numeric-4-circle-outline',
          title: 'STEP 4',
          subtitle: 'SUMMARY',
          color: 'white'
        }
      ]
    }
  },
  watch: {
    step(newValue, oldValue) {
      if (newValue < this.steps.length + 1) {
        this.steps[oldValue - 1].icon = `mdi-numeric-${oldValue}-circle-outline`
        this.steps[oldValue - 1].color = 'white'
        this.steps[newValue - 1].icon = `mdi-numeric-${newValue}-circle`
        this.steps[newValue - 1].color = 'secondary'
      }
    }
  }
} 
</script>