import {createI18n} from "vue-i18n";
import type {App} from "vue";

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
});

export default (app: App) => {
  app.use(i18n)
}
