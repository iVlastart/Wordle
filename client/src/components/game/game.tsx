import { useEffect, useState } from "react";
import { GameRow } from "./gameRow";
import axios from "axios";


export const Game = () => {
    const rows = Array(5).fill("");
    const [isActive, setIsActive] = useState(0);
    const [word, setWord] = useState("");
    const loadWord = async ()=>{
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/word`);
        setWord(res.data.word);
    };

    useEffect(()=>{
        loadWord();
    },[]);

    return (
        <main className="h-full w-full px-5 md:px-52 pt-5 flex flex-col gap-y-3">
            {rows.map((_, key) => (
                <GameRow word={word} key={key} row={key} canFocus={key===isActive} setIsActive={setIsActive}/>
            ))}
        </main>
    );
};
