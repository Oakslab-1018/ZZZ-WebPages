<template>
  <ul class="nav">
    <li class="nav-li" v-for="(item, index) in arr" :key="index" @click="changeIndex(index)">
      <div class="text">
        <p>{{ item.eng }}</p>
        <p>{{ item.cn }}</p>
      </div>
      <div class="checkbox" :class="{ yellow: currentIndex === index }"></div>

    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'
   const arr = ref([
  { eng: 'HOMEPAGE', cn: '首页' },
  { eng: 'CHARACTERS', cn: '角色介绍' },
  { eng: 'NEW CONTENT', cn: '全新内容' },
  { eng: 'EVENTS', cn: '游戏活动' },
  { eng: 'FEATURES', cn: '游戏特色' },
])

//子传父 定义触发的事件及其数据类型
const emit = defineEmits(['update']);

const currentIndex = ref(0) //当前索引
const changeIndex = (index) => {
  emit('update',index)
  currentIndex.value = index
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: column;
  z-index: 3;
  height: 100vh;
}
.nav-li {
  cursor: pointer;
  display: flex;
  justify-content: end;
  width: 200px;
  margin-top: 3px;
  // outline: auto white;
}
.nav-li:hover {
  .checkbox {
    transform: scaleY(3.5);
  }
  .text {
    opacity: 1;
    transform: translateX(-10%);
  }
}
.text {
  display: flex;
  height: 50px;
  flex-direction: column;
  opacity: 0;
  transition: transform 0.5s ease;
  p {
    height: 20px;
    margin: 0;
    font-size: x-small;
    color: rgb(205, 209, 212);
    font-weight: 1000;
    line-height: 0;
  }
}
.checkbox {
  width: 10px;
  height: 10px;
  margin-top: 5px;
  border-radius: 2px;
  background-color: rgb(193, 195, 197);
  transition: transform 0.3s ease; /* 添加过渡效果,ease 是 慢快慢的时间函数 */
}
.yellow {
  transform: scaleY(3.5);
  background-color: rgb(241, 165, 104);
}
</style>
