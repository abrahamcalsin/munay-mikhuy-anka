import MainLayout from "../components/layouts/index";
import Head from "next/dist/shared/lib/head";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHotel,
  faCocktail,
  faBirthdayCake,
  faTheaterMasks,
  faPaw,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

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
                <a
                  href="https://www.facebook.com/Munay-Mikhuy-Anka-108533731563552/"
                  target="__blank"
                  rel="noreferrer"
                >
                  <span>
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </span>{" "}
                  Facebook
                </a>
                <a
                  href="https://instagram.com/munaymikhuyanka?utm_medium=copy_link"
                  target="__blank"
                  rel="noreferrer"
                >
                  <span>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>{" "}
                  Instagram
                </a>
                <a href="https://bit.ly/3oDLyP6" target="__blank" rel="noreferrer">
                  <span>
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </span>{" "}
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="more-services">
            <h1>MÁS SERVICIOS QUE OFRECEMOS</h1>
            <div className="grid-more-services">
              <div>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCalendarCheck} />
                  </span>
                  Reservaciones
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faHotel} />
                  </span>
                  Hospedaje
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCocktail} />
                  </span>
                  Bar
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faBirthdayCake} />
                  </span>
                  Pastelería
                </p>
              </div>
              <div>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faTheaterMasks} />
                  </span>
                  Presentación de danzas - Teatro
                </p>
              </div>
              <div>
                <p>Preparación de platos a la vista</p>
              </div>
              <div>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faPaw} />
                  </span>
                  Sección para mascotas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SobreNosotros;
