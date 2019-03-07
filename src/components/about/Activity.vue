<template>
  <div class="activity container text-center">
    <div class="card" v-for="(arr1,index) in arr">
      <img class="card-img-top" :src="arr1.imgSrc" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{arr1.title}}</h5>
        <p class="card-text">{{arr1.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Activity',
  data () {
    return {
      arr:[
        {imgSrc:require('../../assets/热门活动.jpg'), title:'热门活动1',text:'三八女王节，有机会抽中免单'},
        {imgSrc:require('../../assets/热门活动.jpg'), title:'热门活动2',text:'买pizza，有机会赢得iPhone XS MAX...'},
        {imgSrc:require('../../assets/热门活动.jpg'), title:'热门活动3',text:'与好友一起尽享美味pizza，体验海岛风情...'},
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
