import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SideBarComponent from "../components/SideBarComponent";

const ContactComponent = () => {
  return (
    <>
      <HeaderComponent />

      <SideBarComponent />

      <div className="contact-1 content-area-20">
        <div className="container">
          
          <div className="main-title text-center">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
          </div>
          <div className="row g-0 contact-innner">
            <div className="col-lg-7 col-md-12">
              <div className="contact-form">
                <h3 className="mb-20">Send us a Message</h3>
                <form action="#" method="GET" enctype="multipart/form-data">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-floating mb-20">
                        <input type="text" className="form-control" id="floating-full-name" placeholder="Full Name" />
                          <label for="floating-full-name">Full Name</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-floating mb-20">
                        <input type="email" className="form-control" id="floating-email-address" placeholder="Email Address" />
                          <label for="floating-email-address">Email address</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-floating mb-20">
                        <input type="text" className="form-control" id="floating-subject" placeholder="Subject" />
                          <label for="floating-subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-floating mb-20">
                        <input type="text" className="form-control" id="floating-phone-Number" placeholder="Phone Number" />
                          <label for="floating-phone-Number">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-floating mb-20">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Comments</label>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="send-btn">
                        <button type="submit" className="btn btn-5">Send Message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="contact-info">
                <h3 className="mb-20">Contact Info</h3>
                <div className="ci-box d-flex mb-30">
                  <div className="icon">
                    <i className="flaticon-pin"></i>
                  </div>
                  <div className="detail align-self-center">
                    <h4>Address</h4>
                    <p>Под Грамада, 2700 Blagoevgrad</p>
                  </div>
                </div>
                <div className="ci-box d-flex mb-30">
                  <div className="icon">
                    <i className="flaticon-phone"></i>
                  </div>
                  <div className="detail align-self-center">
                    <h4>Phone Number</h4>
                    <p>
                      <a href="tel:089 857 3223">089 857 3223</a>
                    </p>
                  </div>
                </div>
                <div className="ci-box d-flex mb-40">
                  <div className="icon">
                    <i className="flaticon-mail"></i>
                  </div>
                  <div className="detail align-self-center">
                    <h4>Email Address</h4>
                    <p>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </p>
                  </div>
                </div>

                <h3 className="mb-20">Follow Us</h3>
                <div className="social-media social-media-two">
                  <div className="social-list">
                    <div className="icon facebook">
                      <div className="tooltip">Facebook</div>
                      <span><i className="fa fa-facebook"></i></span>
                    </div>
                    <div className="icon instagram">
                      <div className="tooltip">Instagram</div>
                      <span><i className="fa fa-instagram"></i></span>
                    </div>
                    <div className="icon youtube mr-0">
                      <div className="tooltip">Youtube</div>
                      <span><i className="fa fa-youtube"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      
      <div className="section">
        <div className="map">

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11858.367370514845!2d23.0725106!3d42.0090344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa5f67872d3a23%3A0x42fce27443767b65!2z0JDQstGC0L7QutGK0YnQsCDQmNCy0LDQvdGH0L7Qsg!5e0!3m2!1sbg!2sbg!4v1702558052603!5m2!1sbg!2sbg" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>

        </div>
      </div>

      <FooterComponent />
    </>
  );
};

export default ContactComponent;
