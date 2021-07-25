<template>
	<div class="search__suggest"></div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";

export default defineComponent({
	name: "SearchSuggest",
	props: {
		searchSuggest: {
			type: Object,
			required: false,
		},
	},
	setup(props, context) {
		return {};
	},
});
</script>

<style lang="scss" scoped></style>
