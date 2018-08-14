<template>
    <div>
        <headerTop></headerTop>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'App',
  components:{
    headerTop,
  }
}
</script>

<style>
a{
  text-decoration: none;
}
</style>
