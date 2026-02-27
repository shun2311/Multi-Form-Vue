<template>
    <v-card 
        class="mb-4 rounded-lg" variant="outlined"
        :color="addon.selected === true ? 'primary' : null"
    >
        <div class="d-flex flex-no-wrap align-center pa-4">
            <v-card-actions class="px-0">
                <v-checkbox-btn color="primary" :model-value="addon.selected" @update:model-value="addonStore.handleAddonSelection(addon.id)"></v-checkbox-btn>
            </v-card-actions>
            <div class="me-auto">
                <v-card-title class="text-h6">{{ addon.title }}</v-card-title>
                <v-card-subtitle>{{ addon.subtitle }}</v-card-subtitle>
            </div>
            <div v-if="isYearly === true" class="text-body-medium text-primary py-0">${{addon.yearlyAmt}}/yr</div>
            <div v-else class="text-body-medium text-primary py-0">${{addon.amount}}/mo</div>
        </div>
    </v-card>
</template>

<script>
import { useisYearly, useAddonStore } from '@/store/store'
export default {
    props: {
        addon: Object
    },
    computed: {
        isYearly() {
            return useisYearly().isYearly;
        },
        addonStore() {
            return useAddonStore();
        }
    }
}
</script>
