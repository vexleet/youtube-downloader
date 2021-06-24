import { YoutubeDataSimplified } from "@/src/models/youtubeQueryResponseModel";
import { Howl } from "howler";

export const state: {
  videos: YoutubeDataSimplified | null;
  currentSong: Howl | null;
  currentSongId: string;
} = {
  videos: {
    items: [],
  },
  currentSong: null,
  currentSongId: "",
};

export type State = typeof state;
