"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Header(){
    const[headerContent, setHeaderContent] = useState("Site")
    const[ headerTitle, setHeaderTitle] = useState("Header site 1")

    const headerChangeTitle = () =>{    
        const inputText = document.querySelector("#header-title")  as HTMLInputElement
        if(!inputText) return;
        const titleValue: string = inputText.value.toString();
        setHeaderTitle(titleValue);
    } 

    const contentChangeHandler = () =>{    
        const inputText = document.querySelector("#header-content")  as HTMLInputElement
        if(!inputText) return;
        const headerValue: string = inputText.value.toString();
        setHeaderContent(headerValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(contentChangeHandler, 'Enter');
    return(
        <div className="w-[100%] ">
            <header title={headerTitle} className="bg-blue-400 p-0 h-24 flex gap-5 text-right w-[100%] m-0">
                <img className="w-11 h-11 m-6"  src="https://i.pinimg.com/originals/13/53/88/1353880277292407a9d87d0a273e6724.jpg" alt="" />
                <h1 className="mt-6 text-3xl">{headerContent}</h1>
                <h1 className="text-2xl ml-auto mt-6 mr-6">Sobre nós</h1>
            </header>
            <form onSubmit={submitHandler}>
                <input type="text" className="border border-black rounded m-2" name="" id="header-content" />
                <input type="text" className="border border-black rounded m-2" name="" id="header-title" />
                <br />
                <button type="button" id="change-header-content" onClick={contentChangeHandler} className="bg-purple-500 p-3 rounded m-2">Mudar conteúdo da header</button>
                <button type="button" id="change-header-content" onClick={headerChangeTitle} className="bg-purple-500 p-3 rounded m-2">Mudar conteúdo do title</button>
            </form>
        </div>
    );
}