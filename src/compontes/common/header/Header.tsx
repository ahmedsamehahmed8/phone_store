import { logout } from "src/store/auth/authslice";

import { useAppSelector, useAppDispatch } from "../../../store/hook/hook";
import { useNavigate } from "react-router";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { accessToken, user } = useAppSelector((state) => state.authslice);

  // .map((e) => {
  //   return e.quantity;
  // })
  // const items_number = Object.values(incart).reduce((acc, item) => {
  //   return acc + item;
  // }, 0);
  // console.log(items_number);
  return (
    <div className="flex justify-between items-center p-3">
      <div>logo</div>
      {accessToken ? (
        <div className="flex items-center">
          welcom {user.email}
          <button
            className="text-black bg-lime-200 rounded-full p-2 ms-5"
            onClick={() => {
              dispatch(logout());
              nav("/");
            }}
          >
            Log out
          </button>
        </div>
      ) : (
        <div className="flex">
          <NavLink
            to="/signin"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 p-3 font-bold "
                : " text-white p-3 font-bold "
            }
          >
            Sign in{" "}
          </NavLink>
          <NavLink
            to="/Signup"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 p-3 font-bold"
                : "text-white p-3 font-bold"
            }
          >
            Sign up{" "}
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Header;
