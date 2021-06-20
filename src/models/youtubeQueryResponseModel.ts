export type YoutubeQueryResponseModel = {
    data: {
        items: YoutubeItem[];
    };
}

type YoutubeItem = {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        channelTitle: string;
        channelId: string;
        thumbnails: {
            high: {
                url: string;
            };
        };
    };
}

export type YoutubeDataSimplified = {
    items: YoutubeItemSimplified[];
}

export type YoutubeItemSimplified = {
    title: string;
    channelTitle: string;
    channelId: string;
    image: string;
    videoId: string;
}