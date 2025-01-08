import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../store/hook/hook";
import itemsfullinfo from "../store/card/act/itemsfullinfo";
import { Navigate, useNavigate } from "react-router-dom";
import { add } from "../store/card/Cardsclice";
import Card from "../compontes/e-com/Card";
import Total from "@compontes/e-com/Total";
import Empty from "@compontes/common/ainmation/empty";
import post_user_checkoutslice from "src/store/user_checkout/act/actuser_checkoutslice";
import { order_complete_from_card_sclice } from "../store/card/Cardsclice";
import { order_complete_from_user_checkoutslice } from "src/store/user_checkout/user_checkoutslice";

import { toast, ToastContainer } from "react-toastify";

function Card_page() {
  const nav = useNavigate();
  const dis = useAppDispatch();
  useEffect(() => {
    dis(itemsfullinfo());
  }, [dis]);
  const items_full_info = useAppSelector((state) => state.card.item_info);
  const quantity = useAppSelector((state) => state.card.item_id);
  const { accessToken } = useAppSelector((state) => state.authslice);
  const keys = Object.keys(quantity);

  const [visible_checkout, setvisible_checkout] = useState("invisible");

  // to protect the route
  if (!accessToken) {
    return <Navigate to="/" />;
  }

  const total = items_full_info.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);
  console.log(total);

  const handleclick = () => {
    dis(post_user_checkoutslice(total));
    dis(order_complete_from_user_checkoutslice());
    dis(order_complete_from_card_sclice());
    nav("/");
    toast.success("order is completed", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  keys.map((e) => {
    items_full_info.map((ee) => {
      if (Number(e) === ee.id) {
        console.log(Number(e));
        console.log(ee.id);
        dis(add(ee.id));
        console.log(Number(quantity[Number(e)]));
      } else {
        console.log("not found");
      }
    });
  });

  return (
    <div className="border bg-gray-400 w-screen flex flex-col p-5 gap-5 items-center">
      {keys.length != 0 ? (
        items_full_info.map((e) => {
          return <Card {...e} key={e.id} />;
        })
      ) : (
        <Empty message="No Items Found" />
      )}
      {keys.length != 0 ? (
        <div className={``}>
          <button
            onClick={() => {
              setvisible_checkout("visible");
            }}
            className={`text-white border p-2 rounded-full  hover:bg-slate-600`}
          >
            checkout
          </button>
        </div>
      ) : null}

      <div
        className={`${visible_checkout} z-10 w-full h-full top-0 bg-slate-300 bg-opacity-75 fixed flex  justify-center items-center`}
      >
        <div className="w-[400px] h-64 bg-slate-500 relative flex flex-col items-center justify-around">
          <div className="p-2 ">
            {keys.length != 0
              ? items_full_info.map((e) => {
                  return <Total key={e.id} {...e} />;
                })
              : null}
          </div>
          <div className={` border-t border-black text-black `}>
            total : {total}
          </div>
          <div>
            <button
              onClick={() => {
                handleclick();
              }}
              className="text-white border p-2 rounded-full  hover:bg-slate-600"
            >
              complte the order
            </button>
          </div>
          <div className="absolute top-0 right-2  ">
            <button
              onClick={() => {
                setvisible_checkout("invisible");
              }}
              className="text-white font-bold text-3xl "
            >
              x
            </button>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Card_page;
