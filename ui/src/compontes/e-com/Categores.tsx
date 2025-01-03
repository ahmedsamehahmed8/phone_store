import { addtocart } from "../../store/card/Cardsclice";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import { useNavigate, Navigate } from "react-router-dom";

type tt = {
  id: number;
  name: string;
  brand: string;
  instok: number;
  photo: string;
};
function Categores({ id, name, brand, photo }: tt) {
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const { accessToken } = useAppSelector((state) => state.authslice);
  const handeladd = (id: number) => {
    if (accessToken) {
      dispatch(addtocart(id));
    } else {
      nav("/signin");
    }
  };

  return (
    <div className="border w-[250px] ">
      <div className=" flex justify-center " key={id}>
        {name}
      </div>
      <div className="flex justify-center font-bold text-3xl">{brand}</div>
      <div className="flex justify-center ">
        <img src={photo} alt="" />
      </div>
      <div className="p-2 flex justify-center items-center border">
        <button
          onClick={() => handeladd(id)}
          className="bg-slate-600 rounded-full ps-2 pe-2 p-1 font-bold hover:bg-zinc-700"
        >
          Add to card
        </button>
      </div>
    </div>
  );
}

export default Categores;
