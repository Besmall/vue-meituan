<template>
<div class="nav">
    <mu-appbar title="">
        <mu-flat-button  slot="left" label="保定" class="demo-flat-button" labelPosition="before" icon="expand_more" secondary/>
        <mu-text-field fullWidth icon="search" class="appbar-search-field"  hintText="找附近的吃喝玩乐"/>
    
      
    </mu-appbar>
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
