<template>
    <div class="d-flex flex-column flex-grow-1 align-center my-auto" style="margin: 20% !important;">
        <v-avatar size="100">
            <v-img :src="img"></v-img>
        </v-avatar>
        <div class="text-display-medium text-primary font-weight-bold mt-6 mb-2">Thank you!</div>
        <div class="text-body-medium text-center text-grey mb-6">
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@ourplatform.com
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
           img: '/src/assets/images/icon-thank-you.svg'
        }
    }
}
</script>
