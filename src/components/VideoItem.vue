<template>
  <ion-card>
    <img :src="image"/>
    <ion-card-header>
      <ion-card-title v-html="title"></ion-card-title>
      <ion-card-subtitle>
        {{channelName}}
      </ion-card-subtitle>

      <ion-button color="primary" size="default" expand="block"  :href="`http://localhost:3000/${videoId}`" download>
        Download
      </ion-button>
    </ion-card-header>

  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/vue';
import axios from "axios";

type VideoItemProps = {
  title: string;
  image: string;
  channelName: string;
  videoId: string;
}

export default  {
  name: 'VideoItem',
  components: {IonCard, IonCardHeader,  IonCardTitle, IonCardSubtitle, IonButton},
  props: {
    title: {
      type: String,
      required: true
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
    }
  },
  setup(props: VideoItemProps) {
    const downloadVideo = (videoId: string) => {
      axios.get(`http://localhost:3000/${videoId}`)
    }
    return { ...props, downloadVideo }
  }
}
</script>

<style scoped>
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