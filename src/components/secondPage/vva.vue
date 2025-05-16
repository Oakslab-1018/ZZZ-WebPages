<template>
  <div class="back">
    <div class="dynamic-font">
      <img src="../../assets/secondPage/text/vi.png" class="v" />
      <img src="../../assets/secondPage/text/vi2.png" class="v2" />
      <img src="../../assets/secondPage/text/an.png" class="an" />
    </div>
    <div class="txt">
      <p class="txt1">反舌鸟</p>
      <p class="txt2">薇薇安</p>
    </div>
    <img src="../../assets/secondPage/Character/v.png" class="vva" />
  </div>
  <bottombar />
</template>

<script setup>
import bottombar from '@/components/always/bottombar.vue'
</script>

<style lang="scss" scoped>
@keyframes smoothAppearY {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes smoothAppearX {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.back {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url('@assets/secondPage/vvaback.webp');
  background-size: cover;
  background-position: -200px 0px; //偏移一下背景

  .txt {
    position: relative;
    z-index: 6;
    margin-left: 180px;
    margin-right: 20px;
    margin-top: 210px;
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 200px;
    opacity: 0;
    transform: translateY(20px);
    animation: smoothAppearY 0.4s cubic-bezier(0.3, 0.9, 0.5, 1.2) forwards;
  }
  .txt1 {
    margin: 0;
    font-weight: 550;
    font-size: 2vw;
    background: linear-gradient(150deg, #797979 0%, #ffffff 53%);
    background-clip: text; /* 关键：将背景裁剪为文字形状 */
    color: transparent; /* 隐藏原有文字颜色 */
  }
  .txt2 {
    margin-top: 0;
    font-weight: 1000;
    font-size: 3vw;
    margin-bottom: 30px;
    letter-spacing: 5px;
    background: linear-gradient(150deg, #797979 0%, #ffffff 43%);
    background-clip: text; /* 关键：将背景裁剪为文字形状 */
    color: transparent; /* 隐藏原有文字颜色 */
  }

  .dynamic-font {
    position: absolute;
    top: 35%;
    left: 18%;
    z-index: 0;
    height: 30%;
    width: 20%;
    display: flex;
    .v {
      margin-left: -235px;
      opacity: 0;
      transform: translateX(-90px);
      animation: smoothAppearX 0.4s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
    }
    .v2 {
      margin-left: -235px;
      opacity: 0;
      transform: translateX(-150px);
      animation: smoothAppearX 0.5s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
    }
    .an {
      margin-left: -305px;
      opacity: 0;
      transform: translateX(-200px);
      animation: smoothAppearX 0.6s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
    }
  }

  .vva {
    position: relative;
    z-index: 3;
    height: 100vh;
    opacity: 0;
    transform: translateX(-80px);
    animation: smoothAppearX 0.5s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
  }
}
</style>
