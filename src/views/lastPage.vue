<template>
  <div class="back">
    <tv2 />
    <bottombar3 />
  </div>
</template>

<script setup>
import tv2 from '@/components/lastPage/tv2.vue';
import bottombar3 from '@/components/lastPage/bottombar3.vue';
</script>

<style lang="scss" scoped>
.back {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1; 
  background-image: url("@assets/thirdPage/kv-painting/back.webp");
}
</style>
