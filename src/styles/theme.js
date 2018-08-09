// @flow

export type Colours = {
  background: string,
  primary: string,
  secondary: string,
  tertiary: string,
  success: string,
  error: string,
};

export type Spacing = {
  xxSmall: string,
  xSmall: string,
  small: string,
  medium: string,
  larger: string,
  large: string,
  xLarge: string,
  xxLarge: string,
};

export type FontSettings = {
  tiny: string,
  detail: string,
  ui: string,
  h6: string,
  h5: string,
  h4: string,
  h3: string,
  h2: string,
  h1: string,
};

export type Fonts = {
  heading: string,
  body: string,
};

export type Breakpoints = {
  small: string,
  medium: string,
  large: string,
  xLarge: string,
};

export interface Theme {
  colours: Colours;
  spacing: any;
  breakpoints: Breakpoints;
  fontSizes: FontSettings;
  lineHeight: FontSettings;
  fonts: Fonts;
}

export default (): Theme => ({
  colours: {
    background: '#FFFFFF',
    primary: '#5C6C78',
    secondary: '#C8DFEE',
    tertiary: '#E0E0E0',
    success: '#C8EED1',
    error: '#EEC8C8',
  },
  spacing: {
    xxSmall: '2px',
    xSmall: '4px',
    small: '8px',
    medium: '12px',
    larger: '16px',
    large: '24px',
    xLarge: '32px',
    xxLarge: '48px',
  },
  breakpoints: {
    small: '768px',
    medium: '1024px',
    large: '1440px',
    xLarge: '2560px',
  },
  fontSizes: {
    tiny: '10px',
    detail: '12px',
    ui: '16px',
    h6: '22px',
    h5: '28px',
    h4: '32px',
    h3: '32px',
    h2: '38px',
    h1: '42px',
  },
  lineHeight: {
    tiny: '0.8em',
    detail: '1em',
    ui: '1.375em',
    h6: '1.25em',
    h5: '1.25em',
    h4: '1.25em',
    h3: '1.25em',
    h2: '1.25',
    h1: '1.05em',
  },
  fonts: {
    heading: 'Merriweather',
    body: 'Open Sans',
  },
});
