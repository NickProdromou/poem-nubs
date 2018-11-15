import { generateMedia } from 'styled-media-query';
import theme from '../theme';

const mediaQuery = generateMedia(theme().mediaQueryBreakpoints);

export default mediaQuery;
