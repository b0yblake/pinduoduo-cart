<template>
	<div class="search-form">
		<form @submit.prevent="onSearch">
			<a-input
				v-model:value="searchText"
				@focus.native="onFocus"
				@blur.native="onBlur"
			>
				<template #suffix>
					<div class="search__inner">
						<div class="search__placeholder">
							<MonitorOutlined />
							<span class="search__placeholder--text">Enter your product</span>
						</div>

						<div class="search__select-type" v-show="stateOnFocus">
							<a-dropdown :trigger="['click']">
								<a class="ant-dropdown-link" @click.prevent>
									Hot
									<CaretDownOutlined />
								</a>
								<template #overlay>
									<a-menu>
										<a-menu-item key="0">
											<a href="http://www.alipay.com/">1st menu item</a>
										</a-menu-item>
										<a-menu-item key="1">
											<a href="http://www.taobao.com/">2nd menu item</a>
										</a-menu-item>
										<a-menu-divider />
										<a-menu-item key="3">3rd menu item</a-menu-item>
									</a-menu>
								</template>
							</a-dropdown>
						</div>
					</div>
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

<style lang="scss" scoped>
.ant-input-affix-wrapper {
	border: none;
	box-shadow: none;
}
</style>
