import { useEffect, useState } from "react";
import { GameRow } from "./gameRow";
import axios from "axios";


export const Game = () => {
    const [activeRow, setActiveRow] = useState(1);
    const [word, setWord] = useState("");
    const loadWord = async ()=>{
        const res = await axios.get(`http://localhost:8080/word`);
        setWord(res.data.word);
    };

    useEffect(()=>{
        loadWord();
    },[]);
    return (
        <main className="h-full w-full px-5 md:px-52 pt-5 flex flex-col gap-y-3">
            <GameRow word={word} row={1} canFocus={activeRow===1}/>
            <GameRow word={word} row={2} canFocus={activeRow===2}/>
            <GameRow word={word} row={3} canFocus={activeRow===3}/>
            <GameRow word={word} row={4} canFocus={activeRow===4}/>
            <GameRow word={word} row={5} canFocus={activeRow===5}/>
        </main>
    );
};
