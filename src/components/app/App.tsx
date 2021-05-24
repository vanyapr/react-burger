import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';
import data from "../../utils/data";

function App() {
  // Получили данные из истончика данных для передачи в компоненты

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerConstructor data={data} />
        <BurgerIngredients />
      </main>
    </>
  );
}

export default App;
