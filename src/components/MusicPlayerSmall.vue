<template>
  <ion-card v-if="song">
    <ion-card-content>
      <div class="song-info">
        <img src="https://i.redd.it/gfyugyna3v961.jpg" />

        <div class="song-name">
          <h5>Astronaut in the ocean</h5>
          <p>Gosho Palatkata</p>
        </div>
      </div>

      <div class="song-action-buttons">
        <ion-icon
          class="skip-backwards"
          :icon="playSkipBackSharp"
          type="button"
          size="large"
        >
        </ion-icon>

        <ion-icon
          class="play"
          :icon="!currentSongIsPaused ? pauseSharp : playSharp"
          @click="!currentSongIsPaused ? pauseSong() : playSong()"
          type="button"
          size="large"
        ></ion-icon>

        <ion-icon
          class="skip-forwards"
          :icon="playSkipForwardSharp"
          type="button"
          size="large"
        ></ion-icon>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonIcon } from "@ionic/vue";
import {
  playSharp,
  pauseSharp,
  playSkipBackSharp,
  playSkipForwardSharp,
} from "ionicons/icons";
import { useStore } from "vuex";
import { computed } from "vue";
import { Howl } from "howler";

export default {
  name: "MusicPlayerSmall",
  components: {
    IonCard,
    IonCardContent,
    IonIcon,
  },
  setup() {
    const store = useStore();

    const playSong = () => {
      const sound: Howl = store.state.currentSong;

      sound.play(store.state.musicId);
      store.dispatch("pauseResumeCurrentSong", false);
    };

    const pauseSong = () => {
      const sound: Howl = store.state.currentSong;

      sound.pause();
      store.dispatch("pauseResumeCurrentSong", true);
    };

    return {
      playSharp,
      pauseSharp,
      playSkipBackSharp,
      playSkipForwardSharp,
      currentSongIsPaused: computed(() => store.state.currentSongIsPaused),
      song: computed(() => store.state.currentSong),
      playSong,
      pauseSong,
    };
  },
};
</script>

<style scoped>
ion-card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.song-info {
  display: flex;
  align-items: center;
}

.song-info img {
  max-width: 50px;
  max-height: 50px;
}

.song-name {
  margin-left: 8px;
}

.song-name h5 {
  font-weight: bold;
  font-size: 17px;
  color: white;
  max-width: 120px;
}
</style>
