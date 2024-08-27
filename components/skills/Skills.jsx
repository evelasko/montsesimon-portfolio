"use client";

//: educacion
// const educacion = [
//   {
//     tiempo: "2010-2012",
//     titulo: "Front-end Engineer",
//     detalle: "International Design Institute",
//   },
//   {
//     tiempo: "2010-2012",
//     titulo: "Graphic Designer",
//     detalle: "Rio Design Institute",
//   },
//   {
//     tiempo: "2010-2012",
//     titulo: "Visual Designer",
//     detalle: "Jakarta Design Institute",
//   },
// ];
//: experiencia
// const experiencia = [
//   {
//     tiempo: "2010-2012",
//     titulo: "Software Engineer",
//     detalle: "Furious Design Institute",
//   },
//   {
//     tiempo: "2010-2012",
//     titulo: "Android Developer",
//     detalle: "Ketlimte Design Ltd.",
//   },
//   {
//     tiempo: "2010-2012",
//     titulo: "Rubby Developer",
//     detalle: "Randara Institute Academy",
//   },
// ];
//: habilidades
// const habilidades = [
//   {
//     habilidad: "Teatro Físico",
//     capacidad: 100,
//   },
//   {
//     habilidad: "Teatro de Texto",
//     capacidad: 98,
//   },
//   {
//     habilidad: "Danza",
//     capacidad: 95,
//   },
//   {
//     habilidad: "Dirección Dramática",
//     capacidad: 88,
//   },
//   {
//     habilidad: "Escritura Dramática",
//     capacidad: 70,
//   },
// ];

const Skills = ({educacion = [], experiencia = [], habilidades = []}) => {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4>Formación</h4>
          </div>
          <ul className="aducation-box theme-bg">
            {(educacion ?? []).map((item, index) => (
              <li key={index}>
                <span className="dark-bg">{item.tiempo?? " "}</span>
                <h6>{item.titulo ?? " "}</h6>
                <p>{item.detalle ?? " "}</p>
              </li>
            ))}
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 my-3">
          <div className="sm-title">
            <h4>Experiencia</h4>
          </div>
          <ul className="aducation-box dark-bg">
            {(experiencia ?? []).map((item, index) => (
              <li key={index}>
                <span className="theme-bg">{item.tiempo ?? " "}</span>
                <h6>{item.titulo ?? " "}</h6>
                <p>{item.detalle ?? " "}</p>
              </li>
            ))}
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div className="col-lg-4 ml-auto my-3">
          <div className="sm-title">
            <h4>Habilidades</h4>
          </div>
          <div className="gray-bg skill-box">
            {(habilidades ?? []).map((item, index) => (
            <div key={index} className="skill-lt">
              <h6>{item.habilidad ?? " "}</h6>
              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: `${item.capacidad ?? "0"}%` }}
                >
                  <span>{`${item.capacidad ?? "0"}%`}</span>
                </div>
              </div>
            </div>))}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
