<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="manage">
        <el-dialog 
        :title= "operateType === 'add'? '新增用户': '更新用户'"
        :visible.sync = 'isShow'> 
        <commend-from 
        :formLabel="opertateFormLabel"
        :form="operateForm"
        :inLine="true"
        ref="form">
        </commend-from>
        <div slot="footer" class="dialog-footer">
            <el-button @click="isShow = false">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
        </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addUser">+新增</el-button>
            <commend-from class="header"
            :formLabel="formLabel"
            :form="searchForm"
            :inLine="true"
            ref="form">
            <el-button type="primary" @click="getList">搜索</el-button>

            </commend-from>

        </div>
        

    </div>
</template>

<script>
import commendFrom from '@/components/commendFrom.vue'
    export default {
      components:
       { commendFrom },
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
            operateForm: {
                name: '',
                addr: '',
                age: '',
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
            searchForm: {
                keyword: ''
            }
            

        }
       },
       methods: {
        confirm() {

        },
        addUser() {

        },
        getList() {

        }

       }
        
    }
</script>

<style lang="less" scoped>
.manage-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
}

</style>