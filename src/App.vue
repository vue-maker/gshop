<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
//引入组件
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
//引入接口
export default {
  name: "App",
  components: {
    FooterGuide,
  },
  mounted() {
    //在这里写为了演示vuex的全局性
		//this.getAddress()

    this.getUserInfo()
  },
	// methods: {
  //   //跟新操作(header)
	// 	...mapActions(['getAddress'])
	// }
  methods:{
    ...mapActions(['getUserInfo'])
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>
