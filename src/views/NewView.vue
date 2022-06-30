<template>
  <div class="home">
    <div class="Top">
      <div>
        <i class="el-icon-back" @click="toRegistered"></i>
      </div>
      <div>新建任务</div>
      <div>
        <i @click="toDetail" class="el-icon-user"></i>
      </div>
    </div>
    <div class="list">
      <div class="one">
        <div class="title">标题:</div>
        <div>
          <div class="bottom_border">
            <input class="input" type="text" placeholder="输入标题" />
          </div>
        </div>
      </div>
      <div class="one">
        <div class="title1">派送:</div>
        <div>
          <div>
            <select class="input select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div class="one">
        <div class="title1">成功积分:</div>
        <div>
          <div>
            <select
              class="input select"
              v-model="ProductActive"
              @change="changeProduct($event)"
            >
              <option
                v-for="(item, index) in productList"
                :key="index"
                :value="item.id"
              >
                {{ item.title }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="one">
        <div class="title1">截止日期:</div>
        <div>
          <div>
            <select class="input select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </div>
      <div class="one">
        <div class="title1">任务备注:</div>
        <div>
          <div class="bottom_border">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="textarea"
            >
            </el-input>
          </div>
        </div>
      </div>
    </div>
    <div class="button" @click="submit">发布</div>
  </div>
</template>

<script>
import router from "../router/index";
import { get, post } from "../request/index"; // eslint-disable-line no-unused-vars
export default {
  name: "MainView",
  components: {},
  data() {
    return {
      message: "aaa",
      textarea: "",
      productList: [
        { id: 1, title: "北京" },
        { id: 2, title: "上海" },
        { id: 3, title: "广州" },
        { id: 4, title: "四川" },
      ],
      ProductActive: "1", //获取被选中的value值 默认选中的是1(北京)
    };
  },
  created() {
    // console.log(1);
  },
  methods: {
    submit() {
      console.log(this.textarea);
    },
    changeProduct(event) {
      this.ProductActive = event.target.value; //获取option对应的value值
      console.log("你选中了", this.ProductActive);
      post("/created", { beizhu: this.textarea });
    },
    toRegistered: function () {
      router.back(-1);
    },
    toDetail: function () {
      // router.push("/detail");
    },
  },
  mounted() {},
};
</script>

<style  scoped>
.button {
  font-weight: bold;
  animation: myfirst 2s;
  -webkit-animation: myfirst 2s;
  animation-fill-mode: forwards;
  text-align: center;
  line-height: 30px;
  width: 95%;
  height: 30px;
  color: darkturquoise;
  background-color: white;
  opacity: 0.8;
  margin: 10px;
  border-radius: 10px;
}
.select {
  width: 140px;
}
.one {
  margin-top: 15px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: start;
}
.bottom_border {
  margin-left: 10px;
  border-bottom: 1px solid darkturquoise;
}
.input {
  background-color: transparent;
  /* -COLOR: transparent; */
  border: none;
  box-shadow: none;
  outline: none;
}
.title1 {
  text-align: left;
  width: 70px;
  font-size: 14px;
  margin-left: 10px;
  font-weight: bolder;
}
.title {
  text-align: left;
  width: 70px;
  font-size: 18px;
  margin-left: 10px;
  font-weight: bolder;
}
@-webkit-keyframes myfirst {
  /* eslint-disable-line no-unused-vars */
  0% {
    opacity: 0;
    bottom: 800px;
  }
  100% {
    opacity: 1;
  }
}
.list {
  animation: myfirst 2s;
  -webkit-animation: myfirst 2s;
  animation-fill-mode: forwards;
  color: darkturquoise;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 95%;
  height: 260px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
  opacity: 0.8;
}
.Top {
  line-height: 40px;
  display: flex;
  width: 100%;
  height: 40px;
  background-color: white;
  font-size: 19px;
  font-weight: bold;
  justify-content: space-between;
  margin-bottom: 10px;
}
i {
  font-size: 26px;
  margin-left: 10px;
  margin-right: 10px;
}

.home {
  background-image: linear-gradient(
    141deg,
    #d6eee4 0%,
    #afebf1 51%,
    #bde6f5 75%
  );
  min-height: 750px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>