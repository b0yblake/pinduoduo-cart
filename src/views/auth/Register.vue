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
			<form @submit.prevent="submition" autocomplete="off">
				<div class="form__action">
					<a-button type="primary" html-type="submit"> Register </a-button>
				</div>
			</form>
			<a-form
				layout="vertical"
				:form="form"
				@submit="submition"
				autocomplete="off"
				ref="register_form"
			>
				<a-form-item
					:validate-status="userNameError() ? 'error' : ''"
					:help="userNameError() || ''"
				>
					<a-input
						v-decorator="[
							'userName',
							{
								rules: [
									{ required: true, message: 'Please input your username!' },
								],
							},
						]"
						placeholder="Username"
					>
						<a-icon
							slot="prefix"
							type="user"
							style="color: rgba(0, 0, 0, 0.25)"
						/>
					</a-input>
				</a-form-item>
				<a-form-item
					:validate-status="passwordError() ? 'error' : ''"
					:help="passwordError() || ''"
				>
					<a-input
						v-decorator="[
							'password',
							{
								rules: [
									{ required: true, message: 'Please input your Password!' },
								],
							},
						]"
						type="password"
						placeholder="Password"
					>
						<a-icon
							slot="prefix"
							type="lock"
							style="color: rgba(0, 0, 0, 0.25)"
						/>
					</a-input>
				</a-form-item>
				<a-form-item>
					<a-button
						type="primary"
						html-type="submit"
						:disabled="hasErrors(form.getFieldsError())"
					>
						Log in
					</a-button>
				</a-form-item>
			</a-form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: `Register`,
	setup() {
		const submition = () => {};
		return {
			submition,
		};
	},
});
</script>

<style lang="scss" module></style>
