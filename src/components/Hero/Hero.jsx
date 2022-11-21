import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best add */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "160" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* Header Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figers */}
        <div className="figers">
          <div>
            <span>
              <NumberCounter end={180} start={100} delay="4" preFix="+" />
            </span>
            <span>exper coaches</span>
          </div>
          <div>
            <span>
              <NumberCounter end={480} start={100} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={40} start={10} delay="4" preFix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          className="heart-rate"
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
        >
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero Image */}
        <img src={hero_image} alt="" className="hero_image" />
        <motion.img
          transition={transition}
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          src={hero_image_back}
          alt=""
          className="hero_image_back"
        />

        {/* calories */}
        <motion.div
          transition={transition}
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>240 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
