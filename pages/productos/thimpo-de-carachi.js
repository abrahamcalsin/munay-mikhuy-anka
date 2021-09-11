import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const ThimpoDeCarachi = () => {
  return (
    <MainLayout>
      <Head>
        <title>Thimpo de Carachi - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/thimpo-de-carachi.png"
        alt="Thimpo de Carachi"
        titleProduct="Thimpo de Carachi"
        classNameStarRating="thimpo-de-carachi-star-rating"
        productDescription="Se prepara a base de pescado Carachi, pescado típico del Lago Titicaca. El carachi tiene alto contenido de fósforo. Se sirve con papas y chuños enteros, muña, cebolla, ajo y ají."
      />
    </MainLayout>
  );
};

export default ThimpoDeCarachi;
