<template>
<div class="con">
 
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

  .con{
    margin-bottom:0.56rem;
  }
</style>
