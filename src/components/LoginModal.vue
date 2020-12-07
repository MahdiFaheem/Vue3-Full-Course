<template>
<div v-if="isLoginOpen">
    <section @click="close" class="z-20 h-screen w-screen bg-gray-500 fixed top-0 opacity-50"></section>
  <div class="absolute inset-0">
      <div class="flex h-full">
          <div class="z-30 m-auto bg-white p-2 rounded shadow">
              <div class="p-2 border">
                  <h1 class="text-2xl text-center">Login</h1>
                  <GoogleLogin @close-login-google="close"/>
                  <p class="my-3 text-center">Or</p>
              <form class="p-2 my-2" @submit.prevent="submit">
                  <div class="my-4">
                       <label for="">Email or Username</label>
                       <input ref="emailRef" v-model="email" class="rounded shadow p-2 w-full" placeholder="Enter your Email or Username"/>
                  </div>
                 <div class="my-4">
                       <label for="">Password</label>
                       <input  v-model="password" class="rounded shadow p-2 w-full" type="password" placeholder="Enter your Passwprd"/>
                  </div>
                   <div class="my-4">
                       
                       <button type="submit" class="p-2 rounded shadow-md w-full bg-gradient-to-r from-red-800 to-pink-800 text-white">
                          <span v-if="!isLoading">Login</span> 
                          <span v-else>⌛</span> 
                           </button>
                  </div>
              </form>
          </div>
        </div>
              

      </div>
  </div>
</div>
  
</template>

<script>
import firebase from "../utilities/firebase";
import GoogleLogin from "./Login/GoogleLogin";
export default {
    components:{GoogleLogin},
    computed:{
        isLoginOpen(){
           return this.$store.state.isLoginOpen;
        },
    },
    data(){
        return{
            /*form:{
                email:'',
                password:"",
            }*/
            email:'user1@abc.com',
            password:"userabc",
            isLoading:false,
        };
    },

    methods:{
        submit(){
            this.isLoading=true;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                
                this.email="";
                this.password="";
                this.isLoading=false;
                this.close();
            })
            .catch((e) => {
                console.log(e);
                this.isLoading=false;
            });

        },
        
        
        close(){
             this.$store.commit('setLoginModal',false);
        }
    },
    mounted(){
      //  this.$refs.emailRef.focus();
    }
}
</script>

<style>

</style>