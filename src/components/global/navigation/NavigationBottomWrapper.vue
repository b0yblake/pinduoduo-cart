<template>
	<div class="nav-bottom__wrapper" :class="suffixClass">
		<slot name="body" :hideBottom="hideBottom" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "NavigationBottomWrapper",
	props: {
		suffixClass: {
			type: String,
			required: true,
		},
	},
	setup() {
		const hideBottom = ref(false);
		return {
			hideBottom,
		};
	},
});
</script>

<style lang="scss" scoped></style>
