<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-searchbar
        placeholder="Search for a video..."
        cancel-button-text="Search..."
        show-clear-button="never"
        show-cancel-button="focus"
        @ionCancel="searchVideo"
      >
      </ion-searchbar>

      <videos-list></videos-list>

      <ion-icon
        class="scroll-to-top"
        :icon="arrowUpCircle"
        size="large"
        type="button"
        @click="scrollToTop"
      ></ion-icon>
    </ion-content>

    <music-player-small></music-player-small>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonIcon } from "@ionic/vue";
import { useStore } from "vuex";
import { arrowUpCircle } from "ionicons/icons";
import VideosList from "../components/VideosList.vue";
import MusicPlayerSmall from "../components/MusicPlayerSmall.vue";

export default {
  name: "Tab1",
  components: { MusicPlayerSmall, VideosList, IonContent, IonPage, IonIcon },
  setup() {
    const store = useStore();

    const searchVideo = async (e: any) => {
      e.preventDefault();
      const query: string = e.target.value;
      await store.dispatch("getVideosByQuery", query);
    };

    const scrollToTop = () => {
      document.querySelector("ion-content")?.scrollToTop(500);
    };

    return { searchVideo, arrowUpCircle, scrollToTop };
  },
};
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 15px;
  right: 15px;
  font-size: 42px !important;
  width: 1.2em;
  height: 1.2em;
}
</style>
