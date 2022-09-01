<template>
   <header>
        <div class="l-content">
            <el-button @click="hadrlemenu" plain icon="el-icon-menu" size="mini"></el-button>
            <!-- <h3 style="color: #fff">首页</h3> -->
            <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">首页</el-breadcrumb-item> 
            </el-breadcrumb>
         </div>
         <div class="r-content">
            <el-dropdown trigger="click" szie="mini">
                <span>  
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>                   
                </el-dropdown-menu>

            </el-dropdown>

         </div>
   </header>
    
</template>

<script>

import {mapState} from 'vuex'

    export default {
        name: 'homeHeader',
        data() {
            return {
                userImg: require('../assets/img/tx.jpeg')
            }
        },
        methods: {
            hadrlemenu() {
                this.$store.commit('Collapsemenu')
            }
        },
        computed: {
            ...mapState({
                tags: state => state.tabsList
            })
        }
         
        
    }
</script>

<style lang="less" scoped>
header {
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    .l-content {
        display: flex;
        align-items: center;
        .el-button {
            margin-right: 15px;

        }
    }
    .r-content {
        .user {
            width: 45px;
            height: 45px;
            border-radius: 50%;
        }
    }
}


</style>