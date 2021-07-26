<template>
	<div class="search-advance">
		<TheSearchWrapper></TheSearchWrapper>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";

export default defineComponent({
	name: "SearchAdvance",
	components: {
		LayoutDefault,
	},
	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped></style>
