<template>
    <div>
        <Header title="Finishing Up" subtitle="Double-check everything looks OK before confirming." />
        <v-sheet class="pa-6 mb-4" rounded color="indigo-lighten-5" style='min-width:100%'>
            <div class="d-flex justify-space-between flex-grow-1 align-center">
                <div>
                    <span class="text-title-medium text-primary">{{ plan.title }} ({{ isYearly ? 'Yearly' : 'Monthly' }})</span>
                    <!-- <v-btn text color="primary" @click="$emit('back', 2)">Change</v-btn> -->
                </div>
                <span class="text-title-medium text-primary">${{ isYearly ? plan.yearlyAmt : plan.amount }}/{{ isYearly ? 'yr' : 'mo' }}</span>
            </div>
            <v-divider v-if="selectedAddons.length !== 0" class="my-6"></v-divider>
            <div>
                <div v-for="addon in selectedAddons" :key="addon.id" class="d-flex justify-space-between align-center mb-4">
                    <div class="text-body-medium text-grey">{{ addon.title }}</div>
                    <div class="text-body-medium text-primary">+${{ isYearly ? addon.yearlyAmt : addon.amount }}/{{ isYearly ? 'yr' : 'mo' }}</div>
                </div>
            </div>
        </v-sheet>
        <div class="pa-6">
            <div class="d-flex justify-space-between align-center mb-4">
                <div class="text-body-medium text-grey">Total (per {{ isYearly ? 'year' : 'month' }})</div>
                <div class="text-title-large text-primary font-weight-bold">
                    ${{ calculateTotal() }}/{{ isYearly ? 'yr' : 'mo' }}
                </div>
            </div>
        </div>
        <div class="d-flex"> 
            <Back class="mr-auto" :step="step" @back="(n) => $emit('back', n)"/>
            <Next :valid="true" label="Confirm" :step="step" @next="(n) => $emit('next', n)"/>      
        </div>

    </div>
</template>

<script>
import Header from '../Header.vue';
import Back from '../buttons/Back.vue';
import Next from '../buttons/Next.vue'; 
export default {
    props: {
        step: Number,
        addons: Array,
        plan: Object,
        isYearly: Boolean
    },
    components: {
        Back,
        Next,
        Header    
    },
    computed: { 
        selectedAddons() {
            return this.addons.filter(addon => addon.selected);
        }
    },
    methods: {
        calculateTotal() {
            let total = this.isYearly ? this.plan.yearlyAmt : this.plan.amount;
            this.addons.forEach(addon => {
                if (addon.selected) {
                    total += this.isYearly ? addon.yearlyAmt : addon.amount;
                }
            });
            return total;
        }
    }
}
</script>
