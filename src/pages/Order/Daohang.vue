<template>
<div class="nav">
    <mu-appbar title="订单" :zDepth="0"> </mu-appbar>
</div>


</template>
<script>
export default{
    
}
</script>
<style scoped>
.nav{
    position:fixed;
    left:0;
    top:0;
    right:0;
    z-index:9999;
}
.mu-appbar{
    height:0.56rem;
}
</style>
