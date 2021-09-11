import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const IspiFrito = () => {
  return (
    <MainLayout>
      <Head>
        <title>Ispi Frito - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/ispi-frito.png"
        alt="Ispi Frito"
        titleProduct="Ispi Frito"
        classNameStarRating="ispi-frito-star-rating"
        productDescription="El Ispi es un Pez pequeño comestible del Lago Titicaca. Tiene un valor nutritivo excelente, proporciona proteínas de gran calidad y una amplia variedad de vitaminas y minerales, como las vitaminas A y D, fósforo, magnesio y selenio."
      />
    </MainLayout>
  );
};

export default IspiFrito;
