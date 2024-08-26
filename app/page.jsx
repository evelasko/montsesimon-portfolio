import { Fragment } from "react";
import Header from "@/components/header/Header";
import Slider from "@/components/slider/SliderFiveVideoDark";
import About from "@/components/about/AboutSix";
import Service from "@/components/service/Service";
import Skills from "@/components/skills/Skills";
import Portfolio from "@/components/portfolio/Portfolio";
import Testimonial from "@/components/testimonial/Testimonial";
import Blog from "@/components/blog/Blog";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import { getPortadaData } from "@/lib/api";

export const metadata = {
  title: "Montse Simón || Dossier de Trabajos",
};

//: tituloTrabajos
// const tituloTrabajos = "Dossier de Trabajos";
//: subtituloDeTrabajos
// const subtituloDeTrabajos = "Además de ser actríz y bailarina, he trabajado como directora y dramaturga en diferentes proyectos. A continuación, se presentan algunos de mis trabajos más destacados.";
//: tituloContacto
// const tituloContacto = "Hablemos";
//: subtituloDeContacto
// const subtituloDeContacto = "Si tienes alguna pregunta o quieres saber más sobre mi trabajo, no dudes en ponerte en contacto conmigo.";
//: direccionPostal
// const direccionPostal = ["Calle de la Rosa, 12, 2A", "08001 Barcelona", "España"];
//: direccionesDeEmail
// const direccionesDeEmail = ["montse@simon.com", "montse@urjc.es"];
//: numerosDeTelefono
// const numerosDeTelefono = ["123 456 789", "987 654 321"];

export default async function Home() {
  const portadaData = await getPortadaData();

  const { 
    categoriasCollection,
    productsCollection,
    testimoniosCollection,
    portada,
    carrera,
  } = portadaData;

  const {
    listaAnimadaFrontal,
    tituloPrincipal,
    tituloBio,
    tituloTrabajos,
    tituloContacto,
    videoPortada,
    imagenPortada,
    imagenBio,
    cv,
    bio,
    subtituloBio,
    subtituloDeContacto,
    subtituloDeTrabajos,
    detallesBioCollection,
    direccionPostal,
    direccionesDeEmail,
    numerosDeTelefono,
  } = portada;

  const {
    educacionCollection,
    experienciaCollection,
    habilidadesCollection,
  } = carrera;

  const detallesBio = detallesBioCollection
    .items
    .map(({etiqueta, dato}) => Object.assign({}, {label: etiqueta, value: dato}));

  const categoryNames = ["Todo"].concat(categoriasCollection.items.map((item) => item.nombre));
  console.log(categoryNames);
  const trabajos = productsCollection.items.map((item) => Object.assign(
    {},
    {
      categories: item.categoriasCollection.items.map((categoria) => categoria.nombre),
      title: item.titulo,
      subTitle: item.subtitulo,
      img: item.imagenPrincipal.url,
      alterText: item.titulo,
      portfolioLink: "/" // TODO: Add link to portfolio item
    }));

  const testimonios = testimoniosCollection.items.map((item) => Object.assign(
    {}, 
    {
      imageUrl: item.imagen.url,
      desc: item.contenido,
      reviewerName: item.nombre,
      rating: item.evaluacion,
    }))

    return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider
        listaAnimadaFrontal={(listaAnimadaFrontal ?? []).map((value) => value.toLowerCase())}
        tituloPrincipal="Montse Simón"
        videoPortada={videoPortada.url}
        imagenPortada={imagenPortada.url} 
      />
      {/* End Banner Section */}

      {/* About Me */}
      <section
        id="about"
        className="section about-section after-left-section scrollSpysection"
      >
        <div className="container">
          <About
            imagenBio={imagenBio.url}
            tituloBio={tituloBio}
            subtituloBio={subtituloBio?.json?.content[0]?.content ?? []}
            bio={bio.json}
            detallesBio={detallesBio}
            cv={cv.url}
          />
        </div>
      </section>
      {/* End About Me */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills 
            educacion={educacionCollection.items ?? []} 
            experiencia={experienciaCollection.items ?? []} 
            habilidades={habilidadesCollection.items ?? []} 
          />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg scrollSpysection">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">{tituloTrabajos ?? "Trabajos"}</h3>
              {subtituloDeTrabajos && <p>{subtituloDeTrabajos}</p>}
            </div>
          </div>
          {/* End .row */}
          {((categoriasCollection?.items?.length ?? 0) > 0 && (productsCollection?.items.length ?? 0) > 0) && <Portfolio
            tabList={categoryNames}
            portfolioContent={trabajos}
          />}
        </div>
      </section>
      {/* End Portfolio */}

      <div className="section testimonial">
        <div className="container">
          {(testimoniosCollection?.items?.length ?? 0) > 0 && <Testimonial
            testimonios={testimonios}
          />}
        </div>
      </div>
      {/* End testimonial */}

      {/* Contact */}
      <section
        id="contact"
        className="section after-left-section scrollSpysection"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 my-3">
              <div className="contct-form">
                <div className="sm-title">
                  <h4 className="font-alt">Contacto</h4>
                </div>
                {/* End .sm-title */}
                <Contact />
              </div>
            </div>
            {/* End .col */}

            <div className="col-lg-4 ml-auto my-3">
              <div className="contact-info">
                <div className="sm-title">
                  <h4 className="font-alt">{tituloContacto ?? "Hablemos"}</h4>
                  {subtituloDeContacto && <p>{subtituloDeContacto}</p>}
                </div>
                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                  {direccionPostal && direccionPostal.map((direccion, index) => direccion && (
                    <Fragment key={index}>
                      {direccion}
                      {index !== direccionPostal.length - 1 && <br />}
                    </Fragment>
                  ))}
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-email"></i>
                  </div>
                  <span className="media-body">
                  {direccionesDeEmail && direccionesDeEmail.map((email, index) => email && (
                    <Fragment key={index}>
                      {email}
                      {index !== direccionesDeEmail.length - 1 && <br />}
                    </Fragment>
                  ))}
                  </span>
                </div>
                {/* End media */}

                <div className="media">
                  <div className="icon">
                    <i className="ti-mobile"></i>
                  </div>
                  <span className="media-body">
                  {numerosDeTelefono && numerosDeTelefono.map((telefono, index) => telefono && (
                    <Fragment key={index}>
                      {telefono}
                      {index !== numerosDeTelefono.length - 1 && <br />}
                    </Fragment>
                  ))}
                  </span>
                </div>
                {/* End media */}
              </div>
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
      {/* End Contact */}

      {/* Footer */}
      <footer className="footer white">
        <div className="container">
          <Footer />
        </div>
      </footer>
      {/*  End Footer */}
    </div>
  );
};
