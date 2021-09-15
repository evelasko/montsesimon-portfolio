import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
// import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import { useStaticQuery, graphql } from "gatsby"
import LazyShow from "../components/LazyShow/LazyShow"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax } from "react-scroll-parallax"

const getPortada = graphql`
    query {
        portada: allContentfulPortada {
            edges {
                node {
                    tituloPrincipal
                    subtituloPrincipal { internal { content } }
                }
            }
        }
    }
`

const Index = () => {
    const response = useStaticQuery(getPortada)
    const portada = response.portada.edges[0].node
    return (
        <>
            <Seo title="Home" description=""/>
            <Layout>
                <BannerModule
                    title={ portada.tituloPrincipal }
                    subTitle={ portada.subtituloPrincipal.internal.content }
                />
                <LazyShow>
                    <BasicTextModule />
                </LazyShow>
                {/* <Parallax y={[-20, 30]} > <StaticImage src="../images/macbook-dark.jpg" alt="MB Dark" /> </Parallax> */}
                <PerksModule />
                    {/* <Perk title="The Title" content="The content" /> */}
                {/* </PerksModule> */}
                <Features />
            </Layout>
        </>
    )
}

export default Index
