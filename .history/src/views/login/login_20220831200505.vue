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

            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>