<template>
<div class="nav">
    <mu-appbar title="逛一逛" :zDepth="0"> </mu-appbar>
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
    z-index:2;
}
.mu-appbar{
    height:0.56rem;
}
</style>
