<template>
	<header class="header">
		<h1 class="blind">Pindoudou e-commerce social</h1>
		<slot />
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "TheHeader",
});
</script>

<style lang="scss" scoped></style>
