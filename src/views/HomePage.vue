<template>
	<div class="home-layout">
		<LayoutDefault>
			<TheSearchWrapper>
				<template #header-back-btn="{ onBlurInput }">
					<div class="search__back">
						<a-button type="link" @click="onBlurInput">
							<template #icon><LeftOutlined /></template>
						</a-button>
					</div>
				</template>

				<template #search-advance-btn="{ onEnterDetailPage }">
					<div class="search__advance">
						<router-link to="/search-advance" @click="onEnterDetailPage">
							Advce
						</router-link>
					</div>
				</template>

				<template #search-suggest-result="{ stateOnFocus, searchSuggest }">
					<div class="search__content" v-show="stateOnFocus">
						<SearchSuggest :search-suggest="searchSuggest" />
					</div>
				</template>
			</TheSearchWrapper>

			<!-- <ul>
				<li><router-link to="/account/login">Login</router-link></li>
				<li>
					<router-link to="/account/forgot-password"
						>forgot-password</router-link
					>
				</li>
			</ul> -->

			<!-- <CarouselGroup :title="'Originals carousel'" /> -->
		</LayoutDefault>
	</div>

	<!-- Dialog page search advance -->
	<div class="search-page">
		<div class="dialog dialog-page" :class="{ show: stateDialogPage }">
			<router-view></router-view>
		</div>
	</div>

	<!-- Modal common -->
	<teleport to="#layer">
		<div class="dialog" :class="{ show: stateDialogTheme }">
			<DialogWrapper ref="targetClickOutSide">
				<template #default>
					<!-- <DialogTheme /> -->
					<DialogGift />
				</template>
			</DialogWrapper>
		</div>
	</teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";
import useDialogState from "@/composables/state";
import { LeftOutlined } from "@ant-design/icons-vue";

export default defineComponent({
	name: "HomePage",
	components: {
		LayoutDefault,
		LeftOutlined,
	},
	setup() {
		const { stateDialogPage } = useDialogState;
		const stateDialogTheme = ref(false);

		return {
			stateDialogTheme,
			stateDialogPage,
		};
	},
});
</script>
