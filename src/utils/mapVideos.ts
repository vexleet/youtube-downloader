import {
  YoutubeDataSimplified,
  YoutubeItemSimplified,
  YoutubeQueryResponseModel,
} from "@/src/models/youtubeQueryResponseModel";

export function mapVideos(
  youtubeDataResponse: YoutubeQueryResponseModel
): YoutubeDataSimplified {
  return {
    items: youtubeDataResponse.data.items.map<YoutubeItemSimplified>(
      (item) => ({
        title: item.snippet.title,
        channelId: item.snippet.channelId,
        channelTitle: item.snippet.channelTitle,
        videoId: item.id.videoId,
        image: item.snippet.thumbnails.high.url,
      })
    ),
  };
}
