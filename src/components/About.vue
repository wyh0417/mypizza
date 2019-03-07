<template>
  <div class="about container row mt-5">
    <div class="list-group col-4 text-center ">
      <router-link to="Activity" class="list-group-item">热门活动</router-link>
      <router-link to="Contect" class="list-group-item">联系我们</router-link>
      <router-link to="Delivery" class="list-group-item">快递查询</router-link>
      <router-link to="History" class="list-group-item">订单查询</router-link>
    </div>
    <div class="col-8">
      <router-view/>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'About',
  data () {
    return {

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
