import { useState } from "react";
import Link from "next/link";

export const Selector = () => {
  const [selection, setSelection] = useState([
    { type: "leetcode", select: false, id: 1 },
    { type: "productivity", select: false, id: 2 },
    { type: "project", select: false, id: 3 },
  ]);
  const sendData = () => {
    const selectedIds = selected.map((item) => item.id);
    console.log(selectedIds);

    const obj = JSON.stringify({ preferences: selectedIds });

    fetch("/api/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: obj,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const toggleSelect = (e) => {
    const buttonId = e.target.id;
    const newList = selection.map(item => ({
      ...item,
      select: item.type === buttonId
    }));
    setSelection(newList);
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="button-wrapper flex flex-row items-center gap-4 ">
        {selection.map((item) => (
          <button
            key={item.type}
            id={item.type}
            className={`rounded-xl border-1 border-black px-4 py-2 transition ease-in-out duration-200 ${item.select ? "bg-primary scale-110" : "bg-omeglebg opacity-80"}`}
            onClick={toggleSelect}
          >
            {item.type}
          </button>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center">
        <Link href='/chat'>
          <button className="rounded-xl border-1 bg-accent px-4 py-2 text-white font-semibold hover:bg-accentdark transition ease-in-out duration-500 ">
            Start Chatting
          </button>
        </Link>
        {selection.map((item) => {
          return (
            <button
              id={item.type}
              className={`border-1 rounded-xl border-black px-4 py-2 transition duration-200 ease-in-out ${item.select ? "scale-110 bg-primary" : "bg-omeglebg opacity-80"}`}
              onClick={toggleSelect}
            >
              {item.type}
            </button>
          );
        })}
      </div>

      <div className="mt-16 flex flex-col items-center">
        <div onClick={sendData}>
          <button className="border-1 rounded-xl bg-accent px-4 py-2 font-semibold text-white transition duration-500 ease-in-out hover:bg-accentdark ">
            Start Chatting
          </button>
        </div>
      </div>
    </div>
  );
};
