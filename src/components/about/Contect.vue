<template>
  <div class="contect">
    <div class="card text-center">
      <div class="card-header">
        Featured
      </div>
      <div class="card-body">
        <h5 class="card-title">联系我们</h5>
        <p class="card-text">欢迎来到pizza页面</p>
        <router-link to="Address" class="btn btn-primary">地址信息</router-link>
        <router-link to="Person" class="btn btn-primary">法人代表</router-link>
        <router-link to="Telphone" class="btn btn-primary">电话热线</router-link>
      </div>
      <router-view/>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Contect',
  data () {
    return {
      
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
