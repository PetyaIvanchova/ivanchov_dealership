import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import IntroComponent from "../components/IntroComponent";
import BestComponent from "../components/BestComponent";
import FooterComponent from "../components/FooterComponent";
import OffersComponent from "../components/OffersComponent";

const SideBarComponent = ({isActive, toggleSideBar, isSideBarActive}) => {
  return (
    <>

    <nav id="sidebar" className={`nav-sidebar ${isActive ? 'active' : ''}`}>
    
    <div id="dismiss" >
        <button className="buttonOnClose" onClick={() => toggleSideBar(!isSideBarActive)} ><i className="fa fa-close"></i></button>
    </div>
    <div className="sidebar-inner">
        <div className="sidebar-logo">
            <a href="index.html">
                <img src="/LOGO copy.png" alt="sidebarlogo" />
            </a>
        </div>
        <div className="sidebar-navigation">
            <h3 className="heading">Pages</h3>
            <ul className="menu-list">
                <li><a href="#" className="active pt0">Index <em className="fa fa-chevron-down"></em></a>
                    <ul>
                        <li><a href="index.html">Index 01</a></li>
                        <li><a href="index-2.html">Index 02</a></li>
                        <li><a href="index-3.html">Index 03</a></li>
                        <li><a href="index-4.html">Index 04</a></li>
                        <li><a href="index-5.html">Index 05</a></li>
                        <li><a href="index-6.html">Index 06</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Car Listing <em className="fa fa-chevron-down"></em></a>
                    <ul>
                        <li>
                            <a href="#">List Layout <em className="fa fa-chevron-down"></em></a>
                            <ul>
                                <li><a href="car-list-rightside.html">List Right Sidebar</a></li>
                                <li><a href="car-list-leftsidebar.html">List Left Sidebar</a></li>
                                <li><a href="car-list-fullWidth.html">List FullWidth</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Grid Layout <em className="fa fa-chevron-down"></em></a>
                            <ul>
                                <li><a href="car-grid-rightside.html">Grid Right Sidebar</a></li>
                                <li><a href="car-grid-leftside.html">Grid Left Sidebar</a></li>
                                <li><a href="car-grid-fullWidth.html">Grid FullWidth</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Car Details <em className="fa fa-chevron-down"></em></a>
                            <ul>
                                <li><a href="car-details.html">Car Details 1</a></li>
                                <li><a href="car-details-2.html">Car Details 2</a></li>
                                <li><a href="car-details-3.html">Car Details 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Pages <em className="fa fa-chevron-down"></em></a>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li>
                            <a href="#">Agent <em className="fa fa-chevron-down"></em></a>
                            <ul>
                                <li><a href="agent.html">Agent</a></li>
                                <li><a href="agent-detail.html">Agent Details</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Services <em className="fa fa-chevron-down"></em></a>
                            <ul>
                                <li><a href="services.html">Services 1</a></li>
                                <li><a href="services-2.html">Services 2</a></li>
                            </ul>
                        </li>
                        <li><a href="car-comparison.html">Car Compare</a></li>
                        <li><a href="pricing-tables.html">Pricing Tables</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="elements.html">Elements</a></li>
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="search-brand.html">Car Brands</a></li>
                        <li><a href="icon.html">Icons</a></li>
                        <li><a href="coming-soon.html">Coming Soon</a></li>
                        <li><a href="404.html">Error Page</a></li>
                        <li><a href="login.html">login</a></li>
                        <li><a href="signup.html">Register</a></li>
                    </ul>
                </li>
                <li><a href="#">Blog <em className="fa fa-chevron-down"></em></a>
                    <ul>
                        <li><a href="blog-post.html">Blog Post</a></li>
                        <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                        <li><a href="blog-details.html">Blog Details</a></li>
                    </ul>
                </li>
                <li><a href="#">Shop <em className="fa fa-chevron-down"></em></a>
                    <ul>
                        <li><a href="shop-list.html">Shop List</a></li>
                        <li><a href="shop-cart.html">Shop Cart</a></li>
                        <li><a href="shop-checkout.html">Shop Checkout</a></li>
                        <li><a href="shop-details.html">Shop Details</a></li>
                    </ul>
                </li>
                <li>
                    <a href="contact.html">Contact</a>
                </li>
                <li>
                    <a href="#full-page-search" className="nav-link h-icon">
                        <i className="fa fa-search"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div className="get-in-touch">
            <h3 className="heading">Get in Touch</h3>
            <div className="get-in-touch-box d-flex mb-2">
                <i className="flaticon-phone"></i>
                <a href="tel:0477-0477-8556-552">0288 2547 874</a>
            </div>
            <div className="get-in-touch-box d-flex mb-2">
                <i className="flaticon-mail"></i>
                <div className="media-body">
                    <a href="#">info@themevessel.com</a>
                </div>
            </div>
            <div className="get-in-touch-box d-flex">
                <i className="flaticon-earth"></i>
                <div className="media-body">
                    <a href="#">info@themevessel.com</a>
                </div>
            </div>
        </div>
        <div className="get-social">
            <h3 className="heading">Get Social</h3>
            <a href="#" className="facebook-bg">
                <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="twitter-bg">
                <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="google-bg">
                <i className="fa fa-google"></i>
            </a>
            <a href="#" className="linkedin-bg">
                <i className="fa fa-linkedin"></i>
            </a>
        </div>
    </div>
</nav>

    
    </>
  );
};

export default SideBarComponent;
