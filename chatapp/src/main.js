import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state(){
        return {
           username: ''
        }
    },
    mutations: {
        setUsername(state, username){
            state.username = username;
        },
        empty(state){
            state.username = ''
        }
    },
    actions: {
        add(context, nama){
            context.commit("setUsername", nama);
        },
    }
})

var app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');