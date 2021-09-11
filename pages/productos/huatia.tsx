import React from "react";
import Head from "next/dist/shared/lib/head";

import MainLayout from "~/components/layouts";
import Product from "~/components/product";

const Huatia = () => {
  return (
    <MainLayout>
      <Head>
        <title>Huatia - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/huatia.png"
        alt="Huatia"
        titleProduct="Huatia"
        classNameStarRating="huatia-star-rating"
        productDescription="Huatía o Pachamanca, este plato es preparado sobre todo en la época de las cosechas, se prepara en el campo, se prepara en un horno de tierra, primero se cava un hoyo y se colocan piedras que serán calentadas a grandes temperaturas a base de leña. Luego se colocan las papas, yucas, etc."
      />
    </MainLayout>
  );
};

export default Huatia;
