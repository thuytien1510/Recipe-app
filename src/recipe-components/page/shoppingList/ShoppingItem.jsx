import React from "react";
import './StyleShoppingListComponent.css'

export default function ShoppingItem({ item, handleClickItemOrder }) {
  return (
    <div
      key={item.id}
      className=" p-1 ps-3 m-2 ms-0 rounded-3 border text-dark box-hover"
      onClick={(e) => handleClickItemOrder(item)}
    >
      <p
        style={{
          cursor: "pointer",
          margin: "10px 0",
          fontWeight: 500,
          fontSize: 16,
        }}
      >
        {item.name} ({item.quantity})
      </p>
    </div>
  );
}
