<template>
    <div class="container">
        <div class="side">
            <div class="atas">
                <h1>Pesan Terakhir</h1>
                <h2 @click="exit()" >Exit</h2>
            </div>
            <div class="list">

            </div>
            <div class="to">
                <h2>Kirim pesan ke: </h2>
                <input @keydown="getChat()" type="text" v-model="to" placeholder="username teman...">
            </div>
        </div>
        <div class="msg">
            <div class="head">
                <h2>@{{to}}</h2>
            </div>
            <div class="box-pesan">
                <ul>
                    <PesanKiri v-for="c in chats" :key="c.id" :msg="c.msg" :dari="c.from" :untuk="c.to"/>
                </ul>
            </div>
            <div class="msg-box">
                <input type="text" placeholder="ketik pesan..." v-model="msg">
                <button class="btn" @click="send()" >Kirim</button>
            </div>
        </div>
    </div>
</template>
  
<script>
/* eslint-disable */
  // @ is an alias to /src
//   import HelloWorld from '@/components/HelloWorld.vue'
import PesanKiri from '@/components/PesanKiri.vue';
import PesanKanan from '@/components/PesanKanan.vue';

import { getFirestore, collection, addDoc, onSnapshot, getDocs, query, where } from "firebase/firestore";
import firebase from '@/firebaseInit';

const db = getFirestore(firebase);
  
  export default {
    name: 'ChatView',
    components: {
    PesanKiri, PesanKanan
},
    data() {
        return {
            username: this.$store.state.username,
            to: '',
            msg: '',
            chats: []
        }
    },
  
    async created() {
        const q = query(collection(db, "messages"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            this.chats = [];
            querySnapshot.forEach((doc) => {
                if (doc.data().from == this.$store.state.username || doc.data().to == this.to) {
                    var chat = doc.data();
                    chat['id'] = doc.id;
                    this.chats.push(chat);   
                }
            });
        });

    },
    methods: {
        async getChat(){
            this.chats=[];
            var query = await getDocs(collection(db, "messages"));
            query.forEach((doc)=>{
                if (doc.data().from == this.$store.state.username && doc.data().to == this.to) {
                    var chat = doc.data();
                    chat['id'] = doc.id;
                    this.chats.push(chat);   
                }
            });
        },
        async send(){
            if(this.to == ''){
                alert('to kosong')
            }else{
                const docRef = await addDoc(collection(db, "messages"), {
                    from: this.username,
                    to: this.to,
                    msg: this.msg
                });
                console.log("Document written with ID: ", docRef.id);
                this.getChat();
                console.log(this.chats);
            }
        },
        exit(){
            this.$store.commit('empty');
            this.$router.push('/');
        }
    },
  }
</script>
<style>
.to button{
    display: none;
}
.atas h2{
    cursor: pointer;
}
    .container{
        display: flex;
        justify-content: flex-start;
        height: 100%;
        box-sizing: border-box !important;
    }
    .side{
        box-sizing: border-box !important;
        width: 30%;
        background-color: blueviolet;
        color: white;
        padding: 40px;
    }
    .atas{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .msg{
        box-sizing: border-box !important;
        width: 70%;
    }
    .to{
        position: fixed;
        bottom: 30px;
        left: 10xp;
        text-align: left;
    }
    .to input{
        font-size: 20px;
        height: 40px;
        padding: 5px 20px;
        border-radius: 10px;
        width: 300px;
    }
    .msg .head{
        text-align: left;
        box-sizing: border-box;
        padding: 10px 40px;
        background-color: rgb(177, 111, 238);
        color: white;
        width: 100%;
    }
    .kiri{
        text-align: left;
        padding: 20px;
        list-style: none;
    }
    .kanan{
        text-align: right;
        list-style: none;
        padding: 30px;
    }
    .kanan span, .kiri span{
        background-color: rgb(177, 111, 238);
        padding: 20px;
        color: white;
        border-radius: 10px;
    }
    .box-pesan{
        padding: 20px;
    }
    .msg-box{
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 30px;
        margin-left: 20px;
        right: 20px;
        width: 60%;
    }
    .msg-box input{
        font-size: 20px;
        height: 40px;
        padding: 5px 20px;
        border-radius: 10px;
        width: 100%;
        margin-right: 20px;
    }
    .msg-box button{
        background-color: blue;
        color: white;
        padding: 10px 20px;
        font-size: 24px;
        width: 200px;
        font-weight: bold;
        border-radius: 10px;
    }
</style>
  