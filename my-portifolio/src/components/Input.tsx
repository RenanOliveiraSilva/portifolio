import React from "react";

const Input = () => {
  return (
    <div className="shadow-lg flex gap-2 items-center bg-white p-2 hover:shadow-xl duration-300 hover:border-2 border-gray-400 group delay-200 rounded-md">
      <svg
        className="group-hover:rotate-[360deg] duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
      <input
        type="email"
        name="text"
        className="flex-1 focus:outline-none"
        placeholder="Email"
      />
    </div>
  );
};

export default Input;
