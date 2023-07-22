import { ThemeProvider } from '@emotion/react';
import theme from '../../src/theme';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { Global } from '@emotion/react';
import { globalStyles } from '../../src/utils/sharedStyles/globalStyles';

import "../../src/normalize.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      default: theme,
    },
    defaultTheme: 'default',
    Provider: ThemeProvider,
    GlobalStyles: () => <Global styles={globalStyles} />
  }),
]

export default preview;
