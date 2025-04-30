import { defineConfig } from 'vite';

export default defineConfig({
  base: './',  // ✅ Required for S3/CloudFront so relative paths work
  build: {
    outDir: 'build'
  }
});
