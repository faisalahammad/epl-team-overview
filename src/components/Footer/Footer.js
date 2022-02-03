import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-light bg-dark text-center pt-4 pb-3">
      <p>
        &copy; {new Date().getFullYear()} - EPL Team Overview | All right
        reserved
      </p>
    </footer>
  );
};

export default Footer;
