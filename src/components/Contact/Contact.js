import React, { useRef } from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const notify = () => toast.success('😎 Email Sent!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4jmm2n3', 'template_7zlux8b', form.current, 'k3yoVT8H5JS32S8qN')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <form ref={form} onSubmit={sendEmail} id="contact_email">
          <div class="background">
            <div class="container">
              <div class="screen">
                <div class="screen-header">
                  <div class="screen-header-left">
                    <div class="screen-header-button close"></div>
                    <div class="screen-header-button maximize"></div>
                    <div class="screen-header-button minimize"></div>
                  </div>
                  <div class="screen-header-right">
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                    <div class="screen-header-ellipsis"></div>
                  </div>
                </div>
                <div class="screen-body">
                  <div class="screen-body-item left">
                    <div class="app-title">
                      <span>CONTACT</span>
                      <span>US</span>
                    </div>
                    <div class="app-contact">CONTACT INFO : +60 13322 4809</div>
                  </div>
                  <div class="screen-body-item">
                    <div class="app-form">
                      <div class="app-form-group">
                        <input class="app-form-control" type="text" name="from_name" placeholder="NAME*" required />
                      </div>
                      <div class="app-form-group">
                        <input class="app-form-control" type="email" name="from_email" placeholder="EMAIL*" required />
                      </div>
                      <div class="app-form-group message">
                        <input class="app-form-control" name="message" placeholder="MESSAGE*" required />
                      </div>
                      <div class="app-form-group buttons">
                        <button class="app-form-button" onClick={notify}>SEND EMAIL</button>
                        <ToastContainer
                          position="top-center"
                          autoClose={5000}
                          hideProgressBar={false}
                          newestOnTop={false}
                          closeOnClick
                          rtl={false}
                          pauseOnFocusLoss
                          draggable
                          pauseOnHover
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
