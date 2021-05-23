import React from "react";
import styles from './burger-ingredients.module.css';
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import DraggableIngredient from "../draggable-ingredient/draggable-ingredient";

class BurgerIngredients extends React.Component {
  render () {
    return (
      <aside className={`pl-4 pr-4 ${styles.aside}`}>
        <section className={`mt-25 ${styles.elements}`}>
          <div className='pl-8'>
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={25}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
          </div>
          <div className={styles.scrollable}>
            <DraggableIngredient
              isLocked={false}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              isLocked={false}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              isLocked={false}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              isLocked={false}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              isLocked={false}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              isLocked={false}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
            <DraggableIngredient
              isLocked={false}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
          </div>
          <div className="pl-8">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={200}
              thumbnail={`https://code.s3.yandex.net/react/code/bun-02.png`}
            />
          </div>
        </section>
        <section className={`pt-10 ${styles.checkout}`}>
          <Button type="primary" size="large">
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
