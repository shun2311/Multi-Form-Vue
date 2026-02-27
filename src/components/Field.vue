<template>
    <div class="mb-8">
        <div class="text-title-medium font-weight-regular mb-2">{{ field.title }}</div>
        <v-text-field
            :model-value="field.text"
            :counter="field.counter"
            :rules="field.rules"
            :label="field.text === null || field.text.length === 0 ? field.label : ''"
            @update:model-value="personalInfoStore.updatePersonalInfo($event, field.id)"
            required
        ></v-text-field>
    </div>
</template>

<script>
import { usePersonalInfoStore } from '@/store/store'
export default {
    props: {
       field: Object
    },
    computed:{
        personalInfoStore() {
            return usePersonalInfoStore();
        },
    }
}
</script>