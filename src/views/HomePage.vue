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
			</ul>

			<!-- <CarouselGroup :title="'Originals carousel'" /> -->
		</LayoutDefault>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutDefault from "@/templates/layouts/LayoutDefault.vue";

export default defineComponent({
	name: "HomePage",
	components: {
		LayoutDefault,
	},
});
</script>
