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
						v-model:value="modelRef.email"
						@blur="validate('email', { trigger: 'blur' }).catch(() => {})"
					/>
				</a-form-item>
				<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button type="primary" @click.prevent="onSubmit"
						>Send code to email</a-button
					>
				</a-form-item>
			</a-form>

			<a-form
				:label-col="labelCol"
				:wrapper-col="wrapperCol"
				v-show="enableStepValidateCode"
			>
				<a-form-item label="Enter your code: ">
					<a-input v-model:value="modelRef.code" />
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
import { defineComponent, reactive, toRaw, inject, ref } from "vue";
import LayoutOnlyContent from "@/templates/layouts/LayoutOnlyContent.vue";
import { Form } from "ant-design-vue";

const useForm = Form.useForm;

export default defineComponent({
	name: `ForgotPassword`,
	components: {
		LayoutOnlyContent,
	},
	emits: ["emailForgot"],
	setup() {
		const $notification = inject("$notification");
		const enableStepValidateCode = ref(false);
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
					min: 8,
					max: 24,
					message: "Email should length form 8 to 24 characters",
					trigger: "blur",
				},
				{
					pattern: new RegExp(
						"^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
					),
					message: "Wrong format! Your email will not contain a special chars",
					trigger: "blur",
				},
			],
		});

		const { validate, validateInfos } = useForm(modelRef, rulesRef);
		const onSubmit = () => {
			validate()
				.then(() => {
					try {
						$notification.success("Ok done!", "Great!");
					} catch (error) {
						console.error(error);
					}
					console.log("Email recovery, preapre for API: ", toRaw(modelRef));
					enableStepValidateCode.value = true;
				})
				.catch((err) => {
					try {
						console.log("err: ", err);
						$notification.error(
							"Oops, something went wrong!",
							`Please try again! Error is ${err?.errorFields[0]?.errors[0]}`
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
			onSubmit,
			enableStepValidateCode,
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
