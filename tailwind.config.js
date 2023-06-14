const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            height: {
                '225': '225px',
                '250': '250px',
                '300': '300px',
                '500': '500px',
                '650': '650px',
                '750': '750px',
                '1000': '1000px',
            },
            width: {
                '225': '225px',
                '250': '250px',
                '300': '300px',
            }
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
