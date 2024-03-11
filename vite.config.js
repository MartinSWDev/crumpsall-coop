export default {
  root: "./",
  server: {
    port: 5173,
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
};

