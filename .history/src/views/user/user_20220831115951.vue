<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="manage">
        <el-dialog
         :title="operateType === 'add' ? '新增用户': '更新用户'"
        :visible.sync= 'isShow'>
        <common-form
        :FormLabel="opertateFormLabel"
        :form="operateform"
        :inline="true"
        ref="form">
        </common-form>
        <div slot="footer" class="dialog-fotter">
            <el-button @click="isShow = false">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
        </div>       
        </el-dialog>
        <div class="mange-header">
            <el-button type="primary" @click="addUser">+新增</el-button>
           <div class="r-search">
             <common-form
            :FormLabel="formLabel"
            :form="searchFrom"
            :inline="true"
            ref="form"
            >
            <el-button type="primary" @click="getList">搜索</el-button>
            </common-form>

           </div>
        </div>


    </div>
</template>

<script>
import commonForm from '../../components/commonForm.vue'
    export default {
        components: {
            commonForm
        },
        data() {
            return {
                operateType: 'add',
                isShow: false,
                opertateFormLabel: [
                    {
                        model: 'name',
                        label: '姓名',
                        type: 'input'
                    },
                    {
                        model: 'age',
                        label: '年龄',
                        type: 'input'
                    },
                    {
                        model: 'sex',
                        label: '性别',
                        type: 'select',
                        opts: [
                            {
                                label: '男',
                                value: 1
                            },
                            {
                                label: '女',
                                value: 0
                                
                                    }
                                ]
                            },
                     {
                         model: 'birth',
                         label: '出生日期',
                        type: 'date'
                    },
                     {
                         model: 'addr',
                         label: '地址',
                         type: 'input'
                    }       
                    
                ],
                operateform: {
                    name: '',
                    age: '',
                    addr: '',
                    birth: '',
                    sex: ''
                },
                formLabel: [
                        {
                            model: 'keyword',
                            label: '',
                            type: 'input'
                        }
                ],
                searchFrom: {
                        keyword: ''
                    }
             }
        },
        methods: {
            confirm() {
                if(this.operateType === 'edit') {
                    this.$https.post('user/edit', this.operateForm).then(res => {
                        this.isShow = false
                        console.log(res)
                    })
                }else {
                    this.$https.post('/user/add', this.operateForm).then(res => {
                        this.isShow = false
                        console.log(res)
                    })
                }

            },
            addUser() {
                this.isShow = true
                this.operateType = 'add'
                this.operateform =  {
                    name: '',
                    addr: '',
                    age: '',
                    birth: '',
                    sex: ''
                }

            },
            getList() {

            }

        }
        
    }
</script>

<style lang="less" scoped>
.el-main {
    padding: 0;
}
.mange-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .r-search {
        margin-top: 20px;
        
    }
}

</style>