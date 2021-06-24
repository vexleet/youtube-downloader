import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { state } from "./store";
// import "./registerServiceWorker";
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import { createStore } from "vuex";

import { IonicVue } from "@ionic/vue";

/* Core CSS required for Ionic components to work properly */
import "@ionic/vue/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/vue/css/normalize.css";
import "@ionic/vue/css/structure.css";
import "@ionic/vue/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/vue/css/padding.css";
import "@ionic/vue/css/float-elements.css";
import "@ionic/vue/css/text-alignment.css";
import "@ionic/vue/css/text-transformation.css";
import "@ionic/vue/css/flex-utils.css";
import "@ionic/vue/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import { mutations } from "./store/mutations";
import { actions } from "./store/actions";

/* Store */

const store = createStore({
  state,
  mutations,
  actions,
});

const app = createApp(App).use(IonicVue).use(router).use(store);

router.isReady().then(() => {
  app.mount("#app");
});
