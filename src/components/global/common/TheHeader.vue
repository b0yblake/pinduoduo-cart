<template>
	<header class="header">
		<h1 class="blind">Pindoudou e-commerce social</h1>

		<span class="ic-buy"></span>

		<slot />
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "TheHeader",
});
</script>

<style lang="scss">
.ic-buy {
	@include sp-normal("ic-buy");
}
// .icon-retina {
// 	@include retina-sprites($retina-groups);
// }
</style>
