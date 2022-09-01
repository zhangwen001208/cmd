<template>
   <header>
        <div class="l-content">
            <el-button plain icon="el-icon-menu" size="mini"></el-button>
            <h3 style="color: #fff">首页</h3>
         </div>
         <div class="r-content">
            <el-dropdown trigger="click" szie="mini">
                <span>  
                    <img :src="userImg">
                </span>

            </el-dropdown>

         </div>
   </header>
    
</template>

<script>
    export default {
        name: 'homeHeader',
        data() {
            return {
                userImg: require('../assets/img/tx.jpeg')
            }
        }
         
        
    }
</script>

<style lang="scss" scoped>

</style>