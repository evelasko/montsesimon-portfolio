import { Fragment } from "react";
import Image from "next/image";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

//: imagenBio
// const imagenBio = "/img/about/about-6.jpg";

//: tituloBio
// const tituloBio = "Montse Simón Navarro";

//: subtituloBio
// const subtituloBio = <>A Lead <span className="color-theme">UX &amp; UI</span> designer
              // based in <span className="color-theme">Canada</span></>;

//: bio
// const bio = `Soy una persona creativa, apasionada por el diseño y la ilustración. Me encanta crear cosas bonitas y funcionales. Me considero una persona proactiva, con capacidad de trabajo en equipo y con muchas ganas de aprender y mejorar.`;

//: detallesBio
// const detallesBio = [
//   {label: "Residencia", value: "España"},
//   {label: "Teléfono", value: "123 456 789"},
//   {label: "Dirección Postal", value: "Calle de la Rosa, 12, 2A"},
//   {label: "Código Postal", value: "08001"},
//   {label: "Ciudad", value: "Barcelona"},
//   {label: "País", value: "España"},
//   {label: "Email", value: "montse@montsesimon.com"},
//   {label: "Freelance", value: "Disponible"},
// ]

//: cv
// const cv = "/img/resume.png";

const About = ({imagenBio, tituloBio, subtituloBio, bio, detallesBio, cv}) => {
  const halfIndex = Math.ceil(detallesBio.length / 2);
  const detallesBioCol1 = detallesBio.slice(0, halfIndex);
  const detallesBioCol2 = detallesBio.slice(halfIndex);
  console.log("Rendering About Component")

  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 my-3">
          <div className="img-box dark-img-box">
            <Image
              width={900}
              style={{ height: "fit-content" }}
              height={1099}
              src={imagenBio ?? "/img/about/about-6.jpg"}
              alt="smiling a girl"
            />
          </div>
        </div>

        <div className="col-lg-6 my-3">
          <div className="typo-box about-me">
            <h3 className="font-alt">
              {typeof tituloBio === "string" ? tituloBio : "Montse Simón Navarro"}
            </h3>
            <h5>
              {(subtituloBio ?? []).map(({value, marks}, index) => {
                if (marks?.[0]?.type === "bold") {
                  return (<span key={index} className="color-theme">{value}</span>);
                }
                return (<Fragment key={index}>{value}</Fragment>);
              })}
            </h5>
            <div>
              {documentToReactComponents(bio)}
            </div>
            <div className="row about-list">
              <div className="col-md-6">
                {(detallesBioCol1 ?? []).map((item, index) => (
                  <div className="media" key={index}>
                    <label>{item.label ?? ""}</label>
                    <p>{item.value ?? ""}</p>
                  </div>
                ))}
              </div>
              {/* End .col */}

              <div className="col-md-6">
              {(detallesBioCol2 ?? []).map((item, index) => (
                  <div className="media" key={index}>
                    <label>{item.label ?? ""}</label>
                    <p>{item.value ?? ""}</p>
                  </div>
                ))}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a
                className="px-btn px-btn-theme"
                href={cv}
                download
              >
                Descargar CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
