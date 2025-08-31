"use client";

import { useState } from "react";
import { LuShare2 } from "react-icons/lu";

function ShareButton({ id }) {
  const [copied, setCopied] = useState(false);

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(
        `http://localhost:3000/buy-residential/${id}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("خطا در کپی:", err);
    }
  };

  return (
    <div className="flex items-center justify-center cursor-pointer mb-5 shadow-custom rounded-[5px] p-[10px]">
      <LuShare2 className="ml-[10px] text-[1.2rem] text-mainBlue" />
      <button
        onClick={copyText}
        className="border-none bg-none text-gray h-5 transition-all ease-in duration-100 cursor-pointer hover:text-mainBlue"
      >
        {copied ? "اشتراک گذاری شد ✅" : " اشتراک گذاری کن 📋"}
      </button>
    </div>
  );
}

export default ShareButton;
