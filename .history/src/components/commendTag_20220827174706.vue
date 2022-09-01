<template>
    <div class="tag">
      <el-tag
        v-for="(tag,index) in tags"
        :key="tag.name"
        :closable ="tag.name !== 'home'" 
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
            changmenu(item) {
                this.$router.push({
                    name: item.name
                })

            },
            handleClose(tag){    
            this.tags.splice(this.tags.indexOf(tag), 1);
            }
        },

        
        
    }
</script>

<style lang="less" scoped>

.tag {
    margin-left: 20px;
}

</style>