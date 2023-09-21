import { GoHome } from "react-icons/go";
import { BiSearch, BiUser, BiPlus } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const navigateToLandingPage = () => {
    setTimeout(() => {
      navigate("/");
    }, 600);
  };

  const logOut = () => {
    signOut(
      auth
        .onAuthStateChanged(() => {
          navigateToLandingPage();
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        })
    );
  };
  return (
    <div className="fixed w-full lg:w-full justify-between z-10">
      <div className="bg-lime-950 rounded-none w-screen flex justify-between lg:px-24">
        <h1 className="text-white text-5xl mt-3 font-bold hidden lg:block">
          photohaven.
        </h1>
        <div className="flex px-8 relative justify-between">
          <Link
            to="/home"
            className="text-center flex flex-col items-center py-4 px-8"
          >
            <GoHome className="text-center text-2xl" />
            <span className="">Home</span>
          </Link>

          <Link
            to="/"
            className="text-center flex flex-col items-center py-4 px-8"
          >
            <BiPlus className="text-center text-2xl" />
            <span>Add</span>
          </Link>

          <Link
            to="/"
            className="text-center flex flex-col items-center py-4 px-8"
            onClick={logOut}
          >
            <FiLogOut className="text-center text-2xl" />
            <span>LogOut</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
