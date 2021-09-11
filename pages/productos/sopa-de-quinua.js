import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const SopaDeQuinua = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sopa de Quinua - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/sopa-de-quinua.png"
        alt="Sopa de Quinua"
        titleProduct="Sopa de Quinua"
        classNameStarRating="sopa-de-quinua-star-rating"
        productDescription="Posee vitaminas C, E, B1, B2, niacina y fósforo. Rica en aminoácidos que favorecen el desarrollo cerebral. Gran contenido en omega 6. Es fuente de fibra soluble e insoluble."
      />
    </MainLayout>
  );
};

export default SopaDeQuinua;
