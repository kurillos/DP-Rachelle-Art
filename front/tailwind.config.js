/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'art-turquoise': '#00ced1',
                'art-purple': '#d400ff',
            },
            fontFamily: {
                'serif': ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}