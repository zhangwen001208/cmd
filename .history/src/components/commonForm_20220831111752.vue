<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div>
        <el-form ref="form" label-width= '100px' :model= 'form' :inline= 'inline'> 
            <el-form-item v-for=" item in opertateFormLabel" :key="item.label" :label="item.label">
                <el-input
                v-if = "item.type === 'input'"
                :placeholder="'请输入'+ item.label"
                :v-model="form[item.model]"
                >
                </el-input>
                <el-switch 
                 v-if = "item.type === 'switch'"
                :v-mode= "form[item.model]"
                >
                </el-switch>
                <el-date-picker
                v-if= "item.type === 'date'"
                type='date'
                value-format = 'yyyy-MM-dd'
                placeholder="选择日期"
                :v-mode= "form[item.model]"
                >
                </el-date-picker>
                <el-select
                v-if="item.type === 'select'"
                placeholder="选择性别"
                :v-mode= "form[item.model]">
                <el-option
                v-for="item in item.opts"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                >

                </el-option>

                </el-select>

            </el-form-item>
            <el-form-item>
                <slot></slot>
            </el-form-item>

        </el-form>

    </div>
</template>

<script>
    export default {
        props: {
            FormLabel: Array,
            form:Object,
            inline: Boolean

        },
        data() {
            return {
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
            }
        },
       created() {
        console.log(this.FormLabel)
        // console.log(this.item.opts)
       }
        
    }
</script>

<style lang="scss" scoped>

</style>