<template>
    <v-btn
      @click="nextStep"
      :disabled="!valid"
      class="mt-auto rounded-lg"
      :text="label"
      color="primary"
    ></v-btn>
</template>

<script>
export default {
  props: {
    valid: Boolean, 
    step: Number,
    label: {
      type: String,
      default: 'Next Step'
    }
  },
  methods: {
    nextStep() {
      this.$emit('next', this.step + 1)
    }
  }
}
</script>
