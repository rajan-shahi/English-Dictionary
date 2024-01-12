"use client";
import Link from "next/link";
import Logo from "../../public/logo.jpg";
import Image from "next/image";

type Props = {
  search: string;
};

export default function LogoButton({ search }: Props) {
  return (
    <Link
      href={`/single-search-item/${search}`}
      className=" mt-24 flex justify-center"
    >
      <button disabled={search === ""} className=" w-full">
        <div className=" w-full flex  flex-col ">
          <div className=" absolute z-20 md:-mt-20  -mt-14 md:ml-16 ml-1   border-2 border-blue-600 rounded-full p-1 w-max">
            <Image
              className=" md:h-40 md:w-40 h-20 w-20 object-cover rounded-full"
              src={Logo}
              alt=""
            />
          </div>
          <div className=" z-10 md:h-32 h-28 ">
            <div className=" px-5 relative border rounded-full -rotate-3 hover:rotate-0 transition-all ease-out duration-75  bg-sky-400  py-5 md:py-10 flex flex-col gap-3">
              <div className=" flex gap-2 justify-end">
                <span className=" bg-white  rounded-full p-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                  >
                    <path d="M22.5 3.589a.5.5 0 00-.755-.43 7.938 7.938 0 01-2.266.912 4.662 4.662 0 00-3.238-1.29 4.731 4.731 0 00-4.707 5.135 11.527 11.527 0 01-7.717-4.18.5.5 0 00-.82.067 4.777 4.777 0 00-.633 2.377 4.724 4.724 0 00.762 2.579l-.06-.033a.504.504 0 00-.497.03.543.543 0 00-.247.458c-.004.118.003.237.022.353a4.692 4.692 0 001.818 3.383.5.5 0 00-.335.632 4.704 4.704 0 003.088 3.057 7.998 7.998 0 01-4.854.963.5.5 0 00-.332.917A12.442 12.442 0 008.468 20.5a12.299 12.299 0 0011.986-9.006c.339-1.137.512-2.318.514-3.505 0-.12 0-.245-.003-.372A5.37 5.37 0 0022.5 3.59zm-2.424 3.533a.498.498 0 00-.117.349 11.366 11.366 0 01-.464 3.741A11.174 11.174 0 018.468 19.5c-1.526 0-3.037-.305-4.443-.897a8.867 8.867 0 004.525-1.86.5.5 0 00-.3-.893A3.71 3.71 0 015.1 14c.425.001.847-.057 1.254-.174a.5.5 0 00-.042-.97 3.706 3.706 0 01-2.905-2.898 4.72 4.72 0 001.313.228.473.473 0 00.492-.35.5.5 0 00-.2-.567 3.696 3.696 0 01-1.648-3.09c0-.413.067-.823.2-1.213a12.515 12.515 0 008.54 3.995.45.45 0 00.409-.179c.1-.12.139-.281.103-.434a3.642 3.642 0 01-.1-.842A3.73 3.73 0 0116.24 3.78a3.68 3.68 0 012.71 1.179.499.499 0 00.462.148c.71-.14 1.4-.365 2.055-.671a4.92 4.92 0 01-1.392 2.686z" />
                  </svg>
                </span>
                <p className=" text-3xl text-white font-bold">capitech.nepal</p>
              </div>
              <p className=" flex justify-end md:px-8 px-4 -rotate-1  text-md text-white">
                Follow us on twitter for latest updates
              </p>
            </div>
          </div>
          <div className=" md:h-32 h-28 w-full bg-gray-200  md:-mt-28  -mt-24    rounded-full"></div>
        </div>
      </button>
    </Link>
  );
}
