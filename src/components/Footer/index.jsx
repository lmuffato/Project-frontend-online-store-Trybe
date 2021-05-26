import React, { Component } from 'react';
import { ImFacebook2 } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';
import { VscCallIncoming } from 'react-icons/vsc';
import styles from './styles.module.css';

class Footer extends Component {
  render() {
    return (
      <footer className={ styles.contentFooter }>
        <h3 className={ styles.titleOption }>Fale Conosco</h3>
        <div className={ styles.boxFooter }>
          <ImFacebook2 className={ styles.iconFace } />
          <GrInstagram className={ styles.iconInsta } />
          <MdEmail className={ styles.iconEmail } />
          <VscCallIncoming className={ styles.iconCall } />
        </div>
        <p className={ styles.contentCopy }>
          &copy; Adelino Jr, Junior Portela, Renzo Sevilha, Samuel Melo, 2021
        </p>
      </footer>
    );
  }
}

export default Footer;
