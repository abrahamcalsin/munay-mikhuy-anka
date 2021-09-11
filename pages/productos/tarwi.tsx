import React from "react";
import Head from "next/dist/shared/lib/head";

import MainLayout from "~/components/layouts";
import Product from "~/components/product";

const Tarwi = () => {
  return (
    <MainLayout>
      <Head>
        <title>Tarwi - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/tarwi.png"
        alt="Tarwi"
        titleProduct="Tarwi"
        classNameStarRating="tarwi-star-rating"
        productDescription="El Tarwi es un superalimento andino, se consume desde tiempos ancestrales y que es considerada un superalimento por su gran aporte nutricional. Resaltan su alto contenido de calcio, que lo convierte en un gran alimento para quienes desean mantener los dientes y huesos sanos."
      />
    </MainLayout>
  );
};

export default Tarwi;
