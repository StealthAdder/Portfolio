import React from 'react';
import styles from '../styles/card.module.css';
const Container = ({ image, title, url, desc }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt='' className={styles.profileImg}></img>
      <p className={styles.title}>{title}</p>
      <p className={styles.desc}>{desc}</p>
      {url !== '#' && (
        <button
          className={styles.btn}
          onClick={() => {
            window.open(url, '_blank');
          }}
        >
          View
        </button>
      )}
    </div>
  );
};

export default Container;
