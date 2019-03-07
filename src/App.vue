<template>
  <div id="app" class="container">

  <!--导航栏-->
    <Header></Header>
  <!-- 内容 -->
    <router-view/>

  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    'Header':Header
  }

}
</script>

<style scoped>

</style>
