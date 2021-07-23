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
				layout="vertical"
				:model="formState"
				:rules="rules"
				@finish="handleFinish"
				@finishFailed="handleFinishFailed"
			>
				<a-form-item>
					<a-input
						v-model:value="username"
						placeholder="Username"
						ref="name"
						name="name"
					>
						<template #prefix
							><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
						/></template>
					</a-input>
				</a-form-item>
				<a-form-item has-feedback name="pass">
					<a-input
						v-model:value="pass"
						type="password"
						autocomplete="off"
						placeholder="Password"
					>
						<template #prefix
							><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
						/></template>
					</a-input>
				</a-form-item>
				<a-form-item has-feedback name="checkPass">
					<a-input
						v-model:value="checkPass"
						type="password"
						autocomplete="off"
						placeholder="Confirm"
					>
						<template #prefix
							><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
						/></template>
					</a-input>
				</a-form-item>

				<div class="form__action">
					<a-form-item>
						<a-button type="primary" html-type="submit" class="btn_submit">
							Register
						</a-button>
					</a-form-item>
					<router-link to="/account/login" @click="switchToLogin"
						>Already has account? Click to login
					</router-link>
				</div>
			</a-form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef, toRefs, inject } from "vue";
import {
	RuleObject,
	ValidateErrorEntity,
} from "ant-design-vue/es/form/interface";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
// https://www.npmjs.com/package/@ant-design/icons-vue
// https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-vue/src/icons

interface FormState {
	username: string | number;
	pass: string;
	checkPass: string;
}

export default defineComponent({
	name: `Register`,
	emits: ["formRegister", "currentTab"],
	components: {
		UserOutlined,
		LockOutlined,
	},
	setup(props, context) {
		const $notification = inject("$notification");
		const formRef = ref();
		const formState: UnwrapRef<FormState> = reactive({
			username: "",
			pass: "",
			checkPass: "",
		});

		const validatePass = async (rule: RuleObject, value: string) => {
			if (value === "") {
				return Promise.reject(new Error("Please input the password"));
			}
			if (formState.checkPass !== "") {
				// formRef.value.validateField("checkPass");
				formRef.value = "checkPass";
			}

			return Promise.resolve();
		};

		const validatePass2 = async (rule: RuleObject, value: string) => {
			if (value === "") {
				return Promise.reject(new Error("Please input the password again"));
			}
			if (value !== formState.pass) {
				return Promise.reject(new Error("Two inputs don't match!"));
			}

			return Promise.resolve();
		};

		const rules = {
			username: [
				{
					required: true,
					message: "Your user name",
					trigger: "blur",
				},
				{
					min: 8,
					max: 16,
					message: "Length should be 8 to 16 characters",
					trigger: "blur",
				},
			],
			pass: [{ required: true, validator: validatePass, trigger: "change" }],
			checkPass: [{ validator: validatePass2, trigger: "change" }],
		};

		const handleFinish = (values: FormState) => {
			// console.log("success: ", formState);
			context.emit("formRegister", formState);
		};

		const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
			// console.log("errors: ", errors);
			try {
				$notification.error(
					"Oops, something went wrong!",
					"Username or password incorrect, please try again!"
				);
			} catch (error) {
				console.error(error);
			}
		};

		const switchToLogin = () => {
			// console.log("clicked submit emit currentTab");
			context.emit("currentTab", "Login");
		};

		return {
			...toRefs(formState),
			formState,
			formRef,
			rules,
			handleFinishFailed,
			handleFinish,
			switchToLogin,
		};
	},
});
</script>

<style lang="scss" module></style>
