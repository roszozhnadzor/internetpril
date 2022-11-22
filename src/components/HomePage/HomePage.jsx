import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCakeListAction } from "../../store/cakes/cakes.action";

import { useAppDispatch, useAppSelector } from "../../store";

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { cakes } = useAppSelector((store) => store.cake);

  useEffect(() => {
    if (cakes?.length === 0) {
      dispatch(getCakeListAction());
    }
  }, [cakes, dispatch]);

  const [showNames, setShowNames] = useState(false);

  // В данном хендлере мы изменяем состояние на какое-то конкретное
  const handleShowNames = () => {
    setShowNames(true);
  };

  // В данном хендлере мы изменяем состояние на какое-то конкретное
  const handleHideNames = () => {
    setShowNames(false);
  };

  return (
    <div>
      <h2>
        <center>
          <strong>добро пожаловать в кондитерскую</strong>
        </center>
      </h2>
      <h1>
        <center>
          <strong>marie's candies</strong>
        </center>
      </h1>
      <p>
        <center>
          <strong>торты на заказ</strong>
        </center>
      </p>
      {/*Кнопка для того, чтобы показать имена*/}
      <center>
        <button onClick={handleShowNames}>посмотреть каталог</button>
      </center>
      {/*Кнопка для того, чтобы скрыть имена*/}
      <center>
        <button onClick={handleHideNames}>скрыть каталог</button>
      </center>
      {/*Универсальная кнопка*/}

      {/*React отрисует список только если showNames будет равен true, boolean значения игнорируются при отрисовке*/}
      {showNames && !!cakes.length && (
        <div>
          {/*Рекомендую почитать про прекрасные встроенные методы массивов в JavaScript    */}
          {cakes.map((cake, index) => {
            return (
              <center key={index}>
                <Link to={`/cakes/${cake?.id}`}>{cake?.name}</Link>
                <br />
              </center>
            );
          })}
        </div>
      )}
    </div>
  );
};
