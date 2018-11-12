import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Poem Nubs | UI',
});

configure(() => {
  require('../src/stories/theme.story.js');
  require('../src/stories/Text.story.js');
  require('../src/stories/Wrapper.story.js');
  require('../src/stories/List.story.js');
  require('../src/stories/Link.story.js');
  require('../src/stories/Header.story.js');
}, module);
