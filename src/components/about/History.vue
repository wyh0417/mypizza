<template>
  <div class="history container row">
    <div class="card col-4" v-for="(items,index) in item" :key='index'>
      <img class="card-img-top" :src="items.imgsrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{items.title}}</h5>
        <p class="card-text text-success">{{items.text}}*{{items.num}}</p>
        <a href="#" class="btn btn-primary">订单详情</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      item:[
        {imgsrc:require('../../assets/pizza1.jpg'),title:'意大利pizza',num:'4',text:'已完成支付'},
        {imgsrc:require('../../assets/pizza2.jpg'),title:'榴莲pizza',num:'2',text:'已完成支付'},
        {imgsrc:require('../../assets/pizza3.jpg'),title:'芝士pizza',num:'3',text:'已完成支付'}
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width:100%;
    height:50%;
  }
</style>
