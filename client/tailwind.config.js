/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js.ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors : {
                twicemagenta : '#EA00FF',
                newjeansblue : '#3065AC'
            },
        },
    },
    screen:{
        'Mobile' : '480px',
        'tablet' : '1024px',
        'laptop' : '1280px',
        'desktop' : '1440px'
    },
  plugins: [],
}

