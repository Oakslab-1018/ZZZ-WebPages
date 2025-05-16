<template>
  <div class="bar">
    <div class="scroll-container">
      <div class="scroller">
        <img src="../../assets/secondPage/bottomscroll.png" />
        <img src="../../assets/secondPage/bottomscroll.png" />
      </div>
    </div>
    <img src="../../assets/secondPage/bottom.webp" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@keyframes scroll {
  0% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(0);
  }
}

.bar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 160px;
  z-index: 1;
  background: linear-gradient(150deg, #ADE9FE 0%, #786AFE 83%);
  img {
    position: relative;
    z-index: 1;
    left: 150px;
    top: 15px;
    width: 80%;
    height: 130px;
  }
}
.scroll-container {
  display: flex;
  position: absolute;
  bottom: 22px;
  left: 0;
  width: 100%;
  height: 140px;
}
.scroller {
  display: flex; 
  animation: scroll 10s linear infinite;
  width: 200%; 
  img {
  width: 100%;
  height: auto;
}
}
</style>
