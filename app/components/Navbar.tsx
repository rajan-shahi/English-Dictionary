import Image from "next/image";
import Logo from "../../public/logo.jpg";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className=" flex  py-5 pb-4 ">
      <div className=" md:w-9/12 w-full flex gap-2  items-center">
        <Image
          className="  h-12 w-12 object-cover cursor-pointer  rounded-full"
          src={Logo}
          alt=""
        />
        <p className=" text-black/80 text-lg font-medium">Capitech Dictionary</p>
      </div>
    </div>
  );
}
