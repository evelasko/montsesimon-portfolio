import { getSocialData } from "@/lib/api";
import { get } from "react-hook-form";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const SocialShare = [
  //: facebook
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  //: instagram
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  //: linkedin
  { Social: <FaLinkedinIn />, link: "https://twitter.com/" },
  //: youtube
  { Social: <FaYoutube />, link: "https://www.youtube.com/" },
];

const socialContenfulToElements = {
  facebook: <FaFacebookF />,
  instagram: <FaInstagram />,
  linkedin: <FaLinkedinIn />,
  youtube: <FaYoutube />,
};

export default async function Footer() {
  const socialData = await getSocialData();
  const SocialShare = Object.entries(socialData).map(([key, value]) => ({
    Social: socialContenfulToElements[key],
    link: value,
  }));

  return (
    <>
      <div className="row align-items-center">
        <div className="col-md-6 my-2">
          <div className="nav justify-content-center text-center text-md-left justify-content-md-start">
            {SocialShare.map((val, i) => (
              <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                {val.Social}
              </a>
            ))}
          </div>
          {/* End .nav */}
        </div>
        {/* End .col */}

        {/* <div className="col-md-6 my-2 text-center text-md-right">
          <p>
            © {new Date().getFullYear()} copyright{" "}
            <a
              href="https://themeforest.net/user/ib-themes /portfolio"
              target="_blank"
              rel="noreferrer"
            >
              ib-themes{" "}
            </a>
            all right reserved
          </p>
        </div> */}
        {/* End .col */}
      </div>
      {/* End .row */}
    </>
  );
};
