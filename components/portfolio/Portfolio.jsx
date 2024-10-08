"use client";

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import { useEffect, useState } from "react";

//: categorias
// const tabList = ["Otros", "Dirección", "Videoclip", "Documental", "Teatro", "Microteatro"];

//: trabajos
// const portfolioContent = [
//   {
//     categories: ["Branding", "Fashion"],
//     img: "/img/portfolio/1.jpg",
//     title: "Motion Graphy",
//     subTitle: "Android App",
//     alterText: "Motion Graphy",
//     portfolioLink:
//       "https://play.google.com/store/apps/details?id=com.alightcreative.motion&hl=en&gl=US",
//   },
//   {
//     categories: ["Photography", "Product"],
//     img: "/img/portfolio/3.jpg",
//     title: "E-Learning App",
//     subTitle: "Nuna ios App",
//     alterText: "Elearning App",
//     portfolioLink:
//       "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
//   },
//   {
//     categories: ["Branding", "Fashion"],
//     img: "/img/portfolio/2.jpg",
//     title: "Visual Design",
//     subTitle: "Themeforest Marke",
//     alterText: "Business Mockup",
//     portfolioLink:
//       "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
//   },
//   {
//     categories: ["Photography", "Product"],
//     img: "/img/portfolio/4.jpg",
//     title: "Business Card",
//     subTitle: "Graphicriver Market",
//     alterText: "E-Cosmetics",
//     portfolioLink:
//       "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
//   },
//   {
//     categories: ["Branding", "Fashion"],
//     img: "/img/portfolio/7.jpg",
//     title: "Code Editing",
//     subTitle: "Codecanyon Market",
//     alterText: "Bottle Illustration",
//     portfolioLink:
//       "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
//   },
//   {
//     categories: ["Photography", "Product"],
//     img: "/img/portfolio/6.jpg",
//     title: "Web Application",
//     subTitle: "Behance Shot",
//     alterText: "Web Application",
//     portfolioLink:
//       "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
//   },
// ];

export default function Portfolio ({tabList, portfolioContent}) {
  const [currentTab, setCurrentTab] = useState(tabList[0]);
  const [filteredItems, setFilteredItems] = useState(portfolioContent);
  useEffect(() => {
    if (currentTab == "Todo") {
      setFilteredItems(portfolioContent);
    } else {
      const filtered = [
        ...portfolioContent.filter((elm) =>
          elm.categories.includes(currentTab)
        ),
      ];
      setFilteredItems(filtered);
    }
  }, [currentTab]);
  return (
    <div className="positon-relative">
      <div className="portfolio-filter-01">
        <div
          className="filter d-flex flex-wrap justify-content-center mr-3 "
          style={{
            columnGap: "12px",
            cursor: "pointer",
            width: "fit-content",
            margin: "0px auto",
            marginBottom: "20px",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          {tabList.map((val, i) => (
            <div
              key={i}
              onClick={() => setCurrentTab(val)}
              className={` portfolio-tab react-tabs__tab ${
                currentTab == val ? "active" : ""
              } fs-6" key={i}`}
            >
              {val}
            </div>
          ))}
        </div>
        {/* End tablist */}

        <Gallery>
          <div className="portfolio-content row lightbox-gallery">
            {filteredItems.map((val, i) => (
              <div className="col-sm-6 col-lg-4 grid-item product" key={i}>
                <div className="portfolio-box-01">
                  <div className="portfolio-img">
                    <div className="portfolio-info">
                      <h5>
                        <a
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {val.title}
                        </a>
                      </h5>
                      <span>{val.subTitle}</span>
                    </div>
                    {/* End .portfolio-info */}
                    <Item
                      original={val.img}
                      thumbnail={val.img}
                      width={336}
                      height={458}
                    >
                      {({ ref, open }) => (
                        <Image
                          width={440}
                          height={600}
                          style={{ height: "fit-content" }}
                          src={val.img}
                          alt="Shoot"
                          role="button"
                          ref={ref}
                          onClick={open}
                        />
                      )}
                    </Item>

                    <a
                      href={val.portfolioLink}
                      className="portfolio-icon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ti-link"></span>
                    </a>
                    {/* End .portfolio-link */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* End list wrapper */}
        </Gallery>
        {/* End tabpanel */}
      </div>
    </div>
  );
};
