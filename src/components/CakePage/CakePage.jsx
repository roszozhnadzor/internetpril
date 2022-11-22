import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { getCakeByIdAction } from "../../store/cakes/cakes.action";
import { getTasteByIdAction } from "../../store/tastes/tastes.action";
import { resetCakeState } from "../../store/cakes/cakes.reducer";
import { resetTasteState } from "../../store/tastes/tastes.reducer";

export const CakePage = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { cake } = useAppSelector((store) => store.cake);
  const { taste } = useAppSelector((store) => store.taste);

  useEffect(() => {
    if (!cake && params.id) {
      dispatch(getCakeByIdAction(params.id));
    }
  }, [cake, dispatch, params.id]);

  useEffect(() => {
    if (cake?.taste) {
      dispatch(getTasteByIdAction(cake.taste));
    }
  }, [cake?.taste, dispatch]);

  useEffect(
    () => () => {
      dispatch(resetCakeState());
      dispatch(resetTasteState());
    },
    [dispatch]
  );

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
      <center>
        <Link to={"/"}>
          <button>скрыть каталог</button>
        </Link>
      </center>
      {/*Кнопка для того, чтобы показать имена*/}

      {/*Рекомендую почитать про прекрасные встроенные методы массивов в JavaScript    */}

      <center>
        Торт: {cake?.name}
        <br />
        Начинка: {taste?.discription}
        <br />
        Цена: {cake?.pricekg}/кг
      </center>
    </div>
  );
};
