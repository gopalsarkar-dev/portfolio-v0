import Link from "next/link";
import ToggelTheme from "./ToggelTheme";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="border-b fixed top-0 z-50 bg-transparent backdrop-blur-md w-full">
        <div className="container mx-auto flex max-w-screen-lg items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/favicon.ico"
              alt="portfolio-icon"
              width={28}
              height={28}
            />
            <div className="text-neutral-900 dark:bg-clip-text text-xl font-bold dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400">
              Gopal
            </div>
          </Link>
          {/* // Toggel Darkmode Buton */}
          <ToggelTheme />
        </div>
      </header>
    </>
  );
};

export default Header;
