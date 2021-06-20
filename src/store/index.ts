import {YoutubeDataSimplified} from "@/src/models/youtubeQueryResponseModel";

export const state: {videos: YoutubeDataSimplified | null} = {
    videos: {
        items: []
    }
}

export type State = typeof state