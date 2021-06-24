import { MutationTree } from "vuex";
import { State } from "@/src/store/index";
import { Howl } from "howler";

export const mutations: MutationTree<State> = {
  addVideos(state, videos) {
    state.videos = videos;
  },
  setCurrentSong(state, song: Howl) {
    state.currentSong = song;
  },
  setCurrentSongId(state, songId: string) {
    state.currentSongId = songId;
  },
};
