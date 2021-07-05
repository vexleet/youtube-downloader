<template>
  <ion-modal :is-open="true">
    <ion-content class="ion-padding">
      <div class="song-cover">
        <img src="https://i.redd.it/gfyugyna3v961.jpg" />
      </div>

      <div class="song-details">
        <h2>Crush</h2>
        <h6>Picture this</h6>
      </div>

      <ion-range color="primary" min="0" mode="md"></ion-range>

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
          :icon="playSharp"
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
    </ion-content>
  </ion-modal>
</template>
<script>
import { IonModal } from "@ionic/vue";
import {
  playSharp,
  pauseSharp,
  playSkipBackSharp,
  playSkipForwardSharp,
} from "ionicons/icons";

export default {
  name: "MusicPlayerModal",
  components: { IonModal },
  setup() {
    return {
      playSharp,
      pauseSharp,
      playSkipBackSharp,
      playSkipForwardSharp,
    };
  },
};
</script>

<style scoped>
.song-cover {
  text-align: center;
  position: relative;
}

.song-cover img {
  width: 250px;
  height: 250px;
  border-radius: 50%;
}

.song-cover::before {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 500;
}

.song-details {
  text-align: center;
  margin-top: 16px;
}

.song-details > * {
  margin: 0;
}
</style>
