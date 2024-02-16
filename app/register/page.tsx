"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/admin");
    }
  }, [session, router]);
const { email, password } = formData;
      // this function did not work it cant save state data and show it in dev
      function onChange(e: any) {
        setError("");
        setFormData((prevState) => ({
          ...prevState,
          [e.target.id]: e.target.value,
        }));
      }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    console.log("helowing")
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    try {
      // const res = await fetch("/api/register", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email,
      //     password,
      //   }),
      // });
      console.log(formData)
      const namespace= "pageview";
      const res = await axios.post("/api/register",formData)

      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  if (session?.status === "loading") {
    return <h1>Loading...</h1>;
  }
// const session?.status:string = "Asd"
  return (
    session?.status !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between bg-red-100 p-24">
        <div className="bg-[#212121] p-8 rounded shadow-md w-96">
          <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full text-gray-100 bg-transparent border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
              required
            />
            <input
              type="password"
              className="w-full text-gray-100 bg-transparent border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Register
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/login"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
};

export default Register;