import React from "react";
import styles from './burger-ingredients.module.css';
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import DraggableIngredient from "../draggable-ingredient/draggable-ingredient";
import LockedIngredient from "../locked-ingredient/locked-ingredient";

class BurgerIngredients extends React.Component <any, any> {
  constructor(props: any) {
    super(props);
  }

  render () {
    return (
      <aside className={`pl-4 pr-4 ${styles.aside}`}>
        <section className={`mt-25 ${styles.elements}`}>
          <LockedIngredient
            type="top"
            text="Краторная булка N-200i (верх)"
            price={25}
            thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
          />
          <div className={styles.scrollable}>
            <DraggableIngredient
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
          </div>
          <LockedIngredient
            type="bottom"
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
          />
        </section>
        <section className={`pt-10 ${styles.checkout}`}>
          <Button type="primary" size="large" onClick={this.props.openPopup}>
            Оформить заказ
          </Button>
          <p className='mr-10'>
            <span className='mr-2 text text_type_digits-medium'>610</span>
            <CurrencyIcon type="secondary" />
          </p>
        </section>
      </aside>
    )
  }
}

export default BurgerIngredients;
