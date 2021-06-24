<template>
  <ion-card>
    <div class="image-wrapper">
      <img :src="image" />
      <ion-icon
        class="play-song-button"
        :icon="
          currentSongId === videoId && !currentSongIsPaused
            ? pauseCircle
            : playCircle
        "
        size="large"
        type="button"
        @click="
          currentSongId === videoId && !currentSongIsPaused
            ? pauseSong()
            : playSong(videoId)
        "
      ></ion-icon>
    </div>
    <ion-card-header>
      <ion-card-title v-html="title"></ion-card-title>
      <ion-card-subtitle>
        {{ channelName }}
      </ion-card-subtitle>

      <ion-button
        color="primary"
        size="default"
        expand="block"
        :href="`http://localhost:3000/${videoId}`"
        download
      >
        Download
      </ion-button>
    </ion-card-header>
  </ion-card>
</template>

<script lang="ts">
import { ref } from "vue";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
} from "@ionic/vue";
import { playCircle, pauseCircle } from "ionicons/icons";
import axios from "axios";
import { Howl } from "howler";
import { useStore } from "vuex";
import { computed } from "vue";

type VideoItemProps = {
  title: string;
  image: string;
  channelName: string;
  videoId: string;
};

export default {
  name: "VideoItem",
  components: {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    channelName: {
      type: String,
      required: true,
    },
    videoId: {
      type: String,
      required: true,
    },
  },
  setup(props: VideoItemProps) {
    const currentSongIsPaused = ref<boolean>(false);
    const store = useStore();

    const downloadVideo = (videoId: string) => {
      axios.get(`http://localhost:3000/${videoId}`);
    };

    const playSong = (songId: string) => {
      debugger;
      if (songId === store.state.currentSongId) {
        store.state.currentSong.play();
        return;
      }

      const sound = new Howl({
        src: `https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3`,
        format: ["mp3"],
        autoplay: true,
        volume: 0.3,
      });

      sound.once("load", function () {
        sound.play();
        store.dispatch("changeCurrentSong", { songHowler: sound, songId });
      });

      sound.on("pause", function () {
        console.log(true);
        currentSongIsPaused.value = true;
      });
    };

    const pauseSong = () => {
      store.state.currentSong.pause();
    };

    return {
      ...props,
      playCircle,
      pauseCircle,
      currentSongIsPaused,
      currentSongId: computed(() => store.state.currentSongId),
      downloadVideo,
      playSong,
      pauseSong,
    };
  },
};
</script>

<style scoped>
.image-wrapper {
  position: relative;
}

.play-song-button {
  position: absolute;
  right: 0;
  bottom: -10px;
  font-size: 25px !important;
  width: 1.5em;
  height: 1.5em;
  color: white;
}

ion-card-header {
  padding: 10px 10px 16px;
}

ion-card-title {
  font-size: 22px;
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
