<template>
  <div class="home">
      <el-container style="height: 100%">
        <el-aside width="auto">
          <home-aside/>
        </el-aside>
        <el-container>
          <el-header class="header">Header</el-header>
          <el-main>Main</el-main>
        </el-container>
    </el-container>

        
  </div>
</template>

<script>
// @ is an alias to /src

import HomeAside from '../components/HomeAside.vue'

export default {
  name: 'HomeView',
  components: {
    HomeAside

  }
}
</script>
<style lang="less" scoped>
.header{
  background-color: #333;
}
  
</style>
