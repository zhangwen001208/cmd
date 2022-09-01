<template>
    <div>
      <el-tag
        v-for="tag in tags"
        :key="tag.name"
        closable
        :type="tag.type">
        {{tag.name}}
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