import { UserPreference } from "../../types";

type UserPreferences = {
  [k in string]: UserPreference;
};

interface UsersPreferences {
  signup: (payload: UserPreferences) => void;
  users: UserPreferences;
}

export const usersPreferences: UsersPreferences = {
  signup: function (payload: UserPreferences) {
    Object.assign(this.users, payload);
  },
  users: {},
};
