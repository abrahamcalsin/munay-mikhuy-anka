import { faLongArrowAltRight,faStar } from "@fortawesome/free-solid-svg-icons";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/dist/client/link";

const Products = (props) => {
  const {
    srcImageProduct,
    altImage,
    classNameStarRating,
    titleProduct,
    hrefProductPage,
    nameProduct,
  } = props;

  return (
    <div className={clsx("typical-dish")}>
      <div className={clsx("photo-typical-dish")}>
        <img src={srcImageProduct} alt={altImage} />
      </div>
      <div className={clsx("product-typical-dish-rating")}>
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
        <Link href={hrefProductPage}>
          <a className={clsx("link-view-more")}>
            Más sobre {nameProduct}{" "}
            <span>
              <FontAwesomeIcon icon={faLongArrowAltRight} />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export { Products };
