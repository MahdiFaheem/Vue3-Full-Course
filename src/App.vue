<template>
<!--<AppHeader :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen=true"/>-->
<!--<AppHeader  @open-login-modal="isLoginOpen=true"/>-->
<AppHeader/>
<div class="w-full flex">
  <router-view></router-view>
  
  <!--<DcHeros/>
  <Calender/>-->
</div>
<teleport to="body">
 <!-- <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false"/>-->
 <LoginModal />
</teleport>

</template>

<script>
import AppHeader from "./components/AppHeader";
import LoginModal from "./components/LoginModal";
import firebase from "./utilities/firebase";
//import DcHeros from "./components/DcHeros";
//import Calender from "./components/Calendar";
export default {
  components: {AppHeader, LoginModal},
  data(){
    return{
      //isLoginOpen:false,
     // isLoggedIn:false,
     // authUser:'',
    }
  },
  mounted(){
    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        // User is signed in.
        this.$store.commit('setIsLoggedIn',true);
        this.$store.commit('setAuthUser', user);
        //this.isLoggedIn=true;
        //this.authUser=user;
      } else {
        // No user is signed in.
         this.$store.commit('setIsLoggedIn',false);
        this.$store.commit('setAuthUser', {});
        console.log("No user");
      }
    });
  }
}
</script>

<style>

</style>