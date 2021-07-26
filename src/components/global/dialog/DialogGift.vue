<template>
	<div class="dialog-gift__wrap">
		<img :src="gift1" alt="" />
		<div class="dialog-gift__content">
			<p>Gift voucher: XTEI33</p>
		</div>
		<button type="button" @click="onCLose">
			<CloseCircleOutlined />
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CloseCircleOutlined } from "@ant-design/icons-vue";
import gift1 from "@/assets/images/bg-gift.png";

export default defineComponent({
	name: "DialogGift",
	components: {
		CloseCircleOutlined,
	},
	emits: ["onCLose"],
	setup(props, context) {
		const onCLose = () => {
			context.emit("onCLose", false);
		};

		return {
			onCLose,
			gift1,
		};
	},
});
</script>

<style lang="scss" scoped></style>
