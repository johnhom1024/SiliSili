<template>
    <div>
        <headerTop></headerTop>
        <router-view/>
    </div>
</template>

<script>
import headerTop from './components/header/header'

export default {
  name: 'App',
  components: {
    headerTop
  }
}
</script>

<style>
a{
  text-decoration: none;
}
</style>
