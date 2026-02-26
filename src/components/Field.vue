<template>
    <div class="mb-8">
        <div class="text-title-medium font-weight-regular mb-2">{{ title }}</div>
        <v-text-field
            v-model="text"
            :counter="counter"
            :rules="rules"
            :label="showLabel ? label : ''"
            required
        ></v-text-field>
    </div>
</template>

<script>
export default {
    props: {
       title: String,
       rules: Array,
       label: String,
       counter: Number
    },
    data() {
        return {
            text: '',
            showLabel: true
        }
    },
    watch: {
        text(newValue) {
            if(newValue) {
                this.showLabel = false
            }
        }
    }
}
</script>