<template>
    <v-btn
        @click="stepStore.prevStep()"
        class="mt-auto rounded-lg"
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
}
</script>  