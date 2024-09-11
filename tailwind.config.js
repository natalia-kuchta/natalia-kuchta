/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['selector', '.theme-dark'],
    content: ['./src/**/*.{html,js,astro}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};
