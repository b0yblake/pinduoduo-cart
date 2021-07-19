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
	position: relative;
	min-height: 100vh;
	background-color: #ab3b3b;
	@include flexbox;
	@include justify-content(center);
	@include align-items(center);
	.main {
	}
}
</style>
