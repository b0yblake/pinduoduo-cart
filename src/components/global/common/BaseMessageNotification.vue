<template>
	<div>isDisplay: {{ isDisplay }}</div>
</template>
<script lang="ts">
import {
	defineComponent,
	onUpdated,
	PropType,
	reactive,
	toRef,
	UnwrapRef,
	onMounted,
	watch,
	ref,
} from "vue";
import { notification } from "ant-design-vue";

// interface MessageNotificationType {
// 	isDisplay?: Boolean;
// 	message?: String;
// 	description?: String;
// 	code?: String;
// }

export default defineComponent({
	name: "BaseMessageNotification",
	props: {
		isDisplay: {
			type: Boolean,
			// default: false,
		},
		message: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		code: {
			type: String,
			default: "error",
		},
		duration: {
			type: Number,
			default: 3,
		},
	},
	emits: ["isDisplay"],
	setup(props, context) {
		const optMessage = reactive({
			message: props.message,
			description: props.description,
		});

		const openNotificationWithIcon = () => {
			notification[props.code]({
				message: optMessage.message,
				description: optMessage.description,
			});
		};

		watch(
			() => props.isDisplay,
			(newVal, oldVal) => {
				if (newVal === true) openNotificationWithIcon();
			}
		);

		onUpdated(() => {
			context.emit("isDisplay", false);
		});

		return {
			// openNotificationWithIcon,
		};
	},
});
</script>
