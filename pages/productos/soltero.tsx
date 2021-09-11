import React from "react";
import Head from "next/dist/shared/lib/head";

import MainLayout from "~/components/layouts";
import Product from "~/components/product";

const Soltero = () => {
  return (
    <MainLayout>
      <Head>
        <title>Soltero - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/soltero.png"
        alt="Soltero"
        titleProduct="Soltero"
        classNameStarRating="soltero-star-rating"
        productDescription="Soltero o el solterito es una ensalada Peruana, contiene habas cocidas, cebolla, tomate, queso fresco, papas, choclo cocidos, rocoto y perejil picado."
      />
    </MainLayout>
  );
};

export default Soltero;
