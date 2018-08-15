<template lang="pug">
div#hello
    div.mdui-tab.mdui-tab-centered(mdui-tab)
     router-link(to="/").mdui-ripple 首页
     router-link(to="/").mdui-ripple MV
     router-link(to="/").mdui-ripple 漫评
</template>

<script>
import headerTop from './header/header'
export default {
  components: {
    headerTop
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
