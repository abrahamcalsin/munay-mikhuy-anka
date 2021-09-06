import MainLayout from "../../components/layouts";
import Head from "next/dist/shared/lib/head";
import Link from "next/dist/client/link";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const Quispiña = () => {
  return (
    <MainLayout>
      <Head>
        <title>Producto - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>

      <div className="product-quispiña">
        <div className="container-responsive product-flex">
          <div>
            <img src="/images/platos-tipicos/quispiña.png" alt="Quispiña" />
          </div>
          <div>
            <h1>Quispiña</h1>
            <div className="quispiña-rating">
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
              La quispiña es una especie de galleta húmeda o panecillo pequeño elaborada
              con masa de harina de quinua con diferentes niveles de molido: las hay de
              molido más menudo y más grueso. Las poblaciones del altiplano llevan
              cultivando la quinua tradicionalmente, de modo que existen muchos platillos
              derivados entre los aimaras, chipayas, quechuas y otras naciones
              precolombinas, entre ellos se halla el {"pesk'e,"} la quispiña, buñuelos de
              quinua, pito de quinua y otros. La quispiña se consumía como merienda
              durante la época de cosecha.
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

export default Quispiña;
