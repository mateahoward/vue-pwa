<template>
    <v-main class="d-flex flex-column">

        <v-container class="d-flex justify-center align-center">
            <v-col>
                <h1 class="mb-3 display-1"> Welcome 🦊</h1>
                <p> Please type a username you wish to check details for in the box below</p>
            </v-col>
        </v-container>

        <v-form>
          <v-col>
                <v-text-field
                    v-model="passedUsername"
                    label="GitHub Username"
                    solo
                ></v-text-field>
          </v-col>
        </v-form>

        <v-container>
            <v-btn @click="getInfo" large class="fab white--text" color="cyan">
                <v-icon small left>mdi-magnify</v-icon>
                <span>Search</span>
             </v-btn>
        </v-container>

    </v-main>
</template>

<script>
import axios from "axios";

export default {
    name: 'SetUpUserInformation',
    data() {
        return {
           passedUsername: '' ,

            user: {
                name: '',
                profileImage: '',
                profileURL: '',
            },
            pullRequests: 0

            
        }
    },

    methods: {
       getInfo() {

           let newResponse = [];

           let api = 'https://api.github.com/users/' + this.passedUsername + '/events/public';

            axios.get(api).then((response) => {

            newResponse = response.data;

            this.pullRequests = newResponse.length;

              newResponse.forEach(element => {
                  if(element.type === 'PullRequestEvent') {

                      this.user.name = element.actor.display_login;
                      this.user.profileImage = element.actor.avatar_url;
                      this.user.profileURL = element.actor.url;

                  }
              });
            }).then(() => {

                let passedObject = [
                    this.user,
                    this.pullRequests
                ]
                this.$emit('hasUserData', passedObject)
            }) 
       }
    }
}
</script>