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
    <div className="w-screen h-screen flex items-start justify-center">
      <div className="bg-lime-950 relative h-full px-60 hidden lg:block">
        <img
          src={loginCover}
          alt="login cover"
          className="w-full h-full bg-cover bg-center"
        />
      </div>

      <div className="w-screen h-full flex flex-col bg-gray-400 px-40 items-center md:px-0 lg:w-full">
        <h1 className="text-lime-950 text-5xl text-center font-bold py-12">
          photohaven.
        </h1>
        <img
          src={profile}
          alt="profile"
          className="lg:w-[250px] lg:h-[250px] rounded-full bg-white"
        />
        <button
          type="submit"
          className="flex text-gray-200 bg-lime-950 mt-14 py-4 lg:py-3 px-24 lg:px-8 rounded-full items-center hover:scale-75"
          onClick={navigateToLoginPage}
        >
          <AiFillMail className="mx-4" />
          <span className="flex font-semibold truncate lg:text-clip">
            EMAIL LOGIN
          </span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
