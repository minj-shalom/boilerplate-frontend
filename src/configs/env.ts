import { languageFormatter } from "@/utils";

export const API_ENDPOINT = new URL(window.env.API_ENDPOINT);
export const DEFAULT_LANGUAGE = languageFormatter(window.env.DEFAULT_LANGUAGE);
