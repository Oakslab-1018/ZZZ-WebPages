<template>
  <div class="back">
    <img src="../../assets/secondPage/Character/u.png" alt="" />
  </div>
  <bottombar />
</template>

<script setup>
import bottombar from '@/components/always/bottombar.vue'
</script>

<style lang="scss" scoped>
@keyframes smoothAppearX {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.back {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url('@assets/secondPage/ugoback.webp');
  background-position: -600px 0px; //偏移一下背景

  img {
    position: relative;
    left: 400px;
    height: 90vh;
    opacity: 0;
    transform: translateX(-80px);
    animation: smoothAppearX 0.5s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
  }
}
</style>
