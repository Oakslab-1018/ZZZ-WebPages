<template>
  <div class="body">
    <img src="../../assets/secondPage/Character/v.png" alt="" />
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
.body {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url('@assets/secondPage/vvaback.webp');
  background-size: cover;
  background-position: -2000px 0px; //偏移一下背景

  img {
    position: relative;
    left: 600px;
    height: 90vh;
    opacity: 0;
    transform: translateX(-80px);
    animation: smoothAppearX 0.5s cubic-bezier(0.3, 0.9, 0.5, 1) forwards;
  }
}
</style>
