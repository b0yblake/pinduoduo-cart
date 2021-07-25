<template></template>
<script lang="ts">
import { defineComponent, inject, watch } from "vue";
import { notification } from "ant-design-vue";

interface MessageNotificationType {
	isDisplay?: Boolean;
	message?: String;
	description?: String;
	code?: String;
}

export default defineComponent({
	name: "BaseMessageNotification",
	setup() {
		const $notification = inject("$notification");
		const openNotificationWithIcon = () => {
			notification[$notification?.notificationData?.code]({
				message: $notification?.notificationData?.message,
				description: $notification?.notificationData?.description,
			});
		};

		watch(
			() => $notification.notificationData.isDisplay,
			(newVal, oldVal) => {
				if (newVal) {
					openNotificationWithIcon();
					$notification.close();
				}
			}
		);

		return {};
	},
});
</script>
