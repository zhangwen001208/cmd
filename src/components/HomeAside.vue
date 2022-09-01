<!-- 侧边导航栏 -->
<template>
<el-menu  default-active="1-4-1" 
    class="el-menu-vertical-demo"
     background-color= '#545c64'
     text-color="#fff"
     active-text-color="#ffd04b"
    @open="handleOpen" @close="handleClose" 
    :collapse="isCollapse">
  <h3>{{isCollapse? '后台': '通用后台管理系统'}}</h3>
  <!-- 先判断有没有子菜单 循环遍历拿到里面的数据-->
  <el-menu-item  @click="clickmenu(item)" v-for="item in nochildren" index="item.path" :key="item.path">
    <i :class="'el-icon-'+item.icon"></i>
    <span slot="title">{{item.label}}</span>
  </el-menu-item>
  <el-submenu v-for="item in haschildren" index="item.path" :key="item.path">
    <template slot="title">
      <i class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </template>
    <!-- 子菜单 拿到menu里面的children -->
    <el-menu-item-group v-for="subitem in item.children" index='subitem.path' :key="subitem.path">
     
      <el-menu-item @click="clickmenu(subitem)" index="1-1">{{subitem.label}}</el-menu-item>
      
    </el-menu-item-group>
   
  </el-submenu>
 
 
</el-menu>
  
</template>

<script>
export default {
    data() {
      return {
        
        menu:[]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    // 动态跳转路由
      clickmenu(item) {
        if(this.$router.path !== item.path) {
            this.$router.push({
            name: item.name,  
        })
        }
       // 实现动态路由跳转 store的方式 来实现
        this.$store.commit('selectMenu', item)
        
        
      }

    },
    computed: {
      //将动态传递过来的menu通过filter函数拿到里面每个数据 返回没有子菜单的数据
      nochildren() {
        return this.asyncMenu.filter(item => !item.children)
      },
      //将动态传递过来的menu通过filter函数拿到里面每个数据 返回有子菜单的数据
      haschildren() {
         return this.asyncMenu.filter(item => item.children)
      },
      //是否折叠
      isCollapse() {
        return  this.$store.state.tab.isCollapse
      },
      //动态拿到根据权限问题 所传递过来的menu
      asyncMenu() {
        return this.$store.state.tab.menu
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 920px;
   
  }
  .el-menu {
    height: 800px;
    border: none;
    h3{
      color: #fff;
      text-align: center;
      line-height: 48px;
      
    }
  }

</style>