<template>
    <v-card
        variant="outlined"
        hover
        class="mx-auto py-4 rounded-lg"
        :color="selected ? 'primary' : null"
    >
        <template v-slot:prepend>
          <v-avatar size="40">
            <v-img
              :src="img"
            ></v-img>
          </v-avatar>
        </template>
        <v-card-subtitle class="text-title-medium font-weight-medium mt-10">{{ title }}</v-card-subtitle>
        <div v-if="isYearly === true">
            <v-card-text class="text-body-medium text-grey py-0">${{yearlyAmt}}/yr</v-card-text>
            <v-card-text class="text-body-small text-primary pb-0">2 months free</v-card-text>
        </div>
        <v-card-text v-else class="text-body-medium text-grey py-0">${{amount}}/mo</v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        img: String,
        title: String,
        selected: Boolean,
        amount: Number,
        yearlyAmt: Number,
        isYearly: Boolean
    }
}
</script>
