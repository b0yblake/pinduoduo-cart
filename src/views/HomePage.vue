<template>
	<div class="home-layout">
		<LayoutDefault>
			<ul>
				<li><router-link to="/account/login">Login</router-link></li>
				<li>
					<router-link to="/account/forgot-password"
						>forgot-password</router-link
					>
				</li>
				<li>
					<router-link to="/account/retrieve-password"
						>retrieve-password</router-link
					>
				</li>
			</ul>

			<CarouselGroup :title="'Originals carousel'" />

			<button type="button" @click="isDisplay = true">Click show</button>
			<BaseMessageNotification
				:isDisplay="isDisplay"
				:message="message"
				:description="description"
				:code="code"
				@isDisplay="handleIsDisplay"
			/>
		</LayoutDefault>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		LayoutDefault,
	},
	setup() {
		const sampleMessage = reactive({
			isDisplay: false,
			message: "Oops! some thing went wrong!",
			description: "Please try again!",
			code: "success",
			duration: 3,
		});

		const handleIsDisplay = (value: boolean) => {
			sampleMessage.isDisplay = value;
		};

		return {
			...toRefs(sampleMessage),
			handleIsDisplay,
		};
	},
});
</script>
