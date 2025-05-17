<template>
  <div class="back">
    <div class="txt">
      <img src="../assets/thirdPage/new content.png" class="img1" />
      <p class="txt1">全新主线章节</p>
      <p class="txt1">将眼泪与过往一同埋葬 下</p>
      <p class="txt2">她预见苦难，但「命运」愿歌颂希望。</p>
    </div>
    <img src="../assets/thirdPage/kv-painting/1.png" class="kv" />
  </div>
  <bottombar2 />
</template>

<script setup>
import bottombar2 from '@/components/thirdPage/bottombar2.vue';
</script>

<style lang="scss" scoped>
@keyframes smoothAppearY {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.back {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url('@assets/thirdPage/kv-painting/back.webp');
}
.kv {
  position: relative;
  z-index: 1;
  margin-left: 350px;
}
.txt {
  position: absolute;
  z-index: 3;
  margin-left: 130px;
  margin-top: 250px;
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 800px;
}
.img1 {
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  animation: smoothAppearY 0.6s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
}
.txt1 {
  margin: 0;
  font-weight: 900;
  font-size: 2.1vw;
  background: linear-gradient(150deg, #797979 0%, #ffffff 53%);
  background-clip: text; 
  color: transparent; 
  opacity: 0;
  transform: translateY(20px);
  animation: smoothAppearY 0.7s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
}
.txt2 {
  margin-top: 40px;
  font-weight: 900;
  font-size: 1.2vw;
  margin-bottom: 30px;
  color: #ababab;
}
</style>
