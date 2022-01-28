import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "@/views/Home"
const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/Home"),
  },
  {
    name: "AboutPage",
    path: "/hakkimda",
    component: () => import("@/views/About"),
  },
  {
    name: "DetailPage",
    path: "/detay/:userID",
    component: () => import("@/views/Details"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
