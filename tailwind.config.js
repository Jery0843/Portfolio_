/** @type {import('tailwindcss').Config} */
export default {
content: [
    './src/**/*.{html,js,svelte,ts}',
],
darkMode: 'class',
theme: {
    extend: {
    colors: {
        'hacker-green': '#00FF41',
        'hacker-bg': '#0D1117',
        'hacker-text': '#C9D1D9',
        'hacker-accent': '#2F81F7',
        'terminal-black': '#161B22',
    },
    fontFamily: {
        'mono': ['Fira Code', 'monospace'],
    },
    animation: {
        'cursor-blink': 'blink 1s step-end infinite',
    },
    keyframes: {
        blink: {
        '0%, 100%': { opacity: '0' },
        '50%': { opacity: '1' },
        }
    }
    },
},
plugins: [
    require('@tailwindcss/typography'),
],
}
