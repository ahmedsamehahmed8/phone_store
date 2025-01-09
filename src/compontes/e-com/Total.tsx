import React from "react";
import { useAppSelector } from "src/store/hook/hook";

function Total({ id, name, price, quantity }) {
  return (
    <>
      <div className=" w-80 text-black  flex justify-between">
        <div>
          {name} * {quantity}
        </div>
        <div>price: {price * quantity}</div>
      </div>
    </>
  );
}

export default Total;
