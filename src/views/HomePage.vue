<template>
	<div class="home-layout">
		<LayoutDefault>
			<ul>
				<li><router-link to="login">Login</router-link></li>
				<li><router-link to="forgot-password">forgot-password</router-link></li>
				<li>
					<router-link to="retrieve-password">retrieve-password</router-link>
				</li>
			</ul>
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
