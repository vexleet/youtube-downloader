import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { state } from "./store";
import "./registerServiceWorker";
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
import axios from "axios";
import { mapVideos } from "./utils/mapVideos";

/* Store */

const store = createStore({
  state,
  mutations: {
    addVideos(state, videos) {
      state.videos = videos;
    },
  },
  actions: {
    getVideosByQuery({ commit }, query: string) {
      const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&q=${query}&key=AIzaSyCg93qcqqDxTMADMxTuIFDojeWtLBEWd1w`;

      axios.get(endpoint).then(function (response) {
        commit("addVideos", mapVideos(response));
      });
    },
  },
});

const app = createApp(App).use(IonicVue).use(router).use(store);

router.isReady().then(() => {
  app.mount("#app");
});
