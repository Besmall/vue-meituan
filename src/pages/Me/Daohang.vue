<template>
<div class="nav">
    <mu-appbar title="" :zDepth="0">
       <mu-icon-button icon="accessibility" slot="right"/>
       <mu-icon-button icon="settings" slot="right"/>
       <mu-icon-button icon="notifications_none" slot="right"/>
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
    z-index:9999;
}
.mu-appbar{
    height:0.56rem;
}
</style>
