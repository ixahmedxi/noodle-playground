/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@noodle/tailwind')],
  content: [
    './src/**/*.{js,jsx,ts,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  darkMode: 'class',
};
