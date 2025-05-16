<template>
  <div class="box">
    <div class="txt">
      <p class="txt1" v-for="(item, index) in images" v-show="index == currentIndex">
        {{ item.head }}
      </p>
      <p
        class="txt2"
        v-for="(item, index) in images"
        v-show="index == currentIndex"
        style="white-space: pre-line"
      >
        {{ item.txt }}
      </p>
    </div>
    <div class="tv">
      <div class="container">
        <img
          v-for="(item, index) in images"
          class="pic"
          :key="index"
          :src="item.img"
          :style="{ left: index * 100 + '%', transform: dynamicstyle }"
        />
      </div>
      <div class="change">
        <div class="last" @click="prevSlide"></div>
        <div class="next" @click="nextSlide"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  {
    img: 'src/assets/forthPage/pic1.png',
    head: '全新放送',
    txt: '活动期间，参与签到即得「加密母带」*10！',
  },
  {
    img: 'src/assets/forthPage/pic2.png',
    head: '嗯呢从天降',
    txt: '活动期间，参与签到即得「邦布券」*10！',
  },
  {
    img: 'src/assets/forthPage/pic3.png',
    head: '花语未名之言',
    txt: '未曾言说的话，或许可以用一束被朝露点缀的鲜花表达。\n但请注意：为免误解，请谨慎选择花艺师。',
  },
  {
    img: 'src/assets/forthPage/pic4.png',
    head: '邦邦冲冲冲',
    txt: '「玛瑟尔大冒险」段位赛开始啦！\n带上小邦布，挤掉对手往前冲~',
  },
]

const currentIndex = ref(0)
const dynamicstyle = ref('')
let interval = null

const setStyle = () => {
  dynamicstyle.value = `translateX(-${currentIndex.value * 100}%)`
}
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
  setStyle()
}
const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  setStyle()
}
const startSlideshow = () => {
  interval = setInterval(() => {
    nextSlide()
  }, 2000)
}
onMounted(() => {
  if (interval) clearInterval(interval)
  startSlideshow()
})
onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<style lang="scss" scoped>
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
  position: absolute;
  overflow: hidden;
  margin-left: 130px;
  margin-top: 200px;
  width: 600px;
  height: 500px;
  opacity: 0;
  transform: translateY(20px);
  animation: smoothAppear 1s cubic-bezier(0.3, 0.9, 0.5, 1.2) forwards;
}
.txt1 {
  position: absolute;
  font-weight: 1000;
  font-size: 4vw;
  margin-bottom: 30px;
  letter-spacing: 5px;
  background: linear-gradient(150deg, #a9d5b8 0%, #4ec3ce 83%);
  background-clip: text; /* 关键：将背景裁剪为文字形状 */
  color: transparent; /* 隐藏原有文字颜色 */
}
.txt2 {
  position: absolute;
  margin-top: 230px;
  color: rgb(158, 158, 158);
  letter-spacing: -1px;
  font-family: Microsoft JhengHei;
  font-size: xx-large;
  font-weight: 1000;
}

.tv {
  position: absolute;
  left: 750px;
  top: 200px;
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
  position: relative;
  overflow: hidden;
  width: 740px;
  height: 375px;
  right: 40px;
  bottom: 35px;
  margin: 0;
  padding: 0;
}
.pic {
  width: 100%;
  height: 100%;
  display: inline-block;
  position: absolute;
  transition: 0.5s transform ease-in-out;
}
</style>
