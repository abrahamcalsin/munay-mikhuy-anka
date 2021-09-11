import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const PesqueDeQuinua = () => {
  return (
    <MainLayout>
      <Head>
        <title>Pesque de Quinua - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/pesque-de-quinua.png"
        alt="Pesque de Quinua"
        titleProduct="Pesque de Quinua"
        classNameStarRating="pesque-de-quinua-star-rating"
        productDescription="El pesque de Quinua es un guiso originario de Perú, concretamente de la ciudad de Puno. Aqui este plato tiene una importancia como ningún otro, ya que se consume habitualmente. Además, para nosotros es importante degustarlo en la fecha del Viernes Santo de cada año por tradición de los puneños."
      />
    </MainLayout>
  );
};

export default PesqueDeQuinua;
