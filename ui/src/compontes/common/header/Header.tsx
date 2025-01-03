import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppSelector } from "../../../store/hook/hook";
import { useNavigate } from "react-router";

import React from "react";

function Header() {
  const nave = useNavigate();
  const incart = useAppSelector((state) => state.card.item_id);
  const accessToken = useAppSelector((state) => state.authslice.accessToken);

  // .map((e) => {
  //   return e.quantity;
  // })
  const items_number = Object.values(incart).reduce((acc, item) => {
    return acc + item;
  }, 0);
  // console.log(items_number);
  return (
    <>
      <div className="border w-auto flex items-center justify-between p-5 ">
        <div className="fon">logo</div>
        <button
          onClick={() => nave("/card")}
          className={`${!accessToken ? "invisible" : null}`}
        >
          <div
            className={`${
              accessToken ? null : "invisible"
            } relative flex justify-center items-center w-7 h-7 rounded-full top-1 -left-3  bg-slate-600  `}
          >
            {items_number}
          </div>
          <div className={`${!accessToken ? "invisible" : null}`}>
            <FontAwesomeIcon icon={faCartShopping} size="xl" />
          </div>
        </button>
      </div>
    </>
  );
}

export default Header;
