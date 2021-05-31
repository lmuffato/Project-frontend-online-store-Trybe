import React, { Component } from 'react';
// import { GrFacebook, GrInstagram } from 'react-icons/gr';
import { FaTwitter, FaYoutube } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
// import { VscCallIncoming } from 'react-icons/vsc';
import styles from './styles.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={ styles.contentFooter }>
        <h3 className={ styles.titleOption }>Fale Conosco</h3>
        <div className={ styles.boxFooter }>
          <FaYoutube className={ styles.iconfooter } />
          <FaTwitter className={ styles.iconfooter } />
          <MdEmail className={ styles.iconfooter } />
          <AiFillPhone className={ styles.iconfooter } />
        </div>
        <p className={ styles.contentCopy }>
          &copy; Adelino Jr, Junior Portela, Renzo Sevilha, Samuel Melo, 2021
        </p>
      </footer>
    );
  }
}

export default Footer;
