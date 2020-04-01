<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/nav/header'
import Footer from './components/nav/footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>

</style>
