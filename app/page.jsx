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

export const metadata = {
  title: "Montse Simón || Dossier de Trabajos",
};

//: tituloTrabajos
const tituloTrabajos = "Dossier de Trabajos";
//: subtituloDeTrabajos
const subtituloDeTrabajos = "Además de ser actríz y bailarina, he trabajado como directora y dramaturga en diferentes proyectos. A continuación, se presentan algunos de mis trabajos más destacados.";
//: tituloContacto
const tituloContacto = "Hablemos";
//: subtituloDeContacto
const subtituloDeContacto = "Si tienes alguna pregunta o quieres saber más sobre mi trabajo, no dudes en ponerte en contacto conmigo.";
//: direccionPostal
const direccionPostal = ["Calle de la Rosa, 12, 2A", "08001 Barcelona", "España"];
//: direccionesDeEmail
const direccionesDeEmail = ["montse@simon.com", "montse@urjc.es"];
//: numerosDeTelefono
const numerosDeTelefono = ["123 456 789", "987 654 321"];

const Home = () => {
  return (
    <div className="home-dark">
      <Header />
      {/* End Header Section */}
      <Slider />
      {/* End Banner Section */}

      {/* About Me */}
      <section
        id="about"
        className="section about-section after-left-section scrollSpysection"
      >
        <div className="container">
          <About />
        </div>
      </section>
      {/* End About Me */}

      {/* Services */}
      {/* 
      <section
        id="services"
        className="section services-section gray-bg scrollSpysection"
      >
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">My Services</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          <Service />
        </div>
      </section> 
      */}
      {/* End Services */}

      {/*  Skills */}
      <section className="section skill-section">
        <div className="container">
          <Skills />
        </div>
      </section>
      {/* End Skills */}

      <section id="work" className="section gray-bg scrollSpysection">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">{tituloTrabajos ?? "Trabajos"}</h3>
              <p>
                {subtituloDeTrabajos}
              </p>
            </div>
          </div>
          {/* End .row */}
          <Portfolio />
        </div>
      </section>
      {/* End Portfolio */}

      <div className="section testimonial">
        <div className="container">
          <Testimonial />
        </div>
      </div>
      {/* End testimonial */}

      {/* Blog */}
      {/* 
      <section id="blog" className="section gray-bg scrollSpysection">
        <div className="container">
          <div className="row justify-content-center section-title text-center">
            <div className="col-lg-7">
              <h3 className="font-alt">Recent articles</h3>
              <p>
                I design and develop services for customers of all sizes,
                specializing in creating stylish, modern websites, web services
                and online stores.
              </p>
            </div>
          </div>
          <Blog />
        </div>
      </section> 
      */}
      {/*  End Blog */}

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
                  {/* <h4 className="font-alt">Contacto</h4> */}
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
                  <p>
                    {subtituloDeContacto ?? " "}
                  </p>
                </div>
                <div className="media">
                  <div className="icon">
                    <i className="ti-map"></i>
                  </div>
                  <span className="media-body">
                  {direccionPostal.map((direccion, index) => (
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
                  {direccionesDeEmail.map((email, index) => (
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
                  {numerosDeTelefono.map((telefono, index) => (
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

export default Home;

