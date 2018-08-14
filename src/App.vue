<template>
    <div>
        <headerTop></headerTop>
        <router-view/>
    </div>
</template>

<script>

import './mdui/css/mdui.css';
import './mdui/css/mdui.min.css';


import './mdui/js/mdui.js'
import './mdui/js/mdui.min.js'
import headerTop from './components/header/header';

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
