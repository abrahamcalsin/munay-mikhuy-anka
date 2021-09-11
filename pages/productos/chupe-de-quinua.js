import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const ChupeDeQuinua = () => {
  return (
    <MainLayout>
      <Head>
        <title>Chupe de Quinua - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/chupe-de-quinua.png"
        alt="Chupe de Quinua"
        titleProduct="Chupe de Quinua"
        classNameStarRating="chupe-de-quinua-star-rating"
        productDescription="Es un plato de alto valor nutritivo que aporta proteínas, ácidos grasos insaturados y minerales. Favorece el tránsito intestinal, estimula el desarrollo de bacterias benéficas y ayuda a prevenir el cáncer de colon."
      />
    </MainLayout>
  );
};

export default ChupeDeQuinua;
