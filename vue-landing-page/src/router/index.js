import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import CadastroCurriculo from '../components/CadastroCurriculo.vue';
import ListarCurriculo from '../components/ListarCurriculo.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/cadastrar', component: CadastroCurriculo },
  { path: '/curriculos', component: ListarCurriculo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
