<template>
	<div class="carousel-core">
		<swiper v-bind="swiperOption" class="mySwiper">
			<slot name="slide"></slot>
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
					hide: false,
				},
			}),
		},
	},
	setup(props, context) {
		const defaultOptions = reactive({
			spaceBetween: 10,
			slidesPerView: 5,
			slidesPerColumn: 1,
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
