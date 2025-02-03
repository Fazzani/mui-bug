'use client';

import { FC, PropsWithChildren } from 'react';
import { deepmerge } from '@mui/utils';
import {
  ThemeProvider as MuiThemeProvider,
  createTheme as createMuiTheme,
  responsiveFontSizes,
  ThemeOptions,
} from '@mui/material/styles';
import { defaultTheme } from '../../themes/defaultTheme';

export interface ThemeProviderProps {
  customTheme?: ThemeOptions;
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ customTheme = {}, children }) => {
  let theme = createMuiTheme(deepmerge(defaultTheme, customTheme));
  theme = responsiveFontSizes(theme);

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
