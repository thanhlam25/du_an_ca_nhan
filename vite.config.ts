import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['swiper'],  // Đảm bảo rằng Swiper được tối ưu hóa
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Chuyển tiếp yêu cầu /api tới backend
    },
  },
})
