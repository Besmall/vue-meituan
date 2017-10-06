<template>
<div class="lanmu">
     <mu-flexbox :gutter="20">
        <mu-flexbox-item class="flex-demo1">
        <!-- <router-link to="/meishi"></router-link> -->
          <img src="/static/fenlei/meishi.jpg" class="fenleiimg1"/>
          美食
        </mu-flexbox-item>
        
        <mu-flexbox-item class="flex-demo1">
          <img src="/static/fenlei/maoyan.jpg" class="fenleiimg1"/>
        电影
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo1">
          <img src="/static/fenlei/jiudian.jpg" class="fenleiimg1"/>
        酒店
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo1">
          <img src="/static/fenlei/xiuxian.jpg" class="fenleiimg1"/>
        休闲
        </mu-flexbox-item>
  
        <mu-flexbox-item class="flex-demo1">
          <img src="/static/fenlei/waimai.jpg" class="fenleiimg1"/>
        外卖
        </mu-flexbox-item>
    </mu-flexbox>
      <mu-divider/>
      
      <mu-flexbox class="mt8"  :gutter="20">
          <mu-flexbox-item class="flex-demo">
            <img src="/static/fenlei/zhoubian.jpg" class="fenleiimg"/>
          周边游
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <img src="/static/fenlei/jipiao.jpg" class="fenleiimg"/>
          机票
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <img src="/static/fenlei/liren.jpg" class="fenleiimg"/>
          丽人
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <img src="/static/fenlei/ktv.jpg" class="fenleiimg"/>
          KTV
          </mu-flexbox-item>
          <mu-flexbox-item class="flex-demo">
            <img src="/static/fenlei/kuaican.jpg" class="fenleiimg"/>
          美团
          </mu-flexbox-item>
    </mu-flexbox>
      <mu-flexbox class="mt8"  :gutter="20">
        <mu-flexbox-item class="flex-demo">
          <img src="/static/fenlei/liren.jpg" class="fenleiimg"/>
        景点
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <img src="/static/fenlei/ktv.jpg" class="fenleiimg"/>
        结婚
        </mu-flexbox-item>
        <mu-flexbox-item class="flex-demo">
          <img src="/static/fenlei/jipiao.jpg" class="fenleiimg"/>
        母婴
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo">
               <img src="/static/fenlei/kuaican.jpg" class="fenleiimg"/>
        生活
        </mu-flexbox-item>
             <mu-flexbox-item class="flex-demo">
               <img src="/static/fenlei/zhoubian.jpg" class="fenleiimg"/>
        全部分类
        </mu-flexbox-item>
    </mu-flexbox>

</div>
</template>
<script>
export default{
    
}
</script>
<style scoped>
.lanmu{
  padding:0px 0.16rem;
}
.mt8 {
  margin-top: 0.08rem;
}
.flex-demo1 {
  height: 1rem; 
  text-align: center;

}
.flex-demo {
  height: 0.9rem;
  text-align: center;
}
.fenleiimg1{
  width:0.5rem;
  height:0.5rem;
}
.fenleiimg{
  width:0.5rem;
  height:0.5rem;
}
</style>
