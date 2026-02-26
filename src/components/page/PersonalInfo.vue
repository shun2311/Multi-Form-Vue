<template>
    <div>
        <Header title="Personal Info" subtitle="Please provide your name, email address, and phone number." />
        <v-form v-model="valid" validate-on="input">
            <Field 
                title="Name" 
                label="e.g. John Doe" 
                :rules="nameRules" 
                :counter="counter"
                />
            <Field 
                title="Email Address"
                label="e.g. johndoe@mail.com" 
                :rules="emailRules" 
                :counter="counter"
            />
            <Field 
                title="Phone Number"
                label="e.g +1 234 567 890"
                :rules="phoneRules" 
                :counter="counter"
            />
            <Next :valid="valid" :step="step" @next="(n) => $emit('next', n)"/>
        </v-form>
    </div>
</template>

<script>
import Field from '../Field.vue'
import Next from '../buttons/Next.vue';
import Header from '../Header.vue';
export default {
    components: {
        Field,
        Next,
        Header
    },
    props: {
      step: Number
    },
    data: () => ({
      valid: false,
      counter: 50,
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 50) return true

          return 'Name must be less than 50 characters.'
        },
      ],
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is required.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
      phoneRules: [
        v => !!v || 'Phone number is required',
        v => /^[0-9\-+()\s]{7,15}$/.test(v) || 'Phone number must be valid'
      ]
    }),
}
</script>