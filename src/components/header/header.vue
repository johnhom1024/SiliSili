<template lang="pug">
div.header
  div.mdui-appbar.mdui-appbar-scroll-toolbar-hide
    div.mdui-toolbar.mdui-color-theme-accent
      router-link.mdui-btn(to="/") Anime
      div.mdui-toolbar-spacer 
      router-link.mdui-btn(to="/register") 注册
      router-link.mdui-btn(to="/login") 登陆
      button.mdui-btn.mdui-btn-icon
        i.mdui-icon.material-icons menu
    div.mdui-tab.mdui-tab-centered(mdui-tab)
      a.mdui-ripple.mdui-ripple-white(href="#1") 首页
      a.mdui-ripple.mdui-ripple-white(href="#2") MV
      a.mdui-ripple.mdui-ripple-white(href="#3") 漫评


</template>

<script>
export default {
  
}
</script>

<style  scoped>

</style>
