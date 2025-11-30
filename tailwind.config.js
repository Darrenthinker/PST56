/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // 暂时禁用 preflight 以避免破坏现有首页样式
  // 如果发现 PayDuty 页面样式崩了，可能需要手动添加一些重置样式
  // 或者我们后续再开启并修复首页
  corePlugins: {
    preflight: false,
  }
}

