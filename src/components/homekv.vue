<template>
  <div class="home-kv">
    <div class="home-kv-notice">
      <img src="../assets/16+.png" />
    </div>
    <div class="text1">
      <p>应用名称：《绝区零》</p>
      <p>当前版本：1.5.0</p>
      <a href="https://zzz.mihoyo.com/company/privacy">
        <u style="color: white">隐私协议</u>
      </a>
      <p>PC端由米哈游官方启动器支持</p>
    </div>
    <div class="text2">
      <p>开发者名称：上海交宅科技有限公司</p>
      <p>更新时间：2025.01.22</p>
      <a href="https://zzz.mihoyo.com/news/124331">
        <u style="color: white">产品功能及用户数据</u>
      </a>
    </div>
    <div class="home-kv-slogan">
      <img class="slogan-img" src="../assets/now.png" />
      <p>canvas画布</p>
    </div>
    <div class="forlogin">
      <img src="../assets/login.png" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-kv {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
}
.home-kv-notice {
  align-self: flex-end;
  img {
    width: 70px;
    margin-left: 90px;
    margin-bottom: 40px;
  }
}
.text1 {
  width: 280px;
  align-self: flex-end;
  color: white;
  font-size: xx-small;
  font-weight: bolder;
  letter-spacing: 0;
  margin-bottom: 24px;
  margin-left: 20px;
}
.text2 {
  width: 280px;
  align-self: flex-end;
  color: white;
  font-size: xx-small;
  font-weight: bolder;
  letter-spacing: 0;
  margin-bottom: 59px;
  margin-left: 10px;
}
.home-kv-slogan {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-right: 20px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  z-index: 1;
}
.slogan-img {
  width: 800px;
}

.forlogin {
  align-self: flex-end;
  margin-right: 50px;
  margin-bottom: 40px;
  img {
    width: 220px;
  }
}
</style>
