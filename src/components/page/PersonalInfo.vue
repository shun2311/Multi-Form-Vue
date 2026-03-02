<template>
    <v-card :class="!isMobile ? 'pa-0 ma-0' : 'pa-10'" flat rounded>
        <Header 
            title="Personal Info" 
            subtitle="Please provide your name, email address, and phone number." 
        />
        <v-form v-model="valid" validate-on="input">
            <Field 
                v-for="(personalInfo) in personalInfos" 
                :key="personalInfo.id" 
                :field="personalInfo"
            />
        <Bottom :valid="valid"/>
        </v-form>
    </v-card>
</template>

<script>
import Field from '../Field.vue'
import Next from '../buttons/Next.vue';
import Header from '../Header.vue';
import Bottom from '../Bottom.vue';
import { usePersonalInfoStore } from '@/store/store'
export default {
    components: {
        Field,
        Next,
        Header,
        Bottom
    },
    computed:{
      personalInfos() {
        return usePersonalInfoStore().info;
      },
      isMobile() {
        return this.$vuetify.display.mobile;
      },
    },
    data() {
        return {
          valid: false
        }
    }
}
</script>