<template lang="pug">
div#login
  div.mdui-container.mdui-m-t-5
    div.mdui-row
      div.mdui-col-sm-6.mdui-col-offset-sm-3.mdui-shadow-5.mdui-p-a-5
        div.mdui-typo-headline-opacity 登陆
        div.mdui-textfield.mdui-textfield-floating-label
          label.mdui-textfield-label User Name
          input.mdui-textfield-input(type="text" required)
          div.mdui-textfield-error 用户名不能为空
        div.mdui-textfield.mdui-textfield-floating-label.mdui-textfield-has-bottom
          label.mdui-textfield-label Password
          input.mdui-textfield-input(type="password" pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" required)
          div.mdui-textfield-error 密码不能为空
          div.mdui-textfield-helper 密码至少6位
        button.mdui-btn.mdui-btn-block.mdui-color-theme-accent.mdui-m-t-5 登陆
        div.mdui-m-t-1(style="text-align:right;")
          router-link(to="/register").mdui-text-color-blue 注册账号

</template>

<script>
export default {
  components: {

  }
}
</script>

<style scoped>

</style>
