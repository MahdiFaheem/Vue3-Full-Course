<template>
<nav class="w-full bg-gradient-to-r bg-blue-800 to-blue-600 text-white px-4 py-2">
    <router-link  v-for="item in list" :key="item.to" class="mx-5" :to="item.to" >{{item.title}}</router-link>
  <!-- <button v-if="!isLoggedIn" class="mx-2" @click="$emit('open-login-modal')">Login</button>-->
    <button v-if="isLoggedIn" class="mx-2" @click="logout">Logout</button>
    <button v-else class="mx-2" @click="openLogin">Login</button>
  <!--  <button v-else class="mx-2" @click="$emit('open-login-modal')">Login</button>-->
  

</nav>
</template>

<script> 
import firebase from "../utilities/firebase";

export default {
    //props:{isLoggedIn: {type:Boolean, required:true}},
    data(){
        return{
            list:[
                {title:'DC Heros',to:'/dc-heros'},
                {title:'Calendar',to:'/calendar'},
                {title:'Markdown',to:'/markdown'},
                {title: 'Slider', to:'/slider-carousel'},
                {title: 'Calculator', to:'/calculator'},
                {title: 'Modal', to:'/reusable-modal'},
                {title: 'Chats', to:'/chats'},
                {title: 'User Crud', to:'/user-crud'},
                {title: 'Tensorflow', to:'/tensorflow'},
            ],
            
        };
    },
    computed:{
        isLoggedIn(){
            return this.$store.state.isLoggedIn;
        }
    },
    methods:{
        logout(){
            firebase.auth().signOut();//.then((res)=> {
                // Sign-out successful.
                //}).catch((e) =>{
                // An error happened.
                //});
        },
        openLogin(){
            this.$store.commit('setLoginModal',true);
        }
    }
}
</script>

<style>

</style>