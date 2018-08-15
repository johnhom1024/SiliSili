<template lang="pug">
    div#home
        div.mdui-col-xs-3
            ul.mdui-list.left-list
                router-link(to='/home/personalInformation' tag="li").mdui-list-item.mdui-ripple 个人中心
                router-link(to='/home/mv' tag="li").mdui-list-item.mdui-ripple 发布过的MV
                router-link(to='/home/animeComments' tag="li").mdui-list-item.mdui-ripple 发布过的漫评
                router-link(to='/home/setting' tag="li").mdui-list-item.mdui-ripple 设置
            div 本网站由DarkReunite和nekokuro0xf开发
        div.mdui-col-xs-9
            router-view
</template>

<script>
import '../assets/home.css'

export default {
  components: {}
}
</script>
