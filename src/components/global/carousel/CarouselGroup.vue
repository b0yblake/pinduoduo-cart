<template>
	<CarouselRow :title="title">
		<template #default>
			<div class="carousel-fluid">
				<swiper
					:slides-per-view="5"
					:space-between="50"
					navigation
					:pagination="{ clickable: true }"
					:scrollbar="{ draggable: true }"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
				>
					<swiper-slide>
						<img :src="thumb" alt="" />
					</swiper-slide>
					<swiper-slide>
						<img :src="thumb" alt="" />
					</swiper-slide>
					<swiper-slide>
						<img :src="thumb" alt="" />
					</swiper-slide>
					<swiper-slide>
						<img :src="thumb" alt="" />
					</swiper-slide>
					<swiper-slide>
						<img :src="thumb" alt="" />
					</swiper-slide>
					<swiper-slide>
						<img :src="thumb" alt="" />
					</swiper-slide>
				</swiper>
			</div>
		</template>
	</CarouselRow>
</template>

<script lang="ts">
import { PropType } from "vue";
import thumb from "@/assets/images/products/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg";

export default {
	name: "CarouselGroup",
	props: {
		title: {
			type: String as PropType,
			required: true,
		},
	},
	setup() {
		const onSwiper = (swiper: any) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log("slide change");
		};
		return {
			onSwiper,
			onSlideChange,
			thumb,
		};
	},
};
</script>

<style lang="scss" scoped></style>
