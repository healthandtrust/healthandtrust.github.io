import PageContent from "@/components/PageContent.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'PageContentHome',
    component: PageContent
  },
  {
    path: '/:page',
    name: 'PageContent',
    component: PageContent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
