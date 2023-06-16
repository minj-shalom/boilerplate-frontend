export function languageFormatter(language: string) {
  if (!language || (language !== "en" && language !== "ko")) {
    return "en";
  }
  return String(language);
}
