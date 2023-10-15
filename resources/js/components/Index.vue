<template>
    <div class="mb-5">
        <router-link :to="{name: 'person.index'}">People</router-link>
        <router-link :to="{name: 'person.create'}">Add</router-link>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
