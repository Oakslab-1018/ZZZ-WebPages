<template>
  <video id="bc-video" loop autoplay muted>
    <source src="../assets/vedio1.mp4" />
  </video>
  <fixlogo />
  <changerouter class="nav" />
  <icontool class="tool" />
  <homekv />
</template>

<script setup>
import icontool from '../components/icontool.vue'
import homekv from '../components/homekv.vue'
import fixlogo from '../components/fix-logo.vue'
import changerouter from '../components/change-router.vue'
</script>

<style lang="scss" scoped>
#bc-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  object-position: center center;
  z-index: -1;
}
.tool {
  position: fixed;
  padding-top: 30px;
  padding-left: 1300px;
  z-index: 3;
}
.nav {
  position: fixed;
  margin-top: 380px;
  margin-left: 1370px;
}
</style>
