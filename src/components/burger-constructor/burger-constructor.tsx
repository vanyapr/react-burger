import React from "react";
import styles from './burger-constructor.module.css';
import { Tab, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/constructor-item";

class BurgerConstructor extends React.Component <any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      currentTab: 'one',
      breads: false,
      meats: false,
      sauces: false,
    }
  }

  setCurrentTab = (event: any) => {
    this.setState({
      currentTab: event,
    });
  }

  // Отсортировать массив данных по категориям
  getBreads = () => {
    const breads = this.props.data.filter((item: { type: string }) => {
      return item.type === 'bun';
    });

    return breads;
  }

  getMeats = () => {
    const meats = this.props.data.filter((item: { type: string }) => {
      return item.type === 'main';
    });

    return meats;
  }

  getSauces = () => {
    const sauces = this.props.data.filter((item: { type: string }) => {
      return item.type === 'sauce';
    });

    return sauces;
  }

  // Записать данные по категориям в стейт
  componentDidMount() {
    this.setState({
      breads: this.getBreads(),
      meats: this.getMeats(),
      sauces: this.getSauces(),
    }, () => {
      console.log(this.state);
    });

  }

  render () {
    return (
      <article className={`mr-10 ${styles.constructor}`}>
        <header className={styles.title}>
          <h1 className="text text_type_main-large mt-10">Соберите бургер</h1>
          <div className={`mt-5 ${styles.tabs}`}>
            <Tab value="one" active={this.state.currentTab === 'one'} onClick={this.setCurrentTab}>
              Булки
            </Tab>
            <Tab value="two" active={this.state.currentTab === 'two'} onClick={this.setCurrentTab}>
              Соусы
            </Tab>
            <Tab value="three" active={this.state.currentTab === 'three'} onClick={this.setCurrentTab}>
              Начинки
            </Tab>
          </div>
        </header>
        <section className={styles.scrollable}>
          {/* Разделил на секции на будущее */}
          <section>
            <h2 className={`mt-10 text text_type_main-medium ${styles.subtitle}`}>Булки</h2>
            <ul className={`pt-6 pr-4 pl-4 ${styles.list}`}>
              {Array.from(this.state.breads).map((item: any, index) => (
                <ConstructorItem
                  key={index}
                  {...item}
                  openDetails={this.props.openDetails}
                />
              ))}
            </ul>
          </section>
          <section>
            <h2 className={`mt-10 text text_type_main-medium ${styles.subtitle}`}>Соусы</h2>
            <ul className={`pt-6 pr-4 pl-4 ${styles.list}`}>
              {Array.from(this.state.sauces).map((item: any, index) => (
                <ConstructorItem
                  key={index}
                  {...item}
                  openDetails={this.props.openDetails}
                />
              ))}
            </ul>
          </section>
          <section>
            <h2 className={`mt-10 text text_type_main-medium ${styles.subtitle}`}>Начинки</h2>
            <ul className={`pt-6 pr-4 pl-4 ${styles.list}`}>
              {Array.from(this.state.meats).map((item: any, index) => (
                <ConstructorItem
                  key={index}
                  {...item}
                  openDetails={this.props.openDetails}
                />
              ))}
            </ul>
          </section>
          {/* Разделил на секции на будущее */}
        </section>

      </article>
    )
  }
}

export default BurgerConstructor;
