import { useState } from "react";
import Link from "next/link";

export const Selector = () => {
  const [selection, setSelection] = useState([
    {type: 'leetcode', select: false},
    {type: 'productivity', select: false},
    {type: 'project', select: false},
  ]);

  const toggleSelect = (e) => {
    console.log(e.target.id);
    const buttonId = e.target.id;
    let newList = [...selection]; 
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].type === buttonId) {
        newList[i].select = !newList[i].select;
      }
    }
    setSelection(prev => newList);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="button-wrapper flex flex-row items-center gap-4 ">
        {selection.map((item) => {
          return (
          <button
            id={item.type}
            className={`rounded-xl border-1 border-black px-4 py-2 transition ease-in-out duration-200 ${item.select ? "bg-primary scale-110" : "bg-omeglebg opacity-80"}`}
            onClick={toggleSelect}
          >
            {item.type}
          </button>)
        })}
      </div>

      <div className="mt-16 flex flex-col items-center">
        <Link href='/chat'>
        <button className="rounded-xl border-1 bg-accent px-4 py-2 text-white font-semibold hover:bg-accentdark transition ease-in-out duration-500 ">
          Start Chatting
        </button>
        </Link>
      </div>
    </div>
  );
};
