import React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link, useStaticQuery, graphql } from "gatsby"

const getPortadaPresentacion = graphql`
query {
    portada: allContentfulPortada {
        edges {
            node {
                tituloPresentacion
                tituloPrincipal
                subtituloPresentacion { internal { content } }
                subtituloPrincipal { internal { content } }
            }
        }
    }
}
`

const BasicTextModule = () => {
    const response = useStaticQuery(getPortadaPresentacion)
    const portada = response.portada.edges[0].node

    return (
        <BasicTextModuleStyles>
            <div className="container">
                <h2>
                    { portada.tituloPresentacion }
                </h2>
                <p style={{ marginBottom: "60px" }}>
                    { portada.subtituloPresentacion.internal.content }
                </p>
                <Button text="Actríz" as={Link} to="/actriz" />
                <Button text="Proyectos" as={Link} to="/proyectos" />
                <Button text="Creaciones" as={Link} to="/creacion" />
                <Button text="Más sobre mí" as={Link} to="/bio" />
            </div>
        </BasicTextModuleStyles>
    )
}

export default BasicTextModule
