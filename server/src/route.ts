import { Router, Request } from "express";
import { introduction } from "./Bl";
import { getUserPreferences, postUserPreferences } from "./Bl/user";
import {
  Introduction,
  UserPreference,
  postUserResponse,
  XAuthentication,
} from "../../types";

const router = Router();

interface GetIntroduction {
  articleName: string;
}
interface PostUser extends Request {
  body: UserPreference;
}

router.get(
  "/introduction/:articleName",
  async (req: Request<GetIntroduction, {}, {}, string>, res, next) => {
    const articleName = req.params.articleName;
    const scrapeDate = Date.now();
    const UserToken = req.get(XAuthentication);

    try {
      res.send({
        introduction: await introduction(
          articleName,
          getUserPreferences(UserToken).language
        ),
        scrapeDate,
        articleName,
      } as Introduction);
    } catch (err) {
      res.status(400).send((err as Error).message);
    }
  }
);

router.post("/user", (req: PostUser, res, next) => {
  let a = postUserPreferences(req.body.userName, req.body.language);
  res.send(a);
});

export default router;
