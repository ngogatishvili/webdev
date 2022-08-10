import React,{useContext} from "react";
import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ConversationContext=createContext();




export const ConversationProvider=({children})=>{
    const [conversations,setConversations]=useLocalStorage("conversations",[])


    const createConversation=(recipients)=>{
            setConversations(prevConv=>{
                return [...prevConv,{recipients,messages:[]}]
            })
    }
    return <ConversationContext.Provider value={{conversations,createConversation}}
    >{children}</ConversationContext.Provider>
}


export const useConversationContext=()=>{
    return useContext(ConversationContext)
}