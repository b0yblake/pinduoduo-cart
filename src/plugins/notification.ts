import { reactive } from "vue";
import BaseMessageNotification from "@/components/global/common/BaseMessageNotification.vue";

interface notiType {
	isDisplay?: boolean;
	message?: string;
	description?: string;
	code?: string;
	duration?: number;
}

const notificationOpts = {
	notificationData: reactive({
		isDisplay: false,
		message: "",
		description: "",
		code: "",
		duration: 0,
	}),
	close() {
		Object.assign(this.notificationData, { isDisplay: false });
	},
	show(code: string, message: string, description: string) {
		Object.assign(this.notificationData, {
			isDisplay: true,
			code,
			message,
			description,
		});
	},
	success(message: string, description: string) {
		this.show("success", message, description);
	},
	warning(message: string, description: string) {
		this.show("warning", message, description);
	},
	error(message: string, description: string) {
		this.show("error", message, description);
	},
};

const notificationPlugin = {
	install: (app: any, notificationOpts) => {
		app.component("base-message-notification", BaseMessageNotification);

		// make $notification property available to all components if using Composition API (use provide/inject)
		app.provide("$notification", notificationOpts);
	},
};

export default function loadComponent(app: any) {
	app.use(notificationPlugin, notificationOpts);
}
