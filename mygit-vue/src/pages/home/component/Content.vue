<template>
<div class='content'>
    <div class="wrapper">
        <div class="left">
            <ul>
                <li 
                    v-for="(item, index) in  list" 
                    :key="index"
                    @click="handleClick(index)">
                 {{item.name}} 
                 </li>
            </ul>
        </div>
        <div class="right">
            <input type="text" v-model="inputValue" >
            <button @click="btnClick" >提交</button>
            <ul>
                <li v-for="item of rLists" :key='item' @click="deleteClick">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
name: 'HomeContent',
props:{
    list:Array
},
data () {
    return {
        rLists:[],
     /*     rLists:[
            {
                name:'list1',
                id:'1'
            },
                {
                name:'list2',
                id:'2'
            },
                {
                name:'list3',
                id:'3'
            },
        ], */
        inputValue: ''
    }
},
methods:{
    handleClick: function(index){
        // alert(this.index)
    },
    btnClick:function(){
        this.rLists.push(this.inputValue)
        this.inputValue = ''
    },
    deleteClick:function(index){
        // alert(index)
    }
}
}
</script>
<style scoped>
.wrapper{
    overflow: auto;/*清除浮动*/
    /* border:1px solid red; */
}
.wrapper .left{
    float: left;
    width: 200px;
    background:yellow;
}
.wrapper .right{
    background: palevioletred;
    overflow: auto;
}
</style>