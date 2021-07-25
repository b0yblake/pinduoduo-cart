<template>
	<div class="search__wrap">
		<div class="search__header">
			<div class="search__back" v-show="stateOnFocus">
				<a-button type="link">
					<template #icon><LeftOutlined /></template>
				</a-button>
			</div>
			<SearchInput @triggerFocusSearch="handleOnFocus" />
			<div class="search__advance" v-show="stateOnFocus">
				<a-button type="link">
					<template #icon><FileSearchOutlined /></template>
				</a-button>
			</div>
		</div>
		<div class="search__content">
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
					url: "computer/keyboard",
				},
				{
					title: "lamp",
					url: "computer/lamp",
				},
			],
			influenceSearch: [
				{
					title: "fish",
					url: "tank/fish",
				},
				{
					title: "chair",
					url: "furniture/chair",
				},
			],
		});

		const handleOnFocus = (event) => {
			stateOnFocus.value = event;
		};
		return {
			stateOnFocus,
			handleOnFocus,
			searchSuggest,
		};
	},
});
</script>

<style lang="scss" scoped></style>
