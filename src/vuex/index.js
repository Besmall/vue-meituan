import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
    state:{
        shop:{
            num:1,
            list:[],
            page:0
        },
        meishi:{
            num:1,
            list:[],
            page:0
        }
    },
    mutations:{
        setshoplist(state,newData){
            state.shop.list=state.shop.list.concat(newData);
        },
        nextpage(state){
            state.shop.page++;
        },
        setmeishilist(state,newData){
            state.meishi.list=state.meishi.list.concat(newData);
        },
        nextmeishipage(state){
            state.meishi.page++;
        }
    }

});