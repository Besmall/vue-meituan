<template>
    <div class="hello">
        <daohang></daohang>
        <Tabs @changePage="changePage"  :indexTab="indexTab">
            <Tab label="享美食" hash="0" fontsize="36" tabheight="90" color="red" class="aaa">
                <item1></item1>
            </Tab>
            <Tab label="住酒店" hash="1" fontsize="36" tabheight="90" color="red">
                <item2></item2>
            </Tab>
            <Tab label="爱玩乐" hash="2" fontsize="36" tabheight="90" color="red">
                <item3></item3>
            </Tab>
            <Tab label="全部" hash="3" fontsize="36" tabheight="90" color="red">
                <item4></item4>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import Vue from 'vue';
import Daohang from './Daohang';
import Item1 from './Item1';
import Item2 from './Item2';
import Item3 from './Item3';
import Item4 from './Item4';


import Tabs  from '@/lib/Tab/index.vue';
import Tab  from '@/lib/Tab/tab.vue';



export default {
    data(){
        return {
            indexTab:"0"
        }
    },
    components:{
        Daohang,Tabs,Tab,Item1,Item2,Item3,Item4
    },
    methods: {
        changePage(idx) {
            this.indexTab=idx.toString();
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .wanle,.all{
        height:5.6rem;
    }
    .wanle{
        background:blue;
    }
    .all{
        background:green;
    }
    .tabs-container{
        padding-top:0.95rem;
    }
    .tabs-list{
        position:fixed!important;
        background:#fff;
        top:0.56rem;
        left:0;
        right:0;
        z-index:1
    }
</style>
