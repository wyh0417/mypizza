<template>
  <div class="menu container row">
      <div class="col-7 mt-3">
        <h2 class="text-center text-info">菜单</h2>
          <table class="table text-center">
            <thead class="thead-dark">
              <tr>
                <th scope="col">尺寸</th>
                <th scope="col">价格（元）</th>
                <th scope="col">添加</th>
              </tr>
            </thead>
            <tbody v-for="(items,index) in item" :key="index">
              <tr>
                <td colspan="3">
                  <h4 class="text-primary">{{items.name}}</h4> 
                </td>
              </tr>
              <tr>
                <td colspan="3">
                  <h5 class="text-secondary">{{items.description}}</h5> 
                </td>
              </tr>
              <tr v-for="(itemss,index1) in items.options" :key="index1">
                <td>{{itemss.size}}</td>
                <td>{{itemss.price}}</td>
                <td>
                  <button class="btn btn-info" @click="addShop(items,itemss)">+</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="col-5 mt-3">
          <h2 class="text-info text-center">购物车</h2>
          <table class="table text-center">
            <thead class="thead-dark">
              <tr>
                <th scope="col">个数</th>
                <th scope="col">商品描述</th>
                <th scope="col">商品价格</th>
              </tr>
            </thead>
            <template v-if="newItems.length>0">
              <tbody v-for="(item2,index) in newItems" :key="index">
                <tr>
                  <td>
                    <button class="btn btn-info" @click="reduce(item2,index)">-</button>
                    <input type="number" class="input1" v-model.number="item2.num">
                    <button class="btn btn-info" @click="add(item2)">+</button>
                  </td>
                  <td>{{item2.name}}-{{item2.size}}</td>
                  <td>{{item2.price*item2.num}}</td>
                </tr>
              </tbody>
              <tr>
                <td colspan="3" class="text-right">
                  <h5 class="text-danger">商品总件数：
                    <strong>{{totalNum}} </strong>
                  </h5>
                </td>
              </tr>
              <tr>
                
                <td colspan="3" class="text-right">
                  <h5 class="text-danger">商品总价格：
                    <strong>{{totalPrice}} ￥</strong>
                  </h5>
                </td>
              </tr>
            </template>
            <template v-else>
                <tr>
                  <td colspan="3">
                    <h2 class="text-danger">此购物车空空如也！</h2>
                  </td>
                </tr>
            </template>
          </table>
      </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Menu',
    data () {
      return {
        item:{},
          // item:{
          //   0:{
          //     name:'芝士pizza',
          //     description:'这是一款被大众喜爱的pizza.',
          //     options:[
          //       {
          //         size:'7寸',
          //         price:'70'
          //       },
          //       {
          //         size:'10寸',
          //         price:'100'
          //       },
          //     ]
          //   },
          //   1:{
          //     name:'榴莲pizza',
          //     description:'这是一款口味独特的pizza,依据客人口味自行购买.',
          //     options:[
          //       {
          //         size:'7寸',
          //         price:'90'
          //       },
          //       {
          //         size:'10寸',
          //         price:'140'
          //       },
          //     ]
          //   }
          // },
          // 表示当我在左边菜单栏添加数据，newItems才有值。
          newItems:[] 
        }
      },
      mounted() {
        // 获取野狗云里的数据
        axios.get('./menu-wyh.json')
        .then(res=>{
          this.item=res.data
        })
      },
      methods: {
        addShop(items,itemss){
          // 点击添加时，实现去重
          var result = this.newItems.filter((item3)=>{
            // console.log(itemss)
            return items.name == item3.name && itemss.size == item3.size
          })
          console.log(result)
          if(result!=null && result.length>0){
            if(result[0].num>=10){
              result[0].num=10
            }else{
              result[0].num++
            }
          }else{
            this.newItems.push({
            name:items.name,
            size:itemss.size,
            num:1,
            price:itemss.price
          })
          }

          
          // console.log(itemss)
        },
        reduce(item2,index){
          if(item2.num>1){
            item2.num--
          }else{
            this.newItems.splice(index,1)
          }
        },
        add(item2){
          if(item2.num>=10){
            item2.num=10
          }else{
            item2.num++
          }
          
        }
      },
      computed: {
        totalNum(){
          return this.newItems.length
        },
        totalPrice(){
          return this.newItems.reduce((sum,cur)=>{
            return sum+cur.price*cur.num
          },0)
        }
      },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .input1{
    width: 40px;
  }
  .btn{
    width: 30px;
    height: 30px;
    padding: 0;
  }
</style>
