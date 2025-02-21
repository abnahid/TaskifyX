import { RegisterForm } from "@/Components/register-form";
import Lottie from "lottie-react";
import { ArrowLeftFromLine } from "lucide-react";
import { Link } from "react-router-dom";
import LottieLogin from "../assets/lottie/Animation - 1740153654913.json";

export default function Register() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/">
            <div className="flex justify-center items-center gap-2"> <ArrowLeftFromLine />  <h1>Go Home</h1></div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Lottie
          animationData={LottieLogin}
          loop={true}
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
