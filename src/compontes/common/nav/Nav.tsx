import { Link, NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "src/store/hook/hook";
import { logout } from "src/store/auth/authslice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  const { accessToken, user } = useAppSelector((state) => state.authslice);
  const incart = useAppSelector((state) => state.card.item_id);

  const items_number = Object.values(incart).reduce((acc, item) => {
    return acc + item;
  }, 0);

  return (
    <nav className="p-5  bg-slate-700 flex justify-between items-center">
      <div className="flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-3" : "text-white p-3 font-bold"
          }
        >
          home
        </NavLink>
        <NavLink
          to="/brands"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-3" : "text-white p-3 font-bold"
          }
        >
          brands{" "}
        </NavLink>
        <NavLink
          to="/aboutus"
          className={({ isActive }) =>
            isActive ? "text-red-500 p-3" : "text-white p-3 font-bold"
          }
        >
          About us
        </NavLink>
      </div>
      {accessToken ? (
        <button
          onClick={() => nav("/card")}
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
      ) : null}
    </nav>
  );
}

export default Nav;
