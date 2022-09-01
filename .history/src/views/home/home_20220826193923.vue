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
            <el-col :span="16" style="margin-top: 20px">
                <div class="num">
                    <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', paddig: 0 }">
                        <i class="icon" :class="`el-icon-${item.icon}`" :style="{background: item.color}"></i>
                        <div class="detail">
                            <p class="num">￥{{item.value}}</p>
                            <p class="text">{{item.name}}</p>
                        </div>

                    </el-card>

                </div>
                <el-card style="height: 280px">
                    <div style="height: 280px" ref="echarts"></div>
                </el-card>

                <div class="graph">
                    <el-card style="height: 260px"></el-card>
                    <el-card style="height: 260px"></el-card>
                </div>

            </el-col>

        </el-row>

    </div>
</template>

<script>
import { getData } from '../../request/data.js'
import * as echarts from 'echarts';


    export default {
        data() {
            return {
                userImg: require('../../assets/img/tx.jpeg'),
                tableData: [
                    
                ],
                tableLabel: {
                    name: '课程',
                    todayBuy: '今日购买',
                    monthBuy: '本月购买',
                    totalBuy: '总购买'

                },
                countData: [
                    {
                        name: '今日支付订单',
                        value: '1234',
                        icon: 'success',
                        color: '#2ec7c9'
                    },
                    {
                        name: '今日收藏订单',
                        value: '210',
                        icon: 'star-on',
                        color: '#ffb980'
                    },
                    {
                        name: '今日未支付订单',
                        value: '1234',
                        icon: 's-goods',
                        color: '#5ab1ef'
                    },
                     {
                        name: '本月支付订单',
                        value: '1234',
                        icon: 'success',
                        color: '#2ec7c9'
                    },
                    {
                        name: '本月收藏订单',
                        value: '210',
                        icon: 'star-on',
                        color: '#ffb980'
                    },
                    {
                        name: '本月未支付订单',
                        value: '1234',
                        icon: 's-goods',
                        color: '#5ab1ef'
                    },
                ]
            }
        },
        mounted() {
            getData().then(res => {
                const { code, data } = res.data
                if(code === 20000){
                    this.tableData = data.tableData
                    const order = data.orderData
                    const xDate = order.date
                    const keyArry = Object.keys(order.data[0])
                    const series = []
                    keyArry.forEach(key => {
                        series.push({
                            name: key ,
                            data: order.data.map(item => item[key]),
                            type: 'line'
                        })
                    }) 

                    const option = {
                          xAxis: {
                            data: xDate
                          },
                          yAxis: {},
                          legend: {
                            data: keyArry
                          },
                          series
                    }
                    const E = echarts.init(this.$refs.echarts)
                    E.setOption(option)

                }
                console.log(res)
            })
        },
        
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
.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    i {
        display: block;
        width: 100px;
        
    }
    .el-card {
        width: 250px;
        height: 100px;
        margin-bottom : 10px ;
    }
    .detail {
        margin-left: 10px;
        .num {
        font-size: 18px;
         }
        .text {
            font-size: 12px;
            color: #666;
         }

    }

   
    
 
    
    
   
}
.el-card {
    margin-left: 20px;
}
.graph {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    
    .el-card{
        width: 45%;
    }
}

</style>