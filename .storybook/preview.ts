import {
  type Preview, setup,
} from '@storybook/vue3';
import './assets/storybook.css';
import {
  FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome';

setup((app) => {
  app.component('FaIcon', FontAwesomeIcon);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
