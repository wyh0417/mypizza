<template>
  <div class="register container col-4 mt-5">
    <img src="../../src/assets/logo.png" alt="" class="rounded mx-auto d-block">
    <h4 class="text-center">注册</h4>
    <form>
      <div class="form-group">
        <input type="email" class="form-control" id="input1"  placeholder="请输入您的邮箱" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="input2" placeholder="请输入您的密码" v-model="password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" id="input3" placeholder="请确认您的密码" v-model="repassword" >
      </div>
      
      <button type="submit" class="btn btn-primary btn-block" @click.prevent="signUp()">注册</button>
    </form>
  </div>
</template>

<script>
// axios引入
import axios from 'axios';
export default {
  name: 'Register',
  data () {
    return {
      username:'',
      password:'',
      repassword:'',
    }
  },
  methods:{
    signUp(){
      if(this.repassword == this.password){
        var formData = {
          username:this.username,
          password:this.password
        }
        axios.post('./user-wyh.json',formData)
          .then(res=>{
            console.log('当前数据抛出成功')
            // 当注册成功时跳转到登录页，引导用户登陆
            // 两种方法实现跳转
            // 堆栈法
            // this.$router.push('/login')
            // 替代法
            this.$router.replace('/login')
          })
      }
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
