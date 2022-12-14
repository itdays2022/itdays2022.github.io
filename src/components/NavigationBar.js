import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navigationBar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavDropdown from "react-bootstrap/NavDropdown";

var lastScrollTop = 0;

function NavigationBar() {
  const [navbarShow, setNavbarShow] = useState(true);

  const controlNavbar = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setNavbarShow(false);
    } else {
      setNavbarShow(true);
    }
    lastScrollTop = scrollTop;
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });

  // off canvas scroll

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    console.log(show);
  };
  const handleShow = () => setShow(true);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const callBoth = () => {
    handleClose();
    scrollToTop();
  };
  return (
    <header className={`navbar navbar-expand-lg fixed-top ${navbarShow ? "active" : ""}`} id="navbar">
      <nav className="container container-lg px-md-5 px-3">
        <div className="border-animation">
          <span className="inset"></span>
          <span className="navbar-brand p-relative ps-3">IT DAYS 2022</span>
        </div>
        <button className="navbar-toggler float-md-end d-lg-none" type="button" onClick={handleShow} data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">
          <i className="bi bi-list text-light"></i>
        </button>

        <Offcanvas show={show} onHide={handleClose} responsive="lg" placement="bottom" className="offcanvas">
          <Offcanvas.Body className="offcanvas-body ms-auto d-flex flex-column flex-lg-row">
            <NavLink className="nav-link" to="/" onClick={callBoth}>
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about" onClick={callBoth}>
              About
            </NavLink>
            <NavLink className="nav-link custom" to="/main-activity" onClick={callBoth}>
              Main Activity
            </NavLink>
            <NavDropdown title="Registration" id="navbarScrollingDropdown" className="dropdown" menuVariant="transparent">
              <NavDropdown.Item href="/registrasi/internal" onClick={callBoth}>
                Internal
              </NavDropdown.Item>
              <NavDropdown.Item href="/registrasi/eksternal" onClick={callBoth}>
                Eksternal
              </NavDropdown.Item>
            </NavDropdown>
          </Offcanvas.Body>
        </Offcanvas>
      </nav>
    </header>
  );
}

export default NavigationBar;
