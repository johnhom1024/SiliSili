<template lang="pug">
div.header
  div.mdui-appbar.mdui-appbar-scroll-toolbar-hide
    div.mdui-toolbar.mdui-color-theme
      router-link.mdui-btn(to="/") SiliSili
      div.mdui-toolbar-spacer
      router-link.mdui-btn(to="/register") 注册
      router-link.mdui-btn(to="/login") 登陆
      button.mdui-btn.mdui-btn-icon(mdui-menu="{target: '#menu'}")
       i.mdui-icon.material-icons menu
      ul.mdui-menu#menu
       li.mdui-menu-item
        router-link(to="/home").mdui-ripple 个人中心
        router-link(to="/setting").mdui-ripple 设置

</template>

<script>
export default {

}
</script>

<style  scoped>

</style>
