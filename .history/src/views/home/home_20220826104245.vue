<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <el-row class="home">
            <el-col :span="8" style="margin-top: 20px">
                <el-card shadow='hover'>
                    <div class="user">
                        <img :src="userImg">
                        <div class="userinfo">
                            <p class="name">Admin</p>
                            <p class="access">超级管理员</p>
                        </div>
                    </div>
                     <div class="login-info">
                            <p>上次登录的时间: <span>2022-6-30</span></p>
                            <p>上次登录的地点: <span>武汉</span></p>

                        </div>

                </el-card>


            </el-col>

        </el-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                userImg: require('../../assets/img/tx.jpeg')
            }
        }
        
    }
</script>

<style lang="less" scoped>
.user {
    display: flex;

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: 0 30px;
    }
}
.login-info {
    margin-top: 30px;
}


</style>