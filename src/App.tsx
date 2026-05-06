import { Carousel, Col, Container, Row } from "react-bootstrap";
import { FaFacebook, FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Header } from "./Header";
import Calendar from "./components/Calendar";
import { MD_WIDTH, useWindowWidth } from "./hooks/useWindowWidth";
import "./App.scss";

const pageDescription =
  "Vi erbjuder danskurser och socialdanser i Lindy Hop - en afroamerikansk swingdans med rötterna i 30-talets Harlem, New York. Kom och dansa med oss!";
const pageKeywords =
  "Lindy Hop, Lindyhop, Kalmar, Öland, Kurs, Dans, Jazz, Swing";

function App() {
  const width = useWindowWidth();

  return (
    <div className="d-flex flex-column min-vh-100">
      <meta name="keywords" content={pageKeywords} />
      <meta name="description" content={pageDescription} />
      <Header />
      <Container className="flex-grow-1 content">
        <Row>
          {width >= MD_WIDTH && (
            <Col md={5} style={{ paddingRight: "2em" }}>
              <Calendar />
            </Col>
          )}
          <Col sm={12} md={7}>
            <main className="main">
              <section>
                <Carousel style={{ borderRadius: "10px", overflow: "hidden" }}>
                  <Carousel.Item interval={8000}>
                    <video
                      src="/assets/shimsham.web.mp4"
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
                  <Carousel.Item
                    interval={6000}
                    style={{
                      height: "292px",
                      backgroundImage: "url(/assets/social1.jpg)",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "10px",
                    }}
                  ></Carousel.Item>
                  <Carousel.Item interval={8000}>
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
                  <Carousel.Item
                    interval={6000}
                    style={{
                      height: "292px",
                      backgroundImage: "url(/assets/beach.jpg)",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "10px",
                    }}
                  ></Carousel.Item>
                </Carousel>
                <h2>Om föreningen</h2>

                <p>
                  Vi är en idéell kulturförening vars mål är att berika
                  människors liv genom att främja intresset för Lindy Hop - en
                  lekfull afroamerikansk swingdans med rötterna i 30-talets
                  Harlem, New York. Det gör vi genom att anordna kurser och
                  socialdanser i Kalmar och på Öland.
                </p>
                <p>
                  Alla våra intäkter går till föreningens verksamhet och täcker
                  kostnader för de lokaler vi hyr av Kalmar kommun samt arvoden
                  till musiker som spelar på våra socialdanser.
                </p>
                <p>
                  <a href="assets/docs/stadgar.pdf" target="_blank">
                    Läs våra stadgar
                  </a>
                </p>

                <h2>Lärare</h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: width >= MD_WIDTH ? "row" : "column",
                    alignItems: "center",
                    gap: "2em",
                    marginBottom: "1em",
                  }}
                >
                  <p style={{ flex: 1, margin: 0 }}>
                    Vi som startade föreningen och för tillfället är lärare på
                    våra kurser heter Camilla Breiler och Joacim Breiler. Vi har
                    dansat Lindy Hop sedan 2011 respektive 2008 och träffades
                    genom dansen i Stockholm.
                  </p>
                  <img
                    src="/assets/presentation.jpg"
                    style={{
                      flexShrink: 0,
                      width: "180px",
                      height: "180px",
                      objectFit: "cover",
                      display: "block",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  />
                </div>
                <p>
                  Där, och på Herräng dance camp som vi besökte många år, hade
                  vi förmånen att lära oss dansen av några av de bästa dansarna
                  i Sverige och i världen. I dag bor vi i Färjestaden och
                  undervisar i Lindy Hop sedan 2025.
                </p>

                <h2>Kontakta oss</h2>

                <p>
                  Har du frågor om våra kurser eller vill du hjälpa till i
                  föreningen?&nbsp;
                  <a href="mailto:joacim.breiler@gmail.com" title="E-post">
                    Mejla oss!
                  </a>
                </p>
                <p>
                  Vill du ge oss ett ekonomiskt bidrag? <br />
                  Swisha till <b>123-552 53 65</b>
                </p>
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
