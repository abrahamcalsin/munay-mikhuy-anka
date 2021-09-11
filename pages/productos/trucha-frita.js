import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const TruchaFrita = () => {
  return (
    <MainLayout>
      <Head>
        <title>Trucha Frita - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/trucha-frita.png"
        alt="Trucha Frita"
        titleProduct="Trucha Frita"
        classNameStarRating="trucha-frita-star-rating"
        productDescription="La Trucha cuenta con un alto valor proteico que fortalece y acelera el crecimiento de los músculos. Contribuye, también, con el desarrollo del cerebro y previene enfermedades cardiacas y mentales, debido a su rico contenido en omega 3."
      />
    </MainLayout>
  );
};

export default TruchaFrita;
