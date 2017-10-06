<template>
<div class="demo-infinite-container">
  <div
    v-waterfall-lower="loadMore"
    waterfall-disabled="isWaterfallDisabled"
    waterfall-offset="400"
  >

        <van-card v-for="(item,index) in list" :key="index">
            <div slot="title">
                 <strong>{{item.title}}</strong>
                <div style="float:right; width:0.6rem;text-align:right;"><500m</div>
            
            </div>
            <div slot="desc">
                [万博广场]快来呀！！！
                <br/>
                <span style="color:green;font-weight:bold;">￥59</span> <mu-badge content="劲爆" secondary slot="after"/>
          
                 <div style="float:right; width:0.6rem;text-align:right;">已售9127</div>
            </div>
         <div slot="thumb">
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

import {getShopList} from '@/api/shop'

export default {
  data () {
    return {
    
      isWaterfallDisabled:false,
      loading:false,
      nodata:1
    }
  },
  computed:{
    list:function(){
      return this.$store.state.shop.list
    },
    page:function(){
      return this.$store.state.shop.page;
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

    
      this.$store.commit("nextpage");


      let that=this;
      setTimeout(function(){
        getShopList(that.page).then(res=>{
            if(res.data.length==0){
                that.nodata=0;
            }

            that.$store.commit("setshoplist",res.data);

            that.loading = false
          });

      },1000)


    }
  }
}
</script>

<style lang="css">
.xiaoquanquan{
    margin-left:1.2rem;
}
</style>