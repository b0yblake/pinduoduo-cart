<template>
	<div class="wrap">
		<!-- THE HEADER -->
		<TheHeader />
		<!-- //THE HEADER -->

		<!-- MAIN -->
		<main class="main">
			<slot />
		</main>
		<!-- //MAIN -->

		<!-- THE FOOTER -->
		<TheFooter />
		<!-- //THE FOOTER -->
	</div>
	<BaseMessageNotification />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: `LayoutDefault`,
});
</script>
