"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/store/slices/authSlice";

export default function PatientLoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const FAKE_USER = {
    email: "admin",
    password: "1234",
    name: "Admin",
  };

  const handleLogin = async () => {
    // Fake backend check
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch(
        setCredentials({
          user: { name: FAKE_USER.name },
          token: "abc123",
        })
      );

      // Navigate to patient home
      router.push("/doctorUi/home");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="bg-white/45 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h1 className="text-xl uppercase font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Doctor Login</h1>

        {error && (
          <p className="text-red-500 mb-4 text-center font-medium">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          onClick={handleLogin} // ✅ Just use onClick
          className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
