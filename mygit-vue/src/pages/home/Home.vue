<template>
<div>
    <home-header></home-header>
    <home-content :list='lists'></home-content>
</div>
</template>

<script>
import HomeHeader from './component/Header'
import HomeContent from './component/Content'
import axios from 'axios'
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
        }
    },
    mounted () {
        this.getHomeInfo()
    },
}
</script>

<style scoped>

</style>
