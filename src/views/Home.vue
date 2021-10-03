<template>
  <v-container class="d-flex justify-center flex-row align-center flex-wrap">
    <v-col cols="10" lg="6" sm="10" xs="10" class="mb-4">
      <set-up-user-information @hasUserData="populateData"></set-up-user-information>
    </v-col>
    <v-col cols="10" lg="6" sm="10" xs="10">
      <user-card v-if="componentHasUserData" :user="user" :pullRequests="pullRequests"></user-card>
    </v-col>

  </v-container>
</template>

<script>
import SetUpUserInformation from '../components/SetUpUserInformation.vue'
import UserCard from '../components/UserCard.vue'

  export default {
    name: 'Home',

    components: {
        SetUpUserInformation,
        UserCard
    },

    data() {
      return {
        user: [],
        pullRequests: '',
        componentHasUserData: false
      }
    },

   methods: {
     populateData(passedObject) {

       this.user = passedObject[0];
       this.pullRequests = passedObject[1];

       this.componentHasUserData = true;
     }
   }, 
  }
</script>
