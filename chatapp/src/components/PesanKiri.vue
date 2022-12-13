<template>
    <li v-if="dari == this.$store.state.username" class="kanan" >
        <span>{{msg}}</span>
    </li>
    <li v-else class="kiri" >
        <span>{{msg}}</span>
    </li>
  </template>
  
  <script>
  export default {
    name: 'PesanKiri',
    props: {
        msg: String,
      dari: String,
      untuk: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    
  </style>
  