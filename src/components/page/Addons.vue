<template>
    <div>
       <Header title="Pick Add-ons" subtitle="Add-ons help enhance your gaming experience." />
        <AddonCard 
            v-for="(addon) in addons" 
            :key="addon.title" 
            :addon="addon"
        />
       <div class="d-flex"> 
            <Back class="mr-auto"/>
            <Next :valid="true"/>      
        </div>
    </div>
</template>

<script>
import Back from '../buttons/Back.vue';
import Next from '../buttons/Next.vue'; 
import Header from '../Header.vue';
import AddonCard from '../AddonCard.vue';
import { useisYearly, useAddonStore } from '@/store/store'
export default {
    components: {
        Back,
        Next,
        Header,
        AddonCard
    },
    computed: {
        addons() {
            return useAddonStore().addons; 
        },
        isYearlyStore() {
            return useisYearly();
        },
    },
}
</script>
