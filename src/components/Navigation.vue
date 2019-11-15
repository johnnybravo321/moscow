<template>
  <div>
    <v-navigation-drawer color="primary"
    v-model="drawer" temporary app
    src="https://cdn.tutsplus.com/active/uploads/legacy/flashtuts/042_ApplePreloader/2.jpg"
      
      
 >

        <div v-if="currentUser">



                          <v-card
                    class="mx-auto"
                    max-width="210"
                    elevation="0"
                    id="test"
                  >
                
                      <v-row
                        align="end"
                        class="fill-height"
                      >
                        <v-col
                          
                          class="pa-0"
                          cols="12"
                        >
                          <v-avatar class="profile ml-10 mt-2" size="65"  >
                            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                          </v-avatar>
                        </v-col>
                        <v-col class="py-0">
                          <v-list-item
                            color="rgba(0, 0, 0, .4)"
                            dark
                          >
                            <v-list-item-content>
                              <v-list-item-title class="title">{{ currentUser.email }}</v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-col>
                      </v-row>
                 
                  </v-card>
        </div>
        <ul>
            <router-link tag="li" to="/" class=" lightgrey--text"> <v-icon color="lightgrey">home</v-icon> Home </router-link>
            <router-link tag="li" to="/menu"  class=" lightgrey--text"> <v-icon color="lightgrey">mdi-car-hatchback</v-icon> Menu </router-link>
            <router-link tag="li" to="/basket" class=" lightgrey--text"> <v-icon color="lightgrey">shopping_cart</v-icon> Basket </router-link>
            <router-link tag="li" to="/about" class=" lightgrey--text"> <v-icon color="lightgrey">info</v-icon> About </router-link>
            <router-link tag="li"  v-if="currentUser"  to="/admin"> <v-icon color="inprogress">lock</v-icon> Admin </router-link>
            <router-link tag="li" v-if="currentUser" to="/orders" class=" complete--text"> <v-icon color="complete">assignment</v-icon> orders </router-link>
            <router-link tag="li" to="/login" class=" lightgrey--text"> <v-icon color="lightgrey" >lock</v-icon> Login </router-link>
            
            

        </ul>

        
        <v-btn id="signOut" v-if="currentUser" color="incomplete"
            @click.prevent="signOut()">
                SignOut
            </v-btn> 

    </v-navigation-drawer>

    <v-app-bar app dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline"><span class="font-weight-light">BUY MA </span><span>CARS</span></v-toolbar-title>
      
      <v-spacer></v-spacer>
     <router-link id="basket" tag="li" to="/basket"><v-btn icon><v-icon>shopping_cart</v-icon></v-btn></router-link>
        
      <v-toolbar-side-icon>
      
            <v-img class="mt-0" src="@/assets/Rusty_car_logo.png" height="auto" width="70px"> 
            </v-img>
     </v-toolbar-side-icon>
     
    </v-app-bar>
  </div>
</template>

<script>
import { mdiCarHatchback } from '@mdi/js';
import firebase from 'firebase'
import 'firebase/firestore'
import store from '../store.js'
import {db} from '../../src/firebase'

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
});



export default {
    data: () => ({
      drawer: null,
    }),
    computed: {
      currentUser() {
        return this.$store.getters.currentUser
      }
    },
         methods: {
            signOut () {
                 firebase.auth().signOut().then(() =>{ 
                     alert('Logged Out');
                     this.$router.replace('/login')
                 }).catch(error => {
                     alert(error)
                 })
            }
        },
};
</script>

<style lang="scss" scoped>
#basket{
      text-decoration: none;
      list-style-type: none;
}
nav ul {
    padding: 0px;
    margin-top: 20px;
    text-decoration: none;
}
nav li {
    color:map-get($colorz, orange );
    margin-left: 15%;
    padding: 5px 20px;
    list-style-type: none;
    cursor: pointer;
}

nav li i {
margin-right: 10px;
}
nav li:last-child {
  position: absolute;
  bottom: 40px;
  color: map-get($colorz , inprogress)
}
#signOut {
  position: absolute;
  bottom: 100px;
  left:50px;
}

#test {
  background-color: #00000000;
}
</style>