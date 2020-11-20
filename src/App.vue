<template>
  <h1>DC Heros</h1>
  <ul>
    <li v-for="(dcHero,index) in dcHeros" :key="dcHero.name">{{++index}}) {{dcHero.name}}</li>
  </ul>
</template>

<script>
export default {
  data(){
    return{ 
     dcHeros: [
        {name: "SuperGirl"},
        {name: "Flash"},
        {name: "BatMan"},
        {name: "Arrow"},
        {name: "SuperMan"},
      ],
    };
  },
 
}
</script>

<style>

</style>