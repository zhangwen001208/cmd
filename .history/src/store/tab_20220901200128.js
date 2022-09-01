// import router from "@/router"
import Cookie  from "js-cookie"

export default {
    state: {
       isCollapse: false,
       tabsList: [
        {
            path: '/',
            name: 'home',
            label: '首页',
            icon: 'home'
        }
       ],
       currentMenu: null,
       menu: []
    },
    mutations: {
        Collapsemenu(state) {
            state.isCollapse = !state.isCollapse
        },
        selectMenu(state, val) {
            if(val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)

                if(result === -1) {
                    state.tabsList.push(val)
                }else {
                    state.currentMenu == null;
                }
            }
        },
        //关闭Tag菜单
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        },
        //写入
        setMenu(state, val) {
            state.menu = val
            // 这里我们将拿到的menu 和 name 和password值发送到服务器 stringify将JavaScript对象转换成字符串
            Cookie.set('menu', JSON.stringify(val))

        },
        // 清除 这里我们清除时采用remove方法 移除调menu的值
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },

        addMenu(state, router) {
            // 判断cookie里面有没有拿到menu值 没有返回
            if(!Cookie.get('menu')){
                return
            }
            // 将拿到的menu值 有字符串解析为JavaScript对象
            const menu = JSON.parse(Cookie.get('menu'))
            
            state.menu = menu
            const menuArray = []
            // 这里动态添加菜单路由 
            menu.forEach(item => {
                if(item.children){
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                }else {

                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            //路由动态添加
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        }

    }
}