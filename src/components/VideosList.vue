<template>
  <div v-if="videos.items.length !== 0">
    <video-item
        v-for="video in videos.items"
        :key="video.videoId"
        :title="video.title"
        :channel-name="video.channelTitle"
        :image="video.image"
    >
    </video-item>
  </div>
</template>

<script lang="ts">
import {useStore} from "vuex";
import VideoItem from "./VideoItem.vue";
import {computed} from "vue";

export default {
  name: 'VideosList',
  components: {VideoItem},
  setup() {
    const store = useStore()

    return {videos: computed(() => store.state.videos) }
  }
}
</script>