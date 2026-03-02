<template>
    <v-footer 
        v-if="isMobile" 
        app 
        class="d-flex align-center px-4" 
        height="70"
    >
        <Back v-if="step > 1"/>
        <Next class="ml-auto" :valid="valid" :label="step === 4 ? 'Confirm' : 'Next Step'"/>      
    </v-footer>  
    <div v-else class="d-flex"> 
        <Back class="mr-auto" v-if="step > 1"/>
        <Next :valid="valid" :label="step === 4 ? 'Confirm' : 'Next Step'"/>      
    </div>
</template>

<script>
import { useStepStore } from '@/store/store'
import Back from './buttons/Back.vue';
import Next from './buttons/Next.vue';
export default {
    components: {
        Back,
        Next
    },
    props: {
        valid: {
            type: Boolean,
            default: false
        },
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
