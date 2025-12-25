import scrollbarHide from 'tailwind-scrollbar-hide';

export default {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        scrollbarHide,
    ],
}; 