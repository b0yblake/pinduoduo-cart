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
				<a-form-item label="Email registed" v-bind="validateInfos.name">
					<a-input
						v-model:value="name"
						@blur="validate('name', { trigger: 'blur' }).catch(() => {})"
					/>
				</a-form-item>
				<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button type="primary" @click.prevent="onSubmit"
						>Send code to email</a-button
					>
				</a-form-item>
			</a-form>
		</div>
	</LayoutOnlyContent>
</template>

<script lang="ts">
import { defineComponent, reactive, toRaw, toRefs } from "vue";
import LayoutOnlyContent from "@/templates/layouts/LayoutOnlyContent.vue";
import { Form } from "ant-design-vue";

const useForm = Form.useForm;

export default defineComponent({
	name: `ForgotPassword`,
	components: {
		LayoutOnlyContent,
	},
	setup() {
		const modelRef = reactive({
			name: "",
		});
		const rulesRef = reactive({
			name: [
				{
					required: true,
					message: "Please enter your email",
				},
				{
					min: 8,
					max: 16,
					message: "Email should be like 'example@gmail.com'",
					trigger: "blur",
				},
			],
		});
		const { validate, validateInfos } = useForm(modelRef, rulesRef);
		const onSubmit = () => {
			validate()
				.then(() => {
					console.log(toRaw(modelRef));
				})
				.catch((err) => {
					console.log("error", err);
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
	justify-content: center;
	.ant-form {
		min-width: 80%;
		padding: 50px 0;
	}
}
</style>
