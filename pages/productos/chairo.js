import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const Chairo = () => {
  return (
    <MainLayout>
      <Head>
        <title>Chairo - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/chairo.png"
        alt="Chairo"
        titleProduct="Chairo"
        classNameStarRating="chairo-star-rating"
        productDescription="Es una sopa tradicional y muy conocida en la región del altiplano andino, como Puno, contiene proteínas, hidratos de carbono, grasas, agua, vitaminas, minerales, etc."
      />
    </MainLayout>
  );
};

export default Chairo;
