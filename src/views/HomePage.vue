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

			<!-- <CarouselGroup :title="'Originals carousel'" /> -->

			<button type="button" @click="changeNotification">Click Cai lay</button>
		</LayoutDefault>
	</div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		LayoutDefault,
	},
	setup() {
		const $notification = inject("$notification");
		const changeNotification = () => {
			try {
				$notification.success("message day", "desc day");
			} catch (error) {
				console.error(error);
			}
		};

		return {
			changeNotification,
		};
	},
});
</script>
