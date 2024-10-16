"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Paragraph(){

    const[paragraphContent, setParagraphContent] = useState("Parágrafo")

    const paragraphChangeHandler = () =>{    
        const inputText = document.querySelector("#paragraph-content") as HTMLInputElement
        if(!inputText) return;
        const paragraphValue: string = inputText.value.toString();
        setParagraphContent(paragraphValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(paragraphChangeHandler, 'Enter');

    return(
        <div>
            <p>{paragraphContent}</p>
            <form onSubmit={submitHandler}> 
                <input type="text" className="border border-black rounded m-2" name="" id="paragraph-content" />
                <br></br>
                <button type="button" onClick={paragraphChangeHandler} className="bg-purple-500 p-3 rounded m-2">Mudar parágrafo</button>
            </form>
        </div>
    );
}