import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {currentYear} to Snir & Ido</p>
    </footer>
  );
}

export default Footer;
