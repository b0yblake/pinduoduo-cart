<template>
	<LayoutOnlyContent>
		<div class="auth__wrapper">
			<a-form :label-col="labelCol" :wrapper-col="wrapperCol">
				<div class="intro__wrap">
					<strong class="intro__title">Recovery password</strong>
					<p class="intro__desc">
						Enter your email, we will send to you the code.
					</p>
				</div>
				<a-form-item label="Email registed" v-bind="validateInfos.email">
					<a-input
						v-model:value="email"
						@blur="validate('email', { trigger: 'blur' }).catch(() => {})"
					/>
				</a-form-item>
				<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button type="primary" @click.prevent="onSubmit"
						>Send code to email</a-button
					>
				</a-form-item>
			</a-form>

			<a-form :label-col="labelCol" :wrapper-col="wrapperCol">
				<a-form-item label="Enter your code: ">
					<a-input v-model:value="code" />
				</a-form-item>
				<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button type="primary" @click.prevent="onSubmit"
						>Change password</a-button
					>
				</a-form-item>
			</a-form>
		</div>
	</LayoutOnlyContent>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, toRefs, inject } from "vue";
import LayoutOnlyContent from "@/templates/layouts/LayoutOnlyContent.vue";
import { Form, notification } from "ant-design-vue";

const useForm = Form.useForm;

export default defineComponent({
	name: `ForgotPassword`,
	components: {
		LayoutOnlyContent,
	},
	emits: ["emailForgot"],
	setup(props, context) {
		const $notification = inject("$notification");
		const modelRef = reactive({
			email: "",
			code: "",
		});
		const rulesRef = reactive({
			email: [
				{
					required: true,
					message: "Please enter your email",
				},
				{
					min: 16,
					max: 24,
					message: "Email should length form 8 to 16 characters",
					trigger: "blur",
				},
			],
		});

		const showFormRecovery = () => {
			try {
				$notification.success("Ok done!", "Great!");
			} catch (error) {
				console.error(error);
			}
		};

		const { validate, validateInfos } = useForm(modelRef, rulesRef);
		const onSubmit = () => {
			validate()
				.then(() => {
					// context.emit("emailForgot", toRaw(modelRef));
					console.log(toRaw(modelRef));
					showFormRecovery();
				})
				.catch((err) => {
					// console.log("error", err);
					try {
						$notification.error(
							"Oops, something went wrong!",
							"Username or password incorrect, please try again!"
						);
					} catch (error) {
						console.error(error);
					}
				});
		};

		return {
			labelCol: { span: 4 },
			wrapperCol: { span: 14 },
			validate,
			validateInfos,
			modelRef,
			...toRefs(modelRef),
			onSubmit,
		};
	},
});
</script>

<style lang="scss" scoped>
.auth__wrapper {
	@include flexbox;
	@include flex-direction(column);
	@include justify-content(center);
	@include align-items(center);
	.ant-form {
		min-width: 80%;
		padding: 50px 0;
	}
}
</style>
