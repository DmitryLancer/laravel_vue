<template>
    <div>
        <router-link to="/">Home</router-link>
        <router-link to="/post">Post</router-link>
    </div>

    <router-view></router-view>

</template>

<script>
export default {
    name: "App"
}
</script>

<style scoped>

</style>
