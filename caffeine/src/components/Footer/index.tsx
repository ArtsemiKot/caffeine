import styled from "styled-components";
import footerimg from "../../assets/fotter_image.svg";
import facebook from "../../assets/FB.svg";
import insta from "../../assets/Inst.svg";
import youtube from "../../assets/YT.svg";
import twit from "../../assets/TW.svg";

const footerinfo1 = ["Menu", "Features", "News & Blogs", "Help & Supports"];
const footerinfo2 = ["How we work", "Terms of service", "Pricing", "FAQ"];
const footerinfo3 = [
  "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016",
  "+1 202-918-2132",
  "beanscene@mail.com",
  "www.beanscene.com",
];
const WrapperFooter = styled.div`
  background-image: url(${footerimg});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  gap: 66px;
  padding: 162px 93px;
  .leftBlock {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    .footerLogo {
      font: 400 35px "Clicker Script";
      color: #fff;
    }
    p {
      font: 400 14px "Playfair Display";
      color: #fff;
    }
    .social {
      display: flex;
      gap: 20px;
      .facebook {
        background-image: url(${facebook});
        width: 24px;
        height: 24px;
        background-size: contain;
      }
      .instagram {
        background-image: url(${insta});
        width: 24px;
        height: 24px;
        background-size: contain;
      }
      .youtube {
        background-image: url(${youtube});
        width: 24px;
        height: 24px;
        background-size: contain;
      }
      .twitter {
        background-image: url(${twit});
        width: 24px;
        height: 24px;
        background-size: contain;
      }
    }
  }
  .rightBlock {
    display: flex;
    gap: 96px;
    .about,
    .company,
    .contactus {
      display: flex;
      flex-direction: column;
      gap: 22px;
      max-width: 332px;
      font: 700 26px "Playfair Display";
      color: #fff;
      .textstyle {
        font: 400 18px "Playfair Display";
        color: #fff;
      }
    }
  }
`;
function Footer() {
  return (
    <>
      <WrapperFooter>
        <div className="leftBlock">
          <p className="footerLogo">Bean Scene</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="social">
            <div className="facebook"></div>
            <div className="instagram"></div>
            <div className="youtube"></div>
            <div className="twitter"></div>
          </div>
        </div>
        <div className="rightBlock">
          <div className="about">
            About
            {footerinfo1.map((el) => (
              <p className="textstyle">{el}</p>
            ))}
          </div>
          <div className="company">
            Company
            {footerinfo2.map((el) => (
              <p className="textstyle">{el}</p>
            ))}
          </div>
          <div className="contactus">
            Contact Us
            {footerinfo3.map((el) => (
              <p className="textstyle">{el}</p>
            ))}
          </div>
        </div>
      </WrapperFooter>
    </>
  );
}

export default Footer;
