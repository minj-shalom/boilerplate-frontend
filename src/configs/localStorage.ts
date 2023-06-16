export const localStorage = {
  getItem(key: string) {
    return window.localStorage.getItem(key) as string;
  },
  setItem(key: string, value: string) {
    window.localStorage.setItem(key, value);
  },
  removeItem(key: string) {
    window.localStorage.removeItem(key);
  },
};
