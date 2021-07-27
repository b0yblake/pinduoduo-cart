<template>
	<div class="dialog__wrapper">
		<slot />
		<slot name="dialog-action" />
		<slot name="dialog-close" :onCLose="onCLose" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useDialogState from "@/composables/dialogState";

export default defineComponent({
	name: "DialogWrapper",
	setup() {
		const { setStateDialog } = useDialogState;
		const onCLose = () => {
			setStateDialog(false);
		};
		return {
			onCLose,
		};
	},
});
</script>

<style lang="scss" scoped></style>
