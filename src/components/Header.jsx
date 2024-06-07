import Button from "./Button";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header className="mx-auto">
        <Navbar />
        <section className="bg-[url('./assets/bg.png')] bg-cover bg-center bg-no-repeat w-full h-[1024px]">
          <div className="flex py-60 items-center flex-col gap-10">
            <h1 className="text-3xl font-bold text-center pt-14 px-4 w-1/2">
              Elevate{" "}
              <span className="text-[#0078FF]">Real Estate Success</span> with
              Osumare's Digital Expertise
            </h1>
            <p className="text-[#333333] px-10">
              Tailored Solutions for Thriving in the Digital Real Estate
              Landscape
            </p>
            <Button
              name="Get Started"
              tailwindClasses="bg-[#0078FF] w-[408px] rounded-full text-white font-bold p-2"
            />
          </div>
          <div className="mx-auto relative">
            <img
              src="./src/assets/HeaderImage.png"
              className="absolute top-60"
              alt="header image"
            />
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
