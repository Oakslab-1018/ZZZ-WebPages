<template>
  <div class="box">
    <img class="feature" src="../../assets/fifthPage/fetures.webp" />
    <div class="txt">
      <p class="txt1" v-for="(item, index) in images" v-show="index == currentIndex">
        {{ item.head }}
      </p>
      <p class="txt1" v-for="(item, index) in images" v-show="index == currentIndex">
        {{ item.head2 }}
      </p>
    </div>
    <img
      class="eng"
      :src="item.eng"
      :key="index"
      v-show="index == currentIndex"
      v-for="(item, index) in images"
    />
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
import { ref,onMounted,onUnmounted } from 'vue'

const images = [
  {
    img: 'src/assets/fifthPage/pic1.webp',
    head: '双重身份',
    head2: '别样生活',
    eng: 'src/assets/fifthPage/e1.webp',
  },
  {
    img: 'src/assets/fifthPage/pic2.webp',
    head: '小队组合',
    head2: '高速激斗',
    eng: 'src/assets/fifthPage/e2.webp',
  },
  {
    img: 'src/assets/fifthPage/pic3.webp',
    head: '独特音画',
    head2: '沉浸体验',
    eng: 'src/assets/fifthPage/e3.webp',
  },
  {
    img: 'src/assets/fifthPage/pic4.webp',
    head: '多方势力',
    head2: '惊喜邂逅',
    eng: 'src/assets/fifthPage/e4.webp',
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
.feature {
  margin-left: 150px;
  margin-top: 220px;
  width: 500px;
  height: 100px;
}
.txt {
  position: absolute;
  overflow: hidden;
  margin-left: 160px;
  margin-top: 320px;
  width: 480px;
  height: 300px;
  opacity: 0;
  transform: translateY(20px);
  animation: smoothAppear 1s cubic-bezier(0.3, 0.9, 0.5, 1.2) forwards;
}
.txt1 {
  margin: 5px;
  position: relative;
  font-weight: 1000;
  font-size: 6.2vw;
  background: linear-gradient(150deg, #f8a44e 0%, #f8be4e 83%);
  background-clip: text;
  color: transparent; 
}
.eng {
  position: relative;
  top: 670px;
  right: 475px;
  width: 500px;
  height: 55px;
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
