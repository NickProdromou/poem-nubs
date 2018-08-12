// @flow

export type ThemeColours =
  | 'background'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'success'
  | 'error';

export type Colours = {
  [ThemeColours]: string,
};

export type ThemeSpacing =
  | 'xxSmall'
  | 'xSmall'
  | 'small'
  | 'medium'
  | 'larger'
  | 'large'
  | 'xLarge'
  | 'xxLarge';

export type Spacing = {
  [ThemeSpacing]: string,
};

export type ThemeFontSettings =
  | 'tiny'
  | 'detail'
  | 'ui'
  | 'h3'
  | 'h2'
  | 'h1'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';

export type FontSettings = {
  [ThemeFontSettings]: string,
};

export type ThemeFonts = 'heading' | 'body';

export type Fonts = {
  [ThemeFonts]: string,
};

export type ThemeBreakpoints = 'small' | 'medium' | 'large' | 'xLarge';

export type Breakpoints = {
  [ThemeBreakpoints]: string,
};

export interface Theme {
  colours: Colours;
  spacing: any;
  breakpoints: Breakpoints;
  fontSizes: FontSettings;
  lineHeight: FontSettings;
  fonts: Fonts;
}
