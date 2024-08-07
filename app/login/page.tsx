"use client";
import { loginAction } from "@/lib/actions";
import React from "react";
import { useFormState } from "react-dom";

const LoginPage = () => {
  const [state, formAction] = useFormState(loginAction, {
    message: "",
  });

  return (
    <>
      <h1>Login</h1>
      {state.message && <p>{state.message}</p>}
      <form action={formAction}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="username" name="username" />
        </div>
        <div>
          <label htmlFor=""></label>
          <input type="password" placeholder="password" name="password" />
        </div>
        <button>Login</button>
      </form>
    </>
  );
};

export default LoginPage;
