"use client"

import IconSearch from "./svg-icons/IconSearch";

// import { CiSearch } from "react-icons/ci";

type Props = {
  setsearch: (type: string) => void;
  search: string;
};

export default function SearchArea({ setsearch, search }: Props) {
  return (
    <div className="flex items-center gap-1 w-full bg-gray-200 rounded-2xl px-4 py-3 border border-transparent   focus-within:border focus-within:border-gray-600">
      {/* <CiSearch size={20} /> */}
      <IconSearch/>
      <input
        value={search}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setsearch(e.target.value)
        }
        className="bg-transparent outline-none w-full"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
