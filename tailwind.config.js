/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            // Add custom CSS classes or utility classes here
            backgroundImage: {
                'btn-gradient':
                    'linear-gradient(92.7deg, #0064FB 6.15%, #1ECDF8 97.44%)',
            },
        },
    },
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('tailwindcss-animated'),
        require('flowbite/plugin'),
    ],
}
