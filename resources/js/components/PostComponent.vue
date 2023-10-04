<template>
<div>
    <SinglePostComponent></SinglePostComponent>

    <table class="table">
        <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Job</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="person in persons">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
        </tr>
        </tbody>
    </table>

    <button @click="sayHello">Hello</button>
    <button @click="sayHi">Hi</button>

</div>
</template>

<script>
import SinglePostComponent from './SinglePostComponent.vue'
export default {
    name: "PostComponent",


    data () {
        return {
            persons: [
                {
                    id: 1,
                    name: 'Vasya',
                    age: 20,
                    job: 'coach',
                },
                {
                    id: 2,
                    name: 'Dima',
                    age: 24,
                    job: 'santexnik',
                },
                {
                    id: 3,
                    name: 'Denis',
                    age: 25,
                    job: 'security',
                },
            ]
        }
    },


    methods: {
        sayHello() {
            console.log('Hello')
        },
        sayHi() {
            console.log('Hi')
        }
    },

    computed: {
        vasyaJob() {
            return this.name + ' работает на заводе'
        }
    },




    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
