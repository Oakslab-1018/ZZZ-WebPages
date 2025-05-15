<template>
  <div class="body">
    <img
      src="../assets/thirdPage/kv-painting/1.png"
      style="position: relative; z-index: 1; height: 100%"
    />
  </div>
  <bottombar />
</template>

<script setup>
import bottombar from '@/components/always/bottombar.vue'
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-image: url('@assets/thirdPage/kv-painting/back.webp');
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}
</style>
