<template>
<el-menu  default-active="1-4-1" 
    class="el-menu-vertical-demo"
     background-color= '#545c64'
     text-color="#fff"
    
     active-text-color="#ffd04b"

    @open="handleOpen" @close="handleClose" 
    :collapse="isCollapse">
  <h3>通用后台管理系统</h3>
  <el-menu-item  @click="clickmenu" v-for="item in nochildren" index="item.path" :key="item.path">
    <i :class="'el-icon-'+item.icon"></i>
    <span slot="title">{{item.label}}</span>
  </el-menu-item>
  <el-submenu v-for="item in haschildren" index="item.path" :key="item.path">
    <template slot="title">
      <i class="'el-icon-'+item.icon"></i>
      <span slot="title">{{item.label}}</span>
    </template>
    <el-menu-item-group v-for="subitem in item.children" index='subitem.path' :key="subitem.path">
     
      <el-menu-item index="1-1">{{subitem.label}}</el-menu-item>
      
    </el-menu-item-group>
   
  </el-submenu>
 
 
</el-menu>
  
</template>

<script>
export default {
    data() {
      return {
        isCollapse: false,
        menu:[
          {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/home'
          },
           {
            path: '/mall',
            name: 'mall',
            label: '商品管理',
            icon: 'video-play',
            url: 'MallManage/MallManage'
          },
           {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: 'UserManage/UserManage'
          },
           {
            
            label: '其他',
            icon: 'location',
           children: [
            {
            path: '/page1',
            name: 'page1',
            label: '页面1',
            icon: 'setting',
            url: 'Other/pageOne'
            },
            {
            path: '/page2',
            name: 'page2',
            label: '页面2',
            icon: 'setting',
            url: 'Other/pageTwo'
            }

           ]
          }

        ]
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      clickmenu() {
        this.$router.push({
          // name: item.name,
          
        })
        console.log(123)
      }
    },
    computed: {
      nochildren() {
        return this.menu.filter(item => !item.children)
      },
      haschildren() {
         return this.menu.filter(item => item.children)
      }
    }
  }
</script>

<style lang="less" scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 800px;
   
  }
  .el-menu {
    height: 100%;
    border: none;
    h3{
      color: #fff;
      text-align: center;
      line-height: 48px;
      
    }
  }

</style>