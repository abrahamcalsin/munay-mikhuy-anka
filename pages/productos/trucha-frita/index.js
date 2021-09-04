import MainLayout from "../../components/layouts";
import Link from "next/dist/client/link";
import Head from "next/dist/shared/lib/head";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const TruchaFrita = () => {
  return (
    <MainLayout>
      <Head>
        <title>Producto - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>

      <div className="product-trucha-frita">
        <div className="container-responsive product-flex">
          <div>
            <img src="/images/platos-tipicos/trucha-frita.png" />
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
            <p>
              La Trucha cuenta con un alto valor proteico que fortalece y acelera el
              crecimiento de los músculos. Contribuye, también, con el desarrollo del
              cerebro y previene enfermedades cardiacas y mentales, debido a su rico
              contenido en omega 3.
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

export default TruchaFrita;
