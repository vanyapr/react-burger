import React from "react";
import styles from './burger-constructor.module.css';
import { Tab, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerConstructor extends React.Component <any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      current: 'one',
    }
  }

  setCurrent = (event: any) => {
    this.setState({
      current: event,
    });
  }

  render () {
    return (
      <article className={`mr-10 ${styles.constructor}`}>
        <header className={styles.title}>
          <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
          <div className={`mt-5 ${styles.tabs}`}>
            <Tab value="one" active={this.state.current === 'one'} onClick={this.setCurrent}>
              Булки
            </Tab>
            <Tab value="two" active={this.state.current === 'two'} onClick={this.setCurrent}>
              Соусы
            </Tab>
            <Tab value="three" active={this.state.current === 'three'} onClick={this.setCurrent}>
              Начинки
            </Tab>
          </div>
        </header>
        <section className={styles.scrollable}>
          {/* Разделил на секции на будущее */}
          <section>
            <h2 className={`mt-10 text text_type_main-medium ${styles.subtitle}`}>Булки</h2>
            <ul className={`pt-6 pr-4 pl-4 ${styles.list}`}>
              {/* Один элемент */}
              <li className={styles.item}>
                <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>Флюоресцентная булка R2-D3</h3>
                <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
                  <span className="mr-2">240</span>
                  <CurrencyIcon type="secondary"/>
                </p>
                <img className="ml-4 mr-4" width='240' height='120' src="https://via.placeholder.com/240x120.png" alt="Тайтл"/>
                <p className={`text text_type_digits-default ${styles.count}`}>1</p>
              </li>
              {/* / Один элемент*/}
              {/* Один элемент */}
              <li className={styles.item}>
                <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>Флюоресцентная булка R2-D3</h3>
                <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
                  <span className="mr-2">240</span>
                  <CurrencyIcon type="secondary"/>
                </p>
                <img className="ml-4 mr-4" width='240' height='120' src="https://via.placeholder.com/240x120.png" alt="Тайтл"/>
              </li>
              {/* / Один элемент*/}
              {/* Один элемент */}
              <li className={styles.item}>
                <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>Флюоресцентная булка R2-D3</h3>
                <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
                  <span className="mr-2">240</span>
                  <CurrencyIcon type="secondary"/>
                </p>
                <img className="ml-4 mr-4" width='240' height='120' src="https://via.placeholder.com/240x120.png" alt="Тайтл"/>
              </li>
              {/* / Один элемент*/}
            </ul>
          </section>
          {/* Разделил на секции на будущее */}
          {/* Разделил на секции на будущее */}
          <section>
            <h2 className={`mt-10 text text_type_main-medium ${styles.subtitle}`}>Соусы</h2>
            <ul className={`pt-6 pr-4 pl-4 ${styles.list}`}>
              {/* Один элемент */}
              <li className={styles.item}>
                <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>Соус Spicy-X</h3>
                <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
                  <span className="mr-2">240</span>
                  <CurrencyIcon type="secondary"/>
                </p>
                <img className="ml-4 mr-4" width='240' height='120' src="https://via.placeholder.com/240x120.png" alt="Тайтл"/>
              </li>
              {/* / Один элемент*/}
              {/* Один элемент */}
              <li className={styles.item}>
                <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>Соус фирменный Space Sauce</h3>
                <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
                  <span className="mr-2">240</span>
                  <CurrencyIcon type="secondary"/>
                </p>
                <img className="ml-4 mr-4" width='240' height='120' src="https://via.placeholder.com/240x120.png" alt="Тайтл"/>
              </li>
              {/* / Один элемент*/}
              {/* Один элемент */}
              <li className={styles.item}>
                <h3 className={`mt-1 text text_type_main-default ${styles.name}`}>Флюоресцентная булка R2-D3</h3>
                <p className={`mt-1 text text_type_digits-default ${styles.description}`}>
                  <span className="mr-2">240</span>
                  <CurrencyIcon type="secondary"/>
                </p>
                <img className="ml-4 mr-4" width='240' height='120' src="https://via.placeholder.com/240x120.png" alt="Тайтл"/>
              </li>
              {/* / Один элемент*/}
            </ul>
          </section>
          {/* Разделил на секции на будущее */}
        </section>

      </article>
    )
  }
}

export default BurgerConstructor;
