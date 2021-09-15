import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ProductsStyles } from "../Products/ProductsStyles"
import Product from "../Products/Product"

const getTrabajos = graphql`
    query {
        trabajos: allContentfulTrabajos(
            filter: { featured: { eq: true } }
        ) {
            edges {
                node {
                    category
                    name
                    price
                    excerpt
                    contentful_id
                    slug
                    images {
                        gatsbyImageData(width: 600, formats: [AUTO, WEBP])
                    }
                }
            }
        }
    }
`

const Features = () => {
    const response = useStaticQuery(getTrabajos)
    const directorFeatures = response.trabajos.edges.filter(({node}) => node.category == "Creacion")
    const actorFeatures = response.trabajos.edges.filter(({node}) => node.category == "Actriz")
    const proyectoFeatures = response.trabajos.edges.filter(({node}) => node.category == "Proyecto")

    return (
        <ProductsStyles>
            <div className="features__container">
                <h2>Interpretaciones Recientes</h2>
                <div className="features__container--scroll">
                    {actorFeatures.map(({ node }) => {
                        return <Product feature={node} category="Actriz"/>
                    })}
                </div>
            </div>
            <div className="features__container">
                <h2>Últimos Proyectos</h2>
                <div className="features__container--scroll">
                    {actorFeatures.map(({ node }) => {
                        return <Product feature={node} category="Proyecto"/>
                    })}
                </div>
            </div>
            <div className="features__container">
                <h2>Creaciones</h2>
                <div className="features__container--scroll">
                    {directorFeatures.map(({ node }) => {
                        return <Product feature={node} category="Creacion"/>
                    })}
                </div>
            </div>
        </ProductsStyles>
    )
}

export default Features
