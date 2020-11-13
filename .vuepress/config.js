module.exports = {
    title: "Melopoiia Wiki",
    locales: {
        '/': {
            lang: 'de-DE',
            title: 'Melopoiia Wiki',
            description: 'Alle Informationen rund um Melopoiia'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://melopoiia-wiki.netlify.com' }],
        ['meta', { name: 'theme-color', content: '#f9d79a' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#1D1D1D' }]
    ],
    serviceWorker: true,
    themeConfig: {
        docsDir: 'docs',

        nav: [{
                text: 'Spielinformationen',
                link: '/docs/gameplay-configuration.html',
            },
            {
                text: 'Hilfeartikel',
                link: '/docs/help-configuration.html',
            },
            {
                text: 'Downloads',
                link: '/docs/downloads-configuration.html',
            },
            {
                text: 'Zum Spiel',
                link: 'https://melopoiia.netlify.app'
            }
        ]

    }
}