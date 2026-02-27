<template>
    <div>
        <Header title="Personal Info" subtitle="Please provide your name, email address, and phone number." />
        <v-form v-model="valid" validate-on="input">
            <Field 
                v-for="(personalInfo) in personalInfos" 
                :key="personalInfo.id" 
                :field="personalInfo"
            />
            <Next :valid="valid"/>
        </v-form>
    </div>
</template>

<script>
import Field from '../Field.vue'
import Next from '../buttons/Next.vue';
import Header from '../Header.vue';
import { usePersonalInfoStore } from '@/store/store'
export default {
    components: {
        Field,
        Next,
        Header
    },
    computed:{
      personalInfos() {
        return usePersonalInfoStore().info;
      },
    },
    data() {
        return {
          valid: false
        }
    }
}
</script>