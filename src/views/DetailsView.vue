<template>
  <div class="home">
    <div class="Top">
      <div>
        <i class="el-icon-back" @click="toRegistered"></i>
      </div>
      <div>详情</div>
      <div>
        <i @click="toDetail" class="el-icon-user"></i>
      </div>
    </div>
    <div style="width: 95%" class="fatherss">
      <DetailsList />
    </div>
  </div>
</template>

<script>
import router from "../router/index";
import DetailsList from "@/components/DetailsList.vue";
export default {
  name: "MainView",
  components: {
    DetailsList,
  },
  data() {
    return {
      message: "aaa",
    };
  },
  created() {
    // console.log(1);
  },
  methods: {
    toRegistered: function () {
      router.back(-1);
    },
    toDetail: function () {
      router.push("/detail");
    },
  },
  mounted() {},
};
</script>

<style  scoped>
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
.Foreline {
  margin: 5px;
  width: 95%;
  display: flex;
  justify-content: space-between;
  color: #ccc;
  font-size: 12px;
}
.hr {
  margin-left: 2.5%;
  opacity: 0.5;
  height: 1px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 95%;
  border-bottom: 1px solid #ccc;
}
.Threeline > div:first-child {
  width: 60px;
  background-color: pink;
  border-radius: 5px;
  margin-left: 10px;
  opacity: 0.8;
}
.Threeline > div:last-child {
  width: 60px;
  background-color: #ccc;
  border-radius: 3px;
  margin-left: 10px;
  opacity: 0.8;
}
.Threeline {
  margin-top: 10px;
  margin-right: 10px;
  color: rgb(136, 135, 135);
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.Twoline {
  color: rgb(136, 135, 135);
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.Twoline > div:first-child {
  margin-left: 10px;
}
.Twoline > div:last-child {
  font-size: 12px;
  margin-right: 10px;
}
.fa {
  display: flex;
}
.xiao {
  margin: 2px;
  width: 15px;
  height: 15px;
  font-weight: bold;
  border-radius: 50%;
  color: aquamarine;
  background-color: white;
  line-height: 15px;
}
.Oneline {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.Oneline > div:first-child {
  font-size: 18px;
  margin-left: 10px;
  font-weight: bolder;
}
.Oneline > div:last-child {
  line-height: 20px;
  font-size: 12px;
  width: 80px;
  height: 20px;
  margin-right: 5px;
  color: white;
  background-color: turquoise;
  border-radius: 10px 0 0 10px;
}
#yuan {
  width: 50px;
  height: 40px;
  border-radius: 50%;
}
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  margin-bottom: 10px;
  background-color: white;
}
.main > div {
  color: white;
  width: 100px;
  height: 30px;
  background-color: rgb(141, 243, 94);
  border-radius: 40px;
  line-height: 30px;
  margin-right: 10px;
}
.main {
  font-size: 14px;
  display: flex;
  height: 50px;
  width: 95%;
  margin-top: 15px;
}
.all {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.all > div {
  margin-top: 5px;
  width: 80%;
  text-align: left;
  margin-left: 10px;
}
.uses > div {
  margin-top: 5px;
  width: 80%;
  text-align: left;
  margin-left: 10px;
}
.uses {
  width: 200px;
  display: flex;
  flex-direction: row;
  margin-right: 10px;
}
.Userinfo {
  color: white;
  margin-top: 20px;
  width: 95%;
  height: 100px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: darkturquoise;
  border: 0.5 solid #afebf1;
  box-shadow: #afebf1;
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