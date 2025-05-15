<template>
  <div class="back">
    <tv />
  </div>
</template>

<script setup>
import tv from '@/components/forthPage/tv.vue'
</script>

<style lang="scss" scoped>
.back {
  position: fixed;
  width: 100vw;
  height: 100vw;
  z-index: -1;
  background-image: url('@assets/thirdPage/kv-painting/back.webp');
}
</style>
