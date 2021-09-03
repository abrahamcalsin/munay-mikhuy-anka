import MainLayout from "./components/layouts";
import Head from "next/dist/shared/lib/head";
import Image from "next/image";
import Link from "next/dist/client/link";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Munay Mikhuy Anka</title>
      </Head>

      <div className="home-presentation">
        <div className="text-presentation">
          <h1>Puno</h1>
          <p>Capital Folklórica</p>
        </div>
        <div className="social-media">
          <div></div>
          <a
            href="https://instagram.com/munaymikhuyanka?utm_medium=copy_link"
            className="social-media-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/Munay-Mikhuy-Anka-108533731563552/"
            className="social-media-icon"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://bit.ly/3oDLyP6" className="social-media-icon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      <div className="logo-and-restaurant-description">
        <div className="container-responsive">
          <div className="logo-on-box">
            <img src="/images/logo-munay-mikhuy-anka.png" alt="Munay Mikhuy Anka" />
          </div>
          <div className="description">
            <h1>Munay Mikhuy Anka</h1>
            <p>
              Restaurante de alta calidad, con una buena reputacion frente al cliente,
              ofrecemos Platos Típicos de Puno. Haciendo que estas no se pierdan y se
              preserven para que las nuevas generaciones sepan nuestra cultura y
              gastronomia puneña.
            </p>
            <Link href="/platos-tipicos">
              <a className="view-typical-dishes">
                Ver Platos Típicos{" "}
                <span>
                  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="dishes-description">
        <div className="container-responsive">
          <div className="dish-description">
            <div className="photo-typical-dish">
              <img src="/images/platos-tipicos/ispi-frito.png" alt="Ispi Frito" />
            </div>
            <div>
              <h1>Ispi Frito</h1>
              <p>
                El ispi es un Pez pequeño comestible del lago Titicaca. Tiene un valor
                nutritivo excelente, proporciona proteínas de gran calidad y una amplia
                variedad de vitaminas y minerales, como las vitaminas A y D, fósforo,
                magnesio y selenio.
              </p>
            </div>
          </div>
          <div className="dish-description">
            <div className="photo-typical-dish">
              <img src="/images/platos-tipicos/soltero.png" alt="El Solterito" />
            </div>
            <div>
              <h1>El Solterito</h1>
              <p>
                El solterito es una ensalada peruana contiene solo habas cocidas, cebolla,
                tomate, queso fresco, papas y choclo cocidos, rocoto y perejil picado.
              </p>
            </div>
          </div>
          <div className="dish-description">
            <div className="photo-typical-dish">
              <img src="/images/platos-tipicos/sopa-de-quinua.png" alt="Sopa de Quinua" />
            </div>
            <div>
              <h1>Sopa de Qhinua</h1>
              <p>
                Posee vitaminas C, E, B1, B2, niacina y fósforo. Rica en aminoácidos que
                favorecen el desarrollo cerebral. Gran contenido en omega 6. Es fuente de
                fibra soluble e insoluble.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="most-important-dishes">
        <div className="container-responsive">
          <div className="section-title">
            <h1>PLATOS TÍPICOS DESTACADOS</h1>
          </div>

          <div className="grid-of-featured-dish">
            <div className="featured-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/chairo.png" alt="Chairo" />
              </div>
              <div>
                <h1>Chairo</h1>
                <div className="chairo-star-rating">
                  <p>
                    <span>Valoración:</span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </p>
                </div>
                <Link href="/productos/chairo">
                  <a className="link-view-more">
                    Más sobre Chairo{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="featured-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/pesque-de-quinua.png"
                  alt="Pesque de Quinua"
                />
              </div>
              <div>
                <h1>Pesque de Quinua</h1>
                <div className="pesque-star-rating">
                  <p>
                    <span>Valoración:</span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </p>
                </div>
                <Link href="/productos/pesque-de-quinua">
                  <a className="link-view-more">
                    Más sobre Pesque de Quinua{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="featured-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/trucha-frita.png" alt="Trucha Frita" />
              </div>
              <div>
                <h1>Trucha Frita</h1>
                <div className="fried-trout-star-rating">
                  <p>
                    <span>Valoración:</span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </p>
                </div>
                <Link href="/productos/trucha-frita">
                  <a className="link-view-more">
                    Más sobre Trucha Frita{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="featured-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/chicharrón-de-alpaca.png"
                  alt="Chicharrón de Alpaca"
                />
              </div>
              <div>
                <h1>Chicharrón de Alpaca</h1>
                <div className="chicharron-star-rating">
                  <p>
                    <span>Valoración:</span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                    <span className="star-icon">
                      <FontAwesomeIcon icon={faStar} />
                    </span>
                  </p>
                </div>
                <Link href="/productos/chicharron-de-alpaca">
                  <a className="link-view-more">
                    Más sobre Chicharrón de Alpaca{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="restaurant-phrase">
        <blockquote className="quote">
          <span>{' " '}</span>
          Nuestra diversidad gastronómica, en tus manos.
          <p>— Munay Mikhuy Anka</p>
        </blockquote>
      </div>

      <div className="famous-quotes">
        <div className="container-responsive">
          <blockquote className="quote">
            <span>{' " '}</span>
            La excelencia está en la diversidad y el modo de progresar es conocer y
            comparar las diversidades de productos, culturas y técnicas.
            <p>— Ferrán Adrià</p>
          </blockquote>
          <blockquote className="quote">
            <span>{' " '}</span>
            La cocina es un lenguaje mediante el cual se puede expresar armonía,
            felicidad, belleza, poesía, complejidad, magia, humor, provocación, cultura
            <p>— Pedro Subijana</p>
          </blockquote>
          <blockquote className="quote">
            <span>{' " '}</span>
            Cuando los clientes conocen las técnicas precisas para hacer alta cocina
            valoran y disfrutan mucho más los platos que les servimos
            <p>— Gastón Acurio</p>
          </blockquote>
        </div>
      </div>

      <div className="mini-gallery">
        <div>
          <img src="/images/mirador-condor-puno.jpg" />
        </div>
        <div>
          <img src="/images/plaza-de-armas-puno.jpg" />
        </div>
        <div>
          <img src="/images/los-uros-puno.jpg" />
        </div>
      </div>
    </MainLayout>
  );
}
