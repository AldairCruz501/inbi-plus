import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

//Vistas Principales
import HomeView from '../views/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
    meta: { title: 'Inbi + | Inicio' },
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 } // Siempre hace scroll al inicio
  }
})


router.afterEach((to) => {
  document.title = (to.meta.title as string) || 'PbxHosting';
});


export default router