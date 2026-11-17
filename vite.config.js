import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  input: [
    fileURLToPath(new URL('./index.html', import.meta.url)),
    fileURLToPath(new URL('./student-profile-cards/index.html', import.meta.url)),
    fileURLToPath(new URL('./student-attendance/index.html', import.meta.url)),
  ],
});
