<template>
	<header class="header">
		The Header
		<!-- <fa icon="search" class="ico"></fa> -->

		<a-breadcrumb>
			<a-breadcrumb-item>Home</a-breadcrumb-item>
			<a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
			<a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
			<a-breadcrumb-item>An Application</a-breadcrumb-item>
		</a-breadcrumb>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "TheHeader",
});
</script>

<style lang="scss" scoped></style>
