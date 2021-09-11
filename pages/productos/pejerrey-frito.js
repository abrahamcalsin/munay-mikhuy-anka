import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const PejerreyFrito = () => {
  return (
    <MainLayout>
      <Head>
        <title>Pejerrey Frito - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/pejerrey-frito.png"
        alt="Pejerrey Frito"
        titleProduct="Pejerrey Frito"
        classNameStarRating="pejerrey-frito-star-rating"
        productDescription="Pejerrey frito, es un plato típico de pescado rebozado. Primero pasaremos el pejerrey por harina, luego por el huevo y finalmente por el pan rallado. De esta forma por fuera los peces quedarán crocantes y por dentro tiernos."
      />
    </MainLayout>
  );
};

export default PejerreyFrito;
