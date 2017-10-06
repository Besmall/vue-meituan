<template>
  <div>
      <daohang></daohang>
      <div class="middle">
        <van-pull-refresh v-model="isLoading">
          <banner></banner>
          <money></money>
          <other></other>

        </van-pull-refresh>
    </div>
</div>
</template>

<script>
import Vue from 'vue';
import Daohang from './Daohang';
import Banner from './Banner';
import Money from './Money';
import Other from './Other';
import { PullRefresh } from 'vant';

Vue.component(PullRefresh.name, PullRefresh);

export default {
    data() {
    return {
      isLoading: false
    }
  },

  watch: {
    isLoading() {
      if (this.isLoading) {
        setTimeout(() => {
          this.isLoading = false;
        }, 500);
      }
    }
  },
  components:{
    Daohang,
    Banner,
    Money,
    Other
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.middle{
  padding-top:.55rem;
  padding-bottom:.56rem;
}
</style>
