import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/layout/LayoutView.vue"),
    children: [
      {
        path: "/",
        name: "HomeView",
        component: () => import("@/views/HomeView.vue"),
      },
      {
        path: "/daftar-jaipong-tunggal",
        name: "RegisterView",
        component: () => import("@/views/pages/RegisterTunggal.vue"),
    },
    {
      path: "/daftar-jaipong-rampak",
      name: "RegisterView",
      component: () => import("@/views/pages/RegisterRampak.vue"),
  },
  {
    path: "/daftar-pupuh",
    name: "RegisterView",
    component: () => import("@/views/pages/RegisterPupuh.vue"),
},
{
  path: "/daftar-sajak",
  name: "RegisterView",
  component: () => import("@/views/pages/RegisterSajak.vue"),
},
{
  path: "/daftar-pencak-silat",
  name: "RegisterView",
  component: () => import("@/views/pages/RegisterSajak.vue"),
},
    ],
  },
  {
    path: "/",
    component: () => import("@/views/layout/LayoutBlank.vue"),
    children: [
	{
		path: "*",
		name: "404",
		component: () => import("@/views/pages/Error/404.vue"),
	},
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});


export default router;
