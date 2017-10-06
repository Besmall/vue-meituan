<template>
<div>
<div class="loginbar">
    <div class="head">
     <mu-avatar slot="left" src="/static/head/uicon.jpg"/>
       <a>请点击此登录</a>
    </div>
      
</div>
 <mu-flexbox :gutter="0">
    <mu-flexbox-item class="flex-demo">
     <mu-icon-button icon="star_rate"/>
     
     <div>
      收藏
     </div>

    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <mu-icon-button icon="announcement"/><br/>评价
    </mu-flexbox-item>
    <mu-flexbox-item class="flex-demo">
      <mu-icon-button icon="assignment"/><br/>订单
    </mu-flexbox-item>
  </mu-flexbox>
</div>

</template>

<script>
export default{
    
}
</script>

<style lang="less" scoped>
.loginbar{
    height:1rem;
    background-color:#009688;
  



}
.head{
    margin-left:.2rem;
    padding-top:.3rem;

    display:flex;
    /*justify-content:center;*/
    align-items:center;


    a{
        margin-left:.2rem;
        color:#fff;
    }

}


.flex-demo {
  height: 1rem;

  text-align: center;
 
  border-bottom:0.1rem solid #ccc;
}
</style>