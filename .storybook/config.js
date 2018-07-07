import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Poem Nubs | UI',
});

configure(() => {
  require('../src/stories/intro.story.js');
  require('../src/stories/app.story.js');
}, module);
