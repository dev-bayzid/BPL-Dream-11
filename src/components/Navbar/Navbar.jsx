import dollarImg from "../../assets/dollar_1.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 ">
      <div className="flex-1 mx-16 justify-center items-center">
        <img src={logo} className=""></img>
      </div>
      <div className="flex justify-between items-center gap-2">
        <div className="">
          <ul className="flex justify-between items-center space-x-20">
            <li>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#fixture">Fixture</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#teams">Teams</a>
            </li>
            <li>
              {" "}
              <a href="#schedules">Schedules</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center mx-16 gap-2">
          <span>0 Coin</span>
          <img src={dollarImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
