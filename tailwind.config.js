/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        letterSpacing: {
            bigText: '-0.5px', //68.8px
            mediumText: '-1.55px', //38.81px
            regularText: '-0.25px', //16px
        },
        extend: {
            height: {
                'half-screen': '50vh'
            },
            colors: {
                whiteOppacity: "rgba(255, 255, 255, 0.80)",
                whiteOppacity32: "rgba(255, 255, 255, 0.24)",
                background: '#0F0F0F',
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"],
                ptMono: ['PT Mono', 'monospace'],
                jetBrains: ['JetBrains', 'monospace'],
            },
        },
        screens: {
            xs: "480px",
            ss: "620px",
            sm: "768px",
            md: "1060px",
            lg: "1200px",
            xl: "1700px",
        },
    },
    plugins: [],
};