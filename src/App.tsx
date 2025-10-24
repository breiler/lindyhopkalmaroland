import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Header } from "./Header";
import Calendar from "./components/Calendar";
import { MD_WIDTH, useWindowWidth } from "./hooks/useWindowWidth";
import "./App.scss";

const pageDescription =
  "Vi är ett gäng som håller kurser och socialdanser i Lindy Hop för att skapa mötesplatser, ha kul och utvecklas tillsammans.";
const pageKeywords = "Lindy Hop, Lindyhop, Kalmar, Öland, Kurser";

function App() {
  const width = useWindowWidth();

  return (
    <div className="d-flex flex-column min-vh-100">
      <meta name="keywords" content={pageKeywords} />
      <meta name="description" content={pageDescription} />
      <Header />
      <Container className="flex-grow-1 my-4">
        <Row>
          {width >= MD_WIDTH && (
            <Col md={5} style={{ paddingRight: "2em" }}>
              <Calendar />
            </Col>
          )}
          <Col sm={12} md={7}>
            <main className="main">
              <section>
                <p>
                  Vi är ett gäng som håller kurser och socialdanser i Lindy Hop
                  för att skapa mötesplatser, ha kul och utvecklas tillsammans.
                </p>
                <p> Kom och dansa med oss!</p>

                <Carousel style={{ borderRadius: "10px", overflow: "hidden" }}>
                  <Carousel.Item
                    interval={6000}
                    style={{
                      height: "292px",
                      backgroundImage: "url(/assets/dance1.jpg)",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "10px",
                    }}
                  ></Carousel.Item>
                  <Carousel.Item
                    interval={6000}
                    style={{
                      height: "292px",
                      backgroundImage: "url(/assets/dance2.jpg)",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "10px",
                    }}
                  ></Carousel.Item>

                  <Carousel.Item interval={20000}>
                    <video
                      src="/assets/dance1.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      style={{
                        width: "100%",
                        height: "292px",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </Carousel.Item>
                </Carousel>
              </section>

              <section className="social">
                <a
                  href="https://www.facebook.com/groups/114704406612988"
                  title="Facebook"
                >
                  <FaFacebook />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/lindyhopkalmaroland/"
                  title="Instagram"
                >
                  <FaInstagram />
                  <span>Instagram</span>
                </a>
                <a href="mailto:joacim.breiler@gmail.com" title="E-post">
                  <MdEmail />
                  <span>E-post</span>
                </a>
                <a
                  href="https://open.spotify.com/playlist/6jWWl3E4OkQBIDTD5extAB?si=sYZSwW9MQUmVaYunTUzeNw"
                  title="Spellista på Spotify"
                >
                  <FaSpotify />
                  <span>Spotify</span>
                </a>
              </section>
            </main>
          </Col>

          {width < MD_WIDTH && (
            <Col xs={12} style={{ marginTop: "3em" }}>
              <Calendar />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default App;
