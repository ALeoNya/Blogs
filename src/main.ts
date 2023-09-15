import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/assets/iconfont/iconfont.css" //icon

// 引入v-md-editor
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

// VMd主题: vuepressTheme 
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// VMd代码解析器
import Prism from 'prismjs';  

import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
VMdPreview.use(vuepressTheme, {
  Prism,
})
.use(createEmojiPlugin());
const app = createApp(App)

app.use(createPinia())
    .use(router)
    .use(VMdPreview)
app.mount('#app')
