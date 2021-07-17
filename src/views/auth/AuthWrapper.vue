<template>
	<div class="container">
		<LayoutAuth>
			<div class="detail__tab-nav">
				<ul class="tab-nav">
					<li
						v-for="(tab, index) in tabs"
						:key="`${tab}_${index}`"
						:class="['tab-nav__item', { active: currentTab === tab }]"
					>
						<button type="button" class="" @click="currentTab = tab">
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
		</LayoutAuth>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent, defineAsyncComponent, computed } from "vue";
import LayoutAuth from "@/templates/layouts/LayoutAuth.vue";

export default defineComponent({
	name: "AuthWrapper",
	components: {
		LayoutAuth,
		Login: defineAsyncComponent(() => import("@/views/auth/Login.vue")),
		Register: defineAsyncComponent(() => import("@/views/auth/Register.vue")),
	},
	setup() {
		const tabs = ref(["Login", "Register"]);
		const currentTab = ref("Login");

		const currentTabComponent = computed(() => `${currentTab.value}`);

		return {
			tabs,
			currentTab,
			currentTabComponent,
		};
	},
});
</script>
