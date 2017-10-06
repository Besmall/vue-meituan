<template>
<div class="other">
<van-cell-group id="themedefault">
  <van-cell id="themeblue"  title="好友去哪"  is-link>
        <template slot="icon">
              <i class="ic-users tubiao"></i>
         </template>
        
  </van-cell>
  <van-cell id="themeblue"  title="会员中心"  is-link>
  
  
    <template slot="icon">
              <i class="ic-huiyuan tubiao"></i>
         </template>
</van-cell>
  <van-cell id="themered"  icon="peer-pay" title="手机充值"  is-link>
    <template slot="icon">
              <i class="ic-chongzhi tubiao"></i>
         </template>
  
  </van-cell>
  <van-cell  icon="ecard-pay" title="发票助手" is-link>
         <template slot="icon">
              <i class="ic-fapiao tubiao"></i>
         </template>
  </van-cell>
  <!-- icon="credit-pay" -->
    <van-cell class="icon-xingyongka"  title="办信用卡" is-link>
         <template slot="icon">
              <i class="ic-xinyongka tubiao"></i>
         </template>
  </van-cell>
 <!--  icon="credit-pay" -->
    <van-cell class="icon-dianhua"  title="客服中心" is-link>
         <template slot="icon">
              <i class="ic-dianhua tubiao"></i>
         </template>
  </van-cell>
    <van-cell  icon="credit-pay" title="我要合作" is-link>
         <template slot="icon">
              <i class="ic-hezuo tubiao"></i>
         </template>
  </van-cell>
  
    <van-cell   title="关于美团" is-link>
         <template slot="icon">
              <i class="ic-guanyu tubiao"></i>
         </template>
  </van-cell>
</van-cell-group>
</div>

</template>

<script>

import Vue from 'vue';
import { Cell, CellGroup,Icon } from 'vant';

Vue.component(Cell.name, Cell);
Vue.component(CellGroup.name, CellGroup);
Vue.component(Icon.name, Icon);


export default{
    
}
</script>

<style lang="css" scoped>
.other{
    border-top:.1rem  solid #ccc;
}
#themedefault i{
    color:#007979;
}
#themeblue i{
      color:blue;
}
#themered i{
      color:red;
}
.tubiao{
  font-size: 0.14rem;
  margin-right:0.05rem;
}
</style>