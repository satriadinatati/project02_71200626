<template>
    <div class="home">
        <div class="md">
            <input type="text" v-model="username" placeholder="username anda...">
            <button class="btn" @click="masuk()" >MASUK</button>
        </div>
    </div>
</template>
  
<script>
  // @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'LoginView',
    components: {
      
    },
    data() {
        return {
            username: ''
        }
    },
    methods: {
        masuk(){
            if (this.username=='') {
                alert('Username tidak boleh kosong!');
            }else{
                this.$router.push('/chat');
                this.$store.commit('setUsername', this.username);
            }
        }
    },
  }
</script>
<style scoped>
.home{
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
}
input{
    margin: auto;
    font-size: 30px;
    height: 70px;
    width: fit-content;
    border-radius: 10px;
}
.md{
    margin: auto;
}
.btn{
    margin-top: 20px;
    background-color: blueviolet;
    width: 330px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    align-items: center;
    cursor: pointer;
    display: block;
}
</style>
  