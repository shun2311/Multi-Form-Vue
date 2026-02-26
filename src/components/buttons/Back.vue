<template>
    <v-btn
        @click="back"
        class="mt-auto rounded-lg"
        text="Go Back"
        color="primary"
        variant="text"
    ></v-btn>
</template>

<script>
export default {        
    props: {
        step: Number
    },
    methods: {
        back() {
            this.$emit('back', this.step - 1)       
        } 
    }
}
</script>  