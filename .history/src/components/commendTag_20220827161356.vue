<template>
    <div>
      <el-tag
        v-for="(tag,index) in tags"
        :key="tag.name"
        :closable ="tag.name !== 'home'" 
        :effect= "$route.name == tag.name? 'dark': 'plain' "
        @click="changmenu(tag)"
        @close= " handleClose(tag, index)"
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
        }

        
        
    }
</script>

<style lang="scss" scoped>

</style>