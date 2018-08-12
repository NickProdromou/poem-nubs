import { injectGlobal } from 'styled-components';
import theme from './theme';

const { fontSizes, lineHeight, fonts } = theme();

export default () => injectGlobal`
* {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 16px;
}

#app-target {
  flex: 1;
}

h1,
h2,
h3 {
  font-family: ${fonts.heading};
}

h1 {
  font-size: ${fontSizes.h1};
  line-height: ${lineHeight.h1};
}

h2 {
  font-size: ${fontSizes.h2};
  line-height: ${lineHeight.h2};
}

h3 {
  font-size: ${fontSizes.h3};
  line-height: ${lineHeight.h3};
}

p, span {
  font-size: ${fontSizes.ui};
  line-height: ${lineHeight.ui};
  font-family: ${fonts.body};
}

`;
