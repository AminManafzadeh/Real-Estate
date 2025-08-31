"use client";

import Loading from "@/module/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      toast.error("رمز و تکرار آن برابر نیست");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-type": "application/json" },
    });

    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/signin");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-mainBlue font-semibold text-[2rem] mb-5">
        فرم ثبت نام
      </h4>

      <form className="flex flex-col max-w-[700px] shadow-custom border-2 border-solid border-mainBlue p-10 rounded-[10px] mb-[30px]">
        <label className="label mb-[10px]" htmlFor="email">
          ایمیل
        </label>
        <input
          className="input w-[200px] md:w-[250px] mb-10 ltr: focus:border focus:border-solid focus:border-mainBlue outline-none"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="label mb-[10px]" htmlFor="password">
          رمز عبور
        </label>
        <input
          className="input w-[200px] md:w-[250px] mb-10 ltr: focus:border focus:border-solid focus:border-mainBlue outline-none"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="label mb-[10px]" htmlFor="rePassword">
          تکرار رمز عبور
        </label>
        <input
          className="input w-[200px] md:w-[250px] mb-10 ltr: focus:border focus:border-solid focus:border-mainBlue outline-none"
          id="rePassword"
          type="password"
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <>
            <Loading loading={loading} size="25" />
          </>
        ) : (
          <button
            onClick={handleSignup}
            type="submit"
            className="button hover:scale-105"
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-gray text-lg">
        حساب کاربری دارید؟
        <Link
          className="text-mainBlue mr-[10px] border-b-[3px] border-b-gray"
          href="/signin"
        >
          ورود
        </Link>
      </p>
    </div>
  );
}

export default SignupPage;
