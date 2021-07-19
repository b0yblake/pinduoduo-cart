<template>
	<div class="container">
		<div class="intro__wrap">
			<strong class="intro__title">Register, new products are comming!</strong>
			<p class="intro__desc">
				Thank you to register to Pindoudou, let's access our the best social
				ecommerce
			</p>
		</div>
		<div class="form__wrap">
			<a-form
				name="custom-validation"
				ref="formRef"
				:model="formState"
				:rules="rules"
				v-bind="layout"
				@finish="handleFinish"
				@finishFailed="handleFinishFailed"
				@submit.prevent="onSubmit"
			>
				<a-form-item ref="username" label="Username" name="username">
					<a-input v-model:value="formState.username" />
				</a-form-item>
				<a-form-item has-feedback label="Password" name="pass">
					<a-input
						v-model:value="formState.pass"
						type="password"
						autocomplete="off"
					/>
				</a-form-item>
				<a-form-item has-feedback label="Confirm" name="checkPass">
					<a-input
						v-model:value="formState.checkPass"
						type="password"
						autocomplete="off"
					/>
				</a-form-item>
				<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button type="primary" html-type="submit">Submit</a-button>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef, toRaw } from "vue";
import {
	RuleObject,
	ValidateErrorEntity,
} from "ant-design-vue/es/form/interface";

interface FormState {
	username: string | number;
	pass: string;
	checkPass: string;
}

export default defineComponent({
	name: `Register`,
	setup() {
		const formRef = ref();
		const formState: UnwrapRef<FormState> = reactive({
			username: "",
			pass: "",
			checkPass: "",
		});

		const validatePass = async (rule: RuleObject, value: string) => {
			if (value === "") {
				return Promise.reject("Please input the password");
			} else {
				if (formState.checkPass !== "") {
					formRef.value.validateField("checkPass");
				}
				return Promise.resolve();
			}
		};

		const validatePass2 = async (rule: RuleObject, value: string) => {
			if (value === "") {
				return Promise.reject("Please input the password again");
			} else if (value !== formState.pass) {
				return Promise.reject("Two inputs don't match!");
			} else {
				return Promise.resolve();
			}
		};

		const rules = {
			username: [
				{
					required: true,
					message: "Please input Activity name",
					trigger: "blur",
				},
				{ min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
			],
			pass: [{ required: true, validator: validatePass, trigger: "change" }],
			checkPass: [{ validator: validatePass2, trigger: "change" }],
		};

		const layout = {
			labelCol: { span: 4 },
			wrapperCol: { span: 14 },
		};

		const handleFinish = (values: FormState) => {
			console.log(values, formState);
		};

		const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
			console.log(errors);
		};

		const onSubmit = () => {
			formRef.value
				.validate()
				.then(() => {
					console.log("values", formState, toRaw(formState));
				})
				.catch((error: ValidateErrorEntity<FormState>) => {
					console.log("error", error);
				});
		};

		return {
			formState,
			formRef,
			rules,
			layout,
			handleFinishFailed,
			handleFinish,
			onSubmit,
		};
	},
});
</script>

<style lang="scss" module></style>
