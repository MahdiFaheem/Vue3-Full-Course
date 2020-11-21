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
    <input class="border rounded" v-model.trim="newHero" placeholder="Type hero name here.">
    <button class="border rounded bg-gradient-to-r from-red-700 to-pink-500 text-white" type="submit">Add Hero</button>
    
  <!-- <button :disabled="isDisabled" @click="newHero='Wonder Women'">Add Hero</button>-->
    </form>
    <button @click="setFullName">Set Full Name</button>
    <small>  Total heros in the list is {{herosCount}} </small>
  </div>
</template>

<script>
export default {
    data(){
    return{ 
      
      attribute: "value",
      isDisabled:false,
      newHero: "",
      dcHeros: [
        {name: "SuperGirl"},
        {name: "Flash"},
        {name: "BatMan"},
        {name: "Arrow"},
        {name: "SuperMan"},
      ],
      fName: "A",
      lName: "B",
      
    };
  },

  methods:{
    addHero(){
      if(this.newHero!=="")
      {
        this.dcHeros.unshift({name: this.newHero});
        this.newHero='';
      }
    },

    remove(index){
      this.dcHeros=this.dcHeros.filter((hero,i) =>(i!=index));
    },

    setFullName(){
      this.fullName=`X Y`
    }
  },

  computed:{
    herosCount(){
      return this.dcHeros.length+" heros";
    },

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
 
}


</script>

<style>

</style>