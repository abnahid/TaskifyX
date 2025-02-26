/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@/components/ui/button";
import { HoverCard } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { FaCheck, FaGoogle, FaTimes } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { LuEye, LuEyeOff } from "react-icons/lu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./../context/AuthProvider";
import useAxiosPublic from "./../hooks/useAxiosPublic";
import { HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

export function RegisterForm({ className, ...props }) {
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const { createUser, updateUserProfile, setUser, googleLogin } =
    useContext(AuthContext);
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const axiosPublic = useAxiosPublic();

  const PASSWORD_REQUIREMENTS = [
    { regex: /.{6,}/, text: "At least 6 characters" },
    { regex: /[0-9]/, text: "At least 1 number" },
    { regex: /[a-z]/, text: "At least 1 lowercase letter" },
    { regex: /[A-Z]/, text: "At least 1 uppercase letter" },
  ];

  const STRENGTH_CONFIG = {
    colors: {
      0: "text-border",
      1: "text-red-500",
      2: "text-orange-500",
      3: "text-amber-500",
      4: "text-emerald-500",
    },
    texts: {
      0: "Enter a password",
      1: "Weak password",
      2: "Medium password!",
      3: "Strong password!!",
      4: "Very Strong password!!!",
    },
  };

  const calculateStrength = useMemo(() => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }));
    return {
      score: requirements.filter((req) => req.met).length,
      requirements,
    };
  }, [password]);

  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          navigate("/");
        });
      })
      .catch((error) => toast.error(`Google Login Failed: ${error.message}`));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (name.length < 5) {
      toast.error("Name should be more than 5 characters");
      return;
    }

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    const passwordStrengthScore = PASSWORD_REQUIREMENTS.filter((req) =>
      req.regex.test(password)
    ).length;

    if (passwordStrengthScore < 4) {
      toast.error("Password does not meet complexity requirements");
      return;
    }

    // Check if the user already exists
    axiosPublic
      .get(`/users/${email}`)
      .then((res) => {
        toast.error("User already exists. Try logging in.");
        navigate("/");
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          // Proceed only if user is not found (404)
          createUser(email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              updateUserProfile(name, photoUrl)
                .then(() => {
                  setUser(user);
                  const userInfo = { name, email };

                  // Create the user in the backend
                  axiosPublic
                    .post("/users", userInfo)
                    .then((res) => {
                      if (res.data.insertedId) {
                        Swal.fire({
                          position: "center",
                          icon: "success",
                          title: "User created successfully.",
                          showConfirmButton: false,
                          timer: 1500,
                        }).then(() => {
                          navigate("/");
                        });
                      } else {
                        toast.error("Failed to create user. Try again.");
                      }
                    })
                    .catch((err) => {
                      toast.error(`Error creating user: ${err.message}`);
                    });
                })
                .catch((err) => {
                  toast.error(`Error updating profile: ${err.message}`);
                });
            })
            .catch((err) => {
              toast.error(`Error creating user: ${err.message}`);
            });
        }
      });
  };



  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      onSubmit={handleSubmit}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create an account</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name">User Name</Label>
          <Input
            name="name"
            type="text"
            placeholder="Enter user name"
            required
          />

        </div>
        <div className="grid gap-2">
          <Label htmlFor="photoUrl">Photo URL</Label>
          <Input
            type="url"
            name="photoUrl"
            placeholder="Enter photo URL"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex justify-between">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <HoverCard openDelay={200}>
              <HoverCardTrigger>
                <IoMdInformationCircleOutline
                  size={20}
                  className={`cursor-pointer  ${STRENGTH_CONFIG.colors[calculateStrength.score]
                    } transition-all `}
                />
              </HoverCardTrigger>
              <HoverCardContent className="bg-background">
                <ul className="space-y-1.5" aria-label="Password requirements">
                  {calculateStrength.requirements.map((req, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      {req.met ? (
                        <FaCheck size={16} className="text-emerald-500" />
                      ) : (
                        <FaTimes
                          size={16}
                          className="text-muted-foreground/80"
                        />
                      )}
                      <span
                        className={`text-xs ${req.met ? "text-emerald-600" : "text-muted-foreground"
                          }`}
                      >
                        {req.text}
                        <span className="sr-only">
                          {req.met
                            ? " - Requirement met"
                            : " - Requirement not met"}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-invalid={calculateStrength.score < 4}
              aria-describedby="password-strength"
              className="w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-blue-700 transition"
            />
            <button
              type="button"
              onClick={() => setIsVisible((prev) => !prev)}
              aria-label={isVisible ? "Hide password" : "Show password"}
              className="absolute inset-y-0 right-0 outline-none flex items-center justify-center w-9 text-muted-foreground/80 hover:text-foreground"
            >
              {isVisible ? <LuEyeOff size={16} /> : <LuEye size={16} />}
            </button>
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
          <Button variant="outline" className="w-full" onClick={handleGoogle}>
            <FaGoogle />
            Login with Google
          </Button>
        </div>
        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Login here
          </Link>
        </div>
      </div>
    </form>
  );
}
