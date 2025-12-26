import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/logonobg.png";

function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    localStorage.setItem("username", name);
    navigate("/"); 
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex justify-center items-center h-150 w-125"
      >
        <div className="flex flex-col gap-5 h-auto w-80">
          <div className="w-full flex justify-center">
            <img src={logo} alt="Logo" className="h-30 w-30" />
          </div>

          <h1 className="text-3xl text-white font-bold text-center">
            Add Your Name
          </h1>

          <input
            type="text"
            placeholder="Your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="block w-full rounded-md bg-white/5 px-3 py-2 text-base text-white  outline-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:outline-indigo-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition font-medium"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </div>
  );
}

export default Login;
