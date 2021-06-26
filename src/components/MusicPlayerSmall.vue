<template>
  <ion-card>
    <ion-range
      color="primary"
      min="0"
      :max="song.duration()"
      mode="md"
      :value="currentTime"
    ></ion-range>

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
import { IonCard, IonCardContent, IonIcon, IonRange } from "@ionic/vue";
import {
  playSharp,
  pauseSharp,
  playSkipBackSharp,
  playSkipForwardSharp,
} from "ionicons/icons";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import { Howl } from "howler";

export default {
  name: "MusicPlayerSmall",
  components: {
    IonCard,
    IonCardContent,
    IonIcon,
    IonRange,
  },
  setup() {
    const currentTime = ref<Howl | number>(0);
    const store = useStore();

    function setTimeInterval() {
      const sound: Howl = store.state.currentSong;

      if (sound) {
        return setInterval(() => {
          currentTime.value = sound.seek(store.state.musicId);
        }, 1000);
      }

      return 0;
    }

    let timeInterval: number = setTimeInterval();

    const playSong = () => {
      const sound: Howl = store.state.currentSong;

      sound.play(store.state.musicId);
      store.dispatch("pauseResumeCurrentSong", false);
      timeInterval = setTimeInterval();
    };

    const pauseSong = () => {
      const sound: Howl = store.state.currentSong;

      sound.pause();
      store.dispatch("pauseResumeCurrentSong", true);
      clearInterval(timeInterval);
    };

    return {
      playSharp,
      pauseSharp,
      playSkipBackSharp,
      playSkipForwardSharp,
      currentSongIsPaused: computed(() => store.state.currentSongIsPaused),
      song: computed<Howl>(() => store.state.currentSong),
      currentTime: currentTime,
      playSong,
      pauseSong,
    };
  },
};
</script>

<style scoped>
ion-range {
  padding: 0;
  --knob-size: 0px;
  --height: 5px;
}

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
