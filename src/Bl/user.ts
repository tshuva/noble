import crypto from "crypto";
import { userPreferences } from "../dal";
import { UserPreference } from "../types";

export const getUserPreferences = (userToken: string): UserPreference =>
  userPreferences[userToken];

export const postUserPreferences = (userName: string, language: string) => {
  const token = genToken(userName);
  userPreferences.signup({ [token]: { userName, language } });
  return token;
};

const genToken = (userName) =>
  crypto
    .createHash("md5")
    .update(`${userName} ${crypto.randomBytes(20).toString("hex")}`)
    .digest("hex");
