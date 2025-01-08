import React, { useEffect } from "react";
import { get, useForm } from "react-hook-form";
import { useNavigate, Navigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import useUsernameaval from "src/hooks/useUsernameaval";
import { useAppDispatch, useAppSelector } from "src/store/hook/hook";
import { rauth } from "src/store/auth/authslice";

function Signup() {
  const dispatch = useAppDispatch();
  const { accessToken } = useAppSelector((state) => state.authslice);

  const nav = useNavigate();
  const schema = z
    .object({
      email: z
        .string()
        .min(3, { message: "username must be at least 3 characters" })
        .email({ message: "email not email" }),
      age: z.string().max(2, { message: "you are too old " }),
      password: z
        .string()
        .min(8, { message: "password must be at least 8 characters" }),
      confirm_password: z
        .string()
        .min(8, { message: "password must be at least 8 characters" }),
    })
    .refine((e) => e.password === e.confirm_password, {
      message: "password doesn't match ",
      path: ["confirm_password"],
    });
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const { checkEmailAvailability, isaval, username } = useUsernameaval();

  const emailOnBlurHandler = () => {
    const email: string = getValues("email");
    console.log(email);
    checkEmailAvailability(email);
  };
  console.log(username);
  console.log(isaval);

  const handlesub = (data) => {
    const s = {
      email: data.email,
      password: data.password,
    };
    if (isaval === "notavilable") {
      console.log(isaval);
    } else if (isaval === "avilable") {
      dispatch(rauth(s));
      console.log(isaval);
      nav("/signin/newacc");
      console.log(s);
    }
  };
  // to protect the route
  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex flex-col items-center bg-slate-500 w-screen">
      <div className=" border-4 rounded-2xl p-6 m-6 flex flex-col items-center">
        <h1 className="text-white text-4xl font-bold">Sign up</h1>
        <form action="" onSubmit={handleSubmit(handlesub)}>
          <div className="flex flex-col">
            <label htmlFor="email">email</label>
            <input
              {...register("email")}
              onBlur={emailOnBlurHandler}
              type="text"
              id="email"
              name="email"
            />
            <div className="text-red-700">
              {isaval === "notavilable" ? "this email is used " : null}
              <div className="text-red-700">{errors.email?.message}</div>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="age">age</label>
            <input {...register("age")} type="number" id="age" name="age" />
            <div className="text-red-700">{errors.age?.message}</div>
          </div>
          <div className="flex flex-col w-[300px]">
            <label htmlFor="password">password</label>
            <input
              {...register("password")}
              type="password"
              id="password"
              name="password"
            />
            <div className="text-red-700 ">{errors.password?.message}</div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm_password">confirm password</label>
            <input
              {...register("confirm_password")}
              type="password"
              id="confirm_password"
              name="confirm_password"
            />
            <div className="text-red-700">
              {errors.confirm_password?.message}
            </div>
          </div>
          <div className=" flex justify-center p-3">
            <button
              className="bg-emerald-600  rounded-full ps-2 pe-2 p-1 font-bold hover:bg-emerald-800"
              type="submit"
            >
              Sgin up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
