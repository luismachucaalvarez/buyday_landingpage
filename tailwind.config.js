module.exports = {
    purge: [],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        container: {
            center: true
        },
        colors: {
            black: '#000',
            white: '#fff',
            violet: '#a614fd',
            lightblue: '#14b6fd'
        },
        linearGradientColors: {
            'lightblue-violet-with-stops': ['#14b6fd', '#a614fd', '#14b6fd', '#635efd', '#14b6fd 6.26%', '#a614fd 100%']
        },
        backgroundSize: {
            'auto': 'auto',
            'cover': 'cover',
            'contain': 'contain',
            '50%': '50%',
            '16': '4rem'
        },
        backgroundPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        backgroundImage: theme => ({
            'hero-pattern': "url('/build/img/img_hero.jpg')",
        }),
        extend: {
            opacity: {
                '10': '0.1',
                '20': '0.2',
                '95': '0.95',
            }
        }

    },
    variants: {},
    plugins: [
        require('tailwindcss-gradients'),
        function({ addUtilities }) {
            const extendUnderline = {
                '.underline': {


                    'border-bottom': '1px solid #000',
                    'padding-bottom': '3px'
                },
            }

            addUtilities(extendUnderline)
        }
    ],
}