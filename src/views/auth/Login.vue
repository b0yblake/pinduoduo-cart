<template>
	<div class="login">
		Login Tab
		<div class="form__wrap">
			<div class="components-input-demo-presuffix">
				<a-input placeholder="User name" v-model="username">
					<template #prefix>
						<user-outlined type="user" />
					</template>
					<template #suffix>
						<a-tooltip title="Extra information">
							<info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
						</a-tooltip>
					</template>
				</a-input>
				<p></p>
				<a-input placeholder="Password" v-model="password">
					<template #prefix>
						<safety-certificate-filled />
					</template>
				</a-input>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import {
	UserOutlined,
	InfoCircleOutlined,
	SafetyCertificateFilled,
} from "@ant-design/icons-vue";
// https://www.npmjs.com/package/@ant-design/icons-vue
// https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-vue/src/icons

export default defineComponent({
	name: `Login`,
	components: {
		UserOutlined,
		InfoCircleOutlined,
		SafetyCertificateFilled,
	},
	setup() {
		const username = ref<string | number>("");
		const password = ref<string | number>("");

		return {
			username,
			password,
		};
	},
});
</script>

<style lang="scss" module></style>
