<template>

    <div>
        <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Job</th>
                        <th scope="col">Edit</th>
                        <th scope="col" v-if="buttonVisibility">Delete</th>
                    </tr>
                </thead>



            <template v-for="person in people">
                <tbody>
            <tr :class="isEdit(person.id) ? 'd-none' : ''">
                <th scope="row">{{ person.id }}</th>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
                <td>{{ person.job }}</td>
                <td><a href="#" @click="hideButton" @click.prevent="changeEditPersonId(person.id, person.name, person.age, person.job)" class="btn btn-success">Edit</a></td>
                <td><a v-if="buttonVisibility" href="#" @click.prevent="deletePerson(person.id)" class="btn btn-danger">Delete</a></td>
            </tr>


                <tr :class="isEdit(person.id) ? '' : 'd-none'">
                    <th scope="row">{{ person.id }}</th>
                    <td><input type="text" v-model="name" class="form-control"></td>
                    <td><input type="number" v-model="age" class="form-control"></td>
                    <td><input type="text" v-model="job" class="form-control"></td>
                    <td><a href="#" @click.prevent="updatePerson(person.id)" class="btn btn-success">Update</a></td>
                </tr>
            </tbody>
            </template>

        </table>
    </div>

</template>

<script>

export default {
    name: "IndexComponent",

    data() {
        return {
            people: null,
            editPersonId: null,
            name: 'Karl',
            age: null,
            job: null,
            buttonVisibility: true,
        }
    },

    mounted() {
        this.getPeople()

    },

    methods: {
        getPeople() {
            axios.get('/api/people')
            .then( res => {
               this.people = res.data;
            })
        },

        hideButton() {
            this.buttonVisibility = false;
        },


        updatePerson(id) {
            this.editPersonId = null;
            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                .then( res => {
                    this.getPeople();
                })
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then( res => {
                    this.getPeople();
                })
        },

        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id
            this.name = name
            this.age = age
            this.job = job
        },

        isEdit(id) {
            return this.editPersonId === id
        },

        indexLog() {
            console.log('this is index component');
        }


    },

}

</script>

<style scoped>

</style>
