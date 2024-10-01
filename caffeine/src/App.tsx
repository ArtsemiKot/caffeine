import "./App.css";
import Header from "./components/Header/Index";
import Footer from './components/Footer/index.tsx'
import {
  Global,
  BackgroundPreview,
  SectionInfo,
  Catalog,
  SectionDifferent,
  SectionMorning,
  SectionSlider,
  ImgContent,
} from "./style.ts";
import pict_cup_coffie from "./assets/cup_coffie.svg";
import pict_coffie_1 from "./assets/cup-cappuccino.svg";
import pict_coffie_2 from "./assets/cup-latte.svg";
import pict_coffie_3 from "./assets/cup-maccmato.svg";
import pict_coffie_4 from "./assets/cup-expresso.svg";
import pict_diffcoffie_1 from "./assets/coffee-beans.svg";
import pict_diffcoffie_2 from "./assets/badge.svg";
import pict_diffcoffie_3 from "./assets/cup.svg";
import pict_diffcoffie_4 from "./assets/best-price.svg";

const coffies = [
  {
    id: 1,
    title: "Cappuccino",
    description: "Coffie 50% | Milk 50%",
    price: "$8.50",
    img: pict_coffie_1,
  },
  {
    id: 2,
    title: "Chai Latte",
    description: "Coffie 50% | Milk 50%",
    price: "$8.50",
    img: pict_coffie_2,
  },
  {
    id: 3,
    title: "Macchiato",
    description: "Coffie 50% | Milk 50%",
    price: "$8.50",
    img: pict_coffie_3,
  },
  {
    id: 4,
    title: "Expresso",
    description: "Coffie 50% | Milk 50%",
    price: "$8.50",
    img: pict_coffie_4,
  },
];
const differentCoffie = [
  {
    id: 1,
    title: "Supreme Beans",
    description: "Beans that provides great taste",
    img: pict_diffcoffie_1,
  },
  {
    id: 2,
    title: "High Quality",
    description: "We provide the highest quality",
    img: pict_diffcoffie_2,
  },
  {
    id: 3,
    title: "Extraordinary",
    description: "Coffee like you have never tasted",
    img: pict_diffcoffie_3,
  },
  {
    id: 4,
    title: "Affordable Price",
    description: "Our Coffee prices are easy to afford",
    img: pict_diffcoffie_4,
  },
];

const App = () => {
  return (
    <>
      <Global />
      <BackgroundPreview>
        <Header />
        <div className="wrapperPreview">
          <p className="textHeading">We’ve got your morning covered with</p>
          <h1>Coffee</h1>
          <p className="textPreview">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <div className="button_order-now">Order Now</div>
        </div>
      </BackgroundPreview>

      <SectionInfo>
        <div className="wrapperInfo">
          <h2>Discover the best coffee</h2>
          <p className="textAboutCoffie">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>
          <div className="button_learn-more">Learn More</div>
        </div>
        <div>
          <img src={pict_cup_coffie} alt="coffie" />
        </div>
      </SectionInfo>

      <Catalog>
        <h2>Enjoy a new blend of coffee style</h2>
        <p>
          Explore all flavours of coffee with us. There is always a new cup
          worth experiencing.
        </p>
        <div className="catalog-info">
          {coffies.map((el) => (
            <div className="wrapperItem">
              <div>
                <img src={el.img} alt="coffie" />
              </div>
              <div className="infoCoffie">
                <h3>{el.title}</h3>
                <p>{el.description}</p>
                <p className="price">{el.price}</p>
              </div>
              <div className="button_order-now">Order Now</div>
            </div>
          ))}
        </div>
      </Catalog>

      <SectionDifferent>
        <div className="wrapperDifferent">
          <h2>Why are we different?</h2>
          <p>We don’t just make your coffee, we make your day!</p>
        </div>
        <div className="differentInfo">
          {differentCoffie.map((el) => (
            <div className="differentItem">
              <div>
                <img src={el.img} alt="coffie" />
              </div>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </div>
          ))}
        </div>
        <p>
          Great ideas start with great coffee, Lets help you achieve that Get
          started today.
        </p>
        <h3>Get started today.</h3>
        <div className="button_join-us">Join Us</div>
      </SectionDifferent>
      <SectionMorning>
        <div className="wrapperMorning">
          <div className="wrapperLeft">
            <h1>Get a chance to have an Amazing morning</h1>
            <p className="textPreview">
              We are giving you are one time opportunity to experience a better
              life with coffee.
            </p>
            <div className="button_order-now">Order Now</div>
          </div>
          <div className="wrapperright"></div>
        </div>
      </SectionMorning>

      <SectionSlider>
        <div className="feadback">
          <h1>Our coffee perfection feedback</h1>
          <p>Our customers has amazing things to say about us</p>
          <div className="slider">
            <div className="marks"></div>
            <div className="arrowleft">
              <div className="arrow"></div>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset.....
            </p>
            <h3>Jonny Thomas</h3>
            <p>Project Manager</p>
            <div className="arrowright">
              <div className="arrow"></div>
            </div>
            <div className="imgman"></div>
          </div>
        </div>
      </SectionSlider>

      <ImgContent></ImgContent>
      <Footer></Footer>
    </>
  );
};
export default App;
