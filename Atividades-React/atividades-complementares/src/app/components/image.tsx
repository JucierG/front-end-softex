"use client";
import React, { useState } from "react";
import { useOnKeyPress } from "../hooks/useOnKeysPress";

export function Image(){
    const[imageContent, setimageContent] = useState("https://br.web.img3.acsta.net/pictures/21/08/10/10/17/5059325.jpg")

    const imageChangeHandler = () =>{    
        const inputText = document.querySelector("#image-content")  as HTMLInputElement
        if(!inputText) return;
        const imageValue: string = inputText.value.toString();
        setimageContent(imageValue);
    } 

    function submitHandler(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
    }

    useOnKeyPress(imageChangeHandler, 'Enter');
    return(
        <div>
            <img src={imageContent} alt="Lusamine a mamãe do ano" />
            <form onSubmit={submitHandler}>
                <input type="text" className="border border-black rounded m-2" name="" id="image-content" />
                <br></br>
                <button type="button" onClick={imageChangeHandler} className="bg-purple-500 p-3 rounded m-2">Mudar imagem</button>
            </form>
        </div>
    );
}