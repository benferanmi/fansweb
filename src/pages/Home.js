import "../App.css";
import bannerImg1 from "../image/bannerone.png";
import bannerImg2 from '../image/bannertwo.png';
import bannerImg3 from '../image/bannerthree.png';
import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import ImageSlider, { Slide } from "react-auto-image-slider";
import Backtotop from "../Component/Backtotop";
import Models from "../Models/Models.js"


function Home() {
  return (
    <div className="App">
      <body>
        <Header />
        <section className="banner ptop">
          <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <Slide>
              <img alt="bannerImgone" src={bannerImg1} />
            </Slide>
            <Slide>
              <img alt="img2bannertwo" src={bannerImg2} />
            </Slide>
            <Slide>
              <img alt="bannerthreeimg" src={bannerImg3} />
            </Slide>
          </ImageSlider>
        </section>

        <section>
          <Models />
         </section>
        <div className="button-container">
           <Link to="models" className="model-button"> All Models</Link>
        </div>

        <section className="banner">
        <ImageSlider effectDelay={500} autoPlayDelay={2000}>
            <Slide>
              <img alt="bannerImgone" src={bannerImg1} />
            </Slide>
            <Slide>
              <img alt="img2bannertwo" src={bannerImg2} />
            </Slide>
          </ImageSlider>
        </section>

        <div className="button-container">
          <button type="button" className="model-button-two">
            <Link to="/signup">Become a Model Now</Link>
          </button>
        </div>
        <div>
          <Backtotop />
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default Home;
