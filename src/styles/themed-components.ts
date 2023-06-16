import * as styledComponents from "styled-components";
import { Theme } from "./theme";

export const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;
