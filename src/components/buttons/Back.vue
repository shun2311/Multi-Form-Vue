<template>
    <v-btn
        @click="back()"
        class="rounded-lg"
        text="Go Back"
        color="primary"
        variant="text"
    ></v-btn>
</template>

<script>
import { useStepStore } from '@/store/store'
export default {        
    computed: {
        stepStore() {
            return useStepStore();
        },
    },
    methods: {
        back() {
            this.stepStore.prevStep();
            this.$router.back()
        }
    }
}
</script>  