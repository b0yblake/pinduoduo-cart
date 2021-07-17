import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
// import store from '@/store'

/** Load style sheets */
import "@/assets/stylesheets/index.scss";
import "ant-design-vue/dist/antd.css";
// import "ant-design-vue/dist/antd.dark.css";

/** Load configs */
import { AppConfig } from "@/config/app";

/** Load all Plugins */
// loadAllPlugins(app)
import loadAllPlugins from "@/plugins";
// import Fontawesome from "@/plugins/fontawsome";

/** Inject the global static configuration into the application, which can be read through this.a, which is more convenient than manual injection by provide and inject */
const app: ReturnType<typeof createApp> = createApp(App);
app.config.globalProperties = AppConfig;

/** Run all Plugins  */
loadAllPlugins(app);

/** Load depen needs */
// app.use(store)
// app.component("fa", Fontawesome);

app.use(router);
app.mount("#app");
