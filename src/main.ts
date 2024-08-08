import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import App from './App.vue';
import router from './router';

import VueHighlightJS from 'vue3-highlightjs';
import 'highlight.js/styles/solarized-light.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(VueHighlightJS);

app.mount('#app');
