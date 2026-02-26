<template>
    <div>
        <div class="text-display-medium font-weight-black text-primary mb-4">{{title}}</div>
        <div class="text-title-large font-weight-light text-grey mb-16">{{subtitle}}</div>
    </div>
</template>

<script>

export default {
    props: {
        title: String,
        subtitle: String
    }
}
</script>
