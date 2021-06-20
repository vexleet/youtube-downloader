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
    </ion-content>
  </ion-page>
</template>

<script lang="ts" >
import { IonPage, IonContent } from '@ionic/vue';
import { useStore } from 'vuex'
import VideosList from "../components/VideosList.vue";

export default  {
  name: 'Tab1',
  components: {VideosList,  IonContent, IonPage },
  setup() {
    const store = useStore()

    const searchVideo = async (e: any) => {
      e.preventDefault()
      const query: string = e.target.value
      await store.dispatch('getVideosByQuery', query)
    }

    return {searchVideo}
  }
}
</script>