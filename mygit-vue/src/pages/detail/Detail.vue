<template>
<div class='wrapper'>
    <h1>detail</h1>
    <div class="componentsB">
        <P class="titleName">名称：{{newName}}</P>
        <div>
            <!-- 点击修改 为 B  -->
            <button class="btn" @click="modifyBName('BBB')">修改为BBBB</button>
        </div>
        <div class="marTop">
            <button class="btn" @click="trunToA">跳转到Home页面</button>
        </div>
    </div>
</div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'Detail',
    components: {},
    data () {
        return {}
    },
    methods: {
        ...mapActions( // 语法糖
            ['modifyBName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
        ),
        trunToA () {
            this.$router.push(
                {
                    name:'Home',
                    id:'123' 
                }
                // {path: '/home/Home'}
                ) // 路由跳转到Home
        }
    },
    computed: {
        ...mapGetters(['newName']) // 动态计算属性，相当于this.$store.getters.resturantName
    }
}
</script>
<style scoped>
  .title,.titleName{
    color: red;
    font-size: 20px;
  }
  .btn{
    width: 160px;
    height: 40px;
    background-color: red;
    border: none;
    outline: none;
    color: #ffffff;
    border-radius: 4px;
  }
  .marTop{
    margin-top: 20px;
  }
</style>
