/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // adjust if your files are elsewhere
    ],
    theme: {
      extend: {
        boxShadow: {
          'custom': '2px 2px 2px rgba(0, 0, 0, 0.5)', // your custom shadow
          'glow-purple': '0 0 15px #ab8bff',
        },
        dropShadow: {
          'custom': '2px 2px 2px rgba(0, 0, 0, 0.5)',
          'glow': '0 0 15px rgba(173, 93, 255, 0.6)',
        },
      },
    },
    plugins: [],
  };
  