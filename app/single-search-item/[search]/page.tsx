"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import ResultContainer from "@/app/components/ResultContainer";
import { searchRepository } from "@/app/repositories/searchRepository";

type Props = {};

export default function Page({}: Props) {
  const pathname = usePathname();
  const currentWord = pathname.split("/")[2];

  const [nouns, setNouns] = useState([]);
  const [verbs, setVerbs] = useState([]);
  const [elements, setElements] = useState([]);

  const [fetching, setFetching] = useState(false);
  const [audio, setAudio] = useState("");
  const [isError, setisError] = useState(false);
  const [text, settext] = useState("");
  const [name, setname] = useState("");

  useEffect(() => {
    const fetchDefinition = async () => {
      setFetching(true);
      const res = await searchRepository.searchByInput(currentWord);
       setname(res?.data[0].word)
      settext(res?.data[0]?.phonetics[0]?.text);
      setAudio(res?.data[0]?.phonetics[0]?.audio);
      setNouns(res?.data[0]?.meanings[0]?.definitions);
      setElements(res?.data[0]?.meanings[0]?.definitions);
      setVerbs(res?.data[0]?.meanings[1]?.definitions);
      setFetching(false);
      res === undefined && setisError(true);
    };
    fetchDefinition();
  }, [currentWord]);

  const handleNounsOrVerbs = (type: string) => {
    setElements(type === "noun" ? nouns : type === "verb" ? verbs : nouns);
  };

  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => setPlaying(true));
    }
  };

  const pauseAudio = () => {
    setPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div className="  md:w-9/12 w-full  mt-16 mx-auto">
      <p className=" flex  text-2xl  text-black/90 font-medium  mb-4 ml-4">{name}</p>
      <ResultContainer
        playing={playing}
        elements={elements}
        audioRef={audioRef}
        audio={audio}
        pauseAudio={pauseAudio}
        playAudio={playAudio}
        handleNounsOrVerbs={handleNounsOrVerbs}
        fetching={fetching}
        isError={isError}
        text={text}
      />
      <div className=" px-5 py-3">
        <Link
          href={"/"}
          className=" w-max flex gap-1 hover:bg-black/80 duration-500 items-center rounded-xl bg-black text-white px-5 py-2">
          <span>{/* <GoArrowLeft /> */}</span> <button>Home</button>
        </Link>
      </div>
    </div>
  );
}
