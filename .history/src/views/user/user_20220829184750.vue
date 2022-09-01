<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="manage">
        <el-dialog 
        :title= "operateType === 'add'? '新增用户': '更新用户'"
        :visible.sync = 'isShow'> 
        <commend-from 
        :formLabel="opertateFormLabel"
        :form="operateForm"
        :inline="true"
        ref="form">
        </commend-from>
        <div slot="footer" class="dialog-footer">
            <el-button @click="isShow = false">取消</el-button>
            <el-button type="primary" @click="confirm">确定</el-button>
        </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addUser">+新增</el-button>
            <div class="search">
                 <commend-from class="header"
                    :formLabel="formLabel"
                    :form="searchFrom"
                    :inline="true"
                    ref="form">
            <el-button type="primary" @click="getList">搜索</el-button>

            </commend-from>
            
            </div>

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
            searchFrom: {
                keyword: ''
            }
            

        }
       },
       methods: {
        confirm() {
          if(this.operateType === 'edit') {
            this.$http.post('/user/edit', this.operateForm).then(res => {
                this.isShow = false
                console.log(res)
            })
          }else {
            this.$http.post('/user/add', this.operateForm).then(res => {
                this.isShow = false
                console.log(res)
            })
            
          }

        },
        addUser() {
            this.isShow = true
            this.operateType= 'add'
           

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
    .search {
        display: flex;
        justify-content: space-around;
        align-items: center;
        .el-form-item__content {
            margin-top: 10px;
        }
    }
    
}

</style>