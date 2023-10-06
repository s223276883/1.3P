// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Summary from './components/Summary.vue';
import Projects from './components/Projects.vue';  // Ensure the file name is Projects.vue

const routes = [
  { path: '/Summary', component: Summary },
  { path: '/Projects', component: Projects },  // Updated path to match component name
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;