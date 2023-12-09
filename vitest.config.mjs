// vitest.config.mjs
import reactNative from 'vitest-react-native';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    root: './',
  },
  plugins: [reactNative()],
});
