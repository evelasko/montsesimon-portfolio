if (process.env.NODE_ENV == "development") require("dotenv").config()
module.exports = {
    siteMetadata: {
        title: "Montse Simon",
        description: "Portafolio de interpretación teatral, dirección escénica e investigación dramática",
        author: "Misfitcoders",
        twitterUsername: "@hnpotter",
        image: "/yellow-metal-design-decoration.jpg",
        siteUrl: "https://montsesimon.com",
    },
    /* Your site config here */
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `logos`,
                path: `${__dirname}/src/images/logos`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://montsesimon.com",
                sitemap: "https://montsesimon.com/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        `gatsby-plugin-playground`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-image`,
        `gatsby-plugin-transition-link`,
    ],
}
