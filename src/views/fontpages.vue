<template>
  <fixlogo />
  <changerouter class="nav" @update="update" />
  <icontool class="tool" />

  <div v-if="currentIndex == 0">
    <video id="bc-video" loop autoplay muted>
      <source src="@assets/video2.mp4" />
    </video>
    <homekv />
  </div>

  <div v-if="currentIndex == 1"><second-page /></div>

  <div v-if="currentIndex == 2"><third-page /></div>

  <div v-if="currentIndex == 3"><forth-page /></div>

  <div v-if="currentIndex == 4"><last-page /></div>
</template>

<script setup>
import { ref } from 'vue'
import icontool from '@always/icontool.vue'
import homekv from '@firstpage/homekv.vue'
import fixlogo from '@always/fix-logo.vue'
import changerouter from '@always/change-router.vue'
import secondPage from './secondPage.vue'
import thirdPage from './thirdPage.vue'
import forthPage from './forthPage.vue'
import lastPage from './lastPage.vue'

const currentIndex = ref(0)
const update = (data) => {
  console.log(data)

  currentIndex.value = data
}
</script>

<style lang="scss" scoped>
.swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}

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
  top: 45px;
  right: 100px;
  z-index: 3;
}
.nav {
  position: fixed;
  z-index: 3;
  margin-top: 380px;
  margin-left: 1370px;
}
</style>
