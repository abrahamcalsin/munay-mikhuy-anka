import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const Quispina = () => {
  return (
    <MainLayout>
      <Head>
        <title>Quispiña - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/quispiña.png"
        alt="Quispiña"
        titleProduct="Quispiña"
        classNameStarRating="quispiña-star-rating"
        productDescription="La quispiña es una especie de galleta húmeda o panecillo pequeño elaborada con masa de harina de quinua con diferentes niveles de molido: las hay de molido más menudo y más grueso. Las poblaciones del altiplano llevan cultivando la quinua tradicionalmente, de modo que existen muchos platillos derivados entre los aimaras, chipayas, quechuas y otras naciones precolombinas, entre ellos se halla el pesk'e, la quispiña, buñuelos de quinua, pito de quinua y otros. La quispiña se consumía como merienda durante la época de cosecha."
      />
    </MainLayout>
  );
};

export default Quispina;
