<template>
	<CarouselRow :title="title">
		<template #default>
			<div class="carousel-categories">
				<CarouselInitial :carouselOptional="carouselOptional">
					<template #slide>
						<swiper-slide>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-calendar"></span>
									<h3 class="category__title">Calendar</h3>
								</div>
							</div>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-redcard"></span>
									<h3 class="category__title">Red Card</h3>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-dimond"></span>
									<h3 class="category__title">Dimond</h3>
								</div>
							</div>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-sale"></span>
									<h3 class="category__title">Sales</h3>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-phone"></span>
									<h3 class="category__title">Phone</h3>
								</div>
							</div>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-ship"></span>
									<h3 class="category__title">Ship</h3>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-pig"></span>
									<h3 class="category__title">Pig</h3>
								</div>
							</div>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-sing"></span>
									<h3 class="category__title">Sing</h3>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-rank"></span>
									<h3 class="category__title">Rank</h3>
								</div>
							</div>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-tree"></span>
									<h3 class="category__title">Tree</h3>
								</div>
							</div>
						</swiper-slide>
						<swiper-slide>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-calendar"></span>
									<h3 class="category__title">Calendar</h3>
								</div>
							</div>
							<div class="slide__wrap">
								<div class="category-slide__detail">
									<span class="ic ic-redcard"></span>
									<h3 class="category__title">Red Card</h3>
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

export default {
	name: "CarouselCategoriesHome",
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
		};
	},
};
</script>

<style lang="scss">
.ic-sing {
	@include sp-normal("ic-sing");
}
.ic-calendar {
	@include sp-normal("ic-calendar");
}
.ic-dimond {
	@include sp-normal("ic-dimond");
}
.ic-phone {
	@include sp-normal("ic-phone");
}
.ic-pig {
	@include sp-normal("ic-pig");
}
.ic-sale {
	@include sp-normal("ic-sale");
}
.ic-ship {
	@include sp-normal("ic-ship");
}
.ic-tree {
	@include sp-normal("ic-tree");
}
.ic-pig {
	@include sp-normal("ic-pig");
}
.ic-rank {
	@include sp-normal("ic-rank");
}
.ic-redcard {
	@include sp-normal("ic-redcard");
}
</style>
