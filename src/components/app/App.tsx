import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import styles from './app.module.css';

function App() {
  // Получили данные из истончика данных для передачи в компоненты


  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerConstructor />
        <BurgerIngredients />
      </main>
    </>
  );
}

export default App;
