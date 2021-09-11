import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const Togto = () => {
  return (
    <MainLayout>
      <Head>
        <title>Togto - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/togto.png"
        alt="Togto"
        titleProduct="Togto"
        classNameStarRating="togto-star-rating"
        productDescription="Hecho principalmente a base de harina de trigo, una especie de pan casero sin levadura, con agua y alguna variante, frito en aceite, manteca si así lo prefiere."
      />
    </MainLayout>
  );
};

export default Togto;
