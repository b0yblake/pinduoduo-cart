<template>
	<div class="search__wrap">
		<div class="search__header" :class="{ search__inline: stateOnFocus }">
			<div class="search__back">
				<a-button type="link" @click="onBlurInput">
					<template #icon><LeftOutlined /></template>
				</a-button>
			</div>
			<SearchInput
				@triggerFocusSearch="handleOnFocus"
				:stateOnFocus="stateOnFocus"
			/>
			<div class="search__advance">
				<router-link to="/search-advance" @click="onEnterDetailPage">
					Advce
				</router-link>
			</div>
		</div>
		<div class="search__content" v-show="stateOnFocus">
			<SearchSuggest :search-suggest="searchSuggest" />
		</div>

		<!-- Dialog page Area -->
		<div class="dialog dialog-page" :class="{ show: stateDialogPage }">
			<router-view></router-view>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { LeftOutlined, FileSearchOutlined } from "@ant-design/icons-vue";
import useDialogState from "@/composables/state";

export default defineComponent({
	name: "TheSearchWrapper",
	components: {
		LeftOutlined,
		FileSearchOutlined,
	},
	setup() {
		const { isToggleDialog, stateDialogPage } = useDialogState;

		const stateOnFocus = ref<boolean>(false);
		const searchSuggest = reactive({
			recentSearch: [
				{
					title: "keyboard",
					url: "/computer/keyboard",
					key: [
						{
							title: "Mouse Ryzer",
							url: "/computer/keyboard",
						},
						{
							title: "Poseidon",
							url: "/computer/keyboard",
						},
						{
							title: "Ducky",
							url: "/computer/keyboard",
						},
						{
							title: "Microlab",
							url: "/computer/keyboard",
						},
					],
				},
				{
					title: "Monitor",
					url: "/computer/monitor",
					key: [
						{
							title: "Ryzer",
							url: "/computer/monitor",
						},
						{
							title: "Viewsonic",
							url: "/computer/monitor",
						},
						{
							title: "Samsung",
							url: "/computer/monitor",
						},
						{
							title: "LG",
							url: "/computer/monitor",
						},
					],
				},
			],
			influenceSearch: [
				{
					title: "chair",
					url: "/furniture/chair",
					key: [
						{
							title: "Long board",
							url: "/furniture/chair",
							label: "Hot",
						},
						{
							title: "Single",
							url: "/furniture/chair",
						},
						{
							title: "Long board",
							url: "/furniture/chair",
							label: "Hot",
						},
						{
							title: "Single",
							url: "/furniture/chair",
						},
						{
							title: "Long board",
							url: "/furniture/chair",
						},
						{
							title: "Single",
							url: "/furniture/chair",
						},
						{
							title: "Long board",
							url: "/furniture/chair",
						},
						{
							title: "Single",
							url: "/furniture/chair",
						},
						{
							title: "Long board",
							url: "/furniture/chair",
						},
						{
							title: "Single",
							url: "/furniture/chair",
						},
						{
							title: "Long board",
							url: "/furniture/chair",
						},
						{
							title: "Single",
							url: "/furniture/chair",
						},
						{
							title: "Long board",
							url: "/furniture/chair",
						},
						{
							title: "Single",
							url: "/furniture/chair",
						},
					],
				},
			],
		});

		const handleOnFocus = (event) => {
			stateOnFocus.value = event;
		};
		const onBlurInput = (): void => {
			stateOnFocus.value = false;
		};

		const onEnterDetailPage = () => {
			isToggleDialog(true);
		};

		return {
			stateOnFocus,
			handleOnFocus,
			searchSuggest,
			onBlurInput,
			stateDialogPage,
			onEnterDetailPage,
		};
	},
});
</script>

<style lang="scss" scoped></style>
