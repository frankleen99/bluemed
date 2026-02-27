"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "@/store/slices/authSlice";
// import { RootState, AppDispatch } from "@/store";

export default function PatientLogin() {

// USING REDUX (UNCOMMENT ABOVE IMPORTS AND DISPATCH)

//   const dispatch = useDispatch<AppDispatch>();
//   const { loading, error } = useSelector(
//     (state: RootState) => state.auth
//   );

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);

//   const [formError, setFormError] = useState("");

//   const validate = () => {
//     if (!email || !password) {
//       setFormError("Email and password are required");
//       return false;
//     }

//     const emailRegex = /\S+@\S+\.\S+/;

//     if (!emailRegex.test(email)) {
//       setFormError("Enter a valid email address");
//       return false;
//     }

//     if (password.length < 6) {
//       setFormError("Password must be at least 6 characters");
//       return false;
//     }

//     setFormError("");
//     return true;
//   };

//   const handleLogin = () => {
//     if (!validate()) return;

//     dispatch(
//       loginUser({
//         email,
//         password,
//         remember,
//       })
//     );
//   };

 const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(email)) {
      setError("Enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Dummy credentials
    if (email === "test@gmail.com" && password === "123456") {
      setError("");

      // Optional: save dummy session
      if (remember) {
        localStorage.setItem("patientAuth", "true");
      }

      router.push("/doctorUi/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-indigo-200 flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* LEFT SIDE - FORM */}
        <div className="flex items-center justify-center px-8 py-12 sm:px-16 lg:px-20">
          <div className="w-full max-w-md space-y-8">
            
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-slate-800">
                Sign In
              </h2>
              <p className="text-slate-500 text-sm mt-2">
                Access The Doctor Dashboard
              </p>
            </div>

            {/* FORM ERROR */}
            {/* {(formError || error) && (
              <div className="bg-red-100 text-red-600 text-sm px-4 py-3 rounded-lg">
                {formError || error}
              </div>
            )} */}
             {/* Error */}
            {error && (
              <div className="bg-red-100 text-red-600 text-sm px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Email */}
            <div>
              <label className="text-sm text-slate-600 block mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@gmail.com"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-slate-600 block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
                className="accent-indigo-500 w-4 h-4"
              />
              <span className="text-sm text-slate-600">
                Remember me
              </span>
            </div>

            {/* Button */}
            {/* <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-xl font-medium shadow-md disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Login"}
            </button> */}
              <button
              onClick={handleLogin}
              className="w-full bg-indigo-500 cursor-pointer hover:bg-indigo-700 text-white py-3 rounded-xl font-medium shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"           
            >
              Login
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE PANEL */}
        <div className="relative hidden lg:block">
          <Image
            src="/images/loginImg.webp"
            alt="Healthcare professional"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </div>
    </div>
  );
}
