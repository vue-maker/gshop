import Vue from "vue";
import App from './App'
import VueLazyload from 'vue-lazyload'
import VueRouter from "vue-router";
import router from './router'
import store from './store'
import Button from 'mint-ui'
import './mock/mockServer'//加载mockServer
import loading from './common/image/loading.gif'
import './filters' //加载过滤器
Vue.use(VueLazyload, {//内部自定义了一个指令lazy用v-lazy
    loading
})
Vue.use(VueRouter)
Vue.use(Button)//<mt-button>
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})