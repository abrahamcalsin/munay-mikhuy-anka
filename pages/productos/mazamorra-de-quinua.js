import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const MazamorraDeQuinua = () => {
  return (
    <MainLayout>
      <Head>
        <title>Mazamorra de Quinua - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/mazamorra-de-quinua.png"
        alt="Mazamorra de Quinua"
        titleProduct="Mazamorra de Quinua"
        classNameStarRating="mazamorra-de-quinua-star-rating"
        productDescription="La mazmorra se hace a base de quinua, y estos on molidos en molinos de piedra y a mano, nos brinda su hariana que nos sirve para preparar la muy conocida mazamorra de quinua, la que fortifica los huesos, este plato se consume ya sea con leche fresca, o solo pura mazamorra o con, cañihuaco molida."
      />
    </MainLayout>
  );
};

export default MazamorraDeQuinua;
