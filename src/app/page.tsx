import { Button } from "@/components/ui/button";
import { BiSolidPhoneCall, BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="grid place-items-center h-[85dvh]">
        <div className="grid gap-10 place-items-center">
          <div className="sm:text-6xl text-center text-5xl font-bold bg-gradient-to-b from-neutral-500 to-neutral-200 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 ">
            Hi<span className="text-2xl">,</span> I am Gopal Sarkar
            <span className="text-2xl">,</span> Frontend
            <br className="" /> & Backend Developer.
          </div>

          <Image src="/gopal.png" alt="logo" width={200} height={200} />

          <div className="grid grid-flow-col gap-3 sm:gap-5">
            <Link href="tel: 7477757792">
              <Button size={"lg"} variant={"outline"}>
                <BiSolidPhoneCall />
              </Button>
            </Link>
            <Link href="mailto:gopalsarkar.dev@gmail.com">
              <Button size={"lg"} variant={"outline"}>
                <BiLogoGmail />
              </Button>
            </Link>
            <Link href="https://github.com/gopalsarkar-dev">
              <Button size={"lg"} variant={"outline"}>
                <FaGithub />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/gopalsarkar-dev">
              <Button size={"lg"} variant={"outline"}>
                <FaLinkedin />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
