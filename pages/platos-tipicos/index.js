import Head from "next/dist/shared/lib/head";
import MainLayout from "../components/layouts";
import { Products } from "../components/products";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

      <div className="typical-dishes">
        <div className="container-responsive">
          <p className="description-section">TODOS LOS PLATOS TÍPICOS</p>

          <div className="typical-dishes-grid">
            <Products
              srcImageProduct="/images/platos-tipicos/chairo.png"
              altImage="Chairo"
              classNameStarRating="chairo-star-rating"
              titleProduct="Chairo"
              hrefProductPage="/productos/chairo"
              nameProduct="Chairo"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/pesque-de-quinua.png"
              altImage="Pesque de Quinua"
              classNameStarRating="pesque-de-quinua-star-rating"
              titleProduct="Pesque de Quinua"
              hrefProductPage="/productos/pesque-de-quinua"
              nameProduct="Pesque de Quinua"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/trucha-frita.png"
              altImage="Trucha Frita"
              classNameStarRating="trucha-frita-star-rating"
              titleProduct="Trucha Frita"
              hrefProductPage="/productos/trucha-frita"
              nameProduct="Trucha Frita"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/chicharrón-de-alpaca.png"
              altImage="Chicharrón de Alpaca"
              classNameStarRating="chicharron-de-alpaca-star-rating"
              titleProduct="Chicharrón de Alpaca"
              hrefProductPage="/productos/chicharron-de-alpaca"
              nameProduct="Chicharrón de Alpaca"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/tostado-de-trigo.png"
              altImage="Tostado de Trigo"
              classNameStarRating="tostado-de-trigo-star-rating"
              titleProduct="Tostado de Trigo"
              hrefProductPage="/productos/tostado-de-trigo"
              nameProduct="Tostado de Trigo"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/torta-de-quinua.png"
              altImage="Torta de Quinua"
              classNameStarRating="torta-de-quinua-star-rating"
              titleProduct="Torta de Quinua"
              hrefProductPage="/productos/torta-de-quinua"
              nameProduct="Torta de Quinua"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/togto.png"
              altImage="Togto"
              classNameStarRating="togto-star-rating"
              titleProduct="Togto"
              hrefProductPage="/productos/togto"
              nameProduct="Togto"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/thimpo-de-trucha.png"
              altImage="Thimpo de Trucha"
              classNameStarRating="thimpo-de-trucha-star-rating"
              titleProduct="Thimpo de Trucha"
              hrefProductPage="/productos/thimpo-de-trucha"
              nameProduct="Thimpo de Trucha"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/thimpo-de-carachi.png"
              altImage="Thimpo de Carachi"
              classNameStarRating="thimpo-de-carachi-star-rating"
              titleProduct="Thimpo de Carachi"
              hrefProductPage="/productos/thimpo-de-carachi"
              nameProduct="Thimpo de Carachi"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/tarwi.png"
              altImage="Tarwi"
              classNameStarRating="tarwi-star-rating"
              titleProduct="Tarwi"
              hrefProductPage="/productos/tarwi"
              nameProduct="Tarwi"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/sopa-de-quinua.png"
              altImage="Sopa de Quinua"
              classNameStarRating="sopa-de-quinua-star-rating"
              titleProduct="Sopa de Quinua"
              hrefProductPage="/productos/sopa-de-quinua"
              nameProduct="Sopa de Quinua"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/soltero.png"
              altImage="Soltero"
              classNameStarRating="soltero-star-rating"
              titleProduct="Soltero"
              hrefProductPage="/productos/soltero"
              nameProduct="Soltero"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/pejerrey-frito.png"
              altImage="Pejerrey Frito"
              classNameStarRating="pejerrey-frito-star-rating"
              titleProduct="Pejerrey Frito"
              hrefProductPage="/productos/pejerrey-frito"
              nameProduct="Pejerrey Frito"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/mazamorra-de-quinua.png"
              altImage="Mazamorra de Quinua"
              classNameStarRating="mazamorra-de-quinua-star-rating"
              titleProduct="Mazamorra de Quinua"
              hrefProductPage="/productos/mazamorra-de-quinua"
              nameProduct="Mazamorra de Quinua"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/quispiña.png"
              altImage="Quispiña"
              classNameStarRating="quispiña-star-rating"
              titleProduct="Quispiña"
              hrefProductPage="/productos/quispina"
              nameProduct="Quispiña"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/kankacho-ayavireño.png"
              altImage="Kankacho Ayavireño"
              classNameStarRating="kankacho-ayavireño-star-rating"
              titleProduct="Kankacho Ayavireño"
              hrefProductPage="/productos/kankacho-ayavireno"
              nameProduct="Kankacho Ayavireño"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/ispi-frito.png"
              altImage="Ispi Frito"
              classNameStarRating="ispi-frito-star-rating"
              titleProduct="Ispi Frito"
              hrefProductPage="/productos/ispi-frito"
              nameProduct="Ispi Frito"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/huatia.png"
              altImage="Huatia"
              classNameStarRating="huatia-star-rating"
              titleProduct="Huatia"
              hrefProductPage="/productos/huatia"
              nameProduct="Huatia"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/chupe-de-quinua.png"
              altImage="Chupe de Quinua"
              classNameStarRating="chupe-de-quinua-star-rating"
              titleProduct="Chupe de Quinua"
              hrefProductPage="/productos/chupe-de-quinua"
              nameProduct="Chupe de Quinua"
            />
            <Products
              srcImageProduct="/images/platos-tipicos/sudado-de-trucha.png"
              altImage="Sudado de Trucha"
              classNameStarRating="sudado-de-trucha-star-rating"
              titleProduct="Sudado de Trucha"
              hrefProductPage="/productos/sudado-de-trucha"
              nameProduct="Sudado de Trucha"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PlatosTipicos;
