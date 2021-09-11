import MainLayout from "../components/layouts";
import Head from "next/dist/shared/lib/head";
import Product from "../components/product";

const SudadoDeTrucha = () => {
  return (
    <MainLayout>
      <Head>
        <title>Sudado de Trucha - Munay Mikhuy Anka</title>
      </Head>

      <div className="navbar-products"></div>
      <Product
        srcImageProduct="/images/platos-tipicos/sudado-de-trucha.png"
        alt="Sudado de Trucha"
        titleProduct="Sudado de Trucha"
        classNameStarRating="sopa-de-quinua-star-rating"
        productDescription="El pescado tiene un valor nutritivo excelente, proporciona proteínas de gran calidad y una amplia variedad de vitaminas y minerales, como las vitaminas A y D, fósforo, magnesio, selenio, y yodo en el caso del pescado de mar."
      />
    </MainLayout>
  );
};

export default SudadoDeTrucha;
