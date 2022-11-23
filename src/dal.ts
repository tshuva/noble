import { UserPreferences } from "./types";

type UsersPreferences = {
  [k in string]: UserPreferences;
};

export const userPreferences = {
  signup: function (payload: UsersPreferences) {
    Object.assign(this, payload);
  },
};

console.log(userPreferences);
