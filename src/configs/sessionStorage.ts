export const sessionStorage = {
  getItem(key: string) {
    return window.sessionStorage.getItem(key) as string;
  },
  setItem(key: string, value: string) {
    window.sessionStorage.setItem(key, value);
  },
  removeItem(key: string) {
    window.sessionStorage.removeItem(key);
  },
};
