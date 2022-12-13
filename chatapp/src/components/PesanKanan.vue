<template>
    <li class="kanan" >
        <span>{{msg}}</span>
    </li>
  </template>
  
  <script>
  export default {
    name: 'PesanKanan',
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
  