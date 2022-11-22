import { signup, userPreferences } from "../dal";

export const getUserPreferences = (header?: string) =>
  header ? signup(header) : userPreferences;
