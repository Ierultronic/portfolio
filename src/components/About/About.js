import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src={process.env.PUBLIC_URL + '/under_construct.png'}
            alt="man-svgrepo"
          />
          <div className="AboutBio">
            Hello! My name is <strong>Amierul Izzuddin</strong> and this website still under construction. huhu...
          </div>
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
                <span><CountUp end={stack.percentage} >{({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                </CountUp>%</span>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
