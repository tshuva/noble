export interface GetIntroduction {
  articleName: string;
  introduction: string;
}

export type Introduction = GetIntroduction & {
  scrapeDate: number;
};
