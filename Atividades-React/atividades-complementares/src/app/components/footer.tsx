"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Footer(){
    const[footerContent, setFooterContent] = useState("Footer")

    const footerChangeHandler = () =>{    
        const inputText = document.querySelector("#footer-content")  as HTMLInputElement
        if(!inputText) return;
        const footerValue: string = inputText.value.toString();
        setFooterContent(footerValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(footerChangeHandler, 'Enter');
    return(
        <div>
            <footer>{footerContent}</footer>
            <form onSubmit={submitHandler}>
                <input type="text" className="border border-black rounded" name="" id="footer-content" />
                <br />
                <button type="button" onClick={footerChangeHandler} className="bg-purple-500 p-3 rounded">Mudar conteúdo do footer</button>
            </form>
        </div>
    );
}