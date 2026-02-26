<template>
    <div>
        <Header title="Select Your Plan" subtitle="You have the option of monthly or yearly billing." />
        <div class = "d-flex">
            <PlanCard 
                v-for="(plan, index) in plans" 
                :key="plan.id"
                class="flex-grow-1 flex-shrink-0"
                :class="{ 'mr-6': index !== plans.length - 1 }" 
                :img="plan.img" 
                :title="plan.title" 
                :amount="plan.amount"
                :yearlyAmt="plan.yearlyAmt"
                :selected="plan.selected"
                :isYearly="isYearly"
                @click="$emit('planSelection', plan.id)"
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
                    v-model="isYearly"
                    color="primary"
                    hide-details
                    inset
                    @update:model-value="$emit('durationSelection', isYearly)"
                ></v-switch>

                <span class="mx-4" :class="isYearly ? 'text-primary font-weight-bold' : 'text-grey'">
                    Yearly
                </span>
            </div>
            </v-card-item>
         </v-card>
        <div class="d-flex"> 
            <Back class="mr-auto" :step="step" @back="(n) => $emit('back', n)"/>
            <Next :valid="selectedPlan !== null" :step="step" @next="(n) => $emit('next', n)"/>      
        </div>
       
    </div>
       
</template>

<script>
import Back from '../buttons/Back.vue';
import Next from '../buttons/Next.vue';
import PlanCard from '../PlanCard.vue';
import Header from '../Header.vue';
export default {
    components: {
        Back,
        Next, 
        PlanCard,
        Header
    },
    props: {
        step: Number,
        plans: Array,
        selectedPlan: Object
    },
    data() {
        return {
            isYearly: false,
        }
    }
}
</script>
