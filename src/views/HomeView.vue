<template>
  <div class="home">
    <div class="AllFather">
      <div class="title">To Do Event(LeonTest-Hook)</div>
      <div class="father">
        <div class="login">
          <div class="inputFather">
            <i class="el-icon-user"></i>
            <div class="bottom_border">
              <input class="input" type="text" />
            </div>
          </div>
          <div class="inputFather">
            <i class="el-icon-key"></i>
            <div class="bottom_border">
              <input class="input" type="password" />
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="a">
            <div>Forget Password</div>
            <div @click="toRegistered('/registered')">Registered Account</div>
          </div>
          <div @click="toRegistered('/mian')" class="button">Login</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "../router/index";
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "HomeView",
  data() {
    return {
      message: "aaa",
    };
  },
  created() {
    console.log(1);
  },
  methods: {
    toRegistered: function (a) {
      router.push(a);
    },
  },
  mounted() {},
};
</script>
<style scoped>
* {
  font-size: 14px;
  color: #000;
}
.AllFather {
  animation: myfirst 2s;
  -webkit-animation: myfirst 2s;
  animation-fill-mode: forwards;
}
@-webkit-keyframes myfirst {
  0% {
    opacity: 0;
    bottom: 800px;
  }
  100% {
    opacity: 1;
  }
}
i {
  font-size: 16px;
}
.inputFather {
  display: flex;
  width: 200px;
  margin: 30px;
}
.input {
  border: none;
  box-shadow: none;
  outline: none;
}
.bottom_border {
  width: 150px;
  border-bottom: 1px solid darkturquoise;
}

.a {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.title {
  font-weight: bold;
  font-size: 18px;
  color: darkturquoise;
  margin-bottom: 15px;
}
.button {
  text-align: center;
  line-height: 25px;
  width: 90%;
  height: 25px;
  background-color: white;
  color: darkturquoise;
  opacity: 0.6;
  margin: 10px;
  border-radius: 10px;
}
.bottom {
  margin: 10px;
  font-weight: bold;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
.home {
  background-image: linear-gradient(
    141deg,
    #d6eee4 0%,
    #afebf1 51%,
    #bde6f5 75%
  );
  display: flex;
  width: 100%;
  top: 0;
  position: absolute;
  bottom: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.father {
  width: 320px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  height: 200px;
  background-color: white;
  opacity: 0.6;
}
</style>