import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbarlogin.module.css";


function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavColour = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeNavColour();
    window.addEventListener("scroll", changeNavColour);
  }, []);


 

  return (
    <nav
      className={
        navbar
          ? "navbar navbar-light bg-dark fixed-top"
          : "navbar navbar-light bg-dark-transparent fixed-top"
      }
    >
      <div className="container">
        <Link href="/">
          <a className={styles.navbar_brand}>NETFLIX</a>
        </Link>
        <form className={styles.form_inline}>
          <button
            className="btn btn-danger my-2 my-sm-0"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
