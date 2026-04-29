import bannerImg from "../../../assets/bg-shadow.png"

const Banner = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;