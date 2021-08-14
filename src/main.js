import Vue from "vue";
import App from './App' 

import VueRouter from "vue-router";
import router from './router'

Vue.use(VueRouter)
new Vue({
    el: '#app',
    render: h=> h(App),
    router
})