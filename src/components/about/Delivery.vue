<template>
  <div class="delivery container row">
    <div class="card col-4" v-for="(items,index) in item1" :key='index'>
      <img class="card-img-top" :src="items.imgSrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{items.title}}</h5>
        <p class="card-text">{{items.text}}</p>
        <a href="#" class="btn btn-primary">快递查询</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Delivery',
  data () {
    return {
      item1:[
        {imgSrc:require('../../assets/del-sf.png'),title:'顺丰速运',text:'您的快递信息已发送至河北张家口'},
        {imgSrc:require('../../assets/del-yt.jpg'),title:'圆通快递',text:'您的快递信息已发送至山东青岛'},
        {imgSrc:require('../../assets/del-zt.jpg'),title:'中通快递',text:'您的快递信息已发送至河南洛阳'},
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 100%;
    height:50%;
  }
</style>
