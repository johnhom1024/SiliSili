<template lang="pug">
div.header
  div.mdui-appbar.mdui-appbar-scroll-toolbar-hide
    div.mdui-toolbar.mdui-color-theme
      router-link.mdui-btn(to="/") Anime
      div.mdui-toolbar-spacer 
      router-link.mdui-btn(to="/register") 注册
      router-link.mdui-btn(to="/login") 登陆
      button.mdui-btn.mdui-btn-icon(mdui-menu="{target: '#menu'}")
       i.mdui-icon.material-icons menu
      ul.mdui-menu#menu
       i.mdui-menu-item
        router-link.mudi-btn(to="/home") 个人中心
        router-link.mudi-btn(to="/setting") 设置
    div.mdui-tab.mdui-tab-centered(mdui-tab)
        router-link.mdui-btn(to="/") 首页
        router-link.mdui-btn(to="/") MV
        router-link.mdui-btn(to="/") 漫评


</template>

<script>
export default {
  
}
</script>

<style  scoped>

</style>
