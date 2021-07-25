<template>
	<LayoutOnlyContent>
		<div class="auth__wrapper">
			<a-form
				ref="formRef"
				:model="formState"
				:rules="rules"
				:label-col="labelCol"
				:wrapper-col="wrapperCol"
			>
				<a-form-item ref="name" label="Your name" name="name">
					<a-input v-model:value="formState.name" />
				</a-form-item>
				<a-form-item ref="storeName" label="Your store name" name="storeName">
					<a-input v-model:value="formState.storeName" />
				</a-form-item>
				<a-form-item label="Activity zone" name="plan">
					<a-select
						v-model:value="formState.plan"
						placeholder="Please select your plan"
					>
						<a-select-option value="planOnly">Only B2C</a-select-option>
						<a-select-option value="planBoth">B2B & B2c</a-select-option>
					</a-select>
				</a-form-item>
				<a-form-item label="Date grand opening" required name="date">
					<a-date-picker
						v-model:value="formState.date"
						show-time
						type="date"
						placeholder="Pick a date"
						style="width: 100%"
					/>
				</a-form-item>
				<a-form-item label="Is your a factory?" name="factory">
					<a-switch v-model:checked="formState.factory" />
				</a-form-item>
				<a-form-item label="Activity type available" name="type">
					<a-checkbox-group v-model:value="formState.type">
						<a-checkbox value="1" name="type">Online</a-checkbox>
						<a-checkbox value="2" name="type">Offline</a-checkbox>
					</a-checkbox-group>
				</a-form-item>
				<a-form-item label="Available resources" name="resource">
					<a-radio-group v-model:value="formState.resource">
						<a-radio value="1">Available</a-radio>
						<a-radio value="2">Pre-order</a-radio>
					</a-radio-group>
				</a-form-item>
				<a-form-item label="Description of your store" name="desc">
					<a-textarea v-model:value="formState.desc" />
				</a-form-item>
				<a-form-item :wrapper-col="{ span: 14, offset: 4 }">
					<a-button type="primary" @click="onSubmit">Create</a-button>
					<a-button style="margin-left: 10px" @click="resetForm"
						>Reset</a-button
					>
				</a-form-item>
			</a-form>
		</div>
	</LayoutOnlyContent>
</template>

<script lang="ts">
import LayoutOnlyContent from "@/templates/layouts/LayoutOnlyContent.vue";
import { ValidateErrorEntity } from "ant-design-vue/es/form/interface";
import { Moment } from "moment";
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from "vue";

interface FormState {
	name: string;
	storeName: string;
	plan: string | undefined;
	date: Moment | undefined;
	factory: boolean;
	type: string[];
	resource: string;
	desc: string;
}

export default defineComponent({
	name: `BecomeVender`,
	components: {
		LayoutOnlyContent,
	},
	setup() {
		const formRef = ref();
		const formState: UnwrapRef<FormState> = reactive({
			name: "",
			storeName: "",
			plan: undefined,
			date: undefined,
			factory: false,
			type: [],
			resource: "",
			desc: "",
		});
		const rules = {
			name: [
				{
					required: true,
					message: "Please enter your full name",
					trigger: "blur",
				},
				{
					min: 5,
					max: 32,
					message: "Length of your name should be 5 to 32",
					trigger: "blur",
				},
			],
			storeName: [
				{
					required: true,
					message: "Please enter your store name",
					trigger: "blur",
				},
				{
					min: 5,
					max: 16,
					message: "Length of your store name should be 5 to 16",
					trigger: "blur",
				},
				{
					pattern: new RegExp("^[A-Za-z0-9_.-]*$"),
					message:
						"Wrong format! Your store code will not contain a special chars",
					trigger: "blur",
				},
			],
			plan: [
				{
					required: true,
					message: "Please select yor plan",
					trigger: "change",
				},
			],
			date: [
				{
					required: true,
					message: "Please pick a date of grand opening",
					trigger: "change",
					type: "object",
				},
			],
			type: [
				{
					type: "array",
					required: true,
					message: "Please select at least one activity type",
					trigger: "change",
				},
			],
			resource: [
				{
					required: true,
					message: "Please select activity resource",
					trigger: "change",
				},
			],
			desc: [
				{
					required: true,
					message: "Please input activity form",
					trigger: "blur",
				},
			],
		};

		const onSubmit = () => {
			formRef.value
				.validate()
				.then(() => {
					console.log("Values prepare for API: ", formState, toRaw(formState));
				})
				.catch((error: ValidateErrorEntity<FormState>) => {
					console.log("error", error);
				});
		};

		const resetForm = () => {
			formRef.value.resetFields();
		};

		return {
			formRef,
			labelCol: { span: 6 },
			wrapperCol: { span: 14 },
			other: "",
			formState,
			rules,
			onSubmit,
			resetForm,
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
