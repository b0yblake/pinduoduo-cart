<template>
	<footer class="footer">The Footer</footer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
	name: "TheFooter",
	setup() {
		const show = ref(false);
		return {
			show,
		};
	},
});
</script>

<style lang="scss" scoped></style>
