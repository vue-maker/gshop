<template>
  <section class="msite">
    <!--首页头部-->
    <header-top :title="address.name">
      <router-link class="header_search" slot="left" to="/search">
        <i class="iconfont icon-sousuo"></i>
      </router-link>
      <router-link
        class="header_login"
        slot="right"
        :to="userInfo._id ? '/userinfo' : '/login'"
      >
        <span class="header_login_text" v-if="!userInfo._id"> 登录|注册 </span>
        <span class="header_login_text" v-else>
          <i class="iconfont icon-yonghu"></i>
        </span>
      </router-link>
    </header-top>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(categorys, index) in categorysArr"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(category, index) in categorys"
              :key="index"
            >
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url" />
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="back" v-else />
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-caidan"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </section>
</template>
<script>
//引入映射函数
import { mapState } from "vuex";
//引入swiper滑动
import Swiper from "swiper";
//引入滑动
import BScroll from "@better-scroll/core";

import "swiper/dist/css/swiper.min.css";
//引入其他组件
import HeaderTop from "../../components/HeaderTop/HeaderTop .vue";
import ShopList from "../../components/ShopList/ShopList.vue";

export default {
  name: "Msite",
  components: {
    HeaderTop,
    ShopList,
  },
  data() {
    return {
      baseImageUrl: "https://fuss10.elemecdn.com",
    };
  },
  mounted() {
    //更新数据
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShop");
  },
  computed: {
    //读取操作
    ...mapState(["address", "categorys", "userInfo"]),
    //通过categorys一位数组生成一个二维数组（小数组元素最大个数为8）
    categorysArr() {
      const { categorys } = this;
      //准备一个二维数组
      const arr = [];
      let minArr = [];
      //遍历categorys
      categorys.forEach((c) => {
        //首先判断小数组是否满了
        if (minArr.length === 8) {
          minArr = [];
        }
        //然后判断小数组是否为0，如果为0放入大数组，进行数据关联
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        //将当前分类放在小数组中
        minArr.push(c);
      });
      return arr;
    },
  },
  watch: {
    categorys(value) {
      //#region
      // setTimeout(() => {
      //   //创建一个swiper实例对象实现轮播
      //   new Swiper(".swiper-container", {
      //     //direction: "vertical", // 垂直切换选项
      //     loop: true, // 循环模式选项
      //     // 如果需要分页器
      //     pagination: {
      //       el: ".swiper-pagination",
      //     },
      //   });
      // }, 500);
      //#endregion
      this.$nextTick(function () {
        new Swiper(".swiper-container", {
          pagination: {
            el: ".swiper-pagination",
          },
          loop: true,
        });
      });
    },
  },
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.msite { // 首页
  width: 100%;

  .msite_nav {
    bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;

    .swiper-container {
      width: 100%;
      height: 100%;

      .swiper-wrapper {
        width: 100%;
        height: 100%;

        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;

          .link_to_food {
            width: 25%;

            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;

              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }

            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }

      .swiper-pagination {
        >span.swiper-pagination-bullet-active {
          background: #02a774;
        }
      }
    }
  }

  .msite_shop_list {
    top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;

    .shop_header {
      padding: 10px 10px 0;
      display: flex;

      .icon-caidan {
        margin: 2px 5px 0px 5px;
        color: #999;
      }

      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
