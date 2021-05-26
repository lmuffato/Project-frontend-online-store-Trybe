import React, { Component } from 'react';
import styles from './styles.module.css';
import { ImFacebook2 } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { VscCallIncoming } from 'react-icons/vsc';

class Footer extends Component {
  render() {
    return(
<footer className={styles.contentFooter}>
  <h4 className={styles.titleOption}>Fale Conosco</h4>
  <div className={styles.boxFooter}>
    <Link to="https://www.facebook.com/">
      <ImFacebook2 className={styles.iconFace} />
    </Link>
    <Link to="http://instagram.com/">
      <GrInstagram className={styles.iconInsta} />
    </Link>
    <MdEmail className={styles.iconEmail} />
    <VscCallIncoming className={styles.iconCall} />
  </div>
  <p className={styles.contentCopy}>
    &copy; Adelino Jr, Junior Portela, Renzo Sevilha, Samuel Melo, 2021
  </p>
</footer>
    );
}

export default Footer;
