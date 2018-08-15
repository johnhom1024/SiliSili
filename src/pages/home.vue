<template lang="pug">
    div#home
        button.mdui-fab.mdui-fab-fixed.mdui-ripple.mdui-color-blue
            i.mdui-icon.material-icons add
        div.left-list.mdui-col-xs-3
            ul.mdui-list.left-list-menu
                router-link(to='/home/personalInformation' tag="li").mdui-list-item.mdui-ripple 个人中心
                router-link(to='/home/mv' tag="li").mdui-list-item.mdui-ripple 发布过的MV
                router-link(to='/home/animeComments' tag="li").mdui-list-item.mdui-ripple 发布过的漫评
                div.mdui-divider
                router-link(to='/home/setting' tag="li").mdui-list-item.mdui-ripple.mdui-text-color-blue-700 设置
        div.mdui-col-xs-9
            //home的子路由router-view
            router-view
</template>

<script>
import '../assets/home.css'

export default {
  components: {}
}
</script>
