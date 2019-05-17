<template>
<div>
    <home-header></home-header>
    <home-content :list='lists'></home-content>
    <div>
        <div class="componentsA">
            <P class="titleName">名称：{{newName}}</P>
            <div>
                <!-- 点击修改 为 A  -->
                <button class="btn" @click="modifyAName('AAA')">修改为AAAA</button>
            </div>
            <div class="marTop">
                <router-link to='../detail'>跳转到Detail页面</router-link>
                <!-- <button class="btn" @click="trunToB">跳转到Detail页面</button> -->
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HomeHeader from './component/Header'
import HomeContent from './component/Content'
import axios from 'axios'
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'Home',
    components: {
        HomeHeader,
        HomeContent
    },
    data () {
        return {   
            lists:[]
        }
    },
    methods: {
        getHomeInfo () {
            axios.get('/api/home.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.lists = data.lists
            }
        },
          ...mapActions( // 语法糖
            ['modifyAName'] // 相当于this.$store.dispatch('modifyName'),提交这个方法
        ),
        trunToB () {
            // this.$router.push({path: '/detail/Detail'}) // 路由跳转到Detail
        }
    },
    computed: {
        ...mapGetters(['newName']) // 动态计算属性，相当于this.$store.getters.resturantName
    },
    mounted () {
        this.getHomeInfo()
    },
}
</script>

<style scoped>
  .title,.titleName{
    color: blue;
    font-size: 20px;
  }
  .btn{
    width: 160px;
    height: 40px;
    background-color: blue;
    border: none;
    outline: none;
    color: #ffffff;
    border-radius: 4px;
  }
  .marTop{
    margin-top: 20px;
  }
</style>
