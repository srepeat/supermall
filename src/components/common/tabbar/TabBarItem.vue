<template>
    <div id="tab-bar-item" @click="itemClick">
        <div class="item-icon" v-if="!isActive">
            <slot name="icon"></slot>
        </div>
        <div class="item-active-icon" v-else>
            <slot name="active-icon"></slot>
        </div>
        <div class="item-text" :style="styleActive">
            <slot name="text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        link:{
            type:String,
            required:true
        },
        colorStyle:{
            type:String,
            default(){
                return 'red'
            }
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.link) !== -1;
        },
        styleActive(){
            return this.isActive ? {color:this.colorStyle}:''
        }
    },
    methods:{
        itemClick(){
            console.log("被点击了");
            this.$router.replace(this.link)
        }
    }
}
</script>

<style scoped>
#tab-bar-item {
    flex: 1;
  }

  .item-icon img, .item-active-icon img {
    width: 24px;
    height: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .item-text {
    font-size: 12px;
    margin-top: 3px;
    color: #333;
  }
</style>