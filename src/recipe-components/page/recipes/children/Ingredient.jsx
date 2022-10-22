import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
import { Button } from "react-bootstrap";

const { Option } = Select;
function Ingredient({
  oldOrder,
  handleSetList,
  list,
  removeIngredient,
  index,
  orderList,
}) {
  console.log(oldOrder, orderList);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    quantity: 1,
  });

  useEffect(() => {
    if (oldOrder.name) {
      setNewIngredient(oldOrder);
    }
  }, []);

  const handleChangeNewIngredient = (e) => {
    setNewIngredient({
      ...newIngredient,
      quantity: e.target.value,
    });
  };

  const handleHideIngredient = (removeItem) => {
    removeIngredient(removeItem);
  };

  useEffect(() => {
    handleSetList(newIngredient);
  }, [newIngredient]);

  return (
    <div className="d-flex mb-3 gap-3 justify-content-between">
      {oldOrder.name ? (
        <input type="text" value={oldOrder.name} className="w-75 bg-light border-secondary" disabled/>
      ) : (
        <Select
          showSearch
          className="w-75 h-100 "
          placeholder="Search to select ingredient"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
          onChange={(value) =>
            setNewIngredient({
              ...newIngredient,
              name: value,
            })
          }
          defaultValue={oldOrder.name ? oldOrder.name : null}
        >
          {list.map((item) => (
            <Option key={item.id} value={item.name}>
              {item.name}
            </Option>
          ))}
        </Select>
      )}
      <input
        style={{ color: "black" }}
        className="mb-0 w-25 h-75 bg-light border-secondary"
        type="number"
        name="quantity"
        value={newIngredient.quantity}
        onChange={handleChangeNewIngredient}
      />
      <Button
        variant="danger"
        className="h-75"
        onClick={() => handleHideIngredient(index)}
      >
        X
      </Button>
    </div>
  );
}

export default Ingredient;
