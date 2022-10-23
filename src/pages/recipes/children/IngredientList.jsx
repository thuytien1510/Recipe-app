import React, { useEffect, useState } from "react";
import Ingredient from "./Ingredient";
import { useSelector } from "react-redux";
import { getIngredients } from "../../../redux/selectors";

export default function IngredientList({ orderList, setOrderList }) {
  const ingredientList = useSelector(getIngredients);
  const [list, setList] = useState(ingredientList);

  const removeIngredient = (d) => {
    orderList.splice(d, 1)
    console.log('remove i',d,orderList);
    setOrderList([...orderList]);
  };

  useEffect(() => {
    orderList
      .filter((e) => e.name)
      .forEach((element) => {
        list.forEach((item, index) => {
          if (item.name === element.name) {
            console.log("list", list);
            console.log("1", item);
            list.splice(index, 1);
          }
        });
      });
    setList(list);
  }, [orderList]);

  const handleSetList = (newItem) => {
    let i = "";
    let b = false;
    orderList.forEach((e, index) => {
      if (e.name === newItem.name) {
        i = index;
        b = true;
      }
    });
    if (b) {
      orderList.splice(i, 1, newItem);
    } else {
      orderList.pop();
      orderList.push(newItem);
    }
    setOrderList([...orderList]);
  };

  return (
    <>
      {orderList.map((item, index) => (
        <div key={index}>
          <Ingredient
            list={list}
            oldOrder={item}
            index={index}
            orderList={orderList}
            handleSetList={handleSetList}
            removeIngredient={removeIngredient}
          />
        </div>
      ))}
    </>
  );
}
