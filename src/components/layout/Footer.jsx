import React from 'react';
import logoWhite from '../../assets/images/logo_footer.png';
import '../../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="Logo Kasa" className="footer__logo" />
      <p className="footer__copyright">© 2023 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;