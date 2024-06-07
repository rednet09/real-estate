import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center">
        <img src="./src/assets/logo.png" alt="logo" />
        <Button
          name="Contact Us"
          tailwindClasses="border border-black w-[216px] h-[44px] rounded-full font-bold"
        />
      </nav>
    </>
  );
};

export default Navbar;
