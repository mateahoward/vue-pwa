<template>
  <v-container class="d-flex justify-center flex-row flex-wrap">
    <v-col cols="12" lg="6" sm="10" xs="12" class="mb-4">
      <set-up-user-information @hasUserData="populateData"></set-up-user-information>
    </v-col>
    <v-col cols="12" lg="6" sm="10" xs="12">
      <user-card 
        v-if="componentHasUserData" 
        :user="user" 
      ></user-card>
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
        componentHasUserData: false
      }
    },

   methods: {
     populateData(passedObject) {
       this.user = passedObject[0];
       this.componentHasUserData = true;
     }
   }, 
  }
</script>
