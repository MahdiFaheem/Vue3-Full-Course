<template>
  <div class="m-auto">
    
    <h1 class="text-center text-2xl">DC Heros {{herosCount}} </h1>
    <!--<h2> {{fullName}} </h2>
    <h2> {{fName}} {{lName}} </h2>-->
    <ul>
      <li class="flex justify-between" v-for="(dcHero,index) in dcHeros" :key="dcHero.name">
        <div>
          {{++index}}) {{dcHero.name}}
          <button @click="remove(index-1)">x</button>
          <br>
          <input/>
        </div>
        <button @click="remove(index-1)">x</button>
      </li>
    </ul>
    <!--<input :[attribute]="newHero">-->
    <form class="mt-10"  @submit.prevent="addHero">
    <input class="border rounded" v-model.trim="newHero" placeholder="Type hero name here." ref="newHeroRef">
    <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
    
  <!-- <button :disabled="isDisabled" @click="newHero='Wonder Women'">Add Hero</button>-->
    </form>
    <button @click="setFullName">Set Full Name</button>
    <small>  Total heros in the list is {{herosCount}} </small>
  </div>
</template>

<script>
import {computed, onMounted, ref} from "vue";
export default {
  setup(){
    const newHeroRef=ref();
    const newHero=ref("");
    const dcHeros= ref([
        {name: "SuperGirl"},
        {name: "Flash"},
        {name: "BatMan"},
        {name: "Arrow"},
        {name: "SuperMan"},
      ]);
      function remove(index){
      dcHeros.value=dcHeros.value.filter((hero,i) =>(i!=index));
    }
    function addHero(){
      if(newHero.value!=="")
      {
        dcHeros.value.unshift({name: newHero.value});
        newHero.value='';
      }
    }
    onMounted(()=>{
      newHeroRef.value.focus();
    });
    const herosCount=computed({
      get: ()=>dcHeros.value.length,
    })
      return {dcHeros,newHero,remove,addHero,newHeroRef,herosCount}
  },
    data(){
    return{ 
      
      attribute: "value",
      isDisabled:false,
      
      fName: "A",
      lName: "B",
      
    };
  },

  methods:{
    

    

    setFullName(){
      this.fullName=`X Y`
    }
  },

  computed:{
    

    fullName:{
      get(){
        return `Full name is ${this.fName} ${this.lName} `
      },
      set(fullName){
        
        const values= fullName.split(' ');
        this.fName=values[0];
        this.lName=values[1];
        alert(fullName);
      }
    }
  },
  mounted(){
    //this.$refs.newHeroRef.focus();
  }
 
}


</script>

<style>

</style>