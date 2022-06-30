<template>
  <div class="list" @click="toDetailsList">
    <div class="Oneline">
      <div>家庭作业</div>
      <div class="fa">
        <div class="xiao">体</div>
        <div>已完成</div>
      </div>
    </div>
    <div class="detail"></div>
    <div class="Twoline">
      <div>爸爸的任务</div>
      <div>共1项</div>
    </div>
    <div class="Threeline">
      <div>报告异常</div>
      <div>部分已出</div>
    </div>
    <div class="hr"></div>
    <div class="Foreline">
      <div>发布时间：2021-4-2</div>
      <div>接受时间:2021-4-2</div>
    </div>
    <div class="Foreline">
      <div>任务号：2984792849283493</div>
    </div>
  </div>
</template>

<script>
import router from "../router/index";
export default {
  methods: {
    toDetailsList: function () {
      router.push("/detail");
    },
  },
};
</script>

<style  scoped>
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
</style>