<template>
  <div class="login container col-4 mt-5">
    <img src="../../src/assets/logo.png" alt="" class="rounded mx-auto d-block">
    <h4 class="text-center">登录</h4>
    <form>
      <div class="form-group">
        <input type="email" class="form-control" id="input1"  placeholder="请输入您的邮箱" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="input2" placeholder="请输入您的密码" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary btn-block" @click.prevent="login1">登录</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      username:'',
      password:''
    }
  },
  methods:{
    login1(){
      // 获取注册的数据
      axios.get('./user-wyh.json')
      .then((res)=>{
        // console.log(res.data)
        var result = []
        // 用 for-in 循环对象
        for(var key in res.data){
          // console.log(res.data[key])
          // 每一项
          var user = res.data[key]
          result.push(user)
        }
        console.log(result)
        // 匹配当前的账号密码
        // 1.匹配成功，登陆成功
        // 2.匹配失败，报出账号或密码错误的提醒
        var trueUser = result.filter((item)=>{
          return item.username == this.username && item.password == this.password
        })

        // 如果内容不为空并且长度大于0，则登陆成功
        if(trueUser!=null && trueUser.length>0){
           alert('登陆成功')
           this.$router.push('/admin')
         }else{
           alert('账号或密码错误')
         }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img{
    width: 100px;
    height: 100px;
  }
  input{
    margin-bottom: 20px;
  }
</style>
