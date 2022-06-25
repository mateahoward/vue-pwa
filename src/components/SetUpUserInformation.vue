<template>
    <v-col class="d-flex flex-column">

        <v-container class="d-flex justify-center align-center">
            <v-col>
                <h1 class="mb-3 display-1"> Welcome 🦊</h1>
                <p> Please type a username you wish to check details for in the box below</p>
            </v-col>
        </v-container>

        <v-form @submit.prevent="getInfo">
          <v-col>
                <v-text-field
                    v-model="passedUsername"
                    label="GitHub Username"
                    solo
                    autocomplete="off"
                    aria-label="Github Username"
                ></v-text-field>
          </v-col>

          <v-col>
            <v-btn type="submit" large class="fab white--text" color="cyan darken-4">
                <v-icon small left>mdi-magnify</v-icon>
                <span>Search</span>
             </v-btn>
          </v-col>

        </v-form>
    </v-col>
</template>

<script>
import axios from "axios";

export default {
    name: 'SetUpUserInformation',
    data() {
        return {
           passedUsername: '' ,

            user: {

            },
            pullRequests: 0
        }
    },

    methods: {
       getInfo() {


            let api = 'https://api.github.com/users/' + this.passedUsername;


            axios.get(api).then((response) => {

            this.user = response.data;

            }).then(() => {

                let passedObject = [
                    this.user,
                ]
                this.$emit('hasUserData', passedObject)
            }) 
       }
    }
}
</script>