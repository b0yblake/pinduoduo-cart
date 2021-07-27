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

			<!-- Dialog page search advance -->
			<div class="search-page">
				<div class="dialog dialog-page" :class="{ show: stateDialogPage }">
					<router-view></router-view>
				</div>
			</div>
		</LayoutDefault>
	</div>

	<!-- Modal common -->
	<teleport to="#layer">
		{{ stateDialog }}
		<div class="dialog" :class="{ show: stateDialog }">
			<DialogWrapper ref="targetClickOutSide">
				<template #default>
					<DialogGift />
				</template>
				<template #dialog-close="{ onCLose }">
					<button type="button" @click="onCLose">
						<CloseCircleOutlined />
					</button>
				</template>
			</DialogWrapper>
		</div>
	</teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";
import { LeftOutlined, CloseCircleOutlined } from "@ant-design/icons-vue";
import useDialogState from "@/composables/dialogState";
import useDialogThemeState from "@/composables/themeState";

export default defineComponent({
	name: "HomePage",
	components: {
		LayoutDefault,
		LeftOutlined,
		CloseCircleOutlined,
	},
	setup() {
		const { stateDialogPage } = useDialogThemeState;
		const { stateDialog } = useDialogState;
		return {
			stateDialogPage,
			stateDialog,
		};
	},
});
</script>
