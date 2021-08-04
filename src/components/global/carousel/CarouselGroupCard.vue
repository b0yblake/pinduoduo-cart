<template>
	<CarouselRow :title="title">
		<template #default>
			<div class="carousel-fluid">
				<CarouselInitial :carouselOptional="carouselOptional">
					<template #slide>
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
					</template>
				</CarouselInitial>
			</div>
		</template>
	</CarouselRow>
</template>

<script lang="ts">
import { PropType, unref, ref } from "vue";
const thumb1 =
	"https://vn-test-11.slatic.net/p/5f4d71a877565137447b5ba5f529a680.jpg_720x720q80.jpg_.webp";
const thumb2 =
	"https://vn-test-11.slatic.net/p/6c687976fa239bf3700b0006e39c6763.jpg_720x720q80.jpg_.webp";

export default {
	name: "CarouselGroupCard",
	props: {
		title: {
			type: String as PropType,
			required: true,
		},
	},
	setup() {
		const carouselOptional = ref({
			freeMode: true,
			scrollbar: {
				hide: false,
			},
		});

		return {
			...unref(carouselOptional),
			thumb1,
			thumb2,
		};
	},
};
</script>

<style lang="scss" scoped></style>
