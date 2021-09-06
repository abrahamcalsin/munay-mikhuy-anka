import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import clsx from "clsx";
import Link from "next/link";

const NavTabLink = (props) => {
  const { href, contentLink } = props;

  const router = useRouter();

  const activelinkSelect = router.pathname === href;

  return (
    <Link href={href}>
      <a className={clsx("navTabLink", activelinkSelect && "activeNavTabLink")}>
        {contentLink}
      </a>
    </Link>
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
        <div className="container-responsive">
          <div>
            <Link href="/">
              <a className="logo-color-product logo-munay-mikhuy-anka">
                <h1>MUNAY</h1>
                <p>MIKHUY ANKA</p>
              </a>
            </Link>
          </div>

          <ul className="container-menu-desk">
            <li className="menu-link">
              <NavTabLink href="/" contentLink="Inicio" />
            </li>
            <li className="menu-link">
              <NavTabLink href="/platos-tipicos" contentLink="Platos Típicos" />
            </li>
            <li className="menu-link">
              <NavTabLink href="/cultura-punena" contentLink="Cultura Puneña" />
            </li>
            <li className="menu-link">
              <NavTabLink href="/sobre-nosotros" contentLink="Sobre Nosotros" />
            </li>
          </ul>
        </div>
      </div>
      {/* ------ */}
      <div className="navbar-mobile">
        <div className="container-responsive">
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
