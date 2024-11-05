import ToggelTheme from "./ToggelTheme";

const Header = () => {
  return (
    <>
      <header className="border-b">
        <div className="container mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
          <div className="">Logo</div>
          <div className="">
            <ToggelTheme />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
