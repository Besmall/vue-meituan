<template>
<div class="demo-infinite-container">
  <div
    v-waterfall-lower="loadMore"
    waterfall-disabled="isWaterfallDisabled"
    waterfall-offset="400"
  >

        <van-card v-for="(item,index) in list" :key="index">
            <div slot="title" id="bt">
                 <strong>{{item.title}}</strong>
                <div style="float:right; width:0.6rem;text-align:right;"><500m</div>
            
            </div>
            <div slot="desc" id="js">
                [万博广场]快来呀！！！
                <br/>
                <span style="color:green;font-weight:bold;">￥59</span> <mu-badge content="劲爆" secondary slot="after"/>
          
                 <div style="float:right; width:0.6rem;text-align:right;">已售9127</div>
            </div>
         <div slot="thumb" class="imgs">
           <img :src="'/static/shoplog/'+item.imgurl"/>
        </div>

        </van-card>



   <van-loading v-if="loading" :type="'gradient-circle'" :color="'black'" class="xiaoquanquan"
    ></van-loading>

    <div v-if="nodata==0">没有数据了！！！</div>

</div>

</div>
</template>

<script>
import Vue from 'vue';

import { Card,Loading } from 'vant';
Vue.component(Card.name, Card);
Vue.component(Loading.name, Loading);

import { Waterfall } from 'vant';

import {getList} from '@/api/meishi'

export default {
  props:["type"],
  data () {
    return {
    
      isWaterfallDisabled:false,
      loading:false,
      nodata:1
    }
  },
  computed:{
    list:function(){
      return this.$store.state.meishi.list
    },
    page:function(){
      return this.$store.state.meishi.page;
    }
  },
  directives: {
    WaterfallLower: Waterfall('lower'),
    WaterfallUpper: Waterfall('upper')
  },
  mounted () {
  },
  methods: {
    loadMore:function () {
      if(this.nodata==0) return false;
      if(this.loading) return false;
      this.loading = true;

    
      this.$store.commit("nextmeishipage");


      let that=this;
      setTimeout(function(){

  

        getList(that.page).then(res=>{
            if(res.data.length==0){
                that.nodata=0;
            }

            that.$store.commit("setmeishilist",res.data);

            that.loading = false
          });

      },1000)


    }
  }
}
</script>

<style lang="css" scoped>
  .imgs{
    width:0.8rem;
    height:0.8rem;
  }
.xiaoquanquan{
    margin-left:2rem;
}
</style>