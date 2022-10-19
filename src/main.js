import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { store } from './store';
import { routes } from './routes';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(store);
app.use(router);

app.mount('#app');
