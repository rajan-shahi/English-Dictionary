import { useState } from "react";
import Loader from "./Loader";
import IconPause from "./svg-icons/IconPause";
import IconPlay from "./svg-icons/IconPlay";

export type Element = {
  definition: string;
  antonyms: any;
  synonyms: any;
};

type Props = {
  playing: boolean;
  pauseAudio: () => void;
  playAudio: () => void;
  handleNounsOrVerbs: (type: string) => void;
  elements: Element[];
  audioRef: React.RefObject<HTMLAudioElement>;
  audio: string;
  isError: boolean;
  fetching: boolean;
  text: string;
};

export default function ResultContainer({
  playing,
  pauseAudio,
  playAudio,
  handleNounsOrVerbs,
  elements,
  audioRef,
  audio,
  fetching,
  isError,
  text,
}: Props) {
  const [activeButton, setactiveButton] = useState("noun");

  return (
    <div className=" flex  justify-center">
      <div className=" flex flex-col gap-10  w-full">
        <div className=" flex flex-col gap-2 border border-gray-600 px-4 py-5 rounded-2xl">
          <div className=" py-3 flex gap-2">
            {playing ? (
              <button onClick={pauseAudio} className=" cursor-pointer">
                <IconPause />
              </button>
            ) : (
              <button
                disabled={audio === undefined}
                onClick={playAudio}
                className=" cursor-pointer"
              >
                <IconPlay />
              </button>
            )}

            <h1>{fetching ? "Loading.." : text}</h1>
          </div>

          <div className=" flex gap-3">
            <button
              onClick={() => {
                handleNounsOrVerbs("noun");
                setactiveButton("noun");
              }}
              className={`${
                activeButton === "noun"
                  ? "bg-black text-gray-100"
                  : "bg-gray-300 text-black  "
              }     text-gray-100  py-1  w-20 rounded-md`}
            >
              Noun
            </button>
            <button
              onClick={() => {
                handleNounsOrVerbs("verb");
                setactiveButton("verb");
              }}
              className={`${
                activeButton === "verb"
                  ? "bg-black"
                  : "bg-gray-300 text-black  "
              }     text-gray-100 py-1  w-20 rounded-md`}
            >
              Verb
            </button>
          </div>
          <div className=" flex flex-col gap-1">
            {elements?.map((item: Element, index: number) => (
              <p key={index}>
                {index + 1}. {item.definition}{" "}
              </p>
            ))}
          </div>

          <div className=" flex items-center justify-center">
            {fetching ? (
              <Loader />
            ) : isError && !elements ? (
              <p>OOps ! No word found</p>
            ) : null}
          </div>
        </div>
      </div>

      <div>
        <audio ref={audioRef} src={audio} />
      </div>
    </div>
  );
}
