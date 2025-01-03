import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppSelector } from "src/store/hook/hook";
type tt = {
  name: "newacc" | "order" | "signin";
};
function Toster({ name }: tt) {
  const { complete } = useAppSelector((state) => state.user_checkoutslice);
  const { new_user } = useAppSelector((state) => state.authslice);

  useEffect(() => {
    if (name === "order" && complete === true) {
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
    } else if (name === "newacc" && new_user) {
      toast("new acc has been created", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { backgroundColor: "green", color: "white" },
      });
    } else if (name === "signin") {
      toast.info("you need to signin", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: { backgroundColor: "green", color: "white" },
      });
    }
  }, [complete, new_user, name]);

  return <ToastContainer />;
}

export default Toster;
