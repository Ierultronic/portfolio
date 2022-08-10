import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Social = styled.div`
  display: block;
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2em;
    color: rgb(119, 119, 121);
    transition: 0.2s ease-in;
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  .Title {
    color: rgb(57, 134, 250);
    cursor: pointer;
    position: relative;
  
    p {
      position: relative;
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-transform: uppercase;
      color: rgb(119, 119, 121);
      -webkit-text-stroke: 0.5 white;
      -webkit-text-fill-color: rgba(255, 255, 255, 0);
    }
  
    &__underline {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0.3em;
      height: 3px;
      background-color: #17bdef;
      z-index: 5;
      transition: transform 580ms cubic-bezier(0.2, 0.1, 0.15, 1.32);
    }
  
    &__highlight {
      position: absolute;
      width: 100%;
      bottom: -50;
      left: 0;
      height: 50px;
      background-color: #43ffbe;
      z-index: -1;
      transition: transform 400ms ease;
    }
  
    &__filled {
      position: absolute;
      margin: 0;
      padding: 0;
      text-transform: uppercase;
      top: 0;
      clip-path: polygon(0% 100%, 0% 99%, 100% 99%, 100% 100%);
      transition: clip-path 600ms cubic-bezier(0.2, 0.1, 0.15, 1.32);
    }
  
    &:hover {
      .Title__filled {
        clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 100% 100%);
        color: rgb(57, 134, 250);
      }
      .Title__underline {
        transform: translateY(-1.2em);
      }
      .Title__highlight {
        transform: translateY(-3.1em);
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
              href="https://www.linkedin.com/in/amierul-izzuddin-a906a0227/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div class="Title">
              <p><FaLinkedin />
                <div class="Title__highlight"></div>
              </p>
              <div aria-hidden class="Title__filled"><FaLinkedin /></div>
            </div>
          </a>
        </li>
        <li className="item">
          <a
              href="https://github.com/Ierultronic"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div class="Title">
              <p><FaGithub />
                <div class="Title__highlight"></div>
              </p>
              <div aria-hidden class="Title__filled"><FaGithub /></div>
            </div>
          </a>
        </li>
        <li className="item">
          <a
              href="https://www.instagram.com/ierultronic/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div class="Title">
              <p><FaInstagram />
                <div class="Title__highlight"></div>
              </p>
              {/* <div class="Title__underline"></div> */}
              <div aria-hidden class="Title__filled"><FaInstagram /></div>
            </div>
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
