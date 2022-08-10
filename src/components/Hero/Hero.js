import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import Typed from "react-typed";

import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <h1>Hi, I'm Amierul Izzuddin</h1>
            <h5>
              <Typed
                strings={["I am a Backend Developer", "I am a Frontend Developer", "I am a Fullstack Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </h5>
              <p>
                I design and code beautifully simple things, and I love what I do.
              </p>
          </HeroLeft>
          <HeroRight>
            <Image
              src="https://avatars.githubusercontent.com/u/97608853?v=4"
              alt="man-svgrepo"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://raw.githubusercontent.com/gurupawar/website/main/src/Assets/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
