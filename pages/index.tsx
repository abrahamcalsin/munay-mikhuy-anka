import * as React from "react"
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/dist/client/link";
import Head from "next/dist/shared/lib/head";

import MainLayout from "~/components/layouts"

import { Products } from "../src/components/products";

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
          <a href="#" className="social-media-icon" target="__blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="social-media-icon" target="__blank">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" className="social-media-icon" target="__blank">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
      </div>

      <div className="logo-and-restaurant-description">
        <div className="container-responsive flex-logo-and-description">
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
        <div className="container-responsive grid-dish-description">
          <div className="dish-description">
            <div className="photo-typical-dish">
              <img src="/images/platos-tipicos/ispi-frito.png" alt="Ispi Frito" />
            </div>
            <div>
              <h1>Ispi Frito</h1>
              <p>
                El Ispi es un Pez pequeño comestible del Lago Titicaca. Tiene un valor
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
                Soltero o el solterito es una ensalada Peruana, contiene habas cocidas,
                cebolla, tomate, queso fresco, papas, choclo cocidos, rocoto y perejil
                picado.
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

      <div className="typical-dishes">
        <div className="container-responsive">
          <div className="section-title">
            <h1>PLATOS TÍPICOS DESTACADOS</h1>
          </div>
          <div className="typical-dishes-grid">
            <Products
              srcImageProduct="/images/platos-tipicos/chairo.png"
              altImage="Chairo"
              titleProduct="Chairo"
              classNameStarRating="chairo-star-rating"
              hrefProductPage="/productos/chairo"
              nameProduct="Chairo"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/pesque-de-quinua.png"
              altImage="Pesque de Quinua"
              titleProduct="Pesque de Quinua"
              classNameStarRating="pesque-de-quinua-star-rating"
              hrefProductPage="/productos/pesque-de-quinua"
              nameProduct="Pesque de Quinua"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/trucha-frita.png"
              altImage="Trucha Frita"
              titleProduct="Trucha Frita"
              classNameStarRating="trucha-frita-star-rating"
              hrefProductPage="/productos/trucha-frita"
              nameProduct="Trucha Frita"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/chicharrón-de-alpaca.png"
              altImage="Chicharrón de Alpaca"
              titleProduct="Chicharrón de Alpaca"
              classNameStarRating="chicharron-de-alpaca-star-rating"
              hrefProductPage="/productos/chicharron-de-alpaca"
              nameProduct="Chicharrón de Alpaca"
            />
          </div>
        </div>
      </div>

      <div className="restaurant-phrase">
        <blockquote className="quote">
          <span>{' " '}</span>
          Nuestra diversidad gastronómica, en tus manos.
          <p>— Munay Mikhuy Anka —</p>
        </blockquote>
      </div>

      <div className="famous-quotes">
        <div className="container-responsive grid-famous-quote">
          <blockquote className="quote">
            <span>{' " '}</span>
            La excelencia está en la diversidad y el modo de progresar es conocer y
            comparar las diversidades de productos, culturas y técnicas.
            <p>— Alain Ducasse</p>
          </blockquote>
          <blockquote className="quote">
            <span>{' " '}</span>
            La cocina es un lenguaje mediante el cual se puede expresar armonía,
            felicidad, belleza, poesía, complejidad, magia, humor, provocación, cultura
            <p>— Ferrán Adrià</p>
          </blockquote>
          <blockquote className="quote">
            <span>{' " '}</span>
            Cuando los clientes conocen las técnicas precisas para hacer alta cocina
            valoran y disfrutan mucho más los platos que les servimos
            <p>— Pedro Subijana</p>
          </blockquote>
        </div>
      </div>

      <div className="mini-gallery">
        <div>
          <img src="/images/mirador-condor-puno.jpg" alt="Mirador condor puno" />
        </div>
        <div>
          <img src="/images/plaza-de-armas-puno.jpg" alt="Plaza de armas puno" />
        </div>
        <div>
          <img src="/images/los-uros-puno.jpg" alt="Los uros puno" />
        </div>
      </div>
    </MainLayout>
  );
}
