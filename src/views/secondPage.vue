<template>
  <div><vva v-if="currentIndex == 0" /></div>
  <div><ugo v-if="currentIndex == 1" /></div>
  <changeCharacter @update="update1" />
</template>

<script setup>
import changeCharacter from '@/components/secondPage/changeCharacter.vue'
import vva from '@/components/secondPage/vva.vue'
import ugo from '@/components/secondPage/ugo.vue'
import { ref } from 'vue'

const currentIndex = ref(0)
const update1 = (data) => {
  console.log(data)
  currentIndex.value = data
}
</script>

<style lang="scss" scoped></style>
