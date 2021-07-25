<template>
	<div class="search-form">
		<form @submit.prevent="onSearch">
			<a-input
				v-model:value="searchText"
				placeholder="🔍 Basic usage"
				@focus.native="onFocus"
				@blur.native="onBlur"
			/>
			<a-button type="link">
				<template #icon><CameraFilled /></template>
			</a-button>
			<a-button type="link" htmlType="submit">
				<template #icon><SearchOutlined /></template>
			</a-button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SearchOutlined, CameraFilled } from "@ant-design/icons-vue";

export default defineComponent({
	name: "TheSearchWrapper",
	components: {
		SearchOutlined,
		CameraFilled,
	},
	emits: ["triggerFocusSearch"],
	setup(props, context) {
		const searchText = ref<string>("");
		const onFocus = (): void => {
			context.emit("triggerFocusSearch", true);
		};
		const onBlur = (): void => {
			context.emit("triggerFocusSearch", false);
		};

		const onSearch = () => {
			console.log("search: ", searchText.value);
		};
		return {
			searchText,
			onFocus,
			onBlur,
			onSearch,
		};
	},
});
</script>

<style lang="scss" scoped></style>
