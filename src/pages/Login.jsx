import { auth } from "../utils/firebase.config";
import { useEffect, useState } from "react";
import profile from "../assets/profile.svg";
import { AiFillMail } from "react-icons/ai";
import { BiSolidKey } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    // email,
    // password,
  });
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    setTimeout(() => {
      navigate("/home");
    }, 600);
  };

  const notify = (message) => {
    toast.custom(
      <span className="absolute ease-in-out text-black bg-lime-200 rounded-xl border-2 border-lime-950 px-5 py-5">
        {message}
      </span>
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const loginAuthentication = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        notify("Logged in suucessfully!");
        navigateToHomePage();
        console.log(user);
        // ...
      })
      .catch((error) => {
        notify("Sorry, you entered an incorrect email adrress or password!");
        const errorCode = error.code;
        // const errorMessage = error.message;
        console.log(errorCode);
      });
  };

  return (
    <div className="relative bg-gray-400 w-screen h-full items-center text-center flex flex-col">
      <h1 className="text-lime-950 text-5xl text-center py-10 font-bold">
        photohaven.
      </h1>

      <img
        src={profile}
        alt="profile"
        className="w-[250px] h-[250px] rounded-full bg-white"
      />

      <form className="flex flex-col m-10  items-center">
        <div className="flex items-center justify-center">
          <span className="absolute flex justify-center items-center left-16 mb-8 lg:hidden">
            <AiFillMail className="text-lime-950 text-2xl " />
          </span>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full mb-8 items-center text-black py-4 px-16 bg-lime-200 border-lime-950 border-2 rounded-full"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="flex items-center justify-center">
          <span className="absolute flex justify-center items-center left-16 lg:hidden">
            <BiSolidKey className="text-lime-950 text-2xl " />
          </span>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full block items-center text-black py-4 px-16 bg-lime-200 border-lime-950 border-2 rounded-full"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </form>

      <button
        type="submit"
        className="flex text-center text-gray-200 bg-lime-950 py-5 px-28 lg:py-4 lg:px-20 rounded-full items-center hover:scale-75"
        onClick={(e) => {
          loginAuthentication(e);
        }}
      >
        <span className="md:px-8 font-semibold text-2xl lg:px-10">LOG IN</span>
      </button>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        }}
      />
    </div>
  );
};

export default Login;
