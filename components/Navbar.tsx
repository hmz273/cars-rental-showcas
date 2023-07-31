import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => {
  const isUserLoggedIn = true;
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex-between sm:px-16 px-6 py-4 bg-transparent">
        <Link href="/" className="flex flex-center ">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>

        <div className="sm:flex hidden">
          {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
              <Link href="/dash">
                <CustomButton
                  title="Dashboard"
                  btnType="button"
                  containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                />
              </Link>
              <CustomButton
                title="Sign Out"
                btnType="button"
                containerStyles="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-3 py-2 text-center mr-2 mb-2 min-w-[130px]"
              />
              <div>
                <Image
                src="/discord.svg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile" />
              </div>
            </div>
          ) : (
            <CustomButton
              title="Sign in"
              btnType="button"
              containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
