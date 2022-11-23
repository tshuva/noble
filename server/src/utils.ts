/**
 * when false throw error, else activate the ok function
 * @param cond
 * @param ok  some function
 * @param errorMassage
 * @returns
 */
export const tryCatch = (cond: boolean, ok: Function, errorMassage: string) =>
  cond
    ? ok()
    : (() => {
        throw new Error(errorMassage);
      })();
