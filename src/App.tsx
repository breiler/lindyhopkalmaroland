import { Carousel, Col, Container, Row } from "react-bootstrap";
import { PuffOne } from "./components/PuffOne";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Header } from "./Header";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Container className="flex-grow-1 my-4">
        <Row>
          <Col md={5} className="d-none d-md-block">
            <PuffOne
              title={
                <>
                  Nybörjarkurs
                  <br />3 september 2025
                </>
              }
              content={
                <>
                  3 September
                  <br />
                  17:20 - 18:20
                </>
              }
            />
            <PuffOne
              title={
                <>
                  Fortsättningskurs
                  <br />
                  15 oktober 2025
                </>
              }
              content={
                <>
                  15 oktober
                  <br />
                  17:20 - 18:20
                </>
              }
            />{" "}
          </Col>
          <Col sm={12} md={7}>
            <div style={{ position: "relative", paddingBottom: "2em" }}>
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage: "url('/assets/contentbox.svg')",
                  backgroundSize: "100% auto",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "top center",
                  zIndex: 0,
                }}
              />

              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: "2rem 2.3rem 2rem 1.5rem",
                  height: "100%",
                  color: "#412f21",
                }}
              >
                <h3>Lindy Hop Kalmar Öland</h3>

                <Carousel style={{ borderRadius: "12px", overflow: "hidden" }}>
                  <Carousel.Item
                    interval={5000}
                    style={{
                      height: "292px",
                      backgroundImage: "url(/assets/dance1.jpg)",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100%",
                      overflow: "hidden",
                    }}
                  ></Carousel.Item>
                  <Carousel.Item
                    interval={5000}
                    style={{
                      height: "292px",
                      backgroundImage: "url(/assets/dance2.jpg)",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100%",
                      overflow: "hidden",
                    }}
                  ></Carousel.Item>
                </Carousel>

                <div className="social">
                  <a
                    href="https://www.facebook.com/groups/114704406612988"
                    title="Facebook"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://www.instagram.com/lindyhopkalmaroland/"
                    title="Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a href="mailto:joacim.breiler@gmail.com" title="E-post">
                    <MdEmail />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
