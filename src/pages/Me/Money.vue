<template>
<div>
<van-cell-group  id="qianbao">
  <van-cell  title="钱包"  is-link>
        <template slot="icon">
              <van-icon name="card" />
         </template>
        
  </van-cell>
  <van-cell  title="余额"  is-link>
  
  
    <template slot="icon">
              <van-icon name="value-card" />
         </template>
</van-cell>
  <van-cell  icon="peer-pay" title="抵用券"  is-link>
    <template slot="icon">
              <van-icon name="peer-pay" />
         </template>
  
  </van-cell>
  <van-cell  icon="credit-pay" title="卡包" is-link url="/#/home">
  
    <template slot="icon">
              <van-icon name="credit-pay" />
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
#qianbao i{
    color:orange;
}
</style>