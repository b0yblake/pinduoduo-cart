<template>
	<div class="dialog-gift__wrap">
		<img :src="gift1" alt="" />
		<div class="dialog-gift__content">
			<p>Gift voucher: XTEI33</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import gift1 from "@/assets/images/bg-gift.png";

export default defineComponent({
	name: "DialogGift",
	setup() {
		return {
			gift1,
		};
	},
});
</script>
