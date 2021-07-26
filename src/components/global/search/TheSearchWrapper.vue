<template>
	<div class="search__wrap">
		<div class="search__header" :class="{ search__inline: stateOnFocus }">
			<!-- SLOT: button back to previous page -->
			<slot name="header-back-btn" :onBlurInput="onBlurInput" />

			<SearchForm
				@triggerFocusSearch="handleOnFocus"
				:stateOnFocus="stateOnFocus"
			/>

			<!-- SLOT: button open dialog search advance page -->
			<slot name="search-advance-btn" :onEnterDetailPage="onEnterDetailPage" />
		</div>

		<!-- SLOT: div result of search suggest -->
		<slot
			name="search-suggest-result"
			:searchSuggest="searchSuggest"
			:stateOnFocus="stateOnFocus"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import useDialogState from "@/composables/state";

export default defineComponent({
	name: "TheSearchWrapper",
	setup() {
		const { isToggleDialog } = useDialogState;
		//mock data search suggest result
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
		const stateOnFocus = ref<boolean>(false);
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
			onEnterDetailPage,
		};
	},
});
</script>

<style lang="scss" scoped></style>
