"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Button(){
    const[buttonContent, setbuttonContent] = useState("Botão")

    const buttonChangeHandler = () =>{    
        const inputText = document.querySelector("#buttonContent")  as HTMLInputElement
        if(!inputText) return;
        const buttonValue: string = inputText.value.toString();
        setbuttonContent(buttonValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(buttonChangeHandler, 'Enter');
    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" className="border border-black rounded" name="" id="buttonContent" />
                <br />
                <button type="button" onClick={buttonChangeHandler} id="change-button-name" className="bg-purple-500 p-3 rounded">{buttonContent}</button>
            </form>
        </div>
    );
}