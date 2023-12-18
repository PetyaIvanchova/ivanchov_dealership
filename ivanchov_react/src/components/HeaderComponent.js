import React from "react";

const HeaderComponent = () => {
  return (
    <header className="main-header sticky-header sh-2">
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand company-logo-2" href="index.html">
                <img src="/LOGO copy.png" alt="logo" />
            </a>
            <button className="navbar-toggler" type="button" id="drawer">
                <span className="fa fa-bars"></span>
            </button>
            <div className="navbar-collapse collapse w-100 justify-content-end" id="navbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown active">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Home
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Car Listing
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            About us
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            FAQ
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</header>
  );
};

export default HeaderComponent;
