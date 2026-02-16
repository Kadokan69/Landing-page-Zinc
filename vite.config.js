import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({

  base: '', 

  build: {
    outDir: 'dist',
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',


        assetFileNames: ({ name }) => {

          if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name ?? '')) {
            return 'assets/img/[name]-[hash][extname]';
          }

  
          if (/\.(woff2?|ttf|otf|eot)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }

   
          if (/\.css$/.test(name ?? '')) {
            return 'assets/css/[name]-[hash][extname]';
          }

      
          return 'assets/[name]-[hash][extname]';
        },
      },
    },

    minify: true,
  }
});
