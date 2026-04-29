import dollarImg from "../../assets/dollar_1.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex justify-between items-center gap-2">
        <span>0 Coin</span>
        <img src={dollarImg} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
