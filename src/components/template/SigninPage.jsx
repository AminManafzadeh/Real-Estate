"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { signIn } from "next-auth/react";
import Loading from "@/module/Loading";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignin = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-[90vh]">
      <h4 className="text-mainBlue font-semibold text-[2rem] mb-5">فرم ورود</h4>

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
        {loading ? (
          <>
            <Loading loading={loading} size="25" />
          </>
        ) : (
          <button
            onClick={handleSignin}
            type="submit"
            className="button hover:scale-105"
          >
            ثبت نام
          </button>
        )}
      </form>
      <p className="text-gray text-lg">
        حساب کاربری ندارید؟
        <Link
          className="text-mainBlue mr-[10px] border-b-[3px] border-b-gray"
          href="/signup"
        >
          ثبت نام
        </Link>
      </p>
    </div>
  );
}

export default SigninPage;
