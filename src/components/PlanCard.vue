<template>
    <v-card
        variant="outlined"
        hover
        class="mx-auto py-4 rounded-lg"
        :class="{'d-flex align-start mb-2' : isMobile}"
        :color="plan.selected ? 'primary' : null"
        @click="planStore.handlePlanSelection(plan.id)"
    >
        <template v-slot:prepend>
          <v-avatar size="40">
            <v-img
              :src="plan.img"
            ></v-img>
          </v-avatar>
        </template>
        <div>
            <v-card-subtitle class="text-title-medium font-weight-medium" :class="{'mt-10': !isMobile}">{{ plan.title }}</v-card-subtitle>
            <div v-if="isYearly === true">
                <v-card-text class="text-body-medium text-grey py-0" :class="{'py-2': isMobile}">${{plan.yearlyAmt}}/yr</v-card-text>
                <v-card-text class="text-body-small text-primary pb-0" :class="{'pt-0': isMobile}">2 months free</v-card-text>
            </div>
            <v-card-text v-else class="text-body-medium text-grey py-0">${{plan.amount}}/mo</v-card-text>
        </div>
    </v-card>
</template>

<script>
import { useisYearly, usePlanStore } from '@/store/store'
export default {
    props: {
        plan: Object,
    },
    computed: {
        isYearly() {
            return useisYearly().isYearly;
        },
        planStore() {
            return usePlanStore();
        },
        isMobile() {
            return this.$vuetify.display.mobile;
        }
    }
}
</script>
