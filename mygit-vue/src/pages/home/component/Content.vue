<template>
<div class='content'>
    <div class="wrapper">
        <div class="left">
            <ul>
                <li 
                    v-for="(item, index) in  list" 
                    :key="index"
                    @click="handleClick">
                 {{item.name}} 
                 </li>
            </ul>
        </div>
        <div class="right">right</div>
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
        //  lists:[
        //         {
        //             name:'list1',
        //             id:'1'
        //         },
        //          {
        //             name:'list2',
        //             id:'2'
        //         },
        //          {
        //             name:'list3',
        //             id:'3'
        //         },
        //     ]
    }
},
methods:{
    handleClick: function(){

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