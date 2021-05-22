import React from "react";
import styles from './app-header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

class AppHeader extends React.Component {
  render () {
    return (
      <header className={`pt-2 pb-2 ${styles.container}`}>
          <nav>
            <ul className={styles.list}>
              <li>
                <a className={`pt-4 pb-4 pl-5 pr-5 ${styles.link}`} href="/" title="Конструктор" >
                  <BurgerIcon type="secondary" />
                  <span className="pl-2 text text_type_main-default">Конструктор</span>
                </a>
              </li>
              <li>
                <a className={`pt-4 pb-4 pl-5 pr-5 ${styles.link}`} href="/" title="Лента заказов" >
                  <ListIcon type="secondary" />
                  <span className="pl-2 text text_type_main-default">Лента заказов</span>
                </a>
              </li>
            </ul>
          </nav>
          <a href="/" title="Stellar burgers" className={styles.logo}>
            <Logo />
          </a>
          <nav>
            <ul className={styles.right}>
              <li>
                <a className={`pt-4 pb-4 pl-5 pr-5 ${styles.link}`} href="/" title="Личный кабинет" >
                  <ProfileIcon type="secondary" />
                  <span className="pl-2 text text_type_main-default">Личный кабинет</span>
                </a>
              </li>
            </ul>
          </nav>
      </header>
    )
  }
}

export default AppHeader;
