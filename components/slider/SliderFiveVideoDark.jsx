"use client";
import TextTransition, { presets } from "react-text-transition";

//: listaAnimadaFrontal
// const listaAnimadaFrontal = ["Actríz", "Bailarina", "Directora", "Dramaturga", "Investigadora"];
//: tituloPrincipal
// const tituloPrincipal = "Montse Simón";
//: videoPortada
// const videoPortada = "https://www.ibthemespro.com/resource/krozo/resources/video-2.mp4";
//: imagenPortada
// const imagenPortada = "/img/banner/bg-2.jpg";

import { useEffect, useState } from "react";
import Social from "../Social";

const Slider = ({listaAnimadaFrontal, tituloPrincipal, videoPortada, imagenPortada}) => {
  console.log("Rendering Slider Component");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <section
        id="home"
        className="home-banner overlay overlay-75 inner-content-static video-banner video-banner-dark scrollSpysection"
        style={{
          backgroundImage: `url(${imagenPortada})`,
        }}
      >
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-lg-12">
              <div className="hb-typo text-center">
                <h1 className="font-alt">{tituloPrincipal ?? "Montse Simón"}</h1>
                <h2 className="mb-4">
                  <span className="loop-text">
                    <TextTransition springConfig={presets.wobbly}>
                      {(listaAnimadaFrontal ?? [])[index % listaAnimadaFrontal.length]}
                    </TextTransition>
                  </span>
                </h2>
                <Social />
                {/* End social slide  */}
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="video-background">
          <video
            src={videoPortada}
            autoPlay
            loop
            muted
            poster={imagenPortada}
          />
        </div>

        <div className="go-to go-to-next">
          <a href="#about">
            <span></span>
          </a>
        </div>
        {/* End bottom scroll */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
