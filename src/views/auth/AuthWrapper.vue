<template>
	<div class="container">
		<LayoutOnlyContent>
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
							<component :is="currentTabComponent"></component>
						</keep-alive>
					</div>
				</div>
			</div>
		</LayoutOnlyContent>
	</div>
</template>

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

export default defineComponent({
	name: "AuthWrapper",
	components: {
		LayoutOnlyContent,
		Login: defineAsyncComponent(() => import("@/views/auth/Login.vue")),
		Register: defineAsyncComponent(() => import("@/views/auth/Register.vue")),
	},
	setup() {
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
			goTo(`/${tab.toLowerCase()}`);
		};

		onMounted(() => {
			const currentRoute = route.path;
			switch (currentRoute) {
				case "/login":
					currentTab.value = tabs.value?.[0];
					break;
				case "/register":
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
		};
	},
});
</script>
