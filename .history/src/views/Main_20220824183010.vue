<template>
  <div class="home">
      <el-container style="height: 100%">
        <el-aside width="auto">
          <home-aside/>
        </el-aside>
        <el-container>
          <el-header class="header">
            <home-header></home-header>
          </el-header>
          <el-main>
          <router-view></router-view>
          </el-main>
        </el-container>
    </el-container>

        
  </div>
</template>

<script>
import HomeHeader from '@/components/homeHeader.vue'
// @ is an alias to /src

import HomeAside from '../components/HomeAside.vue'
import homeHader from '../components/homeHader.vue'

export default {
  name: 'HomeView',
  components: {
    HomeAside,
    homeHader,
    HomeHeader

  }
}
</script>
<style lang="less" scoped>
.header{
  background-color: #333;
}
  
</style>
