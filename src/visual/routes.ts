import { RouteRecordRaw } from "vue-router";

import TacticsRoutes from "./modules/tactics/routes";

const routes: RouteRecordRaw[] = [
  {
    path     : "/",
    component: () => import("./layouts/main/main.layout.vue"),
    children : [
      { path: "", name: "HomePage", component: () => import("./modules/home/home.page.vue") },
      { path: "/test", name: "TestPage", component: () => import("./modules/test/test.page.vue") },
      ...TacticsRoutes
    ]
  },
  // Always leave this as last one
  { path: "/:catchAll(.*)*", component: () => import("./error-pages/Error404.vue") }
];

export default routes;
