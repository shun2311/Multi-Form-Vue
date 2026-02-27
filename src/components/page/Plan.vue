<template>
    <div>
        <Header title="Select Your Plan" subtitle="You have the option of monthly or yearly billing." />
        <div class = "d-flex">
            <PlanCard 
                v-for="(plan, index) in usePlanStore.plans" 
                :key="plan.id"
                class="flex-grow-1 flex-shrink-0"
                :class="{ 'mr-6': index !== usePlanStore.plans.length - 1 }" 
                :index="index"
                :plan="plan"
            />
        </div>
        <v-card 
            class="my-8"
            width="100%" 
            variant="tonal" 
            color="primary"
        >
            <v-card-item>
            <div class="d-flex align-center justify-center">
                <span class="mx-4" :class="!isYearly ? 'text-primary font-weight-bold' : 'text-grey'">
                    Monthly
                </span>

                <v-switch
                   :model-value="isYearly"
                    color="primary"
                    hide-details
                    inset
                    @update:model-value="isYearlyStore.handleYearlySelection(!isYearly)"
                ></v-switch>

                <span class="mx-4" :class="isYearly ? 'text-primary font-weight-bold' : 'text-grey'">
                    Yearly
                </span>
            </div>
            </v-card-item>
         </v-card>
        <div class="d-flex"> 
            <Back class="mr-auto"/>
            <Next :valid="selectedPlan !== null"/>      
        </div>
       
    </div>
       
</template>

<script>
import Back from '../buttons/Back.vue';
import Next from '../buttons/Next.vue';
import Header from '../Header.vue';
import { useisYearly, usePlanStore } from '@/store/store'
import PlanCard from '../PlanCard.vue';
export default {
    components: {
        Back,
        Next, 
        Header,
        PlanCard
    },
    computed: {
        selectedPlan() {
            return this.usePlanStore.plans.find(plan => plan.selected === true);
        },
        usePlanStore() {
            return usePlanStore(); 
        },
        isYearlyStore() {
            return useisYearly();
        },
        isYearly() {
            return useisYearly().isYearly;
        }
    },
}
</script>
