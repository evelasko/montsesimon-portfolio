"use client";
import Image from "next/image";
import Slider from "react-slick";

  //: testimonios
  // const testimonios = [
  //   {
  //     imageUrl: "https://splash.com/team-1.jpg",
  //     desc: `  I design and develop services for customers of all sizes,
  //     specializing in creating stylish, modern websites, web services
  //     and online stores.`,
  //     reviewerName: "Nancy Byers",
  //     rating: "5.0",
  //   },
  //   {
  //     imageUrl: "https://splash.com/team-2.jpg",
  //     desc: `  I design and develop services for customers of all sizes,
  //     specializing in creating stylish, modern websites, web services
  //     and online stores.`,
  //     reviewerName: "Jara Afsari",
  //     rating: "4.8",
  //   },
  //   {
  //     imageUrl: "https://splash.com/team-4.jpg",
  //     desc: `  I design and develop services for customers of all sizes,
  //     specializing in creating stylish, modern websites, web services
  //     and online stores.`,
  //     reviewerName: "Janiaya kiaram",
  //     rating: "5.0",
  //   },
  // ];

export default function SimpleSlider({testimonios}) {
  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 900,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    margin: 30,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {testimonios.map((val, i) => (
          <div className="testmonial-box media" key={i}>
            <div className="avatar">
              <Image
                width={638}
                height={690}
                style={{ height: "fit-content" }}
                src={val.imageUrl}
                alt="review comments"
              />
            </div>
            {/* End avatar */}
            <div className="testmonial-text media-body">
              <p>{val.desc}</p>
              <div className="testmonial-info">
                <h6>{val.reviewerName}</h6>
                <div className="rating-value">
                  <i className="ti-star"></i>
                  <span>{val.rating}</span>
                </div>
              </div>
            </div>
            {/* End testimonial-text */}
          </div>
        ))}
      </Slider>
    </>
  );
}
