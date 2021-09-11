import React, { useEffect,useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

const NavTabLink = (props) => {
  const { href, contentLink } = props;

  const router = useRouter();

  const activelinkSelect = router.pathname === href;

  return (
    <li className={clsx("menu-link")}>
      <Link href={href}>
        <a className={clsx("navTabLink", activelinkSelect && "activeNavTabLink")}>
          {contentLink}
        </a>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  React.useEffect(() => {
    const navbarStickyActive = () => {
      if (window.scrollY >= 5) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", navbarStickyActive);

    return () => {
      window.removeEventListener("scroll", navbarStickyActive);
    };
  });

  return (
    <div>
      <div
        className={
          navbar ? "navbar-sticky-desktop navbar-sticky-active" : "navbar-sticky-desktop"
        }
      >
        {/* --- Desktop --- */}
        <div className="container-responsive flex-links-navbar-desk">
          <div>
            <Link href="/">
              <a className="logo-color-product logo-munay-mikhuy-anka">
                <h1>MUNAY</h1>
                <p>MIKHUY ANKA</p>
              </a>
            </Link>
          </div>

          <ul className="container-menu-desk">
            <NavTabLink href="/" contentLink="Inicio" />
            <NavTabLink href="/platos-tipicos" contentLink="Platos Típicos" />
            <NavTabLink href="/cultura-punena" contentLink="Cultura Puneña" />
            <NavTabLink href="/sobre-nosotros" contentLink="Sobre Nosotros" />
          </ul>
        </div>
      </div>
      {/* --- Mobile --- */}
      <div className="navbar-mobile">
        <div className="container-nav-mobile flex-menu-navbar-mobile">
          <div>
            <Link href="/">
              <a className="logo-munay-mikhuy-anka">
                <h1>MUNAY</h1>
                <p>MIKHUY ANKA</p>
              </a>
            </Link>
          </div>
          <div>
            <input className="checkbox-btn" type="checkbox" id="checkboxBtn" />
            <label className="btn-menu" htmlFor="checkboxBtn">
              <span className="lineOne-btn"></span>
              <span className="lineTwo-btn"></span>
              <span className="lineThree-btn"></span>
            </label>

            <ul className="container-menu-mobil">
              <li className="menu-link">
                <Link href="/">
                  <a>Inicio</a>
                </Link>
              </li>
              <li className="menu-link">
                <Link href="/platos-tipicos">
                  <a>Platos Tipicos</a>
                </Link>
              </li>
              <li className="menu-link">
                <Link href="/cultura-punena">
                  <a>Cultura Puneña</a>
                </Link>
              </li>
              <li className="menu-link">
                <Link href="/sobre-nosotros">
                  <a>Sobre Nosotros</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
