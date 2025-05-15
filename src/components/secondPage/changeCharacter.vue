<template>
  <ul class="character">
    <li
      v-for="(item, index) in characterList"
      :key="index"
      :class="{ shine: currentIndex === index }"
      @click="changeIndex(index)"
    >
      <img :src="item.image" />
    </li>
  </ul>
</template>
<script setup>
import { ref } from 'vue'
const characterList = ref([
  { image: 'src/assets/secondPage/Character/vva.png' },
  { image: 'src/assets/secondPage/Character/ugo.png' },
])
const emit = defineEmits(['update'])

const currentIndex = ref(0)
const changeIndex = (index) => {
  emit('update', index)
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.character {
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  height: 100vh;
}
img {
  width: 80px;
  height: 80px;
  margin-bottom: 40px;
  margin-right: 220px;
}
li:last-child {
  margin-bottom: 270px;
}
li:hover {
  cursor: pointer;
  filter: brightness(130%);
}
.shine {
  filter: brightness(130%);
}
</style>
