<template>
    <div :class="{'d-flex mb-12' : !isMobile}">
        <v-icon
            :size="isMobile ? 40 : 60"
            :icon="icon"
            :color="color">
        </v-icon>
        <div class="ml-4" v-if="!isMobile">
            <div class="text-subtitle-1 text-grey mb-auto">{{ title }}</div>
            <div class="text-title-large font-weight-medium text-white">{{ subtitle }}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    icon: String,
    color: String,
    title: String,
    subtitle: String,
    isMobile: Boolean
  },
}
</script>