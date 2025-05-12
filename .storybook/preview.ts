import {
  type Preview, setup,
} from '@storybook/vue3';
import './assets/storybook.css';
import {
  FontAwesomeIcon,
} from '@fortawesome/vue-fontawesome';
import {createI18n} from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "de"
});

setup((app) => {
  app.component('FaIcon', FontAwesomeIcon);
  app.use(i18n);
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
