import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const ChicharrónDeAlpaca = () => {
  return (
    <MainLayout>
      <Head>
        <title>Chicharrón de Alpaca - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/chicharrón-de-alpaca.png"
        alt="Chicharrón de Alpaca"
        titleProduct="Chicharrón de Alpaca"
        classNameStarRating="chicharron-de-alpaca-star-rating"
        productDescription="Nutritivo guiso puneño. Primero se cocina la carne hasta que se consuma el agua, luego se dora con la misma grasa. Se sirve con chuño, papa y maíz serrano tostado (cancha serrana). A veces se sirve con salsa criolla. La carne de alpaca es reconocida como uno de los alimentos más nutritivos, ya que tiene 22% de proteínas, 56 miligramos de colesterol por cada 100 gramos de carne."
      />
    </MainLayout>
  );
};

export default ChicharrónDeAlpaca;
