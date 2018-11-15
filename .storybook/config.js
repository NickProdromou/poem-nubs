import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Poem Nubs | UI',
});

configure(() => {
  require('../src/styles/theme.story.js');
  require('../src/components/text/text.story.js');
  require('../src/components/wrapper/wrapper.story');
  require('../src/components/list/list.story.js');
  require('../src/components/link/link.story.js');
  require('../src/components/header/header.story');
}, module);
