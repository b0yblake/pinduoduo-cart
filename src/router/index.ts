import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: () => import("@/views/HomePage.vue"), // use default page
	},
	{
		path: "/account/login",
		name: "Login",
		component: () => import("@/views/auth/AuthWrapper.vue"),
		alias: ["/account/register"],
	},
	{
		path: "/account/forgot-password",
		name: "ForgotPassword",
		component: () => import("@/components/global/auth/ForgotPassword.vue"),
	},
	{
		path: "/account/become-vendor",
		name: "BecomeVendor",
		component: () => import("@/components/global/auth/BecomeVendor.vue"),
	},
	{
		path: "/:catchAll(.*)",
		name: "PageNotFound",
		component: () => import("@/views/NotFound.vue"),
	},
];

export default createRouter({
	history: createWebHistory(),
	routes,
});
