export interface Introduction {
  scrapeDate: number;
  articleName: string;
  introduction: string;
}

export interface UserPreference {
  userName: string;
  language: string;
}

export interface postUserResponse {
  token: string;
}

export const XAuthentication: string = "x-authentication";
