import type { CSSProperties } from 'react';
import type {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
  SimplePaletteColorOptions as MuiSimplePaletteColorOptions,
  PaletteColor as MuiPaletteColor,
  TypeBackground as MuiTypeBackground,
} from '@mui/material/styles';
import { Color as MuiColor } from '@mui/material';

declare module '@mui/material' {
  // eslint-disable-next-line
  // @ts-ignore
  interface Color extends MuiColor {
    10?: string;
    950: string;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bodyXl: CSSProperties;
    bodyL: CSSProperties;
    bodyM: CSSProperties;
    bodyS: CSSProperties;
    bodyXs: CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    bodyXl?: CSSProperties;
    bodyL?: CSSProperties;
    bodyM?: CSSProperties;
    bodyS?: CSSProperties;
    bodyXs?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bodyXl: true;
    bodyL: true;
    bodyM: true;
    bodyS: true;
    bodyXs: true;
  }
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line
  // @ts-ignore
  interface Palette extends MuiPalette {
    purple: MuiColor;
    beige: MuiColor;
    green: MuiColor;
    red: MuiColor;
    orange: MuiColor;
    pink: MuiColor;
    blue: MuiColor;
    brands: {
      cadhoc: Palette['primary'];
      culture: Palette['primary'];
      dejeuner: Palette['primary'];
      service: Palette['primary'];
      lire: Palette['primary'];
    };
    background: TypeBackground;
  }

  // eslint-disable-next-line
  // @ts-ignore
  interface PaletteOptions extends MuiPaletteOptions {
    purple?: MuiColor;
    beige?: MuiColor;
    green?: MuiColor;
    red?: MuiColor;
    orange?: MuiColor;
    pink?: MuiColor;
    blue?: MuiColor;
    brands?: {
      cadhoc?: PaletteOptions['primary'];
      culture?: PaletteOptions['primary'];
      dejeuner?: PaletteOptions['primary'];
      service?: PaletteOptions['primary'];
      lire?: PaletteOptions['primary'];
    };
    background?: Partial<TypeBackground>;
  }

  // eslint-disable-next-line
  // @ts-ignore
  interface PaletteColor extends MuiPaletteColor {
    lighter?: string;
    darker?: string;
  }

  // eslint-disable-next-line
  // @ts-ignore
  interface SimplePaletteColorOptions extends MuiSimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  // eslint-disable-next-line
  // @ts-ignore
  interface TypeBackground extends MuiTypeBackground {
    light: string;
    dark: string;
    darker: string;
  }
}
