<template>
	<div class="carousel-row">
		<h3 class="carousel__title">{{ title }}</h3>
		<slot />
	</div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
	name: "CarouselRow",
	props: {
		title: {
			type: String as PropType,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped></style>
