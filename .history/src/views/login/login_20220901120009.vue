<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login">
        <el-form
        :model="form"
        status-icon
        :rules="rules"
        ref="form"
        label-width="100px"
        class="login-container">
        <h3 class="login_title">系统登录</h3>
        <el-form-item
        label="用户名"
        label-width="80px"
        prop= 'username'
        class="username">
        <el-input
        type="input"
        v-model="form.username"
        auto-complete="off"
        placeholder="请输入账号">

        </el-input>

        </el-form-item>
        <el-form-item
        label="密码"
        label-width="80px"
        prop= 'password'>
        <el-input
        type="password"
        v-model="form.password"
        auto-complete="off"
        placeholder="请输密码"
        >
        </el-input>

        </el-form-item>

        <el-form-item class="login_submit">
            <el-button type="primary" @click="login" class="login_submit">登录</el-button>
        </el-form-item>

        </el-form>

    </div>
</template>

<script>
// import Mock from 'mockjs'

import {getMenu} from '../../request/permission'


    export default {
        data() {
            return {
                form: {

                },
                rules: {
                    username: [
                        {
                            required: true,
                            message: '请输入用户名',
                            trigger: 'blur'
                        },
                        {
                            min: 3,
                            message: '用户名长度不能小于3位',
                            trigger: 'blur'
                        }

                    ],
                    password: [
                        {
                            required: true,
                            message: '请输入密码',
                            trigger: 'blur'

                        }
                    ]
                }

            }
        },
        methods: {
            login() {
            //   const token =  Mock.random.guid()
            //   this.$store.commin('setToken',token)
            //   this.$store.push({name: 'home'})   
              getMenu(this.$refs.form).then(res => {
                if(res.data.code === 20000) {
                    console.log('123')
                    this.$store.commit('clearMenu')
                    this.$store.commit('setMenu',res.data.Menu)
                    this.$store.commit('setToken',res.data.token)
                    this.$store.commit('addMenu',this.$router)
                    this.$router.push({name: 'home'})
                    console.log(res)
                } else {
                    this.$message.warning(res.data.message)
                }
              })


            }
        }
        
    }
</script>

<style lang="less" scoped>
.login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto; 
    width: 350px;
    padding: 35px 35px 15px 35px;
    background-color: #fff;
    border: 1px soild #eaeaea;
    box-shadow: 0 0 25px #cac6c6;  
}
.login_title {
    margin: 0px auto 40px;
    text-align: center;
    color: #505458;
}
.login_submit {
    margin: 10px auto 0px auto;
}

</style>