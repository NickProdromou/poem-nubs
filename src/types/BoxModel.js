// @flow

import type { ThemeSpacing } from './Theme';

export type BoxModel =
  | [ThemeSpacing | 0]
  | [ThemeSpacing | 0, ThemeSpacing | 0]
  | [ThemeSpacing | 0, ThemeSpacing | 0, ThemeSpacing | 0]
  | [ThemeSpacing | 0, ThemeSpacing | 0, ThemeSpacing | 0, ThemeSpacing | 0];
