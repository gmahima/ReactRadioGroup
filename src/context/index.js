import React, {useState, createContext} from 'react'
export const RadioContext = createContext(null);
export function Provider(props){
    const [anime, setAnime] = useState([{title: 'naruto', id: '0naruto'}, {title: 'inuyasha', id: '1inuyasha'}, {title: 'shingeki no kyojin', id:'3snk'}])
    const [selected, setSelected] = useState('0')
    const handleSelection = (id) => {
        setSelected(id)
    }
    return(
        <RadioContext.Provider value={{
            anime: anime,
            selected: selected,
            actions: {
                select: handleSelection
            }
        }} >{props.children}</RadioContext.Provider>
    )
}