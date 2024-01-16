/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#1E1E1E',
      secondary: '#5A95B6',
      background: '#EFD67F',
      todos: '#a6a8ff',
      inprogress: '#FFCC00',
      completed: '#00FF00',
      delete: '#FF0000',
      gray: '#808080',
      white: '#FFFFFFF',
    },
    fontFamily: {
      'body': ['Indie Flower', 'Inter']
    },
    extend: {},
  },
  plugins: [],
};
