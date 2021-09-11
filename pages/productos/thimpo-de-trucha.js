import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const ThimpoDeTrucha = () => {
  return (
    <MainLayout>
      <Head>
        <title>Thimpo de Trucha - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/thimpo-de-trucha.png"
        alt="Thimpo de Trucha"
        titleProduct="Thimpo de Trucha"
        classNameStarRating="thimpo-de-trucha-star-rating"
        productDescription="Thimpo de Trucha, es un plato de la zona aymara de la región de Puno, preparado con trucha del Lago Titicaca, que siempre es fresca y sabrosa, el sabor es exquisito y suave, condimentado con huaycha y acompañado con chuño y papa."
      />
    </MainLayout>
  );
};

export default ThimpoDeTrucha;
