import { UserPreference } from "./types";

type UsersPreferences = {
  [k in string]: UserPreference;
};

export const userPreferences = {
  signup: function (payload: UsersPreferences) {
    Object.assign(this, payload);
  },
};
