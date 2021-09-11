import MainLayout from "../components/layouts/index";
import Head from "next/dist/shared/lib/head";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const SobreNosotros = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sobre Nosotros - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>

      <div className="about-us">
        <div className="container-responsive">
          <div className="desk-flex-about-us">
            <div className="logo-on-box">
              <img src="/images/logo-munay-mikhuy-anka.png" alt="Munay Mikhuy Anka" />
            </div>
            <div className="description-about-us">
              <h1>Sobre Nosotros</h1>
              <p>
                <span>Munay Mikhuy Anka</span> es un restaurante de alta calidad, con una
                buena reputación frente al cliente, ofrecemos platos típicos de Puno,
                haciendo que estás no se pierdan y se preserven para que las siguientes
                generaciones sepan nuestra cultura y gastronomía puneña. De la misma forma
                nos dedicamos a promover el cuidado de la salud, ya que en efecto se usa
                alimentos sumamente naturales, sanos y nutritivos.
              </p>
              <div>
                <a href="#" target="__blank" rel="noreferrer">
                  <span>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </span>{" "}
                  Facebook
                </a>
                <a href="#" target="__blank" rel="noreferrer">
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>{" "}
                  Instagram
                </a>
                <a href="#" target="__blank" rel="noreferrer">
                  <span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>{" "}
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SobreNosotros;
