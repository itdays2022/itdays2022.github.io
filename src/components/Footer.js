import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { sponsor } from "../Data";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer" id="footer">
      <div className="container-fluid bg-dark">
        <div className="row text-center">
          {/* <!-- 1 --> */}

          <div className="col-md-3 text-light mt-5 media-social">
            <h2 className="text-light footer-title">IT DAYS 2022</h2>
            <ul className="list-group list-group-horizontal p-5">
              {/* <!-- instagram --> */}
              <li className="list-group-item">
                <a href="https://www.instagram.com/itdays_usd/" className="Instagram" target="_blank" rel="noreferrer">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              {/* <!-- twitter --> */}
              <li className="list-group-item">
                <a href="https://twitter.com/usd_itdays" className="twitter text-center" target="_blank" rel="noreferrer">
                  <i className="bi bi-twitter"></i>
                </a>
              </li>
              {/* <!-- tiktok --> */}
              <li className="list-group-item">
                <a href="https://www.tiktok.com/@itdays2022" className="tiktok" target="_blank" rel="noreferrer">
                  <i className="bi bi-tiktok"></i>
                </a>
              </li>
              {/* <!-- youtube --> */}
              <li className="list-group-item">
                <a href="https://www.youtube.com/channel/UCySbQgIFV1HEnfEd0veOx0Q" className="youtube text-center" target="_blank" rel="noreferrer">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-3 text-light mt-5 sponsors">
            <h2 className="text-light footer-title">Sponsor</h2>
            <div className="row d-flex justify-content-center align-items-center">
              {sponsor.map((item) => (
                <div className="col-md-5 col-3 custom-col m-1" key={item.id}>
                  <img src={item.img} className="img img-item img-fluid" alt={item.alt} />
                </div>
              ))}
            </div>
          </div>

          {/* <!-- 2 --> */}
          <div className="col-md-3 text-light mt-5 quick-links">
            <h2 className="footer-title text-md-start ps-md-3">Quick Links</h2>
            <ul className="list-group">
              <li className="list-group-item text-start">
                <Link to="/ITDaysBandAkustik" className="band-akustik" onClick={scrollToTop}>
                  Band Akustik
                </Link>
              </li>
              <li className="list-group-item text-start">
                <Link to="/ITDaysShortMovie" className="short-movie" onClick={scrollToTop}>
                  Short Movie
                </Link>
              </li>
              <li className="list-group-item text-start">
                <Link to="/ITDaysValorant" className="valorant" onClick={scrollToTop}>
                  Valorant
                </Link>
              </li>
              <li className="list-group-item text-start">
                <Link to="/ITDaysMobileLegend" className="mobile-legend" onClick={scrollToTop}>
                  Mobile Legend
                </Link>
              </li>
              <li className="list-group-item text-start">
                <Link to="/ITDaysFutsal" className="futsal" onClick={scrollToTop}>
                  Futsal
                </Link>
              </li>
            </ul>
          </div>
          {/* <!-- 3 --> */}
          <div className="col-md-3 text-light mt-5 contact-info ">
            <h2 className="footer-title text-md-start ps-md-3">Contact Info</h2>
            <ul className="list-group">
              {/* <!-- whatsapp --> */}
              <li className="list-group-item text-start">
                <a href="https://api.whatsapp.com/send?phone=6282223811626" target="_blank" className="whatsapp" rel="noreferrer">
                  <i className="bi bi-whatsapp"></i>
                  <span> 0822-2381-1626</span>
                </a>
              </li>
              {/* <!-- email --> */}
              <li className="list-group-item text-start">
                <a href="mailto:itdaysusd2022@gmail.com" className="email" target="_blank" rel="noreferrer">
                  <i className="bi bi-envelope"></i>
                  <span>itdaysusd2022@gmail.com</span>
                </a>
              </li>
              {/* <!-- map --> */}
              <li className="list-group-item text-start">
                <a href="https://goo.gl/maps/QQTYam7VQ4P9yXRU9" target="_blank" className="map" rel="noreferrer">
                  <i className="bi bi-geo-alt"></i>
                  <span>Kampus 3, Jl. Paingan, Maguwoharjo, Depok, Sleman, Yogyakarta</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row text-center copyright mt-5">
          <span className="text-light bg-gradient p-2">&copy; COPYRIGHT 2022.itdaysusd2022.com</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
