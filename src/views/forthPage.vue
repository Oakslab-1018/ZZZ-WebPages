<template>
  <div class="back">
    <tv />
  </div>
  <bottombar2 />
</template>

<script setup>
import tv from '@/components/forthPage/tv.vue'
import bottombar2 from '@/components/thirdPage/bottombar2.vue'
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
