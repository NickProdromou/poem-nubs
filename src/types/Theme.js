// @flow
export type ThemeColours = 'primary' | 'neutral' | 'success' | 'error';

export type ColourScaleValues =
  | 'lightest'
  | 'lighter'
  | 'light'
  | 'dark'
  | 'darker'
  | 'darkest';

export type ColourScale = {
  [ColourScaleValues]: string,
};

export type Colours = {
  [ThemeColours]: ColourScale,
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

export type FontWeights = 400 | 500 | 700 | 900 | 'bold' | 'normal' | 'light';

export type FontWeightSettings = {
  [FontWeights]: string,
};

export type ThemeFonts = 'heading' | 'body';

export type Fonts = {
  [ThemeFonts]: string,
};

export type ThemeBreakpoints = 'small' | 'medium' | 'large' | 'xLarge';

export type MediaQueryBreakpoints = {
  [ThemeBreakpoints]: string,
};

export type GridBreakpoints = string[];

export interface Theme {
  colours: Colours;
  spacing: Spacing;
  gridBreakpoints: GridBreakpoints;
  mediaQueryBreakpoints: MediaQueryBreakpoints;
  fontSizes: FontSettings;
  lineHeight: FontSettings;
  fonts: Fonts;
}
