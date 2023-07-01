import { global } from "./global";

// ComponentsTheme
import { buttonTheme } from "./componentsTheme/button";

const componentsTheme = {
  buttonTheme,
};

const theme = {
  ...global,
  ...componentsTheme,
};

export default theme;
