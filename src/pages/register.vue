<template lang="pug">
div#register
  header-top
  div.mdui-container.mdui-m-t-5
    div.mdui-row
      div.mdui-col-sm-6.mdui-col-offset-sm-3.mdui-shadow-5.mdui-p-a-5
        div.mdui-typo-headline-opacity 注册
        div.mdui-textfield.mdui-textfield-floating-label.mdui-textfield-has-bottom
          label.mdui-textfield-label User Name
          input.mdui-textfield-input(type="text" required v-model="uname" pattern="^.*(?=.{6,}).*$" )
          div.mdui-textfield-error 请输入至少 6 位
          div.mdui-textfield-helper 请输入至少 6 位
        div.mdui-textfield.mdui-textfield-floating-label.mdui-textfield-has-bottom
          label.mdui-textfield-label Password
          input.mdui-textfield-input(type="password"  required v-model="pwd" pattern="^.*(?=.{6,})(?=.*[a-z])(?=.*[A-Z]).*$" )
          div.mdui-textfield-error 密码至少6位 且包含大小写字母
          div.mdui-textfield-helper 请输入至少 6 位，且包含大小写字母的密码
        div.mdui-textfield.mdui-textfield-floating-label.mdui-textfield-has-bottom
          label.mdui-textfield-label Password
          input.mdui-textfield-input(type="password"  required v-model="re_pwd" v-bind:pattern="'^' + pwd + '$'")
          div.mdui-textfield-error 密码不一致
          div.mdui-textfield-helper 重复输入密码
        button.mdui-btn.mdui-btn-block.mdui-color-theme-accent.mdui-m-t-5(@click="submit") 注册
        div.mdui-m-t-1(style="text-align:right;")
          router-link(to="/login").mdui-text-color-blue 登陆现有账号

</template>

<script>
import headerTop from '../components/header/header';

export default {
  components:{
    headerTop
  },
  data(){
    return{
      uname:'',
      pwd:'',
      re_pwd:'',

    }
  },
  methods:{
    submit(){
      //过滤注册信息合不合格



      //发送注册请求
      this.axios.post('/api/register',{
        uname:this.uname,
        pwd:this.pwd
      })
      .then(res => {
        if (res.data == true) {
          alert("注册成功！");
          this.$router.push('/');
        }
      })
      .catch(error => {
        alert("注册失败");
      })
    }
  }
}
</script>

<style scoped>


</style>
