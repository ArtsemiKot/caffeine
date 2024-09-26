import './App.css'
import Header from './components/Header/Index'
import styled, { createGlobalStyle } from 'styled-components'
import pict_coffie from './assets/pict_coffie.svg'
import pict_cup_coffie from './assets/cup_coffie.svg'
import pict_coffie_1 from './assets/cup-cappuccino.svg'
import pict_coffie_2 from './assets/cup-latte.svg'
import pict_coffie_3 from './assets/cup-maccmato.svg'
import pict_coffie_4 from './assets/cup-expresso.svg'
import pict_diffcoffie_1 from './assets/coffee-beans.svg'
import pict_diffcoffie_2 from './assets/badge.svg'
import pict_diffcoffie_3 from './assets/cup.svg'
import pict_diffcoffie_4 from './assets/best-price.svg'

const coffies = [
  { id: 1, title: 'Cappuccino', description: 'Coffie 50% | Milk 50%', price: '$8.50', img: pict_coffie_1 },
  { id: 2, title: 'Chai Latte', description: 'Coffie 50% | Milk 50%', price: '$8.50', img: pict_coffie_2 },
  { id: 3, title: 'Macchiato', description: 'Coffie 50% | Milk 50%', price: '$8.50', img: pict_coffie_3 },
  { id: 4, title: 'Expresso', description: 'Coffie 50% | Milk 50%', price: '$8.50', img: pict_coffie_4 },
];
const differentCoffie = [
  { id: 1, title: 'Supreme Beans', description: 'Beans that provides great taste', img: pict_diffcoffie_1 },
  { id: 2, title: 'High Quality', description: 'We provide the highest quality', img: pict_diffcoffie_2 },
  { id: 3, title: 'Extraordinary', description: 'Coffee like you have never tasted', img: pict_diffcoffie_3 },
  { id: 4, title: 'Affordable Price', description: 'Our Coffee prices are easy to afford', img: pict_diffcoffie_4 },
];

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
`
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

.textHeading{
  font: 500 22px 'Playfair Display';
  color: #ffffff;
  width: 527px;
}

h1 {
  font: 400 220px "Clicker Script";
  color: #ffffff;
  width: 527px;
}

.textPreview{
  font: 400 20px 'Playfair Display';
  color: #ffffff;
  width: 527px;
}

.button_order-now{
  font:700 16px 'Playfair Display';
  width:135px;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color:#1E1E1E;
}
`
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
    width:585px;
    gap: 29px;
  }

h2 {
    font: 700 54px 'Playfair Display';
    color: #603809;
  }
.textAboutCoffie {
    font: 400 20px 'Playfair Display';
  }
.button_learn-more{
  font:700 16px 'Playfair Display';
  width:141px;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color:#1E1E1E;
}
`
const Catalog = styled.div`
  width: 1366px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:32px;

.catalog-info{
  width: 1366px;
  display: flex;
  justify-content: space-between;
  
}
h2 {
  font: 700 54px 'Playfair Display';
  color: #603809;
  }

p {
  font: 400 20px 'Playfair Display';
  color: #603809;
}
.wrapperItem{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff9f1;
  border: 1px solid #f9c06a;
  max-width: 280px;
  gap:5px;
}
.infoCoffie{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h3{
  font: 600 22px 'Playfair Display';
  color: #603809;
  }
.button_order-now{
  font:700 16px 'Playfair Display';
  width:135px;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color:#1E1E1E;
  
}
`
const SectionDifferent = styled.div`
  width: 1366px;
  margin: auto;
  padding:5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:32px;
.wrapperDifferent{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
h2 {
  font: 700 54px 'Playfair Display';
  color: #603809;
  }
  p{
    font: 400 20px 'Playfair Display';
  color: #603809;
  }
}
.differentInfo{
  width: 1366px;
  display: flex;
  justify-content: space-between;
.differentItem{
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 36px 40px;
  background-color: #fff9f1;
  border: 1px solid #f9c06a;
  max-width: 280px;
  gap:5px;
  h3{
    font: 600 22px 'Playfair Display';
  color: #603809;
  }
  p{
    font: 400 20px 'Playfair Display';
  color: #603809;
  text-align: center;
  }
}
}

h3{
    font: 600 32px 'Playfair Display';
  color: #603809;
}
p{
    font: 400 20px 'Playfair Display';
  color: #603809;
}
  .button_join-us{
  font:700 16px 'Playfair Display';
  width: max-content;
  background: #f9c06a;
  padding: 14px 27px;
  border-radius: 24px;
  color:#1E1E1E;
  }
`
const App = () => {

  return <>
    <Global />
    <BackgroundPreview>
      <Header />
      <div className="wrapperPreview">
        <p className='textHeading'>We’ve got your morning covered with</p>
        <h1>Coffee</h1>
        <p className='textPreview'>
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <div className='button_order-now'>Order Now</div>
      </div>
    </BackgroundPreview>

    <SectionInfo>
      <div className="wrapperInfo">
        <h2>Discover the best coffee</h2>
        <p className='textAboutCoffie'>
          Bean Scene is a coffee shop that provides you with quality coffee
          that helps boost your productivity and helps build your mood. Having
          a cup of coffee is good, but having a cup of real coffee is greater.
          There is no doubt that you will enjoy this coffee more than others
          you have ever tasted.
        </p>
        <div className='button_learn-more'>Learn More</div>
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
            <div className='infoCoffie'>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <p className="price">{el.price}</p>
            </div>
            <div className='button_order-now'>Order Now</div>
          </div>
        ))}
      </div>
    </Catalog>

    <SectionDifferent>
      <div className='wrapperDifferent'>
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
      <p>Great ideas start with great coffee, Lets help you achieve that Get started today.</p>
      <h3>Get started today.</h3>
      <div className='button_join-us'>Join Us</div>
    </SectionDifferent>
  </>

}
export default App
