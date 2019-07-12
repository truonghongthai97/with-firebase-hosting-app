import React, { useState } from 'react';
import Link from 'next/link';
import styles from './styles/Header.scss';

const Header = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const renderListNav = () => {
    return (
      <div className={styles.navSupportContent}>
        <input type="text" />
        <button
          className={styles.btnToggleNav}
          onClick={() => setShowNavMobile(!showNavMobile)}
        >
          icon
        </button>
        <ul className={styles.listNav}>
          <li className={styles.itemNav}>
            <Link href="/about">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.itemNav}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.itemNav}>
            <Link href="/about">
              <a>Support</a>
            </Link>
          </li>
          <li className={styles.itemNav}>
            <Link href="/about">
              <a>Loan</a>
            </Link>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.navTopWrapper}>
          <Link href="/">
            <a className={styles.navLink}>LogoWebite</a>
          </Link>
          {renderListNav()}
        </div>
      </div>
    </header>
  );
};
export default Header;
