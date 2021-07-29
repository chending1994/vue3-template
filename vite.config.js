import { defineConfig } from 'vite'
import { resolve } from "path" // 主要用于alias文件路径别名
import vue from '@vitejs/plugin-vue'

function pathResolve(dir) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": pathResolve("src"),
    }
  },
  optimizeDeps: {
    include: ['axios'],
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser' // 混淆器
  },
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用css分离插件
    extract: true,
    // 开启 CSS source maps，一般不建议开启
    sourceMap: false,
    // css预设器配置项
    preprocessorOptions: {
      scss: {
        // 设置css中引用文件的路径，引入通用使用的scss文件（如包含的@mixin）
        additionalData: `@import "@/assets/scss/global.scss";`
      }
    }
  },
  // 
  server: {
    cors: true,
    open: true,
    proxy: {
      '/api': {
          target: 'http://admin.test.luojigou.vip:8899',   //代理接口
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
