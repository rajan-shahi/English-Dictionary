"use client"

import { useEffect, useRef, useState } from "react";
import LogoButton from "./components/LogoButton";
import Navbar from "./components/Navbar";
import ResultContainer from "./components/ResultContainer";
import SearchArea from "./components/SearchArea";
import { searchRepository } from "./repositories/searchRepository";

type Props = {};

export default function Page({}: Props) {
  const [search, setsearch] = useState("");
  const [nouns, setNouns] = useState([]);
  const [verbs, setVerbs] = useState([]);
  const [elements, setElements] = useState([]);

  const [fetching, setFetching] = useState(false);
  const [audio, setAudio] = useState("");
  const [isError, setisError] = useState(false);
  const [text, settext] = useState("");

  useEffect(() => {
    const fetchDefinition = async () => {
      setFetching(true);
      const res = await searchRepository.searchByInput(search);
      settext(res?.data[0]?.phonetics[0]?.text);
      setAudio(res?.data[0]?.phonetics[0]?.audio);
      setNouns(res?.data[0]?.meanings[0]?.definitions);
      setElements(res?.data[0]?.meanings[0]?.definitions);
      setVerbs(res?.data[0]?.meanings[1]?.definitions);
      setFetching(false);
      res === undefined && setisError(true);
    };
    fetchDefinition();
  }, [search]);

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
    <div className=" md:w-9/12 w-full mx-auto flex flex-col gap-12">
      <Navbar />
      <SearchArea search={search} setsearch={setsearch} />
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

      <LogoButton search={search} />
    </div>
  );
}
