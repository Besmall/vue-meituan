<template>
<div class="con">
    <div class="tabbox">
      <div class="box">
        <mt-button class="anniu" :type="id==1?'danger':'default'" @click="select(1)">热门</mt-button>
        <mt-button class="anniu" :type="id==2?'danger':'default'" @click="select(2)">商务出行</mt-button>
        <mt-button class="anniu" :type="id==3?'danger':'default'" @click="select(3)">公寓民宿</mt-button>
        <mt-button class="anniu" :type="id==4?'danger':'default'" @click="select(4)">情侣专享</mt-button>
      </div>
      <div class="box">
        <mt-button class="anniu" :type="id==5?'danger':'default'" @click="select(5)">品牌连锁</mt-button>
        <mt-button class="anniu" :type="id==6?'danger':'default'" @click="select(6)">客栈青旅</mt-button>
        <mt-button class="anniu" :type="id==7?'danger':'default'" @click="select(7)">高星特惠</mt-button>
      </div>
    </div>
     <meishi type="hot"></meishi>
</div>
</template>

<script>

import Vue from 'vue'
import { Button } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Button.name, Button);
import Meishi from './Meishi';


export default {
  data(){
    return {
      id:1
    };
  },
  methods: {
    select(id){
      this.id=id;
    }

  },
  components:{
    Meishi
  }
}
</script>

<style lang="scss" scoped>
.tabbox{
  background:#eee;
}
  .box{
    height:0.4rem;
  }
  .anniu{
    height:0.3rem;
    width:24%;
    margin-top:0.05rem;
    border-radius: 0.2rem;
    font-size: 0.14rem
  }
  .con{
    margin-bottom:0.56rem;
  }
</style>
