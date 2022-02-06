import React from 'react';
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import styles from './app.module.css';
import data from "../../utils/data";

function App() {
  const [state, setState] = React.useState({
    isAcceptedPopupOpened: false,
    isDetailsPopupOpened: false,
  })
  // Получили данные из истончика данных для передачи в компоненты

  const openAcceptedPopup = () => {
    setState({
      isAcceptedPopupOpened: true,
      isDetailsPopupOpened: false,
    })
  }

  const openDetailsPopup = () => {
    setState({
      isAcceptedPopupOpened: false,
      isDetailsPopupOpened: true,
    })
  }

  const closeAllPopups = () => {
    setState({
      isAcceptedPopupOpened: false,
      isDetailsPopupOpened: false,
    })
  }

  return (
    <div className={styles.wrapper}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerConstructor data={data} openDetails={openDetailsPopup}/>
        <BurgerIngredients openPopup={openAcceptedPopup} />
      </main>
      <OrderDetails isOpened={state.isAcceptedPopupOpened} close={closeAllPopups}/>
      <IngredientDetails isOpened={state.isDetailsPopupOpened} close={closeAllPopups} />
    </div>
  );
}

export default App;
