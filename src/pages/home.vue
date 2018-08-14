<template lang="pug">
    div#home
        div.mdui-col-xs-3.mdui-tab
            ul.mdui-list
                li.mdui-list-item.mdui-ripple
                    a(href='#mv')  发布过的MV
                li.mdui-list-item.mdui-ripple 发布过的漫评
                li.mdui-list-item.mdui-ripple 设置
        div.mdui-col-xs-9 右边页面
            div#mv 发布过的mv
            div#animeComment 发布过的漫评
            div#setting 设置

</template>

<script>
export default {
   components:{

  }
}
</script>