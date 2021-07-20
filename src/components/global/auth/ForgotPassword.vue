<template>
	<LayoutOnlyContent>
		<div class="form__wrap">Forgot password page</div>
	</LayoutOnlyContent>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutOnlyContent from "@/templates/layouts/LayoutOnlyContent.vue";

export default defineComponent({
	name: `ForgotPassword`,
	components: {
		LayoutOnlyContent,
	},
});
</script>

<style lang="scss" scoped></style>
