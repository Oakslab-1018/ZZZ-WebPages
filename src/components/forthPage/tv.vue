<template>
  <div class="box">
    <div class="txt">
      <p class="txt1">全新放送</p>
      <p class="txt2">活动期间，参与签到即得「加密母带」*10！</p>
    </div>
    <div class="tv">
      <ul class="container">
        <li v-for="(item, index) in images" class="pic" v-show="index == 0">
          <img :src="item.img" />
        </li>
      </ul>
      <div class="change">
        <div class="last"></div>
        <div class="next"></div>
      </div>
    </div>
    <bottombar />
  </div>
</template>

<script setup>
import bottombar from '../always/bottombar.vue'
const images = [
  {
    img: 'src/assets/forthPage/pic1.png',
    head: '全新放送',
    txt: '活动期间，参与签到即得「加密母带」*10！',
  },
  {
    img: 'src/assets/forthPage/pic3.png',
    head: '嗯呢从天降',
    txt: '活动期间，参与签到即得「邦布券」*10！',
  },
  {
    img: 'src/assets/forthPage/pic4.png',
    head: '花语未名之言',
    txt: '活动期间，参与签到即得「加密母带」*10！',
  },
  {
    img: 'src/assets/forthPage/pic2.png',
    head: '邦邦冲冲冲',
    txt: '活动期间，参与签到即得「加密母带」*10！',
  },
]
</script>

<style lang="scss" scoped>
//字体出现动画
@keyframes smoothAppear {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.box {
  display: flex;
  width: 100%;
  height: 100%;
}
.txt {
  margin-left: 130px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  opacity: 0;
  transform: translateY(20px);
  animation: smoothAppear 1s cubic-bezier(0.3, 0.9, 0.5, 1.2) forwards;
}
.txt1 {
  font-weight: 1000;
  font-size: 4vw;
  margin-bottom: 30px;
  letter-spacing: 5px;
  background: linear-gradient(150deg, #a9d5b8 0%, #4ec3ce 83%);
  background-clip: text; /* 关键：将背景裁剪为文字形状 */
  color: transparent; /* 隐藏原有文字颜色 */
}
.txt2 {
  margin: 0;
  color: rgb(158, 158, 158);
  letter-spacing: -1px;
  font-family: Microsoft JhengHei;
  font-size: xx-large;
  font-weight: 1000;
}

.tv {
  position: absolute;
  left: 750px;
  top: 250px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  width: 820px;
  height: 530px;
  background-image: url('@assets/forthPage/tv.webp');
  background-size: 100% 100.5%;
  background-repeat: no-repeat;
}
.change {
  display: flex;
  justify-content: space-around;
  width: 180px;
  height: 70px;
  margin-right: 20px;
  margin-bottom: 7px;
}
.change:hover {
  cursor: pointer;
}
.last {
  position: relative;
  left: 10px;
  z-index: 2;
  width: 85px;
  height: 55px;
  background-image: url('@assets/forthPage/last.webp');
  background-size: 95%;
  background-repeat: no-repeat;
}
.next {
  position: relative;
  right: 5px;
  width: 85px;
  height: 55px;
  background-image: url('@assets/forthPage/next.webp');
  background-size: 95%;
  background-repeat: no-repeat;
}
.container {
  width: 740px;
  height: 370px;
  position: relative;
  right: 40px;
  bottom: 40px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  list-style: none;
  display: flex;
}
.pic {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
