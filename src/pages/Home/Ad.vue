<template>
<div>
<template>
<div class="demo-grid">
   <mu-row gutter>
    <mu-col class="borderright" width="33" >
    爆笑电影
    <img src="/static/fenlei/dianying.jpg" class="fenleiimg"/>
    </mu-col>
       <mu-col class="borderright" width="33">
    亲子摄影
    <img src="/static/fenlei/qinzi.jpg" class="fenleiimg"/>
    </mu-col>
      <mu-col width="33">
    十一特价
    <img src="/static/fenlei/guoqing.jpg" class="fenleiimg"/>
    </mu-col>
   
  </mu-row>
   <mu-divider/>
  <mu-row gutter>
    <mu-col  class="borderright" width="25">
    国庆玩嗨
    <img src="/static/fenlei/hongbao.jpg" class="fenleiimg1"/>
    </mu-col>
      <mu-col  class="borderright" width="25">
    免费专区
    <img src="/static/fenlei/mianfei.jpg" class="fenleiimg1"/>
    </mu-col >
      <mu-col  class="borderright" width="25">
    畅想游乐
    <img src="/static/fenlei/youle.jpg" class="fenleiimg1"/>
    </mu-col>
      <mu-col width="25">
    优惠精选
    <img src="/static/fenlei/youhui.jpg" class="fenleiimg1"/>
    </mu-col>
   
  </mu-row>



</div>



</template>

</div>
</template>
<script>
export default{
    
}
</script>

<style lang="css" scoped>
.demo-grid{
  border-bottom:0.1rem solid #eee;
  border-top:0.1rem solid #eee;
}
.demo-grid div[class*="col-"]{
    height:1.5rem;
}
.demo-grid div.borderright[class*="col-"] {
  background: #fff;
  text-align: center;
  color: #000;
  border-right: 1px solid #ddd;
}
.fenleiimg{
  width:0.8rem;
  height:1rem;
  margin-top: 0.2rem;
}
.fenleiimg1{
  width:0.5rem;
  height:1rem;
  margin-top: 0.2rem;
}
</style>