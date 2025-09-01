import { useEffect, useState } from "react";

interface IGameRow{
    row: number,
    word: string,
    canFocus: boolean
}

export const GameRow = ({row, word, canFocus}:IGameRow)=>{
    const [contents, setContents] = useState(Array(5).fill(""));
    const handleInput = (key: number, e: any) => {
    const input = e.target.value;
    const newContents = [...contents];
    newContents[key] = input;
    setContents(newContents);


    if (input && key + 1 < contents.length&&canFocus) {
      document.getElementById(`${row}-${key + 1}`)?.focus();
    }
  };

  const handleKeyDown = (key: number, e: any) => {
    if (e.key === "Backspace" && !contents[key]&&canFocus) 
    {
      document.getElementById(`${row}-${key - 1}`)?.focus();
    }
  };
    return(
        <div className="flex flex-row justify-center w-full h-20 gap-x-3">
        {contents.map((val, key) => (
          <textarea
            id={`${row}-${key}`}
            key={key}
            className="border border-black w-full h-full text-7xl text-center capitalize resize-none"
            maxLength={1}
            value={contents[key]}
            onInput={(e) => handleInput(key, e)}
            onKeyDown={(e) => handleKeyDown(key, e)}
          />
        ))}
      </div>
    )
};