<template>
    <v-btn
      @click="stepStore.nextStep()"
      :disabled="!valid"
      class="mt-auto rounded-lg"
      :text="label"
      color="primary"
    ></v-btn>
</template>

<script>
import { useStepStore } from '@/store/store'

export default {
  props: {
    valid: Boolean, 
    label: {
      type: String,
      default: 'Next Step'
    }
  },
  computed: {
    stepStore() {
      return useStepStore();
    },
  },
}
</script>
