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
				<button type="button">Advce</button>
			</div>
		</div>
		<div class="search__content" v-show="stateOnFocus">
			<SearchSuggest :search-suggest="searchSuggest" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import { LeftOutlined, FileSearchOutlined } from "@ant-design/icons-vue";

export default defineComponent({
	name: "TheSearchWrapper",
	components: {
		LeftOutlined,
		FileSearchOutlined,
	},
	setup() {
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
			],
			influenceSearch: [
				{
					title: "chair",
					url: "/furniture/chair",
					key: [
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

		return {
			stateOnFocus,
			handleOnFocus,
			searchSuggest,
			onBlurInput,
		};
	},
});
</script>

<style lang="scss" scoped></style>
