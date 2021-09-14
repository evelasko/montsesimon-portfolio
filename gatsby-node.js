const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const { data } = await graphql(`
        query {
            trabajos: allContentfulTrabajos {
                edges {
                    node {
                        slug
                        category
                    }
                }
            }
        }
    `)

    data.trabajos.edges.filter(({ node }) => node.category == "Actriz").forEach(({ node }) => {
        createPage({
            path: `actriz/${node.slug}`,
            component: path.resolve("src/templates/actor-template.tsx"),
            context: { slug: node.slug },
        })
    })

    data.trabajos.edges.filter(({ node }) => node.category == "Proyecto").forEach(({ node }) => {
        createPage({
            path: `proyectos/${node.slug}`,
            component: path.resolve("src/templates/proyecto-template.tsx"),
            context: { slug: node.slug },
        })
    })

    data.trabajos.edges.filter(({ node }) => node.category == "Creacion").forEach(({ node }) => {
        createPage({
            path: `creacion/${node.slug}`,
            component: path.resolve("src/templates/director-template.tsx"),
            context: { slug: node.slug },
        })
    })

    // data.posts.edges.forEach(({ node }) => {
    //     createPage({
    //         path: `blogs/${node.slug}`,
    //         component: path.resolve("src/templates/blog-template.tsx"),
    //         context: { slug: node.slug },
    //     })
    // })
    // //Amount of posts
    // const posts = data.posts.edges
    // // Posts per page
    // const postsPerPage = 6
    // // How many pages
    // const numPages = Math.ceil(posts.length / postsPerPage)

    // Array.from({ length: numPages }).forEach((_, i) => {
    //     createPage({
    //         path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
    //         component: path.resolve("./src/templates/blog-list-template.tsx"),
    //         context: {
    //             limit: postsPerPage,
    //             skip: i * postsPerPage,
    //             numPages,
    //             currentPage: i + 1,
    //         },
    //     })
    // })
}
