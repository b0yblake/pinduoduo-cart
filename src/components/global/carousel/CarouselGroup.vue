<template>
	<CarouselRow :title="title">
		<template #default>
			<div class="carousel-fluid">
				<swiper
					:slides-per-view="5"
					:space-between="0"
					navigation
					:pagination="{ clickable: true }"
					:scrollbar="{ draggable: true }"
					@swiper="onSwiper"
					@slideChange="onSlideChange"
				>
					<swiper-slide v-for="n in 10" :key="n">
						<div class="slide__wrap">
							<img :src="`${n % 2 === 0 ? thumb1 : thumb2}`" alt="" />
							<div class="slide__detail">
								<div class="slide__btn-group">
									<a href="#none" class="slide__btn-icon slide__btn--play"
										><fa icon="play" class="ico"></fa
									></a>
									<button
										type="button"
										class="slide__btn-icon slide__btn--favorite"
									>
										<fa icon="plus" class="ico"></fa>
									</button>
									<button
										type="button"
										class="slide__btn-icon slide__btn--modal"
									>
										<fa icon="chevron-down" class="ico"></fa>
									</button>
								</div>
								<div class="slide__title">
									<h3>The Godfather</h3>
								</div>
								<div class="slide__tags">
									<ul>
										<li class="tag">Drama</li>
										<li class="tag">Drama</li>
									</ul>
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper>
			</div>
		</template>
	</CarouselRow>
</template>

<script lang="ts">
import { PropType, unref, ref, reactive } from "vue";
import useViewport from "@/composables/viewport";
import thumb1 from "@/assets/images/products/3NTAbAiao4JLzFQw6YxP1YZppM8.jpg";
import thumb2 from "@/assets/images/products/vRPDQP51i1Z2RuoIQaxVSj7Pd5R.jpg";

export default {
	name: "CarouselGroup",
	props: {
		title: {
			type: String as PropType,
			required: true,
		},
	},
	setup() {
		const { width } = useViewport();
		const navigation = reactive({
			navigationPrevRef: null,
			navigationNextRef: null,
		});

		const customSwiperParams = ref({
			observer: true,
			observeParents: true,
			navigation: {
				prevEl: navigation.navigationPrevRef,
				nextEl: navigation.navigationNextRef,
			},
			breakpoints: {
				1378: { slidesPerView: 6, slidesPerGroup: 6 },
				998: { slidesPerView: 4, slidesPerGroup: 4 },
				625: { slidesPerView: 3, slidesPerGroup: 3 },
				330: { slidesPerView: 2, slidesPerGroup: 2 },
				0: { slidesPerView: 1.5, slidesPerGroup: 1.5 },
			},
			loopAdditionalSlides:
				width >= 1378 ? 5 : width >= 998 ? 3 : width >= 625 ? 2 : 2,
			pagination: true,
			loop: false,
			grabCursor: false,
			draggable: false,
			preventClicksPropagation: true,
			preventClicks: true,
			slideToClickedSlide: false,
			allowTouchMove: true,
		});

		const onSwiper = (swiper: any) => {
			console.log(swiper);
		};
		const onSlideChange = () => {
			console.log("slide change");
		};
		return {
			onSwiper,
			onSlideChange,
			...unref(customSwiperParams),
			thumb1,
			thumb2,
		};
	},
};
</script>

<style lang="scss" scoped></style>
