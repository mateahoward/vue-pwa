<template>
    <v-container>
        <v-card class="d-flex flex-column align-center justify-center">
            <v-row>
                <v-col cols="12" lg="12" sm="10" xs="8"> 
                    <v-avatar 
                        class="rounded-circle user-avatar mb-4" 
                        size="200"
                    >
                        <v-img :src="user.avatar_url"></v-img>
                    </v-avatar>
                </v-col>

            </v-row>
   
            <v-card-title v-if="user.name"> 
                {{ user.name}}
            </v-card-title>

             <v-card-title v-if="!user.name"> 
                {{ user.login}}
            </v-card-title>

            <v-card-text class="text-center" v-if="user.bio">
                {{user.bio}}
            </v-card-text>

            <v-card-text class="text-center">
                <p> <strong> GitHub created on: </strong> </p>
                {{profile_created_at}}
            </v-card-text>

            <v-row>
                <v-col class="user-details"> 

                    <v-card-text class="text-left" v-if="user.location">
                        <p> <strong> Location: </strong> </p>
                        {{user.location}}
                    </v-card-text>

                    <v-card-text class="text-left" v-if="user.blog">
                       <p> <strong> Website: </strong> </p>
                        <a :href="user.blog" target="_blank"> {{user.blog}} </a>
                    </v-card-text>

                    <v-card-text class="text-left" v-if="user.twitter_username !== null">
                        <p> <strong> Twitter: </strong> </p>
                       <a :href=" 'https://twitter.com/' + user.twitter_username" target="_blank">  {{user.twitter_username}} </a>
                    </v-card-text>

                </v-col>

                <v-col class="user-details"> 

                    <v-card-text class="text-left" v-if="user.company">
                        <p> <strong>  Organisation/Company: </strong> </p>

                        <a :href="user.organizations_url"> {{user.company}}</a>
                    </v-card-text>

                    <v-row> 

                        <v-col>
                            <v-card-text class="text-left" v-if="user.followers">
                                <p> <strong> Followers: </strong></p>
                                {{user.followers}} 
                            </v-card-text>
                        </v-col>

                        <v-col>
                            <v-card-text class="text-left" v-if="user.following">
                                <p> <strong> Following: </strong> </p>
                                {{user.following}}
                            </v-card-text>
                        </v-col>
                    </v-row>

                </v-col>

            </v-row>

            <v-row>
                <v-card-text class="text-center">
                 <strong class="mr-2"> Available for work:</strong>
                    <template v-if="user.hireable">
                        <p> Yes</p>
                    </template>

                    <template v-else> 
                        <p> No</p>
                    </template>

                </v-card-text>
            </v-row>

            <v-card-text class="text-center mt-4 mb-4">
               <a :href="user.profileURL" target="blank" class="fab white--text cyan darken-4 rounded card-cta">
                  View {{user.name}}'s GitHub profile
               </a>
            </v-card-text>
        </v-card>
    </v-container>
</template>
    
<script>
export default {
    name: 'UserCard',
    props: [
        'user',
    ],
    computed: {
        profile_created_at() {
            return this.user.created_at.substring(0, 10);
        }
    }
}
</script>

<style lang="scss">
    .card-cta {
        text-decoration: none;
        padding: 10px 35px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .user-avatar {
        border: 4px solid #006064;
        max-width: 250px;
        max-height: 250px;
    }

    p {
        margin-bottom: 0!important;
    }

    a {
        color: #a10530!important;
        margin-top: 10px;
        text-decoration: none;
    }

    strong {
        color: #403d3d;
    }

    @media (max-width: 400px) {
        .user-avatar {
            width: 100%;
            height: 100%;
        }
    }
</style>