import { Link, NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "src/store/hook/hook";
import { logout } from "src/store/auth/authslice";
import { useNavigate } from "react-router-dom";

function Nav() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.authslice);

  return (
    <nav className="p-5 border  bg-slate-700 flex justify-between">
      <div className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-2" : "text-black p-2"
          }
        >
          home
        </NavLink>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-2" : "text-black p-2"
          }
        >
          brands{" "}
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-2" : "text-black p-2"
          }
        >
          products{" "}
        </NavLink>
      </div>
      {accessToken ? (
        <div className="flex items-center">
          welcom {user.email}
          <button
            className="text-black bg-slate-800 rounded-full p-3 ms-5"
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
              isActive ? "text-red-500 p-2" : "text-black p-2"
            }
          >
            Sign in{" "}
          </NavLink>
          <NavLink
            to="/Signup"
            className={({ isActive }) =>
              isActive ? "text-red-500 p-2" : "text-black p-2"
            }
          >
            Sign up{" "}
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;
