<template>
	<div class="container">
		<div class="intro__wrap">
			<strong class="intro__title">Login to your account</strong>
			<p class="intro__desc">
				Thank you to get back to Pindoudou, let's access our the best social
				ecommerce
			</p>
		</div>
		<div class="form__wrap">
			<form @submit.prevent="submition" autocomplete="off" ref="login_form">
				<div class="components-input-demo-presuffix">
					<a-input placeholder="Email or phone number" v-model="username">
						<template #prefix>
							<user-outlined type="user" />
						</template>
						<template #suffix>
							<a-tooltip
								title="User can buy and share cart with friends, all cheap"
							>
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
				<div class="form__auto-access">
					<a-checkbox @change="onChangeRemember"> Remember me </a-checkbox>
					<router-link to="/account/forgot-password"
						>Forgot Password?</router-link
					>
				</div>
				<div class="form__action">
					<a-button type="primary" html-type="submit"> Sign in </a-button>
					<router-link to="/account/become-vendor"
						>Want to sell?
						<strong class="spot">Just become the vendor</strong></router-link
					>
				</div>
			</form>
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

		const onChangeRemember = (e) => {
			console.log(`checked = ${e.target.checked}`);
		};

		const submition = () => {};

		return {
			username,
			password,
			onChangeRemember,
			submition,
		};
	},
});
</script>

<style lang="scss" module></style>
