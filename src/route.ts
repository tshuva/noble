import { Router, Request } from "express";
import { introduction } from "./Bl";
import { getUserPreferences } from "./Bl/user";
import { Introduction } from "./types";

const router = Router();

interface GetIntroduction {
  articleName: string;
}

router.get(
  "/introduction/:articleName",
  async (req: Request<GetIntroduction, {}, {}, string>, res, next) => {
    const articleName = req.params.articleName;
    const scrapeDate = Date.now();

    try {
      res.send({
        introduction: await introduction(
          articleName,
          getUserPreferences(req.get("Accept-Language"))
        ),
        scrapeDate,
        articleName,
      } as Introduction);
    } catch (err) {
      res.status(400).send((err as Error).message);
    }
  }
);

export default router;
