<template>
	<div :class="$style.wrap">
		<!-- MAIN -->
		<main :class="$style.main">
			<slot />
		</main>
		<!-- //MAIN -->
	</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: `LayoutOnlyContent`,
});
</script>

<style lang="scss" module>
.wrap {
	.main {
		position: relative;
	}
}
</style>
