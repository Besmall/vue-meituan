<template>
<div class="lun">
  <van-swipe auto-play class="lunbo">
    <van-swipe-item v-for="(image,index) in images" :key="index" >
        <img :src="'/static/shoplog/'+image.img">
    </van-swipe-item>
  </van-swipe-item>
</van-swipe>
</div>
</template>
<script>
import Vue from 'vue';
import { Swipe,SwipeItem} from 'vant';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

export default{
    data(){
        return{
            images:[
                 {img:"1.jpg"},
                 {img:"2.jpg"}
            ]
        }
    }
}
</script>
<style scoped>
    .lun{
        margin-top:0.56rem;
    }
    .lunbo{
        height:1.2rem;
    }

</style>
