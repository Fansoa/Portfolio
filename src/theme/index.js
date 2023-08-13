import { global } from "./global";

// ComponentsTheme
import { buttonTheme } from "./componentsTheme/button";
import { inputTheme } from "./componentsTheme/input";
import { labelInputTheme } from "./componentsTheme/labelInput";

const componentsTheme = {
  buttonTheme,
  inputTheme,
  labelInputTheme,
};

const theme = {
  ...global,
  ...componentsTheme,
};

export default theme;
