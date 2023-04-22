import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];


  const refLinks= links.map((link) => (
    <a key={link}href={"#" + link}>{link}</a>
  ))

  return <nav>{refLinks}</nav>
  
}

export default NavBar;
