import {createContext,useState,useEffect} from "react";

export const CounterContext = createContext();

export default function CounterContextProvider(props){
    const[add,setAdd] = useState(JSON.parse(window.localStorage.getItem('add')));

    function handleInc(e){
        e.preventDefault();
        setAdd(add+1)
    }
    
    useEffect(() => {
        window.localStorage.setItem('add', add);
      }, [add]);

    
    return(
        <CounterContext.Provider value={{add,handleInc}}>
            {props.children}
        </CounterContext.Provider>
    )
}

