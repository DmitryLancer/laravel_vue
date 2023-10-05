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
        <tr v-for="person in personsAgeMoreTwenty">
            <th scope="row">{{ person.id }}</th>
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.job }}</td>
        </tr>
        </tbody>
    </table>


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
                    age: 18,
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
                {
                    id: 4,
                    name: 'Sanya',
                    age: 28,
                    job: 'it',
                },
                {
                    id: 5,
                    name: 'Masha',
                    age: 18,
                    job: 'manik',
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
        personsAgeMoreTwenty() {
            return this.persons.filter(function (person) {
                return person.age > 20
            })
        }
    },




    components: {
        SinglePostComponent
    }
}
</script>

<style scoped>

</style>
