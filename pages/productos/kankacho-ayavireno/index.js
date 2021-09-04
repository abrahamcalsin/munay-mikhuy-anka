import MainLayout from "../../components/layouts";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const KankachoAyavireño = () => {
  return (
    <MainLayout>
      <Head>
        <title>Producto - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>

      <div className="product-kankacho-ayavireño">
        <div className="container-responsive product-flex">
          <div>
            <img
              src="/images/platos-tipicos/kankacho-ayavireño.png"
              alt="Kankacho Ayavireño"
            />
          </div>
          <div>
            <h1>Kankacho Ayavireño</h1>
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
            <p>
              El Kankacho Ayavireño es un plato típico que no puede faltar en las fiestas
              de Puno. Para su preparación se toma a un lechón o un cordero y se macera
              con aceite, ajo, ají, limón y comino un día antes de cocinarlo.
            </p>
            <a
              href="https://bit.ly/3oDLyP6"
              className="order-link"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-whatsapp-icon">
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
              HAZ TU PEDIDO VÍA WHATSAPP{" "}
              <span>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default KankachoAyavireño;
