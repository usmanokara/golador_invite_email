// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./*.html"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // all HTML files in the root
    "./public/*.html"    // or wherever your HTML is
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
