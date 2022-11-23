import fetch from "node-fetch";

export const introduction = async (
  articleName: string,
  language: string
): Promise<string> => {
  if (!/^[\p{L}0-9_-]+$/u.test(articleName)) {
    throw new Error(`article name : ${articleName} is wrong`);
  }

  return fitIntroduction(
    fromFetchToIntroduction(await fetchArticle(articleName, language))
  );
};

const fitIntroduction = (introduction: string) =>
  introduction
    .split("<p>")[1]
    .replaceAll(/(<([^>]+)>)/gi, "")
    .replaceAll(/(\r\n|\n|\r)/gm, "");

const fromFetchToIntroduction = (WikiRes: any) =>
  WikiRes.query.pages[0].extract as string;

const fetchArticle = async (articleName: string, language: string) =>
  fetch(WikiUrl(articleName, language)).then((res) => res.json());

const WikiUrl = (articleName: string, language: string) =>
  `https://${language}.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=${articleName}&formatversion=2&exintro=1`;
