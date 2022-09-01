<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div>
        <el-from ref="form" label-width= '100px' :model= 'form' :inline= 'inline'> 
            <el-form-item v-for=" item in formLabel" :key="item.label" :label="item.label">
                <el-input
                v-if = "item.type === 'input'"
                :placeholder="'请输入' + 'item.label'"
                v-model="form[item.model]"
                >
                </el-input>
                <el-switch 
                 v-if = "item.type === 'switch'"
                 v-mode= "form[item.model]"
                >
                </el-switch>
                <el-data-picker
                v-if="item.type === 'data'"
                type='data'
                value-format = 'yyyy-MM-dd'
                placeholder="选择日期"
                v-mode= "form[item.model]"
                >
                </el-data-picker>
                <el-select
                v-if="item.type === 'select'"
                placeholder="选择日期"
                v-mode= "form[item.model]">
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

        </el-from>

    </div>
</template>

<script>
    export default {
        props: {
            FormLabel: Array,
            form:Object,
            inline: Boolean

        }
        
    }
</script>

<style lang="scss" scoped>

</style>