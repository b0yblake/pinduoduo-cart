//https://v3.vuejs.org/guide/plugins.html#writing-a-plugin

const messagePlugin = {
	install: (app, pluginName = "$message") => {
		
	},
};

export default function loadComponent(app: any) {
	app.use(messagePlugin);
}
