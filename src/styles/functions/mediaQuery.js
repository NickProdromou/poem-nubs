import { generateMedia } from 'styled-media-query';
import theme from '../theme';

const mediaQuery = generateMedia(theme().breakpoints);

export default mediaQuery;
