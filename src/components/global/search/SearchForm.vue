<template>
	<div class="search-form">
		<form @submit.prevent="onSearch">
			<a-input v-model:value="searchText" @focus.native="onFocusInput">
				<template #prefix>
					<div class="search__inner">
						<div class="search__placeholder">
							<MonitorOutlined v-show="!stateOnFocus" />
							<span class="search__placeholder--text">Enter your product</span>
						</div>

						<div class="search__select-type">
							<a-dropdown :trigger="['click']">
								<a class="ant-dropdown-link" @click.prevent>
									Hot
									<CaretDownOutlined />
								</a>
								<template #overlay>
									<a-menu>
										<a-menu-item key="0">
											<span>Hot</span>
										</a-menu-item>
										<a-menu-item key="1">
											<span>News</span>
										</a-menu-item>
										<a-menu-item key="2"><span>Sales</span></a-menu-item>
									</a-menu>
								</template>
							</a-dropdown>
						</div>
					</div>
				</template>
				<template #suffix>
					<a-button type="link">
						<template #icon><CameraOutlined /></template>
					</a-button>
					<a-button type="link" htmlType="submit">
						<template #icon><SearchOutlined /></template>
					</a-button>
				</template>
			</a-input>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import {
	SearchOutlined,
	CameraOutlined,
	CaretDownOutlined,
	MonitorOutlined,
} from "@ant-design/icons-vue";

export default defineComponent({
	name: "TheSearchWrapper",
	components: {
		SearchOutlined,
		CameraOutlined,
		CaretDownOutlined,
		MonitorOutlined,
	},
	emits: ["triggerFocusSearch"],
	props: {
		stateOnFocus: {
			type: Boolean,
			default: false,
		},
	},
	setup(props, context) {
		const searchText = ref<string>("");
		const onFocusInput = (): void => {
			context.emit("triggerFocusSearch", true);
		};
		const onBlurInput = (): void => {
			context.emit("triggerFocusSearch", false);
		};

		const onSearch = () => {
			console.log("search: ", searchText.value);
		};
		return {
			searchText,
			onFocusInput,
			onBlurInput,
			onSearch,
		};
	},
});
</script>

<style lang="scss" scoped>
::v-deep .ant-input-prefix {
	z-index: 1;
}
.ant-input-affix-wrapper {
	border: none;
	box-shadow: none;
}
</style>
