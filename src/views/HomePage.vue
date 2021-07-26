<template>
	<div class="home-layout">
		<LayoutDefault>
			<ul>
				<li><router-link to="/account/login">Login</router-link></li>
				<li>
					<router-link to="/account/forgot-password"
						>forgot-password</router-link
					>
				</li>
			</ul>

			<!-- <CarouselGroup :title="'Originals carousel'" /> -->
		</LayoutDefault>
	</div>

	<!-- Dialog page Area -->
	<teleport to="#layer">
		<div class="dialog" :class="{ show: stateDialogTheme }">
			<DialogWrapper ref="targetClickOutSide">
				<template #default>
					<!-- <DialogTheme /> -->
					<DialogGift />
				</template>
			</DialogWrapper>
		</div>
	</teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		LayoutDefault,
	},
	setup(props, contenxt) {
		const stateDialogTheme = ref(false);
		return {
			stateDialogTheme,
		};
	},
});
</script>
