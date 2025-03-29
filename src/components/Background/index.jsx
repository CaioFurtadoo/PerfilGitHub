import ellipse1 from "../../assets/Ellipse1.svg";
import ellipse2 from "../../assets/Ellipse2.svg";

export const Background = () => {
  return (
    <>
        <img className="z-10 w-[888px] absolute top-[-200px] right-[-100px]  animate-wiggle" src={ellipse1} alt="ellipse 1 image" />
        <img className="z-30 w-[500px] absolute top-[40px] left-[-20px]  animate-wiggle" src={ellipse2} alt="ellipse 2 image" />
    </>
  );
};
