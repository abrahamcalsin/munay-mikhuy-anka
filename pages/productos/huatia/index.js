import MainLayout from "../../components/layouts";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Huatia = () => {
  return (
    <MainLayout>
      <Head>
        <title>Producto - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>

      <div className="product-huatia">
        <div className="container-responsive product-flex">
          <div>
            <img src="/images/platos-tipicos/huatia.png" alt="Huatia" />
          </div>
          <div>
            <h1>Huatia</h1>
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
              Huatía o Pachamanca, este plato es preparado sobre todo en la época de las
              cosechas, se prepara en el campo, se prepara en un horno de tierra, primero
              se cava un hoyo y se colocan piedras que serán calentadas a grandes
              temperaturas a base de leña. Luego se colocan las papas, yucas, etc.
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

export default Huatia;
