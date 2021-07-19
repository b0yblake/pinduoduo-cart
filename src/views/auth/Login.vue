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
			<a-form
				layout="inline"
				:model="formState"
				@finish="handleFinish"
				@finishFailed="handleFinishFailed"
			>
				<a-form-item>
					<a-input v-model:value="user" placeholder="Username">
						<template #prefix
							><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
						/></template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-input
						v-model:value="password"
						type="password"
						placeholder="Password"
					>
						<template #prefix
							><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
						/></template>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-button
						type="primary"
						html-type="submit"
						:disabled="user === '' || password === ''"
					>
						Log in
					</a-button>
				</a-form-item>
			</a-form>
		</div>

		<div class="form__auto-access">
			<a-checkbox @change="onChangeRemember"> Remember me </a-checkbox>
			<router-link to="/account/forgot-password">Forgot Password?</router-link>
		</div>

		<div class="form__action">
			<a-button type="primary" html-type="submit"> Sign in </a-button>
			<router-link to="/account/become-vendor"
				>Want to sell?
				<strong class="spot">Just become the vendor</strong></router-link
			>
		</div>
	</div>
</template>

<script lang="ts">
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { defineComponent, reactive, UnwrapRef, toRefs } from "vue";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
// https://www.npmjs.com/package/@ant-design/icons-vue
// https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-vue/src/icons

interface FormState {
	user: string | number;
	password: string;
	accountRemember: boolean;
}

export default defineComponent({
	name: `Login`,
	components: {
		UserOutlined,
		LockOutlined,
	},
	emits: ["formLogin"],
	setup(props, context) {
		const formState: UnwrapRef<FormState> = reactive({
			user: "",
			password: "",
			accountRemember: false,
		});

		const handleFinish = (values: FormState) => {
			console.log("data formState: ", formState);
			context.emit("formLogin", formState);
		};

		const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
			console.log(errors);
		};

		const onChangeRemember = (e: any) => {
			formState.accountRemember = e.target.checked;
		};

		return {
			formState,
			...toRefs(formState),
			handleFinish,
			handleFinishFailed,
			onChangeRemember,
		};
	},
});
</script>

<style lang="scss" module></style>
