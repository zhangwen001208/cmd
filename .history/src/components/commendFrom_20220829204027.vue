<template>
    <el-form ref='form' label-width='100px' :model="form" :inline ='inline'>
        <el-form-item v-for="item in formLabel" :key="item.label" :label="item.label">
            <el-input 
            v-if="item.type === 'input'"
            :placeholder="'请输入'+ item.label"
            v-model="operateForm.name"
             >
            </el-input>

            <el-switch 
            v-if="item.type === 'switch'"
            v-model="operateForm.age"
            >
            </el-switch>

             <el-date-picker
            v-if= "item.type === 'date'"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder= "请选择日期"
            v-model= "operateForm.birth"
            >
            </el-date-picker>
<!-- 
            <el-select
             v-if="item.type === 'select'"
             placeholder="请选择性别"
            :model="form[item.model]"
             >
             <el-option
             v-for="item in item.opts"
             :key="item.value"
             :label="item.label"
             :value="item.value"
             >
             </el-option>         
           
            </el-select> -->

        </el-form-item>
        <el-form-item><slot></slot></el-form-item>

    </el-form>
</template>

<script>
    export default {
        name: 'commendFrom',
        props: {
            formLabel: Array,
            form: Object,
            inline: Boolean
        },
        data() {
            return{
                
            operateForm: {
                name: '',
                addr: '',
                age: '',
                birth: '',
                sex: ''
            },
                


            }
        },
        created() {
            console.log(this.form)
            
        }
       
        
    }
</script>

<style lang="scss" scoped>

</style>