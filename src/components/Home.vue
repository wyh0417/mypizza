<template>
  <div class="home text-center">
    <div class="bg">
      <div class="opcity">
        <h1>欢迎来品尝pizza！</h1>
        <h2>这里有各种各样好吃的pizza.</h2>
        <button class=" btn btn-success mt-3" @click='onMenu'>Let's Order</button>
      </div>
    </div>
    <h2>订单查询</h2>
    <History/>
    <h2>快递查询</h2>
    <Delivery/>
  </div>
</template>

<script>
import Delivery from '@/components/about/Delivery'
import History from '@/components/about/History'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  methods:{
    onMenu(){
      this.$router.push('/menu')
    }
  },
  components:{
    'Delivery':Delivery,
    'History':History
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bg{
    width: 100%;
    height: 700px;
    background: url(../assets/pizza.jpg);
    padding: 5%;
  }
  .opcity{
    width: 600px;
    height: 200px;
    background: #bbb;
    opacity: .8;
    margin: 180px auto;
    
  }
</style>
