import loginCover from "../assets/tablet.svg";
import profile from "../assets/profile.svg";
import { AiFillMail } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/login");
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

      <p className="text-black font-medium mx-10 my-16">
        Need a safe palce for your photos? We got you. Photohaven is an online
        image gallery where you can store and upload your favorite images.
      </p>

      <button
        type="submit"
        className="flex text-gray-200 bg-lime-950 mt-8 py-4 lg:py-3 px-24 lg:px-8 rounded-xl items-center hover:scale-75"
        onClick={navigateToLoginPage}
      >
        <span className="flex font-semibold truncate lg:text-clip">
          GET STARTED
        </span>
      </button>
    </div>
  );
};

export default LandingPage;
