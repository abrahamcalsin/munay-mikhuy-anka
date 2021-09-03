import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Link from "next/link";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const CulturaPuneña = () => {
  return (
    <MainLayout>
      <Head>
        <title>Cultura Puneña - Munay Mikhuy Anka</title>
      </Head>

      <div className="cultura-puneña-presentation">
        <div>
          <h1>Cultura Puneña</h1>
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

      <div className="puno-history">
        <div className="container-responsive">
          <div className="flex-history-and-picture">
            <div className="history">
              <h1>HISTORIA DE PUNO</h1>
              <p>
                Puno fue creado por el reglamento de elecciones del 26 de abril de 1822,
                durante el gobierno del generalísimo Don José de San Martín. La capital
                del departamento de Puno fue fundada por los hermanos Salcedo en mayo 1657
                con el nombre de San Carlos de Puno está situado en el centro de la gran
                meseta del Collao. En la parte sureste del territorio nacional sus Límites
                son: Norte: Madre de Dios Este: Bolivia Sur: Tacna y Bolivia Oeste: Cusco,
                Arequipa y Moquegua
              </p>
            </div>
            <div>
              <img src="/images/puno-antes.jpg" alt="Puno - Antes" />
            </div>
          </div>
          <div className="photography-of-puno-after">
            <img src="/images/puno-despues.jpg" alt="Puno - Despues" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CulturaPuneña;
