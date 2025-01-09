import { useState } from "react";
import { increase, decrease, delete_item } from "../../store/card/Cardsclice";
import { useAppDispatch } from "../../store/hook/hook";
import Tproduct from "src/types/Tproduct";
function Card({ quantity, name, brand, photo, id }: Tproduct) {
  const dis = useAppDispatch();
  const handle_increase = () => {
    dis(increase(id));
  };

  const [s, sets] = useState("");
  const handle_decrease = (quantity: number, id: number) => {
    if (quantity === 1) {
      sets("disabled:text-4xl");
    } else {
      sets("");
      dis(decrease(id));
    }
  };
  const handle_delete = (id: number) => {
    dis(delete_item(id));
  };

  return (
    <div className=" bg-slate-100 rounded-3xl flex justify-around items-center  p-3">
      <div className="flex flex-col items-center text-black">
        <div className="p-2">name : {name} </div>
        <div className="p-2">name : {brand} </div>
        <div className="p-2">
          <div className="flex text-black items-center">
            quantity :
            <div className="text-3xl text-black p-2 ">
              <button onClick={() => handle_increase()} className="">
                +
              </button>
            </div>
            <div>
              <input
                type="text"
                disabled
                name="qq"
                id="qq"
                className="w-5"
                value={quantity}
              />
            </div>
            <div className="">
              <button
                onClick={() => handle_decrease(quantity, id)}
                className={`text-3xl text-black  ${s}`}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="p-2 w-72">
          <img src={photo} alt="" />
        </div>
      </div>
      <div className="bg-slate-500 text-black rounded-full p-2 ps-3 pe-3 font-bold">
        <button onClick={() => handle_delete(id)}>delete</button>
      </div>
    </div>
  );
}

export default Card;
