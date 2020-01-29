<template>
    <div class="tab-control">
        <div class="tab-control-item"
        :class="{active:currentIndex === index }"
        v-for="(item,index) in titles"  :key="index"
        @click="itemClick(index)">
        <span>{{item}}</span>
        </div>
    </div>
    
</template>

<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            defalut(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index

            //子传父
            this.$emit("tabClick",index)
        }
    }
}
</script>

<style scoped>
    .tab-control{
        display: flex;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
        background-color: #fff;
        z-index: 9;
        
    }

    .tab-control-item span{
        padding-bottom: 5px;
    }

    .tab-control-item{
        flex:1;
    }

    .active{
        color: var(--color-high-text);
        /* border-bottom:1px solid red; */
    }

    .active span {
    border-bottom: 2px solid var(--color-high-text);
  }


</style>