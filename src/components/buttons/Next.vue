<template>
    <v-btn
      @click="next()"
      :disabled="!valid"
      class="rounded-lg"
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
    },
    link: String
  },
  computed: {
    stepStore() {
      return useStepStore();
    },
  },
  methods: {
    next() {
      this.stepStore.nextStep();
      this.$router.push(this.link)
    }
  }
}
</script>
