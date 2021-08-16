<script lang="ts">
import {
	ref,
	defineComponent,
	defineAsyncComponent,
	computed,
	onMounted,
	ComputedRef,
} from "vue";
import LayoutOnlyContent from "@/templates/layouts/LayoutOnlyContent.vue";
import { useRoute } from "vue-router";
import logo from "@/assets/images/pinduoduo-logo.png";
// import store from "@/store";
import { useStore } from "@/store";

interface responseLogin {
	user?: String | Number;
	password?: String | Number;
	accountRemember?: Boolean;
}

interface responseRegister {
	username?: String | Number;
	pass?: String | Number;
	checkPass?: String | Number;
}

export default defineComponent({
	name: "AuthWrapper",
	components: {
		LayoutOnlyContent,
		Login: defineAsyncComponent(
			() => import("@/components/global/auth/Login.vue")
		),
		Register: defineAsyncComponent(
			() => import("@/components/global/auth/Register.vue")
		),
	},
	setup() {
		const store = useStore();
		const route = useRoute();
		const tabs = ref<string[]>(["Login", "Register"]);
		const currentTab = ref<string>("Login");

		const currentTabComponent = computed(
			() => `${currentTab.value}`
		) as ComputedRef<string>;

		const goTo = (url: string) => {
			window.history.pushState(null, null, url);
		};

		const switchRouter = (tab: string) => {
			currentTab.value = tab;
			goTo(`/account/${tab.toLowerCase()}`);
		};

		const handleCurrentTab = (value) => {
			currentTab.value = value;
		};

		const authState = computed(() => store?.state?.auth?.auth);

		const handleFormRegister = (data: responseRegister) => {
			// console.log("data register prepare for api: ", data);
			store.dispatch("register", data);
		};

		const handleFormLogin = (data: responseLogin) => {
			console.log("data login prepare for api: ", data);
			store.dispatch("auth/login", data);
		};

		onMounted(() => {
			const currentRoute = route.path;
			switch (currentRoute) {
				case "/account/login":
					currentTab.value = tabs.value?.[0];
					break;
				case "/account/register":
					currentTab.value = tabs.value?.[1];
					break;
				default:
					break;
			}
		});

		return {
			tabs,
			currentTab,
			currentTabComponent,
			switchRouter,
			logo,
			handleCurrentTab,
			handleFormRegister,
			handleFormLogin,
			authState,
		};
	},
});
</script>
<template>
	<LayoutOnlyContent>
		<div class="auth__wrapper">
			<div class="auth--bg"></div>
			<div class="auth__action">
				<h2 class="auth--logo">
					<img :src="logo" alt="pinduoduo" />
				</h2>
				authState: {{ authState }}
				<div class="detail__tab-nav">
					<ul class="tab-nav">
						<li
							v-for="(tab, index) in tabs"
							:key="`${tab}_${index}`"
							:class="['tab-nav__item', { active: currentTab === tab }]"
						>
							<button type="button" class="" @click="switchRouter(tab)">
								{{ tab }}
							</button>
						</li>
					</ul>
					<div class="tab-content">
						<div class="tab-pane">
							<keep-alive>
								<component
									:is="currentTabComponent"
									@currentTab="handleCurrentTab"
									@formRegister="handleFormRegister"
									@formLogin="handleFormLogin"
								></component>
							</keep-alive>
						</div>
					</div>
				</div>
			</div>
		</div>
	</LayoutOnlyContent>
</template>
