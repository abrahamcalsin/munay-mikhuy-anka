import clsx from "clsx";
// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faStar, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ProductTypicalDish = (props) => {
  const {
    srcImageProduct,
    altImage,
    titleProduct,
    classNameStarRating,
    productDescription,
  } = props;

  return (
    <div className={clsx("main-product")}>
      <div className={clsx("container-responsive product-flex")}>
        <div>
          <img src={srcImageProduct} alt={altImage} />
        </div>
        <div>
          <h1>{titleProduct}</h1>
          <div className={classNameStarRating}>
            <p>
              <span>Valoración:</span>

              <span className={clsx("star-icon")}>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className={clsx("star-icon")}>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className={clsx("star-icon")}>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className={clsx("star-icon")}>
                <FontAwesomeIcon icon={faStar} />
              </span>
              <span className={clsx("star-icon")}>
                <FontAwesomeIcon icon={faStar} />
              </span>
            </p>
          </div>
          <p className={clsx("style-product-description")}>{productDescription}</p>
          <a href="#" className={clsx("order-link")} target="__blank" rel="noreferrer">
            <span className={clsx("link-whatsapp-icon")}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </span>
            HAZ TU PEDIDO VÍA WHATSAPP{" "}
            <span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductTypicalDish;
