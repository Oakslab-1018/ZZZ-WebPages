<template>
  <div class="home-kv">
    <div class="home-kv-notice">
      <img src="@assets/16+.png" />
    </div>
    <div class="text1">
      <p>应用名称：《绝区零》</p>
      <p>当前版本：1.7.0</p>
      <a href="https://zzz.mihoyo.com/company/privacy">
        <u style="color: white">隐私协议</u>
      </a>
      <p>PC端由米哈游官方启动器支持</p>
    </div>
    <div class="text2">
      <p>开发者名称：上海交宅科技有限公司</p>
      <p>更新时间：2025.04.23</p>
      <a href="https://zzz.mihoyo.com/news/124331">
        <u style="color: white">产品功能及用户数据</u>
      </a>
    </div>
    <div class="home-kv-slogan">
      <img class="slogan-img" src="@assets/now.png" />
      <div class="buttons">
        <div id="dynamicIcon1">
          <img src="@assets//dynamic-font/领.png" class="dn1" />
          <img src="@assets/dynamic-font/30.png" class="dn2" />
          <img src="@assets/dynamic-font/抽.png" class="dn3" />
          <img src="@assets/dynamic-font/！.webp" class="dn4" />
        </div>
        <img src="@assets/buttons/download.webp" class="btn" />
        <img src="@assets/buttons/cloud.webp" class="btn" />
        <div id="dynamicIcon2">
          <img src="@assets//dynamic-font/pc.webp" />
        </div>
      </div>
      <div class="next">
        <img src="@assets/dynamic-font/downpage.webp" />
      </div>
    </div>
    <div class="forlogin">
      <img src="@assets/login.png" />
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
  margin-right: 120px;
  margin-bottom: 20px;
  width: 800px;
}

.buttons {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 580px;
  height: 100px;
  margin-right: 160px;
  margin-top: -35px;

  .btn {
    width: 250px;
    height: 70px;
    margin-top: 20px;
    cursor: pointer;
  }
}

#dynamicIcon1 {
  display: flex;
  padding: 5px;
  position: absolute;
  img {
    width: 30px;
    height: 27px;
  }
  .dn1 {
    position: absolute;
    right: 70px;
    animation: moveUpDown 1.8s infinite;
  }
  .dn2 {
    position: absolute;
    right: 45px;
    animation: moveUpDown 1.8s infinite;
    animation-delay: 100ms;
  }
  .dn3 {
    position: absolute;
    right: 20px;
    animation: moveUpDown 1.8s infinite;
    animation-delay: 200ms;
  }
  .dn4 {
    position: absolute;
    right: 0;
    animation: moveUpDown 1.8s infinite;
    animation-delay: 300ms;
  }
}

@keyframes moveUpDown {
  //利用关键帧技术实现动画
  0% {
    top: 6px;
  }
  15% {
    top: 0;
  }
  25% {
    top: 6px;
  }
  100% {
    top: 6px;
  }
}

#dynamicIcon2 {
  display: flex;
  padding: 5px;
  position: absolute;
  right: 0;
  img {
    width: 80px;
  }
}

.forlogin {
  align-self: flex-end;
  margin-right: 50px;
  margin-bottom: 40px;
  img {
    width: 220px;
  }
}

.next {
  position: relative;
  margin-right: 160px;
  width: 60px;
  height: 30px;
  cursor: pointer;
  animation: fadedown 1.5s infinite;
  img {
    height: 15px;
  }
}

@keyframes fadedown {
  0% {
    opacity: 0;
    top: 0;
  }
  25% {
    opacity: 1;
    top: 3px;
  }
  45% {
    opacity: 1;
  }
  50% {
    opacity: 0;
    top: 6px;
  }
  100% {
    opacity: 0;
    top: 0;
  }
}
</style>
