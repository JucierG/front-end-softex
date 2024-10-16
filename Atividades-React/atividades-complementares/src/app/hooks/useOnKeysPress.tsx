import { KeyboardEvent, useEffect } from "react";

export const useOnKeyPress = (callback: Function, targetKey: string) =>{
    useEffect(() => {
        const keyPressHandler = (event: any) => {
            if(event.key === targetKey){
                callback()
            }
        }
        window.addEventListener('keydown', keyPressHandler);
        return() =>{
            window.removeEventListener('keydown', keyPressHandler);
        }
    }, [callback, targetKey])
}