<template>
    <div>
        <Header title="Finishing Up" subtitle="Double-check everything looks OK before confirming." />
        <v-sheet class="pa-6 mb-4" rounded color="indigo-lighten-5" style='min-width:100%'>
            <div class="d-flex justify-space-between flex-grow-1 align-center">
                <div>
                    <div class="text-title-medium text-primary">{{ selectedPlan.title }} ({{ isYearly ? 'Yearly' : 'Monthly' }})</div>
                    <v-btn class="pa-0 custom-underline text-grey" text variant="text" @click="useStepStore.backToPlanSelection()">Change</v-btn>
                </div>
                <span class="text-title-medium text-primary">${{ isYearly ? selectedPlan.yearlyAmt : selectedPlan.amount }}/{{ isYearly ? 'yr' : 'mo' }}</span>
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
            <Back class="mr-auto"/>
            <Next :valid="true" label="Confirm"/>      
        </div>

    </div>
</template>

<script>
import Header from '../Header.vue';
import Back from '../buttons/Back.vue';
import Next from '../buttons/Next.vue'; 
import { useisYearly, usePlanStore, useAddonStore, useStepStore } from '@/store/store'

export default {
    components: {
        Back,
        Next,
        Header    
    },
    computed: {
        isYearly() {
            return useisYearly().isYearly;
        },
        planStore() {
            return usePlanStore();
        },
        addonStore() {
            return useAddonStore();
        },
        useStepStore() {
            return useStepStore();
        },
        selectedAddons() {
            return this.addonStore.selectedAddons();
        },
        selectedPlan() {
            return this.planStore.selectedPlan();
        },
    },
    methods: {
        calculateTotal() {
            let total = this.isYearly ? this.selectedPlan.yearlyAmt : this.selectedPlan.amount;
            this.selectedAddons.forEach(addon => {
                total += this.isYearly ? addon.yearlyAmt : addon.amount;
            });
            return total;
        }
    }
    }
</script>

<style scoped>
.custom-underline {
  text-decoration: underline !important;
  /* Optional: adds a nice gap between text and line */
  text-underline-offset: 4px; 
}
</style>
