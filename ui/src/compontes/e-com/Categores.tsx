import { ToastContainer, toast } from "react-toastify";
import { addtocart } from "../../store/card/Cardsclice";
import { useAppDispatch, useAppSelector } from "../../store/hook/hook";
import Tproduct from "src/types/Tproduct";

function Categores({ id, name, brand, photo }: Tproduct) {
  const dispatch = useAppDispatch();

  const { accessToken } = useAppSelector((state) => state.authslice);
  const handeladd = (id: number) => {
    if (accessToken) {
      dispatch(addtocart(id));
    } else {
      toast.info("you need to signin", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="border rounded-2xl flex flex-col items-center justify-between  w-[250px] ">
      <div className=" flex justify-center " key={id}>
        {name}
      </div>
      <div className="flex justify-center font-bold text-3xl">{brand}</div>
      <div className="flex justify-center w-[250px]  ">
        <img src={photo} alt="" />
      </div>
      <div className="p-2 flex justify-center items-center ">
        <button
          onClick={() => handeladd(id)}
          className="bg-sky-500 rounded-full ps-2 pe-2 p-1 font-bold text-white hover:bg-sky-800"
        >
          Add to card
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Categores;
