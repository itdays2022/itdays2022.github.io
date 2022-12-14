import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CompetitionInternal } from "../../../Data";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../registrasi.css";

function Internal() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <section className=" registrasi internal-registration">
        <Container>
          <h1 className="title pb-5">Internal</h1>
          <Row xs={1} md={2} lg={3} className="g-5 justify-content-center">
            {CompetitionInternal.map((item) => (
              <Col key={item.id}>
                <Card className="custom-card">
                  <Card.Img variant="top" src={item.img} className="img-fluid" />
                  <Card.Body className="justify-content-center align-items-center d-flex flex-column">
                    <Card.Title className="title text-center">{item.title}</Card.Title>
                    <Link to={item.path} className="button text-center" onClick={scrollToTop}>{`Daftar ${item.title}`}</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Internal;
