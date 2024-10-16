"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function ItemList(){
    const[liContent, setliContent] = useState("Mamão")
    const[li2Content, setli2Content] = useState("Melão")
    const[li3Content, setli3Content] = useState("Joaquim")

    const liChangeHandler = () =>{    
        const inputText = document.querySelector("#li-content")  as HTMLInputElement
        if(!inputText) return;
        const liValue: string = inputText.value.toString();
        setliContent(liValue);
    } 

    const li2ChangeHandler = () =>{    
        const inputText = document.querySelector("#li2-content")  as HTMLInputElement
        if(!inputText) return;
        const li2Value: string = inputText.value.toString();
        setli2Content(li2Value);
    } 

    const li3ChangeHandler = () =>{    
        const inputText = document.querySelector("#li3-content")  as HTMLInputElement
        if(!inputText) return;
        const li3Value: string = inputText.value.toString();
        setli3Content(li3Value);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(liChangeHandler, 'Enter');

    return(
        <div>
            <ul>
                <li>
                    {liContent}
                </li>
                <li>
                    {li2Content}
                </li>
                <li>
                    {li3Content}
                </li>
            </ul>
            <form onSubmit={submitHandler}>
                <input type="text" className="border border-black rounded m-2" name="" id="li-content" />
                <input type="text" className="border border-black rounded m-2" name="" id="li2-content" />
                <input type="text" className="border border-black rounded m-2" name="" id="li3-content" />
                <br />
                <button type="button" onClick={liChangeHandler} className="bg-purple-500 p-3 rounded m-2">Mudar conteúdo 1</button>
                <button type="button" onClick={li2ChangeHandler} className="bg-purple-500 p-3 rounded ml-14">Mudar conteúdo 2</button>
                <button type="button" onClick={li3ChangeHandler} className="bg-purple-500 p-3 rounded ml-14">Mudar conteúdo 3</button>
            </form>
        </div>
    );
}