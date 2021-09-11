import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const TortaDeQuinua = () => {
  return (
    <MainLayout>
      <Head>
        <title>Torta de Quinua - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/torta-de-quinua.png"
        alt="Torta de Quinua"
        titleProduct="Torta de Quinua"
        classNameStarRating="torta-de-quinua-star-rating"
        productDescription="El Pastel o Torta de Quinua tiene los beneficios del cacao más la quinua, un superalimento lleno de nutrientes, proteínas, fibra y sin gluten, lo que hace de este pastel un postre muy saludable."
      />
    </MainLayout>
  );
};

export default TortaDeQuinua;
