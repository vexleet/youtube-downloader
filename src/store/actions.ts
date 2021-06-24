import { ActionTree } from "vuex";
import { State } from "../store/index";
import axios from "axios";
import { mapVideos } from "../utils/mapVideos";
import { Howl } from "howler";

type ChangeCurrentSongActionType = {
  songHowler: Howl;
  songId: string;
};

export const actions: ActionTree<State, State> = {
  getVideosByQuery({ commit }, query: string) {
    const endpoint = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=15&q=${query}&key=AIzaSyCg93qcqqDxTMADMxTuIFDojeWtLBEWd1w`;

    axios.get(endpoint).then(function (response) {
      commit("addVideos", mapVideos(response));
    });
  },
  changeCurrentSong(
    { commit },
    { songHowler, songId }: ChangeCurrentSongActionType
  ) {
    commit("setCurrentSong", songHowler);
    commit("setCurrentSongId", songId);
  },
};
