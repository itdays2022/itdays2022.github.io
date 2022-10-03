import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ITDaysInternalFunGames } from "../../Data";

import "../registrasi-eksternal-component/test.css";
import CountDownTimer from "../../components/CountDownTimer";

function Pendaftaran() {
  return (
    <main id="main">
      {ITDaysInternalFunGames.map((item) => (
        <section className={`ITDaysRegistrasi ${item.title}`} key={item.id}>
          <Container>
            <Row className="g-5 d-flex flex-column flex-md-row">
              <Col className="left-side">
                <Row className="container-left-side">
                  <Col className="SK">
                    <div className="box box-SK g-5">
                      <h1 className="title pb-4">{`Syarat dan Ketentuan ${item.title}`}</h1>
                      <ul>
                        {item.syarat.map((syarat, index) => (
                          <li className="description" key={index + 1}>
                            {syarat}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col className="right-side">
                <Row className="container-right-side">
                  <Col className="link-pendaftaran">
                    <div className="box box-link-pendaftaran d-flex flex-column justify-content-center align-items-center">
                      <h1 className="title pt-4">{item.title}</h1>
                      <div className="image">
                        <img src={item.img} className="img img-item img-fluid w-100 h-100" alt={item.title} />
                      </div>
                      <div className="countdown-timer text-light d-flex justify-content-center">
                        <CountDownTimer time="Oct 10, 2022 23:59:00" />
                      </div>
                      <div className="button-daftar mt-5 mb-5">
                        <a href={item.path} target="_blank" rel="noopener noreferrer" className="button btn-daftar">
                          Daftar
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
    </main>
  );
}

export default Pendaftaran;
