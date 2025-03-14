<template>
  <ul class="nav">
    <li class="nav-li" v-for="item in arr">
      <div class="text">
        <p>{{ item.eng }}</p>
        <p>{{ item.cn }}</p>
      </div>
      <div class="checkbox"></div>
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
  transition: transform 0.3s ease; /* 添加过渡效果,ease 慢快慢的时间函数 */
}
</style>
