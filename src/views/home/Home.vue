<template>
  <div id="home">
      <nav-bar class="nav-bar">
        <div slot="center">购物街</div>
      </nav-bar>

      <home-swiper :banners="banners"/>

      <recommends-views :recommends="recommends" />

      <feature-view/>

      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>

      <goods-list :goods="showGoods"/>
      
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/contents/tabControl/TabControl'
import GoodsList from 'components/contents/goods/GoodsList'



import HomeSwiper from './childComps/HomeSwiper'
import RecommendsViews from './childComps/RecommendsViews'
import FeatureView from './childComps/FeatureView'

import {getHomeMultidata,getHomeGoods} from 'network/home'
export default {
  name: 'home',
  data(){
    return {
      banners:[],
      recommends:[],
      goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
      },
      currentType:'pop'
    }
  },
  components:{
    NavBar,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendsViews,
    FeatureView
  },
  created(){
    //轮播图
    this.getHomeMultidata();

    //首页商品请求
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  methods:{
    /**
     * 自定义函数方法
     */
    tabClick(index){
      //console.log(index);
      switch (index) {
        case 0:
            this.currentType = 'pop'
          break;
        case 1:
            this.currentType = 'new'
          break;
        case 2:
            this.currentType = 'sell'
          break;
        default:
          break;
      }
    },


    /**
     * 网络请求方法
     */
    getHomeMultidata(){
     getHomeMultidata().then(res =>{
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        },err =>{
          console.log(err);
        })
    },
    getHomeGoods(type){
      //初始为0  0+1 = 1页码为第一开始
      const page = this.goods[type].page +1
      getHomeGoods(type,page).then(res =>{
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page +=1
      },err =>{
          console.log(err);
      })
    }
  }
}
</script>

<style scoped>
    #home{
      padding-top: 44px;
    }
   .nav-bar{
     background-color: var(--color-tint);
     font-weight: 600;
     color: #fff;

     position: fixed;
     left: 0;
     right: 0;
     top: 0;
     z-index: 9;
   }

   .tab-control{
     position: sticky;
     top: 44px;
     z-index: 9;
   }
</style>
