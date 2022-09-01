<template>
   <header>
        <div class="l-content">
            <!-- 点击折叠按钮 -->
            <el-button @click="hadrlemenu" plain icon="el-icon-menu" size="mini"></el-button>
            <!-- <h3 style="color: #fff">首页</h3> -->
            <!-- 面包屑动态tanber展示 根据当前路劲快速返回之前任意页面 -->
            <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>             
            </el-breadcrumb>
         </div>

         <div class="r-content">
            <!-- 下拉菜单 可以实现退出登录 以及切换账号功能 -->
            <el-dropdown trigger="click" szie="mini">
                <span>  
                    <img class="user" :src="userImg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item @click.native="layout">退出</el-dropdown-item> 
                    <!-- 组件添加click事件 要添加.native                   -->
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
            // 提交给tab 里面调用collapsemenu方法来改变 折叠
            hadrlemenu() {
                this.$store.commit('Collapsemenu')
            },
            // 点击退出 会清除token数据 放回到login页面
            layout() {
                this.$store.commit('clearToken')
                this.$store.commit('clearMenu')
                this.$router.push('/login')
            }
        },
        //根据结构 拿到tab 下面tablist的数据进行展示
        computed: {
            ...mapState({
                tags: state => state.tab.tabsList
            })
          
            
        },
        
        
       
         
        
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
        .el-breadcrumb ::v-deep .el-breadcrumb__inner {
        color: #fff !important;
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