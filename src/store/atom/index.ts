import { atom, selector } from "recoil";

export type VideoAnalyticsType = {
  comments: string | null;
  dislikes: string | null;
  videoTitle: string | null;
  views: string | null;
};

export const searchVideoAnalyticsVideo = atom<string | null>({
  key: "video-analytics-video",
  default: "",
});

export const searchTextTableData = selector({
  key: "video-title-data",
  get: ({ get }) => {
    const text = get(searchVideoAnalyticsVideo);

    return text;
  },
});
