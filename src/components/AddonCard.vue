<template>
    <v-card 
        class="mb-4 rounded-lg" variant="outlined"
        :color="select === true ? 'primary' : null"
    >
        <div class="d-flex flex-no-wrap align-center pa-4">
            <v-card-actions class="px-0">
                <v-checkbox-btn color="primary" v-model="select" @update:model-value="$emit('select')"></v-checkbox-btn>
            </v-card-actions>
            <div class="me-auto">
                <v-card-title class="text-h6">{{ title }}</v-card-title>
                <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
            </div>
            <div v-if="isYearly === true" class="text-body-medium text-primary py-0">${{yearlyAmt}}/yr</div>
            <div v-else class="text-body-medium text-primary py-0">${{amount}}/mo</div>
        </div>
    </v-card>
</template>

<script>

export default {
    props: {
        title: String,
        subtitle: String,
        amount: Number,
        yearlyAmt: Number,
        selected: Boolean,
        isYearly: Boolean
    },
    data() {
        return {
            select: false
        }
    }
}
</script>
