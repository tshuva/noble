export let userPreferences: string;

export const signup = (payload: string) => {
  console.log(payload);

  userPreferences = payload;
  return userPreferences;
};
