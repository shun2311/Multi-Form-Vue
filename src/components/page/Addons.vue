<template>
    <v-card :class="!isMobile ? 'pa-0 ma-0' : 'pa-10'" flat rounded>
       <Header title="Pick Add-ons" subtitle="Add-ons help enhance your gaming experience." :isMobile="isMobile" />
        <AddonCard 
            v-for="(addon) in addons" 
            :key="addon.title" 
            :addon="addon"
        />
        <Bottom :valid="true" link="/summary"/>
    </v-card>
</template>

<script>
import Back from '../buttons/Back.vue';
import Next from '../buttons/Next.vue'; 
import Header from '../Header.vue';
import AddonCard from '../AddonCard.vue';
import Bottom from '../Bottom.vue';
import { useisYearly, useAddonStore } from '@/store/store'
export default {
    components: {
        Back,
        Next,
        Header,
        AddonCard,
        Bottom
    },
    computed: {
        addons() {
            return useAddonStore().addons; 
        },
        isYearlyStore() {
            return useisYearly();
        },
        isMobile() {
            return this.$vuetify.display.mobile;
        },
    },
}
</script>
