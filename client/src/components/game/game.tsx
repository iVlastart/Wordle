import { useState } from "react";

export const Game = () => {
  const [contents, setContents] = useState(Array(5).fill(""));

  const handleInput = (key: number, e: any) => {
    const input = e.target.value;
    const newContents = [...contents];
    newContents[key] = input;
    setContents(newContents);


    if (input && key + 1 < contents.length) {
      document.getElementById(`1-${key + 1}`)?.focus();
    }
  };

  const handleKeyDown = (key: number, e: any) => {
    if (e.key === "Backspace" && !contents[key]) 
    {
      document.getElementById(`1-${key - 1}`)?.focus();
    }
  };

  return (
    <main className="h-full w-full px-5 md:px-52 pt-5">
      <div className="flex flex-row justify-center w-full h-20 gap-x-3">
        {contents.map((val, key) => (
          <textarea
            id={`1-${key}`}
            key={key}
            className="border border-black w-full h-full text-7xl text-center capitalize resize-none"
            maxLength={1}
            value={contents[key]}
            onInput={(e) => handleInput(key, e)}
            onKeyDown={(e) => handleKeyDown(key, e)}
          />
        ))}
      </div>
    </main>
  );
};
