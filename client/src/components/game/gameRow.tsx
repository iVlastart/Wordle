import { useEffect, useState, type Dispatch, type SetStateAction } from "react";

interface IGameRow{
    row: number,
    word: string,
    canFocus: boolean,
    setIsActive: Dispatch<SetStateAction<number>>
}

export const GameRow = ({row, word, canFocus, setIsActive}:IGameRow)=>{
    const [contents, setContents] = useState(Array(5).fill(""));
    const [styles, setStyles] = useState(Array(5).fill(""));
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

    if(e.key==="Enter" && contents[key]&&canFocus)
    {
      //verify the word
      e.preventDefault();
      const guess = contents.join("").toLowerCase();
      if(word==guess)
      {
        alert(`You guessed the word: ${word}`);
        return;
      }
      else
      {
        const wordArr = word.split("");
        const guessArr = guess.split("");
        const newStyles = [...styles];

        for(let i=0;i<wordArr.length;i++)
        {
          if(wordArr[i]===guessArr[i]) newStyles[i] = "bg-green-500";
          else if(wordArr.includes(guessArr[i])) newStyles[i] = "bg-yellow-500";
        }
        setStyles(newStyles);
      }
      //set the row to ++ here
      handleRowUpdate();
    }
  };
  const handleRowUpdate = ()=>{
    if(row<6) setIsActive(row+1);
  }

    useEffect(()=>{
      if(canFocus) document.getElementById(`${row}-0`)?.focus();
    },[canFocus, row]);
    return(
        <div className="flex flex-row justify-center w-full h-20 gap-x-3">
        {contents.map((val, key) => (
          <textarea disabled={!canFocus}
            id={`${row}-${key}`}
            key={key}
            className={`border border-black w-full h-full text-7xl text-center capitalize resize-none
                        ${styles[key]}`}
            maxLength={1}
            value={contents[key]}
            onInput={(e) => handleInput(key, e)}
            onKeyDown={(e) => handleKeyDown(key, e)}
          />
        ))}
      </div>
    )
};