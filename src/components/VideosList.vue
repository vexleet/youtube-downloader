<template>
  <div v-if="videos.items.length !== 0">
    <video-item
      v-for="video in videos.items"
      :key="video.videoId"
      :title="video.title"
      :channel-name="video.channelTitle"
      :image="video.image"
      :video-id="video.videoId"
    >
    </video-item>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import VideoItem from "./VideoItem.vue";
import { computed, onMounted } from "vue";
import { File } from "@ionic-native/file/ngx";
import axios from "axios";

export default {
  name: "VideosList",
  components: { VideoItem },
  setup() {
    const store = useStore();

    onMounted(() => {
      // const fileTransfer = new FileTransfer();
      const file = new File();
      axios;
    });

    return { videos: computed(() => store.state.videos) };
  },
};
</script>
