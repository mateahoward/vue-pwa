<template>
    <v-container>
        <v-card class="d-flex flex-column align-center justify-center">

           <v-avatar>
                <v-img 
                    class="rounded-circle" 
                    :src="user.profileImage"
                    max-height="250"
                    max-width="250"
                ></v-img>
           </v-avatar>
           

            <v-card-title> 
                {{ user.name.toUpperCase() }}
            </v-card-title>

            <v-card-text>
                <strong> Number of Pull Requests:</strong>
                <span> {{pullRequests}}</span>
            </v-card-text>
        </v-card>
    </v-container>
</template>
    
<script>
export default {
    name: 'UserCard',
    props: [
        'user',
        'pullRequests'
    ] 
}
</script>