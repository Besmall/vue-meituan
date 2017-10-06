<template>
  <div class="home">
      <daohang></daohang>
      <lunbo></lunbo>
      <lanmu></lanmu>
      <ad></ad>
      <shop></shop>
      <div class="mb56"></div> 
  </div>
</template>

<script>

import Daohang from './Daohang';
import Lunbo from './Lunbo';
import Lanmu from './Lanmu';
import Ad from './Ad';
import Shop from './Shop';


export default {

  components:{
    Daohang,
    Lunbo,
    Lanmu,
    Ad,
    Shop
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mb56{
  margin-bottom:.56rem;
  
}
.home{
  height:640px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #d9d9d9;
}

</style>
