"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const session = useSession();

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.replace("/");
    }
  }, [session?.status, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
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

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    console.log("res for check = " + res);

    if (res?.error) {
      setError("Invalid email or password...");
      if (res?.url) router.replace("/admin");
    } else {
      setError("");
    }
  };

  if (session?.status === "loading") {
    return <h1 className="text-zinc-900">Loading...</h1>;
  }
  // const session?.status:string ="sadf"
  return (
    session?.status !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24 backdrop-blur-md">
        <div className="bg-[#3736361f] text-zinc-700 p-8 rounded shadow-md w-96 ">
          <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full text-zinc-700 bg-transparent border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Email"
              id="email"
              // value={email}
              // onChange={onChange}
              required
            />
            <div className="relative mb-4 text-gray-100">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password (A-z,0-9)"
                // value={password}
                // onChange={onChange}
                className="w-full text-zinc-700 bg-transparent border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              />
              {showPassword ? (
                <AiFillEyeInvisible
                  className="absolute top-5 text-zinc-700 transform -translate-y-1/2 right-3 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              ) : (
                <AiFillEye
                  className="absolute transform -translate-y-1/2 right-3 top-5 text-zinc-700 text-xl cursor-pointer"
                  onClick={() => setShowPassword((prevState) => !prevState)}
                />
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Sign In
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/register"
          >
            Register Here
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;
