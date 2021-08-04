<template>
	<div class="carousel-core">
		{{ swiperOption }}
		<swiper v-bind="swiperOption" class="mySwiper">
			<!-- <swiper
			:slidesPerView="3"
			:slidesPerColumn="2"
			:freeMode="true"
			:spaceBetween="10"
			:scrollbar="{
				hide: true,
			}"
			class="mySwiper"
		> -->
			<swiper-slide v-for="n in 10" :key="n"> Khung giờ mua sắm </swiper-slide>
		</swiper>
	</div>
</template>

<script lang="ts">
import {
	defineComponent,
	ref,
	reactive,
	onBeforeMount,
	toRefs,
	isRef,
} from "vue";

export default defineComponent({
	name: "CarouselInitial",
	props: {
		carouselOptional: {
			type: Object,
			required: false,
			default: () => ({
				freeMode: true,
				scrollbar: {
					hide: true,
				},
			}),
		},
	},
	setup(props, context) {
		const defaultOptions = reactive({
			spaceBetween: 10,
			slidesPerView: 2,
			slidesPerColumn: 2,
			observer: true,
			observeParents: true,
		});

		const swiper = reactive({
			swiperOption: "",
		});

		onBeforeMount(() => {
			swiper.swiperOption = {
				...toRefs(defaultOptions),
				...props.carouselOptional,
			};
		});

		return {
			defaultOptions,
			...toRefs(swiper),
		};
	},
});
</script>

<style lang="scss" scoped></style>
