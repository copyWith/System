<template>
  <div id="login">
    <div class="box_main">
      <div class="fade">
        <ul class="lb">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <span class="le"></span>
        <span class="ri"></span>
        <ol class="dot">
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
      <div class="login">
        <div class="main">
          <p>登陆</p>
          <input type="text" placeholder="username" class="user"/>
          <input type="password" placeholder="password" class="pwd"/>
          <button @click="click()">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data ()
  {
    return {
      testvalue: ''
    }
  }
  ,
  created:function(){
    document.querySelector('title').innerHTML = '登陆';
  }
  ,
  methods:{
    inserted:function (el) {
      document.title = el.innerHTML;
      el.remove();
    }
  ,
    click:function () {
      var user = document.querySelector(".user").value;
      var pwd = document.querySelector(".pwd").value;
      if (user == "123") {
        if (pwd == "123") {
          this.$router.push({path: '/Index'})
        } else {
          alert("用户名或密码错误！")
        }
      } else {
        alert("用户名或密码错误！")
      }
    }
  }
  ,
  mounted:function () {
    loginFade()
  }
  }
</script>

<style>
  body, html, #login {
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0;
  }

  .box_main {
    width: 100%;
    height: 100%;
  }

  .fade {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    filter: blur(2px);
    opacity: 1;
  }

  .fade ul {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .fade ul li {
    height: 100%;
    width: 100vw;
    list-style: none;
    float: left;
    background: url("../assets/images/banner1.jpg") no-repeat center;
    background-size: cover;
    opacity: 0;
    position: absolute;
  }

  .fade ul li:nth-child(1) {
    opacity: 1;
  }

  .fade ul li:nth-child(2) {
    background: url("../assets/images/banner2.jpg") no-repeat center;
  }

  .fade ul li:nth-child(3) {
    background: url("../assets/images/banner3.jpg") no-repeat center;
  }

  .fade ul li:nth-child(4) {
    background: url("../assets/images/banner1.jpg") no-repeat center;
  }

  .login {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .3);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 6;
  }

  .main {
    width: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -150px;
    margin-top: -100px;
  }

  .main p {
    font-weight: bold;
    font-size: 25px;
    color: #fff;
    text-align: center;
  }

  .main input {
    width: 250px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 10px 15px;
    height: 42px;
    box_main-sizing: border-box_main;
    display: block;
    transition-duration: 0.25s;
    outline: none;
    margin: 10px auto;
    color: #fff;
    text-align: center;
    font-size: 18px;
  }

  .main input:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  .main input:focus {
    background-color: white;
    width: 300px;
    color: #53e3a6;
  }

  .main button {
    background-color: #f5f7f9;
    box_main-shadow: 0 15px 30px 0 rgba(255, 255, 255, .15) inset, 0 2px 7px 0 rgba(0, 0, 0, .2);
    outline: none;
    border: 0;
    padding: 10px 15px;
    color: #53e3a6;
    border-radius: 3px;
    width: 250px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.25s;
    height: 44px;
    display: block;
    margin: 25px auto;
    text-shadow: 0 1px 2px rgba(0, 0, 0, .1);
    box_main-sizing: border-box_main;
  }

  ::-webkit-input-placeholder {
    font-family: 'Source Sans Pro', sans-serif;
    color: white;
    font-weight: 300;
  }
</style>
