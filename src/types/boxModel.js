// @flow
import type { ThemeSpacing } from './theme';

export type BoxModel =
  | [ThemeSpacing | 0]
  | [ThemeSpacing | 0, ThemeSpacing | 0]
  | [ThemeSpacing | 0, ThemeSpacing | 0, ThemeSpacing | 0]
  | [ThemeSpacing | 0, ThemeSpacing | 0, ThemeSpacing | 0, ThemeSpacing | 0];
