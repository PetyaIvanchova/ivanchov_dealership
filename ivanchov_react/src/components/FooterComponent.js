import React from "react";

const FooterComponent = () => {
  return (
    <footer className="footer">
    <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
    </div>
    <div className="subscribe-newsletter">
        <div className="container">
            
        </div>
    </div>
    <div className="clearfix"></div>
    <div className="footer-inner">
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-item clearfix">
                        <img src="/LOGO copy.png" alt="logo" className="f-logo" />
                        <div className="s-border"></div>
                        <div className="m-border"></div>
                        <div className="text">
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla. Nulla posuere sapien vitae lectus suscipit, et pulvinar nisi tincidunt. Aliquam erat.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-item clearfix">
                        <h4>
                            Contact Info
                        </h4>
                        <div className="s-border"></div>
                        <div className="m-border"></div>
                        <ul className="contact-info">
                            <li>
                                <i className="flaticon-pin"></i>Address: 44 New Design Street,
                            </li>
                            <li>
                                <i className="flaticon-mail"></i><a href="mailto:info@gmail.com">info@gmail.com</a>
                            </li>
                            <li>
                                <i className="flaticon-phone"></i><a href="tel:+55-417-634-7071">+0477 85X6 552</a>
                            </li>
                            <li>
                                <i className="flaticon-fax"></i>+0477 85X6 552
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
                    <div className="footer-item">
                        <h4>
                            Useful Links
                        </h4>
                        <div className="s-border"></div>
                        <div className="m-border"></div>
                        <ul className="links">
                            <li>
                                <a href="#"><i className="fa fa-angle-right"></i>Home</a>
                            </li>
                            <li>
                                <a href="about.html"><i className="fa fa-angle-right"></i>About Us</a>
                            </li>
                            <li>
                                <a href="services.html"><i className="fa fa-angle-right"></i>Services</a>
                            </li>
                            <li>
                                <a href="car-list-rightside.html"><i className="fa fa-angle-right"></i>Car Listing</a>
                            </li>
                            <li>
                                <a href="contact.html"><i className="fa fa-angle-right"></i>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="footer-item clearfix">
                        <div><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11858.367370514845!2d23.0725106!3d42.0090344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa5f67872d3a23%3A0x42fce27443767b65!2z0JDQstGC0L7QutGK0YnQsCDQmNCy0LDQvdGH0L7Qsg!5e0!3m2!1sbg!2sbg!4v1702575556168!5m2!1sbg!2sbg" width="300" height="340" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="sub-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <p className="copy">© 2023 <a href="#">IVANCHOV</a> All Rights Reserved.</p>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="social-media clearfix">
                        <div className="social-list">
                            <div className="icon facebook">
                                <div className="tooltip">Facebook</div>
                                <span><i className="fa fa-facebook"></i></span>
                            </div>
                            <div className="icon twitter">
                                <div className="tooltip">Twitter</div>
                                <span><i className="fa fa-twitter"></i></span>
                            </div>
                            <div className="icon instagram">
                                <div className="tooltip">Instagram</div>
                                <span><i className="fa fa-instagram"></i></span>
                            </div>
                            <div className="icon github">
                                <div className="tooltip">Github</div>
                                <span><i className="fa fa-github"></i></span>
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
</footer>
  );
};

export default FooterComponent;
