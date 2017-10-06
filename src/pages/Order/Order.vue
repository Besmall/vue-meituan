<template>
  <div class="hello">
       <daohang></daohang>
       <div class="middle">
        <div  class="lmiddle">
                <mu-avatar src="/static/head/uicon.jpg"  :size="100"/> 
                <br/>
                登陆后可查看订单收藏记录
                <br/>
                <mu-raised-button label="登录" class="demo-raised-button"/>
              
      </div>
        
       </div>
  </div>
</template>

<script>
import Daohang from './Daohang';

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
   components:{
    Daohang
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.middle{
    position:absolute;
    left:0px;
    right:0px;
    bottom:0px;
    top:0px;
      display:flex;
    justify-content:center;
    align-items:center;
}
.lmiddle{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
}
</style>
