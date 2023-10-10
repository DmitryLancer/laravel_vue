<template>
<div>

    <CreateComponent></CreateComponent>
    <IndexComponent ref="index"></IndexComponent>
<!--    <table class="table">-->
<!--        <thead>-->
<!--        <tr>-->
<!--            <th scope="col">ID</th>-->
<!--            <th scope="col">Name</th>-->
<!--            <th scope="col">Age</th>-->
<!--            <th scope="col">Job</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody>-->
<!--        <tr v-for="person in persons">-->
<!--            <th scope="row">{{ person.id }}</th>-->
<!--            <td>{{ person.name }}</td>-->
<!--            <td>{{ person.age }}</td>-->
<!--            <td>{{ person.job }}</td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--    </table>-->


</div>
</template>

<script>
import CreateComponent from "./CreateComponent.vue";
import IndexComponent from "./IndexComponent.vue";

export default {
    name: "PostComponent",


    data () {
        return {
            persons: null
        }
    },

    mounted() {

    },


    methods: {
        parentLog() {
            console.log('this is parent component');
        }

    },






    components: {
        CreateComponent,
        IndexComponent,
    }
}
</script>

<style scoped>

</style>
