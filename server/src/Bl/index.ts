import fetch from "node-fetch";

import { tryCatch } from "../utils";

export const introduction = async (
  articleName: string,
  language: string
): Promise<string> =>
  tryCatch(
    /^[\p{L}0-9_-]+$/u.test(articleName),
    async () =>
      fitIntroduction(
        fromFetchToIntroduction(await fetchArticle(articleName, language))
      ),
    `article name : ${articleName} is wrong`
  );

const fitIntroduction = (introduction: string) =>
  introduction.split("<p>")[1].replaceAll(/(<([^>]+)>|\r\n|\n|\r)/gim, "");

const fromFetchToIntroduction = (WikiRes: any) =>
  WikiRes.query.pages[0].extract as string;

const fetchArticle = async (articleName: string, language: string) =>
  fetch(WikiUrl(articleName, language)).then((res) => res.json());

const WikiUrl = (articleName: string, language: string) =>
  `https://${language}.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${articleName}&formatversion=2&exintro=1`;
