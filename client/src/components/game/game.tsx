import { useState } from "react";
import { GameRow } from "./gameRow";

export const Game = () => {
  
    return (
        <main className="h-full w-full px-5 md:px-52 pt-5 flex flex-col gap-y-3">
            <GameRow word="Skibidi" row={1} canFocus={true}/>
            <GameRow word="Skibidi" row={2} canFocus={false}/>
            <GameRow word="Skibidi" row={3} canFocus={false}/>
            <GameRow word="Skibidi" row={4} canFocus={false}/>
            <GameRow word="Skibidi" row={5} canFocus={false}/>
        </main>
    );
};
