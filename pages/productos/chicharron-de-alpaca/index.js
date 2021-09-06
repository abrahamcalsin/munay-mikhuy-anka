import MainLayout from "../../components/layouts";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ChicharronDeAlpaca = () => {
  return (
    <MainLayout>
      <Head>
        <title>Producto - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>

      <div className="product-chicharron-de-alpaca">
        <div className="container-responsive product-flex">
          <div>
            <img
              src="/images/platos-tipicos/chicharrón-de-alpaca.png"
              alt="Chicharrón de Alpaca"
            />
          </div>
          <div>
            <h1>Chicharrón de Alpaca</h1>
            <div className="chicharron-de-alpaca-star-rating">
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
              Nutritivo guiso puneño. Primero se cocina la carne hasta que se consuma el
              agua, luego se dora con la misma grasa. Se sirve con chuño, papa y maíz
              serrano tostado (cancha serrana). A veces se sirve con salsa criolla. La
              carne de alpaca es reconocida como uno de los alimentos más nutritivos, ya
              que tiene 22% de proteínas, 56 miligramos de colesterol por cada 100 gramos
              de carne.
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

export default ChicharronDeAlpaca;
