<template>
   <swiper v-if="banners.length">
       <swiper-item v-for="(item,key) in banners" :key="key">
            <a :href="item.link">
                <img :src="item.image">
            </a>
       </swiper-item>
   </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name:'HomeSwiper',
     props:{
	   banners: {
		 type: Array,
         default: []
       }
    },
    components:{
        Swiper,
        SwiperItem
    }
  
}
</script>

<style scoped>

</style>