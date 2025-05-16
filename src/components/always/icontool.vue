<template>
  <div class="tool">
    <div class="social">
      <img src="@assets/icon-tool/round-social.png" />
    </div>
    <div class="download">
      <img src="@assets/icon-tool/round-endownload.png" />
    </div>
    <div class="music" v-if="havemusic" @click="changemusic">
      <img src="@assets/icon-tool/music.png" />
    </div>
    <div v-else @click="changemusic">
      <img src="@assets/icon-tool/no-music.png" />
    </div>
    <div class="share">
      <img src="@assets/icon-tool/round-share.png" />
    </div>
    <div class="home">
      <img src="@assets/icon-tool/round-home.png" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const havemusic = ref(true)
const music = new Audio()
onMounted(() => {
  setTimeout(() => {
    music.src = 'src/assets/audio/bgm.mp3'
    music.play()
  }, 3000)
})
const changemusic = () => {
  havemusic.value = !havemusic.value
  if (havemusic.value) {
    music.play()
  } else {
    music.pause()
  }
}
</script>

<style lang="scss" scoped>
.tool {
  display: flex;
  div {
    margin-left: 10px;
    cursor: pointer;
    img {
      width: 55px;
    }
  }
}
.social {
  transition: filter 0.3s ease;
}
.social:hover {
  filter: brightness(1.5);
}
.download {
  transition: filter 0.3s ease;
}
.download:hover {
  filter: brightness(1.5);
}
.music {
  transition: filter 0.3s ease;
}
.music:hover {
  filter: brightness(1.5);
}
.share {
  transition: filter 0.3s ease;
}
.share:hover {
  filter: brightness(1.5);
}
.home {
  transition: filter 0.3s ease;
}
.home:hover {
  filter: brightness(1.5);
}
</style>
