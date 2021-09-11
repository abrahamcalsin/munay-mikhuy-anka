import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const TostadoDeTrigo = () => {
  return (
    <MainLayout>
      <Head>
        <title>Tostado de Trigo - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/tostado-de-trigo.png"
        alt="Tostado de Trigo"
        titleProduct="Tostado de Trigo"
        classNameStarRating="tostado-de-trigo-star-rating"
        productDescription="Después del cosechado, el cereal es tostado, adquiriendo así su particular sabor a nuez ahumada. Este producto de trigo está repleto de Nutrientes y sirve como un sustituto muy saludable para otros cereales como el arroz, se suele acompañar con queso."
      />
    </MainLayout>
  );
};

export default TostadoDeTrigo;
