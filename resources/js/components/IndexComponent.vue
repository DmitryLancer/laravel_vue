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
                <ShowComponent :person="person" :ref="`show_${person.id}`"></ShowComponent>
                <EditComponent :person="person" :ref="`edit_${person.id}`"></EditComponent>
                </tbody>
            </template>

        </table>
    </div>

</template>

<script>

import EditComponent from "./EditComponent.vue";
import ShowComponent from "./ShowComponent.vue";

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

    components: {
        EditComponent,
        ShowComponent,
    },

    methods: {
        getPeople() {
            axios.get('/api/people')
                .then(res => {
                    this.people = res.data;
                })
        },

        hideButton() {
            this.buttonVisibility = false;
        },


        updatePerson(id) {
            this.editPersonId = null;
            axios.patch(`/api/people/${id}`, {name: this.name, age: this.age, job: this.job})
                .then(res => {
                    this.getPeople();
                })
        },

        deletePerson(id) {
            axios.delete(`/api/people/${id}`)
                .then(res => {
                    this.getPeople();
                })
        },

        changeEditPersonId(id, name, age, job) {
            this.editPersonId = id
            let editName = `edit_${id}`
            let fullEditName = this.$refs[editName][0];
            fullEditName.name = name
            fullEditName.age = age
            fullEditName.job = job
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
