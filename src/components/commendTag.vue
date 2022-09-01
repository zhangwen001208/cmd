<template>
    <div class="tag">
        
      <el-tag
        v-for="(tag,index) in tags"
        :key="tag.name"
        :closable ="natag.me !== 'home'" 
        :effect= "$route.name == tag.name? 'dark': 'plain' "
        @click="changmenu(tag)"
        @close= "handleClose(tag, index)"
        size="small"
        >
        {{tag.label}}
     </el-tag>


    </div>
</template>

<script>
import { mapState } from 'vuex'


    export default {
        name: 'commandTag',
        data() {
            return {

            }
        },
        computed: {
            ...mapState({
                tags: state => state.tab.tabsList
            })
        },
        created() {
            console.log(this.tags)
        },
        methods: {
            // 路由跳转 当点击那个标签页时跳转到相应路由
            changmenu(item) {
                this.$router.push({
                    name: item.name
                })
            },
            // 关闭按钮标签 通过拿到tag的name 将他删除
            handleClose(tag){    
            this.tags.splice(this.tags.indexOf(tag), 1);
            }
        },

        
        
    }
</script>

<style lang="less" scoped>

.tag {
    margin: 10px 10px 0 20px;
    .el-tag {
        margin-right: 20px;
        cursor: pointer;
    }
}

</style>