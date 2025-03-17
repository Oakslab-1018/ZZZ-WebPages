import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./style.css";
import { Swipe, SwipeItem } from 'vant';

const app = createApp(App)

app.use(router)
app.use(Swipe);
app.use(SwipeItem);
app.mount('#app')
