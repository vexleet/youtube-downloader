import { YoutubeDataSimplified } from "@/src/models/youtubeQueryResponseModel";
import { Howl } from "howler";

export const state: {
  videos: YoutubeDataSimplified | null;
  currentSong: Howl | null;
  currentSongId: string;
  musicId: string;
  currentSongIsPaused: boolean;
} = {
  videos: {
    items: [],
  },
  currentSong: null,
  currentSongId: "",
  musicId: "",
  currentSongIsPaused: false,
};

export type State = typeof state;
