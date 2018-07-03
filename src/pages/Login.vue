<template>
  <div id="app">
    <h1 style="color:aliceblue">欢迎使用 LON 管理平台</h1>
    <el-row>
      <el-col :span="8" :offset="8">
        <div>
          <el-form :model="form" class="loginWarp">
            <el-row>
              <el-col><img :src="logoPic" alt="" style="width: 200px;height: 100px;padding: 20px 0;"></el-col>
            </el-row>
            <div>
              <el-form-item class="loginParam">
                <el-input v-model="form.username" :placeholder="prefrom.username"></el-input>
              </el-form-item>
              <el-form-item class="loginParam">
                <el-input v-model="form.password" :placeholder="prefrom.password"></el-input>
              </el-form-item>
              <el-form-item class="loginParam">
                <el-checkbox v-model="form.isAuth" style="float: left;">下次自动登录</el-checkbox>
                <a href="https://www.baidu.com/">忘记密码</a>
              </el-form-item>
              <el-form-item>
                <el-button class="loginButton" type="primary" plain v-on:click="login">登录</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  data(){
    return{
      prefrom:{
        username:'手机号/账户名/邮箱',
        password:'密码'
      },
      form: {
        username: '',
        password: '',
        isAuth:false
      },
      logoPic:require('../assets/logo.png')
    }
  },
  methods:{
    login:function(){
      if(this.form.username == undefined || this.form.username == "") {
        alert('用户名不能为空');
        return false;
      }
      if(this.form.password == undefined || this.form.password == "") {
        alert('密码不能为空');
        return false;
      }
      this.api.getMethod('/api/login.mc',this.form).then(function (response) {
        if(response.code == "0001"){
          alert(response.msg);
          // 路由跳转页面
        }
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
}
</script>

<style>
  #app{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: cadetblue;
  }
  .loginWarp{
    background-color: #fff;
    border-radius: 5px;
  }
  .loginParam{
    width: 75%;
    margin:10px auto;
  }
  .loginButton{
    width: 75%;
    margin:10px auto;
  }
  .loginParam a{
    color: black;
    float: right;
    text-decoration:none;
  }
  .loginParam a:hover{
    color: cornflowerblue;
  }
</style>
