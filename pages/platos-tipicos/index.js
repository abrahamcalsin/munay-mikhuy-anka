import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Link from "next/link";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const PlatosTipicos = () => {
  return (
    <MainLayout>
      <Head>
        <title>Platos Tipicos - Munay Mikhuy Anka</title>
      </Head>

      <div className="platos-tipicos-presentation">
        <div>
          <h1>Platos Típicos</h1>
        </div>
        <div className="social-media">
          <div></div>
          <a
            href="https://instagram.com/munaymikhuyanka?utm_medium=copy_link"
            className="social-media-icon"
            target="__blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/Munay-Mikhuy-Anka-108533731563552/"
            className="social-media-icon"
            target="__blank"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://bit.ly/3oDLyP6" className="social-media-icon" target="__blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      <div className="all-typical-dishes">
        <div className="container-responsive">
          <p className="description-section">TODOS LOS PLATOS TÍPICOS</p>

          <div className="typical-dishes-grid">
            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/chairo.png" alt="Chairo" />
              </div>
              <div>
                <h1>Chairo</h1>
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

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/pesque-de-quinua.png"
                  alt="Pesque de Quinua"
                />
              </div>
              <div>
                <h1>Pesque de Quinua</h1>
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

            <div className="typical-dish">
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

            <div className="typical-dish">
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

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/tostado-de-trigo.png"
                  alt="Tostado de Trigo"
                />
              </div>
              <div>
                <h1>Tostado de Trigo</h1>
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
                <Link href="/productos/tostado-de-trigo">
                  <a className="link-view-more">
                    Más sobre Tostado de Trigo{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/torta-de-quinua.png"
                  alt="Torta de Quinua"
                />
              </div>
              <div>
                <h1>Torta de Quinua</h1>
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
                <Link href="/productos/torta-de-quinua">
                  <a className="link-view-more">
                    Más sobre Torta de Quinua{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/togto.png" alt="Togto" />
              </div>
              <div>
                <h1>Togto</h1>
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
                <Link href="/productos/togto">
                  <a className="link-view-more">
                    Más sobre Togto{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/thimpo-de-trucha.png"
                  alt="Thimpo de Trucha"
                />
              </div>
              <div>
                <h1>Thimpo de Trucha</h1>
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
                <Link href="/productos/thimpo-de-trucha">
                  <a className="link-view-more">
                    Más sobre Thimpo de Trucha{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/thimpo-de-carachi.png"
                  alt="Thimpo de Carachi"
                />
              </div>
              <div>
                <h1>Thimpo de Carachi</h1>
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
                <Link href="/productos/thimpo-de-carachi">
                  <a className="link-view-more">
                    Más sobre Thimpo de Carachi{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/tarwi.png" alt="Tarwi" />
              </div>
              <div>
                <h1>Tarwi</h1>
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
                <Link href="/productos/tarwi">
                  <a className="link-view-more">
                    Más sobre Tarwi{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/sopa-de-quinua.png"
                  alt="Sopa de Quinua"
                />
              </div>
              <div>
                <h1>Sopa de Quinua</h1>
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
                <Link href="/productos/sopa-de-quinua">
                  <a className="link-view-more">
                    Más sobre Sopa de Quinua{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/soltero.png" alt="Soltero" />
              </div>
              <div>
                <h1>Soltero</h1>
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
                <Link href="/productos/soltero">
                  <a className="link-view-more">
                    Más sobre Soltero{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/pejerrey-frito.png"
                  alt="Pejerrey Frito"
                />
              </div>
              <div>
                <h1>Pejerrey Frito</h1>
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
                <Link href="/productos/pejerrey-frito">
                  <a className="link-view-more">
                    Más sobre Pejerrey Frito{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/mazamorra-de-quinua.png"
                  alt="Mazamorra de Quinua"
                />
              </div>
              <div>
                <h1>Mazamorra de Quinua</h1>
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
                <Link href="/productos/mazamorra-de-quinua">
                  <a className="link-view-more">
                    Más sobre Mazamorra de Quinua{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/quispiña.png" alt="Quispiña" />
              </div>
              <div>
                <h1>Quispiña</h1>
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
                <Link href="/productos/quispina">
                  <a className="link-view-more">
                    Más sobre {"Quispiña "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/kankacho-ayavireño.png"
                  alt="Kankacho Ayavireño"
                />
              </div>
              <div>
                <h1>Kankacho Ayavireño</h1>
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
                <Link href="/productos/kankacho-ayavireno">
                  <a className="link-view-more">
                    Más sobre Kankacho Ayavireño{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/jugo-de-quinua.png"
                  alt="Jugo de Quinua"
                />
              </div>
              <div>
                <h1>Jugo de Quinua</h1>
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
                <Link href="/productos/jugo-de-quinua">
                  <a className="link-view-more">
                    Más sobre Jugo de Quinua{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/ispi-frito.png" alt="Ispi Frito" />
              </div>
              <div>
                <h1>Ispi Frito</h1>
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
                <Link href="/productos/ispi-frito">
                  <a className="link-view-more">
                    Más sobre Ispi Frito{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img src="/images/platos-tipicos/huatia.png" alt="Huatia" />
              </div>
              <div>
                <h1>Huatia</h1>
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
                <Link href="/productos/huatia">
                  <a className="link-view-more">
                    Más sobre Huatia{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/chicharron-de-chancho.png"
                  alt="Chicharrón de Chancho"
                />
              </div>
              <div>
                <h1>Chicharrón de Chancho</h1>
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
                <Link href="/productos/chicharron-de-chancho">
                  <a className="link-view-more">
                    Más sobre Chicharrón de Chancho{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/agua-de-cebada.png"
                  alt="Agua de Cebada"
                />
              </div>
              <div>
                <h1>Agua de Cebada</h1>
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
                <Link href="/productos/agua-de-cebada">
                  <a className="link-view-more">
                    Más sobre Agua de Cebada{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/chupe-de-quinua.png"
                  alt="Chupe de Quinua"
                />
              </div>
              <div>
                <h1>Chupe de Quinua</h1>
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
                <Link href="/productos/chupe-de-quinua">
                  <a className="link-view-more">
                    Más sobre Chupe de Quinua{" "}
                    <span>
                      <FontAwesomeIcon icon={faLongArrowAltRight} />
                    </span>
                  </a>
                </Link>
              </div>
            </div>

            <div className="typical-dish">
              <div className="photo-typical-dish">
                <img
                  src="/images/platos-tipicos/sudado-de-trucha.png"
                  alt="Chupe de Quinua"
                />
              </div>
              <div>
                <h1>Sudado de Trucha</h1>
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
                <Link href="/productos/sudado-de-trucha">
                  <a className="link-view-more">
                    Más sobre Sudado de Trucha{" "}
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
    </MainLayout>
  );
};

export default PlatosTipicos;
