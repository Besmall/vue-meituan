<template>
<div class="con">
    <mu-appbar title="">
        <mu-flat-button  slot="left" label="保定" class="demo-flat-button" labelPosition="before" icon="expand_more" secondary/>
        <mu-text-field fullWidth icon="search" class="appbar-search-field"  hintText="自助火锅"/>
    
         <mu-flat-button  slot="right" class="demo-flat-button" labelPosition="before" icon="crop_free" secondary/>
    </mu-appbar>
</div>


</template>
<script>
export default{
    
}
</script>
<style scoped>
.con{
    position: fixed;
    left:0;
    right:0;
    top:0;
    z-index:22
}
.mu-appbar{
    height:0.56rem;
}
</style>
