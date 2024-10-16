"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";


export function Title(){
    const[titleContent, setTitleContent] = useState("Titulo")

    const titleChangeHandler = () =>{    
        const inputText = document.querySelector("#title-content")  as HTMLInputElement
        if(!inputText) return;
        const titleValue: string = inputText.value.toString();
        setTitleContent(titleValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(titleChangeHandler, 'Enter');


    return(
        <div>
            <h1 className="text-5xl">{titleContent}</h1>
            <form onSubmit={submitHandler}>
                <input id="title-content" type="text" placeholder="Digite o novo título" className="border border-black rounded"/>
                <br />
                <button type="button" id="change-title-content" onClick={titleChangeHandler} className="bg-purple-500 p-3 rounded m-3">Mudar título</button>
            </form>
        </div>
    );
}