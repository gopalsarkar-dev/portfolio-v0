import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center h-screen">
        <div className="text-xl text-center">
          Opps ! The Page You are Looking for is not available right now. 😱😱
        </div>
        <Link href="/" className="text-center underline">
          Go Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
