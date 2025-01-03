import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "src/store/hook/hook";
import { lauth } from "src/store/auth/authslice";
import { useNavigate } from "react-router-dom";
import Toster from "@compontes/feedback/Toster";
import { reset_new_user } from "src/store/auth/authslice";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const { accessToken, error, lodding, user } = useAppSelector(
    (state) => state.authslice
  );

  console.log(accessToken, user);
  const nav = useNavigate();

  const { register, handleSubmit } = useForm({});

  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(reset_new_user());
  // }, [dispatch]);

  const handlesub = (data) => {
    dispatch(lauth(data))
      .unwrap()
      .then(() => nav("/"));
  };
  // to protect the route
  if (accessToken) {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex flex-col items-center bg-slate-500 w-screen">
      <form action="" onSubmit={handleSubmit(handlesub)}>
        <div className="flex flex-col">
          <label htmlFor="email">email</label>
          <input {...register("email")} type="text" id="email" name="email" />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">password</label>
          <input
            {...register("password")}
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="text-red-700 font">{error}</div>
        <div className=" flex justify-center p-3">
          <button
            className="bg-sky-600  rounded-full ps-2 pe-2  p-1 font-bold hover:bg-sky-900 "
            type="submit"
          >
            {lodding === "pending" ? (
              <div className="flex items-center justify-center">
                <span className="loading loading-infinity loading-md"></span>{" "}
                Loading...
              </div>
            ) : (
              <>Sgin in</>
            )}
          </button>
        </div>
      </form>
      <Toster name="newacc" />
    </div>
  );
}

export default Signin;
