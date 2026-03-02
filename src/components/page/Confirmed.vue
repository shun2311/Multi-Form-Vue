<template>
    <v-card class="d-flex flex-column flex-grow-1 align-center " :class="isMobile ? 'px-10 py-15' : 'my-auto'" :style="{ margin: !isMobile ? '20% !important' : undefined }" flat>
        <v-avatar size="100">
            <v-img :src="img"></v-img>
        </v-avatar>
        <div class="text-display-medium text-primary font-weight-bold mt-6 mb-2">Thank you!</div>
        <div class="text-body-medium text-center text-grey mb-6" :class="{'text-title-medim': isMobile}">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@ourplatform.com
        </div>
    </v-card>
</template>

<script>
export default {
    computed: {
        isMobile() {
            return this.$vuetify.display.mobile;
        }
    },
    data() {
        return {
           img: '/src/assets/images/icon-thank-you.svg'
        }
    }
}
</script>
