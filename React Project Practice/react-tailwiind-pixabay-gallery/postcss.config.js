const tailwindcss = require('tailwindcss');

module.exports = {
    plugin:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}