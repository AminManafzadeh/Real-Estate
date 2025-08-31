import { authOption } from "@/app/api/auth/[...nextauth]/route";
import SigninPage from "@/template/SigninPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

authOption;

async function Signin() {
  const session = await getServerSession(authOption);
  console.log(session);
  if (session) redirect("/");
  return <SigninPage />;
}

export default Signin;
