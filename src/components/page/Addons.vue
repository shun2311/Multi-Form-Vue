<template>
    <div>
       <Header title="Pick Add-ons" subtitle="Add-ons help enhance your gaming experience." />
       <AddonCard 
            v-for="(addon) in addons" 
            :key="addon.title" 
            :title="addon.title" 
            :subtitle="addon.subtitle" 
            :selected="addon.selected"
            :amount="addon.amount"
            :yearlyAmt="addon.yearlyAmt"
            :isYearly="isYearly"
            @select="$emit('addonSelection', addon.id)"
        />
       <div class="d-flex"> 
            <Back class="mr-auto" :step="step" @back="(n) => $emit('back', n)"/>
            <Next :valid="true" :step="step" @next="(n) => $emit('next', n)"/>      
        </div>
    </div>
</template>

<script>
import Back from '../buttons/Back.vue';
import Next from '../buttons/Next.vue'; 
import Header from '../Header.vue';
import AddonCard from '../AddonCard.vue';
export default {
    props: {
        step: Number,
        isYearly: Boolean,
        addons: Array
    },
    components: {
        Back,
        Next,
        Header,
        AddonCard
    },
}
</script>
