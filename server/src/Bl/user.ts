import crypto from "crypto";
import { usersPreferences } from "../dal";

import { tryCatch } from "../utils";

export const getUserPreferences = (userToken: string) =>
  tryCatch(
    Boolean(usersPreferences.users[userToken]),
    () => usersPreferences.users[userToken],
    "user does not exist"
  );
export const postUserPreferences = (userName: string, language: string) => {
  const token = genToken(userName);
  usersPreferences.signup({ [token]: { userName, language } });
  return { token };
};

const genToken = (userName: string) =>
  crypto
    .createHash("md5")
    .update(`${userName} ${crypto.randomBytes(20).toString("hex")}`)
    .digest("hex");
