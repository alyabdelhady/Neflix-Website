import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { useRouter } from "next/router";


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

  const router = useRouter();

  const handleLogout=()=>{
    router.push("/");
  }

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
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button onClick={handleLogout} className="btn btn-danger my-2 my-sm-0" type="submit">
            Logout
          </button>
        </form>
        
      </div>
    </nav>
  );
}

export default Navbar;
