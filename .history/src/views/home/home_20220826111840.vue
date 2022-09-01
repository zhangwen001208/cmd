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
                <el-card style="margin-top: 20px; height: auto">
                     <el-table
                        :data="tableData"
                       
                        >
                        <el-table-column
                        v-for="(val, key) in tableLabel"
                         :key="key"
                         :prop= 'key'
                         :label= 'val'
                        >
                        </el-table-column>
                       
                    </el-table>

                     </el-card>


            </el-col>

        </el-row>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                userImg: require('../../assets/img/tx.jpeg'),
                tableData: [
                    {
                        name: 'oppo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },
                    {
                        name: 'vivo',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },{
                        name: 'apple',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },{
                        name: '小米',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },{
                        name: '三星',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    },{
                        name: '魅族',
                        todayBuy: 100,
                        monthBuy: 300,
                        totalBuy: 800
                    }
                ],
                tableLabel: {
                    name: '课程',
                    todayBuy: '今日购买',
                    monthBuy: '本月购买',
                    totalBuy: '总购买'

                }

            }
        }
        
    }
</script>

<style lang="less" scoped>
.user {
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #666;

    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right:  30px;
    }
    .name {
        font-weight: 800;
        font-size: 24px;
    }
    .user {
        font-size: 14px;
    }
}
.login-info {
    margin-top: 40px;
    margin-left: 5px;
}


</style>