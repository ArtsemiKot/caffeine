import styled, { createGlobalStyle } from "styled-components";
import pict_coffie from "./assets/pict_coffie.svg";
import coffieamazing from "./assets/coffieamazing.svg";
import bigcup from "./assets/bigcup.svg";
import marks from "./assets/marks.svg";
import arrow from "./assets/arrow.svg";
import man from "./assets/imghuman.svg";
import imgcontent from './assets/imgcontent.svg'
const Global = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  font-style:normal;
}

body {
  background-color: 'fff';
}
`;
const BackgroundPreview = styled.div`
  background-image: url(${pict_coffie});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;

  .wrapperPreview {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 0 auto;
    padding: 6% 0;
    max-width: 1366px;
  }

  .textHeading {
    font: 500 22px "Playfair Display";
    color: #ffffff;
    width: 527px;
  }

  h1 {
    font: 400 220px "Clicker Script";
    color: #ffffff;
    width: 527px;
  }

  .textPreview {
    font: 400 20px "Playfair Display";
    color: #ffffff;
    width: 527px;
  }

  .button_order-now {
    font: 700 16px "Playfair Display";
    width: 135px;
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }
`;
const SectionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1366px;
  height: 650px;
  margin: auto;
  padding: 150px 0;
  gap: 90px;

  .wrapperInfo {
    display: flex;
    flex-direction: column;
    max-width: 585px;
    gap: 29px;
  }

  h2 {
    font: 700 54px "Playfair Display";
    color: #603809;
  }
  .textAboutCoffie {
    font: 400 20px "Playfair Display";
  }
  .button_learn-more {
    font: 700 16px "Playfair Display";
    width: 141px;
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }
`;
const Catalog = styled.div`
  width: 1366px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  .catalog-info {
    width: 1366px;
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font: 700 54px "Playfair Display";
    color: #603809;
  }

  p {
    font: 400 20px "Playfair Display";
    color: #603809;
  }
  .wrapperItem {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff9f1;
    border: 1px solid #f9c06a;
    max-width: 280px;
    gap: 5px;
  }
  .infoCoffie {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  h3 {
    font: 600 22px "Playfair Display";
    color: #603809;
  }
  .button_order-now {
    font: 700 16px "Playfair Display";
    width: 135px;
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }
`;
const SectionDifferent = styled.div`
  width: 1366px;
  margin: auto;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  .wrapperDifferent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    h2 {
      font: 700 54px "Playfair Display";
      color: #603809;
    }
    p {
      font: 400 20px "Playfair Display";
      color: #603809;
    }
  }
  .differentInfo {
    width: 1366px;
    display: flex;
    justify-content: space-between;
    .differentItem {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 36px 40px;
      background-color: #fff9f1;
      border: 1px solid #f9c06a;
      max-width: 280px;
      gap: 5px;
      h3 {
        font: 600 22px "Playfair Display";
        color: #603809;
      }
      p {
        font: 400 20px "Playfair Display";
        color: #603809;
        text-align: center;
      }
    }
  }

  h3 {
    font: 600 32px "Playfair Display";
    color: #603809;
  }
  p {
    font: 400 20px "Playfair Display";
    color: #603809;
  }
  .button_join-us {
    font: 700 16px "Playfair Display";
    width: max-content;
    background: #f9c06a;
    padding: 14px 27px;
    border-radius: 24px;
    color: #1e1e1e;
  }
`;
const SectionMorning = styled.div`
  background-image: url(${coffieamazing});
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  .wrapperMorning {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 6% 0;
    max-width: 1366px;

    .wrapperLeft {
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 575px;
      gap: 22px;
      h1 {
        font: 700 54px "Playfair Display";
        color: #fff;
      }
      p {
        font: 400 20px "Playfair Display";
        color: #fff;
      }
      .button_order-now {
        font: 700 16px "Playfair Display";
        width: 135px;
        background: #f9c06a;
        padding: 14px 27px;
        border-radius: 24px;
        color: #1e1e1e;
      }
    }
    .wrapperright {
      background-image: url(${bigcup});
      width: 300px;
      height: 467px;
      background-size: contain;
      background-position: center;
    }
  }
`;
const SectionSlider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: auto;
  padding: 5% 0;
  max-width: 1366px;
  .feadback {
    margin: auto;
    h1 {
      font: 700 54px "Playfair Display";
      color: #603809;
      margin-bottom: 16px;
    }
    p {
      font: 400 20px "Playfair Display";
      color: #707070;
      margin-bottom: 45px;
    }
    .slider {
      padding: 120px 100px 50px 100px;
      background-color: #fff9f1;
      border: 1px solid #f9c06a;
      max-width: 1080px;
      position: relative;
      .marks {
        background-image: url(${marks});
        width: 82px;
        height: 82px;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        top: 20px;
        left: 20px;
      }
      .arrowleft {
        padding: 29px;
        background-color: #f9c06a;
        border: 1px solid #f9c06a;
        border-radius: 24px;
        max-width: 82px;
        position: absolute;
        left: -35px;
        top: 180px;
        .arrow {
          background-image: url(${arrow});
          width: 24px;
          height: 24px;
          background-size: contain;
          background-repeat: no-repeat;
        }
      }
      p {
        font: 600 18px "Playfair Display";
        color: #707070;
        max-width: 980px;
      }
      h3 {
        font: 700 32px "Playfair Display";
        color: #603809;
      }
      p {
        font: 400 20px "Playfair Display";
        color: #707070;
      }
      .arrowright {
        padding: 29px;
        background-color: #f9c06a;
        border: 1px solid #f9c06a;
        border-radius: 24px;
        max-width: 82px;
        position: absolute;
        right: -50px;
        top: 180px;
        .arrow {
          background-image: url(${arrow});
          width: 24px;
          height: 24px;
          background-size: contain;
          background-repeat: no-repeat;
          transform: scale(-1, 1);
        }
      }
      .imgman {
        background-image: url(${man});
        width: 112px;
        height: 112px;
        background-size: contain;
        background-repeat: no-repeat;
        position: absolute;
        right: 480px;
        top: 410px;
      }
    }
  }
`;
const ImgContent = styled.div`
  background-image: url(${imgcontent});
  width: 100%;
  height: 374px;
  background-size: cover;
  background-position: center;
`

export {
  Global,
  BackgroundPreview,
  SectionInfo,
  Catalog,
  SectionDifferent,
  SectionMorning,
  SectionSlider,
  ImgContent
};
