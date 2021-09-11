import React from "react";
import Head from "next/dist/shared/lib/head";

import MainLayout from "~/components/layouts";
import Product from "~/components/product";

const KankachoAyavireño = () => {
  return (
    <MainLayout>
      <Head>
        <title>Kankacho Ayavireño - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/kankacho-ayavireño.png"
        alt="Kankacho Ayavireño"
        titleProduct="Kankacho Ayavireño"
        classNameStarRating="kankacho-ayavireño-star-rating"
        productDescription="El Kankacho Ayavireño es un plato típico que no puede faltar en las fiestas de Puno. Para su preparación se toma a un lechón o un cordero y se macera con aceite, ajo, ají, limón y comino un día antes de cocinarlo."
      />
    </MainLayout>
  );
};

export default KankachoAyavireño;
