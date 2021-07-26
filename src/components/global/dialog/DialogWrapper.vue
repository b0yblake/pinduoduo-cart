<template>
	<div class="dialog__wrapper">
		<slot />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "DialogWrapper",
	setup(props, context) {
		return {};
	},
});
</script>

<style lang="scss" scoped></style>
