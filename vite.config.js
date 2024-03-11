export default {
  root: "src",
  server: {
    port: 5173,
  },
  build: {
    outDir: "../dist",
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name]-[hash].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
};

