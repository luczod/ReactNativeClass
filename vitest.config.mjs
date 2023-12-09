// vitest.config.mjs
import reactNative from 'vitest-react-native';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    root: './',
  },
  plugins: [reactNative(), react()],
});
